import React, { Component } from "react";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import Start from "../assets/Start/Start";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="Wrapper">
          <Start block="1" img="1" />

          <div className="Block">
            <img src="/src/assets/img/About1.png" alt="1" />
            <h2>
              Правила проведення оплати та доставки при здійсненні покупок в
              інтернет-магазині rockhub.ua
            </h2>
            <div className="Block-Wrapper">
              <div className="Block-description">
                <p>
                  Дякуємо Вам, що з безлічі музичних інтернет-магазинів Ви
                  зупинили Ваш вибір на Rockhub.ua!
                </p>
                <p>
                  Інтернет-магазин Muztorg.ua і магазин "Рокхаб" у Вінниці –
                  роздрібний напрямок компанії “AT-MT Trade”.
                </p>
                <p>
                  Компанія працює вже 5 років, і сьогодні офіційно представляє
                  на ринку України такі відомі бренди, як Fender, Gibson,
                  Ibanez, Marshall, VOX, Korg, TAMA, Mackie, JBL Professional і
                  багато інших.
                </p>
                <p>
                  Працюючи з нами, Ви отримуєте 100% впевненість в автентичності
                  придбаних продуктів і в тому, що Вам буде забезпечено повне
                  гарантійне обслуговування, передбачене виробником.
                </p>
                <p>
                  Звертайтесь до наших консультантів – вони обов’язково знайдуть
                  для Вас рішення.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
