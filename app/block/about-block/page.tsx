import NavigationBar from "@/components/navigation-bar/NavigationBar";
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