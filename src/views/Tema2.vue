<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Análisis y clasificación de las medidas

      p.mb-0(data-aos='fade-right') Dentro del análisis de medidas se hace necesario traducir las medidas obtenidas del cuerpo humano, dado que esto guiará todo el proceso de patronaje en la elaboración de moldería, por ello es importante establecer un sistema de medidas claro para poder clasificarlas y a partir de sus características emplearlas en la elaboración de patrones.
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Sistemas de medidas (clasificación)
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5
          .bg-color-14.p-4.br-3.mb-cus
            p.mb-3 El sistema de medidas en el área de patronaje hace referencia al conjunto de técnicas y procesos que se utilizan para obtener y dar aplicación con los datos obtenidos de las medidas corporales, las cuales han de ser precisas en la elaboración de patrones de prendas de vestir.
            p.mb-0 Del proceso de medición dependerá el ajuste y horma de una prenda sobre el cuerpo en donde la proporcionalidad, comodidad y estética se conjuguen con el objetivo de tener un resultado esperado. 
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.svg', alt='')
        .col-sm-12.col-lg-4
            p.mb-4 El sistema de medidas se clasifica en:
            ol.lista-ol--cuadro.lista-ol
              li.d-flex.mb-4
                .lista-ol--cuadro__vineta
                  span.texto-sistema.fw-bold a
                span #[b Sistema inglés:] se contempla como unidad básica de medida la pulgada, aplicada en procesos de patronaje en países como Estados Unidos, Inglaterra y Australia.
              li.d-flex.mb-0
                .lista-ol--cuadro__vineta
                  span.texto-sistema.fw-bold b
                span #[b Sistema internacional o métrico decimal:] se contempla como unidad básica de medida el metro, aplicado en la gran mayoría de países latinoamericanos.
      .bg-full-width.bg-color-10.mb-0.mb-cus
        .px-4.px-md-5.py-md-5.pcus-3(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 11.] Escala de fracciones de pulgada del sistema inglés.
          
          figure.mb-0
            img.wcus-4.mx-auto(src='@/assets/curso/temas/t2/2.svg', alt='Regla en pulgadas del sistema inglés que muestra divisiones en fracciones de media pulgada desde 0 hasta 10 pulgadas. Cada pulgada está subdividida en 16 partes iguales, con marcas más largas en cada mitad (1/2), y las marcas más pequeñas representan fracciones menores.')
      .bg-full-width.bg-color-13.mb-5
        .px-4.px-md-5.py-md-5.pcus-3(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 12.] Centímetros (metro)
          
          figure.mb-0
            img.wcus-4.mx-auto(src='@/assets/curso/temas/t2/3.svg', alt='Ilustración lineal en 2D de una regla con medidas en centímetros, con divisiones centímetro a centímetro relacionando el número de fracciones.')
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .crd.crd--avatarHorizontal.crd--first.py-0
            .row.align-items-center
              .col-2.d-none.d-lg-block
                  img(src="@/assets/curso/temas/t2/4.svg", alt="alt").img100
              .col-sm-12.col-lg-10
                p.mb-0.fw-bold Los dos tipos de sistemas son utilizados en diferentes áreas y cadenas productivas teniendo en cuenta que algunos estándares están trabajados en medidas diferentes a las que usa oficialmente el país.



      TabsC.color-acento-contenido(data-aos='fade-right')
        .py-3.py-md-4(titulo="Sistema métrico inglés")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6
              p.mb-4 Está representado como número fraccionario A/B, en donde A es el numerador y B el denominador. 
              p.mb-5 El numerador hace referencia a el número de partes que se toman de la unidad y el denominador al número de partes iguales en los que se divide esa unidad.
              .bg-color-3.px-5.py-4.br-3.mb-cus.pcus-4
                p.mb-0.fw-bold Al sistema ingles también se le llama “sistema de medidas imperial”, especialmente en el entorno de la confección. Sin embargo, la mayoría de los países han adoptado el sistema de medidas decimal comúnmente llamado “sistema universal”, haciendo comunes los procesos de conversión de medidas, donde 1 pulgada corresponde a 2,54 cm.
            .col-sm-12.col-lg-6
              .bg-color-16.mb-0.p-4
                .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 13.]  Sistema fraccionado
                figure.mb-0
                  img.wcus-5.mx-auto(src='@/assets/curso/temas/t2/5.svg', alt='Ilustración lineal en 2D de una circunferencia dividida en tres partes para explicar el sistema métrico por numerador y denominador.')

        .py-3.py-md-4(titulo="Sistema métrico decimal o universal")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6
              p.mb-5 Hace referencia al sistema de unidades en donde los múltiplos o submúltiplos de las unidades de igual naturaleza siguen la escala decimal (10).
              .tarjeta.bg-color-12.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-sm-12.col-lg-2.d-none.d-lg-block
                    img(src="@/assets/curso/temas/t2/6.svg")
                  .col-sm-12.col-lg-10
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Medidas anatómicas
                        p.mb-0 Se invita a consultar el PDF, donde se presenta una visión general sobre los sistemas de medición, las medidas anatómicas y sus respectivas deducciones.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/2_Anexo_2_Medidas_anatomicas.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
            .col-sm-12.col-lg-6
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 1.]  Análisis de unidades
              .tabla-a.color-acento-contenido.tabla-custom
                table(alt="Tabla de análisis de medidas con el nombre de siete unidades de medida, abreviatura de la unidad y la equivalencia numérica.")
                  thead
                    tr
                      th.w-25 Nombre
                      th.w-25 Abreviatura
                      th.w-50 Equivalencia
                  tbody
                    tr
                      td Kilómetro
                      td km
                      td 1000 m
                    tr
                      td Hectómetro
                      td hm
                      td 100 m
                    tr
                      td Decámetro
                      td dam
                      td 10 m
                    tr
                      td Metro
                      td m
                      td 1 m
                    tr
                      td Decímetro
                      td dm
                      td 0,1 m
                    tr
                      td Centímetro
                      td cm
                      td 0,01 m
                    tr
                      td Milímetro
                      td mm
                      td 0,001 m
              
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Las medidas
      
      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.mx-0.px-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')
        .col-sm-12.col-lg-9.bg-color-2.p-4
            p.mb-0 Las medidas son unidades numéricas utilizadas para representar el tamaño de una figura, objeto, parte, etc. En el patronaje de prendas para obtener estos datos se emplea la cinta métrica de forma lineal, para medir las partes del cuerpo en relación, al largo, ancho y contorno.  En Colombia la metodología que se emplea es obtener dichos datos en centímetros o pulgadas.  
      
      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
          .col-auto.titulo-icono-img
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
          .col
            h3.mb-0.titulo-icono-text.px-0.py-2 Las medidas corporales



      p.mb-4(data-aos='fade-right') Estas se toman teniendo en cuenta los puntos de anclaje del cuerpo humano, partiendo de parámetros antropométricos y anatómicos, en donde se medirán teniendo en cuenta los volúmenes y las protuberancias corporales, estas se clasifican en tres grupos:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.justify-content-center.mb-cus
          .mx-1.bg-color-17.p-4.br-3.card-1
            img.wcus-3.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/10.svg', alt='')          
            h4.text-center.wcus-1.bg-color-9.px-2.py-1   Largos
            p.mb-0.text-center Las medidas se toman de forma vertical y estas hacen referencia a los largos y talles del cuerpo.
        .col-sm-12.col-lg-4.justify-content-center.mb-cus
          .mx-1.bg-color-17.p-4.br-3.card-1
            img.wcus-3.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/9.svg', alt='')          
            h4.text-center.wcus-1.bg-color-9.px-2.py-1   Anchos
            p.mb-0.text-center La medida se toma de manera horizontal y corresponden a los anchos del cuerpo, como el ancho de pecho.
        
        .col-sm-12.col-lg-4.justify-content-center.mb-cus
          .mx-1.bg-color-17.p-4.br-3.card-1
            img.wcus-3.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/11.svg', alt='')          
            h4.text-center.wcus-1.bg-color-9.px-2.py-1   Contornos
            p.mb-0.text-center La medida se toma teniendo en cuenta la figura 3D del cuerpo humano, por ejemplo: todo el contorno de la cintura.
        

      p.mb-4(data-aos='fade-right') En la siguiente figura se presentan largos, anchos y contornos del cuerpo humano femenino:
      .bg-full-width.bg-fondo-1.mb-5
          .px-4.px-md-5.py-md-5(data-aos='fade-right')
            .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 14.] Clasificación de las medidas
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-8
                figure.mb-0
                  img.wcus-4.mx-auto(src='@/assets/curso/temas/t2/12.svg', alt='Esquema técnico de un cuerpo femenino con referencias de medidas para patronaje y confección. Incluye indicaciones como circunferencia de la cabeza, contornos de busto, cintura y cadera, largo de talle, ancho de espalda, altura de cadera, largo de mangas y pantalón, entre otras. Estas mediciones son fundamentales para la creación de patrones y el ajuste preciso de prendas.')

      .tarjeta.bg-color-12.p-3.mb-0(data-aos='fade-right')
        .row.justify-content-around.align-items-center
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img.w-75.mx-auto(src="@/assets/curso/temas/t1/18.svg")
          .col-sm-12.col-lg-11
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Clasificación de medidas
                p.mb-0 Se invita a consultar el video para conocer cómo desarrollar patrones de prendas de vestir, desde la identificación de formas corpóreas y conceptos básicos de anatomía, hasta el diseño del molde básico.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=ppOfZh4ZzQg" target="_blank")
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
