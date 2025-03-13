import React from 'react'
import "./navbar.css"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


function navbar() {

  useGSAP(() => {
    gsap.from('.logo-nav1 .nav1-logoo', {
      duration: 1,
      ease: "elastic.out(1,0.3)",
      y: -30,
      opacity: 0,
      delay: 0.5,
      stagger: 0.1, // Adds staggered effect for the letters
    });
    
  });

  return (
    <>
      <nav className='container-nav1' id='home'>
        <div className='logo-nav1'>
          <span className='nav1-logoo'>A</span>
          <span className='nav1-logoo'>z</span>
          <span className='nav1-logoo'>m</span>
          <span className='nav1-logoo'>a</span>
          <span className='nav1-logoo'>n</span>
          <span className='nav1-logoo'>&nbsp;</span>
          <span className='nav1-logoo'>S</span>
          <span className='nav1-logoo'>a</span>
          <span className='nav1-logoo'>r</span>
          <span className='nav1-logoo'>k</span>
          <span className='nav1-logoo'>e</span>
          <span className='nav1-logoo'>r</span>
        </div>
      </nav>
    </>
  );
}

export default navbar