import { Box } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "../../Components/Footer/Footer";
import animationData from '../../Animations/welcome.json'
import animationData1 from '../../Animations/DownArrow.json'
import animationData2 from '../../Animations/WelcomeLoader.json'
import Lottie from "react-lottie";
import { Link } from 'react-scroll';

const Welcome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };
  const defaultArrow ={
    loop:true,
    autoplay : true,
    animationData : animationData1,
    rendererSettings:{
      preserveAspectRatio:"xMidYMid meet"
    }
  }
  const defaultLogo={
    loop:true,
    autoplay : true,
    animationData : animationData2,
    rendererSettings:{
      preserveAspectRatio:"none"
    }
  }
  const [showLoader, setShowLoader] = useState(true);
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setShowLoader(false);
    }, 6000);
    return () => clearTimeout(timeoutId);
  },[]);
  return (
    
    <Box bg={"#1A202C"}>
      {showLoader?(
        <Box>
          <Lottie options={defaultLogo} height="800px" width="800px"></Lottie>
        </Box>
      
      ):(
        <Box>
        <Box  w="100%" h="700px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p="2rem" m="0" style={{position:"relative"}} >
        <Lottie options={defaultLogo} height="100px" width="100px" />
        <marquee behavior = "slide" width="50%" direction="left" height="100px" scrollamount="12"  style={{marginTop : "30px", fontSize: "3.5rem", fontWeight: "bold", color: "rgba(255, 255, 255, 0.92)", justifyConten:"center"}}>
        Welcome To SkillForge!!
        </marquee>
        <Lottie options={defaultOptions} height="700px" width="80%"  ></Lottie>
        <Lottie options={defaultArrow} height='200px' width="300px" style={{position:"absolute", bottom:"-100px"}}></Lottie>
        </Box>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
        </Box>
        
      )}
    </Box>
  );
};

export default Welcome;
