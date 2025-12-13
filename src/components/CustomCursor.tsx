import { useEffect, useRef, useState } from "react";
import { FaMousePointer, FaHandPointer } from "react-icons/fa";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default');
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Movimento sem delay (transform direto)
        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const style = window.getComputedStyle(target);
            const tag = target.tagName.toLowerCase();

            // 1. Link/Botão
            const isClickable =
                tag === "a" ||
                tag === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                style.cursor === "pointer";

            // 2. Texto
            const isText =
                tag === "p" || tag === "span" || tag === "label" ||
                tag === "input" || tag === "textarea" || tag === "li" ||
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) ||
                style.cursor === "text";

            if (isClickable) {
                setCursorType('pointer');
            } else if (isText) {
                setCursorType('text');
            } else {
                setCursorType('default');
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    if (typeof window !== "undefined" && window.innerWidth < 768) return null;

    const iconStyle = {
        color: "#EEACC5",
        stroke: "black",
        strokeWidth: "30px",
        filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.4))"
    };

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200
                ${isVisible ? "opacity-100" : "opacity-0"} 
            `}
            style={{
                // Zerei as margens globais pra controlar individualmente lá embaixo
                marginTop: 0,
                marginLeft: 0
            }}
        >
            <div className={`transition-transform duration-100 ${isClicking ? "scale-90" : "scale-100"}`}>

                {/* MÃOZINHA (LINK) */}
                {cursorType === 'pointer' && (
                    <FaHandPointer
                        size={28}
                        style={{ ...iconStyle, marginLeft: -10, marginTop: -2 }} // Ajuste da ponta do dedo
                    />
                )}

                {/* SETA (NORMAL) */}
                {cursorType === 'default' && (
                    <FaMousePointer
                        size={28}
                        style={{ ...iconStyle, marginLeft: -4, marginTop: -4 }} // Ajuste da ponta da seta
                    />
                )}

                {/* I-BEAM (TEXTO) - AGORA CENTRALIZADO NA MARRA */}
                {cursorType === 'text' && (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            // O PULO DO GATO TÁ AQUI, PAI:
                            // translate(-50%, -50%) puxa o centro do ícone pro mouse.
                            transform: "translate(-50%, -50%)",
                            filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.5))"
                        }}
                    >
                        {/* BORDA PRETA */}
                        <path d="M12 2V22" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
                        <path d="M9 2H15" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
                        <path d="M9 22H15" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>

                        {/* MIOLO ROSA */}
                        <path d="M12 2V22" stroke="#EEACC5" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M9 2H15" stroke="#EEACC5" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M9 22H15" stroke="#EEACC5" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                )}

            </div>
        </div>
    );
};

export default CustomCursor;