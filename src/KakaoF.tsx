import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// 메시지 타입 정의
type Message = {
  id: string;
  sender: string;
  content: string;
  time: string;
  unreadCount: number;
};

// Props 타입 정의
type KakaoFProps = {
  messages: Message[];
};

export default function KakaoF({ messages }: KakaoFProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const message = messages.find((msg) => msg.id === id);

  if (message !== undefined) {
    return (
      <div className="flex h-screen bg-black justify-center items-center">
        <div className="flex-col w-[390px] overflow-clip h-screen mt-10 mb-10 rounded-xl bg-[#ABC0D1] p-4 text-black ">
          <div
            onClick={() => {
              navigate(`/kakao`);
            }}
            className="flex"
          >
            <ChevronLeft />
            뒤로
          </div>
          <div>{message.content}</div>
          <div
            onClick={() => {
              navigate(`/home`);
            }}
            className="fixed bottom-4 inset-x-0 justify-self-center w-[140px] border-b-4 border-black"
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>해당 메시지를 찾을 수 없습니다.</p>
      </div>
    );
  }
}
