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

          <motion.div
            className="about-page-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Section heading */}
            <motion.h1
              className="skills-page-title about-section-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span>Me</span>
            </motion.h1>

            <div className="about-layout-grid">
              
              {/* Left Column: Summary */}
              <motion.div className="about-left-col" variants={cardVariants}>
                <p>
                  3rd-year Information Technology and Management undergraduate at the University of Moratuwa with hands-on experience in full-stack development and AI-powered applications. Proficient in React.js, Spring Boot, REST APIs, and modern databases, with practical experience building responsive and scalable solutions.
                </p>
                <p>
                  Strong foundation in Agile/Scrum methodologies, Git/GitHub, API integration, and collaborative software development. Seeking a Software Engineering Internship to apply technical skills and contribute to real-world solutions.
                </p>
              </motion.div>

              {/* Right Column: Education */}
              <motion.div className="about-right-col" variants={cardVariants}>
                <h2 className="edu-heading"><FaGraduationCap className="edu-icon" /> Education</h2>
                
                <div className="edu-card">
                  <h3 className="edu-school">University of Moratuwa</h3>
                  <p className="edu-degree">BSc (Hons) in Information Technology &amp; Management</p>
                  <p className="edu-desc">Faculty of IT</p>
                  <div className="edu-footer">
                    <span className="edu-gpa">CGPA: 3.52/4.00</span>
                    <span className="edu-year">2024 - 2028</span>
                  </div>
                </div>
                
                <div className="edu-card">
                  <h3 className="edu-school">Govt. Science College, Matale</h3>
                  <p className="edu-degree">G.C.E Advanced Level</p>
                  <div className="edu-footer">
                    <span className="edu-year" style={{ marginLeft: "auto" }}>2022/2023</span>
                  </div>
                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}

export default About;