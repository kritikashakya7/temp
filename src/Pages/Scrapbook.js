
import React from 'react';
import '../Css/Scrapbook.css';
import { Link } from 'react-router-dom'; 

const Scrapbook = () => {
  // Image filenames (assuming they are inside the public folder)
  const images = Array.from({ length: 12 }, (_, i) => `/j${i + 1}.jpeg`);

  return (
    <div className="scrapbook-container">
      <h1>Our Memories</h1>
      <div className="scrapbook-grid">
        {images.map((src, index) => (
          <div key={index} className="scrapbook-item">
            <img src={src} alt={`Memory ${index + 1}`} />
          </div>
        ))}
         <div className="btn-container">
                  <Link to="/scrap">
                    <button className="back-button">Back</button>
                  </Link>
                  </div>
      </div>
    </div>
  );
};

export default Scrapbook;


