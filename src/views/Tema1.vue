<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estructura del cuerpo

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La estructura del cuerpo es entendida a partir de su arquitectura, en relación a su composición y movimiento, esto es de suma importancia para comprender la fundamentación del patronaje y sus diferentes metodologías empleadas para su realización.
          p.mb-0 La estructura corporal está definida a partir de la organización y disposición de los segmentos del cuerpo partiendo de la función y biomecánica (Norton, 2019), es decir, el movimiento, en donde están implícitos factores anatómicos, morfológicos y posturales que afectan directamente el movimiento del cuerpo, la estabilidad y la ergonomía, en distintos contextos, como, por ejemplo: el diseño de atuendos. 
      
      p.mb-0 A continuación, podrá encontrar los conceptos relacionados a la estructura corporal.
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Antropometría
      
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-6
          .tarjeta--container.row.mb-4
            .col-sm-12.col-lg-4.mx-0.px-0.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/2.png', alt='')
            .col-sm-12.col-lg-8.bg-color-2.p-5
                p.mb-0 La antropometría es considerada como una ciencia que se encarga de medir y analizar las dimensiones físicas, de igual manera contempla las proporciones del cuerpo humano en todas sus etapas del desarrollo.  
          .bg-color-3.px-4.py-4.br-1.mb-4
            p.mb-0 Así mismo, también es considerada como una disciplina que aborda campos como la ergonomía, nutrición y medicina, con el objetivo de evaluar el estado de salud de una persona, lo que permite diseñar espacios, objetos y elementos comprendidos a partir de las variaciones físicas en diferentes contextos.
          p.mb-0 En el campo de la elaboración de vestuario, este concepto es aplicado a partir del análisis ergonómico para poder generar prendas que faciliten el movimiento corporal.
        .col-sm-12.col-lg-6
          .bg-color-4.pcus-1.mb-0
            .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 1.] Antropometría femenina  
            figure.mb-0
                img.wcus-2.mx-auto(src='@/assets/curso/temas/t1/3.png', alt='Esquemas anatómicos de una mujer con medidas antropométricas, destacando proporciones corporales clave. Estos datos son esenciales para el diseño ergonómico, el patronaje y estudios biomecánicos.')


      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Anatomía
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-color': '#F2EEFB'}"
        )
          img.img-1(src='@/assets/curso/temas/t1/4.png', alt='') 
          
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 La anatomía es vista como una rama de la biología que estudia la estructura de todos los seres vivos, focalizada principalmente en la forma, ubicación y la relación que tienen los órganos y los sistemas (Cabrera, 2016).
          p.mb-0 Esta rama tiene relación en la elaboración de prendas dada que está enfocada para lograr una adaptación y funcionalidad al cuerpo humano.

      .bg-full-width.bg-color-8.mb-0(data-aos='fade-right')
        .px-4.px-md-5.py-md-5
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Anatomía del cuerpo
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-3
              figure.mb-0
                  img(src='@/assets/curso/temas/t1/5.png', alt='Cuerpo femenino con los músculos expuestos en vista frontal y posterior. Se distinguen los principales grupos musculares del torso, brazos y piernas, evidenciando su estructura y distribución en el cuerpo.')
          

      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Biomecánica
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t1/7.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 La biomecánica es la disciplina que estudia los principios mecánicos que regulan el movimiento y la estructura del cuerpo humano. Se centra en analizar las fuerzas internas y externas que actúan sobre el cuerpo, así como la respuesta del sistema musculo esquelético ante dichas fuerzas. Sus aplicaciones abarcan áreas como el diseño de prótesis ortopédicas, el deporte y la rehabilitación.
          .bg-color-3.p-4.br-2
            p.mb-0 La relación entre la anatomía y la biomecánica aplicada al diseño de prendas de vestir se basa en los principios de adaptación y funcionalidad.

      p.mb-0(data-aos='fade-right') Comprender la anatomía, biomecánica y ergonomía del cuerpo permite que se puedan diseñar prendas que respondan a las necesidades físicas de una persona, lo que facilita la interacción entre el cuerpo y una prenda de vestir (Sierra y Mosquera, 2013).







      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Morfología
      p.mb-5(data-aos='fade-right') La morfología del cuerpo humano hace referencia a la forma y estructura del cuerpo a partir de la relación y disposición de sus partes, esta rama resulta esencial en otras áreas y disciplinas como la anatomía, y fisiología.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          p.mb-0 #[b Figura 3.] Morfología femenina
      figure.mb-0(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/8.png', alt='Cinco mujeres de pie, en ropa interior  representan diferentes tipos morfológicos femeninos. Sus siluetas evidencian variaciones en proporciones corporales como la forma del tronco, distribución del tejido graso, longitud de piernas y estructura ósea.')
      
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Ergonomía
      p.mb-4(data-aos='fade-right') La ergonomía es contemplada como una disciplina científica que se encarga de estudiar las interacciones entre seres humanos y elementos de un sistema (#[i International Ergonomics Association], 2000), aplicada a partir de teorías, principios y métodos cuyo fin es el bienestar humano. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/9.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La relación de la ergonomía y las prendas de vestir está dada a partir del confort que estas pueden darle al cuerpo humano con el objetivo de mejorar el rendimiento en relación al desempeño de las actividades diarias, su propósito es que se pueda desenvolver a partir de la comodidad, funcionalidad y adaptabilidad, también incluye la prevención de molestias o enfermedades que puedan derivarse de un mal uso de una prenda que no esté elaborada y pensada para el movimiento, por ejemplo: un pantalón que no permita el movimiento de la rodilla puede acarrear molestias o dolores articulares.
          p.mb-0 Es por lo anterior, que en la moda uno de los objetivos a perseguir es poder proporcionar modelos de prendas ergonómicos con procesos de confección, en donde el estudio de materiales para su construcción resulta ser uno de los puntos tácticos en este proceso. 
      
      
      p.mb-5(data-aos='fade-right') En resumen, la relación entre los conceptos y la estructura corporal es la siguiente:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.png', alt='')
        .col-sm-12.col-lg-8
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-6
              .bg-color-6.p-4.br-2.m-1
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-lg-3.d-none.d-lg-block.hcus-1
                    img(src='@/assets/curso/temas/t1/11.png', alt='')
                  .col-sm-12.col-lg-9
                    h4.wcus-1.bg-color-9.px-2.py-1 Antropometría
                    p.mb-0 Se relaciona con las medidas corporales.
            .col-sm-12.col-lg-6
              .bg-color-6.p-4.br-2.m-1
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-lg-3.d-none.d-lg-block.hcus-1
                    img(src='@/assets/curso/temas/t1/12.png', alt='')
                  .col-sm-12.col-lg-9
                    h4.wcus-1.bg-color-9.px-2.py-1 Anatomía
                    p.mb-0 Se refiere a la estructura del cuerpo.
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-6
              .bg-color-6.p-4.br-2.m-1
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-lg-3.d-none.d-lg-block.hcus-1
                    img(src='@/assets/curso/temas/t1/13.png', alt='')
                  .col-sm-12.col-lg-9
                    h4.wcus-1.bg-color-9.px-2.py-1 Biomecánica
                    p.mb-0 Corresponde al movimiento corporal.
            .col-sm-12.col-lg-6
              .bg-color-6.p-4.br-2.m-1
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-lg-3.d-none.d-lg-block.hcus-1
                    img(src='@/assets/curso/temas/t1/14.png', alt='')
                  .col-sm-12.col-lg-9
                    h4.wcus-1.bg-color-9.px-2.py-1 Morfología
                    p.mb-0 Hace referencia a la geometría del cuerpo (huesos y uniones).
            
          .row.justify-content-start.align-items-center.mb-0
            .col-sm-12.col-lg-6
              .bg-color-6.p-4.br-2.m-1
                .row.justify-content-center.align-items-center
                  .col-sm-12.col-lg-3.d-none.d-lg-block.hcus-1
                    img(src='@/assets/curso/temas/t1/15.png', alt='')
                  .col-sm-12.col-lg-9
                    h4.wcus-1.bg-color-9.px-2.py-1 Ergonomía
                    p.mb-0 Abarca la postura.


      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.6 División del cuerpo
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/16.png', alt='')
        .col-sm-12.col-lg-9.bg-color-13.br-1.p-4
            p.mb-0 A partir de lo abordado en los conceptos anteriores, es indispensable saber cómo se contempla la división del cuerpo en relación a sus miembros para poder entenderlo a partir de la clasificación de las prendas inferiores y superiores.
           
      .bg-full-width.bg-color-10.mb-0
        .px-4.px-md-5.py-md-5
          .row.justify-content-between.mb-0(data-aos='fade-right')
            .col-sm-12.col-lg-4.mb-cus
              .titulo-sexto.color-acento-contenido.mt-3
                  p.mb-0 #[b Figura 4.] División del cuerpo
              figure.mb-0
                      img(src='@/assets/curso/temas/t1/17.svg', alt='Esquema del cuerpo humano dividido en regiones anatómicas. Se destacan las principales partes del cuerpo: cabeza (cráneo y cara), tronco (cuello, tórax, abdomen y pelvis), miembro superior (brazo, antebrazo y mano) y miembro inferior (muslo, pierna y pie). Esta ilustración facilita la identificación de las distintas secciones anatómicas del cuerpo humano.')
            .col-sm-12.col-lg-7.px-4
              h4.mb-4 Prendas superiores
              ul.lista-ul--color.mb-5
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  #[b Hombros y cuello:] camisas, camisetas, blusas y chaquetas.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  #[b Busto y torso:] #[i tops], ropa interior, se contempla las de hombros y cuello, pero aquí radica en cómo se ajusta a esta área.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  #[b Cintura:] punto focal en relación al ajuste de prendas anteriores y similares.
              
              h4.mb-4 Prendas inferiores
              ul.lista-ul--color.mb-5
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  #[b Caderas y glúteos:] faldas, #[i leggins], #[i shorts], pantalones. 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  #[b Muslos y piernas:] directamente relacionado con el ajuste de prendas anteriores.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  #[b Tobillos y pies:] relacionado a prendas anteriores, se incluyen medias.
              p.mb-4 Más adelante el componente se adentrará en el tipo de prendas por universos de vestuario.
              .tarjeta.bg-color-12.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-sm-12.col-lg-3.d-none.d-lg-block
                    img.w-75.mx-auto(src="@/assets/curso/temas/t1/18.svg")
                  .col-sm-12.col-lg-9
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Estructura del cuerpo
                        p.mb-0 Se invita a explorar el video, donde se abordan nociones básicas de la estructura corporal como anatomía, ejes, antropometría, ergonomía, somatotipos, siluetas y posturas.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=9UZwjgAYxMY" target="_blank")
                          span Ir al video
                          i.fas.fa-play-circle
      p.mb-0 Teniendo en cuenta la figura anterior, las prendas de vestir se distribuyen a partir de los miembros superiores y miembros inferiores.
      
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.7 Tipos de siluetas femeninas
      p.mb-4(data-aos='fade-right') La tipología de silueta hace referencia a la apariencia generalizada de la forma del cuerpo, depende de la proporción y volumen que la figura humana proyecta en segunda y tercera dimensión. En el sector de la moda, es indispensable poder analizar la figura humana femenina para determinar qué prendas pueden favorecer a una cliente dependiendo del tipo de silueta. A continuación, se presentan las siluetas a tener en cuenta en el patronaje de prendas de vestir.
      .bg-full-width.bg-color-10.mb-5
        .px-4.px-md-5.py-md-5(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] Tipos de siluetas femeninas
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-9
              figure.mb-0
                      img(src='@/assets/curso/temas/t1/19.svg', alt='Cinco figuras femeninas con diferentes tipos de siluetas corporales, cada una asociada con un símbolo geométrico. Estas formas incluyen reloj de arena (X), óvalo (O), triángulo invertido (V), triángulo (A) y rectángulo (I). La ilustración destaca la diversidad de proporciones corporales y su clasificación, utilizada comúnmente en moda, diseño de ropa y análisis de morfología corporal.')  

      TabsA.color-acento-botones(data-aos='fade-right')
        .tarjeta.bg-color-13.p-5(titulo="Tipo de silueta 1")
          .row.justify-content-center.mb-0  
            .col-sm-12.col-lg-6
              h4.mb-5 Silueta reloj de arena
              p.mb-0.mb-cus Se caracteriza e identifica principalmente por tener más volumen en los hombros y las caderas, estas partes tendrán un ancho muy similar, haciendo que el torso se vea más reducido.  En el cuerpo femenino suele percibirse a partir de curvas pronunciadas y proporcionadas al peso corporal.
            .col-sm-12.col-lg-6
              .bg-color-7.p-4.br-2
                .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 6.] Silueta reloj de arena
                figure.mb-0.d-flex.justify-content-center
                    img.wcus-3(src='@/assets/curso/temas/t1/20.svg', alt='Figura femenina con silueta de reloj de arena, caracterizada por hombros y caderas equilibrados con una cintura definida. Un símbolo en la parte inferior refuerza esta morfología.')

        .tarjeta.bg-color-13.p-5(titulo="Tipo de silueta 2")
          .row.justify-content-center.mb-0  
            .col-sm-12.col-lg-6
              h4.mb-5 Silueta triangular o tipo pera
              p.mb-0.mb-cus Se caracteriza por tener las caderas más anchas que los hombros, en este caso la cintura se percibe más definidamente.  La parte superior suele tener un busto pequeño, lo que genera que la parte inferior se evidencie más prominente.
            .col-sm-12.col-lg-6
              .bg-color-7.p-4.br-2
                .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 7.] Silueta triangular
                figure.mb-0.d-flex.justify-content-center
                    img.wcus-3(src='@/assets/curso/temas/t1/21.svg', alt='Figura femenina con silueta de triángulo, caracterizada por caderas más anchas que los hombros. Un símbolo en la parte inferior refuerza esta morfología.')

        .tarjeta.bg-color-13.p-5(titulo="Tipo de silueta 3")
          .row.justify-content-center.mb-0  
            .col-sm-12.col-lg-6
              h4.mb-5 Silueta triangulo invertido
              p.mb-0.mb-cus Se caracteriza por tener los hombros más anchos que las caderas, es decir, es opuesto a la silueta anterior, en este caso se encuentra una cintura menos definida y piernas más delgadas, es común encontrar cuerpos femeninos en esta silueta con espalda ancha y busto prominente.
            .col-sm-12.col-lg-6
              .bg-color-7.p-4.br-2
                .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 8.] Silueta triangulo invertido
                figure.mb-0.d-flex.justify-content-center
                  img.wcus-3(src='@/assets/curso/temas/t1/22.svg', alt='Figura femenina con silueta de triángulo invertido, caracterizada por hombros más anchos que las caderas. Un símbolo en la parte inferior refuerza esta morfología.')

        .tarjeta.bg-color-13.p-5(titulo="Tipo de silueta 4")
          .row.justify-content-center.mb-0  
            .col-sm-12.col-lg-6
              h4.mb-5 Silueta rectangular
              p.mb-0.mb-cus Se caracteriza por tener los hombros, la cintura y la cadera con medidas de anchos similares, es decir, las curvas en este tipo de silueta se presentan más reducidas, formando más líneas semirrectas en la anatomía femenina.
            .col-sm-12.col-lg-6
              .bg-color-7.p-4.br-2
                .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 9.] Silueta rectangular
                figure.mb-0.d-flex.justify-content-center
                    img.wcus-3(src='@/assets/curso/temas/t1/23.svg', alt='Figura femenina con silueta de rectángulo, caracterizada por hombros, cintura y caderas de ancho similar. Un símbolo en la parte inferior refuerza esta morfología.')

        .tarjeta.bg-color-13.p-5(titulo="Tipo de silueta 5")
          .row.justify-content-center.mb-0  
            .col-sm-12.col-lg-6
              h4.mb-5 Silueta ovalada
              p.mb-0.mb-cus Se caracteriza por tener mayor volumen en el área abdominal de la mujer, es decir, se encontrará una figura poco definida con busto prominente y cadera más estrecha.  Las piernas se percibirán un poco más delgadas en relación a la proporción del torso.
            .col-sm-12.col-lg-6
              .bg-color-7.p-4.br-2
                .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 10.] Silueta ovalada
                figure.mb-0.d-flex.justify-content-center
                    img.wcus-3(src='@/assets/curso/temas/t1/24.svg', alt='Figura femenina con silueta de óvalo, caracterizada por una cintura menos definida y mayor volumen en la zona abdominal. Un símbolo en la parte inferior refuerza esta morfología.')
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
