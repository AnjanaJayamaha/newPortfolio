import "./Achievements.css";
import Navbar from "../components/Navbar";

// We can add more placeholder items or actual image paths here.
// Users can drop images into src/assets/certificates/ and update these paths.
const certificates = [
  { id: 0, title: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", file: "aws-cert.jpg" },
  { id: 1, title: "Python for Beginners", issuer: "University of Moratuwa", file: "python-uom.png" },
  { id: 2, title: "Web Design for Beginners", issuer: "University of Moratuwa", file: "web-uom.png" },
  { id: 3, title: "AI for Beginners", issuer: "HP LIFE", file: "ai-hp.png" },
  { id: 4, title: "Professional Networking", issuer: "HP LIFE", file: "networking-hp.png" },
  { id: 5, title: "Google Ads for Beginners", issuer: "Coursera", file: "google-ads.jpg" },
];

function Achievements() {
  return (
    <div className="achievements-page">

      <main className="achievements-content">
        <div className="achievements-header">
          <h1 className="skills-page-title">My  <span>Achievements & Education</span></h1>
          <p className="subtitle-text">
            A collection of my certifications, courses, and educational milestones.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="cert-image-wrapper">
                <img src={`/assets/certificates/${cert.file}`} alt={cert.title} loading="lazy" />
              </div>
              <div className="cert-details">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Achievements;
