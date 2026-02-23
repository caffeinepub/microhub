import { MessageSquare, Search, Rocket, LineChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Brand Shares Goals',
    description: 'Tell us about your brand, target audience, and campaign objectives.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Shortlist Creators',
    description: 'Our team curates a list of perfect-fit influencers for your brand.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Campaign Execution',
    description: 'Creators produce authentic content and engage their audiences.',
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Track Performance',
    description: 'Monitor real-time metrics and measure your campaign ROI.',
  },
];

export default function HowItWorks() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.2 });

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
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            From strategy to execution, we handle everything so you can focus on growing your business.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent/20 -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-black font-black text-2xl mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
