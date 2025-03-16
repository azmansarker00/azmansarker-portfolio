import React from "react";
import "./contact.css";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function contact() {
  useGSAP(() => {
    gsap.from("#contact h1", {
      y: -50,
      duration: 2.5,
      ease: "circ.out",
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#contact h1",
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    gsap.from("#contact h2", {
      x: -50,
      duration: 2.5,
      ease: "circ.out",
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#contact h2",
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });
    
    gsap.from("#contact .mantain .contatc-left", {
      x: -50,
      duration: 2.5,
      ease: "circ.out",
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#contact h2",
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    gsap.from("#contact .mantain .contact-right", {
      x: 50,
      duration: 2.5,
      ease: "circ.out",
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#contact h2",
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });
  });
  return (
    <div className="contact-main" id="contact">
      <h1>CONTACT</h1>
      <h2>Let's get in touch</h2>
      <div className="mantain">
        <div className="contatc-left">
          <h3>Address:</h3>
          <p>Narayanganj, Dhaka, Bangladesh</p>
          <h3>Phone:</h3>
          <a href="tel:+8801540190748">+880 1540190748</a>
          <h3>Email:</h3>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJTNqmNzQNRCdkfBVcJKFXdljGqNVlfWxQLRvgkwTnVkLLzRBkfNTTbWdBRZzZJPqLTcfML"
            target="blank"
          >
            azmansarker861@gmail.com
          </a>
        </div>

        <div className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7307.208505719256!2d90.48644882658822!3d23.690106504505273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1742066232819!5m2!1sen!2sbd"
            width="500"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default contact;
