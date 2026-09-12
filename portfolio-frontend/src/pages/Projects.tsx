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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

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


  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="projects-page">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Featured <span>Projects</span>
        </motion.h1>

        {loading && <p className="projects-status">Loading projects...</p>}
        {error && <p className="projects-error">{error}</p>}

        {!loading && !error && (
          <>
            <motion.div
              className="projects-grid"
              variants={container}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              {currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemFade}
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="project-media">
                    <div className="badges-container">
                      <div className="type-badge">{project.projectType || "Individual"} </div>
                      {project.isMaintenance && (
                        <div className="maintenance-badge">Under Maintenance</div>
                      )}
                    </div>
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => paginate(num)}
                    className={currentPage === num ? 'active' : ''}
                  >
                    {num}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="mac-modal"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mac-modal-header">
                <div className="mac-modal-controls">
                  <span className="mac-dot red" onClick={() => setSelectedProject(null)}></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <div className="mac-modal-title">Project Details</div>
              </div>

              <div className="mac-modal-body">
                <div className="modal-media-section">
                  {selectedProject.isMaintenance && (
                    <div className="modal-maintenance-overlay">
                      <h2>System Update in Progress</h2>
                      <p>This project is currently under maintenance. Detailed documentation and media will be available soon.</p>
                    </div>
                  )}
                  {selectedProject.videoUrl ? (
                    <video
                      controls
                      autoPlay
                      onLoadedMetadata={(e) => {
                        if (selectedProject.title === "ANJ Chatbot") {
                          e.currentTarget.playbackRate = 1.5;
                        }
                      }}
                    >
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

                  <div className="modal-meta-tags">
                    <div className="modal-duration-tag">
                      <FaRegClock />
                      <span>Duration: {selectedProject.duration}</span>
                    </div>
                    <div className="modal-type-tag">
                      <span>{selectedProject.projectType || "Individual"}</span>
                    </div>
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