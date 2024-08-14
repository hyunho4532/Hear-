import '../../App.css'
import { SidebarData } from '../../config'


export function Sidebar() {
    return (
        <div className="Sidebar">
            <ul>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}>
                            {" "}
                            <div>{val.icon}</div>{" "}
                             <div>
                                {val.title}
                             </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}