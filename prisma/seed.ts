import { prisma } from "../src/config/database.js";
import {
  CreateAttractions,
  CreateAttractionsType,
  CreateCities,
  CreateStates,
} from "../src/interfaces/createData.js";

async function main() {
  const statesData: CreateStates[] = [
    {
      name: "Acre",
      initials: "AC",
    },
    {
      name: "Alagoas",
      initials: "AL",
    },
    {
      name: "Amapá",
      initials: "AP",
    },
    {
      name: "Amazonas",
      initials: "AM",
    },
    {
      name: "Bahia",
      initials: "BA",
    },
    {
      name: "Ceará",
      initials: "CE",
    },
    {
      name: "Espírito Santo",
      initials: "ES",
    },
    {
      name: "Goiás",
      initials: "GO",
    },
    {
      name: "Maranhão",
      initials: "MA",
    },
    {
      name: "Mato Grosso",
      initials: "MT",
    },
    {
      name: "Mato Grosso do Sul",
      initials: "MS",
    },
    {
      name: "Minas Gerais",
      initials: "MG",
    },
    {
      name: "Pará",
      initials: "PA",
    },
    {
      name: "Paraíba",
      initials: "PB",
    },
    {
      name: "Paraná",
      initials: "PR",
    },
    {
      name: "Pernambuco",
      initials: "PE",
    },
    {
      name: "Piauí",
      initials: "PI",
    },
    {
      name: "Rio de Janeiro",
      initials: "RJ",
    },
    {
      name: "Rio Grande do Norte",
      initials: "RN",
    },
    {
      name: "Rio Grande do Sul",
      initials: "RS",
    },
    {
      name: "Rondônia",
      initials: "RO",
    },
    {
      name: "Roraima",
      initials: "RR",
    },
    {
      name: "Santa Catarina",
      initials: "SC",
    },
    {
      name: "São Paulo",
      initials: "SP",
    },
    {
      name: "Sergipe",
      initials: "SE",
    },
    {
      name: "Tocantins",
      initials: "TO",
    },
    {
      name: "Distrito Federal",
      initials: "DF",
    },
  ];

  const citiesData: CreateCities[] = [
    {
      name: "Juiz de Fora",
      short_call: "Princesa de Minas",
      description:
        "Juiz de Fora oferece uma grande variedade de bares, além de passeios interessantes pela cidade, como visitas a museus, parques e o mirante no ponto mais alto, o Morro do Cristo",
      url_picture:
        "https://www.pjf.mg.gov.br/noticias/arquivo/1003_conferencia_seguranca_151452.jpg",
      stateId: 12,
    },
    {
      name: "Leopoldina",
      short_call: "Uma homenagem à segunda filha de D. Pedro II",
      description:
        "Município da Zona da Mata Mineira, Leopoldina é uma cidade com muitas opções de lazer com a natureza. Conhecida pelo seu clima sempre quente e sua catedral reluzente, Leopoldina tem muitos atrativos interessantes",
      url_picture:
        "https://ntwcontabilidade.com.br/wp-content/uploads/2018/12/15-LEOPOLDINA-MG-CATEDRAL-A-NOITE-SG-TRANGEL.jpg",
      stateId: 12,
    },
    {
      name: "Lapa",
      short_call: "Uma das cidades mais antigas do Paraná",
      description:
        "Esse pequeno município abriga uma parte marcante da história do Brasil e abriga o maior conjunto arquitetônico do estado",
      url_picture:
        "https://www.viagensecaminhos.com/wp-content/uploads/2019/07/praca-joaquim-lacerda-lapa.jpg",
      stateId: 15,
    },
    {
      name: "Itabuna",
      short_call: "Berço de Jorge Amado",
      description:
        "Ponto turístico do interior da Bahia, Itabuna oferece atrativos para todos os gostos! Grupos de teatro, capoeira, dança e até mesmo um Centro de Proteção do Bicho-preguiça encontra-se por lá",
      url_picture:
        "https://climaonline.com.br/public/fotos/ba/itabuna/foto-antiga-de-itabuna-26.webp",
      stateId: 5,
    },
    {
      name: "Gravatá",
      short_call: "A Suíça Pernambucana",
      description:
        "Localizada no topo da Serra das Russas, essa cidade do interior de Pernambuco oferece um clima agradável, sendo uma boa pedida um foundue com um vinho e para os mais aventureiros é um bom destinho para praticar trekking",
      url_picture:
        "https://www.fuiserviajante.com/wp-content/uploads/2020/08/o-que-fazer-em-gravata-pe-9-1024x768.jpg",
      stateId: 16,
    },
    {
      name: "Pirenópolis",
      short_call: "O retrato vivo da história goiana",
      description:
        "De clima hospitaleiro, essa cidade tombada como Patrimônio Histórico e Cultural pelo IPHAN é cercada de lindas cachoeiras e morros. Essa cidade convida você a fazer trilhas, ecoturismo, rapel e muito mais...",
      url_picture: "https://www.passeios.org/wp-content/uploads/2017/02/c.jpg",
      stateId: 8,
    },
    {
      name: "Uiramutã",
      short_call: "Seu nome significa 'local de espera de aves'",
      description:
        "Cidade com maior percentual de sua população declarada indígena, essa cidade é para quem curte um contato com a natureza. Região cheia de lindas cachoeiras e comunidades indígenas",
      url_picture:
        "https://aprazzivel.com.br/wp-content/uploads/2020/01/Arquivo_001.png",
      stateId: 22,
    },
    {
      name: "Xapuri",
      short_call: "Localizada no meio da Estrada do Pacífico",
      description:
        "Essa cidade conta com duas praias do rio Acre, que além de serem ótimas para pegar um sol, contam também com festivais famosos",
      url_picture:
        "https://1.bp.blogspot.com/-2HURTpfb81k/UXX-16FPsyI/AAAAAAAAKBM/53W4qy41LBY/s1600/xapuri-1.jpg",
      stateId: 1,
    },
    {
      name: "Juquitiba",
      short_call: "A cidade da aventura",
      description:
        "Com a descida de rio mais tradicional do Brasil, essa cidade localizada no interior de São Paulo, conta com amantes de aventura para desfrutar de suas maravilhosas atividades",
      url_picture:
        "https://mediaim.expedia.com/destination/2/090b248ca46842284a7fd8dfe23c4b61.jpg",
      stateId: 24,
    },
    {
      name: "Ingá",
      short_call: "Famosa por suas formações rochosas e petroglifos",
      description:
        "Com imagens geométricas desenhadas em rochas, essa cidade tem como uma das suas principais atrações do primeiro sítio arqueológico brasileiro, o sítio arqueológico da Pedra de Ingá",
      url_picture:
        "https://www.360meridianos.com/wp-content/uploads/2020/02/pedra-inga-paraiba.jpg",
      stateId: 14,
    },
  ];

  const attractionsTypeData: CreateAttractionsType[] = [
    {
      type: "restaurant",
    },
    {
      type: "attraction",
    },
    {
      type: "event",
    },
  ];

  const attractionsData: CreateAttractions[] = [
    {
      cityId: 1,
      name: "Poleiro do Galo: Bar e restaurante com excelente comida brasileira e opções de mesas ao ar livre",
      typeId: 1,
    },
    {
      cityId: 1,
      name: "Procopão: Tradicional de Juiz de Fora, esse restaurante conta com uma excelente gastronomia",
      typeId: 1,
    },
    {
      cityId: 1,
      name: "Mr. Tugas: Em um casarão de arquitetura rústica e atmosfera boêmia é possível desfrutar de excelentes comidas e bebidas",
      typeId: 1,
    },

    {
      cityId: 1,
      name: "Parque da Lajinha: Excelente local para entrar e contato com a naturezae e aproveitar o dia",
      typeId: 2,
    },
    {
      cityId: 1,
      name: "Mirante Morro do Imperador: Com uma excelente vista da cidade, esse espaço oferece ótimos locais para foto",
      typeId: 2,
    },
    {
      cityId: 1,
      name: "Museu Mariano Procópio: Com um dos principais arcevos do país, esse museu também conta com um lindo jardim excelente para curtir com a família",
      typeId: 2,
    },

    {
      cityId: 1,
      name: "Festa Country: Essa festa, uma das mais famosas da cidade, normalmente ocorre em Maio e é recheada de bons shows",
      typeId: 3,
    },
    {
      cityId: 1,
      name: "Festa Alemã: Com apresentações de danças, comidas típicas e vendas de artesanato essa festa é considerada um bem imaterial da cidade",
      typeId: 3,
    },
    {
      cityId: 1,
      name: "Miss Brasil Gay: Patrimônio da cidade desde 2007, esse tradicional evento visa não somente eleger por beleza, mas também ser um movimento de luta",
      typeId: 3,
    },

    {
      cityId: 2,
      name: "Bar e Restaurante Grotão: Esse estabelecimento se destaca pela sua elogiada gastronomia",
      typeId: 1,
    },
    {
      cityId: 2,
      name: "Lobato Bar e Restaurante: Com uma decoração bonita e rústica, esse restaurante agrada no visual e nos sabor",
      typeId: 1,
    },

    {
      cityId: 2,
      name: "Cachoeira Poeira D'Agua: Lindo ambiente natural para curtir o sossego",
      typeId: 2,
    },
    {
      cityId: 2,
      name: "Centro Cultural Mauro de Almeida: Prédio do antigo fórum, um espaço charmoso com um bom acervo cultural",
      typeId: 2,
    },

    {
      cityId: 2,
      name: "Feira da Paz: Reune o que há de melhor no artesanato mineiro, além de contar com shows e uma excelente gastronomia",
      typeId: 3,
    },
    {
      cityId: 2,
      name: "Exposição: Considerada a maior exposição da Zona da Mata Mineira, esse evento conta com ótimas atrações artísticas e do meio rural",
      typeId: 3,
    },

    {
      cityId: 3,
      name: "O Casarao Restaurante: Dentro do centro histórico, esse restaurante ganha elogios pela ótima comida e atendimento de qualidade",
      typeId: 1,
    },
    {
      cityId: 3,
      name: "Barbarão: Para os embalos noturnos esse bar ganha muito elogios com um ambiente agradável e excelentes drinks",
      typeId: 1,
    },

    {
      cityId: 3,
      name: "Museu de Armas: Localizado no centro histórico, onde as ruas são ainda originalmente pavimentadas, esse museu exibe as armas do tempo da Revolução Federalista",
      typeId: 2,
    },
    {
      cityId: 3,
      name: "Parque do Monge: Em contato com a natureza, esse local é excelente para piqueniques e exibe uma linda vista do seu mirante",
      typeId: 2,
    },

    {
      cityId: 3,
      name: "Festival da Primavera: Com shows, visitas a museus e uma excelente gastronomia, esse evento tem por objetivo difundir a história da cidade",
      typeId: 3,
    },
    {
      cityId: 3,
      name: "Lapa - Sabor e Arte: Evento para celebra a tradicional gastronomia da cidade",
      typeId: 3,
    },

    {
      cityId: 4,
      name: "Churrascaria Los Pampas: Uma churrascaria que arranca elogios dos clientes",
      typeId: 1,
    },
    {
      cityId: 4,
      name: "Boteco Gaúcho: Uma das melhores opções de Itabuna",
      typeId: 1,
    },

    {
      cityId: 4,
      name: "Praias de Ilhéus: Lindas praias para curtir",
      typeId: 2,
    },
    {
      cityId: 4,
      name: "Casa de Cultura Jorge Amado: Espaço dedicado ao autor conta com um inventário de itens pessoais, materias de trabalho e muito mais",
      typeId: 2,
    },

    {
      cityId: 4,
      name: "Ita Pedro: Melhor São Pedro de todos os tempos",
      typeId: 3,
    },
    {
      cityId: 4,
      name: "Lavagem do Beco do Fuxico: Considerada uma das principais manifestações culturais da cidade",
      typeId: 3,
    },

    {
      cityId: 5,
      name: "Restaurante Mania Caseira: Elogiado pela comida e atendimento de qualidade",
      typeId: 1,
    },
    {
      cityId: 5,
      name: "Charque da Dona Neuza: Com música ao vivo, esse restaurante chama a atenção pela gastronimia e atendimento que rendem elogios",
      typeId: 1,
    },

    {
      cityId: 5,
      name: "Rancho das Palmeiras e cachoeira Paraíso Perdido",
      typeId: 2,
    },
    {
      cityId: 5,
      name: "Trilha da Estrada de Ferro e rapel na Ponte Cascavel",
      typeId: 2,
    },

    {
      cityId: 5,
      name: "Festividades de São João",
      typeId: 3,
    },

    {
      cityId: 6,
      name: "Haikai Jardim Gastronômico: Culinária e atendimento excelentes",
      typeId: 1,
    },
    {
      cityId: 6,
      name: "Restaurante Da Villa: Para viver a experiência da gastronomia",
      typeId: 1,
    },

    {
      cityId: 6,
      name: "Excelentes cachoeiras: Cachoeira do Abade, do Rosário, entre outras",
      typeId: 2,
    },
    {
      cityId: 6,
      name: "Rua do Lazer: Com diversos pubs e restaurantes. Ponto obrigatório para quem vai conhecer a cidade",
      typeId: 2,
    },

    {
      cityId: 6,
      name: "Folia de Reis",
      typeId: 3,
    },
    {
      cityId: 6,
      name: "Festejos de São João",
      typeId: 3,
    },

    {
      cityId: 7,
      name: "Peixada Tropical",
      typeId: 1,
    },
    {
      cityId: 7,
      name: "Zoi Gastronomia",
      typeId: 1,
    },

    {
      cityId: 7,
      name: "Cachoeiras: Uruca e Sete Queda",
      typeId: 2,
    },
    {
      cityId: 7,
      name: "Parque Nacional do Monte Roraima",
      typeId: 2,
    },

    {
      cityId: 7,
      name: "Arraial das Serras",
      typeId: 3,
    },
    {
      cityId: 7,
      name: "Festas Indígenas",
      typeId: 3,
    },

    {
      cityId: 8,
      name: "Restaurante e Churrascaria São Sebastiao",
      typeId: 1,
    },
    {
      cityId: 8,
      name: "Restaurante e Buffet Vitória Regia",
      typeId: 1,
    },

    {
      cityId: 8,
      name: "Museu Casa Chico Mendes",
      typeId: 2,
    },
    {
      cityId: 8,
      name: "Reserva Extrativista Chico Mendes",
      typeId: 2,
    },

    {
      cityId: 8,
      name: "Festivais Indígenas",
      typeId: 3,
    },
    {
      cityId: 8,
      name: "Festa de São Sebastião",
      typeId: 3,
    },

    {
      cityId: 9,
      name: "Bastiao Restaurante",
      typeId: 1,
    },
    {
      cityId: 9,
      name: "Black Box Cafés & Sorvetes",
      typeId: 1,
    },

    {
      cityId: 9,
      name: "Represa Cachoeira do França",
      typeId: 2,
    },
    {
      cityId: 9,
      name: "Toca da Raposa",
      typeId: 2,
    },

    {
      cityId: 9,
      name: "Dia do Tropeiro/Romeiros",
      typeId: 3,
    },
    {
      cityId: 9,
      name: "Campeonato Paulista e Brasileiro de Rafting",
      typeId: 3,
    },

    {
      cityId: 10,
      name: "Memorial do Cuscuz e Tapioca na Lenha",
      typeId: 1,
    },
    {
      cityId: 10,
      name: "Restaurante Casa Grande - SENZALA",
      typeId: 1,
    },

    {
      cityId: 10,
      name: "Sítio Arqueológico de Ingá",
      typeId: 2,
    },
    {
      cityId: 10,
      name: "Itacoatiaras de Ingá",
      typeId: 2,
    },

    {
      cityId: 10,
      name: "Festa das Rosas",
      typeId: 3,
    },
    {
      cityId: 10,
      name: "Procissão da Padroeira",
      typeId: 3,
    },
  ];

  await prisma.state.createMany({ data: statesData, skipDuplicates: true });
  await prisma.city.createMany({ data: citiesData, skipDuplicates: true });
  await prisma.attraction_type.createMany({
    data: attractionsTypeData,
    skipDuplicates: true,
  });
  await prisma.attraction.createMany({
    data: attractionsData,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
