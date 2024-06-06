import React, { Component } from "react";
import Header from "../assets/Header/Header";
import Start from "../assets/Start/Start";
import Footer from "../assets/Footer/Footer";
export default class Payment extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="Wrapper">
          <Start block="1" img="1" />

          <div className="Block">
            <img src="/src/assets/img/Payment.png" alt="1" />
            <h2>
              Правила проведення оплати та доставки при здійсненні покупок в
              інтернет-магазині rockhub.ua
            </h2>
            <div className="Block-Wrapper">
              <div className="Block-pay">
                <h1>Оплата</h1>
                <ul>
                  <li>
                    Онлайн – банківською картою будь-якого банку через сервіс
                    Liqpay.{" "}
                  </li>
                  <li>Готівкою – при отриманні замовлення в магазині.</li>
                  <li>
                    Післяплатою* – при отриманні замовлення у відділенні «Нової
                    Пошти» без комісії за перерахування коштів, тобто ви
                    оплачуєте тільки суму замовлення.
                  </li>
                  <p>
                    *Послуга післяплата доступна лише при замовленні на суму від
                    500 грн.
                  </p>
                </ul>
              </div>
              <div className="Block-delivery">
                <h1>Доставка по Україні</h1>
                <ul>
                  <li>
                    Платна доставка (за тарифами перевізника) до відділення
                    «Нової Пошти» – при замовленні на суму менше 5000 грн.
                  </li>
                  <li>
                    Безкоштовна доставка у відділення «Нової Пошти» – при
                    замовленні на суму понад 5000 грн.
                  </li>
                  <li>
                    Безкоштовна адресна доставка «Новою Поштою» – при замовленні
                    на суму понад 10000 грн
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
