import PlusIcon from "assets/images/plus.png";
import MinusIcon from "assets/images/minus.png";
import { useState } from "react";

const AccordionCard = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`accordion-card ${open ? "open" : ""}`}>
        <div className="btn" onClick={() => content && setOpen(!open)}>
          <img
            src={open ? MinusIcon : PlusIcon}
            alt=""
            className="plus-minus"
          />
        </div>
        {title}
      </div>
      {open && (
        <div
          className="accordion-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  );
};

export default AccordionCard;
