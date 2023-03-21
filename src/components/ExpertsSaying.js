import Experts from "assets/images/experts.png";
import useExpertsSaying from "hooks/useExpertsSaying";
import ExpertsSayingItem from "./ExpertsSayingItem";

const ExpertsSaying = () => {
  const data = useExpertsSaying();

  return (
    <div className="experts-saying">
      <div className="left-side">
        <h5 className="title">What the experts are saying about Intego</h5>
        <div className="items">
          {data.map((item) => (
            <ExpertsSayingItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="right-side">
        <img className="image" src={Experts} alt="" />
      </div>
    </div>
  );
};

export default ExpertsSaying;
