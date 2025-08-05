import { FaChartLine, FaCode, FaDatabase, FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";
import thumbnail1 from '../assets/p1.jpg';
import thumbnail2 from '../assets/p2.jpg';
import thumbnail3 from '../assets/p3.jpg';
import thumbnail4 from '../assets/p4.jpg';
import thumbnail5 from '../assets/p5.jpg';
import thumbnail6 from '../assets/p6.jpg';
import thumbnail7 from '../assets/p7.jpg';
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Prediction System",
      description: "Deep learning model using Inception v3 architecture that classifies plant diseases with 92% accuracy. Implemented image preprocessing pipelines and deployed as Flask web app.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      github: "https://github.com/psmahale",
      thumbnail: thumbnail1,
      category: "AI/ML",
      icon: <FaChartLine />
    },
    {
      title: "NoxVision - The Concept",
      description: "A Smart CCTV Surveillance System Protocol.",
      technologies: ["Html", "OOP", "CSS"],
      github: "https://github.com/psmahale",
      demo: "https://noxvisionbyartnav.netlify.app/",
      thumbnail: thumbnail7, // Use the correct thumbnail key
      category: "Desktop App",
      icon: <FaCode />
    },
    {
      title: "Medical Management System",
      description: "Full-stack medical records system with React frontend and MySQL backend. Using PHP for server-side logic, it allows medicle mangaer to manage patient records, Medicines and Billings.",
      technologies: ["React", "MySQL", "Java", "PHP", "Tailwind"],
      github: "https://github.com/psmahale",
      thumbnail: thumbnail2,
      category: "Full Stack",
      icon: <FaServer />
    },
    {
      title: "Government Schemes Portal",
      description: "A design of Public-facing portal for government scheme applications. This project includes a user-friendly interface for citizens to apply for various government schemes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
      github: "https://github.com/psmahale",
      demo: "https://govschemesbyartnav.netlify.app/",
      thumbnail: thumbnail3, // Use the correct thumbnail key
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive BI dashboard with real-time data processing and custom visualizations built with Tableau.",
      technologies: ["Tableau", "Kaggle"],
      github: "https://github.com/psmahale",
      thumbnail: thumbnail4, // Use the correct thumbnail key
      category: "Data Analytics",
      icon: <FaDatabase />
    },
    {
      title: "Car Rental System",
      description: "C++ application for generating tax invoices based on car models and rental days, reducing manual work by 70% for local businesses.",
      technologies: ["C++", "OOP", "File Handling"],
      github: "https://github.com/psmahale",
      thumbnail: thumbnail5, // Use the correct thumbnail key
      category: "Desktop App",
      icon: <FaCode />
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern responsive portfolio built with React showcasing my academic journey, skills, and projects. Features dynamic content rendering and smooth animations.",
      technologies: ["React", "CSS Modules", "Framer Motion", "EmailJS","ChatGpt","DeepSeek"],
      github: "https://github.com/psmahale",
      demo: "https://artnav.netlify.app/",
      thumbnail: thumbnail6,
      category: "Frontend Development",
      icon: <FaCode />
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Project <span>Portfolio</span></h2>
        <div className="section-divider"></div>
        <p>Showcasing my technical solutions and implementations</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.thumbnail} // Replace dynamic string with thumbnail reference
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <div className="project-category">
                {project.icon}
                <span>{project.category}</span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
