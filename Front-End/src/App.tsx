import { useState } from "react";
import { Home } from "./pages/home";

export function App() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const newTheme = !dark;
    setDark(newTheme);

    document.documentElement.setAttribute(
      "data-bs-theme",
      newTheme ? "dark" : "light"
    );
  }

  return (
    <>
      {/* Botão fixo no topo esquerdo */}
      <div className="position-fixed top-0 start-0 p-3 z-3">
        <button className="btn btn-sm btn-outline-secondary border-0" onClick={toggleTheme}>
          {dark ? "Claro" : "Escuro"}
        </button>
      </div>

      <Home />
    </>
  );
}

export default App;
