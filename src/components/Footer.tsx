import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Abhishek Kumar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
