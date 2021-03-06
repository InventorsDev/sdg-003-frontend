import "../../css/product.css";

const Product = ({ AddProductToCart, ...props }) => {
  return (
    <div>
      <div className="fruit-item" key={props.key}>
        <div className="item-cancel-btn"></div>
        <div className="fruit-img">
          <img src={props.imageURL} alt="" width="80%" />
        </div>
        <div className="fruit-text">
          <p className="fruit-name">{props.title}</p>
          <p className="fruit-amount">{props.qty} Basket full</p>
          <p className="fruit-price">₦{props.price}</p>
        </div>
        <div className="buy-btn" onClick={() => AddProductToCart(props.id)}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
};

// export default Products;
export default Product;
