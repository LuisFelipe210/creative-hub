import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Share2, Copy, X, Home, ChevronRight } from "lucide-react";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";
import SEO from "@/components/SEO";

// --- COMPONENTE SKELETON ---
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

// --- DADOS ---
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
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isShareOpen, setIsShareOpen] = useState(false);

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

    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const nextIndex = (currentIndex + 1) % allProjects.length;
    const nextProject = allProjects[nextIndex];

    const currentUrl = window.location.href;
    const shareText = `Confira o projeto de ${project.category} desenvolvido para ${project.client}. Design estratégico por Iasmim Trajano.`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        toast.success("Link copiado! Cole no seu Story.", {
            style: { background: '#000', color: '#fff', border: '2px solid #EEACC5' }
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
        <main className="min-h-screen selection:bg-primary selection:text-black bg-dots-pattern">
            <SEO
                title={`${project.client} - ${project.title}`}
                description={project.description}
            />
            <Navigation />

            {/* HEADER SÓLIDA */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div className="animate-in slide-in-from-left duration-700">
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

                        <div className="md:max-w-sm w-full pl-4 border-l-4 border-primary text-left animate-in slide-in-from-right duration-700">
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

            {/* CORPO DO PROJETO */}
            <div className="container mx-auto px-4 py-12">

                {/* CAPA GIGANTE COM SKELETON */}
                <div className="w-full h-[40vh] md:h-[55vh] rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_#000000] mb-16 group relative animate-in fade-in zoom-in-95 duration-1000">
                    <ImageWithSkeleton
                        src={project.image}
                        alt={`Capa do projeto ${project.client}`}
                        className="group-hover:scale-105 transition-transform duration-1000"
                    />
                </div>

                {/* GRID DE CONTEÚDO */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-24 mb-24">

                    {/* COLUNA ESQUERDA (TEXTO STICKY NOVO DESIGN) */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-8 animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both">

                            {/* CARD DE DESAFIO - DESIGN NOVO (ROSA E PRETO) */}
                            <div className="bg-primary selection:bg-neutral-900 selection:text-primary p-8 rounded-2xl border-4 border-black
                                           shadow-[12px_12px_0px_0px_#000000] relative overflow-hidden">

                                <span className="absolute top-0 left-0 bg-black text-primary px-3 py-1 font-black text-[10px] uppercase tracking-widest rounded-br-lg">
                                    O ponto chave
                                </span>

                                <h3 className="text-3xl font-black uppercase text-black mt-6 mb-4 leading-snug">
                                    O DESAFIO
                                </h3>

                                <div className="h-0.5 w-full bg-black mb-4"></div>

                                <p className="text-gray-900 font-bold leading-relaxed text-base md:text-lg">
                                    {project.challenge || project.description}
                                </p>
                            </div>

                            <div className="space-y-4 relative">
                                <h4 className="font-black uppercase text-sm text-gray-400">Gostou do resultado?</h4>

                                <div className="relative">
                                    <button
                                        onClick={() => setIsShareOpen(!isShareOpen)}
                                        className={`w-full flex items-center justify-center gap-2 border-2 border-black py-3 rounded-xl font-bold uppercase transition-all ${isShareOpen ? "bg-black text-white" : "bg-white hover:bg-black hover:text-white"
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

                    {/* COLUNA DIREITA - CONTAINER FLEX PARA GALERIA + RESULTADO */}
                    <div className="lg:col-span-8 flex flex-col gap-0 animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">

                        {/* GRID DE FOTOS (ISOLADO PARA GARANTIR O GLUING) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                            {project.gallery?.map((img, index) => (
                                <div
                                    key={index}
                                    // TAMANHOS: h-52 (mobile) e md:h-80 (desktop original)
                                    className={`group relative overflow-hidden border-2 border-black bg-gray-100 
                                        md:shadow-[4px_4px_0px_0px_#EEACC5] transition-all duration-300 transform-gpu
                                        h-52 md:h-80 // Altura compacta no mobile
                                        ${index === 0 ? 'rounded-t-lg md:rounded-2xl' : index === project.gallery!.length - 1 ? 'rounded-none' : 'rounded-none'} // Borda só no topo do bloco de fotos (mobile)
                                        ${index !== 0 ? 'mt-[-2px] md:mt-0' : ''} // COLA AS FOTOS NO MOBILE FUNDINDO A BORDA
                                        ${index % 2 === 0 ? 'md:rounded-l-2xl' : 'md:rounded-r-2xl'} // Mantém o arredondamento de desktop
                                    `}
                                >
                                    <ImageWithSkeleton
                                        src={img}
                                        alt={`Detalhe ${index + 1}`}
                                        className="group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* LINHA DE SEPARAÇÃO INTERNA: Adiciona uma borda na parte inferior (mobile) */}
                                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-black md:hidden"></div>
                                    {/* MOLDURA INTERNA ROSA */}
                                    <div className="absolute inset-2 border border-primary/50 pointer-events-none rounded-md hidden md:block"></div>
                                </div>
                            ))}
                        </div>

                        {/* CARD DE RESULTADO - ELEMENTO INDEPENDENTE, IRMÃO DO GRID */}
                        <div className="w-full overflow-x-clip">
                            {/* AJUSTES AQUI: MT-[-2px] no mobile para colar na ultima foto, MT-8 no desktop */}
                            <div className={`relative p-10 pt-16 md:p-14 bg-black text-white border-4 border-primary
                                            mt-[-2px] md:mt-8
                                            shadow-[8px_8px_0px_0px_#EEACC5] transition-all duration-300 transform-gpu 
                                            rounded-b-2xl rounded-t-none md:rounded-2xl`}>

                                {/* SELO DE DESTAQUE */}
                                <div className="absolute top-[-15px] right-8 bg-primary text-black px-4 py-1 font-black text-xs uppercase rotate-2 border-2 border-black shadow-[2px_2px_0px_0px_#000000] z-10">
                                    CASE DE SUCESSO
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black text-center uppercase mb-4 leading-none">
                                    O <span className="text-primary" style={{ WebkitTextStroke: '1px #EEACC5' }}>Resultado</span>
                                </h3>
                                <p className="text-gray-300 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                                    Entregamos não apenas um design bonito, mas uma ferramenta de negócios que posicionou a marca em outro patamar de mercado, gerando autoridade e lucro.
                                </p>
                            </div>
                        </div>
                        {/* FIM CARD DE RESULTADO */}

                    </div>
                </div>

            </div>

            {/* NAV FOOTER  */}
            <Link to={`/portfolio/${nextProject.slug}`} className="block group border-t-2 border-black bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 md:bg-black translate-y-full md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black md:text-gray-500 group-hover:text-primary transition-colors">
                        Próximo Case
                    </span>
                    <h2 className="text-4xl md:text-8xl font-black uppercase text-black leading-none group-hover:scale-105 transition-transform duration-500 flex items-center justify-center gap-4 md:gap-8 group-hover:text-white">
                        Ver Projeto <ArrowRight className="w-8 h-8 md:w-20 md:h-20 group-hover:translate-x-4 transition-transform" />
                    </h2>
                </div>
            </Link>

            <Footer />
        </main>
    );
};

export default ProjectDetail;