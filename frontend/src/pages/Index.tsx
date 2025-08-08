import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollButtons from "@/components/ScrollButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Services />
      <About />
      <Contact />
      <Footer />      
         <ScrollButtons/>
    </div>
  );
};

export default Index;
