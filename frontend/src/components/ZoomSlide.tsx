import React from "react";
import { useSwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const ZoomSlide = ({ children }: { children: React.ReactNode }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0.7 }}
      animate={{
        scale: swiperSlide.isActive ? 1.05: 0.95,
        opacity: swiperSlide.isActive ? 1 : 0.7,
        transition: { duration: 0.6 },
      }}
      className="transition-transform duration-500"
    >
      {children}
    </motion.div>
  );
};

export default ZoomSlide;
