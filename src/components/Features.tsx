import { Leaf, BarChart2, Compass } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-agro-green-medium" />,
      title: "Plant Disease Detection",
      description: "Upload images of your plants and get instant disease diagnosis with recommended treatments using our AI-powered detection system."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-agro-green-medium" />,
      title: "Crop Recommendation",
      description: "Input your soil parameters and local climate data to receive personalized crop suggestions that will maximize your yield."
    },
    {
      icon: <Compass className="h-8 w-8 text-agro-green-medium" />,
      title: "Smart Monitoring",
      description: "Track plant health trends over time and make data-driven decisions that improve your farm's productivity and sustainability."
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
            Features That Help Your <span className="text-agro-green-dark">Crops Thrive</span>
          </h2>
          <p className="text-lg text-emerald-800 max-w-2xl mx-auto">
            AgroShield combines cutting-edge AI technology with agricultural expertise to provide you with tools that make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-8 rounded-xl border-2 border-agro-green-medium/20 hover:border-agro-green-medium/40 transition-all duration-300"
            >
              <div className="bg-agro-green-light/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-900">{feature.title}</h3>
              <p className="text-emerald-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;