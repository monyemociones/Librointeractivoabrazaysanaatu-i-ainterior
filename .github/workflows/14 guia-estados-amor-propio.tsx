import React, { useState } from 'react';
import { Heart, Shield, Eye, Sparkles, ChevronDown, ChevronUp, AlertTriangle, Lightbulb, Star, ArrowRight } from 'lucide-react';

const GuiaAmorPropio = () => {
  const [selectedState, setSelectedState] = useState(0);
  const [expandedSection, setExpandedSection] = useState('description');

  const states = [
    {
      name: "SUPERVIVENCIA",
      subtitle: "El Amor Propio Defensivo",
      icon: "🛡️",
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      buttonColor: "bg-red-500 hover:bg-red-600",
      gradientFrom: "from-red-100",
      gradientTo: "to-orange-100",
      
      description: {
        main: "En este estado, tu amor propio es como un sistema de alarma constante. No es que no te ames, es que tu amor está en modo 'protección extrema'. Cada comportamiento que parece autodestructivo en realidad es un mecanismo desesperado de supervivencia emocional.",
        purpose: "Tu psique está haciendo todo lo posible para mantenerte 'segura' según lo que aprendió en el pasado, aunque esas estrategias ya no te sirvan.",
        recognition: "Puedes estar aquí sin darte cuenta, creyendo que 'así es la vida' o que 'no puedes cambiar'."
      },
      
      behaviors: [
        "Aislarte para evitar ser lastimada (el amor como bunker)",
        "Ser perfecta para evitar críticas (el amor como actuación)",
        "Sabotear relaciones antes de que te abandonen (el amor como control)",
        "Trabajar excesivamente para 'merecer' amor (el amor como transacción)",
        "Complacer a todos para evitar conflictos (el amor como invisibilidad)",
        "Ser agresiva para mantener distancia (el amor como armadura)",
        "Adicciones o comportamientos compulsivos (el amor como anestesia)",
        "Relaciones tóxicas que se sienten 'familiares' (el amor como zona conocida)"
      ],
      
      internalDialogue: [
        "'Si no espero nada, no me pueden decepcionar'",
        "'Es mejor estar sola que sufrir'",
        "'Tengo que ser perfecta para que me acepten'",
        "'Si me voy primero, no me pueden abandonar'",
        "'No puedo confiar en nadie'",
        "'El amor siempre duele'",
        "'Tengo que ganarme el derecho a ser amada'",
        "'Si no siento, no sufro'"
      ],
      
      physicalSigns: [
        "Tensión crónica en hombros y mandíbula",
        "Problemas digestivos (estómago en nudos)",
        "Insomnio o sueño no reparador",
        "Fatiga crónica por estar siempre 'en guardia'",
        "Dolores de cabeza frecuentes",
        "Sistema inmune debilitado",
        "Respiración superficial constante",
        "Adicción a adrenalina o necesidad de drama"
      ],
      
      compassion: "En supervivencia, tu amor propio es como una madre desesperada protegiendo a su hijo en una zona de guerra. Puede parecer extremo, pero está haciendo lo mejor que puede con las herramientas que tiene. Honra esta parte tuya que ha luchado tanto por mantenerte con vida."
    },
    
    {
      name: "CONSCIENCIA", 
      subtitle: "El Amor Propio Despierto",
      icon: "👁️",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800", 
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      gradientFrom: "from-blue-100",
      gradientTo: "to-indigo-100",
      
      description: {
        main: "Este es el momento del despertar. Empiezas a ver tus patrones sin juzgarlos, como un observador amoroso de tu propia vida. Es el estado donde 'te das cuenta de que te das cuenta'. Aquí comienza la verdadera transformación.",
        purpose: "Desarrollar la capacidad de observarte con compasión y hacer elecciones conscientes en lugar de reaccionar automáticamente.",
        recognition: "Sientes una mezcla de alivio ('no estoy loca') y responsabilidad ('ahora sé que puedo elegir diferente')."
      },
      
      behaviors: [
        "Pausar antes de reaccionar automáticamente",
        "Cuestionar tus pensamientos: '¿esto es real o es mi herida hablando?'",
        "Establecer límites con amor pero firmeza",
        "Elegir relaciones más sanas, aunque se sientan 'raras' al principio",
        "Practicar la autocompasión cuando cometes errores",
        "Decir 'no' sin culpa excesiva",
        "Buscar ayuda profesional o apoyo consciente",
        "Crear rutinas que nutran tu bienestar real"
      ],
      
      internalDialogue: [
        "'Me doy cuenta de que estoy repitiendo un patrón'",
        "'¿Qué necesito realmente en este momento?'",
        "'Puedo elegir una respuesta diferente esta vez'",
        "'Mi herida está activada, pero no soy mi herida'",
        "'Merezco amor incondicional, empezando por el mío'",
        "'Está bien sentir miedo mientras actúo con amor'",
        "'Puedo aprender de esto sin castigarme'",
        "'Mi pasado no define mi futuro'"
      ],
      
      physicalSigns: [
        "Respiración más profunda y consciente",
        "Momentos de relajación genuina",
        "Mayor conexión con las sensaciones corporales",
        "Energía más estable (menos altibajos extremos)",
        "Mejor calidad de sueño gradualmente",
        "Digestión que mejora con el manejo del estrés",
        "Postura más erguida y presencia más fuerte",
        "Sensación de 'despertar' en el cuerpo"
      ],
      
      compassion: "En consciencia, tu amor propio es como un jardinero sabio que ve tanto las flores como las malezas, y sabe que ambas son parte del proceso de crecimiento. Aquí desarrollas la paciencia amorosa contigo misma mientras aprendes nuevas formas de ser."
    },

    {
      name: "SANACIÓN",
      subtitle: "El Amor Propio Integrado", 
      icon: "✨",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600", 
      gradientFrom: "from-purple-100",
      gradientTo: "to-pink-100",
      
      description: {
        main: "Este es el estado donde permites sentir para sanar. Ya no huyes del dolor, sino que lo abrazas como información valiosa. Aquí reparas activamente tus heridas, no solo las reconoces. Es donde la verdadera transformación sucede.",
        purpose: "Integrar todas las partes de ti con amor incondicional y crear una relación profundamente amorosa contigo misma.",
        recognition: "Sientes una paz profunda incluso en medio de la sanación. Sabes que eres capaz de sostenerte a ti misma en cualquier experiencia."
      },
      
      behaviors: [
        "Permitir que las emociones fluyan sin resistencia",
        "Hacer terapia de trauma o trabajo corporal profundo",
        "Crear rituales de sanación y conexión contigo misma",
        "Expresar tu verdad auténtica incluso cuando es incómoda",
        "Nutrir tu niña interior con paciencia infinita",
        "Celebrar tus progresos, por pequeños que sean",
        "Rodearte de relaciones genuinamente amorosas",
        "Vivir alineada con tus valores más profundos"
      ],
      
      internalDialogue: [
        "'Confío en mi proceso de sanación'",
        "'Todas mis emociones son bienvenidas aquí'",
        "'Soy digna de amor incondicional'",
        "'Mi sensibilidad es un regalo, no un defecto'",
        "'Puedo sostener mi dolor y mi alegría simultáneamente'",
        "'Soy mi propia mejor amiga y protectora'",
        "'Mi historia es sagrada y tiene propósito'",
        "'Elijo el amor una y otra vez, especialmente hacia mí'"
      ],
      
      physicalSigns: [
        "Sensación de arraigo y presencia en tu cuerpo",
        "Llorar de liberación (diferente al llanto de desesperación)",
        "Momentos de éxtasis o conexión espiritual profunda",
        "Energía vital que fluye libremente",
        "Sueños reveladores y sanadores",
        "Intuición corporal muy desarrollada",
        "Capacidad de relajación profunda",
        "Irradiación natural de calidez y presencia"
      ],
      
      compassion: "En sanación, tu amor propio es como una madre divina que sostiene a su hijo mientras atraviesa tanto la tormenta como la calma. Aquí comprendes que el amor verdadero incluye todo: la luz y la sombra, el dolor y la alegría, la vulnerabilidad y la fortaleza."
    }
  ];

  const currentState = states[selectedState];

  const sections = [
    { id: 'description', title: 'Descripción del Estado', icon: <Eye className="w-5 h-5" /> },
    { id: 'behaviors', title: 'Comportamientos Típicos', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'dialogue', title: 'Diálogo Interno', icon: <Heart className="w-5 h-5" /> },
    { id: 'physical', title: 'Señales Físicas', icon: <Shield className="w-5 h-5" /> },
    { id: 'compassion', title: 'Mensaje de Compasión', icon: <Sparkles className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-rose-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-rose-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Los 3 Estados del Amor Propio</h1>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Un viaje de autocompasión desde la supervivencia hasta la sanación profunda. 
          Cada estado es sagrado y necesario en tu proceso de despertar al amor incondicional hacia ti misma.
        </p>
      </div>

      {/* Progress Flow */}
      <div className="flex items-center justify-center mb-8 overflow-x-auto">
        <div className="flex items-center space-x-4 min-w-max">
          {states.map((state, index) => (
            <div key={index} className="flex items-center">
              <div 
                className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedState === index 
                    ? `${state.bgColor} ${state.borderColor} shadow-lg scale-105` 
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedState(index)}
              >
                <span className="text-2xl mb-2">{state.icon}</span>
                <span className={`font-semibold text-sm text-center ${selectedState === index ? state.textColor : 'text-gray-700'}`}>
                  {state.name}
                </span>
                <span className={`text-xs text-center mt-1 ${selectedState === index ? state.textColor : 'text-gray-500'}`}>
                  {state.subtitle}
                </span>
              </div>
              {index < states.length - 1 && (
                <ArrowRight className="text-gray-400 mx-2" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current State Display */}
      <div className={`bg-gradient-to-r ${currentState.gradientFrom} ${currentState.gradientTo} rounded-2xl p-8 mb-8 border-2 ${currentState.borderColor} shadow-lg`}>
        <div className="flex items-center mb-6">
          <span className="text-6xl mr-6">{currentState.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentState.textColor}`}>
              {currentState.name}
            </h2>
            <p className={`text-lg ${currentState.textColor} opacity-80 mt-1`}>
              {currentState.subtitle}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                className={`w-full p-6 flex items-center justify-between text-left ${currentState.buttonColor} text-white hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center">
                  {section.icon}
                  <span className="ml-3 text-lg font-semibold">{section.title}</span>
                </div>
                {expandedSection === section.id ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              {expandedSection === section.id && (
                <div className="p-6 border-t">
                  {section.id === 'description' && (
                    <div className="space-y-4">
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <h4 className="font-semibold text-indigo-800 mb-3">💫 ¿Qué es este estado?</h4>
                        <p className="text-indigo-700 leading-relaxed">{currentState.description.main}</p>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <h4 className="font-semibold text-emerald-800 mb-3">🎯 Propósito evolutivo:</h4>
                        <p className="text-emerald-700 leading-relaxed">{currentState.description.purpose}</p>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <h4 className="font-semibold text-amber-800 mb-3">🔍 Cómo reconocerlo:</h4>
                        <p className="text-amber-700 leading-relaxed">{currentState.description.recognition}</p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'behaviors' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Formas en que se manifiesta el amor propio en este estado:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentState.behaviors.map((behavior, index) => (
                          <div key={index} className="flex items-start bg-gray-50 rounded-lg p-3">
                            <span className={`${currentState.textColor} mr-3 mt-1 font-bold`}>•</span>
                            <span className="text-gray-700 text-sm leading-relaxed">{behavior}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'dialogue' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Pensamientos y creencias características de este estado:
                      </p>
                      <div className="space-y-3">
                        {currentState.internalDialogue.map((thought, index) => (
                          <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-300">
                            <span className="text-gray-700 italic">"{thought}"</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'physical' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Tu cuerpo también refleja tu estado de amor propio:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentState.physicalSigns.map((sign, index) => (
                          <div key={index} className="flex items-start bg-blue-50 rounded-lg p-3">
                            <span className="text-blue-500 mr-3 mt-1">⚡</span>
                            <span className="text-blue-800 text-sm leading-relaxed">{sign}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 bg-blue-100 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 text-sm">
                          <strong>Recuerda:</strong> Tu cuerpo es tu aliado en la sanación. Escucha sus mensajes con amor y paciencia.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'compassion' && (
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Sparkles className="text-rose-500 mr-2" size={24} />
                        <h4 className="font-semibold text-rose-800">Mensaje de Amor y Compasión</h4>
                      </div>
                      <p className="text-rose-700 leading-relaxed text-lg">
                        {currentState.compassion}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Hints */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-red-200">
          <div className="flex items-center mb-2">
            <Shield className="text-red-500 mr-2" size={20} />
            <span className="font-semibold text-red-800">Si estás en Supervivencia</span>
          </div>
          <p className="text-red-700 text-sm">
            Honra tu resistencia. Has sobrevivido a tanto. Ahora puedes empezar a preguntarte: "¿Qué necesito para sentirme segura mientras exploro nuevas formas de amarme?"
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex items-center mb-2">
            <Eye className="text-blue-500 mr-2" size={20} />
            <span className="font-semibold text-blue-800">Si estás en Consciencia</span>
          </div>
          <p className="text-blue-700 text-sm">
            Celebra tu despertar. Ver tus patrones es el primer paso hacia la libertad. Sé paciente contigo mientras practiques nuevas respuestas.
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-purple-200">
          <div className="flex items-center mb-2">
            <Sparkles className="text-purple-500 mr-2" size={20} />
            <span className="font-semibold text-purple-800">Si estás en Sanación</span>
          </div>
          <p className="text-purple-700 text-sm">
            Confía en tu proceso. Cada lágrima, cada momento de alegría, cada respiración profunda te está sanando a niveles que ni imaginas.
          </p>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center bg-gradient-to-r from-rose-100 to-purple-100 border border-rose-200 rounded-lg p-8">
        <Heart className="mx-auto text-rose-500 mb-4" size={40} />
        <h3 className="text-2xl font-semibold text-rose-800 mb-4">
          Tu Viaje es Sagrado
        </h3>
        <p className="text-rose-700 max-w-3xl mx-auto leading-relaxed">
          No hay un estado "mejor" que otro. Cada uno tiene su sabiduría y su propósito. 
          Puedes moverte entre ellos, y eso está bien. Lo importante es que ahora tienes consciencia 
          de dónde estás y hacia dónde quieres dirigir tu amor. 
        </p>
        <p className="text-rose-600 mt-4 font-medium">
          El amor propio no es un destino, es un viaje de toda la vida. Y tú ya estás en camino. 💕
        </p>
      </div>
    </div>
  );
};

export default GuiaAmorPropio;