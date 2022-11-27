import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/Introduction';
import Category from './components/Category';
import Main from './components/Main';
import CategoryHeader from './components/CategoryHeader';
import Subway1 from './components/Subway1';
import Subway from './components/Subway';
import Header from './components/Header';
import CategoryMain from './components/CategoryMain';

function App() {
 
  return(
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/subway" element={<Subway />} />
    <Route path="/main" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage/:id/:pw" element={<MyPage />} />
    <Route path="/category/:what" element={<Category />} />
    <Route path="/category" element={<CategoryMain />} />
    <Route path="/introduction/:id/:restaurant" element={<Introduction />} />

  </Routes>
  );
  
}

export default App;