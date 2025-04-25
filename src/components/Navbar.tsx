
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agro-green-dark to-agro-green-light flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-agro-green-dark">AgroShield</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-agro-green-medium font-medium">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-agro-green-medium font-medium">Features</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-agro-green-medium font-medium">How It Works</Link>
            <Link to="/team" className="text-gray-700 hover:text-agro-green-medium font-medium">Meet the Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-agro-green-medium font-medium">Contact Us</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/disease-detection">
              <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-agro-green-medium font-medium py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/features" className="text-gray-700 hover:text-agro-green-medium font-medium py-2" onClick={toggleMenu}>Features</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-agro-green-medium font-medium py-2" onClick={toggleMenu}>How It Works</Link>
              <Link to="/team" className="text-gray-700 hover:text-agro-green-medium font-medium py-2" onClick={toggleMenu}>Meet the Team</Link>
              <Link to="/contact" className="text-gray-700 hover:text-agro-green-medium font-medium py-2" onClick={toggleMenu}>Contact Us</Link>
              <Link to="/disease-detection" onClick={toggleMenu}>
                <Button className="w-full bg-agro-green-medium hover:bg-agro-green-dark text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
