
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// =========================================
// LAYOUT COMPONENTS
// =========================================
import TopBarTemp from "./components/TopBarTemp.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// =========================================
// HOME COMPONENTS
// =========================================

import Hero from "./components/Hero.jsx";
import Notice from "./components/Notice.jsx";
import Events from "./components/Events.jsx";
import Donation from "./components/Donation.jsx";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";

// =========================================
// PAGE COMPONENTS
// =========================================

import GalleryPage from "./pages/GalleryPage.jsx";
import AlumniAchivment from "./pages/AlumniAchivment.jsx";
import AlumniDirectory from "./pages/AlumniDirectory.jsx";
import CoreCommitteeMembers from "./pages/CoreCommitteeMembers.jsx";
import FoundingMember from "./pages/FoundingMember.jsx";

// =========================================
// MEMBERSHIP COMPONENTS
// =========================================


import Membership from "./membership-temp/Membership.jsx";
import MembershipStatus from "./membership-temp/MembershipStatus.jsx";
import Payment from "./membership-temp/Payment.jsx";
import Admin from "./membership-temp/Admin.jsx";


// =========================================
// SCROLL TO TOP
// =========================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// =========================================
// HOME PAGE
// =========================================

function Home() {
  return (
    <>
      <Hero />
      <Notice />
      <Events />
      <Donation />
      <Gallery />
    </>
  );
}

// =========================================
// 404 PAGE
// =========================================

function NotFound() {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </section>
  );
}

// =========================================
// MAIN APP
// =========================================

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <TopBarTemp />
      <Navbar />

      <main>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* GALLERY */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* FOUNDING MEMBERS */}
          <Route
            path="/about/founding-member"
            element={<FoundingMember />}
          />

          {/* CORE COMMITTEE */}
          <Route
            path="/about/core-committee-members"
            element={<CoreCommitteeMembers />}
          />

          {/* ALUMNI DIRECTORY */}
          <Route
            path="/about/alumni-directory"
            element={<AlumniDirectory />}
          />

          {/* ALUMNI ACHIEVEMENTS */}
          <Route
            path="/about/alumni-achievements"
            element={<AlumniAchivment />}
          />

          {/* MEMBERSHIP REGISTRATION */}
          <Route
            path="/membership"
            element={<Membership />}
          />

          {/* MEMBERSHIP STATUS */}
          <Route
            path="/membership/status"
            element={<MembershipStatus />}
          />

          {/* MEMBERSHIP PAYMENT */}
          <Route
            path="/membership/payment"
            element={<Payment />}
          />

          {/* ADMIN PANEL - FRONTEND DEMO */}
          <Route
            path="/admin/memberships"
            element={<Admin />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
