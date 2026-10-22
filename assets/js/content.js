/*
 * CONTENUS DU PORTFOLIO — fichier unique à modifier.
 *
 * Chaque réalisation relie : une attente citée de l'annonce, mon expérience
 * déclarée, et la démonstration. main.js ne fait qu'afficher ces données.
 *
 * Statuts : "disponible", "proposition", "en-preparation", "a-valider".
 *
 * Remplacer un emplacement par le livrable définitif :
 *   - Newsletter (id "newsletter") : renseigner media.apercu (image) et
 *     lien (fichier HTML ou PDF), puis passer statut à "disponible".
 *   - Vidéo (id "video") : renseigner media.fichier (ex. "assets/video/metiers.mp4"),
 *     media.sousTitres (.vtt) et media.affiche, puis passer statut à "disponible".
 * Tant que ces champs valent null, l'emplacement reste « en préparation »,
 * sans lecteur ni bouton inactif.
 */
window.PORTFOLIO = {
  STATUTS: {
    "disponible": { libelle: "Disponible", icone: "check" },
    "proposition": { libelle: "Texte proposé", icone: "pen" },
    "en-preparation": { libelle: "En préparation", icone: "clock" },
    "a-valider": { libelle: "Angle à valider", icone: "search" }
  },

  meta: {
    autrice: "Caroline Camilleri",
    role: "Communication digitale & éditoriale",
    mention:
      "Proposition exploratoire réalisée dans le cadre de ma candidature. Campagne non commandée et non diffusée.",
    ia:
      "Visuels et textes produits avec l’aide de l’IA, sous ma direction éditoriale et visuelle. Les personnes représentées sont des images générées.",
    logo: {
      image: "assets/img/valhor-logo",
      alt: "VALHOR, toutes les forces du végétal",
      mention:
        "Le logo VALHOR est la propriété de VALHOR. Il est reproduit uniquement pour identifier l’organisation visée par cette candidature ; ce site n’est ni édité ni validé par VALHOR."
    }
  },

  navigation: [
    { id: "realisations", libelle: "Réalisations" },
    { id: "demarche", libelle: "Démarche" }
  ],

  intro: {
    surtitre: "Candidature · Chargé de projet Communication digitale et éditoriale",
    titre: "Valoriser les métiers du végétal, du message aux contenus",
    texte:
      "Pour accompagner ma candidature chez VALHOR, j’ai imaginé une campagne exploratoire sur l’attractivité des métiers, déclinée en cinq réalisations qui répondent aux missions du poste.",
    profil:
      "Cheffe de projet digital, j’ai une expérience en communication digitale et institutionnelle au Marché International de Rungis (SEMMARIS).",
    bouton: "Découvrir les réalisations"
  },

  realisations: {
    titre: "Cinq réalisations pour illustrer les missions du poste",
    intro:
      "Un même message, « Derrière chaque espace végétalisé, des métiers à découvrir », décliné par canal. Public visé : les personnes en orientation ou en reconversion ; relais : la filière, la formation, les partenaires institutionnels.",
    projets: [
      {
        id: "carrousel",
        nom: "Publication LinkedIn",
        titre: "Faire découvrir trois métiers sur LinkedIn",
        texte:
          "Un texte d’accroche et un carrousel de cinq visuels : un message simple, des métiers incarnés, une lecture progressive.",
        statut: "disponible",
        statutLibelle: "Visuels disponibles · texte proposé",
        media: {
          type: "publication",
          auteur: "Caroline Camilleri",
          sousTitre: "Proposition de publication · non diffusée",
          titreDocument: "Les métiers du végétal",
          paragraphes: [
            "Derrière les espaces végétalisés que nous côtoyons, il y a des femmes, des hommes et des savoir-faire.",
            "Faire grandir les plantes, composer avec les fleurs, concevoir et entretenir les espaces extérieurs : les métiers du végétal ouvrent des voies variées.",
            "Dans ce carrousel, découvrez trois univers : l’horticulture, la fleuristerie et le paysage.",
            "Quel savoir-faire aimeriez-vous découvrir davantage ?"
          ],
          hashtags: ["#MétiersDuVégétal", "#Horticulture", "#Fleuristerie", "#Paysage"]
        },
        attente:
          "« Concevoir, planifier et publier des contenus adaptés aux différentes plateformes, notamment LinkedIn » ; « concevoir ou adapter des visuels » ; « favoriser l’engagement des audiences ».",
        experience:
          "Animation des réseaux sociaux du Marché de Rungis et développement de ses communautés, de 1 000 à plus de 100 000 abonnés.",
        tags: ["Social media", "LinkedIn", "Rédaction", "Direction visuelle", "Production assistée par IA"],
        note: "Sert l’ambition « attractivité des métiers » du projet Horizon 2030. Visuels générés avec l’IA sous ma direction ; maquette sans compte officiel ni réactions."
      },
      {
        id: "newsletter",
        nom: "Newsletter",
        titre: "Donner du contexte et orienter vers les contenus",
        texte:
          "Objet : « Les métiers du végétal : des savoir-faire à découvrir ». Une introduction courte, trois entrées métiers, un appel vers les formations et ressources métiers.",
        statut: "en-preparation",
        mentionStatut: "Maquette en préparation",
        media: { type: "newsletter", apercu: null },
        lien: null,
        attente: "« Coordonner la production, la validation et la diffusion de la newsletter VALHOR Info ».",
        experience: "Conception et coordination de newsletters.",
        tags: ["Newsletter", "Structuration", "Parcours de lecture"],
        note: "Structure présentée ; la maquette complète sera ajoutée ici."
      },
      {
        id: "video",
        nom: "Vidéo courte",
        titre: "Susciter la curiosité en 40 secondes",
        texte:
          "Un script en trois temps — accroche, trois métiers, question finale — qui reprend les codes de la vidéo institutionnelle de VALHOR : ouverture en anaphore, plans courts centrés sur les gestes, mots-clés affichés au rythme de la voix.",
        statut: "proposition",
        statutLibelle: "Script proposé · vidéo en préparation",
        // Découpage plan par plan. Quand la vidéo existe, renseigner fichier,
        // sousTitres, affiche et description : le lecteur remplace le découpage.
        media: {
          type: "video",
          fichier: null,
          sousTitres: null,
          affiche: null,
          description: null,
          format: "Format carré pour le fil LinkedIn · sous-titres incrustés · musique sans paroles",
          decoupage: [
            { tc: "0–4 s", image: "Parc urbain fleuri, puis écran partagé boutique / serre", voix: "Derrière ce massif, derrière ce bouquet, derrière cette serre…", ecran: null },
            { tc: "4–9 s", image: "Gros plans sur des mains : terre, tiges, outils", voix: "… il y a des mains, des gestes, des métiers.", ecran: "Des métiers à découvrir" },
            { tc: "9–15 s", image: "Semis et repiquage sous serre", voix: "Faire naître et grandir le végétal : c’est l’horticulture.", ecran: "Horticulture" },
            { tc: "15–21 s", image: "Composition d’un bouquet, conseil en boutique", voix: "Choisir, composer, conseiller : c’est la fleuristerie.", ecran: "Fleuristerie" },
            { tc: "21–28 s", image: "Croquis d’aménagement, puis plantation d’un massif", voix: "Imaginer, aménager, entretenir : c’est le paysage.", ecran: "Paysage" },
            { tc: "28–33 s", image: "Mosaïque des trois métiers en simultané", voix: "Trois univers pour travailler avec le vivant.", ecran: "Trois univers" },
            { tc: "33–40 s", image: "Mains tenant une jeune pousse, puis écran vert final", voix: "Et si votre avenir prenait racine dans le végétal ? Explorez les métiers et les formations.", ecran: "Explorez les métiers et les formations" }
          ]
        },
        attente: "« Concevoir ou adapter des visuels, vidéos, infographies et formats multimédias » ; « veiller […] au respect de l’identité de VALHOR ».",
        experience: null,
        tags: ["Script", "Voix off", "Montage rythmé", "Sous-titrage", "Veille"],
        note: "Inspiré des principes de la vidéo « VALHOR, toutes les forces du végétal », sans en reprendre les images, la musique ni la signature."
      },
      {
        id: "article",
        nom: "Article web",
        titre: "Approfondir les métiers sur le site",
        texte:
          "Missions, environnements de travail, compétences mobilisées et accès aux formations : le format long qui prolonge les formats courts.",
        statut: "a-valider",
        media: {
          type: "article",
          sujet: "Horticulture, fleuristerie, paysage : trois univers pour travailler avec le vivant"
        },
        attente:
          "« Rédiger et produire des contenus adaptés aux différents supports : sites internet, réseaux sociaux, newsletters ».",
        experience: "Animation de sites et production de contenus éditoriaux.",
        tags: ["Rédaction web", "Angle éditorial", "Vérification des sources"],
        note: "Angle proposé, à documenter et à valider avant publication."
      },
      {
        id: "pilotage",
        nom: "Planification et mesure",
        titre: "Planifier la diffusion et suivre les résultats",
        texte:
          "Un calendrier sur deux semaines, des indicateurs par canal et un test sponsorisé comparant deux accroches.",
        statut: "proposition",
        statutLibelle: "Proposition",
        media: {
          type: "calendrier",
          lignes: [
            { periode: "S1 · mardi", canal: "LinkedIn", format: "Carrousel + texte", statut: "disponible" },
            { periode: "S1 · jeudi", canal: "Site web", format: "Article", statut: "a-valider" },
            { periode: "S2 · mardi", canal: "Newsletter", format: "Intro, 3 métiers, appel", statut: "en-preparation" },
            { periode: "S2 · jeudi", canal: "LinkedIn", format: "Vidéo sous-titrée", statut: "en-preparation" },
            { periode: "Fin S2", canal: "Tous", format: "Bilan et ajustements", statut: "en-preparation" }
          ]
        },
        indicateurs: [
          "LinkedIn : impressions, interactions, engagement, clics",
          "Newsletter : délivrabilité, clics, désabonnements",
          "Vidéo : vues, durée de visionnage, taux de complétion",
          "Article : visites, clics vers les ressources métiers"
        ],
        attente:
          "« Contribuer à l’élaboration et au suivi du calendrier éditorial » ; « suivre et analyser les audiences » ; « gérer et optimiser les campagnes de sponsorisation ».",
        experience: "Analyse des audiences et des performances, et amélioration continue des contenus.",
        tags: ["Calendrier éditorial", "Indicateurs", "Sponsorisation"],
        note: "Dates indicatives. Aucun résultat présenté, aucun budget engagé : la campagne n’a pas été diffusée."
      }
    ]
  },

  // Carrousel : ordre d'affichage = ordre du tableau (numéros 01 à 05 des visuels).
  carrousel: [
    {
      numero: "01",
      role: "Couverture",
      image: "assets/img/carrousel/valhor-01-couverture",
      alt:
        "Page 1, couverture. Titre : Derrière chaque espace végétalisé, des métiers à découvrir. Photo d’une professionnelle de dos, portant un plateau de plantes fleuries dans une pépinière.",
      transcription: {
        titre: "Derrière chaque espace végétalisé, des métiers à découvrir.",
        texte: ["Horticulture, fleuristerie, paysage : découvrez trois univers professionnels du végétal."]
      }
    },
    {
      numero: "02",
      role: "Horticulture",
      image: "assets/img/carrousel/valhor-02-horticulture",
      alt:
        "Page 2, horticulture. Titre : Faire naître et grandir le végétal. Photo d’un jeune horticulteur travaillant des plants sous une serre.",
      transcription: {
        titre: "Horticulture — Faire naître et grandir le végétal",
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
        "Page 3, fleuristerie. Titre : Donner forme aux émotions. Photo d’une fleuriste composant un bouquet de roses et de feuillages dans sa boutique.",
      transcription: {
        titre: "Fleuristerie — Donner forme aux émotions",
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
        "Page 4, paysage. Titre : Imaginer, aménager, entretenir. Photo d’un paysagiste casqué entretenant un massif fleuri avec une débroussailleuse.",
      transcription: {
        titre: "Paysage — Imaginer, aménager, entretenir",
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
        "Page 5, conclusion. Titre : Et si votre avenir prenait racine dans le végétal ? Photo d’un parc urbain fleuri avec un banc, des arbres et des immeubles en arrière-plan.",
      transcription: {
        titre: "Et si votre avenir prenait racine dans le végétal ?",
        texte: [
          "Production, création, aménagement : plusieurs voies pour travailler avec le vivant.",
          "Explorez les métiers et les formations pour trouver celle qui vous correspond."
        ]
      }
    }
  ],

  demarche: {
    titre: "Coordonner, du brief à l’analyse",
    intro:
      "Pour répondre à l’attente « préparer les briefs, suivre les livrables, les délais et les budgets », je m’appuie sur ma pratique de coordination des métiers, des contributeurs et des prestataires au Marché de Rungis.",
    etapes: [
      { titre: "Brief", texte: "Objectif, publics, message, canaux, calendrier." },
      { titre: "Collecte et vérification", texte: "Sources de la filière, données métiers, formations." },
      { titre: "Rédaction et création", texte: "Textes, visuels, déclinaisons par canal." },
      { titre: "Validation", texte: "Relecture métier et communication." },
      { titre: "Diffusion", texte: "Publication, programmation, relais." },
      { titre: "Analyse", texte: "Indicateurs et ajustements." }
    ],
    note: "Méthode proposée, et non description du fonctionnement interne de VALHOR.",
    contribution:
      "Ma contribution à cette campagne : conception éditoriale, rédaction, choix des formats, direction visuelle et production assistée par IA."
  }
};
