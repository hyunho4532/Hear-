import { MeetingRoom } from "@mui/icons-material"
import { useState } from "react"

export function MeetingRoomDialog({
    open, 
    sidebarData, 
    setSidebarData
}: {
    open: any, 
    sidebarData: any, 
    setSidebarData: any
}) {

    const [meetingRoom, setMeetingRoom] = useState('');

    const addMeetingRoom = () => {
        setSidebarData([...sidebarData, {
            title: meetingRoom,
            icon: <MeetingRoom />,
            link: ''
        }])
    }

    const onChange = (event: any) => {
        setMeetingRoom(event.target.value);
    }

    return (
        <dialog className="Dialog" open={open}>
            <h2 className="DialogTitle">
                회의방 추가하기
            </h2>
            <div className="DialogContent">
                <h3>용도</h3>
                <select className="DialogSelect">
                    <option>1</option>
                </select>
            </div>
            <input className="DialogInput" 
                   placeholder="회의방 이름을 입력해주세요!"
                   onChange={onChange}  />
            <button className="DialogButton" 
                    onClick={() => addMeetingRoom()}>희의방 추가 완료</button>
        </dialog>
    )
}