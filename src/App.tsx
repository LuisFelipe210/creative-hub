import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetail from "./pages/ProjectDetail";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Criação do Client do React Query
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

const App = () => {
    // Só mostra o LoadingScreen se estiver na raiz ("/")
    const [isLoading, setIsLoading] = useState(window.location.pathname === "/");

    // Lógica da Scrollbar Mágica e Controle de Overflow
    useEffect(() => {
        if (isLoading) {
            // Trava o scroll enquanto carrega
            document.body.style.overflow = "hidden";
            // Opcional: Rola para o topo para garantir que o loader comece do zero
            window.scrollTo(0, 0);
        } else {
            // Libera a desgraça do scroll quando termina
            document.body.style.overflow = "unset";
        }

        // Limpeza (caso o componente desmonte)
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isLoading]);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>

                {/* TELA DE CARREGAMENTO */}
                {isLoading && (
                    <LoadingScreen onComplete={() => setIsLoading(false)} />
                )}

                <div className="min-h-screen w-full relative z-0 bg-[fffbff] text-foreground">
                    {/* TOASTERS (Notificações) */}
                    <Toaster />
                    <Sonner />

                    {/* BOTÃO FLUTUANTE DO ZAP */}
                    <WhatsAppButton />

                    <BrowserRouter>
                        {/* Componente que joga a tela pra cima nas trocas de rota */}
                        <ScrollToTop />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<AboutPage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
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