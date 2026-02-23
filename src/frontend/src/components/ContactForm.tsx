import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSubmitLead } from '../hooks/useQueries';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    budgetRange: '',
    contactNumber: '',
    email: '',
  });

  const submitLead = useSubmitLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead.mutateAsync(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitLead.isSuccess) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">Thank You!</h3>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => submitLead.reset()}
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-black"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={formRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              Let's <span className="text-accent">Grow Together</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Share your details and we'll create a custom influencer strategy for your brand.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-8 rounded-3xl bg-card border border-border space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Brand Name */}
              <div className="space-y-2">
                <Label htmlFor="brandName" className="text-foreground font-semibold">
                  Brand Name *
                </Label>
                <Input
                  id="brandName"
                  type="text"
                  required
                  value={formData.brandName}
                  onChange={(e) => handleChange('brandName', e.target.value)}
                  className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                  placeholder="Enter your brand name"
                />
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label htmlFor="budgetRange" className="text-foreground font-semibold">
                  Budget Range *
                </Label>
                <Select
                  value={formData.budgetRange}
                  onValueChange={(value) => handleChange('budgetRange', value)}
                  required
                >
                  <SelectTrigger className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                    <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-foreground font-semibold">
                  Contact Number *
                </Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => handleChange('contactNumber', e.target.value)}
                  className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitLead.isPending}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-black font-bold text-lg rounded-xl"
              >
                {submitLead.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Get Started'
                )}
              </Button>

              {submitLead.isError && (
                <p className="text-destructive text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
