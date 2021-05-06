import "../market.css";
import LikeIcon2 from "./Icons/LikeIcon2";
import StarIcon2 from "./Icons/StarIcon2";
import StarIcon1 from "./Icons/StarIcon1";
import PriceIcon from "./Icons/PriceIcon";
import CartIcon2 from "./Icons/CartIcon2";
import ArrowRight from "./Icons/ArrowRight";
import { Link } from "react-router-dom";
import Loader from "./Icons/Loader"
const Market = ({ products, loading }) => {
  return (
    <div className="market">
      <div className="market-title">OUR MARKET</div>

      <div className="item-nav">
        <ul>
          <li className="market-nav active">ALL</li>
          <Link to="/product1">
            <li className="market-nav active">FRUITS</li>
          </Link>

          <Link to="/product2">
            <li className="market-nav active">BEANS</li>
          </Link>

          <Link to="/product2">
            <li className="market-nav active">GROUNDNUT OIL</li>
          </Link>

          <Link to="/product3">
            <li className="market-nav active">RICE</li>
          </Link>

          <Link to="/product3">
            <li className="market-nav active">NOODLES</li>
          </Link>

          <Link to="/product4">
            <li className="market-nav active">OTHERS</li>
          </Link>
        </ul>
      </div>

      <div className="">
        {loading ? (
          <Loader/>
        ) : (
          <div className="show-items">
            {products.map((product) => (
              <div className={`item item-${product.id}`} key={product.id}>
                <div className="item-img">
                  <img src={"/img_assets/orange.png"} alt="" />
                </div>
                <div className="item-txt">
                  <div className="name">{product.product_name}</div>
                  <div className="size">{product.quantity} baskets full</div>
                  <div className="price">₦{product.unit_price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <div className="item item-1">
          <div className="item-img">
            <img src="/img_assets/orange.png" alt="" />
          </div>
          <div className="item-txt">
            <div className="name">Tangerine</div>
            <div className="size">2 Basket full</div>
            <div className="price">₦7,500</div>
          </div>
        </div>
        <div className="item item-2">
          <div className="item-img">
            <img src="/img_assets/indomie.png" alt="" />
          </div>
          <div className="item-txt">
            <div className="name">Indomie noodles</div>
            <div className="size">3 cartons</div>
            <div className="price">₦6,500</div>
          </div>
        </div>
        <div className="item item-3">
          <div className="item-img">
            <img src="/img_assets/palm-oil.png" alt="" width="40%" />
          </div>
          <div className="item-txt">
            <div className="name">Palm oil</div>
            <div className="size">2 litres</div>
            <div className="price">₦1,500</div>
          </div>
        </div>
        <div className="item item-4">
          <div className="item-img">
            <img src="/img_assets/apple.png" alt="" />
          </div>
          <div className="item-txt">
            <div className="name">Apple</div>
            <div className="size">5 Basket full</div>
            <div className="price">₦37,500</div>
          </div>
        </div>
        <div className="item item-5">
          <div className="item-img">
            <img
              src="/img_assets/images__2_-removebg-preview.png"
              alt=""
              width="60%"
            />
          </div>
          <div className="item-txt">
            <div className="name">Rany red kidney beans</div>
            <div className="size">1kg</div>
            <div className="price">₦2,200</div>
          </div>
        </div>
        <div className="item item-6">
          <div className="item-img">
            <img src="/img_assets/images__14_-removebg-preview.png" alt="" />
          </div>
          <div className="item-txt">
            <div className="name">
              camelia red, white and brown kidney beans
            </div>
            <div className="size">1kg each</div>
            <div className="price">₦5,500</div>
          </div>
        </div> */}
      </div>

      <div className="offer">
        <p className="offer-text">Top Savers Today</p>
        <p className="percent">10% OFF</p>
      </div>

      <div className="discount-offer">
        <div className="d-item">
          <div className="d-item-top">
            <div className="percent-off">-20% OFF</div>

            <div className="like">
              <LikeIcon2 />
            </div>
          </div>

          <div className="item-picture">
            <img src="/img_assets/images__15_-removebg-preview.png" alt="" />
          </div>

          <div className="item-dscrpt">
            <div className="stars">
              <StarIcon2 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
            </div>
            <div className="item-d-name">
              Kings groundnut Oil <span>x2</span>
            </div>

            <div className="item-d-size">10 litres</div>

            <div className="item-d-price">
              <div className="price-rltd">
                <div className="price-text">₦25,000</div>
                <div className="price-icon">
                  <PriceIcon />
                </div>
              </div>

              <div className="add-btn">
                <CartIcon2 />
                <div className="add-btn-text">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item">
          <div className="d-item-top">
            <div className="percent-off">-20% OFF</div>

            <div className="like">
              <LikeIcon2 />
            </div>
          </div>

          <div className="item-picture">
            <img
              src="/img_assets/mama-gold-pack-removebg-preview 1.png"
              alt=""
              style={{ margin: "1.25rem 0" }}
            />
          </div>

          <div className="item-dscrpt">
            <div className="stars">
              <StarIcon2 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
            </div>
            <div className="item-d-name">
              Kings groundnut Oil <span>x2</span>
            </div>

            <div className="item-d-size">10 litres</div>

            <div className="item-d-price">
              <div className="price-rltd">
                <div className="price-text">₦25,000</div>
                <div className="price-icon">
                  <PriceIcon />
                </div>
              </div>

              <div className="add-btn">
                <CartIcon2 />
                <div className="add-btn-text">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item">
          <div className="d-item-top">
            <div className="percent-off">-20% OFF</div>

            <div className="like">
              <LikeIcon2 />
            </div>
          </div>

          <div className="item-picture">
            <img src="/img_assets/images__15_-removebg-preview.png" alt="" />
          </div>

          <div className="item-dscrpt">
            <div className="stars">
              <StarIcon2 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
            </div>
            <div className="item-d-name">
              Kings groundnut Oil <span>x2</span>
            </div>

            <div className="item-d-size">10 litres</div>

            <div className="item-d-price">
              <div className="price-rltd">
                <div className="price-text">₦25,000</div>
                <div className="price-icon">
                  <PriceIcon />
                </div>
              </div>

              <div className="add-btn">
                <CartIcon2 />
                <div className="add-btn-text">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item">
          <div className="d-item-top">
            <div className="percent-off">-20% OFF</div>

            <div className="like">
              <LikeIcon2 />
            </div>
          </div>

          <div className="item-picture">
            <img src="/img_assets/mama-gold25_2-removebg-preview.png" alt="" />
          </div>

          <div className="item-dscrpt">
            <div className="stars">
              <StarIcon2 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
              <StarIcon1 />
            </div>
            <div className="item-d-name">
              Kings groundnut Oil <span>x2</span>
            </div>

            <div className="item-d-size">10 litres</div>

            <div className="item-d-price">
              <div className="price-rltd">
                <div className="price-text">₦25,000</div>
                <div className="price-icon">
                  <PriceIcon />
                </div>
              </div>

              <div className="add-btn">
                <CartIcon2 />
                <div className="add-btn-text">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="market-footer">
        <p className="text">
          Agrico Market is an online store that provides with utmost quality,
          all edible food substances
        </p>
        <Link to="/product1">
          <div className="shop-btn">
            <p>Relax and Shop</p> <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Market;
