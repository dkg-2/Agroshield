import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
            Contact <span className="text-agro-green-dark">Us</span>
          </h1>
          <p className="text-lg text-emerald-800 max-w-2xl mx-auto">
            We're here to help with any questions about AgroShield's features and services
          </p>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;