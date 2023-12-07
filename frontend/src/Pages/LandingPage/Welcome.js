import { Box } from "@chakra-ui/layout";
import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "../../Components/Footer/Footer";

const Welcome = () => {
  return (
    <Box>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </Box>
  );
};

export default Welcome;
