import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CreatorSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="creator" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">For Creators</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground leading-tight">
            Don't Chase Brands.
            <br />
            <span className="text-accent">Let Brands Discover You.</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Join Mumbai's fastest-growing creator network and get matched with brands that value your authentic voice.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {['Fair Compensation', 'Brand Partnerships', 'Creative Freedom'].map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="font-semibold text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-black font-bold text-lg px-10 py-6 rounded-full group"
          >
            Join Microhub
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
