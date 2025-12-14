// src/data/projects.ts

export interface Project {
    id: number;
    slug: string;
    client: string;
    title: string;
    category: string;
    year: string;
    image: string;
    tags: string[];
    description: string;
    challenge: string;
    gallery: string[];
}

export const allProjects: Project[] = [
    {
        id: 1,
        slug: "gabrielle-weiss",
        client: "Gabrielle Weiss",
        title: "Advocacia Premium",
        category: "Branding",
        year: "2024",
        image: "/fundo.jpg",
        tags: ["Identidade Visual", "Papelaria", "Social Media"],
        description: "Redesign completo de identidade visual focado em alto padrão e autoridade.",
        challenge: "A Dra. Gabrielle precisava se desvincular da imagem de 'advogada iniciante'. O desafio foi criar uma marca que gritasse experiência, solidez e elegância, sem cair no clichê da balança da justiça.",
        gallery: ["/fundo.jpg", "/dog.jpg", "/galinha.jpg", "/iasmim.png"]
    },
    {
        id: 2,
        slug: "wyate-boutique",
        client: "Wyate Boutique",
        title: "Moda Feminina",
        category: "Social Media",
        year: "2023",
        image: "/dog.jpg",
        tags: ["Direção de Arte", "Estratégia", "Reels"],
        description: "Estratégia de conteúdo e direção de arte para e-commerce de moda.",
        challenge: "A marca tinha fotos lindas, mas não vendia. Implementamos um funil de conteúdo focado em desejo e criamos uma estética 'pinterest' que aumentou o engajamento em 300% no primeiro mês.",
        gallery: ["/dog.jpg", "/fundo.jpg", "/iasmim.png", "/galinha.jpg"]
    },
    {
        id: 3,
        slug: "marfim-atelie",
        client: "Marfim Ateliê",
        title: "E-commerce Artesanal",
        category: "Web Design",
        year: "2024",
        image: "/iasmim.png",
        tags: ["UI/UX", "Shopify", "SEO"],
        description: "Interface limpa e focada em conversão para produtos manuais.",
        challenge: "Produtos artesanais exigem que o cliente 'sinta' a textura pela tela. Desenhamos um site minimalista onde as fotos são gigantes e o checkout é extremamente simples, reduzindo o abandono de carrinho.",
        gallery: ["/iasmim.png", "/galinha.jpg", "/fundo.jpg", "/dog.jpg"]
    },
    {
        id: 4,
        slug: "up-engenharia",
        client: "Up Engenharia",
        title: "Posicionamento Marca",
        category: "Social Media",
        year: "2023",
        image: "/galinha.jpg",
        tags: ["Linkedin", "Tráfego Pago", "Copy"],
        description: "Gestão de tráfego e criação de autoridade no LinkedIn.",
        challenge: "Engenharia é um nicho técnico e muitas vezes frio. Transformamos obras complexas em conteúdos digeríveis e cases de sucesso que atraíram investidores e parceiros grandes para a construtora.",
        gallery: ["/galinha.jpg", "/dog.jpg", "/iasmim.png", "/fundo.jpg"]
    },
    {
        id: 5,
        slug: "teste",
        client: "teste",
        title: "teste",
        category: "teste",
        year: "0000",
        image: "/placeholder.svg",
        tags: ["teste", "teste", "teste"],
        description: "teste",
        challenge: "teste",
        gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }

];