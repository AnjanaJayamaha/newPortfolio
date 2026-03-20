import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaNodeJs,
  FaPalette,
  FaClock,
  FaLightbulb,
  FaUsers,
  FaCode
} from "react-icons/fa";

import { SiSpringboot, SiMysql, SiMongodb, SiPostman, SiC } from "react-icons/si";

function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

  return (
    <>
      <Navbar />

      <section className="skills-page">
        <motion.h1 
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span>Skills</span>
        </motion.h1>

        <motion.div 
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="skill-card" variants={itemFade}>
            <h2>Frontend</h2>
            <div className="skill-tags">
              <span><FaHtml5 /> HTML</span>
              <span><FaCss3Alt /> CSS</span>
              <span><FaJs /> JavaScript</span>
              <span><FaReact /> React</span>
              <span><FaBootstrap /> Bootstrap</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={itemFade}>
            <h2>Backend</h2>
            <div className="skill-tags">
              <span><FaPhp /> PHP</span>
              <span><SiSpringboot /> Spring Boot</span>
              <span><FaNodeJs /> Node.js</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={itemFade}>
            <h2>Programming</h2>
            <div className="skill-tags">
              <span><FaJava /> Java</span>
              <span><FaPython /> Python</span>
              <span><SiC /> C</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={itemFade}>
            <h2>Database</h2>
            <div className="skill-tags">
              <span><SiMysql /> MySQL</span>
              <span><SiMongodb /> MongoDB</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={itemFade}>
            <h2>Tools</h2>
            <div className="skill-tags">
              <span><FaGitAlt /> GitHub</span>
              <span><SiPostman /> Postman</span>
              <span><FaCode /> VS Code</span>
              <span><FaFigma /> Figma</span>
              <span><FaPalette /> Canva</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={itemFade}>
            <h2>Soft Skills</h2>
            <div className="skill-tags">
              <span><FaUsers /> Teamwork</span>
              <span><FaLightbulb /> Problem Solving</span>
              <span><FaClock /> Time Management</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Skills;