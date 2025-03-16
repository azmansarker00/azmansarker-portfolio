import React from "react";

// CSS
import "./App.css";

// React Router
import { useEffect } from "react";

// Components
import Navbar1 from "./components/header/nav1/navbar.jsx";
import HomeMenu from "./components/main_body/home_menu/homeMenu.jsx";
import Navbar2 from "./components/header/nav2/navbar.jsx";
import Text1 from "./components/main_body/texts/text1/text1.jsx";
import About from "./components/main_body/hero/aboutme/about.jsx";
import RollingText from "./components/main_body/texts/rollingText/rollingText.jsx";
import Contact from "./components/main_body/hero/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

// alert page
import Alert from "./components/alert/pagealert.jsx";



function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Alert />

      <Navbar1 />

      <HomeMenu />

      <Navbar2 />

      <Text1 />

      <RollingText />

      <About />

      <RollingText />

      <Contact />

      <RollingText />

      <Footer />
    </>
  );
}

export default App;
