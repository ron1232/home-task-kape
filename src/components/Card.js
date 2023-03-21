import VIcon from "assets/images/v-icon.png";
import DollarSpin from "assets/images/dollar-spin.png";

const Card = (props) => {
  const buyNow = () => {
    fetch("http://localhost:5000/user-pressed-buy-now", {
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
        <span className="title">{props.includes.title}</span>
        <div className="list">
          {props.includes.list.map((item) => (
            <div
              key={item.textBold}
              className={`list-item ${item.glow ? "glow" : ""}`}
            >
              <img className="list-item-image" src={VIcon} height={13} alt="" />
              <div className="list-item-text">
                <span
                  className="text-bold"
                  style={{
                    color: item.textBoldColor ? item.textBoldColor : "initial",
                  }}
                >
                  {item.textBold}
                </span>
                {item.text && <span className="text">{item.text}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-card">
        Discount applicable for the first payment only
      </div>
    </div>
  );
};

export default Card;
