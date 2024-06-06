import React, { Component, useEffect, useState } from "react";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import Card from "../assets/Card/Card";
import Start from "../assets/Start/Start";
import "./Catalog.scss";

function Catalog(props) {
  const [itemData, setData] = useState([]);
  useEffect(() => {
    let music_item = fetch("http://127.0.0.1:8080/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="Wrapper">
        <Start img="1" />
        <div className="WrapperSale">
          <div className="Sale">
            <div className="WrapperCard">
              {itemData &&
                itemData
                  // .slice(0, 4)
                  .map((item) => (
                    <Card
                      name={item.name}
                      price={item.price}
                      discount={item.discount}
                      crossed_price={item.crossed_price}
                      image={item.image}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Catalog;
