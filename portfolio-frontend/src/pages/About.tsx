import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import profileImg from "../assets/profile.png";
import { FiSearch } from "react-icons/fi";
import {
  FaCode, FaServer, FaLightbulb, FaShieldAlt, FaDatabase,
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

      <section id="about" className="about-page">
        <motion.div
          className="about-page-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ position: 'relative' }}
        >

          {/* Section heading */}
          <motion.h1
            className="skills-page-title about-section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 5 }}
          >
            About <span>Me</span>
          </motion.h1>

          {/* Floating Avatar on the left */}
          <motion.div
            className="floating-avatar-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/anjana_laptop_hi.jpg" alt="Anjana Waving" />
          </motion.div>

          <div className="about-layout-full">

            {/* Summary */}
            <motion.div className="about-text-col-full" variants={cardVariants}>
              <div className="about-heading-section">
                <h2 className="about-main-title">
                  Turning ideas into <br />
                  <span className="highlight-text-large">real products.</span>
                </h2>
              </div>

              <div className="about-summary-card">
                <p className="about-text-large">
                  I'm <span className="highlight-text">Anjana Jayamaha</span>, a 3rd-year Information Technology and Management undergraduate at the <span className="highlight-text">University of Moratuwa</span> with hands-on experience in full-stack development and AI-powered applications.
                </p>
                <p className="about-text-large">
                  Proficient in React.js, Spring Boot, REST APIs, and modern databases, with practical experience building responsive and scalable solutions.
                </p>
                <p className="about-text-large">
                  Strong foundation in Agile/Scrum methodologies, Git/GitHub, API integration, and collaborative software development.
                </p>

                {/* Decorative Tech Dots */}
                <div className="tech-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
}

export default About;