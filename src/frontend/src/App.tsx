import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhatWeDo from './components/WhatWeDo';
import WhyMicrohub from './components/WhyMicrohub';
import HowItWorks from './components/HowItWorks';
import CreatorSection from './components/CreatorSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SocialIntegrations from './components/SocialIntegrations';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSection />
      <WhatWeDo />
      <WhyMicrohub />
      <HowItWorks />
      <CreatorSection />
      <Testimonials />
      <ContactForm />
      <Footer />
      <SocialIntegrations />
    </div>
  );
}

export default App;
