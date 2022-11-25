import React, { useEffect, useState } from 'react';
import '../css/Main.css';

const Main = () => {

    return (
        <>
        <div class="entire">
            <h3 style={{ textAlign: "center" }}>Main</h3>
            <div class="imgView">
            <img class="img"src={process.env.PUBLIC_URL+"/image/main.png"} />
            </div>
        </div>
        </>
    );
}

export default Main;