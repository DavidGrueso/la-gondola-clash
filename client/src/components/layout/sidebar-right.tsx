import { MedievalCard } from "@/components/ui/medieval-card";

export default function SidebarRight() {
  const clanNews = [
    {
      title: "🎉 ¡Nuevo Co-Líder Promovido!",
      content: "¡Guerrero Fénix ha sido promovido a Co-Líder por su desempeño excepcional!",
      time: "hace 5 horas"
    },
    {
      title: "🏆 ¡Juegos del Clan Completados!",
      content: "¡Hemos completado al máximo los Juegos del Clan de este mes con 2 días de sobra!",
      time: "hace 2 días"
    },
    {
      title: "⚔️ Reunión de Estrategia de Guerra",
      content: "Todos los miembros están invitados a discutir las tácticas de guerra este fin de semana.",
      time: "hace 4 días"
    }
  ];

  const warRecords = [
    { label: "Guerras Ganadas", value: "287", color: "green" },
    { label: "Guerras Perdidas", value: "89", color: "red" },
    { label: "Racha Actual", value: "15", color: "yellow" },
  ];



  return (
    <div className="space-y-6">
      <MedievalCard>
        <h3 className="font-medieval text-xl text-amber-900 mb-4 flex items-center">
          <i className="fas fa-scroll mr-2 text-yellow-600"></i>
          Noticias del Clan
        </h3>
        <div className="space-y-3">
          {clanNews.map((news, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-3 rounded">
              <p className="font-semibold text-amber-900">{news.title}</p>
              <p className="text-sm text-gray-600">{news.content}</p>
              <p className="text-xs text-gray-500 mt-1">{news.time}</p>
            </div>
          ))}
        </div>
      </MedievalCard>

      <MedievalCard>
        <h3 className="font-medieval text-xl text-amber-900 mb-4 flex items-center">
          <i className="fas fa-trophy mr-2 text-yellow-600"></i>
          Récords de Guerra
        </h3>
        <div className="space-y-3">
          {warRecords.map((record, index) => (
            <div 
              key={index} 
              className={`text-center p-3 rounded ${
                record.color === 'green' ? 'bg-green-100' :
                record.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'
              }`}
            >
              <div className={`text-2xl font-bold ${
                record.color === 'green' ? 'text-green-600' :
                record.color === 'red' ? 'text-red-600' : 'text-yellow-600'
              }`}>
                {record.value}
              </div>
              <div className="text-sm text-gray-600">{record.label}</div>
            </div>
          ))}
        </div>
      </MedievalCard>

      <MedievalCard>
        <h3 className="font-medieval text-xl text-amber-900 mb-4 flex items-center">
          <i className="fas fa-user-plus mr-2 text-green-700"></i>
          ¡Únete a Nuestra Misión!
        </h3>
        <div className="text-center">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
            alt="Banner de reclutamiento medieval con castillo y caballeros" 
            className="w-full h-32 object-cover rounded mb-4 border-2 border-amber-700"
          />
          <p className="text-amber-900 mb-4">
            ¿Tienes lo que se necesita para unirte al legendario LA GÓNDOLA?
          </p>
          <div className="bg-yellow-500 bg-opacity-20 p-4 rounded">
            <p className="font-semibold text-amber-900">Requisitos:</p>
            <ul className="text-sm text-amber-900 mt-2">
              <li>• Ayuntamiento 10+</li>
              <li>• 2500+ Trofeos</li>
              <li>• Activo Diariamente</li>
              <li>• Participación en Guerras</li>
            </ul>
          </div>
        </div>
      </MedievalCard>
    </div>
  );
}
