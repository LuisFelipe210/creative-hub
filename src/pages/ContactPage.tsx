import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ChevronRight, Home, Quote, Mail, ArrowRight, Users, Target, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaArrowRight as FaArrowRightIcon } from "react-icons/fa";
import { toast } from "sonner";

// --- DADOS DO FORMULÁRIO ---
const servicesData = ["Branding", "Social Media", "Web Design", "Consultoria"];

// --- COMPONENTE DE FORMULÁRIO COMPACTO BRUTALISTA ---
const BriefingForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        service: "",
        message: ""
    });

    // Atualiza o estado quando o usuário digita
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica
        if (!formData.service) {
            toast.error("Atenção", {
                description: "Por favor, selecione um tipo de serviço para continuarmos."
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erro ao enviar');
            }

            // Sucesso
            toast.success("Mensagem Recebida!", {
                description: "Obrigada pelo contato. Analisarei seu projeto e retornarei em breve.",
                style: { background: '#000', color: '#fff', border: '2px solid #EEACC5' }
            });

            // Limpa o form
            setFormData({ name: "", email: "", whatsapp: "", service: "", message: "" });

        } catch (error) {
            console.error("Erro no envio:", error);

            toast.error("Não foi possível enviar", {
                description: "Houve um erro técnico. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.",
                style: { background: '#000', color: '#fff', border: '2px solid #DC2626' }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // Container principal do formulário
        <div className="bg-white p-6 md:p-8 rounded-2xl border-4 border-black shadow-[10px_10px_0px_0px_#EEACC5] relative overflow-hidden h-full">

            {/* CABEÇALHO */}
            <h3 className="text-2xl font-black uppercase text-black mb-5 flex items-center gap-3 border-b-2 border-primary pb-2">
                <Mail size={24} className="text-black" />
                Seu Projeto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                {/* LINHA 1: NOME / EMAIL / WHATSAPP (Agora em 3 colunas) */}
                <div className="grid md:grid-cols-3 gap-4">

                    {/* CAMPO NOME */}
                    <div className="space-y-0.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-black/80">Seu Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border-b-2 border-black rounded-none px-0 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all"
                            placeholder="Nome ou Empresa"
                        />
                    </div>

                    {/* CAMPO EMAIL */}
                    <div className="space-y-0.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-black/80">Seu Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border-b-2 border-black rounded-none px-0 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all"
                            placeholder="contato@email.com"
                        />
                    </div>

                    {/* CAMPO WHATSAPP (Movido para cá) */}
                    <div className="space-y-0.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-black/80">WhatsApp</label>
                        <input
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border-b-2 border-black rounded-none px-0 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all"
                            placeholder="(00) 00000-0000"
                        />
                    </div>
                </div>

                {/* LINHA 2: SERVIÇO DE INTERESSE */}
                <div className="space-y-2 pt-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/80 block">Serviço de Interesse</label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        {servicesData.map((opt) => (
                            <label key={opt} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="service"
                                    value={opt}
                                    checked={formData.service === opt}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className="text-center py-2 rounded-lg border-2 border-black text-black text-xs font-black uppercase
                                    peer-checked:bg-black peer-checked:text-primary transition-all select-none
                                    hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_#000000]"
                                >
                                    {opt}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* LINHA 3: MENSAGEM */}
                <div className="space-y-0.5 pt-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/80">Detalhes do Projeto</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none appearance-none focus:ring-0 transition-all min-h-[100px] resize-none shadow-[4px_4px_0px_0px_#EEACC5]"
                        placeholder="Descreva brevemente sua ideia e o que você espera..."
                    ></textarea>
                </div>

                {/* AVISO E CONSENTIMENTO LGPD */}
                <div className="pt-2 border-t-2 border-gray-100">
                    <div className="flex items-start mt-3">
                        <input
                            type="checkbox"
                            id="consent"
                            required
                            className="mt-0.5 mr-2 appearance-none h-4 w-4 border-2 border-black bg-white
                                checked:bg-primary checked:border-black transition-colors shrink-0 focus:ring-0
                                relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                                after:content-[''] checked:after:content-[''] after:w-2 after:h-2 after:bg-black after:rounded-full
                                checked:after:bg-black checked:after:w-2 checked:after:h-2"
                        />
                        <label htmlFor="consent" className="text-[11px] text-gray-700 font-medium leading-relaxed">
                            Eu li e concordo com o uso dos meus dados apenas para responder à minha solicitação.
                            <span className="font-bold text-black">(LGPD Aplicada)</span>
                        </label>
                    </div>
                </div>

                {/* BOTÃO SUBMIT */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black py-3.5 rounded-xl font-black text-lg uppercase tracking-widest
                               transition-all flex items-center justify-center gap-3 mt-4 border-2 border-black
                               shadow-[6px_6px_0px_0px_#000000]
                               hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transform-gpu
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[6px_6px_0px_0px_#000000] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                    {isSubmitting ? (
                        <>Enviando... <Loader2 className="animate-spin" size={20}/></>
                    ) : (
                        <>Enviar Proposta <ArrowRight size={20} /></>
                    )}
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

                        {/* INFO LATERAL (MANTIDO) */}
                        <div className="lg:w-5/12 flex flex-col gap-4 w-full animate-in slide-in-from-bottom duration-700 delay-200 fill-mode-both">
                            <div className="bg-[#fffbff] border-2 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between">

                                <div>
                                    <h2 className="text-3xl font-black uppercase text-gray-900 mb-2 leading-none">Canais <br/> <span className="text-primary">Diretos</span></h2>
                                    {/* ENVELOPE CARD */}
                                    <div className="relative bg-black w-full max-w-[320px] group transition-all duration-700 aspect-video flex items-end justify-center mx-auto shadow-[4px_4px_0px_0px_#EEACC5] overflow-visible mb-8 mt-4 cursor-pointer">
                                        <div className="transition-all flex flex-col items-center p-4 justify-center duration-700 ease-out bg-white w-[90%] h-[95%] absolute bottom-0 border border-gray-200 shadow-sm z-10 translate-y-0 group-hover:-translate-y-24">
                                            <Quote size={16} className="text-primary mb-2 opacity-50" fill="currentColor" />
                                            <p className="text-[10px] font-medium text-gray-700 text-center leading-relaxed line-clamp-4 px-2">"Estou ansiosa para saber mais sobre o seu projeto. Vamos criar algo incrível juntos!"</p>
                                            <div className="mt-2 pt-2 border-t border-gray-100 w-full text-center">
                                                <p className="font-serif text-xs font-black uppercase text-black">Iasmim Trajano</p>
                                                <p className="font-sans text-[8px] text-primary font-bold uppercase tracking-widest">Creative Director</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-[38%] z-50 bg-[#EEACC5] text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-[8px] border-2 border-black transition-all duration-500 group-hover:opacity-0 group-hover:scale-150 group-hover:rotate-180 shadow-md">ABRA</div>
                                        <div className="transition-all duration-500 ease-in-out bg-neutral-800 absolute top-0 w-full h-full z-40 [clip-path:polygon(0_0,100%_0,50%_55%)] group-hover:[clip-path:polygon(0_0,100%_0,50%_0%)] origin-top"></div>
                                        <div className="absolute w-full h-full bg-neutral-900 z-30 [clip-path:polygon(0_0,0%_100%,50%_50%)] pointer-events-none"></div>
                                        <div className="absolute w-full h-full bg-neutral-800 z-30 [clip-path:polygon(100%_0,100%_100%,50%_50%)] pointer-events-none"></div>
                                        <div className="absolute w-full h-full bg-neutral-900 z-30 [clip-path:polygon(0_100%,100%_100%,50%_50%)] pointer-events-none"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <a href="https://wa.me/5574991394805" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 border-2 border-gray-200 py-3 px-4 rounded-xl hover:border-primary hover:bg-black transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors"><FaWhatsapp size={20} /></div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase text-gray-400 group-hover:text-gray-500">WhatsApp</p>
                                                    <p className="text-base font-black text-gray-900 group-hover:text-white">(74) 99139-4805</p>
                                                </div>
                                            </div>
                                            <FaArrowRightIcon className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/brandcriativo/" target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 border-2 border-gray-200 py-3 px-4 rounded-xl hover:border-primary hover:bg-black transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors"><FaInstagram size={20} /></div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase text-gray-400 group-hover:text-gray-500">Instagram</p>
                                                    <p className="text-base font-black text-gray-900 group-hover:text-white break-all text-xs md:text-base">@brandcriativo</p>
                                                </div>
                                            </div>
                                            <FaArrowRightIcon className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                    <a href="mailto:Trajanoiasmim9@gmail.com" className="group block bg-gray-50 border-2 border-gray-200 py-3 px-4 rounded-xl hover:border-primary hover:bg-black transition-all duration-300">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-full text-primary border-2 border-primary group-hover:bg-primary group-hover:text-black transition-colors"><FaEnvelope size={20} /></div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase text-gray-400 group-hover:text-gray-500">Email</p>
                                                    <p className="text-base font-black text-gray-900 group-hover:text-white break-all text-xs md:text-base">trajanoiasmim9@gmail.com</p>
                                                </div>
                                            </div>
                                            <FaArrowRightIcon className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* LADO DIREITO: FORMULÁRIO BRUTALISTA COM A LÓGICA DE ENVIO */}
                        <div className="lg:w-7/12 w-full animate-in slide-in-from-bottom duration-700 delay-300 fill-mode-both">
                            <BriefingForm />
                        </div>
                    </div>

                    <div className="border-t-2 border-black pt-12 animate-in slide-in-from-bottom duration-700 delay-500 fill-mode-both">
                        <h3 className="text-3xl font-black uppercase mb-8 text-center">Antes de enviar...</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-black text-white border-4 border-primary p-6 shadow-[8px_8px_0px_0px_#a6a6a6] transition-all duration-300 transform-gpu hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000000] group">
                                <Mail size={32} className="mb-4 text-primary group-hover:text-white transition-colors" />
                                <h4 className="font-black uppercase text-lg mb-2">Orçamentos</h4>
                                <p className="text-sm font-medium text-gray-400">Respondo propostas comerciais em até 24h úteis. Seja detalhista no briefing.</p>
                            </div>
                            <div className="bg-black text-white border-4 border-primary p-6 shadow-[8px_8px_0px_0px_#a6a6a6] transition-all duration-300 transform-gpu hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000000] group">
                                <Users size={32} className="mb-4 text-primary group-hover:text-white transition-colors" />
                                <h4 className="font-black uppercase text-lg mb-2">Parcerias</h4>
                                <p className="text-sm font-medium text-gray-400">Aberta a collabs com outros criativos e agências. Mande sua ideia!</p>
                            </div>
                            <div className="bg-black text-white border-4 border-primary p-6  shadow-[8px_8px_0px_0px_#a6a6a6] transition-all duration-300 transform-gpu hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000000] group">
                                <Target size={32} className="mb-4 text-primary group-hover:text-white transition-colors" />
                                <h4 className="font-black uppercase text-lg mb-2">Consultoria</h4>
                                <p className="text-sm font-medium text-gray-400">Precisa só de um direcionamento? Também faço consultorias de 1h via Meet.</p>
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