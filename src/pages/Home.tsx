import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Star, ArrowUpRight, Layout, PenTool, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
            <Navigation />

            {/* --- HERO RESPONSIVO --- */}
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 min-h-[90vh] flex items-center bg-[#fffbff] overflow-hidden">

                {/* Elemento decorativo de fundo */}
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/30 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 translate-x-1/2 md:translate-x-1/3 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* COLUNA ESQUERDA: TEXTO E BOTÕES */}
                        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">

                            {/* Tag */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-3 py-1.5 md:px-4 md:py-2 font-bold uppercase tracking-widest text-[14px] md:text-xs shadow-[4px_4px_0px_0px_#EEACC5] rounded-full mb-2 animate-in slide-in-from-left duration-1000">
                                    Social Media & Design
                                </div>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-black leading-[0.9] tracking-tighter">
                                Transforme o <br className="hidden md:block"/>
                                <span className="text-primary" style={{ WebkitTextStroke: '1px black' }}>Comum</span> em <br className="hidden md:block"/>
                                Extraordinário.
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Estratégia visual e design com propósito para marcas que cansaram de ser ignoradas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2">
                                <Link to="/portfolio" className="px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg uppercase rounded-xl bg-primary text-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-black hover:text-white hover:border-2 hover:border-black hover:shadow-[2px_2px_0px_0px_#000000] transition-all flex items-center justify-center gap-2 group">
                                    Ver Trabalhos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contato" className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 font-black text-base md:text-lg shadow-[4px_4px_0px_0px_#000000] uppercase rounded-xl hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_#000000] transition-all flex items-center justify-center">
                                    Entrar em Contato
                                </Link>
                            </div>
                        </div>

                        {/* COLUNA DIREITA: O "SELO" VISUAL (AUMENTADO) */}
                        <div className="lg:col-span-5 flex justify-center relative lg:justify-end mt-10 lg:mt-0">
                            <div className="relative z-10 bg-white border-4 border-black p-8 md:p-12 rounded-3xl shadow-[10px_10px_0px_0px_#EEACC5] md:shadow-[14px_14px_0px_0px_#EEACC5] rotate-3 hover:rotate-0 transition-all duration-500 group w-full max-w-sm lg:max-w-md">
                                <img
                                    src="/logo2.svg"
                                    alt="Iasmim Trajano Logo"
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 rounded-[20px] bg-primary opacity-0 group-hover:opacity-10 transition-opacity mix-blend-multiply pointer-events-none"></div>
                            </div>

                            {/* Elementos decorativos ajustados para o novo tamanho */}
                            <Star className="absolute -top-6 -right-6 md:top-0 md:right-0 lg:-right-8 text-black w-10 h-10 md:w-14 md:h-14 animate-spin-slow opacity-20 hidden sm:block" />
                            <ArrowRight className="absolute -bottom-6 -left-6 md:bottom-0 md:left-0 lg:-left-8 text-black w-14 h-14 md:w-20 md:h-20 opacity-20 hidden sm:block" />
                        </div>

                    </div>
                </div>
            </section>

            {/* --- DIVISOR MARQUEE --- */}
            <div className="bg-accent border-y-2 border-black overflow-hidden py-3 relative z-20 shadow-md">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span className="text-2xl md:text-3xl font-display font-black uppercase text-black">Brand Strategy</span>
                            <Star className="mx-6 w-5 h-5 md:w-6 md:h-6 fill-primary text-black" />
                            <span className="text-2xl md:text-3xl font-display font-black uppercase text-black">Social Media</span>
                            <Star className="mx-6 w-5 h-5 md:w-6 md:h-6 fill-primary text-black" />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CORPO DA PÁGINA (BOLINHAS + GRIDS) --- */}
            <div className="bg-dots-pattern w-full flex-1 relative z-0">

                {/* --- SEÇÃO SERVIÇOS (GRID) --- */}
                <section className="py-16 md:py-20 container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">O que eu faço</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-black">
                            Soluções Criativas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Share2, title: "Social Media", desc: "Gestão completa, estratégia e conteúdo que engaja.", link: "/servicos/social-media" },
                            { icon: PenTool, title: "Identidade Visual", desc: "Logos e branding para marcas inesquecíveis.", link: "/servicos/identidade-visual" },
                            { icon: Layout, title: "Web Design", desc: "Sites rápidos e otimizados para converter.", link: "/servicos/web-design" }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="group bg-[#fffbff] border-2 border-black p-6 md:p-8 rounded-2xl shadow-[4px_4px_0px_0px_#EEACC5] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col items-center text-center"
                            >
                                <div className="bg-primary p-4 rounded-full border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={28} className="text-black md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black uppercase mb-3">{item.title}</h3>
                                <p className="text-gray-600 font-medium text-sm mb-6">{item.desc}</p>
                                <span className="mt-auto text-xs font-bold uppercase border-b-2 border-black pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                                    Saiba mais
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/servicos" className="inline-flex items-center gap-2 font-bold uppercase hover:bg-black hover:text-white px-6 py-3 rounded-xl bg-primary text-black transition-colors text-sm md:text-base">
                            Ver todos os serviços <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* --- SEÇÃO DESTAQUES --- */}
                <section className="py-16 md:py-20 bg-black text-white rounded-t-[2.5rem] md:rounded-t-[3rem] relative overflow-hidden border-t-4 border-primary">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-6">
                            <div className="text-center md:text-left w-full md:w-auto">
                                <h2 className="text-3xl md:text-5xl font-black uppercase mb-2">
                                    Cases <span className="text-primary">Selecionados</span>
                                </h2>
                                <p className="text-gray-400 max-w-lg text-sm md:text-base mx-auto md:mx-0">
                                    Projetos que saíram do papel e viraram resultado.
                                </p>
                            </div>
                            <Link to="/portfolio" className="border border-white/30 text-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-black transition-all hidden md:block">
                                Ver tudo
                            </Link>
                        </div>

                        {/* GRID DE PROJETOS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Link to="/portfolio" className="group block bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-primary transition-colors">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                                    <img src="/placeholder.svg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Projeto 1" />
                                    <div className="absolute top-3 right-3 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <h3 className="text-xl font-black uppercase mb-1">Gabrielle Weiss</h3>
                                    <p className="text-primary text-xs font-bold uppercase">Branding</p>
                                </div>
                            </Link>

                            <Link to="/portfolio" className="group block bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-primary transition-colors">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                                    <img src="/placeholder.svg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Projeto 2" />
                                    <div className="absolute top-3 right-3 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <h3 className="text-xl font-black uppercase mb-1">Wyate Boutique</h3>
                                    <p className="text-primary text-xs font-bold uppercase">Social Media</p>
                                </div>
                            </Link>
                        </div>

                        <div className="text-center mt-10 md:hidden">
                            <Link to="/portfolio" className="border border-white/30 text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-black transition-all inline-block">
                                Ver todos os projetos
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- SOBRE (BENTO SMALL) --- */}
                <section className="py-16 md:py-20 container mx-auto px-4">
                    <div className="bg-[#fffbff] border-2 border-black rounded-3xl p-6 md:p-12 shadow-[8px_8px_0px_0px_#000000] flex flex-col md:flex-row items-center gap-8 md:gap-10">
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square rounded-2xl border-2 border-black overflow-hidden relative shadow-md">
                                <img src="/iasmim.png" alt="Iasmim" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black uppercase text-black leading-tight">
                                Design com <br className="hidden md:block"/> <span className="bg-primary px-2">Propósito</span>.
                            </h2>
                            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                                Prazer, <strong>Iasmim</strong>. Designer e Social Media focada em tirar marcas da mesmice.
                                Se você busca estética aliada a resultado, a gente vai se dar bem.
                            </p>
                            <Link to="/sobre" className="inline-flex items-center gap-2 font-black uppercase border-b-2 border-black hover:text-primary hover:border-primary transition-colors pb-1 text-sm md:text-base">
                                Conhecer minha história <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- CTA FINAL --- */}
                <section className="py-16 md:py-20 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-black uppercase text-black mb-6">
                            Pronto pra começar?
                        </h2>
                        <p className="text-gray-600 font-bold text-base md:text-lg mb-8">
                            Vamos transformar suas ideias em uma marca forte e lucrativa.
                        </p>
                        <Link to="/contato" className="inline-flex items-center gap-3 hover:bg-black hover:text-white px-8 py-4 md:px-10 font-black text-base md:text-lg uppercase rounded-xl bg-primary text-black hover:scale-105 transition-all shadow-xl">
                            Solicitar Orçamento <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
};

export default Home;