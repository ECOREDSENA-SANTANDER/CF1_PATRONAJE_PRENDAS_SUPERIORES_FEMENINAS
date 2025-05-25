<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Análisis de medidas y cuadro de tallas
      p.mb-0(data-aos='fade-right') Teniendo claro el análisis y la toma de medidas, en este apartado se abordará como se construye un cuadro de tallas y como este tiene aplicabilidad en el área del patronaje.
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Proporciones versus canon
      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mx-0.px-0
          img(src='@/assets/curso/temas/t3/1.svg', alt='')
        .col-sm-12.col-lg-6.bg-color-16.p-4.mb-cus
            p.mb-3 La proporción versus el canon hace referencia a cuantas cabezas caben en la altura del cuerpo, para ello es importante precisar: 
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.bg-color-11
                p.mb-0 #[b Canon:] prototipo de cuerpo físico que reúne características consideradas casi perfectas en su género, referidas específicamente a la figura humana en relación a la percepción de proporcionalidad. 

              li.d-flex
                i.fas.fa-check-circle.bg-color-11
                p.mb-0 #[b Proporción:] hace referencia a la relación de correspondencia entre equilibrio o simetría que están presentes entre las partes de un todo. Es esencial en disciplinas como el arte, la moda, la arquitectura entre otras.

      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/t2/8.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Importancia de la proporción en el diseño

      p.mb-4(data-aos='fade-right') El concepto y aplicación de la proporcionalidad en el diseño es fundamental para lograr un equilibrio armonioso dentro de las composiciones de una prenda de vestir, dado que relacionan las diferentes partes de un modelo entre sí y con el cuerpo humano. 
      p.mb-4(data-aos='fade-right') A continuación, se presenta el ejemplo de la figura humana femenina en canon y proporción:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
            .bg-color-16.mb-0.p-4
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 15.]  Canon femenino con 8 cabezas
              figure.mb-0
                img.wcus-6.mx-auto(src='@/assets/curso/temas/t3/2.svg', alt='Esquema de proporciones del cuerpo femenino basado en la medida de la cabeza como unidad de referencia. Se observa que la altura total del cuerpo equivale aproximadamente a ocho cabezas.')

        .col-sm-12.col-lg-6
            .bg-color-8.mb-0.p-4
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 16.]  Proporción de la figura humana Vitruvian
              figure.mb-0
                img(src='@/assets/curso/temas/t3/3.svg', alt='Figura femenina en una circunferencia con movimiento superpuesto, denotando la proporción del movimiento de brazos y piernas.')

      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/t2/8.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Proporciones corporales

      p.mb-4(data-aos='fade-right') La proporción corporal hace referencia a la relación matemática y armoniosa entre las partes del cuerpo humano (Esparza, 1993). Esta proporción está dada en todas las etapas del desarrollo del ser humano, desde su nacimiento hasta la vejez.
      .bg-full-width.bg-color-8.mb-0
        .px-4.px-md-5.py-md-5.pcus-3(data-aos='fade-right')
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 17.] Proporción de acuerdo con las etapas de crecimiento

          figure.mb-0
            img.wcus-6.mx-auto(src='@/assets/curso/temas/t3/4.png', alt='Siete lustraciones lineales en segunda dimensión del cuerpo humano por edades de 1 año, 3 años, 5 años, 10 años y 15 años.')
            figcaption.wcus-6.mx-auto Fuente: https://lapizuri.weebly.com/proporcioacuten-del-cuerpo-humano.html
            
            
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Medidas deducidas
      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-3.mb-cus
          .bg-color-13.px-5.pcus-2.br-3
            p.mb-3 Las medidas deducidas hacen alusión a un proceso que se realiza una vez ya se han obtenido las medidas corporales del cliente, estas se utilizan para calcular un cuadro de tallas completo.  Por lo general se hace uso de dos medidas; la altura o estatura total y el contorno superior prominente.
            p.mb-0 A continuación, encontrará una tabla de fórmulas que le permitirá comprender cómo se realiza la deducción de medidas.
        .col-sm-12.col-lg-6.mb-cus
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2.] Fórmulas de medidas deducidas
            .tabla-a.color-acento-contenido.tabla-custom
              table(alt="Fórmulas de medidas deducidas de pecho, cadera, cintura, estatura, talle, cintura/suelo, largo de brazo, estatura total y base, cada una con su equivalencia de fórmula de deducción.")
                thead
                  tr
                    th Parte del cuerpo
                    th.w-50 Fórmula
                tbody
                  tr
                    td Pecho
                    td Tórax máximo - 2
                  tr
                    td Cadera
                    td Tórax máximo + 4
                  tr
                    td Cintura
                    td Cadera - 14
                  tr
                    td Estatura 7 ac (nota: 7ac hace referencia a la medida que se toma desde el cuello hasta la planta del pie)
                    td Estatura total - 20
                  tr
                    td Talle
                    td 3/10 de la estatura 7 ac
                  tr
                    td Cintura/suelo
                    td 7/10 de la estatura 7 ac
                  tr
                    td Largo del brazo
                    td 4/10 de la estatura 7 ac
                  tr
                    td Estatura total
                    td Estatura 7 ac + 20 cm
                  tr
                    td Base
                    td Pecho + desahogo (4 cm) + costura 2 cm

        .col-sm-12.col-lg-3
          .bg-color-18.px-5.pcus-3.br-3
            p.mb-3 A partir de la tabla anterior, es importante tener en cuenta, la medida y aplicación de la fórmula. A continuación, se relaciona un ejemplo: 
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.bg-color-11
                p.mb-0 Deducir la medida de la 7ac y la medida total de la persona, se le restarán 20 centímetros (cm).  Estos 20 cm corresponden a la medida estandarizada aproximada de la cabeza, esto es 7ac o largo útil = largo total – 20 cm. 

      p.mb-4.text-center(data-aos='fade-right') En la siguiente tabla podrá encontrar otras fórmulas de deducción en relación con medidas horizontales y verticales:

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 3.] Fórmulas para deducción de medidas corporales
      .tabla-a.color-acento-contenido.tabla-custom-2.mb-5(data-aos='fade-right')
        table(alt="Fórmulas de cálculo de medidas corporales utilizadas en patronaje y confección. Se dividen en tres categorías: medidas horizontales, que incluyen busto, cintura, cadera y extremidades; medidas verticales, como estatura, altura de busto y largo de brazo; y otras fórmulas de deducción, basadas en la edad o proporciones del cuerpo.")
          caption Nota: 7ac hace referencia a toma de medida del cuello hasta la planta del pie.
          thead
            tr
              th.text-center Horizontales
              th.text-center Verticales
              th.text-center Otras fórmulas de reducción
          tbody
            tr
              td 
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Tórax máximo = busto 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Tórax máximo = talla + 36 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Pecho = tórax máximo - 2 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Bajo busto = busto – 6 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Separación de busto = 2/5 busto 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cintura = busto – 10 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cadera = busto + 4 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cuello =1/2 busto + 12 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Rodilla = 1/4 busto + 24 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Tobillo = 1/8 busto + 15,5 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Brazo = busto – 18 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Muñeca = 1/4 busto + 5 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Ancho espalda = busto – 8 cm
              td
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Estatura 7ac = busto + 96 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Estatura total = estatura 7ac + 20 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Altura de busto = 3/8 estatura 7ac – 27 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Altura bajo busto = 3/8 estatura 7ac – 18 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Largo brazo = 4/10 estatura 7ac 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cintura/suelo = 7/10 estatura 7ac 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Altura de cadera = 2/3 de tiro 
              td
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Talla = años 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Pecho = años + 24 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cintura = 1/2 de años + 26 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cadera = años + 28 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cuello = 2/3 de pecho + 4 cm  
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Estatura 7ac = años x 5 + 65 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Talle espalda = 3/10 de estatura 7ac
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Estatura total: estatura 7ac + 15 cm a 18 cm. Corresponden al canon del niño o medida de cabeza 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Largo de brazo= 4/10 de estatura 7ac
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Codo = 1/2 de brazo. Esta medida sin tener en cuenta lo que corresponde a la muñeca (menos 5 cm para todas las tallas) 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cintura al suelo = 7/10 de estatura 7ac 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Largo de falda larga = 2/3 de la medida cintura al suelo – 3 cm 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Largo de falda corta = 1/2 de la medida cintura al suelo – 3 cm 
      p.mb-5.text-center(data-aos='fade-right') A continuación, se presenta como obtener medidas deducidas, a partir del desarrollo de las siguientes fórmulas:
      .row.justify-content-center.mb-4(data-aos='fade-right')
          .col-sm-12.col-lg-6
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 4.] Medidas deducidas
              .tabla-a.color-acento-contenido.tabla-custom
                table(alt="Medidas corporales junto con sus fórmulas de cálculo y resultados aplicados a un caso específico. Se incluyen dimensiones clave como estatura total, tórax máximo, cadera, pecho, cintura y largo de brazo, utilizando relaciones matemáticas para su determinación.")
                  thead
                    tr
                      th Medida
                      th Fórmula
                      th Resultado
                  tbody
                    tr
                      td.text-center Estatura total
                      td.text-center No aplica
                      td.text-center 1,70 cm
                    tr
                      td.text-center Tórax máximo
                      td.text-center No aplica
                      td.text-center 90 cm
                    tr
                      td.text-center Cadera
                      td.text-center Tórax máximo + 8 cm
                      td.text-center 98 cm
                    tr
                      td.text-center Pecho
                      td.text-center Tórax máximo - 4 cm
                      td.text-center 86 cm
                    tr
                      td.text-center Cintura
                      td.text-center Cadera - 28 cm
                      td.text-center 70 cm
                    tr
                      td.text-center Estatura 7a cervical
                      td.text-center Estatura total - 20 cm
                      td.text-center 1,50 cm
                    tr
                      td.text-center Largo de brazo
                      td.text-center 4/10 de la estatura 7ac
                      td.text-center 60 cm
      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
          .col-auto.titulo-icono-img
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
          .col
            h3.mb-0.titulo-icono-text.px-0.py-2 Tallas y cuadros

      p.mb-5(data-aos='fade-right') Una vez hecho el recorrido sobre la deducción de medidas se presentará un grupo de tallas y su desarrollo en la obtención de medidas para construcción de cuadros de tallas.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 5.] Grupo de tallas
      .tabla-a.color-acento-contenido.tabla-custom.mb-5(data-aos='fade-right')
        table(alt="Medidas de referencia para distintas tallas (XS/6, S/8, M/10, L/12) con un incremento entre variables de 2 cm en algunas dimensiones. Se incluyen datos de: tórax máximo y estatura total, mientras que otras medidas como cadera, pecho, cintura, talle, largo de brazo y cuello aún deben completarse.")
          thead
            tr
              th Talla
              th XS/6
              th S/8
              th M/10
              th L/12
              th Incremento
          tbody
            tr
              td.text-center Tórax máximo
              td.text-center 40 cm
              td.text-center 42 cm
              td.text-center 44 cm
              td.text-center 46 cm
              td.text-center 2 cm
            tr
              td.text-center Estatura total
              td.text-center 165 cm
              td.text-center 167 cm
              td.text-center 167 cm
              td.text-center 170 cm
              td.text-center 2 cm
      
      .row.justify-content-center.align-items-center.mb-5.bg-color-13.p-4.br-3(data-aos='fade-right')
        .col-sm-12.col-lg-11
            p.mb-4.text-center A partir de la información anterior, es importante relacionar el siguiente resultado:
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-4 
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cadera = tórax máximo + 4 cm.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  Pecho = tórax máximo – 2 cm.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cintura = cadera – 14 cm.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  Estatura total = estatura 7ac + 20 cm.
              .col-sm-12.col-lg-4 
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Estatura 7ac = estatura total – 20 cm.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  Talle = 3/10 de la estatura 7ac.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  Largo de brazo = 4/10 de la estatura 7ac.
              .col-sm-12.col-lg-4 
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Cuello= 2/3 de pecho + 4 cm.
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0  Cintura/suelo = 7 /10 de la estatura 7ac.  
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-11
                    p.mb-0 Base = pecho + desahogo + costura (desahogo 4 cm y la costura 2 cm).

      p.mb-5.text-center(data-aos='fade-right') A continuación, se puede explorar cómo se realiza una construcción de la talla 6 con aplicación de fórmulas:
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 6.] Aplicación de fórmulas
      .tabla-a.color-acento-contenido.tabla-custom.mb-5(data-aos='fade-right')
        table(alt="Medidas corporales junto con sus fórmulas de cálculo y resultados aplicados a un caso específico. Se incluyen dimensiones clave como estatura total, tórax máximo, cadera, pecho, cintura y largo de brazo, utilizando relaciones matemáticas para su determinación.")
          thead
            tr
              th Talla
              th 6
              th X6/6
          tbody
            tr
              td.text-center Tórax máximo
              td.text-center 40
              td.text-center 40
            tr
              td.text-center Cadera
              td.text-center 40 + 4
              td.text-center 44
            tr
              td.text-center Pecho
              td.text-center 40 - 2
              td.text-center 38
            tr
              td.text-center Cintura
              td.text-center 44 - 14
              td.text-center 30
            tr
              td.text-center Estatura total
              td.text-center 166
              td.text-center 166
            tr
              td.text-center Estatura 7a
              td.text-center 164 - 20
              td.text-center 146
            tr
              td.text-center Talle
              td.text-center 144/10 = 14,4 * 3
              td.text-center 43,8
            tr
              td.text-center Largo de brazo
              td.text-center 144/10 = 14,4 * 4
              td.text-center 58,4
            tr
              td.text-center Cuello
              td.text-center 40/3 = 13,3 * 2
              td.text-center 26,6
            tr
              td.text-center Cintura/suelo
              td.text-center 144/10 = 14,4 * 7
              td.text-center 102,2
            tr
              td.text-center Base
              td.text-center 38 + 4 + 2
              td.text-center 44

      .row.align-items-center.mb-4.titulo-icono(data-aos='fade-right')
          .col-auto.titulo-icono-img
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
          .col
            h3.mb-0.titulo-icono-text.px-0.py-2 Normatividad
      p.mb-5(data-aos='fade-right') A nivel internacional y nacional se plantean diversas normas para la toma de medidas corporales, entre las que se encuentran: 

      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.bg-color-14.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/5.svg') 
            .col-sm-12.col-lg-10         
              h2.mb-0.bg-color-6.p-2 Norma Técnica Colombiana NTC-ISO 8559:1995
          p.mb-0 Fabricación de vestuario y estudios antropométricos. dimensiones corporales.
        .col-md.tarjeta.bg-color-3.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/5.svg') 
            .col-sm-12.col-lg-10         
              h2.mb-0.bg-color-6.p-2 Norma UNE-EN 13402-3
          p.mb-0 Etiquetado de tallas de prendas de vestir, enfocadas al beneficio del consumidor.

      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Proporciones en la deducción de medidas
      
      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-5.mb-cus
          .bg-color-19.pcus-4.br-3
            p.mb-3 El incremento proporcionado y secuenciado debe responder a estándares que permitan el ajuste de tallas, dado que se determina a partir de la identificación en la variación de unidades de medida entre trallas dentro de las diferentes líneas de la medición del cuerpo.
            p.mb-4 Las fórmulas aplicadas para calcular la proporción consisten en dividir la diferencia del contorno entre cuatro, para obtener fracciones que corresponden a dicha proporción, por ejemplo:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.bg-color-11
                p.mb-0 1 proporción equivale a 2 cm.

              li.d-flex
                i.fas.fa-check-circle.bg-color-11
                p.mb-0 Media proporción corresponde a 1 cm.

              li.d-flex
                i.fas.fa-check-circle.bg-color-11
                p.mb-0 Una cuarta proporción corresponde a 0,5 cm.
        .col-sm-12.col-lg-7
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 7.] Ejemplo de medidas ajustadas
            .tabla-a.color-acento-contenido.tabla-custom
              table(alt="Medidas para las tallas 8 y 10, junto con la proporción de incremento entre las dos tallas. Incluye áreas corporales como contorno de busto, cintura y cadera, ancho de espalda y pecho, talle y medidas de centro.")
                thead
                  tr 
                    th(colspan="4") Tabla de medidas ajustadas
                  tr
                    th.w-50 Medida
                    th Talla 8
                    th Talla 10
                    th Proporción
                tbody
                  tr
                    td Contorno de busto
                    td 88,0
                    td 92,0
                    td 92,0
                  tr
                    td Contorno de cintura
                    td 64,0
                    td 65,0
                    td 65,0
                  tr
                    td Contorno de cadera
                    td 92,0
                    td 93,0
                    td 93,0
                  tr
                    td Ancho de espalda
                    td 36,0
                    td 37,0
                    td 37,0
                  tr
                    td Ancho de pecho
                    td 32,0
                    td 33,0
                    td 33,0
                  tr
                    td Talle frente
                    td 42,0
                    td 42,5
                    td 42,5
                  tr
                    td Talle atrás
                    td 44,0
                    td 44,5
                    td 44,5
                  tr
                    td Centro frente
                    td 36,75
                    td 37,0
                    td 37,0
                  tr
                    td Centro atrás
                    td 40,0
                    td 40,25
                    td 40,25

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
