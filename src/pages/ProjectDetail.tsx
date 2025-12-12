import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Share2, Check, Copy, X, Home, ChevronRight } from "lucide-react";
import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { toast } from "sonner";

// --- DADOS COM SLUGS ---
const allProjects = [
    {
        id: 1,
        slug: "gabrielle-weiss",
        client: "Gabrielle Weiss",
        title: "Advocacia Premium",
        category: "Branding",
        year: "2024",
        image: "/fundo.jpg",
        tags: ["Identidade Visual", "Papelaria", "Social Media"],
        description: "Redesign completo de identidade visual focado em alto padrão e autoridade.",
        challenge: "A Dra. Gabrielle precisava se desvincular da imagem de 'advogada iniciante'. O desafio foi criar uma marca que gritasse experiência, solidez e elegância, sem cair no clichê da balança da justiça.",
        gallery: ["/fundo.jpg", "/dog.jpg", "/galinha.jpg", "/iasmim.png"]
    },
    {
        id: 2,
        slug: "wyate-boutique",
        client: "Wyate Boutique",
        title: "Moda Feminina",
        category: "Social Media",
        year: "2023",
        image: "/dog.jpg",
        tags: ["Direção de Arte", "Estratégia", "Reels"],
        description: "Estratégia de conteúdo e direção de arte para e-commerce de moda.",
        challenge: "A marca tinha fotos lindas, mas não vendia. Implementamos um funil de conteúdo focado em desejo e criamos uma estética 'pinterest' que aumentou o engajamento em 300% no primeiro mês.",
        gallery: ["/dog.jpg", "/fundo.jpg", "/iasmim.png", "/galinha.jpg"]
    },
    {
        id: 3,
        slug: "marfim-atelie",
        client: "Marfim Ateliê",
        title: "E-commerce Artesanal",
        category: "Web Design",
        year: "2024",
        image: "/iasmim.png",
        tags: ["UI/UX", "Shopify", "SEO"],
        description: "Interface limpa e focada em conversão para produtos manuais.",
        challenge: "Produtos artesanais exigem que o cliente 'sinta' a textura pela tela. Desenhamos um site minimalista onde as fotos são gigantes e o checkout é extremamente simples, reduzindo o abandono de carrinho.",
        gallery: ["/iasmim.png", "/galinha.jpg", "/fundo.jpg", "/dog.jpg"]
    },
    {
        id: 4,
        slug: "up-engenharia",
        client: "Up Engenharia",
        title: "Posicionamento Marca",
        category: "Social Media",
        year: "2023",
        image: "/galinha.jpg",
        tags: ["Linkedin", "Tráfego Pago", "Copy"],
        description: "Gestão de tráfego e criação de autoridade no LinkedIn.",
        challenge: "Engenharia é um nicho técnico e muitas vezes frio. Transformamos obras complexas em conteúdos digeríveis e cases de sucesso que atraíram investidores e parceiros grandes para a construtora.",
        gallery: ["/galinha.jpg", "/dog.jpg", "/iasmim.png", "/fundo.jpg"]
    },
];

const ProjectDetail = () => {
    // PEGA O SLUG DA URL
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isShareOpen, setIsShareOpen] = useState(false);

    // PROCURA O PROJETO PELO SLUG
    const project = allProjects.find((p) => p.slug === slug);

    useEffect(() => {
        if (!project) {
            navigate("/portfolio");
        }
    }, [project, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) return null;

    // LÓGICA DO PRÓXIMO PROJETO
    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const nextIndex = (currentIndex + 1) % allProjects.length;
    const nextProject = allProjects[nextIndex];

    const currentUrl = window.location.href;
    const shareText = `Confira o projeto de ${project.category} desenvolvido para ${project.client}. Design estratégico por Iasmim Trajano.`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        toast.success("Link copiado para a área de transferência.", {
            style: {
                background: '#000',
                color: '#fff',
                border: '2px solid #EEACC5'
            }
        });
        setIsShareOpen(false);
    };

    const handleWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + currentUrl)}`;
        window.open(url, '_blank');
        setIsShareOpen(false);
    };

    const handleTwitter = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank');
        setIsShareOpen(false);
    };

    return (
        <main className="min-h-screen selection:bg-black selection:text-primary bg-dots-pattern">
            <Navigation />

            {/* HEADER SÓLIDA */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest flex-wrap">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" />
                                    Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">
                                    Portfólio
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">
                                    {project.client}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags?.map((tag, i) => (
                                    <span key={i} className="bg-primary/20 border border-primary px-2 py-0.5 text-[10px] font-bold uppercase rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter text-left">
                                {project.client} <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '1px black' }}>
                                    {project.title}
                                </span>
                            </h1>
                        </div>

                        <div className="md:max-w-sm w-full pl-4 border-l-4 border-primary text-left">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="block text-[10px] font-bold uppercase text-gray-400 tracking-widest">Ano</span>
                                    <span className="font-black text-lg text-black">{project.year}</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase text-gray-400 tracking-widest">Categoria</span>
                                    <span className="font-black text-lg text-black">{project.category}</span>
                                </div>
                                <div>
                                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-gray-500 hover:text-primary transition-colors mt-2">
                                        <ArrowLeft size={12} /> Voltar para lista
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORPO DO PROJETO - IMPORTANTE: AQUI É UMA DIV, NÃO SECTION */}
            <div className="container mx-auto px-4 py-12">

                {/* CAPA GIGANTE */}
                <div className="w-full h-[40vh] md:h-[55vh] rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_#000000] mb-16 group relative">
                    <img
                        src={project.image}
                        alt={`Capa do projeto ${project.client}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                </div>

                {/* GRID DE CONTEÚDO */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

                    {/* COLUNA ESQUERDA (TEXTO STICKY) */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="bg-[#fffbff] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
                                <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                                    O Desafio
                                </h3>
                                <p className="text-gray-700 font-medium leading-relaxed text-base md:text-lg">
                                    {project.challenge || project.description}
                                </p>
                            </div>

                            <div className="space-y-4 relative">
                                <h4 className="font-black uppercase text-sm text-gray-400">Gostou do resultado?</h4>

                                <div className="relative">
                                    <button
                                        onClick={() => setIsShareOpen(!isShareOpen)}
                                        className={`w-full flex items-center justify-center gap-2 border-2 border-black py-3 rounded-xl font-bold uppercase transition-all ${
                                            isShareOpen ? "bg-black text-white" : "bg-white hover:bg-black hover:text-white"
                                        }`}
                                    >
                                        {isShareOpen ? <X size={18} /> : <Share2 size={18} />}
                                        {isShareOpen ? "Fechar" : "Compartilhar Case"}
                                    </button>

                                    {isShareOpen && (
                                        <div className="absolute top-full left-0 w-full mt-2 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_#EEACC5] overflow-hidden z-20 animate-in slide-in-from-top-2 fade-in duration-200">

                                            <button
                                                onClick={handleWhatsApp}
                                                className="w-full text-left px-4 py-3 border-b-2 border-black/10 hover:bg-[#25D366] hover:text-white font-bold uppercase text-xs flex items-center gap-3 transition-colors"
                                            >
                                                <FaWhatsapp size={16} /> WhatsApp
                                            </button>

                                            <button
                                                onClick={handleTwitter}
                                                className="w-full text-left px-4 py-3 border-b-2 border-black/10 hover:bg-black hover:text-white font-bold uppercase text-xs flex items-center gap-3 transition-colors"
                                            >
                                                <FaTwitter size={16} /> Twitter / X
                                            </button>

                                            <button
                                                onClick={handleCopyLink}
                                                className="w-full text-left px-4 py-3 hover:bg-primary hover:text-black font-bold uppercase text-xs flex items-center gap-3 transition-colors group"
                                            >
                                                <Copy size={16} /> Copiar Link
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DIREITA - GALERIA */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                        {project.gallery?.map((img, index) => (
                            <div key={index} className="group relative rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_#EEACC5] bg-gray-100 h-64 md:h-80">
                                <img
                                    src={img}
                                    alt={`Detalhe ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ))}

                        <div className="md:col-span-2 bg-black text-white p-12 rounded-3xl border-2 border-primary mt-8 text-center">
                            <h3 className="text-3xl font-black uppercase mb-4">Resultado</h3>
                            <p className="text-gray-400 max-w-lg mx-auto">
                                Entregamos não apenas um design bonito, mas uma ferramenta de negócios que posicionou a marca em outro patamar de mercado.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* NAV FOOTER (LINK PARA PRÓXIMO PROJETO) */}
            <Link to={`/portfolio/${nextProject.slug}`} className="block group border-t-2 border-black bg-[#fffbff] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-gray-500 group-hover:text-black transition-colors">
                        Próximo Case
                    </span>
                    <h2 className="text-4xl md:text-8xl font-black uppercase text-black leading-none group-hover:scale-105 transition-transform duration-500 flex items-center justify-center gap-4 md:gap-8">
                        Ver Projeto <ArrowRight className="w-8 h-8 md:w-20 md:h-20 group-hover:translate-x-4 transition-transform" />
                    </h2>
                </div>
            </Link>

            <Footer />
        </main>
    );
};

export default ProjectDetail;