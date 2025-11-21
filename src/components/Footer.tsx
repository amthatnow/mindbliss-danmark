import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-primary">MindBliss</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Din støtte til mental sundhed og trivsel. Vi er her for dig.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground" aria-label="Footer beskrivelse">
            <span>Lavet med</span>
            <Heart className="w-4 h-4 text-accent fill-accent" aria-hidden="true" />
            <span>til mental sundhed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
