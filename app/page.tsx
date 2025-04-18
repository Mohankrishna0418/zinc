import Container from "@/components/Container";
import NavigationBar from "@/components/navigationbar/Navigation-Bar";
import React from "react";
import HeroBlock from "./block/hero/Hero";

const page = () => {
  return (
    <>
      <NavigationBar />
      <Container>
      
          <HeroBlock />
          
      </Container>
    </>
  );
};

export default page;