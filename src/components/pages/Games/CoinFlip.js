// src/pages/CoinFlip.js
import React, { useState, useContext, useEffect } from "react";
import "./CoinFlip.css";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faBolt } from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";
import contract1 from "../../contracts/Contract1.json";
import contract2 from "../../contracts/Contract2.json";
// import ConnectionContext from "../ConnectionContext";

const CoinFlip = () => {
  // const { isConnected } = useContext(ConnectionContext);
  const isConnected = true;
  const [selection, setSelection] = useState(null);
  const [result, setResult] = useState(null);
  const [bet, setBet] = useState(1); // Default bet amount
  const [results, setResults] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [coinFace, setCoinFace] = useState("heads");
  const [showModal, setShowModal] = useState(false);
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

  const handleSelection = (option) => {
    setSelection(option);
  };

  const handleBetSelection = (amount) => {
    setBet(amount);
  };

  const handleFlip = async () => {
    console.log("handleFlip Called");

    if (!selection || bet === 0) {
      toast.error("Invalid Selection");
      return;
    }

    setIsFlipping(true);
    toast("Flipping!!!!!!", {
      icon: "👏",
    });
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contract2.address,
        contract2.abi,
        signer
      );

      const userSelection = selection === "heads" ? 0 : 1;
      const tx = await contract.startFlip(userSelection);
      const receipt = await tx.wait();

      const flipStartedEvent = receipt.events.find(
        (event) => event.event === "FlipStarted"
      );
      const sessionId = flipStartedEvent.args[1].toString();
      console.log(`Session Id => ${sessionId}`);
      toast(`Session Id : ${sessionId}`, {
        icon: "👏",
      });
      let pollSessionDetailsCount = 0;
      toast.loading(`Getting VRF Data from provider....`);
      const pollSessionDetails = async () => {
        pollSessionDetailsCount++;
        console.log(`pollSessionDetailsCount => ${pollSessionDetailsCount}`);
        const sessionDetails = await contract.sessionDetails(sessionId);
        if (sessionDetails.settled) {
          const outcome =
            sessionDetails.winningChoice === 0 ? "heads" : "tails";
          console.log(`Outcome =>${outcome}`);
          toast.dismiss();
          if (selection === outcome) {
            toast(`Congratulations You Won : It's ${outcome}`, {
              icon: "🤩",
              duration: 10000,
            });
          } else {
            toast(`Better Luck Next Time : It's ${outcome}`, {
              icon: "🥺",
              duration: 10000,
            });
          }

          setResult(outcome);
          setCoinFace(outcome);
          setIsFlipping(false);

          const newResult = {
            bet,
            selection,
            outcome,
            win: outcome === selection,
            timestamp: new Date().toLocaleTimeString(),
          };

          setResults([newResult, ...results]);
          return 200;
        } else {
          setTimeout(pollSessionDetails, 2000);
        }
      };

      // toast.promise(pollSessionDetails, {
      //   loading: `Getting VRF Data from provider....`,
      //   success: "Everything went smoothly.",
      //   error: "Uh oh, there was an error!",
      // });
      // const result =
      pollSessionDetails();
    } catch (error) {
      console.error("Error during coin flip:", error);
      toast.error(`Error : ${error.code}`);

      setIsFlipping(false);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="coinflip-container">
      <div className="game-section">
        <h1>CoinFlip Game</h1>
        <div className={`coin-container ${result && "stopped"}`}>
          <div className={`coin ${isFlipping ? "flipping" : coinFace}`}></div>
        </div>
        {/* {result && <p className="result">{result}</p>} */}
        {isConnected ? (
          <>
            <hr className="hr" />
            <p className="bet-amount-title">Bet Amount</p>
            <div className="bet-options">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((amount) => (
                <button
                  key={amount}
                  className={`bet-button ${bet === amount ? "selected" : ""}`}
                  onClick={() => handleBetSelection(amount)}
                >
                  <FontAwesomeIcon icon={faBolt} /> {amount} Credits
                </button>
              ))}
            </div>
            <div className="options">
              <button
                className={`option-button ${
                  selection === "heads" ? "selected" : ""
                }`}
                onClick={() => handleSelection("heads")}
              >
                <FontAwesomeIcon icon={faCoins} /> HEADS
              </button>
              <button
                className={`option-button ${
                  selection === "tails" ? "selected" : ""
                }`}
                onClick={() => handleSelection("tails")}
              >
                <FontAwesomeIcon icon={faCoins} />
                TAILS
              </button>
            </div>
            <button
              className="flip-button"
              onClick={handleFlip}
              disabled={isFlipping}
            >
              <FontAwesomeIcon icon={faCoins} /> Flip Now
            </button>
            {/* {result && <p className="result">Result: {result}</p>} */}
          </>
        ) : (
          <p>Please connect your wallet to play.</p>
        )}
      </div>

      <div className="results-section">
        <h2>Game Results</h2>
        <ul>
          {results.map((res, index) => (
            <li key={index} className={res.win ? "win" : "loss"}>
              Bet: {res.bet} | Selected: {res.selection} | Outcome:{" "}
              {res.outcome} | {res.win ? "Win" : "Loss"}
            </li>
          ))}
        </ul>
      </div>
      {/* Modal */}
      {showModal && (
        <div className={`modal ${showModal ? "show" : ""}`}>
          <div className="modal-content">
            <div className="modal-tx-content">
              <h2>{result === selection ? "You Won!" : "You Lost!"}</h2>
              <p>The coin landed on {result}.</p>
            </div>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinFlip;
