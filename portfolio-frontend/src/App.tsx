import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import "./App.css";

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      {/* Noise Overlay Effect */}
      <div className="noise-overlay"></div>
      
      {!isPreloading && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;