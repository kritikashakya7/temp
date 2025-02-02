import React from 'react';
import '../Css/Letter.css';
import { Link } from 'react-router-dom'; 

const Letter = () => {
  return (
    <div className="letter-container">
      <div className="page-wrapper">
        <img src="/page.jpeg" alt="Page" className="page-image" />
        <div className="letter-text">
          <p>
            Dear Jebs,
            <br />
            <br />
            I just wanted to take a moment to tell you how much you mean to me. From the
            moment we met, you have brought endless joy and love into my life. 
            <br />
            <br />
            It's been three wonderful years of loving you, and I hope to continue loving you for a lifetime. 
            You've brought so much happiness into my life during these years. Embracing each other's imperfections
            and growing together has been such a beautiful experience. I’m so proud of you, and I always will be. I
            can’t express enough how grateful I am for everything you’ve done for me.
            <br />
            <br />
            Forever yours,
            <br />
           Kooks
          </p>
        </div>
      </div>
      <div className='btn'>
         <Link to="/scrap">
        <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Letter;
