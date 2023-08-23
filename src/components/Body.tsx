import React from "react";
import '../styles/body.css';
import Navbar from "./Navbar";
import photo from '../assets/investment1.png';

function Body () {
    return (
        <div className="main_body">
            <Navbar />
            <div className="investment_body" id="investment">
                <p className="body_text">Инвестиции</p>
                <p className='body_bigtext'>Инвестируйте в ценные бумаги</p>
                <p className='body_smalltext'>Открытие брокерского счета за 5 минут онлайн</p>
                <a href="#account" className="body_button">Открыть счет</a>
                <img className="body_img" src={photo} alt="investment"/>
            </div>
        </div>
    )
}

export default Body;