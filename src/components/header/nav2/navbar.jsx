import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  useGSAP(() => {
    gsap.from(".logo-nav2", {
      duration: 1.2,
      y: -20,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".logo-nav2",
        start: "top 0%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".links-nav2", {
      duration: 1.2,
      y: -20,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".links-nav2",
        start: "top 0%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".links-nav2 span", {
      duration: 1.2,
      y: -20,
      opacity: 0,
      delay: 0.5,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".links-nav2",
        start: "top 40%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <nav className="container-nav2">
      <h1 className="logo-nav2">Azman Sarker</h1>

      <div className="links-nav2">
      <span>
          <Link to="home" spy={true} smooth={true} offset={-60} duration={3000}>
            HOME
          </Link>
        </span>
        <span>
          <Link to="about" spy={true} smooth={true} offset={-60} duration={3000}>
            ABOUT ME
          </Link>
        </span>
        <span>
          <Link to="contact" spy={true} smooth={true} offset={-60} duration={3000}>
            CONTACT
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
