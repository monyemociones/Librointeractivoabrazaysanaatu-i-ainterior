import React, { useState } from 'react';
import { Heart, Users, Star, Sparkles, Gift, ChevronDown, ChevronUp, Crown, Gem, Eye, Brain } from 'lucide-react';

const GuiaFortalezasHeridas = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('gifts');

  const woundsToStrengths = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      superpower: "La Guardiana del Vínculo Sagrado",
      
      spiritualGifts: [
        "Capacidad profunda para crear vínculos auténticos y duraderos",
        "Intuición excepcional para detectar las necesidades emocionales de otros",
        "Don natural para hacer que las personas se sientan verdaderamente vistas",
        "Habilidad para crear espacios de seguridad emocional donde otros pueden ser vulnerables",
        "Sabiduría sobre la importancia de la presencia y la consistencia en las relaciones",
        "Capacidad para transformar el miedo al abandono en compromiso consciente"
      ],
      
      relationshipStrengths: [
        "Te conviertes en una pareja excepcionalmente leal y comprometida",
        "Desarrollas la habilidad de amar profundamente sin perder tu identidad",
        "Creas relaciones donde ambos se sienten seguros de ser auténticos",
        "Aprendes a dar espacio sin interpretar distancia como abandono",
        "Desarrollas una comunicación extraordinariamente profunda y honesta",
        "Te conviertes en experta en nutrir y sostener conexiones a largo plazo"
      ],
      
      mentalEvolution: [
        "Tu mente aprende a estar completamente presente consigo misma sin necesitar validación externa",
        "Desarrollas una capacidad extraordinaria para disfrutar y valorar tu propia compañía",
        "Tu conciencia se expande para reconocer que la soledad es libertad, no castigo",
        "Aprendes a distinguir entre estar sola y sentirte abandonada - transformando el miedo en poder",
        "Tu mente cultiva una independencia emocional que te permite amar sin aferrarte",
        "Desarrollas la sabiduría de que tu completitud viene de adentro, no de otros"
      ],
      
      personalPowers: [
        "Independencia emocional sana que permite intimidad real",
        "Capacidad de disfrutar soledad sin sentir abandono",
        "Sabiduría para distinguir entre necesidad y amor verdadero",
        "Fortaleza interior que no depende de validación externa",
        "Habilidad para crear seguridad interna que irradias a otros",
        "Maestría en el equilibrio entre autonomía y conexión"
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
      
      superpower: "La Maestra de la Autenticidad Radiante",
      
      spiritualGifts: [
        "Capacidad extraordinaria para aceptar y celebrar la diversidad humana",
        "Don para ver la belleza única en cada persona, incluyéndote a ti misma",
        "Sabiduría profunda sobre el valor intrínseco que no depende de aprobación externa",
        "Habilidad para crear espacios donde otros pueden ser completamente auténticos",
        "Intuición para reconocer y nutrir el potencial oculto en las personas",
        "Maestría en transformar la crítica en crecimiento consciente"
      ],
      
      relationshipStrengths: [
        "Te conviertes en una pareja que celebra genuinamente la autenticidad",
        "Desarrollas la habilidad de amar incondicionalmente sin tratar de cambiar al otro",
        "Creas relaciones donde ambos pueden expresar su verdadero ser",
        "Aprendes a comunicar necesidades sin miedo al rechazo",
        "Desarrollas una aceptación que sana las heridas de rechazo de tu pareja",
        "Te conviertes en experta en amor incondicional y aceptación radical"
      ],
      
      mentalEvolution: [
        "Tu mente se libera completamente de la necesidad de aprobación externa para funcionar",
        "Desarrollas una autosuficiencia emocional que te permite brillar sin validación de otros",
        "Tu conciencia comprende que el rechazo de algunos es la liberación hacia tu verdadera tribu",
        "Aprendes que no necesitas que todos te entiendan - solo necesitas entenderte a ti misma",
        "Tu mente cultiva una confianza interna tan sólida que el juicio externo se vuelve irrelevante",
        "Desarrollas la sabiduría de que tu valor es inherente, no condicional"
      ],
      
      personalPowers: [
        "Autenticidad magnética que atrae relaciones genuinas",
        "Confianza inquebrantable en tu valor único e irremplazable",
        "Capacidad de brillar sin dimming por miedo al juicio",
        "Sabiduría para discernir entre crítica constructiva y destructiva",
        "Fortaleza para mantenerte fiel a ti misma bajo presión social",
        "Maestría en celebrar tus cualidades sin arrogancia"
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
      
      superpower: "La Guerrera de la Dignidad Sagrada",
      
      spiritualGifts: [
        "Capacidad extraordinaria para reconocer y detener patrones abusivos",
        "Sabiduría profunda sobre el valor sagrado de cada ser humano",
        "Don para empoderar a otros a reclamar su dignidad y poder personal",
        "Intuición aguda para detectar manipulación y dinámicas tóxicas",
        "Habilidad para transformar traumas en fuerza y sabiduría sanadora",
        "Maestría en establecer límites que protegen sin cerrar el corazón"
      ],
      
      relationshipStrengths: [
        "Te conviertes en una pareja que modela respeto mutuo y dignidad",
        "Desarrollas la habilidad de amar fieramente sin tolerar abuso",
        "Creas relaciones basadas en igualdad, respeto y apoyo mutuo",
        "Aprendes a comunicar límites con amor pero firmeza inquebrantable",
        "Desarrollas una compasión que no sacrifica tu bienestar",
        "Te conviertes en experta en amor que fortalece en lugar de debilitar"
      ],
      
      mentalEvolution: [
        "Tu mente desarrolla una habilidad magistral para establecer límites claros y firmes",
        "Aprendes a reconocer las señales más sutiles de manipulación y control",
        "Tu conciencia se expande para nunca más permitir que traspasen tus fronteras personales",
        "Desarrollas una claridad mental que distingue instantáneamente entre amor real y control disfrazado",
        "Tu mente cultiva un 'no' sagrado que protege tu energía y dignidad",
        "Aprendes que poner límites no es agresión, es amor propio en acción"
      ],
      
      personalPowers: [
        "Fortaleza interior que no puede ser quebrantada por otros",
        "Capacidad de mantenerte firme en tu verdad incluso bajo presión",
        "Sabiduría para distinguir entre amor real y manipulación disfrazada",
        "Coraje extraordinario para defender tu dignidad y la de otros",
        "Habilidad para sanar y ayudar a otros sin revictimizarte",
        "Maestría en transformar dolor en propósito y poder personal"
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
      
      superpower: "La Guardiana de la Verdad y la Equidad",
      
      spiritualGifts: [
        "Capacidad extraordinaria para ver y defender la verdad en situaciones complejas",
        "Don natural para crear justicia y equidad en todas tus relaciones",
        "Sabiduría profunda sobre la importancia de la integridad y honestidad",
        "Habilidad para ayudar otros a encontrar su voz y defender su verdad",
        "Intuición aguda para detectar manipulación y gaslighting",
        "Maestría en sostener múltiples perspectivas sin perder tu centro"
      ],
      
      relationshipStrengths: [
        "Te conviertes en una pareja que honra y valida la experiencia del otro",
        "Desarrollas la habilidad de resolver conflictos con equidad y compasión",
        "Creas relaciones donde la verdad es valorada por encima de la comodidad",
        "Aprendes a comunicarte con claridad cristalina y honestidad amorosa",
        "Desarrollas una integridad que inspira confianza profunda",
        "Te conviertes en experta en crear acuerdos justos y mutuamente beneficiosos"
      ],
      
      mentalEvolution: [
        "Tu mente se convierte en una búsqueda constante y natural del equilibrio en todas las situaciones",
        "Desarrollas una habilidad extraordinaria para ver todos los ángulos de un conflicto",
        "Tu conciencia busca instintivamente crear armonía y justicia donde hay caos",
        "Aprendes a promover equilibrios que honren a todas las partes involucradas",
        "Tu mente cultiva una sabiduría que transforma conflictos en oportunidades de crecimiento",
        "Desarrollas la capacidad de ser mediadora natural en cualquier situación tensa"
      ],
      
      personalPowers: [
        "Claridad mental que no puede ser nublada por manipulación",
        "Capacidad de mantenerte centrada en tu verdad incluso bajo gaslighting",
        "Sabiduría para discernir entre diferentes versiones de los eventos",
        "Fortaleza para defender la justicia incluso cuando es incómodo",
        "Habilidad para comunicar verdades difíciles con amor y compasión",
        "Maestría en crear equidad sin sacrificar la misericordia"
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
      
      superpower: "La Maestra de la Dignidad Radiante",
      
      spiritualGifts: [
        "Capacidad extraordinaria para elevar y celebrar la dignidad de otros",
        "Don natural para ver la grandeza en las personas, especialmente en sus momentos vulnerables",
        "Sabiduría profunda sobre el poder transformador de la celebración genuina",
        "Habilidad para crear espacios donde otros pueden brillar sin miedo al juicio",
        "Intuición para detectar y sanar heridas de vergüenza en las personas",
        "Maestría en transformar la vulnerabilidad en fortaleza y autenticidad"
      ],
      
      relationshipStrengths: [
        "Te conviertes en una pareja que celebra genuinamente los éxitos del otro",
        "Desarrollas la habilidad de apoyar sin competir o minimizar",
        "Creas relaciones donde ambos pueden ser vulnerables sin temor al juicio",
        "Aprendes a comunicar con humor sano que eleva en lugar de degradar",
        "Desarrollas una admiración genuina que sana heridas de autoestima",
        "Te conviertes en experta en crear momentos de celebración y reconocimiento"
      ],
      
      mentalEvolution: [
        "Tu mente desarrolla un conocimiento profundo e inquebrantable de tu propio valor",
        "Aprendes a reconocer tu grandeza sin necesidad de comparación o validación externa",
        "Tu conciencia se expande para celebrar tus logros sin arrogancia pero con orgullo genuino",
        "Desarrollas una autoestima tan sólida que los intentos de humillación se vuelven irrelevantes",
        "Tu mente cultiva una dignidad interna que nadie puede quitarte",
        "Aprendes que tu valor no depende de la opinión de otros sino de tu propia autenticidad"
      ],
      
      personalPowers: [
        "Dignidad inquebrantable que no depende de la aprobación externa",
        "Capacidad de brillar autténticamente sin dimming por otros",
        "Sabiduría para discernir entre humor sano y humillación disfrazada",
        "Fortaleza para mantener tu valor incluso cuando otros te minimizan",
        "Habilidad para transformar momentos embarazosos en oportunidades de conexión",
        "Maestría en celebrar tus logros sin arrogancia pero con orgullo sano"
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
      
      superpower: "La Guardiana de la Confianza Sagrada",
      
      spiritualGifts: [
        "Capacidad extraordinaria para discernir quién es verdaderamente confiable",
        "Don natural para crear vínculos de confianza profunda y duradera",
        "Sabiduría excepcional sobre la naturaleza de la lealtad auténtica",
        "Habilidad para sanar heridas de traición en otros con compasión profunda",
        "Intuición aguda para detectar incongruencias entre palabras y acciones",
        "Maestría en construir confianza gradual basada en consistencia real"
      ],
      
      relationshipStrengths: [
        "Te conviertes en una pareja excepcionalmente confiable y leal",
        "Desarrollas la habilidad de confiar sabiamente sin ingenuidad",
        "Creas relaciones donde la transparencia y honestidad son pilares fundamentales",
        "Aprendes a comunicar tus necesidades de seguridad sin controlar",
        "Desarrollas una lealtad que inspira lo mismo en otros",
        "Te conviertes en experta en reparar y reconstruir confianza cuando se daña"
      ],
      
      mentalEvolution: [
        "Tu mente desarrolla una habilidad extraordinaria para ver lo que está oculto detrás de las palabras",
        "Aprendes a detectar incongruencias entre lo que las personas dicen y hacen",
        "Tu conciencia se agudiza para percibir las verdaderas intenciones más allá de las apariencias",
        "Desarrollas una intuición casi psíquica para reconocer la autenticidad genuina",
        "Tu mente cultiva la sabiduría de leer entre líneas y ver patrones ocultos",
        "Aprendes a confiar en tu intuición interna más que en las palabras externas"
      ],
      
      personalPowers: [
        "Integridad impecable que genera confianza instantánea en otros",
        "Capacidad de perdonar traiciones sin volverse ingenua o vulnerable",
        "Sabiduría para distinguir entre desconfianza saludable y paranoia",
        "Fortaleza para mantener el corazón abierto después de ser lastimada",
        "Habilidad para crear acuerdos y compromisos que honran ambas partes",
        "Maestría en equilibrar vulnerabilidad con protección inteligente"
      ]
    }
  ];

  const currentWound = woundsToStrengths[selectedWound];

  const sections = [
    { id: 'gifts', title: 'Dones Espirituales', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'relationships', title: 'Fortalezas en Relaciones', icon: <Heart className="w-5 h-5" /> },
    { id: 'mental', title: 'Evolución Mental y Conciencia', icon: <Brain className="w-5 h-5" /> },
    { id: 'personal', title: 'Poderes Personales', icon: <Crown className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-amber-50 to-yellow-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Star className="text-amber-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Fortalezas y Dones de Heridas Sanadas</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Descubre los superpoderes únicos que desarrollas cuando transformas tus heridas más profundas en tu mayor fortaleza.
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {woundsToStrengths.map((wound, index) => (
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

      {/* Current Wound Strengths */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              {currentWound.superpower}
            </h2>
            <p className="text-gray-600 mt-2">Los dones únicos que nacen de sanar la herida de {currentWound.name.toLowerCase()}</p>
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
                  {section.id === 'gifts' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Dones espirituales únicos que desarrollas al sanar esta herida:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.spiritualGifts.map((gift, index) => (
                          <li key={index} className="flex items-start">
                            <Sparkles className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{gift}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-purple-800">
                          <strong>Tu Don Especial:</strong> Tu herida sanada se convierte en tu mayor regalo para el mundo. 
                          Lo que más te dolió se transforma en tu capacidad más poderosa para sanar a otros.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'relationships' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Fortalezas excepcionales que aportas a tus relaciones una vez sanada:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.relationshipStrengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <Heart className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{strength}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-pink-50 border border-pink-200 rounded-lg p-4">
                        <p className="text-pink-800">
                          <strong>Amor Transformado:</strong> Tu capacidad de amar se vuelve extraordinariamente profunda 
                          porque conoces el valor real de lo que ofreces y recibes.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'mental' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Transformación profunda de tu mente y conciencia al integrar esta herida:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.mentalEvolution.map((evolution, index) => (
                          <li key={index} className="flex items-start">
                            <Brain className="text-indigo-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{evolution}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <p className="text-indigo-800">
                          <strong>Sabiduría Interior:</strong> Tu mente se convierte en tu aliada más poderosa. 
                          Lo que antes era tu mayor debilidad ahora es tu fortaleza mental más desarrollada.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {section.id === 'personal' && (
                    <div>
                      <p className="text-gray-600 mb-4 italic">
                        Poderes personales que emergen cuando integras completamente tu herida:
                      </p>
                      <ul className="space-y-3">
                        {currentWound.personalPowers.map((power, index) => (
                          <li key={index} className="flex items-start">
                            <Crown className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{power}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800">
                          <strong>Tu Reinado Interior:</strong> Te conviertes en soberana de tu propia experiencia, 
                          con una sabiduría que solo puede nacer de haber transformado el dolor en poder.
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
      <div className="text-center bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-lg p-6">
        <Gem className="mx-auto text-amber-600 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-amber-800 mb-2">
          Tu Herida es Tu Diamante
        </h3>
        <p className="text-amber-700 max-w-2xl mx-auto">
          Lo que más te lastimó se convierte en tu mayor fortaleza. Tu dolor transformado 
          es tu don más precioso para el mundo. No hay sanador más poderoso que quien ha 
          caminado el camino de la transformación personal.
        </p>
        <div className="mt-4 text-sm text-amber-600 font-medium">
          "Las heridas son el lugar donde la Luz entra en ti" - Rumi
        </div>
      </div>
    </div>
  );
};

export default GuiaFortalezasHeridas;