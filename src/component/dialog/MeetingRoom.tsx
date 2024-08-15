import { MeetingRoom } from "@mui/icons-material"
import { ChangeEvent, useState } from "react"
import { supabase } from "../../supabase";

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
    open, 
    sidebarData, 
    setSidebarData
}: MeetingRoomProps) {

    const [meetingRoom, setMeetingRoom] = useState('');

    const addMeetingRoom = async () => {

        console.log(meetingRoom);

        const { data, error } = await supabase.from('MeetingRoom').insert({ title: meetingRoom });
    
        if (error) {
            console.log("에러 발생" + error);
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMeetingRoom(event.target.value);
    }

    return (
        <dialog className="Dialog" open={open}>
            <h2 className="DialogTitle">
                회의방 추가하기
            </h2>
            <div className="DialogPurpose">
                <h3>용도 선택: </h3>
                <select className="DialogSelect">
                    <option>1</option>
                </select>
            </div>

            <div className="DialogMeeting">
                <h3>이름 입력: </h3>
                <input className="DialogInput" 
                   placeholder="회의방 이름을 입력해주세요!"
                   onChange={onChange}  />
            </div>

            <button className="DialogButton" 
                    onClick={() => addMeetingRoom()}>희의방 추가 완료</button>
        </dialog>
    )
}