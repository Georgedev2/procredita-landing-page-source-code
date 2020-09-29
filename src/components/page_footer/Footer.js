import React from "react";
import { company } from "./footerData";

/* -------------REACT ICONS--------------- */
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

import img from "../images-&-icons/footer-logo.svg";

import "./footer-style.css";

function Footer() {
  const style = {
    borderRadius: "8px",
    color: "#0091FF",
    size: "2rem",
  };

  return (
    <footer>
      <div>
        <div className="socail">
          <div className="footer-logo">
            <img src={img} />
          </div>
          <div className="socail-icons">
            <IconContext.Provider value={style}>
              <RiInstagramFill />
              <RiFacebookBoxFill />
              <RiLinkedinBoxFill />
              <AiFillTwitterSquare />
            </IconContext.Provider>
          </div>
        </div>

        <div className="company">
          <div className="company_title">Company</div>
          <ul>
            {company.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="legal">
          <div className="legal_title">Legal</div>
          <div>Cookies Policy</div>
          <div>Privacy Policy</div>
        </div>
        <div className="map"></div>
      </div>

      <div className="cookie">
        <div className="cookie-title">This website uses cookies</div>
        <div className="prevacy-policy">
          We use cookies to personalise content and ads, to provide social media
          features and to analyse our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you’ve
          provided to them or that they’ve collected from your use of their
          services. Check Privacy Policy <a href="#ers">Privacy Policy</a>.
        </div>
      </div>
      <div className="right">© Procredita 2020, all rights reserved</div>
    </footer>
  );
}

export default Footer;
