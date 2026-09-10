import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaAws,
  FaWhatsapp,
} from 'react-icons/fa';

import {
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

import {
  FiArrowUpRight,
  FiTerminal,
} from 'react-icons/fi';

import profileImg from '../assets/profile.png';

const roles = [
  'Software Engineering Intern',
  'DevOps Intern',
  'Full Stack Developer',
  'QA Intern'
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20, delay: 0.2 }
  }
};

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">

      {/* Background glowing dots */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <div className="tech-dot dot-one"></div>
        <div className="tech-dot dot-two"></div>
        <div className="tech-dot dot-three"></div>
        <div className="tech-dot dot-four"></div>
      </motion.div>

      <div className="container hero-container">

        {/* =======================
            LEFT CONTENT
        ======================== */}

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Modern Internship Badge */}
          <motion.div className="internship-badge" variants={itemVariants}>
            <div className="pulse-dot"></div>
            <span className="badge-text">Available for</span>
            <span key={roleIndex} className="badge-role">
              {roles[roleIndex]}
            </span>
          </motion.div>

          <motion.p className="hero-intro" variants={itemVariants}>
            Hello, I’m
          </motion.p>

          <motion.h1 className="name-title" variants={itemVariants}>
            Anjana
            <span className="surname">
              Jayamaha.
            </span>

            <span className="typing-cursor"></span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            I build thoughtful digital products across
            software engineering, cloud technologies
            and user-focused design.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a
              href="#projects"
              className="btn-primary"
            >
              Explore My Work
              <FiArrowUpRight />
            </a>

            <div className="hero-cta-secondary">
              <a
                href="#contact"
                className="btn-secondary btn-small"
              >
                Let&apos;s Connect
                <FaEnvelope />
              </a>

              <a
                href="/Anjana_Jayamaha_CV.pdf"
                download
                className="btn-secondary btn-small"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-social-boxes" variants={itemVariants}>
            <a href="https://github.com/AnjanaJayamaha" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anjana-jayamaha-332a0b317/" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:anjanajayamaha21@gmail.com" className="social-box" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/94742062388" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </motion.div>

          {/* Code Card */}
          <motion.div className="mini-code-card" variants={itemVariants}>

            <div className="code-window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-lines">

              <p>
                <span className="code-number">01</span>
                <span className="code-keyword">function</span>
                {' createImpact() {'}
              </p>

              <p>
                <span className="code-number">02</span>
                const ideas = <span className="code-value">coffee + code</span>;
              </p>

              <p>
                <span className="code-number">03</span>
                const consistency = daily;
              </p>

              <p>
                <span className="code-number">04</span>
                return build(ideas, consistency);
              </p>

              <p>
                <span className="code-number">05</span>
                {'}'}
              </p>

              <p className="code-comment">
                // Code. Create. Repeat.
              </p>

            </div>
          </motion.div>

        </motion.div>

        {/* =======================
            RIGHT VISUAL
        ======================== */}

        <div className="hero-image-wrapper">

          {/* animated rings */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            <div className="tech-ring ring-one"></div>
            <div className="tech-ring ring-two"></div>
            <div className="tech-ring ring-three"></div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            className="image-frame"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >

            <div
              className="portrait-image"
              style={{
                backgroundImage: `url(${profileImg})`,
              }}
            ></div>

          </motion.div>

          {/* Tech Stack Floating Panel */}
          <motion.div
            className="tech-stack-card"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.8 }}
          >

            <div className="tech-card-header">
              <span>&lt;/&gt;</span>

              <div className="tech-card-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="tech-item">
              <FaReact />
              <span>React</span>
            </div>

            <div className="tech-item">
              <SiSpringboot />
              <span>Spring Boot</span>
            </div>

            <div className="tech-item">
              <SiTypescript />
              <span>TypeScript</span>
            </div>

            <div className="tech-item">
              <FaAws />
              <span>AWS</span>
            </div>

          </motion.div>

          {/* build code */}
          <motion.div
            className="build-code"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div>
              <span>01</span>
              &lt;build&gt;
            </div>

            <div>
              <span>02</span>
              &nbsp;&nbsp;&lt;design /&gt;
            </div>

            <div>
              <span>03</span>
              &nbsp;&nbsp;&lt;develop /&gt;
            </div>

            <div>
              <span>04</span>
              &nbsp;&nbsp;&lt;deploy /&gt;
            </div>

            <div>
              <span>05</span>
              &lt;/build&gt;
            </div>
          </motion.div>

        </div>

      </div>

      {/* Coffee Animation Removed */}

    </section>
  );
};

export default Hero;