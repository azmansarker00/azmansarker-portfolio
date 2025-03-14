import React from 'react'
import "./App.css"
import { useEffect } from "react";
import Navbar1 from './components/header/nav1/navbar.jsx'
import HomeMenu from './components/main_body/home_menu/homeMenu.jsx'
import Navbar2 from './components/header/nav2/navbar.jsx'
import Text1 from "./components/main_body/texts/text1/text1.jsx"
import About from "./components/main_body/hero/aboutme/about.jsx"
import RollingText from "./components/main_body/texts/rollingText/rollingText.jsx"
import Contact from "./components/main_body/hero/contact/contact.jsx"


import Footer from './components/footer/footer.jsx'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar1/>
      <HomeMenu/>
      <Navbar2/>
      <Text1 />
      <About />
      <RollingText />
      <Contact />
      <Footer />
    </>
  )
}

export default App
