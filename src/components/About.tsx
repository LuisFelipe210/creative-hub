import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop"
                alt="Designer"
                className="w-full h-full object-cover mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 glass-card rounded-2xl p-6 max-w-[200px]">
              <p className="font-display text-3xl font-bold gradient-text mb-1">5+</p>
              <p className="text-sm text-muted-foreground">Anos criando marcas memoráveis</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-4">Sobre mim</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Olá, sou a{" "}
              <span className="gradient-text">Julia</span>
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Designer apaixonada por transformar ideias em experiências visuais 
                impactantes. Com mais de 5 anos de experiência, ajudo marcas a 
                construírem uma presença digital autêntica e memorável.
              </p>
              <p>
                Minha abordagem combina estratégia de negócios com design criativo, 
                garantindo que cada projeto não apenas seja bonito, mas também 
                gere resultados reais para meus clientes.
              </p>
              <p>
                Acredito que bom design vai além da estética — é sobre criar 
                conexões emocionais e contar histórias que ressoam com seu público.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button variant="hero-outline" size="lg">
                Ver Instagram
              </Button>
            </div>

            {/* Skills */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4">Ferramentas que domino</p>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Photoshop", "Illustrator", "After Effects", "Canva Pro", "CapCut"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
