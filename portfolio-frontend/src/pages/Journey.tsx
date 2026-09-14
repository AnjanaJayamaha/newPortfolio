import React from 'react';
import { motion } from 'framer-motion';
import './Journey.css';

const journeyData = [
  {
    category: "Professional Experience",
    description: "Early professional exposure has helped me connect academic knowledge with real organisational and business environments.",
    items: [
      {
        title: "Corporate Banking Intern",
        subtitle: "People's Bank",
        logo: "/assets/peoples-bank.png",
        date: "01",
        description: "Gained exposure to a professional banking environment, developing practical understanding across relationship management, risk, decision-making, and business operations."
      }
    ]
  },
  {
    category: "University",
    description: "My undergraduate studies bring software, information technology, and management together, with an increasing focus on building practical systems.",
    items: [
      {
        title: "BSc (Hons) IT & Management",
        subtitle: "University of Moratuwa",
        logo: "/assets/uni.jpeg",
        date: "2024 - Present",
        description: "Studying Information Technology & Management with coursework spanning software engineering, programming, web development, databases, systems, and related technical disciplines."
      },
      {
        title: "Software & Systems Development",
        subtitle: "University of Moratuwa",
        logo: "/assets/uni.jpeg",
        date: "Current",
        description: "Developing practical experience through collaborative and individual projects involving frontend and backend development, APIs, databases, system design, and software engineering workflows."
      },
      {
        title: "University Projects",
        subtitle: "University of Moratuwa",
        logo: "/assets/uni.jpeg",
        date: "Current",
        description: "Building projects across web applications, recruitment systems, databases, and hardware-integrated systems while working with tools such as Git, GitHub, Jira, and Figma."
      }
    ]
  },
  {
    category: "School Years",
    items: [
      {
        title: "Advanced Level Examination",
        subtitle: "Govt. Science College, Matale",
        logo: "/assets/gsc.jpeg",
        date: "2023",
        description: "Completed my GCE Advanced Level examinations in 2023, in the Physical science stream."
      }
    ]
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const Journey: React.FC = () => {
  return (
    <section id="journey" className="journey-page">
      <div className="container journey-container">
        {journeyData.map((section, sectionIdx) => (
          <motion.div
            key={sectionIdx}
            className="journey-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="journey-header">
              <span className="journey-category-tag">
                {(sectionIdx + 1).toString().padStart(2, '0')} / {section.category.toUpperCase()}
              </span>
              <h2 className="journey-category-title">{section.category}</h2>
              <p className="journey-category-desc">{section.description}</p>
            </div>

            <div className="timeline">
              {section.items.map((item, itemIdx) => (
                <motion.div key={itemIdx} className="timeline-item" variants={itemVariants}>
                  <div className="timeline-date-container">
                    <span className="timeline-date">{item.date}</span>
                    <div className="timeline-diamond"></div>
                  </div>
                  <div className="timeline-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={`${item.subtitle} Logo`}
                          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                      )}
                      <div>
                        <h3 className="timeline-title" style={{ margin: 0 }}>{item.title}</h3>
                        <h4 className="timeline-subtitle" style={{ margin: 0, marginTop: '4px' }}>{item.subtitle}</h4>
                      </div>
                    </div>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
