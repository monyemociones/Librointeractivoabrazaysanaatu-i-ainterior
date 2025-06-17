import React, { useState } from 'react';
import { BookOpen, Heart, Star, Lightbulb, Download, MousePointer, ArrowRight, Sparkles, Gift, ChevronDown, ChevronUp } from 'lucide-react';

const AmorIncondicionalEbook = () => {
  const [selectedFormat, setSelectedFormat] = useState('interactive');
  const [expandedSection, setExpandedSection] = useState('welcome');
  const [currentStep, setCurrentStep] = useState(0);

  const transformationSteps = [
    {
      icon: "🔍",
      title: "Reconocer",
      description: "Identifica cuáles de las 6 heridas resuenan contigo y cómo se manifiestan en tu vida actual."
    },
    {
      icon: "💝",
      title: "Comprender", 
      description: "Entiende el propósito espiritual de cada herida y cómo llegó a tu vida para enseñarte sobre el amor."
    },
    {
      icon: "🌱",
      title: "Sanar",
      description: "Aplica herramientas prácticas y ejercicios diseñados para transformar el dolor en sabiduría."
    },
    {
      icon: "✨",
      title: "Transformar",
      description: "Convierte cada herida en una fortaleza, cada dolor en compasión, cada miedo en amor."
    }
  ];

  const benefits = [
    {
      icon: "💜",
      title: "Libertad Emocional",
      description: "Libérate de patrones que han limitado tu capacidad de amar y ser amada"
    },
    {
      icon: "🧘‍♀️", 
      title: "Paz Interior",
      description: "Encuentra la serenidad que viene de comprender y sanar tu historia"
    },
    {
      icon: "💖",
      title: "Relaciones Saludables",
      description: "Crea vínculos auténticos basados en amor incondicional, no en heridas"
    },
    {
      icon: "🌟",
      title: "Autoestima Genuina",
      description: "Desarrolla un amor propio inquebrantable que no dependa de circunstancias externas"
    },
    {
      icon: "🦋",
      title: "Transformación Total",
      description: "Experimenta una metamorfosis completa: de víctima a heroína de tu propia historia"
    },
    {
      icon: "🎯",
      title: "Propósito Claro",
      description: "Comprende cómo tus experiencias te han preparado para tu misión de vida"
    }
  ];

  const sections = [
    { id: 'welcome', title: '¡Bienvenida a tu Transformación!', icon: <Heart className="w-5 h-5" /> },
    { id: 'journey', title: 'Tu Viaje de Sanación', icon: <Star className="w-5 h-5" /> }, 
    { id: 'benefits', title: 'Lo que Vas a Lograr', icon: <Sparkles className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="text-purple-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Amor Incondicional: De Heridas a Fortalezas
          </h1>
        </div>
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-2xl p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-purple-800 mb-3">
            ✨ Transforma tus Heridas en Amor Incondicional ✨
          </h2>
          <p className="text-purple-700 text-lg leading-relaxed">
            Este ebook interactivo te guiará en un viaje sagrado hacia la sanación profunda. 
            Descubrirás cómo cada herida de tu infancia contiene en realidad una lección de amor 
            que tu alma vino a aprender.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
              className="w-full p-6 flex items-center justify-between text-left bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <div className="flex items-center">
                {section.icon}
                <span className="ml-3 text-xl font-semibold">{section.title}</span>
              </div>
              {expandedSection === section.id ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {expandedSection === section.id && (
              <div className="p-8">
                {section.id === 'welcome' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        🌸 Un Mensaje Especial Para Ti 🌸
                      </h3>
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-6 rounded-lg">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Querida alma valiente, si este ebook ha llegado a tus manos, no es casualidad. 
                          Tu alma está lista para liberarse de las cadenas del pasado y abrirse a una vida 
                          llena de amor incondicional.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Las heridas de tu infancia no son tu enemigo. Son maestras disfrazadas, 
                          lecciones de amor que viniste a aprender en esta encarnación. Cada dolor 
                          que has sentido contiene en su núcleo una perla de sabiduría esperando ser descubierta.
                        </p>
                        <p className="text-purple-800 font-semibold text-lg">
                          Este no es solo un ebook, es tu guía hacia la libertad emocional completa.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 text-center">
                        <div className="text-3xl mb-3">🎯</div>
                        <h4 className="font-bold text-pink-800 mb-2">Para Ti Si...</h4>
                        <p className="text-pink-700 text-sm">
                          Sientes que patrones del pasado siguen limitando tu presente
                        </p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                        <div className="text-3xl mb-3">💝</div>
                        <h4 className="font-bold text-purple-800 mb-2">Si Buscas...</h4>
                        <p className="text-purple-700 text-sm">
                          Sanar de raíz, no solo cubrir los síntomas de tus heridas
                        </p>
                      </div>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-center">
                        <div className="text-3xl mb-3">🌟</div>
                        <h4 className="font-bold text-indigo-800 mb-2">Si Estás Lista...</h4>
                        <p className="text-indigo-700 text-sm">
                          Para transformarte de víctima en heroína de tu propia historia
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === 'journey' && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        🌈 Tu Proceso de Transformación 🌈
                      </h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Este viaje está diseñado para llevarte paso a paso desde el reconocimiento 
                        hasta la transformación completa de tus heridas en fortalezas.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {transformationSteps.map((step, index) => (
                        <div 
                          key={index}
                          className={`relative bg-gradient-to-br from-white to-gray-50 border-2 rounded-xl p-6 text-center transition-all duration-300 cursor-pointer hover:shadow-lg ${
                            currentStep === index ? 'border-purple-400 shadow-lg scale-105' : 'border-gray-200'
                          }`}
                          onClick={() => setCurrentStep(index)}
                        >
                          <div className="text-4xl mb-4">{step.icon}</div>
                          <div className="flex items-center justify-center mb-2">
                            <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mr-2">
                              Paso {index + 1}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-800 mb-3">{step.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                          
                          {currentStep === index && (
                            <div className="absolute -top-2 -right-2">
                              <div className="bg-purple-500 text-white rounded-full p-2">
                                <Star className="w-4 h-4" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        ¿Por qué este método funciona?
                      </h4>
                      <p className="text-purple-700">
                        Porque no se trata solo de entender mentalmente tus heridas, sino de integrar 
                        la sabiduría a nivel del alma. Cada ejercicio está diseñado para que puedas 
                        sentir la transformación, no solo pensarla.
                      </p>
                    </div>
                  </div>
                )}

                {section.id === 'benefits' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        🎁 Los Regalos de tu Sanación 🎁
                      </h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Al completar este proceso de sanación, experimentarás transformaciones 
                        profundas en todas las áreas de tu vida.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                          <div className="text-3xl mb-4 text-center">{benefit.icon}</div>
                          <h4 className="font-bold text-gray-800 mb-3 text-center">{benefit.title}</h4>
                          <p className="text-gray-600 text-sm text-center leading-relaxed">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final Message */}
      <div className="mt-12 text-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-2 border-purple-200 rounded-2xl p-8">
        <Heart className="mx-auto text-purple-500 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-purple-800 mb-4">
          💝 Un Último Mensaje Antes de Comenzar 💝
        </h3>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-purple-700 text-lg leading-relaxed">
            Querida alma en proceso de sanación, recuerda que este viaje no se trata de 
            "arreglarte" porque no estás rota. Se trata de recordar tu magnificencia 
            y liberar todo lo que no te permite brillar.
          </p>
          <p className="text-purple-700 text-lg leading-relaxed">
            Cada herida que sanes no solo te libera a ti, sino que eleva la frecuencia 
            de amor en todo el planeta. Tu sanación es un regalo para el mundo.
          </p>
          <div className="bg-white bg-opacity-50 border border-purple-200 rounded-lg p-6 mt-6">
            <p className="text-purple-800 font-semibold text-xl">
              "Tus heridas son el lugar donde la Luz entra en ti." - Rumi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmorIncondicionalEbook;
