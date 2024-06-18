import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Games from "./components/pages/Games"; // Import other pages similarly
import CoinFlip from "./components/pages/Games/CoinFlip"; // Import other pages similarly
import Plinko from "./components/pages/Games/Plinko"; // Import other pages similarly
import "./App.css";
import { ethers } from "ethers";

import contract1 from "../src/components/contracts/Contract1.json";

function App() {
  const [credits, setCredits] = useState(0);
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    // Connect to the wallet and get the address
    async function getAddress() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Error connecting to wallet:", error);
        }
      }
    }
    getAddress();
  }, []);

  useEffect(() => {
    const fetchUserCredits = async () => {
      if (walletAddress) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          contract1.address,
          contract1.abi,
          provider
        );
        const { chainId } = await provider.getNetwork();
        try {
          const credits = await contract.userCreds(walletAddress);
          console.log(`user details updated - 30sec`);
          // console.log(`credits => ${credits}`);
          // console.log(`wallet Address => ${walletAddress}`);
          // console.log(`chainID => ${chainId}`);
          setCredits(parseInt(credits));
        } catch (error) {
          console.error("Error fetching user credits:", error);
        }
      }
    };

    fetchUserCredits();
    const intervalId = setInterval(fetchUserCredits, 30000);

    return () => clearInterval(intervalId);
  }, [walletAddress]);
  return (
    <Router>
      <div className="app flex flex-col h-screen">
        <Navbar credits={credits} />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <main className="main-content flex-grow">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/games" element={<Games />} />
              <Route
                path="/coinflip"
                element={<CoinFlip />}
                credits={credits}
                setCredits={setCredits}
              />
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
