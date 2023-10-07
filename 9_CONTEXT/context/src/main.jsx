import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// 2 - Criando Context Provider
import { CounterContextProvider } from "./context/CounterContext"

import { TitleColorContextProvider } from "./context/TitleColorContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2 - Criando Context Provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
)
