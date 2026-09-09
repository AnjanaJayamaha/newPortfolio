import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

function App() {
  return (
    <div className="app">
      <CustomCursor />
      {/* Noise Overlay Effect */}
      <div className="noise-overlay"></div>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;