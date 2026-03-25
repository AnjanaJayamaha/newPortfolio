import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaRegClock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

function Projects() {
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log("Fetching projects from API...");
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5243";
        const response = await fetch(`${apiBaseUrl}/api/projects`);
        console.log("Response status:", response.status);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setProjectsData(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError("Backend Error: Failed to connect to the API. Please ensure the backend server is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };


  return (
    <>
      <Navbar />

      <section className="projects-page">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span>Projects</span>
        </motion.h1>

        {loading ? (
          <div className="loading">Loading Projects...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : (
          <motion.div
            className="projects-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemFade}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="project-media">
                  {project.isMaintenance && (
                    <div className="maintenance-badge">Under Maintenance</div>
                  )}
                  {project.videoUrl ? (
                    <video muted playsInline loop autoPlay>
                      <source src={`/src/assets/${project.videoUrl}`} type="video/mp4" />
                    </video>
                  ) : project.imageUrl ? (
                    <img src={`/src/assets/${project.imageUrl}`} alt={project.title} />
                  ) : (
                    <div className="project-placeholder">
                      <span>No Media Available</span>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>

              <div className="modal-body">
                <div className="modal-media-section">
                  {selectedProject.isMaintenance && (
                    <div className="modal-maintenance-overlay">
                      <h2>System Update in Progress</h2>
                      <p>This project is currently under maintenance. Detailed documentation and media will be available soon.</p>
                    </div>
                  )}
                  {selectedProject.videoUrl ? (
                    <video controls autoPlay>
                      <source src={`/src/assets/${selectedProject.videoUrl}`} type="video/mp4" />
                    </video>
                  ) : selectedProject.imageUrl ? (
                    <img src={`/src/assets/${selectedProject.imageUrl}`} alt={selectedProject.title} />
                  ) : (
                    <div className="modal-placeholder">Media Coming Soon</div>
                  )}
                </div>

                <div className="modal-info-section">
                  <h1>{selectedProject.title}</h1>
                  <h3>{selectedProject.subtitle}</h3>

                  <div className="modal-tech-stack">
                    {selectedProject.techStack?.split(',').map((tech: string, idx: number) => (
                      <span key={idx} className="tech-tag">{tech.trim()}</span>
                    ))}
                  </div>

                  <div className="modal-duration-tag">
                    <FaRegClock />
                    <span>Duration: {selectedProject.duration}</span>
                  </div>

                  <div className="modal-description">
                    <p>{selectedProject.description}</p>
                  </div>

                  <div className="modal-actions">
                    <a href={selectedProject.githubUrl || "#"} target="_blank" rel="noopener noreferrer" className="modal-btn github">
                      <FaGithub /> GitHub
                    </a>
                    <a href={selectedProject.liveDemoUrl || "#"} target="_blank" rel="noopener noreferrer" className="modal-btn live">
                      <FaExternalLinkAlt /> Live Demo 
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;