import { link } from "fs";
import { Plane, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FooterLogoImg from "@/assets/Images/Logo/Footer-Logo.svg";


const Footer = () => {
  const navigate =  useNavigate();
  const quickLinks = [
    {LinkName : "About Us" , Goto : "/about-us"},
    {LinkName :"Destinations", Goto : "/destination-info"},
    {LinkName : "Services",  Goto : "/more-services"} ,
    {LinkName : "Contact", Goto :"#contact"}
  ];

  const destinations = [
"Spain",
"Portugal",
"United Kingdom",
"Central Europe",
"Eastern Europe",
"Balkans",
"Greece",
"Scandinavia"
  ];

  const support = [
    "Help Center",
    "Privacy Policy",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
              <div className="flex items-center gap-2">
                <img
            src = {FooterLogoImg}
            alt="Global Journey Logo"
          className="h-10 w-auto"
        />
              <span className="text-2xl font-bold textOrange">GLOBAL JOURNEY
                <p className="HeaderName">Your DMC Partner For Europe</p>
        </span>
            </div>
            <p className="text-white/80 mb-6">
              Creating unforgettable travel experiences for adventurous souls around the world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
           <ul className="space-y-3">
  {quickLinks.map((link) => (
    <li key={link.LinkName}>
      {link.LinkName === "Contact" ? (
        <a
          href={link.Goto}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          {link.LinkName}
        </a>
      ) : (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate(link.Goto);
          }}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          {link.LinkName}
        </a>
      )}
    </li>
  ))}
</ul>

          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
            <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2024 Global journey. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;