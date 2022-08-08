'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', 
    [{
        name: 'MANGUEIRA JOY STICK',
        description: 'As mangueiras Joy Stick são compostas por um corpo em silicone, uma piteira e uma contra piteira em alumínio e anodizadas. A mangueira Joy é lavável e de fácil higienização, assim você pode sentir o sabor mais presente em sua sessão. Indicamos higienizar após o uso',
        specification: 'Material da Mangueira:	Silicone - Lavavel:	Sim - Material da Piteira:	Aluminio',
        price: 25.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/1659627567935.webp',
        brand: 'Joy',
        category: 'Mangueira'

      },
      {
        name: 'CARVÃO JACK HEXAGONAL',
        description: 'O Carvão Jack Hexagonal para narguile, chega ao mercado trazendo excelente qualidade e preço, além de uma embalagem moderna e alegre. Produzido no Brasil a partir da casca de coco, é 100% natural e respeita o meio ambiente.',
        specification: 'Acendimento:	Medio - Duração:	Alta - Formato:	Hexagonal - Material:	Fibra de Coco - Quantidade:	1 kg',
        price: 25.90,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/1659896224353.webp',
        brand: 'Hexagonal',
        category: 'Carvão'

      },
      {
        name: 'PRATO JOY MEDIO DELTA ANIVERSARIO 17 ANOS',
        description: 'O Prato Joy Medio Delta Aniversario 17 Anos são produzindos em alumínio com profundidade ideal para armazenar as cinzas dos carvões sem sujar o ambiente onde esta fazendo o seu hookah time.',
        specification: 'Material:	Alumínio - Tamanho: Médio',
        price: 19.90,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/1659648109925.jpg',
        brand: 'Joy',
        category: 'Prato'

      },
      {
        name: 'QUEIMADOR PRO HOOKAH OLD CLASSICO',
        description: 'O Queimador Pro Hookah Old Classico é o rosh perfeito para sua sessão de narguile. Com seu pino central grande e espaçado proporciona suavidade, conforto durante o seu preparo e degustação, seu material proporciona um ótimo aquecimento.',
        specification: 'Tipo de cuba: Fundo - Modelo: Phunnel - Material:	Barro - Tamanho:	Grande - Capacidade: 20gr',
        price: 35.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/Queimador-Pro-Hookah.webp', 
        brand: 'Pro Hookah',
        category: 'Queimador'

      },
      {
        name: 'BASE NINJA PEQUENA GENIE LUMINOUS TRANSPARENTE E ILUMINAÇÃO AZUL',
        description: 'A Base Ninja Pequena Genie Luminous Transparente é produzida em vidro com design clássicos das bases para narguiles pequenos. Com ótimo custo benefíco a Base Ninja Pequena Genie Luminous possui o acabamento que proporciona brilhar no escuro.',
        specification: 'Material:	Vidro - Tamanho: Pequeno - Borracha inclusa: Não',
        price: 30.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/Base-Ninja-Pequena.webp',
        brand: 'Ninja',
        category: 'Base'

      },
      {
        name: 'CARVÃO START NOW HEXAGONAL 1KG',
        description: 'O carvão Start Now é natural, feito 100% das fibras da casca do coco. Segue os padrões de qualidade imposto pela marca. Com formato hexagonal, os carvões se estabilizam no queimador, evitando que eles rolem durante a sessão.',
        specification: 'Acendimento:	Fácil - Duração:	Alta - Formato:	Hexagonal - Material:	Fibra de Coco - Quantidade:	1 kg',
        price: 35.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/Carvao-Start-Now.webp',
        brand: 'Hexagonal',
        category: 'Carvão'

      },
      {
        name: 'NARGUILE COMPLETO PEQUENO JOY SPLASH',
        description: 'Os Narguiles Joy Pequeno Splash foram desenvolvidos para oferecer maior qualidade, por ser todo em alumínio. O Narguile Joy Pequeno Splash é completo, com prato e base na cor de seu corpo. ',
        specification: 'Tamanho: Pequeno - Material: Alumínio - Base: Incluso - Material da base: Vidro - Material da mangueira: Plástico',
        price: 100.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/Narguile-Completo-Pequeno.webp',
        brand: 'Joy',
        category: 'Narguile'

      },
      {
        name: 'NARGUILE JOY MEDIO LUMINI MAXX',
        description: 'Os narguiles Joy Médio Lumini Maxx foram desenvolvidos para oferecer maior qualidade, por ser todo em alumínio. O Joy Lumini é completo, com prato e base na cor de seu corpo.',
        specification: 'Tamanho: Médio - Material: Alumínio - Base: Incluso - Material da base: Vidro - Material da mangueira: Plástico',
        price: 450.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/Narguile-Joy-Medio.webp',
        brand: 'Joy',
        category: 'Narguile'

      },
      {
        name: 'BASE JOY GRANDE CLEAN GIM',
        description: 'A Base Joy Grande Clean Gim tem 30cm de altura, com vidro espesso e disponível em 6 cores. Com design único, seu encaixe possibilita o uso de stems grandes e médias.',
        specification: 'Material:	Vidro - Tamanho: Grande - Borracha inclusa: Não',
        price: 100.00,
        stock: 20,
        sale: 'N',
        image_path: '/imagesPath/24196.webp',
        brand: 'Joy',
        category: 'Base'

      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};