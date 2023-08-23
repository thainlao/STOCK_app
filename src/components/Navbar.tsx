import React from "react";
import '../styles/navbar.css';

function Navbar () {
    return (
        <div className="navbar"> 
            <div className="navbar_left">
                <a href="#investment" className="left_title">Инвестиции</a>
                <a href="#forinvestors" className="left_text">Капитал</a>
                <a href="#business" className="left_text">Бизнесу</a>
            </div>

            <div className="navbar_right">
                <a href="#account" className="right_text">Личный кабинет</a>
            </div>
        </div>
    )
}

export default Navbar;