import React, { useState, useEffect } from 'react'; 
import './App.css';

const bgColors = {
  White: '#ffffff',
  Sea: '#a2ccb6',
  Sand: '#fceeb5',
  Peach: '#ee786e',
  LightPink: '#ffb6c1',
  Silver: '#c0c0c0'
}

function Header() {
  const [ bgColor, setBgColor ] = useState('#ffffff');
   
  useEffect(() => {
    // Updating the background color
    document.body.style.background = bgColor;
  }, [bgColor]);

  return (
    <header>
      <select value={bgColor} onChange={e => setBgColor(e.target.value)}>
        {/* Iterating the bgColors for Select field */}
        {Object.entries(bgColors).map(([name, value]) => (
          <option key={`color--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <div id="container">
        <h1>Simple React Background Color Change App.</h1>
        <p>Uses state to set color on the body from Options.</p>
      </div>
    </>
  );
}

export default App;
