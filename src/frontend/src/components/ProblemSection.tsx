import { AlertCircle, TrendingDown, Users, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const problems = [
  {
    icon: DollarSign,
    title: 'Expensive Ad Campaigns',
    description: 'Spending lakhs on ads with diminishing returns and rising costs.',
  },
  {
    icon: TrendingDown,
    title: 'Low Engagement',
    description: 'Generic content that fails to connect with your target audience.',
  },
  {
    icon: Users,
    title: 'Fake Influencer Reach',
    description: 'Paying for followers that don\'t engage or convert into customers.',
  },
  {
    icon: AlertCircle,
    title: 'Poor ROI',
    description: 'Unable to track real impact or measure campaign effectiveness.',
  },
];

export default function ProblemSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Traditional Marketing <span className="text-accent">Isn't Working</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Brands are struggling with outdated strategies that drain budgets without delivering results.
          </p>
        </div>

        {/* Problem Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent font-bold text-lg">Introducing Microhub</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
            We connect you with <span className="text-accent">authentic micro & nano influencers</span> who drive real engagement and conversions at a fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  );
}
