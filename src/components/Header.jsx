import React from 'react';
import "./Header.css"

function Header({ text, bgColor}) {
  return (
    <header className='header-container'>
    <div className='container'>
        <h2>{text}</h2>
    </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
   
}

export default Header;
