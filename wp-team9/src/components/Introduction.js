
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import restaurant from '../dummy/restaurant.json';
import userList from '../dummy/user.json';
import axios from 'axios';
import "../css/Introduction.css";
import SimpleMenu from './SimpleMenu';
import Header from './Header';
import SimpleInfo2 from './SimpleInfo2';
import CategoryHeader from './CategoryHeader';

const Introduction = () => {
    var path = useLocation().pathname;
    let navigate= useNavigate();
    console.log("주소 : " + decodeURI(path));
    const index = path.split('/');
    console.log("식당 : " + decodeURI(index[3]));

    const id = decodeURI(index[2]);
    const name = decodeURI(index[3]);
    var recent = null;
    
    
    const recents = userList.user.map((u) => {
        if(u.id === id)
            return
                if(recent != null)
                    recent = u.recent.join(", ")
        // 오류
    });
    

    console.log("최근 : " + recent)
    
    var address = null;
    var menu = null;
    var openTime = null;
    var closeTime = null;
    var breakTime = null;
    var dayOff = null;
    var tel = null;
    var lastOrder = null;

    var about = null;
    const addr = restaurant.list.map((r) => {
        if((r.rastaurant) === name)
            return about = r;
        // 오류
    })

    if(about != null){
        address = about.address;
        menu = () => {
            axios.get(about)
        }
        openTime = about.openTime;
        closeTime = about.closeTime;
        breakTime = () => {
            axios.get(about);
        }
        
        if(about.dayOff == null){
            dayOff = "연중무휴";
        }
        else
            dayOff = about.dayOff;
        tel = about.tel;
        lastOrder = () => {
            axios.get(about);
        }
    } 

    return (
        <>
        <Header />
        <div class="entire">
        <CategoryHeader />
            <h3 style={{fontWeight:"bold", fontSize:"30px", textAlign:"center"}}>{name}</h3>
            <div style={{border: "5px solid skyBlue", padding : "20px", margin:"30px", borderRadius:"30px", textAlign:"center"}}>
                <p><img src={process.env.PUBLIC_URL+"/image/map.png"} style={{marginRight:"10px"}}></img>  {address}</p>
                <p style={{fontWeight:"bold", fontSize:"30px", textAlign:"center", backgroundColor:"yellow", width:"80px", margin:"0 auto", marginBottom:"10px", borderRadius:"20px"}}>MENU</p>
                <div class="border" style={{display: "inline-block"}}>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}> <SimpleMenu name={about.menu.name[0]} price={about.menu.price[0]} img={about.menu.img[0]}></SimpleMenu></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}> <SimpleMenu name={about.menu.name[1]} price={about.menu.price[1]} img={about.menu.img[1]}></SimpleMenu></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}> <SimpleMenu name={about.menu.name[2]} price={about.menu.price[2]} img={about.menu.img[2]}></SimpleMenu></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}> <SimpleMenu name={about.menu.name[3]} price={about.menu.price[3]} img={about.menu.img[3]}></SimpleMenu></div>
                </div>
                
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}><p style={{margin:"0 auto"}}>OPEN</p><p>{openTime}</p></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}><p>CLOSE</p><p>{closeTime}</p></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}><p>BREAK</p><p>{about.breakTime.start + " ~ " + about.breakTime.end}</p></div>

                
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}><p>Last Order</p><p>{about.lastOrder.점심}</p></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"15px"}}><p>Last Order</p><p>{about.lastOrder.저녁}</p></div>                

               
                <p>휴무일 {dayOff}</p>
                <p>Tel {tel}</p>
            </div>
            <div class="bottom">
                <button class="back" onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
        </div>
        </>
    );
}

export default Introduction;