import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Design & Social Media</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up">
            Criando{" "}
            <span className="gradient-text">experiências</span>
            <br />
            que conectam
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay text-balance">
            Transformo marcas em histórias visuais únicas. Design estratégico e 
            conteúdo que engaja, converte e faz sua presença digital brilhar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              Ver Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/30 animate-fade-up-delay" style={{ animationDelay: "0.6s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Projetos Entregues</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text">30+</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text">5+</p>
              <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
