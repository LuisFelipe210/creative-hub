import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-display text-xl font-bold">
            <span className="gradient-text">Studio</span>
          </a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por Julia
          </p>

          <nav className="flex items-center gap-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
