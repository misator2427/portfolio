
export interface Character {
  id: number;
  nomen: string;
  imago: string;
  quote: string;
  descriptione: string;
}

// aqui estan los datos de los personajes ara que sepa qué mostrar cuando te lleva a ellos

export const characters: Character[] = [
  {
    id: 0,
    nomen: "Abe Simpson",
    imago: "abe.png",
    quote: "¿Por qué me evitan? ¿Mi rostro marchito te recuerda el sombrío espectro de la muerte?",
    descriptione: "Es un anciano, a menudo un poco entrometido, con sentido del humor y una gran tendencia a decir ridiculeces. Es un veterano de la Segunda Guerra Mundial que se retiró de su trabajo como músico de Orquesta de Jazz, sólo para encontrar que ya no eran una gran cosa. Abe lucha con un alcoholismo crónico y está muy vinculado a la explotación laboral."
  },

  {
    id: 1,
    nomen: "Moe Szyslak",
    imago: "moe.png",
    quote: "Cuando te atrape, te sacaré los ojos y te los meteré en los pantalones para que puedas ver cómo te pateo, ¿de acuerdo? ¡A continuación usaré tu lengua para pintar mi barco!",
    descriptione: "Es un hombre áspero y malhumorado, generalmente malicioso y desagradable con la mayoría de los clientes que entran en su bar o en el Kwik e Mart."
  },
  
  {
    id: 2,
    nomen: "Milhouse Van Houten",
    imago: "milhouse.png",
    quote: "¿Recuerdas la ocasión cuando se comió mi pez dorado? Y mentiste y dijiste que nunca tuve un pez dorado. Entonces, ¿por qué tomé el cuenco, Bart? ¿Por qué tuve el cuenco?",
    descriptione: "El mejor amigo de Bart Simpson, y también es el hijo de Kirk y Luann Van Houten. Milhouse es algo torpe, exige comida basura, y suele recibir el repudio tanto de los adultos como de otros niños de la primaria, sin embargo es un compañero leal para Bart."
  },
  
  {
    id: 3,
    nomen: "Troy McClure",
    imago: "troy.png",
    quote: "¡Ah! El licor dulce alivia el dolor",
    descriptione: "Está asociado principalmente a la industria del entretenimiento, y usualmente se presenta como un actor en búsqueda de su próximo gran trabajo. Aparece comúnmente en escenas de introducción de películas o programas de TV, en los que habla de sus demostrados logros precedidos por ¿alguien se acuerda de mí en…?"
  },
  
  {
    id: 4, 
    nomen: "Homer Simpson",
    imago: "homer.png",
    quote: "¡En teoría, el comunismo funciona! En teoria",
    descriptione: "Esposo de Marge Simpson y padre de tres hijos: Bart, Lisa y Maggie. Trabaja como auxiliar de mantenimiento en la planta de la fábrica nuclear de Springfield. Homer se caracteriza por ser perezoso, soñador, ocasionalmente torpe, amante de la cerveza."
  },
  
  {
    id: 5,
    nomen: "Dr. Nick",
    imago: "nick.png",
    quote: "¿Inflamable significa inflamable? ¡Qué país!",
    descriptione: "Doctor ignorante y descuidado. Su verdadero nombre es Nick Riviera y se presenta como nacido en Cuba. Estudió medicina por correo en la Universidad de Costa Rica, título conseguido casi sin estudiar. Como médico, es incompetente, descuidado y más preocupado por salvar su propio pellejo que por tratar a sus pacientes con el cuidado y respeto que merecen"
  },
  
  { 
    id: 6,
    nomen: "Lisa Simpson",
    imago: "lisa.png",
    quote: "Cállate, cerebro. Ahora estoy con amigos y ya no te necesito",
    descriptione: "Tiene 8 años y el cabello verde. Es inteligente, sensible y a menudo muestra un gran sentido de la ética y la moral. Además también es una melómana y muestra una gran apreciación por la cultura contemporánea."
  },
  
  { 
    id: 7,
    nomen: "Mr. Burns",
    imago: "burns.png",
    quote: "¿Donuts? Te dije que no me gusta la comida étnica",
    descriptione: "Es el multimillonario propietario de la planta de energía nuclear de la ciudad de Springfield. Es el jefe de Homer Simpson y está obsesionado con su propia riqueza y busca siempre maneras de incrementarla, a menudo a expensas de los habitantes de Springfield."
  },
  
  { 
    id: 8,
    nomen: "Bart Simpson",
    imago: "bart.png",
    quote: "Nada de lo que digas puede molestarnos. Somos la generación MTV",
    descriptione: "Es conocido por su desapego por la moral y los estándares sociales, además de ser sarcástico, astuto y a veces ingenioso. A pesar de ser un mocoso malcriado, su corazón es muestra de bondad y compasión, especialmente cuando las situaciones lo ameritan. Su lema preferido es ¡Ay caramba!" 
  },
  
  { 
    id: 9,
    nomen: "Principal Skinner",
    imago: "principal.png",
    quote: "Hola Simpson. Hoy voy en autobús porque mi madre escondió las llaves de mi auto para castigarme por hablar con una mujer por teléfono. Ella hizo bien en hacerlo",
    descriptione: "Es el director de la escuela primaria de Springfield, un funcionario de carácter estricto que a veces también es víctima de las bromas de Bart Simpson."
  },
  
  { 
    id: 10,
    nomen: "Marge Simpson",
    imago: "marge.png",
    quote: "No quiero parecer una aguafiestas, pero como esto no es de mi gusto, no creo que nadie deba disfrutarlo",
    descriptione: "Esposa de Homer Simpson y madre de Bart, Lisa y Maggie. Es una mujer de cabello azul y de espíritu generoso. Está muy involucrada en la comunidad de Springfield y es conocida por sus principios tradicionales y valores familiares."
  },
  
  { 
    id: 11,
    nomen: "Groundskeeper Willie",
    imago: "willie.png",
    quote: "En Edimburgo tuvimos una huelga de mineros del carbón. Todo lo que queríamos eran sombreros con una lucecita en la parte superior. Entonces un día la mina se derrumbó. ¡Nadie salió vivo, ni siquiera Willie!",
    descriptione: "Guardabosques del instituto de la primaria de Springfield. Es conocido por sus rasgos marcadamente escoceses, su buen humor áspero, su cómico acento escocés y por el uso de palabrotas."
  },
];