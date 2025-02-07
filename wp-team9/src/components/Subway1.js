import React, { useEffect, useState } from 'react';
import '../css/Subway.css';
import restaurant from '../dummy/restaurant.json';
import SimpleInfo2 from './SimpleInfo2';
import Header from './Header';
import Subway from './Subway';

const Subway1 = () => {
    const name = restaurant.list.filter((r) => (r.subway) === "한성대" )
    //const img = restaurant.list.filter((r) => (r.category) === "중식" )
    console.log(name);
    console.log(name[1].rastaurant);
    console.log(name[1].rImg);

    return(
        <>
        <Header />
        <Subway />
        <div class="entire">
            <h3 style={{ textAlign: "center" }}>한성대입구역</h3>
            <div class="list" style={{backgroundColor:"lightskyblue"}}>
                <div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo2 name = {name[0].rastaurant} img={name[0].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo2 name = {name[1].rastaurant} img={name[1].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo2 name = {name[2].rastaurant} img={name[2].rImg}></SimpleInfo2></div>
                </div>
                <div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo2 name = {name[3].rastaurant} img={name[3].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo2 name = {name[4].rastaurant} img={name[4].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo2 name = {name[5].rastaurant} img={name[5].rImg}></SimpleInfo2></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Subway1;