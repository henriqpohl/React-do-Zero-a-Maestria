// REACT - 1 - Config React Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// CSS
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import SeachForm from "./components/SeachForm"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Info from "./pages/Info"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com React Router */}
        <Navbar />
        {/* Form Serach */}
        <SeachForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rotas Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - Nested Routes */}
          <Route path="/products/:id/info" element={<Info />}></Route>
          {/* 9 - Search */}
          <Route path="/search" element={<Search />}></Route>

          {/* 7 - No Match Route (404 - Not Found) */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
