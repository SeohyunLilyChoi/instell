import { BatteryFullIcon, WifiIcon } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import KakaoIcon from './assets/kakao-logo.png';
import kakao_profile from './assets/kakao-profile.jpg';
import more from './assets/more.png';

const photos = [
  { id: '1', src: kakao_profile, alt: 'Photo 1' },
  { id: '2', src: KakaoIcon, alt: 'Photo 2' },
  { id: '3', src: kakao_profile, alt: 'Photo 3' },
];

export default function RecentAlbum() {
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

        <div className="flex pb-3 mb-4 items-center border-b-2">
          <ChevronLeft
            onClick={() => {
              navigate(`/album`);
            }}
          />
          <div
            onClick={() => {
              navigate(`/album`);
            }}
            className="grow"
          >
            앨범
          </div>
          <p className="px-2 text-sm bg-gray-200 rounded-full">선택</p>
          <div className="flex ml-3 p-1 w-5 h-5 items-center bg-gray-200 rounded-full">
            <img src={more}></img>
          </div>
        </div>

        <div className="flex gap-1">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => {
                navigate(`/photo/${photo.id}`);
              }}
              className="mb-2 ml-1 w-[80px] h-[80px] bg-gray-300 cursor-pointer"
              style={{
                backgroundImage: `url(${photo.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
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
