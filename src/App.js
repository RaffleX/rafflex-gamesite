import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Games from "./components/pages/Games"; // Import other pages similarly
import CoinFlip from "./components/pages/Games/CoinFlip"; // Import other pages similarly
import Plinko from "./components/pages/Games/Plinko"; // Import other pages similarly
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <main className="main-content flex-grow">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/games" element={<Games />} />
              <Route path="/coinflip" element={<CoinFlip />} />
              <Route path="/plinko" element={<Plinko />} />

              {/* Add routes for other options */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
