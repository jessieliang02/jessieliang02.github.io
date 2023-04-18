import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";

function App() {

  const linkedInUrl = 'https://www.linkedin.com/in/jessieliang97/'; 
  const githubUrl = 'https://github.com/jessieliang02'; 

  return (
    <div className="container">
      <div className="header">
        Buy Treats for S'more 
      </div>
      <ul className="navbar">
        <li className="nav-item">Home</li>
        <li className="nav-item">On-going Projects</li>
      </ul>
      <div className="main-content">
        <h1>Jessie Liang</h1>
        <p>
          I am a junior software engineer looking for job opportunities...
        </p>
        <p>Contact: jessieliang2015ca@gmail.com</p>
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
          onClick={() => window.open('', '_blank')}
        >
          Visit Example Website
        </button>
      </div>
    </div>
  );
}

export default App;
