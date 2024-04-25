import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>  {/* Wrap your components with Router */}
      <div className="App">
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
