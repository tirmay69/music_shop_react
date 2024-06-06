import "./StartSale.scss";

function StartSale() {
  return (
    <>
      <div className="WrapperStartSale">
        <div className="StartSale">
          <h1>Найкращі музичні товари в Україні!</h1>
          <p>
            Порвалися старі струни? Потрібна звукова карта? А може дуууже
            хочеться нову гітару?
          </p>
          <p>
            Хутчіш обирай потрібну категорію та отримай знижку 20% на перше
            замовлення!
          </p>
          <div className="btn-sale">
            <a href="/Catalog">В каталог</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartSale;
