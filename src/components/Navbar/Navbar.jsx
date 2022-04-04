import React from "react";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <div className="logo">M.</div>
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home" className="p__opensans">
            About
          </a>
        </li>
        <li>
          <a href="#about" className="p__opensans">
            Zero Interest
          </a>
        </li>
        <li>
          <a href="#menu" className="p__opensans">
            Case Studies
          </a>
        </li>
        <li>
          <a href="#awards" className="p__opensans">
            Resources
          </a>
        </li>
        <li>
          <a href="#contact" className="p__opensans">
            Students
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <div className="login">
          <a href="#login" className="p__opensans">
            Log In
          </a>
        </div>
        <div />
        <div className="apply">
          <a href="/" className="p__opensans">
            Apply Today
          </a>
        </div>
      </div>

      {/* Small screens */}

      <div className="app__navbar-smallscreen">
        {!toggleMenu && (
          <BiMenu
            color="#fff"
            fontSize={27}
            className="overlay__open"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <BiX
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a
                  href="#home"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
