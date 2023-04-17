import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";

function App() {

  const linkedInUrl = '#'; // Replace with your LinkedIn profile URL
  const githubUrl = '#'; // Replace with your GitHub profile URL

  return (
    <div className="container">
      <div className="header">
        Your Name
      </div>
      <ul className="navbar">
        <li className="nav-item">Home</li>
        <li className="nav-item">Other Page</li>
      </ul>
      <div className="main-content">
        <h1>Your Name</h1>
        <p>
          Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          venenatis commodo lectus, at pharetra ligula.
        </p>
        <p>Contact: your.email@example.com</p>
        <p>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <button
          className="btn"
          onClick={() => window.open('https://www.example.com', '_blank')}
        >
          Visit Example Website
        </button>
      </div>
    </div>
  );
}

export default App;
