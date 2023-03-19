import Experts from "assets/images/experts.png";
import WindowsReport from "assets/images/windows-report.png";
import Softonic from "assets/images/softonic.png";
import Safety from "assets/images/safety.png";

const ExpertsSaying = () => {
  return (
    <div className="experts-saying">
      <div className="left-side">
        <h5 className="title">What the experts are saying about Intego</h5>
        <div className="items">
          <div className="item">
            <img src={WindowsReport} width={292} alt="" />
            <span>
              “Whether you have a high-end PC or a model that is several years
              old, Intego Antivirus will run smoothly on it and provide you with
              the best possible protection on the market”
            </span>
          </div>
          <div className="item">
            <img src={Softonic} width={274} alt="" />
            <span>
              “It offers secure PC protection while running smoothly on your
              system, so this is an excellent recommendation for any type of
              user.”
            </span>
          </div>
          <div className="item">
            <img src={Safety} width={234.15} alt="" />
            <span>
              “Intego Antivirus for Windows comes from a company that’s famous
              for its Mac security products. Intego is intuitive, extremely easy
              to set up, and it won’t slow down your PC”
            </span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img className="image" src={Experts} alt="" />
      </div>
    </div>
  );
};

export default ExpertsSaying;
