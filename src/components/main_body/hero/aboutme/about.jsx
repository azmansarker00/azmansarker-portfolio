import React from 'react'
import "./about.css"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function about() {

  useGSAP(()=>{
          gsap.from ("#about h1", {
              y: 50,
              opacity: 0,
              duration: 2,
              ease: "back.out(1.7)",
              delay: 0.5,
              scrollTrigger: {
                trigger: "#about h1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none none",
              },
          })
        })
  return (
    <>
    <div className='about-main' id='about'>
      <h1>Let's Talk About Me</h1>
       
       </div>
    </>
  )
}

export default about