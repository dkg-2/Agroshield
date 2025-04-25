
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8">
            We're here to help with any questions about AgroShield's features and services
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
