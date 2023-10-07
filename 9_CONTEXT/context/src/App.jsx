// React
import { BrowserRouter, Routes, Route } from "react-router-dom"

// CSS
import "./App.css"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

// Components
import NavBar from "./components/NavBar"


function App() {

  return (
    <div>
      <h1>Context</h1>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
