import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

import Resume from './components/Resume';
import About from './components/About';
import ModifiedProjects from './components/ModifiedProjects';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/modifiedprojects" element={<ModifiedProjects />} /> 
        </Routes>

         
      </div>
    </Router>
  );
};

export default App;
