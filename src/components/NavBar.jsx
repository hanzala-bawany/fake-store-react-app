import "./NavBar.css"
import { NavLink } from "react-router-dom"
import logo from "../assets/navLogo.png"


export default function NavBar() {


  return (
    <div className="navBarConatiner">
      <div className="navBar">

        <NavLink to="/">
          <img className="logo" src={logo} alt="" />
        </NavLink>

        <div className="navLinks">
          <NavLink to="/" className={({ isActive }) => isActive ? "navLink active" : "navLink"} >Home</NavLink>
          <NavLink to="/Conatact" className={({ isActive }) => isActive ? "navLink active" : "navLink"} >Conatact</NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? "navLink active" : "navLink"} >About</NavLink>
          <NavLink to="/Registration" className={({ isActive }) => isActive ? "navLink active" : "navLink"} >Registration</NavLink>
        </div>

        <div className="navBtns">
          <button className="logIn">Log in</button>
          <button className="signUp">Sign up</button>
        </div>


      </div>
    </div>
  )
}
