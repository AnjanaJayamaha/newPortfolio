import { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      console.log("Sending contact message:", formData);
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5243";
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      console.log("Response status:", response.status);
      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent successfully!" });
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server error:", errorData);
        throw new Error("Failed to send message");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus({ type: 'error', message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
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
    <>
      <Navbar />

      <section className="contact">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backOut" as const }}
        >
          <h1>Get In <span>Touch</span></h1>
          <p>Looking for a new collaborator? Or just want to say hi? My inbox is always open.</p>
        </motion.div>

        <motion.div
          className="contact-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="contact-left">
            <motion.div className="contact-card" variants={itemFade}>
              <FaUser />
              <p>Anjana Jayamaha</p>
            </motion.div>

            <motion.div className="contact-card" variants={itemFade}>
              <FaMapMarkerAlt />
              <p>Moratuwa, Sri Lanka</p>
            </motion.div>

            <motion.div className="contact-card" variants={itemFade}>
              <FaEnvelope />
              <p>anjanajayamaha21@gmail.com</p>
            </motion.div>

            <motion.div className="contact-card" variants={itemFade}>
              <FaPhone />
              <p>+94 742062388</p>
            </motion.div>

            <motion.div className="service-tags" variants={itemFade}>
              <span>Frontend Developer</span>
              <span>Backend Developer</span>
              <span>UI/UX Designer</span>
              <span>Full Stack Developer</span>
            </motion.div>
          </div>

          <motion.div
            className="contact-right"
            variants={itemFade}
          >
            <h2>Message Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>FULL NAME</label>
              <input 
                type="text" 
                placeholder="Sara Doe"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />

              <label>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="sara.example@gmail.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />

              <label>SUBJECT</label>
              <input 
                type="text" 
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />

              <label>YOUR MESSAGE</label>
              <textarea 
                placeholder="Tell me..." 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
              
              {status.type && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Contact;