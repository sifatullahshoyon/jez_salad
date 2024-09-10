import Food from "@/components/Homepage/Food";
import Header from "@/components/Homepage/Header";
import Container from "@/components/Shared/Container";


export default function Home() {
  return (
      <main>
       <Container>
        {/* <Header /> */}
        <Food />
       </Container>
      </main>
  );
}
