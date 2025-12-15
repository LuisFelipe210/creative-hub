import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                'soft': '5px 5px 0px 0px #EEACC5',
                'soft-hover': '5px 5px 0px 0px #A6A6A6',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                // --- ANIMAÇÕES NOVAS DAS BORBOLETAS 2D ---
                flutter: {
                    '0%, 100%': { transform: 'scaleX(1)' },
                    '50%': { transform: 'scaleX(0.4)' }, // Efeito de bater asas
                },
                drift: {
                    '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(8deg)' },
                    '66%': { transform: 'translate(-20px, -50px) rotate(-5deg)' },
                    '100%': { transform: 'translate(0, 0) rotate(0deg)' },
                },
                driftReverse: {
                    '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(-30px, -20px) rotate(-8deg)' },
                    '66%': { transform: 'translate(20px, -40px) rotate(5deg)' },
                    '100%': { transform: 'translate(0, 0) rotate(0deg)' },
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                'marquee': 'marquee 25s linear infinite',
                // --- ANIMAÇÕES NOVAS DAS BORBOLETAS 2D ---
                'flutter-fast': 'flutter 0.4s ease-in-out infinite',
                'flutter-medium': 'flutter 0.6s ease-in-out infinite',
                'flutter-slow': 'flutter 0.9s ease-in-out infinite',
                'drift-slow': 'drift 25s linear infinite',
                'drift-medium': 'driftReverse 20s linear infinite',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;