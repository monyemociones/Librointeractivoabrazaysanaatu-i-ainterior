import React, { useState } from 'react';
import { Heart, ArrowRight, ArrowLeft, Star, Shield, Sparkles } from 'lucide-react';

const ExploraHeridas = () => {
  const [currentWound, setCurrentWound] = useState(0);
  const [responses, setResponses] = useState({});
  const [currentStep, setCurrentStep] = useState('intro');

  const wounds = [
    {
      name: "ABANDONO",
      color: "bg-purple-100 border-purple-300",
      icon: "💜",
      description: "La herida del abandono nace cuando sentiste que las personas importantes se iban, física o emocionalmente."
    },
    {
      name: "RECHAZO", 
      color: "bg-blue-100 border-blue-300",
      icon: "💙",
      description: "La herida del rechazo surge cuando sentiste que no eras aceptada como eras, que algo estaba 'mal' contigo."
    },
    {
      name: "ABUSO",
      color: "bg-red-100 border-red-300", 
      icon: "❤️",
      description: "La herida del abuso ocurre cuando fuiste lastimada por quienes debían protegerte y cuidarte."
    },
    {
      name: "INJUSTICIA",
      color: "bg-orange-100 border-orange-300",
      icon: "🧡", 
      description: "La herida de injusticia se forma cuando tus sentimientos fueron minimizados o no fuiste creída."
    },
    {
      name: "HUMILLACIÓN",
      color: "bg-yellow-100 border-yellow-300",
      icon: "💛",
      description: "La herida de humillación nace cuando fuiste avergonzada, ridiculizada o hecha sentir 'menos que'."
    },
    {
      name: "TRAICIÓN",
      color: "bg-green-100 border-green-300",
      icon: "💚",
      description: "La herida de traición surge cuando quienes debían amarte te lastimaron o te mintieron."
    }
  ];

  const questions = {
    past: [
      "¿Cómo se sintió esta herida cuando eras niña? Describe las emociones y sensaciones.",
      "¿Qué te decías a ti misma cuando esto pasaba?",
      "¿Cómo trataste de protegerte o sobrevivir a esta experiencia?",
      "¿Qué necesitabas escuchar en ese momento que nunca escuchaste?"
    ],
    present: [
      "¿Cómo se manifiesta esta herida en tu vida actual?",
      "¿En qué situaciones o con qué personas se activa más?",
      "¿Qué patrones de comportamiento has desarrollado a partir de esta herida?",
      "¿Qué miedos o bloqueos te genera hoy en día?"
    ],
    blocks: [
      "¿Qué te impide hacer o ser esta herida?",
      "¿Qué oportunidades sientes que has perdido por este bloqueo?",
      "¿Cómo afecta tus relaciones actuales?",
      "¿Qué sueños o metas has postergado por este miedo?"
    ],
    pain: [
      "¿Cuál es el dolor más profundo que sientes relacionado con esta herida?",
      "¿Qué es lo que más duele recordar?",
      "¿Qué parte de ti sientes que se perdió o se dañó?",
      "¿Qué lágrimas no has llorado aún?"
    ],
    superpower: [
      "¿Qué fortaleza desarrollaste para sobrevivir a esta herida?",
      "¿Qué cualidades positivas tienes gracias a haber pasado por esto?",
      "¿Cómo esta experiencia te ha hecho más empática o sabia?",
      "¿Qué superpoder único tienes ahora que podrías usar para ayudar a otros?"
    ]
  };

  const stepTitles = {
    intro: "Introducción",
    past: "🕰️ El Pasado: Cómo se sintió entonces",
    present: "🌅 El Presente: Cómo se manifiesta hoy",
    blocks: "🚧 Los Bloqueos: Qué te limita",
    pain: "💔 El Dolor: Lo que más duele",
    superpower: "⭐ Tu Superpoder: La fortaleza que desarrollaste"
  };

  const handleResponse = (questionIndex, value) => {
    const key = `${currentWound}-${currentStep}-${questionIndex}`;
    setResponses(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const nextStep = () => {
    const steps = ['intro', 'past', 'present', 'blocks', 'pain', 'superpower'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const steps = ['intro', 'past', 'present', 'blocks', 'pain', 'superpower'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const nextWound = () => {
    if (currentWound < wounds.length - 1) {
      setCurrentWound(currentWound + 1);
      setCurrentStep('intro');
    }
  };

  const prevWound = () => {
    if (currentWound > 0) {
      setCurrentWound(currentWound - 1);
      setCurrentStep('intro');
    }
  };

  const currentWoundData = wounds[currentWound];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-pink-500 mr-2" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Explorando Tus Heridas de Infancia</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Un viaje de autoconocimiento profundo para entender cómo el pasado vive en el presente
          y descubrir los superpoderes que desarrollaste.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Herida {currentWound + 1} de {wounds.length}
          </span>
          <span className="text-sm text-gray-600">
            {stepTitles[currentStep]}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentWound * 6 + Object.keys(stepTitles).indexOf(currentStep)) / (wounds.length * 6)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Wound Card */}
      <div className={`${currentWoundData.color} rounded-lg p-6 mb-8 border-2`}>
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{currentWoundData.icon}</span>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              HERIDA DE {currentWoundData.name}
            </h2>
            <p className="text-gray-700 mt-2">{currentWoundData.description}</p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        {currentStep === 'intro' ? (
          <div className="text-center">
            <div className="mb-6">
              <Sparkles className="mx-auto text-purple-500 mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Preparándonos para explorar la herida de {currentWoundData.name.toLowerCase()}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Vas a embarcarte en un viaje profundo de autoconocimiento. Vamos a explorar juntas 
                cómo esta herida se sintió en el pasado, cómo se manifiesta hoy, qué bloqueos te genera, 
                cuál es su dolor más profundo y, más importante, qué súper poder desarrollaste gracias a ella.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="font-semibold text-purple-800 mb-3">💜 Recordatorio amoroso:</h4>
              <p className="text-purple-700">
                Ve a tu ritmo. Si algo se vuelve muy intenso, puedes pausar. 
                Tu niña interior está segura contigo. Respira profundo y confía en el proceso.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              {stepTitles[currentStep]}
            </h3>
            
            <div className="space-y-6">
              {questions[currentStep]?.map((question, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <label className="block text-gray-700 font-medium mb-3">
                    {question}
                  </label>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows="4"
                    placeholder="Escribe aquí tus reflexiones... Permite que fluyan sin juicio."
                    value={responses[`${currentWound}-${currentStep}-${index}`] || ''}
                    onChange={(e) => handleResponse(index, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {currentStep === 'superpower' && (
              <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-600 mr-2" size={24} />
                  <h4 className="font-semibold text-yellow-800">✨ Celebrando tu transformación</h4>
                </div>
                <p className="text-yellow-700">
                  Has transformado tu dolor en sabiduría, tu herida en fortaleza. 
                  Esto no significa que el dolor no fue real, sino que tu espíritu es más fuerte. 
                  ¡Celebra este súper poder que desarrollaste!
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {currentWound > 0 && (
            <button
              onClick={prevWound}
              className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Herida anterior
            </button>
          )}
          
          {currentStep !== 'intro' && (
            <button
              onClick={prevStep}
              className="flex items-center bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Paso anterior
            </button>
          )}
        </div>

        <div className="flex space-x-2">
          {currentStep !== 'superpower' ? (
            <button
              onClick={nextStep}
              className="flex items-center bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              {currentStep === 'intro' ? 'Comenzar exploración' : 'Siguiente paso'}
              <ArrowRight size={16} className="ml-2" />
            </button>
          ) : currentWound < wounds.length - 1 ? (
            <button
              onClick={nextWound}
              className="flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Siguiente herida
              <ArrowRight size={16} className="ml-2" />
            </button>
          ) : (
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg p-6">
                <Shield className="mx-auto text-green-600 mb-2" size={32} />
                <h4 className="font-semibold text-green-800 mb-2">¡Felicitaciones, guerrera!</h4>
                <p className="text-green-700">
                  Has completado la exploración de todas tus heridas. 
                  Ahora conoces profundamente tu historia y tus súper poderes. 
                  ¡Estás lista para la siguiente fase de sanación!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wound Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {wounds.map((wound, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentWound(index);
              setCurrentStep('intro');
            }}
            className={`w-4 h-4 rounded-full transition-colors ${
              index === currentWound 
                ? 'bg-purple-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={wound.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploraHeridas;