import React from 'react';
import './Section.scss';

function Section() {
  return (
    <div className="section">
      <h1>Seeing the weather of the whole world</h1>
      <div className="section_content">
        <h2>with</h2>
        <h2 className="section_highlight">Dark Weather!</h2>
      </div>
    </div>
  );
}

export default Section;
