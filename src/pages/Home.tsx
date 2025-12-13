import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Star, ArrowUpRight, Quote, Share2, PenTool, Layout} from "lucide-react";
import { Link } from "react-router-dom";

// --- COMPONENTE DE IMAGEM COM SKELETON ---
const ImageWithSkeleton = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full h-full bg-gray-100 ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } ${className}`}
                {...props}
            />
        </div>
    );
};

// --- NOVO COMPONENTE DE ITEM DE CASE ---
const CaseGridItem = ({ title, service, link, image, isFeatured }: { title: string, service: string, link: string, image: string, isFeatured?: boolean }) => {

    // Configurações Brutalistas
    const baseClasses = "group block border-4 border-black transition-all duration-300 transform-gpu";
    const shadowClass = isFeatured ? "shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1" : "shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px]";
    const paddingClass = isFeatured ? "p-6 md:p-8 bg-neutral-800" : "p-4 bg-neutral-800";

    return (
        <Link to={link} className={`${baseClasses} ${shadowClass}`}>
            <div className={`${paddingClass} relative overflow-hidden`}>
                <div className={`${isFeatured ? "aspect-[5/3] md:aspect-[16/9]" : "aspect-[4/3]"} rounded-lg overflow-hidden mb-4 relative`}>
                    <ImageWithSkeleton src={image} alt={title} className="group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-primary text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
                <div className="px-1 pt-2">
                    <h3 className={`font-black uppercase mb-1 leading-tight ${isFeatured ? "text-3xl" : "text-xl"}`}>{title}</h3>
                    <p className={`text-primary font-bold uppercase ${isFeatured ? "text-sm" : "text-xs"}`}>{service}</p>
                </div>
            </div>
        </Link>
    );
};

// --- DADOS DOS CASES (AUMENTEI PRA TER 3) ---
const caseData = [
    {
        title: "Gabrielle Weiss",
        service: "Branding e Design Web",
        link: "/portfolio/gabrielle-weiss",
        image: "/fundo.jpg", // Substituir pelo path real
        isFeatured: true, // Este será o maior
    },
    {
        title: "Wyate Boutique",
        service: "Estratégia Social Media",
        link: "/portfolio/wyate-boutique",
        image: "/dog.jpg", // Substituir pelo path real
        isFeatured: false,
    },
    {
        title: "Up Engenharia",
        service: "Identidade Visual",
        link: "/portfolio/up-engenharia",
        image: "/dog.jpg", // Substituir pelo path real
        isFeatured: false,
    },
];

// --- NOVO CARD BRUTALISTA (ADAPTADO) ---
const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => {
    return (
        <article className="flex w-full h-full flex-col items-start justify-between border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_#EEACC5] transition-all duration-300 ease-in-out hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-1 hover:-translate-x-1">

            {/* TAGS DO TOPO */}
            <div className="mb-4 flex items-center gap-x-2 text-[10px] font-black uppercase tracking-widest">
                <span className="border-2 border-black bg-primary px-2 py-1 text-black">
                    Feedback
                </span>
                <span className="border-2 border-black bg-black px-2 py-1 text-white">
                    {role}
                </span>
            </div>

            {/* CONTEÚDO */}
            <div className="group relative flex-1">
                <h3 className="mt-2 text-2xl font-black uppercase leading-none text-black group-hover:text-primary transition-colors">
                    {name}
                </h3>

                <div className="mt-4 border-l-4 border-black pl-4">
                    <Quote size={24} className="text-gray-300 mb-2 rotate-180" fill="currentColor"/>
                    <p className="text-sm font-medium leading-relaxed text-gray-700">
                        "{text}"
                    </p>
                </div>
            </div>

            {/* FOOTER DO CARD */}
            <div className="relative mt-6 flex items-center gap-x-2 w-full pt-4 border-t-2 border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs uppercase border-2 border-primary">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-black text-xs uppercase text-black">Cliente Verificado</p>
                        <div className="flex text-primary">
                            {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="currentColor" />)}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

// --- DADOS REAIS ---
const testimonials = [
    {
        name: "Alegra Sonhos",
        role: "Festa do Pijama",
        text: "A Iasmim entendeu perfeitamente o perfil da nossa empresa e entregou um trabalho incrível com a logomarca e identidade. Sempre atenciosa, aberta a ajustes e com ótimas sugestões. Indicamos para outras empresas!"
    },
    {
        name: "Wyate Boutique",
        role: "Moda Feminina",
        text: "Fiquei extremamente satisfeita com o resultado! Agradeço de coração pelo carinho, paciência e profissionalismo ao longo de todo o processo. Acredito que seu trabalho realmente merece todo reconhecimento."
    },
    {
        name: "Up Engenharia",
        role: "Engenharia Civil",
        text: "A organização do feed e a estratégia visual mudaram a percepção da nossa marca. A Iasmim conseguiu traduzir obras técnicas em conteúdo atrativo e profissional."
    }
];

const Home = () => {
    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black overflow-x-hidden">
            <SEO title="Home" description="Estratégia visual e design com propósito para marcas que cansaram de ser ignoradas." />

            <Navigation />

            {/* --- HERO RESPONSIVO --- */}
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 min-h-[90vh] flex items-center bg-[#fffbff] overflow-hidden">
                <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none transform-gpu translate-z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left animate-in slide-in-from-left duration-1000 fade-in fill-mode-both">
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-3 py-1.5 md:px-4 md:py-2 font-bold uppercase tracking-widest text-[14px] md:text-xs shadow-[2px_2px_0px_0px_#EEACC5] md:shadow-[4px_4px_0px_0px_#EEACC5] rounded-full mb-2">
                                    Social Media & Design
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-black leading-[0.9] tracking-tighter">
                                Transforme o <br className="hidden md:block"/>
                                <span className="text-primary" style={{ WebkitTextStroke: '1px black' }}>Comum</span> em <br className="hidden md:block"/>
                                Extraordinário.
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Estratégia visual e design com propósito para marcas que cansaram de ser ignoradas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2">
                                <Link to="/portfolio" className="px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg uppercase rounded-xl bg-primary text-black border-2 border-black shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] hover:bg-black hover:text-white hover:border-2 hover:border-black hover:shadow-none transition-all flex items-center justify-center gap-2 group">
                                    Ver Trabalhos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contato" className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] uppercase rounded-xl hover:bg-gray-50 hover:shadow-none transition-all flex items-center justify-center">
                                    Entrar em Contato
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-center relative lg:justify-end mt-10 lg:mt-0 animate-in slide-in-from-right duration-1000 fade-in fill-mode-both">
                            <div className="relative z-10 bg-white border-4 border-black p-8 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_#EEACC5] md:shadow-[14px_14px_0px_0px_#EEACC5] rotate-3 hover:rotate-0 transition-all duration-500 group w-full max-w-sm lg:max-w-md transform-gpu">
                                <img src="/logo2.svg" alt="Iasmim Trajano Logo" width={400} height={400} className="w-full h-auto object-contain" />
                            </div>
                            <Star className="hidden md:block absolute -top-6 -right-6 text-black w-14 h-14 animate-spin-slow opacity-20" />
                            <ArrowUpRight className="hidden md:block absolute -bottom-6 -left-8 text-black w-20 h-20 opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MARQUEE SUPERIOR --- */}
            <div className="bg-accent border-y-2 border-black overflow-hidden py-3 relative z-20 shadow-sm">
                <div className="flex animate-marquee whitespace-nowrap will-change-transform transform-gpu">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span className="text-2xl md:text-3xl font-display font-black uppercase text-black">Brand Strategy</span>
                            <Star className="mx-6 w-5 h-5 md:w-6 md:h-6 fill-primary text-black" />
                            <span className="text-2xl md:text-3xl font-display font-black uppercase text-black">Social Media</span>
                            <Star className="mx-6 w-5 h-5 md:w-6 md:h-6 fill-primary text-black" />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CORPO DA PÁGINA --- */}
            <div className="bg-dots-pattern w-full flex-1 relative z-0">

                {/* --- SEÇÃO SERVIÇOS --- */}
                <section className="py-16 md:py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both">
                    <div className="text-center mb-10 md:mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Serviços</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">Minhas <span className="bg-primary px-2">Soluções</span></h2>
                    </div>

                    {/* GRID DE SERVIÇOS: 3 COLUNAS BRUTALISTAS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Share2, title: "Social Media", desc: "Gestão completa, planejamento estratégico e conteúdo visual que gera engajamento e vendas.", link: "/servicos/social-media" },
                            { icon: PenTool, title: "Identidade Visual", desc: "Criação de marcas inesquecíveis: logo, paleta, tipografia e manuais de uso para autoridade.", link: "/servicos/identidade-visual" },
                            { icon: Layout, title: "Web Design", desc: "Sites institucionais e landing pages de alta conversão, rápidos e otimizados para o Google.", link: "/servicos/web-design" }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="group bg-[#fffbff] border-2 border-black p-6 md:p-8 rounded-xl
                                           shadow-[6px_6px_0px_0px_#000000] hover:shadow-[10px_10px_0px_0px_#EEACC5]
                                           hover:-translate-x-[2px] hover:-translate-y-[2px]
                                           transition-all duration-300 transform-gpu flex flex-col justify-start text-left"
                            >
                                <div className="p-2 border-2 border-black mb-4 w-fit bg-primary text-black transition-colors">
                                    <item.icon size={36} className="text-black" />
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-3 text-black group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-700 font-medium text-base mb-6">{item.desc}</p>

                                <span className="mt-auto text-sm font-bold uppercase text-black border-b-2 border-black pb-1 group-hover:text-primary group-hover:border-primary transition-colors flex items-center gap-2">
                                    Explorar Serviço <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link to="/servicos" className="inline-flex items-center gap-2 font-bold uppercase border-2 border-black bg-white hover:bg-black hover:text-white px-8 py-3 rounded-xl text-black transition-colors text-base shadow-[4px_4px_0px_0px_#EEACC5] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            Ver Tabela de Preços <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* --- SEÇÃO DESTAQUES --- */}
                <section className="py-16 md:py-20 bg-black text-white rounded-t-[2.5rem] md:rounded-t-[3rem] relative overflow-hidden border-t-4 border-primary animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                    <div className="hidden md:block absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                            <div className="text-center md:text-left w-full md:w-auto">
                                <h2 className="text-4xl md:text-6xl font-black uppercase mb-2 leading-none">Cases de <span className="text-primary">Impacto</span></h2>
                                <p className="text-gray-400 max-w-lg text-sm md:text-base mx-auto md:mx-0">Projetos estratégicos que transformaram negócios.</p>
                            </div>
                            <Link to="/portfolio" className="border-2 border-primary text-primary px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-black transition-all">Ver Portfólio Completo</Link>
                        </div>

                        {/* NOVO GRID ASSIMÉTRICO */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Item de Destaque (Col-Span 2) */}
                            <div className="lg:col-span-2">
                                <CaseGridItem {...caseData[0]} />
                            </div>

                            {/* Itens Menores (Col-Span 1) */}
                            <div className="lg:col-span-1 space-y-8">
                                <CaseGridItem {...caseData[1]} />
                                <CaseGridItem {...caseData[2]} />
                            </div>
                        </div>

                        <div className="text-center mt-12 lg:hidden">
                            <Link to="/portfolio" className="border-2 border-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-black transition-all inline-block">Ver Portfólio Completo</Link>
                        </div>
                    </div>
                </section>

                {/* --- SEÇÃO DE DEPOIMENTOS (CARD BRUTALISTA) --- */}
                <section className="py-20 border-b-2 border-black bg-[#fffbff] overflow-hidden">
                    <div className="container mx-auto px-4 mb-16 text-center">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Feedback</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">
                            <span className="bg-primary px-2">Quem</span> Confia
                        </h2>
                    </div>

                    {/* GRID DE CARDS */}
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={i} name={t.name} role={t.role} text={t.text} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SOBRE (BENTO SMALL) --- */}
                <section className="py-16 md:py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                    {/* Alteração na sombra para destaque Rosa e bordas arredondadas menos suaves */}
                    <div className="bg-[#fffbff] border-4 border-black rounded-xl md:rounded-2xl p-6 md:p-12
                                    shadow-[10px_10px_0px_0px_#EEACC5] md:shadow-[16px_16px_0px_0px_#EEACC5]
                                    flex flex-col md:flex-row items-center gap-8 md:gap-10 transition-all duration-500 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[14px_14px_0px_0px_#EEACC5] transform-gpu">

                        {/* IMAGEM: com borda dupla agressiva */}
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square rounded-lg border-4 border-primary overflow-hidden relative shadow-lg">
                                <ImageWithSkeleton src="/iasmim.png" alt="Iasmim" className="object-cover" />
                            </div>
                        </div>

                        {/* TEXTO: Alinhamento fixo na esquerda e título padronizado */}
                        <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-left">

                            <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-tight">
                                Design com <br className="hidden md:block"/>
                                <span className="bg-primary px-2">Propósito</span>.
                            </h2>

                            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed border-l-4 border-black pl-4">
                                Prazer, **Iasmim**. Designer e Social Media focada em tirar marcas da mesmice. Se você busca estética aliada a resultado, a gente vai se dar bem.
                            </p>

                            <Link to="/sobre" className="inline-flex items-center gap-2 font-black uppercase border-b-2 border-black hover:text-primary hover:border-primary transition-colors pb-1 text-sm md:text-base">
                                Conhecer minha história <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
                {/* --- CTA FINAL (BRUTALISTA) --- */}
                <section className="py-16 md:py-20 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">

                        {/* Título Padronizado */}
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black mb-6 leading-none">
                            Pronto pra <span className="bg-primary px-2">Começar</span>?
                        </h2>

                        <p className="text-gray-700 font-bold text-base md:text-lg mb-10">
                            Vamos transformar suas ideias em uma marca forte e lucrativa.
                        </p>

                        {/* BOTÃO FINAL BRUTALISTA (Sombra Dura e Efeito de Deslizamento) */}
                        <Link
                            to="/contato"
                            className="inline-flex items-center gap-3 font-black text-base md:text-lg uppercase
                                       rounded-xl bg-primary text-black border-2 border-black
                                       px-8 py-4 md:px-10
                                       shadow-[6px_6px_0px_0px_#000000]
                                       hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                                       transition-all active:scale-[0.98] transform-gpu"
                        >
                            Solicitar Orçamento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
};

export default Home;