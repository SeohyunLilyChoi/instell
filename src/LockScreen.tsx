import { BatteryFullIcon, WifiIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import message_logo from './assets/iphone-message.png';
import kakao_logo from './assets/kakao-logo.png';
import kakao_profile from './assets/kakao-profile.jpg';
import message_profile from './assets/message-profile.png';

type Message = {
  id: string;
  sender: string;
  content: string;
  time: string;
  isKakao?: boolean;
};

export default function LockScreen() {
  const [time, setTime] = React.useState(new Date());
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const messages: Message[] = [
    {
      id: '1',
      sender: '친구',
      content: '오랜만에 얼굴 좀 보자. 너무 방에만 있지 말고.',
      time: '37분 전',
      isKakao: true,
    },
    {
      id: '2',
      sender: '+82 1800-1112',
      content:
        '[Web발신]\n(광고) 쿠팡 중요 안내입니다.\n고객님 당첨 축하합니다! ...',
      time: '1시간 전',
    },
    {
      id: '3',
      sender: '엄마',
      content: '밥은 먹었니?',
      time: '어제 오후 8:46',
      isKakao: true,
    },
  ];

  return (
    <div className="flex h-screen bg-black justify-center items-center">
      <div className="flex-col w-[390px] h-screen mt-10 mb-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-600 to-teal-800 p-4 text-black">
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

        {/* Time Display */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-light mb-2">
            {time.toLocaleTimeString('ko-KR', {
              hour: 'numeric',
              minute: '2-digit',
              hourCycle: 'h23',
            })}
          </h1>
          <p className="text-lg">
            {time.toLocaleDateString('ko-KR', {
              month: 'long',
              day: 'numeric',
              weekday: 'long',
            })}
          </p>
        </div>

        {/* Notifications */}
        <div className="space-y-2 drop-shadow-xl">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => {
                if (message.id === '1') {
                  navigate(`/kakao`);
                }
              }}
              className="bg-white/30 backdrop-blur-lg rounded-2xl p-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300/30 rounded-full flex items-center justify-center">
                  {message.isKakao === true ? (
                    <div>
                      <img
                        src={kakao_logo}
                        className="absolute bottom-3 left-10 w-5 rounded-lg"
                      />
                      <img
                        src={kakao_profile}
                        className="w-12 rounded-full"
                        alt="Kakao"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        src={message_logo}
                        className="absolute bottom-8 left-10 w-5 rounded-lg"
                      />
                      <img
                        src={message_profile}
                        className="w-12 rounded-full"
                        alt="SMS"
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 pl-2">
                  <div className="flex justify-between items-start">
                    <span className="font-medium font-semibold">
                      {message.sender}
                    </span>
                    <span className="text-xs text-black">{message.time}</span>
                  </div>
                  <p className="text-sm mt-1 whitespace-pre-line">
                    {message.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
