import { BatteryFullIcon, WifiIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import dock from './assets/Dock.png';
import KakaoIcon from './assets/kakao-logo.png';
import PhotoIcon from './assets/photo-icon.png';

export default function HomeScreen() {
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

  return (
    <div className="flex h-screen bg-black justify-center items-center">
      <div className="w-[390px] h-screen mt-10 mb-10 rounded-xl bg-gradient-to-br from-purple-800 via-blue-800 to-teal-800 p-4 text-slate-200 font-normal font-SF">
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
        <div>
          <div className="flex">
            <div className="justify-items-center ml-1 mr-5 cursor-pointer">
              <img
                src={KakaoIcon}
                onClick={() => {
                  navigate(`/kakao`);
                }}
                className="w-16 rounded-xl mb-1"
              />
              <p>카카오톡</p>
            </div>
            <div className="justify-items-center cursor-pointer">
              <img src={PhotoIcon} className="w-16 rounded-xl mb-1" />
              <p>사진</p>
            </div>
          </div>
        </div>
        <img
          src={dock}
          className="fixed bottom-3 justify-self-center w-[360px]"
        />
      </div>
    </div>
  );
}
