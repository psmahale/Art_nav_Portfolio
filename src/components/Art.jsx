import { useEffect, useState } from "react";
import { FaCameraRetro, FaPalette, FaPortrait } from "react-icons/fa";
import "../styles/Art.css";

// Import placeholder images
import p2 from "../assets/Ana_de_Armas.jpeg";
import p1 from "../assets/Anything.jpg";
import p3 from "../assets/Baby.jpeg";
import p14 from "../assets/Global_cafe.jpg";
import p11 from "../assets/hRX.jpg";
import p5 from "../assets/HRX2.jpeg";
import p7 from "../assets/Lalit.jpeg";
import p15 from "../assets/logo6.png"; // Assuming you have a logo image for HareTech
import p12 from "../assets/Nature.jpeg";
import p13 from "../assets/Nature2.jpg";
import p6 from "../assets/Ridhi.jpeg";
import p10 from "../assets/Samantha.jpeg";
import p4 from "../assets/Sarkar.jpeg";
import p8 from "../assets/Shruti.jpeg";
import p9 from "../assets/SRK.jpg";



const Art = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [expandedCategories, setExpandedCategories] = useState({
    portrait: true,
    painting: true,
    digital: true
  });

  const artworks = [
    {
      id: 1,
      title: "Depth of a Gaze",
      description: "A portrait of @Anything Youtuber where every shadow tells a story.(A5)",
      date: "jan 2025",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p1
    },
    {
      id: 2,
      title: "Expressions in Shades",
      description: "Ana De Armas (Crafted through layers of charcoal tones and patience).(A4)",
      date: "Dec 2024",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p2
    },
    {
      id: 3,
      title: "Textured Emotions",
      description: "Each smudge and stroke crafted to reveal silent emotion.(A4)",
      date: "Nov 2024",
      category: "portrait",
      price: "₹1500",
      commission: true,
      image: p3
    },
    {
      id: 4,
      title: "Realism in Shades",
      description: "A portrait defined by subtle gradients and strong contrasts(A4)",
      date: "May 2023",
      category: "portrait",
      price: "₹1500",
      commission: true,
      image: p4
    },
    {
      id: 5,
      title: "Faces That Speak Volumes",
      description: "Crafted through layers of charcoal tones and patience.(A4)",
      date: "May 2023",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p5
    },
    {
      id: 6,
      title: "Beyond the Lines",
      description: "Charcoal portrait on paper, capturing emotional depth.(A4)",
      date: "May 2023",
      category: "portrait",
      price: "₹1500",
      commission: true,
      image: p6
    },
    {
      id: 7,
      title: "Textured Emotions",
      description: "A monochrome masterpiece that captures more than a likeness.(A4)",
      date: "Jan 2023",
      category: "portrait",
      price: "₹1200",
      commission: true,
      image: p7
    },
    {
      id: 8,
      title: "Shadowed Smile",
      description: "Capturing a subtle smile in soft tones.(A4)",
      date: "Dec 2022",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p8
    },
    {
      id: 9,
      title: "Timeless",
      description: "SRK's classic pose in pure black and white.(A4)",
      date: "May 2023",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p9
    },
    {
      id: 10,
      title: "Still Beauty",
      description: "Peace and detail in one frame.(A3)",
      date: "Dec 2022",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p10
    },
    {
      id: 11,
      title: "The Look",
      description: "HRX'S Charcoal study of expression through the eyes.(A4)",
      date: "May 2023",
      category: "portrait",
      price: "NFS",
      commission: false,
      image: p11
    },
    {
      id: 12,
      title: "Nature in Charcoal",
      description: "A collection of charcoal pencil drawings that capture the calm, complexity, and textures of the natural world.(A5)",
      date: "May 2023",
      category: "painting",
      price: "NFS",
      commission: false,
      image: p13
    },
    {
      id: 13,
      title: "Global Cafe",
      description: "Brand logo design for a cafe, inspired by global cultures and flavors.",
      date: "Feb 2025",
      category: "digital",
      price: "For Sale",
      commission: false,
      image: p14
    },
    {
      id: 14,
      title: "Nature Mural",
      description: "Sunset which Stored in Colors.(A3)",
      date: "Dec 2022",
      category: "painting",
      price: "NFS",
      commission: false,
      image: p12
    },
    {
      id: 15,
      title: "HareTech Engineering Company Logo",
      description: "Logo shows the Company is about fire safety and engineering.",
      date: "May 2025",
      category: "digital",
      price: "₹2000",
      commission: true,
      image: p15
    },

    // ... (keep all your other artwork objects) ...
  ];

  const categories = [
    { id: "all", name: "All Works", icon: <FaPalette /> },
    { id: "portrait", name: "Portraits", icon: <FaPortrait /> },
    { id: "painting", name: "Paintings", icon: <FaPalette /> },
    { id: "digital", name: "Digital Art", icon: <FaCameraRetro /> }
  ];

   useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredArtworks = activeCategory === "all"
    ? artworks
    : artworks.filter(artwork => artwork.category === activeCategory);

  // Group artworks by category for mobile view
  const groupedArtworks = artworks.reduce((acc, artwork) => {
    if (!acc[artwork.category]) acc[artwork.category] = [];
    acc[artwork.category].push(artwork);
    return acc;
  }, {});


  const ArtCard = ({ artwork }) => (
    <div className="art-card">
      <div className="art-image-container">
        <img 
          loading="lazy"
          src={artwork.image} 
          alt={artwork.title} 
          className="art-image" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/300x300?text=Artwork+Image";
          }}
        />
        {artwork.commission && (
          <div className="commission-badge">
            Commission Work
          </div>
        )}
      </div>
      <div className="art-info">
        <h3>{artwork.title}</h3>
        <p className="art-description">{artwork.description}</p>
        <div className="art-footer">
          <span className="art-date">{artwork.date}</span>
          <span className="art-price">{artwork.price}</span>
        </div>
      </div>
    </div>
  );

  if (isMobileView) {
    return (
      <section id="sketches" className="art-section">
        <div className="art-container">
          <div className="art-header">
            <div className="header-content">
              <h2>Art Gallery <span>by Pranav Mahale</span></h2>
              <div className="section-divider"></div>
              <p>Explore my diverse collection of artworks</p>
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <div className="mobile-art-view">
            {/* Show selected category first if not "all" */}
            {activeCategory !== "all" && (
              <div className="mobile-category-section">
                <div 
                  className="mobile-category-header"
                  onClick={() => toggleCategory(activeCategory)}
                >
                  <h3>{categories.find(c => c.id === activeCategory)?.name || activeCategory}</h3>
                  <span className="toggle-icon">
                    {expandedCategories[activeCategory] ? '−' : '+'}
                  </span>
                </div>
                {expandedCategories[activeCategory] && (
                  <div className="mobile-art-gallery">
                    {groupedArtworks[activeCategory]?.map(artwork => (
                      <ArtCard key={artwork.id} artwork={artwork} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Show remaining categories */}
            {Object.entries(groupedArtworks)
              .filter(([category]) => activeCategory === "all" || category !== activeCategory)
              .map(([category, items]) => (
                <div className="mobile-category-section" key={category}>
                  <div 
                    className="mobile-category-header"
                    onClick={() => toggleCategory(category)}
                  >
                    <h3>{categories.find(c => c.id === category)?.name || category}</h3>
                    <span className="toggle-icon">
                      {expandedCategories[category] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedCategories[category] && (
                    <div className="mobile-art-gallery">
                      {items.map(artwork => (
                        <ArtCard key={artwork.id} artwork={artwork} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
    return (
    <section id="sketches" className="art-section">
      <div className="art-container">
        <div className="art-header">
          <div className="header-content">
            <h2>Art Gallery <span>by Pranav Mahale</span></h2>
            <div className="section-divider"></div>
            <p>Explore my diverse collection of artworks</p>
          </div>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="art-gallery">
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map(artwork => (
              <ArtCard key={artwork.id} artwork={artwork} />
            ))
          ) : (
            <div className="no-artworks">
              <p>No artworks found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Art;
