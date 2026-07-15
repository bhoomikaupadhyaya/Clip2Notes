import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">

      <Navbar />

      <main>

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