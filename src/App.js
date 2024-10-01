import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import your components here
// import Home from './components/Home';
// import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div> Home Page </div>} />{" "}
        {/* Add more routes as needed */}{" "}
        {/* <Route path="/about" element={<About />} /> */}{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
