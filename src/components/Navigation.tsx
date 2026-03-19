import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { allServices } from "@/data/services";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

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

    const scrollToTop = () => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    };

    // Estilo PADRONIZADO - Contato agora com sombra BRANCA
    const btnClass = (isActive: boolean, isCTA: boolean = false) => `
        px-4 py-2 font-black text-sm uppercase transition-all border-4 rounded-xl flex items-center gap-1 border-black
        ${isActive
        ? "bg-primary text-black shadow-none translate-y-[4px] translate-x-[4px]"
        : isCTA
            ? "bg-black text-white shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]"
            : "bg-white text-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]"
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
            className={`fixed top-0 w-full z-50 px-6 md:px-12 lg:px-16 transition-all duration-300 ${
                isOpen || isScrolled
                    ? "bg-[#fffbff]/90 backdrop-blur-md py-4 shadow-sm"
                    : "bg-transparent py-6 border-b-2 border-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center">

                {/* LOGO NA ESQUERDA */}
                <div className="flex-shrink-0">
                    <Link
                        to="/"
                        className="relative z-50 transition-transform duration-300 active:scale-95"
                        onClick={scrollToTop}
                    >
                        <div className="bg-primary rounded-xl shadow-[4px_4px_0px_0px_#000000] p-2 md:p-2.5 flex items-center justify-center hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 border-black">
                            <img
                                src="/logo.svg"
                                alt="Logo Brand Criativo"
                                className="h-6 w-auto object-contain md:hidden"
                            />
                            <img
                                src="/logo.svg"
                                alt="Logo Brand Criativo"
                                className="h-8 lg:h-10 w-auto object-contain hidden md:block"
                            />
                        </div>
                    </Link>
                </div>

                {/* MENU + CONTATO NA DIREITA */}
                <div className="hidden lg:flex items-center gap-4">

                    <Link to="/" className={btnClass(location.pathname === '/')} onClick={scrollToTop}>
                        Home
                    </Link>

                    <Link to="/sobre" className={btnClass(location.pathname === '/sobre')}>
                        Sobre
                    </Link>

                    <div className="relative group">
                        <Link to="/servicos" className={`${btnClass(location.pathname.includes('/servicos'))} flex items-center gap-1`}>
                            Serviços
                        </Link>

                        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-56">
                            <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] rounded-2xl overflow-hidden p-2 flex flex-col gap-1">
                                {serviceLinks.map((subLink) => (
                                    <Link
                                        key={subLink.path}
                                        to={subLink.path}
                                        className="block px-4 py-3 text-sm font-bold uppercase hover:bg-primary hover:text-black rounded-xl transition-colors text-gray-600"
                                    >
                                        {subLink.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/portfolio" className={btnClass(location.pathname.includes('/portfolio'))}>
                        Portfólio
                    </Link>

                    {/* CONTATO COM SOMBRA BRANCA, DESGRAÇA */}
                    <Link
                        to="/contato"
                        className={btnClass(location.pathname === '/contato', true)}
                    >
                        Contato
                    </Link>
                </div>

                {/* BOTÃO MOBILE */}
                <div className="lg:hidden">
                    <button
                        className="relative z-50 bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_#000000] rounded-xl text-black active:translate-y-1 active:shadow-none transition-all hover:bg-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#fffbff] z-40 flex flex-col items-center justify-center overflow-y-auto py-20 h-screen w-screen">
                    <div className="flex flex-col gap-6 text-center w-full px-8 max-w-md">
                        <Link to="/" onClick={scrollToTop} className={mobileLinkClass('/')}>Home</Link>
                        <Link to="/sobre" onClick={() => setIsOpen(false)} className={mobileLinkClass('/sobre')}>Sobre</Link>
                        <div className="flex flex-col items-center w-full">
                            <div className="flex items-center gap-4">
                                <Link to="/servicos" onClick={() => setIsOpen(false)} className={mobileLinkClass('/servicos')}>Serviços</Link>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsServicesOpen(!isServicesOpen);
                                    }}
                                    className="p-2 border-4 border-black rounded-xl"
                                >
                                    <ChevronDown className={`transition-transform w-6 h-6 ${isServicesOpen ? "rotate-180" : ""}`} />
                                </button>
                            </div>
                        </div>
                        <Link to="/portfolio" onClick={() => setIsOpen(false)} className={mobileLinkClass('/portfolio')}>Portfólio</Link>
                        <Link to="/contato" onClick={() => setIsOpen(false)} className={mobileLinkClass('/contato')}>Contato</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;