import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {

    return (
        <>
        <div class="header">
            <div style={{display:"inline-block", margin:"10px"}}>
            <Link to={"/"}>
                <img src={process.env.PUBLIC_URL+"/image/main.png"} style={{width:"200px", height:"150px"}}></img>
            </Link>
            </div>
            <div style={{display:"inline-block", margin:"10px"}}>
            <button>한성대</button>
            </div>
            
        </div>
        </>
    );
}

export default Header;