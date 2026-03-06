/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6C63FF",
                secondary: "#FFFFFF",
                surface: "#FFFFFF",
                typography: {
                    main: "#111827",
                    muted: "#6B7280"
                },
                borders: "#E5E7EB",
                accent: "#10B981",
                error: "#EF4444",
            },
            fontFamily: {
                poppins: ['"Poppins"', 'sans-serif'],
            },
            borderRadius: {
                lg: `12px`,
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
