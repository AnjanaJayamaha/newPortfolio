import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaCamera } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "./Contact.css"; // Ensure this is imported

function Contact() {

  const itemFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "circOut" as const }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <div className="contact-page-wrapper">

      <section className="contact-hero">
        <motion.div
          className="contact-header-new"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backOut" as const }}
        >
          <motion.h1
            className="skills-page-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '1.5rem', textAlign: 'center' }}
          >
            Get In <span>Touch</span>
          </motion.h1>
          <p className="contact-subtitle">
            I am open to distributed systems, backend engineering, and high-performance<br />
            full-stack opportunities. Connect directly on WhatsApp or professional channels.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={container}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          {/* LEFT: WhatsApp Card */}
          <motion.div className="wa-card" variants={itemFade}>
            <div className="wa-card-header">
              <div className="wa-icon-large">
                <FaWhatsapp />
              </div>
              <div className="wa-header-text">
                <span className="wa-badge">● Direct Messaging Channel</span>
                <h2>Instant WhatsApp Chat</h2>
              </div>
            </div>

            <p className="wa-description">
              Skip email delays and connect directly for engineering discussions, freelance builds, or recruitment inquiries.
            </p>

            <div className="wa-qr-box">
              <div className="qr-placeholder">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://wa.me/94760248263')}`} alt="WhatsApp QR Code" />
              </div>
              <div className="qr-instructions">
                <div className="qr-scan-title">
                  <FaCamera /> Scan from Phone or Tap Below
                </div>
                <p>Point your phone camera to start a chat with pre-loaded context, or click the direct button below.</p>
                <div className="wa-number">+94 74 206 2388</div>
              </div>
            </div>

            <a href="https://wa.me/94742062388" target="_blank" rel="noopener noreferrer" className="wa-button">
              <FaWhatsapp /> Open WhatsApp Chat <FiArrowUpRight />
            </a>
          </motion.div>

          {/* RIGHT: Direct Contact & Socials */}
          <div className="contact-right-column">

            <motion.div className="direct-contact-card" variants={itemFade}>
              <h3 className="card-section-title"> Direct Contact</h3>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="ci-icon"><FaEnvelope /></div>
                  <a href="mailto:anjanajayamaha21@gmail.com" className="ci-text">anjanajayamaha21@gmail.com</a>
                </div>

                <div className="contact-item">
                  <div className="ci-icon"><FaPhone /></div>
                  <a href="tel:+94742062388" className="ci-text">+94 74 206 2388</a>
                </div>

                <div className="contact-item location-item">
                  <div className="ci-icon"><FaMapMarkerAlt /></div>
                  <span className="ci-text">Moratuwa, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="professional-presence-card" variants={itemFade}>
              <h3 className="card-section-title">Professional Presence</h3>
              <div className="presence-socials">
                <a href="https://github.com/AnjanaJayamaha" target="_blank" rel="noopener noreferrer" className="presence-box"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anjana-jayamaha-332a0b317/" target="_blank" rel="noopener noreferrer" className="presence-box"><FaLinkedin /></a>
                <a href="mailto:anjanajayamaha21@gmail.com" className="presence-box"><FaEnvelope /></a>
                <a href="https://wa.me/94742062388" target="_blank" rel="noopener noreferrer" className="presence-box"><FaWhatsapp /></a>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>
    </div>
  );
}

export default Contact;