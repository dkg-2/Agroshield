import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="content-overlay max-w-6xl mx-auto px-4 py-8 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4">
            How <span className="text-agro-green-dark">AgroShield</span> Works
          </h1>
          <p className="text-lg text-emerald-800 max-w-2xl mx-auto text-center mb-8">
            Learn how our AI-powered platform processes data to provide actionable insights for farmers
          </p>
          <HowItWorks />
        </div>

        <section className="py-16">
          <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-900">
                Our Technology
              </h2>
              <p className="text-emerald-800 max-w-2xl mx-auto">
                AgroShield leverages state-of-the-art AI models and agricultural science to deliver precise insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl border-2 border-agro-green-medium/20">
                <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">
                  Computer Vision AI
                </h3>
                <p className="text-emerald-800">
                  Our disease detection system uses convolutional neural networks trained on thousands of plant images...
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border-2 border-agro-green-medium/20">
                <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">
                  Machine Learning Models
                </h3>
                <p className="text-emerald-800">
                  The crop recommendation system employs gradient boosting algorithms...
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border-2 border-agro-green-medium/20">
                <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">
                  Agricultural Database
                </h3>
                <p className="text-emerald-800">
                  We maintain a comprehensive database of crop diseases...
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/disease-detection">
                <Button className="bg-agro-green-medium hover:bg-agro-green-dark text-white">
                  Start Detection Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer className="bg-white/90" />
    </div>
  );
};

export default HowItWorksPage;