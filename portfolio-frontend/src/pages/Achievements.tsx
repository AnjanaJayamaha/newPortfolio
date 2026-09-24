import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Achievements.css";

const certificates = [
  { id: 0, title: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", file: "aws-cert.jpg" },
  { id: 1, title: "Python for Beginners", issuer: "University of Moratuwa", file: "python-uom.png" },
  { id: 2, title: "Web Design for Beginners", issuer: "University of Moratuwa", file: "web-uom.png" },
  { id: 3, title: "AI for Beginners", issuer: "HP LIFE", file: "ai-hp.png" },
  { id: 4, title: "Professional Networking", issuer: "HP LIFE", file: "networking-hp.png" },
  { id: 5, title: "Google Ads for Beginners", issuer: "Coursera", file: "google-ads.jpg" },
  { id: 6, title: "Angular", issuer: "Sololearn", file: "angular-sololearn.jpg" },
];

function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  // Drag-to-scroll support
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const isCarousel = certificates.length > 6;

  const updateScrollStatus = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    updateScrollStatus();
    window.addEventListener("resize", updateScrollStatus);
    return () => window.removeEventListener("resize", updateScrollStatus);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStartLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    scrollRef.current.scrollLeft = scrollStartLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleCardClick = (cert: typeof certificates[0]) => {
    if (!hasMoved) {
      setSelectedCert(cert);
    }
  };

  return (
    <div className="achievements-page">
      <main className="achievements-content">
        <div className="achievements-header">
          <h1 className="skills-page-title">My <span>Achievements & Education</span></h1>
          <p className="subtitle-text">
            A collection of my certifications, courses, and educational milestones.
          </p>
        </div>

        {isCarousel && (
          <div className="achievements-controls">
            <div className="cert-meta-info">
            </div>
            <div className="cert-nav-buttons">
              <button
                type="button"
                className="cert-nav-btn"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous certificates"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="cert-nav-btn"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next certificates"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        <div
          ref={scrollRef}
          className={isCarousel ? `certificates-carousel ${isDragging ? "is-dragging" : ""}` : "certificates-grid"}
          onScroll={updateScrollStatus}
          onMouseDown={isCarousel ? handleMouseDown : undefined}
          onMouseMove={isCarousel ? handleMouseMove : undefined}
          onMouseUp={isCarousel ? handleMouseUp : undefined}
          onMouseLeave={isCarousel ? handleMouseLeave : undefined}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => handleCardClick(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
            >
              <div className="cert-image-wrapper">
                <img src={`/assets/certificates/${cert.file}`} alt={cert.title} loading="lazy" />
                <div className="cert-hover-overlay">
                  <FaExpand className="cert-expand-icon" />
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="cert-details">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {isCarousel && (
          <div className="cert-progress-wrapper" aria-hidden="true">
            <div
              className="cert-progress-indicator"
              style={{ width: `${Math.max(18, scrollProgress)}%` }}
            />
          </div>
        )}
      </main>

      {/* Certificate Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <div className="cert-modal-img-box">
                <img
                  src={`/assets/certificates/${selectedCert.file}`}
                  alt={selectedCert.title}
                />
              </div>
              <div className="cert-modal-footer">
                <div>
                  <h2>{selectedCert.title}</h2>
                  <p>{selectedCert.issuer}</p>
                </div>
                <a
                  href={`/assets/certificates/${selectedCert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-open-btn"
                >
                  Open Full File
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Achievements;
