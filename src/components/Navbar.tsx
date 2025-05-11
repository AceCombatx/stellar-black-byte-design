
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/10" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold text-white">VOLARIS</span>
            <span className="text-xl md:text-2xl font-heading font-bold text-gray-400">SOLUTIONS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-sm text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <Button 
              variant="outline" 
              className="bg-transparent border border-white/20 hover:border-white/50 text-white"
              onClick={() => window.open("https://discord.gg/gdZXz3QR6a", "_blank")}
            >
              Join Discord
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[60px] bg-black z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col space-y-8 p-8 text-center">
          <a 
            href="#services" 
            className="text-lg font-medium text-white/80 hover:text-white" 
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-lg font-medium text-white/80 hover:text-white" 
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium text-white/80 hover:text-white" 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Button 
            variant="outline" 
            className="bg-transparent border border-white/20 hover:border-white/50 text-white mx-auto"
            onClick={() => {
              window.open("https://discord.gg/gdZXz3QR6a", "_blank");
              setIsOpen(false);
            }}
          >
            Join Discord
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
