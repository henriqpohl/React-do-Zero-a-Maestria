// React
import { NavLink } from "react-router-dom"

// CSS
import "./NavBar.css"

function navBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default navBar