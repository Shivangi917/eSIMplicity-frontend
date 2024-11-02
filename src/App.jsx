import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'; // Placeholder component for Home
import Plan from './Components/Plan/Plan'; // Assuming you already have this
import Guide from './Components/Guide/Guide'; // Placeholder component for Guide
import Login from './Components/Login/Login'; // Placeholder component for Login

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
