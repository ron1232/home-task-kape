import useIsMobile from "hooks/useIsMobile";

const ExpertsSayingItem = (props) => {
  const isMobile = useIsMobile();

  return (
    <div className="item">
      <img
        src={isMobile ? props.imageMobile : props.image}
        width={isMobile ? null : props.width}
        alt=""
      />
      <span>{isMobile ? props.textMobile : props.text}</span>
    </div>
  );
};

export default ExpertsSayingItem;
