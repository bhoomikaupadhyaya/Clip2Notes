import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden">

      <Navbar />

      
<main className="pt-20">
        <HeroSection />

        <FeaturesSection />

        <HowItWorks />

        <WhyChoose />

        <CTASection />

      </main>

      <Footer />

    </div>
  );
}

export default Home;