import "./Card.scss";
function Card(props) {
  return (
    <>
      <div className="Card">
        <div className="SalePrice">{props.discount + " грн"}</div>
        <div className="NotRelevantPrice">{props.crossed_price + " грн"}</div>
        <div className="Price">{props.price + " грн"}</div>
        <div className="imgWrapper">
          <img src={props.image} alt="1" />
        </div>

        <div className="CardDescription">
          <div className="Description">{props.name}</div>
          {/* <div className="BuyBotton">
            <img src="\src\assets\img\cart-svgrepo-com 1.svg" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
