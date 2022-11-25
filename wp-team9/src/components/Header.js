import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'

const Header = () => {

    return (
        <div style={{margin: 20 }}>
            <Link to={"/"}>
                <img src={process.env.PUBLIC_URL+"/image/title.png"} style={{width:"200px", height:"150px"}}></img>
            </Link>

        </div>
    );
}

export default Header;