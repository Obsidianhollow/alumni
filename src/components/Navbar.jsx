
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import AuthModal from "./AuthModal";
import "../css/Navbar.css";

// =========================================
// NAVIGATION LINKS
// =========================================

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
        name: "Core Committee Members",
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

// =========================================
// NAVBAR COMPONENT
// =========================================

function Navbar() {
  const location = useLocation();

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

  // ACTIVE NAVIGATION CHECK
  const isLinkActive = (link) => {
    if (link.href === "/") {
      return (
        location.pathname === "/" &&
        location.hash === ""
      );
    }

    if (link.href === "/about") {
      return location.pathname.startsWith("/about");
    }

    if (link.href.includes("#")) {
      const targetHash = link.href.substring(
        link.href.indexOf("#")
      );

      return (
        location.pathname === "/" &&
        location.hash === targetHash
      );
    }

    return location.pathname === link.href;
  };

  // SCROLL TO HASH SECTION
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = decodeURIComponent(
      location.hash.substring(1)
    );

    let firstFrame;
    let secondFrame;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [location.pathname, location.hash]);

  // CLOSE MOBILE MENU ON ROUTE CHANGE
  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash]);

  // =========================================
  // RENDER
  // =========================================

  return (
    <>
      <header className="site-navbar">
        <div className="navbar-inner">

          {/* BRAND LOGO AND SCHOOL NAME */}

          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Alumni Association Home"
          >
            <img
              src="/alumni-logo.png"
              alt="Alumni Association Logo"
              className="navbar-logo"
            />

            <div className="navbar-brand-text">
              <span className="school-name">
                Assembly of God
              </span>

              <span className="school-name">
                Church School
              </span>

              <span className="association-name">
                Alumni Association
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className={`nav-item ${
                  link.dropdown ? "has-dropdown" : ""
                }`}
              >
                <Link
                  to={link.href}
                  className={`nav-link ${
                    isLinkActive(link) ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>

                {/* DESKTOP DROPDOWN */}

                {link.dropdown && (
                  <div className="dropdown-menu">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `dropdown-item ${
                            isActive ? "active" : ""
                          }`
                        }
                        onClick={closeMenu}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* NAVBAR RIGHT SIDE */}

          <div className="navbar-right">

            {/* CONTACT LINK */}

            <Link
              to="/#contact"
              className="contact-link"
              onClick={closeMenu}
            >
              <span>Get in touch</span>
              <span aria-hidden="true">↗</span>
            </Link>

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
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
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
          id="mobile-navigation"
          className={`mobile-menu ${
            menuOpen ? "open" : ""
          }`}
        >
          <div className="mobile-menu-content">

            <div className="mobile-menu-label">
              Navigation
            </div>

            {navLinks.map((link) => (
              <div
                key={link.name}
                className="mobile-nav-wrapper"
              >
                <div className="mobile-nav-row">

                  <Link
                    to={link.href}
                    className={`mobile-nav-link ${
                      isLinkActive(link) ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>

                  {/* MOBILE DROPDOWN TOGGLE */}

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

                {/* MOBILE DROPDOWN ITEMS */}

                {link.dropdown && aboutOpen && (
                  <div className="mobile-dropdown">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `mobile-dropdown-item ${
                            isActive ? "active" : ""
                          }`
                        }
                        onClick={closeMenu}
                      >
                        {item.name}
                      </NavLink>
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

            <Link
              to="/#contact"
              className="mobile-contact"
              onClick={closeMenu}
            >
              <span>Start a conversation</span>
              <span aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>
      </header>

      {/* AUTHENTICATION MODAL */}

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
