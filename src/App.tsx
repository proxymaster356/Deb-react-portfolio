import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Posters from "./pages/Posters";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Events from "./pages/Events";
import Photography from "./pages/Photography";
import NotFound from "./pages/NotFound";

// 👉 Your OGL Particle Background
import Particles from "./components/Particles"; // Adjust if your path differs
import "./components/Particles.css"; // Import its style too

const queryClient = new QueryClient();

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
              
              {/* 🪐 Custom Particle Background */}
              <Particles className="z-0" />

              {/* 🌐 Layout */}
              <div className="flex relative z-10">
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

                <main
                  className={`flex-1 transition-all duration-300 p-6 overflow-x-auto
                    ${isCollapsed ? "md:ml-16" : "md:ml-64"}`}
                >
                  <div className="max-w-7xl mx-auto">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<AboutMe />} />
                      <Route path="/education" element={<Education />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/certificates" element={<Certificates />} />
                      <Route path="/posters" element={<Posters />} />
                      <Route path="/publications" element={<Publications />} />
                      <Route path="/research" element={<Research />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/photography" element={<Photography />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                </main>
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
