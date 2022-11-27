import React, { useEffect, useState } from 'react';
import '../css/Category.css';
import restaurant from '../dummy/restaurant.json';
import SimpleInfo2 from './SimpleInfo2';
import Header from './Header';
import { useLocation, Link } from 'react-router-dom';
import CategoryHeader from './CategoryHeader';

const CategoryMain = () => {
    
    
    return (
        <>
        <Header />
        <div class="entire">
        <CategoryHeader />
            <div class="imgView">
                <img class="img"src={process.env.PUBLIC_URL+"/image/category.png"} />
            </div>
        </div>
        </>
    );
    
}

export default CategoryMain;