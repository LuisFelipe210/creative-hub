import { Palette, Instagram, Megaphone, PenTool, Camera, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Logos, paleta de cores e elementos visuais que definem a personalidade única da sua marca.",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description: "Gestão completa de redes sociais com estratégia, criação de conteúdo e análise de métricas.",
  },
  {
    icon: PenTool,
    title: "Design Gráfico",
    description: "Materiais impressos e digitais que comunicam sua mensagem com impacto visual.",
  },
  {
    icon: Camera,
    title: "Direção de Arte",
    description: "Conceitos criativos e direção visual para campanhas e projetos especiais.",
  },
  {
    icon: Megaphone,
    title: "Estratégia de Conteúdo",
    description: "Planejamento editorial e calendário de conteúdo alinhados aos seus objetivos.",
  },
  {
    icon: BarChart3,
    title: "Análise & Relatórios",
    description: "Acompanhamento de performance com insights para otimização contínua.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">O que eu faço</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Serviços que{" "}
            <span className="gradient-text">transformam</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Soluções completas para elevar sua presença digital e criar uma 
            identidade visual memorável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
