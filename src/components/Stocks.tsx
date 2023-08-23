import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import '../styles/stock.css';
import photo1 from '../assets/1.png';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
import photo4 from '../assets/4.png';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  iconUrl: string;
}

const Stock = () => {

  return (
    <div className="stockbody" id='business'>
        <div className="stock_elements">
        <p style={{marginBottom: '40px'}} className="body_bigtext">Простые решения инвестиционных задач</p>

        <div className="stock_cards">
            <div className="stock_card_big">
              <div className="big_card_content">
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-sm lg:text-2xl">ИИС</p>
                  <p className="font-light text-sm lg:xl max-w-[400px]">Индивидуальный инвестиционный счет. Получите до 52 000 Р ща счет налогового вычета</p>
                </div>
              <img src={photo1} alt='ИИС' className="lg:w-64 lg:h-64 h-32 w-32"/>
              </div>
            </div>

            <div className="stock_small_cards">
              <div className="stock_card bg-[#f1ebd6]">

                  <div className="small_card_container">
                    <p className="text-stock font-semibold">Брокерский счет</p>
                    <p className="text-stock max-w-[200px]">Универсальный инструмент для инвестиций в любой валюте и на любой срок</p>
                  </div>

                  <img src={photo2} className="stock_img"/>
              </div>

              <div className="stock_card bg-[#eaecee]">
              <div className="small_card_container">
                    <p className="text-stock font-semibold">Инвесткопилка</p>
                    <p className="text-stock max-w-[200px]">Простота накопительного счета и доходность биржевых инвестиций</p>
                  </div>

                  <img src={photo3} className="stock_img_s"/>
              </div>

              <div className="stock_card bg-[#e2e8f0]">
              <div className="small_card_container">
                    <p className="text-stock font-semibold">Премиум-инвестиции</p>
                    <p className="text-stock max-w-[200px]">Помощь в создании портфеля, онлайн-консультации с экспертами инвестиций</p>
                  </div>

                  <img src={photo4} className="stock_img"/>
              </div>
            </div>


        </div>
        </div>
    </div>
  );
}

export default Stock;
