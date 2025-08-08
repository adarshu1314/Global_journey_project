import { Button } from "@/components/ui/button";
import { MapPin, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const scrollToDestinations = () => {
    const element = document.querySelector('#destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const element = document.querySelector('#destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Explore Our Packages",
      description: "Check out our amazing travel packages below!",
    });
  };

  return (
    <section id="home" className="relative top-[60px]  min-h-[calc(100svh-66px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful tropical paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-sunset/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
         
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden to-white">
          Your Trusted DMC Partner In Europe.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fadeInUp">
          Explore breathtaking destinations, create unforgettable memories and embark on the journey of a lifetime
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp ">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-sunset"
            onClick={scrollToDestinations}
          >
            Explore Destinations
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={scrollToPackages}
          >
            View Services
          </Button>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fadeInUp">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-8 h-8 text-golden" />
            </div>
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          
          <div className="text-center animate-fadeInUp">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-golden" />
            </div>
            <div className="text-3xl font-bold mb-1">10,000+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          
          <div className="text-center animate-fadeInUp">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-golden" />
            </div>
            <div className="text-3xl font-bold mb-1">15</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;