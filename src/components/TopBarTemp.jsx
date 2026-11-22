
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "../css/TopBar.css";

// =========================================
// SOCIAL MEDIA LINKS
// =========================================

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1PkpQV2mxc/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alumni.meet_ag_haldia_/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alumni-association-of-agcs-haldia-287b5342b/",
    icon: FaLinkedinIn,
  },
];

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

      {/* SOCIAL MEDIA LINKS */}
      <div className="TopBarTemp-right">
        {socialLinks.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${name} profile`}
            title={name}
            tabIndex={duplicate ? -1 : 0}
          >
            <Icon />
          </a>
        ))}
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
