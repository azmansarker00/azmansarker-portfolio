import React, { useRef } from 'react'
import './rollingText.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function rollingText() {

  const scrollingText = useRef(null)

  
  useGSAP(() => {
    gsap.to(scrollingText.current, {
      xPercent: 215,
      duration: 15, 
      ease: "linear",
      repeat: -1, 
      onRepeat: () => {
        gsap.set(textRef.current, { xPercent: -215 }); 
        
      },
    });
  });

  return (
    <>
    <div className="rollingText">
      <h3 ref={scrollingText} >✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨</h3>
    </div>
    </>
  )
}

export default rollingText