import { Card, CardContent } from "@/components/ui/card";
import { Plane, Shield, Map, Headphones, Camera, Users } from "lucide-react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ZoomSlide from "./ZoomSlide";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
  {
    id: 1,
    icon: Plane,
    title: "Leisure Groups",
    description: "Bring families, friends or affinity groups to Europe’s top destinations with curated logistics and experiences. Enjoy seamless coordination, expert guidance and unforgettable shared journeys."
  },
  {
    id: 2,
    icon: Shield,
    title: "MICE (Meetings, Incentives, Conferences and Events)",
    description: "We manage business events across Europe—from venue booking to cultural activities. Inspire collaboration with seamless execution of meetings, conferences and incentive trips."
  },
  {
    id: 3,
    icon: Map,
    title: "Special Interest Groups",
    description: "Explore passions through customized tours like foodie trails, art trips or cycling adventures. We craft unique programs with insider access and unforgettable group experiences."
  },
  {
    id: 4,
    icon: Headphones,
    title: "Educational Tours",
    description: "Engage students with hands-on learning through cultural, historical and scientific tours. Safe, organized and intellectually rich programs that go beyond classroom learning."
  },
  {
    id: 5,
    icon: Camera,
    title: "Abled Travel (Accessible Travel)",
    description: "Inclusive travel for all abilities with accessible lodging and adapted sightseeing. We ensure comfort, dignity and joy while exploring Europe without limitations."
  },
  {
    id: 6,
    icon: Users,
    title: "Signature Service Promise",
    description: "Every journey is crafted with care, passion and purpose. From planning to execution, we deliver enriching, hassle-free European travel experiences tailored to your needs."
  }
];

const navigate = useNavigate();

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground textOrange mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect travel experience, all in one place
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <SwiperSlide key={service.id}>
              <ZoomSlide>
            <Card key={index} onClick={() => navigate("/more-services")}
    className="cursor-pointer group hover:shadow-medium transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
            </ZoomSlide>
            </SwiperSlide>
          ))}
        </div>
          </Swiper>
      </div>
     {/* See More Services Link */}
<div className="mt-10 flex justify-center">
 
   <Button variant="cta" size="lg"   onClick={() => navigate("/more-services")}>
               See More Services
            </Button>
</div>

    </section>
  );
};

export default Services;