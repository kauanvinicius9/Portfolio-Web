import { useState, useEffect } from "react";

// Importe de função
import { Home } from "./pages/home";

export function App() {
  const [dark, setDark] = useState(false);

  // Persistindo o tema
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      dark ? "dark" : "light"
    );
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      {/* Toggle */}
      <div className="position-fixed top-0 end-0 p-3 z-3">
        <button className="btn btn-light" onClick={() => setDark(!dark)}>
          {dark ? "Claro" : "Escuro"}
        </button>
      </div>

      <Home />
    </>

  );
}

export default App;
