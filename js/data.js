// CAIBEM Presentation Data Model
window.CAIBEM_DATA = {
  institution: {
    name: "Casa Espírita CAIBEM",
    fullName: "Casa de Assistência à Infância Dr. Bezerra de Menezes",
    logo: "public/media/image3.png",
    heroBanner: "public/media/image1.png",
    mission: "Promover a assistência social, a evangelização infantil, o acolhimento comunitário e a renovação moral e espiritual.",
    gratitude: "Agradecemos profundamente a todos os voluntários, doadores e colaboradores que uniram esforços para tornar este trabalho uma realidade. Cada contribuição representa um gesto de amor."
  },
  
  stats: [
    { label: "Slides Apresentados", value: "31", icon: "presentation" },
    { label: "Fotos de Ações e Obras", value: "80+", icon: "image" },
    { label: "Projetos de Assistência", value: "5+", icon: "heart" },
    { label: "Melhorias de Segurança", value: "100%", icon: "shield-check" }
  ],

  activities2025: [
    {
      id: "livraria",
      title: "Livraria e Projetor",
      category: "Educação & Divulgação",
      description: "Infraestrutura dedicada ao estudo espírita, aquisição de obras edificantes e exibição de conteúdos pedagógicos e audiovisuais.",
      images: ["public/media/image4.jpeg", "public/media/image5.jpeg", "public/media/image6.jpeg"],
      badge: "Educação"
    },
    {
      id: "cine-pipoca",
      title: "Cine Pipoca",
      category: "Integração Infantil",
      description: "Sessões de cinema com pipoca para as crianças da comunidade, promovendo momentos de alegria, convivência e aprendizado de valores.",
      images: ["public/media/image7.jpeg", "public/media/image8.jpeg", "public/media/image9.png"],
      badge: "Comunidade"
    },
    {
      id: "evangelizacao",
      title: "Evangelização Espírita Infantil",
      category: "Formação Moral",
      description: "Encontros de ensino moral segundo os princípios espíritas e cristãos, cultivando o respeito, a empatia e o amor ao próximo.",
      images: ["public/media/image10.jpeg", "public/media/image11.jpeg"],
      badge: "Evangelização"
    },
    {
      id: "confraternizacao",
      title: "Confraternização CAIBEM",
      category: "União e Voluntariado",
      description: "Momentos especiais de união, celebração e integração entre voluntários, frequentadores e famílias atendidas pela Casa.",
      images: ["public/media/image12.jpeg", "public/media/image13.jpeg"],
      badge: "Fraternidade"
    },
    {
      id: "almoco-moradores",
      title: "Almoço para Moradores de Rua",
      category: "Ação Social",
      description: "Preparo e distribuição de refeições nutritivas com carinho, fraternidade e dignidade para pessoas em situação de rua.",
      images: ["public/media/image14.jpeg", "public/media/image15.jpeg", "public/media/image16.jpeg"],
      badge: "Assistência Social"
    }
  ],

  reforms2026: {
    title: "Obras, Reformas e Segurança (2025/2026)",
    subtitle: "Relatório de superação de desafios estruturais, estragos de tempestades, invasões e o plano de reforço da segurança e renovação da Casa.",
    
    phases: [
      {
        id: "desafios-iniciais",
        title: "1. Danos por Tempestades (Vidros & Salão)",
        type: "desafio",
        statusTag: "Situação Inicial",
        description: "Estragos provocados por fortes tempestades, resultando no quebramento dos vidros das janelas e evidenciando a necessidade de pintura e reforma do salão principal.",
        details: [
          "Janelas com vidros totalmente quebrados",
          "Salão interno necessitando de pintura completa e acabamento",
          "Exposição do espaço interno a intempéries"
        ],
        images: ["public/media/image18.jpeg", "public/media/image19.jpeg", "public/media/image20.jpeg"]
      },
      {
        id: "durante-pintura",
        title: "2. Execução da Reforma e Pintura do Salão",
        type: "obras",
        statusTag: "Em Andamento",
        description: "Mobilização de esforços para lixamento, preparação das paredes, pintura interna e restauração geral do salão de eventos e atendimentos.",
        details: [
          "Preparação de superfícies e emassamento",
          "Pintura renovada em tons claros e acolhedores",
          "Recuperação das paredes danificadas"
        ],
        images: [
          "public/media/image21.jpeg", "public/media/image22.jpeg", "public/media/image23.jpeg",
          "public/media/image24.jpeg", "public/media/image25.jpeg", "public/media/image26.jpeg",
          "public/media/image27.jpeg", "public/media/image28.jpeg", "public/media/image29.jpeg",
          "public/media/image30.jpeg", "public/media/image31.jpeg"
        ]
      },
      {
        id: "conclusao-salao-vidros",
        title: "3. Salão Renovado e Vidros Instalados",
        type: "sucesso",
        statusTag: "Concluído",
        description: "Resultado da pintura do salão e da substituição de todos os vidros avariados, proporcionando um ambiente iluminado, limpo e acolhedor.",
        details: [
          "Novo padrão visual com salão pintado",
          "Vidros novos devidamente assentados e vedados",
          "Conforto térmico e estético restabelecido"
        ],
        images: [
          "public/media/image32.jpeg", "public/media/image33.jpeg", "public/media/image34.jpeg",
          "public/media/image35.jpeg", "public/media/image36.jpeg", "public/media/image37.jpeg"
        ]
      },
      {
        id: "segunda-invasao",
        title: "4. Desafio: Segunda Invasão à Casa",
        type: "desafio",
        statusTag: "Incidente",
        description: "Arrombamento da porta de acesso ao salão inferior, quebra do vidro da cozinha e furto de torneiras e panelas essenciais para a preparação dos alimentos.",
        details: [
          "Porta inferior arrombada e fechadura violada",
          "Vidro da cozinha danificado",
          "Subtração de utensílios de cozinha e torneiras"
        ],
        images: ["public/media/image38.jpeg", "public/media/image39.jpeg", "public/media/image40.jpeg"]
      },
      {
        id: "resposta-invasao",
        title: "5. Resposta Imediata: Reposição e Limpeza",
        type: "obras",
        statusTag: "Ação Imediata",
        description: "Ação rápida para reposição imediata das torneiras, aquisição de novas panelas e restauração dos serviços essenciais da cozinha.",
        details: [
          "Reinstalação imediata de torneiras",
          "Reposição do enxoval de panelas de grande porte",
          "Limpeza e higienização da área atingida"
        ],
        images: ["public/media/image41.jpeg", "public/media/image42.jpeg", "public/media/image43.jpeg", "public/media/image44.jpeg", "public/media/image45.jpeg", "public/media/image46.jpeg", "public/media/image47.jpeg"]
      },
      {
        id: "reforco-seguranca",
        title: "6. Plano Abrangente de Segurança e Portas Reforçadas",
        type: "seguranca",
        statusTag: "Reforço Total",
        description: "Instalação de novas portas reforçadas, trincos industriais, fechaduras de alta resistência, reforma da porta da sala de palestras e blindagem dos acessos externos.",
        details: [
          "Nova porta de segurança metálica na entrada",
          "Fechaduras reforçadas e travas de segurança",
          "Recuperação e reforço da porta da Sala de Palestras",
          "Proteção das entradas com trincos e acoplamentos reforçados"
        ],
        images: [
          "public/media/image48.jpeg", "public/media/image49.jpeg", "public/media/image50.jpeg",
          "public/media/image51.jpeg", "public/media/image55.jpeg", "public/media/image56.jpeg",
          "public/media/image57.jpeg", "public/media/image58.jpeg", "public/media/image59.jpeg",
          "public/media/image60.jpeg", "public/media/image61.jpeg", "public/media/image62.jpeg",
          "public/media/image63.jpeg", "public/media/image71.jpeg", "public/media/image72.jpeg",
          "public/media/image73.jpeg", "public/media/image74.jpeg", "public/media/image75.jpeg"
        ]
      },
      {
        id: "grades-escadas-externas",
        title: "7. Grades de Proteção, Escadas e Corrimão",
        type: "seguranca",
        statusTag: "Proteção Externa",
        description: "Instalação de grades metálicas em todas as janelas expostas, reforma completa das escadas de acesso e instalação de corrimão para segurança física dos frequentadores.",
        details: [
          "Grades reforçadas nas janelas externas e basculantes",
          "Reforma dos degraus da escada principal",
          "Novo corrimão firmado e pintado para acessibilidade e proteção",
          "Fechamento perimetral de áreas de vulnerabilidade"
        ],
        images: [
          "public/media/image52.jpeg", "public/media/image53.jpeg", "public/media/image54.jpeg",
          "public/media/image64.jpeg", "public/media/image65.jpeg", "public/media/image66.jpeg",
          "public/media/image67.jpeg", "public/media/image68.jpeg", "public/media/image69.jpeg",
          "public/media/image70.jpeg", "public/media/image76.jpeg", "public/media/image77.jpeg"
        ]
      }
    ]
  },

  bingo: {
    title: "Nosso Bingo Beneficente",
    subtitle: "Uma contribuição fundamental para viabilizar as reformas, manter os projetos sociais e cobrir os custos estruturais da Casa CAIBEM.",
    description: "Através da união da comunidade, venda de cartelas e doação de prêmios por parceiros, o Bingo do CAIBEM tornou-se o pilar financeiro para a realização de todas as obras de segurança e pintura apresentadas.",
    images: ["public/media/image78.jpeg", "public/media/image79.jpeg"]
  },

  allSlides: [
    { slide: 1, title: "Atividades na Casa 2025", desc: "Acompanhe a evolução das reformas estruturais e das melhorias realizadas na Casa Espírita CAIBEM.", imgs: ["public/media/image1.png", "public/media/image2.png", "public/media/image3.png"] },
    { slide: 2, title: "Livraria e Projetor", desc: "Estrutura para divulgação doutrinária e estudo.", imgs: ["public/media/image4.jpeg", "public/media/image5.jpeg", "public/media/image6.jpeg"] },
    { slide: 3, title: "Cine Pipoca", desc: "Cinema comunitário infantil.", imgs: ["public/media/image7.jpeg", "public/media/image8.jpeg", "public/media/image9.png"] },
    { slide: 4, title: "Evangelização Espírita Infantil", desc: "Aulas e encontros para crianças.", imgs: ["public/media/image10.jpeg", "public/media/image11.jpeg"] },
    { slide: 5, title: "Confraternização CAIBEM", desc: "União entre voluntários e comunidade.", imgs: ["public/media/image12.jpeg", "public/media/image13.jpeg"] },
    { slide: 6, title: "Almoço para Moradores de Rua", desc: "Distribuição de marmitas e fraternidade.", imgs: ["public/media/image14.jpeg", "public/media/image15.jpeg", "public/media/image16.jpeg"] },
    { slide: 7, title: "Obras e Melhorias na Casa 2026", desc: "Relatório de reformas e segurança.", imgs: ["public/media/image1.png", "public/media/image2.png"] },
    { slide: 8, title: "Antes da Reforma: Vidros e Pintura do Salão", desc: "Vidros quebrados em consequência de tempestade e salão sem pintura.", imgs: ["public/media/image18.jpeg", "public/media/image19.jpeg", "public/media/image20.jpeg"] },
    { slide: 9, title: "Durante a Reforma (Parte 1)", desc: "Preparação das paredes e lixamento.", imgs: ["public/media/image21.jpeg", "public/media/image22.jpeg", "public/media/image23.jpeg"] },
    { slide: 10, title: "Durante a Reforma (Parte 2)", desc: "Pintura em andamento.", imgs: ["public/media/image24.jpeg", "public/media/image25.jpeg", "public/media/image26.jpeg"] },
    { slide: 11, title: "Durante a Reforma (Parte 3)", desc: "Finalização da pintura interna.", imgs: ["public/media/image27.jpeg", "public/media/image28.jpeg"] },
    { slide: 12, title: "Durante a Reforma (Parte 4)", desc: "Acabamentos das paredes do salão.", imgs: ["public/media/image29.jpeg", "public/media/image30.jpeg", "public/media/image31.jpeg"] },
    { slide: 13, title: "Após a Pintura e Reforma do Salão", desc: "Salão restaurado com novas cores.", imgs: ["public/media/image32.jpeg", "public/media/image33.jpeg", "public/media/image34.jpeg"] },
    { slide: 14, title: "Após a Reforma dos Vidros", desc: "Instalação de vidros novos nas janelas.", imgs: ["public/media/image35.jpeg", "public/media/image36.jpeg", "public/media/image37.jpeg"] },
    { slide: 15, title: "Segunda Invasão à Casa", desc: "Porta arrombada, vidros quebrados e roubo de torneiras/panelas.", imgs: ["public/media/image38.jpeg", "public/media/image39.jpeg", "public/media/image40.jpeg"] },
    { slide: 16, title: "Após a Segunda Invasão (Parte 1)", desc: "Avaliação e início de reparos.", imgs: ["public/media/image41.jpeg", "public/media/image42.jpeg", "public/media/image43.jpeg"] },
    { slide: 17, title: "Após a Segunda Invasão (Parte 2)", desc: "Trabalhos de restauração.", imgs: ["public/media/image44.jpeg", "public/media/image45.jpeg", "public/media/image46.jpeg"] },
    { slide: 18, title: "Reposição de Torneiras e Panelas", desc: "Reinstalamos torneiras e repusemos panelas.", imgs: ["public/media/image47.jpeg"] },
    { slide: 19, title: "Reforço da Segurança: Nova Porta", desc: "Instalação de porta metálica reforçada.", imgs: ["public/media/image48.jpeg", "public/media/image49.jpeg"] },
    { slide: 20, title: "Reforço nas Áreas de Acesso", desc: "Proteção adicional nos pontos vulneráveis.", imgs: ["public/media/image50.jpeg", "public/media/image51.jpeg"] },
    { slide: 21, title: "Grades e Proteção Externa", desc: "Gradeamento das janelas e portas externas.", imgs: ["public/media/image52.jpeg", "public/media/image53.jpeg", "public/media/image54.jpeg"] },
    { slide: 22, title: "Reforço da Segurança (Novos Acessos)", desc: "Adequação de portas de ferro com trincos duplos.", imgs: ["public/media/image55.jpeg", "public/media/image56.jpeg", "public/media/image57.jpeg"] },
    { slide: 23, title: "Recuperação da Porta da Sala de Palestras", desc: "Reforço e pintura da porta da sala de estudos.", imgs: ["public/media/image58.jpeg", "public/media/image59.jpeg", "public/media/image60.jpeg"] },
    { slide: 24, title: "Reforma e Reforço de Esquadrias", desc: "Manutenção pesada nas entradas secundárias.", imgs: ["public/media/image61.jpeg", "public/media/image62.jpeg", "public/media/image63.jpeg"] },
    { slide: 25, title: "Reforma das Escadas e Corrimão", desc: "Instalação de corrimão e pintura dos degraus.", imgs: ["public/media/image64.jpeg", "public/media/image65.jpeg", "public/media/image66.jpeg"] },
    { slide: 26, title: "Proteção de Acessos Externos", desc: "Gradeamento perimetral.", imgs: ["public/media/image67.jpeg", "public/media/image68.jpeg", "public/media/image69.jpeg", "public/media/image70.jpeg"] },
    { slide: 27, title: "Reforço das Entradas e Acabamento", desc: "Novos acabamentos e vedações de segurança.", imgs: ["public/media/image71.jpeg", "public/media/image72.jpeg", "public/media/image73.jpeg"] },
    { slide: 28, title: "Porta de Entrada com Fechadura Especial", desc: "Reforço e nova fechadura reforçada.", imgs: ["public/media/image74.jpeg", "public/media/image75.jpeg"] },
    { slide: 29, title: "Reforço das Janelas e Grades", desc: "Proteção total das janelas externas.", imgs: ["public/media/image76.jpeg", "public/media/image77.jpeg"] },
    { slide: 30, title: "Nosso Bingo Beneficente", desc: "Evento de arrecadação fundamental para as obras.", imgs: ["public/media/image78.jpeg", "public/media/image79.jpeg"] },
    { slide: 31, title: "Nossa Gratidão", desc: "Agradecemos profundamente a todos os voluntários e doadores por tornarem esta obra uma realidade.", imgs: ["public/media/image1.png", "public/media/image80.png", "public/media/image81.png"] }
  ]
};
