import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ChevronRight, Home, HelpCircle, Quote, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaArrowRight, FaPaperPlane } from "react-icons/fa";

// --- ENVELOPE (Mantido, tá bonito) ---
const EnvelopeCard = ({ name, role, text }: { name: string, role: string, text: string }) => {
    return (
        <div className="relative bg-black w-full max-w-[320px] group transition-all duration-700 aspect-video flex items-end justify-center mx-auto shadow-[4px_4px_0px_0px_#EEACC5] overflow-visible mb-20 mt-12 cursor-pointer">
            <div className="transition-all flex flex-col items-center p-4 justify-center duration-700 ease-out bg-white w-[90%] h-[95%] absolute bottom-0 border border-gray-200 shadow-sm z-10 translate-y-0 group-hover:-translate-y-24">
                <Quote size={16} className="text-primary mb-2 opacity-50" fill="currentColor" />
                <p className="text-[10px] font-medium text-gray-700 text-center leading-relaxed line-clamp-4 px-2">"{text}"</p>
                <div className="mt-2 pt-2 border-t border-gray-100 w-full text-center">
                    <p className="font-serif text-xs font-black uppercase text-black">{name}</p>
                    <p className="font-sans text-[8px] text-primary font-bold uppercase tracking-widest">{role}</p>
                </div>
            </div>
            <div className="absolute top-[38%] z-50 bg-[#EEACC5] text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-[8px] border-2 border-black transition-all duration-500 group-hover:opacity-0 group-hover:scale-150 group-hover:rotate-180 shadow-md">ABRA</div>
            <div className="transition-all duration-500 ease-in-out bg-neutral-800 absolute top-0 w-full h-full z-40 [clip-path:polygon(0_0,100%_0,50%_55%)] group-hover:[clip-path:polygon(0_0,100%_0,50%_0%)] origin-top"></div>
            <div className="absolute w-full h-full bg-neutral-900 z-30 [clip-path:polygon(0_0,0%_100%,50%_50%)] pointer-events-none"></div>
            <div className="absolute w-full h-full bg-neutral-800 z-30 [clip-path:polygon(100%_0,100%_100%,50%_50%)] pointer-events-none"></div>
            <div className="absolute w-full h-full bg-neutral-900 z-30 [clip-path:polygon(0_100%,100%_100%,50%_50%)] pointer-events-none"></div>
        </div>
    );
};

// --- NOVO COMPONENTE DE FORMULÁRIO ---
const BriefingForm = () => {

    const services = ["Branding", "Social Media", "Web Design", "Consultoria"];

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_#EEACC5] relative overflow-hidden h-full">
            <h3 className="text-2xl font-black uppercase text-black mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Seu Projeto
            </h3>

            <form className="space-y-6">

                {/* LINHA 1: NOME / EMAIL */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Seu Nome</label>
                        <input
                            type="text"
                            className="w-full bg-white border-b-2 border-black rounded-none px-0 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all"
                            placeholder="Nome ou Empresa"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Seu Email</label>
                        <input
                            type="email"
                            className="w-full bg-white border-b-2 border-black rounded-none px-0 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all"
                            placeholder="contato@email.com"
                        />
                    </div>
                </div>

                {/* LINHA 2: SERVIÇO DE INTERESSE */}
                <div className="space-y-3 pt-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Serviço de Interesse</label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        {services.map((opt) => (
                            <label key={opt} className="cursor-pointer">
                                <input type="radio" name="service" className="peer sr-only" />
                                <div className="text-center py-2.5 rounded-lg border-2 border-black text-black text-xs font-bold uppercase
                                    peer-checked:bg-black peer-checked:text-primary transition-all select-none
                                    hover:bg-gray-100 hover:shadow-[1px_1px_0px_0px_#EEACC5]"
                                >
                                    {opt}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* LINHA 3: MENSAGEM */}
                <div className="space-y-1 pt-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Detalhes do Projeto</label>
                    <textarea
                        className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all min-h-[120px] resize-none shadow-[2px_2px_0px_0px_#EEACC5]"
                        placeholder="Descreva brevemente sua ideia e o que você espera..."
                    ></textarea>
                </div>

                {/* BOTÃO SUBMIT */}
                <button
                    type="submit"
                    className="w-full bg-primary text-black py-4 rounded-xl font-black text-lg uppercase tracking-widest hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 mt-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                    <FaPaperPlane size={16} />
                    Enviar Proposta
                </button>
            </form>
        </div>
    );
};

const ContactPage = () => {
    return (
        <main className="min-h-screen flex flex-col selection:bg-primary selection:text-black bg-dots-pattern">
            <SEO title="Contato" description="Vamos conversar? Solicite um orçamento para Branding, Social Media ou Web Design." />

            <Navigation />

            {/* --- HEADER SÓLIDA --- */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div className="animate-in slide-in-from-left duration-700">
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" /> Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">Contato</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter text-left">
                                Vamos <br /> <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>Conversar</span>?
                            </h1>
                        </div>
                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary text-left animate-in slide-in-from-right duration-700">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">Sua marca tá pedindo socorro ou tá pronta pra crescer?</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-dots-pattern w-full relative z-0">
                <div className="container mx-auto px-4 pt-16 pb-16">

                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-stretch mb-16">

                        <div className="lg:w-5/12 flex flex-col gap-4 w-full animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both">
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between">

                                <div>
                                    <h2 className="text-3xl font-black uppercase text-gray-900 mb-2 leading-none">Canais <br/> <span className="text-primary">Diretos</span></h2>
                                    <EnvelopeCard name="Iasmim Trajano" role="Creative Director" text="Estou ansiosa para saber mais sobre o seu projeto. Vamos criar algo incrível juntos!" />
                                </div>
                                <div className="space-y-3">
                                    <a href="https://wa.me/5574991394805" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 border-2 border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-black transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors"><FaWhatsapp size={20} /></div>
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
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors"><FaEnvelope size={20} /></div>
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

                        {/* LADO DIREITO: NOVO FORMULÁRIO */}
                        <div className="lg:w-7/12 w-full animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                            <BriefingForm />
                        </div>
                    </div>

                    <div className="border-t-2 border-black pt-12 animate-in slide-in-from-bottom duration-700 delay-500 fill-mode-both">
                        <h3 className="text-3xl font-black uppercase mb-8 text-center">Antes de enviar...</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl hover:bg-primary transition-colors hover:shadow-[4px_4px_0px_0px_#000000]">
                                <HelpCircle size={32} className="mb-4 text-black" />
                                <h4 className="font-black uppercase text-lg mb-2">Orçamentos</h4>
                                <p className="text-sm font-medium text-gray-600">Respondo propostas comerciais em até 24h úteis. Seja detalhista no briefing.</p>
                            </div>
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl hover:bg-primary transition-colors hover:shadow-[4px_4px_0px_0px_#000000]">
                                <HelpCircle size={32} className="mb-4 text-black" />
                                <h4 className="font-black uppercase text-lg mb-2">Parcerias</h4>
                                <p className="text-sm font-medium text-gray-600">Aberta a collabs com outros criativos e agências. Mande sua ideia!</p>
                            </div>
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl hover:bg-primary transition-colors hover:shadow-[4px_4px_0px_0px_#000000]">
                                <HelpCircle size={32} className="mb-4 text-black" />
                                <h4 className="font-black uppercase text-lg mb-2">Consultoria</h4>
                                <p className="text-sm font-medium text-gray-600">Precisa só de um direcionamento? Também faço consultorias de 1h via Meet.</p>
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