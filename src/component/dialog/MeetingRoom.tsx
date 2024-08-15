import { ChangeEvent, useState } from "react"
import { supabase } from "../../supabase";
import { PurposeData } from "../../config";

export type MeetingRoomProps = {
    open: boolean, 
    sidebarData: {
        title: string;
        icon: JSX.Element;
        link: string;
    }[], 
    setSidebarData: React.Dispatch<React.SetStateAction<{
        title: string;
        icon: JSX.Element;
        link: string;
    }[]>>
}

export function MeetingRoomDialog({
    open
}: MeetingRoomProps) {

    const [meetingRoom, setMeetingRoom] = useState('');
    const [purpose, setPurpose] = useState('')

    const addMeetingRoom = async () => {

        const { error } = await supabase.from('MeetingRoom').insert({ title: meetingRoom, purpose: purpose });
    
        if (error) {
            console.log("에러 발생" + error);
        }
    }

    const onChange = (key: number, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        switch(key) {
            case 1: {
                setMeetingRoom(event.target.value);
                break;
            }
            case 2: {
                setPurpose(event.target.value);
                break;
            }
        }
    }

    return (
        <dialog className="Dialog" open={open}>
            <h2 className="DialogTitle">
                회의방 추가하기
            </h2>
            <div className="DialogPurpose">
                <h3>용도 선택: </h3>
                <select className="DialogSelect"
                        onChange={(event) => onChange(2, event)}>
                    { PurposeData.map((data: any, index: number) => (
                        <option key={index} value={data.title}>{data.title} {data.icon}</option>
                    ))}
                </select>
            </div>

            <div className="DialogMeeting">
                <h3>이름 입력: </h3>
                <input className="DialogInput" 
                   placeholder="회의방 이름을 입력해주세요!"
                   onChange={(event) => onChange(1, event)}  />
            </div>

            <button className="DialogButton" 
                    onClick={() => addMeetingRoom()}>희의방 추가 완료</button>
        </dialog>
    )
}