import React, { Component } from "react";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="Footer">
          <a className="Footer-logo" href="/">
            <img src="./src/assets/img/title2.svg" alt="1" />
          </a>
          <ul className="Footer-list">
            <li className="Footer-list-point">
              <a href="/Catalog">Каталог</a>
            </li>
            <li className="Footer-list-point">
              <a href="/Payment">Оплата</a>
            </li>
            <li className="Footer-list-point">
              <a href="/About">Про нас</a>
            </li>
            <li className="Footer-list-point">
              <a href="/Contact">Контакти</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
