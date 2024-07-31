import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MakingTravel from "./components/MakingTravel";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <>
      <div className='block md:hidden'>
        <Header />
      </div>

      <Hero />
      <MakingTravel />
      <Features />
      <Vision />
      <Blog />
      <Footer />
    </>
  );
}
