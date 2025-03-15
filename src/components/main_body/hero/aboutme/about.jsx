import React from "react";
import "./about.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function about() {
  useGSAP(() => {
    gsap.from("#about h1", {
      y: -50,
      opacity: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#about h1",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    gsap.from("#about .about-containers .about-about", {
      x: -50,
      opacity: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 1,
      scrollTrigger: {
        trigger: "#about .about-containers .about-about",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        scrub: 1,

      },
    });

    gsap.from("#about .about-containers .about-skills", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 1,
      scrollTrigger: {
        trigger: "#about .about-containers .about-skills",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    gsap.from("#about .about-containers .about-experience", {
      x: 50,
      opacity: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 1,
     
      scrollTrigger: {
        trigger: "#about .about-containers .about-experience",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        scrub: 1,

      },
    });
  });





  return (
    <>
      <div className="about-main" id="about">
        <h1>Let's Talk About Me</h1>

       <div className="about-containers">
       <div className="about-about">
        <h2>About Me</h2>
          <h3>
            Hi, I’m Azman Sarker, a passionate web developer and content
            creator. I love building interactive, user-friendly websites and
            continuously expanding my skills to become a full-stack developer. I
            also have a creative side, with experience in video editing, photo
            editing, and content creation.
          </h3>
        </div>

        <div className="about-skills">
          <h2>Skills & Expertise</h2>
          <ul>
            <li>Web Development: HTML, CSS, JavaScript, React.js</li>
            <li>Frontend Frameworks: Tailwind CSS</li>
            <li>Version Control: Git, GitHub</li>
            <li>API Handling: Currently learning & improving</li>
            <li>Video Editing: Filmora (4+ years of experience)</li>
            <li>Photo Editing: Basic to intermediate level</li>
            <li>Content Creation: YouTube video scripting & production</li>
          </ul>
        </div>

        <div className="about-experience">
          <h2>Experience</h2>
          <h3>
            I have worked on multiple personal and collaborative projects,
            constantly refining my skills. My portfolio showcases my best work,
            including React projects, creative web designs, and engaging video
            content. I’m always open to new opportunities, collaborations, and
            exciting projects. Feel free to explore my work and get in touch!
          </h3>
        </div>
       </div>
      </div>
    </>
  );
}

export default about;
