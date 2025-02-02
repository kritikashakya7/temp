import React from 'react';
import '../Css/Scrap.css';
import { BookImage, Timer, MailOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Scrap = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="icons">
          {/* Scrapbook Icon */}
          <div className="icon-item">
          <Link to="/scrapbook">
            <BookImage className="icon" />
            <p>Scrapbook</p>
            </Link>
          </div>

          {/* Timer Icon */}
          <div className="icon-item">
            <Link to="/timer">
              <Timer className="icon" />
              <p>Timer</p>
            </Link>
          </div>

          {/* Letter for You Icon */}
          <div className="icon-item">
            <Link to="/letter">
              <MailOpen className="icon" />
              <p>Letter for you</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrap;
