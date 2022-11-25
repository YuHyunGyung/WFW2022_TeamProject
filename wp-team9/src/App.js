import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/Introduction';
import Category from './components/Category';
import Main from './components/Main';
import Subway from './components/Subway';
import Header from './components/Header';

function App() {
 
  return(
    <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/subway" element={<Subway />} />
    <Route path="/main" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage/:id/:pw" element={<MyPage />} />
    <Route path="/category/:category" element={<Category />} />
    <Route path="/introduction/:id/:restaurant" element={<Introduction />} />
  </Routes>
  );
  
}

export default App;