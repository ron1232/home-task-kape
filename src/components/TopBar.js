import IntegoLogo from "assets/images/intego-logo.png";
import TrustPilot from "assets/images/trustpilot.png";
import FiveStars from "assets/images/five-stars.png";

const TopBar = () => {
  return (
    <div className="top-bar">
      <img src={IntegoLogo} alt="" />
      <div className="trustpilot">
        <img src={TrustPilot} alt="" />
        <div className="five-stars">
          <img className="five-stars-image" src={FiveStars} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
