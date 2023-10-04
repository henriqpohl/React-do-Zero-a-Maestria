// 2 - Links com React Router
import { Link, NavLink } from "react-router-dom"

// CSS
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      {/* 8 - Avtive Link */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {/* Classe diferente para ativo ou não */}
      {/* <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "esta-ativo" : "nao-esta-ativo"
        }
      >
        Home
      </NavLink> */}
    </nav>
  )
}

export default Navbar