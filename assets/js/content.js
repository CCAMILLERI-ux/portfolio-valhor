/*
 * CONTENUS DU PORTFOLIO — fichier unique à modifier.
 *
 * Tous les textes, chemins d'images et statuts des livrables sont ici.
 * Le fichier main.js se contente de les afficher.
 *
 * Statuts disponibles (voir STATUTS ci-dessous) :
 *   "disponible", "proposition", "en-preparation", "a-valider", "a-produire"
 *
 * Remplacer un emplacement par le livrable définitif :
 *   - Newsletter : renseigner newsletter.apercus.ordinateur / .mobile
 *     (chemins d'images) et newsletter.lienVersionComplete (chemin d'un
 *     fichier HTML ou PDF), puis passer newsletter.statut à "disponible".
 *   - Vidéo : renseigner video.fichier (ex. "assets/video/metiers.mp4"),
 *     video.sousTitres (fichier .vtt), video.affiche (image), puis passer
 *     video.statut à "disponible".
 * Tant que ces champs valent null, un emplacement « en préparation » est
 * affiché, sans lecteur ni bouton inactif.
 */
window.PORTFOLIO = {
  STATUTS: {
    "disponible": { libelle: "Disponible", icone: "check" },
    "proposition": { libelle: "Proposition de texte", icone: "pen" },
    "en-preparation": { libelle: "En préparation", icone: "clock" },
    "a-valider": { libelle: "Angle à documenter et valider", icone: "search" },
    "a-produire": { libelle: "À produire", icone: "clock" }
  },

  meta: {
    autrice: "Caroline Camilleri",
    role: "Communication digitale & éditoriale",
    mention:
      "Proposition exploratoire réalisée dans le cadre de ma candidature. Campagne non commandée et non diffusée.",
    ia:
      "Les visuels et contenus ont été produits avec l’aide de l’IA, sous ma direction éditoriale et visuelle. Les personnes représentées sont des images générées, et non des professionnels réels."
  },

  navigation: [
    { id: "demarche", libelle: "La démarche" },
    { id: "realisations", libelle: "Les réalisations" },
    { id: "organisation", libelle: "L’organisation" },
    { id: "mesure", libelle: "La mesure" },
    { id: "profil", libelle: "Mon profil" }
  ],

  intro: {
    surtitre: "Candidature · Chargé de projet Communication digitale et éditoriale · VALHOR",
    titre: "Valoriser les métiers du végétal, du message aux contenus",
    texte:
      "Une campagne exploratoire imaginée pour VALHOR, pour illustrer ma manière de concevoir, produire et coordonner une communication digitale et éditoriale.",
    signature: "Caroline Camilleri — Communication digitale & éditoriale",
    bouton: "Découvrir les réalisations",
    campagne: "Derrière chaque espace végétalisé, des métiers à découvrir."
  },

  demarche: {
    titre: "La démarche",
    chapo:
      "Un même sujet, décliné en plusieurs formats adaptés aux usages et aux publics : chaque canal joue un rôle précis dans le parcours, de la curiosité à l’approfondissement.",
    brief: [
      {
        terme: "L’enjeu",
        texte:
          "Rendre visibles les personnes et les savoir-faire qui se trouvent derrière un jardin, un bouquet ou un espace vert, pour donner envie de découvrir les métiers qui les rendent possibles."
      },
      {
        terme: "L’objectif proposé",
        texte: "Contribuer à l’attractivité des métiers du végétal."
      },
      {
        terme: "Les publics",
        texte:
          "Public principal : les personnes qui explorent une orientation ou une reconversion. Publics relais : les professionnels de la filière, les organismes de formation et les partenaires institutionnels."
      },
      {
        terme: "Le message central",
        texte: "« Derrière chaque espace végétalisé, des métiers à découvrir. »"
      }
    ],
    canaux: [
      { canal: "LinkedIn", role: "Valoriser les métiers et mobiliser les relais professionnels." },
      { canal: "Newsletter", role: "Donner du contexte et orienter vers les contenus." },
      { canal: "Vidéo courte", role: "Susciter la curiosité." },
      { canal: "Article web", role: "Approfondir le sujet." }
    ],
    univers: [
      {
        nom: "Horticulture",
        accroche: "Faire naître et grandir le végétal",
        image: "assets/img/photos/horticulture.webp",
        alt: "Une horticultrice repique un jeune plant sous une serre de production."
      },
      {
        nom: "Fleuristerie",
        accroche: "Donner forme aux émotions",
        image: "assets/img/photos/fleuristerie.webp",
        alt: "Une fleuriste compose un bouquet de roses, de feuillages et de fleurs blanches dans sa boutique."
      },
      {
        nom: "Paysage",
        accroche: "Imaginer, aménager, entretenir",
        image: "assets/img/photos/paysage.webp",
        alt: "Une paysagiste plante des vivaces dans un massif d’un espace public."
      }
    ]
  },

  realisations: {
    titre: "Les réalisations",
    chapo:
      "Cinq déclinaisons d’un même sujet. Le carrousel est finalisé ; les autres formats sont présentés à leur stade réel d’avancement.",

    carrousel: {
      id: "carrousel",
      lettre: "A",
      titre: "Carrousel LinkedIn",
      statut: "disponible",
      explication:
        "Un format de découverte pensé pour associer un message simple, des métiers incarnés et une lecture progressive.",
      details: [
        "5 pages · format portrait 4:5",
        "Couverture, trois métiers, conclusion",
        "Une accroche personnelle par métier"
      ],
      // Ordre d'affichage = ordre de ce tableau (numéros 01 à 05 des visuels).
      diapositives: [
        {
          numero: "01",
          role: "Couverture",
          image: "assets/img/carrousel/valhor-01-couverture",
          alt:
            "Page 1, couverture. Titre : Derrière chaque espace végétalisé, des métiers à découvrir. Photo d’une jardinière plantant des fleurs dans un massif, un collègue travaillant en arrière-plan.",
          transcription: {
            surtitre: "Les métiers du végétal",
            titre: "Derrière chaque espace végétalisé, des métiers à découvrir.",
            texte: ["Horticulture, fleuristerie, paysage : trois univers professionnels du végétal."]
          }
        },
        {
          numero: "02",
          role: "Horticulture",
          image: "assets/img/carrousel/valhor-02-horticulture",
          alt:
            "Page 2, horticulture. Titre : Faire naître et grandir le végétal. Photo d’une horticultrice tenant un jeune plant en motte dans une serre.",
          transcription: {
            surtitre: "Les métiers du végétal — Horticulture",
            titre: "Faire naître et grandir le végétal",
            texte: [
              "Multiplier les plantes, accompagner leur croissance, observer leur développement : les métiers de l’horticulture associent savoir-faire, précision et connaissance du vivant.",
              "Votre goût du concret peut y prendre racine."
            ]
          }
        },
        {
          numero: "03",
          role: "Fleuristerie",
          image: "assets/img/carrousel/valhor-03-fleuristerie",
          alt:
            "Page 3, fleuristerie. Titre : Donner forme aux émotions. Photo d’une fleuriste ajustant un bouquet dans un atelier fleuri.",
          transcription: {
            surtitre: "Les métiers du végétal — Fleuristerie",
            titre: "Donner forme aux émotions",
            texte: [
              "Choisir les fleurs et les feuillages, composer, conseiller : la fleuristerie associe créativité, gestes techniques et relation client.",
              "Votre sens artistique peut s’y épanouir."
            ]
          }
        },
        {
          numero: "04",
          role: "Paysage",
          image: "assets/img/carrousel/valhor-04-paysage",
          alt:
            "Page 4, paysage. Titre : Imaginer, aménager, entretenir. Photo d’une paysagiste plantant dans un massif d’un espace urbain.",
          transcription: {
            surtitre: "Les métiers du végétal — Paysage",
            titre: "Imaginer, aménager, entretenir",
            texte: [
              "Les métiers du paysage donnent vie aux espaces extérieurs et les accompagnent au fil des saisons. Ils mobilisent des compétences de conception, de réalisation et d’entretien.",
              "Votre envie d’agir peut y trouver sa place."
            ]
          }
        },
        {
          numero: "05",
          role: "Conclusion",
          image: "assets/img/carrousel/valhor-05-conclusion",
          alt:
            "Page 5, conclusion. Titre : Et si votre avenir prenait racine dans le végétal ? Photo de mains tenant de la terre et de jeunes pousses.",
          transcription: {
            surtitre: "Les métiers du végétal",
            titre: "Et si votre avenir prenait racine dans le végétal ?",
            texte: [
              "Production, création, aménagement : plusieurs voies pour travailler avec le vivant.",
              "Explorez les métiers et les formations pour trouver celle qui vous correspond."
            ]
          }
        }
      ],
      mentionVisuels: "Chaque page porte la mention « Caroline Camilleri · Proposition non officielle »."
    },

    publication: {
      id: "publication",
      lettre: "B",
      titre: "Publication LinkedIn",
      statut: "proposition",
      explication:
        "Le texte d’accompagnement du carrousel : une ouverture incarnée, les trois univers, une question pour inviter à la conversation.",
      auteurMaquette: "Texte proposé par Caroline Camilleri",
      paragraphes: [
        "Derrière les espaces végétalisés que nous côtoyons, il y a des femmes, des hommes et des savoir-faire.",
        "Faire grandir les plantes, composer avec les fleurs, concevoir et entretenir les espaces extérieurs : les métiers du végétal ouvrent des voies variées.",
        "Dans ce carrousel, découvrez trois univers : l’horticulture, la fleuristerie et le paysage.",
        "Quel savoir-faire aimeriez-vous découvrir davantage ?"
      ],
      hashtags: ["#MétiersDuVégétal", "#Horticulture", "#Fleuristerie", "#Paysage"],
      note: "Maquette sobre : ni compte officiel, ni commentaires, ni indicateurs d’engagement."
    },

    newsletter: {
      id: "newsletter",
      lettre: "C",
      titre: "Newsletter",
      statut: "en-preparation",
      mentionStatut: "Maquette en préparation",
      objet: "Les métiers du végétal : des savoir-faire à découvrir",
      explication:
        "La newsletter donne du contexte et oriente vers les contenus : elle relie le carrousel, la vidéo et l’article dans un parcours de lecture.",
      structure: [
        { bloc: "Introduction courte", detail: "Le message de campagne et ce que le lecteur va découvrir." },
        { bloc: "Horticulture", detail: "Une entrée métier : un geste, un savoir-faire, un lien vers l’article." },
        { bloc: "Fleuristerie", detail: "Une entrée métier : un geste, un savoir-faire, un lien vers l’article." },
        { bloc: "Paysage", detail: "Une entrée métier : un geste, un savoir-faire, un lien vers l’article." },
        { bloc: "Appel à l’action", detail: "Découvrir les formations et les ressources métiers." }
      ],
      // À renseigner quand la maquette sera prête (sinon laisser null).
      apercus: { ordinateur: null, mobile: null },
      lienVersionComplete: null
    },

    video: {
      id: "video",
      lettre: "D",
      titre: "Vidéo courte",
      statut: "en-preparation",
      mentionStatut: "Vidéo en préparation",
      duree: "30 à 45 secondes",
      explication: "Un format court pour susciter la curiosité, pensé pour une lecture avec ou sans le son.",
      composantes: [
        "Images des trois métiers, centrées sur les gestes",
        "Voix off",
        "Sous-titres intégrés",
        "Écran de conclusion vers les ressources métiers"
      ],
      // À renseigner quand la vidéo sera prête (sinon laisser null).
      fichier: null,
      sousTitres: null,
      affiche: null,
      descriptionAccessible: null
    },

    article: {
      id: "article",
      lettre: "E",
      titre: "Article web",
      statut: "a-valider",
      sujet: "Horticulture, fleuristerie, paysage : trois univers pour travailler avec le vivant",
      explication:
        "Ce contenu permettra d’approfondir les métiers évoqués dans les formats courts : missions, environnements de travail, compétences mobilisées et chemins d’accès.",
      pistes: [
        "Un portrait de chaque univers, à partir de gestes concrets",
        "Les qualités et les compétences recherchées",
        "Des repères pour s’orienter vers les formations et ressources métiers"
      ],
      avertissement:
        "Angle proposé, à documenter auprès des sources de la filière et à valider avant toute publication."
    }
  },

  organisation: {
    titre: "L’organisation éditoriale",
    chapo:
      "Un calendrier illustratif sur deux semaines, pour montrer comment les formats s’enchaînent et se répondent.",
    avertissement: "Proposition de calendrier : les dates sont indicatives et à ajuster avec l’équipe.",
    colonnes: ["Période", "Canal", "Sujet", "Format", "Public", "Statut de préparation"],
    lignes: [
      {
        periode: "Semaine 1 · mardi",
        canal: "LinkedIn",
        sujet: "Derrière chaque espace végétalisé, des métiers à découvrir",
        format: "Carrousel 5 pages",
        public: "Orientation et reconversion ; relais professionnels",
        statut: "disponible"
      },
      {
        periode: "Semaine 1 · mardi",
        canal: "LinkedIn",
        sujet: "Texte d’accompagnement du carrousel",
        format: "Texte de publication",
        public: "Orientation et reconversion ; relais professionnels",
        statut: "proposition"
      },
      {
        periode: "Semaine 1 · jeudi",
        canal: "Site web",
        sujet: "Horticulture, fleuristerie, paysage : trois univers pour travailler avec le vivant",
        format: "Article de fond",
        public: "Orientation et reconversion",
        statut: "a-produire"
      },
      {
        periode: "Semaine 2 · mardi",
        canal: "Newsletter",
        sujet: "Les métiers du végétal : des savoir-faire à découvrir",
        format: "Newsletter (intro, 3 métiers, appel à l’action)",
        public: "Abonnés ; professionnels et organismes de formation",
        statut: "a-produire"
      },
      {
        periode: "Semaine 2 · jeudi",
        canal: "LinkedIn",
        sujet: "Les gestes des métiers du végétal",
        format: "Vidéo 30 à 45 s sous-titrée",
        public: "Orientation et reconversion",
        statut: "a-produire"
      },
      {
        periode: "Fin de semaine 2",
        canal: "Tous canaux",
        sujet: "Premier bilan de la campagne",
        format: "Note d’analyse interne",
        public: "Équipe communication",
        statut: "a-produire"
      }
    ],
    circuit: {
      titre: "Circuit de validation proposé",
      avertissement:
        "Méthode proposée à partir de mes pratiques, et non description du fonctionnement interne de VALHOR, que je ne connais pas.",
      etapes: [
        { etape: "Brief", detail: "Objectif, publics, message, canaux, calendrier." },
        { etape: "Collecte et vérification des informations", detail: "Sources de la filière, données métiers, formations." },
        { etape: "Rédaction et création", detail: "Textes, visuels, déclinaisons par canal." },
        { etape: "Validation métier et communication", detail: "Exactitude du contenu, ton, conformité." },
        { etape: "Diffusion", detail: "Publication, programmation, relais." },
        { etape: "Analyse", detail: "Lecture des indicateurs et pistes d’ajustement." }
      ]
    }
  },

  mesure: {
    titre: "La mesure et la sponsorisation",
    chapo:
      "Les indicateurs que je suivrais pour piloter la campagne. Aucun résultat n’est présenté : la campagne n’a pas été diffusée.",
    indicateurs: [
      {
        canal: "Carrousel et publications LinkedIn",
        kpis: ["Impressions", "Interactions", "Taux d’engagement", "Clics vers une ressource"]
      },
      { canal: "Newsletter", kpis: ["Délivrabilité", "Clics", "Désabonnements"] },
      { canal: "Vidéo", kpis: ["Vues", "Durée de visionnage", "Taux de complétion"] },
      {
        canal: "Article web",
        kpis: ["Visites", "Clics vers les ressources métiers et formations"]
      }
    ],
    sponsorisation: {
      titre: "Proposition de sponsorisation",
      etapes: [
        { terme: "Objectif", texte: "À préciser avec l’équipe." },
        { terme: "Audience", texte: "À définir selon les publics retenus." },
        { terme: "Test", texte: "Deux accroches comparées sur un même visuel." },
        { terme: "Pilotage", texte: "Analyse des performances avant toute réallocation du budget." }
      ],
      avertissement: "Aucun budget n’est engagé. Aucun résultat n’est garanti."
    }
  },

  profil: {
    titre: "Mon profil et ma contribution",
    presentation:
      "Cheffe de projet digital, j’ai une expérience en communication digitale et institutionnelle au Marché International de Rungis (SEMMARIS). Mon parcours associe animation de sites, contenus éditoriaux, newsletters, réseaux sociaux, coordination des métiers et des prestataires, et analyse des performances.",
    chiffre: {
      valeur: "1 000 → 100 000+",
      valeurLue: "De 1 000 à plus de 100 000",
      libelle: "abonnés : l’évolution des communautés de Rungis, à laquelle j’ai contribué."
    },
    correspondances: [
      {
        experience: "Communication institutionnelle et professionnelle au Marché de Rungis",
        besoin: "S’adresser à la fois aux professionnels d’une filière, aux partenaires institutionnels et au grand public."
      },
      {
        experience: "Animation de sites, newsletters et réseaux sociaux",
        besoin: "Rédiger et produire des contenus web, sociaux et éditoriaux ; coordonner les newsletters."
      },
      {
        experience: "Développement des communautés",
        besoin: "Concevoir et mettre en œuvre le plan social media, notamment sur LinkedIn."
      },
      {
        experience: "Coordination de contributeurs, de métiers et de prestataires",
        besoin: "Coordonner les prestataires et les interlocuteurs internes."
      },
      {
        experience: "Analyse des audiences et amélioration continue",
        besoin: "Suivre les performances et piloter des campagnes sponsorisées."
      }
    ],
    contribution: {
      titre: "Ma contribution sur cette campagne",
      texte:
        "Conception éditoriale, rédaction, choix des formats, direction visuelle et production assistée par IA."
    },
    contact: "Mes coordonnées et mon CV figurent dans mon dossier de candidature."
  }
};
