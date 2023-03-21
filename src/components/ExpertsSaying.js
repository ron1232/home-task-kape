import Experts from "assets/images/experts.png";
import WindowsReport from "assets/images/windows-report.png";
import WindowsReportMobile from "assets/images/windows-report-mobile.png";
import Softonic from "assets/images/softonic.png";
import Safety from "assets/images/safety.png";
import SafetyMobile from "assets/images/safety-mobile.png";
import Comparitech from "assets/images/comparitech.png";
import useIsMobile from "hooks/useIsMobile";

const ExpertsSaying = () => {
  const isMobile = useIsMobile();

  return (
    <div className="experts-saying">
      <div className="left-side">
        <h5 className="title">What the experts are saying about Intego</h5>
        <div className="items">
          <div className="item">
            <img
              src={isMobile ? WindowsReportMobile : WindowsReport}
              width={isMobile ? null : 292}
              alt=""
            />
            <span>
              {isMobile
                ? `“Intego’s Mac Internet Security X9 is our pick of the bunch, making it the best antivirus.”`
                : `“Whether you have a high-end PC or a model that is several years
              old, Intego Antivirus will run smoothly on it and provide you with
              the best possible protection on the market”`}
            </span>
          </div>
          <div className="item">
            <img
              src={isMobile ? Comparitech : Softonic}
              width={isMobile ? null : 274}
              alt=""
            />
            <span>
              {isMobile
                ? `“We held Intego VirusBarrier up to the light and found it to be a strong Mac antivirus tool that focuses on keeping malware protection as simple as possible.”`
                : `              “It offers secure PC protection while running smoothly on your
              system, so this is an excellent recommendation for any type of
              user.”`}
            </span>
          </div>
          <div className="item">
            <img
              src={isMobile ? SafetyMobile : Safety}
              width={isMobile ? null : 234.15}
              alt=""
            />
            <span>
              {isMobile
                ? `
              “Intego Antivirus for Windows comes from a company that’s famous
              for its Mac security products. Intego is intuitive, extremely easy
              to set up, and it won’t slow down your PC”`
                : `
              “Premium Bundle X9 provides practically everything that a Mac user needs to keep their system running clean and safe. It can also scan for Windows and Linux malware, and the support resources the company provides are outstanding.”
              `}
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
