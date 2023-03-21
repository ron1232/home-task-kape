import "assets/scss/App.scss";
import CardsWrapper from "components/CardsWrapper";
import ExpertsSaying from "components/ExpertsSaying";
import FAQ from "components/FAQ";
import Features from "components/Features";
import Footer from "components/Footer";
import VirusReport from "components/VirusReport";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/user-landed-in-page`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <CardsWrapper />
        <VirusReport />
        <ExpertsSaying />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
