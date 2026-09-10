import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

import logoA from "../assets/logo-a.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "journey", "skills", "projects", "achievements", "contact"];
      let current = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <button className="nav-brand" onClick={() => scrollTo("home")}>
          <img src={logoA} alt="A Logo" className="navbar-logo" />
          <span className="navbar-logo-text">NJ</span>
        </button>

        <ul className="nav-links">
          <li className={activeSection === "home" ? "active" : ""} onClick={() => scrollTo("home")}>Home</li>
          <li className={activeSection === "about" ? "active" : ""} onClick={() => scrollTo("about")}>About</li>
          <li className={activeSection === "journey" ? "active" : ""} onClick={() => scrollTo("journey")}>Journey</li>
          <li className={activeSection === "skills" ? "active" : ""} onClick={() => scrollTo("skills")}>Skills</li>
          <li className={activeSection === "projects" ? "active" : ""} onClick={() => scrollTo("projects")}>Projects</li>
          <li className={activeSection === "achievements" ? "active" : ""} onClick={() => scrollTo("achievements")}>Achievements</li>
          <li className={activeSection === "contact" ? "active" : ""} onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
        
        <div className="nav-right-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <div className="icon-wrapper">
              {theme === 'dark' ? <Moon size={18} color="#EAEAEA" /> : <Sun size={18} color="#1F1511" />}
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
            <button className={activeSection === "home" ? "active" : ""} onClick={() => scrollTo("home")}>Home</button>
            <button className={activeSection === "about" ? "active" : ""} onClick={() => scrollTo("about")}>About</button>
            <button className={activeSection === "journey" ? "active" : ""} onClick={() => scrollTo("journey")}>Journey</button>
            <button className={activeSection === "skills" ? "active" : ""} onClick={() => scrollTo("skills")}>Skills</button>
            <button className={activeSection === "projects" ? "active" : ""} onClick={() => scrollTo("projects")}>Projects</button>
            <button className={activeSection === "achievements" ? "active" : ""} onClick={() => scrollTo("achievements")}>Achievements</button>
            <button className={activeSection === "contact" ? "active" : ""} onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;