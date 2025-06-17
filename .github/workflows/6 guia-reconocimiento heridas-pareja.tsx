import React, { useState } from 'react';
import { Heart, Users, AlertTriangle, Eye, Target, ChevronDown, ChevronUp, Star, Shield, Search } from 'lucide-react';

const GuiaHeridasPareja = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('patterns');

  const woundsInRelationships = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      relationshipPatterns: [
        "Te vuelves extremadamente pegajosa al inicio de la relación",
        "Necesitas confirmación constante de que tu pareja te ama",
        "Interpretas cualquier ausencia como rechazo personal",
        "Te adelantas a terminar la relación 'antes de que te abandonen'",
        "Idealizas a tu pareja al punto de perder tu identidad",
        "Sientes pánico cuando tu pareja necesita espacio personal",
        "Revisas constantemente sus redes sociales buscando 'evidencia' de abandono"
      ],
      
      partnerAttracts: [
        "Personas emocionalmente no disponibles (casados, adictos al trabajo, etc.)",
        "Parejas que dan señales mixtas sobre su compromiso",
        "Personas que evitan las conversaciones sobre el futuro",
        "Parejas que tienen 'una salida siempre lista' (no se comprometen totalmente)",
        "Personas con patrones de relaciones cortas e intensas",
        "Parejas que mantienen contacto activo con ex-parejas"
      ],
      
      triggers: [
        "Tu pareja llega tarde sin avisar",
        "No responde mensajes por varias horas",
        "Menciona que necesita 'tiempo para pensar'",
        "Cancela planes contigo por trabajo o amigos",
        "Habla positivamente de su ex o de otras personas",
        "No te incluye en planes futuros importantes",
        "Evita presentarte a familia o amigos cercanos"
      ],
      
      sabotage: [
        "Crear dramas innecesarios para 'probar' su amor",
        "Amenazar con terminar la relación cuando sientes distancia",
        "Volverse excesivamente controladora de su tiempo y actividades",
        "Hacer escenas de celos por interacciones normales",
        "Chantajear emocionalmente: 'si me amaras, harías...'",
        "Sabotear momentos felices por miedo a que 'no duren'",
        "Terminar abruptamente cuando la relación se vuelve estable"
      ],
      
      healthyShift: [
        "Desarrolla seguridad interna independiente de tu pareja",
        "Practica disfrutar tiempo sola sin ansiedad",
        "Comunica tus necesidades sin amenazas o ultimátums",
        "Permite que tu pareja tenga vida propia sin interpretarlo como abandono",
        "Construye una vida plena con intereses y amistades propias",
        "Aprende a diferencia entre soledad temporal y abandono real"
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
      
      relationshipPatterns: [
        "Cambias tu personalidad según lo que crees que tu pareja quiere",
        "Evitas expresar opiniones que podrían causar conflicto",
        "Te disculpas excesivamente por ser quien eres",
        "Buscas constante aprobación y validación de tu pareja",
        "Minimizas tus logros para no 'opacar' a tu pareja",
        "Tienes terror a decepcionar o molestar",
        "Interpretas cualquier crítica como rechazo total"
      ],
      
      partnerAttracts: [
        "Personas críticas que 'nunca están satisfechas'",
        "Parejas que dan amor condicional basado en tu desempeño",
        "Personas emocionalmente frías o distantes",
        "Parejas que te comparan constantemente con otros",
        "Personas que minimizan tus sentimientos o necesidades",
        "Parejas que tienen estándares imposiblemente altos"
      ],
      
      triggers: [
        "Tu pareja hace cualquier tipo de crítica, por constructiva que sea",
        "No muestra entusiasmo inmediato por algo que compartiste",
        "Prefiere hacer algo diferente a lo que propones",
        "Te corrige en público, aunque sea gentilmente",
        "No responde con la intensidad emocional que esperas",
        "Menciona cualidades que admira en otras personas",
        "Parece cansada o estresada (lo interpretas como culpa tuya)"
      ],
      
      sabotage: [
        "Rechazarte a ti misma antes de que tu pareja lo haga",
        "Ser excesivamente complaciente hasta perder tu esencia",
        "Crear tests imposibles de amor y aceptación",
        "Interpretar neutralidad como rechazo",
        "Sobre-esforzarte hasta el agotamiento para 'merecer' amor",
        "Evitar mostrar vulnerabilidad real por miedo al juicio",
        "Sabotear momentos íntimos por creer que 'no eres suficiente'"
      ],
      
      healthyShift: [
        "Practica ser auténtica incluso cuando cause incomodidad",
        "Aprende que puedes ser amada por quien realmente eres",
        "Desarrolla tolerancia a la crítica constructiva",
        "Comunica tus necesidades sin disculparte por tenerlas",
        "Celebra tus cualidades únicas en lugar de esconderlas",
        "Diferencia entre rechazo real y diferencias de opinión"
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
      
      relationshipPatterns: [
        "Normalizas comportamientos abusivos como 'pasión' o 'amor intenso'",
        "Tienes dificultad para reconocer señales de alarma tempranas",
        "Confundes control y posesividad con amor y cuidado",
        "Justificas o minimizas comportamientos inaceptables de tu pareja",
        "Sientes que provocas o mereces el mal trato",
        "Tienes dificultad para poner límites firmes",
        "Te sientes culpable cuando tu pareja se molesta, sin importar la razón"
      ],
      
      partnerAttracts: [
        "Personas con tendencias controladoras o manipuladoras",
        "Parejas que alternan entre amor intenso y frialdad",
        "Personas que no respetan tus límites o decisiones",
        "Parejas que usan la culpa o el miedo para controlarte",
        "Personas con problemas de ira o agresividad",
        "Parejas que aíslan de familia y amigos",
        "Personas que tienen 'dos caras' - encantadoras en público, difíciles en privado"
      ],
      
      triggers: [
        "Tu pareja levanta la voz o se muestra agresiva",
        "Intenta controlar aspectos de tu vida (ropa, amigos, trabajo)",
        "Te culpa por sus emociones o reacciones",
        "Minimiza o ridiculiza tus sentimientos",
        "Te hace sentir que 'caminas en cáscaras de huevo'",
        "Usa tu pasado o vulnerabilidades en tu contra",
        "Amenaza de cualquier forma (irse, lastimarse, lastimarte)"
      ],
      
      sabotage: [
        "Quedarte en relaciones claramente dañinas por miedo o costumbre",
        "Creer que puedes 'cambiar' o 'sanar' a tu pareja abusiva",
        "Minimizar incidentes serios como 'no tan graves'",
        "Aislar de tu red de apoyo para evitar 'juicios'",
        "Hacer excusas por el comportamiento abusivo de tu pareja",
        "Creer que mereces ser tratada mal",
        "Retornar a relaciones abusivas después de terminarlas"
      ],
      
      healthyShift: [
        "Aprende a reconocer las señales de alarma tempranamente",
        "Desarrolla límites no negociables sobre cómo mereces ser tratada",
        "Construye una red de apoyo sólida fuera de la relación",
        "Practica confiar en tu intuición cuando algo se siente mal",
        "Entiende que el amor real nunca incluye abuso de ningún tipo",
        "Busca ayuda profesional para romper patrones de atracción tóxica"
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
      
      relationshipPatterns: [
        "Dudas constantemente de tu percepción de los eventos",
        "Permites que tu pareja redefina tu realidad o experiencias",
        "Tienes dificultad para defender tu punto de vista en discusiones",
        "Aceptas explicaciones que no tienen sentido para evitar conflicto",
        "Te sientes confundida sobre lo que realmente pasó en las discusiones",
        "Justificas comportamientos injustos de tu pareja hacia ti",
        "Buscas validación externa de tu versión de los eventos"
      ],
      
      partnerAttracts: [
        "Personas que practican 'gaslighting' o manipulación psicológica",
        "Parejas que niegan o minimizan tus experiencias",
        "Personas que cambian las reglas constantemente",
        "Parejas que se hacen las víctimas cuando las confrontas",
        "Personas que distorsionan la verdad para salirse con la suya",
        "Parejas que tienen diferentes estándares para ellos y para ti"
      ],
      
      triggers: [
        "Tu pareja niega algo que claramente dijeron o hicieron",
        "Minimiza tu dolor o tus reacciones emocionales",
        "Te dice que estás 'exagerando' o 'siendo dramática'",
        "Cambia su versión de los eventos para quedar bien",
        "Te hace sentir 'loca' por reaccionar normalmente",
        "Se niega a reconocer cuando te lastima",
        "Usa tu sensibilidad o emocionalidad en tu contra"
      ],
      
      sabotage: [
        "Dudar de tu propia percepción incluso cuando es precisa",
        "Aceptar tratamientos injustos para mantener la 'paz'",
        "No confrontar comportamientos inaceptables por miedo al conflicto",
        "Cuestionar tu cordura cuando tu pareja niega la realidad",
        "Permitir que tu pareja controle la narrativa de la relación",
        "Disculparte por reacciones emocionales válidas",
        "Buscar constantemente validación externa de tu experiencia"
      ],
      
      healthyShift: [
        "Confía en tu percepción e intuición como válidas",
        "Documenta eventos importantes para validar tu memoria",
        "Aprende a mantener tu versión de la verdad sin necesitar aprobación",
        "Establece consecuencias claras para el gaslighting",
        "Busca validación de personas confiables fuera de la relación",
        "Practica responder con 'esa no es mi experiencia' cuando sea necesario"
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
      
      relationshipPatterns: [
        "Permites que tu pareja te haga bromas hirientes 'porque es juego'",
        "Minimizas tus logros para no hacer sentir mal a tu pareja",
        "Evitas brillar o destacar para no generar incomodidad",
        "Aceptas comentarios humillantes sobre tu apariencia o habilidades",
        "Te ridiculizas a ti misma antes de que otros lo hagan",
        "Sientes vergüenza desproporcionada por errores menores",
        "Evitas situaciones sociales donde podrías ser juzgada"
      ],
      
      partnerAttracts: [
        "Personas que usan el humor cruel como forma de comunicación",
        "Parejas que te critican constantemente 'por tu bien'",
        "Personas que minimizan tus logros o te compiten",
        "Parejas que te avergüenzan en público o frente a otros",
        "Personas que tienen necesidad de sentirse superiores",
        "Parejas que no celebran tus éxitos genuinamente"
      ],
      
      triggers: [
        "Tu pareja hace bromas sobre tus inseguridades",
        "Te critica frente a otras personas",
        "Minimiza algo que es importante para ti",
        "Se burla de tus miedos o vulnerabilidades",
        "Comparte información embarazosa tuya sin permiso",
        "No defiende tu dignidad cuando otros te faltan el respeto",
        "Te hace sentir 'menos que' de maneras sutiles pero constantes"
      ],
      
      sabotage: [
        "Autosabotearte antes de eventos importantes para evitar posible humillación",
        "Ocultar tus talentos y logros para mantener la 'armonía'",
        "Reírte de ti misma de manera cruel para 'adelantarte' a otros",
        "Evitar oportunidades de crecimiento por miedo al fracaso público",
        "Aceptar comentarios hirientes como 'normales' en la relación",
        "Minimizar tu dolor cuando te humillan 'era solo una broma'",
        "Evitar defender tu dignidad para no parecer 'demasiado sensible'"
      ],
      
      healthyShift: [
        "Establece límites claros sobre qué tipo de humor es aceptable",
        "Practica recibir cumplidos y celebrar tus logros",
        "Aprende a distinguir entre humor sano y humillación disfrazada",
        "Permite que tu luz brille sin disculparte por ello",
        "Desarrolla respuestas asertivas para comentarios inapropiados",
        "Busca relaciones donde tu dignidad sea respetada y celebrada"
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
      
      relationshipPatterns: [
        "Tienes dificultad extrema para confiar, incluso en detalles pequeños",
        "Constantemente buscas 'evidencia' de que tu pareja te está engañando",
        "Interpretas comportamientos normales como señales de traición",
        "Mantienes secretos innecesarios para 'protegerte'",
        "Pones a prueba la lealtad de tu pareja constantemente",
        "Te preparas siempre para la traición, sin poder relajarte en la relación",
        "Tienes reacciones desproporcionadas a mentiras pequeñas o cambios de planes"
      ],
      
      partnerAttracts: [
        "Personas que son secretas o evasivas sobre aspectos de su vida",
        "Parejas que han tenido historiales de infidelidad",
        "Personas que mantienen relaciones 'ambiguas' con ex-parejas",
        "Parejas que mienten sobre cosas pequeñas regularmente",
        "Personas que no son consistentes entre sus palabras y acciones",
        "Parejas que evitan conversaciones sobre compromiso real"
      ],
      
      triggers: [
        "Tu pareja cambia sus contraseñas o se vuelve secretiva con el teléfono",
        "Llega tarde sin explicación convincente",
        "Menciona frecuentemente a una nueva persona",
        "Su historia no cuadra o cambia detalles",
        "Evita hacer planes futuros contigo",
        "Se comporta diferente después de salir con ciertos amigos",
        "Te miente sobre algo, aunque sea 'sin importancia'"
      ],
      
      sabotage: [
        "Revisar constantemente teléfonos, emails o redes sociales de tu pareja",
        "Crear 'trampas' para probar su lealtad",
        "Sabotear la relación cuando empiezas a confiar profundamente",
        "Mantener 'planes de escape' o conexiones con ex por 'seguridad'",
        "Traicionar primero para evitar ser traicionada",
        "Interpretar cualquier privacidad como secreto malicioso",
        "Terminar relaciones buenas por miedo a futuras traiciones"
      ],
      
      healthyShift: [
        "Aprende a distinguir entre intuición real y paranoia",
        "Desarrolla confianza gradual basada en consistencia de acciones",
        "Practica comunicar tus miedos en lugar de investigar en secreto",
        "Permite que tu pareja tenga privacidad normal sin interpretarlo como traición",
        "Construye confianza en tu capacidad de manejar traiciones si ocurren",
        "Enfócate en ser digna de confianza tú misma como ejemplo"
      ]
    }
  ];

  const currentWound = woundsInRelationships[selectedWound];

  const sections = [
    { id: 'patterns', title: 'Patrones en la Relación', icon: <Users className="w-5 h-5" /> },
    { id: 'attracts', title: 'Tipo de Pareja que Atraes', icon: <Target className="w-5 h-5" /> },
    { id: 'triggers', title: 'Situaciones que te Activan', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'sabotage', title: 'Cómo Saboteas la Relación', icon: <Shield className="w-5 h-5" /> },
    { id: 'healthy', title: 'Cambio hacia lo Saludable', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-rose-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Heridas Emocionales en Relaciones de Pareja</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Descubre cómo tus heridas se manifiestan en las relaciones amorosas y aprende a reconocer patrones para transformarlos.
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {woundsInRelationships.map((wound, index) => (
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

      {/* Current Wound in Relationships */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              HERIDA DE {currentWound.name} EN PAREJA
            </h2>
            <p className="text-gray-600 mt-2">Cómo se manifiesta en tus relaciones amorosas</p>
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
                  {section.id === 'patterns' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Comportamientos automáticos que surgen en tus relaciones debido a esta herida:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.relationshipPatterns.map((pattern, index) => (
                          <li key={index} className="flex items-start">
                            <Search className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{pattern}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Reconocimiento:</strong> Identificar estos patrones es el primer paso. 
                          No te juzgues, son mecanismos de supervivencia que desarrollaste.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'attracts' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Las heridas no sanadas atraen ciertos tipos de parejas que confirman nuestros miedos:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.partnerAttracts.map((type, index) => (
                          <li key={index} className="flex items-start">
                            <Target className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{type}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800">
                          <strong>Importante:</strong> Esto no es tu culpa. La atracción inconsciente hacia patrones familiares 
                          es normal hasta que sanamos y elegimos conscientemente.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'triggers' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Situaciones específicas que activan intensamente tu herida en la relación:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.triggers.map((trigger, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{trigger}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-orange-800">
                          <strong>Estrategia:</strong> Cuando reconozcas estos triggers, pausa, respira profundo 
                          y recuerda que tu reacción viene del pasado, no del presente.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'sabotage' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Formas inconscientes en que tu herida daña la relación, incluso cuando tu pareja es amorosa:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.sabotage.map((sabotage, index) => (
                          <li key={index} className="flex items-start">
                            <Shield className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{sabotage}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-purple-800">
                          <strong>Autocompasión:</strong> Estos sabotajes son intentos de protegerte. 
                          Con conciencia y sanación, puedes elegir respuestas más amorosas.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'healthy' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Cambios específicos hacia patrones relacionales más sanos y amorosos:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.healthyShift.map((shift, index) => (
                          <li key={index} className="flex items-start">
                            <Star className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{shift}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800">
                          <strong>Transformación:</strong> Cada paso hacia la sanación te acerca a relaciones 
                          más auténticas, seguras y profundamente satisfactorias.
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
      <div className="text-center bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-lg p-6">
        <Heart className="mx-auto text-rose-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-rose-800 mb-2">
          El Amor Consciente es Posible
        </h3>
        <p className="text-rose-700 max-w-2xl mx-auto">
          Reconocer estos patrones no es para juzgarte, sino para liberarte. 
          Cada herida sanada te acerca al amor que realmente mereces: 
          auténtico, respetuoso y profundamente nutritivo para tu alma.
        </p>
      </div>
    </div>
  );
};

export default GuiaHeridasPareja;