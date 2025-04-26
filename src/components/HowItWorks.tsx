import { useState } from "react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<'disease' | 'crop'>('disease');

  const steps = {
    disease: [
      {
        title: "Upload Plant Image",
        description: "Take a clear photo of the affected plant leaves or stems and upload it to our platform."
      },
      {
        title: "AI Analysis",
        description: "Our advanced AI model analyzes the image, identifying patterns and symptoms of common plant diseases."
      },
      {
        title: "Receive Diagnosis",
        description: "Get an accurate diagnosis of the plant disease along with confidence score and visual indicators."
      },
      {
        title: "Treatment Recommendations",
        description: "Access detailed treatment plans and preventative measures tailored to the specific disease detected."
      }
    ],
    crop: [
      {
        title: "Input Soil Parameters",
        description: "Enter soil data including nitrogen, phosphorus, potassium levels, and pH value."
      },
      {
        title: "Add Environmental Factors",
        description: "Provide details about humidity, temperature, rainfall, and other local climate conditions."
      },
      {
        title: "AI Processing",
        description: "Our machine learning algorithms process your data against thousands of successful crop patterns."
      },
      {
        title: "Get Custom Recommendations",
        description: "Receive personalized crop suggestions that are most suitable for your unique agricultural conditions."
      }
    ]
  };

  return (
    <section id="how-it-works" className="py-16">
      <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
            How <span className="text-agro-green-dark">AgroShield</span> Works
          </h2>
          <p className="text-lg text-emerald-800 max-w-2xl mx-auto">
            Simple, effective and powered by advanced AI. Our platform makes it easy to get the insights you need.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-white/10 backdrop-blur-sm border-2 border-agro-green-medium/20 p-1">
            <Button 
              variant={activeTab === 'disease' ? 'default' : 'ghost'} 
              className={`${
                activeTab === 'disease' 
                  ? 'bg-agro-green-medium hover:bg-agro-green-dark text-white' 
                  : 'text-emerald-800 hover:bg-white/20'
              } transition-colors`}
              onClick={() => setActiveTab('disease')}
            >
              Disease Detection
            </Button>
            <Button 
              variant={activeTab === 'crop' ? 'default' : 'ghost'} 
              className={`${
                activeTab === 'crop' 
                  ? 'bg-agro-green-medium hover:bg-agro-green-dark text-white' 
                  : 'text-emerald-800 hover:bg-white/20'
              } transition-colors`}
              onClick={() => setActiveTab('crop')}
            >
              Crop Recommendation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps[activeTab].map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/5 p-6 rounded-xl border-2 border-agro-green-medium/20 hover:border-agro-green-medium/40 transition-all h-full">
                <div className="bg-agro-green-medium/80 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-emerald-900">{step.title}</h3>
                <p className="text-emerald-800">{step.description}</p>
              </div>
              
              {index < steps[activeTab].length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="#2E7D32" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;