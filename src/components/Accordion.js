import { useMemo } from "react";
import AccordionCard from "./AccordionCard";

const Accordion = () => {
  const data = useMemo(
    () => [
      {
        title: "What are the system requirements for Intego antivirus",
        content: `
          System requirements for Intego Antivirus:
          <br/>
          Operating system:
          <br/>
          Windows 7 and above.
          <div class="seperator"/>
          Hardware:
          <br/>
          500 MB free drive space
          <br/>
          2 GB RAM
          <div class="seperator"/>
          Internet Connection - Required
          <br/>
          High-speed connection is highly recommended
        `,
      },
      {
        title: "Is the trial version completley free? What’s the catch?",
      },
      {
        title: "What happen when my trial period is over?",
      },
      {
        title: "in what payment methods can I use to purchase intego antivirus",
      },
      {
        title: "What if i purchase Intego's premium and then regret it?",
      },
    ],
    []
  );

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionCard {...item} />
      ))}
    </div>
  );
};

export default Accordion;
