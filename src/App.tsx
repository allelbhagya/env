import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <header className="App-header">
        <div className='text-side'>
          hello world 🌱
          <div className="button-container">
    <button className="analysis-btn">Analysis</button>
    <button className="carbon-footprint-btn">Check your carbon footprint</button>
  </div>
        </div>
        
        <div className='main-img'>
        <img src="/1.svg" alt="Main Image" />  
        <img src="/cloud.webp" className="cloud-img cloud1" alt="Cloud 1" style={{ top: '30%', left: '60%', width: '150px', height: 'auto' }} />
        <img src="/cloud.webp" className="cloud-img cloud2" alt="Cloud 2" style={{ top: '70%', left: '80%', width: '150px', height: 'auto' }} />
      </div>


      </header>
    </div>
  );
}

export default App;
