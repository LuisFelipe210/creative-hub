import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, ChevronRight, Home, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";
import ButterflyLogo from "@/components/ButterflyLogo"; // <--- IMPORTAÇÃO AQUI

// --- IMPORTANDO DADOS CENTRALIZADOS ---
import { allServices } from "@/data/services";

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Busca o serviço no arquivo centralizado pelo slug da URL
    const service = allServices.find((s) => s.slug === slug);

    useEffect(() => {
        // Se não achar o serviço (ex: digitou url errada), manda pra lista
        if (!service) {
            navigate("/servicos");
        }
    }, [service, navigate, slug]);

    // Rola pro topo sempre que mudar de serviço
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) return null;

    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
            <SEO
                title={service.title}
                description={service.description}
            />
            <Navigation />

            {/* --- HEADER SÓLIDA --- */}
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

                        {/* LADO ESQUERDO */}
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

                            {/* BORBOLETA 1: NO TÍTULO */}
                            <div className="relative inline-block">
                                <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter relative z-10">
                                    {service.title}
                                </h1>
                            </div>
                        </div>

                        {/* LADO DIREITO */}
                        <div className="md:max-w-sm mb-2 animate-in slide-in-from-right duration-700 fade-in w-full md:w-auto mt-4 md:mt-0">
                            <Link to="/servicos" className="inline-flex items-center gap-2 text-xs text-black font-bold uppercase hover:text-primary hover:border-primary transition-colors pb-1">
                                <ArrowLeft size={12} /> Voltar para Serviços
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORPO DE BOLINHAS */}
            <div
                key={`body-${slug}`}
                className="bg-dots-pattern w-full relative z-0 flex-1 flex flex-col justify-between"
            >

                <div className="container mx-auto px-4 py-16">

                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Coluna Esquerda: Detalhes do Serviço */}
                        <div className="lg:col-span-8 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both fade-in">

                            {/* DESCRIÇÃO LONGA */}
                            <div className="bg-[#fffbff] border-2 border-black p-8 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_#000000] mb-12 relative">

                                {/* BORBOLETA 2: SAINDO DO CARD BRANCO */}
                                <ButterflyLogo
                                    className="absolute -top-6 -right-6 w-24 h-24 text-primary rotate-[-15deg] drop-shadow-sm pointer-events-none"
                                    opacity={1}
                                />

                                <h2 className="text-3xl font-black uppercase mb-6 relative z-10">O que é?</h2>
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed relative z-10">
                                    {service.longDescription}
                                </p>
                            </div>

                            {/* BOX INCLUSO - MAPEADO DO ARRAY includes */}
                            <div className="bg-black text-white p-8 md:p-12 rounded-3xl border-2 border-primary shadow-[8px_8px_0px_0px_#EEACC5] relative overflow-hidden mb-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                                {/* BORBOLETA 3: GIGANTE FANTASMA NO CARD PRETO */}
                                <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-[0.13]">
                                    <ButterflyLogo className="w-96 h-96 text-primary -rotate-12" />
                                </div>

                                <h2 className="text-3xl font-black uppercase mb-8 relative z-10">
                                    O que está <span className="text-primary">Incluso</span>?
                                </h2>

                                <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                                    {service.includes?.map((item, index) => (
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

                                {service.faq?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#EEACC5] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-[1px] transition-all duration-300"
                                    >
                                        <h4 className="font-black uppercase mb-2">{item.question}</h4>
                                        <p className="text-gray-600 text-sm font-medium">
                                            {item.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Coluna Direita (Sticky CTA) */}
                        <div className="lg:col-span-4 sticky top-28 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both fade-in">
                            <div className="bg-primary selection-invert border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000000] text-center relative overflow-hidden">

                                {/* BORBOLETA 4: DISCRETA NO CTA */}
                                <ButterflyLogo
                                    className="absolute -bottom-4 -right-4 w-20 h-20 text-black rotate-45 pointer-events-none"
                                    opacity={0.05}
                                />

                                <h3 className="text-2xl font-black uppercase text-black mb-4 relative z-10">
                                    Curtiu a proposta?
                                </h3>
                                <p className="text-black/80 font-bold text-sm mb-8 relative z-10">
                                    Vamos personalizar esse pacote para a necessidade exata da sua marca.
                                </p>

                                <div className="space-y-4 relative z-10">
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