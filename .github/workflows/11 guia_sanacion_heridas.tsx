import React, { useState } from 'react';
import { Heart, Target, Calendar, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Star, Sparkles, Sun } from 'lucide-react';

const GuiaSanacion = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('steps');

  const woundsHealing = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      healingSteps: [
        {
          step: 1,
          title: "Reconocimiento y Validación",
          description: "Acepta que la herida existe sin minimizarla. Di: 'Mi miedo al abandono es real y válido'",
          timeframe: "Semana 1-2"
        },
        {
          step: 2,
          title: "Conexión Contigo Misma",
          description: "Desarrolla una relación amorosa contigo misma como base de seguridad",
          timeframe: "Semana 3-6"
        },
        {
          step: 3,
          title: "Reprogramación de Creencias",
          description: "Cambia 'todos me abandonan' por 'merezco relaciones estables y amorosas'",
          timeframe: "Semana 7-10"
        },
        {
          step: 4,
          title: "Práctica de Relaciones Seguras",
          description: "Construye conexiones graduales basadas en confianza mutua",
          timeframe: "Semana 11-16"
        },
        {
          step: 5,
          title: "Integración y Fortalecimiento",
          description: "Mantén tu seguridad interna independiente de las circunstancias externas",
          timeframe: "Semana 17+"
        }
      ],
      
      dailyActions: [
        "🌅 MAÑANA: Afirmación 'Soy suficiente por mí misma y atraigo amor genuino'",
        "📱 Envía un mensaje amoroso a alguien importante (sin esperar respuesta inmediata)",
        "🪞 5 minutos frente al espejo diciéndote palabras de amor y apoyo",
        "📖 Escribe 3 cosas que aprecias de ti misma en un diario",
        "🧘 Meditación de 10 min enfocada en sentir tu completitud interna",
        "🎨 Actividad creativa que disfrutes solo para ti (pintar, cantar, bailar)",
        "🌙 NOCHE: Gratitud por tu propia compañía y cuidado personal"
      ],
      
      weeklyActions: [
        "Planifica y disfruta una 'cita contigo misma' (cine, café, caminata)",
        "Practica decir 'no' a algo que no quieres hacer",
        "Conecta con un amigo/familiar de forma auténtica y vulnerable",
        "Revisa y ajusta tus límites en relaciones actuales",
        "Haz algo que hayas evitado por miedo al abandono"
      ],
      
      monthlyGoals: [
        "Identificar y cambiar un patrón de sabotaje en relaciones",
        "Establecer una rutina de autocuidado que te haga sentir completa",
        "Tener una conversación honesta sobre tus necesidades en una relación importante",
        "Crear un 'kit de emergencia emocional' para momentos de ansiedad de abandono"
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
      
      healingSteps: [
        {
          step: 1,
          title: "Autocompasión Radical",
          description: "Trátate con la misma gentileza que tratarías a tu mejor amiga",
          timeframe: "Semana 1-2"
        },
        {
          step: 2,
          title: "Identificación de Valor Intrínseco",
          description: "Reconoce tu valor independiente de la opinión externa",
          timeframe: "Semana 3-6"
        },
        {
          step: 3,
          title: "Práctica de Autenticidad",
          description: "Expresa gradualmente tu verdadero ser sin disculparte",
          timeframe: "Semana 7-10"
        },
        {
          step: 4,
          title: "Construcción de Autoestima Sólida",
          description: "Desarrolla confianza basada en tu conexión interna",
          timeframe: "Semana 11-16"
        },
        {
          step: 5,
          title: "Creación de Relaciones Auténticas",
          description: "Atrae personas que te amen por quien realmente eres",
          timeframe: "Semana 17+"
        }
      ],
      
      dailyActions: [
        "🌅 MAÑANA: 'Soy digna de amor exactamente como soy'",
        "💝 Haz algo amable por ti misma sin razón especial",
        "🎯 Expresa una opinión auténtica en una conversación",
        "📝 Lista 5 cualidades tuyas que no dependen del rendimiento",
        "🚫 Di 'no' a algo que harías solo por agradar",
        "🌟 Celebra un logro personal, por pequeño que sea",
        "🌙 NOCHE: Agradece tu unicidad y valor inherente"
      ],
      
      weeklyActions: [
        "Comparte algo personal con alguien de confianza",
        "Haz algo que siempre quisiste pero temías ser juzgada",
        "Practica recibir cumplidos sin minimizarlos",
        "Identifica una crítica interna y cámbiala por comprensión",
        "Rodéate de personas que te valoren auténticamente"
      ],
      
      monthlyGoals: [
        "Eliminar una relación o situación donde te sientes constantemente juzgada",
        "Desarrollar un hobby o interés que sea solo tuyo",
        "Hacer algo visible (post en redes, presentación) siendo completamente tú",
        "Crear límites claros con personas críticas en tu vida"
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
      
      healingSteps: [
        {
          step: 1,
          title: "Seguridad y Protección",
          description: "Crea un ambiente físico y emocional seguro como base para sanar",
          timeframe: "Semana 1-4"
        },
        {
          step: 2,
          title: "Recuperación del Poder Personal",
          description: "Reconoce que tienes poder sobre tu vida y decisiones actuales",
          timeframe: "Semana 5-8"
        },
        {
          step: 3,
          title: "Sanación del Trauma",
          description: "Procesa las experiencias con ayuda profesional si es necesario",
          timeframe: "Semana 9-16"
        },
        {
          step: 4,
          title: "Reconstrucción de Límites",
          description: "Aprende a reconocer y establecer límites saludables",
          timeframe: "Semana 17-24"
        },
        {
          step: 5,
          title: "Creación de Relaciones Sanas",
          description: "Atrae y mantén relaciones basadas en respeto mutuo",
          timeframe: "Semana 25+"
        }
      ],
      
      dailyActions: [
        "🌅 MAÑANA: 'Soy fuerte, valiosa y merezco ser tratada con respeto'",
        "🛡️ Identifica una situación donde necesitas poner un límite",
        "💪 Haz algo que te haga sentir poderosa y en control",
        "🔍 Observa señales de tu cuerpo sobre lo que te hace sentir segura/insegura",
        "📞 Conecta con alguien que te haga sentir segura y valorada",
        "🎭 Practica decir 'esto no está bien' frente al espejo",
        "🌙 NOCHE: Reconoce tu valentía por sanar y crecer"
      ],
      
      weeklyActions: [
        "Practica una técnica de autodefensa física o emocional",
        "Elimina o limita contacto con una persona tóxica",
        "Haz algo que el abuso te 'prohibía' (expresarte, vestirte como quieres)",
        "Busca apoyo profesional o grupal si lo necesitas",
        "Celebra tu progreso en la sanación sin minimizarlo"
      ],
      
      monthlyGoals: [
        "Crear un plan de seguridad personal completo",
        "Establecer un límite importante que has evitado poner",
        "Desarrollar una red de apoyo de personas sanas y amorosas",
        "Trabajar con un terapeuta especializado en trauma si es necesario"
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
      
      healingSteps: [
        {
          step: 1,
          title: "Validación de tu Realidad",
          description: "Confía en tu percepción y experiencia como válidas y reales",
          timeframe: "Semana 1-3"
        },
        {
          step: 2,
          title: "Fortalecimiento de la Intuición",
          description: "Desarrolla confianza en tus instintos y señales internas",
          timeframe: "Semana 4-7"
        },
        {
          step: 3,
          title: "Práctica de Asertividad",
          description: "Aprende a defender tu verdad de manera calmada pero firme",
          timeframe: "Semana 8-12"
        },
        {
          step: 4,
          title: "Establecimiento de Justicia Personal",
          description: "Crea estándares claros de cómo mereces ser tratada",
          timeframe: "Semana 13-18"
        },
        {
          step: 5,
          title: "Creación de Relaciones Justas",
          description: "Cultiva relaciones donde tu verdad es respetada y valorada",
          timeframe: "Semana 19+"
        }
      ],
      
      dailyActions: [
        "🌅 MAÑANA: 'Mi percepción es válida y confío en mi intuición'",
        "🎯 Toma una decisión basada en tu instinto, no en lo que otros esperan",
        "📝 Escribe sobre una situación donde sentiste injusticia y valida tu experiencia",
        "🗣️ Expresa tu opinión honesta en una conversación",
        "🚨 Identifica una 'bandera roja' que has estado ignorando",
        "⚖️ Haz algo para crear más justicia en tu vida (grande o pequeño)",
        "🌙 NOCHE: Agradece tu capacidad de discernir la verdad"
      ],
      
      weeklyActions: [
        "Confronta una situación injusta de manera constructiva",
        "Practica decir 'eso no es cierto' cuando alguien distorsione tu realidad",
        "Busca validación de personas que respeten tu perspectiva",
        "Documenta patrones de comportamiento injustos que observes",
        "Celebra momentos donde defendiste tu verdad"
      ],
      
      monthlyGoals: [
        "Establecer consecuencias claras para quien no respete tu realidad",
        "Alejarte de una situación sistemáticamente injusta",
        "Desarrollar un 'sistema de validación interna' que no dependa de otros",
        "Encontrar personas que valoren tu honestidad y perspectiva"
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
      
      healingSteps: [
        {
          step: 1,
          title: "Recuperación de la Dignidad",
          description: "Reconoce tu valor inherente que nadie puede quitarte",
          timeframe: "Semana 1-3"
        },
        {
          step: 2,
          title: "Sanación de la Vergüenza",
          description: "Distingue entre vergüenza tóxica y responsabilidad sana",
          timeframe: "Semana 4-8"
        },
        {
          step: 3,
          title: "Construcción de Autocompasión",
          description: "Trátate con gentileza especialmente en momentos difíciles",
          timeframe: "Semana 9-13"
        },
        {
          step: 4,
          title: "Práctica de Visibilidad Sana",
          description: "Gradualmente permite ser vista y celebrada",
          timeframe: "Semana 14-20"
        },
        {
          step: 5,
          title: "Empoderamiento Personal",
          description: "Abraza tu brillantez y úsala para inspirar a otros",
          timeframe: "Semana 21+"
        }
      ],
      
      dailyActions: [
        "🌅 MAÑANA: 'Soy digna de respeto y celebración'",
        "👑 Haz algo que te haga sentir orgullosa de ti misma",
        "💫 Comparte un logro o alegría sin minimizarlo",
        "🎨 Haz algo creativo o expresivo solo por el placer de hacerlo",
        "🪞 Mírate al espejo y di algo genuinamente amable sobre ti",
        "🌟 Permite recibir un cumplido sin deflectarlo",
        "🌙 NOCHE: Perdónate cualquier 'error' del día con compasión"
      ],
      
      weeklyActions: [
        "Haz algo visible donde puedas ser apreciada (compartir talento, opinión)",
        "Vístete de una manera que te haga sentir hermosa y confiada",
        "Practica reírte de ti misma con amor, no con crueldad",
        "Busca espacios donde tu personalidad sea celebrada",
        "Haz algo 'imperfecto' sin disculparte por ello"
      ],
      
      monthlyGoals: [
        "Participar en algo donde puedas brillar públicamente",
        "Crear límites con personas que te humillan o minimizan",
        "Desarrollar una práctica regular de autocelebración",
        "Encontrar tu 'tribu' - personas que celebren tu autenticidad"
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
      
      healingSteps: [
        {
          step: 1,
          title: "Sanación de la Herida",
          description: "Procesa el dolor de traiciones pasadas con compasión",
          timeframe: "Semana 1-4"
        },
        {
          step: 2,
          title: "Desarrollo de Discernimiento",
          description: "Aprende a distinguir entre confianza ciega y confianza consciente",
          timeframe: "Semana 5-9"
        },
        {
          step: 3,
          title: "Reconstrucción de Confianza en Ti",
          description: "Confía primero en tu intuición y capacidad de elegir bien",
          timeframe: "Semana 10-15"
        },
        {
          step: 4,
          title: "Práctica de Confianza Gradual",
          description: "Construye confianza paso a paso con personas confiables",
          timeframe: "Semana 16-22"
        },
        {
          step: 5,
          title: "Creación de Relaciones de Integridad",
          description: "Cultiva vínculos basados en honestidad y respeto mutuo",
          timeframe: "Semana 23+"
        }
      ],
      
      dailyActions: [
        "🌅 MAÑANA: 'Confío en mi sabiduría para elegir personas íntegras'",
        "🔍 Observa las acciones de las personas, no solo sus palabras",
        "💎 Identifica una cualidad de integridad en alguien cercano",
        "🛡️ Practica un 'no' claro cuando algo no se siente correcto",
        "📱 Sé completamente honesta en una interacción pequeña",
        "🎯 Toma una decisión basada en tu intuición sobre alguien",
        "🌙 NOCHE: Agradece tu capacidad creciente de discernir"
      ],
      
      weeklyActions: [
        "Observa consistencia entre palabras y acciones en tus relaciones",
        "Comparte algo personal con alguien que ha demostrado ser confiable",
        "Establece una consecuencia clara para comportamientos no confiables",
        "Practica ser completamente auténtica en una relación importante",
        "Alejate de situaciones donde sientes que 'algo no está bien'"
      ],
      
      monthlyGoals: [
        "Identificar y fortalecer una relación basada en confianza mutua",
        "Crear 'pruebas de confianza' graduales para nuevas relaciones",
        "Desarrollar un círculo íntimo de personas completamente confiables",
        "Practicar perdonar sin olvidar - mantener la sabiduría ganada"
      ]
    }
  ];

  const currentWound = woundsHealing[selectedWound];

  const sections = [
    { id: 'steps', title: 'Proceso de Sanación Paso a Paso', icon: <Target className="w-5 h-5" /> },
    { id: 'daily', title: 'Acciones Diarias de Sanación', icon: <Sun className="w-5 h-5" /> },
    { id: 'weekly', title: 'Prácticas Semanales', icon: <Calendar className="w-5 h-5" /> },
    { id: 'monthly', title: 'Metas Mensuales', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-emerald-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-emerald-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Guía de Sanación de Heridas Emocionales</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Un camino estructurado hacia la sanación con acciones específicas para transformar cada herida en fortaleza y sabiduría.
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {woundsHealing.map((wound, index) => (
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

      {/* Current Wound Healing Guide */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              SANANDO LA HERIDA DE {currentWound.name}
            </h2>
            <p className="text-gray-600 mt-2">Tu camino hacia la libertad emocional</p>
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
                  {section.id === 'steps' && (
                    <div className="space-y-6">
                      {currentWound.healingSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`${currentWound.buttonColor} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-800">{step.title}</h4>
                              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {step.timeframe}
                              </span>
                            </div>
                            <p className="text-gray-600">{step.description}</p>
                            {index < currentWound.healingSteps.length - 1 && (
                              <div className="flex justify-center my-4">
                                <ArrowRight className="text-gray-400" size={20} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <Sparkles className="text-emerald-600 mb-2" size={20} />
                        <p className="text-emerald-800">
                          <strong>Recuerda:</strong> La sanación no es lineal. Permítete avanzar a tu propio ritmo y celebra cada pequeño progreso.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'daily' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Acciones específicas para practicar cada día y reprogramar patrones antiguos:
                      </p>
                      <div className="grid gap-3">
                        {currentWound.dailyActions.map((action, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Tip:</strong> Elige 2-3 acciones que más resuenen contigo para empezar. 
                          La constancia es más importante que la perfección.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'weekly' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Prácticas más profundas para fortalecer tu sanación semana a semana:
                      </p>
                      <div className="space-y-3">
                        {currentWound.weeklyActions.map((action, index) => (
                          <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                            <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'monthly' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Objetivos más amplios para evaluar y profundizar tu progreso:
                      </p>
                      <div className="space-y-4">
                        {currentWound.monthlyGoals.map((goal, index) => (
                          <div key={index} className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                            <div className="flex items-start space-x-3">
                              <Star className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Meta {index + 1}</h4>
                                <p className="text-gray-700">{goal}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800">
                          <strong>Evaluación mensual:</strong> Reflexiona sobre tu progreso, celebra tus logros y ajusta tus metas según tu crecimiento.
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
      <div className="text-center bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-lg p-6">
        <Sparkles className="mx-auto text-emerald-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">
          Tu Transformación es Posible
        </h3>
        <p className="text-emerald-700 max-w-2xl mx-auto">
          Cada día que eliges sanar, cada acción consciente que tomas, cada patrón que decides cambiar, 
          te acerca más a la versión más libre y auténtica de ti misma. 
          Tu sanación no solo te transforma a ti, sino que inspira a otros a hacer lo mismo.
        </p>
      </div>
    </div>
  );
};

export default GuiaSanacion;