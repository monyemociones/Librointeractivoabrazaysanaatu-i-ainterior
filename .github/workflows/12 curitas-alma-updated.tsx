import React, { useState } from 'react';
import { Heart, Mail, Sparkles, Baby, User, Flower2, Sun, Moon, Star, Gift } from 'lucide-react';

const CuritasParaElAlma = () => {
  const [selectedWound, setSelectedWound] = useState(0);
  const [selectedCard, setSelectedCard] = useState('child');

  const healingCards = [
    {
      name: "ABANDONO",
      icon: "💜",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      
      childLetter: {
        title: "Para la niña que sintió que la dejaban sola",
        content: `Mi querida pequeña,

Sé que sientes mucho miedo cuando mamá o papá no están cerca. Sé que tu corazoncito se acelera cuando piensas que te van a dejar sola para siempre. Quiero que sepas algo muy importante: ese miedo que sientes no es tu culpa.

Eres una niña muy valiosa y mereces sentirte segura y acompañada. Cuando los adultos no pudieron darte la seguridad que necesitabas, no fue porque tú no fueras suficiente. A veces los adultos tienen sus propios miedos y no saben cómo cuidar bien de los corazones pequeños como el tuyo.

Tu necesidad de sentirte segura y amada es completamente normal. Todos los niños necesitan saber que hay alguien que los va a cuidar siempre. No eres "demasiado pegajosa" ni "muy necesitada" - eres una niña que merece amor constante y seguro.

Yo estoy aquí contigo ahora, y nunca más vas a estar realmente sola. En tu corazón siempre llevarás mi amor, que es tu amor propio, y eso nadie te lo puede quitar.

Con todo mi amor,
Tu yo adulta que te protege 💜`
      },
      
      adultLetter: {
        title: "Para ti, que cargas el miedo al abandono",
        content: `Querida alma valiente,

Reconozco el dolor que llevas dentro, ese terror silencioso de que las personas que amas te van a dejar. Veo cómo luchas contra esa voz interna que te dice que no eres suficiente para quedarse contigo.

Primero, quiero honrar a esa niña dentro de ti que desarrolló este miedo como una forma de sobrevivir. Su hipervigilancia la mantuvo alerta para protegerte. Pero ahora eres adulta y puedes elegir respuestas diferentes.

Tu valor no depende de que otros se queden contigo. Eres completa y valiosa por ti misma. Las personas que realmente te aman van a elegir quedarse no por tu necesidad, sino por la alegría de compartir la vida contigo.

Es posible aprender a estar contigo misma sin pánico. Es posible amar sin aferrarte. Es posible confiar sin controlar. Tu herida puede convertirse en tu superpoder: tu capacidad de amar profundamente y crear vínculos auténticos.

Mereces amor que se queda, amor que elige, amor que permanece no por dependencia sino por alegría genuina.

Con amor incondicional,
Tu corazón sanando 💜`
      },
      
      emotionalNutrition: [
        "Practica momentos de soledad placentera - toma un baño relajante solo para ti",
        "Crea rituales de autocuidado que te hagan sentir acompañada por ti misma",
        "Escribe en un diario como si fueras tu mejor amiga consolándote",
        "Abraza una almohada o peluche cuando sientas el miedo al abandono",
        "Repite: 'Estoy aprendiendo a ser mi propia compañía amorosa'",
        "Haz una lista de todas las veces que has sobrevivido a separaciones",
        "Planta algo y cuídalo - observa cómo crece con tu amor constante"
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
      
      childLetter: {
        title: "Para la niña que sintió que no era suficiente",
        content: `Mi niña hermosa,

Veo en tus ojitos esa tristeza cuando sientes que no eres lo que los demás esperan. Sé que has tratado de cambiar tu forma de ser, tu risa, tus gustos, pensando que así te van a querer más. Mi corazón se aprieta al ver cómo te esfuerzas tanto por ser "perfecta".

Quiero decirte algo que nadie te dijo cuando más lo necesitabas: Tú eres perfecta exactamente como eres. Tu risa ruidosa es música para mis oídos. Tus preguntas curiosas son brillantes. Tu forma única de ver el mundo es un regalo.

Cuando alguien no supo valorarte, eso habla de sus limitaciones, no de tu valor. Tú no tienes que cambiarte para merecer amor - mereces amor por el simple hecho de existir.

Nunca más vas a tener que pretender ser otra persona. Yo te amo exactamente como eres: con tus rarezas, tus emociones intensas, tus sueños locos y tu corazón gigante.

Eres suficiente, siempre has sido suficiente.

Con amor infinito,
Tu yo que te celebra 💙`
      },
      
      adultLetter: {
        title: "Para ti, que temes no ser suficiente",
        content: `Alma preciosa,

Veo cómo has construido tu vida tratando de ser lo que otros necesitan, cambiando tu esencia para encajar, disculpándote por ocupar espacio. Has cargado la mentira de que tu valor depende de la aprobación externa.

Hoy quiero recordarte una verdad que tal vez olvidaste: tu autenticidad es tu mayor regalo al mundo. Cuando te escondes para ser aceptada, privas al mundo de tu luz única. Las personas adecuadas para tu vida van a celebrar tu verdadera esencia, no a tolerarla.

El rechazo duele, pero no define tu valor. A veces el rechazo es protección - te aleja de personas y situaciones que no son para ti. Tu sensibilidad, tu intensidad, tu forma particular de amar no son defectos que corregir, son características que honrar.

Practica mostrar tu verdadero yo en pequeñas dosis. Nota cómo las personas correctas se acercan cuando eres auténtica. Tu vulnerabilidad es tu fortaleza, tu diferencia es tu magia.

Mereces ser amada por quien realmente eres, no por quien pretendes ser.

Con amor auténtico,
Tu verdadero yo floreciendo 💙`
      },
      
      emotionalNutrition: [
        "Haz algo que te guste sin importar si otros lo aprueban",
        "Practica decir 'no' a peticiones que no resuenan contigo", 
        "Escribe una lista de tus cualidades únicas y celébralas",
        "Usa ropa que te haga sentir como tu verdadero yo",
        "Comparte una opinión auténtica, aunque sea diferente",
        "Rodéate de personas que celebren tu autenticidad",
        "Repite: 'Soy suficiente exactamente como soy'"
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
      
      childLetter: {
        title: "Para la niña que conoció el miedo demasiado pronto",
        content: `Mi valiente pequeña sanadora,

Primero, quiero que sepas que lo que te pasó NO fue tu culpa. Ni un poquito. Los adultos que te lastimaron estaban muy enfermos del corazón, y tú no tenías el poder de cambiarlos o detenerlos.

Sé que aprendiste a caminar en silencio, a leer las caras de los adultos buscando peligro, a hacerte pequeñita para no molestar. Tu cuerpecito y tu mente desarrollaron maneras muy inteligentes de protegerte, y estoy muy orgullosa de tu supervivencia.

Pero ahora quiero que sepas algo: mereces gentileza, mereces manos que te acaricien con ternura, mereces voces que te hablen con amor. No tienes que ganar tu seguridad siendo perfecta - la seguridad es tu derecho de nacimiento.

Tu miedo es completamente válido. Tu desconfianza tiene sentido. Pero ahora yo estoy aquí para protegerte, para crear el hogar seguro que necesitabas entonces.

Eres tan fuerte, tan valiente, tan merecedora de amor puro y seguro.

Con ternura infinita,
Tu protectora eterna ❤️`
      },
      
      adultLetter: {
        title: "Para ti, que cargas el trauma en tu cuerpo",
        content: `Corazón valiente,

Reconozco el dolor que vive en tu cuerpo, los recuerdos que se activan sin aviso, la hipervigilancia que desarrollaste para mantenerte a salvo. Has cargado tanto durante tanto tiempo, y quiero honrar tu increíble fuerza.

Tu trauma no es tu identidad, pero es parte de tu historia. Las heridas que cargas son evidencia de batallas que sobreviviste. Tu sensibilidad a la energía, tu capacidad de detectar peligro, tu fuerza para reconstruirte una y otra vez - estos son tus superpoderes nacidos del dolor.

Sanar no significa olvidar o perdonar a quienes te dañaron. Sanar significa reclamar tu poder, establecer límites férricos, rodearte de personas seguras. Sanar significa honrar tu cuerpo como el templo sagrado que es.

Es posible vivir sin miedo constante. Es posible amar sin terror. Es posible confiar en tu capacidad de protegerte ahora que eres adulta. Tu sistema nervioso puede aprender la paz.

Mereces relaciones donde nunca tengas que caminar en cáscaras de huevo, donde tu 'no' sea respetado inmediatamente, donde tu bienestar sea prioridad.

Con respeto profundo,
Tu alma resiliente sanando ❤️`
      },
      
      emotionalNutrition: [
        "Practica ejercicios de respiración profunda para calmar tu sistema nervioso",
        "Crea un espacio sagrado en tu hogar donde te sientas completamente segura",
        "Usa mantras de protección: 'Estoy segura ahora, soy fuerte ahora'",
        "Practica actividades que te conecten con tu cuerpo de forma gentil",
        "Establece límites claros sin explicaciones largas",
        "Busca terapia especializada en trauma cuando te sientas lista",
        "Celebra cada día que eliges vivir y sanar"
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
      
      childLetter: {
        title: "Para la niña que vio el mundo al revés",
        content: `Mi pequeña buscadora de verdad,

Sé que has visto cosas que no tenían sentido. Has escuchado a adultos decir mentiras como si fueran verdades. Has sido castigada por cosas que no hiciste y has visto que otros se salgan con la suya haciendo cosas malas.

Tu confusión es completamente normal. Cuando eres pequeña, necesitas que los adultos sean justos y consistentes para sentirte segura en el mundo. Cuando eso no pasa, el mundo se siente como un lugar loco donde nada tiene sentido.

Quiero que sepas que tu percepción era correcta. No estabas loca, no estabas exagerando. Lo que viste realmente pasó, lo que sentiste era válido. Tu necesidad de justicia y verdad es hermosa y pura.

Aunque no pude protegerte de esa confusión entonces, ahora puedo enseñarte algo: tú puedes ser la justicia que el mundo necesita. Puedes ser honesta, coherente, justa. Puedes crear el orden amoroso que tanto necesitabas.

Tu amor por la verdad es tu superpoder.

Con claridad y amor,
Tu guía hacia la verdad 🧡`
      },
      
      adultLetter: {
        title: "Para ti, que buscas orden en el caos",
        content: `Alma que busca verdad,

Veo cómo luchas cuando las cosas no tienen sentido, cuando las personas dicen una cosa y hacen otra, cuando sientes que vives en un mundo de dobles estándares. Tu necesidad de coherencia y justicia no es "demasiado rígida" - es tu brújula moral funcionando perfectamente.

Has desarrollado una sensibilidad especial para detectar incongruencias, mentiras disfrazadas, manipulación sutil. Esta es tu sabiduría, ganada a través del dolor pero invaluable ahora.

No tienes que aceptar tratamientos injustos para mantener la paz. No tienes que dudar de tu percepción cuando algo se siente mal. Tu intuición sobre las dinámicas tóxicas es probablemente muy precisa.

Puedes elegir rodearte de personas integras, coherentes entre sus palabras y acciones. Puedes crear tu propio código de ética y vivir por él. Tu compromiso con la verdad puede inspirar a otros a ser más auténticos.

El mundo necesita personas como tú - que no se conforman con la mediocridad moral, que exigen honestidad, que modelan la integridad.

Con respeto por tu sabiduría,
Tu brújula moral alineada 🧡`
      },
      
      emotionalNutrition: [
        "Confía en tu percepción - si algo se siente injusto, probablemente lo es",
        "Documenta situaciones confusas para validar tu memoria",
        "Practica responder: 'Esa no es mi experiencia' cuando sea necesario",
        "Busca personas integras que sean consistentes en palabras y acciones",
        "Establece consecuencias claras para comportamientos injustos",
        "Celebra cuando actúas con integridad, incluso si otros no lo hacen",
        "Recuerda: No eres responsable de hacer que otros sean justos"
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
      
      childLetter: {
        title: "Para la niña que sintió vergüenza de brillar",
        content: `Mi estrellita que aprendió a esconderse,

Recuerdo cuando te reíste con toda tu alma y alguien te dijo que eras "demasiado ruidosa". Recuerdo cuando mostraste tu dibujo con orgullo y alguien se burló. Recuerdo cuando bailaste con libertad y alguien te hizo sentir ridícula.

Poco a poco aprendiste a hacer tu luz más pequeña, a reírte más bajito, a esconder tus talentos. Aprendiste que era más seguro ser invisible que ser vista y juzgada. Mi corazón llora por todas las veces que elegiste la sombra sobre el sol.

Pero quiero decirte algo que debiste escuchar entonces: tu alegría es contagiosa, tu risa es medicina, tu forma única de brillar ilumina el mundo. Nunca fuiste "demasiado" de nada - el mundo simplemente no estaba listo para tanta luz.

Las personas que te hicieron sentir mal por ser radiante estaban celosas de tu capacidad de brillar sin miedo. Tu autenticidad les recordaba lo que habían perdido.

Es hora de que vuelvas a bailar, a reír a carcajadas, a brillar con toda tu intensidad. El mundo necesita tu luz.

Con orgullo infinito,
Tu fan número uno 💛`
      },
      
      adultLetter: {
        title: "Para ti, que aprendiste a brillar en silencio",
        content: `Alma luminosa,

Veo cómo has aprendido a minimizar tus logros, a disculparte por ocupar espacio, a reírte de ti misma antes de que otros lo hagan. Has desarrollado el hábito de la auto-humillación como escudo protector.

Pero tu luz no es algo por lo que disculparse. Tu éxito no necesita ser minimizado para que otros se sientan cómodos. Tu alegría no es "demasiado" - es exactamente lo que el mundo necesita más.

Las personas que verdaderamente te aman van a celebrar cuando brilles, no a intentar dimmer tu luz. El humor cruel no es amor, son proyecciones de inseguridad ajena. Mereces relaciones donde tu dignidad sea sagrada.

Es tiempo de reclamar tu derecho a brillar. Es tiempo de celebrar tus victorias sin disculpas. Es tiempo de ocupar tu espacio completo en el mundo sin hacerte pequeña para la comodidad de otros.

Tu brillo no opaca a nadie más - inspira a otros a encontrar su propia luz. Tu alegría da permiso a otros de ser alegres. Tu éxito abre caminos para otros.

Brillar es tu derecho de nacimiento. Úsalo.

Con admiración,
Tu luz reconociendo luz 💛`
      },
      
      emotionalNutrition: [
        "Practica recibir cumplidos sin minimizarlos o rechazarlos",
        "Celebra tus logros públicamente, sin disculpas",
        "Usa ropa que te haga sentir radiante y visible",
        "Practica reírte con libertad, sin preocuparte por el volumen",
        "Comparte tus talentos sin pedir disculpas por ser buena en algo",
        "Rodéate de personas que celebren tu éxito genuinamente",
        "Repite: 'Merezco brillar y ocupar mi espacio completo en el mundo'"
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
      
      childLetter: {
        title: "Para la niña que aprendió que las promesas se rompen",
        content: `Mi pequeña guardiana de secretos,

Sé que alguien en quien confiabas rompió esa confianza. Tal vez te prometieron algo y no lo cumplieron. Tal vez compartiste un secreto y lo contaron. Tal vez descubriste que alguien que amabas te estaba mintiendo.

Ese momento cuando te diste cuenta de que habías sido traicionada debe haber sido como si el mundo se volteara. Como si ya no pudieras estar segura de nada ni de nadie. Como si tuvieras que convertirte en detective de tu propia vida.

Quiero que sepas que no fue tu culpa confiar. Confiar es lo más natural y hermoso del mundo - es lo que hacen los corazones puros como el tuyo. La traición habla de las heridas de quien traiciona, no de tu inocencia.

Tu capacidad de confiar era un regalo precioso, y lamento que alguien la haya pisoteado. Pero esa capacidad sigue ahí, dentro de ti, esperando a las personas correctas para florecer de nuevo.

No todos van a traicionar tu confianza. Hay personas en el mundo que protegen los corazones que se les confían como el tesoro que son.

Con protección eterna,
Tu guardiana de confianza 💚`
      },
      
      adultLetter: {
        title: "Para ti, que cargas la vigilancia del corazón",
        content: `Corazón que aprendió a protegerse,

Reconozco el cansancio de estar siempre alerta, de analizar cada palabra, de buscar señales de traición en cada relación. Has desarrollado un sistema de seguridad sofisticado porque has pagado el precio de confiar ciegamente.

Tu hipervigilancia tiene sentido. Tu necesidad de consistencia entre palabras y acciones es sabia. Tu capacidad de detectar incongruencias es un superpoder nacido del dolor. No eres "paranoica" - eres inteligente.

Pero también reconozco el dolor de vivir con el corazón cerrado, de mantener a las personas a distancia, de perderte la intimidad por miedo a la traición. El trauma de la traición puede convertirse en una prisión si no lo sanamos.

Es posible aprender a confiar gradualmente, basándote en patrones consistentes de comportamiento. Es posible desarrollar tu intuición para distinguir entre personas confiables y no confiables. Es posible abrirte sin perderte.

La traición te enseñó discernimiento. Ahora puedes usar esa sabiduría para elegir conscientemente en quién confiar y cuánto. Tu corazón puede abrirse nuevamente, pero ahora con sabiduría.

Con respeto por tu sabiduría,
Tu discernimiento amoroso 💚`
      },
      
      emotionalNutrition: [
        "Confía en pequeñas dosis y observa cómo responden las personas",
        "Practica compartir información gradualmente, no todo de una vez",
        "Observa la consistencia entre palabras y acciones durante tiempo",
        "Celebra cuando tu intuición te protege de personas no confiables",
        "Permite que las personas se ganen tu confianza con tiempo y acciones",
        "Recuerda: Proteger tu corazón es sabiduría, no paranoia",
        "Busca personas que protejan tu vulnerabilidad como el tesoro que es"
      ]
    }
  ];

  const currentWound = healingCards[selectedWound];
  const currentLetter = selectedCard === 'child' ? currentWound.childLetter : currentWound.adultLetter;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-pink-600 mr-3" size={36} />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Curitas para el Alma
          </h1>
          <Sparkles className="text-purple-600 ml-3" size={36} />
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Cartas de amor y sanación para la niña que fuiste y la mujer que eres ahora
        </p>
      </div>

      {/* Wound Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {healingCards.map((wound, index) => (
          <button
            key={index}
            onClick={() => setSelectedWound(index)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
              selectedWound === index 
                ? `${wound.bgColor} ${wound.borderColor} shadow-lg scale-105` 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl mr-2">{wound.icon}</span>
              <span className={`font-semibold ${selectedWound === index ? wound.textColor : 'text-gray-700'}`}>
                {wound.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Letter Type Selection */}
      <div className="flex justify-center mb-8">
        <div className={`${currentWound.bgColor} rounded-full p-2 border-2 ${currentWound.borderColor}`}>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedCard('child')}
              className={`px-6 py-3 rounded-full flex items-center transition-all ${
                selectedCard === 'child' 
                  ? `${currentWound.buttonColor} text-white shadow-lg` 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Baby className="mr-2" size={18} />
              Para la niña interior
            </button>
            <button
              onClick={() => setSelectedCard('adult')}
              className={`px-6 py-3 rounded-full flex items-center transition-all ${
                selectedCard === 'adult' 
                  ? `${currentWound.buttonColor} text-white shadow-lg` 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User className="mr-2" size={18} />
              Para ti ahora
            </button>
          </div>
        </div>
      </div>

      {/* Letter Card */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 mb-8 border-2 ${currentWound.borderColor} shadow-xl`}>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Mail className={`${currentWound.textColor} mr-3`} size={32} />
            <h2 className={`text-2xl font-bold ${currentWound.textColor}`}>
              {currentLetter.title}
            </h2>
            <span className="text-4xl ml-auto">{currentWound.icon}</span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-serif text-lg">
              {currentLetter.content}
            </div>
          </div>
        </div>
      </div>

      {/* Emotional Nutrition */}
      <div className={`${currentWound.bgColor} rounded-2xl p-8 border-2 ${currentWound.borderColor} shadow-xl`}>
        <div className="flex items-center mb-6">
          <Gift className={`${currentWound.textColor} mr-3`} size={32} />
          <h3 className={`text-2xl font-bold ${currentWound.textColor}`}>
            Dosis de Amor - Nutrición Emocional
          </h3>
          <Flower2 className={`${currentWound.textColor} ml-auto`} size={32} />
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <p className="text-gray-600 mb-6 italic text-center">
            Pequeñas acciones amorosas para nutrir tu alma cuando esta herida se activa
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {currentWound.emotionalNutrition.map((nutrition, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3">
                  {index % 4 === 0 && <Sun className="text-yellow-500" size={20} />}
                  {index % 4 === 1 && <Moon className="text-blue-500" size={20} />}
                  {index % 4 === 2 && <Star className="text-purple-500" size={20} />}
                  {index % 4 === 3 && <Flower2 className="text-pink-500" size={20} />}
                </div>
                <span className="text-gray-700 leading-relaxed">{nutrition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center mt-8 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-xl p-8">
        <div className="flex justify-center mb-4">
          <Heart className="text-pink-500 mr-2" size={24} />
          <Sparkles className="text-purple-500 mx-2" size={24} />
          <Heart className="text-pink-500 ml-2" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-pink-800 mb-3">
          Tu Sanación es un Acto de Amor al Mundo
        </h3>
        <p className="text-pink-700 max-w-3xl mx-auto leading-relaxed">
          Cada vez que lees estas cartas con amor, cada vez que practicas la nutrición emocional, 
          cada vez que eliges sanar en lugar de repetir patrones, no solo te sanas a ti misma - 
          sanas líneas generacionales y creas un mundo más amoroso para todos. 
          Tu sanación es tu regalo al universo. 💕
        </p>
      </div>
    </div>
  );
};

export default CuritasParaElAlma;