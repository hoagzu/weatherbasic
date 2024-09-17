import React from 'react';
import './Heading.scss';

function Heading() {
  return (
    
    <div className="heading">
      <div className="heading_logo">Dark Weather</div>
      <nav className="heading_anchor">
        <a href="#">Home</a>
        <a href="#">Download App</a>
        <a href="#">Contact us</a>
      </nav>
      <button className="heading_signup">Sign up</button>
    </div>
  );
}

export default Heading;
