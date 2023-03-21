import DollarSpin from "assets/images/dollar-spin.png";
import DownArrow from "assets/images/down-arrow.png";
import useIsMobile from "hooks/useIsMobile";
import { useState } from "react";
import CardListItem from "./CardListItem";

const Card = (props) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true);

  const buyNow = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/user-pressed-buy-now`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="card">
      <div className="discount">
        <span className="title">{props.discount}</span>
        <span className="subtitle">Discount</span>
      </div>
      <img className="card-image" src={props.img} alt="" />
      <div className={`best-value ${props.bestValue ? "visible" : ""}`}>
        Best Value
      </div>
      <div className="titles">
        <span className="title">{props.titles.title}</span>
        <span className="subtitle">{props.titles.subtitle}</span>
      </div>
      <div className="price">
        <span className="title">{props.price.title}</span>
        <div
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: props.price.subtitle }}
        />
      </div>
      <div className="buy-now">
        <button
          onClick={() => buyNow()}
          className={`btn ${props.buyNowGlow ? "glow" : ""}`}
        >
          Buy Now
        </button>
        <span className="subtitle">
          <img src={DollarSpin} alt="" />
          30-day money back guarantee
        </span>
      </div>
      <div className="seperator" />
      <div className="includes">
        <span className="title" onClick={() => isMobile && setOpen(!open)}>
          {props.includes.title}{" "}
          {isMobile && <img className="down-arrow" src={DownArrow} alt="" />}
        </span>
        {open && (
          <div className="list">
            {props.includes.list.map((item) => (
              <CardListItem key={item.textBold} {...item} />
            ))}
          </div>
        )}
      </div>
      <div className="footer-card">
        Discount applicable for the first payment only
      </div>
    </div>
  );
};

export default Card;
