import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import SidebarLeft from "@/components/layout/sidebar-left";
import SidebarRight from "@/components/layout/sidebar-right";
import Home from "@/pages/home";
import Clan from "@/pages/clan";
import Wars from "@/pages/wars";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/clan" component={Clan} />
      <Route path="/wars" component={Wars} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="wood-texture min-h-screen">
          <div className="min-h-screen bg-black bg-opacity-50">
            <Header />
            
            <main className="container mx-auto px-4 py-8">
              <div className={`grid grid-cols-1 gap-6 ${isHomePage ? 'lg:grid-cols-12' : 'lg:grid-cols-1'}`}>
                {isHomePage && (
                  <aside className="lg:col-span-3">
                    <SidebarLeft />
                  </aside>
                )}
                
                <section className={isHomePage ? "lg:col-span-6" : "lg:col-span-1"}>
                  <Router />
                </section>
                
                {isHomePage && (
                  <aside className="lg:col-span-3">
                    <SidebarRight />
                  </aside>
                )}
              </div>
            </main>
            
            <footer className="medieval-gradient border-t-4 border-yellow-500 mt-12">
              <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                  <p className="font-medieval text-yellow-500 mb-2">
                    Que los vientos de la victoria guíen tus batallas
                  </p>
                  <p className="text-yellow-100 text-sm">
                    © 2024 Crónicas del Clan LA GÓNDOLA • Construido con Honor y Código
                  </p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <i className="fas fa-shield-alt text-yellow-500 text-2xl"></i>
                    <i className="fas fa-sword text-red-500 text-2xl"></i>
                    <i className="fas fa-crown text-yellow-500 text-2xl"></i>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
