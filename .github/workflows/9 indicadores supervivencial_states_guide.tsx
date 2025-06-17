import React, { useState } from 'react';
import { Shield, AlertTriangle, Zap, Eye, Brain, Heart, ChevronDown, ChevronUp, Activity, Flame, Snowflake } from 'lucide-react';

const EstadosSupervivenciaGuia = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('physical');

  const survivalStates = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      physicalSigns: [
        "Tensión constante en el pecho, como si fueras a explotar de ansiedad",
        "Respiración superficial y acelerada cuando tu pareja no está disponible",
        "Insomnio cuando hay conflictos o distancia en la relación",
        "Dolores de estómago o náuseas cuando sientes que te van a dejar",
        "Temblores o sudoración cuando tu pareja llega tarde",
        "Fatiga extrema después de episodios de pánico por abandono",
        "Dolores de cabeza tensionales cuando no puedes contactar a tu pareja"
      ],
      
      emotionalSigns: [
        "Pánico intenso que puede durar horas cuando tu pareja necesita espacio",
        "Desesperación abrumadora ante la idea de estar sola",
        "Rabia explosiva cuando sientes que te están abandonando",
        "Tristeza profunda que parece no tener fondo",
        "Vacío emocional, como si fueras a desaparecer sin tu pareja",
        "Ansiedad constante sobre el futuro de la relación",
        "Emociones que cambian drásticamente según la disponibilidad de tu pareja"
      ],
      
      mentalSigns: [
        "Pensamientos obsesivos sobre dónde está tu pareja y con quién",
        "Escenarios catastróficos constantes: 'Ya no me ama', 'Me va a dejar'",
        "Incapacidad para concentrarte en trabajo o actividades cuando hay distancia",
        "Reinterpretar todo a través del lente del abandono",
        "Pensamientos de persecución: 'Está buscando a alguien mejor'",
        "Rumiación constante sobre conversaciones buscando señales de rechazo",
        "Dificultad para tomar decisiones independientes por miedo a molestar a tu pareja"
      ],
      
      behavioralSigns: [
        "Llamar o mandar mensajes compulsivamente hasta obtener respuesta",
        "Revisar redes sociales obsesivamente buscando 'evidencia' de abandono",
        "Cancelar tus planes para estar disponible cuando tu pareja esté libre",
        "Crear dramas o emergencias para captar su atención",
        "Amenazar con terminar la relación como mecanismo de control",
        "Seguir o aparecerte en lugares donde sabes que estará tu pareja",
        "Auto-abandonarte (dejar trabajo, amigos, hobbies) para dedicarte completamente a la pareja"
      ]
    },
    
    {
      name: "RECHAZO",
      icon: "💙",
      color: "blue", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      
      physicalSigns: [
        "Encoger el cuerpo, hacer que ocupes menos espacio físico",
        "Tensión en los hombros, como preparándote para un golpe emocional",
        "Voz que se vuelve más suave o casi susurrada",
        "Dificultad para mantener contacto visual",
        "Sonrojo intenso cuando tienes que expresar una opinión",
        "Sensación de 'nudos' en la garganta cuando quieres hablar",
        "Postura corporal defensiva: brazos cruzados, cuerpo cerrado"
      ],
      
      emotionalSigns: [
        "Vergüenza tóxica que te hace sentir fundamentalmente defectuosa",
        "Miedo paralizante antes de expresar tus necesidades o opiniones",
        "Tristeza anticipada, como si ya estuvieras siendo rechazada",
        "Desesperación por ser 'suficiente' para los demás",
        "Ansiedad social intensa, especialmente en grupos",
        "Sensación de ser 'demasiado' o 'muy poco' al mismo tiempo",
        "Emociones que cambias rápidamente para complacer a otros"
      ],
      
      mentalSigns: [
        "Crítica interna constante: 'No soy suficiente', 'Soy demasiado'",
        "Comparación compulsiva con otras personas",
        "Anticipar rechazo en situaciones neutrales",
        "Análisis obsesivo de cada interacción buscando señales de desaprobación",
        "Dificultad para recordar cumplidos o momentos positivos",
        "Pensamientos de que tienes que 'ganarte' el amor",
        "Autocensura mental antes de hablar o actuar"
      ],
      
      behavioralSigns: [
        "Cambiar tu personalidad según con quién estés",
        "Disculparte excesivamente, incluso por cosas que no son tu culpa",
        "Evitar expresar opiniones que podrían generar conflicto",
        "Sobre-dar para compensar tu 'falta de valor'",
        "Minimizar tus logros o talentos",
        "Huir de situaciones donde podrías ser juzgada",
        "Buscar validación constante de otros para sentirte real"
      ]
    },

    {
      name: "ABUSO",
      icon: "❤️",
      color: "red",
      bgColor: "bg-red-50", 
      borderColor: "border-red-200",
      textColor: "text-red-800",
      buttonColor: "bg-red-500 hover:bg-red-600",
      
      physicalSigns: [
        "Híper-vigilancia: músculos siempre tensos, listos para defenderte",
        "Sobresaltos exagerados ante ruidos fuertes o movimientos súbitos",
        "Dolores crónicos sin causa médica aparente",
        "Problemas digestivos relacionados con estrés constante",
        "Insomnio o pesadillas recurrentes",
        "Fatiga adrenal por estar siempre en estado de alerta",
        "Temblores o ataques de pánico cuando alguien levanta la voz"
      ],
      
      emotionalSigns: [
        "Rabia que puede explotar desproporcionadamente",
        "Miedo intenso disfrazado de otros sentimientos",
        "Culpa tóxica: creer que provocas el maltrato",
        "Entumecimiento emocional como mecanismo de protección",
        "Vergüenza profunda de haber 'permitido' el abuso",
        "Hipervigilancia emocional: escaneando constantemente el ambiente",
        "Emociones extremas: o muy intensas o completamente ausentes"
      ],
      
      mentalSigns: [
        "Justificar o minimizar comportamientos abusivos",
        "Confusión sobre lo que es 'normal' en las relaciones",
        "Pensamientos de que mereces ser tratada mal",
        "Dificultad para confiar en tu propia percepción",
        "Pensamientos de escapar vs. pensamientos de que no puedes irte",
        "Rumiación sobre incidentes abusivos",
        "Disociación: 'desconectarte' mentalmente durante situaciones difíciles"
      ],
      
      behavioralSigns: [
        "Caminar en 'cáscaras de huevo' constantemente",
        "Cambiar tu comportamiento drásticamente según el humor del otro",
        "Evitar temas, lugares o personas que podrían 'provocar' problemas",
        "Aislarte de familia y amigos para evitar 'problemas'",
        "Explicar o justificar constantemente el comportamiento de tu pareja",
        "Mentir sobre moretones, lesiones o situaciones en casa",
        "Adelantarte a las necesidades del otro para evitar conflictos"
      ]
    },

    {
      name: "INJUSTICIA",
      icon: "🧡",
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200", 
      textColor: "text-orange-800",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      
      physicalSigns: [
        "Tensión en la mandíbula por contener lo que realmente quieres decir",
        "Dolor de cabeza por la frustración de no ser escuchada",
        "Presión en el pecho cuando tu versión es negada o minimizada",
        "Temblor en las manos cuando intentas explicar tu punto de vista",
        "Sensación de mareo cuando tu realidad es cuestionada",
        "Problemas digestivos por tragarte la rabia de la injusticia",
        "Fatiga mental por tener que 'probar' constantemente tu verdad"
      ],
      
      emotionalSigns: [
        "Frustración intensa que no puedes expresar directamente",
        "Confusión sobre tu propia experiencia y memoria",
        "Rabia contenida que puede explotar en momentos inapropiados",
        "Desesperanza de nunca ser realmente vista o escuchada",
        "Ansiedad sobre si puedes confiar en tu propia percepción",
        "Tristeza profunda por no sentirte validada",
        "Sensación de estar volviéndote 'loca' cuando tu realidad es negada"
      ],
      
      mentalSigns: [
        "Dudar constantemente de tu propia memoria y percepción",
        "Repasar conversaciones obsesivamente para 'confirmar' lo que pasó",
        "Buscar evidencia externa para validar tu experiencia",
        "Confusión mental cuando alguien niega algo que claramente pasó",
        "Pensamientos circulares tratando de 'hacer sentido' de inconsistencias",
        "Dificultad para tomar decisiones por dudar de tu juicio",
        "Pensamientos de que tal vez eres 'demasiado sensible' o 'dramática'"
      ],
      
      behavioralSigns: [
        "Documentar conversaciones o eventos para 'probar' tu versión",
        "Buscar testigos para validar tu experiencia",
        "Evitar confrontaciones incluso cuando tienes la razón",
        "Ceder en discusiones para evitar más gaslighting",
        "Preguntar a otros si tu reacción es 'normal' o 'exagerada'",
        "Guardar evidencia (mensajes, emails) compulsivamente",
        "Explicar excesivamente tu punto de vista tratando de ser creída"
      ]
    },

    {
      name: "HUMILLACIÓN",
      icon: "💛",
      color: "yellow",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800", 
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      
      physicalSigns: [
        "Enrojecimiento facial intenso ante cualquier atención no deseada",
        "Postura encogida, tratando de hacerte invisible",
        "Sudoración cuando eres el centro de atención",
        "Voz temblorosa cuando tienes que hablar en público",
        "Sensación de calor abrasador cuando cometes un error",
        "Dolor de estómago antes de eventos sociales",
        "Temblores cuando alguien te felicita o reconoce"
      ],
      
      emotionalSigns: [
        "Vergüenza tóxica que te hace querer desaparecer",
        "Mortificación desproporcionada por errores menores",
        "Miedo paralizante a ser juzgada o criticada",
        "Sensación de ser 'expuesta' incluso en situaciones normales",
        "Ansiedad anticipada antes de cualquier evento social",
        "Humillación interna constante por no ser 'perfecta'",
        "Desesperación de ser vista como 'menos que' otros"
      ],
      
      mentalSigns: [
        "Autocrítica brutal y constante",
        "Pensamientos de que todos están juzgándote negativamente",
        "Repasar errores o momentos embarazosos obsesivamente",
        "Compararte constantemente con otros y salir perdiendo",
        "Pensamientos de que no mereces reconocimiento o éxito",
        "Anticipar humillación en situaciones neutrales",
        "Minimizar tus logros internamente antes de que otros lo hagan"
      ],
      
      behavioralSigns: [
        "Evitar situaciones donde podrías destacar o ser reconocida",
        "Ridiculizarte a ti misma antes de que otros lo hagan",
        "Rechazar cumplidos o minimizar tus logros",
        "Evitar hablar en grupos o expresar opiniones",
        "Vestirte de manera que no atraiga atención",
        "Sabotear oportunidades por miedo al fracaso público",
        "Esconderte en situaciones sociales, buscando ser invisible"
      ]
    },

    {
      name: "TRAICIÓN",
      icon: "💚",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      buttonColor: "bg-green-500 hover:bg-green-600",
      
      physicalSigns: [
        "Híper-vigilancia física: escaneando constantemente el ambiente",
        "Tensión muscular crónica por estar siempre 'en guardia'",
        "Insomnio por pensamientos paranoicos",
        "Dolores de cabeza por hipervigilancia mental constante",
        "Problemas digestivos por estrés crónico de desconfianza",
        "Fatiga por el agotamiento mental de 'investigar' constantemente",
        "Sobresaltos cuando tu pareja actúa de manera inesperada"
      ],
      
      emotionalSigns: [
        "Desconfianza que se siente como una corriente eléctrica constante",
        "Ansiedad paranoica sobre las intenciones de tu pareja",
        "Rabia cuando descubres inconsistencias, por pequeñas que sean",
        "Tristeza profunda por no poder relajarte y confiar",
        "Miedo constante de ser engañada nuevamente",
        "Sensación de estar 'preparándote' siempre para la traición",
        "Entumecimiento emocional para protegerte de futuros dolores"
      ],
      
      mentalSigns: [
        "Pensamientos detectivescos constantes: analizando cada detalle",
        "Escenarios paranoicos sobre lo que 'realmente' está pasando",
        "Dificultad para creer explicaciones, incluso lógicas",
        "Pensamientos obsesivos sobre dónde está tu pareja",
        "Reinterpretar eventos pasados buscando señales de engaño",
        "Planificar mentalmente tu 'escape' o venganza",
        "Pensamientos de que 'es mejor traicionar antes de ser traicionada'"
      ],
      
      behavioralSigns: [
        "Revisar teléfonos, emails, redes sociales compulsivamente",
        "Seguir o espiar los movimientos de tu pareja",
        "Crear 'trampas' para probar su lealtad",
        "Interrogar sobre cada detalle de sus actividades",
        "Mantener secretos como 'protección' o venganza",
        "Tener 'planes de escape' o contactos de emergencia listos",
        "Confrontar agresivamente ante cualquier inconsistencia"
      ]
    }
  ];

  const currentWound = survivalStates[selectedWound];

  const sections = [
    { id: 'physical', title: 'Señales Físicas', icon: <Activity className="w-5 h-5" />, color: 'text-red-600' },
    { id: 'emotional', title: 'Señales Emocionales', icon: <Heart className="w-5 h-5" />, color: 'text-pink-600' },
    { id: 'mental', title: 'Señales Mentales', icon: <Brain className="w-5 h-5" />, color: 'text-blue-600' },
    { id: 'behavioral', title: 'Señales Conductuales', icon: <Eye className="w-5 h-5" />, color: 'text-green-600' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Shield className="text-orange-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Estados de Supervivencia de las Heridas</h1>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Cuando una herida se activa, nuestro sistema nervioso entra en modo supervivencia. 
          Aprende a reconocer las señales para poder regresar al momento presente.
        </p>
      </div>

      {/* Alert Box */}
      <div className="bg-orange-100 border border-orange-300 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-3">
          <AlertTriangle className="text-orange-600 mr-3" size={24} />
          <h3 className="text-lg font-semibold text-orange-800">¿Qué es un Estado de Supervivencia?</h3>
        </div>
        <p className="text-orange-700 mb-3">
          Es cuando tu sistema nervioso interpreta una situación presente como una amenaza del pasado, 
          activando respuestas automáticas de supervivencia que pueden ser:
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Flame className="text-red-500 mr-2" size={16} />
            <span className="text-red-700 font-medium">Lucha (Fight)</span>
          </div>
          <div className="flex items-center">
            <Zap className="text-blue-500 mr-2" size={16} />
            <span className="text-blue-700 font-medium">Huida (Flight)</span>
          </div>
          <div className="flex items-center">
            <Snowflake className="text-gray-500 mr-2" size={16} />
            <span className="text-gray-700 font-medium">Parálisis (Freeze)</span>
          </div>
        </div>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {survivalStates.map((wound, index) => (
          <button
            key={index}
            onClick={() => setSelectedWound(index)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedWound === index 
                ? `${wound.bgColor} ${wound.borderColor} shadow-lg scale-105` 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">{wound.icon}</span>
              <span className={`font-semibold ${selectedWound === index ? wound.textColor : 'text-gray-700'}`}>
                {wound.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Current Wound Survival State */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              ESTADO DE SUPERVIVENCIA: {currentWound.name}
            </h2>
            <p className="text-gray-600 mt-2">Señales de que tu sistema nervioso está en modo defensivo</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                className={`w-full p-6 flex items-center justify-between text-left ${currentWound.buttonColor} text-white rounded-lg hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center">
                  {section.icon}
                  <span className="ml-3 text-lg font-semibold">{section.title}</span>
                </div>
                {expandedSection === section.id ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              {expandedSection === section.id && (
                <div className="p-6 border-t">
                  {section.id === 'physical' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Tu cuerpo reacciona físicamente al percibir una amenaza emocional:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.physicalSigns.map((sign, index) => (
                          <li key={index} className="flex items-start">
                            <Activity className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{sign}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800">
                          <strong>Técnica de Emergencia:</strong> Cuando notes estas señales físicas, 
                          practica la respiración 4-7-8: inhala 4 segundos, mantén 7, exhala 8. 
                          Esto activa tu sistema nervioso parasimpático.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'emotional' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Las emociones intensas que surgen cuando la herida está activada:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.emotionalSigns.map((sign, index) => (
                          <li key={index} className="flex items-start">
                            <Heart className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{sign}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-pink-50 border border-pink-200 rounded-lg p-4">
                        <p className="text-pink-800">
                          <strong>Regulación Emocional:</strong> Recuerda que las emociones son visitantes, no residentes. 
                          Nómbralas sin juzgarlas: "Noto que hay miedo/rabia/tristeza aquí."
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'mental' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Los patrones de pensamiento automáticos que surgen en estado de supervivencia:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.mentalSigns.map((sign, index) => (
                          <li key={index} className="flex items-start">
                            <Brain className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{sign}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Patrón de Interrupción:</strong> Cuando notes estos pensamientos, pregúntate: 
                          "¿Este pensamiento me está ayudando ahora?" y "¿Qué haría si supiera que soy amada?"
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'behavioral' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Comportamientos automáticos que emergen cuando estás en modo supervivencia:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.behavioralSigns.map((sign, index) => (
                          <li key={index} className="flex items-start">
                            <Eye className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{sign}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800">
                          <strong>Intervención Consciente:</strong> Al notar estos comportamientos, pausa y pregúntate: 
                          "¿Esto viene del pasado o del presente?" Elige una respuesta consciente en lugar de reaccionar.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Protocol de Emergencia */}
      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <Shield className="text-amber-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-amber-800">Protocolo de Emergencia Emocional</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">Cuando Notes que Estás Activada:</h4>
            <ol className="list-decimal list-inside space-y-2 text-amber-700">
              <li><strong>PARA:</strong> Detén lo que estás haciendo</li>
              <li><strong>RESPIRA:</strong> 3 respiraciones profundas y lentas</li>
              <li><strong>RECONOCE:</strong> "Mi herida está activada"</li>
              <li><strong>RECUERDA:</strong> "Esto es del pasado, no del presente"</li>
              <li><strong>ELIGE:</strong> Una respuesta consciente</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">Frases de Auto-Regulación:</h4>
            <ul className="space-y-2 text-amber-700">
              <li>• "Estoy segura en este momento"</li>
              <li>• "Esta sensación va a pasar"</li>
              <li>• "Puedo elegir cómo responder"</li>
              <li>• "Mis heridas no definen mi valor"</li>
              <li>• "Tengo el poder de sanar"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-lg p-6">
        <Shield className="mx-auto text-orange-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-orange-800 mb-2">
          El Reconocimiento es el Primer Paso hacia la Sanación
        </h3>
        <p className="text-orange-700 max-w-3xl mx-auto">
          No te juzgues por estos estados de supervivencia. Son respuestas naturales de tu sistema nervioso 
          tratando de protegerte. Con conciencia y práctica, puedes aprender a regresar al momento presente 
          y elegir respuestas que nutran tu bienestar.
        </p>
      </div>
    </div>
  );
};

export default EstadosSupervivenciaGuia;