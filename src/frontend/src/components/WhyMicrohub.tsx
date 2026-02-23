import { Zap, Heart, MapPin, Wallet } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: Zap,
    title: 'Only Micro & Nano Creators',
    description: 'We work exclusively with authentic creators who have 1K-100K followers for maximum engagement.',
  },
  {
    icon: Heart,
    title: 'Real Engagement > Fake Followers',
    description: 'We prioritize genuine connections and authentic interactions over vanity metrics.',
  },
  {
    icon: MapPin,
    title: 'Mumbai-Focused Local Targeting',
    description: 'Deep understanding of Mumbai\'s diverse markets and hyper-local audience targeting.',
  },
  {
    icon: Wallet,
    title: 'Affordable for Small & Mid Brands',
    description: 'Cost-effective campaigns that deliver results without breaking the bank.',
  },
];

export default function WhyMicrohub() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/pattern-accent.dim_800x800.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Why Choose <span className="text-accent">Microhub</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            We're not just another agency. We're your growth partner in Mumbai's influencer ecosystem.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-card border-2 border-border hover:border-accent transition-all duration-500 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
