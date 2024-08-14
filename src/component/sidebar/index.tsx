import '../../App.css'
import { SidebarData } from '../../config'
import { useState } from 'react';
import { MeetingRoomDialog } from '../dialog/MeetingRoom';
import { stateStore } from '../../entities/user';

export function Sidebar() {

    const [sidebarData, setSidebarData] = useState(SidebarData);
    const { open, setOpen } = stateStore();

    const meetingRoomClick = () => {
        setOpen(true);
    }

    return (
        <div className="Sidebar">
            <button className='SidebarButton' onClick={() => meetingRoomClick()}>회의방 새로 만들기</button>
            <ul className='SidebarList'>
                {sidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row">
                            <div id="icon">{val.icon}</div>
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    )
                })}
            </ul>

            
            { open && <MeetingRoomDialog open={open} sidebarData={sidebarData} setSidebarData={setSidebarData} /> }
        </div>
    )
}