<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5.align-items-center
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-8
          p.mb-0 El diseño de moda engloba diferentes procesos de producción que hacen sea posible la materialización de una idea, como lo son poder desarrollar prendas de vestir con elementos visuales que juntos componen un diseño en particular.  Dentro de estos procesos está el patronaje de prendas, el cual consiste en traducir información obtenida de la figura humana en 3D (tercera dimensión), en segunda dimensión en planos técnicos de dibujo llamados “patrones básicos de prendas”, es por ello que comprender la figura humana, es de vital importancia, dado que permitirá captar la información necesaria en relación a desarrollar los requerimientos del cliente que posibilite la interpretación de un diseño en específico.
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .row.justify-content-center.mb-3.align-items-center
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img.w-75.m-auto(src='@/assets/curso/temas/intro/3.svg', alt='')
          .col-sm-12.col-lg-10
              p.mb-0 Es por ello que, a partir de conceptos como la antropometría, se considerará la estructura corporal en un amplio contexto, que implica el abordaje de conceptos como biomecánica, morfología y ergonomía, para pasar a entender el cuerpo en relación a su división, lo que conlleva a implementar un sistema de medición técnico cuya información es indispensable en la construcción de cuadro de tallas. 
        .bg-color-1.px-4.py-4
          p.mb-0 Por lo anterior, este componente permitirá al aprendiz desarrollar diferentes metodologías que faciliten la interpretación de diseños o modelos englobados dentro de la clasificación de prendas de vestir teniendo como base la clasificación de tipologías, silueta femenina y universos del vestuario.  
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3W10xmjBzQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Estructura corporal femenina 

</template>

<script>
export default {
  name: 'Introduccion',
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
