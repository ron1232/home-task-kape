import VIcon from "assets/images/v-icon.png";

const CardListItem = (item) => {
  return (
    <div className={`list-item ${item.glow ? "glow" : ""}`}>
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
  );
};

export default CardListItem;
