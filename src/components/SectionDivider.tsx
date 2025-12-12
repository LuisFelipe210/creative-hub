import React from "react";

type DividerProps = {
    variant?: "pixel" | "curve" | "torn";
    position?: "top" | "bottom";
    className?: string;
    fill?: string; // Ex: "fill-primary", "fill-black", "fill-accent"
};

const SectionDivider = ({ variant = "pixel", position = "bottom", className = "", fill = "fill-white" }: DividerProps) => {

    // Se for no topo, a gente gira pra "pendurar" na seção de cima
    const rotationClass = position === "top" ? "rotate-180" : "";

    return (
        <div className={`w-full overflow-hidden leading-[0] ${className} ${rotationClass}`}>

            {/* VARIANTE 1: PIXEL (Escadinha Tech) */}
            {variant === "pixel" && (
                <svg
                    className={`block w-full h-[40px] md:h-[60px] ${fill}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0v120h1200V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0h-75v30h-75V0Z" />
                </svg>
            )}

            {/* VARIANTE 2: CURVE (Curva Profunda Estilo Nike) */}
            {variant === "curve" && (
                <svg
                    className={`block w-full h-[60px] md:h-[100px] ${fill}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" />
                </svg>
            )}

            {/* VARIANTE 3: TORN (Papel Rasgado Irregular - O BRABO) */}
            {variant === "torn" && (
                <svg
                    className={`block w-full h-[50px] md:h-[80px] ${fill}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="opacity-0" />
                    {/* Caminho real do rasgo abaixo */}
                    <path d="M0 0v65l14 25 25-15 32 20 45-20 35 15 28-25 43 20 35-25 32 15 45-20 35 25 28-15 43 20 35-25 32 25 45-15 35 25 28-20 43 20 35-15 32 25 45-20 35 15 28-25 43 20 35-25 32 15 45-20 35 25 28-15 43 20 35-25 32 25 45-15 35 25V0H0z" transform="scale(1, -1) translate(0, -100)" />
                    {/* Ajuste manual pro rasgo: um path polígono simples e caótico */}
                    <path d="M0,0 V40 L50,20 L100,50 L150,15 L200,45 L250,20 L300,55 L350,25 L400,60 L450,20 L500,50 L550,15 L600,45 L650,20 L700,55 L750,25 L800,60 L850,20 L900,50 L950,15 L1000,45 L1050,20 L1100,55 L1150,25 L1200,60 V0 Z" />
                </svg>
            )}
        </div>
    );
};

export default SectionDivider;