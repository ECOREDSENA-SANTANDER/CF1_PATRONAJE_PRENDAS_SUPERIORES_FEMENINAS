<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Moda
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La moda es vista como un fenómeno que conlleva aspectos profundos más allá de un simple conjunto de prendas, dado que se contempla como un reflejo de la persona, la sociedad y la cultura. señala que la moda va más allá de un conjunto de elementos (prendas) o tendencias y es un sistema que se construye socialmente basado en normas sobre lo que se considera aceptable por determinados contextos (Kawamura, 2005).
          p.mb-0 A partir, de lo anterior en el sector de la moda, el concepto se entiende como un sistema, de ahí que diferentes teóricos y expertos en el tema se refieran a "sistema moda".
      p.mb-0 #[b Sistema moda:] se contempla como sistema, dado que engloba no solo las prendas de vestir, sino elementos como accesorios, complementos y calzado, de igual manera áreas que son susceptibles de cambiar y adaptarse según las tendencias actuales.
      
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Universos del vestuario
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.svg', alt='')
        .col-sm-12.col-lg-9
            p.mb-0 Los universos del vestuario constituyen agrupaciones de prendas organizadas en categorías que responden a contextos específicos de uso. Estas categorías mantienen una coherencia interna en cuanto a tipologías de prendas, materiales textiles y criterios de aplicación. La clasificación del vestuario según la ocasión de uso facilita la estructuración del producto y permite una definición más precisa del mercado objetivo al que se dirige.
      
      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/t2/8.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Universos de vestuario

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          p.mb-0 #[b Tabla 8.] Clasificación de universos del vestuario por ocasión de uso
      .tabla-a.color-acento-contenido.tabla-custom.mb-5(data-aos='fade-right')
        table(alt="La tabla clasifica diferentes tipos de vestuario según su ocasión de uso y proporciona ejemplos de prendas para cada de estos. Los universos de vestuario son; formal, informal, deportiva, ejecutiva, y ceremonial.")
          thead
            tr
              th Universo
              th Uso
              th.w-50 Ejemplos
          tbody
            tr
              td Formal
              td Eventos elegantes, reuniones importantes, fiestas de etiqueta
              td Trajes de gala, vestidos de noche, vestidos de gala
            tr
              td Informal casual
              td Vida cotidiana, actividades diarias
              td Pantalones en #[em denim], camisetas, camisas, zapatillas, vestidos ligeros
            tr
              td Deportivo o funcional
              td Actividad física, trabajo especializado
              td Ropa deportiva, uniformes médicos, overoles
            tr
              td Oficina o ejecutivo
              td Entornos laborales, negocios
              td Trajes ejecutivos, blusas, pantalones de vestir
            tr
              td Ceremonia y festivo
              td Bodas, graduaciones, eventos religiosos
              td Vestidos largos, trajes formales, indumentaria cultural
            tr
              td Fantasía
              td Teatro, cine, #[em cosplay], carnaval
              td Disfraces, vestuario teatral, trajes de época
            tr
              td #[em Swimwear]
              td Playa, piscina, eventos recreativos
              td Vestidos de baño, salidas de baño, vestidos para la playa y la piscina
            tr
              td #[em Lingerie wear]
              td Prendas interiores
              td Ropa interior
            tr
              td #[em Sleepwear]
              td Para dormir o descansar
              td Ropa de descanso, pijamas
      .bg-color-3.p-4.br-2.mb-5(data-aos='fade-right')
        p.mb-0.fw-bold Ocasión de uso: contempla los posibles escenarios en los que una persona o grupos de personas usan una prenda de acuerdo al contexto, esto es pactado culturalmente y hace parte de la identidad culturar individual y grupal.
      
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 9.] Ocasión de uso por universo de vestuario
          .tabla-a.color-acento-contenido.tabla-custom.mb-5
            table(alt="La tabla presenta información de ocasión de uso por universo de vestuario, correspondiendo el protocolario a la gala /formal, multiocasion al casual, Informal al kakiwear, Jeanswear, Sportswear, Activwear, Leisurewear, y finaliza con complementos al Swinwear/Beachwear, Sleepwear, y Underwear.")
              thead
                tr
                  th Ocasión de uso
                  th.w-50 Universo de vestuario
              tbody
                tr
                  td Protocoloario
                  td Gala #[br] Formal
                tr
                  td Multiocasión
                  td Casual
                tr
                  td Informal
                  td #[em Kakiwear] #[br] #[em Jeanswear] #[br] #[em Sportswear] #[br] #[em Activewear] #[br] #[em Leisurewear]
                tr
                  td Complementos
                  td #[em Swimwear – Beachwear] #[br] #[em Sleepwear] #[br] #[em Underwear]
      
      p.mb-5(data-aos='fade-right') A continuación, encontrará ejemplos de prendas de moda casual en la línea femenina:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-cus
            .bg-color-8.mb-0.p-4
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 18.]  Prendas casuales en algodón
              figure.mb-0
                img.wcus-7.mx-auto(src='@/assets/curso/temas/t4/3.png', alt='Conjunto de prendas femeninas de estilo casual.  Incluye una blusa, una camisa de mezclilla, una camiseta de rayas, un vestido denim, un pantalón negro y un jean azul. También hay tres tipos de calzado: zapatillas blancas, bailarinas negras y mules de tacón.')
            figcaption Fuente: https://www.project-glam.com/project-glam/estilo-casual-como-vestir-y-ejemplos

        .col-sm-12.col-lg-6
            .bg-color-8.mb-0.p-4
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 19.]  Prendas casuales de vestido y complementos
              figure.mb-0
                img(src='@/assets/curso/temas/t4/4.png', alt='Conjunto de prendas femeninas de estilo casual. Incluye un vestido negro largo de tirantes, una chaqueta de mezclilla corta, sandalias negras de tiras cruzadas, un bolso negro con detalles dorados y aretes dorados pequeños.')
            figcaption Fuente: https://www.project-glam.com/project-glam/estilo-casual-como-vestir-y-ejemplos


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-cus
            .bg-color-8.mb-0.p-4
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 20.]  Prendas casuales en tejido de poliéster
              figure.mb-0
                img(src='@/assets/curso/temas/t4/5.png', alt='Conjunto de prendas femeninas de estilo casual. Incluye una camiseta de rayas blancas y negras, un chaleco acolchado rojo, unos leggings negros ajustados y botas negras tipo combate. ')
            figcaption Fuente: https://www.project-glam.com/project-glam/estilo-casual-como-vestir-y-ejemplos

        .col-sm-12.col-lg-6
            .bg-color-8.mb-0.p-4
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 21.]  Prendas casuales de sudadera y pantalón
              figure.mb-0
                img.wcus-8.mx-auto(src='@/assets/curso/temas/t4/6.png', alt='Conjunto de prendas femeninas de estilo casual. Incluye un suéter rosa de manga larga y corte corto, un pantalón ancho de mezclilla, zapatillas con estampado animal print, un bolso negro con lazo y aretes de aro plateados.')
            figcaption Fuente: https://www.project-glam.com/project-glam/estilo-casual-como-vestir-y-ejemplos

      .tarjeta.bg-color-12.p-3.mb-0(data-aos='fade-right')
        .row.justify-content-around.align-items-center
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img.w-75.mx-auto(src="@/assets/curso/temas/t1/18.svg")
          .col-sm-12.col-lg-11
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Gamas de mercado Universos de vestuarios - ocasiones de uso
                p.mb-0 Se invita a consultar el video para comprender cómo el vestuario se adapta a diferentes contextos, estilos y funciones, según las ocasiones de uso y las necesidades del mercado.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=VsTacEciP3k" target="_blank")
                  span Ir al video
                  i.fas.fa-play-circle

      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Gamas de mercados
      p.mb-5(data-aos='fade-right') Las gamas de mercado se clasifican de acuerdo con líneas de mercado dentro del sector e industria de la moda, en la siguiente figura:
      .bg-color-8.mb-5.p-4(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 22.]  Sistema moda y gamas de mercado
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6
            figure.mb-0
              img(src='@/assets/curso/temas/t4/7.svg', alt='Representación de la pirámide de la moda, una clasificación de la industria según la calidad y exclusividad de las prendas. Se divide en cinco niveles; alta costura, moda de alta calidad, gama media, mercado de masas, gama baja.')
          .col-sm-12.col-lg-6.d-none.d-lg-block
            figure.mb-0
              img(src='@/assets/curso/temas/t4/8.png', alt='')
      p.mb-5.text-center(data-aos='fade-right') A partir de lo anterior y atendiendo a la clasificación de las gamas de mercado en el sistema moda, se relacionan los siguientes conceptos:
      TabsC.color-acento-contenido.mb-5(data-aos='fade-right')
        .py-3.py-md-4(titulo="Concepto 1")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.p-5
              h4.mb-5 Alta costura o #[em haute couture]
              p.mb-0 Se caracteriza por la elaboración de prendas exclusivas, confeccionadas a medida y solicitud de cliente, garantizando la exclusividad y no repetición de modelo en procesos de producción.  Este proceso es regulado por la Cámara Sindical de la Alta Costura, garantizando el proceso artesanal y de calidad llevado a cabo.
            .col-sm-12.col-lg-5.bg-color-16.p-4
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 23.]  Alta costura
              figure.mb-0
                img(src='@/assets/curso/temas/t4/10.png', alt='Modelo con un vestido de alta costura en color morado. La prenda es asimétrica, con un solo hombro adornado con un volante. El vestido se ajusta a la silueta de la modelo.')
          
        .py-3.py-md-4(titulo="Concepto 2")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.p-5
              h4.mb-5 Listo para llevar o #[em prêt-à-porter]
              p.mb-0 La moda #[em prêt-à-porter] o listo para llevar, se caracteriza por producción de número reducido de prendas de un mismo modelo, siguiendo tendencias de alta costura y calidad de las prendas.
            .col-sm-12.col-lg-5.bg-color-16.p-4
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 24.] #[em Prêt-à-porter]
              figure.mb-0
                img(src='@/assets/curso/temas/t4/9.png', alt='Dos mujeres exploran opciones prêt-à-porter en el probador: una sostiene una sudadera gris de corte minimalista, mientras la otra muestra unas sandalias blancas de diseño estructurado, ideales para un look casual y moderno.')

        .py-3.py-md-4(titulo="Concepto 3")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.p-5
              h4.mb-5 Pronta moda o #[em fast fashion]
              p.mb-4 En esta línea se maneja producción en masa de prendas cuyo fin es llegar al mayor número de personas posibles. Es un modelo de negocio que implementa estrategias de tendencias de corto plazo y calidad media baja en sus procesos de producción.
              p.mb-0 Esta línea ha sido cuestionada en los últimos años dado el alto impacto ambiental generado, por el uso de elementos tóxicos y desperdicio textil.
            .col-sm-12.col-lg-5.bg-color-16.p-4
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 25.] Modelos de pronta moda  
              figure.mb-0
                img(src='@/assets/curso/temas/t4/11.png', alt='Cinco personas lucen looks casuales y actuales, resultado de la pronta moda: vestidos frescos, conjuntos básicos y prendas versátiles como la chaqueta de mezclilla y la camisa de lino, ideales para un día de compras urbano y con estilo.')

        .py-3.py-md-4(titulo="Concepto 4")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.p-5
              h4.mb-5 Moda lenta o #[em slow fashion]
              p.mb-0 Línea surgida a partir del impacto ambiental generado en el #[em fast fashion], busca la circularidad de los productos en la reutilización de los materiales de las prendas usadas, así mismo, implementa estrategias para el cero impacto ambiental fomentando la sostenibilidad en la industria.
            .col-sm-12.col-lg-5.bg-color-16.p-4
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 26.]  Rueda de moda circular  
              figure.mb-0
                img.wcus-6.mx-auto(src='@/assets/curso/temas/t4/12.png', alt='Diagrama circular que representa las etapas de la moda circular: reciclar, reparar, alquilar/comprar, producción, manufactura, distribución, fibras sostenibles y donar.')

      
      .tarjeta.bg-color-12.p-3.mb-0(data-aos='fade-right')
        .row.justify-content-around.align-items-center
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img.w-75.mx-auto(src="@/assets/curso/temas/t1/18.svg")
          .col-sm-12.col-lg-11
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Gamas de mercado- Universos de vestuarios-Ocasiones de uso
                p.mb-0 Se invita a explorar el video - Gamas de mercado - Universos de vestuarios - Ocasiones de uso.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=VsTacEciP3k" target="_blank")
                  span Ir al video
                  i.fas.fa-play-circle
      
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Tipología de prendas femeninas
      
      p.mb-5(data-aos='fade-right') Las tipologías de las prendas se clasifican en función de la estructura corporal. Por esta razón, para completar la etapa de conceptualización, resulta necesario realizar una clasificación que permita identificar las partes de las prendas según la arquitectura del cuerpo. En este sentido, se presenta el siguiente video:
      .tarjeta.bg-color-12.p-3.mb-0(data-aos='fade-right')
          .row.justify-content-around.align-items-center
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img.w-75.mx-auto(src="@/assets/curso/temas/t1/18.svg")
            .col-sm-12.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Categoria de prendas - tipologías - bitácora de formas
                  p.mb-0 Se invita a consultar el video “Categoria de prendas - tipologías - bitácora de formas”.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=leHGYnfUxGk" target="_blank")
                    span Ir al video
                    i.fas.fa-play-circle 

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
