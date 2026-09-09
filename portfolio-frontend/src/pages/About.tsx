import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import profileImg from "../assets/profile.png";
import { FiSearch } from "react-icons/fi";
import {
  FaGraduationCap, FaCode, FaServer, FaLightbulb, FaShieldAlt, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, FaPython,
  FaGitAlt, FaFigma, FaPhp, FaNodeJs, FaUsers, FaClock
} from 'react-icons/fa';
import {
  SiMysql, SiMongodb, SiC, SiNextdotjs, SiTailwindcss, SiDotnet,
  SiExpress, SiFirebase, SiBlender, SiCanva, SiGimp
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import "./AboutPage.css";

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

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 70, damping: 15 }
    }
  };

  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categoriesList = ["All", "Frontend", "Backend", "Database", "Tools", "Soft Skills"];

  const filteredData = categoriesData.map(cat => {
    return {
      ...cat,
      skills: cat.skills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    };
  }).filter(cat => {
    if (activeTab !== "All" && cat.id !== activeTab) return false;
    return cat.skills.length > 0;
  });

  return (
    <>
      <CustomCursor />
      <Navbar />


      <section className="about-page">


        <div className="container">

          {/* =====================
              BENTO GRID SECTION
          ====================== */}
          <motion.div
            className="about-page-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side: Bio */}
            <motion.div className="about-page-text" variants={cardVariants}>
              <div className="section-label">MORE ABOUT ME</div>
              <h2 className="about-title">
                Turning ideas into <br />
                <span className="accent-text">real products.</span>
              </h2>
              <p className="about-desc">
                More than code — I care about how products work, feel, and create value.
              </p>
              <p className="about-desc">
                I am a third-year Information Technology and Management undergraduate at the University of Moratuwa, with a strong interest in software engineering, full-stack development, and building practical digital solutions. Through academic and personal projects, I have gained hands-on experience working with frontend interfaces, backend development, REST APIs, databases, authentication, and collaborative development workflows.
              </p>
              <p className="about-desc">
                I am also expanding my knowledge in DevOps and cloud technologies, including Docker, CI/CD, GitHub Actions, Linux, and cloud deployment. Alongside development, I value clean user experiences and thoughtful product design, allowing me to approach software from both technical and user-focused perspectives.
              </p>
            </motion.div>
          </motion.div>

          {/* =====================
              SKILLS MAC WINDOW
          ====================== */}
          <div className="skills-merged-wrapper">
            <motion.h1
              className="skills-page-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technical <span>Skills</span>
            </motion.h1>

            <motion.div
              className="mac-window-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Sidebar */}
              <aside className="mac-sidebar">
                <div className="mac-controls">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>

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
                        setSearchQuery("");
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
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="skill-group-tag">{category.id.toUpperCase()}</div>
                        <h3 className="skill-group-title">{category.title}</h3>
                        <p className="skill-group-desc">{category.desc}</p>

                        <div className="skill-icon-grid">
                          {category.skills.map(skill => (
                            <div key={skill.name} className="skill-icon-box" title={skill.name}>
                              <span style={{ color: skill.color }}>{skill.icon}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}

                    {filteredData.length === 0 && (
                      <motion.div className="no-skills-found" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <p>No skills found matching "{searchQuery}"</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </main>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;