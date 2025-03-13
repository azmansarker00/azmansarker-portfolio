import React from "react";
import "./homeMenu.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function homeMenu() {

    useGSAP(()=>{
        gsap.from (".homeContainerText .homeMenu-hero", {
            y: 50,
            opacity: 0,
            duration: 2.5,
            ease: "back.out(1.7)",
            delay: 2
        })

        gsap.from (".homeContainerText .homeMenu-bio", {
          y: 50,
          opacity: 0,
          duration: 2.5,
          delay: 3
      })
    })
  return (
    <>
      <div className="homeContainer">
        <div className="homeContainerText">
            <h1 className="homeMenu-hero">WELCOME TO MY SPACE</h1>
            <h1 className="homeMenu-bio">Exploring the universe of creativity and innovation</h1>
        </div>
        <video
          src="https://res.cloudinary.com/dvzvnbvmw/video/upload/v1741874157/web_lujjbi.mp4"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          disablePictureInPicture
        ></video>
      </div>
    </>
  );
}

export default homeMenu;
