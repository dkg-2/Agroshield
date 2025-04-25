
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI-Powered</span> Solutions for <span className="gradient-text">Smart Farming</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Detect plant diseases and get crop recommendations using cutting-edge AI technology. Increase your yields and farm more sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/disease-detection">
              <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white px-8 py-6 text-lg">
                Detect Plant Disease
              </Button>
            </Link>
            <Link to="/crop-recommendation">
              <Button variant="outline" className="border-agro-green-medium text-agro-green-dark hover:bg-agro-green-light/10 px-8 py-6 text-lg">
                Get Crop Recommendations
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 animate-slide-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-agro-green-medium/20 rounded-full blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fertile farm field with modern technology" 
              className="relative rounded-xl shadow-2xl z-10 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
