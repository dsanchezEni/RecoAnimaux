// ============================================
// BASE DE QUESTIONS POUR LE BAC PRO TCVA
// Organisées par blocs de compétences
// ============================================

const QUESTIONS_TCVA = [
    // BLOC 1: Construire son raisonnement autour des enjeux du monde actuel
    {
        id: 1,
        bloc: "BC01",
        bloc_name: "Construire son raisonnement autour des enjeux du monde actuel",
        question: "Quelle démarche permet d'interpréter des faits de manière objective ?",
        options: [
            "La démarche intuitive",
            "La démarche scientifique",
            "La démarche émotionnelle",
            "La démarche aléatoire"
        ],
        correct: 1,
        explanation: "La démarche scientifique permet d'interpréter des faits de manière objective en utilisant des méthodes rigoureuses, des observations, des hypothèses et des expérimentations.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 2,
        bloc: "BC01",
        bloc_name: "Construire son raisonnement autour des enjeux du monde actuel",
        question: "Qu'est-ce que la modélisation d'un phénomène ?",
        options: [
            "Créer un modèle réduit du phénomène",
            "Représenter un phénomène complexe par un schéma simplifié pour mieux le comprendre",
            "Ignorer le phénomène",
            "Dessiner le phénomène"
        ],
        correct: 1,
        explanation: "La modélisation consiste à représenter un phénomène complexe par un schéma, une équation ou un modèle simplifié afin de mieux l'étudier et le comprendre.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 3,
        bloc: "BC01",
        bloc_name: "Construire son raisonnement autour des enjeux du monde actuel",
        question: "Quel outil permet d'étudier un phénomène social ou professionnel à l'aide de données chiffrées ?",
        options: [
            "Les statistiques",
            "Les émotions",
            "Les impressions",
            "Les rumeurs"
        ],
        correct: 0,
        explanation: "Les statistiques permettent d'analyser des données chiffrées pour étudier des phénomènes sociaux ou professionnels de manière objective.",
        niveau: "Facile",
        animal: "all"
    },
    
    // BLOC 2: Débattre à l'ère de la mondialisation
    {
        id: 4,
        bloc: "BC02",
        bloc_name: "Débattre à l'ère de la mondialisation",
        question: "Quelle compétence permet de formuler un point de vue argumenté et nuancé ?",
        options: [
            "L'analyse critique de l'information",
            "La mémorisation par cœur",
            "La copie de ce que disent les autres",
            "Le silence"
        ],
        correct: 0,
        explanation: "L'analyse critique de l'information permet de comprendre différents points de vue, d'évaluer la pertinence des arguments et de formuler un point de vue personnel, argumenté et nuancé.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 5,
        bloc: "BC02",
        bloc_name: "Débattre à l'ère de la mondialisation",
        question: "Quel est l'objectif principal de l'analyse de l'information ?",
        options: [
            "Comprendre et évaluer la validité des informations",
            "Accepter toutes les informations sans discernement",
            "Rejeter toutes les informations",
            "Ignorer les informations"
        ],
        correct: 0,
        explanation: "L'analyse de l'information vise à comprendre le contenu, à évaluer sa source, sa validité et sa pertinence avant de l'utiliser dans un débat ou une réflexion.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 6,
        bloc: "BC02",
        bloc_name: "Débattre à l'ère de la mondialisation",
        question: "Qu'est-ce qu'une pensée construite ?",
        options: [
            "Une pensée basée sur des arguments logiques et cohérents",
            "Une pensée impulsive",
            "Une pensée sans fondement",
            "Une pensée copiée"
        ],
        correct: 0,
        explanation: "Une pensée construite est une réflexion qui s'appuie sur des arguments logiques, cohérents et structurés pour défendre un point de vue.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    
    // BLOC 3: Développer son identité culturelle
    {
        id: 7,
        bloc: "BC03",
        bloc_name: "Développer son identité culturelle",
        question: "Quelle compétence permet de positionner son projet professionnel ?",
        options: [
            "Exprimer ses aspirations dans une culture commune",
            "Copier le projet des autres",
            "Attendre que les opportunités se présentent",
            "Ne pas réfléchir à son avenir"
        ],
        correct: 0,
        explanation: "Exprimer ses aspirations dans une culture commune permet de définir son projet professionnel en tenant compte de ses valeurs, compétences et du contexte professionnel.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 8,
        bloc: "BC03",
        bloc_name: "Développer son identité culturelle",
        question: "Pourquoi est-il important de communiquer avec le monde dans le cadre professionnel ?",
        options: [
            "Pour échanger des connaissances et développer son réseau",
            "Pour rester isolé",
            "Pour éviter les contacts",
            "Pour limiter ses opportunités"
        ],
        correct: 0,
        explanation: "Communiquer avec le monde permet d'échanger des connaissances, de partager des expériences, de développer son réseau professionnel et de s'ouvrir à de nouvelles opportunités.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 9,
        bloc: "BC03",
        bloc_name: "Développer son identité culturelle",
        question: "Qu'est-ce que l'identité culturelle ?",
        options: [
            "L'ensemble des valeurs, croyances et pratiques qui définissent une personne ou un groupe",
            "Le fait de ne pas avoir de culture",
            "Le rejet de toute culture",
            "L'adoption forcée d'une culture"
        ],
        correct: 0,
        explanation: "L'identité culturelle est l'ensemble des valeurs, croyances, traditions et pratiques qui définissent une personne ou un groupe et qui influencent leur manière de voir le monde.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    
    // BLOC 4: Agir collectivement dans des situations sociales et professionnelles
    {
        id: 10,
        bloc: "BC04",
        bloc_name: "Agir collectivement dans des situations sociales et professionnelles",
        question: "Quelle compétence permet de développer un mode de vie actif et solidaire ?",
        options: [
            "La participation à des projets collectifs",
            "L'isolement social",
            "Le refus de toute collaboration",
            "L'individualisme"
        ],
        correct: 0,
        explanation: "Participer à des projets collectifs permet de développer un mode de vie actif, de créer du lien social et de renforcer la solidarité au sein d'un groupe.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 11,
        bloc: "BC04",
        bloc_name: "Agir collectivement dans des situations sociales et professionnelles",
        question: "Qu'est-ce que la conduite d'une analyse réflexive ?",
        options: [
            "Analyser son action au sein d'un collectif pour en tirer des enseignements",
            "Critiquer les autres sans se remettre en question",
            "Ignorer les retours sur son action",
            "Refuser toute évaluation"
        ],
        correct: 0,
        explanation: "La conduite d'une analyse réflexive consiste à évaluer son propre comportement et ses actions au sein d'un collectif afin d'en tirer des enseignements et de progresser.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 12,
        bloc: "BC04",
        bloc_name: "Agir collectivement dans des situations sociales et professionnelles",
        question: "Pourquoi est-il important de mettre en œuvre un projet collectif ?",
        options: [
            "Pour atteindre des objectifs communs et renforcer la cohésion d'équipe",
            "Pour travailler seul",
            "Pour éviter les collaborations",
            "Pour créer des conflits"
        ],
        correct: 0,
        explanation: "Mettre en œuvre un projet collectif permet d'atteindre des objectifs communs, de mutualiser les compétences et de renforcer la cohésion et l'efficacité de l'équipe.",
        niveau: "Facile",
        animal: "all"
    },
    
    // BLOC 5: Conseiller le client sur les produits d'animalerie
    {
        id: 13,
        bloc: "BC05",
        bloc_name: "Conseiller le client sur les produits d'animalerie",
        question: "Quelle est la première étape pour adapter son conseil aux attentes du client ?",
        options: [
            "Poser des questions pour comprendre ses besoins",
            "Vendre le produit le plus cher",
            "Ignorer les attentes du client",
            "Proposer un produit au hasard"
        ],
        correct: 0,
        explanation: "La première étape pour adapter son conseil est de poser des questions ouvertes pour comprendre les besoins spécifiques du client, ses attentes et son niveau de connaissance.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 14,
        bloc: "BC05",
        bloc_name: "Conseiller le client sur les produits d'animalerie",
        question: "Quels types de caractéristiques doit-on présenter pour les produits d'animalerie ?",
        options: [
            "Les caractéristiques scientifiques et technologiques",
            "Uniquement le prix",
            "Uniquement la couleur",
            "Uniquement la marque"
        ],
        correct: 0,
        explanation: "Pour conseiller efficacement un client sur les produits d'animalerie, il faut présenter les caractéristiques scientifiques (composition, bienfaits nutritionnels) et technologiques (mode d'emploi, sécurité, etc.).",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 15,
        bloc: "BC05",
        bloc_name: "Conseiller le client sur les produits d'animalerie",
        question: "Quelle évolution sociétale influence le plus les attentes des clients en animalerie aujourd'hui ?",
        options: [
            "La prise de conscience écologique et le bien-être animal",
            "La réduction des budgets",
            "La mode des animaux exotiques",
            "L'augmentation des achats impulsifs"
        ],
        correct: 0,
        explanation: "Aujourd'hui, les clients sont de plus en plus sensibles aux enjeux écologiques, au bien-être animal et à la qualité des produits, ce qui influence fortement leurs attentes en matière de conseil.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 16,
        bloc: "BC05",
        bloc_name: "Conseiller le client sur les produits d'animalerie",
        question: "Quel conseil donner à un client qui souhaite acheter un chien de race active ?",
        options: [
            "Prévoir suffisamment d'espace et de temps pour les sorties",
            "Le garder enfermé en appartement sans sortie",
            "Ne pas le sortir plus de 10 minutes par jour",
            "Lui donner uniquement des restes de table"
        ],
        correct: 0,
        explanation: "Un chien de race active a besoin de beaucoup d'espace pour se dépenser et de sorties régulières. Il est important de conseiller le client sur ces besoins avant l'achat.",
        niveau: "Facile",
        animal: "chien"
    },
    {
        id: 17,
        bloc: "BC05",
        bloc_name: "Conseiller le client sur les produits d'animalerie",
        question: "Quelle information est obligatoire à fournir pour la vente d'un animal de compagnie ?",
        options: [
            "Les besoins spécifiques de l'animal (alimentation, espace, soins)",
            "Uniquement le prix",
            "Uniquement la race",
            "Aucune information"
        ],
        correct: 0,
        explanation: "La réglementation impose de fournir aux clients toutes les informations nécessaires sur les besoins spécifiques de l'animal (alimentation, espace, soins, comportement) avant la vente.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    
    // BLOC 6: Situer l'entreprise dans son environnement socioprofessionnel
    {
        id: 18,
        bloc: "BC06",
        bloc_name: "Situer l'entreprise dans son environnement socioprofessionnel",
        question: "Quels sont les principaux acteurs du secteur de l'animalerie ?",
        options: [
            "Les animaleries, jardineries, grandes surfaces et libres-services agricoles",
            "Uniquement les animaleries indépendantes",
            "Uniquement les supermarchés",
            "Uniquement les sites internet"
        ],
        correct: 0,
        explanation: "Le secteur de l'animalerie comprend les magasins spécialisés (animaleries), les jardineries, les grandes surfaces de bricolage, les rayons animalerie des grandes surfaces, et les libres-services agricoles.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 19,
        bloc: "BC06",
        bloc_name: "Situer l'entreprise dans son environnement socioprofessionnel",
        question: "Quelle est la stratégie mercatique principale d'une animalerie ?",
        options: [
            "Se positionner comme expert en conseil et produits pour animaux",
            "Vendre uniquement des produits bas de gamme",
            "Ne pas communiquer sur ses produits",
            "Ignorer les tendances du marché"
        ],
        correct: 0,
        explanation: "Une animalerie doit se positionner comme expert en conseil et en produits de qualité pour animaux, avec une stratégie mercatique axée sur l'expertise et la satisfaction client.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 20,
        bloc: "BC06",
        bloc_name: "Situer l'entreprise dans son environnement socioprofessionnel",
        question: "Quelle adaptation du secteur professionnel répond aux demandes sociétales actuelles ?",
        options: [
            "Le développement de produits écoresponsables et le bien-être animal",
            "L'augmentation des prix",
            "La réduction de l'offre",
            "Le non-respect de la réglementation"
        ],
        correct: 0,
        explanation: "Le secteur de l'animalerie s'adapte aux demandes sociétales en développant des produits écoresponsables, en améliorant le bien-être animal et en respectant des normes éthiques strictes.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 21,
        bloc: "BC06",
        bloc_name: "Situer l'entreprise dans son environnement socioprofessionnel",
        question: "Quel est le cadre social et réglementaire de l'animalerie en France ?",
        options: [
            "Code rural, réglementation sur la vente d'animaux et normes d'hygiène",
            "Aucune réglementation",
            "Uniquement des recommandations",
            "Des lois très souples"
        ],
        correct: 0,
        explanation: "L'animalerie en France est encadrée par le Code rural (articles L214-1 et suivants), des réglementations spécifiques sur la vente d'animaux et des normes strictes d'hygiène et de sécurité.",
        niveau: "Avancé",
        animal: "all"
    },
    
    // BLOC 7: Communiquer en situation professionnelle
    {
        id: 22,
        bloc: "BC07",
        bloc_name: "Communiquer en situation professionnelle",
        question: "Comment s'informer sur les évolutions techniques et réglementaires en animalerie ?",
        options: [
            "Lire les bulletins officiels, suivre des formations et consulter les sites professionnels",
            "Attendre que les informations arrivent par hasard",
            "Ignorer les évolutions",
            "Ne se former qu'une fois"
        ],
        correct: 0,
        explanation: "Pour rester à jour, il faut consulter régulièrement les bulletins officiels, suivre des formations continues et consulter les sites professionnels du secteur.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 23,
        bloc: "BC07",
        bloc_name: "Communiquer en situation professionnelle",
        question: "Quelle est la meilleure manière de communiquer au sein d'une équipe ?",
        options: [
            "De manière claire, respectueuse et en privilégiant les canaux adaptés",
            "En criant pour être sûr d'être entendu",
            "En envoyant des messages sans contexte",
            "En ignorant les collègues"
        ],
        correct: 0,
        explanation: "Une communication efficace au sein d'une équipe repose sur la clarté, le respect, l'écoute active et l'utilisation des canaux de communication adaptés à la situation.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 24,
        bloc: "BC07",
        bloc_name: "Communiquer en situation professionnelle",
        question: "Comment rendre compte de son activité à sa hiérarchie ?",
        options: [
            "De manière synthétique, précise et régulière",
            "Uniquement quand on a le temps",
            "De manière vague et imprécise",
            "Jamais"
        ],
        correct: 0,
        explanation: "Rendre compte de son activité nécessite de fournir des informations synthétiques, précises et régulières à sa hiérarchie, en mettant en avant les résultats, les difficultés et les besoins.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 25,
        bloc: "BC07",
        bloc_name: "Communiquer en situation professionnelle",
        question: "Comment communiquer avec un fournisseur pour une commande ?",
        options: [
            "De manière professionnelle avec des informations claires sur les produits, quantités et délais",
            "En commandant sans préciser les détails",
            "En exigeant des délais impossibles",
            "Sans vérification des prix"
        ],
        correct: 0,
        explanation: "La communication avec un fournisseur doit être professionnelle, avec des informations claires sur les produits souhaités, les quantités, les délais de livraison et les conditions commerciales.",
        niveau: "Facile",
        animal: "all"
    },
    
    // BLOC 8: Organiser son travail en fonction de la politique commerciale
    {
        id: 26,
        bloc: "BC08",
        bloc_name: "Organiser son travail en fonction de la politique commerciale",
        question: "Quel outil permet de gérer les stocks en animalerie ?",
        options: [
            "Un logiciel de gestion commerciale",
            "Un tableau papier",
            "Sa mémoire",
            "Rien, on commande au feeling"
        ],
        correct: 0,
        explanation: "Un logiciel de gestion commerciale permet de suivre les stocks, les commandes, les ventes et d'optimiser la gestion des approvisionnements.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 27,
        bloc: "BC08",
        bloc_name: "Organiser son travail en fonction de la politique commerciale",
        question: "Qu'est-ce qu'un indicateur commercial ?",
        options: [
            "Un chiffre ou pourcentage qui permet d'évaluer la performance des ventes",
            "Un simple nombre sans signification",
            "Une estimation aléatoire",
            "Un élément décoratif"
        ],
        correct: 0,
        explanation: "Un indicateur commercial est une donnée chiffrée (chiffre d'affaires, marge, taux de rotation, etc.) qui permet d'évaluer la performance des ventes et d'orienter les décisions commerciales.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 28,
        bloc: "BC08",
        bloc_name: "Organiser son travail en fonction de la politique commerciale",
        question: "Comment intégrer les contraintes logistiques dans la gestion d'un rayon animalerie ?",
        options: [
            "En respectant les dates de péremption, les conditions de stockage et les normes d'hygiène",
            "En ignorant les contraintes",
            "En stockant tous les produits ensemble",
            "En ne vérifiant jamais les dates"
        ],
        correct: 0,
        explanation: "L'intégration des contraintes logistiques passe par le respect des dates de péremption, des conditions de stockage spécifiques à chaque produit et des normes d'hygiène et de sécurité.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 29,
        bloc: "BC08",
        bloc_name: "Organiser son travail en fonction de la politique commerciale",
        question: "Quelle est l'importance de la planification du travail en équipe ?",
        options: [
            "Optimiser le temps, répartir les tâches et améliorer l'efficacité",
            "Créer des conflits",
            "Désorganiser l'équipe",
            "Travailler sans objectif"
        ],
        correct: 0,
        explanation: "La planification du travail permet d'optimiser le temps disponible, de répartir équitablement les tâches entre les membres de l'équipe et d'améliorer l'efficacité globale.",
        niveau: "Facile",
        animal: "all"
    },
    
    // BLOC 9: Mettre en œuvre des techniques de vente en animalerie
    {
        id: 30,
        bloc: "BC09",
        bloc_name: "Mettre en œuvre des techniques de vente en animalerie",
        question: "Quelle est la première étape pour conduire une vente ?",
        options: [
            "L'accueil du client et la découverte de ses besoins",
            "Présenter directement le produit le plus cher",
            "Ignorer le client",
            "Attendre que le client parle"
        ],
        correct: 0,
        explanation: "La première étape pour conduire une vente est d'accueillir chaleureusement le client et de découvrir ses besoins par des questions ouvertes.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 31,
        bloc: "BC09",
        bloc_name: "Mettre en œuvre des techniques de vente en animalerie",
        question: "Comment contribuer à l'animation du point de vente ?",
        options: [
            "Mettre en place des promotions, des démonstrations et une mise en avant des produits",
            "Rester derrière le comptoir sans bouger",
            "Ignorer les clients",
            "Ne pas s'investir"
        ],
        correct: 0,
        explanation: "Contribuer à l'animation du point de vente passe par la mise en place de promotions, de démonstrations, d'une mise en avant attractive des produits et d'une bonne communication avec les clients.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 32,
        bloc: "BC09",
        bloc_name: "Mettre en œuvre des techniques de vente en animalerie",
        question: "Comment réaliser le suivi de la clientèle ?",
        options: [
            "En notant les préférences des clients et en les recontactant pour des offres adaptées",
            "En oublant les clients après la vente",
            "En envoyant des publicités génériques",
            "En ne tenant pas de fichier client"
        ],
        correct: 0,
        explanation: "Le suivi de la clientèle consiste à noter les préférences et les besoins des clients réguliers, puis à les recontacter avec des offres personnalisées et adaptées.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 33,
        bloc: "BC09",
        bloc_name: "Mettre en œuvre des techniques de vente en animalerie",
        question: "Comment renseigner un client dans une langue étrangère ?",
        options: [
            "En utilisant des phrases simples, des gestes et éventuellement un traducteur",
            "En parlant très fort",
            "En lui faisant des signes incompréhensibles",
            "En l'ignorant"
        ],
        correct: 0,
        explanation: "Pour renseigner un client dans une langue étrangère, il faut utiliser des phrases simples et claires, des gestes explicatifs et, si nécessaire, avoir recours à un traducteur ou à une application de traduction.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    
    // BLOC 10: Gérer un rayon de produits d'animalerie
    {
        id: 34,
        bloc: "BC10",
        bloc_name: "Gérer un rayon de produits d'animalerie",
        question: "Comment organiser un rayon en tenant compte de la politique commerciale ?",
        options: [
            "En suivant la stratégie de l'enseigne, en mettant en avant les produits phares et les promotions",
            "En disposant les produits au hasard",
            "En ne changeant jamais l'implantation",
            "En cachant les produits les plus vendus"
        ],
        correct: 0,
        explanation: "L'organisation d'un rayon doit suivre la stratégie de l'enseigne, mettre en avant les produits phares, les promotions et tenir compte des évolutions du marché pour optimiser les ventes.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 35,
        bloc: "BC10",
        bloc_name: "Gérer un rayon de produits d'animalerie",
        question: "Quelle est la première étape pour gérer les approvisionnements ?",
        options: [
            "Analyser les ventes et les stocks actuels",
            "Commander sans réfléchir",
            "Attendre d'être en rupture",
            "Commander toujours la même quantité"
        ],
        correct: 0,
        explanation: "Avant de passer commande, il faut analyser les ventes passées, les stocks actuels, les tendances et les besoins futurs pour optimiser les approvisionnements.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 36,
        bloc: "BC10",
        bloc_name: "Gérer un rayon de produits d'animalerie",
        question: "Comment suivre les indicateurs de rentabilité d'un rayon ?",
        options: [
            "Analyser le chiffre d'affaires, la marge et le taux de rotation des produits",
            "Se fier uniquement à son intuition",
            "Ne pas suivre les indicateurs",
            "Demander à un collègue"
        ],
        correct: 0,
        explanation: "Pour suivre la rentabilité d'un rayon, il faut analyser régulièrement le chiffre d'affaires généré, la marge bénéficiaire et le taux de rotation des produits pour identifier les axes d'amélioration.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 37,
        bloc: "BC10",
        bloc_name: "Gérer un rayon de produits d'animalerie",
        question: "Comment réaliser le suivi et l'entretien d'un rayon ?",
        options: [
            "Vérifier les dates de péremption, nettoyer régulièrement et réapprovisionner les produits manquant",
            "Ne nettoyer que quand c'est sale",
            "Laisser les produits périmés en rayon",
            "Attendre que le client se plaigne"
        ],
        correct: 0,
        explanation: "Le suivi et l'entretien d'un rayon consistent à vérifier régulièrement les dates de péremption, à nettoyer les étagères, à réapprovisionner les produits manquants et à maintenir une présentation attractive.",
        niveau: "Facile",
        animal: "all"
    },
    
    // BLOC 11: Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie
    {
        id: 38,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelle est la première étape pour reconnaître un produit proposé à la vente ?",
        options: [
            "Lire l'étiquette, la composition et les informations du fabricant",
            "Deviner ce que c'est",
            "Demander au client",
            "Vendre sans connaître"
        ],
        correct: 0,
        explanation: "Pour reconnaître un produit, il faut lire attentivement l'étiquette, analyser la composition, comprendre ses caractéristiques et se référer aux informations fournies par le fabricant.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 39,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelles sont les spécificités à présenter pour un animal vendu en animalerie ?",
        options: [
            "Ses besoins en espace, alimentation, soins et comportement",
            "Uniquement son prix",
            "Uniquement sa couleur",
            "Uniquement sa race"
        ],
        correct: 0,
        explanation: "Pour présenter un animal, il faut expliquer ses besoins spécifiques en matière d'espace, d'alimentation, de soins vétérinaires, de comportement et d'enrichissement du milieu.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 40,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelles opérations d'entretien et de suivi des animaux sur le lieu de vente doivent être assurées ?",
        options: [
            "Nettoyage des cages, vérification de la santé, alimentation adaptée et stimulation",
            "Ne pas s'occuper des animaux",
            "Nourrir uniquement quand on a le temps",
            "Laisser les animaux sans surveillance"
        ],
        correct: 0,
        explanation: "Les opérations d'entretien et de suivi des animaux en magasin incluent le nettoyage régulier des cages, la vérification de leur état de santé, une alimentation adaptée à leurs besoins et une stimulation comportementale.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 41,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelle réglementation s'applique aux produits d'animalerie ?",
        options: [
            "Réglementation sur l'hygiène, la sécurité et la traçabilité",
            "Aucune réglementation",
            "Uniquement des recommandations",
            "Des règles très souples"
        ],
        correct: 0,
        explanation: "Les produits d'animalerie sont soumis à une réglementation stricte concernant l'hygiène, la sécurité, la traçabilité et la conformité aux normes en vigueur.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 42,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelles pratiques respectueuses de l'environnement peuvent être mises en place en animalerie ?",
        options: [
            "Recyclage des emballages, économie d'énergie, produits écoresponsables",
            "Jeter tous les emballages à la poubelle",
            "Ne pas se soucier de l'environnement",
            "Utiliser uniquement des produits jetables"
        ],
        correct: 0,
        explanation: "Les pratiques respectueuses de l'environnement en animalerie incluent le recyclage des emballages, l'économie d'énergie, la promotion de produits écoresponsables et la réduction des déchets.",
        niveau: "Facile",
        animal: "all"
    },
    {
        id: 43,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelle est la durée de vie moyenne d'un hamster en captivité ?",
        options: [
            "2 à 3 ans",
            "5 à 7 ans",
            "10 ans et plus",
            "1 an maximum"
        ],
        correct: 0,
        explanation: "Un hamster a une durée de vie moyenne de 2 à 3 ans en captivité, selon la race et les conditions de vie (alimentation, espace, soins).",
        niveau: "Facile",
        animal: "NAC"
    },
    {
        id: 44,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelle température idéale pour un aquarium d'eau douce ?",
        options: [
            "24-26°C",
            "10-15°C",
            "30-35°C",
            "40°C"
        ],
        correct: 0,
        explanation: "La température idéale pour un aquarium d'eau douce se situe généralement entre 24 et 26°C, selon les espèces de poissons.",
        niveau: "Facile",
        animal: "poisson"
    },
    {
        id: 45,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quel type de litière est recommandé pour un chat ?",
        options: [
            "Litière minérale ou végétale, sans parfum fort",
            "Litière parfumée très fortement",
            "Sable de plage",
            "Papier journal"
        ],
        correct: 0,
        explanation: "Pour un chat, il est recommandé d'utiliser une litière minérale ou végétale, sans parfum trop fort qui pourrait le dérangé. La litière doit être changée régulièrement.",
        niveau: "Facile",
        animal: "chat"
    },
    {
        id: 46,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quelle est la réglementation concernant la vente de chiens et chats en France ?",
        options: [
            "Obligation de puce électronique et passeport pour les chiens, passeport pour les chats",
            "Aucune obligation",
            "Uniquement un certificat de vente",
            "Uniquement une puce pour les chiens"
        ],
        correct: 0,
        explanation: "En France, la vente de chiens est soumise à l'obligation de puce électronique (identification) et de passeport. Pour les chats, le passeport est obligatoire pour la vente.",
        niveau: "Avancé",
        animal: "chien,chat"
    },
    {
        id: 47,
        bloc: "BC11",
        bloc_name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie",
        question: "Quel est le besoin alimentaire principal d'un perroquet ?",
        options: [
            "Graines variées, fruits et légumes frais",
            "Uniquement des graines de tournesol",
            "De la viande crue",
            "Des croquettes pour chat"
        ],
        correct: 0,
        explanation: "Un perroquet a besoin d'une alimentation variée composée de graines de qualité, de fruits frais, de légumes et éventuellement de compléments vitaminés.",
        niveau: "Facile",
        animal: "oiseau"
    },
    
    // BLOC 12: S'adapter à des enjeux professionnels particuliers
    {
        id: 48,
        bloc: "BC12",
        bloc_name: "S'adapter à des enjeux professionnels particuliers",
        question: "Quelle compétence permet de s'adapter à des enjeux professionnels particuliers ?",
        options: [
            "La capacité à analyser une situation et à proposer des solutions adaptées",
            "Rester figé sur ses habitudes",
            "Ignorer les changements",
            "Attendre que les autres agissent"
        ],
        correct: 0,
        explanation: "S'adapter à des enjeux professionnels particuliers nécessite la capacité à analyser rapidement une situation nouvelle ou complexe, à comprendre les enjeux et à proposer des solutions adaptées et innovantes.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 49,
        bloc: "BC12",
        bloc_name: "S'adapter à des enjeux professionnels particuliers",
        question: "Quel peut être un enjeu professionnel particulier en animalerie ?",
        options: [
            "Gestion d'une crise sanitaire (épizootie)",
            "Vendre plus de produits",
            "Dormir pendant son travail",
            "Arriver en retard"
        ],
        correct: 0,
        explanation: "Un enjeu professionnel particulier en animalerie peut être la gestion d'une crise sanitaire (épizootie, maladie contagieuse chez les animaux), qui nécessite une adaptation rapide des pratiques et des mesures exceptionnelles.",
        niveau: "Intermédiaire",
        animal: "all"
    },
    {
        id: 50,
        bloc: "BC12",
        bloc_name: "S'adapter à des enjeux professionnels particuliers",
        question: "Comment réagir face à un client mécontent ?",
        options: [
            "Écouter attentivement, s'excuser si nécessaire et proposer une solution",
            "L'ignorer",
            "Crier plus fort que lui",
            "Lui donner raison sans chercher de solution"
        ],
        correct: 0,
        explanation: "Face à un client mécontent, il faut écouter attentivement ses doléances, s'excuser si l'erreur vient de l'entreprise, et proposer une solution adaptée (remboursement, échange, bon d'achat, etc.).",
        niveau: "Facile",
        animal: "all"
    }
];

// ============================================
// DÉFINITION DES BLOCS DE COMPÉTENCES
// ============================================

const BLOCS = [
    { id: "BC01", name: "Construire son raisonnement autour des enjeux du monde actuel" },
    { id: "BC02", name: "Débattre à l'ère de la mondialisation" },
    { id: "BC03", name: "Développer son identité culturelle" },
    { id: "BC04", name: "Agir collectivement dans des situations sociales et professionnelles" },
    { id: "BC05", name: "Conseiller le client sur les produits d'animalerie" },
    { id: "BC06", name: "Situer l'entreprise dans son environnement socioprofessionnel" },
    { id: "BC07", name: "Communiquer en situation professionnelle" },
    { id: "BC08", name: "Organiser son travail en fonction de la politique commerciale" },
    { id: "BC09", name: "Mettre en œuvre des techniques de vente en animalerie" },
    { id: "BC10", name: "Gérer un rayon de produits d'animalerie" },
    { id: "BC11", name: "Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie" },
    { id: "BC12", name: "S'adapter à des enjeux professionnels particuliers" }
];

// ============================================
// CATÉGORIES D'ANIMAUX
// ============================================

const ANIMAL_CATEGORIES = [
    { id: "chien", name: "Chien", icon: "🐕", description: "Tous les aspects liés aux chiens" },
    { id: "chat", name: "Chat", icon: "🐈", description: "Tous les aspects liés aux chats" },
    { id: "oiseau", name: "Oiseau", icon: "🦜", description: "Oiseaux de compagnie (perroquets, canaris, etc.)" },
    { id: "NAC", name: "Petits mammifères NAC", icon: "🐹", description: "Nouveaux Animaux de Compagnie (rongeurs, lapins, etc.)" },
    { id: "poisson", name: "Aquariophilie", icon: "🐠", description: "Poissons d'eau douce et d'eau de mer" },
    { id: "jardin", name: "Jardin aquatique", icon: "🐸", description: "Étangs, bassins et plantes aquatiques" },
    { id: "all", name: "Tous les animaux", icon: "🐾", description: "Toutes les catégories" }
];

// ============================================
// NIVEAUX DE DIFFICULTÉ
// ============================================

const LEVELS = ["Facile", "Intermédiaire", "Avancé"];

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

function getBlocById(blocId) {
    return BLOCS.find(b => b.id === blocId);
}

function getBlocName(blocId) {
    const bloc = getBlocById(blocId);
    return bloc ? bloc.name : "Bloc inconnu";
}

function getAnimalCategory(animalId) {
    return ANIMAL_CATEGORIES.find(a => a.id === animalId);
}

function getQuestionsByBloc(blocId) {
    return QUESTIONS_TCVA.filter(q => q.bloc === blocId);
}

function getQuestionsByAnimal(animalId) {
    return QUESTIONS_TCVA.filter(q => q.animal === animalId || q.animal === "all");
}

function getQuestionsByLevel(level) {
    return QUESTIONS_TCVA.filter(q => q.niveau === level);
}

function getQuestionsByFilters(bloc, niveau, animal) {
    return QUESTIONS_TCVA.filter(q => {
        const blocMatch = bloc === "all" || q.bloc === bloc;
        const niveauMatch = niveau === "all" || q.niveau === niveau;
        const animalMatch = animal === "all" || q.animal === animal || q.animal === "all";
        return blocMatch && niveauMatch && animalMatch;
    });
}

// ============================================
// EXPORT DES DONNÉES
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUESTIONS_TCVA,
        BLOCS,
        ANIMAL_CATEGORIES,
        LEVELS,
        getBlocById,
        getBlocName,
        getAnimalCategory,
        getQuestionsByBloc,
        getQuestionsByAnimal,
        getQuestionsByLevel,
        getQuestionsByFilters
    };
}
