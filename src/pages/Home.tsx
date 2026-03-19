import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Star, ArrowUpRight, Quote, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { allProjects } from "@/data/projects";
import { allServices } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import ButterfliesScene from "@/components/Butterflies.tsx";
import ButterflyLogo from "@/components/ButterflyLogo";

// --- COMPONENTE DE IMAGEM COM SKELETON ---
const ImageWithSkeleton = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full h-full bg-gray-100 rounded-xl ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10 rounded-xl" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 rounded-xl ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } ${className}`}
                {...props}
            />
        </div>
    );
};

// --- COMPONENTE DE ITEM DE CASE ---
const CaseGridItem = ({ title, service, link, image, isFeatured, customBg, customShadow }: { title: string, service: string, link: string, image: string, isFeatured?: boolean, customBg?: string, customShadow?: string }) => {

    const baseClasses = "group block border-4 border-black rounded-2xl transition-all duration-300 transform-gpu overflow-hidden";

    const shadowClass = customShadow ? customShadow : (
        isFeatured ? "shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1" : "shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px]"
    );

    const bgClass = customBg ? customBg : "bg-neutral-800";
    const textColor = customBg === 'bg-primary' ? 'text-black' : 'text-white';
    const serviceColor = customBg === 'bg-primary' ? 'text-black/80' : 'text-primary';
    const paddingClass = isFeatured ? "p-6 md:p-8" : "p-4";

    return (
        <Link to={link} className={`${baseClasses} ${shadowClass}`}>
            <div className={`${paddingClass} ${bgClass} relative overflow-hidden h-full rounded-xl`}>
                <div className={`${isFeatured ? "aspect-[5/3] md:aspect-[16/9]" : "aspect-[4/3]"} rounded-xl overflow-hidden mb-4 relative`}>
                    <ImageWithSkeleton src={image} alt={title} className="group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-primary text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
                <div className="px-1 pt-2">
                    <h3 className={`font-black uppercase mb-1 leading-tight ${isFeatured ? "text-3xl" : "text-xl"} ${textColor}`}>{title}</h3>
                    <p className={`font-bold uppercase ${isFeatured ? "text-sm" : "text-xs"} ${serviceColor}`}>{service}</p>
                </div>
            </div>
        </Link>
    );
};

// --- CARD DE DEPOIMENTO ---
const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => {
    const initial = name.charAt(0);
    return (
        <article className="group relative h-full flex flex-col justify-between
                          bg-white border-4 border-black rounded-2xl p-8
                          shadow-[8px_8px_0px_0px_#000000]
                          hover:shadow-[12px_12px_0px_0px_#EEACC5]
                          hover:-translate-y-2 hover:-translate-x-1
                          transition-all duration-300 ease-out select-none cursor-grab active:cursor-grabbing overflow-hidden">
            <Quote
                className="absolute top-4 right-4 w-24 h-24 text-gray-100 -rotate-12 pointer-events-none group-hover:text-primary/20 transition-colors duration-500"
                fill="currentColor"
            />
            <div className="relative z-10 mb-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-black text-primary border-2 border-black rounded-xl flex items-center justify-center font-black text-2xl uppercase shadow-[4px_4px_0px_0px_#EEACC5] group-hover:bg-primary group-hover:text-black group-hover:shadow-[4px_4px_0px_0px_#000] transition-all">
                    {initial}
                </div>
                <div>
                    <h3 className="text-xl font-black uppercase leading-none text-black mb-1">{name}</h3>
                    <span className="inline-block bg-gray-200 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-black/20">{role}</span>
                </div>
            </div>
            <div className="relative z-10 flex-1">
                <div className="w-12 h-1 bg-primary mb-4 rounded-full group-hover:w-full transition-all duration-500"></div>
                <p className="text-base md:text-lg font-medium leading-relaxed text-gray-800 italic line-clamp-6">"{text}"</p>
            </div>
            <div className="relative z-10 mt-8 pt-4 border-t-2 border-dashed border-gray-300 flex justify-between items-center">
                <div className="flex text-black gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" className="group-hover:text-primary transition-colors" />)}
                </div>
                <div className="flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">Verificado</span>
                </div>
            </div>
        </article>
    );
};

// --- SETA BRUTALISTA SIMPLES ---
const BrutalistArrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => {
    const Icon = direction === 'left' ? ArrowLeft : ArrowRight;
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 z-20 
                        p-3 bg-white border-2 border-black rounded-xl text-black 
                        shadow-[4px_4px_0px_0px_#000000] 
                        hover:bg-primary transition-all duration-200 
                        active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
                        opacity-0 group-hover/carousel:opacity-100
                        ${direction === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'}`}
        >
            <Icon size={24} strokeWidth={2.5} />
        </button>
    );
}

const Home = () => {
    const featuredProject = allProjects[0];
    const secondaryProjects = allProjects.slice(1, 3);
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
    const [isPinkBg, setIsPinkBg] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPinkBg((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black overflow-x-hidden bg-[#fffbff]">
            <SEO title="Home" description="Estratégia visual e design com propósito para marcas que cansaram de ser ignoradas." />

            <Navigation />

            {/* --- HERO SECTION --- */}
            <section className="relative z-10 pt-2 md:pt-2 pb-2 md:pb-2 px-2 md:px-2 min-h-[100svh] flex flex-col items-center bg-[#fffbff] overflow-hidden">

                {/* O "Card" Principal do Hero alternando cor entre cinza e rosa */}
                <div className={`relative z-10 w-full flex-grow rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center border-4 border-black transition-colors duration-1000 ${isPinkBg ? 'bg-[#a3a3a3]' : 'bg-[#EEACC5]'} p-5 sm:p-8 md:p-12 lg:p-16`}>

                    {/* Textura de ruído opcional pra dar aquele aspecto de tecido/papel */}
                    <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

                    {/* --- DECORAÇÃO DE BORBOLETAS SVG VOANDO POR ELA (DENTRO DO CARD) --- */}
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                        {/* Borboleta 1 (Preta/Cinza, flutuando no topo-esquerdo) */}
                        <ButterflyLogo
                            color={isPinkBg ? "#ffffff" : "#000000"}
                            opacity={isPinkBg ? 0.3 : 0.4}
                            className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] w-20 h-20 md:w-32 md:h-32 rotate-[-15deg] animate-pulse"
                        />
                        {/* Borboleta 2 (Branca/Rosa, flutuando no meio-direito) */}
                        <ButterflyLogo
                            color={isPinkBg ? "#EEACC5" : "#ffffff"}
                            opacity={isPinkBg ? 0.4 : 0.3}
                            className="absolute top-[15%] right-[5%] md:top-[40%] md:right-[5%] w-32 h-32 md:w-48 md:h-48 rotate-15 animate-pulse delay-700"
                        />
                        <ButterflyLogo
                            color={isPinkBg ? "#EEACC5" : "#ffffff"}
                            opacity={isPinkBg ? 0.4 : 0.3}
                            className="absolute bottom-[10%] left-[5%] md:top-[60%] md:right-[5%] w-32 h-32 md:w-48 md:h-48 rotate-15 animate-pulse delay-700"
                        />
                        {/* Borboleta 3 (Preta, flutuando no rodapé-direito) */}
                        <ButterflyLogo
                            color="#000000"
                            opacity={0.1}
                            className="absolute bottom-[20%] right-[10%] md:bottom-[10%] md:right-[10%] w-16 h-16 md:w-24 md:h-24 animate-pulse delay-1000"
                        />
                    </div>

                    {/* Overlay Escuro sutil para garantir legibilidade de tudo */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-black/5"></div>

                    {/* --- CONTEÚDO PRINCIPAL (FLEX STRUCTURE) --- */}
                    <div className="relative z-30 flex flex-col justify-between h-full w-full pointer-events-none">

                        {/* Logo Maior e Limpa (No meio, empurrando o conteúdo) */}
                        <div className="flex-1 flex items-center justify-center py-8 md:py-4">
                            <img
                                src="/logo.svg"
                                alt="Brand Criativo Logo"
                                className="w-[85%] max-w-[280px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] h-auto object-contain contrast-125"
                            />
                        </div>

                        {/* Rodapé do Card (Texto + Botões) */}
                        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-8 pointer-events-auto mt-auto -mb-2 sm:-mb-4 lg:-mb-8">

                            {/* Título Principal */}
                            <div className="w-full md:max-w-3xl flex flex-col items-start gap-6">
                                <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-bold w-full border-l-4 md:border-l-8 border-primary pl-4 md:pl-6 bg-white/85 backdrop-blur-md p-4 md:p-5 shadow-[4px_4px_0px_0px_#000] rounded-xl lg:rounded-2xl leading-snug md:leading-relaxed text-left">
                                    Estratégia visual e design com <span className="underline decoration-primary decoration-4 underline-offset-4 font-black">propósito</span> para marcas que cansaram de ser ignoradas.
                                </p>
                            </div>

                            {/* Botão de Ação */}
                            {/*<div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">*/}
                            {/*    <Link to="/portfolio" className="w-full md:w-auto justify-center relative group rounded-xl md:rounded-2xl bg-black text-white px-6 md:px-8 py-3.5 md:py-4 font-black text-sm sm:text-base md:text-lg uppercase border-4 border-black shadow-[4px_4px_0px_0px_#EEACC5] md:shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[4px_4px_0px_0px_#000000] md:hover:shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[4px] md:hover:translate-y-[4px] transition-all flex items-center gap-3 z-20 overflow-hidden">*/}
                            {/*        <span className="relative z-10">Solicitar Orçamento</span>*/}
                            {/*        <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />*/}
                            {/*        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <div className="bg-accent border-y-4 border-black overflow-hidden py-4 relative z-20 shadow-sm font-black uppercase tracking-widest text-xl">
                <div className="flex animate-marquee whitespace-nowrap will-change-transform transform-gpu">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span style={{ WebkitTextStroke: '1px black' }} className="text-transparent">Brand Strategy</span>
                            <span className="mx-6 text-primary">•</span>
                            <span className="text-black">Social Media</span>
                            <span className="mx-6 text-primary">•</span>
                            <span style={{ WebkitTextStroke: '1px black' }} className="text-transparent">Visual Identity</span>
                            <span className="mx-6 text-primary">•</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-dots-pattern w-full flex-1 relative z-0">

                {/* SERVIÇOS */}
                <section className="py-16 md:py-20 border-b-4 border-black container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both relative">

                    <ButterflyLogo
                        className="absolute top-0 -left-20 w-[600px] h-[600px] text-primary opacity-[0.05] pointer-events-none rotate-12"
                    />

                    <div className="text-center mb-10 md:mb-12 relative z-10">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Serviços</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">Minhas <span className="bg-primary rounded-xl px-2">Soluções</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {allServices.slice(0, 4).map((item, index) => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className="group flex flex-col h-full bg-[#fffbff]
                                         border-4 border-black rounded-2xl p-6
                                         shadow-[8px_8px_0px_0px_#EEACC5]
                                         hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1
                                         transition-all duration-300 transform-gpu justify-between"
                            >
                                <div>
                                    <div className="mb-6 p-4 bg-primary border-2 border-black rounded-xl w-fit group-hover:rotate-6 transition-transform duration-300 shadow-[4px_4px_0px_0px_#000]">
                                        <item.icon size={32} className="text-black" strokeWidth={2.5} />
                                    </div>

                                    <h3 className="text-2xl font-black uppercase mb-3 text-black group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t-2 border-dashed border-gray-300 w-full">
                                    <span className="inline-flex items-center gap-2 font-black uppercase text-xs tracking-wider group-hover:text-primary transition-colors">
                                        Explorar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-16 relative z-10">
                        <Link to="/servicos" className="inline-flex items-center gap-2 font-bold uppercase border-2 border-black bg-primary px-8 py-3 rounded-xl text-black transition-colors text-base shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            Ver Mais Detalhes <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* CASES DE IMPACTO */}
                <section className="py-16 md:py-20 border-b-4 border-black bg-black text-white rounded-t-[2.5rem] md:rounded-t-[3rem] relative overflow-hidden border-t-4 border-primary animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">

                    <ButterflyLogo
                        className="absolute -top-10 right-0 w-96 h-96 text-white opacity-[0.03] rotate-[-10deg] pointer-events-none"
                        color="#ffffff"
                    />

                    <div className="hidden md:block absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                            <div className="text-center md:text-left w-full md:w-auto">
                                <h2 className="text-4xl md:text-6xl font-black uppercase mb-2 leading-none">Cases de <span className="text-primary">Impacto</span></h2>
                                <p className="text-gray-400 max-w-lg text-sm md:text-base mx-auto md:mx-0">Projetos estratégicos que transformaram negócios.</p>
                            </div>
                            <Link to="/portfolio" className="border-2 border-primary text-primary px-6 py-2 rounded-2xl text-xs font-bold uppercase hover:bg-primary hover:text-black transition-all">Ver Portfólio Completo</Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {featuredProject && (
                                <div className="lg:col-span-2">
                                    <CaseGridItem
                                        title={featuredProject.client}
                                        service={featuredProject.category}
                                        link={`/portfolio/${featuredProject.slug}`}
                                        image={featuredProject.image}
                                        isFeatured={true}
                                        customBg="bg-primary"
                                        customShadow="shadow-[8px_8px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1"
                                    />
                                </div>
                            )}
                            <div className="lg:col-span-1 space-y-8">
                                {secondaryProjects.map((project) => (
                                    <CaseGridItem
                                        key={project.id}
                                        title={project.client}
                                        service={project.category}
                                        link={`/portfolio/${project.slug}`}
                                        image={project.image}
                                        isFeatured={false}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12 lg:hidden">
                            <Link to="/portfolio" className="border-2 border-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-black transition-all inline-block">Ver Portfólio Completo</Link>
                        </div>
                    </div>
                </section>

                {/* DEPOIMENTOS */}
                <section className="py-20 border-b-4 border-black bg-[#fffbff] overflow-hidden relative">

                    <div className="absolute top-10 right-[20%] pointer-events-none">
                        <ButterflyLogo
                            className="w-24 h-24 text-primary rotate-12 opacity-40"
                        />
                    </div>

                    <div className="container mx-auto px-4 mb-10 text-center relative z-10">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Feedback</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">
                            <span className="bg-primary rounded-xl px-2">Quem</span> Confia
                        </h2>
                    </div>

                    <div className="w-full relative group/carousel z-10">

                        <BrutalistArrow direction="left" onClick={() => swiperRef?.slidePrev()} />
                        <BrutalistArrow direction="right" onClick={() => swiperRef?.slideNext()} />

                        <div className="w-full">
                            <Swiper
                                modules={[SwiperNavigation, Autoplay]}
                                onBeforeInit={(swiper) => setSwiperRef(swiper)}
                                centeredSlides={true}
                                loop={true}
                                spaceBetween={24}
                                slidesPerView={1.25}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                className="!pb-12 !px-0"
                            >
                                {testimonials.map((t, i) => (
                                    <SwiperSlide key={i} className="h-auto">
                                        <div className="h-full pt-2">
                                            <TestimonialCard name={t.name} role={t.role} text={t.text} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>

                {/* SOBRE */}
                <section className="py-16 md:py-20 border-b-4 border-black container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                    <div className="bg-[#fffbff] border-4 border-black rounded-2xl p-6 md:p-12 shadow-[10px_10px_0px_0px_#EEACC5] md:shadow-[16px_16px_0px_0px_#EEACC5] flex flex-col md:flex-row items-center gap-8 md:gap-10 transition-all duration-500 hover:shadow-[14px_14px_0px_0px_#EEACC5] transform-gpu relative overflow-hidden">

                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <ButterflyLogo
                                color="#94a3b8"
                                opacity={0.3}
                                className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 rotate-12"
                            />
                            <ButterflyLogo
                                color="#EEACC5"
                                opacity={0.15}
                                className="absolute bottom-[-40px] left-[35%] w-32 h-32 md:w-40 md:h-40 -rotate-12"
                            />
                        </div>

                        <div className="w-full md:w-1/3 relative z-10">
                            <div className="relative aspect-square rounded-xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_#EEACC5] rotate-1 hover:rotate-0 transition-all duration-500">
                                <ImageWithSkeleton src="/iasmim.png" alt="Iasmim" className="object-cover w-full h-full rounded-xl" />
                                <div className="absolute inset-4 rounded-xl border-2 border-primary pointer-events-none"></div>
                            </div>
                            <div className="absolute top-[-10px] right-[-10px] bg-primary rounded-lg text-black px-3 py-1 font-black text-xs uppercase rotate-3 shadow-[2px_2px_0px_0px_#000000] border-2 border-black z-20">IMPACTO VISUAL</div>
                            <div className="absolute bottom-[-10px] left-[-10px] bg-black text-white rounded-lg px-3 py-1 font-black text-xs uppercase -rotate-3 border-2 border-primary shadow-md z-20">DESIGN DE PESO</div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-left relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-tight">
                                Design com <br className="hidden md:block"/>
                                <span className="bg-primary rounded-xl px-2">Propósito</span>.
                            </h2>
                            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed border-l-4 border-black pl-4">
                                Prazer, <strong> Iasmim</strong>. Designer e Social Media focada em tirar marcas da mesmice. Se você busca estética aliada a resultado, a gente vai se dar bem.
                            </p>
                            <Link to="/sobre" className="inline-flex items-center gap-2 font-black uppercase border-b-2 border-transparent hover:text-primary hover:border-primary transition-colors pb-1 text-sm md:text-base">
                                Conhecer minha história <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-20 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto relative">

                        <ButterflyLogo
                            className="absolute -bottom-10 -left-10 w-40 h-40 text-black opacity-[0.05] pointer-events-none"
                        />

                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black mb-6 leading-none relative z-10">
                            Pronto pra <span className="bg-primary rounded-xl px-2">Começar</span>?
                        </h2>
                        <p className="text-gray-700 font-bold text-base md:text-lg mb-10 relative z-10">
                            Vamos transformar suas ideias em uma marca forte e lucrativa.
                        </p>
                        <Link to="/contato" className="inline-flex items-center gap-3 font-black text-base md:text-lg uppercase rounded-2xl bg-primary text-black border-2 border-black px-8 py-4 md:px-10 shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-[0.98] transform-gpu relative z-10">
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