import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t-2 border-accent mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* COLUNA 1: LOGO E SOBRE */}
                    <div className="md:col-span-2 space-y-6">
                        {/* LOGO PRINCIPAL */}
                        <img
                            src="/logo.svg"
                            alt="Iasmim Trajano"
                            className="w-32 h-auto object-contain brightness-0 invert"
                        />

                        <p className="text-gray-400 font-medium max-w-sm leading-relaxed">
                            Transformando ideias em marcas fortes e visuais que vendem.
                            Design estratégico com alma e resultado.
                        </p>

                        {/* ÍCONES SOCIAIS (AGORA COM WHATSAPP) */}
                        <div className="flex gap-4">
                            <a
                                href="https://wa.me/5574991394805"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all"
                                title="WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all"
                                title="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all"
                                title="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="mailto:Trajanoiasmim9@gmail.com"
                                className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all"
                                title="Email"
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>

                    {/* COLUNA 2: LINKS RÁPIDOS */}
                    <div>
                        <h4 className="text-md font-black uppercase text-primary mb-6">Menu</h4>
                        <ul className="space-y-4 font-bold text-sm uppercase tracking-wider text-gray-300">
                            <li><Link to="/" className="hover:text-white hover:translate-x-2 transition-transform block">Home</Link></li>
                            <li><Link to="/sobre" className="hover:text-white hover:translate-x-2 transition-transform block">Sobre</Link></li>
                            <li><Link to="/servicos" className="hover:text-white hover:translate-x-2 transition-transform block">Serviços</Link></li>
                            <li><Link to="/portfolio" className="hover:text-white hover:translate-x-2 transition-transform block">Portfólio</Link></li>
                            <li><Link to="/contato" className="hover:text-white hover:translate-x-2 transition-transform block">Contato</Link></li>
                        </ul>
                    </div>

                    {/* COLUNA 3: CONTATO */}
                    <div>
                        <h4 className="text-md font-black uppercase text-primary mb-6">Fale Comigo</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3 items-start">
                                <FaWhatsapp className="text-primary shrink-0 mt-1" size={18} />
                                <div>
                                    <span className="block font-bold text-xs uppercase text-gray-500">WhatsApp</span>
                                    <a href="https://wa.me/5574991394805" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white transition-colors">
                                        (74) 99139-4805
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <FaEnvelope className="text-primary shrink-0 mt-1" size={18} />
                                <div>
                                    <span className="block font-bold text-xs uppercase text-gray-500">Email</span>
                                    <a href="mailto:Trajanoiasmim9@gmail.com" className="font-bold break-all hover:text-white transition-colors">
                                        Trajanoiasmim9@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <FaMapMarkerAlt className="text-primary shrink-0 mt-1" size={18} />
                                <div>
                                    <span className="block font-bold text-xs uppercase text-gray-500">Local</span>
                                    <span className="font-bold">Juazeiro - BA</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BARRA INFERIOR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase text-gray-500 tracking-widest">
                    <p>&copy; 2025 Iasmim Trajano. Todos os direitos reservados.</p>
                    <p>Feito com <span className="text-primary">♥</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;