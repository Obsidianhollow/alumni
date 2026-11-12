
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import "../css/Navbar.css";

// NAVIGATION LINKS
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
        name: "Founding Members",
        href: "/about/founding-member",
      },
      {
        name: "Core CommitteeMembers",
        href: "/about/core-committee-members",
      },
      {
        name: "Alumni Directory",
        href: "/about/alumni-directory",
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

// NAVBAR COMPONENT
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [aboutOpen, setAboutOpen] = useState(false);

  // CLOSE MOBILE MENU
  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  // OPEN AUTH MODAL
  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
    closeMenu();
  };

  return (
    <>
      <header className="site-navbar">
        <div className="navbar-inner">

          {/* BRAND LOGO */}
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Alumni Association Home"
          >
            <img
              src="/images/logo.jpeg"
              alt="Alumni Association Logo"
              className="navbar-logo"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className={`nav-item ${
                  link.dropdown ? "has-dropdown" : ""
                }`}
              >
                <Link
                  to={link.href}
                  className={`nav-link ${
                    index === 0 ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  <span className="nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{link.name}</span>
                </Link>

                {/* DESKTOP DROPDOWN */}
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

          {/* RIGHT SIDE */}
          <div className="navbar-right">

            {/* CONTACT LINK */}
            <a
              href="/#contact"
              className="contact-link"
              onClick={closeMenu}
            >
              <span>Get in touch</span>
              <span aria-hidden="true">↗</span>
            </a>

            {/* AUTH BUTTONS */}
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

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="menu-button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              <span
                className={
                  menuOpen ? "line rotate-top" : "line"
                }
              />

              <span
                className={
                  menuOpen ? "line hide-line" : "line"
                }
              />

              <span
                className={
                  menuOpen ? "line rotate-bottom" : "line"
                }
              />
            </button>

          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-menu ${
            menuOpen ? "open" : ""
          }`}
        >
          <div className="mobile-menu-content">

            <div className="mobile-menu-label">
              Navigation
            </div>

            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="mobile-nav-wrapper"
              >
                <div className="mobile-nav-row">

                  <Link
                    to={link.href}
                    className="mobile-nav-link"
                    onClick={() => {
                      if (!link.dropdown) {
                        closeMenu();
                      }
                    }}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {link.name}
                  </Link>

                  {/* MOBILE DROPDOWN BUTTON */}
                  {link.dropdown && (
                    <button
                      type="button"
                      className="mobile-dropdown-toggle"
                      onClick={() =>
                        setAboutOpen((prev) => !prev)
                      }
                      aria-label="Toggle About Us menu"
                      aria-expanded={aboutOpen}
                    >
                      {aboutOpen ? "−" : "+"}
                    </button>
                  )}

                </div>

                {/* MOBILE DROPDOWN */}
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

            {/* MOBILE AUTH BUTTONS */}
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

            {/* MOBILE CONTACT */}
            <a
              href="/#contact"
              className="mobile-contact"
              onClick={closeMenu}
            >
              <span>Start a conversation</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>
        </div>
      </header>

      {/* AUTH MODAL */}
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
