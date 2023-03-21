import { useEffect, useState } from "react";
import Essential from "assets/images/essential.png";
import Advanced from "assets/images/advanced.png";
import Extended from "assets/images/advanced.png";

const usePriceData = () => {
  const [priceData, setPriceData] = useState({
    essential: {
      img: Essential,
      discount: "60%",
      titles: {
        title: "Essential Protection",
        subtitle: "Windows PC Antivirus",
      },
      price: {
        title: "Only $1.67/month",
        subtitle: `Billed <span class="new-price">$19.99</span> <span class="old-price">$49.99</span> for the first 1 year`,
      },
      includes: {
        title: "Essential Protection includes:",
        list: [
          {
            textBold: "Powerful malware engine:",
            text: "Adaptive, real-time malware engine monitors andeliminates threats before they reach your PC",
          },
          {
            textBold: "Easy to use, easy on your PC:",
            text: "Intuitive and simple UI with light, customizable scans",
          },
          {
            textBold: "100% malware immunity:",
            text: "Independent lab tests show that Intego eradicates 100% of malware",
          },
          {
            textBold: "Ransomware protection:",
            text: "Protects your personal data from being hacked and encrypted for a ransom",
          },
        ],
      },
    },
    advanced: {
      img: Advanced,
      discount: "65%",
      titles: {
        title: "Advanced Protection",
        subtitle: "Online Privacy Features:",
      },
      price: {
        title: "Only $2.50/month",
        subtitle: `Billed <span class="new-price">$29.99</span> <span class="old-price">$84.99</span> for the first 1 year`,
      },
      includes: {
        title: "Advanced Protection includes:",
        list: [
          {
            textBold: "Essential  Protection Plan",
            glow: true,
          },
          {
            textBold: "Secure Wi-Fi protection:",
            text: "Secure your connection when connected to public Wi-Fi or low security networks",
          },
          {
            textBold: "Protect your Privacy:",
            text: "Keep your personal data safe & private",
          },
          {
            textBold: "Browse without boundaries:",
            text: "Intego VPN opens up the web for streaming & browsing",
          },
        ],
      },
    },
    extended: {
      img: Extended,
      discount: "70%",
      buyNowGlow: true,
      bestValue: true,
      titles: {
        title: "Extended Protection",
        subtitle: "Best Offer you will get!",
      },
      price: {
        title: "Only $2.08/month",
        subtitle: `Billed <span class="new-price">$49.99</span> <span class="old-price">$169.99</span> for the first 2 years`,
      },
      includes: {
        title: "Extended Protection includes:",
        list: [
          {
            textBold: "Get 70% OFF!",
            textBoldColor: "#F72928",
          },
          {
            textBold: "2 years protection",
          },
          {
            textBold: "Essential  Protection Plan",
            glow: true,
          },
          {
            textBold: "Advanced  Protection Plan",
            glow: true,
          },
        ],
      },
    },
  });

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/getPriceByBundle?bundle=*&currency=USD`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const copyedPriceData = JSON.parse(JSON.stringify(priceData));

        const bundles = ["essential", "advanced", "extended"];

        bundles.forEach((bundle) => {
          copyedPriceData[bundle].discount = `${data[bundle].discount}%`;
          copyedPriceData[
            bundle
          ].price.title = `Only $${data[bundle].monthlyPrice}/month`;
          copyedPriceData[
            bundle
          ].price.subtitle = `Billed <span class="new-price">${data[bundle].newPrice}</span> <span class="old-price">${data[bundle].oldPrice}</span> for the first 2 years`;
        });

        setPriceData(copyedPriceData);
      });
    // eslint-disable-next-line
  }, []);

  return {
    priceData,
  };
};

export default usePriceData;
