import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import {
  FaUserEdit,
  FaExchangeAlt,
  FaUserCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import { logout } from "../../firebase";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img src={Logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="icons" />
        <img src={bell_icon} alt="Notifications" className="icons" />

        <div
          className="navbar-profile"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Caret" className="caret" />

          {dropdownOpen && (
            <div className="dropdown">
              <ul className="profile-list">
                <li>
                  <img src={profile_img} alt="User 1" />
                  <span>Profile 1</span>
                </li>
                <li>
                  <img src={profile_img} alt="User 2" />
                  <span>Profile 2</span>
                </li>
                <li>
                  <img src={profile_img} alt="User 3" />
                  <span>Profile 3</span>
                </li>
                <li>
                  <img src={profile_img} alt="User 4" />
                  <span>Profile 4</span>
                </li>
              </ul>

              <ul className="menu-options">
                <li>
                  <FaUserEdit className="icon" /> Manage Profiles
                </li>
                <li>
                  <FaExchangeAlt className="icon" /> Transfer Profile
                </li>
                <li>
                  <FaUserCircle className="icon" /> Account
                </li>
                <li>
                  <FaQuestionCircle className="icon" /> Help Center
                </li>
              </ul>

              <hr />

              <ul className="logout">
                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  Sign out of Netflix
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
