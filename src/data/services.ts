import { Share2, PenTool, Layout, LucideIcon, Printer, TrendingUp} from "lucide-react";

export interface Service {
    id: string;
    icon: LucideIcon;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    tags: string[];
    includes: string[];
    link: string;
    // Adicionei o FAQ na interface
    faq: { question: string; answer: string }[];
}

export const allServices: Service[] = [
    {
        id: "01",
        icon: Share2,
        slug: "social-media",
        title: "Social Media",
        subtitle: "Gestão & Estratégia",
        description: "Não é sobre postar todo dia, é sobre postar o que funciona. Planejamento, criação de conteúdo e análise de dados para fazer seu perfil virar máquina de vendas.",
        longDescription: "Postar por postar não paga boleto. Aqui o buraco é mais embaixo: criamos narrativas que prendem, engajam e vendem. Deixe a parte chata comigo e foque no seu negócio.",
        tags: ["Planejamento", "Copywriting", "Design", "Tráfego"],
        includes: [ "Planejamento Estratégico de Conteúdo", "Criação de Artes e Legendas (Copy)", "Edição de Reels/TikTok (CapCut)", "Agendamento e Publicação", "Análise Mensal de Métricas", "Gestão de Tráfego Pago (Opcional)" ],
        link: "/servicos/social-media",
        faq: [
            { question: "Preciso aparecer nos vídeos?", answer: "Não é obrigatório, mas humaniza a marca. Se não quiser, criamos estratégias focadas em produto e narração." },
            { question: "Quanto tempo para ver resultado?", answer: "Trabalho de branding é construção. Geralmente notamos melhora no engajamento a partir do 2º mês." },
            { question: "Quais as formas de pagamento?", answer: "Aceito PIX (5% off), Cartão de Crédito em até 12x ou Boleto." }
        ]
    },
    {
        id: "02",
        icon: PenTool,
        slug: "identidade-visual",
        title: "Identidade Visual",
        subtitle: "Branding & Logos",
        description: "Sua marca fala antes de você abrir a boca. Crio sistemas visuais completos que transmitem autoridade, valor e ficam na cabeça do cliente.",
        longDescription: "Sua marca fala antes de você abrir a boca. Crio sistemas visuais completos que transmitem autoridade, valor e ficam na cabeça do cliente.",
        tags: ["Logo", "Paleta de Cores", "Tipografia", "Brandbook"],
        includes: [ "Logotipo Principal e Variações", "Paleta de Cores Estratégica", "Tipografia Exclusiva", "Elementos de Apoio e Estampas", "Manual da Marca (Brandbook)", "Aplicações (Cartão, Crachá, etc)" ],
        link: "/servicos/identidade-visual",
        faq: [
            { question: "Vocês entregam os arquivos abertos?", answer: "Sim! Entregamos tudo em EPS, AI, PDF e PNG (fundo transparente)." },
            { question: "Quanto tempo demora?", answer: "Em média 15 a 20 dias úteis após a aprovação do briefing." },
            { question: "E se eu não gostar?", answer: "O processo inclui etapas de aprovação (Moodboard e Conceito) para garantir que estamos no caminho certo." }
        ]
    },
    {
        id: "03",
        icon: Layout,
        slug: "web-design",
        title: "Web Design",
        subtitle: "Sites & Landing Pages",
        description: "Seu terreno próprio na internet. Sites rápidos, bonitos e otimizados para conversão. Pare de perder venda por site feio ou lento.",
        longDescription: "Seu Instagram pode cair amanhã. Seu site é seu terreno próprio. Desenvolvo páginas rápidas, bonitas e feitas pra converter visitante em cliente.",
        tags: ["UI/UX", "Wordpress/React", "SEO", "Responsivo"],
        includes: [ "Layout Exclusivo (UI Design)", "Desenvolvimento (Code ou No-Code)", "Otimização para Celular (Responsivo)", "Configuração de SEO Básico", "Integração com Pixel e Analytics", "Treinamento para atualizações" ],
        link: "/servicos/web-design",
        faq: [
            { question: "Eu preciso pagar hospedagem?", answer: "Sim, domínio (nome) e hospedagem são custos do cliente, mas eu te oriento em como contratar os melhores." },
            { question: "O site funciona no celular?", answer: "Perfeitamente. O desenvolvimento é Mobile First (focado primeiro no celular)." },
            { question: "Consigo alterar textos depois?", answer: "Sim! Te dou um treinamento gravado de como mexer no painel administrativo." }
        ]
    },
    {
        id: "04",
        icon: Printer,
        slug: "design-grafico",
        title: "Design Gráfico",
        subtitle: "Offline & Impressos",
        description: "Do cartão de visita ao outdoor. Materiais gráficos que tangibilizam a qualidade do seu serviço no mundo real.",
        longDescription: "O digital é rei, mas o impresso é a coroa. Materiais físicos tangibilizam o valor da sua marca. Do cartão de visita ao outdoor, tudo tem que estar impecável.",
        tags: ["Papelaria", "Embalagens", "Editoriais", "Merch"],
        includes: [ "Cartões de Visita e Papelaria", "Diagramação de E-books e Apostilas", "Embalagens e Rótulos", "Banners e Outdoors", "Cardápios e Catálogos", "Materiais para Eventos" ],
        link: "/servicos/design-grafico",
        faq: [
            { question: "A impressão está inclusa?", answer: "Não, o valor é referente à criação da arte. Posso indicar gráficas de confiança ou enviar o arquivo pronto para a sua gráfica." },
            { question: "Em qual formato recebo?", answer: "PDF/X-1a (padrão gráfico), além de JPG/PNG para visualização." },
            { question: "Cria a logo também?", answer: "Não, para criação de logo você deve contratar o serviço de Identidade Visual separadamente." }
        ]
    },
    {
        id: "05",
        icon: TrendingUp,
        slug: "trafego-pago",
        title: "Tráfego Pago",
        subtitle: "Anúncios & Performance",
        description: "Chega de depender da entrega orgânica. Com o tráfego pago, colocamos sua oferta na frente de quem quer comprar, na hora certa.",
        longDescription: "O tráfego orgânico é ótimo, mas demora. No tráfego pago, compramos velocidade e previsibilidade. Criamos e gerenciamos campanhas estratégicas no Google e Meta (Facebook/Instagram) com foco total em ROI. Não é gasto, é investimento em dados e vendas.",
        tags: ["Google Ads", "Meta Ads", "Performance", "ROI"],
        includes: [
            "Gestão de Campanhas (Meta e Google Ads)",
            "Segmentação de Públicos Compradores",
            "Instalação de Pixel e API de Conversão",
            "Estratégias de Remarketing",
            "Otimização Diária de Anúncios",
            "Relatórios de Performance em Tempo Real"
        ],
        link: "/servicos/trafego-pago",
        faq: [
            { question: "Qual o investimento mínimo nos anúncios?", answer: "Recomendo iniciar com pelo menos R$ 20,00 a R$ 30,00 por dia para gerar dados suficientes para otimização." },
            { question: "O valor da gestão inclui o saldo dos anúncios?", answer: "Não. O valor do meu serviço é pela estratégia e gerenciamento. O orçamento dos anúncios é pago diretamente para as plataformas (Google/Facebook)." },
            { question: "Em quanto tempo vejo resultado?", answer: "O tráfego pago é mais rápido que o orgânico. Geralmente, nas primeiras semanas já conseguimos ver métricas relevantes e leads chegando." }
        ]
    }
];