
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="gradient-text">Features</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8">
            Discover how AgroShield's AI-powered tools can revolutionize your farming practices
          </p>
        </div>
      </div>
      <Features />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Plant Disease Detection
              </h2>
              <p className="text-gray-700 mb-6">
                Our advanced AI model can identify over 50+ different plant diseases affecting 20+ crop varieties. 
                Simply upload a clear photo of the affected plant part, and receive an instant diagnosis with 
                actionable treatment recommendations.
              </p>
              <Link to="/disease-detection">
                <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white">
                  Try Disease Detection
                </Button>
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                // src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CUjbLtX-FeWfT6D06ebziA.jpeg"
                alt="Plant disease detection"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
              <img 
                // src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                src="https://t4.ftcdn.net/jpg/08/84/76/25/360_F_884762550_4lAUZUhs8HopV7Q5l99s6GdZs25zAqnL.jpg"
                alt="Crop recommendation"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Crop Recommendation
              </h2>
              <p className="text-gray-700 mb-6">
                Take the guesswork out of crop selection with our data-driven recommendation engine. 
                By analyzing your soil composition, climate conditions, and other environmental factors, 
                our AI suggests the most suitable crops for optimal yield and resource efficiency.
              </p>
              <Link to="/crop-recommendation">
                <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white">
                  Get Crop Recommendations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
