import NavigationBar from "@/components/navigationbar/Navigation-Bar";
import Container from "@/components/Container";
import AboutBlock from "./About";

const HeroPage = () => {
  return (
    <>
      <NavigationBar />
      <Container>
      <AboutBlock/>
      </Container>
    </>
  );
};

export default HeroPage;