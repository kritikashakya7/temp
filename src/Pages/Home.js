import React from 'react';
import '../Css/Home.css'; 
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
    <div className="Home">
      
        <div className="container-wrapper">
          <img src="\catrose.jpg" />
          <div>
            <h2>Happy Valentine's Day, my love! 💖</h2>
            <h2>Every moment with you is a blessing, and I can't wait to create more beautiful memories together. Here's to forever. 🥂</h2>
         
        </div>
      </div>
      <div className='btn'>
      <Link to="/scrap">
        <button>Next</button>
       </Link>
      </div>
    </div>
  );
};

export default Home;
