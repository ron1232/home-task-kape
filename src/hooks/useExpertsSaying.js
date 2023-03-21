import { useMemo } from "react";
import WindowsReport from "assets/images/windows-report.png";
import WindowsReportMobile from "assets/images/windows-report-mobile.png";
import Softonic from "assets/images/softonic.png";
import Safety from "assets/images/safety.png";
import SafetyMobile from "assets/images/safety-mobile.png";
import Comparitech from "assets/images/comparitech.png";

const useExpertsSaying = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        image: WindowsReport,
        imageMobile: WindowsReportMobile,
        width: 292,
        text: `“Intego’s Mac Internet Security X9 is our pick of the bunch, making it the best antivirus.”`,
        textMobile: `“Whether you have a high-end PC or a model that is several years
        old, Intego Antivirus will run smoothly on it and provide you with
        the best possible protection on the market”`,
      },
      {
        id: 2,
        image: Softonic,
        imageMobile: Comparitech,
        width: 274,
        text: `“We held Intego VirusBarrier up to the light and found it to be a strong Mac antivirus tool that focuses on keeping malware protection as simple as possible.”`,
        textMobile: `“It offers secure PC protection while running smoothly on your
        system, so this is an excellent recommendation for any type of
        user.”`,
      },
      {
        id: 3,
        image: Safety,
        imageMobile: SafetyMobile,
        width: 234.15,
        text: `“Intego Antivirus for Windows comes from a company that’s famous
        for its Mac security products. Intego is intuitive, extremely easy
        to set up, and it won’t slow down your PC”`,
        textMobile: `Premium Bundle X9 provides practically everything that a Mac user needs to keep their system running clean and safe. It can also scan for Windows and Linux malware, and the support resources the company provides are outstanding.`,
      },
    ],
    []
  );

  return data;
};

export default useExpertsSaying;
