import LeftImage from "assets/images/features-left.png";
import RightImage from "assets/images/features-right.png";

const Features = () => {
  return (
    <div className="features">
      <div className="top">
        <img src={LeftImage} alt="" />
        <div className="text">
          <h5 className="title">24/7 PC Protection</h5>
          <span className="content">
            Using the latest technology, malware engine andbehavior analysis,
            Intego will protect your systemaround the clock to block Malware,
            Spyware, Adware,Ransomware and other threats - before they attack.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="text">
          <h5 className="title">Safely Browse and Shop Online</h5>
          <span className="content">
            You and your family will be protected from onlinedangers with Intego
            Web Shield. Phishing attacks, fakewebsites, and other malware will
            be blocked quickly so that your PC remains safe at all times.
          </span>
        </div>
        <img src={RightImage} alt="" />
      </div>
    </div>
  );
};

export default Features;
