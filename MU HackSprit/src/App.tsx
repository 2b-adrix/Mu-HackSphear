import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Overview from "./components/Overview";
import Themes from "./components/Themes";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Guidelines from "./components/Guidelines";
import Organizers from "./components/Organizers";
import FAQ from "./components/FAQ";
import ParticleNetwork from "./components/ParticleNetwork";
import Footer from "./components/Footer";
import RegistrationPage from "./components/RegistrationPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Overview />
        <Themes />
        <Timeline />
        <Prizes />
        <Guidelines />
        <Organizers />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-300 w-full overflow-x-hidden relative">
      <ScrollToTop />
      {/* Animated Polygon Mesh Background */}
      <ParticleNetwork />

      {/* Site Content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
