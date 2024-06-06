import Catalog from "../../pages/Catalog";
import Home from "../../pages/Home";
import "./Header.scss";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// import Payment from "../../pages/Payment";
// import About from "../../pages/About";
// import Contact from "../../pages/Contact";

function Header() {
  return (
    <>
      <div className="Header">
        <a className="Header-logo" href="/">
          <img src="./src/assets/img/title.svg" alt="1" />
        </a>
        <ul className="Header-list">
          <li className="Header-list-point">
            <a href="/Catalog">Каталог</a>
          </li>
          <li className="Header-list-point">
            <a href="/Payment">Оплата</a>
          </li>
          <li className="Header-list-point">
            <a href="/About">Про нас</a>
          </li>
          <li className="Header-list-point">
            <a href="/Contact">Контакти</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
