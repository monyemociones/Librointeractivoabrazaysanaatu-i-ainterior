import React, { useState } from 'react';
import { Heart, Star, Sparkles, Gift, ArrowRight, Users, Crown, ExternalLink, ChevronDown, ChevronUp, Send } from 'lucide-react';

const DespedidaAgradecimientoGuia = () => {
  const [expandedSection, setExpandedSection] = useState('farewell');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Esta guía cambió mi vida completamente. Por primera vez entendí que mis heridas eran regalos disfrazados.",
      name: "María Elena",
      location: "Colombia"
    },
    {
      text: "Nunca pensé que podría sentir tanto amor por mí misma. Cada ejercicio me acercó más a mi esencia.",
      name: "Carmen",
      location: "México"
    },
    {
      text: "Después de años de terapia, esta guía me dio las herramientas que realmente necesitaba para sanar.",
      name: "Isabella",
      location: "Argentina"
    }
  ];

  const nextSteps = [
    {
      icon: "🌹",
      title: "Linaje de Amor",
      description: "Únete a nuestra comunidad sagrada de personas dispuestas a sentir para sanar y transformar su vida",
      url: "https://www.sentirparasanaroficial.com/linajedeamor/",
      badge: "Comunidad Exclusiva",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: "🦋",
      title: "Metamorfosis de una Dama",
      description: "Profundiza tu transformación con acompañamiento grupal",
      url: "https://www.sentirparasanaroficial.com/metamorfosisespecial",
      badge: "Precio Preferente",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const sections = [
    { id: 'farewell', title: 'Carta de Despedida', icon: <Heart className="w-5 h-5" /> },
    { id: 'gratitude', title: 'Profundo Agradecimiento', icon: <Star className="w-5 h-5" /> },
    { id: 'application', title: 'Aplicando lo Aprendido', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'community', title: 'Tu Siguiente Paso', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-purple-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Un Abrazo de Despedida Lleno de Amor
          </h1>
        </div>
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-2xl p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-purple-800 mb-3">
            ✨ Has Completado un Viaje Sagrado ✨
          </h2>
          <p className="text-purple-700 text-lg leading-relaxed">
            Querida alma valiente, has llegado al final de esta guía, pero en realidad, 
            estás apenas comenzando el más hermoso de los viajes: vivir desde el amor incondicional.
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
                {section.id === 'farewell' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        💕 Mi Querida Alma de Luz 💕
                      </h3>
                    </div>
                    
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-8 rounded-lg">
                      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                          Mientras escribo estas líneas, mi corazón se llena de una emoción profunda. 
                          Sé que no nos conocemos físicamente, pero a través de estas páginas, 
                          he sentido tu alma, he acompañado tu proceso, he sido testiga silenciosa 
                          de tu valentía.
                        </p>
                        
                        <p>
                          No es casualidad que hayas llegado hasta aquí. Tu alma estaba lista para 
                          este encuentro contigo misma, para este reencuentro con tu esencia más pura. 
                          Cada página que has leído, cada ejercicio que has realizado, cada lágrima 
                          que has derramado... todo ha sido parte de tu regreso a casa, a ti misma.
                        </p>
                        
                        <div className="bg-white bg-opacity-70 border border-pink-200 rounded-lg p-6 my-6">
                          <p className="text-purple-800 font-semibold text-center text-xl italic">
                            "No eras tú quien necesitaba ser arreglada. 
                            Eras tú quien necesitaba recordar su magnificencia."
                          </p>
                        </div>
                        
                        <p>
                          Has demostrado una valentía extraordinaria al decidir mirar tus heridas 
                          de frente, no para regodearte en el dolor, sino para extraer de ellas 
                          la sabiduría que viniste a aprender. Ese es el acto más valiente que 
                          un ser humano puede realizar.
                        </p>
                        
                        <p>
                          Ahora, mientras te prepares para cerrar este capítulo, quiero que sepas 
                          que llevas conmigo algo que nadie podrá quitarte jamás: la certeza de 
                          que eres digna de amor incondicional, empezando por el amor que te tienes a ti misma.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">🌟</div>
                        <h4 className="font-bold text-pink-800 mb-2">Eres Única</h4>
                        <p className="text-pink-700 text-sm">
                          Tu proceso de sanación es único y perfecto para ti
                        </p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">💝</div>
                        <h4 className="font-bold text-purple-800 mb-2">Eres Valiente</h4>
                        <p className="text-purple-700 text-sm">
                          Has tenido el coraje de enfrentar tu sombra con amor
                        </p>
                      </div>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">✨</div>
                        <h4 className="font-bold text-indigo-800 mb-2">Eres Luz</h4>
                        <p className="text-indigo-700 text-sm">
                          Tu sanación ilumina el camino para otras almas
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === 'gratitude' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        🙏 Gracias, Infinitas Gracias 🙏
                      </h3>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-400 p-8 rounded-lg">
                      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                          Gracias por confiar en mí, por permitirme acompañarte en este viaje 
                          tan íntimo y sagrado. Gracias por abrir tu corazón, por ser vulnerable, 
                          por elegir el amor una y otra vez, incluso cuando dolía.
                        </p>
                        
                        <p>
                          Gracias por no rendirte cuando las emociones se intensificaron, 
                          por seguir adelante cuando habría sido más fácil cerrar este ebook 
                          y continuar como siempre. Tu perseverancia me inspira profundamente.
                        </p>
                        
                        <p>
                          Gracias por honrar a esa niña interior que llevabas dentro, 
                          por escuchar sus susurros, por abrazarla con la compasión que 
                          siempre mereció. Al sanar tu corazón, has sanado también el 
                          corazón de todas las niñas que fueron heridas de maneras similares.
                        </p>
                        
                        <div className="bg-white bg-opacity-70 border border-purple-200 rounded-lg p-6 my-6">
                          <p className="text-purple-800 font-semibold text-center text-xl">
                            Tu sanación es un regalo para el mundo entero.
                          </p>
                        </div>
                        
                        <p>
                          Pero sobre todo, gracias por elegir amarte incondicionalmente. 
                          Ese amor que ahora sientes por ti misma es la frecuencia más alta 
                          que existe en el universo, y al vibrar en ella, elevas todo a tu alrededor.
                        </p>
                      </div>
                    </div>
                    
                    {/* Testimonials */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-center text-gray-800 mb-6">
                        💕 Voces de Transformación 💕
                      </h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                        <div className="text-gray-600 text-lg italic mb-4">
                          "{testimonials[currentTestimonial].text}"
                        </div>
                        <div className="text-purple-600 font-semibold">
                          - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTestimonial(index)}
                              className={`w-3 h-3 rounded-full transition-all ${
                                index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === 'application' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        🌱 Viviendo Desde el Amor Incondicional 🌱
                      </h3>
                      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Ahora que has completado este viaje de sanación, es momento de integrar 
                        todo lo aprendido en tu vida diaria. Aquí te dejo mis deseos más profundos para ti.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-8">
                      <h4 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                        💖 Mis Deseos Para Tu Nueva Vida 💖
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">🌅</span>
                            <div>
                              <h5 className="font-semibold text-purple-800">Cada Mañana</h5>
                              <p className="text-purple-700">Que despiertes recordando tu magnificencia y eligiendo el amor por ti misma</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">💫</span>
                            <div>
                              <h5 className="font-semibold text-purple-800">En Tus Relaciones</h5>
                              <p className="text-purple-700">Que atraigas y cultives vínculos basados en amor auténtico, no en heridas</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">🌺</span>
                            <div>
                              <h5 className="font-semibold text-purple-800">Ante los Desafíos</h5>
                              <p className="text-purple-700">Que veas cada obstáculo como una oportunidad de aplicar tu nueva sabiduría</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">🦋</span>
                            <div>
                              <h5 className="font-semibold text-purple-800">En Tu Crecimiento</h5>
                              <p className="text-purple-700">Que nunca dejes de evolucionar, siempre con paciencia y amor propio</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">✨</span>
                            <div>
                              <h5 className="font-semibold text-purple-800">En Tu Misión</h5>
                              <p className="text-purple-700">Que compartas tu luz y ayudes a otras almas en su proceso de sanación</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">🌟</span>
                            <div>
                              <h5 className="font-semibold text-purple-800">Para Siempre</h5>
                              <p className="text-purple-700">Que recuerdes que eres digna de todo el amor del universo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                      <h4 className="font-bold text-purple-800 mb-4 flex items-center justify-center">
                        <Gift className="w-5 h-5 mr-2" />
                        Herramientas Para Tu Día a Día
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-pink-50 rounded-lg">
                          <div className="text-2xl mb-2">🧘‍♀️</div>
                          <h5 className="font-semibold text-pink-800 mb-1">Meditación Diaria</h5>
                          <p className="text-pink-700 text-sm">5 minutos conectando con tu amor interior</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl mb-2">📝</div>
                          <h5 className="font-semibold text-purple-800 mb-1">Diario de Gratitud</h5>
                          <p className="text-purple-700 text-sm">Anota 3 cosas por las que te sientes agradecida</p>
                        </div>
                        <div className="text-center p-4 bg-indigo-50 rounded-lg">
                          <div className="text-2xl mb-2">💝</div>
                          <h5 className="font-semibold text-indigo-800 mb-1">Afirmaciones</h5>
                          <p className="text-indigo-700 text-sm">Repite: "Soy digna de amor incondicional"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === 'community' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">
                        🌹 Tu Camino Continúa Aquí 🌹
                      </h3>
                      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        La sanación es un proceso continuo, y no tienes que recorrerlo sola. 
                        Te invito a ser parte de nuestra familia espiritual donde podrás profundizar 
                        tu transformación rodeada de almas afines.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {nextSteps.map((step, index) => (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                          <div className={`bg-gradient-to-r ${step.color} p-6 text-white text-center`}>
                            <div className="text-4xl mb-3">{step.icon}</div>
                            <div className="flex items-center justify-center mb-2">
                              <span className="bg-white bg-opacity-30 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                {step.badge}
                              </span>
                            </div>
                            <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                          </div>
                          
                          <div className="p-6">
                            <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                            
                            {index === 0 && (
                              <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                  <Heart className="w-4 h-4 mr-2 text-pink-500" />
                                  Comunidad de personas dispuestas a sentir para sanar y transformar su vida
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Star className="w-4 h-4 mr-2 text-pink-500" />
                                  Contenido semanal de crecimiento y desarrollo personal
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Users className="w-4 h-4 mr-2 text-pink-500" />
                                  Apoyo continuo en tu proceso de transformación
                                </div>
                              </div>
                            )}
                            
                            {index === 1 && (
                              <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                  <Crown className="w-4 h-4 mr-2 text-purple-500" />
                                  Acompañamiento grupal
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                                  Transformación profunda de 12 semanas
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Gift className="w-4 h-4 mr-2 text-purple-500" />
                                  Precio especial por haber completado esta guía
                                </div>
                              </div>
                            )}
                            
                            <a
                              href={step.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${step.color} text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 group-hover:shadow-lg`}
                            >
                              Conocer Más
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-2 border-purple-200 rounded-2xl p-8 text-center">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-purple-800 mb-4">
                          🌹 Te Invito a Continuar Este Camino Sagrado 🌹
                        </h4>
                        <p className="text-purple-700 text-lg mb-6">
                          No tienes que caminar sola. Te invito con el corazón abierto a ser parte de nuestra 
                          hermosa comunidad donde podrás profundizar tu transformación rodeada de almas afines 
                          que, como tú, han elegido el amor incondicional.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-white bg-opacity-70 border border-pink-200 rounded-lg p-6">
                            <div className="text-3xl mb-3">🌹</div>
                            <h5 className="font-bold text-pink-800 mb-3">Linaje de Amor</h5>
                            <p className="text-pink-700 text-sm mb-4">
                              Únete a nuestra comunidad sagrada de personas en constante crecimiento y sanación
                            </p>
                            <a
                              href="https://www.sentirparasanaroficial.com/linajedeamor/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-all duration-300 text-sm"
                            >
                              Conocer Comunidad
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                          
                          <div className="bg-white bg-opacity-70 border border-purple-200 rounded-lg p-6">
                            <div className="text-3xl mb-3">🦋</div>
                            <h5 className="font-bold text-purple-800 mb-3">Metamorfosis de una Dama</h5>
                            <p className="text-purple-700 text-sm mb-4">
                              Programa de transformación profunda con acompañamiento grupal
                            </p>
                            <a
                              href="https://www.sentirparasanaroficial.com/metamorfosisespecial"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-all duration-300 text-sm"
                            >
                              Ver Programa
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-4">
                          <div className="flex items-center justify-center mb-2">
                            <Gift className="w-5 h-5 mr-2 text-orange-600" />
                            <span className="font-bold text-orange-800">Regalo Especial Para Ti</span>
                          </div>
                          <p className="text-orange-700 text-sm">
                            Por haber completado esta guía con tanto amor y dedicación, tienes acceso a 
                            <strong> precios preferenciales</strong> en cualquiera de nuestros programas. 
                            Tu compromiso con tu sanación merece ser honrado.
                          </p>
                        </div>
                      </div>
                      
                      <Sparkles className="mx-auto text-purple-500 mb-4" size={48} />
                      <h4 className="text-2xl font-bold text-purple-800 mb-4">
                        💕 Un Regalo Especial Para Ti 💕
                      </h4>
                      <p className="text-purple-700 text-lg mb-4">
                        Por haber completado esta guía, tienes acceso a precios preferenciales 
                        en todos nuestros programas. Tu dedicación a tu sanación merece ser recompensada.
                      </p>
                      <div className="bg-white bg-opacity-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-purple-800 font-semibold">
                          "La sanación no es un destino, es un estilo de vida. 
                          Y tú ya has comenzado a vivirlo."
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final Blessing */}
      <div className="mt-12 text-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-2 border-purple-200 rounded-2xl p-8">
        <Heart className="mx-auto text-purple-500 mb-4" size={56} />
        <h3 className="text-3xl font-bold text-purple-800 mb-6">
          🌟 Mi Bendición Final Para Ti 🌟
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-purple-700 text-xl leading-relaxed font-medium">
            Que camines por la vida sabiendo que eres un milagro andante.
          </p>
          <p className="text-purple-700 text-xl leading-relaxed font-medium">
            Que tu corazón sanado sea fuente de sanación para otros.
          </p>
          <p className="text-purple-700 text-xl leading-relaxed font-medium">
            Que el amor incondicional que has aprendido a sentir por ti misma 
            irradie hacia cada persona que tengas la bendición de encontrar.
          </p>
          <div className="bg-white bg-opacity-70 border border-purple-200 rounded-lg p-6 mt-8">
            <p className="text-purple-800 font-bold text-2xl">
              Con toda la gratitud, desde el amor y para el amor,
            </p>
            <p className="text-purple-700 text-lg mt-2 italic">
              Mony 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespedidaAgradecimientoGuia;