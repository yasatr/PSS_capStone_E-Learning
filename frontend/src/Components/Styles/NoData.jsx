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
    <Box marginTop="30px">
      <Lottie options={defaultOptions} height="20%" width="20%"></Lottie>
    </Box>
  );
};

export default NoData;
