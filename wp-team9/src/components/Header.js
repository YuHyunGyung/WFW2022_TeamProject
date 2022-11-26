
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header>
    <div class="header">
      <div style={{display:"inline", padding:"10px",textAlign:"center"}}>
      <Link to={"/main"} >
          <img src={process.env.PUBLIC_URL+"/image/logo.png"} style={{width:"200px", height:"200px", marginTop:"10px",  textAlign:"center"}}></img>
      </Link>
      </div>
      <div style={{display:"inline-block"}}>
      <Link to={"/subway"} style={{textDecoration : "none", backgroundColor:"black"}}>
      <p class="menu" style={{backgroundColor:"white", borderRadius:"30px", fontSize:"30px", marginLeft:"30px", textAlign:"center"}}>
        지하철역별 맛집
      </p>
      </Link>
      </div>
      <div style={{display:"inline-block"}}>
      <Link to={"/category"} style={{textDecoration : "none"}}>
      <p class="menu" style={{backgroundColor:"white", borderRadius:"30px",fontSize:"30px", marginLeft:"30px", textAlign:"center", textDecorationLine: "none"}}>
        카테고리별 맛집
      </p>
      </Link>
      </div>
      <div style={{display:"inline-block", textAlign:"center"}}>
      <Link to={"/mypage/user1/1234"} style={{textDecoration : "none"}}>
      <p class="menu" style={{backgroundColor:"white", borderRadius:"30px",fontSize:"30px", marginLeft:"30px", textAlign:"center"}}>
        마이페이지
      </p>
      </Link>
      </div>
    </div>
    </header>
      
  );
}

export default Header;