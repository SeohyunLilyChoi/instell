import { BatteryFullIcon, WifiIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import kakao_profile from './assets/kakao-profile.jpg';

export default function Album() {
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

  return (
    <div className="flex h-screen bg-black justify-center items-center">
      <div className="flex-col w-[390px] overflow-clip h-screen mt-10 mb-10 rounded-xl bg-white p-4 text-black ">
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

        <div className="mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0055ff"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
        <div className="mb-2 pb-3 pl-2 border-b-2 text-2xl font-bold">앨범</div>
        <div className="flex px-2 mb-3 items-end justify-between">
          <p className="text-lg font-semibold">나의 앨범</p>
          <p className="text-base text-blue-500 font-semibold">전체 보기</p>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <img
                src={kakao_profile}
                onClick={() => {
                  navigate(`/recentAlbum`);
                }}
                className="mb-2 w-[170px] h-[170px] rounded-xl"
              ></img>
              <p className="ml-1 text-base font-semibold text-gray-600">
                최근 항목
              </p>
              <p className="ml-1 text-base font-semibold text-gray-400">3</p>
            </div>
          </div>
          <div>
            <div>
              <div className="mb-2 w-[170px] h-[170px] rounded-xl bg-gray-300"></div>
              <p className="ml-1 text-base font-semibold text-gray-600">
                즐겨찾는 항목
              </p>
              <p className="ml-1 text-base font-semibold text-gray-400">3</p>
            </div>
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
