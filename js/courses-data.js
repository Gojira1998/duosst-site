// Base de cursos, extraída do site atual (duosst.formasegead.com) em
// 2026-09-02, ver dados/cursos-site-atual.md pra fonte completa.
// Cada curso tem uma página própria em curso.html?slug=<slug>.
const COURSES = {

  "nr-33-trabalhador-autorizado-vigia": {
    codigo: "NR 33",
    titulo: "Trabalhador Autorizado e Vigia em Espaço Confinado",
    categoria: "Espaço confinado e trabalho em altura",
    icone: "confinado",
    formato: "EAD",
    cargaHoraria: "8h teórico",
    praticaPresencial: "8h",
    publico: "Maiores de 18 anos que precisam trabalhar em espaços confinados",
    destaque: true,
    resumo: "Capacita trabalhadores autorizados e vigias a atuar em espaços confinados com segurança: reconhecimento de risco, avaliação atmosférica, plano de resgate e procedimentos de entrada.",
    modulos: [
      {
        titulo: "NR 33 Teórico", aulas: 16, avaliacoes: 4,
        aulasDetalhe: [
          "Aula 01: Inicial e Glossário da Norma",
          "Aula 02: Objetivo e Campo de Aplicação",
          "Aula 03: Objetivo, Campo de Aplicação e Supervisor de Entrada",
          "Avaliação 01: NR 33 Trabalhador Autorizado e Vigia|quiz",
          "Aula 04: Compete ao Vigia, Trabalhadores Autorizados e Gerenciamento de Riscos",
          "Aula 05: Compete ao Vigia, Trabalhadores Autorizados e Medidas de Prevenção",
          "Aula 06: Medidas de Prevenção em Espaços Confinados Parte 01",
          "Avaliação 02: NR 33 Trabalhador Autorizado e Vigia|quiz",
          "Aula 07: Medidas de Prevenção em Espaços Confinados Parte 02",
          "Aula 08: Avaliações Atmosféricas",
          "Aula 09: Avaliações Atmosféricas e Plano de Resgate",
          "Avaliação 03: NR 33 Trabalhador Autorizado e Vigia|quiz",
          "Aula 10: Documentação, Capacitação e Disposições Gerais",
          "Aula 11: Modelo de PET",
          "Norma Regulamentadora 33 (PDF Download)",
          "Avaliação 04: NR 33 Trabalhador Autorizado e Vigia|quiz",
        ],
      },
      {
        titulo: "NR 33 Prático", aulas: 24, avaliacoes: 1,
        aulasDetalhe: [
          "Aula 01: Materiais e Equipamentos em Espaço Confinado",
          "Aula 02: Materiais e Equipamentos em Espaço Confinado",
          "Aula 03: Inspeção de Cordas",
          "Aula 04: Sistemas de Ancoragem",
          "Aula 05: Introdução ao Tema Espaço Confinado",
          "Aula 06: Seleção de Materiais e Equipamentos",
          "Aula 07: Apresentação do Centro de Treinamento",
          "Aula 08: Vantagem Mecânica",
          "Aula 09: Instalação do Sistema de Vantagem Mecânica",
          "Aula 10: Medidas de Controle",
          "Aula 11: Demonstração de Equipamentos",
          "Aula 12: Procedimento de Entrada em Espaço Confinado",
          "Aula 13: Simulação de Resgate",
          "Aula 14: Resgate Parte 01",
          "Aula 15: Resgate Parte 02",
          "Aula 16: Auto Resgate",
          "Aula 17: Resgate em Escadas",
          "Aula 18: Acesso e Resgate em Espaço Confinado Vertical",
          "Aula 19: Procedimentos Práticos 01",
          "Aula 20: Procedimentos Práticos 02",
          "Aula 21: Procedimentos Práticos 03",
          "Aula 22: Procedimentos Práticos 04",
          "Aula 23: Procedimentos Práticos 05",
          "Avaliação 01: Avaliação Prática NR 33|quiz",
        ],
      },
      {
        titulo: "Prática de Primeiros Socorros", aulas: 8, avaliacoes: 1,
        aulasDetalhe: [
          "Aula 01: Primeiros Socorros, Prática 01",
          "Aula 02: Primeiros Socorros, Prática 02",
          "Aula 03: Primeiros Socorros, Prática 03",
          "Aula 04: Primeiros Socorros, Prática 04",
          "Aula 05: Primeiros Socorros, Prática 05",
          "Aula 06: Primeiros Socorros, Prática 06",
          "Aula 07: Primeiros Socorros, Prática 07",
          "Aula 08: Primeiros Socorros, Prática 08",
          "Avaliação 01: Prática de Primeiros Socorros|quiz",
        ],
      },
    ],
    nota: "Existe também a versão Supervisor de Entrada (carga horária maior, com módulos extras de combate a incêndio). Turma presencial divulgada no Instagram @duosstoficial.",
    imagemHero: "assets/cursos/nr-33-hero.png",
    imagemConteudo: "assets/cursos/nr-33-conteudo.png",
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-33-trabalhador-autorizado-e-vigia/?add-to-cart=118424",
    origemLink: "https://duosst.formasegead.com/curso/nr-33-trabalhador-autorizado-e-vigia/",
    dores: [
      { icone: "confinado", titulo: "Espaço confinado é uma das atividades mais fatais da indústria", texto: "Atmosfera tóxica, deficiência de oxigênio e dificuldade de resgate tornam o espaço confinado uma das causas mais comuns de acidente fatal em ambiente industrial. A NR 33 existe justamente pra isso não acontecer." },
      { icone: "pericia", titulo: "Sem treinamento válido, a empresa responde", texto: "Fiscalização do MTE pode autuar e embargar atividade em espaço confinado sem comprovação de treinamento. O risco não é só do trabalhador, é jurídico e financeiro pra empresa." },
      { icone: "treinamento", titulo: "Certificado vencido trava a contratação", texto: "Empresas de mineração e indústria pesada não colocam ninguém pra entrar em espaço confinado sem certificado NR 33 válido. Sem ele, a vaga (ou o contrato) não fecha." },
    ],
    beneficios: [
      "Reconhecer riscos atmosféricos antes de entrar no espaço confinado",
      "Preencher e validar a Permissão de Entrada e Trabalho (PET) corretamente",
      "Usar equipamento de resgate e sistema de ancoragem com segurança",
      "Agir como vigia, monitorando quem está lá dentro sem colocar a própria vida em risco",
      "Aplicar primeiros socorros em cenário de emergência em espaço confinado",
    ],
    faq: [
      { pergunta: "O certificado da parte teórica (EAD) já é suficiente?", resposta: "Não. A NR 33 exige as duas partes: 8h teóricas (essa, feita online) e 8h práticas presenciais. O certificado final só sai depois da parte prática, que você faz na modalidade Presencial (na sua empresa ou na AST)." },
      { pergunta: "Esse curso serve pra Supervisor de Entrada também?", resposta: "Não. Supervisor de Entrada é uma formação maior (40h), com módulos extras de combate a incêndio. Esse aqui é a formação de Trabalhador Autorizado e Vigia (16h)." },
      { pergunta: "O certificado vale em todo o Brasil?", resposta: "Sim, certificado automatizado, válido em todo o território nacional, com trilha de acesso compatível com a NR-01." },
      { pergunta: "Preciso de algum pré-requisito?", resposta: "Só ter 18 anos ou mais. Não exige escolaridade específica pra essa formação." },
    ],
    doresTitulo: "O risco não é hipotético",
    doresIntro: "Espaço confinado não perdoa treinamento malfeito, nem pra quem entra, nem pra empresa que autoriza.",
  },

  "nr-33-supervisor-de-entrada": {
    codigo: "NR 33",
    titulo: "Supervisor de Entrada em Espaço Confinado",
    categoria: "Espaço confinado e trabalho em altura",
    icone: "confinado",
    formato: "EAD",
    cargaHoraria: "20h teórico",
    praticaPresencial: "20h",
    publico: "Profissionais maiores de 18 anos que atuam como supervisores de entrada em espaço confinado",
    resumo: "Formação completa pra quem supervisiona a entrada em espaços confinados, do reconhecimento de risco ao combate a incêndio em ambiente confinado, com primeiros socorros e prática de resgate.",
    modulos: [
      {
        "titulo": "NR 33 Teórico",
        "aulas": 12,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Inicial E Glossário Da Norma",
          "Aula 02: Objetivo E Campo De Aplicação",
          "Aula 03: Objetivo, Campo De Aplicação E Supervisor De Entrada",
          "Avaliação 01: NR 33 Trabalhador Autorizado E Vigia|quiz",
          "Aula 04: Compete Ao Vigia, Trabalhadores Autorizados E Gerenciamento De Riscos",
          "Aula 05: Compete Ao Vigia, Trabalhadores Autorizados E Medidas De Prevenção",
          "Aula 06: Medidas De Prevenção Em Espaços Confinados Parti 01",
          "Avaliação 02: NR 33 Trabalhador Autorizado E Vigia|quiz",
          "Aula 07: Medidas De Prevenção Em Espaços Confinados Parti 02",
          "Aula 08: Avaliações Atmosféricas",
          "Aula 09: Avaliações Atmosféricas E Plano De Resgate",
          "Avaliação 03: NR 33 Trabalhador Autorizado E Vigia|quiz",
          "Aula 10: Documentação, Capacitação, Disposições Gerais, Respirador E Purificador De Ar Motorizado",
          "Aula 11: Modelo De PET",
          "Norma Regulamentadora 33 PDF Download",
          "Avaliação 04: NR 33 Trabalhador Autorizado E Vigia|quiz"
        ]
      },
      {
        "titulo": "NR 33 Prático",
        "aulas": 23,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Materiais E Equipamentos Em Espaço Confinado",
          "Aula 02: Materiais E Equipamentos Em Espaço Confinado",
          "Aula 03: Inspeção De Cordas",
          "Aula 04: Sistemas De Ancoragem",
          "Aula 05: Introdução Ao Tema Espaço Confinado",
          "Aula 06: Seleção De Materiais E Equipamentos",
          "Aula 07: Apresentação Do Centro De Treinamento",
          "Aula 08: Vantagem Mecânica",
          "Aula 09: Instalação Do Sistema De Vantagem Mecânica",
          "Aula 10: Medidas De Controle",
          "Aula 11: Demonstração Equipamentos",
          "Aula 12: Procedimento De Entrada Em Espaço Confinado",
          "Aula 13: Simulação De Resgate",
          "Aula 14: Resgate Parte 01",
          "Aula 15: Resgate Parte 02",
          "Aula 16: Auto Resgate",
          "Aula 17: Resgate Em Escadas",
          "Aula 18: Acesso E Resgate Em Espaço Confinado Vertical",
          "Aula 19: Procedimentos Práticos 01",
          "Aula 20: Procedimentos Práticos 02",
          "Aula 21: Procedimentos Práticos 03",
          "Aula 22: Procedimentos Práticos 04",
          "Aula 23: Procedimentos Práticos 05",
          "Avaliação 01: Avaliação Prática NR 33|quiz"
        ]
      },
      {
        "titulo": "Primeiros Socorros",
        "aulas": 12,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Primeiros Socorros",
          "Aula 02: Condições Para A Prestação De Primeiros Socorros",
          "Aula 03: Acidentes Domésticos",
          "Avaliação 01: Primeiros Socorros|quiz",
          "Aula 04: Biossegurança",
          "Aula 05: Parada Respiratória Parte 01",
          "Aula 06: Parada Respiratória Parte 02",
          "Avaliação 02: Primeiros Socorros|quiz",
          "Aula 07: Parada Respiratória Bebê",
          "Aula 08: Parada Respiratória Afogamento",
          "Aula 09: Reanimação Cardio Pulmonar",
          "Avaliação 03: Primeiros Socorros|quiz",
          "Aula 10: Parada Cardíaca",
          "Aula 11: Trauma Torácico",
          "Aula 12: Animais Peçonhentos",
          "Avaliação 04: Primeiros Socorros|quiz"
        ]
      },
      {
        "titulo": "Prática de Primeiros Socorros",
        "aulas": 15,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Primeiros Socorros, Prática 01",
          "Aula 02: Primeiros Socorros, Prática 02",
          "Aula 03: Primeiros Socorros, Prática 03",
          "Aula 04: Primeiros Socorros, Prática 04",
          "Aula 05: Primeiros Socorros, Prática 05",
          "Aula 06: Primeiros Socorros, Prática 06",
          "Aula 07: Primeiros Socorros, Prática 07",
          "Aula 08: Primeiros Socorros, Prática 08",
          "Aula 09: Primeiros Socorros, Prática 09",
          "Aula 10: Primeiros Socorros, Prática 10",
          "Aula 11: Primeiros Socorros, Prática 11",
          "Aula 12: Primeiros Socorros, Prática 12",
          "Aula 13: Primeiros Socorros, Prática 13",
          "Aula 14: Primeiros Socorros, Prática 14",
          "Aula 15: Primeiros Socorros, Prática 15",
          "Avaliação 01: Prática De Primeiros Socorros|quiz"
        ]
      },
      {
        "titulo": "Prática com Extintores",
        "aulas": 9,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução Aparelhos Extintores",
          "Aula 02: Variedades E Uso De Aparelhos",
          "Aula 03: Materiais Extintores Na Prática",
          "Aula 04: Casa Da Fumaça",
          "Aula 05: Extintores Parte 01",
          "Aula 06: Extintores Parte 02",
          "Aula 07: Extintores Parte 03",
          "Aula 08: NBR Extintores",
          "Aula 09: NBR Extintores",
          "Avaliação 01: Prática com Extintores|quiz"
        ]
      },
      {
        "titulo": "Materiais, Equipamentos e Hidrantes na Prática",
        "aulas": 6,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: EPI",
          "Aula 02: Legislação",
          "Aula 03: Acessórios Hidráulico",
          "Aula 04: Combate ao Incêndio",
          "Aula 05: Uso de esguicho",
          "Aula 06: Materiais E Equipamentos",
          "Avaliação 01: Materiais, Equipamentos e Hidrantes na Prática|quiz"
        ]
      },
      {
        "titulo": "Combate A Incêndio Em Espaços Confinados",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Definição De APR",
          "Aula 02: Etapas Da APR",
          "Aula 03: Atos Inadequados",
          "Aula 04: Modelo De APR E Investigação De Acidentes",
          "Avaliação 01: Análise Preliminar de Risco|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-33-supervisor-de-entrada/?add-to-cart=118426",
    origemLink: "https://duosst.formasegead.com/curso/nr-33-supervisor-de-entrada/",
    imagemHero: "assets/cursos/nr-33-supervisor-hero.jpg",
    imagemConteudo: "assets/cursos/nr-33-supervisor-conteudo.jpg",
    doresTitulo: "Quem assina a entrada responde por ela",
    doresIntro: "O supervisor de entrada é quem libera ou cancela a PET. Se der errado lá dentro, a primeira pergunta é quem autorizou.",
    dores: [
      {
        "icone": "confinado",
        "titulo": "Uma decisão errada custa vidas",
        "texto": "Atmosfera que muda em minutos, resgate mal planejado, vigia sem preparo. O supervisor é a última barreira antes de alguém entrar."
      },
      {
        "icone": "pericia",
        "titulo": "Responsabilidade legal é pessoal",
        "texto": "Em acidente com espaço confinado, a investigação chega em quem emitiu a Permissão de Entrada e Trabalho. Sem formação válida, não há defesa."
      },
      {
        "icone": "treinamento",
        "titulo": "Incêndio em espaço confinado é outro jogo",
        "texto": "Fogo em ambiente fechado consome o oxigênio e bloqueia a saída. Por isso essa formação inclui combate a incêndio, extintores e hidrantes."
      }
    ],
    beneficios: [
      "Emitir, conferir e cancelar a Permissão de Entrada e Trabalho (PET)",
      "Coordenar trabalhadores autorizados e vigias durante toda a operação",
      "Planejar e executar resgate com tripé, vantagem mecânica e ancoragem",
      "Usar extintores e hidrantes e agir em incêndio dentro do espaço confinado",
      "Prestar primeiros socorros até a chegada do atendimento especializado"
    ],
    faq: [
      {
        "pergunta": "Só a parte online já me certifica?",
        "resposta": "Não. O treinamento tem 20h online e 20h de prática presencial. O certificado final sai depois das duas partes. A prática você faz na modalidade Presencial, na sua empresa (in company) ou na AST: é só chamar a DUO SST pelo botão de presencial."
      },
      {
        "pergunta": "Qual a diferença pro curso de Trabalhador Autorizado e Vigia?",
        "resposta": "Essa é a formação completa (40h): tem tudo do curso de Trabalhador Autorizado e Vigia, mais primeiros socorros teórico, prática com extintores, hidrantes e combate a incêndio em espaço confinado."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "nr-35-trabalho-em-altura": {
    codigo: "NR 35",
    titulo: "Trabalho em Altura",
    categoria: "Espaço confinado e trabalho em altura",
    icone: "altura",
    formato: "Presencial",
    cargaHoraria: "8h teórico e prático",
    somentePresencial: true,
    publico: "Maiores de 18 anos",
    destaque: true,
    resumo: "Protege quem trabalha acima de 2 metros de altura: sistemas de ancoragem, EPI, resgate e prevenção de queda, com prática de primeiros socorros incluída.",
    modulos: [
      {
        "titulo": "NR 35 Teórico",
        "aulas": 10,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Apresentação Da Norma, Responsabilidades, Capacitação E Treinamento",
          "Aula 02: Planejamento, Organização E Execução Parte 01",
          "Aula 03: Planejamento, Organização E Execução Parte 02",
          "Avaliação 01: NR 35 Teórico|quiz",
          "Aula 04: Emergência E Salvamento",
          "Aula 05: Emergência E Salvamento, Equipamentos E Cordas",
          "Aula 06: Resgate",
          "Avaliação 02: NR 35 Teórico|quiz",
          "Aula 07: Requisitos Do Sistema De Ancoragem",
          "Aula 08: EPI E Acessórios",
          "Aula 09: Imprudência Envolvendo Trabalho Em Altura",
          "Norma Regulamentadora 35 PDF Download",
          "Avaliação 03: NR 35 Teórico|quiz"
        ]
      },
      {
        "titulo": "NR 35 Prático",
        "aulas": 26,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Materiais E Equipamentos Parte 01",
          "Aula 02: Materiais E Equipamentos Parte 02",
          "Aula 03: Inspeção De Cordas",
          "Aula 04: Sistemas De Ancoragem",
          "Aula 05: Sistema De Proteção Individual Contra Queda",
          "Aula 06: Sistema De Proteção Individual Contra Queda",
          "Aula 07: Sistema De Proteção Individual Contra Queda",
          "Aula 08: Linha Fixa",
          "Aula 09: Talabarte Duplo",
          "Aula 10: Escada Fixa Linha Pré-Montada",
          "Aula 11: Sistema Debreável",
          "Aula 12: Resgate Parte 01",
          "Aula 13: Resgate Parte 02",
          "Aula 14: Auto Resgate",
          "Aula 15: Resgate Em Escadas",
          "Aula 16: NR 35 Prática 01",
          "Aula 17: NR 35 Prática 02",
          "Aula 18: NR 35 Prática 03",
          "Aula 19: NR 35 Prática 04",
          "Aula 20: NR 35 Prática 05",
          "Aula 21: NR 35 Prática 06",
          "Aula 22: NR 35 Prática 07",
          "Aula 23: NR 35 Prática 08",
          "Aula 24: NR 35 Prática 09",
          "Aula 25: NR 35 Prática 10",
          "Aula 26: NR 35 Prática 11",
          "Avaliação 03: Prática NR 35|quiz"
        ]
      },
      {
        "titulo": "Prática de Primeiros Socorros",
        "aulas": 8,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Primeiros Socorros, Prática 01",
          "Aula 02: Primeiros Socorros, Prática 02",
          "Aula 03: Primeiros Socorros, Prática 03",
          "Aula 04: Primeiros Socorros, Prática 04",
          "Aula 05: Primeiros Socorros, Prática 05",
          "Aula 06: Primeiros Socorros, Prática 06",
          "Aula 07: Primeiros Socorros, Prática 07",
          "Aula 08: Primeiros Socorros, Prática 08",
          "Avaliação 01: Prática de Primeiros Socorros|quiz"
        ]
      }
    ],
    nota: "Desde a Portaria MTE nº 1.259/2026 (julho de 2026), o treinamento de NR 35 não pode mais ser feito a distância nem no formato híbrido: toda a carga horária, teórica e prática, é presencial.",
    origemLink: "https://duosst.formasegead.com/curso/nr-35-trabalho-em-altura/",
    imagemHero: "assets/cursos/nr-35-hero.jpg",
    imagemConteudo: "assets/cursos/nr-35-conteudo.jpg",
    doresTitulo: "Dois metros já bastam",
    doresIntro: "A NR 35 vale pra qualquer atividade acima de 2 metros com risco de queda. Não é só andaime alto: é telhado, escada, plataforma, caminhão.",
    dores: [
      {
        "icone": "altura",
        "titulo": "Queda é das maiores causas de morte no trabalho",
        "texto": "Queda de altura aparece todo ano entre as principais causas de acidente fatal no Brasil. Quase sempre por ancoragem errada, EPI mal usado ou falta de planejamento."
      },
      {
        "icone": "pericia",
        "titulo": "Sem NR 35, a empresa responde",
        "texto": "A fiscalização pode autuar e interditar trabalho em altura feito por quem não tem treinamento. Em caso de acidente, a falta do certificado pesa na responsabilização."
      },
      {
        "icone": "treinamento",
        "titulo": "Sem certificado, não sobe",
        "texto": "Construtoras, indústrias e mineradoras exigem NR 35 válida antes de liberar qualquer trabalho em altura. É requisito pra vaga e pro contrato."
      }
    ],
    beneficios: [
      "Planejar o trabalho em altura e identificar o risco de queda antes de começar",
      "Escolher e inspecionar cinto, talabarte duplo, cordas e conectores",
      "Montar sistemas de ancoragem e linha de vida com segurança",
      "Fazer auto resgate e resgate em escadas e estruturas",
      "Aplicar primeiros socorros em cenário de queda"
    ],
    faq: [
      {
        "pergunta": "Como faço a matrícula?",
        "resposta": "Direto com a DUO SST pelo WhatsApp. A gente combina a turma presencial na sua empresa (in company) ou na AST."
      },
      {
        "pergunta": "Por que não tem a versão online?",
        "resposta": "A Portaria MTE nº 1.259/2026 mudou a NR 35: desde julho de 2026 o treinamento de trabalho em altura precisa ser 100% presencial, inclusive a parte teórica. Certificado de NR 35 feito a distância deixa de valer."
      },
      {
        "pergunta": "O curso tem parte prática?",
        "resposta": "Tem. Teoria e prática acontecem presencialmente, com equipamentos, resgate e primeiros socorros."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "nr-11-ponte-rolante": {
    codigo: "NR 11",
    titulo: "Operação de Ponte Rolante e Talha Elétrica",
    categoria: "Operação de equipamentos e movimentação de carga",
    icone: "guindar",
    formato: "EAD",
    cargaHoraria: "8h teórico",
    praticaPresencial: "8h",
    publico: "Maiores de 18 anos",
    resumo: "Operação segura de ponte rolante e talha elétrica em operações de movimentação de carga. A versão EAD certifica a parte teórica; a prática (8h) é presencial.",
    modulos: [
      {
        "titulo": "Ponte e Talha",
        "aulas": 21,
        "avaliacoes": 5,
        "aulasDetalhe": [
          "Instruções Iniciais",
          "Aula 01: Objetivo E Definição",
          "Aula 02: Componentes E Acessórios",
          "Aula 03: Cabine De Comando E Botoeiras",
          "Avaliação 01: NR 11 Ponte Rolante|quiz",
          "Aula 04: Verificação E Check List",
          "Aula 05: Operação E Erros De Amarração",
          "Aula 06: Operador, Emergência E Ergonomia",
          "Avaliação 02: NR 11 Ponte Rolante|quiz",
          "Aula 07: Verificação E Cabo De Aço",
          "Aula 08: Polias, Tambores E Cabos De Aço",
          "Aula 09: Olhais, Grampos E Ganchos",
          "Avaliação 03: NR 11 Ponte Rolante|quiz",
          "Aula 10: Cintas De Nylon E Inspeções",
          "Aula 11: Içamento Com Cinta",
          "Aula 12: Correntes E Nós De Cordas",
          "Avaliação 04: NR 11 Ponte Rolante|quiz",
          "Aula 13: Comunicação Entre Operador E Movimentador",
          "Aula 14: Comunicação Entre Operador E Movimentador",
          "Aula 15: Ponte Rolante E Talhas, Vídeos De Acidentes",
          "Aula 16: Ponte Rolante E Talhas, Vídeos De Acidentes",
          "Aula 17: Ponte Rolante E Talhas, Vídeos De Acidentes",
          "Aula 18: Ponte Rolante E Talhas, Vídeo Prático",
          "Aula 19: Ponte Rolante E Talhas, Vídeo Prático",
          "Aula 20: Ponte Rolante E Talhas, Vídeo Prático",
          "Avaliação 05: NR 11 Ponte Rolante|quiz"
        ]
      },
      {
        "titulo": "NR 11 Base: Estudo Da Norma",
        "aulas": 10,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: ABNT E Normas",
          "Aula 02: Equipamento De Elevação E Competência",
          "Aula 03: Cabo De Aço, Cinta E Roudana",
          "Avaliação 01: Estudo Da Norma|quiz",
          "Aula 04: Diretrizes Da Norma, Parte 01",
          "Aula 05: Diretrizes Da Norma, Parte 02",
          "Aula 06: Anexo E Inspeções",
          "Avaliação 02: Estudo Da Norma|quiz",
          "Aula 07: Diretrizes E Acessórios",
          "Aula 08: Diretrizes E Ventosas",
          "Aula 09: Disposições Gerais",
          "NR 11 Do MTE",
          "Avaliação 03: Estudo Da Norma|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-11-operacao-de-ponte-rolante-e-talha-eletrica-teorico-8-horas/?add-to-cart=124880",
    origemLink: "https://duosst.formasegead.com/curso/nr-11-operacao-de-ponte-rolante-e-talha-eletrica-teorico-8-horas/",
    imagemHero: "assets/cursos/nr-11-ponte-hero.jpg",
    imagemConteudo: "assets/cursos/nr-11-ponte-conteudo.jpg",
    doresTitulo: "Carga suspensa não dá segunda chance",
    doresIntro: "Ponte rolante e talha movimentam toneladas por cima de pessoas. O erro de um operador sem preparo atinge quem está embaixo.",
    dores: [
      {
        "icone": "guindar",
        "titulo": "Queda de carga é acidente grave",
        "texto": "Cabo de aço gasto, cinta errada, carga mal balanceada ou movimento brusco. Quase todo acidente com ponte rolante começa num desses pontos."
      },
      {
        "icone": "pericia",
        "titulo": "Operador precisa ser capacitado",
        "texto": "A NR 11 exige que só trabalhador capacitado opere equipamento de transporte e movimentação de carga. Operar sem treinamento expõe a empresa a autuação."
      },
      {
        "icone": "treinamento",
        "titulo": "Vaga de operador pede o certificado",
        "texto": "Indústrias, siderúrgicas e galpões logísticos pedem a capacitação em ponte rolante logo na contratação."
      }
    ],
    beneficios: [
      "Conhecer os tipos de ponte rolante, talha elétrica e seus comandos",
      "Inspecionar cabo de aço, cintas, ganchos e roldanas antes de operar",
      "Movimentar carga respeitando limite, centro de gravidade e área isolada",
      "Aplicar as diretrizes da NR 11 e das normas ABNT do equipamento"
    ],
    faq: [
      {
        "pergunta": "Esse curso inclui a parte prática?",
        "resposta": "Não. Ele certifica a parte teórica. A NR 11 pede que a capacitação inclua prática no equipamento, feita presencialmente. Fale com a DUO SST no WhatsApp pra combinar a prática da sua equipe."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      }
    ],
  },

  "nr-12-equipamentos-de-guindar": {
    codigo: "NR 12",
    titulo: "Equipamentos de Guindar p/ Elevação de Pessoas e Trabalho em Altura",
    categoria: "Operação de equipamentos e movimentação de carga",
    icone: "guindar",
    formato: "EAD",
    cargaHoraria: "4h teórico",
    publico: "Maiores de 18 anos, operadores de equipamento de içamento de pessoas",
    resumo: "Segurança na operação de equipamento de içamento de pessoas e trabalho em altura com plataforma elevatória: uso correto, limitações operacionais e dispositivos de proteção.",
    modulos: [
      {
        "titulo": "NR 12 Equipamentos de Guindar",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Cesto Aéreo, Suspenso e Acoplado",
          "Aula 02: Tipos de Equipamentos de Guindar e Aplicações",
          "Aula 03: Requisitos de Segurança e Dispositivos de Proteção",
          "Aula 04: Procedimentos Operacionais e Documentação",
          "Avaliação 01: NR 12 Equipamentos de Guindar|quiz"
        ]
      },
      {
        "titulo": "Comportamento Seguro",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Bases da Prevenção e do Comportamento Seguro",
          "Aula 02: Fundamentos da Prevenção e da Segurança Ocupacional",
          "Avaliação 01: Comportamento Seguro|quiz"
        ]
      },
      {
        "titulo": "APR: Análise Preliminar de Risco",
        "aulas": 5,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 1: Definição De APR",
          "Aula 2: Etapas Da APR",
          "Aula 3: Atos Inadequados",
          "Aula 4: Modelo De APR",
          "Aula 5: Investigação De Acidentes",
          "Avaliação 01: APR, Análise Preliminar de Risco|quiz"
        ]
      },
      {
        "titulo": "EPI",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Objetivo e Aplicação",
          "Aula 02: Responsabilidades e EPI",
          "Aula 03: EPI E EPC",
          "Interativo: Escolha dos equipamentos",
          "Avaliação 01: EPI|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-12-equipamentos-de-guindar-para-elevacao-de-pessoas-e-realizacao-de-trabalho-em-altura-teorico-4-horas/?add-to-cart=124884",
    origemLink: "https://duosst.formasegead.com/curso/nr-12-equipamentos-de-guindar-para-elevacao-de-pessoas-e-realizacao-de-trabalho-em-altura-teorico-4-horas/",
    imagemHero: "assets/cursos/nr-12-guindar-hero.jpg",
    imagemConteudo: "assets/cursos/nr-12-guindar-conteudo.jpg",
    doresTitulo: "Gente dentro do cesto, risco dobrado",
    doresIntro: "Equipamento de guindar com pessoas combina dois riscos: o da máquina e o da altura. A NR 12 trata disso de forma específica.",
    dores: [
      {
        "icone": "altura",
        "titulo": "Tombamento e queda do cesto",
        "texto": "Terreno irregular, sobrecarga ou dispositivo de proteção desativado. Em cesto aéreo, falha de procedimento vira queda de altura."
      },
      {
        "icone": "pericia",
        "titulo": "Máquina sem operador capacitado é irregularidade",
        "texto": "A NR 12 exige capacitação de quem opera máquinas e equipamentos. Sem ela, a empresa fica exposta em fiscalização e em caso de acidente."
      },
      {
        "icone": "treinamento",
        "titulo": "APR mal feita, operação parada",
        "texto": "Muitas empresas só liberam o equipamento com Análise Preliminar de Risco preenchida corretamente. Esse curso ensina a fazer."
      }
    ],
    beneficios: [
      "Diferenciar cesto aéreo, suspenso e acoplado e onde cada um é usado",
      "Conferir dispositivos de proteção e documentação antes de operar",
      "Montar uma Análise Preliminar de Risco (APR) completa",
      "Escolher e usar o EPI e o EPC certos pra cada situação"
    ],
    faq: [
      {
        "pergunta": "Esse curso inclui a parte prática?",
        "resposta": "Não. Ele certifica a parte teórica. A NR 12 pede que a capacitação inclua prática no equipamento, feita presencialmente. Fale com a DUO SST no WhatsApp pra combinar a prática da sua equipe."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      }
    ],
  },

  "nr-12-31-rocadeira-costal": {
    codigo: "NR 12/31",
    titulo: "Roçadeira Costal",
    categoria: "Operação de equipamentos e movimentação de carga",
    icone: "rocadeira",
    formato: "EAD",
    cargaHoraria: "2h teórico",
    praticaPresencial: "2h",
    publico: "Maiores de 18 anos",
    resumo: "Segurança na operação de roçadeira costal em atividades agrícolas, florestais, urbanas e de manutenção: riscos principais, uso correto do equipamento, inspeção e EPI.",
    modulos: [
      {
        "titulo": "NR 12 Roçadeira Costal",
        "aulas": 6,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: Introdução E Legislação",
          "Aula 02: Riscos E Medidas Preventivas",
          "Aula 03: Equipamentos De Proteção",
          "Avaliação 01: NR 12 Roçadeira Costal|quiz",
          "Aula 04: Identificação De Equipamento",
          "Aula 05: Dicas De Segurança Na Operação",
          "Aula 06: Fundamentos da Prevenção e da Segurança Ocupacional",
          "Avaliação 02: NR 12 Roçadeira Costal|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-12-31-rocadeira-costal-teorico/?add-to-cart=124888",
    origemLink: "https://duosst.formasegead.com/curso/nr-12-31-rocadeira-costal-teorico/",
    imagemHero: "assets/cursos/nr-12-31-rocadeira-hero.jpg",
    imagemConteudo: "assets/cursos/nr-12-31-rocadeira-conteudo.jpg",
    doresTitulo: "Ferramenta pequena, acidente grande",
    doresIntro: "A roçadeira parece simples, mas a lâmina gira em alta rotação e arremessa pedras e detritos.",
    dores: [
      {
        "icone": "rocadeira",
        "titulo": "Projeção de objetos e cortes",
        "texto": "Pedra arremessada no olho, corte na perna, perda auditiva com o tempo. Quase sempre por falta de EPI ou uso errado do equipamento."
      },
      {
        "icone": "pericia",
        "titulo": "Campo e cidade estão na norma",
        "texto": "A NR 12 (máquinas) e a NR 31 (trabalho rural) exigem capacitação de quem opera. Vale pra prefeitura, condomínio, empresa de manutenção e fazenda."
      },
      {
        "icone": "treinamento",
        "titulo": "Contratante pede o certificado",
        "texto": "Empresas terceirizadas de roçada e manutenção precisam comprovar a capacitação da equipe pra fechar contrato."
      }
    ],
    beneficios: [
      "Conhecer a legislação que se aplica à operação de roçadeira",
      "Identificar as partes do equipamento e inspecioná-lo antes do uso",
      "Usar protetor facial, auricular, perneira e luvas corretamente",
      "Operar com segurança e manter distância de terceiros"
    ],
    faq: [
      {
        "pergunta": "Só a parte online já me certifica?",
        "resposta": "Não. O treinamento tem 2h online e 2h de prática presencial. O certificado final sai depois das duas partes. A prática você faz na modalidade Presencial, na sua empresa (in company) ou na AST: é só chamar a DUO SST pelo botão de presencial."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "nr-11-amarracao-cargas": {
    codigo: "NR 11",
    titulo: "Amarração, Movimentação e Manuseio de Cargas",
    categoria: "Operação de equipamentos e movimentação de carga",
    icone: "guindar",
    formato: "EAD",
    cargaHoraria: "4h teórico",
    publico: "Maiores de 18 anos",
    resumo: "Capacita o trabalhador pra execução segura de amarração, movimentação e manuseio de cargas, com os riscos operacionais e procedimentos conforme a norma.",
    modulos: [
      {
        "titulo": "NR 11 Amarração, Movimentação e Manuseio de Cargas",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução E Fundamentos Da NR 11",
          "Aula 02: Tipos De Cargas E Equipamentos",
          "Aula 03: Dicas De Segurança",
          "Avaliação 01: NR 11 Amarração, Movimentação e Manuseio de Cargas|quiz"
        ]
      },
      {
        "titulo": "NR 11 Base, Estudo da Norma",
        "aulas": 10,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: ABNT e Normas",
          "Aula 02: Equipamentos de Elevação e Competência",
          "Aula 03: Cabo de Aço, Cinta e Roldana",
          "Avaliação 01: NR 11 Base, Estudo da Norma|quiz",
          "Aula 04: Diretrizes da Norma Parte 1",
          "Aula 05: Diretrizes da Norma Parte 2",
          "Aula 06: Anexo e Inspeções",
          "Avaliação 02: NR 11 Base, Estudo da Norma|quiz",
          "Aula 07: Diretrizes e Acessórios",
          "Aula 08: Diretrizes e Ventosas",
          "Aula 09: Disposições Gerais",
          "Norma NR 11 do MTE",
          "Avaliação 03: NR 11 Base, Estudo da Norma|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-11-amarracao-movimentacao-e-manuseio-de-cargas-teorico/?add-to-cart=124902",
    origemLink: "https://duosst.formasegead.com/curso/nr-11-amarracao-movimentacao-e-manuseio-de-cargas-teorico/",
    imagemHero: "assets/cursos/nr-11-amarracao-hero.jpg",
    imagemConteudo: "assets/cursos/nr-11-amarracao-conteudo.jpg",
    doresTitulo: "Carga mal amarrada vira projétil",
    doresIntro: "Uma cinta solta ou um nó errado transforma a carga em risco pra quem movimenta, pra quem transporta e pra quem está perto.",
    dores: [
      {
        "icone": "guindar",
        "titulo": "Queda e deslizamento de carga",
        "texto": "Amarração errada é causa frequente de carga que escorrega no içamento ou desmonta na carroceria."
      },
      {
        "icone": "pericia",
        "titulo": "A NR 11 exige capacitação",
        "texto": "Movimentação e armazenagem de materiais estão na NR 11. Quem faz amarração e manuseio precisa estar capacitado."
      },
      {
        "icone": "treinamento",
        "titulo": "Lesão por manuseio errado",
        "texto": "Postura errada e esforço excessivo no manuseio manual geram afastamento. O curso ensina a técnica certa."
      }
    ],
    beneficios: [
      "Identificar tipos de carga e o equipamento certo pra cada uma",
      "Escolher e inspecionar cabo de aço, cinta e roldana",
      "Amarrar e movimentar carga com segurança",
      "Aplicar as diretrizes e o anexo da NR 11 no dia a dia"
    ],
    faq: [
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "nr-11-paleteira": {
    codigo: "NR 11",
    titulo: "Operação de Paleteira e Transpaleteira Manual",
    categoria: "Operação de equipamentos e movimentação de carga",
    icone: "guindar",
    formato: "EAD",
    cargaHoraria: "4h teórico",
    publico: "Maiores de 18 anos que operam em movimentação manual de cargas",
    resumo: "Segurança na operação de paleteira e transpaleteira manual em ambientes industriais e logísticos: limites de carga, uso correto e prevenção de esmagamento e tombamento.",
    modulos: [
      {
        "titulo": "NR 11 Operação de Paleteira e Transpaleteira Manual",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução a NR 11 e Transpaleteira",
          "Aula 02: Requisitos Legais da NR 11 e Operação Segura",
          "Aula 03: Riscos E Prevenção De Acidentes",
          "Avaliação 01: NR 11 Operação de Paleteira e Transpaleteira Manual|quiz"
        ]
      },
      {
        "titulo": "NR 11 Amarração, Movimentação e Manuseio de Cargas",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução E Fundamentos Da NR 11",
          "Aula 02: Tipos De Cargas E Equipamentos",
          "Aula 03: Dicas De Segurança",
          "Avaliação 01: NR 11 Amarração, Movimentação e Manuseio de Cargas|quiz"
        ]
      },
      {
        "titulo": "NR 11 Base, Estudo da Norma",
        "aulas": 6,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: ABNT e Normas",
          "Aula 02: Equipamentos de Elevação e Competência",
          "Aula 03: Cabo de Aço, Cinta e Roldana",
          "Avaliação 01: NR 11 Base, Estudo da Norma|quiz",
          "Aula 04: Diretrizes da Norma",
          "Aula 05: Diretrizes da Norma",
          "Aula 06: Anexo e Inspeções",
          "Avaliação 02: NR 11 Base, Estudo da Norma|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-11-operacao-de-paleteira-e-transpaleteira-manual-teorico-4-horas/?add-to-cart=124896",
    origemLink: "https://duosst.formasegead.com/curso/nr-11-operacao-de-paleteira-e-transpaleteira-manual-teorico-4-horas/",
    imagemHero: "assets/cursos/nr-11-paleteira-hero.jpg",
    imagemConteudo: "assets/cursos/nr-11-paleteira-conteudo.jpg",
    doresTitulo: "Manual não quer dizer sem risco",
    doresIntro: "Paleteira manual parece inofensiva, mas carrega centenas de quilos e responde por boa parte dos acidentes de armazém.",
    dores: [
      {
        "icone": "guindar",
        "titulo": "Esmagamento de pés e mãos",
        "texto": "Carga que tomba, garfo que passa por cima do pé, prensamento contra prateleira. Acontece com quem nunca aprendeu o jeito certo."
      },
      {
        "icone": "pericia",
        "titulo": "Operador precisa ser capacitado",
        "texto": "Paleteira é equipamento de movimentação de carga e está na NR 11. A capacitação do operador é obrigação da empresa."
      },
      {
        "icone": "treinamento",
        "titulo": "Afastamento custa caro",
        "texto": "Lombalgia e lesão por esforço repetitivo afastam o trabalhador e pesam na operação. Técnica correta previne."
      }
    ],
    beneficios: [
      "Operar paleteira e transpaleteira manual respeitando o limite de carga",
      "Conhecer os requisitos legais da NR 11 pra operação",
      "Prevenir tombamento, esmagamento e colisão em corredores",
      "Amarrar e movimentar cargas com segurança"
    ],
    faq: [
      {
        "pergunta": "Esse curso inclui a parte prática?",
        "resposta": "Não. Ele certifica a parte teórica. A NR 11 pede que a capacitação inclua prática no equipamento, feita presencialmente. Fale com a DUO SST no WhatsApp pra combinar a prática da sua equipe."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      }
    ],
  },

  "nr-13-vasos-de-pressao": {
    codigo: "NR 13",
    titulo: "Operação de Unidades de Processo e Vasos de Pressão",
    categoria: "Mineração e indústria de processo",
    icone: "pressao",
    formato: "EAD",
    cargaHoraria: "40h teórico",
    publico: "Maiores de 18 anos, com ensino médio completo (exigência NR-13 Anexo I, item 2.3)",
    resumo: "Operação segura de equipamentos pressurizados: reconhecimento de risco, situações críticas e procedimentos que previnem explosão, vazamento, queimadura e falha operacional.",
    modulos: [
      {
        "titulo": "Asme",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução à NR 13 Parte 1",
          "Aula 02: Introdução à NR 13 Parte 2",
          "Aula 03: Conteúdo Programático",
          "Aula 04: Estudo Da Norma Anexo I",
          "Avaliação 01: Asme|quiz"
        ]
      },
      {
        "titulo": "Noções De Física Aplicada",
        "aulas": 15,
        "avaliacoes": 5,
        "aulasDetalhe": [
          "Aula 01: Pressão",
          "Aula 02: Unidade De Pressão",
          "Aula 03: Transferência De Calor Parte 1",
          "Avaliação 01: Noções De Física Aplicada|quiz",
          "Aula 04: Modo Transferência De Calor Parte 2",
          "Aula 05: Tipos De Calor",
          "Aula 06: Termodinâmica",
          "Avaliação 02: Noções De Física Aplicada|quiz",
          "Aula 07: Mecânica Dos Fluidos Parte 1",
          "Aula 08: Mecânica Dos Fluidos Parte 2",
          "Aula 09: Bombeamento De Fluidos",
          "Avaliação 03: Noções De Física Aplicada|quiz",
          "Aula 10: Noções De Química Aplicada",
          "Aula 11: Corrosão Parte 1",
          "Aula 12: Corrosão Parte 2",
          "Avaliação 04: Noções De Física Aplicada|quiz",
          "Aula 13: Corrosão Parte 3",
          "Aula 14: Corrosão Parte 4",
          "Aula 15: Tópicos De Inspeção",
          "Avaliação 05: Noções De Física Aplicada|quiz"
        ]
      },
      {
        "titulo": "Equipamentos De Processo",
        "aulas": 10,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Conexão",
          "Aula 02: Flanges",
          "Aula 03: Juntas Para Flange",
          "Avaliação 01: Equipamentos De Processo|quiz",
          "Aula 04: Juntas De Expansão",
          "Aula 05: Filtro",
          "Aula 06: Acessórios Elétricos",
          "Avaliação 02: Equipamentos De Processo|quiz",
          "Aula 07: Aquecedores De Água",
          "Aula 08: Bombas Parte 1",
          "Aula 09: Bombas Parte 2",
          "Aula 10: Bombas Parte 3",
          "Avaliação 03: Equipamentos De Processo|quiz"
        ]
      },
      {
        "titulo": "Caldeiras",
        "aulas": 5,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: Conhecimento Básico De Caldeiras Parte 1",
          "Aula 02: Conhecimento Básico De Caldeiras Parte 2",
          "Aula 03: Conhecimento Básico De Caldeiras Parte 3",
          "Avaliação 01: Caldeiras|quiz",
          "Aula 04: Explicação 3D Fogo Tubular Parte 1",
          "Aula 05: Explicação 3D Aquatubular Parte 2",
          "Avaliação 02: Caldeiras|quiz"
        ]
      },
      {
        "titulo": "Equipamentos De Processo Parte 2",
        "aulas": 8,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Compressores Parte 1",
          "Aula 02: Compressores Parte 2",
          "Aula 03: Condensador",
          "Avaliação 01: Equipamentos De Processo Parte 2|quiz",
          "Aula 04: Desmineralizador",
          "Aula 05: Reatores Parte 1",
          "Aula 06: Reatores Parte 2",
          "Avaliação 02: Equipamentos De Processo Parte 2|quiz",
          "Aula 07: Resfriadores",
          "Aula 08: Silos",
          "Avaliação 03: Equipamentos De Processo Parte 2|quiz"
        ]
      },
      {
        "titulo": "Tanques Metálicos De Armazenamento",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Tanques Metálicos De Armazenamento",
          "Aula 02: Estudo Da Norma Tanques De Armazenamento",
          "Avaliação 01: Equipamentos De Processo Parte 2|quiz"
        ]
      },
      {
        "titulo": "Torre De Destilação",
        "aulas": 7,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: Torres De Destilação Parte 1",
          "Aula 02: Torres De Destilação Parte 2",
          "Aula 03: Torres De Destilação Parte 3",
          "Avaliação 01: Torre De Destilação|quiz",
          "Aula 04: Torres De Destilação Parte 4",
          "Aula 05: Torres De Destilação Parte 5",
          "Aula 06: Torres De Destilação Parte 6",
          "Aula 07: Torres De Destilação Parte 7",
          "Avaliação 02: Torre De Destilação|quiz"
        ]
      },
      {
        "titulo": "Equipamentos De Processo Parte 3",
        "aulas": 8,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Trocadores De Calor Parte 1",
          "Aula 02: Trocadores De Calor Parte 2",
          "Aula 03: Trocadores De Calor Parte 3",
          "Avaliação 01: Equipamentos De Processo Parte 3|quiz",
          "Aula 04: Trocadores De Calor Parte 4",
          "Aula 05: Trocadores De Calor Parte 5",
          "Aula 06: Trocadores De Calor Parte 6",
          "Avaliação 02: Equipamentos De Processo Parte 3|quiz",
          "Aula 07: Trocadores De Calor Parte 8",
          "Aula 08: Trocadores De Calor Parte 9",
          "Avaliação 03: Equipamentos De Processo Parte 3|quiz"
        ]
      },
      {
        "titulo": "Tubulações",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Tubulações Parte 1",
          "Aula 02: Tubulações Parte 2",
          "Aula 03: Tubulações Parte 3",
          "Avaliação 01: Tubulações|quiz"
        ]
      },
      {
        "titulo": "Turbinas",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Turbinas Parte 1",
          "Aula 02: Turbinas Parte 2",
          "Avaliação 01: Turbinas|quiz"
        ]
      },
      {
        "titulo": "Equipamentos De Processo Parte 4",
        "aulas": 10,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Injetores De Água",
          "Aula 02: Dispositivo De Segurança",
          "Aula 03: Instrumentação Parte 1",
          "Avaliação 01: Equipamentos De Processo Parte 4|quiz",
          "Aula 04: Instrumentação Parte 2",
          "Aula 05: Indicadores De Pressão",
          "Aula 06: Transdutores E Indicadores De Pressão",
          "Avaliação 02: Equipamentos De Processo Parte 4|quiz",
          "Aula 07: Medidores De Pressão",
          "Aula 08: Instrumentos E Controladores De Temperatura",
          "Aula 09: Instrumentos De Vazão E Volume",
          "Aula 10: Tipos De Medidores De Vazão E Volume",
          "Avaliação 03: Equipamentos De Processo Parte 4|quiz"
        ]
      },
      {
        "titulo": "Operação De Unidade De Processo",
        "aulas": 7,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: Avaliações De Riscos Dos Processos",
          "Aula 02: Consequências De Incêndio E Explosão",
          "Aula 03: Sobrepressão E Controle De Risco",
          "Avaliação 01: Operação De Unidade De Processo|quiz",
          "Aula 04: Controle De Risco Com Amônia E Redução De Vácuo",
          "Aula 05: Partida De Unidade",
          "Aula 06: Descarte De Resíduos Químico",
          "Aula 07: Avaliações E Controle De Risco 1",
          "Avaliação 02: Operação De Unidade De Processo|quiz"
        ]
      },
      {
        "titulo": "Estudo Da NR 13",
        "aulas": 8,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Estudo Da NR 13 Parte 1",
          "Aula 02: Estudo Da NR 13 Parte 2",
          "Aula 03: Estudo Da NR 13 Parte 3",
          "Avaliação 01: Estudo Da NR 13|quiz",
          "Aula 04: Estudo Da NR 13 Parte 4",
          "Aula 05: Estudo Da NR 13 Parte 5",
          "Aula 06: Estudo Da NR 13 Parte 6",
          "Avaliação 02: Estudo Da NR 13|quiz",
          "Aula 07: Estudo Da NR 13 Parte 7",
          "Aula 08: Estudo Anexo II",
          "Avaliação 03: Estudo Da NR 13|quiz"
        ]
      },
      {
        "titulo": "Podcast",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Podcast, Aula 1",
          "Aula 02: Podcast, Aula 2",
          "Aula 03: Podcast, Aula 3",
          "Avaliação 01: Podcast|quiz"
        ]
      },
      {
        "titulo": "APR: Análise Preliminar de Risco",
        "aulas": 5,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 1: DEFINIÇÃO DE APR",
          "Aula 2: ETAPAS DA APR",
          "Aula 3: ATOS INADEQUADOS",
          "Aula 4: MODELO DE APR",
          "Aula 5: INVESTIGAÇÃO DE ACIDENTES",
          "Avaliação 01: APR|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático De Primeiros Socorros",
        "aulas": 15,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: APH, Conceito Prático 01",
          "Aula 02: APH, Conceito Prático 02",
          "Aula 03: APH, Conceito Prático 03",
          "Aula 04: APH, Conceito Prático 04",
          "Aula 05: APH, Conceito Prático 05",
          "Aula 06: APH, Conceito Prático 06",
          "Aula 07: APH, Conceito Prático 07",
          "Aula 08: APH, Conceito Prático 08",
          "Aula 09: APH, Conceito Prático 09",
          "Aula 10: APH, Conceito Prático 10",
          "Aula 11: APH, Conceito Prático 11",
          "Aula 12: APH, Conceito Prático 12",
          "Aula 13: APH, Conceito Prático 13",
          "Aula 14: APH, Conceito Prático 14",
          "Aula 15: APH, Conceito Prático 15",
          "Avaliação 01: Conceito Prático De Primeiros Socorros|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-13-operacao-de-unidades-de-processo-e-vasos-de-pressao-teorico-618/?add-to-cart=124864",
    origemLink: "https://duosst.formasegead.com/curso/nr-13-operacao-de-unidades-de-processo-e-vasos-de-pressao-teorico-618/",
    imagemHero: "assets/cursos/nr-13-vasos-hero.jpg",
    imagemConteudo: "assets/cursos/nr-13-vasos-conteudo.jpg",
    doresTitulo: "Pressão não avisa antes",
    doresIntro: "Vaso de pressão e unidade de processo guardam energia suficiente pra destruir uma planta. O operador é quem lê os sinais primeiro.",
    dores: [
      {
        "icone": "pressao",
        "titulo": "Explosão, vazamento e queimadura",
        "texto": "Válvula de segurança travada, leitura de manômetro ignorada ou partida fora do procedimento. Os acidentes com vaso de pressão estão entre os mais graves da indústria."
      },
      {
        "icone": "pericia",
        "titulo": "A NR 13 exige formação específica",
        "texto": "Só pode operar unidade de processo quem tem o treinamento de segurança previsto na NR 13. Operar sem ele é irregularidade grave."
      },
      {
        "icone": "treinamento",
        "titulo": "Formação de 40h abre a vaga",
        "texto": "Refinarias, químicas, celulose e siderurgia exigem esse treinamento pra contratar operador de processo."
      }
    ],
    beneficios: [
      "Entender a física aplicada: pressão, calor, termodinâmica e fluidos",
      "Conhecer vasos, caldeiras, turbinas, torres de destilação e trocadores de calor",
      "Operar unidade de processo seguindo procedimento",
      "Aplicar a NR 13 e as normas ASME no dia a dia",
      "Fazer APR e prestar primeiros socorros"
    ],
    faq: [
      {
        "pergunta": "Preciso de ensino médio?",
        "resposta": "Sim. A NR 13 exige ensino médio completo pra esse treinamento."
      },
      {
        "pergunta": "E a parte prática?",
        "resposta": "Esse curso cobre a parte teórica (40h). Pela NR 13, o estágio prático supervisionado é feito na própria empresa, na unidade onde o operador vai trabalhar."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      }
    ],
  },

  "nr-13-caldeiras": {
    codigo: "NR 13",
    titulo: "Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos de Armazenamento",
    categoria: "Mineração e indústria de processo",
    icone: "pressao",
    formato: "EAD",
    cargaHoraria: "40h teórico",
    publico: "Maiores de 18 anos, com ensino médio completo",
    resumo: "Formação completa em caldeiras e vasos de pressão: física aplicada, tipos de caldeira, tratamento de água, operação, manutenção e a NR-13 na íntegra.",
    modulos: [
      {
        "titulo": "Asme",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução à NR 13 Parte 1",
          "Aula 02: Introdução à NR 13 Parte 2",
          "Aula 03: Conteúdo Programático",
          "Aula 04: Estudo Da Norma Anexo I",
          "Avaliação 01: Asme|quiz"
        ]
      },
      {
        "titulo": "Noções De Física Aplicada",
        "aulas": 15,
        "avaliacoes": 5,
        "aulasDetalhe": [
          "Aula 01: Pressão",
          "Aula 02: Unidade De Pressão",
          "Aula 03: Transferência De Calor Parte 1",
          "Avaliação 01: Noções De Física Aplicada|quiz",
          "Aula 04: Modo Transferência De Calor Parte 2",
          "Aula 05: Tipos De Calor",
          "Aula 06: Termodinâmica",
          "Avaliação 02: Noções De Física Aplicada|quiz",
          "Aula 07: Mecânica Dos Fluidos Parte 1",
          "Aula 08: Mecânica Dos Fluidos Parte 2",
          "Aula 09: Bombeamento De Fluidos",
          "Avaliação 03: Noções De Física Aplicada|quiz",
          "Aula 10: Noções De Química Aplicada",
          "Aula 11: Corrosão Parte 1",
          "Aula 12: Corrosão Parte 2",
          "Avaliação 04: Noções De Física Aplicada|quiz",
          "Aula 13: Corrosão Parte 3",
          "Aula 14: Corrosão Parte 4",
          "Aula 15: Tópicos De Inspeção",
          "Avaliação 05: Noções De Física Aplicada|quiz"
        ]
      },
      {
        "titulo": "Equipamentos De Processo",
        "aulas": 13,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Conexão",
          "Aula 02: Flanges",
          "Aula 03: Juntas Para Flange",
          "Avaliação 01: Equipamentos De Processo|quiz",
          "Aula 04: Juntas De Expansão",
          "Aula 05: Filtro",
          "Aula 06: Acessórios Elétricos",
          "Avaliação 02: Equipamentos De Processo|quiz",
          "Aula 07: Aquecedores De Água",
          "Aula 08: Bombas Parte 1",
          "Aula 09: Bombas Parte 2",
          "Aula 10: Bombas Parte 3",
          "Avaliação 03: Equipamentos De Processo|quiz",
          "Aula 11: Tubulações Parte 1",
          "Aula 12: Tubulações Parte 2",
          "Aula 13: Tubulações Parte 3",
          "Avaliação 04: Equipamentos De Processo|quiz"
        ]
      },
      {
        "titulo": "Caldeiras Generalidades",
        "aulas": 7,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: Breve História Do Vapor",
          "Aula 02: Classificação de Caldeiras",
          "Aula 03: Conhecimento Básico De Caldeiras Parte 1",
          "Avaliação 01: Caldeiras Generalidades|quiz",
          "Aula 04: Conhecimento Básico De Caldeiras Parte 2",
          "Aula 05: Conhecimento Básico De Caldeiras Parte 3",
          "Aula 06: Combustão",
          "Aula 07: Combustível Para Caldeiras",
          "Avaliação 02: Caldeiras Generalidades|quiz"
        ]
      },
      {
        "titulo": "Caldeiras Fogotubular",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Componentes de Caldeiras Fogotubulares",
          "Aula 02: Operação de Caldeira Fogo Tubular",
          "Aula 03: Explicação 3D Fogo Tubular",
          "Avaliação 01: Caldeiras Fogotubular|quiz"
        ]
      },
      {
        "titulo": "Caldeiras Aquatubular",
        "aulas": 7,
        "avaliacoes": 2,
        "aulasDetalhe": [
          "Aula 01: Componentes de Caldeiras Aquatubulares Parte 1",
          "Aula 02: Componentes de Caldeiras Aquatubulares Parte 2",
          "Aula 03: Componentes de Caldeiras Aquatubulares Parte 3",
          "Avaliação 01: Caldeiras Aquatubular|quiz",
          "Aula 04: Componentes de Caldeiras Aquatubulares Parte 4",
          "Aula 05: Componentes de Caldeiras Aquatubulares Parte 5",
          "Aula 06: Leito Fluídizado",
          "Aula 07: Explicação 3D Aquatubular",
          "Avaliação 02: Caldeiras Aquatubular|quiz"
        ]
      },
      {
        "titulo": "Caldeiras Elétricas e Nucleares",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Caldeiras Elétricas Parte 1",
          "Aula 02: Caldeiras Elétricas Parte 2",
          "Aula 03: Caldeiras Nucleares",
          "Avaliação 01: Caldeiras Elétricas e Nucleares|quiz"
        ]
      },
      {
        "titulo": "Caldeiras de recuperação",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Caldeiras De Recuperação de Alcalis Parte 1",
          "Aula 02: Caldeiras De Recuperação de Alcalis Parte 2",
          "Aula 03: Caldeiras De Recuperação de Alcalis Parte 3",
          "Aula 04: Caldeiras De Recuperação de Alcalis Parte 4",
          "Avaliação 01: Caldeiras Elétricas e Nucleares|quiz"
        ]
      },
      {
        "titulo": "Controle de Caldeiras",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Acessórios e Instrumentos de Controle Na Caldeira Parte 1",
          "Aula 02: Acessórios e Instrumentos de Controle Na Caldeira Parte 2",
          "Aula 03: Sistemas de Redes da Caldeira",
          "Aula 04: Aquecimentos de Fluídos Térmicos",
          "Avaliação 01: Controle de Caldeiras|quiz"
        ]
      },
      {
        "titulo": "Tratamento De Água Para Caldeira",
        "aulas": 8,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Tratamentos de Água Para Caldeiras Parte 1",
          "Aula 02: Tratamentos de Água Para Caldeiras Parte 2",
          "Aula 03: Tratamentos de Água Para Caldeiras Parte 3",
          "Avaliação 01: Tratamento De Água Para Caldeira|quiz",
          "Aula 04: Tratamentos de Água Para Caldeiras Parte 4",
          "Aula 05: Tratamentos de Água Para Caldeiras Parte 5",
          "Aula 06: Tratamentos de Água Para Caldeiras Parte 6",
          "Avaliação 02: Tratamento De Água Para Caldeira|quiz",
          "Aula 07: Tratamentos de Água Para Caldeiras Parte 7",
          "Aula 08: Tratamentos de Água Para Caldeiras Parte 8",
          "Avaliação 03: Tratamento De Água Para Caldeira|quiz"
        ]
      },
      {
        "titulo": "Operação De Caldeiras",
        "aulas": 12,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Operação de Caldeira (Introdução)",
          "Aula 02: Operação de Caldeira, Parâmetros, Água e Combustível",
          "Aula 03: Operação de Caldeira, Generalidades",
          "Avaliação 01: Operação De Caldeiras|quiz",
          "Aula 04: Operação de Caldeira, Verificação de Partida Parte 1",
          "Aula 05: Operação de Caldeira, Verificação de Partida Parte 2",
          "Aula 06: Operação de Caldeira, Partida a Frio Parte 1",
          "Avaliação 02: Operação De Caldeiras|quiz",
          "Aula 07: Operação de Caldeira, Partida a Frio Parte 2",
          "Aula 08: Operação de Caldeira, Partida a Frio Parte 3",
          "Aula 09: Procedimentos Operacionais da Caldeira Parte 1",
          "Avaliação 03: Operação De Caldeiras|quiz",
          "Aula 10: Procedimentos Operacionais da Caldeira Parte 2",
          "Aula 11: Procedimentos Operacionais da Caldeira Parte 3",
          "Aula 12: Procedimentos Operacionais da Caldeira Parte 4",
          "Avaliação 04: Operação De Caldeiras|quiz"
        ]
      },
      {
        "titulo": "Preservação, Manutenção e Inspeção De Caldeira",
        "aulas": 11,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Parada de Caldeira",
          "Aula 02: Procedimentos de Emergência",
          "Aula 03: Prevenção de Caldeiras",
          "Avaliação 01: Preservação, Manutenção e Inspeção De Caldeira|quiz",
          "Aula 04: Processos de Manutenção de Caldeira",
          "Aula 05: Inspeções de Caldeira, Parte 1",
          "Aula 06: Inspeções de Caldeira, Parte 2",
          "Avaliação 02: Preservação, Manutenção e Inspeção De Caldeira|quiz",
          "Aula 07: Interpretação de Relatórios de Inspeção de Caldeiras",
          "Aula 08: Explosão em Caldeiras, Parte 1",
          "Aula 09: Explosão em Caldeiras, Parte 2",
          "Avaliação 03: Preservação, Manutenção e Inspeção De Caldeira|quiz",
          "Aula 10: Por quê as Caldeiras Explodem?",
          "Aula 11: Guia Prático Para Operador De Caldeira",
          "Avaliação 04: Preservação, Manutenção e Inspeção De Caldeira|quiz"
        ]
      },
      {
        "titulo": "Estudo Da NR 13",
        "aulas": 8,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 01: Estudo Da NR 13 Parte 1",
          "Aula 02: Estudo Da NR 13 Parte 2",
          "Aula 03: Estudo Da NR 13 Parte 3",
          "Avaliação 01: Estudo Da NR 13|quiz",
          "Aula 04: Estudo Da NR 13 Parte 4",
          "Aula 05: Estudo Da NR 13 Parte 5",
          "Aula 06: Estudo Da NR 13 Parte 6",
          "Avaliação 02: Estudo Da NR 13|quiz",
          "Aula 07: Estudo Da NR 13 Parte 7",
          "Aula 08: Estudo Anexo II",
          "Avaliação 03: Estudo Da NR 13|quiz"
        ]
      },
      {
        "titulo": "Podcast",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "PodCast: Parte 1",
          "PodCast: Parte 2",
          "Avaliação 01: Podcast|quiz"
        ]
      },
      {
        "titulo": "APR: Análise Preliminar de Risco",
        "aulas": 5,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 1: Definição de APR",
          "Aula 2: Etapas da APR",
          "Aula 3: Atos Inadequados",
          "Aula 4: Modelo de APR",
          "Aula 5: Investigação de Acidentes",
          "Avaliação 01: APR|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático De Primeiros Socorros",
        "aulas": 15,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: APH, Conceito Prático 01",
          "Aula 02: APH, Conceito Prático 02",
          "Aula 03: APH, Conceito Prático 03",
          "Aula 04: APH, Conceito Prático 04",
          "Aula 05: APH, Conceito Prático 05",
          "Aula 06: APH, Conceito Prático 06",
          "Aula 07: APH, Conceito Prático 07",
          "Aula 08: APH, Conceito Prático 08",
          "Aula 09: APH, Conceito Prático 09",
          "Aula 10: APH, Conceito Prático 10",
          "Aula 11: APH, Conceito Prático 11",
          "Aula 12: APH, Conceito Prático 12",
          "Aula 13: APH, Conceito Prático 13",
          "Aula 14: APH, Conceito Prático 14",
          "Aula 15: APH, Conceito Prático 15",
          "Avaliação 01: Conceito Prático De Primeiros Socorros|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-13-caldeiras-vasos-de-pressao-tubulacoes-e-tanques-metalicos-de-armazenamento-teorico-619/?add-to-cart=124862",
    origemLink: "https://duosst.formasegead.com/curso/nr-13-caldeiras-vasos-de-pressao-tubulacoes-e-tanques-metalicos-de-armazenamento-teorico-619/",
    imagemHero: "assets/cursos/nr-13-caldeiras-hero.jpg",
    imagemConteudo: "assets/cursos/nr-13-caldeiras-conteudo.jpg",
    doresTitulo: "Caldeira exige operador formado",
    doresIntro: "Uma caldeira opera com vapor sob alta pressão o dia inteiro. Nível de água baixo ou controle mal feito pode virar explosão.",
    dores: [
      {
        "icone": "pressao",
        "titulo": "Explosão de caldeira é catástrofe",
        "texto": "Falta de água, superaquecimento e incrustação por tratamento errado estão por trás dos acidentes mais graves com caldeiras."
      },
      {
        "icone": "pericia",
        "titulo": "Operar sem formação é infração grave",
        "texto": "A NR 13 só permite que opere caldeira quem tem o treinamento de segurança específico. Fiscalização pode interditar o equipamento."
      },
      {
        "icone": "treinamento",
        "titulo": "Manutenção e inspeção caem no operador",
        "texto": "Preservação, parada e partida dependem de quem está no painel. Operador bem formado reduz parada não programada."
      }
    ],
    beneficios: [
      "Conhecer caldeiras flamotubulares, aquatubulares, elétricas e de recuperação",
      "Controlar a caldeira e fazer o tratamento da água",
      "Conduzir partida, operação e parada com segurança",
      "Apoiar preservação, manutenção e inspeção do equipamento",
      "Aplicar a NR 13 e as normas ASME"
    ],
    faq: [
      {
        "pergunta": "Preciso de ensino médio?",
        "resposta": "Sim. A NR 13 exige ensino médio completo pra esse treinamento."
      },
      {
        "pergunta": "E a parte prática?",
        "resposta": "Esse curso cobre a parte teórica (40h). Pela NR 13, o estágio prático supervisionado é feito na própria empresa, na caldeira onde o operador vai trabalhar."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      }
    ],
  },

  "nr-18-sinaleiro": {
    codigo: "NR 18",
    titulo: "Sinaleiro e Amarração de Cargas",
    categoria: "Operação de equipamentos e movimentação de carga",
    icone: "sinaleiro",
    formato: "EAD",
    cargaHoraria: "4h teórico",
    praticaPresencial: "12h",
    publico: "Maiores de 18 anos, movimentação e içamento de carga em obras e indústria",
    resumo: "Sinalização, comunicação operacional e técnicas de amarração pra movimentação e içamento de carga, pra reduzir o risco de queda de carga e colisão.",
    modulos: [
      {
        "titulo": "NR 18 Sinaleiro e Amarração de Cargas",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Objetivo, Sinaleiro e Amarração De Cargas",
          "Aula 02: Comunicação e Sinalização Operacional",
          "Aula 03: Técnicas de Amarração de Cargas",
          "Avaliação 01: NR 18 Sinaleiro e Amarração de Cargas|quiz"
        ]
      },
      {
        "titulo": "NR 18 Conceito da Norma",
        "aulas": 9,
        "avaliacoes": 3,
        "aulasDetalhe": [
          "Aula 1: Objetivo",
          "Aula 2: Instalações Elétricas",
          "Aula 3: Etapas De Obra",
          "Avaliação 01: NR 18 Conceito da Norma|quiz",
          "Aula 4: Carpintaria E Armação",
          "Aula 5: Serviços De Impermeabilização",
          "Aula 6: Escadas Portáteis",
          "Avaliação 02: NR 18 Conceito da Norma|quiz",
          "Aula 7: Máquinas, Equipamentos, Ferramentas",
          "Aula 8: Máquina Autopropelida",
          "Aula 9: Pontos De Ancoragens",
          "Avaliação 03: NR 18 Conceito da Norma|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-18-sinaleiro-e-amarracao-de-cargas-teorico/?add-to-cart=124892",
    origemLink: "https://duosst.formasegead.com/curso/nr-18-sinaleiro-e-amarracao-de-cargas-teorico/",
    imagemHero: "assets/cursos/nr-18-sinaleiro-hero.jpg",
    imagemConteudo: "assets/cursos/nr-18-sinaleiro-conteudo.jpg",
    doresTitulo: "O guindasteiro só enxerga o que o sinaleiro mostra",
    doresIntro: "Em içamento na obra, o operador muitas vezes não vê a carga. Quem guia o movimento é o sinaleiro.",
    dores: [
      {
        "icone": "sinaleiro",
        "titulo": "Sinal errado, carga no lugar errado",
        "texto": "Comunicação confusa entre sinaleiro e operador causa colisão com estrutura, queda de carga e atropelamento na obra."
      },
      {
        "icone": "pericia",
        "titulo": "A NR 18 exige capacitação",
        "texto": "Na construção civil, sinaleiro e amarrador precisam ser capacitados. É item verificado em fiscalização de obra."
      },
      {
        "icone": "treinamento",
        "titulo": "Obra grande exige o certificado",
        "texto": "Construtoras e montadoras pedem a capacitação de sinaleiro e amarração antes de liberar a frente de trabalho."
      }
    ],
    beneficios: [
      "Usar os sinais padronizados de comunicação com o operador",
      "Amarrar carga com a técnica certa pra cada tipo de peça",
      "Conhecer os pontos da NR 18 que afetam o içamento",
      "Identificar ancoragens, máquinas e equipamentos da obra"
    ],
    faq: [
      {
        "pergunta": "Só a parte online já me certifica?",
        "resposta": "Não. O treinamento tem 4h online e 12h de prática presencial. O certificado final sai depois das duas partes. A prática você faz na modalidade Presencial, na sua empresa (in company) ou na AST: é só chamar a DUO SST pelo botão de presencial."
      },
      {
        "pergunta": "Posso fazer no meu ritmo?",
        "resposta": "Pode. A parte online fica disponível na plataforma e você assiste pelo celular ou computador, no horário que preferir. O acesso é registrado (logs), como a NR-01 exige."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "nr-22-mineracao-a-ceu-aberto": {
    codigo: "NR 22",
    titulo: "Introdutório Geral: Mineração a Céu Aberto",
    categoria: "Mineração e indústria de processo",
    icone: "mineracao",
    formato: "EAD",
    cargaHoraria: "12h teórico",
    praticaPresencial: "4h",
    publico: "Maiores de 18 anos, iniciando atividade em mineração a céu aberto",
    resumo: "Conceitos fundamentais de segurança e saúde no trabalho em mineração: reconhecimento de risco, EPI, primeiros socorros e combate a incêndio.",
    modulos: [
      {
        "titulo": "NR 22: Treinamento Introdutório Geral",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução à NR 22 e à Mineração",
          "Aula 02: Riscos Ambientais e Controle",
          "Aula 03: Procedimentos De Trabalho",
          "Avaliação 01: NR 22 -Treinamento Introdutório Geral|quiz"
        ]
      },
      {
        "titulo": "EPI",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Objetivo e Aplicação",
          "Aula 02: Responsabilidades e EPI",
          "Aula 03: EPI E EPC",
          "Interativo: Escolha dos equipamentos",
          "Avaliação 01: EPI|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático de Primeiros Socorros",
        "aulas": 15,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: APH, Conceito Prático 01",
          "Aula 02: APH, Conceito Prático 02",
          "Aula 03: APH, Conceito Prático 03",
          "Aula 04: APH, Conceito Prático 04",
          "Aula 05: APH, Conceito Prático 05",
          "Aula 06: APH, Conceito Prático 06",
          "Aula 07: APH, Conceito Prático 07",
          "Aula 08: APH, Conceito Prático 08",
          "Aula 09: APH, Conceito Prático 09",
          "Aula 10: APH, Conceito Prático 10",
          "Aula 11: APH, Conceito Prático 11",
          "Aula 12: APH, Conceito Prático 12",
          "Aula 13: APH, Conceito Prático 13",
          "Aula 14: APH, Conceito Prático 14",
          "Aula 15: APH, Conceito Prático 15",
          "Avaliação 01: Conceito Prático De Primeiros Socorros|quiz"
        ]
      },
      {
        "titulo": "Combate A Incêndio Teórico",
        "aulas": 13,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Objetivo, Teoria Do Fogo e Atribuições",
          "Aula 02: Tetraedro Do Fogo e Combustão",
          "Aula 03: Calor, Fonte De Calor e Propagação",
          "Avaliação 01: Combate A Incêndio Teórico|quiz",
          "Aula 04: Pontos De Temperatura e Fases Do Incêndio",
          "Aula 05: Classes De Incêndio E Materiais Combustíveis",
          "Aula 06: Agentes Extintores",
          "Avaliação 02: Combate A Incêndio Teórico|quiz",
          "Aula 07: Extintor e Seus Componentes",
          "Aula 08: Utilização Dos Aparelhos Extintores",
          "Aula 09: Hidrantes e Componentes",
          "Avaliação 03: Combate A Incêndio Teórico|quiz",
          "Aula 10: Tipos De Jatos D’água",
          "Aula 11: Chuveiros Automáticos e Recalques",
          "Aula 12: Evacuação De Emergência",
          "Aula 13: Dicas De Prevenção Contra Incêndios",
          "Avaliação 04: Combate A Incêndio Teórico|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático Com Extintores",
        "aulas": 9,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução Aparelhos Extintores",
          "Aula 02: Variedades E Uso De Aparelhos",
          "Aula 03: Materiais Extintores Na Conceito Prático",
          "Aula 04: Casa Da Fumaça",
          "Aula 05: Extintores Parte 01",
          "Aula 06: Extintores Parte 02",
          "Aula 07: Extintores Parte 03",
          "Aula 08: NBR Extintores",
          "Aula 09: NBR Extintores",
          "Avaliação 01: Conceito Prático com Extintores|quiz"
        ]
      },
      {
        "titulo": "Riscos Contra Incêndio Na Conceito Prático",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Aspectos Legais",
          "Aula 02: Comportamento E Seleção De Brigadistas",
          "Aula 03: Legislação",
          "Avaliação 01: Riscos Contra Incêndio Na Conceito Prático|quiz"
        ]
      }
    ],
    nota: "Também disponível nas versões Mineração de Subsolo e Rochas Ornamentais (veja no catálogo).",
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-22-treinamento-introdutorio-geral-mineracao-a-ceu-aberto-teorico/?add-to-cart=124878",
    origemLink: "https://duosst.formasegead.com/curso/nr-22-treinamento-introdutorio-geral-mineracao-a-ceu-aberto-teorico/",
    imagemHero: "assets/cursos/nr-22-ceu-aberto-hero.jpg",
    imagemConteudo: "assets/cursos/nr-22-ceu-aberto-conteudo.jpg",
    doresTitulo: "Ninguém entra na mina sem o introdutório",
    doresIntro: "A NR 22 exige o treinamento introdutório geral pra todo trabalhador que começa na mineração.",
    dores: [
      {
        "icone": "mineracao",
        "titulo": "Mina tem risco em todo lugar",
        "texto": "Equipamento pesado, talude, poeira, explosivo e incêndio. Quem chega sem preparo não sabe onde o perigo está."
      },
      {
        "icone": "pericia",
        "titulo": "Exigência legal da NR 22",
        "texto": "Mineradora não pode colocar trabalhador em campo sem o treinamento introdutório. É item de auditoria e fiscalização."
      },
      {
        "icone": "treinamento",
        "titulo": "Porta de entrada pro emprego",
        "texto": "Em Minas Gerais, a mineração é das que mais contratam. O introdutório é o primeiro requisito pra entrar."
      }
    ],
    beneficios: [
      "Reconhecer os riscos da mineração a céu aberto",
      "Escolher e usar o EPI certo pra cada atividade",
      "Prestar primeiros socorros na prática",
      "Combater princípio de incêndio com extintores"
    ],
    faq: [
      {
        "pergunta": "Só a parte online já me certifica?",
        "resposta": "Não. O treinamento tem 12h online e 4h de prática presencial. O certificado final sai depois das duas partes. A prática você faz na modalidade Presencial, na sua empresa (in company) ou na AST: é só chamar a DUO SST pelo botão de presencial."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      },
      {
        "pergunta": "Qual versão eu devo fazer?",
        "resposta": "Depende da mina: céu aberto (essa), subsolo ou rochas ornamentais. Na dúvida, fale com a DUO SST no WhatsApp."
      }
    ],
  },

  "nr-22-mineracao-de-subsolo": {
    codigo: "NR 22",
    titulo: "Introdutório Geral: Mineração de Subsolo",
    categoria: "Mineração e indústria de processo",
    icone: "mineracao",
    formato: "EAD",
    cargaHoraria: "12h teórico",
    praticaPresencial: "12h",
    publico: "Maiores de 18 anos, iniciando atividade em mineração de subsolo",
    resumo: "Versão do introdutório geral da NR-22 voltada pra mineração subterrânea, com a mesma base de EPI, primeiros socorros e combate a incêndio, com carga prática maior.",
    modulos: [
      {
        "titulo": "NR 22: Treinamento Introdutório Geral",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução à NR 22 e à Mineração",
          "Aula 02: Riscos Ambientais e Controle",
          "Aula 03: Procedimentos De Trabalho",
          "Avaliação 01: NR 22 -Treinamento Introdutório Geral|quiz"
        ]
      },
      {
        "titulo": "EPI",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Objetivo e Aplicação",
          "Aula 02: Responsabilidades e EPI",
          "Aula 03: EPI E EPC",
          "Interativo: Escolha dos equipamentos",
          "Avaliação 01: EPI|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático de Primeiros Socorros",
        "aulas": 15,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: APH, Conceito Prático 01",
          "Aula 02: APH, Conceito Prático 02",
          "Aula 03: APH, Conceito Prático 03",
          "Aula 04: APH, Conceito Prático 04",
          "Aula 05: APH, Conceito Prático 05",
          "Aula 06: APH, Conceito Prático 06",
          "Aula 07: APH, Conceito Prático 07",
          "Aula 08: APH, Conceito Prático 08",
          "Aula 09: APH, Conceito Prático 09",
          "Aula 10: APH, Conceito Prático 10",
          "Aula 11: APH, Conceito Prático 11",
          "Aula 12: APH, Conceito Prático 12",
          "Aula 13: APH, Conceito Prático 13",
          "Aula 14: APH, Conceito Prático 14",
          "Aula 15: APH, Conceito Prático 15",
          "Avaliação 01: Conceito Prático De Primeiros Socorros|quiz"
        ]
      },
      {
        "titulo": "Combate A Incêndio Teórico",
        "aulas": 13,
        "avaliacoes": 4,
        "aulasDetalhe": [
          "Aula 01: Objetivo, Teoria Do Fogo e Atribuições",
          "Aula 02: Tetraedro Do Fogo e Combustão",
          "Aula 03: Calor, Fonte De Calor e Propagação",
          "Avaliação 01: Combate A Incêndio Teórico|quiz",
          "Aula 04: Pontos De Temperatura e Fases Do Incêndio",
          "Aula 05: Classes De Incêndio E Materiais Combustíveis",
          "Aula 06: Agentes Extintores",
          "Avaliação 02: Combate A Incêndio Teórico|quiz",
          "Aula 07: Extintor e Seus Componentes",
          "Aula 08: Utilização Dos Aparelhos Extintores",
          "Aula 09: Hidrantes e Componentes",
          "Avaliação 03: Combate A Incêndio Teórico|quiz",
          "Aula 10: Tipos De Jatos D’água",
          "Aula 11: Chuveiros Automáticos e Recalques",
          "Aula 12: Evacuação De Emergência",
          "Aula 13: Dicas De Prevenção Contra Incêndios",
          "Avaliação 04: Combate A Incêndio Teórico|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático Com Extintores",
        "aulas": 9,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução Aparelhos Extintores",
          "Aula 02: Variedades E Uso De Aparelhos",
          "Aula 03: Materiais Extintores Na Conceito Prático",
          "Aula 04: Casa Da Fumaça",
          "Aula 05: Extintores Parte 01",
          "Aula 06: Extintores Parte 02",
          "Aula 07: Extintores Parte 03",
          "Aula 08: NBR Extintores",
          "Aula 09: NBR Extintores",
          "Avaliação 01: Conceito Prático com Extintores|quiz"
        ]
      },
      {
        "titulo": "Riscos Contra Incêndio Na Conceito Prático",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Aspectos Legais",
          "Aula 02: Comportamento E Seleção De Brigadistas",
          "Aula 03: Legislação",
          "Avaliação 01: Riscos Contra Incêndio Na Conceito Prática|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-22-treinamento-introdutorio-geral-teorico/?add-to-cart=124908",
    origemLink: "https://duosst.formasegead.com/curso/nr-22-treinamento-introdutorio-geral-teorico/",
    imagemHero: "assets/cursos/nr-22-subsolo-hero.jpg",
    imagemConteudo: "assets/cursos/nr-22-subsolo-conteudo.jpg",
    doresTitulo: "No subsolo, a saída é longe",
    doresIntro: "Em mina subterrânea, qualquer emergência fica mais grave: pouca luz, ventilação controlada e rota de fuga longa.",
    dores: [
      {
        "icone": "mineracao",
        "titulo": "Incêndio no subsolo é crítico",
        "texto": "Fumaça em galeria se espalha rápido e tira o oxigênio. Saber agir nos primeiros minutos faz a diferença."
      },
      {
        "icone": "pericia",
        "titulo": "Exigência legal da NR 22",
        "texto": "Nenhum trabalhador pode descer sem o treinamento introdutório geral. É item de auditoria e fiscalização."
      },
      {
        "icone": "treinamento",
        "titulo": "Carga prática maior",
        "texto": "Por isso essa versão tem 12h de prática presencial: primeiros socorros, extintores e riscos de incêndio."
      }
    ],
    beneficios: [
      "Reconhecer os riscos ambientais e os procedimentos da mina subterrânea",
      "Escolher e usar o EPI certo pra cada atividade",
      "Prestar primeiros socorros na prática",
      "Combater princípio de incêndio com extintores"
    ],
    faq: [
      {
        "pergunta": "Só a parte online já me certifica?",
        "resposta": "Não. O treinamento tem 12h online e 12h de prática presencial. O certificado final sai depois das duas partes. A prática você faz na modalidade Presencial, na sua empresa (in company) ou na AST: é só chamar a DUO SST pelo botão de presencial."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      },
      {
        "pergunta": "Qual versão eu devo fazer?",
        "resposta": "Depende da mina: subsolo (essa), céu aberto ou rochas ornamentais. Na dúvida, fale com a DUO SST no WhatsApp."
      }
    ],
  },

  "nr-22-rochas-ornamentais": {
    codigo: "NR 22",
    titulo: "Introdutório Geral: Mineração a Céu Aberto (Rochas Ornamentais)",
    categoria: "Mineração e indústria de processo",
    icone: "mineracao",
    formato: "EAD",
    cargaHoraria: "8h teórico",
    praticaPresencial: "4h",
    publico: "Maiores de 18 anos, iniciando atividade em mineração de rochas ornamentais a céu aberto",
    resumo: "Versão do introdutório geral da NR-22 pra extração de rochas ornamentais: riscos ambientais, EPI, primeiros socorros e prevenção de incêndio.",
    modulos: [
      {
        "titulo": "NR 22: Treinamento Introdutório Geral",
        "aulas": 3,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução à NR 22 e à Mineração",
          "Aula 02: Riscos Ambientais e Controle",
          "Aula 03: Procedimentos De Trabalho",
          "Avaliação 01: NR 22 -Treinamento Introdutório Geral|quiz"
        ]
      },
      {
        "titulo": "EPI",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Objetivo e Aplicação",
          "Aula 02: Responsabilidades e EPI",
          "Aula 03: EPI E EPC",
          "Interativo: Escolha dos equipamentos",
          "Avaliação 01: EPI|quiz"
        ]
      },
      {
        "titulo": "Conceito Prático de Primeiros Socorros",
        "aulas": 16,
        "avaliacoes": 0,
        "aulasDetalhe": [
          "Aula 01: APH, Conceito Prático 01",
          "Aula 02: APH, Conceito Prático 02",
          "Aula 03: APH, Conceito Prático 03",
          "Aula 04: APH, Conceito Prático 04",
          "Aula 05: APH, Conceito Prático 05",
          "Aula 06: APH, Conceito Prático 06",
          "Aula 07: APH, Conceito Prático 07",
          "Aula 08: APH, Conceito Prático 08",
          "Aula 09: APH, Conceito Prático 09",
          "Aula 10: APH, Conceito Prático 10",
          "Aula 11: APH, Conceito Prático 11",
          "Aula 12: APH, Conceito Prático 12",
          "Aula 13: APH, Conceito Prático 13",
          "Aula 14: APH, Conceito Prático 14",
          "Aula 15: APH, Conceito Prático 15",
          "Avaliação 01: Conceito Prático De Primeiros Socorros"
        ]
      },
      {
        "titulo": "Combate A Incêndio Teórico",
        "aulas": 11,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Objetivo, Teoria Do Fogo e Atribuições",
          "Aula 02: Tetraedro Do Fogo e Combustão",
          "Aula 03: Calor, Fonte De Calor e Propagação",
          "Avaliação 01: Combate A Incêndio Teórico",
          "Aula 04: Pontos De Temperatura e Fases Do Incêndio",
          "Aula 05: Classes De Incêndio E Materiais Combustíveis",
          "Aula 06: Agentes Extintores",
          "Avaliação 02: Combate A Incêndio Teórico|quiz",
          "Aula 07: Extintor e Seus Componentes",
          "Aula 08: Utilização Dos Aparelhos Extintores",
          "Aula 09: Hidrantes e Componentes",
          "Avaliação 03: Combate A Incêndio Teórico"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-22-treinamento-introdutorio-geral-mineracao-a-ceu-aberto-rochas-ornamentais-teorico/?add-to-cart=124874",
    origemLink: "https://duosst.formasegead.com/curso/nr-22-treinamento-introdutorio-geral-mineracao-a-ceu-aberto-rochas-ornamentais-teorico/",
    imagemHero: "assets/cursos/nr-22-rochas-hero.jpg",
    imagemConteudo: "assets/cursos/nr-22-rochas-conteudo.jpg",
    doresTitulo: "Pedreira também é mineração",
    doresIntro: "Extração de granito e mármore está na NR 22. Bloco de várias toneladas, fio diamantado e poeira de sílica fazem parte da rotina.",
    dores: [
      {
        "icone": "mineracao",
        "titulo": "Bloco que cai não para",
        "texto": "Tombamento de bloco, ruptura de fio e queda de material da bancada são riscos diários na pedreira."
      },
      {
        "icone": "pericia",
        "titulo": "Exigência legal da NR 22",
        "texto": "O introdutório geral também é obrigatório em extração de rochas ornamentais. Sem ele, a pedreira fica irregular."
      },
      {
        "icone": "treinamento",
        "titulo": "Poeira de sílica e ruído",
        "texto": "Proteção respiratória e auditiva bem usadas evitam doença ocupacional. O curso trata do EPI certo."
      }
    ],
    beneficios: [
      "Reconhecer os riscos ambientais da extração de rochas ornamentais",
      "Escolher e usar EPI, incluindo proteção respiratória e auditiva",
      "Prestar primeiros socorros na prática",
      "Prevenir e combater princípio de incêndio"
    ],
    faq: [
      {
        "pergunta": "Só a parte online já me certifica?",
        "resposta": "Não. O treinamento tem 8h online e 4h de prática presencial. O certificado final sai depois das duas partes. A prática você faz na modalidade Presencial, na sua empresa (in company) ou na AST: é só chamar a DUO SST pelo botão de presencial."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      },
      {
        "pergunta": "Qual versão eu devo fazer?",
        "resposta": "Essa é a versão pra pedreiras de rochas ornamentais. Também há céu aberto e subsolo. Na dúvida, fale com a DUO SST no WhatsApp."
      }
    ],
  },

  "nr-25-residuos-industriais": {
    codigo: "NR 25",
    titulo: "Resíduos Industriais",
    categoria: "Gestão e conformidade",
    icone: "residuo",
    formato: "EAD",
    cargaHoraria: "1h teórico",
    publico: "Maiores de 18 anos",
    resumo: "Segregação, armazenamento, transporte e descarte de resíduos industriais, com os riscos ambientais, químicos e biológicos associados ao manejo incorreto.",
    modulos: [
      {
        "titulo": "NR 25 Resíduos Industriais",
        "aulas": 4,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Aula 01: Introdução a NR 25",
          "Aula 02: Armazenamento E Transporte De Resíduos",
          "Aula 03: Emergências e Acidentes Ambientais",
          "Aula 04: Fundamentos da Prevenção e da Segurança Ocupacional",
          "Avaliação 01: NR 25 Resíduos Industriais|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/nr-25-residuos-industriais/?add-to-cart=124900",
    origemLink: "https://duosst.formasegead.com/curso/nr-25-residuos-industriais/",
    imagemHero: "assets/cursos/nr-25-hero.jpg",
    imagemConteudo: "assets/cursos/nr-25-conteudo.jpg",
    doresTitulo: "Resíduo mal descartado volta como multa",
    doresIntro: "Todo resíduo industrial tem regra pra separar, guardar, transportar e descartar. Errar em qualquer etapa gera acidente e passivo ambiental.",
    dores: [
      {
        "icone": "residuo",
        "titulo": "Contaminação e acidente químico",
        "texto": "Mistura de resíduos incompatíveis, vazamento no armazenamento e contato sem proteção. Os riscos são químicos, biológicos e ambientais."
      },
      {
        "icone": "pericia",
        "titulo": "Passivo ambiental fica com a empresa",
        "texto": "A empresa geradora responde pelo resíduo até o destino final. Descarte errado vira autuação e processo."
      },
      {
        "icone": "ambiental",
        "titulo": "Equipe preparada evita emergência",
        "texto": "Saber agir em derramamento ou acidente ambiental limita o estrago e protege quem está perto."
      }
    ],
    beneficios: [
      "Classificar e separar resíduos industriais corretamente",
      "Armazenar e transportar resíduos com segurança",
      "Agir em emergências e acidentes ambientais",
      "Aplicar os fundamentos de prevenção e segurança ocupacional"
    ],
    faq: [
      {
        "pergunta": "Quanto tempo dura?",
        "resposta": "1 hora, 100% online. Dá pra fazer em um intervalo de turno."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Preciso de algum pré-requisito?",
        "resposta": "Só ter 18 anos ou mais."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "riscos-psicossociais-gestores": {
    codigo: "NR 01",
    titulo: "Riscos Psicossociais no Trabalho para Gestores",
    categoria: "Gestão e conformidade",
    icone: "psicossocial",
    formato: "EAD",
    cargaHoraria: "4h teórico",
    publico: "Gestores, lideranças, RH, SST, contadores e responsáveis por compliance organizacional",
    resumo: "Gestão preventiva de risco psicossocial: identificação de fatores de risco, avaliação, implementação de medidas preventivas e monitoramento contínuo.",
    modulos: [
      {
        "titulo": "Introdução aos Riscos Psicossociais",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Introdução aos Riscos Psicossociais",
          "Podcast: Introdução aos Riscos Psicossociais",
          "Avaliação: Introdução aos Riscos Psicossociais|quiz"
        ]
      },
      {
        "titulo": "Legislação e Responsabilidade da Empresa",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Legislação e Responsabilidade da Empresa",
          "Podcast: Legislação e Responsabilidade da Empresa",
          "Avaliação: Legislação e Responsabilidade da Empresa|quiz"
        ]
      },
      {
        "titulo": "Identificação dos Riscos Psicossociais",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Identificação dos Riscos Psicossociais",
          "Podcast: Identificação dos Riscos Psicossociais",
          "Avaliação: Identificação dos Riscos Psicossociais|quiz"
        ]
      },
      {
        "titulo": "Avaliação e Classificação dos Riscos",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Avaliação e Classificação dos Riscos",
          "Podcast: Avaliação e Classificação dos Riscos",
          "Avaliação: Avaliação e Classificação dos Riscos|quiz"
        ]
      },
      {
        "titulo": "Implantação de Medidas Preventivas",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Implantação de Medidas Preventivas",
          "Podcast: Implantação de Medidas Preventivas",
          "Avaliação: Implantação de Medidas Preventivas|quiz"
        ]
      },
      {
        "titulo": "Monitoramento e Melhoria Contínua",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Monitoramento e Melhoria Contínua",
          "Podcast: Monitoramento e Melhoria Contínua",
          "Avaliação: Monitoramento e Melhoria Contínua|quiz"
        ]
      }
    ],
    nota: "Também disponível a versão pra operadores, colaboradores e público operacional (veja no catálogo).",
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/riscos-psicossociais-no-trabalho-para-gestores/?add-to-cart=124868",
    origemLink: "https://duosst.formasegead.com/curso/riscos-psicossociais-no-trabalho-para-gestores/",
    imagemHero: "assets/cursos/psico-gestores-hero.jpg",
    imagemConteudo: "assets/cursos/psico-gestores-conteudo.jpg",
    doresTitulo: "Agora é obrigação, não só boa prática",
    doresIntro: "A NR-01 atualizada colocou os riscos psicossociais dentro do Gerenciamento de Riscos Ocupacionais (GRO/PGR). Quem lidera precisa saber identificar e agir.",
    dores: [
      {
        "icone": "psicossocial",
        "titulo": "Afastamento por saúde mental cresce todo ano",
        "texto": "Ansiedade, depressão e burnout estão entre as principais causas de afastamento no Brasil. O custo cai na produtividade e na equipe."
      },
      {
        "icone": "pericia",
        "titulo": "Entrou no PGR, entrou na fiscalização",
        "texto": "Com a NR-01 atualizada, a empresa precisa mostrar que identificou, avaliou e trata os riscos psicossociais no seu programa de riscos."
      },
      {
        "icone": "treinamento",
        "titulo": "O gestor é a primeira linha",
        "texto": "Metas abusivas, assédio e sobrecarga começam na gestão do dia a dia. Liderança preparada evita o problema antes de virar processo."
      }
    ],
    beneficios: [
      "Entender o que são riscos psicossociais e o que a legislação exige",
      "Identificar fatores de risco na sua equipe",
      "Avaliar e classificar os riscos pra incluir no PGR",
      "Implantar medidas preventivas e acompanhar a melhoria contínua"
    ],
    faq: [
      {
        "pergunta": "Pra quem é esse curso?",
        "resposta": "Gestores, líderes, RH, profissionais de SST, contadores e responsáveis por compliance. Pra equipe operacional, existe a versão pra operadores."
      },
      {
        "pergunta": "Como é o formato?",
        "resposta": "6 módulos online, cada um com videoaula, podcast e avaliação. 4h no total."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

  "riscos-psicossociais-operadores": {
    codigo: "NR 01",
    titulo: "Riscos Psicossociais no Trabalho para Operadores",
    categoria: "Gestão e conformidade",
    icone: "psicossocial",
    formato: "EAD",
    cargaHoraria: "4h teórico",
    publico: "Maiores de 18 anos: operadores, colaboradores e público operacional em geral",
    resumo: "O que são riscos psicossociais, principais tipos, sinais de alerta, consequências e como prevenir e agir no dia a dia, na versão voltada pro time operacional.",
    modulos: [
      {
        "titulo": "O que são Riscos Psicossociais",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: O que são Riscos Psicossociais",
          "Podcast: O que são Riscos Psicossociais",
          "Avaliação: O que são Riscos Psicossociais|quiz"
        ]
      },
      {
        "titulo": "Principais Tipos de Riscos Psicossociais",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Principais Tipos de Riscos Psicossociais",
          "Podcast: Principais Tipos de Riscos Psicossociais",
          "Avaliação: Principais Tipos de Riscos Psicossociais|quiz"
        ]
      },
      {
        "titulo": "Sinais de Alerta",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Sinais de Alerta",
          "Podcast: Sinais de Alerta",
          "Avaliação: Sinais de Alerta|quiz"
        ]
      },
      {
        "titulo": "Consequências dos Riscos Psicossociais",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Consequências dos Riscos Psicossociais",
          "Podcast: Consequências dos Riscos Psicossociais",
          "Avaliação: Consequências dos Riscos Psicossociais|quiz"
        ]
      },
      {
        "titulo": "Como Prevenir no Dia a Dia",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: Como Prevenir no Dia a Dia",
          "Podcast: Como Prevenir no Dia a Dia",
          "Avaliação: Como Prevenir no Dia a Dia|quiz"
        ]
      },
      {
        "titulo": "O que Fazer em Situações de Risco",
        "aulas": 2,
        "avaliacoes": 1,
        "aulasDetalhe": [
          "Video: O que Fazer em Situações de Risco",
          "Podcast: O que Fazer em Situações de Risco",
          "Avaliação: O que Fazer em Situações de Risco|quiz"
        ]
      }
    ],
    preco: "R$ 199,00",
    linkCompra: "https://duosst.formasegead.com/curso/riscos-psicossociais-no-trabalho-para-operadores-colaboradores-e-publico-operacional/?add-to-cart=124870",
    origemLink: "https://duosst.formasegead.com/curso/riscos-psicossociais-no-trabalho-para-operadores-colaboradores-e-publico-operacional/",
    imagemHero: "assets/cursos/psico-operadores-hero.jpg",
    imagemConteudo: "assets/cursos/psico-operadores-conteudo.jpg",
    doresTitulo: "Saúde mental também é segurança do trabalho",
    doresIntro: "Estresse, pressão e conflito afetam a atenção. E falta de atenção na operação vira acidente.",
    dores: [
      {
        "icone": "psicossocial",
        "titulo": "Ninguém percebe até virar afastamento",
        "texto": "Os sinais de alerta aparecem antes: cansaço, irritação, isolamento. Quem sabe reconhecer consegue pedir ou oferecer ajuda a tempo."
      },
      {
        "icone": "pericia",
        "titulo": "A NR-01 exige que a empresa trate",
        "texto": "Os riscos psicossociais agora fazem parte do programa de riscos da empresa, e treinar a equipe é parte da prevenção."
      },
      {
        "icone": "treinamento",
        "titulo": "Saber o que fazer muda o desfecho",
        "texto": "Assédio, sobrecarga ou crise de um colega: o curso mostra o caminho certo pra agir e a quem recorrer."
      }
    ],
    beneficios: [
      "Entender o que são riscos psicossociais e os principais tipos",
      "Reconhecer sinais de alerta em você e nos colegas",
      "Adotar práticas de prevenção no dia a dia",
      "Saber o que fazer e a quem recorrer em situação de risco"
    ],
    faq: [
      {
        "pergunta": "Pra quem é esse curso?",
        "resposta": "Operadores, colaboradores e equipe operacional em geral. Pra lideranças e RH, existe a versão pra gestores."
      },
      {
        "pergunta": "Como é o formato?",
        "resposta": "6 módulos online, cada um com videoaula, podcast e avaliação. 4h no total."
      },
      {
        "pergunta": "Quando recebo o certificado?",
        "resposta": "Assim que concluir as aulas e as avaliações online. O certificado é emitido automaticamente com seus dados e vale em todo o território nacional."
      },
      {
        "pergunta": "Consigo matricular uma equipe inteira?",
        "resposta": "Sim. Pra turmas da sua empresa, fale com a DUO SST no WhatsApp: a gente organiza as matrículas e, quando houver parte prática, combina data e local."
      }
    ],
  },

};

const CATEGORIAS_ORDEM = [
  "Espaço confinado e trabalho em altura",
  "Operação de equipamentos e movimentação de carga",
  "Mineração e indústria de processo",
  "Gestão e conformidade",
];
