
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8">
            The experts behind AgroShield's innovative agricultural AI solutions
          </p>
        </div>
      </div>
      <Team />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At AgroShield, we're dedicated to democratizing access to advanced agricultural technology. 
              We believe that by combining artificial intelligence with agricultural expertise, we can help 
              farmers around the world increase yields, reduce losses, and farm more sustainably.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Accessibility - Making advanced technology available to all farmers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Sustainability - Promoting environmentally responsible farming practices</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Innovation - Constantly improving our AI models and recommendations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Accuracy - Providing reliable information farmers can trust</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Future Improvements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span> Expansion to More Crop Diseases and Varieties</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>AI-Driven Weather Forecast Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Multi-language Support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Real-Time Disease Alerts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Community Forum for Farmers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>In-App Crop Treatment Marketplace</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-agro-green-medium rounded-full mr-2"></div>
                  <span>Mobile App Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamPage;
