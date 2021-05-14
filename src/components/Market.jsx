import "../market.css";
import LikeIcon2 from "./Icons/LikeIcon2";
import StarIcon2 from "./Icons/StarIcon2";
import StarIcon1 from "./Icons/StarIcon1";
import PriceIcon from "./Icons/PriceIcon";
import CartIcon2 from "./Icons/CartIcon2";
import ArrowRight from "./Icons/ArrowRight";
import { Link } from "react-router-dom";
import Loader from "./Icons/Loader";
import Svg from "../svg/vector3.svg";

const Market = ({ products, loading }) => {
  return (
    <div className="market">
      <div className="market-title">OUR MARKET</div>

      <div className="item-nav">
        <ul>
          <li className="market-nav active">ALL</li>
          <Link to="/products">
            <li className="market-nav active">FRUITS</li>
          </Link>

          <Link to="">
            <li className="market-nav active">GROUNDNUT OIL</li>
          </Link>

          <Link to="">
            <li className="market-nav active">RICE</li>
          </Link>

          <Link to="">
            <li className="market-nav active">OTHERS</li>
          </Link>
        </ul>
      </div>

      <div className="show">
       
          <div className="show-items">
            
              <div className={`item item-`} key="">
                <div className="item-img">
                  <img src="/img_assets/pinaple.png" width="60%" alt="" />
                </div>
                <div className="item-txt">
                  <div className="name">Fresh Pineapple</div>
                  <div className="size">20 baskets full</div>
                  <div className="price">₦40000</div>
                </div>
              </div>
            
          </div>
        
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

      {/* MOBILE VIEW FOR THE MARKET */}
      <div className="mobile-market">
        <div className="m-image">
          <img src={Svg} alt="" />
        </div>

        <div className="mobile-text">
          <h1>Relax and Shop</h1>

          <p>Agrico Market is an online store, that provides with utmost quality and quantity all raw food substances </p>
        </div>
      </div>
    </div>
  );
};

export default Market;
