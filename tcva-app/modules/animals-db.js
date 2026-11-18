// ============================================
// BASE DE DONNÉES DES ANIMAUX - BAC PRO TCVA
// Images locales dans le dossier img/
// ============================================

const ANIMALS_DB = {
    chien: [
        {
            id: 'chien-001',
            name: 'Labrador Retriever',
            scientific: 'Canis lupus familiaris',
            category: 'chien',
            description: 'Chien sociable et intelligent. Excellente pour les familles.',
            characteristics: { taille: '54-57 cm', poids: '25-36 kg', esperanceVie: '10-14 ans', temperament: 'Amical, actif, intelligent', niveauActivite: 'Élevé' },
            needs: { alimentation: 'Croquettes ou pâtée de qualité', espace: 'Maison avec jardin idéal', exercice: '1-2 heures/jour', socialisation: 'Excellente avec enfants et autres animaux' },
            origin: 'Canada (Nouvelle-Écosse)',
            image: '../img/chien-001.png',
            funFact: 'Race de chien la plus populaire au monde.',
            regulation: 'Identification par puce obligatoire en France',
            advice: 'Éducation précoce recommandée',
            blocs: ["BC05", "BC06", "BC10"]
        },
        {
            id: 'chien-002',
            name: 'Berger Allemand',
            scientific: 'Canis lupus familiaris',
            category: 'chien',
            description: 'Chien de travail polyvalent, loyal et protecteur.',
            characteristics: { taille: '55-65 cm', poids: '22-40 kg', esperanceVie: '9-13 ans', temperament: 'Loyal, intelligent, protecteur', niveauActivite: 'Élevé' },
            needs: { alimentation: 'Alimentation riche en protéines', espace: 'Besoin d\'espace', exercice: '2 heures minimum/jour' },
            origin: 'Allemagne',
            image: '../img/chien-002.png',
            funFact: 'Souvent utilisé comme chien policier ou de sauvetage.',
            regulation: 'Identification obligatoire',
            advice: 'Nécessite une éducation ferme et cohérente'
        },
        {
            id: 'chien-003',
            name: 'Caniche',
            scientific: 'Canis lupus familiaris',
            category: 'chien',
            description: 'Chien élégant et intelligent, disponible en trois tailles.',
            characteristics: { taille: '24-60 cm', poids: '2-32 kg', esperanceVie: '12-15 ans', temperament: 'Intelligent, élégant, sociable', niveauActivite: 'Modéré' },
            needs: { alimentation: 'Alimentation adaptée à la taille', espace: 'S\'adapte à la vie en appartement', exercice: '30 min à 1 heure/jour' },
            origin: 'France/Allemagne (race ancienne)',
            image: '../img/chien-003.png',
            funFact: 'Souvent utilisé pour créer des races hybrides hypoallergéniques.',
            regulation: 'Identification obligatoire',
            advice: 'Toilettage professionnel nécessaire toutes les 6-8 semaines'
        },
        {
            id: 'chien-004',
            name: 'Bulldog Français',
            scientific: 'Canis lupus familiaris',
            category: 'chien',
            description: 'Petit chien musclé et affectueux. Excellente pour la vie en appartement.',
            characteristics: { taille: '30 cm', poids: '8-14 kg', esperanceVie: '10-12 ans', temperament: 'Joueur, affectueux, calme', niveauActivite: 'Modéré' },
            needs: { alimentation: 'Attention à l\'obésité', espace: 'Adapté à la vie en appartement', exercice: '30 min/jour' },
            origin: 'France',
            image: '../img/chien-004.png',
            funFact: 'L\'une des races de chiens les plus populaires en France.',
            regulation: 'Identification obligatoire',
            advice: 'Éviter les températures extrêmes'
        },
        {
            id: 'chien-005',
            name: 'Golden Retriever',
            scientific: 'Canis lupus familiaris',
            category: 'chien',
            description: 'Chien doux et patient. Excellente pour les familles.',
            characteristics: { taille: '51-61 cm', poids: '25-34 kg', esperanceVie: '10-12 ans', temperament: 'Doux, patient, sociable', niveauActivite: 'Élevé' },
            needs: { alimentation: 'Croquettes de qualité', espace: 'Maison avec jardin idéale', exercice: '1-2 heures/jour' },
            origin: 'Royaume-Uni (Écosse)',
            image: '../img/chien-005.png',
            funFact: 'Souvent utilisé comme chien guide pour aveugles.',
            regulation: 'Identification obligatoire',
            advice: 'Brossage régulier nécessaire'
        }
    ],
    
    chat: [
        {
            id: 'chat-001',
            name: 'Chat Européen',
            scientific: 'Felis silvestris catus',
            category: 'chat',
            description: 'Chat domestique courant, robuste et adaptable.',
            characteristics: { taille: '30-40 cm', poids: '3-5 kg', esperanceVie: '12-15 ans', temperament: 'Robuste, adaptable, indépendant' },
            needs: { alimentation: 'Croquettes et/ou pâtée', espace: 'S\'adapte à la vie en intérieur', exercice: 'Jeux quotidiens' },
            origin: 'Europe (domestique)',
            image: '../img/chat-001.png',
            funFact: 'Race de chat la plus répandue en Europe.',
            regulation: 'Identification par puce ou tatouage obligatoire',
            advice: 'Vaccination et vermifugation régulières recommandées'
        },
        {
            id: 'chat-002',
            name: 'Persan',
            scientific: 'Felis silvestris catus',
            category: 'chat',
            description: 'Chat de luxe au pelage long et soyeux. Calme et affectueux.',
            characteristics: { taille: '45-50 cm', poids: '3-5 kg', esperanceVie: '12-16 ans', temperament: 'Calme, affectueux, paisible' },
            needs: { alimentation: 'Alimentation de qualité', espace: 'Adapté à la vie en intérieur', exercice: 'Jeux calmes' },
            origin: 'Perse (Iran)',
            image: '../img/chat-002.png',
            funFact: 'L\'une des races de chats les plus anciennes.',
            regulation: 'Identification obligatoire',
            advice: 'Brossage quotidien indispensable'
        },
        {
            id: 'chat-003',
            name: 'Siamois',
            scientific: 'Felis silvestris catus',
            category: 'chat',
            description: 'Chat élégant et vocal, connu pour ses yeux bleus.',
            characteristics: { taille: '40-50 cm', poids: '3-5 kg', esperanceVie: '15-20 ans', temperament: 'Vocal, élégant, sociable' },
            needs: { alimentation: 'Alimentation de qualité', espace: 'Besoin d\'espace', exercice: 'Jeux interactifs' },
            origin: 'Thaïlande',
            image: '../img/chat-003.png',
            funFact: 'L\'une des races de chats les plus bavardes.',
            regulation: 'Identification obligatoire',
            advice: 'N\'aime pas la solitude'
        },
        {
            id: 'chat-004',
            name: 'Maine Coon',
            scientific: 'Felis silvestris catus',
            category: 'chat',
            description: 'Un des plus grands chats domestiques, puissant et affectueux.',
            characteristics: { taille: '60-100 cm (avec queue)', poids: '5-10 kg', esperanceVie: '12-15 ans', temperament: 'Puissant, affectueux, joueur' },
            needs: { alimentation: 'Alimentation riche en protéines', espace: 'Besoin d\'espace', exercice: 'Jeux et griffoirs' },
            origin: 'États-Unis (Maine)',
            image: '../img/chat-004.png',
            funFact: 'Surnommé "le géant doux".',
            regulation: 'Identification obligatoire',
            advice: 'Arbre à chat solide nécessaire'
        },
        {
            id: 'chat-005',
            name: 'Bengal',
            scientific: 'Felis silvestris catus',
            category: 'chat',
            description: 'Chat au pelage tacheté rappelant celui d\'un léopard.',
            characteristics: { taille: '40-50 cm', poids: '4-6 kg', esperanceVie: '12-16 ans', temperament: 'Actif, énergique, joueur' },
            needs: { alimentation: 'Alimentation riche en protéines', espace: 'Grand espace nécessaire', exercice: 'Beaucoup de stimulation' },
            origin: 'États-Unis (hybride)',
            image: '../img/chat-005.png',
            funFact: 'Issu de croisements entre chats domestiques et chats léopards asiatiques.',
            regulation: 'Identification obligatoire',
            advice: 'Besoin de beaucoup d\'attention'
        }
    ],
    
    oiseau: [
        {
            id: 'oiseau-001',
            name: 'Perroquet Gris du Gabon (Jaco)',
            scientific: 'Psittacus erithacus',
            category: 'oiseau',
            description: 'Perroquet intelligent et bavard, capable d\'imiter la voix humaine.',
            characteristics: { taille: '30-40 cm', poids: '400-600 g', esperanceVie: '40-60 ans' },
            needs: { alimentation: 'Mélange de graines, fruits, légumes', espace: 'Grande cage', exercice: 'Sorties quotidiennes' },
            origin: 'Afrique centrale et de l\'Ouest (forêts tropicales)',
            image: '../img/oiseau-001.png',
            funFact: 'Certains Jacos peuvent apprendre plus de 100 mots.',
            regulation: 'Certificat de capacité obligatoire',
            advice: 'Nécessite beaucoup de stimulation intellectuelle'
        },
        {
            id: 'oiseau-002',
            name: 'Canari',
            scientific: 'Serinus canaria domestica',
            category: 'oiseau',
            description: 'Petit oiseau chanteur, coloré et facile à entretenir.',
            characteristics: { taille: '12-14 cm', poids: '15-20 g', esperanceVie: '7-10 ans' },
            needs: { alimentation: 'Mélange de graines pour canaris', espace: 'Cage spacieuse', exercice: 'Vol libre supervisé' },
            origin: 'Îles Canaries, Madère, Açores',
            image: '../img/oiseau-002.png',
            funFact: 'Seuls les mâles chantent.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Placer la cage dans un endroit lumineux'
        },
        {
            id: 'oiseau-003',
            name: 'Perruche Ondulée',
            scientific: 'Melopsittacus undulatus',
            category: 'oiseau',
            description: 'Petit perroquet coloré et sociable. Très populaire.',
            characteristics: { taille: '18 cm', poids: '30-40 g', esperanceVie: '5-10 ans' },
            needs: { alimentation: 'Mélange de graines, légumes frais', espace: 'Cage spacieuse avec jouets' },
            origin: 'Australie',
            image: '../img/oiseau-003.png',
            funFact: 'Peut apprendre à parler.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite une cage avec des barreaux horizontaux'
        },
        {
            id: 'oiseau-004',
            name: 'Calao Rhinocéros',
            scientific: 'Buceros rhinoceros',
            category: 'oiseau',
            description: 'Grand oiseau exotique au bec impressionnant.',
            characteristics: { taille: '90-120 cm (avec queue)', poids: '2-3 kg', esperanceVie: '30-40 ans' },
            needs: { alimentation: 'Fruits, insectes', espace: 'Très grand volière', exercice: 'Espace pour voler' },
            origin: 'Asie du Sud-Est (Indonésie, Malaisie, Thaïlande)',
            image: '../img/oiseau-004.png',
            funFact: 'Le casque amplifie son chant.',
            regulation: 'Certificat de capacité obligatoire',
            advice: 'Déconseillé aux débutants'
        },
        {
            id: 'oiseau-005',
            name: 'Diamant de Gould',
            scientific: 'Erythrura gouldiae',
            category: 'oiseau',
            description: 'Petit oiseau coloré très prisé pour sa beauté.',
            characteristics: { taille: '12-14 cm', poids: '14-16 g', esperanceVie: '4-6 ans' },
            needs: { alimentation: 'Mélange de graines fines', espace: 'Volière spacieuse', exercice: 'Espace pour voler' },
            origin: 'Australie',
            image: '../img/oiseau-005.png',
            funFact: 'Existe en trois variétés de couleur de tête.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Sensible aux courants d\'air'
        },
        // LOT 1 - Oiseaux 006-015
        {
            id: 'oiseau-006',
            name: 'Caille du Japon',
            scientific: 'Coturnix coturnix japonica',
            category: 'oiseau',
            description: 'Petit galliforme domestique, ponctuel et facile à élever. Avant tout élevée pour ses œufs.',
            characteristics: { taille: '15-20 cm', poids: '100-130 g', esperanceVie: '3-5 ans' },
            needs: { alimentation: 'Graines, légumes verts, granulés', espace: 'Volière spacieuse', exercice: 'Espace pour gratter' },
            origin: 'Asie de l\'Est (domestiquée)',
            image: '../img/oiseau-006.png',
            funFact: 'Pond presque un œuf par jour en période de ponte.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Éviter les courants d\'air'
        },
        {
            id: 'oiseau-007',
            name: 'Caille de Chine',
            scientific: 'Coturnix chinensis',
            category: 'oiseau',
            description: 'Caille plus petite et plus colorée que la caille du Japon. Excellente pondeuse.',
            characteristics: { taille: '13-16 cm', poids: '60-80 g', esperanceVie: '3-5 ans' },
            needs: { alimentation: 'Graines, insectes, légumes', espace: 'Volière avec cachettes', exercice: 'Espace pour se déplacer' },
            origin: 'Asie du Sud-Est',
            image: '../img/oiseau-007.png',
            funFact: 'Mâle et femelle ont un plumage différent (dimorphisme sexuel).',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécéssite une température stable'
        },
        {
            id: 'oiseau-008',
            name: 'Canard carolin',
            scientific: 'Aix sponsa',
            category: 'oiseau',
            description: 'Canard coloré et sociable, très apprécié en basse-cour ornementale.',
            characteristics: { taille: '40-45 cm', poids: '500-700 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Granulés pour canards, légumes, maïs', espace: 'Bassin ou étang', exercice: 'Nage quotidienne' },
            origin: 'Amérique du Nord',
            image: '../img/oiseau-008.png',
            funFact: 'Le mâle a un plumage très coloré avec un bec rouge vif.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'A besoin d\'eau pour se reproduire'
        },
        {
            id: 'oiseau-009',
            name: 'Canard mandarin',
            scientific: 'Aix galericulata',
            category: 'oiseau',
            description: 'Un des plus beaux canards ornements, aux couleurs vives.',
            characteristics: { taille: '41-49 cm', poids: '400-700 g', esperanceVie: '5-10 ans' },
            needs: { alimentation: 'Graines, plantes aquatiques, insectes', espace: 'Étang avec végétation', exercice: 'Vol et nage' },
            origin: 'Asie de l\'Est (Chine, Japon)',
            image: '../img/oiseau-009.png',
            funFact: 'Symbole de fidélité dans la culture asiatique.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Préfère les eaux calmes'
        },
        {
            id: 'oiseau-010',
            name: 'Colombe diamant',
            scientific: 'Geopelia cuneata',
            category: 'oiseau',
            description: 'Petite colombe terrestre, douce et sociable, idéale pour débuter.',
            characteristics: { taille: '19-21 cm', poids: '25-30 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Mélange de graines fines', espace: 'Volière spacieuse', exercice: 'Espace pour voler' },
            origin: 'Australie',
            image: '../img/oiseau-010.png',
            funFact: 'Forme des couples pour la vie.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple ou en petit groupe'
        },
        {
            id: 'oiseau-011',
            name: 'Perruche omnicolore',
            scientific: 'Platycercus eximius',
            category: 'oiseau',
            description: 'Perruche colorée avec un large éventail de couleurs vives.',
            characteristics: { taille: '30-33 cm', poids: '75-120 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Mélange de graines, fruits, légumes', espace: 'Grande volière', exercice: 'Sorties quotidiennes' },
            origin: 'Australie',
            image: '../img/oiseau-011.png',
            funFact: 'Son nom signifie "à toutes les couleurs".',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite beaucoup d\'espace pour voler'
        },
        {
            id: 'oiseau-012',
            name: 'Perruche de Pennant',
            scientific: 'Platycercus elegans',
            category: 'oiseau',
            description: 'Perruche élégante au plumage principalement rouge et vert.',
            characteristics: { taille: '25-30 cm', poids: '65-90 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Graines, fruits, légumes verts', espace: 'Volière spacieuse', exercice: 'Vol régulier' },
            origin: 'Australie',
            image: '../img/oiseau-012.png',
            funFact: 'Très sociable, adore interagir avec son propriétaire.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Préfère les températures modérées'
        },
        {
            id: 'oiseau-013',
            name: 'Perruche palliceps',
            scientific: 'Platycercus adscitus',
            category: 'oiseau',
            description: 'Perruche colorée avec une tête pâle distinctive.',
            characteristics: { taille: '30 cm', poids: '80-110 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Mélange de graines, légumes frais', espace: 'Volière spacieuse', exercice: 'Activité physique quotidienne' },
            origin: 'Australie (nord-est)',
            image: '../img/oiseau-013.png',
            funFact: 'Connaît une période de mue annuelle très marquée.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'A besoin de jouets pour se stimuler'
        },
        {
            id: 'oiseau-014',
            name: 'Perruche à croupion rouge',
            scientific: 'Psephotus haematonotus',
            category: 'oiseau',
            description: 'Perruche de taille moyenne avec un croupion rouge vif caractéristique.',
            characteristics: { taille: '27-28 cm', poids: '60-85 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Graines, légumes, fruits occasionnels', espace: 'Volière spacieuse', exercice: 'Vol libre supervisé' },
            origin: 'Australie (sud)',
            image: '../img/oiseau-014.png',
            funFact: 'Le mâle a des couleurs plus vives que la femelle.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Sociable, peut vivre en groupe'
        },
        {
            id: 'oiseau-015',
            name: 'Kakariki à front rouge',
            scientific: 'Cyanoramphus novaezelandiae',
            category: 'oiseau',
            description: 'Perruche de Nouvelle-Zélande, vive et intelligente.',
            characteristics: { taille: '25 cm', poids: '50-70 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Graines, fruits, légumes, bourgeons', espace: 'Grande volière', exercice: 'Beaucoup d\'activité' },
            origin: 'Nouvelle-Zélande',
            image: '../img/oiseau-015.png',
            funFact: 'Connaît pour sa capacité à résoudre des problèmes.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple ou en groupe'
        },
        // LOT 2 - Oiseaux 016-025
        {
            id: 'oiseau-016',
            name: 'Kakariki à front jaune',
            scientific: 'Cyanoramphus auriceps',
            category: 'oiseau',
            description: 'Perruche de Nouvelle-Zélande avec une tête jaune distinctive et un corps vert.',
            characteristics: { taille: '23-25 cm', poids: '50-70 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Graines, fruits, légumes verts', espace: 'Volière spacieuse', exercice: 'Activité physique quotidienne' },
            origin: 'Nouvelle-Zélande',
            image: '../img/oiseau-016.png',
            funFact: 'Espèce menacée dans la nature, protégée en captivité.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Préfère les températures fraîches'
        },
        {
            id: 'oiseau-017',
            name: 'Perruche de Bourke',
            scientific: 'Neopsephotus bourkii',
            category: 'oiseau',
            description: 'Petite perruche calme et discrète, idéale pour les petits espaces.',
            characteristics: { taille: '19 cm', poids: '35-45 g', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Graines, millet, légumes', espace: 'Cage moyenne', exercice: 'Vol modéré' },
            origin: 'Australie',
            image: '../img/oiseau-017.png',
            funFact: 'L\'une des rares perruches nocturne, active au crépuscule.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Très calme, adaptée aux appartements'
        },
        {
            id: 'oiseau-018',
            name: 'Perruche élégante',
            scientific: 'Neophema elegans',
            category: 'oiseau',
            description: 'Perruche élancée au plumage doux et aux couleurs pastel.',
            characteristics: { taille: '22-24 cm', poids: '40-55 g', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Mélange de graines fines, légumes verts', espace: 'Volière spacieuse', exercice: 'Vol régulier' },
            origin: 'Australie',
            image: '../img/oiseau-018.png',
            funFact: 'Se déplace avec élégance au sol comme dans les airs.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple'
        },
        {
            id: 'oiseau-019',
            name: 'Perruche turquoisine',
            scientific: 'Neophema pulchella',
            category: 'oiseau',
            description: 'Petite perruche aux couleurs vives de turquoise et orange.',
            characteristics: { taille: '20-22 cm', poids: '40-50 g', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Graines, millet, légumes frais', espace: 'Volière', exercice: 'Espace pour voler' },
            origin: 'Australie (sud-est)',
            image: '../img/oiseau-019.png',
            funFact: 'Son plumage change de couleur selon l\'angle de la lumière.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Sociable avec d\'autres petites perruches'
        },
        {
            id: 'oiseau-020',
            name: 'Perruche splendide',
            scientific: 'Neophema splendida',
            category: 'oiseau',
            description: 'Perruche colorée avec un mélange de vert, bleu, rouge et jaune.',
            characteristics: { taille: '19-21 cm', poids: '35-45 g', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Graines variées, légumes', espace: 'Volière', exercice: 'Activité régulière' },
            origin: 'Australie',
            image: '../img/oiseau-020.png',
            funFact: 'Mâle et femelle ont des plumages très différents.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Préfère les espaces calmes'
        },
        {
            id: 'oiseau-021',
            name: 'Inséparable à face rose',
            scientific: 'Agapornis roseicollis',
            category: 'oiseau',
            description: 'Petit perroquet très affectueux, connu pour ses liens forts avec son partenaire.',
            characteristics: { taille: '15-18 cm', poids: '45-60 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Graines, fruits, légumes, os de seiche', espace: 'Cage spacieuse', exercice: 'Jeux et interaction' },
            origin: 'Afrique du Sud-Ouest (Namibie, Angola)',
            image: '../img/oiseau-021.png',
            funFact: 'Doit son nom à son visage rose caractéristique.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Doit absolument être gardé en couple'
        },
        {
            id: 'oiseau-022',
            name: 'Inséparable de Fischer',
            scientific: 'Agapornis fischeri',
            category: 'oiseau',
            description: 'Inséparable coloré avec un bec rouge vif et un plumage vert avec des touches de rouge et jaune.',
            characteristics: { taille: '14-15 cm', poids: '40-55 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Graines, fruits, légumes', espace: 'Cage avec jouets', exercice: 'Stimulation mentale' },
            origin: 'Afrique de l\'Est (Tanzanie)',
            image: '../img/oiseau-022.png',
            funFact: 'Très sociable, adore interagir avec les humains.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Besoin de beaucoup d\'attention'
        },
        {
            id: 'oiseau-023',
            name: 'Inséparable à tête noire',
            scientific: 'Agapornis personatus',
            category: 'oiseau',
            description: 'Inséparable avec une tête noire distinctive et un collier orange.',
            characteristics: { taille: '15 cm', poids: '45-55 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Mélange de graines, fruits, légumes', espace: 'Cage spacieuse', exercice: 'Jeux interactifs' },
            origin: 'Afrique de l\'Est (Tanzanie, Kenya)',
            image: '../img/oiseau-023.png',
            funFact: 'Connaît pour imiter des sons simples.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple pour son bien-être'
        },
        {
            id: 'oiseau-024',
            name: 'Perruche à collier d\'âne',
            scientific: 'Psittacula krameri',
            category: 'oiseau',
            description: 'Perruche verte avec un collier noir, intelligente et sociable.',
            characteristics: { taille: '40-42 cm (avec queue)', poids: '100-140 g', esperanceVie: '20-30 ans' },
            needs: { alimentation: 'Graines, fruits, légumes, noix', espace: 'Grande cage ou volière', exercice: 'Sorties quotidiennes' },
            origin: 'Afrique subsaharienne et Asie du Sud',
            image: '../img/oiseau-024.png',
            funFact: 'Capable d\'imiter la parole et des sons.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite beaucoup de stimulation intellectuelle'
        },
        {
            id: 'oiseau-025',
            name: 'Perruche à collier d\'Asie (pas sur de la photo!)',
            scientific: 'Psittacula krameri manillensis',
            category: 'oiseau',
            description: 'Plus grande que la perruche à collier d\'âne, avec un bec rouge et un collier noir.',
            characteristics: { taille: '50-55 cm (avec queue)', poids: '120-180 g', esperanceVie: '20-30 ans' },
            needs: { alimentation: 'Graines, fruits, légumes, noix', espace: 'Grande volière', exercice: 'Espace pour voler' },
            origin: 'Asie du Sud et Sud-Est',
            image: '../img/oiseau-025.png',
            funFact: 'Son cri est plus puissant que celui de la perruche à collier d\'âne.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'A besoin de beaucoup d\'espace'
        },
        // LOT 3 - Oiseaux 026-035
        {
            id: 'oiseau-026',
            name: 'Perruche de tête de prune',
            scientific: 'Psittacula cyanocephala',
            category: 'oiseau',
            description: 'Perruche colorée avec une tête rouge vif ressemblant à une prune.',
            characteristics: { taille: '23-25 cm', poids: '70-90 g', esperanceVie: '15-20 ans' },
            needs: { alimentation: 'Graines, fruits, légumes verts', espace: 'Volière spacieuse', exercice: 'Activité physique quotidienne' },
            origin: 'Nouvelle-Guinée',
            image: '../img/oiseau-026.png',
            funFact: 'Son nom vient de sa tête rouge en forme de prune.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple'
        },
        {
            id: 'oiseau-027',
            name: 'Perruche grande alexandre',
            scientific: 'Psittacula eupatria alexandri',
            category: 'oiseau',
            description: 'Perruche à collier de grande taille, intelligente et sociable.',
            characteristics: { taille: '58-62 cm (avec queue)', poids: '180-250 g', esperanceVie: '25-30 ans' },
            needs: { alimentation: 'Graines, fruits, légumes, noix', espace: 'Très grande volière', exercice: 'Sorties quotidiennes' },
            origin: 'Asie du Sud (Inde, Sri Lanka, Bengladesh)',
            image: '../img/oiseau-027.png',
            funFact: 'Capable d\'apprendre à parler avec un vocabulaire étendu.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite beaucoup de stimulation mentale'
        },
        {
            id: 'oiseau-028',
            name: 'Perruche souris aussi appelée conure veuve',
            scientific: 'Myiopsitta monachus',
            category: 'oiseau',
            description: 'Toute petite perruche, très active et sociable.',
            characteristics: { taille: '13-14 cm', poids: '25-30 g', esperanceVie: '10-15 ans' },
            needs: { alimentation: 'Mélange de graines fines, légumes, fruits', espace: 'Cage spacieuse', exercice: 'Beaucoup de mouvement' },
            origin: 'Amérique du Sud (Colombie, Équateur)',
            image: '../img/oiseau-028.png',
            funFact: 'Son nom vient de sa petite taille et de son apparence de souris.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en groupe pour son épanouissement'
        },
        {
            id: 'oiseau-029',
            name: 'Perruche Catherine ou Toui catherine',
            scientific: 'Bolborhynchus lineola',
            category: 'oiseau',
            description: 'Perruche élégante aux couleurs douces, calme et discrète.',
            characteristics: { taille: '20-22 cm', poids: '40-55 g', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Graines, légumes verts', espace: 'Volière', exercice: 'Espace pour voler' },
            origin: 'Australie',
            image: '../img/oiseau-029.png',
            funFact: 'Son plumage rappelle celui d\'une poupée de porcelaine.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Préfère les environnements calmes'
        },
        {
            id: 'oiseau-030',
            name: 'Perruche princesse de Galles',
            scientific: 'Polytelis alexandrae',
            category: 'oiseau',
            description: 'Perruche élégante aux couleurs pastel, nommée en l\'honneur de la princesse Alexandra.',
            characteristics: { taille: '40-45 cm (avec queue)', poids: '100-130 g', esperanceVie: '15-20 ans' },
            needs: { alimentation: 'Graines, fruits, légumes, noix', espace: 'Grande volière', exercice: 'Vol régulier' },
            origin: 'Australie (centre et ouest)',
            image: '../img/oiseau-030.png',
            funFact: 'Très calme et peu bruyante pour une perruche de cette taille.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'S\'adapte bien à la vie en captivité'
        },
        {
            id: 'oiseau-031',
            name: 'Perruche céleste ou Toui céleste',
            scientific: 'Forpus coelestis',
            category: 'oiseau',
            description: 'Perruche de petite taille avec un ventre jaune vif et un dos vert.',
            characteristics: { taille: '20-22 cm', poids: '40-50 g', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Graines, légumes verts', espace: 'Volière', exercice: 'Activité modérée' },
            origin: 'Amérique du Sud (Equateur)',
            image: '../img/oiseau-031.png',
            funFact: 'Espèce rare en captivité, protégée dans certaines régions.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple'
        },
        {
            id: 'oiseau-032',
            name: 'Conure de Molina',
            scientific: 'Pyrrhura molinae',
            category: 'oiseau',
            description: 'Perruche verte avec des touches de rouge et bleu, très sociable.',
            characteristics: { taille: '25-28 cm', poids: '70-90 g', esperanceVie: '15-20 ans' },
            needs: { alimentation: 'Graines, fruits, légumes', espace: 'Volière spacieuse', exercice: 'Jeux et interaction' },
            origin: 'Amérique du Sud (Bolivie, Argentine, Brésil)',
            image: '../img/oiseau-032.png',
            funFact: 'Très câline, adore les grattouilles.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite beaucoup d\'attention'
        },
        {
            id: 'oiseau-033',
            name: 'Perruche calopsitte',
            scientific: 'Nymphicus hollandicus',
            category: 'oiseau',
            description: 'Perruche crêtée, intelligente et affectueuse, avec une huppe distinctive.',
            characteristics: { taille: '30-33 cm (avec queue)', poids: '80-120 g', esperanceVie: '15-20 ans' },
            needs: { alimentation: 'Graines, légumes, fruits', espace: 'Grande cage ou volière', exercice: 'Sorties quotidiennes' },
            origin: 'Australie',
            image: '../img/oiseau-033.png',
            funFact: 'Son nom vient de sa huppe qui rappelle un casque (calopsitte = "à belle huppe").',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Capable d\'apprendre des tours'
        },
        {
            id: 'oiseau-034',
            name: 'Moineau du Japon',
            scientific: 'Lonchura domestica',
            category: 'oiseau',
            description: 'Petit passereau domestique, sociable et facile à entretenir.',
            characteristics: { taille: '11-12 cm', poids: '12-15 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines pour exotiques, légumes verts', espace: 'Cage spacieuse', exercice: 'Espace pour sauter' },
            origin: 'Indonésie,Asie du Sud-Est (domestiqué)',
            image: '../img/oiseau-034.png',
            funFact: 'Très prolifique, se reproduit facilement en captivité.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple ou en groupe'
        },
        {
            id: 'oiseau-035',
            name: 'Diamant mandarin',
            scientific: 'Taeniopygia guttata',
            category: 'oiseau',
            description: 'Petit passereau coloré, très populaire en aviculture.',
            characteristics: { taille: '10-11 cm', poids: '8-12 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet, légumes', espace: 'Volière spacieuse', exercice: 'Vol libre' },
            origin: 'Australie et Indonésie',
            image: '../img/oiseau-035.png',
            funFact: 'Le mâle a un bec rouge vif et des joues orange.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Se reproduit très facilement'
        },
        // LOT 4 - Oiseaux 036-045
        {
            id: 'oiseau-036',
            name: 'Diamant modeste',
            scientific: 'Neochmia modesta',
            category: 'oiseau',
            description: 'Petit diamant discret avec un plumage principalement gris et brun.',
            characteristics: { taille: '10-11 cm', poids: '8-12 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet', espace: 'Volière', exercice: 'Espace pour voler' },
            origin: 'Asie, Australie',
            image: '../img/oiseau-036.png',
            funFact: 'Son chant est très mélodieux pour un si petit oiseau.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple'
        },
        {
            id: 'oiseau-037',
            name: 'Diamant à goutelettes',
            scientific: 'Stagonopleura guttata ou Emblema pictum',
            category: 'oiseau',
            description: 'Petit diamant reconnaissable à ses taches blanches en forme de goutelettes.',
            characteristics: { taille: '10-11 cm', poids: '8-12 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet, légumes verts', espace: 'Volière', exercice: 'Activité modérée' },
            origin: 'Australie',
            image: '../img/oiseau-037.png',
            funFact: 'Son plumage semble constellé de petites étoiles blanches.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Sociable avec d\'autres petits passereaux'
        },
        {
            id: 'oiseau-038',
            name: 'Diamant à queue rousse',
            scientific: 'Neochmia ruficauda',
            category: 'oiseau',
            description: 'Diamant coloré avec une queue rousse caractéristique.',
            characteristics: { taille: '11-12 cm', poids: '10-14 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines, millet, légumes', espace: 'Volière spacieuse', exercice: 'Vol régulier' },
            origin: 'Australie (est)',
            image: '../img/oiseau-038.png',
            funFact: 'La queue rousse est très visible en vol.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en petit groupe'
        },
        {
            id: 'oiseau-039',
            name: 'Diamant à longue queue',
            scientific: 'Poephila acuticauda',
            category: 'oiseau',
            description: 'Diamant élancé avec une longue queue pointue, très élégant.',
            characteristics: { taille: '15-18 cm (avec queue)', poids: '12-16 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet, insectes', espace: 'Volière longue', exercice: 'Espace pour voler' },
            origin: 'Australie (nord)',
            image: '../img/oiseau-039.png',
            funFact: 'Sa longue queue représente près de la moitié de sa taille totale.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite une volière adaptée à sa morphologie'
        },
        {
            id: 'oiseau-040',
            name: 'Diamant de Kittlitz',
            scientific: 'Erythrura trichroa',
            category: 'oiseau',
            description: 'Diamant coloré avec un plumage tri-coloré (vert, rouge, bleu).',
            characteristics: { taille: '10-12 cm', poids: '10-14 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet', espace: 'Volière', exercice: 'Espace pour voler' },
            origin: 'Australie, Polynésie',
            image: '../img/oiseau-040.png',
            funFact: 'Espèce rare en captivité, très prisée des collectionneurs.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Préfère les environnements humides'
        },
        {
            id: 'oiseau-041',
            name: 'Pape de Nouméa ou Diamant à tête rouge',
            scientific: 'Erythrura psittacea',
            category: 'oiseau',
            description: 'Petit diamant avec un plumage bleu et vert vif.',
            characteristics: { taille: '10-12 cm', poids: '10-14 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet, fruits', espace: 'Volière', exercice: 'Activité modérée' },
            origin: 'Nouvelle-Calédonie',
            image: '../img/oiseau-041.png',
            funFact: 'Son nom vient de la couleur de son plumage rappelant une robe de pape.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple'
        },
        {
            id: 'oiseau-042',
            name: 'Bec de plomb',
            scientific: 'Lonchura malabarica ou Euodice malabarica',
            category: 'oiseau',
            description: 'Petit passereau avec un bec épais de couleur plomb.',
            characteristics: { taille: '11-12 cm', poids: '12-15 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines, millet, insectes', espace: 'Volière', exercice: 'Espace pour sauter' },
            origin: 'Qatar, Inde, Sri Lanka',
            image: '../img/oiseau-042.png',
            funFact: 'Son bec puissant lui permet de casser des graines dures.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en groupe'
        },
        {
            id: 'oiseau-043',
            name: 'Bec d\'argent',
            scientific: 'Lonchura Cantans ou Euodice cantans',
            category: 'oiseau',
            description: 'Petit passereau au bec argenté et au plumage contrasté.',
            characteristics: { taille: '10-11 cm', poids: '10-12 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines fines, millet', espace: 'Volière', exercice: 'Activité modérée' },
            origin: 'Afrique sud-saharienne',
            image: '../img/oiseau-043.png',
            funFact: 'Son bec métallique brille sous la lumière.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Sociable avec d\'autres passereaux'
        },
        {
            id: 'oiseau-044',
            name: 'Padda',
            scientific: 'Lonchura oryzivora',
            category: 'oiseau',
            description: 'Petit passereau trapu, très populaire comme oiseau de cage.',
            characteristics: { taille: '11-12 cm', poids: '12-16 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines de riz, millet, légumes', espace: 'Cage spacieuse', exercice: 'Espace pour sauter' },
            origin: 'Indonésie (Java, Bali)',
            image: '../img/oiseau-044.png',
            funFact: 'Très prolifique, peut se reproduire toute l\'année.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en couple ou en groupe'
        },
        {
            id: 'oiseau-045',
            name: 'Cou-coupé',
            scientific: 'Amadina fasciata',
            category: 'oiseau',
            description: 'Passereau avec une queue très courte, donnant l\'impression d\'un cou coupé.',
            characteristics: { taille: '11-12 cm', poids: '12-15 g', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Graines, millet, légumes', espace: 'Volière', exercice: 'Espace pour se déplacer' },
            origin: 'Afrique subsaharienne',
            image: '../img/oiseau-045.png',
            funFact: 'Son nom vient de l\'apparence de son corps sans queue.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Très sociable avec ses congénères'
        }
    ],
    
    NAC: [
        {
            id: 'NAC-001',
            name: 'Lapin Nain',
            scientific: 'Oryctolagus cuniculus',
            category: 'NAC',
            description: 'Petit mammifère herbivore, doux et sociable.',
            characteristics: { taille: '20-40 cm', poids: '800 g - 2 kg', esperanceVie: '8-12 ans' },
            needs: { alimentation: 'Foin à volonté, granulés, légumes frais', espace: 'Grand enclos', exercice: 'Sorties quotidiennes' },
            origin: 'Europe (domestique)',
            image: '../img/NAC-001.png',
            funFact: 'Peut apprendre à répondre à son nom.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Vaccination contre la myxomatose recommandée'
        },
        {
            id: 'NAC-002',
            name: 'Hamster Doré',
            scientific: 'Mesocricetus auratus',
            category: 'NAC',
            description: 'Petit rongeur nocturne, facile à entretenir.',
            characteristics: { taille: '12-17 cm', poids: '85-150 g', esperanceVie: '2-3 ans' },
            needs: { alimentation: 'Mélange de graines, légumes', espace: 'Cage spacieuse', exercice: 'Roue de course' },
            origin: 'Syrie (domestiqué en Europe)',
            image: '../img/NAC-002.png',
            funFact: 'A des abajoues pour transporter de la nourriture.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Ne pas réveiller pendant la journée'
        },
        {
            id: 'NAC-003',
            name: 'Cochon d\'Inde',
            scientific: 'Cavia porcellus',
            category: 'NAC',
            description: 'Petit mammifère sociable et vocal.',
            characteristics: { taille: '20-30 cm', poids: '700 g - 1,2 kg', esperanceVie: '5-8 ans' },
            needs: { alimentation: 'Foin, granulés, légumes riches en vitamine C', espace: 'Grand enclos', exercice: 'Sorties quotidiennes' },
            origin: 'Amérique du Sud (Andes)',
            image: '../img/NAC-003.png',
            funFact: 'Communique par une variété de sons.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Doit être gardé en groupe (minimum 2)'
        },
        {
            id: 'NAC-004',
            name: 'Chinchilla',
            scientific: 'Chinchilla lanigera',
            category: 'NAC',
            description: 'Petit rongeur au pelage dense et soyeux.',
            characteristics: { taille: '22-38 cm', poids: '400-600 g', esperanceVie: '10-20 ans' },
            needs: { alimentation: 'Foin de graminées, granulés', espace: 'Grande cage', exercice: 'Jouets, cachettes' },
            origin: 'Amérique du Sud (Chili, Pérou)',
            image: '../img/NAC-004.png',
            funFact: 'Possède l\'un des pelages les plus denses au monde.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Température idéale : 18-22°C'
        },
        {
            id: 'NAC-005',
            name: 'Furet',
            scientific: 'Mustela putorius furo',
            category: 'NAC',
            description: 'Petit carnivore joueur et affectueux.',
            characteristics: { taille: '30-50 cm', poids: '500 g - 2 kg', esperanceVie: '6-10 ans' },
            needs: { alimentation: 'Viande crue ou proies entières', espace: 'Grande cage multi-étages', exercice: 'Sorties quotidiennes' },
            origin: 'Europe (domestiqué à partir du putois d\'Afrique du Nord)',
            image: '../img/NAC-005.png',
            funFact: 'Dort 14 à 18 heures par jour.',
            regulation: 'Identification et vaccinations obligatoires',
            advice: 'Nécessite beaucoup d\'attention'
        },
        {
            id: 'NAC-006',
            name: 'Souris',
            scientific: 'Mus musculus domesticus',
            category: 'NAC',
            description: 'Petit rongeur intelligent et sociable, idéal pour débuter.',
            characteristics: { taille: '5-10 cm', poids: '20-40 g', esperanceVie: '2-3 ans' },
            needs: { alimentation: 'Graines, légumes, protéines', espace: 'Cage spacieuse avec cachettes', exercice: 'Roue et jouets' },
            origin: 'Monde entier (domestiquée)',
            image: '../img/NAC-006.png',
            funFact: 'Très intelligente, peut apprendre des tours.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'À garder en groupe de même sexe'
        },
        {
            id: 'NAC-007',
            name: 'Rat',
            scientific: 'Rattus norvegicus domesticus',
            category: 'NAC',
            description: 'Rongeur très intelligent et affectueux, excellent compagnon.',
            characteristics: { taille: '20-28 cm', poids: '250-500 g', esperanceVie: '2-3 ans' },
            needs: { alimentation: 'Granulés, légumes, fruits', espace: 'Grande cage multi-niveaux', exercice: 'Sorties quotidiennes' },
            origin: 'Europe (domestiqué)',
            image: '../img/NAC-007.png',
            funFact: 'Peut être apprivoisé et reconnaître son propriétaire.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Besoin de beaucoup de stimulation intellectuelle'
        },
        {
            id: 'NAC-008',
            name: 'Gerbille',
            scientific: 'Meriones unguiculatus',
            category: 'NAC',
            description: 'Petit rongeur actif et sociable, peu odorant.',
            characteristics: { taille: '10-15 cm', poids: '50-100 g', esperanceVie: '3-4 ans' },
            needs: { alimentation: 'Mélange de graines, légumes', espace: 'Grand bac avec substrat épais', exercice: 'Roue et tunnels' },
            origin: 'Afrique et Asie (Mongolie, Chine)',
            image: '../img/NAC-008.png',
            funFact: 'Creuse des galeries dans le sable.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Doit être gardée en groupe'
        }
    ],
    
    poisson: [
        {
            id: 'poisson-001',
            name: 'Poisson Rouge',
            scientific: 'Carassius auratus',
            category: 'poisson',
            description: 'Poisson d\'aquarium résistant et coloré.',
            characteristics: { taille: '25-35 cm', temperature: '18-24°C', esperanceVie: '10-25 ans' },
            needs: { espace: 'Minimum 200L aquarium', alimentation: 'Granulés, flocons, légumes' },
            origin: 'Asie (Chine, domestiqué)',
            image: '../img/poisson-001.png',
            funFact: 'Peut reconnaître son propriétaire.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Éviter les petits bocaux'
        },
        {
            id: 'poisson-002',
            name: 'Guppy',
            scientific: 'Poecilia reticulata',
            category: 'poisson',
            description: 'Petit poisson coloré et prolifique.',
            characteristics: { taille: '4-6 cm', temperature: '22-28°C', esperanceVie: '2-3 ans' },
            needs: { espace: 'Minimum 50L aquarium', alimentation: 'Flocons, micro-granulés' },
            origin: 'Amérique du Sud (Brésil, Guyana, Venezuela)',
            image: '../img/poisson-002.png',
            funFact: 'Les femelles donnent naissance à des alevins déjà formés.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Attention à la reproduction non contrôlée'
        },
        {
            id: 'poisson-003',
            name: 'Discus',
            scientific: 'Symphysodon spp.',
            category: 'poisson',
            description: 'Poisson plat coloré et majestueux.',
            characteristics: { taille: '12-15 cm', temperature: '26-30°C', esperanceVie: '10-15 ans' },
            needs: { espace: 'Minimum 400L aquarium', alimentation: 'Nourriture spécialisée' },
            origin: 'Amazonie (Brésil, Colombie, Pérou)',
            image: '../img/poisson-003.png',
            funFact: 'Surnommé "le roi de l\'aquarium".',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Nécessite une eau très propre'
        },
        {
            id: 'poisson-004',
            name: 'Scalaire',
            scientific: 'Pterophyllum scalare',
            category: 'poisson',
            description: 'Poisson élégant en forme de triangle.',
            characteristics: { taille: '12-15 cm', temperature: '24-28°C', esperanceVie: '8-10 ans' },
            needs: { espace: 'Minimum 200L aquarium, hauteur 50 cm', alimentation: 'Flocons, granulés' },
            origin: 'Amazonie (Brésil, Colombie, Pérou)',
            image: '../img/poisson-004.png',
            funFact: 'Pond ses œufs sur des feuilles larges.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Éviter les poissons trop petits'
        },
        {
            id: 'poisson-005',
            name: 'Poisson-Clown',
            scientific: 'Amphiprion spp.',
            category: 'poisson',
            description: 'Poisson marin coloré, symbiose avec les anémones.',
            characteristics: { taille: '8-11 cm', temperature: '24-27°C', esperanceVie: '5-10 ans' },
            needs: { espace: 'Minimum 200L aquarium pour un couple', alimentation: 'Nourriture pour poissons marins' },
            origin: 'Océan Pacifique (Indo-Pacifique)',
            image: '../img/poisson-005.png',
            funFact: 'Immunisé contre les toxines des anémones.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'L\'anémone n\'est pas indispensable'
        }
    ],
    
    jardin: [
        {
            id: 'jardin-001',
            name: 'Carpe Koï',
            scientific: 'Cyprinus carpio',
            category: 'jardin',
            description: 'Poisson d\'ornement coloré pour les bassins.',
            characteristics: { taille: '30-90 cm', temperature: '10-25°C', esperanceVie: '25-50 ans' },
            needs: { espace: 'Bassin minimum 1000L', alimentation: 'Granulés spécifiques' },
            origin: 'Asie de l\'Est (domestiquée)',
            image: '../img/jardin-001.png',
            funFact: 'Peut vivre plus de 50 ans.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Protéger le bassin contre les prédateurs'
        },
        {
            id: 'jardin-002',
            name: 'Tortue d\'eau',
            scientific: 'Trachemys scripta',
            category: 'jardin',
            description: 'Tortue aquatique populaire et longévive.',
            characteristics: { taille: '15-30 cm', temperature: '20-30°C', esperanceVie: '30-50 ans' },
            needs: { espace: 'Bassin ou aquarium spacieux', alimentation: 'Granulés, légumes, viande' },
            origin: 'Amérique du Nord (Floride)',
            image: '../img/jardin-002.png',
            funFact: 'Certaines espèces sont interdites à la vente en Europe.',
            regulation: 'Certificat de capacité obligatoire pour certaines espèces',
            advice: 'Filtre puissant nécessaire'
        },
        {
            id: 'jardin-003',
            name: 'Écrevisse Américaine',
            scientific: 'Procambarus clarkii',
            category: 'jardin',
            description: 'Crustacé d\'eau douce, très résistant.',
            characteristics: { taille: '10-15 cm', temperature: '15-25°C', esperanceVie: '3-6 ans' },
            needs: { espace: 'Bassin ou aquarium', alimentation: 'Omnivore' },
            origin: 'Amérique du Nord (Louisiane)',
            image: '../img/jardin-003.png',
            funFact: 'Peut régénérer ses pinces.',
            regulation: 'Espèce invasife, réglementée',
            advice: 'Ne pas relâcher dans la nature'
        },
        {
            id: 'jardin-004',
            name: 'Grenouille Verte',
            scientific: 'Pelophylax spp.',
            category: 'jardin',
            description: 'Amphibien commun, utile pour l\'écosystème.',
            characteristics: { taille: '5-10 cm', temperature: '15-25°C', esperanceVie: '5-10 ans' },
            needs: { espace: 'Étang ou mare', alimentation: 'Insectes' },
            origin: 'Europe, Afrique, Asie',
            image: '../img/jardin-004.png',
            funFact: 'Peut sauter jusqu\'à 2 mètres.',
            regulation: 'Protection de certaines espèces',
            advice: 'Éviter les produits chimiques'
        },
        {
            id: 'jardin-005',
            name: 'Axolotl',
            scientific: 'Ambystoma mexicanum',
            category: 'jardin',
            description: 'Amphibien mexicain fascinant, capable de régénération.',
            characteristics: { taille: '15-30 cm', temperature: '14-18°C', esperanceVie: '10-15 ans' },
            needs: { espace: 'Aquarium spécial', alimentation: 'Vers de terre, granulés' },
            origin: 'Mexique (lac Xochimilco)',
            image: '../img/jardin-005.png',
            funFact: 'Peut régénérer des membres entiers.',
            regulation: 'Espèce protégée, certificat obligatoire',
            advice: 'Attention à la température'
        }
    ]
};

// Catégories d'animaux
const ANIMAL_CATEGORIES = [
    { id: "chien", name: "Chien", icon: "🐕", description: "Tous les aspects liés aux chiens" },
    { id: "chat", name: "Chat", icon: "🐈", description: "Tous les aspects liés aux chats" },
    { id: "oiseau", name: "Oiseau", icon: "🦜", description: "Oiseaux de compagnie" },
    { id: "NAC", name: "Petits mammifères NAC", icon: "🐹", description: "Nouveaux Animaux de Compagnie" },
    { id: "poisson", name: "Aquariophilie", icon: "🐠", description: "Poissons d'eau douce et de mer" },
    { id: "jardin", name: "Jardin aquatique", icon: "🐸", description: "Étangs, bassins et plantes aquatiques" },
    { id: "all", name: "Tous les animaux", icon: "🐾", description: "Toutes les catégories" }
];

// ============================================
// BLOCS DE COMPÉTENCES - BAC PRO TCVA
// ============================================

const BLOCS = [
    { id: "BC01", name: "Accueillir et accompagner le client", icon: "👋", description: "Accueil physique et téléphonique, gestion des réclamations" },
    { id: "BC02", name: "Conseiller et vendre", icon: "💬", description: "Conseil et vente de produits et services" },
    { id: "BC03", name: "Gérer les stocks", icon: "📦", description: "Gestion des stocks et des approvisionnements" },
    { id: "BC04", name: "Participer à la gestion de l'animalerie", icon: "🏪", description: "Gestion administrative et commerciale" },
    { id: "BC05", name: "Conseiller sur les produits", icon: "🛒", description: "Conseil sur les produits d'animalerie" },
    { id: "BC06", name: "Conseiller sur les animaux", icon: "🐾", description: "Conseil sur les animaux et leur entretien" },
    { id: "BC07", name: "Assurer l'hygiène et la sécurité", icon: "🧼", description: "Hygiène, sécurité et normes sanitaires" },
    { id: "BC08", name: "Réceptionner et stocker", icon: "📥", description: "Réception et mise en stockage des marchandises" },
    { id: "BC09", name: "Participer à la gestion commerciale", icon: "📊", description: "Analyse commerciale et gestion" },
    { id: "BC10", name: "Participer à la gestion des animaux", icon: "🐕", description: "Gestion et soin des animaux en animalerie" },
    { id: "BC11", name: "Communiquer avec les professionnels", icon: "📞", description: "Communication avec fournisseurs et partenaires" },
    { id: "BC12", name: "Participer à l'animation commerciale", icon: "🎯", description: "Animation et promotion commerciale" }
];

// Map des blocs principaux pour chaque catégorie
const CATEGORY_BLOCS = {
    chien: ["BC05", "BC06", "BC10"],
    chat: ["BC05", "BC06", "BC10"],
    oiseau: ["BC05", "BC06", "BC10"],
    NAC: ["BC05", "BC06", "BC10"],
    poisson: ["BC05", "BC06", "BC10"],
    jardin: ["BC05", "BC06", "BC10"]
};

// ============================================
// DÉFIS PAR BLOC DE COMPÉTENCES
// ============================================

// Niveaux de défis
const CHALLENGE_LEVELS = {
    BRONZE: { name: 'Bronze', icon: '🥉', threshold: 25, color: '#CD7F32', reward: 'Débutant' },
    SILVER: { name: 'Argent', icon: '🥈', threshold: 50, color: '#C0C0C0', reward: 'Intermédiaire' },
    GOLD: { name: 'Or', icon: '🥇', threshold: 75, color: '#FFD700', reward: 'Avancé' },
    PLATINUM: { name: 'Platine', icon: '🏆', threshold: 100, color: '#E5E4E2', reward: 'Expert' }
};

// Défis par bloc
const CHALLENGES = [
    {
        id: 'CH01',
        blocId: 'BC01',
        name: 'Maîtriser l\'accueil client',
        description: 'Apprendre à accueillir et accompagner efficacement les clients en animalerie',
        objective: 'Étudier tous les animaux associés au bloc BC01',
        targetCount: 'all', // 'all' signifie tous les animaux du bloc
        difficulty: 'Facile',
        reward: 'Médaille Bronze',
        points: 100,
        icon: '👋'
    },
    {
        id: 'CH02',
        blocId: 'BC01',
        name: 'Devenir expert en accueil',
        description: 'Atteindre 100% de maîtrise pour le bloc Accueillir et accompagner le client',
        objective: '100% de maîtrise du bloc BC01',
        targetCount: 100, // 100% de maîtrise
        difficulty: 'Difficile',
        reward: 'Médaille Platine',
        points: 300,
        icon: '🎖️'
    },
    {
        id: 'CH03',
        blocId: 'BC02',
        name: 'Conseiller comme un pro',
        description: 'Maîtriser les techniques de conseil et de vente',
        objective: 'Étudier 75% des animaux du bloc BC02',
        targetCount: 75,
        difficulty: 'Moyen',
        reward: 'Médaille Argent',
        points: 200,
        icon: '💬'
    },
    {
        id: 'CH04',
        blocId: 'BC02',
        name: 'Vendeur hors pair',
        description: 'Atteindre l\'excellence en conseil et vente',
        objective: '100% de maîtrise du bloc BC02',
        targetCount: 100,
        difficulty: 'Difficile',
        reward: 'Médaille Platine',
        points: 300,
        icon: '💎'
    },
    {
        id: 'CH05',
        blocId: 'BC05',
        name: 'Conseiller sur les produits',
        description: 'Maîtriser le conseil sur les produits d\'animalerie',
        objective: 'Étudier 50% des animaux du bloc BC05',
        targetCount: 50,
        difficulty: 'Facile',
        reward: 'Médaille Bronze',
        points: 100,
        icon: '🛒'
    },
    {
        id: 'CH06',
        blocId: 'BC05',
        name: 'Expert produits',
        description: 'Connaître tous les produits et leurs utilisations',
        objective: '100% de maîtrise du bloc BC05',
        targetCount: 100,
        difficulty: 'Difficile',
        reward: 'Médaille Platine',
        points: 300,
        icon: '🏪'
    },
    {
        id: 'CH07',
        blocId: 'BC06',
        name: 'Spécialiste animalier',
        description: 'Conseiller sur tous les types d\'animaux',
        objective: 'Étudier 50% des animaux du bloc BC06',
        targetCount: 50,
        difficulty: 'Moyen',
        reward: 'Médaille Argent',
        points: 200,
        icon: '🐾'
    },
    {
        id: 'CH08',
        blocId: 'BC06',
        name: 'Encyclopédie animale',
        description: 'Devenir une référence sur les animaux d\'animalerie',
        objective: '100% de maîtrise du bloc BC06',
        targetCount: 100,
        difficulty: 'Difficile',
        reward: 'Médaille Platine',
        points: 300,
        icon: '📚'
    },
    {
        id: 'CH09',
        blocId: 'BC07',
        name: 'Champion de l\'hygiène',
        description: 'Maîtriser les normes d\'hygiène et de sécurité',
        objective: 'Étudier tous les animaux du bloc BC07',
        targetCount: 'all',
        difficulty: 'Facile',
        reward: 'Médaille Bronze',
        points: 100,
        icon: '🧼'
    },
    {
        id: 'CH10',
        blocId: 'BC07',
        name: 'Expert sanitaire',
        description: 'Connaître toutes les normes sanitaires par cœur',
        objective: '100% de maîtrise du bloc BC07',
        targetCount: 100,
        difficulty: 'Moyen',
        reward: 'Médaille Or',
        points: 250,
        icon: '⚕️'
    },
    {
        id: 'CH11',
        blocId: 'BC10',
        name: 'Gestionnaire d\'animaux',
        description: 'Apprendre à gérer et soigner les animaux',
        objective: 'Étudier 50% des animaux du bloc BC10',
        targetCount: 50,
        difficulty: 'Facile',
        reward: 'Médaille Bronze',
        points: 100,
        icon: '🐕'
    },
    {
        id: 'CH12',
        blocId: 'BC10',
        name: 'Responsable animalerie',
        description: 'Maîtriser la gestion complète des animaux',
        objective: '100% de maîtrise du bloc BC10',
        targetCount: 100,
        difficulty: 'Difficile',
        reward: 'Médaille Platine',
        points: 300,
        icon: '👨‍💼'
    },
    {
        id: 'CH13',
        blocId: 'all',
        name: 'Défi Ultimate TCVA',
        description: 'Maîtriser tous les blocs de compétences du Bac Pro TCVA',
        objective: 'Atteindre 80% de maîtrise globale',
        targetCount: 80,
        difficulty: 'Extrême',
        reward: 'Trophée Ultimate 🏆',
        points: 1000,
        icon: '🌟'
    },
    {
        id: 'CH14',
        blocId: 'all',
        name: 'Perfection absolue',
        description: 'Devenir un expert complet en animalerie',
        objective: '100% de maîtrise de tous les animaux',
        targetCount: 100,
        difficulty: 'Légendaire',
        reward: 'Diplôme Virtuel TCVA',
        points: 2000,
        icon: '🎓'
    }
];

// Mapping des blocs spécifiques pour certains animaux (avec réglementation ou particularités)
const SPECIFIC_ANIMAL_BLOCS = {
    // Animaux nécessitant certificat de capacité
    'oiseau-001': ["BC01", "BC02", "BC05", "BC06", "BC07", "BC10", "BC11"], // Perroquet Gris du Gabon
    'oiseau-004': ["BC01", "BC02", "BC05", "BC06", "BC07", "BC10", "BC11"], // Calao Rhinocéros
    'jardin-002': ["BC01", "BC02", "BC05", "BC06", "BC07", "BC10", "BC11"], // Tortue d'eau
    'jardin-005': ["BC01", "BC02", "BC05", "BC06", "BC07", "BC10", "BC11"], // Axolotl
    'NAC-005': ["BC01", "BC02", "BC05", "BC06", "BC07", "BC10", "BC11"], // Furet
    'NAC-004': ["BC05", "BC06", "BC07", "BC10", "BC11"], // Chinchilla (température spécifique)
    
    // Animaux populaires pour le conseil client (BC01, BC02)
    'chien-001': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Labrador
    'chien-002': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Berger Allemand
    'chien-003': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Caniche
    'chien-004': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Bulldog Français
    'chien-005': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Golden Retriever
    'chat-001': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Chat Européen
    'chat-002': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Persan
    'chat-003': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Siamois
    'chat-004': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Maine Coon
    'chat-005': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Bengal
    
    // Oiseaux populaires
    'oiseau-002': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Canari
    'oiseau-003': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Perruche Ondulée
    'oiseau-005': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Diamant de Gould
    
    // NAC populaires
    'NAC-001': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Lapin Nain
    'NAC-002': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Hamster Doré
    'NAC-003': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Cochon d'Inde
    'NAC-006': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Souris
    'NAC-007': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Rat
    'NAC-008': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Gerbille
    
    // Poissons populaires
    'poisson-001': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Poisson Rouge
    'poisson-002': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Guppy
    'poisson-003': ["BC05", "BC06", "BC07", "BC10"], // Discus (eau très propre)
    'poisson-004': ["BC05", "BC06", "BC07", "BC10"], // Scalaire (aquarium haut)
    'poisson-005': ["BC05", "BC06", "BC07", "BC10"], // Poisson-Clown (aquarium marin)
    
    // Jardin populaires
    'jardin-001': ["BC01", "BC02", "BC05", "BC06", "BC10"], // Carpe Koï
    'jardin-003': ["BC05", "BC06", "BC07", "BC10", "BC11"], // Écrevisse Américaine (espèce invasife)
    'jardin-004': ["BC05", "BC06", "BC10"], // Grenouille Verte
    
    // Blocs supplémentaires pour gestion de rayon (BC03, BC08)
    // Animaux nécessitant une gestion de stock particulière
    'poisson-003': ["BC03", "BC05", "BC06", "BC07", "BC08", "BC10"], // Discus
    'poisson-005': ["BC03", "BC05", "BC06", "BC07", "BC08", "BC10"], // Poisson-Clown
    
    // Animaux pour animation commerciale (BC12)
    'chien-001': ["BC01", "BC02", "BC05", "BC06", "BC10", "BC12"], // Labrador (animation)
    'chat-004': ["BC01", "BC02", "BC05", "BC06", "BC10", "BC12"], // Maine Coon (animation)
    'oiseau-001': ["BC01", "BC02", "BC05", "BC06", "BC07", "BC10", "BC11", "BC12"], // Perroquet Gris (animation)
    'NAC-001': ["BC01", "BC02", "BC05", "BC06", "BC10", "BC12"]  // Lapin Nain (animation)
};
