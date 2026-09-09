import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section-small" id="about">
      <div className="container">
        <motion.div 
          className="about-small-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-label">01. ABOUT ME</div>
          <h2 className="about-title">
            Crafting code with <span className="accent-text">purpose.</span>
          </h2>
          <p className="about-desc">
            I’m an undergraduate software engineer focused on building scalable, reliable, and cleanly architected software systems. I work across the full stack with React/Next.js, .NET, Spring Boot, and SQL-based databases, and I enjoy turning real-world problems into maintainable, production-ready solutions.
            <br /><br />
            I’m also passionate about Cyber Security and AI, and I’m constantly improving my skills to build secure, intelligent, and high-performance applications.
          </p>
          
          <Link to="/about" className="more-link">
            more about me <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
