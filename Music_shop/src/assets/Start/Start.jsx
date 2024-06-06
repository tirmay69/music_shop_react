// import Start from "./assets/Start/Start";
import "./Start.scss";
import StartSale from "/src/assets/StartSale/StartSale";

function renderImg(props) {
  if (props.img == 1) {
    return (
      <>
        <div className="Start-imgWrapper">
          <img src="\src\assets\img\title.svg" alt="." srcset="" />
        </div>
      </>
    );
  }
}
function renderBlock(props) {
  if (props.block == 1) {
    return (
      <>
        <StartSale />
      </>
    );
  }
}

function Start(props) {
  return (
    <>
      <div className="background">
        <div className="Start">
          {renderImg(props)}
          {/* <div className="Start-itemCounter">
            <img
              src="\src\assets\img\cart-svgrepo-com 1.svg"
              alt=""
              srcset=""
            />
            <p>Товарів у кошику: 0</p>
          </div> */}
        </div>
        {renderBlock(props)}
      </div>
    </>
  );
}

export default Start;
