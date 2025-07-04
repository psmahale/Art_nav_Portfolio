import { useState } from "react";
import {
  FaBriefcase // Add this new icon
  ,



  FaChartLine,
  FaCode,
  FaDatabase,
  FaFilm,
  FaGraduationCap,
  FaLaptopCode,
  FaPalette
} from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Profile Summary",
      icon: <FaLaptopCode className="tab-icon" />,
      content: (
        <div className="profile-content">
          <p className="section-text">
            AI/ML-focused Computer Engineering student with expertise in Python, Computer Vision,
            and modern development tools. currently enhancing CCTV security features at StomatoBot Technologies. Developing real-time threat detection models using Computer Vision and edge AI. Passionate about building scalable security solutions 
        with Python, OpenCV, and deep learning frameworks.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <div className="highlight-icon-container">
                <FaDatabase className="highlight-icon" />
              </div>
              <div className="highlight-text">
                <h4>AI/ML Development</h4>
                <p>Python, Computer Vision, TensorFlow, FastAPI</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon-container">
                <FaChartLine className="highlight-icon" />
              </div>
              <div className="highlight-text">
                <h4>AI-Assisted Development</h4>
                <p>ChatGPT, DeepSeek, Claude AI, Cursor AI</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      icon: <FaGraduationCap className="tab-icon" />,
      content: (
        <div className="education-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023 - 2026 (Expected)</div>
                <h4>Bachelor of Engineering in Computer Science</h4>
                <p className="institution">SVPM's College of Engineering, Malegaon</p>
                <p className="achievement">Current CGPA: 8.24 (Till 3rd Year)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2023</div>
                <h4>Higher Secondary Certificate (HSC)</h4>
                <p className="institution">Dr. D.Y. Patil Junior College, Pimpri</p>
                <p className="achievement">Percentage: 70.33%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2021</div>
                <h4>Secondary School Certificate (SSC)</h4>
                <p className="institution">Shri Ramdas Highschool, Belapur</p>
                <p className="achievement">Percentage: 90.60%</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      icon: <FaBriefcase className="tab-icon" />,
      content: (
        <div className="experience-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">March 2025 - Present</div>
                <h4>AI/ML Intern (Computer Vision)</h4>
                <p className="institution">StomatoBot Technologies Pvt Ltd</p>
                <div className="achievement">
                  <p>• Developing computer vision models for dental diagnostics</p>
                  <p>• Implementing image processing pipelines</p>
                  <p>• Optimizing ML model performance</p>
                  <p>• 6-month committed internship</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">August 2023</div>
                <h4>Robotics Intern</h4>
                <p className="institution">Kodacy (Virtual Internship)</p>
                <div className="achievement">
                  <p>• Completed 15-day virtual internship program</p>
                  <p>• Learned fundamentals of robotics systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Skills",
      icon: <FaCode className="tab-icon" />,
      content: (
        <div className="skills-content">
          <div className="skills-grid">
            <div className="skills-category">
              <h4><FaCode className="category-icon" /> Development</h4>
              <div className="skills-list">
                <span>React.js</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>Django</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaDatabase className="category-icon" /> AI/ML & Data</h4>
              <div className="skills-list">
                <span>TensorFlow</span>
                <span>Computer Vision</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaPalette className="category-icon" /> AI Tools</h4>
              <div className="skills-list">
                <span>ChatGPT</span>
                <span>DeepSeek</span>
                <span>Claude AI</span>
                <span>Google Stitch AI</span>
                <span>Cursor AI</span>
              </div>
            </div>
            <div className="skills-category">
              <h4><FaFilm className="category-icon" /> Creative</h4>
              <div className="skills-list">
                <span>Adobe Premiere Pro</span>
                <span>After Effects</span>
                <span>CapCut</span>
                <span>DaVinci Resolve</span>
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="about-card">
          <div className="card-content-wrapper">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
