import Navbar from "../components/Navbar";
import { motion } from "framer-motion";


function Education() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any }
    }
  };

  return (
    <>
      <Navbar />

      <section className="education-page">
        <motion.h1
          className="education-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span>Education</span>
        </motion.h1>

        <motion.div
          className="education-timeline"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="education-card" variants={itemFade}>
            <div className="education-header">
              <div>
                <span className="education-year">2024 - Present</span>
                <h2>Bachelor of Information Technology & Management</h2>
                <h3>University of Moratuwa</h3>
              </div>
              <div className="edu-logo-container">
                <img src="/assets/uni.jpeg" alt="University of Moratuwa Logo" />
              </div>
            </div>
            <p>Second Year Undergraduate</p>
            <p>
              Building knowledge in software development, web technologies,
              database systems, and modern IT practices.
            </p>
          </motion.div>

          <motion.div className="education-card" variants={itemFade}>
            <div className="education-header">
              <div>
                <span className="education-year">2021</span>
                <h2>GCE A/L</h2>
                <h3>Govt. Science College Matale</h3>
                <h3>Physical Stream</h3>
              </div>
              <div className="edu-logo-container">
                <img src="/assets/gsc.jpeg" alt="Govt. Science College Matale Logo" />
              </div>
            </div>
            <p>Combined Mathematics • Chemistry • Physics</p>
          </motion.div>

          <motion.div className="education-card" variants={itemFade}>
            <span className="education-year">2019</span>
            <h2>GCE O/L</h2>
            <p>8 As and 1 B</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Education;