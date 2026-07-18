import profileImage from '../assets/DP2.jpg';
import '../styles/Home.css';
//import resumeFile from '../assets/pranavmahale04@gmail.com_8767557467.pdf'; // Import here

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    // Points directly to public/resume.pdf at the root
    link.href = '/resume.pdf'; 
    link.download = 'pranavmahale04@gmail.com_8767557467.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <div className="home-content">
          <h1 className="home-title">
            Hello, I'm <span className="highlight">Pranav Mahale</span>
          </h1>
          <p className="home-subtitle">Computer Engineer</p>
          <p className="home-description">
            Building digital experiences that matter. Let’s create something extraordinary. Explore my work ↓
          </p>
          <div className="home-buttons">
            <button 
              onClick={handleDownloadCV} 
              className="btn btn-primary"
            >
              Get My CV
            </button>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
