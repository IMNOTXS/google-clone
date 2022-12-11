import React from "react";
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
