import React from 'react';
import {Link} from "react-router-dom";



function AboutIconLink() {
  return (
    <div className='about-link'>
    <Link to="/about">
    About Application
    </Link>
    </div>
  )
}

export default AboutIconLink