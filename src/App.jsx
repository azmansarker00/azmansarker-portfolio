import React from 'react'
import "./App.css"
import Navbar1 from './components/header/nav1/navbar.jsx'
import HomeMenu from './components/main_body/home_menu/homeMenu.jsx'
import Navbar2 from './components/header/nav2/navbar.jsx'
import Text1 from "./components/main_body/texts/text1/text1.jsx"
import About from "./components/main_body/hero/aboutme/about.jsx"
// import Text2 from "./components/main_body/texts/text2/text2.jsx"
// import Contact from "./components/main_body/hero/contact/contact.jsx"


// import Footer from './components/footer/footer.jsx'

function App() {
  
  return (
    <>
      <Navbar1/>
      <HomeMenu/>
      <Navbar2/>
      <Text1 />

      <About />


      {/* <Contact /> */}
      <div id="test1"></div>
      
      
      {/* <Footer /> */}
    </>
  )
}

export default App
