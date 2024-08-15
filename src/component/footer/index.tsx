import { useRef, useState } from 'react'
import '../../App.css'
import { MeetingFeatureData } from '../../config'

export function Footer() {

    const [peer, setPeer] = useState(null);
    const videoRef = useRef(null);

    const startScreenShare = async () => {
        try {
          // 화면 공유를 위한 미디어 스트림 요청
          const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
    
          // 새로운 WebRTC Peer 연결 생성
          const newPeer = new SimplePeer({
            initiator: true, // 이 peer가 연결을 시작할 것인지 여부
            stream: stream,  // 공유된 화면 스트림
            trickle: false   // 중간에 네트워크 트릭을 사용하지 않도록 설정
          });
    
          newPeer.on('signal', data => {
            // 시그널링 데이터를 서버로 전송
            fetch('/signal', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
          });
    
          setPeer(newPeer);
    
        } catch (err) {
          console.error("Error sharing screen:", err);
        }
      };

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

            <video ref={}
        </>

    )
}