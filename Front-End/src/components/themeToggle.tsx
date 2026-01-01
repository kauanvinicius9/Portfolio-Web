import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button className="btn btn-outline-secondary mb-4" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Tema claro" : "Tema escuro"}
        </button>
    );
}