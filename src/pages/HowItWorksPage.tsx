
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            How <span className="gradient-text">AgroShield</span> Works
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8">
            Learn how our AI-powered platform processes data to provide actionable insights for farmers
          </p>
        </div>
      </div>
      <HowItWorks />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Technology
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              AgroShield leverages state-of-the-art AI models and agricultural science to deliver precise insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Computer Vision AI</h3>
              <p className="text-gray-700">
                Our disease detection system uses convolutional neural networks trained on thousands of plant images to recognize visual patterns associated with different diseases and pests.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Machine Learning Models</h3>
              <p className="text-gray-700">
                The crop recommendation system employs gradient boosting algorithms that analyze soil, climate, and historical crop data to make intelligent suggestions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Agricultural Database</h3>
              <p className="text-gray-700">
                We maintain a comprehensive database of crop diseases, treatments, and growing requirements curated by agricultural experts to ensure reliable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
