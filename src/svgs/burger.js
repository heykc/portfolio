import React from 'react';
function Burger () {
  return (
    <svg 
      version="1.0" 
      id="burger" 
      x="0px" 
      y="0px"
      viewBox="0 0 60 55" 
    >
      <defs>
        <style>
          {`#top {
            transform-origin:30px 9.7px;
          }
          #mid {
            transform-origin:30px 27.5px;
          }
          #mid2 {
            transform-origin:30px 27.5px;
            opacity:0;
          }
          #bot {
            transform-origin:30px 45.3px;
          }`}
        </style>
      </defs>
      <line id="top" fill="none" stroke="#291F1E" stroke-width="7" stroke-miterlimit="10" x1="57.5" y1="9.7" x2="2.5" y2="9.7"/>
      <line id="mid" fill="none" stroke="#291F1E" stroke-width="7" stroke-miterlimit="10" x1="57.5" y1="27.5" x2="2.5" y2="27.5"/>
      <line id="mid2" fill="none" stroke="#291F1E" stroke-width="7" stroke-miterlimit="10" x1="57.5" y1="27.5" x2="2.5" y2="27.5"/>
      <line id="bot" fill="none" stroke="#291F1E" stroke-width="7" stroke-miterlimit="10" x1="57.5" y1="45.3" x2="2.5" y2="45.3"/>
    </svg>
  )
}

export default Burger;