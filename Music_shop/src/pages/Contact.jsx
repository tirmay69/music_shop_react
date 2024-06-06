import React, { Component } from "react";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import Start from "../assets/Start/Start";
import "./page.scss";
export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="Wrapper">
          <Start block="1" img="1" />

          <div className="Block">
            <img src="/src/assets/img/Contact.png" alt="1" />
            <h2>
              Правила проведення оплати та доставки при здійсненні покупок в
              інтернет-магазині rockhub.ua
            </h2>

            <div className="Block-description-contact">
              <div className="Block-locate">
                <h2>Наше розташування</h2>
                <div className="Block-icon-info">
                  <div className="Block-icon-info-img">
                    <img
                      src="/src/assets/img/locateICON.png"
                      alt=""
                      srcset=""
                    />
                  </div>

                  <p>м. Вінниця, вулиця Зодчих, 3</p>
                </div>
                <div className="Block-icon-info">
                  <div className="Block-icon-info-img">
                    <img src="/src/assets/img/phoneICON.png" alt="" srcset="" />
                  </div>

                  <p>(096)123-4567, (064)123-4567</p>
                </div>
                <div className="Block-icon-info">
                  <div className="Block-icon-info-img">
                    <img src="/src/assets/img/mailICON.png" alt="" srcset="" />
                  </div>

                  <p>shopmail@rockhub.com</p>
                </div>
              </div>
              <div className="Block-schedule">
                <h2>Розклад роботи</h2>
                <p>Пн-Пт: з 10:00 до 22:00</p>
                <p>Сб: з 11:00 до 21:00</p>
                <p>Нд: з 12:00 до 18:00</p>
              </div>
              <div className="Block-map">
                <img src="/src/assets/img/map.png" alt="1" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
