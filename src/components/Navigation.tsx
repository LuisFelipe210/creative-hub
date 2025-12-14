import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// --- IMPORTANDO DADOS CENTRALIZADOS ---
import { allServices } from "@/data/services";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    // --- CRIAÇÃO AUTOMÁTICA DOS LINKS DE SERVIÇO ---
    // Pega o título e o slug do arquivo central e monta o array de links
    const serviceLinks = allServices.map((service) => ({
        name: service.title,
        path: `/servicos/${service.slug}`
    }));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trava o scroll do corpo quando menu abre
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Função pra subir pro topo ao clicar na Logo/Home
    const scrollToTop = () => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    };

    const btnClass = (isActive: boolean) => `
        px-5 py-2 font-bold text-sm uppercase transition-all border-2 rounded-lg flex items-center gap-1
        ${isActive
        ? "bg-primary text-black border-primary shadow-none translate-y-[2px]"
        : "bg-white text-black border-black shadow-soft hover:shadow-soft-hover hover:-translate-y-1"
    }
    `;

    const mobileLinkClass = (path: string) => {
        const isActive = path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(path);

        return `text-4xl font-black uppercase tracking-tighter transition-colors ${
            isActive ? "text-primary" : "text-black hover:text-primary"
        }`;
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-4 transition-all duration-300 ${
                isOpen || isScrolled
                    ? "bg-[#fffbff]/90 backdrop-blur-md py-4 shadow-sm"
                    : "bg-transparent py-6 border-b-2 border-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center">

                {/* LOGO */}
                <Link
                    to="/"
                    className="relative z-50 transition-transform hover:scale-105"
                    onClick={scrollToTop}
                >
                    <img
                        src="/logo2.svg"
                        alt="Logo Brand Criativo – voltar para a home"
                        className="h-12 w-auto object-contain md:hidden"
                    />
                    <img
                        src="/logo2.svg"
                        alt="Logo Brand Criativo – voltar para a home"
                        className="h-16 w-auto object-contain hidden md:block"
                    />
                </Link>

                {/* MENU DESKTOP */}
                <div className="hidden md:flex gap-4 items-center">
                    <Link
                        to="/"
                        className={btnClass(location.pathname === '/')}
                        onClick={scrollToTop}
                    >
                        Home
                    </Link>

                    <Link to="/sobre" className={btnClass(location.pathname === '/sobre')}>Sobre</Link>

                    <div className="relative group">
                        <Link
                            to="/servicos"
                            className={btnClass(location.pathname.includes('/servicos'))}
                        >
                            Serviços
                        </Link>

                        {/* DROPDOWN AUTOMÁTICO */}
                        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-56">
                            <div className="bg-white border-2 border-accent shadow-soft rounded-xl overflow-hidden p-2 flex flex-col gap-1">
                                {serviceLinks.map((subLink) => (
                                    <Link
                                        key={subLink.path}
                                        to={subLink.path}
                                        className="block px-4 py-3 text-sm font-bold uppercase hover:bg-primary hover:text-black rounded-lg transition-colors text-gray-600"
                                    >
                                        {subLink.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/portfolio"
                        className={btnClass(location.pathname.includes('/portfolio'))}
                    >
                        Portfólio
                    </Link>

                    <Link to="/contato" className={btnClass(location.pathname === '/contato')}>Contato</Link>
                </div>

                {/* BOTÃO MOBILE */}
                <button
                    className="relative z-50 md:hidden bg-white border-2 border-accent p-2 shadow-soft rounded-lg text-black active:translate-y-1 active:shadow-none transition-all hover:text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MENU MOBILE OVERLAY */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#fffbff] z-40 flex flex-col items-center justify-center overflow-y-auto py-20 h-screen w-screen">

                    <div className="flex flex-col gap-6 text-center w-full px-8 max-w-md">

                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className={mobileLinkClass('/')}
                        >
                            Home
                        </Link>

                        <Link
                            to="/sobre"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass('/sobre')}
                        >
                            Sobre
                        </Link>

                        <div className="flex flex-col items-center w-full">
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/servicos"
                                    onClick={() => setIsOpen(false)}
                                    className={mobileLinkClass('/servicos')}
                                >
                                    Serviços
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsServicesOpen(!isServicesOpen);
                                    }}
                                    className={`p-2 border-2 rounded-full transition-colors ${
                                        location.pathname.includes('/servicos')
                                            ? "border-primary text-primary bg-primary/10"
                                            : "border-black hover:bg-primary hover:border-primary"
                                    }`}
                                >
                                    <ChevronDown className={`transition-transform w-6 h-6 ${isServicesOpen ? "rotate-180" : ""}`} />
                                </button>
                            </div>

                            {/* DROPDOWN MOBILE AUTOMÁTICO */}
                            {isServicesOpen && (
                                <div className="flex flex-col gap-3 mt-4 bg-white/50 w-full rounded-xl p-4 border-2 border-accent/20">
                                    {serviceLinks.map((subLink) => (
                                        <Link
                                            key={subLink.path}
                                            to={subLink.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-bold uppercase tracking-wide py-2 border-b last:border-0 border-gray-200 ${
                                                location.pathname === subLink.path
                                                    ? "text-primary"
                                                    : "text-gray-600 hover:text-primary"
                                            }`}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/portfolio"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass('/portfolio')}
                        >
                            Portfólio
                        </Link>

                        <Link
                            to="/contato"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass('/contato')}
                        >
                            Contato
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;