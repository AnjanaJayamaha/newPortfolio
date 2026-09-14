import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

import CustomCursor from "../components/CustomCursor";
import { FiSearch } from "react-icons/fi";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython,
  FaGitAlt, FaFigma, FaPhp, FaNodeJs, FaUsers, FaLightbulb, FaClock, FaCode
} from "react-icons/fa";
import {
  SiMysql, SiMongodb, SiC, SiNextdotjs, SiTailwindcss, SiDotnet,
  SiExpress, SiFirebase, SiBlender, SiCanva, SiGimp
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import "./Skills.css";

const categoriesData = [
  {
    id: "Frontend",
    title: "Crafting visual experiences",
    desc: "Design systems, SSR/ISR, performance budgets, and UX polish",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ]
  },
  {
    id: "Backend",
    title: "Powering the core logic",
    desc: "Developing robust APIs, microservices, and server-side applications.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    ]
  },
  {
    id: "Database",
    title: "Structuring the data",
    desc: "Designing schemas, optimizing queries, and managing data storage.",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ]
  },

  {
    id: "Tools",
    title: "Ship fast, keep quality",
    desc: "Version control, design tools, and collaboration workflows.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Blender", icon: <SiBlender />, color: "#F5792A" },
      { name: "Photoshop", icon: <DiPhotoshop />, color: "#31A8FF" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
      { name: "GIMP", icon: <SiGimp />, color: "#5C5543" },
    ]
  },
  {
    id: "Soft Skills",
    title: "The human element",
    desc: "Communication, problem solving, and effective teamwork.",
    skills: [
      { name: "Teamwork", icon: <FaUsers />, color: "#00D9C0" },
      { name: "Problem Solving", icon: <FaLightbulb />, color: "#F1C40F" },
      { name: "Time Management", icon: <FaClock />, color: "#E67E22" },
    ]
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categoriesList = ["All", "Frontend", "Backend", "Database", "Programming", "Tools", "Soft Skills"];

  // Filter based on active tab and search query
  const filteredData = categoriesData.map(cat => {
    return {
      ...cat,
      skills: cat.skills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    };
  }).filter(cat => {
    if (activeTab !== "All" && cat.id !== activeTab) return false;
    // if a tab is selected or all is selected, only show categories that have matching skills
    return cat.skills.length > 0;
  });

  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="noise-overlay"></div>

      <section className="skills-page-wrapper">
        <div className="container">

          <motion.h1
            className="skills-page-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Technical <span>Skills</span>
          </motion.h1>

          <motion.div
            className="mac-window-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Sidebar */}
            <aside className="mac-sidebar">

              {/* Traffic Lights */}
              <div className="mac-controls">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>

              {/* Search */}
              <div className="mac-search">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="My Skill Store"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="mac-categories-label">CATEGORIES</div>

              <ul className="mac-category-list">
                {categoriesList.map(cat => (
                  <li
                    key={cat}
                    className={`mac-cat-item ${activeTab === cat ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(cat);
                      setSearchQuery(""); // Clear search when switching tabs
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>

            </aside>

            {/* Content Area */}
            <main className="mac-content">

              <div className="mac-content-header">
                <h2>{activeTab === "All" ? (searchQuery ? "Search Results" : "All Skills") : activeTab}</h2>
                <div className="updated-badge">Updated 2026</div>
              </div>

              <div className="mac-scroll-area">
                <AnimatePresence mode="popLayout">
                  {filteredData.map(category => (
                    <motion.div
                      key={category.id}
                      className="skill-group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="skill-group-tag">{category.id.toUpperCase()}</div>
                      <h3 className="skill-group-title">{category.title}</h3>
                      <p className="skill-group-desc">{category.desc}</p>

                      <div className="skill-icon-grid">
                        {category.skills.map(skill => (
                          <div
                            key={skill.name}
                            className="skill-icon-box"
                            title={skill.name}
                          >
                            <span style={{ color: skill.color }}>{skill.icon}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {filteredData.length === 0 && (
                    <motion.div
                      className="no-skills-found"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <p>No skills found matching "{searchQuery}"</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </main>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Skills;