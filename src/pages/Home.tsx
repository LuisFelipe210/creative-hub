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

// --- COMPONENTE DE ITEM DE CASE ---
const CaseGridItem = ({ title, service, link, image, isFeatured, customBg, customShadow }: { title: string, service: string, link: string, image: string, isFeatured?: boolean, customBg?: string, customShadow?: string }) => {

    const baseClasses = "group block border-4 border-black transition-all duration-300 transform-gpu";

    const shadowClass = customShadow ? customShadow : (
        isFeatured ? "shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1" : "shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px]"
    );

    const bgClass = customBg ? customBg : "bg-neutral-800";
    const textColor = customBg === 'bg-primary' ? 'text-black' : 'text-white';
    const serviceColor = customBg === 'bg-primary' ? 'text-black/80' : 'text-primary';
    const paddingClass = isFeatured ? "p-6 md:p-8" : "p-4";

    return (
        <Link to={link} className={`${baseClasses} ${shadowClass}`}>
            <div className={`${paddingClass} ${bgClass} relative overflow-hidden h-full`}>
                <div className={`${isFeatured ? "aspect-[5/3] md:aspect-[16/9]" : "aspect-[4/3]"} rounded-lg overflow-hidden mb-4 relative`}>
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
                          bg-white border-4 border-black p-8
                          shadow-[8px_8px_0px_0px_#000000]
                          hover:shadow-[12px_12px_0px_0px_#EEACC5]
                          hover:-translate-y-2 hover:-translate-x-1
                          transition-all duration-300 ease-out select-none cursor-grab active:cursor-grabbing overflow-hidden">
            <Quote
                className="absolute top-4 right-4 w-24 h-24 text-gray-100 -rotate-12 pointer-events-none group-hover:text-primary/20 transition-colors duration-500"
                fill="currentColor"
            />
            <div className="relative z-10 mb-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-black text-primary border-2 border-black flex items-center justify-center font-black text-2xl uppercase shadow-[4px_4px_0px_0px_#EEACC5] group-hover:bg-primary group-hover:text-black group-hover:shadow-[4px_4px_0px_0px_#000] transition-all">
                    {initial}
                </div>
                <div>
                    <h3 className="text-xl font-black uppercase leading-none text-black mb-1">{name}</h3>
                    <span className="inline-block bg-gray-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-black/20">{role}</span>
                </div>
            </div>
            <div className="relative z-10 flex-1">
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-full transition-all duration-500"></div>
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
                        p-3 bg-white border-2 border-black text-black 
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

    // Efeito de Parallax suave no mouse move para o Hero
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black overflow-x-hidden">
            <SEO title="Home" description="Estratégia visual e design com propósito para marcas que cansaram de ser ignoradas." />

            <Navigation />

            {/* --- HERO SECTION ORIGINAL E ASSIMÉTRICA --- */}
            <section className="relative pt-28 md:pt-32 pb-16 md:pb-32 min-h-[auto] md:min-h-[92vh] flex items-center bg-[#fffbff] overflow-hidden border-b-4 border-black">

                <ButterfliesScene />

                {/* TEXTURA DE FUNDO */}
                <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-8 items-center">

                        {/* --- COLUNA DA ESQUERDA (Texto & CTAs) --- */}
                        <div className="lg:col-span-6 relative z-20 animate-in slide-in-from-bottom duration-1000 text-center lg:text-left">

                            <div className="inline-flex mb-6 items-center gap-2 bg-black text-white border-2 border-black px-4 py-2 font-black uppercase tracking-widest text-xs shadow-[6px_6px_0px_0px_#EEACC5] rotate-2 md:-rotate-2 hover:rotate-0 transition-transform">
                                SOCIAL MEDIA I DESIGN
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-black leading-[0.9] tracking-tighter mb-8 relative">
                                Transforme o <br/>
                                <span className="relative z-10 pl-2 pr-4 bg-primary inline-block skew-x-[-4deg] shadow-[1px_1px_0px_0px_#a6a6a6]">
                                    comum
                                </span> em <br/>
                                <span className="relative inline-block">
                                    extraordinário.
                                </span>
                            </h1>

                            <p className="text-base md:text-xl font-bold text-gray-800 leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-8 border-primary lg:pl-6 mb-10 bg-white/80 backdrop-blur-sm p-4 shadow-[4px_4px_0px_0px_#000] rounded-xl lg:rounded-none">
                                Estratégia visual e design com <span className="underline decoration-primary decoration-4 underline-offset-4">propósito</span> para marcas que cansaram de ser ignoradas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center lg:items-start justify-center lg:justify-start">
                                <Link to="/portfolio" className="w-full sm:w-auto justify-center relative group bg-black text-white px-8 py-4 font-black text-lg uppercase border-4 border-black shadow-[8px_8px_0px_0px_#EEACC5] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-3 z-20 overflow-hidden">
                                    <span className="relative z-10">Ver o que eu faço</span>
                                    <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                                </Link>
                                <Link to="/contato" className="w-full sm:w-auto justify-center font-black text-lg uppercase border-b-4 border-black hover:text-primary hover:border-primary transition-colors px-2 py-2 flex items-center gap-2 z-20">
                                    Vamos conversar <ChevronRight size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* --- COLUNA DA DIREITA (Colagem Assimétrica) --- */}
                        <div className="lg:col-span-5 relative h-[400px] lg:h-[500px] flex items-center justify-center z-10 animate-in slide-in-from-right duration-1000 delay-300">

                            <div
                                className="hidden md:block absolute w-[80%] h-[70%] bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-12 top-12 right-[-20px] z-0 transition-transform duration-200 ease-out"
                                style={{ transform: `rotate(12deg) translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)` }}
                            ></div>

                            <div
                                className="absolute w-[80%] h-[70%] bg-primary border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-6 top-6 right-4 md:top-10 md:right-0 z-10 transition-transform duration-200 ease-out"
                                style={{ transform: window.innerWidth > 768 ? `rotate(6deg) translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` : 'rotate(6deg)' }}
                            ></div>

                            <div
                                className="relative w-[85%] h-[75%] bg-accent border-4 border-black p-2 shadow-[6px_6x_0px_0px_#000000] -rotate-3 z-20 hover:rotate-0 transition-all duration-500 group transform-gpu hover:-translate-x-[4px] hover:-translate-y-[4px]"
                                style={{ transform: window.innerWidth > 768 ? `rotate(-3deg) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` : 'rotate(-3deg)' }}
                            >
                                <div className="w-full h-full border-2 border-dashed border-gray-300 p-6 flex items-center justify-center bg-accent">
                                    <img src="/logo.svg" alt="Brand Criativo Logo" className="w-full h-full object-contain contrast-125 drop-shadow-xl" />
                                </div>

                                <div className="absolute -bottom-5 -left-4 md:-bottom-6 md:-left-6 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 font-black uppercase text-xs md:text-sm border-4 border-white shadow-[4px_4px_0px_0px_#000] rotate-6 md:rotate-12 z-30">
                                    Since 2022
                                </div>
                            </div>

                            {/* Sticker Flutuante (Tags) */}
                            <div
                                className="absolute -top-4 -left-2 md:top-0 md:left-0 bg-white text-black border-4 border-black px-3 py-2 md:px-5 md:py-3 font-black uppercase text-[10px] md:text-xs shadow-[8px_8px_0px_0px_#000] -rotate-6 md:-rotate-12 z-30 flex flex-col gap-1 transition-transform duration-200 ease-out"
                                style={{ transform: window.innerWidth > 768 ? `rotate(-12deg) translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)` : 'rotate(-6deg)' }}
                            >
                                <span>#SocialMedia</span>
                                <span className="text-primary">#Branding</span>
                                <span>#Strategy</span>
                            </div>

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

                {/* SERVIÇOS (ATUALIZADO E BRUTALISTA) */}
                <section className="py-16 md:py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both relative">

                    {/* BORBOLETA 2: GIGANTE NO FUNDO DOS SERVIÇOS */}
                    <ButterflyLogo
                        className="absolute top-0 -left-20 w-[600px] h-[600px] text-primary opacity-[0.05] pointer-events-none rotate-12"
                    />

                    <div className="text-center mb-10 md:mb-12 relative z-10">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Serviços</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">Minhas <span className="bg-primary px-2">Soluções</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {allServices.slice(0, 4).map((item, index) => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className="group flex flex-col h-full bg-[#fffbff]
                                         border-4 border-black p-6
                                         shadow-[8px_8px_0px_0px_#EEACC5]
                                         hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1
                                         transition-all duration-300 transform-gpu justify-between"
                            >
                                <div>
                                    <div className="mb-6 p-4 bg-primary border-2 border-black w-fit  group-hover:rotate-6 transition-transform duration-300 shadow-[4px_4px_0px_0px_#000]">
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
                        <Link to="/servicos" className="inline-flex items-center gap-2 font-bold uppercase border-2 border-black bg-primary   px-8 py-3 rounded-xl text-black transition-colors text-base shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            Ver Mais Detalhes <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* CASES DE IMPACTO */}
                <section className="py-16 md:py-20 bg-black text-white rounded-t-[2.5rem] md:rounded-t-[3rem] relative overflow-hidden border-t-4 border-primary animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">

                    {/* BORBOLETA 3: BRANCA NO FUNDO PRETO DOS CASES */}
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

                {/* --- SEÇÃO DE DEPOIMENTOS --- */}
                <section className="py-20 border-b-2 border-black bg-[#fffbff] overflow-hidden relative">

                    {/* BORBOLETA 4: ROSA PEQUENA PERTO DO TÍTULO DEPOIMENTOS */}
                    <div className="absolute top-10 right-[20%] pointer-events-none">
                        <ButterflyLogo
                            className="w-24 h-24 text-primary rotate-12 opacity-40"
                        />
                    </div>

                    <div className="container mx-auto px-4 mb-10 text-center relative z-10">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Feedback</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">
                            <span className="bg-primary px-2">Quem</span> Confia
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

                {/* SOBRE COM BORBOLETAS SVG ADICIONADAS */}
                <section className="py-16 md:py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                    <div className="bg-[#fffbff] border-4 border-black rounded-xl md:rounded-2xl p-6 md:p-12 shadow-[10px_10px_0px_0px_#EEACC5] md:shadow-[16px_16px_0px_0px_#EEACC5] flex flex-col md:flex-row items-center gap-8 md:gap-10 transition-all duration-500 hover:shadow-[14px_14px_0px_0px_#EEACC5] transform-gpu relative overflow-hidden">

                        {/* --- DECORAÇÃO DE BORBOLETAS SVG (ATUALIZADO) --- */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            {/* Borboleta Rosa Grande (Canto Superior Direito) */}
                            <ButterflyLogo
                                color="#94a3b8"
                                opacity={0.3}
                                className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 rotate-12"
                            />
                            {/* Borboleta Cinza Pequena (Próxima à foto) */}
                            <ButterflyLogo
                                color="#EEACC5"
                                opacity={0.15}
                                className="absolute bottom-[-40px] left-[35%] w-32 h-32 md:w-40 md:h-40 -rotate-12"
                            />
                        </div>

                        {/* Conteúdo com z-10 para ficar por cima das borboletas */}
                        <div className="w-full md:w-1/3 relative z-10">
                            <div className="relative aspect-square rounded-lg border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_#EEACC5] rotate-1 hover:rotate-0 transition-all duration-500">
                                <ImageWithSkeleton src="/iasmim.png" alt="Iasmim" className="object-cover w-full h-full" />
                                <div className="absolute inset-4 border-2 border-primary pointer-events-none"></div>
                            </div>
                            <div className="absolute top-[-10px] right-[-10px] bg-primary text-black px-3 py-1 font-black text-xs uppercase rotate-3 shadow-[2px_2px_0px_0px_#000000] border-2 border-black z-20">IMPACTO VISUAL</div>
                            <div className="absolute bottom-[-10px] left-[-10px] bg-black text-white px-3 py-1 font-black text-xs uppercase -rotate-3 border-2 border-primary shadow-md z-20">DESIGN DE PESO</div>
                        </div>

                        {/* Conteúdo com z-10 para ficar por cima das borboletas */}
                        <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-left relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-tight">
                                Design com <br className="hidden md:block"/>
                                <span className="bg-primary px-2">Propósito</span>.
                            </h2>
                            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed border-l-4 border-black pl-4">
                                Prazer, <strong> Iasmim</strong>. Designer e Social Media focada em tirar marcas da mesmice. Se você busca estética aliada a resultado, a gente vai se dar bem.
                            </p>
                            <Link to="/sobre" className="inline-flex items-center gap-2 font-black uppercase border-b-2 border-black hover:text-primary hover:border-primary transition-colors pb-1 text-sm md:text-base">
                                Conhecer minha história <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-20 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto relative">

                        {/* BORBOLETA 5: RODAPÉ DO CARD CTA */}
                        <ButterflyLogo
                            className="absolute -bottom-10 -left-10 w-40 h-40 text-black opacity-[0.05] pointer-events-none"
                        />

                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black mb-6 leading-none relative z-10">
                            Pronto pra <span className="bg-primary px-2">Começar</span>?
                        </h2>
                        <p className="text-gray-700 font-bold text-base md:text-lg mb-10 relative z-10">
                            Vamos transformar suas ideias em uma marca forte e lucrativa.
                        </p>
                        <Link to="/contato" className="inline-flex items-center gap-3 font-black text-base md:text-lg uppercase rounded-xl bg-primary text-black border-2 border-black px-8 py-4 md:px-10 shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-[0.98] transform-gpu relative z-10">
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