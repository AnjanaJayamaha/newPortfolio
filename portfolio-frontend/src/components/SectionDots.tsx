import { useEffect, useState } from "react";
import "./SectionDots.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function SectionDots() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav className="section-dots" aria-label="Page sections">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`section-dot${activeSection === s.id ? " active" : ""}`}
          onClick={() => scrollTo(s.id)}
          aria-label={s.label}
          title={s.label}
        >
          <span className="dot-tooltip">{s.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default SectionDots;
