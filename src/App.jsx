
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./components/Hero.jsx";
import AlumniCards from "./components/Alumni.jsx";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";

import GalleryPage from "./pages/GalleryPage.jsx";
import AlumniAchivment from "./pages/AlumniAchivment.jsx";
import AlumniDirectory from "./pages/AlumniDirectory.jsx";
import OurMembers from "./pages/OurMembers.jsx";
import CoreCommittee from "./pages/CoreCommittee.jsx";

// Home Page
function Home() {
  return (
    <>
      <Hero />
      <Events />
      <AlumniCards />
      <Gallery />
    </>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      {/* Top Bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Page Routes */}
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About Us */}
          <Route path="/about" element={<About />} />

          {/* Gallery - All Photos */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Core Committee */}
          <Route
            path="/about/core-committee"
            element={<CoreCommittee />}
          />

          {/* Alumni Directory */}
          <Route
            path="/about/alumni-directory"
            element={<AlumniDirectory />}
          />

          {/* Our Members */}
          <Route
            path="/about/our-members"
            element={<OurMembers />}
          />

          {/* Alumni Achievements */}
          <Route
            path="/about/alumni-achievements"
            element={<AlumniAchivment />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

