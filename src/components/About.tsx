import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const features = [
    "Leading DMC in Europe",
    "Exceptional, client-focused service",
    "Curated, personalized experiences",
    "Multilingual, expert team",
    "Innovation-driven solutions",
    "Culinary, cultural and immersive experience",
  ];
  const navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 textOrange ">
              About Global Journey
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 ">
              At Global Journey, a premier Destination Management Company (DMC), we are committed to providing outstanding European travel experiences. Backed by expert destination knowledge, cutting-edge technology and a passionate multilingual team, our wide range of services from group tours and MICE to special interest and accessible travel are thoughtfully crafted with quality, cultural authenticity and personalized care, ensuring every journey is seamless, enriching and truly unforgettable for both your clients as well as our partners.            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg"  onClick={() => navigate("/about-us")}>
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/80 mb-6">Years of Excellence</div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-white/80 text-sm">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">10K+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">98%</div>
                    <div className="text-white/80 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">25</div>
                    <div className="text-white/80 text-sm">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;