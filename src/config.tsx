import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PeopleIcon from '@mui/icons-material/People';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import './config.css'

export const SidebarData = [
    {
        title: "메인",
        icon: <HomeIcon />,
        link: "/home"
    }
]

export const PurposeData = [
    {
        title: "스터디",
        icon: "😎"
    },
    {
        title: "코드 리뷰",
        icon: "🛠"
    },
    {
        title: "업무 공유",
        icon: "📃"
    }
]

export const MeetingFeatureData = [
    {
        title: "카메라",
        icon: <CameraAltIcon className="Icons" />
    },
    {
        title: "캠",
        icon: <PeopleIcon className="Icons" />
    },
    {
        title: "반응",
        icon: <InsertEmoticonIcon className="Icons" />
    }
]