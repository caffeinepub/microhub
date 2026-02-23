import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import { SiInstagram, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'microhub';

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Mumbai Skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <img
          src="/assets/generated/mumbai-skyline.dim_1200x400.png"
          alt="Mumbai skyline representing local influencer marketing presence"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4">
              Micro<span className="text-accent">hub</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Mumbai's premier influencer marketing agency connecting brands with authentic micro & nano creators.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors group"
              >
                <SiInstagram className="w-5 h-5 text-accent group-hover:text-black" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors group"
              >
                <SiLinkedin className="w-5 h-5 text-accent group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80">
                  Andheri West, Mumbai,<br />Maharashtra 400053, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:hello@microhub.in" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  hello@microhub.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Work With Us
                </a>
              </li>
              <li>
                <a href="#creator" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Join As Creator
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Microhub. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
