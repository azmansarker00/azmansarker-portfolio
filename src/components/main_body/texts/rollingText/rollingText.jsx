import React, { useRef } from 'react'
import './rollingText.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function rollingText() {

  const scrollingText1 = useRef(null)
  const scrollingText2 = useRef(null)

  
  useGSAP(() => {
    gsap.to(scrollingText1.current, {
      xPercent: 3600,
      duration: 400, 
      ease: "linear",
      repeat: -1, 
      onRepeat: () => {
        gsap.set(textRef.current, { xPercent: -3600 }); 
        
      },
    });

    gsap.to(scrollingText2.current, {
      xPercent: -3600,
      duration: 400, 
      ease: "linear",
      repeat: -1, 
      onRepeat: () => {
        gsap.set(textRef.current, { xPercent: 3600 }); 
        
      },
    });
  });

  return (
    <>
    <div className="rollingText">
      <h3 ref={scrollingText1} >✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨  ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨  ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨</h3>

      <h3 ref={scrollingText2} >✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨  ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨  ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨   ✨ Passion Fuels Creation • Creativity Drives Innovation • Innovation Shapes the Future ✨</h3>
    </div>
    </>
  )
}

export default rollingText