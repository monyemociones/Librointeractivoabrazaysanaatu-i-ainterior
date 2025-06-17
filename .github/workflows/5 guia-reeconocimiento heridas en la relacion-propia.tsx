import React, { useState } from 'react';
import { Heart, User, AlertTriangle, Eye, Target, ChevronDown, ChevronUp, Star, Shield, Sparkles } from 'lucide-react';

const GuiaSanacionRelacionPropia = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('selfpatterns');

  const woundsInSelfRelationship = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      selfPatterns: [
        "Te abandonas a ti misma cuando otros necesitan algo",
        "Pospones constantemente tus propias necesidades y deseos",
        "Te sientes culpable por tomar tiempo para ti",
        "No tienes rutinas de autocuidado consistentes",
        "Dependes de la validación externa para sentirte valiosa",
        "Te das por vencida fácilmente en tus proyectos personales",
        "Sientes pánico cuando estás sola contigo misma"
      ],
      
      triggers: [
        "Estar sola en casa sin distracciones",
        "Tener tiempo libre sin planes específicos",
        "Momentos de silencio e introspección",
        "Cuando alguien cancela planes contigo",
        "Fines de semana sin actividades sociales",
        "Periodos de pausa en tu vida (vacaciones, desempleo)",
        "Enfrentar decisiones importantes sin consultar a otros"
      ],
      
      sabotage: [
        "Llenar constantemente tu agenda para evitar estar contigo",
        "Buscar distracciones compulsivas (redes sociales, TV, compras)",
        "Sabotear tus propios proyectos por miedo al éxito",
        "Criticarte duramente cuando intentas cuidarte",
        "Priorizar siempre las necesidades de otros sobre las tuyas",
        "Evitar actividades que podrían hacerte feliz si las haces sola",
        "Abandonar metas personales cuando se vuelven desafiantes"
      ],
      
      innerDialog: [
        "'¿Quién soy yo para tomarme tiempo para mí?'",
        "'Si no estoy haciendo algo por otros, no valgo'",
        "'Estar sola significa que algo está mal conmigo'",
        "'Mis necesidades no son tan importantes'",
        "'Si la gente supiera cómo soy realmente, me dejarían'",
        "'No puedo confiar en que estaré ahí para mí misma'",
        "'Mejor me ocupo para no pensar en lo que siento'"
      ],
      
      healingPractices: [
        "Agenda citas contigo misma como lo harías con alguien importante",
        "Practica 10 minutos diarios de soledad consciente sin distracciones",
        "Desarrolla rituales de autocuidado que sean solo tuyos",
        "Haz una lista de tus necesidades y priorízalas conscientemente",
        "Aprende a disfrutar actividades sola (cine, restaurante, viajes)",
        "Crea un espacio sagrado en tu hogar que sea completamente tuyo"
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
      
      selfPatterns: [
        "Te rechazas constantemente con autocrítica severa",
        "Minimizas tus logros y magnificas tus errores",
        "Evitas mostrar tu verdadera personalidad incluso a solas",
        "Te comparas constantemente con otros de manera destructiva",
        "Sientes que no eres 'suficiente' en ningún aspecto",
        "Te disculpas por ocupar espacio o tener necesidades",
        "Cambias aspectos de ti misma para encajar, perdiendo tu esencia"
      ],
      
      triggers: [
        "Ver tus fotos o escuchar tu voz grabada",
        "Cometer cualquier error, por pequeño que sea",
        "Recibir cumplidos (los rechazas automáticamente)",
        "Momentos de éxito (sientes que no los mereces)",
        "Compararte con otros en redes sociales",
        "Situaciones donde podrías destacar o brillar",
        "Expresar una opinión diferente a la mayoría"
      ],
      
      sabotage: [
        "Hablarte a ti misma de manera que jamás le hablarías a un amigo",
        "Boicotear oportunidades porque 'no eres lo suficientemente buena'",
        "Rechazar cumplidos o minimizar tus cualidades",
        "Evitar desafíos por miedo a no ser perfecta",
        "Castigarte mental y emocionalmente por errores normales",
        "Esconder tus talentos para no 'presumir'",
        "Adoptar identidades falsas para ser aceptada"
      ],
      
      innerDialog: [
        "'No soy lo suficientemente inteligente/bonita/talentosa'",
        "'¿Quién me creo que soy para intentar esto?'",
        "'Seguro todos se dan cuenta de que soy un fraude'",
        "'No merezco cosas buenas'",
        "'Soy demasiado esto o muy poco aquello'",
        "'Los demás son mejores que yo en todo'",
        "'Si me conozco realmente, no me aceptaría'"
      ],
      
      healingPractices: [
        "Practica la autocompasión hablándote como a tu mejor amiga",
        "Lleva un diario de logros diarios, sin importar qué tan pequeños sean",
        "Desafía pensamientos autocríticos preguntando: '¿Es esto realmente cierto?'",
        "Celebra tus cualidades únicas en lugar de esconderlas",
        "Practica aceptar cumplidos con un simple 'gracias'",
        "Crea afirmaciones personalizadas basadas en tu valor real"
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
      
      selfPatterns: [
        "Te tratas a ti misma de manera cruel y abusiva",
        "Normalizas el maltrato hacia ti misma como 'motivación'",
        "Te castigas físicamente (privación de sueño, comida, etc.)",
        "Permites que tu crítico interno sea violento y destructivo",
        "Ignoras completamente tus límites físicos y emocionales",
        "Te fuerzas a hacer cosas que te lastiman 'por tu bien'",
        "Sientes que mereces ser tratada mal, incluso por ti misma"
      ],
      
      triggers: [
        "Cometer un error o tener una falla percibida",
        "No cumplir expectativas perfectas que te impones",
        "Sentir emociones 'negativas' como tristeza o enojo",
        "Cuando tu cuerpo necesita descanso o cuidado",
        "Situaciones que requieren autocompasión",
        "Momentos donde necesitas establecer límites contigo misma",
        "Cuando sientes que no estás 'produciendo' suficiente"
      ],
      
      sabotage: [
        "Castigarte con privación (comida, sueño, placer, conexión)",
        "Usar ejercicio o trabajo como forma de autocastigo",
        "Ignorar señales de tu cuerpo cuando necesita cuidado",
        "Permitir que tu diálogo interno sea abusivo y cruel",
        "Forzarte a continuar cuando tu cuerpo y mente piden parar",
        "Negar tus propias necesidades básicas como 'debilidad'",
        "Perpetuar ciclos de autolesión emocional o física"
      ],
      
      innerDialog: [
        "'Me merezco esto por ser tan inútil'",
        "'No puedo ser blanda conmigo o nunca mejoraré'",
        "'El dolor es la única forma de aprender'",
        "'Si no me castigo, significa que no me importa mejorar'",
        "'Soy tan patética que necesito tratarme mal'",
        "'No merezco gentileza, ni siquiera de mí misma'",
        "'La crueldad hacia mí misma es normal y necesaria'"
      ],
      
      healingPractices: [
        "Identifica y detén el diálogo interno abusivo inmediatamente",
        "Desarrolla una voz interna protectora y amorosa",
        "Establece límites firmes sobre cómo te permites tratarte",
        "Practica cuidados básicos como actos de amor propio",
        "Busca ayuda profesional para romper patrones de autoabuso",
        "Crea protocolos de autocuidado cuando te sientes vulnerable"
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
      
      selfPatterns: [
        "Dudas constantemente de tu propia percepción y juicio",
        "Te invalidadas tus propios sentimientos y experiencias",
        "Crees que tus reacciones emocionales están siempre 'mal'",
        "Te gaslight a ti misma negando tu propia verdad",
        "Minimizas situaciones donde fuiste lastimada",
        "Te convences de que tu dolor 'no es tan grave'",
        "Buscas constantemente validación externa de tu realidad"
      ],
      
      triggers: [
        "Confiar en tu intuición sobre una situación",
        "Sentir que algo no está bien pero no poder 'probarlo'",
        "Tener una reacción emocional fuerte a algo",
        "Recordar eventos dolorosos de tu pasado",
        "Cuando tu experiencia difiere de la versión 'oficial'",
        "Momentos donde necesitas defender tu perspectiva",
        "Situaciones que requieren que confíes en ti misma"
      ],
      
      sabotage: [
        "Invalidar sistemáticamente tus propios sentimientos",
        "Convencerte de que estás 'exagerando' cuando algo te duele",
        "Buscar explicaciones que minimicen tu experiencia",
        "Desconfiar de tu intuición incluso cuando es precisa",
        "Permitir que otros redefinan tu realidad sin resistencia",
        "Negar evidencia clara de maltrato hacia ti",
        "Cuestionar tu cordura cuando tu experiencia es válida"
      ],
      
      innerDialog: [
        "'Probablemente estoy exagerando'",
        "'No confío en mi propia percepción'",
        "'Quizás estoy siendo demasiado sensible'",
        "'Seguro que malinterpreté la situación'",
        "'Mi reacción está mal, debería sentir diferente'",
        "'¿Y si realmente estoy loca?'",
        "'Los demás saben mejor que yo lo que pasó'"
      ],
      
      healingPractices: [
        "Valida tus propias emociones: 'Tiene sentido que me sienta así'",
        "Documenta experiencias importantes para validar tu memoria",
        "Practica confiar en tu intuición en decisiones pequeñas",
        "Busca validación de personas confiables cuando la necesites",
        "Desafía pensamientos que minimizan tu experiencia",
        "Desarrolla un fuerte sentido de tu propia verdad interna"
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
      
      selfPatterns: [
        "Te humillas constantemente con autocrítica pública",
        "Minimizas tus logros para evitar sentirte 'presumida'",
        "Te ridiculizas antes de que otros tengan la oportunidad",
        "Evitas situaciones donde podrías destacar o ser vista",
        "Sientes vergüenza desproporcionada por errores menores",
        "Te saboteas cuando estás a punto de brillar",
        "Ocultas tus talentos para no incomodar a otros"
      ],
      
      triggers: [
        "Recibir reconocimiento público por tus logros",
        "Estar en el centro de atención positiva",
        "Cometer un error frente a otras personas",
        "Sentirte orgullosa de algo que lograste",
        "Situaciones donde podrías destacar naturalmente",
        "Momentos de vulnerabilidad emocional en público",
        "Cuando alguien te elogia genuinamente"
      ],
      
      sabotage: [
        "Burlarte de ti misma cruelmente antes de que otros lo hagan",
        "Minimizar activamente tus éxitos y talentos",
        "Evitar oportunidades donde podrías sobresalir",
        "Crear situaciones embarazosas para 'controlarlo'",
        "Rechazar cumplidos con autohumillación",
        "Esconder tus logros para no parecer 'arrogante'",
        "Abandonar proyectos cuando empiezas a destacar"
      ],
      
      innerDialog: [
        "'No soy tan especial, mejor me humillo yo primero'",
        "'Si actúo orgullosa, todos pensarán que soy presumida'",
        "'Es mejor reírme de mí misma antes de que otros lo hagan'",
        "'No merezco estar en el centro de atención'",
        "'Soy una impostora, mejor me escondo'",
        "'¿Quién me creo que soy para brillar?'",
        "'Es más seguro ser invisible que arriesgarme a la humillación'"
      ],
      
      healingPractices: [
        "Practica recibir cumplidos con gracia y agradecimiento",
        "Permite que tu luz brille sin disculparte por ello",
        "Desafía la necesidad de minimizarte constantemente",
        "Celebra tus logros genuinamente, sin falsa modestia",
        "Desarrolla tolerancia a ser vista y admirada",
        "Redefine la humildad como honestidad, no autohumillación"
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
      
      selfPatterns: [
        "Te traicionas constantemente rompiendo promesas contigo misma",
        "No confías en tu capacidad de cumplir tus propios compromisos",
        "Cambias de opinión constantemente sin respetar tus decisiones",
        "Abandonas tus valores cuando es conveniente",
        "No eres leal a tus propias necesidades y límites",
        "Te mientes a ti misma sobre lo que realmente quieres",
        "Rompes la confianza contigo misma repetidamente"
      ],
      
      triggers: [
        "Hacer compromisos contigo misma (ejercicio, dieta, metas)",
        "Situaciones que requieren autodisciplina y seguimiento",
        "Momentos donde necesitas ser fiel a tus valores",
        "Cuando debes elegir entre lo fácil y lo correcto para ti",
        "Establecer límites que requieren consistencia",
        "Situaciones donde tu word to yourself está en juego",
        "Momentos de presión social que contradicen tus valores"
      ],
      
      sabotage: [
        "Romper promesas contigo misma consistentemente",
        "Cambiar las 'reglas' cuando se vuelve difícil cumplirlas",
        "Justificar traiciones a ti misma como 'flexibilidad'",
        "No defender tus propios límites cuando otros los cruzan",
        "Mentirte sobre tus verdaderas motivaciones e intenciones",
        "Abandonar metas cuando requieren compromiso real",
        "Traicionar tus valores por aprobación externa"
      ],
      
      innerDialog: [
        "'No puedo confiar en que haré lo que digo'",
        "'Siempre me decepciono a mí misma'",
        "'¿Para qué hacer planes si no los voy a cumplir?'",
        "'No soy confiable ni siquiera para mí misma'",
        "'Está bien romper esta promesa, nadie más lo sabe'",
        "'Mis compromisos conmigo no son tan importantes'",
        "'Siempre encuentro excusas para no cumplir'"
      ],
      
      healingPractices: [
        "Haz compromisos pequeños y cumplelos religiosamente",
        "Desarrolla integridad personal cumpliendo tu palabra contigo",
        "Trata los compromisos contigo como si fueran con tu mejor amiga",
        "Mantén un registro de promesas cumplidas para generar confianza",
        "Aprende a renegociar contigo misma en lugar de simplemente romper compromisos",
        "Desarrolla rituales que honren tu relación contigo misma"
      ]
    }
  ];

  const currentWound = woundsInSelfRelationship[selectedWound];

  const sections = [
    { id: 'selfpatterns', title: 'Cómo te Tratas a Ti Misma', icon: <User className="w-5 h-5" /> },
    { id: 'triggers', title: 'Situaciones que Activan tu Herida', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'sabotage', title: 'Cómo te Saboteas', icon: <Shield className="w-5 h-5" /> },
    { id: 'inner', title: 'Tu Diálogo Interno', icon: <Eye className="w-5 h-5" /> },
    { id: 'healing', title: 'Prácticas de Sanación', icon: <Sparkles className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-violet-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-violet-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Sanación de Heridas: Tu Relación Contigo Misma</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Descubre cómo tus heridas se manifiestan en la relación más importante: la que tienes contigo misma.
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {woundsInSelfRelationship.map((wound, index) => (
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

      {/* Current Wound in Self-Relationship */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              HERIDA DE {currentWound.name} HACIA TI MISMA
            </h2>
            <p className="text-gray-600 mt-2">Cómo se manifiesta en tu relación personal más íntima</p>
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
                  {section.id === 'selfpatterns' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Patrones destructivos en cómo te relacionas contigo misma:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.selfPatterns.map((pattern, index) => (
                          <li key={index} className="flex items-start">
                            <User className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{pattern}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Reflexión:</strong> La forma en que te tratas es el modelo para cómo otros te tratarán. 
                          Sanar tu relación contigo es el fundamento de todas las demás relaciones.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'triggers' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Situaciones que activan intensamente tu herida en la relación contigo misma:
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
                          <strong>Conciencia:</strong> Reconocer estos triggers te permite pausar y elegir una respuesta 
                          más amorosa hacia ti misma en lugar de reaccionar automáticamente.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'sabotage' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Formas específicas en que saboteas tu bienestar y crecimiento personal:
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
                          <strong>Transformación:</strong> Estos patrones fueron estrategias de supervivencia. 
                          Con conciencia, puedes elegir tratarte con el amor y respeto que mereces.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'inner' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Frases comunes en tu diálogo interno cuando esta herida está activa:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.innerDialog.map((dialog, index) => (
                          <li key={index} className="flex items-start">
                            <Eye className="text-indigo-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 italic">{dialog}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <p className="text-indigo-800">
                          <strong>Observación:</strong> Tomar conciencia de este diálogo interno es el primer paso. 
                          Puedes aprender a cuestionar y reemplazar estos pensamientos con otros más amorosos.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'healing' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Prácticas específicas para sanar esta herida y cultivar una relación amorosa contigo misma:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.healingPractices.map((practice, index) => (
                          <li key={index} className="flex items-start">
                            <Sparkles className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{practice}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800">
                          <strong>Compromiso:</strong> La sanación requiere práctica constante y paciencia contigo misma. 
                          Cada pequeño acto de amor propio es un paso hacia la transformación.
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
      <div className="text-center bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200 rounded-lg p-6">
        <Sparkles className="mx-auto text-violet-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-violet-800 mb-2">
          El Amor Propio es tu Derecho de Nacimiento
        </h3>
        <p className="text-violet-700 max-w-2xl mx-auto">
          Sanar tu relación contigo misma es el regalo más grande que puedes darte. 
          Cuando te amas y respetas profundamente, irradias esa energía y atraes relaciones 
          que reflejan ese mismo amor y respeto. Tu sanación no solo te transforma a ti, 
          sino que eleva a todos los que te rodean.
        </p>
      </div>
    </div>
  );
};

export default GuiaSanacionRelacionPropia;