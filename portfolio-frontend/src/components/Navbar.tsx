import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

import logoA from "../assets/logo-a.png";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const goTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <button className="nav-brand" onClick={() => goTo("/")}>
          <img src={logoA} alt="A Logo" className="navbar-logo" />
          <span className="navbar-logo-text">NJ</span>
        </button>

        <ul className="nav-links">
          <li onClick={() => goTo("/")}>Home</li>
          <li onClick={() => goTo("/about")}>About</li>
          <li onClick={() => goTo("/skills")}>Skills</li>
          <li onClick={() => goTo("/projects")}>Projects</li>
          <li onClick={() => goTo("/achievements")}>Achievements</li>
          <li onClick={() => goTo("/contact")}>Contact</li>
        </ul>
        
        <div className="nav-right-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <div className={`theme-toggle-track ${theme === 'dark' ? 'dark' : 'light'}`}>
              <div className="theme-toggle-thumb">
                {theme === 'dark' ? <Moon size={14} color="#FFF" /> : <Sun size={14} color="#FFA500" />}
              </div>
            </div>
          </button>

          <button
            className="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <button onClick={() => goTo("/")}>Home</button>
            <button onClick={() => goTo("/about")}>About</button>
            <button onClick={() => goTo("/skills")}>Skills</button>
            <button onClick={() => goTo("/projects")}>Projects</button>
            <button onClick={() => goTo("/achievements")}>Achievements</button>
            <button onClick={() => goTo("/contact")}>Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;