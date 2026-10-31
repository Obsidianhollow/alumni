import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "../css/TopBar.css";

function TopBar() {
  return (
    <div className="topbar">

      <div className="topbar-inner">

        {/* LEFT SIDE */}
        <div className="topbar-left">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Haldia+Institute+of+Technology"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-location"
          >
            <FaMapMarkerAlt />

            <span>
              Alumni Association of Assembly of God Church School (AAAGCS)
            </span>
          </a>

          <span className="topbar-divider"></span>

          <a
            href="mailto:alumni@hithaldia.ac.in"
            className="topbar-email"
          >
            <FaEnvelope />

            <span>
              agalumni.hld@agcschools.edu.in
            </span>
          </a>

        </div>


        {/* RIGHT SIDE */}
        <div className="topbar-right">

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

        </div>

      </div>

    </div>
  );
}

export default TopBar;