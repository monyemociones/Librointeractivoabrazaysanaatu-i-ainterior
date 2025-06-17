import React, { useState } from 'react';
import { Heart, Sparkles, Sun, Moon, Star, ChevronDown, ChevronUp, Shield, Gift, Crown, Compass } from 'lucide-react';

const GuiaAmorPropio = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('recognition');

  const wounds = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      recognition: {
        title: "Reconociendo tu Fortaleza Interior",
        description: "Tu capacidad de sobrevivir al abandono revela una fortaleza interior extraordinaria. Eres una mujer completa por ti misma.",
        affirmation: "Soy mi hogar, mi refugio y mi compañía más preciosa"
      },
      
      selfCompassion: [
        "Habla contigo misma como lo harías con tu mejor amiga cuando sientes soledad",
        "Reconoce que tu miedo al abandono es una respuesta natural de protección",
        "Celebra cada momento que eliges quedarte contigo misma en lugar de huir",
        "Abraza tu sensibilidad como un don, no como una debilidad",
        "Perdónate por las veces que has saboteado relaciones por miedo",
        "Honra tu necesidad de seguridad emocional como algo válido y hermoso"
      ],
      
      dailyPractices: [
        "Ritual matutino: 'Buenos días, amor mío' frente al espejo",
        "Cita contigo misma una vez por semana (café, parque, museo)",
        "Escribe 3 cosas que amas de tu compañía cada noche",
        "Medita 10 minutos enfocándote en tu respiración como ancla interior",
        "Crea un 'kit de emergencia emocional' para momentos de soledad",
        "Practica decir 'no' a planes que no te nutren realmente"
      ],
      
      innerChild: [
        "Dile a tu niña interior: 'Nunca más estarás sola, yo estoy aquí'",
        "Compra algo pequeño y especial solo para ti, como lo harías por una hija",
        "Abraza un peluche o almohada cuando sientes el vacío del abandono",
        "Escribe cartas de amor a la niña que fuiste y que necesitaba protección",
        "Crea tradiciones personales (té dominical, baño de luna llena)",
        "Dile a tu niña interior que es digna de amor incondicional"
      ],
      
      boundaries: [
        "No toleres migajas de atención de personas emocionalmente indisponibles",
        "Comunica tus necesidades sin disculparte por tenerlas",
        "Establece límites claros sobre cuánto tiempo puedes esperar respuestas",
        "No te conformes con relaciones donde eres la única que invierte",
        "Aprende a detectar las señales de alguien que no está disponible emocionalmente",
        "Practica terminar conversaciones o encuentros cuando no te nutren"
      ],
      
      transformation: [
        "Tu independencia emocional se convierte en tu superpoder",
        "Atraes personas que valoran tu compañía, no que la necesitan desesperadamente",
        "Te conviertes en un refugio seguro para otros que han vivido abandono",
        "Desarrollas una intuición poderosa sobre la calidad de las conexiones",
        "Tu capacidad de estar sola se transforma en un don de paz interior",
        "Inspiras a otros a desarrollar su propia completitud emocional"
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
      
      recognition: {
        title: "Celebrando tu Autenticidad Única",
        description: "Cada aspecto de ti que fue rechazado es precisamente lo que te hace extraordinaria y única en este mundo.",
        affirmation: "Mi esencia es perfecta tal como es, y merezco amor incondicional"
      },
      
      selfCompassion: [
        "Abraza tus 'defectos' como características que te hacen interesante",
        "Reconoce que el rechazo de otros habla de sus limitaciones, no de las tuyas",
        "Celebra tu sensibilidad como una cualidad que embellece el mundo",
        "Perdónate por haber tratado de cambiar para ser aceptada",
        "Honra tu individualidad como el regalo más precioso que tienes",
        "Trata tus diferencias como tesoros únicos que solo tú posees"
      ],
      
      dailyPractices: [
        "Mirror work: 'Te amo y te acepto completamente' cada mañana",
        "Lista diaria de 5 cosas únicas y maravillosas sobre ti",
        "Usa ropa que refleje tu verdadera personalidad, no lo que 'deberías' usar",
        "Practica expresar tu opinión real en conversaciones cotidianas",
        "Dedica tiempo a hobbies que realmente disfrutas, aunque otros no los entiendan",
        "Celebra tus logros sin minimizarlos o compararlos con otros"
      ],
      
      innerChild: [
        "Dile a tu niña interior: 'Eres perfecta exactamente como eres'",
        "Abraza las características que fueron criticadas en tu infancia",
        "Haz actividades que tu niña interior amaba pero le dijeron que eran 'tontas'",
        "Escribe una carta de disculpas a ti misma por haberte rechazado",
        "Compra algo que represente lo que amas de tu personalidad única",
        "Celebra tu cumpleaños como una fiesta de tu existencia maravillosa"
      ],
      
      boundaries: [
        "No cambies tu personalidad para encajar en ningún grupo",
        "Aléjate de personas que constantemente te critican o minimizan",
        "No justifiques tus gustos, intereses o forma de ser",
        "Establece límites con familiares que siguen señalando tus 'defectos'",
        "No toleres bromas o comentarios que dañen tu autoestima",
        "Rodéate solo de personas que celebran tu autenticidad"
      ],
      
      transformation: [
        "Tu autenticidad se convierte en un imán para las personas correctas",
        "Te conviertes en defensora de otros que luchan con la autoaceptación",
        "Desarrollas una confianza inquebrantable en tu propio valor",
        "Tu individualidad se transforma en tu marca personal poderosa",
        "Inspiras a otros a abrazar sus propias peculiaridades",
        "Creas espacios seguros donde otros pueden ser auténticos"
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
      
      recognition: {
        title: "Honrando tu Supervivencia Heroica",
        description: "Sobreviviste a lo imposible. Tu fuerza interior es incomparable y tu capacidad de sanar es tu superpoder.",
        affirmation: "Soy una guerrera de luz que merece amor, respeto y seguridad absoluta"
      },
      
      selfCompassion: [
        "Reconoce que sobrevivir al abuso requiere una fuerza extraordinaria",
        "Perdónate por cualquier momento en que no pudiste protegerte",
        "Honra tu cuerpo como el templo sagrado que siempre fue",
        "Celebra cada día que eliges sanar en lugar de permanecer en el dolor",
        "Abraza tu hipervigilancia como una respuesta inteligente de supervivencia",
        "Reconoce que mereces gentileza, especialmente de ti misma"
      ],
      
      dailyPractices: [
        "Rituales de seguridad: verifica que estás segura en tu espacio",
        "Automasaje suave para reconectar amorosamente con tu cuerpo",
        "Afirmaciones de poder: 'Soy fuerte, soy valiosa, soy digna'",
        "Ejercicios de respiración profunda para autorregular tu sistema nervioso",
        "Journaling sobre tus emociones sin juzgarlas",
        "Actividad física que te haga sentir poderosa (yoga, danza, caminar)"
      ],
      
      innerChild: [
        "Dile a tu niña interior: 'Lamento que nadie te protegió, pero ahora yo lo haré'",
        "Crea un espacio sagrado y seguro solo para tu niña interior",
        "Abraza peluches o mantas suaves cuando necesitas consuelo",
        "Escribe cartas de amor a la niña valiente que fuiste",
        "Haz actividades que tu niña interior encuentra mágicas y sanadoras",
        "Promete proteger a tu niña interior del peligro y la crueldad"
      ],
      
      boundaries: [
        "Límites de acero: cero tolerancia a cualquier forma de abuso",
        "Confía en tu intuición cuando algo se siente peligroso",
        "No expliques por qué no toleras ciertos comportamientos",
        "Aléjate inmediatamente de situaciones que disparan tu trauma",
        "Rodéate solo de personas que respetan tu espacio y límites",
        "Practique decir 'NO' con firmeza y sin culpa"
      ],
      
      transformation: [
        "Tu sensibilidad al peligro se convierte en protección para otros",
        "Te conviertes en una voz poderosa contra la injusticia",
        "Desarrollas una compasión profunda por otros supervivientes",
        "Tu sanación inspira a otros a romper ciclos de abuso",
        "Tu fuerza interior se convierte en un faro de esperanza",
        "Creas relaciones basadas en respeto mutuo y cuidado genuino"
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
      
      recognition: {
        title: "Validando tu Verdad Interior",
        description: "Tu percepción de la realidad es válida y valiosa. Tu verdad interior es tu brújula más confiable.",
        affirmation: "Mi verdad es sagrada y tengo derecho a expresarla y vivirla"
      },
      
      selfCompassion: [
        "Valida tus propias emociones sin necesidad de aprobación externa",
        "Reconoce que tu intuición es sabia y merece ser escuchada",
        "Perdónate por las veces que dudaste de tu propia realidad",
        "Honra tu sentido de justicia como una cualidad noble",
        "Celebra tu capacidad de ver la verdad incluso cuando otros no pueden",
        "Abraza tu necesidad de equidad como parte de tu nobleza interior"
      ],
      
      dailyPractices: [
        "Journaling de validación: 'Mi experiencia es real y válida'",
        "Practica confiar en tu primera impresión sobre situaciones",
        "Documenta situaciones donde tu intuición resultó correcta",
        "Celebra momentos donde defendiste tu verdad",
        "Medita preguntando: '¿Qué dice mi sabiduría interior?'",
        "Practica decir: 'Esa no es mi experiencia' cuando otros invaliden tu realidad"
      ],
      
      innerChild: [
        "Dile a tu niña interior: 'Te creo, tu experiencia importa'",
        "Valida las emociones que no fueron reconocidas en tu infancia",
        "Escribe las verdades que no pudiste decir cuando eras pequeña",
        "Abraza a tu niña interior cuando se siente incomprendida",
        "Crea un espacio donde tu niña interior puede expresar su verdad",
        "Promete nunca más silenciar su voz interior"
      ],
      
      boundaries: [
        "No permitas que otros definan tu realidad o experiencia",
        "Aléjate de personas que constantemente minimizan tus sentimientos",
        "No justifiques tus emociones o percepciones ante nadie",
        "Establece límites con quienes usan gaslighting contigo",
        "Confía en tu juicio sobre las situaciones, incluso si otros disienten",
        "No toleres ser llamada 'dramática' por expresar tu verdad"
      ],
      
      transformation: [
        "Tu sentido de justicia se convierte en defensa de los vulnerables",
        "Te conviertes en una voz poderosa para los que no pueden hablar",
        "Desarrollas una confianza inquebrantable en tu propia percepción",
        "Tu búsqueda de la verdad inspira honestidad en otros",
        "Creas ambientes donde la autenticidad y la verdad son valoradas",
        "Tu intuición se convierte en una guía confiable para las decisiones importantes"
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
      
      recognition: {
        title: "Reclamando tu Dignidad Inherente",
        description: "Tu dignidad es inherente e intocable. Ninguna experiencia pasada puede disminuir tu valor fundamental.",
        affirmation: "Irradio dignidad y gracia en cada paso que doy"
      },
      
      selfCompassion: [
        "Abraza tus imperfecciones como parte de tu humanidad hermosa",
        "Reconoce que los errores son oportunidades de crecimiento, no motivos de vergüenza",
        "Perdónate por los momentos en que no te defendiste",
        "Celebra tu coraje de seguir intentando después de experiencias humillantes",
        "Honra tu vulnerabilidad como una fortaleza, no como una debilidad",
        "Trata tus momentos difíciles con la misma gentileza que darías a una amiga"
      ],
      
      dailyPractices: [
        "Camina con la cabeza en alto, conscientemente honrando tu dignidad",
        "Practica recibir cumplidos sin minimizarlos o desviarlos",
        "Vístete de manera que te haga sentir poderosa y hermosa",
        "Celebra tus logros públicamente, sin minimizar su importancia",
        "Practica hacer presentaciones o hablar en público para reclamar tu voz",
        "Usa affirmaciones de dignidad: 'Merezco respeto y admiración'"
      ],
      
      innerChild: [
        "Dile a tu niña interior: 'Eres hermosa, valiosa y digna de respeto'",
        "Abraza los aspectos de ti que fueron ridiculizados en el pasado",
        "Escribe cartas de disculpa a tu niña interior por no proteger su dignidad",
        "Haz algo especial para honrar a la niña valiente que fuiste",
        "Crea rituales de celebración de tu niña interior",
        "Promete nunca más permitir que su dignidad sea pisoteada"
      ],
      
      boundaries: [
        "Cero tolerancia a bromas, burlas o comentarios degradantes",
        "No permitas que otros te usen como blanco de sus inseguridades",
        "Aléjate inmediatamente de situaciones donde te sientes ridiculizada",
        "No te disculpes por ocupar espacio o por ser vista",
        "Establece límites firmes con personas que no respetan tu dignidad",
        "Confía en tu derecho a ser tratada con respeto en todo momento"
      ],
      
      transformation: [
        "Tu dignidad restaurada inspira respeto en otros",
        "Te conviertes en defensora de la dignidad de personas vulnerables",
        "Desarrollas una presencia poderosa y magnética",
        "Tu autoaceptación permite que otros se acepten también",
        "Creas espacios donde la dignidad humana es sagrada",
        "Tu transformación se convierte en testimonio de poder personal"
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
      
      recognition: {
        title: "Honrando tu Capacidad de Amar",
        description: "Tu capacidad de confiar y amar a pesar de las traiciones pasadas demuestra la fortaleza extraordinaria de tu corazón.",
        affirmation: "Mi corazón es sabio y mi confianza es un regalo que comparto conscientemente"
      },
      
      selfCompassion: [
        "Reconoce que confiar no te hizo débil, te hizo valiente",
        "Perdónate por haber confiado en las personas incorrectas",
        "Celebra tu capacidad de mantener el corazón abierto después del dolor",
        "Honra tu lealtad como una cualidad hermosa, no como una falla",
        "Abraza tu necesidad de confianza como algo natural y sano",
        "Reconoce que mereces relaciones basadas en honestidad y transparencia"
      ],
      
      dailyPractices: [
        "Práctica de confianza gradual con personas que han demostrado ser confiables",
        "Journaling sobre las veces que tu intuición te alertó sobre traiciones",
        "Meditación de protección energética antes de interacciones importantes",
        "Celebra las relaciones actuales donde te sientes segura y valorada",
        "Practica compartir verdades pequeñas antes de revelar secretos importantes",
        "Desarrolla rituales de autocuidado cuando sientes desconfianza"
      ],
      
      innerChild: [
        "Dile a tu niña interior: 'Lamento que tu confianza fuera traicionada'",
        "Abraza la capacidad de asombro y confianza que tenías de niña",
        "Escribe sobre los momentos felices donde te sentiste segura y amada",
        "Promete proteger el corazón puro de tu niña interior",
        "Crea rituales de seguridad para cuando tu niña interior se siente vulnerable",
        "Celebra la valentía de tu niña interior para seguir amando"
      ],
      
      boundaries: [
        "Observa las acciones, no solo las palabras, antes de confiar",
        "Establece límites graduales: confianza se gana con tiempo",
        "No ignores las señales rojas por miedo a ser 'desconfiada'",
        "Aléjate de personas que mienten, incluso sobre cosas pequeñas",
        "Mantén algunas partes de ti privadas hasta que la confianza sea mutua",
        "No justifiques comportamientos traicioneros de otros"
      ],
      
      transformation: [
        "Tu discernimiento se convierte en sabiduría para elegir relaciones",
        "Te conviertes en un refugio seguro para otros que han sido traicionados",
        "Desarrollas relaciones profundas basadas en confianza mutua genuina",
        "Tu lealtad se convierte en un regalo preciado por las personas correctas",
        "Inspiras honestidad y transparencia en tus relaciones",
        "Creas círculos de confianza donde la autenticidad florece"
      ]
    }
  ];

  const currentWound = wounds[selectedWound];

  const sections = [
    { id: 'recognition', title: 'Reconocimiento de tu Fortaleza', icon: <Crown className="w-5 h-5" /> },
    { id: 'selfCompassion', title: 'Autocompasión Diaria', icon: <Heart className="w-5 h-5" /> },
    { id: 'dailyPractices', title: 'Prácticas de Amor Propio', icon: <Sun className="w-5 h-5" /> },
    { id: 'innerChild', title: 'Sanación de tu Niña Interior', icon: <Star className="w-5 h-5" /> },
    { id: 'boundaries', title: 'Límites Amorosos', icon: <Shield className="w-5 h-5" /> },
    { id: 'transformation', title: 'Tu Transformación Poderosa', icon: <Sparkles className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-rose-500 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Guía de Amor Propio para cada Herida</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Transforma cada herida en una fuente de poder personal. Cada dolor se convierte en sabiduría, cada cicatriz en fortaleza.
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
              AMOR PROPIO PARA {currentWound.name}
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
                  {section.id === 'recognition' && (
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 rounded-lg p-6">
                        <h4 className="font-bold text-pink-800 mb-3 text-lg">✨ {currentWound.recognition.title}</h4>
                        <p className="text-pink-700 mb-4">{currentWound.recognition.description}</p>
                        <div className="bg-white bg-opacity-60 rounded-lg p-4">
                          <h5 className="font-semibold text-pink-800 mb-2">💖 Afirmación Sanadora:</h5>
                          <p className="text-pink-700 italic font-medium">"{currentWound.recognition.affirmation}"</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'selfCompassion' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Formas específicas de tratarte con amor y comprensión:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.selfCompassion.map((practice, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-pink-500 mr-3 mt-1">💗</span>
                            <span className="text-gray-700">{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.id === 'dailyPractices' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Rutinas diarias para fortalecer tu amor propio:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.dailyPractices.map((practice, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-yellow-500 mr-3 mt-1">🌟</span>
                            <span className="text-gray-700">{practice}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800">
                          <strong>Recuerda:</strong> La constancia es más importante que la perfección. 
                          Cada pequeño acto de amor propio cuenta y se acumula.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'innerChild' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Cómo sanar y amar a tu niña interior:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.innerChild.map((practice, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-3 mt-1">🎀</span>
                            <span className="text-gray-700">{practice}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-purple-800">
                          <strong>Para tu niña interior:</strong> Ella merece todo el amor, protección y celebración 
                          que no recibió. Tú puedes dárselo ahora.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'boundaries' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Límites amorosos que protegen tu bienestar:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.boundaries.map((boundary, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1">🛡️</span>
                            <span className="text-gray-700">{boundary}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Los límites son amor:</strong> No son muros que te separan, sino jardines 
                          que protegen tu paz interior y permiten que florezcas.
                        </p>
                      </div>
                    </div>
                  )}

                  {section.id === 'transformation' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Cómo tu herida sanada se convierte en tu superpoder:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.transformation.map((transformation, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-3 mt-1">✨</span>
                            <span className="text-gray-700">{transformation}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800">
                          <strong>Tu transformación es inevitable:</strong> Cada paso que das en tu sanación 
                          no solo te libera a ti, sino que ilumina el camino para otros. Tu herida sanada 
                          se convierte en tu medicina más poderosa.
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
      <div className="text-center bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-lg p-8 mb-6">
        <Sparkles className="mx-auto text-rose-500 mb-4" size={40} />
        <h3 className="text-2xl font-bold text-rose-800 mb-4">
          Tu Viaje de Amor Propio
        </h3>
        <p className="text-rose-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Cada herida que sanas con amor propio no solo te libera a ti, sino que libera a tu linaje familiar, 
          a tus futuras generaciones y a todas las mujeres que cruzarán tu camino. Tu sanación es un acto 
          de servicio al mundo. Eres más poderosa de lo que imaginas.
        </p>
      </div>

      {/* Daily Reminder Card */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-pink-500 mr-2" size={24} />
          <h4 className="text-lg font-semibold text-gray-800">Recordatorio Diario</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-pink-50 rounded-lg p-4">
            <Moon className="mx-auto text-pink-500 mb-2" size={20} />
            <p className="text-sm text-pink-700 font-medium">Mañana</p>
            <p className="text-xs text-pink-600">"Hoy elijo amarme incondicionalmente"</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <Sun className="mx-auto text-yellow-500 mb-2" size={20} />
            <p className="text-sm text-yellow-700 font-medium">Mediodía</p>
            <p className="text-xs text-yellow-600">"Merezco cuidado y gentileza"</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <Star className="mx-auto text-purple-500 mb-2" size={20} />
            <p className="text-sm text-purple-700 font-medium">Noche</p>
            <p className="text-xs text-purple-600">"Celebro mi progreso y crecimiento"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaAmorPropio;