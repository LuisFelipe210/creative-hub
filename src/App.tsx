import { useState, useEffect } from "react"; // Importa o useEffect
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
    const [isLoading, setIsLoading] = useState(window.location.pathname === "/");

    // --- CÓDIGO DA BARRA DE ROLAGEM MÁGICA ---
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            // Adiciona a classe que mostra a barra
            document.body.classList.add('is-scrolling');

            // Limpa o timer anterior pra não piscar
            clearTimeout(timeoutId);

            // Daqui a 1 segundo (1000ms) sem rolar, esconde a barra
            timeoutId = setTimeout(() => {
                document.body.classList.remove('is-scrolling');
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpeza quando sair
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);
    // -----------------------------------------

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                {isLoading && (
                    <LoadingScreen onComplete={() => setIsLoading(false)} />
                )}
                <div className="min-h-screen w-full relative z-0">
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<AboutPage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/servicos" element={<ServicesPage />} />
                            <Route path="/servicos/:slug" element={<ServiceDetail />} />
                            <Route path="/contato" element={<ContactPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;