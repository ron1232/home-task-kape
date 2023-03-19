import VIcon from "assets/images/v-icon.png";
import DollarSpin from "assets/images/dollar-spin.png";

const Card = ({ img }) => {
  return (
    <div className="card">
      <div className="discount">
        <span className="title">60%</span>
        <span className="subtitle">Discount</span>
      </div>
      <img className="card-image" src={img} alt="" />
      <div className="titles">
        <span className="title">Extended Protection</span>
        <span className="subtitle">Windows PC Antivirus</span>
      </div>
      <div className="price">
        <span className="title">Only $1.67/month</span>
        <div className="subtitle">
          Billed <span className="new-price"> $19.99 </span>{" "}
          <span className="old-price"> $49.99 </span> for the first 1 year
        </div>
      </div>
      <div className="buy-now">
        <button className="btn">Buy Now</button>
        <span className="subtitle">
          <img src={DollarSpin} alt="" />
          30-day money back guarantee
        </span>
      </div>
      <div className="seperator" />
      <div className="includes">
        <span className="title">Essential Protection includes:</span>
        <div className="list">
          <div className="list-item">
            <img className="list-item-image" src={VIcon} height={13} alt="" />
            <div className="list-item-text">
              <span className="text-bold">Powerful malware engine:</span>
              <span className="text">
                Adaptive, real-time malware engine monitors andeliminates
                threats before they reach your PC
              </span>
            </div>
          </div>
          <div className="list-item">
            <img className="list-item-image" src={VIcon} height={13} alt="" />
            <div className="list-item-text">
              <span className="text-bold">Easy to use, easy on your PC:</span>
              <span className="text">
                Intuitive and simple UI with light, customizable scans
              </span>
            </div>
          </div>
          <div className="list-item">
            <img className="list-item-image" src={VIcon} height={13} alt="" />
            <div className="list-item-text">
              <span className="text-bold">100% malware immunity:</span>
              <span className="text">
                Independent lab tests show that Intego eradicates 100% of
                malware
              </span>
            </div>
          </div>
          <div className="list-item">
            <img className="list-item-image" src={VIcon} height={13} alt="" />
            <div className="list-item-text">
              <span className="text-bold">Ransomware protection:</span>
              <span className="text">
                Protects your personal data from being hacked and encrypted for
                a ransom
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-card">
        Discount applicable for the first payment only
      </div>
    </div>
  );
};

export default Card;
