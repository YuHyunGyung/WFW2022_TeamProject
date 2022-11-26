import React, { useEffect, useState } from 'react';
import '../css/Main.css';
import Header from './Header';

const Main = () => {

    return (
        <>
        <Header/>
        <div class="entire">
            <div class="imgView">
            <img class="img"src={process.env.PUBLIC_URL+"/image/main.png"} />
            </div>
        </div>
        </>
    );
}

export default Main;