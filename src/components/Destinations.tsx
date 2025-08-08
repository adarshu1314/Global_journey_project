import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import SpainImg from "@/assets/Images/destination/Spain.jpg";
import PortugalImg from "@/assets/Images/destination/Portugal.jpg";
import MoroccoImg from "@/assets/Images/destination/Morocco.jpg";
import EasternEuropeImg from "@/assets/Images/destination/eastern_europe.jpg";
import BalkansImg from "@/assets/Images/destination/Balkans.jpg";
import GreeceImg from "@/assets/Images/destination/Greece.jpg";
import ScandinaviaImg from "@/assets/Images/destination/Scandinavia.jpg";
import IcelandImg from "@/assets/Images/destination/Iceland.jpg";
import centraleuropeImg from "@/assets/Images/destination/central-europe.jpg";
// Swiper Imports
import { motion } from "framer-motion";
import { useSwiperSlide } from "swiper/react"; // to detect active slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ZoomSlide from "./ZoomSlide";

const Destinations = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
   const swiperSlide = useSwiperSlide();
  const handleLearnMore = (destinationName: string) => {
    toast({
      title: `Learn More: ${destinationName}`,
      description: "Contact us to get detailed information about this amazing destination!",
    });

    // Scroll to contact section
    /*const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }*/
  };

const destinations = [
  {
    id: 1,
    name: "Spain",
    image: SpainImg,
    description:
      "Spain captivates with flamenco rhythms, grand architecture and Mediterranean coastlines.",
  },
  {
    id: 2,
    name: "Portugal",
    image: PortugalImg,
    description:
      "Portugal charms with golden beaches, Fado music and historic seaside cities.",
  },
  {
    id: 3,
    name: "United Kingdom",
    image: MoroccoImg,
    description:
      "A timeless blend of royal heritage, vibrant London, iconic landmarks and cultural wonders.",
  },
  {
    id: 4,
    name: "Eastern Europe",
    image: EasternEuropeImg,
    description:
      "Eastern Europe features castles, cobbled towns and deep-rooted cultural traditions.",
  },
  {
    id: 5,
    name: "Balkans",
    image: BalkansImg,
    description:
      "The Balkans offer stunning coastlines, ancient cities and diverse cultural legacies.",
  },
  {
    id: 6,
    name: "Greece",
    image: GreeceImg,
    description:
      "Greece dazzles with ancient ruins, sunlit islands and Mediterranean history.",
  },
  {
    id: 7,
    name: "Scandinavia ",
    image: ScandinaviaImg,
    description:
      "Scandinavia blends Viking heritage with fjords, design and vibrant cities.",
  },
  
   {
    id: 8,
    name: "Central Europe",
    image: centraleuropeImg,
     description: "Central Europe offers vibrant cities, rich history, diverse cultures and beautiful landscapes for memorable travel.",
  },
  
];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center py-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 textOrange"
           >
              Popular Destinations 
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most amazing places with our carefully curated travel experiences
          </p>
        </div>

      <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  centeredSlides={true}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  }}
>

          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
           <ZoomSlide>
              <Card className="group overflow-hidden hover:shadow-large transition-all duration-500 border-0 bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  
                </div>

                <CardContent className="p-6">
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {destination.name}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {destination.description}
                  </p>

                  <Button
                    variant="outline"
                    className="bg-gradient-sunset w-full text-white  group-hover:text-white transition-colors duration-300 "
                    onClick={() => navigate("/destination-info")}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              </ZoomSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
