import '../../App.css'
import { SidebarData } from '../../config'

export function Sidebar() {
    return (
        <div className="Sidebar">
            <button className='SidebarButton'>회의방 새로 만들기</button>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
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
        </div>
    )
}