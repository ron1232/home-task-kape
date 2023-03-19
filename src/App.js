import "assets/scss/App.scss";
import CardsWrapper from "components/CardsWrapper";
import ExpertsSaying from "components/ExpertsSaying";
import Footer from "components/Footer";
import VirusReport from "components/VirusReport";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CardsWrapper />
      <VirusReport />
      <ExpertsSaying />
      <Footer />
    </div>
  );
}

export default App;
