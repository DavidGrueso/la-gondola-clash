import { MedievalCard } from "@/components/ui/medieval-card";

export default function Wars() {
  const warHistory = [
    { 
      enemy: "Matadragones", 
      result: "VICTORIA", 
      score: "150 vs 149", 
      description: "Guerra Perfecta",
      status: "win" 
    },
    { 
      enemy: "Fénix Renaciente", 
      result: "DERROTA", 
      score: "145 vs 147", 
      description: "Batalla Reñida",
      status: "loss" 
    },
    { 
      enemy: "Lobos de Hierro", 
      result: "VICTORIA", 
      score: "150 vs 138", 
      description: "Victoria Aplastante",
      status: "win" 
    },
    { 
      enemy: "Invasores de Tormenta", 
      result: "VICTORIA", 
      score: "149 vs 144", 
      description: "Batalla Épica",
      status: "win" 
    },
  ];

  return (
    <div className="space-y-6">
      <MedievalCard>
        <h2 className="font-medieval text-3xl text-amber-900 mb-6 text-center">
          <i className="fas fa-sword mr-3 text-red-600"></i>
          Crónicas de Guerra
        </h2>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Epic medieval battlefield with warriors in combat" 
            className="w-full h-64 object-cover rounded-lg border-4 border-yellow-500 shadow-lg"
          />
        </div>
        
        <div className="bg-red-600 bg-opacity-90 p-6 rounded-lg mb-6 text-white">
          <h3 className="font-medieval text-2xl mb-4 text-center">
            <i className="fas fa-fire mr-2"></i>
            Guerra Actual: LA GÓNDOLA vs Legión Sombría
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">92%</div>
              <div>LA GÓNDOLA</div>
              <div className="text-sm">46/50 ataques usados</div>
            </div>
            <div>
              <div className="text-3xl font-bold">87%</div>
              <div>Legión Sombría</div>
              <div className="text-sm">48/50 ataques usados</div>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="text-lg font-semibold">Tiempo Restante: 8h 23m</div>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-90 p-6 rounded-lg">
          <h3 className="font-medieval text-xl text-amber-900 mb-4">Historial de Guerras Recientes</h3>
          <div className="space-y-3">
            {warHistory.map((war, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-3 rounded border-l-4 ${
                  war.status === 'win' 
                    ? 'bg-green-100 border-green-500' 
                    : 'bg-red-100 border-red-500'
                }`}
              >
                <div>
                  <span className="font-semibold">LA GÓNDOLA vs {war.enemy}</span>
                  <div className="text-sm text-gray-600">{war.description} • {war.score}</div>
                </div>
                <div className={`font-bold ${
                  war.status === 'win' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {war.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MedievalCard>
    </div>
  );
}
