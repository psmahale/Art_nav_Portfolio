import { FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import '../styles/Certificate.css';

// Import all certificate images
import cert1 from '../assets/Restful_api.jpg';
import cert2 from '../assets/IBM.jpg';
import cert3 from '../assets/Hackathon.jpg';
import cert4 from '../assets/AI&ML_Wokshop.jpg';
import cert5 from '../assets/Robotics.jpg';
import cert6 from '../assets/Cpp.jpg';
import cert7 from '../assets/SVN.jpg';
import cert8 from '../assets/Adobe_After_effects.jpg';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Professional RESTful API Design Using Python Flask",
      issuer: "Alison",
      date: "December 2024",
      description: "Successfully completed the course on designing RESTful APIs using Python Flask framework",
      skills: ["Python", "Flask", "API Design", "Backend Development"],
      image: cert1
    },
    {
      id: 2,
      title: "Python for Data Science, AI & Development",
      issuer: "IBM via Coursera",
      date: "July 2024",
      description: "Completed an online non-credit course on Python for Data Science, AI and Development",
      skills: ["Python", "Data Science", "AI", "Development"],
      image: cert2
    },
    {
      id: 3,
      title: "CMR Hackfest 2.0 Participation",
      issuer: "CMR College of Engineering & Technology",
      date: "January-February 2025",
      description: "Participated in 36-hour national level hackathon focused on innovative solutions",
      skills: ["Problem Solving", "Teamwork", "Rapid Prototyping"],
      image: cert3
    },
    {
      id: 4,
      title: "AI & ML Workshop",
      issuer: "Ethical Edufabrica Pvt. Ltd.",
      date: "October 2024",
      description: "Completed 2-day offline workshop on Artificial Intelligence with Machine Learning at IISc Bangalore",
      skills: ["Artificial Intelligence", "Machine Learning", "Workshop"],
      image: cert4
    },
    {
      id: 5,
      title: "Robotics Internship",
      issuer: "Kodacy in association with SPACE",
      date: "August 2023",
      description: "Completed 15-day virtual internship program on Robotics",
      skills: ["Robotics", "Internship", "Virtual Training"],
      image: cert5
    },
    {
      id: 6,
      title: "Certificate in C++ Language",
      issuer: "Savitribai Phule Pune University and ETH Research Lab",
      date: "October 2023",
      description: "Successfully completed the course in C++ Language with grade A",
      skills: ["C++", "Programming", "Software Development"],
      image: cert6
    },
    {
      id: 7,
      title: "Volunteer Appreciation Certificate",
      issuer: "Partex (Jambavanta Foundation)",
      date: "September 2024",
      description: "Recognized for outstanding dedication as a volunteer in World Record-Setting Event commemorating Swami Vivekananda's 1893 Chicago speech",
      skills: ["Volunteering", "Event Management", "Community Service"],
      image: cert7
    },
    {
      id: 8,
      title: "Adobe After Effects: Rain Stop Visual Effects for Beginners",
      issuer: "Alison",
      date: "March 2025",
      description: "Successfully completed a beginner-level course on creating rain stop visual effects using Adobe After Effects.",
      skills: ["Adobe After Effects", "Visual Effects", "Video Editing"],
      image: cert8
    }
  ];

  return (
    <section id="certifications" className="certificate-section">
      {/* Header */}
      <div className="certificate-header">
        <h2>Certifications <span>by Pranav Mahale</span></h2>
        <div className="section-divider"></div>
        <p>Validated skills and professional accreditations</p>
      </div>

      {/* Certificates Grid */}
      <div className="certificate-container">
        <div className="certificate-grid">
          {certificates.map(cert => (
            <div className="certificate-card" key={cert.id}>
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  loading="lazy"
                  className="certificate-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Image';
                  }}
                />
              </div>
              
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="issuer">
                    <FaIdCard className="meta-icon" /> {cert.issuer}
                  </span>
                  <span className="date">
                    <FaCalendarAlt className="meta-icon" /> Issued {cert.date}
                  </span>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-skills">
                  {cert.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
