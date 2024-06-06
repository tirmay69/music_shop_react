import Header from "./assets/Header/Header";
import Start from "./assets/Start/Start";
import Sale from "./assets/Sale/Sale";
import "./App.scss";
import Footer from "./assets/Footer/Footer";
// import "src/style.css";

function App() {
  return (
    <>
      <Header />
      <div className="Wrapper">
        <Start img="1" block="1" />
        <Sale name="Розпродаж" num1="0" num2="4" />
      </div>
      <img
        className="img-banner"
        src="./src/assets/img/співпраця.png"
        alt="1"
        srcset=""
      />
      <div className="Wrapper">
        <Sale num1="4" num2="8" />
      </div>
      <img
        className="img-banner"
        src="./src/assets/img/РЕКЛАМА.png"
        alt="1"
        srcset=""
      />
      <Footer />
    </>
  );
}

export default App;
