import React from 'react'
import './text1.css'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function text1() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.to(".text1Container h1", {
            transform: "translateX(-250%)",
            scrollTrigger:{
                trigger: ".text1Container",
                scroller: "body",
                start: "top 0%",
                end: "top -800%",
                scrub: 2,
                pin: true,
            }
        })
    }, [])



  return (
    <>
        <div className="text1Container">
            <h1 >I'm Azman Sarker Ifrad – A Passionate Web Developer</h1>
        </div>
    </>
  )
}

export default text1