import "assets/scss/App.scss";
import CardsWrapper from "components/CardsWrapper";
import VirusReport from "components/VirusReport";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CardsWrapper />
      <VirusReport />
    </div>
  );
}

export default App;
