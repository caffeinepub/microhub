import { Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Microhub helped us reach our target audience in Mumbai with authentic creators. Our engagement increased by 300% and sales doubled within the first month.",
    name: "Priya Sharma",
    role: "Founder, Urban Threads",
    type: "brand"
  },
  {
    quote: "Finally, an agency that understands the value of micro-influencers. The campaigns were well-planned and the creators they matched us with were perfect for our brand.",
    name: "Rahul Mehta",
    role: "Marketing Head, Spice & Soul",
    type: "brand"
  },
  {
    quote: "As a creator, Microhub has connected me with amazing brands that align with my values. The collaboration process is smooth and the compensation is always fair.",
    name: "Ananya Desai",
    role: "Lifestyle Creator, 45K followers",
    type: "creator"
  },
  {
    quote: "Working with Microhub has been a game-changer for my content creation journey. They respect my creative freedom while ensuring brand objectives are met.",
    name: "Arjun Patel",
    role: "Food Blogger, 28K followers",
    type: "creator"
  },
];

export default function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

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
            What Our <span className="text-accent">Partners Say</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Real stories from brands and creators who've grown with Microhub.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
