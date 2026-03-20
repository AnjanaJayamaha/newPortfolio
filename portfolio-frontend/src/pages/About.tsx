import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/profile.png";
import { motion } from "framer-motion";

function About() {
  const roles = [
    "I'm Anjana Jayamaha",
    " Passionate Software Engineer",
    " Full Stack Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <>
      <Navbar />

      <section className="about">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={aboutImg} alt="Anjana Jayamaha" />
        </motion.div>

        <div className="about-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hi,<span>{currentText}</span>
            <span className="cursor"></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I’m an IT undergraduate passionate about software development and
            modern web technologies. I enjoy building practical applications,
            exploring UI/UX design, and continuously improving my programming
            skills. My goal is to create efficient, user-friendly digital
            solutions while growing as a developer.
          </motion.p>
        </div>
      </section>
    </>
  );
}

export default About;