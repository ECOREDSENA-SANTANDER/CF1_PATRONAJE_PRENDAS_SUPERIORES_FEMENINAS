<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema que resume los aspectos fundamentales del componente formativo estructura corporal femenina. Este integra saberes relacionados con la antropometría, la anatomía, la biomecánica, la morfología y la ergonomía, con el propósito de comprender la división estructural del cuerpo y las siluetas femeninas, elementos esenciales para la elaboración de cuadros de tallas a partir de la toma precisa de medidas. Asimismo, se aborda una visión general de la moda, sus universos y segmentos de mercado, con énfasis en la tipología de prendas superiores femeninas dentro del vestuario casual. Finalmente, se incluye una clasificación general de los textiles, sus usos y aplicaciones, para concluir con el desarrollo de fichas técnicas orientadas al patronaje.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra un esquema titulado “Estructura corporal femenina”, organizado en cuatro ejes temáticos: estructura del cuerpo, análisis y clasificación de medidas, análisis de medidas y tallas, y moda. Cada eje se subdivide en conceptos clave como antropometría, tipos de siluetas, proporciones, normativas, universos del vestuario y tipología de prendas femeninas, abordando de forma técnica y estructurada la relación entre el cuerpo y la indumentaria desde una perspectiva de diseño.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg", alt="Icono PDF")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
