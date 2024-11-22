import { BatteryFullIcon, WifiIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import albamon_logo from './assets/albamon-logo.png';
import chatting from './assets/chatting.png';
import cu_logo from './assets/cu-logo.png';
import friend from './assets/friend.png';
import kakao_profile from './assets/kakao-profile.jpg';
import kakaopage_logo from './assets/kakaopage-logo.png';
import lotte_logo from './assets/lotte-logo.png';
import mega_logo from './assets/mega-logo.png';
import more from './assets/more.png';
import openchatting from './assets/openchatting.png';
import shopping from './assets/shopping.png';
import today_logo from './assets/today-logo.png';

// 메시지 타입 정의
type Message = {
  id: string;
  sender: string;
  content: string;
  time: string;
  unreadCount: number;
};

// Props 타입 정의
type KakaoTalkProps = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export default function KakaoTalk({ messages, setMessages }: KakaoTalkProps) {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleMessageClick = (messageId: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === messageId ? { ...message, unreadCount: 0 } : message,
      ),
    );
    navigate(`/kakaoF/${messageId}`);
  };

  const getTwoDaysAgo = () => {
    const twoDaysAgo = new Date(time);
    twoDaysAgo.setDate(time.getDate() - 2); // 현재 날짜에서 2일 빼기
    return twoDaysAgo;
  };

  return (
    <div className="flex h-screen bg-black justify-center items-center">
      <div className="flex-col w-[390px] overflow-clip h-screen mt-10 mb-10 rounded-xl bg-white p-4 text-black">
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg">
            {time.toLocaleTimeString('ko-KR', {
              hour: 'numeric',
              minute: '2-digit',
              hourCycle: 'h23',
            })}
          </span>
          <div className="flex items-center gap-1">
            <div className="flex">
              <WifiIcon className="mr-2" />
              <BatteryFullIcon />
            </div>
          </div>
        </div>
        <div className="text-3xl font-semibold">채팅</div>
        <div className="grow overscroll-none">
          {/* 메시지 목록 */}
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => {
                handleMessageClick(message.id);
              }}
              className="flex pt-7 cursor-pointer"
            >
              <img
                src={kakao_profile}
                className="w-12 mr-3 rounded-2xl"
                alt="Profile"
              />
              <div className="grow">
                <p className="text-m font-semibold text-gray-800">
                  {message.sender}
                </p>
                <p className="text-sm text-gray-500">{message.content}</p>
              </div>
              <div className="text-right">
                <p className="mb-1 text-xs text-gray-500">{message.time}</p>
                {message.unreadCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {message.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div className="flex pt-7">
            <img src={lotte_logo} className="w-12 mr-3 rounded-2xl"></img>
            <div className="grow">
              <p className="text-m font-semibold text-gray-800">롯데택배</p>
              <p className="text-sm text-gray-500">
                딩동 고객님께서 기다리시던 상품을 가지고 출...
              </p>
            </div>
            <p className="text-xs text-gray-500">어제</p>
          </div>
          <div className="flex pt-7">
            <img src={kakaopage_logo} className="w-12 mr-3 rounded-2xl"></img>
            <div className="grow">
              <p className="text-m font-semibold text-gray-800">카카오페이지</p>
              <p className="text-sm text-gray-500">
                보유하고 계신 이벤트 캐시가 오늘 만료됩...
              </p>
            </div>
            <div className="text-right">
              <p className="mb-1 text-xs text-gray-500">어제</p>
              <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                8
              </span>
            </div>
          </div>
          <div className="flex pt-7">
            <img src={today_logo} className="w-12 mr-3 rounded-2xl"></img>
            <div className="grow">
              <p className="text-m font-semibold text-gray-800">투데이 택배</p>
              <p className="text-sm text-gray-500">[배송 완료] ...</p>
            </div>
            <div className="text-right">
              <p className="mb-1 text-xs text-gray-500">
                {getTwoDaysAgo().toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </p>
              <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                2
              </span>
            </div>
          </div>
          <div className="flex pt-7">
            <img src={mega_logo} className="w-12 mr-3 rounded-2xl"></img>
            <div className="grow">
              <p className="text-m font-semibold text-gray-800">메가박스</p>
              <p className="text-sm text-gray-500">
                [메가박스] 휴면 계정 전환 안내
              </p>
            </div>
            <div className="text-right">
              <p className="mb-1 text-xs text-gray-500">
                {getTwoDaysAgo().toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </p>
              <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                1
              </span>
            </div>
          </div>
          <div className="flex pt-7">
            <img src={albamon_logo} className="w-12 mr-3 rounded-2xl"></img>
            <div className="grow">
              <p className="text-m font-semibold text-gray-800">알바몬</p>
              <p className="text-sm text-gray-500">
                [알바몬] 아이디 휴면 전환 안내
              </p>
            </div>
            <p className="mb-1 text-xs text-gray-500">
              {getTwoDaysAgo().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </p>
          </div>
          <div className="flex pt-7">
            <img src={cu_logo} className="w-12 mr-3 rounded-2xl"></img>
            <div className="grow">
              <p className="text-m font-semibold text-gray-800">알바몬</p>
              <p className="text-sm text-gray-500">
                [정기적 수신동의 확인 안내]
              </p>
            </div>
            <p className="mb-1 text-xs text-gray-500">
              {getTwoDaysAgo().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </p>
          </div>
        </div>
        <div className="fixed bottom-0 inset-x-0 bg-white shadow-md rounded-b-xl flex w-[390px] px-8 justify-center justify-self-center justify-between items-end">
          <div className="flex-col justify-items-center">
            <img src={friend} className="w-6 mb-1 pt-3 rounded-xl" />
            <p className="pb-8">친구</p>
          </div>
          <div className="flex-col justify-items-center">
            <img src={chatting} className="w-6 mb-1 pt-3 rounded-xl" />
            <p className="pb-8">채팅</p>
          </div>
          <div className="flex-col justify-items-center">
            <img src={openchatting} className="w-6 mb-1 pt-3 rounded-xl" />
            <p className="pb-8">오픈채팅</p>
          </div>
          <div className="flex-col justify-items-center">
            <img src={shopping} className="w-6 mb-1 pt-3 rounded-xl" />
            <p className="pb-8">쇼핑</p>
          </div>
          <div className="flex-col justify-items-center">
            <img src={more} className="w-6 mb-3 pt-3 rounded-xl" />
            <p className="pb-8">더보기</p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate(`/home`);
          }}
          className="fixed bottom-4 inset-x-0 justify-self-center w-[140px] border-b-4 border-black"
        ></div>
      </div>
    </div>
  );
}
