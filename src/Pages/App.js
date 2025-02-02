import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Css/Home.css'; // Correct path to the CSS file
import Scrap from './Scrap'; // Ensure Scrap.js exists
import Scrapbook from './Scrapbook'; // Ensure Scrapbook.js exists
import Home from './Home'; // Import Home component
import Timer from './Timer'; // Import your custom Timer component
import Letter from './Letter';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
        <Route path="/timer" element={<Timer />} /> {/* Correct the Timer route */}
        <Route path="/letter" element={<Letter/>}/>
      
        
      </Routes>
    </Router>
  );
};

export default App;
