import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Home from './screens/Home.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* PUBLIC PATHS */}
        <Route path="/" element={<Home/>}/>

        {/* ADMIN PATHS */}
      </Routes>
    </Router>
  );
}

export default App;
