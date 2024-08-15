import '../../App.css'
import { SidebarData } from '../../config'
import { useEffect, useState } from 'react';
import { MeetingRoomDialog } from '../dialog/MeetingRoom';
import { stateStore } from '../../entities/user';
import { supabase } from '../../supabase';
import BookIcon from '@mui/icons-material/Book';

export function Sidebar() {

    const [sidebarData, setSidebarData] = useState(SidebarData);
    
    const { open, setOpen } = stateStore();

    const meetingRoomClick = () => {
        setOpen(true);
    }

    useEffect(() => {
        const fetchMeetingRoom = async () => {
            const response = await supabase.from('MeetingRoom').select();
    
            if (response.data) {
                setSidebarData(prevSidebarData => [
                    ...prevSidebarData,
                    ...response.data.map((data) => ({
                        title: data.title,
                        icon: <BookIcon />,
                        link: '',
                    }))
                ]);
            }
        }

        fetchMeetingRoom();

    }, [])
    
    return (
        <div className="Sidebar">
            <button className='SidebarButton' onClick={() => meetingRoomClick()}>회의방 새로 만들기</button>
            <ul className='SidebarList'>
                { sidebarData.map((val, key) => {
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