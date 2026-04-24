import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import CoverPage from "./pages/CoverPage";
import IssuePage from "./pages/IssuePage";
import EasterEggPage from "./pages/EasterEggPage";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/issue" element={<IssuePage />} />
            <Route path="/secret-margin" element={<EasterEggPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
