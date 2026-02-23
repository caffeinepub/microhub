import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SocialIntegrations() {
  const whatsappNumber = '919876543210';
  const whatsappMessage = encodeURIComponent(
    'Hi Microhub! I\'m interested in learning more about your influencer marketing services.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl w-14 h-14 p-0 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
}
