import { Target, Handshake, Megaphone, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Target,
    title: 'Influencer Matchmaking',
    description: 'We find the perfect creators who align with your brand values and target audience.',
  },
  {
    icon: Handshake,
    title: 'Barter & Paid Campaigns',
    description: 'Flexible collaboration models that fit your budget, from product exchanges to paid partnerships.',
  },
  {
    icon: Megaphone,
    title: 'Content-Driven Brand Exposure',
    description: 'Authentic storytelling that resonates with audiences and builds lasting brand awareness.',
  },
  {
    icon: BarChart3,
    title: 'Campaign Strategy & Reporting',
    description: 'Data-driven insights and comprehensive analytics to measure your campaign success.',
  },
];

export default function WhatWeDo() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            What We <span className="text-accent">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            End-to-end influencer marketing solutions designed for growing brands.
          </p>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-card border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
