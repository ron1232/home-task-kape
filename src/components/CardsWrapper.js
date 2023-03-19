import Card from "./Card";
import Essential from "assets/images/essential.png";
import Advanced from "assets/images/advanced.png";
import Extended from "assets/images/advanced.png";

const CardsWrapper = () => {
  return (
    <div className="cards-wrapper">
      <Card img={Essential} />
      <Card img={Advanced} />
      <Card img={Extended} />
    </div>
  );
};

export default CardsWrapper;
