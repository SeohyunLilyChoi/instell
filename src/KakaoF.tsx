import {
  ArrowUp,
  BatteryFullIcon,
  Calendar,
  ChevronLeft,
  MenuIcon,
  Plus,
  Search,
  WifiIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import kakao_profile from './assets/kakao-profile.jpg';

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
  const [time, setTime] = useState(new Date());
  const { id } = useParams();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const message = messages.find((msg) => msg.id === id);

  const getDayAgo = () => {
    const DayAgo = new Date(time);
    DayAgo.setDate(time.getDate() - 1);
    return DayAgo;
  };

  const getThreeDayAgo = () => {
    const ThreeDayAgo = new Date(time);
    ThreeDayAgo.setDate(time.getDate() - 3);
    return ThreeDayAgo;
  };

  if (message !== undefined) {
    return (
      <div className="flex h-screen bg-black justify-center items-center">
        <div className="flex-col w-[390px] overflow-clip h-screen mt-10 mb-10 rounded-xl bg-[#ABC0D1] p-4 text-black ">
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

          <div className="flex w-[390px] px-4 pb-6 justify-self-center justify-between items-center">
            <div
              onClick={() => {
                navigate(`/kakao`);
              }}
              className="flex cursor-pointer"
            >
              <ChevronLeft />
              <p className="text-lg">뒤로</p>
            </div>
            <div>
              <p className="text-lg">{message.sender}</p>
            </div>
            <div className="flex">
              <Search className="mr-3" />
              <MenuIcon />
            </div>
          </div>

          {/* Additional Message */}
          {message.id === '1' && ( // id가 '1'일 때만 렌더링
            <div>
              <p className="flex w-fit px-3 mb-3 justify-self-center items-center rounded-full text-sm bg-gray-400 opacity-60">
                <Calendar className="w-4 mr-2 opacity-65" />
                {getThreeDayAgo().toLocaleDateString('ko-KR', {
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long',
                })}
              </p>
              <div className="flex mb-6">
                <img
                  src={kakao_profile}
                  className="w-10 h-10 mr-3 rounded-xl"
                />
                <div>
                  <p className="font-semibold text-gray-700 mb-2">
                    {message.sender}
                  </p>
                  <p className="w-fit max-w-[200px] px-3 py-2 mb-2 rounded-xl bg-white">
                    요즘 뭐하고 지내냐
                  </p>
                </div>
              </div>
            </div>
          )}
          {message.id === '2' && ( // id가 '2'일 때만 렌더링
            <div>
              <p className="flex w-fit px-3 mb-3 justify-self-center items-center rounded-full text-sm bg-gray-400 opacity-60">
                <Calendar className="w-4 mr-2 opacity-65" />
                {getDayAgo().toLocaleDateString('ko-KR', {
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long',
                })}
              </p>
              <div className="flex mb-6">
                <img
                  src={kakao_profile}
                  className="w-10 h-10 mr-3 rounded-xl"
                />
                <div>
                  <p className="font-semibold text-gray-700 mb-2">
                    {message.sender}
                  </p>
                  <p className="w-fit max-w-[200px] px-3 py-2 mb-2 rounded-xl bg-white">
                    잘 지내고 있는거지?
                  </p>
                  <p className="max-w-[200px] px-3 py-2 rounded-xl bg-white">
                    반찬이라도 좀 가져다줄까?
                  </p>
                </div>
              </div>
              <div className="flex mb-6 justify-self-end">
                <div>
                  <p className="w-fit max-w-[200px] px-3 py-2 mb-2 rounded-xl bg-white bg-yellow-300">
                    됐어요
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Message Content */}
          <p className="flex w-fit px-3 mb-3 justify-self-center items-center rounded-full text-sm bg-gray-400 opacity-60">
            <Calendar className="w-4 mr-2 opacity-65" />
            {time.toLocaleDateString('ko-KR', {
              month: 'long',
              day: 'numeric',
              weekday: 'long',
            })}
          </p>
          <div className="flex">
            <img src={kakao_profile} className="w-10 h-10 mr-3 rounded-xl" />
            <div>
              <p className="font-semibold text-gray-700 mb-2">
                {message.sender}
              </p>
              <p className="max-w-[200px] px-3 py-2 rounded-xl bg-white">
                {message.content}
              </p>
            </div>
          </div>

          <div className="fixed bottom-0 inset-x-0 bg-white shadow-md rounded-b-xl flex w-[390px] px-4 justify-self-center justify-between items-center">
            <Plus className="mt-3 mb-8 rounded-full bg-gray-200" />
            <div className="mt-3 mb-8 mx-3 pl-3 py-1 grow bg-gray-200 text-slate-500 rounded-full">
              메시지 입력
            </div>
            <ArrowUp className="mt-3 mb-8 bg-yellow-300 rounded-full" />
          </div>
          <div
            onClick={() => {
              navigate(`/home`);
            }}
            className="fixed bottom-4 inset-x-0 justify-self-center w-[140px] border-b-4 border-black cursor-pointer"
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
