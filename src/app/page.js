"use state";
import Navbar from "./components/Navbar";
import Accordion from "./components/Faq";
import Hero from "./components/Hero";
import CardWall from "./components/CardWall";
import FooterComponnet from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardWall />
      <Accordion />
      <FooterComponnet />
    </div>
  );
}
