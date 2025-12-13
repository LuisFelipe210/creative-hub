import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Star, Heart, Coffee, Layers, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const AboutPage = () => {
    return (
        <main className="min-h-screen selection:bg-primary selection:text-black">
            <SEO title="Sobre" description="Conheça a mente por trás da criatividade e descubra como transformo ideias em marcas fortes." />
            <Navigation />

            {/* --- HEADER SÓLIDA COM ANIMAÇÃO --- */}
            <section className="pt-32 pb-8 w-full relative bg-[#fffbff] border-b-2 border-black z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="w-full h-0.5 bg-black mb-4 flex justify-between items-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    {/* CORREÇÃO AQUI: Usando items-start no mobile para garantir alinhamento à esquerda */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

                        {/* LADO ESQUERDO (Slide da Esquerda) */}
                        <div className="animate-in slide-in-from-left duration-700">
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest">
                                <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                    <Home size={12} className="mb-0.5" />
                                    Home
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_0px_#EEACC5]">
                                    Sobre
                                </span>
                            </div>

                            {/* Garantindo text-left no h1 também */}
                            <h1 className="text-5xl md:text-8xl font-black uppercase text-black leading-[0.85] tracking-tighter text-left">
                                Criativa & <br />
                                <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>
                                    Estrategista
                                </span>.
                            </h1>
                        </div>

                        {/* LADO DIREITO (Slide da Direita) */}
                        <div className="md:max-w-sm mb-2 pl-4 border-l-4 border-primary animate-in slide-in-from-right duration-700">
                            <p className="text-lg font-medium text-gray-600 leading-relaxed">
                                Conheça a mente por trás da criatividade e descubra como transformo ideias em marcas fortes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORPO COM BOLINHAS --- */}
            <div className="bg-dots-pattern w-full relative z-0">

                {/* MANIFESTO */}
                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-4xl bg-[#fffbff]/80 backdrop-blur-sm p-8 border-2 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000]">
                        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-black mb-8">
                            "Design sem estratégia é <span className="text-gray-400 line-through decoration-primary decoration-4">arte</span>. <br/>
                            Com estratégia, é <span className="bg-primary px-2 text-black">negócio</span>."
                        </h2>
                        <p className="text-xl text-gray-800 font-medium max-w-3xl leading-relaxed">
                            Oi! Me chamo <strong>Iasmim</strong>, tenho 24 anos e atuo como Social Media e Designer desde 2022, quando iniciei na Agência Echos. Desde então, venho unindo minhas duas grandes paixões: a criatividade e a estratégia.
                        </p>
                    </div>
                </section>

                {/* BENTO GRID */}
                <section className="pb-24 container mx-auto px-4">
                    {/* Grid responsivo */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">

                        {/* CARD 1: FOTO */}
                        <div className="h-[450px] md:h-auto md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden border-2 border-black group shadow-[8px_8px_0px_0px_#000000]">
                            <img
                                src="/iasmim.png"
                                alt="Iasmim Trajano"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-primary font-bold uppercase tracking-widest text-xs">Founder</span>
                                <h3 className="text-white font-black text-2xl uppercase">Iasmim Trajano</h3>
                            </div>
                        </div>

                        {/* CARD 2: BIO */}
                        <div className="md:col-span-2 bg-black text-white p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_#EEACC5]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-20"></div>
                            <h3 className="text-2xl font-black uppercase mb-4 text-primary">Minha História</h3>

                            <div className="font-medium text-gray-300 text-base md:text-lg leading-relaxed space-y-4 md:overflow-y-auto md:max-h-[220px] pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-primary">
                                <p>
                                    Desde pequena, sempre fui envolvida com o mundo das artes, e hoje transformo isso em projetos visuais que comunicam com propósito. Sou detalhista, perfeccionista e tenho um olhar apurado, o que me permite entregar trabalhos com identidade e qualidade.
                                </p>
                                <p>
                                    Gosto de acompanhar todo o processo criativo — do briefing ao layout final — e me realizo ao ver uma ideia ganhar forma. Cada projeto é uma oportunidade de mostrar meu potencial e ajudar marcas a se destacarem de forma autêntica e criativa.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3: ESTATÍSTICAS */}
                        <div className="bg-primary p-8 rounded-3xl border-2 border-black flex flex-col justify-center items-center text-center transition-colors group shadow-[8px_8px_0px_0px_#000000]">
                            <span className="text-6xl font-black text-black mb-2 group-hover:scale-110 transition-transform">40+</span>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black group-hover:text-black">Projetos Entregues</p>
                        </div>

                        {/* CARD 4: FERRAMENTAS */}
                        <div className="bg-white p-8 rounded-3xl border-2 border-black flex flex-col justify-between shadow-[8px_8px_0px_0px_#000000] gap-4">
                            <div className="flex items-center gap-2 mb-0 md:mb-4">
                                <Layers className="text-primary" />
                                <h3 className="font-black uppercase text-lg">Ferramentas</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Photoshop", "Canva", "Figma", "CapCut", "Trello"].map(tool => (
                                    <span key={tool} className="px-3 py-1 border border-gray-300 rounded-full bg-black text-primary text-xs font-bold uppercase hover:bg-primary hover:border-black hover:text-black transition-colors cursor-default">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CARD 5: FILOSOFIA */}
                        <div className="md:col-span-1 bg-[#fdf2f8] p-8 rounded-3xl border-2 border-primary flex flex-col justify-center relative overflow-hidden shadow-[8px_8px_0px_0px_#000000]">
                            <Heart className="absolute -bottom-4 -right-4 w-32 h-32 text-primary/10" />
                            <h3 className="font-black uppercase text-lg mb-4">O que esperar?</h3>
                            <ul className="space-y-3 font-bold text-sm text-gray-700">
                                <li className="flex items-center gap-2"><Star size={14} className="text-primary"/> Atendimento próximo</li>
                                <li className="flex items-center gap-2"><Star size={14} className="text-primary"/> Prazos cumpridos</li>
                                <li className="flex items-center gap-2"><Star size={14} className="text-primary"/> Foco em conversão</li>
                            </ul>
                        </div>

                        {/* CARD 6: PERSONALIDADE */}
                        <div className="md:col-span-2 bg-gray-100 p-8 rounded-3xl border-2 border-black flex items-center justify-between shadow-[8px_8px_0px_0px_#000000]">
                            <div>
                                <p className="text-xs font-bold uppercase text-gray-400 mb-2">Modo de Trabalho</p>
                                <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800">
                                    Movida a café, <br/> dados e criatividade.
                                </h3>
                            </div>
                            <Coffee size={48} className="text-black/10" />
                        </div>

                    </div>
                </section>

                {/* --- CTA FINAL (FUNDO ROSA BRUTALISTA) --- */}
                <section className="py-24 container mx-auto px-4 border-t-2 border-black bg-dots-pattern">
                    {/* Bloco principal agora é ROSA (bg-primary) */}
                    <div className="bg-primary text-black rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden
                        border-4 border-black
                        shadow-[14px_14px_0px_0px_#000000] /* Sombra preta para alto contraste */
                        transition-all duration-300 transform-gpu hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[12px_12px_0px_0px_#000000]">

                        {/* Removemos o overlay de ruído, que só funciona bem em fundo escuro */}
                        <div className="relative z-10">

                            {/* Título Padronizado: Texto Preto Sólido (Sem Contorno) */}
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none">
                                Chega de <span className="bg-black text-white px-2">Perder</span> Tempo
                            </h2>

                            <p className="text-black/80 font-bold text-base md:text-lg mb-10 max-w-xl mx-auto">
                                Sua marca merece esse nível de cuidado e estratégia.
                            </p>

                            {/* BOTÃO FINAL BRUTALISTA: Agora é PRETO, com Sombra ROSA */}
                            <Link
                                to="/contato"
                                className="inline-flex items-center gap-3 font-black text-base md:text-lg uppercase
                                   rounded-xl bg-black text-white border-2 border-black
                                   px-8 py-4 md:px-10
                                   shadow-[6px_6px_0px_0px_#EEACC5] /* Sombra Rosa */
                                   hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
                                   transition-all active:scale-[0.98] transform-gpu"
                            >
                                Vamos Conversar <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
};

export default AboutPage;