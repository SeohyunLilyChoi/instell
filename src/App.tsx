import './reset.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import KakaoTalk from './KakaoTalk';
import LockScreen from './LockScreen';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/kakao" element={<KakaoTalk />} />
      </Routes>
    </BrowserRouter>
  );
};
