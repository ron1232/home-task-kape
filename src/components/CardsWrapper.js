import Card from "./Card";
import usePriceData from "hooks/usePriceData";

const CardsWrapper = () => {
  const { priceData } = usePriceData();

  return (
    <div className="cards-wrapper">
      {Object.keys(priceData).map((item) => (
        <Card key={item} {...priceData[item]} />
      ))}
    </div>
  );
};

export default CardsWrapper;
