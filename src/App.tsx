import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import Home from './pages/Home';
import PhotoWall from './pages/PhotosWall';
import OngoingProjects from './pages/OngoingProjects';
import './App.css';

function App() {

  return (
    <div className="container">
      <div className="header">
        Buy Treats for S'more 
      </div>
      <Router>
        <ul className="navbar">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/smore">S'more</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ongoing-project">On-going Project</NavLink>
          </li>
        </ul>
        <div className='main-body'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smore" element={<PhotoWall />} />
            <Route path="/ongoing-project" element={<OngoingProjects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
