import React, { useState } from 'react';
import { Brain, Zap, Target, Repeat, ChevronDown, ChevronUp, Activity, Atom, Lightbulb, CheckCircle } from 'lucide-react';

const SanacionCuantica = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('quantum');
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const wounds = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      quantumPrinciple: {
        title: "Principio de Entrelazamiento Cuántico",
        description: "En física cuántica, las partículas pueden estar entrelazadas independientemente de la distancia. Tu cerebro puede crear nuevas conexiones neuronales que no dependan de la presencia física de otros para generar sensaciones de seguridad y amor.",
        application: "Reprogramar las redes neuronales asociadas con el apego para crear seguridad interna independiente."
      },
      
      neuroplasticity: [
        "Ejercicio de Coherencia Cardíaca: 5 minutos diarios de respiración 5-5-5 (inhalar 5, mantener 5, exhalar 5) para regular el sistema nervioso autónomo",
        "Visualización de Redes Neuronales: Imagina nuevas conexiones cerebrales formándose cada vez que te das amor propio",
        "Ancoraje Corporal: Identifica una sensación física de seguridad y actívala conscientemente 3 veces al día",
        "Reescritura de Memoria: Escribe la historia de abandono desde la perspectiva de tu yo adulto empoderado"
      ],
      
      cognitiveRestructuring: [
        "Patrón Viejo: 'Todos me abandonan' → Patrón Nuevo: 'Yo soy mi constante más confiable'",
        "Patrón Viejo: 'No valgo la pena' → Patrón Nuevo: 'Mi valor es inherente e incondicional'",
        "Patrón Viejo: 'Necesito a otros para sentirme completa' → Patrón Nuevo: 'Soy completa por mí misma y elijo compartir desde la abundancia'",
        "Patrón Viejo: 'El amor significa dependencia' → Patrón Nuevo: 'El amor verdadero es libertad mutua'"
      ],
      
      dailyProtocol: [
        "06:00 - Meditación de coherencia cuántica (10 min): Sincronizar ondas cerebrales con respiración consciente",
        "12:00 - Micro-intervención: Preguntarte '¿Qué necesito ahora?' y dártelo",
        "18:00 - Ejercicio de presencia: 5 minutos sintiendo tu cuerpo como ancla de seguridad",
        "21:00 - Reprogramación nocturna: Repetir afirmaciones mientras entras en estado theta (somnolencia)"
      ],
      
      measurableResults: [
        "Semana 1-2: Reducción del 30% en pensamientos automáticos de abandono",
        "Semana 3-4: Mejora en la capacidad de estar sola sin ansiedad",
        "Semana 5-6: Aumento en comportamientos de autocuidado sin culpa",
        "Semana 7-8: Desarrollo de relaciones más equilibradas y menos dependientes"
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
      
      quantumPrinciple: {
        title: "Principio de Colapso de Función de Onda",
        description: "En mecánica cuántica, el observador afecta la realidad observada. Tu autoobservación consciente puede colapsar las probabilidades de rechazo hacia probabilidades de aceptación total.",
        application: "Convertirte en tu propio observador consciente que valida tu experiencia interna."
      },
      
      neuroplasticity: [
        "Espejo Neuronal Positivo: Mírate en el espejo 2 minutos diarios diciendo 'Te acepto completamente'",
        "Reconfiguración del Córtex Prefrontal: Anota 3 cualidades tuyas diariamente activando circuitos de autovaloración",
        "Desensibilización Sistemática: Exponerte gradualmente a situaciones de posible 'rechazo' con respiración consciente",
        "Creación de Memorias Positivas: Recordar momentos de aceptación mientras activas estados de coherencia cardíaca"
      ],
      
      cognitiveRestructuring: [
        "Patrón Viejo: 'Hay algo malo conmigo' → Patrón Nuevo: 'Soy exactamente como necesito ser para mi evolución'",
        "Patrón Viejo: 'Debo ser perfecta para ser amada' → Patrón Nuevo: 'Mi imperfección es parte de mi humanidad hermosa'",
        "Patrón Viejo: 'La crítica define mi valor' → Patrón Nuevo: 'Solo mi autoevaluación consciente tiene peso real'",
        "Patrón Viejo: 'Necesito aprobación externa' → Patrón Nuevo: 'Mi aprobación interna es mi brújula'"
      ],
      
      dailyProtocol: [
        "06:30 - Activación de autocompasión: Mano en el corazón, 'Soy digna de amor exactamente como soy'",
        "12:30 - Pausa de validación: Reconocer una decisión o pensamiento tuyo sin buscar confirmación externa",
        "18:30 - Ejercicio de límites: Decir 'no' a algo que no resuene contigo",
        "21:30 - Celebración neuronal: Reconocer 3 momentos del día donde te aceptaste"
      ],
      
      measurableResults: [
        "Semana 1-2: Disminución del 40% en búsqueda de validación externa",
        "Semana 3-4: Aumento en expresión auténtica de opiniones",
        "Semana 5-6: Mejora en tolerancia a la crítica sin colapso emocional",
        "Semana 7-8: Desarrollo de criterios internos sólidos para decisiones"
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
      
      quantumPrinciple: {
        title: "Principio de Superposición Cuántica",
        description: "Las partículas pueden existir en múltiples estados simultáneamente hasta ser observadas. Tu trauma puede existir en superposición: como experiencia pasada Y como sabiduría presente, coexistiendo sin contradicción.",
        application: "Integrar la experiencia traumática como información valiosa sin que defina tu identidad presente."
      },
      
      neuroplasticity: [
        "Regulación del Sistema Nervioso: Técnica de 'Viento de Calma' - 4 segundos inhalar, 7 mantener, 8 exhalar",
        "Fortalecimiento del Córtex Prefrontal: Ejercicios de toma de decisiones conscientes 5 veces al día",
        "Reconfiguración de Amígdala: Exposición gradual a sensaciones de seguridad con anclaje corporal",
        "Creación de Nuevos Circuitos: Practicar decir 'NO' en situaciones seguras para fortalecer límites neuronales"
      ],
      
      cognitiveRestructuring: [
        "Patrón Viejo: 'Merezco ser lastimada' → Patrón Nuevo: 'Merezco respeto y trato digno siempre'",
        "Patrón Viejo: 'El amor duele' → Patrón Nuevo: 'El amor verdadero es seguro y nutriente'",
        "Patrón Viejo: 'No puedo protegerme' → Patrón Nuevo: 'Tengo poder personal y límites claros'",
        "Patrón Viejo: 'Soy responsable del abuso' → Patrón Nuevo: 'Soy responsable de mi sanación, no del daño recibido'"
      ],
      
      dailyProtocol: [
        "07:00 - Activación de seguridad: Escaneo corporal identificando sensaciones de protección",
        "13:00 - Ejercicio de poder personal: Tomar una decisión basada en tus necesidades",
        "19:00 - Fortalecimiento de límites: Identificar y comunicar un límite claramente",
        "22:00 - Reprogramación de seguridad: Visualizar tu espacio personal como un campo de fuerza"
      ],
      
      measurableResults: [
        "Semana 1-2: Mejora del 50% en detección de señales de alarma",
        "Semana 3-4: Aumento en capacidad de establecer límites sin culpa",
        "Semana 5-6: Reducción significativa en tolerancia a comportamientos irrespetuosos",
        "Semana 7-8: Desarrollo de relaciones basadas en respeto mutuo"
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
      
      quantumPrinciple: {
        title: "Principio de Incertidumbre de Heisenberg",
        description: "No podemos conocer simultáneamente la posición y velocidad de una partícula. Similarmente, no podemos controlar completamente las circunstancias externas Y nuestra respuesta interna. Al elegir conscientemente nuestra respuesta, creamos nuestra realidad.",
        application: "Enfocar la energía en lo que sí puedes controlar: tu percepción y respuesta interna."
      },
      
      neuroplasticity: [
        "Fortalecimiento de la Corteza Prefrontal: Ejercicios diarios de análisis objetivo de situaciones",
        "Regulación del Sistema Límbico: Técnicas de distanciamiento emocional para evaluar situaciones",
        "Creación de Nuevos Circuitos de Justicia: Practicar reconocer tu verdad interna sin validación externa",
        "Reconexión con Intuición: Ejercicios corporales para distinguir entre reacción emocional y sabiduría intuitiva"
      ],
      
      cognitiveRestructuring: [
        "Patrón Viejo: 'Mi realidad no es válida' → Patrón Nuevo: 'Mi experiencia es válida independientemente de la opinión externa'",
        "Patrón Viejo: 'Debo convencer a otros de mi verdad' → Patrón Nuevo: 'Mi verdad es suficiente para mí'",
        "Patrón Viejo: 'Las situaciones injustas me definen' → Patrón Nuevo: 'Mi respuesta a las situaciones me define'",
        "Patrón Viejo: 'No tengo poder ante la injusticia' → Patrón Nuevo: 'Tengo poder total sobre mi respuesta interna'"
      ],
      
      dailyProtocol: [
        "07:30 - Validación interna: Reconocer tu experiencia sin necesidad de explicarla a otros",
        "13:30 - Ejercicio de discernimiento: Distinguir entre hechos objetivos y interpretaciones emocionales",
        "19:30 - Práctica de justicia personal: Defenderte en una situación pequeña pero clara",
        "22:30 - Reprogramación de poder: Visualizar tu capacidad de respuesta consciente"
      ],
      
      measurableResults: [
        "Semana 1-2: Aumento del 60% en confianza en tu percepción interna",
        "Semana 3-4: Reducción en necesidad de validación externa de tu experiencia",
        "Semana 5-6: Mejora en capacidad de defenderte sin agresividad",
        "Semana 7-8: Desarrollo de criterios internos sólidos para evaluar situaciones"
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
      
      quantumPrinciple: {
        title: "Principio de Complementaridad",
        description: "Las partículas pueden exhibir propiedades aparentemente contradictorias dependiendo de cómo se observen. Tu dignidad y tus errores pueden coexistir sin cancelarse mutuamente.",
        application: "Integrar la totalidad de tu experiencia humana sin que ningún aspecto anule tu valor inherente."
      },
      
      neuroplasticity: [
        "Fortalecimiento de la Autoestima Neural: Práctica diaria de reconocimiento de logros pequeños",
        "Reprogramación de Memoria Emocional: Reescribir experiencias de humillación desde tu poder adulto",
        "Activación de Circuitos de Dignidad: Posturas corporales de confianza durante 2 minutos cada 4 horas",
        "Creación de Nuevas Asociaciones: Practicar estar en el centro de atención de manera positiva"
      ],
      
      cognitiveRestructuring: [
        "Patrón Viejo: 'Soy ridícula' → Patrón Nuevo: 'Soy humana y perfectamente imperfecta'",
        "Patrón Viejo: 'Mis errores me definen' → Patrón Nuevo: 'Mis errores son oportunidades de crecimiento'",
        "Patrón Viejo: 'No merezco respeto' → Patrón Nuevo: 'Mi dignidad es incondicional'",
        "Patrón Viejo: 'Debo esconderme' → Patrón Nuevo: 'Tengo derecho a ocupar espacio'"
      ],
      
      dailyProtocol: [
        "08:00 - Activación de dignidad: Postura erguida, respiración profunda, 'Soy digna de respeto'",
        "14:00 - Ejercicio de visibilidad: Hacer algo que te haga visible de manera positiva",
        "20:00 - Celebración de humanidad: Reconocer un 'error' como parte de tu crecimiento",
        "23:00 - Reprogramación de presencia: Visualizarte ocupando espacio con gracia"
      ],
      
      measurableResults: [
        "Semana 1-2: Reducción del 70% en autocrítica destructiva",
        "Semana 3-4: Aumento en participación activa en conversaciones",
        "Semana 5-6: Mejora en tolerancia a ser el centro de atención",
        "Semana 7-8: Desarrollo de presencia segura y dignificada"
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
      
      quantumPrinciple: {
        title: "Principio de No-Localidad Cuántica",
        description: "Las partículas entrelazadas se afectan instantáneamente sin importar la distancia. Tu capacidad de confiar no depende de las acciones de otros, sino de tu conexión con tu sabiduría interna.",
        application: "Desarrollar confianza basada en tu intuición y discernimiento, no en la 'prueba' de otros."
      },
      
      neuroplasticity: [
        "Fortalecimiento de Circuitos Intuitivos: Práctica diaria de escuchar sensaciones corporales antes de decidir",
        "Reprogramación de Confianza: Ejercicios de confianza en ti misma en situaciones de bajo riesgo",
        "Activación de Discernimiento: Análisis consciente de inconsistencias entre palabras y acciones",
        "Creación de Nuevos Patrones de Apertura: Práctica gradual de vulnerabilidad consciente"
      ],
      
      cognitiveRestructuring: [
        "Patrón Viejo: 'No puedo confiar en nadie' → Patrón Nuevo: 'Puedo confiar en mi capacidad de discernir'",
        "Patrón Viejo: 'Todos me van a traicionar' → Patrón Nuevo: 'Elijo conscientemente en quién confiar'",
        "Patrón Viejo: 'Soy tonta por confiar' → Patrón Nuevo: 'Mi capacidad de confiar es una fortaleza'",
        "Patrón Viejo: 'Debo protegerme cerrándome' → Patrón Nuevo: 'Me protejo siendo consciente y selectiva'"
      ],
      
      dailyProtocol: [
        "08:30 - Conexión con intuición: 5 minutos sintiendo tu sabiduría corporal",
        "14:30 - Ejercicio de discernimiento: Evaluar la congruencia entre palabras y acciones en una interacción",
        "20:30 - Práctica de confianza: Dar un paso pequeño de confianza basado en evidencia",
        "23:30 - Reprogramación de apertura: Visualizar relaciones basadas en confianza mutua"
      ],
      
      measurableResults: [
        "Semana 1-2: Mejora del 80% en detección de inconsistencias",
        "Semana 3-4: Aumento en capacidad de confiar de manera selectiva",
        "Semana 5-6: Reducción en hipervigilancia sin perder discernimiento",
        "Semana 7-8: Desarrollo de relaciones basadas en confianza gradual y consciente"
      ]
    }
  ];

  const currentWound = wounds[selectedWound];

  const sections = [
    { id: 'quantum', title: 'Principio Cuántico', icon: <Atom className="w-5 h-5" /> },
    { id: 'neuroplasticity', title: 'Reprogramación Neuronal', icon: <Brain className="w-5 h-5" /> },
    { id: 'cognitive', title: 'Reestructuración Cognitiva', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'protocol', title: 'Protocolo Diario', icon: <Target className="w-5 h-5" /> },
    { id: 'results', title: 'Resultados Medibles', icon: <Activity className="w-5 h-5" /> }
  ];

  const toggleExercise = (exerciseId) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(exerciseId)) {
      newCompleted.delete(exerciseId);
    } else {
      newCompleted.add(exerciseId);
    }
    setCompletedExercises(newCompleted);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Zap className="text-blue-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Sanación Cuántica de Heridas Emocionales</h1>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Protocolos científicos basados en neuroplasticidad, física cuántica y psicología cognitiva para la transformación profunda de patrones emocionales.
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {wounds.map((wound, index) => (
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

      {/* Current Wound Display */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              SANACIÓN CUÁNTICA: {currentWound.name}
            </h2>
            <p className="text-gray-600 mt-2">Protocolo de transformación neuronal</p>
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
                  {section.id === 'quantum' && (
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                          <Atom className="w-4 h-4 mr-2" />
                          {currentWound.quantumPrinciple.title}
                        </h4>
                        <p className="text-blue-700 mb-3">{currentWound.quantumPrinciple.description}</p>
                        <div className="bg-blue-100 rounded p-3">
                          <strong className="text-blue-800">Aplicación Práctica:</strong>
                          <p className="text-blue-700 mt-1">{currentWound.quantumPrinciple.application}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'neuroplasticity' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Ejercicios específicos para crear nuevos circuitos neurales:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.neuroplasticity.map((exercise, index) => {
                          const exerciseId = `${selectedWound}-neuro-${index}`;
                          return (
                            <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                              <button
                                onClick={() => toggleExercise(exerciseId)}
                                className={`mr-3 mt-1 transition-colors ${
                                  completedExercises.has(exerciseId) 
                                    ? 'text-green-500' 
                                    : 'text-gray-400 hover:text-green-500'
                                }`}
                              >
                                <CheckCircle className="w-5 h-5" />
                              </button>
                              <span className={`text-gray-700 ${
                                completedExercises.has(exerciseId) ? 'line-through opacity-75' : ''
                              }`}>
                                {exercise}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  
                  {section.id === 'cognitive' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Reprogramación de patrones de pensamiento:
                      </p>
                      <div className="space-y-4">
                        {currentWound.cognitiveRestructuring.map((pattern, index) => (
                          <div key={index} className="bg-gradient-to-r from-red-50 to-green-50 p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <span className="text-red-700 font-medium">
                                  {pattern.split(' → ')[0]}
                                </span>
                                <div className="flex items-center my-2">
                                  <div className="flex-1 h-px bg-gradient-to-r from-red-300 to-green-300"></div>
                                  <Repeat className="w-4 h-4 mx-2 text-gray-500" />
                                  <div className="flex-1 h-px bg-gradient-to-r from-red-300 to-green-300"></div>
                                </div>
                                <span className="text-green-700 font-medium">
                                  {pattern.split(' → ')[1]}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'protocol' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Rutina diaria de transformación (21 días mínimo para crear nuevos hábitos neurales):
                      </p>
                      <div className="space-y-3">
                        {currentWound.dailyProtocol.map((activity, index) => {
                          const activityId = `${selectedWound}-protocol-${index}`;
                          return (
                            <div key={index} className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-200">
                              <button
                                onClick={() => toggleExercise(activityId)}
                                className={`mr-3 mt-1 transition-colors ${
                                  completedExercises.has(activityId) 
                                    ? 'text-green-500' 
                                    : 'text-gray-400 hover:text-green-500'
                                }`}
                              >
                                <CheckCircle className="w-5 h-5" />
                              </button>
                              <div className="flex-1">
                                <span className={`font-mono text-sm ${currentWound.textColor} ${
                                  completedExercises.has(activityId) ? 'line-through opacity-75' : ''
                                }`}>
                                  {activity.split(' - ')[0]}
                                </span>
                                <p className={`text-gray-700 mt-1 ${
                                  completedExercises.has(activityId) ? 'line-through opacity-75' : ''
                                }`}>
                                  {activity.split(' - ')[1]}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'results' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Indicadores cuantificables de progreso:
                      </p>
                      <div className="space-y-3">
                        {currentWound.measurableResults.map((result, index) => (
                          <div key={index} className="flex items-start bg-green-50 border border-green-200 p-4 rounded-lg">
                            <Activity className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-green-800">
                                {result.split(':')[0]}:
                              </span>
                              <span className="text-green-700 ml-1">
                                {result.split(':')[1]}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">📊 Método de Seguimiento:</h4>
                        <p className="text-blue-700 text-sm">
                          Lleva un registro diario del 1-10 de intensidad de los síntomas. 
                          La neuroplasticidad requiere repetición consciente durante 21-66 días para crear cambios permanentes.
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

      {/* Progress Tracker */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Progreso de Hoy
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Ejercicios completados: {completedExercises.size}
          </span>
          <div className="flex space-x-2">
            {Array.from({ length: Math.min(completedExercises.size, 10) }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Scientific Note */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start">
          <Brain className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">
              Base Científica del Protocolo
            </h3>
            <p className="text-indigo-700 text-sm mb-3">
              Este protocolo combina principios de neuroplasticidad (capacidad del cerebro de reorganizarse), 
              coherencia cardíaca (sincronización entre corazón y cerebro), y mecánica cuántica aplicada a la consciencia 
              para crear cambios medibles en patrones emocionales.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3 rounded border border-indigo-100">
                <strong className="text-indigo-800">Neuroplasticidad:</strong>
                <p className="text-indigo-600 mt-1">21-66 días de repetición consciente crean nuevas conexiones neuronales permanentes.</p>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-100">
                <strong className="text-indigo-800">Coherencia Cardíaca:</strong>
                <p className="text-indigo-600 mt-1">La sincronización corazón-cerebro optimiza la toma de decisiones y regulación emocional.</p>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-100">
                <strong className="text-indigo-800">Física Cuántica:</strong>
                <p className="text-indigo-600 mt-1">La observación consciente colapsa probabilidades hacia realidades deseadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanacionCuantica;