import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Ou use react-icons se preferir

const NotFound = () => {
    return (
        <main className="min-h-screen w-full bg-black relative flex items-center justify-center overflow-hidden selection:bg-primary selection:text-black">

            {/* BACKGROUND COM IMAGEM E OVERLAY */}
            <div className="absolute inset-0 bg-[url('/fundo.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">

                {/* LOGO CENTRALIZADA */}
                <div className="flex justify-center mb-12 animate-in fade-in zoom-in duration-700">
                    <img
                        src="/logo.svg"
                        alt="Iasmim Trajano"
                        className="w-48 md:w-64 h-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>

                {/* TEXTO DE ERRO */}
                <div className="relative">
                    {/* 404 Gigante de Fundo */}
                    <h1 className="text-[12rem] md:text-[18rem] font-black text-white/5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        404
                    </h1>

                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 relative z-10">
                        Página não <br/>
                        <span className="text-primary" style={{ WebkitTextStroke: '1px white' }}>encontrada</span>
                    </h2>

                    <p className="text-xl text-gray-400 font-medium max-w-lg mx-auto mb-10 relative z-10">
                        O link que você acessou pode estar quebrado ou a página foi removida.
                    </p>

                    {/* BOTÃO VOLTAR */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 btn-primary-soft px-8 py-4 font-black text-lg uppercase rounded-xl relative z-10 hover:scale-105 transition-transform"
                    >
                        <ArrowLeft size={20} /> Voltar ao Início
                    </Link>
                </div>

            </div>

            {/* DECORAÇÃO DE RODAPÉ */}
            <div className="absolute bottom-8 left-0 w-full text-center text-white/20 text-xs font-bold uppercase tracking-[0.5em]">
                Error • Page Not Found • 404
            </div>
        </main>
    );
};

export default NotFound;