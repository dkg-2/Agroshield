import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center pt-32">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-emerald-900">
            <span className="text-agro-green-dark">AI-Powered</span> Solutions for {' '}
            <span className="text-agro-green-medium">Smart Farming</span>
          </h1>
          <p className="text-lg text-emerald-800 mb-8 max-w-lg">
            Detect plant diseases and get crop recommendations using cutting-edge AI technology. 
            Increase your yields and farm more sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/disease-detection">
              <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white px-8 py-6 text-lg">
                Detect Plant Disease
              </Button>
            </Link>
            <Link to="/crop-recommendation">
              <Button 
                variant="outline" 
                className="border-agro-green-medium text-agro-green-dark hover:bg-agro-green-light/10 px-8 py-6 text-lg"
              >
                Get Crop Recommendations
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 animate-slide-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-agro-green-medium/10 rounded-full backdrop-blur-lg"></div>
            <video 
              autoPlay
              loop
              muted
              className="relative rounded-xl shadow-2xl z-10 w-full border-2 border-agro-green-medium/20"
            >
              <source 
                src="https://drive.google.com/uc?export=download&id=1lhVk_s0GpSWaNpY2orrLba8WgssjlHK4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;