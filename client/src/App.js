import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComp from './components/NavComp/NavComp';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
