import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}
export default App;