import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight, Eye, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

// --- COMPONENTE SKELETON INTERNO ---
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
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } ${className}`}
                {...props}
            />
        </div>
    );
};

const allProjects = [
    {
        id: 1,
        slug: "gabrielle-weiss",
        client: "Gabrielle Weiss",
        title: "Advocacia Premium",
        category: "Branding",
        year: "2024",
        image: "/fundo.jpg",
        desc: "Redesign completo de identidade visual focado em alto padrão."
    },
    {
        id: 2,
        slug: "wyate-boutique",
        client: "Wyate Boutique",
        title: "Moda Feminina",
        category: "Social Media",
        year: "2023",
        image: "/dog.jpg",
        desc: "Estratégia de conteúdo e direção de arte para e-commerce."
    },
    {
        id: 3,
        slug: "marfim-atelie",
        client: "Marfim Ateliê",
        title: "E-commerce Artesanal",
        category: "Web Design",
        year: "2024",
        image: "/iasmim.png",
        desc: "Interface limpa e focada em conversão para produtos manuais."
    },
    {
        id: 4,
        slug: "up-engenharia",
        client: "Up Engenharia",
        title: "Posicionamento Marca",
        category: "Social Media",
        year: "2023",
        image: "/galinha.jpg",
        desc: "Gestão de tráfego e criação de autoridade no LinkedIn."
    },
];

const PortfolioPage = () => {
    const [hoveredProject, setHoveredProject] = useState(allProjects[0]);

    return (
        <main className="min-h-screen selection:bg-primary selection:text-black">
            <SEO title="Portfólio" description="Confira meus últimos projetos de Branding, Social Media e Web Design." />
            <Navigation />

            {/* --- HEADER --- */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

                        {/* LADO ESQUERDO (Slide da Esquerda) */}
                        <div className="animate-in slide-in-from-left duration-700">
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" />
                                    Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">
                                    Portfólio
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter text-left">
                                Meus <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>
                                    Projetos
                                </span>.
                            </h1>
                        </div>

                        {/* LADO DIREITO (Slide da Direita) */}
                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary text-left animate-in slide-in-from-right duration-700">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">
                                Resultados reais para marcas que não aceitam o básico. Confira os cases.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-dots-pattern w-full relative z-0">

                {/* DESKTOP LAYOUT */}
                <section className="hidden lg:flex container mx-auto px-4 py-10 gap-12 h-[85vh] items-stretch">

                    {/* LISTA LATERAL */}
                    <div className="w-5/12 flex flex-col bg-[#fffbff] border-2 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] overflow-hidden">

                        <div className="bg-[#fffbff] p-5 border-b-2 border-black z-20">
                            <div className="flex justify-between text-xs font-bold uppercase text-gray-400">
                                <span>Selecionar Projeto</span>
                                <span className="text-primary animate-pulse">●</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-2 space-y-1
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full"
                        >
                            {allProjects.map((project) => (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onClick={() => setHoveredProject(project)}
                                    className={`group block border-l-4 transition-all duration-200 py-5 px-4 cursor-pointer relative rounded-r-lg
                                        ${hoveredProject.id === project.id
                                        ? "border-primary bg-primary/10 pl-6"
                                        : "border-transparent bg-transparent pl-4 hover:bg-gray-50 hover:border-gray-300"
                                    }
                                    `}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">
                                                {project.category}
                                            </span>
                                            <h3 className={`text-3xl font-black uppercase leading-none transition-colors duration-200 ${
                                                hoveredProject.id === project.id
                                                    ? "text-black"
                                                    : "text-gray-400 group-hover:text-black"
                                            }`}>
                                                {project.client}
                                            </h3>
                                        </div>

                                        <div className={`transition-all duration-300 ${
                                            hoveredProject.id === project.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                        }`}>
                                            <div className="bg-black text-white p-2 rounded-full shadow-lg">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        hoveredProject.id === project.id ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0"
                                    }`}>
                                        <p className="text-gray-600 font-medium text-sm max-w-sm leading-tight border-t border-gray-200 pt-2">
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div className="h-4"></div>
                        </div>
                    </div>

                    {/* PREVIEW DA IMAGEM + BOTÃO */}
                    <div className="w-7/12 h-full relative">
                        <div className="w-full h-full rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_#000000] border-4 border-primary bg-gray-900 group relative">

                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>

                            {/* SKELETON NA PREVIEW */}
                            <ImageWithSkeleton
                                key={hoveredProject.id}
                                src={hoveredProject.image}
                                alt={hoveredProject.title}
                                className="group-hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute top-6 right-6 z-20">
                                <span className="bg-white/90 backdrop-blur-md border-2 border-black px-4 py-2 rounded-lg font-black text-lg uppercase tracking-wider shadow-soft">
                                    {hoveredProject.year}
                                </span>
                            </div>

                            <div className="absolute bottom-8 left-8 z-20">
                                <Link
                                    to={`/portfolio/${hoveredProject.slug}`}
                                    className="flex items-center gap-3 bg-white text-black border-2 border-black px-8 py-4 rounded-full font-black text-sm uppercase hover:bg-primary hover:scale-105 transition-all shadow-[4px_4px_0px_0px_#000000]"
                                >
                                    <Eye size={20} />
                                    Ver Detalhes do Projeto
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MOBILE LAYOUT */}
                <section className="lg:hidden container mx-auto px-4 py-12 space-y-12">
                    {allProjects.map((project) => (
                        <Link to={`/portfolio/${project.slug}`} key={project.id} className="block group bg-[#fffbff] border-2 border-black p-4 rounded-3xl shadow-[8px_8px_0px_0px_#000000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">

                            <div className="relative aspect-[4/3] overflow-hidden border-2 border-black rounded-2xl mb-6">
                                {/* SKELETON NO MOBILE */}
                                <ImageWithSkeleton
                                    src={project.image}
                                    alt={project.title}
                                    className="group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute top-3 right-3 bg-white text-black p-2 rounded-full border-2 border-black shadow-sm z-20">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4 mb-3">
                                    <div>
                                        <span className="text-primary font-black uppercase text-xs tracking-widest block mb-1">
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl font-black uppercase text-black leading-none">
                                            {project.client}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm font-medium leading-tight">
                                    {project.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </section>

                <Footer />
            </div>
        </main>
    );
};

export default PortfolioPage;