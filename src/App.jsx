import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Purple from "./components/Purple"
import Home from "./components/Home";
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div id="container">
        <Navbar/>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
            <Route path="/purple" element={<Purple />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
