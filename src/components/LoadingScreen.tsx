import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
    onComplete: () => void;
}

const loadingTexts = [
    "Alinhando Pixels...",
    "Preparando Café...",
    "Carregando Estratégia...",
    "Ajustando Contraste...",
    "Renderizando Ideias...",
    "Verificando Fontes...",
    "Iniciando Sistema...",
    "Quase lá, porra..."
];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [time, setTime] = useState("");

    // Relógio
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('pt-BR', { hour12: false }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    // Texto mudando
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 800); // Mais humano
        return () => clearInterval(interval);
    }, []);

    // Progresso
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 5) + 2; // Mais lento pra dar tempo de ler as infos
                return Math.min(prev + increment, 100);
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Saída
    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(onComplete, 800);
            }, 500);
        }
    }, [progress, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-primary text-black transition-transform duration-1000 cubic-bezier(0.76, 0, 0.24, 1) flex flex-col ${
                !isVisible ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            {/* --- TOPO: MARQUEE CORRENDO --- */}
            <div className="h-12 bg-black text-white flex items-center overflow-hidden border-b-2 border-black">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center mx-4 gap-4">
                            <span className="text-sm font-bold uppercase tracking-widest">IASMIM TRAJANO © 2025</span>
                            <Sparkles size={14} className="text-primary" />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MIOLO: GRID --- */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2">

                {/* QUADRANTE 1: LOGO E INFO */}
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-black p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <span className="font-mono text-xs">{time}</span>
                    </div>

                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="w-48 brightness-0 self-start"
                    />

                    <div className="mt-12 space-y-2 font-mono text-xs uppercase">
                        <p>Status: <span className="font-bold">Online</span></p>
                        <p>Local: <span className="font-bold">Bahia, BR</span></p>
                        <p>Versão: <span className="font-bold">v2.0.25</span></p>
                    </div>
                </div>

                {/* QUADRANTE 2: NÚMERO GIGANTE E TEXTO DINÂMICO */}
                <div className="p-8 flex flex-col justify-end items-end relative bg-white/10">
                    {/* Efeito de Grid no fundo */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    <div className="relative z-10 text-right">
                        <p className="font-black text-lg uppercase tracking-widest mb-2 animate-pulse text-black">
                            {loadingTexts[textIndex]}
                        </p>
                        <h1 className="text-[20vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter tabular-nums">
                            {progress}%
                        </h1>
                    </div>
                </div>
            </div>

            {/* --- RODAPÉ: BARRA DE PROGRESSO GROSSA --- */}
            <div className="h-4 border-t-2 border-black bg-white w-full">
                <div
                    className="h-full bg-black transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;