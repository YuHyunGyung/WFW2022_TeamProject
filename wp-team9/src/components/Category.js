import React, { useEffect, useState } from 'react';
import '../css/Category.css';
import restaurant from '../dummy/restaurant.json';
import SimpleInfo2 from './SimpleInfo2';
import Header from './Header';
import { useLocation, Link } from 'react-router-dom';
import CategoryHeader from './CategoryHeader';

const Category = () => {
    const path = useLocation().pathname;
    const index = path.split('/');
    console.log("ID : " + decodeURI(index[2]));
    const what = decodeURI(index[2]);
    const name = restaurant.list.filter((r) => (r.category) ===  what)
    //const img = restaurant.list.filter((r) => (r.category) === "중식" )
    console.log(name);
    console.log(name[1].rastaurant);
    console.log(name[1].rImg);
    
    
    return (
        <>
        <Header />
        <div class="entire">
        <CategoryHeader />
            <h3 style={{ textAlign: "center", fontSize:"50px" }}>{what}</h3>
            <div class="list">
                <div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"50px"}}><SimpleInfo2 name = {name[0].rastaurant} img={name[0].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"50px"}}><SimpleInfo2 name = {name[1].rastaurant} img={name[1].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"50px"}}><SimpleInfo2 name = {name[2].rastaurant} img={name[2].rImg}></SimpleInfo2></div>
                </div>
                <div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"50px"}}><SimpleInfo2 name = {name[3].rastaurant} img={name[3].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"50px"}}><SimpleInfo2 name = {name[4].rastaurant} img={name[4].rImg}></SimpleInfo2></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"50px"}}><SimpleInfo2 name = {name[5].rastaurant} img={name[5].rImg}></SimpleInfo2></div>
                </div>
            </div>
        </div>
        </>
    );
    
}

export default Category;