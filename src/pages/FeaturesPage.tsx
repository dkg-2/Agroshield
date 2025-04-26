import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12"> {/* Added padding for navbar */}
        <div className="content-overlay max-w-6xl mx-auto px-4 py-8 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-emerald-900">
            Our <span className="text-agro-green-dark">Features</span>
          </h1>
          <p className="text-lg text-emerald-800 max-w-2xl mx-auto text-center mb-8">
            Discover how AgroShield's AI-powered tools can revolutionize your farming practices
          </p>
          <Features />
        </div>

        <section className="py-16">
          <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-900">
                  Plant Disease Detection
                </h2>
                <p className="text-emerald-800 mb-6">
                Our advanced AI model can identify over 50+ different plant diseases affecting 20+ crop varieties. 
                Simply upload a clear photo of the affected plant part and receive an instant diagnosis with 
                actionable treatment recommendations.
                </p>
                <Link to="/disease-detection">
                  <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white">
                    Try Disease Detection
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-agro-green-medium/20 bg-white/5">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CUjbLtX-FeWfT6D06ebziA.jpeg"
                  alt="Plant disease detection"
                  className="w-full h-auto backdrop-blur-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-900">
                  Crop Recommendation
                </h2>
                <p className="text-emerald-800 mb-6">
                Take the guesswork out of crop selection with our data-driven recommendation engine. 
                By analyzing your soil composition, climate conditions and other environmental factors, 
                our AI suggests the most suitable crops for optimal yield and resource efficiency.
                </p>
                <Link to="/crop-recommendation">
                  <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white">
                    Get Crop Recommendations
                  </Button>
                </Link>
              </div>
              <div className="order-2 md:order-1 rounded-xl overflow-hidden border-2 border-agro-green-medium/20 bg-white/5">
                <img 
                  src="https://t4.ftcdn.net/jpg/08/84/76/25/360_F_884762550_4lAUZUhs8HopV7Q5l99s6GdZs25zAqnL.jpg"
                  alt="Crop recommendation"
                  className="w-full h-auto backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer className="bg-white/90" /> {/* Semi-transparent footer */}
    </div>
  );
};

export default FeaturesPage;