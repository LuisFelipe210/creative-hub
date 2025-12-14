import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Star, ArrowUpRight, Quote, Share2, PenTool, Layout, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// --- IMPORTANDO DADOS CENTRALIZADOS ---
import { allProjects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

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
    return (
        <article className="group h-full flex flex-col items-start justify-between border-2 border-black bg-white p-6
                          shadow-[6px_6px_0_0_#EEACC5] transition-all duration-300 ease-in-out
                          select-none cursor-grab active:cursor-grabbing">

            <div className="mb-4 flex items-center gap-x-2 text-[10px] font-black uppercase tracking-widest">
                <span className="border-2 border-black bg-primary px-2 py-1 text-black">Feedback</span>
                <span className="border-2 border-black bg-black px-2 py-1 text-white">{role}</span>
            </div>

            <div className="relative flex-1">
                <h3 className="mt-2 text-2xl font-black uppercase leading-none text-black">{name}</h3>
                <div className="mt-4 border-l-4 border-black pl-4">
                    <Quote size={24} className="text-gray-300 mb-2 rotate-180" fill="currentColor"/>
                    <p className="text-sm font-medium leading-relaxed text-gray-700 line-clamp-6">"{text}"</p>
                </div>
            </div>

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

    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black overflow-x-hidden">
            <SEO title="Home" description="Estratégia visual e design com propósito para marcas que cansaram de ser ignoradas." />

            <Navigation />

            {/* HERO SECTION */}
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 min-h-[90vh] flex items-center bg-[#fffbff] overflow-hidden border-b-2 border-black">
                <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none transform-gpu translate-z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left animate-in slide-in-from-left duration-1000 fade-in fill-mode-both">
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 bg-black text-primary border-2 border-primary px-3 py-1.5 md:px-4 md:py-2 font-black uppercase tracking-widest text-[14px] md:text-xs shadow-[4px_4px_0px_0px_#EEACC5] rounded-lg mb-2">
                                    SOCIAL MEDIA | DESIGN
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
                                <Link to="/portfolio" className="px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg uppercase rounded-xl bg-primary text-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none transition-all flex items-center justify-center gap-2 group transform-gpu hover:translate-x-[2px] hover:translate-y-[2px]">
                                    Ver Trabalhos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contato" className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg shadow-[4px_4px_0px_0px_#000000] uppercase rounded-xl hover:bg-black hover:text-white hover:shadow-none transition-all flex items-center justify-center transform-gpu hover:translate-x-[2px] hover:translate-y-[2px]">
                                    Entrar em Contato
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-center relative lg:justify-end mt-10 lg:mt-0 animate-in slide-in-from-right duration-1000 fade-in fill-mode-both">
                            <div className="relative z-10 bg-white border-4 border-black p-6 md:p-10 rounded-2xl shadow-[10px_10px_0px_0px_#EEACC5] md:shadow-[18px_18px_0px_0px_#EEACC5] rotate-1 hover:rotate-0 transition-all duration-500 group w-full max-w-sm lg:max-w-md transform-gpu hover:-translate-x-[2px] hover:-translate-y-[2px]">
                                <img src="/logo2.svg" alt="Iasmim Trajano Logo" width={400} height={400} className="w-full h-auto object-contain" />
                                <div className="absolute -bottom-4 -left-4 bg-black text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border-2 border-primary shadow-md rotate-3">
                                    EXECUÇÃO IMEDIATA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
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

            <div className="bg-dots-pattern w-full flex-1 relative z-0">

                {/* SERVIÇOS */}
                <section className="py-16 md:py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both">
                    <div className="text-center mb-10 md:mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Serviços</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">Minhas <span className="bg-primary px-2">Soluções</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((item, index) => (
                            <Link key={index} to={item.link} className="group bg-[#fffbff] border-2 border-black p-6 md:p-8 rounded-xl shadow-[6px_6px_0px_0px_#000000] hover:shadow-[10px_10px_0px_0px_#EEACC5] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300 transform-gpu flex flex-col justify-start text-left">
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
                        <Link to="/servicos" className="inline-flex items-center gap-2 font-bold uppercase border-2 border-black bg-primary   px-8 py-3 rounded-xl text-black transition-colors text-base shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            Ver Mais Detalhes <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* CASES DE IMPACTO */}
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
                                        customShadow="shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#EEACC5] hover:-translate-x-1 hover:-translate-y-1"
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

                {/* --- SEÇÃO DE DEPOIMENTOS (SWIPER CENTRALIZADO) --- */}
                <section className="py-20 border-b-2 border-black bg-[#fffbff] overflow-hidden relative">
                    <div className="container mx-auto px-4 mb-10 text-center">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Feedback</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-none">
                            <span className="bg-primary px-2">Quem</span> Confia
                        </h2>
                    </div>

                    {/* CONTAINER DO CARROSSEL */}
                    <div className="w-full relative group/carousel">

                        {/* SETAS FLUTUANTES (SOLTAS DO CONTAINER, ALINHADAS A TELA/CARROSSEL) */}
                        <BrutalistArrow direction="left" onClick={() => swiperRef?.slidePrev()} />
                        <BrutalistArrow direction="right" onClick={() => swiperRef?.slideNext()} />

                        {/* SWIPER - SEM CONTAINER PARA PEGAR LARGURA TOTAL SE QUISER, OU COM CONTAINER FLUIDO */}
                        <div className="w-full">
                            <Swiper
                                modules={[SwiperNavigation, Autoplay]}
                                onBeforeInit={(swiper) => setSwiperRef(swiper)}
                                centeredSlides={true}
                                loop={true}
                                spaceBetween={20}
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
                <section className="py-16 md:py-20 container mx-auto px-4 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                    <div className="bg-[#fffbff] border-4 border-black rounded-xl md:rounded-2xl p-6 md:p-12 shadow-[10px_10px_0px_0px_#EEACC5] md:shadow-[16px_16px_0px_0px_#EEACC5] flex flex-col md:flex-row items-center gap-8 md:gap-10 transition-all duration-500 hover:shadow-[14px_14px_0px_0px_#EEACC5] transform-gpu">
                        <div className="w-full md:w-1/3 relative">
                            <div className="relative aspect-square rounded-lg border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_#EEACC5] rotate-1 hover:rotate-0 transition-all duration-500">
                                <ImageWithSkeleton src="/iasmim.png" alt="Iasmim" className="object-cover w-full h-full" />
                                <div className="absolute inset-4 border-2 border-primary pointer-events-none"></div>
                            </div>
                            <div className="absolute top-[-10px] right-[-10px] bg-primary text-black px-3 py-1 font-black text-xs uppercase rotate-3 shadow-[2px_2px_0px_0px_#000000] border-2 border-black z-20">IMPACTO VISUAL</div>
                            <div className="absolute bottom-[-10px] left-[-10px] bg-black text-white px-3 py-1 font-black text-xs uppercase -rotate-3 border-2 border-primary shadow-md z-20">DESIGN DE PESO</div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-left">
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
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black mb-6 leading-none">
                            Pronto pra <span className="bg-primary px-2">Começar</span>?
                        </h2>
                        <p className="text-gray-700 font-bold text-base md:text-lg mb-10">
                            Vamos transformar suas ideias em uma marca forte e lucrativa.
                        </p>
                        <Link to="/contato" className="inline-flex items-center gap-3 font-black text-base md:text-lg uppercase rounded-xl bg-primary text-black border-2 border-black px-8 py-4 md:px-10 shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-[0.98] transform-gpu">
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