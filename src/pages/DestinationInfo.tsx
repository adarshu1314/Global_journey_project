import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Images
import SpainImg from "@/assets/Images/destination/Spain.jpg";
import PortugalImg from "@/assets/Images/destination/Portugal.jpg";
import MoroccoImg from "@/assets/Images/destination/Morocco.jpg";
import EasternEuropeImg from "@/assets/Images/destination/eastern_europe.jpg";
import BalkansImg from "@/assets/Images/destination/Balkans.jpg";
import GreeceImg from "@/assets/Images/destination/Greece.jpg";
import ScandinaviaImg from "@/assets/Images/destination/Scandinavia.jpg";
import IcelandImg from "@/assets/Images/destination/Iceland.jpg";
import centraleuropeImg from "@/assets/Images/destination/central-europe.jpg";
import ScrollButtons from "@/components/ScrollButtons";

type Destination = {
  title: string;
  description: string;
  image: string;
};

const destinations: Destination[] = [
  {
    title: "Spain",
    image: SpainImg,
    description:
      "A country of vibrant culture, flamenco rhythms and striking architecture; Spain captivates visitors with treasures like Barcelona’s Sagrada Família, Madrid’s museums, Andalusia’s palaces and sun-soaked Mediterranean coastlines. Its historic cities, lively festivals and world-class cuisine promise unforgettable experiences.",
  },
  {
    title: "Portugal",
    image: PortugalImg,
    description:
      "Portugal’s charm lies in its golden beaches, soulful Fado music and centuries-old cities. Explore Lisbon’s hills, Porto’s riverside and the fairytale palaces of Sintra. Renowned for its port wine and seafaring history, Portugal invites you to discover authentic traditions and flavors.",
  },
  {
    title: "United Kingdom",
    image: MoroccoImg,
    description:
      "The United Kingdom blends tradition with modern culture, anchored by dynamic London. Explore Buckingham Palace, the Tower of London and the British Museum. Big Ben, the London Eye, West End shows, bustling markets and green parks showcase the capital’s charm. Beyond, discover Stonehenge, the Cotswolds, York’s medieval streets, Roman Bath and Scotland’s majestic beauty. Across Britain, historic castles, countryside and a rich mix of art, music and cuisine promise memorable experiences.",
  },
  {
    title: "Eastern Europe",
    image: EasternEuropeImg,
    description:
      "Home to timeless architecture and enthralling history, Eastern Europe features storybook castles, cobbled old towns and rich cultural heritage. Travelers are drawn to Prague’s gothic spires, Budapest’s spas and the region's blend of tradition, resilience and warmth.",
  },
     {
   
    title: "Central Europe",
    image: centraleuropeImg,
    description:
      "Home to imperial cities and grand palaces, Central Europe features Vienna’s elegance, Prague’s medieval charm, Salzburg’s musical legacy and beautiful alpine scenery; a crossroads of culture, history and architecture.",
  },
  {
    title: "The Balkans",
    image: BalkansImg,
    description:
      "The Balkans offer dramatic scenery, ancient cities and a mosaic of cultures. Journey through the Adriatic coast, historic towns like Dubrovnik and discover diverse traditions shaped by Ottoman, Slavic and Mediterranean influences—making every visit both authentic and unique.",
  },
  {
    title: "Greece",
    image: GreeceImg,
    description:
      "Birthplace of democracy and Western philosophy, Greece dazzles with azure islands, ancient ruins and sunlit shores. From Athens’ Acropolis to Santorini’s sunsets, Greece fuses myth, history and Mediterranean splendour into an irresistible destination.",
  },
  {
    title: "Scandinavia",
    image: ScandinaviaImg,
    description:
      "A land of dramatic fjords, serene forests and sophisticated cities, Scandinavia—covering Norway, Sweden and Denmark—blends Viking history, rich design heritage and a high quality of life. Highlights include Oslo’s modernism, Stockholm’s waterways and Copenhagen’s culinary scene.",
  },
  
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const DestinationInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 text-white bg-gradient-sunset hover:bg-gradient-sunset transition rounded-md"
      >
        ← Back to Home
      </button>

      {/* Heading with animation */}
      <motion.h1
        className="textOrange text-4xl font-bold text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        Destinations We Cover
      </motion.h1>

      {/* Destination Cards */}
      {destinations.map((destination, idx) => (
        <motion.div
          key={destination.title}
          className={`flex flex-col md:flex-row items-center mb-16 gap-8 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={idx + 1}
        >
          {/* Image */}
          <motion.div
            className="md:w-1/2"
            variants={fadeInUp}
            custom={idx + 1.2}
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-72 object-cover rounded-2xl shadow-md"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:w-1/2"
            variants={fadeInUp}
            custom={idx + 1.4}
          >
            <h2 className="text-2xl font-semibold mb-4">{destination.title}</h2>
            <p className="text-gray-700">{destination.description}</p>
          </motion.div>
        </motion.div>
      ))}
         <ScrollButtons/>
    </div>
  );
};

export default DestinationInfo;
