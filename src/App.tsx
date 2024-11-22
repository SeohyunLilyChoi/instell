import './reset.css';
import './App.css';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './HomeScreen';
import KakaoF from './KakaoF';
import KakaoTalk from './KakaoTalk';
import LockScreen from './LockScreen';

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: '친구',
      content: '오랜만에 얼굴 좀 보자. 너무 방에만 있지 말고.',
      time: '37분 전',
      unreadCount: 2, // 메시지별 안 읽은 메시지 개수
    },
    {
      id: '2',
      sender: '엄마',
      content: '밥은 먹었니?',
      time: '어제',
      unreadCount: 1,
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route
          path="/kakao"
          element={<KakaoTalk messages={messages} setMessages={setMessages} />}
        />
        <Route path="/kakaoF/:id" element={<KakaoF messages={messages} />} />
      </Routes>
    </BrowserRouter>
  );
}
