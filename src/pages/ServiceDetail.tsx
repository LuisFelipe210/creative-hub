import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, ChevronRight, Home, HelpCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

// --- DADOS DOS SERVIÇOS ---
const servicesData: Record<string, { title: string; subtitle: string; description: string; includes: string[] }> = {
    "social-media": {
        title: "Social Media",
        subtitle: "Gestão & Estratégia",
        description: "Postar por postar não paga boleto. Aqui o buraco é mais embaixo: criamos narrativas que prendem, engajam e vendem. Deixe a parte chata comigo e foque no seu negócio.",
        includes: [ "Planejamento Estratégico de Conteúdo", "Criação de Artes e Legendas (Copy)", "Edição de Reels/TikTok (CapCut)", "Agendamento e Publicação", "Análise Mensal de Métricas", "Gestão de Tráfego Pago (Opcional)" ]
    },
    "identidade-visual": {
        title: "Identidade Visual",
        subtitle: "Branding & Logos",
        description: "Sua marca fala antes de você abrir a boca. Crio sistemas visuais completos que transmitem autoridade, valor e ficam na cabeça do cliente.",
        includes: [ "Logotipo Principal e Variações", "Paleta de Cores Estratégica", "Tipografia Exclusiva", "Elementos de Apoio e Estampas", "Manual da Marca (Brandbook)", "Aplicações (Cartão, Crachá, etc)" ]
    },
    "web-design": {
        title: "Web Design",
        subtitle: "Sites & Landing Pages",
        description: "Seu Instagram pode cair amanhã. Seu site é seu terreno próprio. Desenvolvo páginas rápidas, bonitas e feitas pra converter visitante em cliente.",
        includes: [ "Layout Exclusivo (UI Design)", "Desenvolvimento (Code ou No-Code)", "Otimização para Celular (Responsivo)", "Configuração de SEO Básico", "Integração com Pixel e Analytics", "Treinamento para atualizações" ]
    },
    "design-grafico": {
        title: "Design Gráfico",
        subtitle: "Offline & Impressos",
        description: "O digital é rei, mas o impresso é a coroa. Materiais físicos tangibilizam o valor da sua marca. Do cartão de visita ao outdoor, tudo tem que estar impecável.",
        includes: [ "Cartões de Visita e Papelaria", "Diagramação de E-books e Apostilas", "Embalagens e Rótulos", "Banners e Outdoors", "Cardápios e Catálogos", "Materiais para Eventos" ]
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = slug ? servicesData[slug] : null;

    useEffect(() => {
        if (!service) navigate("/servicos");
    }, [slug, service, navigate]);

    if (!service) return null;

    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
            <SEO
                title={service.title}
                description={service.description}
            />
            <Navigation />

            {/* --- HEADER SÓLIDA (PADRÃO BRUTALISTA ESQUERDA) --- */}
            <section
                key={`header-${slug}`}
                className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10"
            >
                <div className="container mx-auto px-4 relative z-10">
                    {/* Linha de separação decorativa */}
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

                        {/* LADO ESQUERDO (Slide da Esquerda) */}
                        <div className="animate-in slide-in-from-left duration-700 fade-in w-full md:w-auto">

                            {/* BREADCRUMB */}
                            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest flex-wrap">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" /> Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <Link to="/servicos" className="text-gray-400 hover:text-primary transition-colors">
                                    Serviços
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">
                                    {service.title}
                                </span>
                            </div>

                            {/* SUBTÍTULO E TÍTULO */}
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">
                                {service.subtitle}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter">
                                {service.title}
                            </h1>
                        </div>

                        {/* LADO DIREITO (Voltar e Destaque) */}
                        <div className="md:max-w-sm mb-2 animate-in slide-in-from-right duration-700 fade-in w-full md:w-auto mt-4 md:mt-0">
                            {/* Coluna 'Voltar' alinhada à esquerda no mobile */}
                            <Link to="/servicos" className="inline-flex items-center gap-2 text-xs text-black font-bold uppercase hover:text-primary hover:border-primary transition-colors pb-1">
                                <ArrowLeft size={12} /> Voltar para Serviços
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORPO DE BOLINHAS - key={slug} aqui também */}
            <div
                key={`body-${slug}`}
                className="bg-dots-pattern w-full relative z-0 flex-1 flex flex-col justify-between"
            >

                <div className="container mx-auto px-4 py-16">

                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Coluna Esquerda: Detalhes do Serviço */}
                        <div className="lg:col-span-8 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both fade-in">
                            <div className="bg-[#fffbff] border-2 border-black p-8 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_#000000] mb-12">
                                <h2 className="text-3xl font-black uppercase mb-6">O que é?</h2>
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* BOX INCLUSO - Brutalista */}
                            <div className="bg-black text-white p-8 md:p-12 rounded-3xl border-2 border-primary shadow-[8px_8px_0px_0px_#EEACC5] relative overflow-hidden mb-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                                <h2 className="text-3xl font-black uppercase mb-8 relative z-10">
                                    O que está <span className="text-primary">Incluso</span>?
                                </h2>

                                <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                                    {service.includes.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="bg-primary/20 p-1 rounded-full mt-1 group-hover:bg-primary group-hover:text-black transition-colors">
                                                <Check size={16} className="text-primary group-hover:text-black" />
                                            </div>
                                            <span className="font-bold text-lg text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-black uppercase flex items-center gap-2">
                                    <HelpCircle className="text-black" /> Dúvidas Comuns
                                </h3>

                                <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#EEACC5]">
                                    <h4 className="font-black uppercase mb-2">Quanto tempo demora?</h4>
                                    <p className="text-gray-600 text-sm font-medium">
                                        Depende da complexidade. Tudo será alinhado no contrato.
                                    </p>
                                </div>

                                <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#EEACC5]">
                                    <h4 className="font-black uppercase mb-2">Quais as formas de pagamento?</h4>
                                    <p className="text-gray-600 text-sm font-medium">
                                        Aceito PIX (com desconto de 5%), Cartão de Crédito em até 12x ou Boleto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Coluna Direita (Sticky CTA) */}
                        <div className="lg:col-span-4 sticky top-28 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both fade-in">
                            {/* Bloco lateral: Fundo Rosa com Sombra Preta (OK) */}
                            <div className="bg-primary border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000000] text-center">

                                <h3 className="text-2xl font-black uppercase text-black mb-4">
                                    Curtiu a proposta?
                                </h3>
                                <p className="text-black/80 font-bold text-sm mb-8">
                                    Vamos personalizar esse pacote para a necessidade exata da sua marca.
                                </p>

                                <div className="space-y-4">
                                    {/* BOTÃO BRUTALISTA: Preto, Sombra Rosa, Efeito PUSH */}
                                    <Link
                                        to="/contato"
                                        className="w-full inline-flex justify-center items-center gap-2
                                           bg-black text-white py-4 font-black text-lg uppercase
                                           rounded-xl border-2 border-black
                                           shadow-[6px_6px_0px_0px_#EEACC5] /* Sombra Rosa */
                                           hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                                           transition-all active:scale-[0.98] transform-gpu"
                                    >
                                        Solicitar Orçamento
                                    </Link>
                                    <p className="text-xs font-bold uppercase text-black/60">
                                        Resposta em até 24h
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
};

export default ServiceDetail;