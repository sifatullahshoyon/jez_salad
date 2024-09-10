import AboutUs from "@/components/Homepage/AboutUs";
import Food from "@/components/Homepage/Food";
import Header from "@/components/Homepage/Header";
import Menu from "@/components/Homepage/Menu";
import Subscribe from "@/components/Homepage/Subscribe";
import Container from "@/components/Shared/Container";


export default function Home() {
  return (
      <main>
       <Container>
        {/* <Header /> */}
        <Food />
       </Container>
        <AboutUs />
        <Container>
          <Menu />
          <Subscribe />
        </Container>
      </main>
  );
}
