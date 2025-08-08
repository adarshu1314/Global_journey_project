import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HeaderLogoImg from "@/assets/Images/Logo/Header-Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }

  };

  const handleBookNow = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Ready to book?",
      description: "Please fill out the contact form below to start planning your adventure!",
    });
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Services", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
           src = {HeaderLogoImg}
            alt="Global Journey Logo"
          className="h-10 w-auto"
        />
           
            <span className="text-2xl font-bold textOrange">GLOBAL JOURNEY
            <p className="HeaderName">Your DMC Partner For Europe</p>
</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="cta" size="lg" onClick={handleBookNow}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block py-2 text-left text-foreground hover:text-primary transition-colors duration-300 w-full"
              >
                {item.name}
              </button>
            ))}
            <Button variant="cta" size="lg" className="mt-4 w-full" onClick={handleBookNow}>
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;