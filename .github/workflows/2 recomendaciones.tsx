import React, { useState } from 'react';
import { Heart, Target, Calendar, Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';

const GuiaIntroduccionAmorCorta = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [intention, setIntention] = useState('');
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      id: 'welcome',
      title: 'Bienvenida',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 'intention',
      title: 'Tu Intención',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      id: 'journey',
      title: 'Tu Ritmo',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 'celebration',
      title: 'Celebra',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const markStepComplete = (stepIndex) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      markStepComplete(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <Heart className="text-purple-600 mr-2 animate-pulse" size={32} />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Preparando tu Corazón
          </h1>
          <Heart className="text-pink-600 ml-2 animate-pulse" size={32} />
        </div>
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-xl p-4">
          <p className="text-purple-700 text-lg">
            ✨ Tu viaje de amor incondicional comienza aquí ✨
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-purple-700 font-semibold text-sm">Progreso</span>
          <span className="text-purple-600 text-sm">
            {completedSteps.length + (currentStep === steps.length - 1 ? 1 : 0)} de {steps.length}
          </span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((completedSteps.length + (currentStep === steps.length - 1 ? 1 : 0)) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Steps Navigation */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`flex items-center px-3 py-2 rounded-full transition-all text-sm font-medium ${
                index === currentStep
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : completedSteps.includes(index)
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50'
              }`}
            >
              {completedSteps.includes(index) ? (
                <CheckCircle className="w-4 h-4 mr-1" />
              ) : (
                <div className="mr-1">{React.cloneElement(step.icon, { className: "w-4 h-4" })}</div>
              )}
              {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`bg-gradient-to-r ${steps[currentStep].color} p-6 text-white text-center`}>
          <div className="flex justify-center mb-3">
            {steps[currentStep].icon}
          </div>
          <h2 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h2>
          <span className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm">
            Paso {currentStep + 1} de {steps.length}
          </span>
        </div>

        <div className="p-6">
          {/* Welcome Step */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  💕 Querida Alma Hermosa 💕
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No es casualidad que estés aquí. Tu alma estaba lista para este encuentro contigo misma.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Esta es tu guía sagrada de regreso al amor incondicional. Cada palabra fue escrita pensando en tu corazón y tu sanación.
                </p>
                <div className="bg-white bg-opacity-70 border border-pink-200 rounded-lg p-4">
                  <p className="text-purple-800 font-semibold text-center italic">
                    "No viniste aquí a ser arreglada. Viniste aquí a recordar tu perfección."
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🌸</div>
                  <h4 className="font-bold text-pink-800 text-sm">Eres Perfecta</h4>
                  <p className="text-pink-700 text-xs">Tal como eres ahora</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🦋</div>
                  <h4 className="font-bold text-purple-800 text-sm">Estás Lista</h4>
                  <p className="text-purple-700 text-xs">Es tu momento de sanar</p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <h4 className="font-bold text-indigo-800 text-sm">Eres Amada</h4>
                  <p className="text-indigo-700 text-xs">El amor vive dentro de ti</p>
                </div>
              </div>
            </div>
          )}

          {/* Intention Step */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🎯 Tu Intención Sagrada 🎯
                </h3>
                <p className="text-gray-600">
                  Una intención es la brújula que guiará tu corazón durante este viaje.
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
                  💕 Crea Tu Intención 💕
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-purple-700 font-medium mb-2">
                      Pregúntate: "¿Qué desea mi alma sanar en este viaje?"
                    </label>
                    <textarea
                      value={intention}
                      onChange={(e) => setIntention(e.target.value)}
                      placeholder="Ej: Quiero amarme incondicionalmente, sanar mi niña interior..."
                      className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 min-h-24"
                      rows="3"
                    />
                  </div>
                  
                  {intention && (
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-300 rounded-lg p-4">
                      <h5 className="font-bold text-purple-800 mb-2 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Tu Intención Sagrada
                      </h5>
                      <p className="text-purple-700 italic">"{intention}"</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-bold text-purple-800 mb-2">Recuerda:</h5>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• No hay intenciones correctas o incorrectas</li>
                  <li>• Puede evolucionar durante el viaje</li>
                  <li>• Nace desde el amor, no desde el "debo"</li>
                </ul>
              </div>
            </div>
          )}

          {/* Journey Rhythm Step */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  ⏰ Tu Ritmo Perfecto ⏰
                </h3>
                <p className="text-gray-600">
                  La sanación no se apresura. Tu corazón necesita tiempo para integrar cada enseñanza.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-400 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-indigo-800 mb-3 text-center">
                  📖 Un Día, Un Capítulo 📖
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Te recomiendo dedicar <strong>un día completo a cada capítulo</strong>. 
                  No para leerlo todo de una vez, sino para darle su espacio sagrado.
                </p>
                
                <div className="bg-white bg-opacity-70 border border-indigo-200 rounded-lg p-4">
                  <h5 className="font-bold text-indigo-800 mb-3">¿Por qué un día por capítulo?</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>• Integración profunda de las enseñanzas</div>
                    <div>• Tiempo para procesar emociones</div>
                    <div>• Espacio para la reflexión amorosa</div>
                    <div>• Un regalo de amor propio</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
                  🌟 Tu Ritual Diario 🌟
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="text-2xl mb-2">🌅</div>
                    <h5 className="font-bold text-pink-800 text-sm mb-2">Mañana</h5>
                    <p className="text-pink-700 text-xs">Conecta con tu intención y lee con calma</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-2xl mb-2">☀️</div>
                    <h5 className="font-bold text-purple-800 text-sm mb-2">Día</h5>
                    <p className="text-purple-700 text-xs">Permite que las enseñanzas te acompañen</p>
                  </div>
                  
                  <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <div className="text-2xl mb-2">🌙</div>
                    <h5 className="font-bold text-indigo-800 text-sm mb-2">Noche</h5>
                    <p className="text-indigo-700 text-xs">Reflexiona y agradécete por tu dedicación</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-center">
                <p className="text-orange-700">
                  <strong>Tu ritmo es el ritmo perfecto.</strong> No hay prisa en el amor. 💛
                </p>
              </div>
            </div>
          )}

          {/* Celebration Step */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🎉 Celebra Cada Paso 🎉
                </h3>
                <p className="text-gray-600">
                  Cada paso que das es un acto de amor hacia ti misma. Y merece ser celebrado.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-pink-800 mb-3">¿Por qué celebrar?</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Has pasado años siendo dura contigo misma. Es hora de cambiar esa narrativa.
                </p>
                <div className="bg-white bg-opacity-70 border border-pink-200 rounded-lg p-4">
                  <p className="text-purple-800 font-semibold text-center italic">
                    "Celebrar tu progreso es fertilizar el jardín de tu alma."
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-purple-800 mb-4 text-center">
                  ✨ Formas de Celebrarte ✨
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-purple-700 mb-3">Celebraciones Diarias</h5>
                    <div className="space-y-3">
                      <div className="flex items-start p-3 bg-pink-50 rounded-lg">
                        <Heart className="w-4 h-4 mr-2 text-pink-500 mt-1" />
                        <div>
                          <h6 className="font-semibold text-pink-800 text-sm">Al terminar un capítulo</h6>
                          <p className="text-pink-700 text-xs">Di: "Estoy orgullosa de mí"</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                        <Star className="w-4 h-4 mr-2 text-purple-500 mt-1" />
                        <div>
                          <h6 className="font-semibold text-purple-800 text-sm">Al sentir emociones</h6>
                          <p className="text-purple-700 text-xs">Di: "Gracias por tu valentía"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-purple-700 mb-3">Celebraciones Especiales</h5>
                    <div className="space-y-3">
                      <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                        <Sparkles className="w-4 h-4 mr-2 text-yellow-500 mt-1" />
                        <div>
                          <h6 className="font-semibold text-yellow-800 text-sm">Cada semana</h6>
                          <p className="text-yellow-700 text-xs">Date un baño relajante</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-green-50 rounded-lg">
                        <Heart className="w-4 h-4 mr-2 text-green-500 mt-1" />
                        <div>
                          <h6 className="font-semibold text-green-800 text-sm">Al terminar</h6>
                          <p className="text-green-700 text-xs">Haz algo que ames hacer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-300 rounded-lg p-4 text-center">
                <p className="text-purple-800 font-semibold">
                  🌟 Eres valiente por elegir sanarte. Eres hermosa por decidir amarte. 🌟
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              ← Anterior
            </button>
            
            <div className="text-center">
              <p className="text-purple-600 text-sm">
                {currentStep === steps.length - 1 ? '¡Estás lista para comenzar!' : 'Continúa cuando te sientas preparada'}
              </p>
            </div>
            
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                currentStep === steps.length - 1
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
              }`}
            >
              {currentStep === steps.length - 1 ? '¡Completado! ✨' : 'Siguiente →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaIntroduccionAmorCorta;