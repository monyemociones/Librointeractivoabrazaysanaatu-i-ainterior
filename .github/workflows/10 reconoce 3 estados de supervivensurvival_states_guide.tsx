import React, { useState } from 'react';
import { Shield, AlertTriangle, Zap, Eye, Brain, Heart, ChevronDown, ChevronUp, Activity, Flame, Snowflake, Wind } from 'lucide-react';

const EstadosSupervivenciaGuia = () => {
  const [selectedState, setSelectedState] = useState(0);
  const [expandedSection, setExpandedSection] = useState('physical');

  const survivalStates = [
    {
      name: "LUCHA",
      subtitle: "Fight Response",
      icon: "🔥",
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      buttonColor: "bg-red-500 hover:bg-red-600",
      description: "Tu sistema nervioso se prepara para enfrentar la amenaza con agresión o confrontación",
      
      physicalSigns: [
        "Tensión muscular extrema, especialmente en mandíbula, puños y hombros",
        "Respiración acelerada y superficial, como preparándose para el combate",
        "Aumento del ritmo cardíaco que puedes sentir palpitando",
        "Sudoración intensa, especialmente en palmas y frente",
        "Sensación de calor interno, como si fueras a explotar",
        "Temblores de adrenalina en manos y piernas",
        "Tensión en el estómago, como un puño apretado interno",
        "Dolor de cabeza por la tensión acumulada"
      ],
      
      emotionalSigns: [
        "Rabia intensa que surge de manera desproporcionada a la situación",
        "Irritabilidad extrema donde todo te molesta",
        "Frustración que se siente como una olla de presión a punto de explotar",
        "Indignación y sensación de injusticia abrumadora",
        "Resentimiento que hierve en tu interior",
        "Impaciencia extrema, no puedes tolerar demoras",
        "Sensación de que 'todos están en tu contra'",
        "Ganas de gritar, golpear o destruir algo"
      ],
      
      mentalSigns: [
        "Pensamientos agresivos hacia otros: 'Te voy a demostrar'",
        "Búsqueda obsesiva de culpables para tu malestar",
        "Pensamientos de venganza o 'hacer pagar' a otros",
        "Rumiación sobre todas las veces que te han lastimado",
        "Justificación mental de comportamientos agresivos",
        "Pensamientos de superioridad: 'Yo tengo la razón'",
        "Planificación de confrontaciones o 'ajustes de cuentas'",
        "Dificultad para ver perspectivas diferentes a la tuya"
      ],
      
      behavioralSigns: [
        "Levantar la voz o gritar cuando te sientes amenazada",
        "Gestos agresivos: señalar con el dedo, cerrar puños",
        "Interrumpir constantemente a otros en conversaciones",
        "Buscar peleas o crear conflictos innecesarios",
        "Criticar y atacar a otros de manera despiadada",
        "Comportamiento dominante, tratando de controlar situaciones",
        "Romper o arrojar objetos cuando estás frustrada",
        "Confrontar agresivamente ante cualquier desacuerdo",
        "Usar sarcasmo hiriente como arma defensiva"
      ]
    },
    
    {
      name: "HUIDA",
      subtitle: "Flight Response", 
      icon: "💨",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      description: "Tu sistema nervioso te impulsa a escapar física o emocionalmente de la amenaza",
      
      physicalSigns: [
        "Sensación de energía nerviosa que no puedes controlar",
        "Piernas inquietas, necesidad constante de moverte",
        "Respiración acelerada, como si no pudieras obtener suficiente aire",
        "Sudoración fría, especialmente en palmas y axilas",
        "Sensación de mariposas o nudos en el estómago",
        "Temblores internos, como si vibraras por dentro",
        "Músculos tensos listos para correr o escapar",
        "Mareos o sensación de inestabilidad"
      ],
      
      emotionalSigns: [
        "Ansiedad intensa que se siente como pánico",
        "Miedo abrumador que te paraliza o te hace huir",
        "Sensación de estar atrapada sin salida",
        "Nerviosismo extremo que no puedes controlar",
        "Preocupación obsesiva sobre el futuro",
        "Sensación de peligro inminente constante",
        "Agitación emocional que no puedes calmar",
        "Desesperación por escapar de la situación"
      ],
      
      mentalSigns: [
        "Pensamientos acelerados que no puedes detener",
        "Escenarios catastróficos constantes: '¿Y si...?'",
        "Búsqueda mental obsesiva de rutas de escape",
        "Dificultad para concentrarte en el presente",
        "Pensamientos de que 'algo terrible va a pasar'",
        "Planificación compulsiva de contingencias",
        "Análisis excesivo de todas las posibles amenazas",
        "Pensamientos de que necesitas huir 'ahora mismo'"
      ],
      
      behavioralSigns: [
        "Evitar situaciones, lugares o personas que te generan ansiedad",
        "Cancelar planes a último minuto por 'sensaciones extrañas'",
        "Moverte constantemente: caminar, balancearte, fidgeting",
        "Cambiar de tema cuando la conversación se vuelve incómoda",
        "Buscar salidas físicas en lugares nuevos",
        "Procrastinar en situaciones que requieren enfrentamiento",
        "Hacer múltiples tareas para mantener la mente ocupada",
        "Salir abruptamente de situaciones estresantes",
        "Mantener siempre 'planes B' para poder escapar"
      ]
    },

    {
      name: "PARÁLISIS",
      subtitle: "Freeze Response",
      icon: "🧊", 
      color: "gray",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-800",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
      description: "Tu sistema nervioso se 'apaga' como mecanismo de protección ante la amenaza",
      
      physicalSigns: [
        "Sensación de pesadez extrema, como si fueras de plomo",
        "Músculos que se sienten rígidos o completamente relajados",
        "Respiración muy lenta y superficial",
        "Sensación de frío interno, como si fueras de hielo",
        "Fatiga extrema que no se alivia con descanso",
        "Sensación de desconexión de tu propio cuerpo",
        "Movimientos lentos, como si estuvieras bajo el agua",
        "Entumecimiento físico, pérdida de sensaciones"
      ],
      
      emotionalSigns: [
        "Entumecimiento emocional total, no sientes 'nada'",
        "Sensación de vacío interno profundo",
        "Desconexión emocional de ti misma y otros",
        "Apatía extrema hacia cosas que antes te importaban",
        "Sensación de estar 'fuera de tu cuerpo' observando",
        "Desesperanza profunda, como si nada tuviera sentido",
        "Sensación de estar 'muerta por dentro'",
        "Incapacidad para acceder a cualquier emoción"
      ],
      
      mentalSigns: [
        "Mente en blanco, incapacidad para formar pensamientos",
        "Confusión mental, como si tuvieras niebla en el cerebro",
        "Dificultad extrema para tomar decisiones simples",
        "Sensación de que el tiempo se ha detenido",
        "Pensamientos muy lentos y desorganizados",
        "Incapacidad para planificar o pensar en el futuro",
        "Disociación: sentir que no eres tú misma",
        "Pensamientos de 'no estar realmente aquí'"
      ],
      
      behavioralSigns: [
        "Quedarte inmóvil cuando necesitas actuar",
        "Procrastinación extrema en tareas importantes",
        "Hablar muy poco o con voz monótona",
        "Evitar tomar decisiones, incluso las más simples",
        "Aislarte socialmente de manera extrema",
        "Permanecer en cama o en el sofá por horas",
        "Responder con monosílabos o no responder en absoluto",
        "Realizar movimientos mecánicos sin conciencia",
        "No defender tus límites o necesidades"
      ]
    }
  ];

  const currentState = survivalStates[selectedState];

  const sections = [
    { id: 'physical', title: 'Señales Físicas', icon: <Activity className="w-5 h-5" />, color: 'text-red-600' },
    { id: 'emotional', title: 'Señales Emocionales', icon: <Heart className="w-5 h-5" />, color: 'text-pink-600' },
    { id: 'mental', title: 'Señales Mentales', icon: <Brain className="w-5 h-5" />, color: 'text-blue-600' },
    { id: 'behavioral', title: 'Señales Conductuales', icon: <Eye className="w-5 h-5" />, color: 'text-green-600' }
  ];

  const regulationTechniques = {
    fight: {
      immediate: "Suelta los puños, relaja la mandíbula y exhala lentamente por 8 segundos",
      breathing: "Respiración enfriadora: inhala por la nariz, exhala por la boca como si soplaras una vela",
      grounding: "Presiona tus pies firmemente contra el suelo y cuenta 10 cosas que puedes ver",
      phrase: "Esta rabia es información, no instrucción. Puedo elegir cómo responder."
    },
    flight: {
      immediate: "Detente donde estás, planta tus pies y respira profundamente 3 veces",
      breathing: "Respiración 4-4-4: inhala 4, mantén 4, exhala 4 para calmar el sistema nervioso",
      grounding: "Nombra 5 cosas que ves, 4 que escuchas, 3 que tocas, 2 que hueles, 1 que gustas",
      phrase: "Estoy segura en este momento. No hay peligro real aquí y ahora."
    },
    freeze: {
      immediate: "Mueve suavemente tus dedos de manos y pies para reconectar con tu cuerpo",
      breathing: "Respiración energizante: inhalaciones cortas y rápidas por la nariz",
      grounding: "Toca diferentes texturas a tu alrededor y describe cómo se sienten",
      phrase: "Mi cuerpo está aquí, mi mente está aquí. Puedo moverme cuando esté lista."
    }
  };

  const currentTechniques = regulationTechniques[selectedState === 0 ? 'fight' : selectedState === 1 ? 'flight' : 'freeze'];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Shield className="text-indigo-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Estados de Supervivencia del Sistema Nervioso</h1>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Reconoce cuando tu sistema nervioso autónomo se activa en modo supervivencia: 
          Lucha, Huida o Parálisis. La conciencia es el primer paso hacia la regulación.
        </p>
      </div>

      {/* Alert Box */}
      <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-3">
          <AlertTriangle className="text-indigo-600 mr-3" size={24} />
          <h3 className="text-lg font-semibold text-indigo-800">¿Qué son los Estados de Supervivencia?</h3>
        </div>
        <p className="text-indigo-700 mb-3">
          Son respuestas automáticas de tu sistema nervioso ante amenazas percibidas. Tu cerebro primitivo 
          toma control para protegerte, activando uno de estos tres estados:
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center">
            <Flame className="text-red-500 mr-2" size={20} />
            <div>
              <span className="text-red-700 font-medium block">LUCHA (Fight)</span>
              <span className="text-red-600">Confrontación y agresión</span>
            </div>
          </div>
          <div className="flex items-center">
            <Wind className="text-blue-500 mr-2" size={20} />
            <div>
              <span className="text-blue-700 font-medium block">HUIDA (Flight)</span>
              <span className="text-blue-600">Escape y evitación</span>
            </div>
          </div>
          <div className="flex items-center">
            <Snowflake className="text-gray-500 mr-2" size={20} />
            <div>
              <span className="text-gray-700 font-medium block">PARÁLISIS (Freeze)</span>
              <span className="text-gray-600">Inmovilización y desconexión</span>
            </div>
          </div>
        </div>
      </div>

      {/* State Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {survivalStates.map((state, index) => (
          <button
            key={index}
            onClick={() => setSelectedState(index)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedState === index 
                ? `${state.bgColor} ${state.borderColor} shadow-lg scale-105` 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="text-center">
              <span className="text-4xl mb-3 block">{state.icon}</span>
              <span className={`font-bold text-lg block ${selectedState === index ? state.textColor : 'text-gray-700'}`}>
                {state.name}
              </span>
              <span className={`text-sm ${selectedState === index ? state.textColor : 'text-gray-500'}`}>
                {state.subtitle}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Current State Details */}
      <div className={`${currentState.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentState.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-6xl mr-6">{currentState.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentState.textColor}`}>
              ESTADO: {currentState.name}
            </h2>
            <p className={`text-lg ${currentState.textColor} opacity-80 mt-1`}>{currentState.subtitle}</p>
            <p className="text-gray-600 mt-3 text-lg">{currentState.description}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                className={`w-full p-6 flex items-center justify-between text-left ${currentState.buttonColor} text-white rounded-lg hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center">
                  {section.icon}
                  <span className="ml-3 text-lg font-semibold">{section.title}</span>
                </div>
                {expandedSection === section.id ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              {expandedSection === section.id && (
                <div className="p-6 border-t">
                  <ul className="space-y-3">
                    {currentState[section.id === 'physical' ? 'physicalSigns' : 
                                  section.id === 'emotional' ? 'emotionalSigns' :
                                  section.id === 'mental' ? 'mentalSigns' : 'behavioralSigns'].map((sign, index) => (
                      <li key={index} className="flex items-start">
                        {section.icon}
                        <span className="text-gray-700 ml-3">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Regulation Techniques */}
      <div className={`bg-gradient-to-br ${currentState.bgColor} border-2 ${currentState.borderColor} rounded-xl p-8 mb-8`}>
        <div className="flex items-center mb-6">
          <Shield className={`${currentState.textColor} mr-3`} size={28} />
          <h3 className={`text-2xl font-bold ${currentState.textColor}`}>
            Técnicas de Regulación para {currentState.name}
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Zap className="mr-2" size={20} />
              Intervención Inmediata
            </h4>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
              {currentTechniques.immediate}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Wind className="mr-2" size={20} />
              Técnica de Respiración
            </h4>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
              {currentTechniques.breathing}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Activity className="mr-2" size={20} />
              Grounding (Conexión)
            </h4>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
              {currentTechniques.grounding}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Heart className="mr-2" size={20} />
              Frase de Auto-Regulación
            </h4>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg italic">
              "{currentTechniques.phrase}"
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Protocol */}
      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-amber-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-amber-800">Protocolo Universal de Regulación</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-amber-800 mb-3">Los 5 Pasos RECONECTA:</h4>
            <ol className="list-decimal list-inside space-y-2 text-amber-700">
              <li><strong>RECONOCE:</strong> "Mi sistema nervioso está activado"</li>
              <li><strong>RESPIRA:</strong> 3 respiraciones conscientes y profundas</li>
              <li><strong>RECONECTA:</strong> Con tu cuerpo y el momento presente</li>
              <li><strong>REGISTRA:</strong> ¿Qué necesito ahora?</li>
              <li><strong>RESPONDE:</strong> Elige una acción consciente</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-3">Preguntas de Auto-Regulación:</h4>
            <ul className="space-y-2 text-amber-700">
              <li>• "¿Esto es peligro real o percibido?"</li>
              <li>• "¿Qué necesita mi sistema nervioso ahora?"</li>
              <li>• "¿Cómo puedo crear seguridad en este momento?"</li>
              <li>• "¿Qué haría si me sintiera completamente segura?"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-lg p-6">
        <Shield className="mx-auto text-indigo-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">
          Tus Estados de Supervivencia No Te Definen
        </h3>
        <p className="text-indigo-700 max-w-3xl mx-auto">
          Estos estados son respuestas automáticas y naturales de tu sistema nervioso. No son tu culpa, 
          pero sí puedes aprender a regularlos. Con práctica y compasión hacia ti misma, puedes desarrollar 
          la habilidad de reconocer estos estados y regresar a un lugar de calma y presencia.
        </p>
        <div className="mt-4 text-sm text-indigo-600">
          <strong>Recuerda:</strong> La regulación es una habilidad que se desarrolla con el tiempo. 
          Sé paciente contigo misma en este proceso.
        </div>
      </div>
    </div>
  );
};

export default EstadosSupervivenciaGuia;