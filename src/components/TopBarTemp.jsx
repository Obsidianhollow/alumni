
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import "../css/TopBar.css";

// =========================================
// TOP BAR CONTENT
// =========================================

function TopBarTempContent({ duplicate = false }) {
  return (
    <div
      className="TopBarTemp-content"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <div className="TopBarTemp-left">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Assembly+of+God+Church+School"
          target="_blank"
          rel="noopener noreferrer"
          className="TopBarTemp-location"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaMapMarkerAlt />

          <span>
            Alumni Association of Assembly of God Church School (AAAGCS)
          </span>
        </a>

        <span className="TopBarTemp-divider"></span>

        <a
          href="mailto:agalumni.hld@agcschools.edu.in"
          className="TopBarTemp-email"
          tabIndex={duplicate ? -1 : 0}
        >
          <FaEnvelope />
          <span>agalumni.hld@agcschools.edu.in</span>
        </a>
      </div>

      <div className="TopBarTemp-right">
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
      </div>
    </div>
  );
}

// =========================================
// TOP BAR COMPONENT
// =========================================

function TopBarTemp() {
  return (
    <div className="TopBarTemp">
      <div className="TopBarTemp-marquee">
        <div className="TopBarTemp-track">
          <TopBarTempContent />
          <TopBarTempContent duplicate />
        </div>
      </div>
    </div>
  );
}

export default TopBarTemp;
