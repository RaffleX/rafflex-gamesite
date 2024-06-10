// src/pages/CoinFlip.js
import React, { useState } from "react";
import "./CoinFlip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faBolt } from "@fortawesome/free-solid-svg-icons";

const CoinFlip = () => {
  const isConnected = true;
  const [selection, setSelection] = useState(null);
  const [result, setResult] = useState(null);
  const [credits, setCredits] = useState(100);
  const [bet, setBet] = useState(1);
  const [results, setResults] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [coinFace, setCoinFace] = useState("heads");
  const [showModal, setShowModal] = useState(false);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const handleBetSelection = (amount) => {
    setBet(amount);
  };

  const handleFlip = () => {
    if (!selection || credits < bet) return;

    setIsFlipping(true);

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "heads" : "tails";
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

      if (newResult.win) {
        setCredits(credits + bet);
      } else {
        setCredits(credits - bet);
      }

      setShowModal(true); // Show the modal after the flip
    }, 1000);
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
        {result && <p className="result">{result}</p>}
        {isConnected ? (
          <>
            <p className="credits">Credits: {credits}</p>
            <hr />
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
          </>
        ) : (
          <p>Please connect your wallet to play.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className={`modal ${showModal ? "show" : ""}`}>
          <div className="modal-content">
            <h2>{result === selection ? "You Won!" : "You Lost!"}</h2>
            <p>The coin landed on {result}.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinFlip;
