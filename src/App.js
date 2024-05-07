import Home from "./components/Root";
import Gallery from "./components/Gallery";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/gallery" element={ <Gallery /> } />
      </Routes>
    </div>
  );
}

export default App;
