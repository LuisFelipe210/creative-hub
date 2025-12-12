import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, Home, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaArrowRight, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black bg-dots-pattern">
            <Navigation />

            {/* --- HEADER SÓLIDA (CORRIGIDA MOBILE) --- */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    {/* FIX: items-start no mobile (esquerda), items-end no desktop (baixo/direita) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" />
                                    Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">
                                    Contato
                                </span>
                            </div>

                            {/* Adicionei text-left pra garantir */}
                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter text-left">
                                Vamos <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>
                                    Conversar
                                </span>?
                            </h1>
                        </div>

                        {/* Adicionei text-left pra garantir */}
                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary text-left">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">
                                Sua marca tá pedindo socorro ou tá pronta pra crescer?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORPO --- */}
            <div className="bg-dots-pattern w-full relative z-0 flex-1 flex flex-col justify-between">

                <div className="container mx-auto px-4 pt-16 pb-16">
                    <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">

                        {/* LADO ESQUERDO: CONTATOS */}
                        <div className="lg:w-5/12 flex flex-col gap-4 w-full">
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_#000000] h-full flex flex-col justify-between">
                                <div>
                                    <h2 className="text-3xl font-black uppercase text-gray-900 mb-4 leading-none">
                                        Canais <br/> <span className="text-primary">Diretos</span>
                                    </h2>
                                    <p className="text-gray-600 font-medium mb-6 text-sm">
                                        Sem burocracia. Escolha onde você quer me encontrar.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <a href="https://wa.me/5574991394805" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 border-2 border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-black transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                                    <FaWhatsapp size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase text-gray-400 group-hover:text-gray-500">WhatsApp</p>
                                                    <p className="text-base font-black text-gray-900 group-hover:text-white">(74) 99139-4805</p>
                                                </div>
                                            </div>
                                            <FaArrowRight className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>

                                    <a href="mailto:Trajanoiasmim9@gmail.com" className="group block bg-gray-50 border-2 border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-black transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                                    <FaEnvelope size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase text-gray-400 group-hover:text-gray-500">Email</p>
                                                    <p className="text-base font-black text-gray-900 group-hover:text-white break-all text-xs md:text-base">Trajanoiasmim9@gmail.com</p>
                                                </div>
                                            </div>
                                            <FaArrowRight className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* LADO DIREITO: FORMULÁRIO */}
                        <div className="lg:w-7/12 w-full">
                            <div className="bg-black p-6 md:p-8 rounded-2xl border-2 border-accent shadow-[8px_8px_0px_0px_#EEACC5] relative overflow-hidden h-full">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black uppercase text-white mb-6 flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                        Briefing Rápido
                                    </h3>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Seu Nome</label>
                                                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary focus:bg-white/20 outline-none transition-all" placeholder="Nome ou Empresa" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Seu Email</label>
                                                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary focus:bg-white/20 outline-none transition-all" placeholder="contato@email.com" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Serviço de Interesse</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {["Social Media", "Branding", "Web Design", "Outro"].map((opt) => (
                                                    <label key={opt} className="cursor-pointer">
                                                        <input type="radio" name="service" className="peer sr-only" />
                                                        <div className="text-center py-2 rounded-md border border-white/20 text-gray-400 text-[10px] md:text-xs font-bold uppercase peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary hover:bg-white/5 transition-all">
                                                            {opt}
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Detalhes do Projeto</label>
                                            <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary focus:bg-white/20 outline-none transition-all min-h-[100px] resize-none" placeholder="Me conta um pouco sobre o que você precisa..."></textarea>
                                        </div>

                                        <button type="button" className="w-full bg-white text-black py-3 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-primary hover:scale-[1.01] transition-all flex items-center justify-center gap-3 mt-2">
                                            Enviar Proposta <FaPaperPlane size={16} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* FAQ */}
                    <div className="border-t-2 border-black pt-12">
                        <h3 className="text-3xl font-black uppercase mb-8 text-center">Antes de enviar...</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl hover:bg-primary transition-colors hover:shadow-[4px_4px_0px_0px_#000000]">
                                <HelpCircle size={32} className="mb-4 text-black" />
                                <h4 className="font-black uppercase text-lg mb-2">Orçamentos</h4>
                                <p className="text-sm font-medium text-gray-600">
                                    Respondo propostas comerciais em até 24h úteis. Seja detalhista no briefing.
                                </p>
                            </div>
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl hover:bg-primary transition-colors hover:shadow-[4px_4px_0px_0px_#000000]">
                                <HelpCircle size={32} className="mb-4 text-black" />
                                <h4 className="font-black uppercase text-lg mb-2">Parcerias</h4>
                                <p className="text-sm font-medium text-gray-600">
                                    Aberta a collabs com outros criativos e agências. Mande sua ideia!
                                </p>
                            </div>
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl hover:bg-primary transition-colors hover:shadow-[4px_4px_0px_0px_#000000]">
                                <HelpCircle size={32} className="mb-4 text-black" />
                                <h4 className="font-black uppercase text-lg mb-2">Consultoria</h4>
                                <p className="text-sm font-medium text-gray-600">
                                    Precisa só de um direcionamento? Também faço consultorias de 1h via Meet.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </main>
    );
};

export default ContactPage;