import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Abled from "@/assets/Images/moreServices/Abled.jpg";
import Mice from "@/assets/Images/moreServices/Mice.jpg";
import Leisure from "@/assets/Images/moreServices/Leisure.jpg";
import Educational from "@/assets/Images/moreServices/Educational.jpg";
import specialinterest from "@/assets/Images/moreServices/specialinterest.jpg";
import ScrollButtons from "@/components/ScrollButtons";

const services = [
  {
    title: " Leisure Groups",
    description:
      "Travel is best enjoyed together. Our Leisure Groups service brings friends, families or affinity groups to Europe’s most dazzling destinations imagine  wine tasting in Portugal’s Douro Valley or flamenco nights in Spain. We handle logistics, accommodation and curated activities, allowing groups to focus on discovery and connection, all with expert guidance and smooth coordination every step of the way.",
    image: Leisure,
  },
  {
    title: "MICE (Meetings, Incentives, Conferences and Events)",
    description:
      "Elevate your business gatherings with Global Journey’s MICE expertise. We organize impactful meetings, dynamic incentive trips and seamless conferences in vibrant cities like Barcelona or the elegant capitals of Scandinavia. From venue selection and technical support to creative team-building and cultural experiences, we deliver flawless events that inspire collaboration and exceed expectations.",
    image: Mice,
  },
  {
    title: "Special Interest Groups",
    description:
      "Fuel your passions with a journey designed just for you. Whether you seek a foodie tour through Greece, a cycling adventure in the Balkans or an art exploration across Eastern Europe, we curate tailor-made programs aligned to shared interests. Our deep local connections unlock exclusive experiences, transforming travel into something truly extraordinary for every special interest group.",
    image: specialinterest,
  },
  {
    title: "Educational Tours",
    description:
      "Learning comes alive with our Educational Tours, immersing students and educators in Europe’s rich history, culture and innovation. From interactive archaeology workshops in Greece to STEM and language workshops in London, as well as insightful industrial visits, we ensure every itinerary is intellectually engaging, safe and meticulously organized opening young minds to new perspectives beyond the classroom.",
    image: Educational,
  },
  {
    title: "Abled Travel (Accessible Travel)",
    description:
      "We believe travel should be accessible to all. Our Abled Travel service ensures that travelers with mobility, sensory or other special requirements enjoy Europe’s wonders without barriers. From accessible accommodations in Prague to adapted sightseeing in Lisbon, we prioritize comfort, dignity and unforgettable adventure making the beauty of Europe open to everyone.",
    image: Abled,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="textOrange max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 text-white bg-gradient-sunset hover:bg-gradient-sunset transition rounded-md"
      >
        ← Back to Home
      </button>
      <motion.h1
        className="textOrange text-4xl font-bold text-center mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
      >
        <strong> Discover Our Signature Services</strong>
        <br />
        At Global Journey, we transform travel dreams into seamless, memorable
        realities. From crafting unique group journeys to curating special
        interest tours and facilitating remarkable educational and accessible
        adventures, our expertise covers every aspect of European travel.
        Explore how our suite of personalized services enhances every step of
        your journey.
      </motion.p>

      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={index + 2}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-h-96 object-contain rounded-xl shadow-lg bg-white"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={index + 3}
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-700 text-justify">{service.description}</p>
          </motion.div>
        </div>
      ))}

      <ScrollButtons />
    </div>
  );
};

export default Services;
