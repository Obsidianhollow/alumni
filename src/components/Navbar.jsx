import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import "../css/Navbar.css";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      {
        name: "Core Committee Members",
        href: "/about/core-committee",
      },
      {
        name: "Alumni Directory",
        href: "/about/alumni-directory",
      },
      {
        name: "Our Members",
        href: "/about/our-members",
      },
      {
        name: "Alumni Achievements",
        href: "/about/alumni-achievements",
      },
    ],
  },
  {
    name: "Events",
    href: "/#events",
  },
  {
    name: "Alumni",
    href: "/#alumni",
  },
  {
    name: "Gallery",
    href: "/#gallery",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
    closeMenu();
  };

  return (
    <>
      <header className="site-navbar">
        <div className="navbar-inner">
          {/* =========================================
              BRAND
          ========================================= */}

          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Alumni Association Home"
          >
            <div className="brand-mark">A</div>

            <div className="brand-text">
              <span className="brand-name">ALUMNI</span>

              <span className="brand-subtitle">Association</span>
            </div>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className={`nav-item ${link.dropdown ? "has-dropdown" : ""}`}
              >
                {/* Main Navigation Link */}

                <Link
                  to={link.href}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                >
                  <span className="nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{link.name}</span>
                </Link>

                {/* =========================================
                    DESKTOP DROPDOWN
                ========================================= */}

                {link.dropdown && (
                  <div className="dropdown-menu">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="dropdown-item"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="navbar-right">
            {/* Login / Signup */}

            {/* Contact */}

            <a href="#contact" className="contact-link">
              <span>Get in touch</span>

              <span aria-hidden="true">↗</span>
            </a>
            <div className="auth-buttons">
              <button
                type="button"
                className="login-button"
                onClick={() => openAuth("login")}
              >
                Login
              </button>

              <button
                type="button"
                className="signup-button"
                onClick={() => openAuth("signup")}
              >
                Sign up
              </button>
            </div>

            {/* Mobile Menu Button */}

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              <span className={menuOpen ? "line rotate-top" : "line"} />

              <span className={menuOpen ? "line hide-line" : "line"} />

              <span className={menuOpen ? "line rotate-bottom" : "line"} />
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================= */}

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-label">Navigation</div>

            {navLinks.map((link, index) => (
              <div key={link.name} className="mobile-nav-wrapper">
                {/* Main Mobile Navigation Row */}

                <div className="mobile-nav-row">
                  <Link
                    to={link.href}
                    className="mobile-nav-link"
                    onClick={() => !link.dropdown && closeMenu()}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    {link.name}
                  </Link>

                  {/* Dropdown Toggle */}

                  {link.dropdown && (
                    <button
                      type="button"
                      className="mobile-dropdown-toggle"
                      onClick={() => setAboutOpen((prev) => !prev)}
                      aria-label="Toggle About Us menu"
                      aria-expanded={aboutOpen}
                    >
                      {aboutOpen ? "−" : "+"}
                    </button>
                  )}
                </div>

                {/* =========================================
                    MOBILE DROPDOWN
                ========================================= */}

                {link.dropdown && aboutOpen && (
                  <div className="mobile-dropdown">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="mobile-dropdown-item"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* =========================================
                MOBILE AUTHENTICATION
            ========================================= */}

            <div className="mobile-auth-buttons">
              <button
                type="button"
                className="mobile-login-button"
                onClick={() => openAuth("login")}
              >
                Login
              </button>

              <button
                type="button"
                className="mobile-signup-button"
                onClick={() => openAuth("signup")}
              >
                Sign up
              </button>
            </div>

            {/* Mobile Contact */}

            <a href="#contact" className="mobile-contact" onClick={closeMenu}>
              <span>Start a conversation</span>

              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* =========================================
          AUTH MODAL
      ========================================= */}

      <AuthModal
        isOpen={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onModeChange={setAuthMode}
      />
    </>
  );
}

export default Navbar;
