import { useState } from 'react';
import { FaCamera, FaEdit, FaPlay, FaStar, FaYoutube } from 'react-icons/fa';
import '../styles/Editing.css';

// Only import the custom thumbnail we have
import anaThumbnail from '../assets/ana.jpg';

const Editing = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Drawing a Portrait of Ana De Armas",
      type: "video",
      description: "4K cinematic travel video with dynamic transitions",
      software: ["Premiere Pro", "After Effects"],
      category: "personal",
      youtubeId: "PE68w-AdAI4",
      youtubeLink: "https://youtu.be/PE68w-AdAI4?si=99oT9tCAVBL2vzuD",
      customThumbnail: anaThumbnail // Only for this video
    },
    {
      id: 3,
      title: "College Publicity Video",
      type: "video",
      description: "Lyric-based visual effects",
      software: ["After Effects", "DaVinci Resolve"],
      category: "personal",
      youtubeId: "Ymbs49iplYU",
      youtubeLink: "https://youtu.be/Ymbs49iplYU?si=ufH5NJ7Qbesv_Bo4"
    },
    {
      id: 4,
      title: "Wedding Save The Date",
      type: "video",
      description: "30-second product highlight reel",
      software: ["Premiere Pro", "After Effects"],
      category: "commission",
      youtubeId: "Aq0eEEk5cqQ",
      youtubeLink: "https://youtu.be/Aq0eEEk5cqQ?feature=share"
    },
    {
      id: 6,
      title: "Dr Strange Magical Effect",
      type: "video",
      description: "Narrative editing with color grading",
      software: ["DaVinci Resolve", "Premiere Pro"],
      category: "personal",
      youtubeId: "xmloiKbbtSg",
      youtubeLink: "https://youtu.be/xmloiKbbtSg?feature=share"
    },
    {
      id: 8,
      title: "Drawing a Portrait of youtuber known as Anithing",
      type: "video",
      description: "Animated channel introduction",
      software: ["After Effects"],
      category: "personal",
      youtubeId: "ax4q8vssXvY",
      youtubeLink: "https://youtu.be/ax4q8vssXvY"
    }
  ];

  // Get thumbnail URL - custom if available, otherwise YouTube default
  const getThumbnail = (project) => {
    if (project.customThumbnail) {
      return project.customThumbnail;
    }
    return `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
  };

  const filters = [
    { id: 'all', name: 'All Work', icon: <FaEdit /> },
    { id: 'video', name: 'Video Edits', icon: <FaYoutube /> },
    { id: 'photo', name: 'Photo Edits', icon: <FaCamera /> },
    { id: 'commission', name: 'Commissions', icon: <FaStar /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        activeFilter === 'commission' 
          ? project.category === 'commission' 
          : project.type === activeFilter
      );

  return (
    <section id="editing" className="editing-section">
      <div className="editing-header">
        <h2>Editing Portfolio <span>by Pranav Mahale</span></h2>
        <div className="section-divider"></div>
        <p>Showcasing my video editing projects and photo post-processing samples</p>
      </div>

      <div className="filter-container">
        <div className="editing-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`edit-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon} {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div className="content-container">
        {filteredProjects.length > 0 ? (
          <div className="editing-grid">
            {filteredProjects.map(project => (
              <div className="edit-project-card" key={project.id}>
                <div className="edit-thumbnail-container">
                  <img 
                    src={getThumbnail(project)} 
                    alt={project.title}
                    loading="lazy"
                    className="edit-thumbnail"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Fallback to lower quality YouTube thumbnail if maxres fails
                      e.target.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  {project.type === 'video' && (
                    <div 
                      className="play-overlay" 
                      onClick={() => window.open(project.youtubeLink, '_blank')}
                    >
                      <FaPlay className="play-icon" />
                      <span>Watch on YouTube</span>
                    </div>
                  )}
                  {project.category === 'commission' && (
                    <div className="commission-tag">Paid Work</div>
                  )}
                </div>
                
                <div className="edit-project-info">
                  <h3>{project.title}</h3>
                  <p className="edit-description">{project.description}</p>
                  <div className="software-tags">
                    {project.software.map(soft => (
                      <span key={soft} className={`software-tag ${soft.toLowerCase().replace(' ', '-')}`}>
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Editing;
