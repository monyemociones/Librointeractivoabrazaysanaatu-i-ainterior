import React, { useState } from 'react';
import { Heart, Users, AlertTriangle, Eye, Target, ChevronDown, ChevronUp, Star, Shield, Search, Brain, Lightbulb, Zap } from 'lucide-react';

const GuiaHeridasConsciencia = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [expandedSection, setExpandedSection] = useState('unconscious');

  const woundsInConsciousness = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      unconscious: [
        "Vives en pánico constante sin entender por qué",
        "Cambias tu personalidad completamente para cada pareja",
        "Te aferras desesperadamente sin darte cuenta",
        "Interpretas cualquier ausencia como abandono definitivo",
        "Saboteas relaciones buenas sin razón aparente",
        "Sientes terror inexplicable cuando estás sola",
        "Reaccionas con histeria ante retrasos o cambios de planes"
      ],
      
      conscious: [
        "Reconoces: 'Ah, mi herida de abandono se está activando'",
        "Identificas el patrón: 'Siempre hago esto cuando siento distancia'",
        "Te das cuenta de que proyectas el pasado en el presente",
        "Notas cómo tu comportamiento empuja a las personas",
        "Entiendes de dónde viene tu necesidad de control",
        "Reconoces cuándo estás reaccionando desde el miedo",
        "Ves la diferencia entre soledad temporal y abandono real"
      ],
      
      healing: [
        "Practicas quedarte contigo misma en la incomodidad",
        "Comunicas tu activación en lugar de reaccionar",
        "Desarrollas tolerancia a la incertidumbre",
        "Buscas terapia para sanar heridas de la infancia",
        "Construyes seguridad interna independiente de otros",
        "Aprendes técnicas de autorregulación emocional",
        "Practicas relaciones interdependientes, no codependientes"
      ],
      
      integrated: [
        "Puedes estar sola y disfrutarlo genuinamente",
        "Das espacio natural sin interpretarlo como rechazo",
        "Atraes personas emocionalmente disponibles",
        "Confías en la permanencia del amor real",
        "Tu seguridad viene de adentro, no de la pareja",
        "Puedes hablar de necesidades sin desesperación",
        "Ofreces libertad porque te sientes segura del amor"
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
      
      unconscious: [
        "Te disculpas por existir constantemente",
        "Cambias opiniones para agradar sin darte cuenta",
        "Sientes vergüenza por ser quien eres",
        "Evitas expresarte para no molestar",
        "Te torturas por errores menores",
        "Buscas aprobación compulsivamente",
        "Minimizas tus logros automáticamente"
      ],
      
      conscious: [
        "Reconoces: 'Estoy cambiando para ser aceptada'",
        "Te das cuenta cuando buscas validación externa",
        "Notas cómo minimizas tu esencia por miedo",
        "Identificas cuándo te disculpas innecesariamente",
        "Ves el patrón de evitar conflictos por miedo al rechazo",
        "Reconoces cuándo interpretas neutralidad como rechazo",
        "Entiendes tu necesidad compulsiva de agradar"
      ],
      
      healing: [
        "Practicas expresar opiniones auténticas gradualmente",
        "Aprendes a tolerar la posibilidad de desagradar",
        "Trabajas en desarrollar autoaceptación profunda",
        "Buscas espacios seguros para practicar autenticidad",
        "Desarrollas compasión hacia tu niña interior rechazada",
        "Practicas celebrar tus cualidades únicas",
        "Aprendes que puedes ser amada siendo tú misma"
      ],
      
      integrated: [
        "Eres auténtica sin necesidad de aprobación",
        "Puedes manejar críticas sin colapsar",
        "Atraes personas que te aman por quien eres",
        "Tu valor no depende de la opinión de otros",
        "Expresas necesidades sin disculparte",
        "Mantienes tu esencia incluso en desacuerdos",
        "Das ejemplo de autenticidad para otros"
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
      
      unconscious: [
        "Normalizas maltrato como 'amor pasional'",
        "No reconoces señales de alarma evidentes",
        "Justificas comportamientos abusivos automáticamente",
        "Sientes que provocas o mereces el mal trato",
        "Confundes control con cuidado",
        "Vives en hipervigilancia constante",
        "Repites patrones abusivos sin darte cuenta"
      ],
      
      conscious: [
        "Reconoces: 'Esto no está bien, aunque lo normalice'",
        "Identificas comportamientos abusivos como tales",
        "Te das cuenta de que justificas lo injustificable",
        "Notas cuándo tu cuerpo se tensa en alerta",
        "Reconoces patrones familiares tóxicos",
        "Ves cómo tu trauma atrae más trauma",
        "Entiendes que mereces ser tratada con respeto"
      ],
      
      healing: [
        "Aprendes sobre límites saludables y los practicas",
        "Buscas terapia especializada en trauma",
        "Desarrollas red de apoyo fuera de relaciones tóxicas",
        "Practicas confiar en tu intuición sobre el peligro",
        "Trabajas en sanar heridas de abuso pasado",
        "Aprendes señales de alarma temprana",
        "Develops estrategias de seguridad y autocuidado"
      ],
      
      integrated: [
        "Reconoces inmediatamente comportamientos inaceptables",
        "Tienes límites no negociables sobre cómo ser tratada",
        "Atraes personas respetuosas y gentiles",
        "Tu intuición es una brújula confiable de seguridad",
        "Puedes intimidad sin perder tu poder personal",
        "Ayudas a otros a reconocer patrones abusivos",
        "Vives desde el amor propio, no desde el miedo"
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
      
      unconscious: [
        "Dudas de tu percepción constantemente",
        "Aceptas explicaciones que no tienen sentido",
        "Permites que otros definan tu realidad",
        "Te sientes loca cuando tu intuición es correcta",
        "Justificas tratamientos injustos hacia ti",
        "Buscas validación externa compulsivamente",
        "Vives confundida sobre lo que realmente pasó"
      ],
      
      conscious: [
        "Reconoces: 'Mi percepción es válida'",
        "Identificas cuando alguien distorsiona la verdad",
        "Te das cuenta de que buscas validación externa",
        "Notas cuándo dudas de ti misma injustificadamente",
        "Reconoces el gaslighting cuando ocurre",
        "Ves el patrón de aceptar versiones falsas",
        "Entiendes que tu experiencia es real y válida"
      ],
      
      healing: [
        "Practicas confiar en tu percepción gradualmente",
        "Documentas eventos importantes para validarte",
        "Buscas personas que validen tu experiencia",
        "Aprendes sobre manipulación psicológica",
        "Desarrollas fuerza para mantener tu verdad",
        "Practicas responder: 'Esa no es mi experiencia'",
        "Trabajas en reconstruir confianza en ti misma"
      ],
      
      integrated: [
        "Confías profundamente en tu percepción",
        "Mantienes tu verdad sin necesidad de convencer",
        "Atraes personas que respetan tu experiencia",
        "No necesitas validación externa para saber qué es real",
        "Puedes discernir entre percepción y paranoia",
        "Ayudas a otros a confiar en su experiencia",
        "Vives desde tu centro de verdad interno"
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
      
      unconscious: [
        "Te autodespreciaste antes de que otros lo hagan",
        "Minimizas tus logros automáticamente",
        "Aceptas bromas hirientes como 'normales'",
        "Evitas brillar para no generar incomodidad",
        "Sientes vergüenza desproporcionada por todo",
        "Te ridiculizas constantemente",
        "Evitas oportunidades por miedo al juicio"
      ],
      
      conscious: [
        "Reconoces: 'Me estoy haciendo pequeña otra vez'",
        "Te das cuenta cuando minimizas tus talentos",
        "Notas cuándo aceptas comentarios hirientes",
        "Identificas tu patrón de autohumillación",
        "Reconoces cuándo evitas brillar por miedo",
        "Ves cómo tu vergüenza sabotea oportunidades",
        "Entiendes que mereces respeto y celebración"
      ],
      
      healing: [
        "Practicas recibir cumplidos sin minimizarlos",
        "Aprendes a celebrar tus logros genuinamente",
        "Estableces límites sobre humor hiriente",
        "Trabajas en sanar la vergüenza tóxica",
        "Buscas espacios donde puedas brillar segura",
        "Desarrollas respuestas asertivas a comentarios inapropiados",
        "Practicas dignidad personal sin disculpas"
      ],
      
      integrated: [
        "Permites que tu luz brille naturalmente",
        "Recibes reconocimiento con gracia y gratitud",
        "Atraes personas que celebran tu grandeza",
        "Tu dignidad es inquebrantable",
        "Puedes manejar críticas sin perder tu valor",
        "Inspiras a otros a brillar también",
        "Vives desde el orgullo sano de ser quien eres"
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
      
      unconscious: [
        "Vives en paranoia constante sin darte cuenta",
        "Interpretas todo como posible traición",
        "Investigas obsesivamente a tu pareja",
        "Saboteas cuando empiezas a confiar",
        "Mantienes secretos como 'protección'",
        "Traicionas primero para evitar ser traicionada",
        "No puedes relajarte nunca en la confianza"
      ],
      
      conscious: [
        "Reconoces: 'Mi paranoia está activada'",
        "Te das cuenta cuando investigas compulsivamente",
        "Notas cuándo interpretas neutralidad como traición",
        "Identificas tu patrón de sabotear confianza",
        "Reconoces cuándo proyectas traiciones pasadas",
        "Ves cómo tu desconfianza crea lo que temes",
        "Entiendes la diferencia entre intuición y paranoia"
      ],
      
      healing: [
        "Practicas confiar en pequeñas dosis",
        "Aprendes a comunicar miedos en lugar de investigar",
        "Trabajas en sanar traiciones del pasado",
        "Desarrollas tolerancia a la incertidumbre",
        "Buscas terapia para procesar trauma de traición",
        "Practicas ser digna de confianza tú misma",
        "Aprendes que sobrevivirás si te traicionan de nuevo"
      ],
      
      integrated: [
        "Confías basándose en consistencia de acciones",
        "Puedes discernir entre intuición real y miedo",
        "Atraes personas íntegras y confiables",
        "Tu confianza es sabia, no ciega",
        "Puedes manejar decepciones sin colapsar",
        "Das ejemplo de integridad en relaciones",
        "Vives desde la confianza en ti misma y en la vida"
      ]
    }
  ];

  const currentWound = woundsInConsciousness[selectedWound];

  const sections = [
    { 
      id: 'unconscious', 
      title: 'Estado Inconsciente', 
      icon: <Eye className="w-5 h-5" />,
      description: 'Reaccionas automáticamente, sin darte cuenta de los patrones'
    },
    { 
      id: 'conscious', 
      title: 'Estado Consciente', 
      icon: <Lightbulb className="w-5 h-5" />,
      description: 'Reconoces los patrones pero aún te cuesta cambiarlos'
    },
    { 
      id: 'healing', 
      title: 'Estado de Sanación', 
      icon: <Zap className="w-5 h-5" />,
      description: 'Trabajas activamente en transformar los patrones'
    },
    { 
      id: 'integrated', 
      title: 'Estado Integrado', 
      icon: <Star className="w-5 h-5" />,
      description: 'Has transformado la herida en sabiduría y fortaleza'
    }
  ];

  const getSectionColor = (sectionId) => {
    const colors = {
      unconscious: 'bg-gray-500 hover:bg-gray-600',
      conscious: 'bg-blue-500 hover:bg-blue-600', 
      healing: 'bg-orange-500 hover:bg-orange-600',
      integrated: 'bg-green-500 hover:bg-green-600'
    };
    return colors[sectionId] || 'bg-gray-500';
  };

  const getSectionData = (sectionId) => {
    switch(sectionId) {
      case 'unconscious': return currentWound.unconscious;
      case 'conscious': return currentWound.conscious;
      case 'healing': return currentWound.healing;
      case 'integrated': return currentWound.integrated;
      default: return [];
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Brain className="text-indigo-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold text-gray-800">Heridas Emocionales por Estados de Consciencia</h1>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Cada herida evoluciona a través de diferentes niveles de consciencia. Identifica en qué etapa te encuentras 
          para enfocar tu sanación de manera más efectiva.
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {woundsInConsciousness.map((wound, index) => (
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

      {/* Current Wound Evolution */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor}`}>
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{currentWound.icon}</span>
          <div>
            <h2 className={`text-3xl font-bold ${currentWound.textColor}`}>
              EVOLUCIÓN DE LA HERIDA DE {currentWound.name}
            </h2>
            <p className="text-gray-600 mt-2">Del inconsciente a la integración consciente</p>
          </div>
        </div>

        {/* Consciousness Level Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white rounded-full p-2 shadow-sm">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  expandedSection === section.id 
                    ? getSectionColor(section.id).replace('hover:', '') + ' text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.icon}
                <span className="ml-1 hidden sm:inline">{section.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                className={`w-full p-6 flex items-center justify-between text-left ${getSectionColor(section.id)} text-white rounded-lg transition-opacity`}
              >
                <div className="flex items-center">
                  {section.icon}
                  <div className="ml-3">
                    <div className="text-lg font-semibold">{section.title}</div>
                    <div className="text-sm opacity-90">{section.description}</div>
                  </div>
                </div>
                {expandedSection === section.id ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              {expandedSection === section.id && (
                <div className="p-6 border-t">
                  <div>
                    <ul className="space-y-3">
                      {getSectionData(section.id).map((item, index) => (
                        <li key={index} className="flex items-start">
                          {section.id === 'unconscious' && <Eye className="text-gray-500 mr-3 mt-1 flex-shrink-0" size={16} />}
                          {section.id === 'conscious' && <Lightbulb className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={16} />}
                          {section.id === 'healing' && <Zap className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={16} />}
                          {section.id === 'integrated' && <Star className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />}
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`mt-6 rounded-lg p-4 ${
                      section.id === 'unconscious' ? 'bg-gray-50 border border-gray-200' :
                      section.id === 'conscious' ? 'bg-blue-50 border border-blue-200' :
                      section.id === 'healing' ? 'bg-orange-50 border border-orange-200' :
                      'bg-green-50 border border-green-200'
                    }`}>
                      <p className={
                        section.id === 'unconscious' ? 'text-gray-800' :
                        section.id === 'conscious' ? 'text-blue-800' :
                        section.id === 'healing' ? 'text-orange-800' :
                        'text-green-800'
                      }>
                        <strong>
                          {section.id === 'unconscious' && 'Compasión: '}
                          {section.id === 'conscious' && 'Esperanza: '}
                          {section.id === 'healing' && 'Proceso: '}
                          {section.id === 'integrated' && 'Celebración: '}
                        </strong>
                        {section.id === 'unconscious' && 'No te juzgues por estar aquí. Es el punto de partida natural para toda sanación.'}
                        {section.id === 'conscious' && 'La consciencia es el primer gran paso. Ya no eres víctima inconsciente de tus patrones.'}
                        {section.id === 'healing' && 'La sanación requiere tiempo y paciencia contigo misma. Cada pequeño paso cuenta.'}
                        {section.id === 'integrated' && 'Has transformado tu mayor herida en tu mayor fortaleza. Ahora puedes ayudar a otros.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Reminder */}
      <div className="text-center bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-lg p-6">
        <Brain className="mx-auto text-indigo-500 mb-3" size={32} />
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">
          La Evolución de la Consciencia es Espiral
        </h3>
        <p className="text-indigo-700 max-w-2xl mx-auto">
          No es lineal. Puedes estar integrada en un área y inconsciente en otra. 
          Puedes regresar a estados anteriores bajo estrés y eso es completamente normal. 
          La sanación es un proceso de toda la vida, y cada nivel de consciencia tiene su propósito y belleza.
        </p>
      </div>
    </div>
  );
};

export default GuiaHeridasConsciencia;