import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <Box>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </Box>
    </div>
  );
};

export default Welcome;
