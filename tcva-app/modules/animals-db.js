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
            image: '../img/chien-001.svg',
            funFact: 'Race de chien la plus populaire au monde.',
            regulation: 'Identification par puce obligatoire en France',
            advice: 'Éducation précoce recommandée'
        },
        {
            id: 'chien-002',
            name: 'Berger Allemand',
            scientific: 'Canis lupus familiaris',
            category: 'chien',
            description: 'Chien de travail polyvalent, loyal et protecteur.',
            characteristics: { taille: '55-65 cm', poids: '22-40 kg', esperanceVie: '9-13 ans', temperament: 'Loyal, intelligent, protecteur' },
            needs: { alimentation: 'Alimentation riche en protéines', espace: 'Besoin d\'espace', exercice: '2 heures minimum/jour' },
            image: '../img/chien-002.svg',
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
            characteristics: { taille: '24-60 cm', poids: '2-32 kg', esperanceVie: '12-15 ans' },
            needs: { alimentation: 'Alimentation adaptée à la taille', espace: 'S\'adapte à la vie en appartement', exercice: '30 min à 1 heure/jour' },
            image: '../img/chien-003.svg',
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
            characteristics: { taille: '30 cm', poids: '8-14 kg', esperanceVie: '10-12 ans', temperament: 'Joueur, affectueux, calme' },
            needs: { alimentation: 'Attention à l\'obésité', espace: 'Adapté à la vie en appartement', exercice: '30 min/jour' },
            image: '../img/chien-004.svg',
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
            characteristics: { taille: '51-61 cm', poids: '25-34 kg', esperanceVie: '10-12 ans' },
            needs: { alimentation: 'Croquettes de qualité', espace: 'Maison avec jardin idéale', exercice: '1-2 heures/jour' },
            image: '../img/chien-005.svg',
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
            characteristics: { taille: '30-40 cm', poids: '3-5 kg', esperanceVie: '12-15 ans' },
            needs: { alimentation: 'Croquettes et/ou pâtée', espace: 'S\'adapte à la vie en intérieur', exercice: 'Jeux quotidiens' },
            image: '../img/chat-001.svg',
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
            characteristics: { taille: '45-50 cm', poids: '3-5 kg', esperanceVie: '12-16 ans' },
            needs: { alimentation: 'Alimentation de qualité', espace: 'Adapté à la vie en intérieur', exercice: 'Jeux calmes' },
            image: '../img/chat-002.svg',
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
            characteristics: { taille: '40-50 cm', poids: '3-5 kg', esperanceVie: '15-20 ans' },
            needs: { alimentation: 'Alimentation de qualité', espace: 'Besoin d\'espace', exercice: 'Jeux interactifs' },
            image: '../img/chat-003.svg',
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
            characteristics: { taille: '60-100 cm (avec queue)', poids: '5-10 kg', esperanceVie: '12-15 ans' },
            needs: { alimentation: 'Alimentation riche en protéines', espace: 'Besoin d\'espace', exercice: 'Jeux et griffoirs' },
            image: '../img/chat-004.svg',
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
            characteristics: { taille: '40-50 cm', poids: '4-6 kg', esperanceVie: '12-16 ans' },
            needs: { alimentation: 'Alimentation riche en protéines', espace: 'Grand espace nécessaire', exercice: 'Beaucoup de stimulation' },
            image: '../img/chat-005.svg',
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
            image: '../img/oiseau-001.svg',
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
            image: '../img/oiseau-002.svg',
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
            image: '../img/oiseau-003.svg',
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
            image: '../img/oiseau-004.svg',
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
            image: '../img/oiseau-005.svg',
            funFact: 'Existe en trois variétés de couleur de tête.',
            regulation: 'Aucune réglementation spécifique',
            advice: 'Sensible aux courants d\'air'
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
            image: '../img/NAC-001.svg',
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
            image: '../img/NAC-002.svg',
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
            image: '../img/NAC-003.svg',
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
            image: '../img/NAC-004.svg',
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
            image: '../img/NAC-005.svg',
            funFact: 'Dort 14 à 18 heures par jour.',
            regulation: 'Identification et vaccinations obligatoires',
            advice: 'Nécessite beaucoup d\'attention'
        }
    ],
    
    poisson: [
        {
            id: 'poisson-001',
            name: 'Poisson Rouge',
            scientific: 'Cyprinus carpio',
            category: 'poisson',
            description: 'Poisson d\'aquarium résistant et coloré.',
            characteristics: { taille: '25-35 cm', temperature: '18-24°C', esperanceVie: '10-25 ans' },
            needs: { aquarium: 'Minimum 200L', alimentation: 'Granulés, flocons, légumes' },
            image: '../img/poisson-001.svg',
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
            needs: { aquarium: 'Minimum 50L', alimentation: 'Flocons, micro-granulés' },
            image: '../img/poisson-002.svg',
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
            needs: { aquarium: 'Minimum 400L', alimentation: 'Nourriture spécialisée' },
            image: '../img/poisson-003.svg',
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
            needs: { aquarium: 'Minimum 200L, hauteur 50 cm', alimentation: 'Flocons, granulés' },
            image: '../img/poisson-004.svg',
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
            needs: { aquarium: 'Minimum 200L pour un couple', alimentation: 'Nourriture pour poissons marins' },
            image: '../img/poisson-005.svg',
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
            needs: { bassin: 'Minimum 1000L', alimentation: 'Granulés spécifiques' },
            image: '../img/jardin-001.svg',
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
            needs: { habitat: 'Bassin ou aquarium spacieux', alimentation: 'Granulés, légumes, viande' },
            image: '../img/jardin-002.svg',
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
            needs: { habitat: 'Bassin ou aquarium', alimentation: 'Omnivore' },
            image: '../img/jardin-003.svg',
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
            needs: { habitat: 'Étang ou mare', alimentation: 'Insectes' },
            image: '../img/jardin-004.svg',
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
            needs: { habitat: 'Aquarium spécial', alimentation: 'Vers de terre, granulés' },
            image: '../img/jardin-005.svg',
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
