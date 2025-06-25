import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Logo from "/home/psd/GONDOLA/la-gondola-clash/client/public/GondolaLogo.png";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Inicio", icon: "fas fa-home" },
    { path: "/clan", label: "Clan", icon: "fas fa-shield-alt" },
    { path: "/wars", label: "Guerras", icon: "fas fa-sword" },
  ];

  return (
    <header className="medieval-gradient border-b-4 border-yellow-500 shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <div className="mb-1">
            <img 
              src={Logo} 
              alt="LA GÓNDOLA Clan Logo - Medieval Castle Emblem" 
              className="mx-auto h-[500px] w-auto"
            />
          </div>
          {/*
          <h1 className="font-decorative text-4xl md:text-6xl text-yellow-500 glow-effect mb-2">
            LA GÓNDOLA
          </h1>
          */}
          <p className="font-medieval text-yellow-100 text-lg">Crónicas del Clan Legendario</p>
        </div>
        
        <nav className="mt-6">
          <div className="flex justify-center">
            <div className="bg-amber-900 rounded-full p-2 border-2 border-yellow-500">
              <ul className="flex space-x-1 md:space-x-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span className={cn(
                        "px-4 py-2 rounded-full font-medieval font-semibold transition-colors duration-200 flex items-center cursor-pointer",
                        location === item.path 
                          ? "bg-yellow-500 text-amber-900" 
                          : "bg-amber-700 text-white hover:bg-amber-600"
                      )}>
                        <i className={`${item.icon} mr-2`}></i>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
