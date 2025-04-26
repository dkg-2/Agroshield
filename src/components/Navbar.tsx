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
    <nav className="sticky top-0 bg-white/5 backdrop-blur-lg border-b border-agro-green-medium/20 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/Agroshield-logo.jpeg" 
              alt="AgroShield Logo"
              className="h-10 w-10 rounded-full border-2 border-agro-green-medium/50 object-cover 
                        transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl font-bold text-emerald-900">AgroShield</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-emerald-800 hover:text-agro-green-dark font-medium transition-colors">Home</Link>
            <Link to="/features" className="text-emerald-800 hover:text-agro-green-dark font-medium transition-colors">Features</Link>
            <Link to="/how-it-works" className="text-emerald-800 hover:text-agro-green-dark font-medium transition-colors">How It Works</Link>
            <Link to="/team" className="text-emerald-800 hover:text-agro-green-dark font-medium transition-colors">Team</Link>
            <Link to="/contact" className="text-emerald-800 hover:text-agro-green-dark font-medium transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/disease-detection">
              <Button className="bg-agro-green-medium/90 hover:bg-agro-green-dark text-white backdrop-blur-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-emerald-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-white/5 backdrop-blur-lg border-t border-agro-green-medium/20 mt-3">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-emerald-800 hover:text-agro-green-dark font-medium py-2 px-4 rounded-lg transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/features" className="text-emerald-800 hover:text-agro-green-dark font-medium py-2 px-4 rounded-lg transition-colors" onClick={toggleMenu}>Features</Link>
              <Link to="/how-it-works" className="text-emerald-800 hover:text-agro-green-dark font-medium py-2 px-4 rounded-lg transition-colors" onClick={toggleMenu}>How It Works</Link>
              <Link to="/team" className="text-emerald-800 hover:text-agro-green-dark font-medium py-2 px-4 rounded-lg transition-colors" onClick={toggleMenu}>Team</Link>
              <Link to="/contact" className="text-emerald-800 hover:text-agro-green-dark font-medium py-2 px-4 rounded-lg transition-colors" onClick={toggleMenu}>Contact</Link>
              <Link to="/disease-detection" onClick={toggleMenu} className="px-4">
                <Button className="w-full bg-agro-green-medium/90 hover:bg-agro-green-dark text-white backdrop-blur-sm">
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