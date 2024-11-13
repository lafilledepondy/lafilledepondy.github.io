import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Research from './pages/research';
import Education from './pages/education';
import Publications from './pages/publications';
import Projects from './pages/projects';
import Codes from './pages/codes';
import Links from './pages/links';
import About from './pages/about';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="App-header">
          <h1 className='name'>Gayathiri Ravendirane</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/research">Research Interests</Link>
            <Link to="/education">Education</Link>
            {/* <Link to="/publications">Publications</Link> */}
            <Link to="/projects">Projects</Link>
            <Link to="/codes">Codes</Link>
            <a href="mailto:gayathiri.ravendirane@gmail.com?subject=Request%20for%20CV">CV</a>
            <Link to="/links">Links</Link>
            <Link to="/about">About Me</Link>
          </nav>
        </header>

        {/* Main content with Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/education" element={<Education />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/codes" element={<Codes />} />
            <Route path="/links" element={<Links />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>
            Theme inspired by <a href="https://candes.su.domains/">Prof. Emmanuel Candès's</a> webpage (2024).
          </p>
          <p className="small-text">Hosted on GitHub</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
