import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Target, Zap, Layers, Star, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    // ... (seus dados services continuam idênticos)
    {
        id: "01",
        title: "Social Media",
        subtitle: "Gestão & Estratégia",
        description: "Não é sobre postar todo dia, é sobre postar o que funciona. Planejamento, criação de conteúdo e análise de dados para fazer seu perfil virar máquina de vendas.",
        tags: ["Planejamento", "Copywriting", "Design", "Tráfego"],
        link: "/servicos/social-media"
    },
    {
        id: "02",
        title: "Identidade Visual",
        subtitle: "Branding & Logos",
        description: "Sua marca fala antes de você abrir a boca. Crio sistemas visuais completos que transmitem autoridade, valor e ficam na cabeça do cliente.",
        tags: ["Logo", "Paleta de Cores", "Tipografia", "Brandbook"],
        link: "/servicos/identidade-visual"
    },
    {
        id: "03",
        title: "Web Design",
        subtitle: "Sites & Landing Pages",
        description: "Seu terreno próprio na internet. Sites rápidos, bonitos e otimizados para conversão. Pare de perder venda por site feio ou lento.",
        tags: ["UI/UX", "Wordpress/React", "SEO", "Responsivo"],
        link: "/servicos/web-design"
    },
    {
        id: "04",
        title: "Design Gráfico",
        subtitle: "Offline & Impressos",
        description: "Do cartão de visita ao outdoor. Materiais gráficos que tangibilizam a qualidade do seu serviço no mundo real.",
        tags: ["Papelaria", "Embalagens", "Editoriais", "Merch"],
        link: "/servicos/design-grafico"
    }
];

const ServicesPage = () => {
    const [activeService, setActiveService] = useState<string | null>(null);

    return (
        // Tirei o bg-[#fffbff] fixo do main para permitir os fundos variados
        <main className="min-h-screen selection:bg-black selection:text-primary">
            <Navigation />

            {/* --- HEADER BRUTALISTA COMPACTA E SÓLIDA --- */}
            {/* MUDANÇAS AQUI:
                1. pt-48 pb-12  -> pt-32 pb-8 (Mais compacta)
                2. bg-[#fffbff] -> Fundo sólido off-white
                3. border-b-2 border-black -> Linha divisória clara embaixo
            */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">

                    {/* Linha superior decorativa (removi a margem inferior grande) */}
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            {/* BREADCRUMB */}
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" />
                                    Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">
                                    Serviços
                                </span>
                            </div>

                            {/* TÍTULO (Um pouco menor para acompanhar o header compacto) */}
                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter">
                                Soluções <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>
                                    Criativas
                                </span>.
                            </h1>
                        </div>

                        {/* Descrição */}
                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">
                                Não é sobre postar bonitinho. É sobre construir uma presença digital sólida, estratégica e impossível de ignorar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORPO DA PÁGINA COM FUNDO DE BOLINHAS --- */}
            {/* Embrulhei o resto do conteúdo nesta div com a classe do padrão */}
            <div className="bg-dots-pattern w-full relative z-0">

                {/* LISTA DE SERVIÇOS */}
                {/* Adicionei bg-[#fffbff]/80 para o texto ficar legível sobre as bolinhas se necessário, ou deixe transparente */}
                <section className="py-20 container mx-auto px-4">
                    <div className="flex flex-col bg-[#fffbff]/60 backdrop-blur-sm border-2 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_#000000]">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveService(service.id)}
                                onMouseLeave={() => setActiveService(null)}
                                className="group border-b-2 border-black last:border-b-0 relative transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-primary origin-left transition-transform duration-500 ease-out z-0 ${
                                    activeService === service.id ? "scale-x-100" : "scale-x-0"
                                }`}></div>

                                <Link to={service.link} className="relative z-10 block py-10 md:py-14 px-6 md:px-10">
                                    <div className="grid md:grid-cols-12 gap-8 items-center">

                                        <div className="md:col-span-5">
                                            <span className={`block text-xs font-black uppercase tracking-widest mb-2 transition-colors ${
                                                activeService === service.id ? "text-black" : "text-gray-600"
                                            }`}>
                                                {service.id} — {service.subtitle}
                                            </span>
                                            <h2 className={`text-3xl md:text-5xl font-black uppercase leading-none transition-colors ${
                                                activeService === service.id ? "text-black" : "text-black"
                                            }`}>
                                                {service.title}
                                            </h2>
                                        </div>

                                        <div className="md:col-span-5">
                                            <p className={`text-lg font-medium leading-relaxed transition-colors ${
                                                activeService === service.id ? "text-black" : "text-gray-700"
                                            }`}>
                                                {service.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {service.tags.map(tag => (
                                                    <span key={tag} className={`text-xs font-bold uppercase border border-black px-2 py-1 rounded-full transition-colors ${
                                                        activeService === service.id ? "bg-black text-white border-black" : "bg-transparent text-gray-600 border-black"
                                                    }`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 flex justify-end">
                                            <ArrowRight
                                                size={40}
                                                className={`transform transition-all duration-500 ${
                                                    activeService === service.id ? "rotate-0 translate-x-2 text-black" : "-rotate-45 text-black"
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROCESSO CRIATIVO (FUNDO PRETO - Mantém destaque) */}
                <section className="py-24 bg-black text-white relative overflow-hidden border-y-2 border-black">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
                                Como a mágica <span className="text-primary">acontece</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Sem "achismo". Meu processo é baseado em pesquisa, estratégia e execução impecável.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Target, title: "1. Imersão", desc: "Mergulho fundo no seu negócio para entender dores e objetivos." },
                                { icon: Layers, title: "2. Estratégia", desc: "Defino o caminho visual e verbal que vai te destacar." },
                                { icon: Sparkles, title: "3. Criação", desc: "Mão na massa. Design, copy e identidade tomando forma." },
                                { icon: Zap, title: "4. Entrega", desc: "Arquivos organizados e suporte para implementação." }
                            ].map((step, i) => (
                                <div key={i} className="group p-8 border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300">
                                    <step.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-black uppercase mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL (Sobre o fundo de bolinhas) */}
                <section className="py-24 container mx-auto px-4 text-center">
                    <div className="bg-primary border-2 border-black p-12 rounded-3xl shadow-[12px_12px_0px_0px_#000000] relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-8">
                            Não sabe por onde começar?
                        </h2>
                        <p className="text-black/80 font-bold text-lg mb-10 max-w-xl mx-auto">
                            Relaxa. Vamos marcar uma conversa e eu te ajudo a entender o que sua marca precisa agora.
                        </p>
                        <Link to="/contato" className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 font-black text-lg uppercase rounded-xl hover:scale-105 transition-all">
                            Falar com Iasmim <ArrowRight />
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default ServicesPage;