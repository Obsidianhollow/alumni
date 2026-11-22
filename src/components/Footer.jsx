
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";

import "../css/Footer.css";

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
// FOOTER COMPONENT
// =========================================

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND / ABOUT */}
          <div className="footer-column footer-about">

            <Link
              to="/"
              className="footer-brand"
              aria-label="Alumni Association Home"
            >
              <img
                src="/alumni-logo.png"
                alt="Alumni Association Logo"
                className="footer-logo"
              />

              <div className="footer-brand-text">
                <span className="footer-school-name">
                  Assembly of God
                </span>

                <span className="footer-school-name">
                  Church School
                </span>

                <span className="footer-association-name">
                  Alumni Association
                </span>
              </div>
            </Link>

            <p className="footer-description">
              Connecting generations of alumni, celebrating
              achievements, and building meaningful relationships
              beyond graduation.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="footer-social">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} profile`}
                  title={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/about/founding-member">Founding Members</Link>
              <Link to="/about/core-committee-members">
                Core Committee Members
              </Link>
              <Link to="/about/alumni-directory">
                Alumni Directory
              </Link>
              <Link to="/about/alumni-achievements">
                Alumni Achievements
              </Link>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h3>Explore</h3>

            <div className="footer-links">
              <Link to="/events">Events</Link>
              <Link to="/about/alumni-directory">Alumni</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/#contact">Contact Us</Link>
            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>
                Alumni Association of Assembly of God
                Church School (AAAGCS)
              </span>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope />
              <a href="mailto:agalumni.hld@agcschools.edu.in">
                agalumni.hld@agcschools.edu.in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* RED STRIP */}
      <div className="footer-red-strip">
        <div className="footer-red-inner">
          <p>
            Stay connected. Stay inspired. Stay part of the community.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-button"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Alumni Association
            of Assembly of God Church School (AAAGCS).
            All Rights Reserved.
          </p>

          <p>
            Designed & Developed with care.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
