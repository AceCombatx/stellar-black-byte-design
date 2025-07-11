
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Close mobile menu on scroll
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Handle clicks outside the mobile menu to close it
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Make sure we're not closing when clicking the toggle button itself
      if (isOpen && 
          !target.closest('[data-mobile-menu="true"]') && 
          !target.closest('[data-mobile-toggle="true"]')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  // Prevent event propagation when clicking the menu button
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md py-3 border-b border-border" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold text-foreground">VOLARIS</span>
            <span className="text-xl md:text-2xl font-heading font-bold text-blue-500">SOLUTIONS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
            <button 
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button 
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <Link to="/services">
              <Button 
                variant="outline" 
                className="border-border hover:border-blue-500/50 hover:text-blue-500"
              >
                View Pricing
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-border hover:border-blue-500/50 hover:text-blue-500"
              onClick={() => window.open("https://discord.gg/gdZXz3QR6a", "_blank")}
            >
              Join Discord
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              data-mobile-toggle="true"
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        data-mobile-menu="true"
        className={`fixed inset-0 top-[60px] bg-background/95 backdrop-blur-md z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden overflow-auto`}
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="flex flex-col space-y-8 p-8 text-center">
          <button 
            className="text-lg font-medium text-foreground/80 hover:text-foreground" 
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button 
            className="text-lg font-medium text-foreground/80 hover:text-foreground" 
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button 
            className="text-lg font-medium text-foreground/80 hover:text-foreground" 
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <Link 
            to="/services" 
            className="text-lg font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            View Pricing
          </Link>
          <div className="pt-4 border-t border-border">
            <Link 
              to="/terms-of-service" 
              className="text-sm text-foreground/60 hover:text-foreground block mb-4"
              onClick={() => setIsOpen(false)}
            >
              Terms of Service
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-foreground/60 hover:text-foreground block mb-6"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
          <Button 
            variant="outline" 
            className="border-border hover:border-blue-500/50 text-foreground mx-auto"
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
