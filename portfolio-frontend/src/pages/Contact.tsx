import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaCalendarAlt, FaCopy } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "./Contact.css"; // Ensure this is imported

function Contact() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

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
      <Navbar />

      <section className="contact-hero">
        <motion.div
          className="contact-header-new"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backOut" as const }}
        >
          <p className="contact-subtitle">
            I am open to distributed systems, backend engineering, and high-performance<br/>
            full-stack opportunities. Connect directly on WhatsApp or professional channels.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={container}
          initial="hidden"
          animate="visible"
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
                  <span>[⯪]</span> Scan from Phone or Tap Below
                </div>
                <p>Point your phone camera to start a chat with pre-loaded context, or click the direct button below.</p>
                <div className="wa-number">+94 76 024 8263</div>
              </div>
            </div>

            <a href="https://wa.me/94760248263" target="_blank" rel="noopener noreferrer" className="wa-button">
              <FaWhatsapp /> Open WhatsApp Chat <FiArrowUpRight />
            </a>
          </motion.div>

          {/* RIGHT: Direct Contact & Socials */}
          <div className="contact-right-column">
            
            <motion.div className="direct-contact-card" variants={itemFade}>
              <h3 className="card-section-title">▶ Direct Contact</h3>
              
              <div className="contact-list">
                <div className="contact-item">
                  <div className="ci-icon"><FaEnvelope /></div>
                  <span className="ci-text">maduwanthaaselagra@gmail.com</span>
                  <button className="ci-copy" onClick={() => handleCopy("maduwanthaaselagra@gmail.com")}><FaCopy /></button>
                </div>

                <div className="contact-item">
                  <div className="ci-icon"><FaPhone /></div>
                  <span className="ci-text">+94 76 024 8263</span>
                  <button className="ci-copy" onClick={() => handleCopy("+94760248263")}><FaCopy /></button>
                </div>

                <div className="contact-item location-item">
                  <div className="ci-icon"><FaMapMarkerAlt /></div>
                  <span className="ci-text">Colombo, Sri Lanka</span>
                </div>

                <a href="#" className="schedule-call-btn">
                  <div className="schedule-left">
                    <FaCalendarAlt /> Schedule 15-Min Intro Call
                  </div>
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.div>

            <motion.div className="professional-presence-card" variants={itemFade}>
              <h3 className="card-section-title">▶ Professional Presence</h3>
              <div className="presence-socials">
                <a href="#" className="presence-box"><FaGithub /></a>
                <a href="#" className="presence-box"><FaLinkedin /></a>
                <a href="#" className="presence-box"><FaEnvelope /></a>
                <a href="#" className="presence-box"><FaWhatsapp /></a>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>
    </div>
  );
}

export default Contact;