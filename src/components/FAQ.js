import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="left-side">
        <h4 className="title">
          <span>Frequently</span>
          <span>Asked</span>
          <span>Questions</span>
        </h4>
        <span className="subtitle">
          Dicta omnes atomorum voluptatumdefinitionem petentium sit at, vel at
          quis corrumpit facilisi contentiones per.
        </span>
      </div>
      <div className="right-side">
        <Accordion />
      </div>
    </div>
  );
};

export default FAQ;
