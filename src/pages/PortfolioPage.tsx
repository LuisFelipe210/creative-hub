import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";

// --- IMPORTANDO DADOS CENTRALIZADOS ---
import { allProjects } from "@/data/projects";

// Componente de Imagem com Skeleton (Reaproveitado para consistência)
const ImageWithSkeleton = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full h-full bg-gray-100 overflow-hidden ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                } ${className}`}
                {...props}
            />
        </div>
    );
};

const PortfolioPage = () => {
    return (
        <main className="min-h-screen selection:bg-primary selection:text-black bg-dots-pattern">
            <SEO
                title="Portfólio"
                description="Seleção de projetos de identidade visual, social media e web design."
            />
            <Navigation />

            <section className="pt-32 pb-20 container mx-auto px-4">

                {/* CABEÇALHO DA PÁGINA */}
                <div className="mb-16 md:mb-24 space-y-6 max-w-4xl animate-in slide-in-from-bottom duration-700 fade-in">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs border-2 border-black px-3 py-1 rounded-full bg-black">
                        Trabalhos Selecionados
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter">
                        Cases <br/>
                        <span className="text-primary" style={{ WebkitTextStroke: '1px black' }}>Reais</span>.
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-gray-700 max-w-xl leading-relaxed border-l-4 border-black pl-6">
                        Não é só estética. É estratégia, posicionamento e dinheiro no bolso do cliente.
                    </p>
                </div>

                {/* GRID DE PROJETOS (PUXANDO DO ARQUIVO CENTRAL) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {allProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            to={`/portfolio/${project.slug}`}
                            className={`group block space-y-4 animate-in slide-in-from-bottom duration-700 fill-mode-both`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* CARD DA IMAGEM */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-black bg-neutral-100
                                          shadow-[8px_8px_0px_0px_#EEACC5] transition-all duration-300 transform-gpu
                                          group-hover:shadow-[12px_12px_0px_0px_#000000] group-hover:-translate-x-1 group-hover:-translate-y-1">

                                <ImageWithSkeleton
                                    src={project.image}
                                    alt={project.client}
                                    className="group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* OVERLAY COM SETA */}
                                <div className="absolute top-4 right-4 bg-primary text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                                    <ArrowUpRight size={24} />
                                </div>

                                {/* TAG DE ANO FLUTUANTE */}
                                <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-primary z-20">
                                    {project.year}
                                </div>
                            </div>

                            {/* INFORMAÇÕES */}
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase text-black leading-none group-hover:text-primary transition-colors">
                                        {project.client}
                                    </h3>
                                    <p className="text-gray-600 font-bold uppercase text-xs md:text-sm mt-1 tracking-wide">
                                        {project.category}
                                    </p>
                                </div>

                                {/* TAGS (VISÍVEIS NO DESKTOP) */}
                                <div className="hidden md:flex gap-2">
                                    {project.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase border border-black px-2 py-0.5 rounded-full bg-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>

            <Footer />
        </main>
    );
};

export default PortfolioPage;