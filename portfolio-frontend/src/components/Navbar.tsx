import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

   return (
    <nav>
      <div className="nav-left">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook />
        </a>

        <a href="https://www.instagram.com/anjana_j21/" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/in/anjana-jayamaha-332a0b317" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/AnjanaJayamaha" target="_blank">
          <FaGithub />
        </a>
      </div>

      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About Me</li>
        <li onClick={() => navigate("/education")}>Education</li>
        <li onClick={() => navigate("/projects")}>Projects</li>
        <li onClick={() => navigate("/skills")}>Skills</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;