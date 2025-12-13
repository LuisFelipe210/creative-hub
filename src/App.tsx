import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

// ... Imports das páginas ...
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetail from "./pages/ProjectDetail";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
    const [isLoading, setIsLoading] = useState(window.location.pathname === "/");

    // Lógica da Scrollbar Mágica...
    useEffect(() => { /* ... seu código ... */ }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                {isLoading && (
                    <LoadingScreen onComplete={() => setIsLoading(false)} />
                )}

                <div className="min-h-screen w-full relative z-0">
                    <Toaster />
                    <Sonner />

                    <WhatsAppButton />

                    <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                            <Route path="/" element={<Home key={isLoading ? 'loading' : 'loaded'} />} />
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