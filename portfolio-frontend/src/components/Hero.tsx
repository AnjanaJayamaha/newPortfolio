
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero-illustration.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-bg">
        <motion.img
          src={heroImg}
          alt="Hero Illustration"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s Build Digital Solutions Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            As an IT undergraduate and aspiring software developer, I am
            passionate about building modern digital solutions that solve
            real-world problems. I enjoy working with technologies like web
            development, UI/UX design, and programming while continuously
            learning and improving my skills. Through my projects, I aim to
            create efficient, user-friendly applications and grow as a developer
            in the ever-evolving world of technology.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/anjana_cv.pdf" download="Anjana_Jayamaha_CV.pdf" className="hero-btn primary">Download CV</a>
            <button onClick={() => navigate("/contact")}>Get In Touch</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;