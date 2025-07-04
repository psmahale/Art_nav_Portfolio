// Editing.js (Final Working Version)
import { useState } from 'react';
import { FaCamera, FaEdit, FaStar, FaYoutube } from 'react-icons/fa';
import '../styles/Editing.css';

// Import sample thumbnails (replace with your actual images)
import thumbnail1 from '../assets/ana.jpg';

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
    youtubeId: "PE68w-AdAI4", // Extracted from YouTube URL
    thumbnail: thumbnail1
  },
  {
    id: 3,
    title: "College Publicity Video",
    type: "video",
    description: "Lyric-based visual effects",
    software: ["After Effects", "DaVinci Resolve"],
    category: "personal",
    youtubeId: "Ymbs49iplYU",
    thumbnail: "https://img.youtube.com/vi/Ymbs49iplYU/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "Wedding Save The Date",
    type: "video",
    description: "30-second product highlight reel",
    software: ["Premiere Pro", "After Effects"],
    category: "commission",
    youtubeId: "Aq0eEEk5cqQ",
    thumbnail: "https://img.youtube.com/vi/Aq0eEEk5cqQ/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "Dr Strange Magical Effect",
    type: "video",
    description: "Narrative editing with color grading",
    software: ["DaVinci Resolve", "Premiere Pro"],
    category: "personal",
    youtubeId: "xmloiKbbtSg",
    thumbnail: "https://img.youtube.com/vi/xmloiKbbtSg/maxresdefault.jpg"
  },
  {
    id: 8,
    title: "Drawing a Portrait of youtuber known as Anithing",
    type: "video",
    description: "Animated channel introduction",
    software: ["After Effects"],
    category: "personal",
    youtubeId: "ax4q8vssXvY",
    thumbnail: "https://img.youtube.com/vi/ax4q8vssXvY/maxresdefault.jpg"
  }
];

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
      {/* 1. Header */}
      <div className="editing-header">
        <h2>Editing Portfolio <span>by Pranav Mahale</span></h2>
        <div className="section-divider"></div>
        <p>Showcasing my video editing projects and photo post-processing samples</p>
      </div>

      {/* 2. Filters */}
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

      {/* 3. Projects Grid */}
      <div className="content-container">
        {filteredProjects.length > 0 ? (
          <div className="editing-grid">
            {filteredProjects.map(project => (
              <div className="edit-project-card" key={project.id}>
                <div className="edit-thumbnail-container">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    loading="lazy"
                    className="edit-thumbnail"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/400x300?text=Thumbnail+Not+Found';
                    }}
                  />
                  {project.type === 'video' && (
                    <div 
                      className="play-overlay" 
                      onClick={() => window.open(project.youtubeLink, '_blank')}
                    >
                      <FaYoutube className="play-icon" />
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