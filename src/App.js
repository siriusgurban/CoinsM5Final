import Homepage1 from "./assets/Homepage1";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CoinsShowAll from "./assets/CoinsShowAll";


function App() {
  return (
    <div className="App">
      <Homepage1></Homepage1>

      <Routes>
        <Route path="coinsallshow" element={<CoinsShowAll />} />
      </Routes>

    </div>
  );
}

export default App;
