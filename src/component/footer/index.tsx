import '../../App.css'
import { MeetingFeatureData } from '../../config'

export function Footer() {
    return (
        <>
            <footer className="Footer">
                <div className="FooterList">
                    { MeetingFeatureData.map((data: any, index: number) => (
                        <div className="FooterContent">
                            <p className="FooterIcon">{data.icon}</p>
                            <p>{data.title}</p>
                        </div>
                    ))}
                </div>
            </footer>
        </>

    )
}