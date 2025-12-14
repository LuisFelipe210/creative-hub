import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
    return (
        <Helmet>
            <title>{title} - Brand Criativo</title>

            <meta
                name="description"
                content={description || "Designer e Estrategista de Marcas. Transformo negócios comuns em marcas impossíveis de ignorar."}
            />
        </Helmet>
    );
};

export default SEO;