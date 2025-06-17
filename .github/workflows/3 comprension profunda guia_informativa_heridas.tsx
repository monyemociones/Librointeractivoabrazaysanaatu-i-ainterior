import React, { useState } from 'react';
import { BookOpen, Eye, Heart, AlertTriangle, Lightbulb, ChevronDown, ChevronUp, Star, Shield } from 'lucide-react';

const GuiaHeridas = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('origin');

  const wounds = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      origin: {
        spiritual: "A nivel espiritual, el alma eligió experimentar la separación para aprender sobre el amor incondicional hacia sí misma. Esta herida enseña que el amor verdadero no depende de la presencia física de otros, sino de la conexión profunda contigo misma.",
        purpose: "Desarrollar la independencia emocional y la capacidad de auto-sustentarte emocionalmente."
      },
      
      simpleActions: [
        "Un padre que trabajaba demasiado y nunca estaba presente emocionalmente",
        "Ser dejada con cuidadores constantemente sin explicación",
        "Padres que se iban de casa por períodos largos sin comunicación clara",
        "Un cuidador que amenazaba con irse cuando te portabas 'mal'",
        "Ser enviada a casa de familiares sin entender por qué",
        "Padres que se ausentaban emocionalmente durante conflictos familiares"
      ],
      
      severeActions: [
        "Abandono físico real (ser dejada en instituciones, con familiares permanentemente)",
        "Muerte temprana de un cuidador principal sin apoyo emocional adecuado",
        "Padres con adicciones que los hacían completamente ausentes",
        "Divorcio traumático donde un padre desaparece completamente",
        "Negligencia severa donde las necesidades básicas no eran atendidas",
        "Hospitalización larga sin visitas o explicaciones"
      ],
      
      victimMentality: [
        "Creer que 'todos me van a abandonar eventualmente'",
        "Sabotear relaciones antes de que el otro se vaya",
        "Volverse extremadamente dependiente o extremadamente independiente",
        "Buscar constantemente pruebas de amor y compromiso",
        "Interpretar cualquier ausencia como abandono personal",
        "Desarrollar ansiedad de separación en relaciones adultas"
      ],
      
      unconsciousPatterns: [
        "Atraer parejas emocionalmente no disponibles",
        "Terminar relaciones abruptamente por miedo al abandono",
        "Acumular objetos o dinero como 'seguridad'",
        "Evitar comprometerse profundamente con personas o proyectos",
        "Trabajar excesivamente para 'ganarse' el derecho a ser amada",
        "Desarrollar múltiples 'planes de escape' en cada situación"
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
      
      origin: {
        spiritual: "El alma experimentó el rechazo para aprender sobre la aceptación incondicional de sí misma. Esta herida enseña que tu valor no depende de la aprobación externa, sino de tu conexión con tu esencia divina.",
        purpose: "Desarrollar una autoestima inquebrantable que no dependa de la validación externa."
      },
      
      simpleActions: [
        "Comentarios constantes sobre tu apariencia: 'estás muy flaca/gorda'",
        "Comparaciones con hermanos o primos: 'por qué no puedes ser como...'",
        "Críticas a tu personalidad: 'eres muy sensible/dramática'",
        "Burlas sobre tus intereses o pasiones",
        "Ser excluida de actividades familiares sin explicación",
        "Gestos de desaprobación constantes (suspiros, ojos en blanco)"
      ],
      
      severeActions: [
        "Rechazo explícito: 'no te quería', 'fuiste un error'",
        "Favoritismo extremo hacia otros hermanos",
        "Amenazas de dar en adopción o 'devolverte'",
        "Críticas destructivas sobre aspectos que no puedes cambiar",
        "Exclusión sistemática de eventos familiares importantes",
        "Rechazo basado en género: 'quería un niño, no una niña'"
      ],
      
      victimMentality: [
        "Creer que 'hay algo fundamentalmente malo conmigo'",
        "Buscar constantemente aprobación y validación externa",
        "Evitar situaciones donde podrías ser juzgada",
        "Perfectcionismo extremo para 'merecer' ser aceptada",
        "Minimizarte para no 'molestar' a otros",
        "Creer que tu valor depende de tu desempeño"
      ],
      
      unconsciousPatterns: [
        "Rechazarte a ti misma antes de que otros lo hagan",
        "Buscar relaciones con personas críticas o emocionalmente frías",
        "Cambiar tu personalidad según con quién estés",
        "Evitar expresar tus verdaderas opiniones o necesidades",
        "Sobre-esforzarte en todo para 'compensar' tu 'defecto'",
        "Interpretar la neutralidad como rechazo"
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
      
      origin: {
        spiritual: "A nivel del alma, esta experiencia enseña sobre el poder personal y los límites sagrados. El alma aprende a distinguir entre amor verdadero y manipulación, desarrollando una compasión profunda y la capacidad de proteger su energía.",
        purpose: "Desarrollar límites sanos, intuición poderosa y la capacidad de reconocer y crear relaciones verdaderamente amorosas."
      },
      
      simpleActions: [
        "Gritos constantes y desproporcionados por errores menores",
        "Castigos físicos como pellizcos, jalones de cabello, nalgadas",
        "Amenazas verbales: 'te voy a dar en adopción', 'no te quiero'",
        "Ridiculización pública de tus errores o miedos",
        "Invasión de privacidad: leer diarios, revisar pertenencias",
        "Manipulación emocional: chantajes, culpabilización"
      ],
      
      severeActions: [
        "Abuso físico sistemático: golpes, lesiones, violencia extrema",
        "Abuso sexual en cualquiera de sus formas",
        "Abuso emocional severo: humillación constante, ataques a la autoestima",
        "Negligencia extrema: no proveer alimentación, cuidado médico, seguridad",
        "Exposición a violencia doméstica",
        "Abuso ritual o tortura psicológica"
      ],
      
      victimMentality: [
        "Creer que 'merezco ser tratada mal'",
        "Normalizar comportamientos abusivos en relaciones",
        "Sentir que no tienes derecho a defenderte",
        "Creer que el amor viene con dolor",
        "Pensar que provocas la violencia de otros",
        "Aceptar disculpas sin cambios reales de comportamiento"
      ],
      
      unconsciousPatterns: [
        "Atraer parejas o situaciones abusivas (familiar se siente 'normal')",
        "Tener dificultad para reconocer señales de alarma",
        "Confundir intensidad con amor",
        "Permitir que traspasen tus límites repetidamente",
        "Auto-agredirte física o emocionalmente",
        "Proteger o justificar a personas que te lastiman"
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
      
      origin: {
        spiritual: "Esta herida enseña sobre la verdad personal y la importancia de honrar tu propia experiencia. El alma aprende a confiar en su intuición y a validar su propia realidad, sin necesitar que otros la confirmen.",
        purpose: "Desarrollar un fuerte sentido de justicia personal y la capacidad de defender tu verdad."
      },
      
      simpleActions: [
        "Minimizar tus emociones: 'no es para tanto', 'estás exagerando'",
        "No creer tus versiones de los eventos",
        "Castigos desproporcionados comparados con los de tus hermanos",
        "Invalidar tus experiencias: 'eso no pasó', 'lo estás imaginando'",
        "Cambiar las reglas constantemente sin explicación",
        "Culparte por las emociones o problemas de los adultos"
      ],
      
      severeActions: [
        "Gaslighting sistemático: hacerte dudar de tu realidad",
        "Castigos extremos por 'delitos' menores mientras otros no recibían consecuencias",
        "Ser culpada por el abuso que sufriste",
        "Forzarte a mentir o encubrir situaciones familiares",
        "Ser castigada por decir la verdad",
        "Tener que cargar responsabilidades de adultos siendo niña"
      ],
      
      victimMentality: [
        "Creer que 'mi percepción está siempre equivocada'",
        "Dudar constantemente de tus instintos y emociones",
        "Aceptar tratamientos injustos sin cuestionar",
        "Creer que no tienes derecho a defenderte",
        "Pensar que tus necesidades no son importantes",
        "Justificar el mal comportamiento de otros hacia ti"
      ],
      
      unconsciousPatterns: [
        "Buscar constantemente validación externa de tu realidad",
        "Tolerar situaciones injustas en trabajo o relaciones",
        "Dudar de tu intuición incluso cuando es precisa",
        "Sobre-explicar o justificar tus decisiones",
        "Permitir que otros definan tu experiencia",
        "Evitar confrontaciones incluso cuando son necesarias"
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
      
      origin: {
        spiritual: "Esta herida enseña sobre la dignidad inherente y el valor incondicional del ser. El alma aprende que su dignidad no puede ser tocada por las acciones externas y desarrolla una humildad auténtica basada en la fortaleza, no en la vergüenza.",
        purpose: "Desarrollar una dignidad inquebrantable y autocompasión profunda."
      },
      
      simpleActions: [
        "Burlas sobre tu apariencia física o características",
        "Comentarios sarcásticos sobre tus habilidades",
        "Ser regañada públicamente frente a otros",
        "Comparaciones humillantes con otros niños",
        "Burlas sobre tus miedos o vulnerabilidades",
        "Ser usada como 'ejemplo' de lo que no se debe hacer"
      ],
      
      severeActions: [
        "Humillación pública extrema: desnudarte, exponerte",
        "Castigos diseñados específicamente para avergonzarte",
        "Burlas crueles sobre aspectos que no puedes controlar",
        "Ser grabada o fotografiada en momentos vulnerables",
        "Humillación sexual o sobre tu cuerpo en desarrollo",
        "Ser forzada a hacer cosas degradantes como castigo"
      ],
      
      victimMentality: [
        "Creer que 'soy ridícula y todos se dan cuenta'",
        "Evitar situaciones donde podrías ser el centro de atención",
        "Creer que tus errores definen tu valor",
        "Pensar que mereces ser avergonzada",
        "Sentir que siempre estás siendo juzgada",
        "Creer que no tienes derecho a dignidad"
      ],
      
      unconsciousPatterns: [
        "Auto-sabotearte antes de presentaciones o momentos importantes",
        "Minimizar tus logros para evitar atención",
        "Vestirte o comportarte de manera que no llames la atención",
        "Hacer bromas sobre ti misma antes de que otros lo hagan",
        "Evitar posiciones de liderazgo o visibilidad",
        "Sentir vergüenza desproporcionada por errores normales"
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
      
      origin: {
        spiritual: "Esta herida enseña sobre la confianza genuina y la capacidad de discernimiento. El alma aprende a distinguir entre confianza ciega y confianza consciente, desarrollando la sabiduría para elegir en quién confiar y cuándo.",
        purpose: "Desarrollar intuición poderosa y la capacidad de crear relaciones basadas en confianza mutua y respeto."
      },
      
      simpleActions: [
        "Promesas rotas constantemente sin explicación",
        "Compartir tus secretos o información privada con otros",
        "Usar tu confianza para manipularte",
        "Mentiras 'blancas' constantes que descubrías",
        "Cambiar las reglas después de que habías confiado en ellas",
        "Usar tu amor contra ti en momentos de conflicto"
      ],
      
      severeActions: [
        "Abuso por parte de quien más confiabas",
        "Ser vendida, regalada o intercambiada por intereses económicos",
        "Mentiras sistemáticas sobre tu identidad, historia familiar",
        "Ser entregada a abusadores por tu propio cuidador",
        "Traición en momentos de máxima vulnerabilidad",
        "Uso de tu inocencia y confianza para lastimarte deliberadamente"
      ],
      
      victimMentality: [
        "Creer que 'no puedo confiar en nadie'",
        "Estar constantemente en guardia, esperando la traición",
        "Creer que el amor siempre viene con engaño",
        "Pensar que eres 'tonta' por confiar",
        "Creer que todos tienen motivos ocultos",
        "Sentir que traicionas a otros antes de que te traicionen"
      ],
      
      unconsciousPatterns: [
        "Probar constantemente la lealtad de otros",
        "Sabotear relaciones cuando empiezas a confiar profundamente",
        "Mantener secretos innecesarios para 'protegerte'",
        "Buscar señales de traición incluso donde no las hay",
        "Traicionar a otros para 'protegerte' de ser traicionada",
        "Crear múltiples 'versiones' de ti para diferentes personas"
      ]
    }
  ];

  const currentWound = wounds[selectedWound];

  const sections = [
    { id: 'origin', title: 'Origen Espiritual', icon: <Star className="w-5 h-5" /> },
    { id: 'simple', title: 'Acciones Simples que la Crean', icon: <Eye className="w-5 h-5" /> },
    { id: 'severe', title: 'Experiencias Severas', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'victim', title: 'Mentalidad de Víctima', icon: <Shield className="w-5 h-5" /> },
    { id: 'unconscious', title: 'Patrones Inconscientes', icon: <Lightbulb className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="text-indigo-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Comprensión Profunda de las Heridas</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Una guía completa para entender cada herida desde su origen espiritual hasta sus manifestaciones más sutiles en la vida adulta.
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
              HERIDA DE {currentWound.name}
            </h2>
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
                  {section.id === 'origin' && (
                    <div className="space-y-4">
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <h4 className="font-semibold text-indigo-800 mb-2">✨ Propósito Espiritual:</h4>
                        <p className="text-indigo-700">{currentWound.origin.spiritual}</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">🎯 Lección del Alma:</h4>
                        <p className="text-purple-700">{currentWound.origin.purpose}</p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'simple' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Acciones aparentemente "menores" que pueden crear esta herida profunda:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.simpleActions.map((action, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-yellow-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.id === 'severe' && (
                    <div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="text-red-700 font-medium">
                          ⚠️ Contenido sensible: Experiencias traumáticas severas
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {currentWound.severeActions.map((action, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.id === 'victim' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Creencias limitantes que mantienen el patrón de víctima:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.victimMentality.map((belief, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{belief}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-orange-800">
                          <strong>Recuerda:</strong> Reconocer estos patrones es el primer paso para liberarte de ellos. 
                          No eres víctima de tu pasado, eres la heroína de tu historia de sanación.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'unconscious' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Patrones automáticos que se activan sin darte cuenta:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.unconsciousPatterns.map((pattern, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{pattern}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Toma de consciencia:</strong> Al identificar estos patrones, ya no son inconscientes. 
                          Ahora tienes el poder de elegir respuestas diferentes y más sanadoras.
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

      {/* Bottom Message */}
      <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-lg p-6">
        <Heart className="mx-auto text-pink-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-pink-800 mb-2">
          Mensaje de Sanación
        </h3>
        <p className="text-pink-700 max-w-2xl mx-auto">
          Comprender tus heridas no es para quedarte en el pasado, sino para liberarte de él. 
          Cada herida que reconoces es un paso hacia tu libertad emocional. 
          Eres más fuerte que cualquier experiencia que hayas vivido.
        </p>
      </div>
    </div>
  );
};

export default GuiaHeridas;