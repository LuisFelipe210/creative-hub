import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5574991394805" // Teu número já tá aqui no jeito
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group animate-in slide-in-from-bottom-10 duration-1000"
            aria-label="Falar no WhatsApp"
        >
            <div className="relative">
                {/* TOOLTIP (Balãozinho que aparece no Hover) */}
                <div className="absolute bottom-full right-0 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-white text-black text-xs font-bold uppercase py-2 px-4 border-2 border-black shadow-[4px_4px_0px_0px_#EEACC5]">
                        Vamos fechar negócio?
                    </div>
                </div>

                {/* BOTÃO PRINCIPAL */}
                <div className="bg-primary text-black p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000] group-hover:shadow-none group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-200 flex items-center justify-center">
                    <FaWhatsapp size={32} />
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;