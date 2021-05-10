import Product1 from "./Product1"
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";


const Product = ({ fruits, addToCart }) => {
  return (
    <div>
      <Product1 fruits={fruits} />
      <Product2 />
      <Product3 />
      <Product4 />
    </div>
  );
};

export default Product;
