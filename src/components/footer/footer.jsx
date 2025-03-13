import React from 'react'
import './footer.css'


import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


function footer() {
  return (
    <>
    <footer className="footer">
        <h1 className='logo-footer'>Azman Sarker</h1>
        <p className='comment-footer'>This website is a personal website. It is my own work and anyone who copies any information or design from this website will be brought under copyright.</p>

        <div className='lowerSection-footer'>
            <p className='licence-footer'>© 2025 Azman Sarker</p>

            <div className='links-footer'>
                <a href="https://www.facebook.com/azman.sarker.ifrad">< FaFacebook /></a>
                <a href="https://www.instagram.com/am_i_fair/">< AiFillInstagram /></a>
                <a href="https://github.com/azmansarker00">< FaGithub /></a>
                <a href="https://www.linkedin.com/in/az-man-sarker-0416bb23a/"> <FaLinkedin /> </a>
                
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer