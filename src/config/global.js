export default {
  global: {
    Name: 'Estructura corporal femenina',
    Description:
      'Reconocer la estructura corporal femenina permite tener una visión integral respecto al movimiento, tipo de silueta y medición, es por ello que en este componente se realiza un recorrido desde la conceptualización general de la antropometría hasta las técnicas de medición del cuerpo femenino, en donde la información numérica obtenida de este proceso permita entender la figura humana desde la tercera dimensión para traducirla en un plano 2D, información básica en los procesos de patronaje industrial, así mismo, identificar la conceptualización general de los universos de vestuarios y las gamas de mercado aplicables en la moda casual.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antropometría',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Anatomía',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Biomecánica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Morfología',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ergonomía',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'División del cuerpo',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Tipos de siluetas femeninas',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de medidas (clasificación)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Las medidas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de medidas y cuadro de tallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proporciones versus canon',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Medidas deducidas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proporciones en la deducción de medidas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Universos del vestuario',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gamas de mercados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipología de prendas femeninas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Aprovechamiento',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fichas técnicas en patronaje',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Moda',
      referencia:
        'Turnes, C. (2021).  Moda y vestuario: universos paralelos con infinitas posibilidades de encuentro.  Cuadernos del Centro de Estudios de Diseño y comunicación, (100), p. 138-148',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001435054&context=PC&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=primo_central_multiple_fe&tab=sena_completo&query=any,contains,universos%20del%20vestuario&mode=Basic',
    },
  ],
  glosario: [
    {
      termino: 'Alta costura',
      significado:
        'vestuario hecho sobre medida creado por los diseñadores líderes que, usualmente forma parte de una colección para una estación específica, la cual es determinante en la moda en general. La alta costura fue fundada por Charles Frederick Worth en París en la segunda mitad del siglo XIX; a principios del siglo XX fue dominada por Paul Poiret y después por Coco Chanel durante y después de la primera guerra mundial.',
    },
    {
      termino: '<i>Atelier</i>',
      significado: 'taller de creación de moda.',
    },
    {
      termino: 'Bidimensional',
      significado:
        'se representa según su altura y su anchura, y no su profundidad.',
    },
    {
      termino: 'Corte asimétrico',
      significado:
        'estructura de las prendas, más cortas por delante que por detrás, con la que se consigue el llamado «efecto cola» en faldas y vestidos.',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Estándar',
      significado:
        'que sirve de patrón, modelo o punto de referencia para medir o valorar cosas de la misma especie.',
    },
    {
      termino: 'Estilo',
      significado:
        'manifestación personal de cada individuo según las características propias y su comunicación a través de su actitud y su vestuario. En el estilo se manifiesta la identidad de la persona que está fundamentada en la unidad que se refleja a partir de la relación existente entre el ser y su aspecto exterior o la apariencia.',
    },
    {
      termino: 'Molde',
      significado:
        'término usado en el patronaje para señalar que después del trazo de planos se llegan a abstraer los elementos que permiten proceder con el corte del textil.',
    },
    {
      termino: '<i>Outfit</i>',
      significado:
        'conjunto de prendas combinadas de una manera determinada. Designa un atuendo concreto, pero su uso se ha popularizado hasta el punto de emplearse como sinónimo del término genérico conjunto.',
    },
    {
      termino: 'Patronaje',
      significado:
        'oficio dedicado a la creación de patrones en la línea de vestuario que permitan la construcción de prendas de vestir.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
    {
      termino: 'Tipología',
      significado:
        'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
    },
    {
      termino: 'Trazo de un plano',
      significado:
        'en lo referente al oficio del patronista, el trazo de un plano hace referencia a la estructura de los patrones básicos que posteriormente se convertirán en moldes.',
    },
    {
      termino: '<i>T-shirt</i>',
      significado: 'camiseta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barbero, S., & Cozzo, B. (2010). Habemus Vestem, la moda acude a la llamada de Dios. Revista Diagonal, 10, 6.',
      link: '',
    },
    {
      referencia:
        'Cabrera, R. (2016). Introducción a la kinesiología. Universidad Nacional del Nordeste.',
      link:
        'https://med.unne.edu.ar/wp-content/uploads/2018/04/introduccion_a_la_anatomia-1_trayecto.pdf',
    },
    {
      referencia:
        'Dearing, J. W. (2009). Applying diffusion of innovation theory to intervention development. Research on Social Work Practice, 19(5), 503–518.',
      link: 'https://doi.org/10.1177/1049731509335569',
    },
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA. (2020). Programa Técnico en Patronaje Industrial de Prendas de Vestir. Centro de Manufactura en Textil y Cuero, Distrito Capital.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., & Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Bogotá: SENA, Japan International Cooperation Agency (JICA).',
      link: '',
    },
    {
      referencia:
        'Hall, S. J. (2021). Basic biomechanics (9th ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Historias hiladas. (2021). 5 claves para tomar medidas corporales.',
      link:
        'https://www.nastasianash.com/5-claves-para-tomar-medidas-corporales/',
    },
    {
      referencia:
        'International Ergonomics Association. (2000). Definition of ergonomics.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2023). Fashion-ology: An Introduction to Fashion Studies. Bloomsbury Publishing.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: An introduction to fashion studies. Berg.',
      link: '',
    },
    {
      referencia:
        'King, C. W. (1965). Fashion adoption: A rebuttal to the trickle-down theory.',
      link:
        'https://www.econbiz.de/Record/fashion-adoption-a-rebuttal-to-the-trickle-down-theory-king-charles/10002208542',
    },
    {
      referencia:
        'Mendizábal, R. (2020). Historia y evolución de la alta costura. Editorial de Moda y Diseño.',
      link: '',
    },
    {
      referencia:
        'Norton, K. (2019). Anthropometry and biomechanics: Foundations for human movement analysis. Routledge.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (1995). El estado físico: Uso e interpretación de la antropometría.',
      link: 'https://www.who.int/es/publications/i/item/9241208546',
    },
    {
      referencia:
        'Paredro. (2021). Fractales, geometría y otros juegos matemáticos en la moda de hoy.',
      link: '',
    },
    {
      referencia:
        'Posner, H. (2016). Marketing de moda (2ª ed.). Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Salinas, R. (1994). Color harmony 2. La armonía en el color, nuevas tendencias, Guía para la combinación creativa de colores. Editorial La Armonía del Color.',
      link: '',
    },
    {
      referencia:
        'Sierra Landines, L. M., & Mosquera Ochoa, D. (2013). El cuerpo como fundamento para el diseño de vestuario: Estudio morfológico y anatómico del cuerpo humano a través de la biomecánica y la ergonomía (Trabajo de grado). Universidad Pontificia Bolivariana, Medellín, Colombia.',
      link: '',
    },
    {
      referencia:
        'Simmel, G. (1957). Fashion. The American Journal of Sociology, Vol. 62(6), 541-558. Recuperado de ',
      link:
        'https://sites.middlebury.edu/individualandthesociety/files/2010/09/Simmel.fashion.pdf',
    },
    {
      referencia:
        'Universidad de Málaga. (2022). Módulo 1: Morfología, estructura y función del cuerpo humano.',
      link:
        'https://www.uma.es/grado-en-medicina/navegador_de_ficheros/DOCUMENTACION_ANEXA_MEMORIA_MODIFICACION_SEPT_2022/descargar/CONTENIDOS%20MODULOS%20MATERIAS%20ASIGNATURAS.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
