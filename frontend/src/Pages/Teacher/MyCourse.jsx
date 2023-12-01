import React, { useEffect } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import { SimpleGrid, Box } from "@chakra-ui/react";
import SmallCourseCard from "../../Components/Card/SmallCourseCard";


function MyCourse() {

    const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
  return (
    <div>
      <Navbar />
      <SimpleGrid columns={3} spacing={10} >
      {names.map(name => (
        <SmallCourseCard title={name}/>
      ))}
      </SimpleGrid>
    </div>
  );
}

export default MyCourse;