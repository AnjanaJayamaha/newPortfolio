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
  FaUsers,
  FaLightbulb,
  FaClock,
  FaCode
} from "react-icons/fa";

import { 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiPostman, 
  SiC,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiBlender,
  SiAdobephotoshop,
  SiCanva,
  SiGimp
} from "react-icons/si";

function Skills() {
  const skillColors: { [key: string]: string } = {
    "HTML5": "#E34F26",
    "CSS3": "#1572B6",
    "JavaScript": "#F7DF1E",
    "ReactJS": "#61DAFB",
    "NextJS": "#FFFFFF",
    "Tailwind CSS": "#06B6D4",
    "Bootstrap": "#7952B3",
    "Node.js": "#339933",
    "Ballerina": "#57D9A3",
    ".NET": "#512BD4",
    "ExpressJS": "#FFFFFF",
    "Python": "#3776AB",
    "Java": "#007396",
    "PHP": "#777BB4",
    "MySQL": "#4479A1",
    "MongoDB": "#47A248",
    "Firebase": "#FFCA28",
    "C": "#A8B9CC",
    "Git": "#F05032",
    "Figma": "#F24E1E",
    "Blender": "#F5792A",
    "Photoshop": "#31A8FF",
    "Canva": "#00C4CC",
    "GIMP": "#5C5543",
    "Teamwork": "#00D9C0",
    "Problem Solving": "#F1C40F",
    "Time Management": "#E67E22"
  };

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

  const SkillTag = ({ icon, name }: { icon: React.ReactNode, name: string }) => {
    const color = skillColors[name] || "#00d9c0";
    return (
      <span className="skill-tag" style={{ borderLeft: `3px solid ${color}` }}>
        <span className="tag-icon" style={{ color }}>{icon}</span>
        {name}
      </span>
    );
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
          <motion.div className="skill-card frontend" variants={itemFade}>
            <h2>Frontend</h2>
            <div className="skill-tags">
              <SkillTag icon={<FaHtml5 />} name="HTML5" />
              <SkillTag icon={<FaCss3Alt />} name="CSS3" />
              <SkillTag icon={<FaJs />} name="JavaScript" />
              <SkillTag icon={<FaReact />} name="ReactJS" />
              <SkillTag icon={<SiNextdotjs />} name="NextJS" />
              <SkillTag icon={<SiTailwindcss />} name="Tailwind CSS" />
              <SkillTag icon={<FaBootstrap />} name="Bootstrap" />
            </div>
          </motion.div>

          <motion.div className="skill-card backend" variants={itemFade}>
            <h2>Backend</h2>
            <div className="skill-tags">
              <SkillTag icon={<FaNodeJs />} name="Node.js" />
              <SkillTag icon={<FaCode />} name="Ballerina" />
              <SkillTag icon={<SiDotnet />} name=".NET" />
              <SkillTag icon={<SiExpress />} name="ExpressJS" />
              <SkillTag icon={<FaPython />} name="Python" />
              <SkillTag icon={<FaJava />} name="Java" />
              <SkillTag icon={<FaPhp />} name="PHP" />
            </div>
          </motion.div>

          <motion.div className="skill-card database" variants={itemFade}>
            <h2>Database</h2>
            <div className="skill-tags">
              <SkillTag icon={<SiMysql />} name="MySQL" />
              <SkillTag icon={<SiMongodb />} name="MongoDB" />
              <SkillTag icon={<SiFirebase />} name="Firebase" />
            </div>
          </motion.div>

          <motion.div className="skill-card programming" variants={itemFade}>
            <h2>Programming</h2>
            <div className="skill-tags">
              <SkillTag icon={<SiC />} name="C" />
              <SkillTag icon={<FaJava />} name="Java" />
              <SkillTag icon={<FaPython />} name="Python" />
              <SkillTag icon={<FaJs />} name="JavaScript" />
            </div>
          </motion.div>

          <motion.div className="skill-card tools" variants={itemFade}>
            <h2>Tools</h2>
            <div className="skill-tags">
              <SkillTag icon={<FaGitAlt />} name="Git" />
              <SkillTag icon={<FaFigma />} name="Figma" />
              <SkillTag icon={<SiBlender />} name="Blender" />
              <SkillTag icon={<SiAdobephotoshop />} name="Photoshop" />
              <SkillTag icon={<SiCanva />} name="Canva" />
              <SkillTag icon={<SiGimp />} name="GIMP" />
            </div>
          </motion.div>

          <motion.div className="skill-card soft-skills" variants={itemFade}>
            <h2>Soft Skills</h2>
            <div className="skill-tags">
              <SkillTag icon={<FaUsers />} name="Teamwork" />
              <SkillTag icon={<FaLightbulb />} name="Problem Solving" />
              <SkillTag icon={<FaClock />} name="Time Management" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Skills;