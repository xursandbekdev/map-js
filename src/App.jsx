import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TaxiMap from "./pages/taxiMap";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taxi" element={<TaxiMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
