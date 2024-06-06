import "./Sale.scss";
import Card from "/src/assets/Card/Card";
import React, { Component, useEffect, useState } from "react";
function Sale(props) {
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
      <div className="WrapperSale">
        <div className="Sale">
          <h1>{props.name}</h1>
          <div className="WrapperCard">
            {itemData &&
              itemData
                .slice(props.num1, props.num2)
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
    </>
  );
}

export default Sale;
