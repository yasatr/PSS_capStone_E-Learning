import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Animations/nodata";
import { Box } from "@chakra-ui/react";

const NoData = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box>
      <Lottie options={defaultOptions} height="50%" width="50%"></Lottie>
    </Box>
  );
};

export default NoData;
