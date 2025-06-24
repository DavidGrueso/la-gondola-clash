import { MedievalCard } from "@/components/ui/medieval-card";

export default function Clan() {
  const topMembers = [
    { name: "Rey Gondolero", role: "Líder", trophies: "5,200", icon: "👑" },
    { name: "Matadragones", role: "Co-Líder", trophies: "4,850", icon: "🛡️" },
    { name: "Guerrero Fénix", role: "Co-Líder", trophies: "4,720", icon: "⚔️" },
  ];

  const clanInfo = [
    { label: "Fundado", value: "Marzo 2019" },
    { label: "Líder", value: "Rey Gondolero" },
    { label: "Co-Líderes", value: "3" },
    { label: "Ancianos", value: "8" },
    { label: "Miembros", value: "47/50" },
    { label: "Nivel del Clan", value: "18" },
    { label: "Frecuencia de Guerra", value: "Siempre" },
  ];

  const achievements = [
    "🏆 287 Guerras Ganadas",
    "⭐ Récord Perfecto: 15 victorias consecutivas",
    "👑 Top 100 Clan Local",
    "🛡️ Tasa de Defensa Legendaria: 85%",
    "⚔️ Guerreros Liga Maestra: 12",
    "💎 Juegos del Clan: Siempre al Máximo",
  ];

  return (
    <div className="space-y-6">
      <MedievalCard>
        <h2 className="font-medieval text-3xl text-amber-900 mb-6 text-center">
          <i className="fas fa-users mr-3 text-yellow-600"></i>
          La Hermandad de LA GÓNDOLA
        </h2>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1594736797933-d0bc2a0d0522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Majestic medieval castle representing the clan stronghold" 
            className="w-full h-64 object-cover rounded-lg border-4 border-yellow-500 shadow-lg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white bg-opacity-80 p-4 rounded-lg">
            <h3 className="font-medieval text-xl text-amber-900 mb-3">Información del Clan</h3>
            <ul className="space-y-2 text-amber-900">
              {clanInfo.map((info, index) => (
                <li key={index}>
                  <strong>{info.label}:</strong> {info.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white bg-opacity-80 p-4 rounded-lg">
            <h3 className="font-medieval text-xl text-amber-900 mb-3">Logros</h3>
            <ul className="space-y-2 text-amber-900">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-90 p-6 rounded-lg">
          <h3 className="font-medieval text-xl text-amber-900 mb-4 text-center">Salón de Héroes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topMembers.map((member, index) => (
              <div key={index} className="text-center p-4 bg-yellow-500 bg-opacity-20 rounded-lg">
                <div className="text-2xl mb-2">{member.icon}</div>
                <h4 className="font-semibold text-amber-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role} • {member.trophies} 🏆</p>
              </div>
            ))}
          </div>
        </div>
      </MedievalCard>
    </div>
  );
}
