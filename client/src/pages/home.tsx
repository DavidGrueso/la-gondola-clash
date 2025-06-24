import { MedievalCard } from "@/components/ui/medieval-card";

export default function Home() {
  return (
    <div className="space-y-6">
      <MedievalCard>
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Epic medieval battle scene with warriors and castle" 
            className="w-full h-64 object-cover rounded-lg border-4 border-yellow-500 shadow-lg"
          />
        </div>
        
        <h2 className="font-medieval text-3xl text-amber-900 mb-6 text-center glow-effect">
          La Saga Legendaria de LA GÓNDOLA
        </h2>
        
        <div className="prose prose-medieval max-w-none text-amber-900">
          <p className="text-lg leading-relaxed mb-4">
            En el reino místico de batallas eternas, donde las leyendas se forjan en los fuegos de la conquista, se alza el poderoso clan de <strong className="text-yellow-600">LA GÓNDOLA</strong>. Nacido de los sueños de guerreros y moldeado por el valor de héroes, nuestra hermandad ha surgido de humildes comienzos para convertirse en una de las fuerzas más temidas y respetadas de todas las tierras.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Nuestra historia comenzó a la sombra de castillos antiguos, donde un grupo de valientes luchadores se unió bajo una sola bandera: la góndola dorada que navega a través de tormentas de guerra. A través de incontables batallas, asedios y confrontaciones épicas, hemos demostrado que el honor, la estrategia y los lazos inquebrantables forjan los clanes más fuertes.
          </p>
          
          <div className="my-6 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Ancient medieval weapons including swords and shields" 
              className="rounded-lg border-2 border-amber-700 shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Golden treasure coins and medieval artifacts" 
              className="rounded-lg border-2 border-amber-700 shadow-md"
            />
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            Nuestros salones resuenan con los relatos de victorias legendarias: el Gran Asedio de las Torres de Cristal, la Batalla de las Mil Llamas, y la mítica Guerra de la Corona Dorada. Cada triunfo ha añadido a nuestro tesoro de honor y fortalecido los lazos que hacen de LA GÓNDOLA no solo un clan, sino una familia de guerreros destinados a la grandeza.
          </p>
          
          <div className="bg-yellow-500 bg-opacity-20 p-6 rounded-lg border-2 border-yellow-500">
            <h3 className="font-medieval text-xl text-amber-900 mb-3 text-center">
              <i className="fas fa-crown mr-2"></i>
              Nuestro Juramento Sagrado
            </h3>
            <p className="italic text-center text-amber-900">
              "Por espada y escudo, por honor y poder, nos alzamos como uno bajo la luz eterna. 
              LA GÓNDOLA se alzará, LA GÓNDOLA conquistará, y en victoria o derrota, 
              navegaremos juntos para siempre a través de las tormentas de la guerra."
            </p>
          </div>
        </div>
      </MedievalCard>

      <MedievalCard>
        <h3 className="font-medieval text-2xl text-amber-900 mb-6 text-center flex items-center justify-center">
          <i className="fas fa-poll mr-3 text-yellow-600"></i>
          Consejo de Guerra - Emite tu Voto
        </h3>
        
        <div className="space-y-8">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg border-2 border-amber-700">
            <h4 className="font-medieval text-lg text-amber-900 mb-4 text-center">
              ¿Quién saldrá victorioso en la próxima Guerra de Clanes?
            </h4>
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded border-2 border-amber-700">
                <p className="text-amber-900 mb-3">
                  <i className="fas fa-vote-yea mr-2"></i>
                  Encuesta Interactiva - ¡Haz Clic para Votar!
                </p>
                <div className="bg-white p-4 rounded border min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-amber-900 mb-4">Integración de Widget de Encuesta</p>
                    <p className="text-sm text-gray-600">
                      Esta sección contendría un widget integrado de StrawPoll.<br/>
                      Reemplazar el iframe src con la URL real de la encuesta cuando esté disponible.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="bg-yellow-200 p-2 rounded">LA GÓNDOLA (45%)</div>
                      <div className="bg-red-200 p-2 rounded">Legión Sombría (35%)</div>
                      <div className="bg-blue-200 p-2 rounded">Lobos de Hierro (20%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-90 p-6 rounded-lg border-2 border-amber-700">
            <h4 className="font-medieval text-lg text-amber-900 mb-4 text-center">
              ¿Qué estrategia legendaria deberíamos emplear en nuestro próximo asedio?
            </h4>
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded border-2 border-amber-700">
                <p className="text-amber-900 mb-3">
                  <i className="fas fa-chess mr-2"></i>
                  Voto del Consejo Estratégico
                </p>
                <div className="bg-white p-4 rounded border min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-amber-900 mb-4">Integración de Widget de Encuesta</p>
                    <p className="text-sm text-gray-600">
                      Esta sección contendría un widget integrado de OpinionStage.<br/>
                      Reemplazar el iframe src con la URL real de la encuesta cuando esté disponible.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="bg-green-200 p-2 rounded">Ataque de Dragón (40%)</div>
                      <div className="bg-purple-200 p-2 rounded">Enfoque Sigiloso (30%)</div>
                      <div className="bg-orange-200 p-2 rounded">Asedio Completo (30%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MedievalCard>
    </div>
  );
}
