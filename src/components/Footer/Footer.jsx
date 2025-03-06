import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={youtube_icon} alt="YouTube" />
      </div>

      <div className="footer-links">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <button className="service-code">Service Code</button>

      <p className="copyright">© 1997-2025 Netflix, Inc.</p>
      <p className="copyright">Design by LaVine</p>
    </div>
  );
};

export default Footer;
