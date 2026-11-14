
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

function TopBarContent({ duplicate = false }) {
  return (
    <div
      className="topbar-content"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <div className="topbar-left">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Assembly+of+God+Church+School"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-location"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaMapMarkerAlt />
          <span>
            Alumni Association of Assembly of God Church School (AAAGCS)
          </span>
        </a>

        <span className="topbar-divider"></span>

        <a
          href="mailto:agalumni.hld@agcschools.edu.in"
          className="topbar-email"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaEnvelope />
          <span>agalumni.hld@agcschools.edu.in</span>
        </a>
      </div>

      <div className="topbar-right">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-marquee">
        <div className="topbar-track">
          <TopBarContent />
          <TopBarContent duplicate />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
