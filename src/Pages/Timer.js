import React, { useState, useEffect } from 'react';
import '../Css/Timer.css';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const startDate = new Date('2021-12-18'); // Start date: December 18, 2021

    const updateTime = () => {
      const currentDate = new Date();
      const diff = currentDate - startDate; // Difference in milliseconds

      const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
      const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Seconds

      setTimeElapsed(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <div className="timer-wrapper">
        <div className="timer-content">
          <div className="search-bar">
            <input type="text" placeholder=" How long have we been together?" />
            <Search className="icon-search" />
          </div>
          <p className="time-elapsed">{timeElapsed}</p>
        </div>
        {/* Button placed outside the timer box */}
        <div className="btn-container">
          <Link to="/scrap">
            <button className="back-button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Timer;
