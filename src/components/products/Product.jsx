const Product = ({fruit, addToCart}) => {
    return (
      <div className="fruit-item" key={fruit.id}>
        <div className="item-cancel-btn"></div>
        <div className="fruit-img">
          <img src={fruit.url} alt="" width="70%" />
        </div>
        <div className="fruit-text">
          <p className="fruit-name">{fruit.product_name}</p>
          <p className="fruit-amount">{fruit.quantity} Basket full</p>
          <p className="fruit-price">₦{fruit.unit_price}</p>
        </div>
        <div className="buy-btn" onClick={addToCart}>
          <p>ADD TO CART</p>
        </div>
      </div>
    );
}

export default Product;