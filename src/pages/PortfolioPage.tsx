import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowRight, Eye, ChevronRight, Home, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const allProjects = [
    {
        id: 1,
        client: "Gabrielle Weiss",
        title: "Advocacia Premium",
        category: "Branding",
        year: "2024",
        image: "/fundo.jpg",
        desc: "Redesign completo de identidade visual focado em alto padrão."
    },
    // ... outros projetos
    {
        id: 2,
        client: "Wyate Boutique",
        title: "Moda Feminina",
        category: "Social Media",
        year: "2023",
        image: "/dog.jpg",
        desc: "Estratégia de conteúdo e direção de arte para e-commerce."
    },
    {
        id: 3,
        client: "Marfim Ateliê",
        title: "E-commerce Artesanal",
        category: "Web Design",
        year: "2024",
        image: "/iasmim.png",
        desc: "Interface limpa e focada em conversão para produtos manuais."
    },
    {
        id: 4,
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
        <main className="min-h-screen selection:bg-black selection:text-primary">
            <Navigation />

            {/* --- HEADER SÓLIDA --- */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
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

                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter">
                                Meus <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>
                                    Projetos
                                </span>.
                            </h1>
                        </div>

                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">
                                Resultados reais para marcas que não aceitam o básico. Confira os cases.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-dots-pattern w-full relative z-0">

                <section className="hidden lg:flex container mx-auto px-4 py-10 gap-24 h-[85vh] items-stretch">

                    <div
                        className="w-5/12 flex flex-col overflow-y-auto pr-2 overscroll-contain bg-[#fffbff]/90 backdrop-blur-sm border-2 border-black rounded-2xl p-4 shadow-[8px_8px_0px_0px_#000000]
                        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        <div className="sticky top-0 bg-[#fffbff]/0 z-10 pb-4 pt-2">
                            <div className="flex justify-between text-xs font-bold uppercase text-gray-400 border-b-2 border-black pb-4">
                                <span>Selecionar Projeto</span>
                            </div>
                        </div>

                        <div className="space-y-2 pb-20">
                            {allProjects.map((project) => (
                                <Link
                                    to="#"
                                    key={project.id}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    className={`group block border-l-4 transition-all duration-300 py-6 cursor-pointer relative
                                        ${hoveredProject.id === project.id
                                        ? "border-primary pl-6 bg-gray-50"
                                        : "border-transparent pl-0 hover:pl-4 hover:border-gray-300"
                                    }
                                    `}
                                >
                                    <div className="flex justify-between items-center pr-4">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                                                {project.category}
                                            </span>
                                            <h3 className={`text-4xl font-black uppercase leading-none transition-colors duration-300 ${
                                                hoveredProject.id === project.id ? "text-black" : "text-gray-300 group-hover:text-gray-500"
                                            }`}>
                                                {project.client}
                                            </h3>
                                        </div>

                                        <div className={`transition-all duration-300 ${
                                            hoveredProject.id === project.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                        }`}>
                                            <div className="bg-black text-white p-3 rounded-full shadow-lg">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-500 ${
                                        hoveredProject.id === project.id ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                                    }`}>
                                        <p className="text-gray-500 font-medium text-sm max-w-sm">
                                            {project.desc}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* IMAGEM FIXA */}
                    <div className="w-7/12 h-full relative">
                        <div className="w-full h-full rounded-3xl overflow-hidden shadow-[20px_20px_0px_0px_#000000] border-4 border-primary bg-gray-900 group relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>

                            <img
                                key={hoveredProject.id}
                                src={hoveredProject.image}
                                alt={hoveredProject.title}
                                className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
                            />

                            <div className="absolute top-8 right-8 z-20">
                                <span className="bg-white/90 backdrop-blur-md border-2 border-black px-6 py-3 rounded-full font-black text-xl uppercase tracking-wider shadow-soft">
                                    {hoveredProject.year}
                                </span>
                            </div>

                            <div className="absolute bottom-8 left-8 z-20">
                                <button className="btn-primary-soft flex items-center gap-2 text-sm px-6 py-3">
                                    <Eye size={18} /> Ver Detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MOBILE LAYOUT */}
                <section className="lg:hidden container mx-auto px-4 py-12 space-y-16">
                    {allProjects.map((project) => (
                        <Link to="#" key={project.id} className="block group bg-[#fffbff] border-2 border-black p-4 rounded-3xl shadow-[8px_8px_0px_0px_#000000]">
                            <div className="relative aspect-[4/5] overflow-hidden border-2 border-black rounded-2xl mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-end border-b-2 border-gray-100 pb-4 mb-4">
                                    <div>
                                        <span className="text-primary font-black uppercase text-xs tracking-widest block mb-1">
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl font-black uppercase text-black leading-none">
                                            {project.client}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className="text-gray-300 group-hover:text-black transition-colors" size={28} />
                                </div>
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