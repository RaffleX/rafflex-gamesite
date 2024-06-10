import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./tailwind.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.render(
  <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
    <App />
  </ThirdwebProvider>,
  document.getElementById("root")
);
