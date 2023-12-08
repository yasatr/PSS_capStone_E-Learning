import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Animations/error404";
import { Box } from "@chakra-ui/react";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box bg={"#3a1740"}>
      <Lottie options={defaultOptions} height="100vh" width="100vh"></Lottie>
    </Box>
  );
};

export default ErrorPage;
