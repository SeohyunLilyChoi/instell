import { BatteryFullIcon, ChevronLeft, WifiIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import KakaoIcon from './assets/kakao-logo.png';
import kakao_profile from './assets/kakao-profile.jpg';
import more from './assets/more.png';

const photos = [
  { id: '1', src: kakao_profile, alt: 'Photo 1' },
  { id: '2', src: KakaoIcon, alt: 'Photo 2' },
  { id: '3', src: kakao_profile, alt: 'Photo 3' },
];

export default function PhotoViewer() {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(
    photos.findIndex((photo) => photo.id === id),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentPhoto = photos[currentPhotoIndex];

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
    );
  };

  if (currentPhoto !== undefined) {
    return (
      <div className="flex h-screen w-screen bg-black justify-center items-center">
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

          <div className="flex pb-3 mb-4 items-center justify-between border-b-2">
            <ChevronLeft
              onClick={() => {
                navigate(-1);
              }}
            />
            <div className="ml-8 font-semibold">앨범</div>
            <div className="flex">
              <p className="px-2 text-sm bg-gray-200 rounded-full">편집</p>
              <div className="flex ml-3 p-1 w-5 h-5 items-center bg-gray-200 rounded-full">
                <img src={more}></img>
              </div>
            </div>
          </div>
          <div className="relative flex w-full overflow-hidden">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            >
              &lt;
            </button>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="w-full object-contain"
            />
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            >
              &gt;
            </button>
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
}
