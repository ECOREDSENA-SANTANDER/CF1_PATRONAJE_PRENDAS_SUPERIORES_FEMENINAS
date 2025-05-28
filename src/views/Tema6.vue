<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Fichas técnicas en patronaje
      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t6/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 Una ficha técnica en la industria de la moda es un documento esencial que recopila información detallada sobre una prenda de vestir, sirviendo como guía para su diseño, producción y control de calidad. Este documento facilita la comunicación entre los diversos equipos involucrados en el proceso de fabricación, asegurando que cada prenda cumpla con las especificaciones deseadas. 
      
      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/t2/8.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Elementos clave de una ficha técnica
      
      SlyderF.circl-arrow.mb-4(columnas="col-md-6 col-lg-6 col-xl-4")(data-aos='fade-right')
         
          .tarjeta.bg-color-white
            .row.justify-content-center.align-items-center
              .tarjeta.p-4.bg-white.shadow-sm.hcus-2
                .col-sm-12.col-lg-12
                  .d-flex.justify-content-center.mb-4
                    img(src='@/assets/curso/temas/t6/2.svg', alt='', style='width:70px; background:#FFE066; border-radius:50%; padding:10px;')
                  h4.mb-4.bg-color-6.p-2   Identificación del producto
                  p.mb-0 Incluye el nombre de la prenda, código o referencia, categoría y colección a la que pertenece.
          .tarjeta.bg-color-white
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12
                .tarjeta.p-4.bg-white.shadow-sm.hcus-2
                  .d-flex.justify-content-center.mb-4
                    img(src='@/assets/curso/temas/t6/3.svg', alt='Icono diseño', style='width:70px; background:#FFE066; border-radius:50%; padding:10px;')
                  h4.mb-4.bg-color-6.p-2.text-center Detalles de diseño
                  p.text-center Proporciona descripciones precisas del estilo, tipo de cuello, mangas, cierres y otros elementos distintivos.
          .tarjeta.bg-color-white
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12
                .tarjeta.p-4.bg-white.shadow-sm.hcus-2
                  .d-flex.justify-content-center.mb-4
                    img(src='@/assets/curso/temas/t6/4.svg', alt='Icono materiales', style='width:70px; background:#FFE066; border-radius:50%; padding:10px;')
                  h4.mb-4.bg-color-6.p-2.text-center Especificaciones de materiales
                  p.text-center Detalla los tejidos, fornituras y otros materiales necesarios, incluyendo composición, color, proveedor y características especiales.
          .tarjeta.bg-color-white
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12
                .tarjeta.p-4.bg-white.shadow-sm.hcus-2
                  .d-flex.justify-content-center.mb-4
                    img(src='@/assets/curso/temas/t6/5.svg', alt='Icono medidas', style='width:70px; background:#FFE066; border-radius:50%; padding:10px;')
                  h4.mb-4.bg-color-6.p-2.text-center Medidas y tallas
                  p.text-center Ofrece tablas con dimensiones específicas para cada talla, asegurando la consistencia en el escalado y ajuste de las prendas.
          .tarjeta.bg-color-white
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12
                .tarjeta.p-4.bg-white.shadow-sm.hcus-2
                  .d-flex.justify-content-center.mb-4
                    img(src='@/assets/curso/temas/t6/6.svg', alt='Icono confección', style='width:70px; background:#FFE066; border-radius:50%; padding:10px;')
                  h4.mb-4.bg-color-6.p-2.text-center Instrucciones de confección
                  p.text-center Describe los métodos de costura, tipos de puntadas, márgenes de costura y cualquier técnica especial requerida durante la fabricación.
          .tarjeta.bg-color-white
            .row.justify-content-center.align-items-center
              .col-sm-12.col-lg-12
                .tarjeta.p-4.bg-white.shadow-sm.hcus-2
                  .d-flex.justify-content-center.mb-4
                    img(src='@/assets/curso/temas/t6/7.svg', alt='Icono acabado', style='width:70px; background:#FFE066; border-radius:50%; padding:10px;')
                  h4.mb-4.bg-color-6.p-2.text-center Detalles de acabado
                  p.text-center Especifica procesos adicionales como lavado, planchado, etiquetado y empaquetado, garantizando la presentación y calidad final del producto. 
  
      p.mb-5.text-center(data-aos='fade-right') Dentro del proceso de fabricación, existen diferentes tipos de fichas técnicas especializadas:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/8.png', alt='')
        .col-sm-12.col-lg-9 
          AcordionA(tipo="a" clase-tarjeta="tarjeta  bg-color-21")
            div(titulo='Ficha técnica de patronaje')
              .row.mb-0
                .col-12.px-5
                  p.mb-0 Este documento proporciona una guía detallada y precisa del diseño plano acotado con medidas para varias tallas. Es esencial para la correcta fabricación de prendas, asegurando que cada pieza cumpla con los estándares de calidad y ajuste especificados.

            div(titulo='Ficha técnica de despiece')
              .row.mb-0
                .col-12.px-5
                  p.mb-0 Aunque no se encontró información específica en las fuentes consultadas, generalmente, la ficha técnica de despiece detalla cada componente individual de la prenda, incluyendo piezas de tela, forros y refuerzos, especificando dimensiones, materiales y cualquier característica particular.

            div(titulo='Ficha técnica de escalado')
              .row.mb-0
                .col-12.px-5
                  p.mb-0 Aunque no se encontró información específica en las fuentes consultadas, generalmente, la ficha técnica de escalado se centra en la gradación de tallas, proporcionando las medidas y proporciones necesarias para adaptar el patrón base a diferentes tamaños, manteniendo la coherencia en el diseño y el ajuste de la prenda.
      p.mb-5(data-aos='fade-right') La implementación de fichas técnicas detalladas en cada etapa del proceso de fabricación es fundamental para garantizar la precisión, eficiencia y calidad en la producción de prendas de vestir.
      .tarjeta.bg-color-12.p-3.mb-0(data-aos='fade-right')
          .row.justify-content-around.align-items-center
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img.w-75.mx-auto(src="@/assets/curso/temas/t1/18.svg")
            .col-sm-12.col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Introducción a ficha técnica
                  p.mb-0 Se invita a consultar el video para conocer la función de las fichas técnicas en la fabricación de prendas de vestir y su importancia en el control y precisión del proceso de confección.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=5YOLIDHLiCw" target="_blank")
                    span Ir al video
                    i.fas.fa-play-circle       
  </template>

<script>
export default {
  name: 'Tema6',
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
