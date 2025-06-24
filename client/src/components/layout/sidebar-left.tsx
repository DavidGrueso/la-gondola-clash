import { MedievalCard } from "@/components/ui/medieval-card";
import { useLocation } from "wouter";

export default function SidebarLeft() {
  const [location] = useLocation();
  const recentBattles = [
    { enemy: "Matadragones", result: "Victoria", time: "hace 2 horas", status: "win" },
    { enemy: "Fénix Renaciente", result: "Derrota", time: "hace 1 día", status: "loss" },
    { enemy: "Lobos de Hierro", result: "Victoria", time: "hace 3 días", status: "win" },
  ];

  const clanStats = [
    { label: "Miembros", value: "47/50" },
    { label: "Trofeos", value: "🏆 45,892" },
    { label: "Guerras Ganadas", value: "287" },
    { label: "Nivel", value: "18" },
  ];



  return (
    <div className="space-y-6">
      <MedievalCard>
        <h3 className="font-medieval text-xl text-amber-900 mb-4 flex items-center">
          <i className="fas fa-battle-net mr-2 text-red-600"></i>
          Batallas Recientes
        </h3>
        <div className="space-y-3">
          {recentBattles.map((battle, index) => (
            <div 
              key={index}
              className={`bg-white bg-opacity-80 p-3 rounded border-l-4 ${
                battle.status === 'win' ? 'border-yellow-500' : 'border-red-500'
              }`}
            >
              <p className="font-semibold text-amber-900">{battle.result} vs {battle.enemy}</p>
              <p className="text-sm text-gray-600">{battle.time}</p>
            </div>
          ))}
        </div>
      </MedievalCard>

      <MedievalCard>
        <h3 className="font-medieval text-xl text-amber-900 mb-4 flex items-center">
          <i className="fas fa-chart-bar mr-2 text-yellow-600"></i>
          Estadísticas del Clan
        </h3>
        <div className="space-y-3">
          {clanStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-amber-900">{stat.label}:</span>
              <span className="font-bold text-amber-800">{stat.value}</span>
            </div>
          ))}
        </div>
      </MedievalCard>
    </div>
  );
}
