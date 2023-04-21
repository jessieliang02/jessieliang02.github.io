import React from 'react';
import "./Home.css";

function Home() {

    const linkedInUrl = 'https://www.linkedin.com/in/jessieliang97/'; 
    const githubUrl = 'https://github.com/jessieliang02'; 

  return (
    <div className="main-content">
        <h1>Jessie Liang</h1>
        <p>I am a junior software engineer looking for job opportunities... </p>
        <p>S'more is a long-haired dachshund who loves to sleep and steal my flip flops.</p>
        <p>I need to work hard to buy treats and more flip flops for S'more.</p>
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
        {/* <button
          className="btn"
          onClick={() => window.open('', '_blank')}
        >
          Visit Example Website
        </button> */}
    </div>
  );
}

export default Home;
