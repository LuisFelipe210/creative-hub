import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Home, AlertTriangle, Star, Sparkles, ArrowUpRight, Ban, Mail } from "lucide-react";

const NotFound = () => {
    return (
        <main className="min-h-screen flex flex-col selection:bg-black selection:text-primary bg-dots-pattern relative overflow-hidden">

            {/* --- LOGO NO CANTO (FIXA) --- */}
            <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-30 hover:scale-105 transition-transform">
                <img
                    src="/logo2.svg"
                    alt="Iasmim Trajano"
                    className="w-24 md:w-32 h-auto object-contain"
                />
            </Link>

            {/* --- ELEMENTOS DECORATIVOS FLUTUANTES (MAIS DETALHES) --- */}
            <Star className="absolute top-32 right-[20%] text-black w-8 h-8 animate-spin-slow opacity-20 pointer-events-none hidden md:block" />
            <Sparkles className="absolute bottom-40 left-[15%] text-primary w-12 h-12 opacity-30 pointer-events-none hidden md:block" />
            <div className="absolute top-1/2 left-10 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-black rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

            {/* --- CORPO CENTRALIZADO --- */}
            <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-20 relative z-10">

                {/* CARD TIPO "TICKET DE ERRO" */}
                <div className="relative group max-w-lg w-full">

                    {/* Sombra Sólida Deslocada */}
                    <div className="absolute top-3 left-3 w-full h-full bg-black rounded-3xl -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>

                    <div className="bg-[#fffbff] border-2 border-black rounded-3xl overflow-hidden relative">

                        {/* CABEÇALHO DO CARD (DETALHE TÉCNICO) */}
                        <div className="bg-black text-white py-2 px-6 flex justify-between items-center border-b-2 border-black">
                            <span className="font-mono text-xs font-bold tracking-widest text-primary">ERR_CODE: 404</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>

                        <div className="p-10 md:p-14 text-center relative">

                            {/* 404 COM EFEITO */}
                            <div className="relative mb-8 inline-block">
                                <h1
                                    className="text-9xl font-black text-transparent leading-none tracking-tighter select-none relative z-10"
                                    style={{ WebkitTextStroke: '2px black' }}
                                >
                                    404
                                </h1>
                                {/* Sombra do texto rosa deslocada */}
                                <h1
                                    className="text-9xl font-black text-primary leading-none tracking-tighter select-none absolute top-1 left-1 z-0 opacity-50"
                                >
                                    404
                                </h1>

                                {/* Badge Flutuante */}
                                <div className="absolute -top-6 -right-10 bg-white text-black text-xs font-bold px-3 py-1 border-2 border-black rotate-12 shadow-sm">
                                    SUMIU!
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-black uppercase text-black mb-4 flex items-center justify-center gap-2">
                                <Ban size={28} className="text-primary" />
                                Página Off-line
                            </h2>

                            <p className="text-gray-600 font-medium text-base leading-relaxed mb-8 max-w-sm mx-auto">
                                Parece que o link quebrou ou essa página não existe. Verifique a URL ou escolha um destino abaixo.
                            </p>

                            {/* BARCODE FAKE (DETALHE VISUAL) */}
                            <div className="flex justify-center gap-1 h-4 mb-8 opacity-20">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`bg-black w-${Math.random() > 0.5 ? '1' : '2'}`}></div>
                                ))}
                            </div>

                            {/* BOTÕES DE AÇÃO */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 font-black text-sm uppercase rounded-xl hover:bg-primary hover:text-black hover:border-black border-2 border-transparent transition-all shadow-[4px_4px_0px_0px_#EEACC5] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    <Home size={16} className="mb-0.5" />
                                    Voltar pra Home
                                </Link>
                                <Link
                                    to="/contato"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-black text-sm uppercase rounded-xl border-2 border-black hover:bg-gray-50 transition-all hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                                >
                                    <Mail size={16} className="mb-0.5" />
                                    Reportar Erro
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Decoração Extra Fora do Card */}
                    <ArrowUpRight className="absolute -bottom-8 -left-8 text-black w-16 h-16 opacity-10 rotate-12 hidden md:block" />
                </div>

            </div>

            <Footer />
        </main>
    );
};

export default NotFound;