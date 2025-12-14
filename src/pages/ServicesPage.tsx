import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Target, Zap, Layers, ChevronRight, Home, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

// IMPORTANDO DADOS CENTRALIZADOS
import { allServices } from "@/data/services";

const ServicesPage = () => {
    const [activeService, setActiveService] = useState<string | null>(null);

    return (
        <main className="min-h-screen selection:bg-primary selection:text-black">
            <SEO title="Serviços" description="Estratégia, Branding e Web Design focados em resultado. Meu processo é execução impecável, sem achismo." />
            <Navigation />

            {/* --- HEADER SÓLIDA --- */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div className="animate-in slide-in-from-left duration-700 fade-in">
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

                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter text-left">
                                Soluções <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>
                                    Criativas
                                </span>.
                            </h1>
                        </div>

                        {/* LADO DIREITO (Slide da Direita) */}
                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary text-left animate-in slide-in-from-right duration-700 fade-in">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">
                                Não é sobre postar bonitinho. É sobre construir uma presença digital sólida, estratégica e impossível de ignorar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORPO DA PÁGINA --- */}
            <div className="bg-dots-pattern w-full relative z-0">

                {/* LISTA DE SERVIÇOS - USANDO DADOS CENTRALIZADOS */}
                <section className="py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both fade-in">
                    <div className="flex flex-col bg-white backdrop-blur-sm border-2 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_#000000]">
                        {allServices.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveService(service.id)}
                                onMouseLeave={() => setActiveService(null)}
                                className="group border-b-2 border-black last:border-b-0 relative transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-primary origin-left transition-transform duration-500 ease-out z-0 ${
                                    activeService === service.id ? "scale-x-100" : "scale-x-100 md:scale-x-0"
                                }`}></div>

                                <Link to={service.link} className="relative z-10 block py-10 md:py-14 px-6 md:px-10">
                                    <div className="grid md:grid-cols-12 gap-8 items-center">

                                        <div className="md:col-span-5">
                                            <span className={`block text-xs font-black uppercase tracking-widest mb-2 transition-colors ${
                                                activeService === service.id ? "text-black" : "text-black md:text-primary"
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
                                                activeService === service.id ? "text-black" : "text-black md:text-gray-700"
                                            }`}>
                                                {service.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {service.tags.map(tag => (
                                                    <span key={tag} className={`text-xs font-bold uppercase border border-black px-2 py-1 rounded-full transition-colors ${
                                                        activeService === service.id ?
                                                            "bg-black text-white border-black" :
                                                            "bg-black text-white border-black md:bg-black md:text-primary"
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
                                                    activeService === service.id ? "rotate-0 translate-x-2 text-black" : "rotate-0 translate-x-2 md:-rotate-45 text-black"
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SEÇÃO PROCESSO (FLUXOGRAMA BRUTALISTA) --- */}
                <section className="py-24 bg-black text-white relative overflow-hidden border-y-4 border-primary">

                    {/* Efeito de ruído no fundo para dar textura */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            {/* Título Agressivo e Padronizado */}
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-none">
                                Processo de <span className="text-primary" style={{ WebkitTextStroke: '1px #EEACC5' }}>Execução</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                                Sem "achismo". Meu processo é baseado em pesquisa, estratégia e **execução impecável**.
                            </p>
                        </div>

                        {/* GRID DE CARDS COM ESTILO BRUTALISTA INVERTIDO (Preto com Sombra Rosa) */}
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Target, title: "1. Imersão", desc: "Mergulho fundo no seu negócio para entender dores e objetivos. Tudo documentado.", delay: "100" },
                                { icon: Layers, title: "2. Estratégia", desc: "Defino o caminho visual e verbal que vai te destacar. O Mapa da Mina.", delay: "300" },
                                { icon: Hammer, title: "3. Criação", desc: "Mão na massa e design puro. Identidade e copy tomando forma com peso.", delay: "500" },
                                { icon: Zap, title: "4. Entrega", desc: "Arquivos organizados, suporte para implementação e tudo pronto para subir.", delay: "700" }
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className={`group p-6 md:p-8 bg-black border-4 border-primary/50 text-white 
                                rounded-xl md:rounded-2xl 
                                shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[12px_12px_0px_0px_#EEACC5] 
                                transition-all duration-300 transform-gpu hover:-translate-x-1 hover:-translate-y-1 
                                animate-in slide-in-from-bottom fill-mode-both duration-700`}
                                    style={{ animationDelay: `${step.delay}ms` }}
                                >
                                    {/* Número do Passo Grande */}
                                    <div className="text-4xl font-black text-primary mb-4 leading-none border-b border-white/10 pb-2">
                                        {step.title.split('.')[0]}.
                                    </div>

                                    <step.icon className="w-10 h-10 text-primary mb-4 mt-2 group-hover:scale-[1.05] transition-transform" />

                                    <h3 className="text-xl font-black uppercase mb-3 text-white">{step.title.split('.')[1].trim()}</h3>

                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 container mx-auto px-4 text-center">
                    <div className="bg-primary selection-invert border-4 border-black p-8 md:p-12 rounded-2xl md:rounded-3xl
                                    shadow-[14px_14px_0px_0px_#000000] relative z-10
                                    transition-all duration-300 transform-gpu hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[12px_12px_0px_0px_#000000]">

                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black mb-6 leading-none">
                            Agendar <span className="bg-black text-white px-2">Conversa</span> Gratuita
                        </h2>

                        <p className="text-black/80 font-bold text-base md:text-lg mb-10 max-w-xl mx-auto">
                            Relaxa. Vamos marcar uma conversa e eu te ajudo a entender o que sua marca precisa agora.
                        </p>
                        <Link
                            to="/contato"
                            className="inline-flex items-center gap-3 font-black text-base md:text-lg uppercase
                                       rounded-xl bg-black text-white border-2 border-black
                                       px-8 py-4 md:px-10
                                       shadow-[6px_6px_0px_0px_#EEACC5]
                                       hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                                       transition-all active:scale-[0.98] transform-gpu"
                        >
                            Falar com Iasmim <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default ServicesPage;