# Application de Révision Bac Pro TCVA

**Technicien Conseil-Vente en Animalerie** - Plateforme interactive de révision et d'évaluation

## 🎯 Objectif

Cette application a été créée pour aider les élèves du Bac Pro TCVA à réviser efficacement en s'appuyant sur les **12 blocs de compétences** officiels du référentiel. Elle propose :

- Un **quiz interactif** avec timer et explications détaillées
- Une **base de questions** organisée par blocs de compétences
- Un **module spécialisé** pour la reconnaissance d'animaux
- Un **suivi de progression** avec recommandations personnalisées
- Une section **"À retenir"** avec les points clés

## 📚 Contenu Pédagogique

### Les 12 Blocs de Compétences

1. **BC01** - Construire son raisonnement autour des enjeux du monde actuel
2. **BC02** - Débattre à l'ère de la mondialisation
3. **BC03** - Développer son identité culturelle
4. **BC04** - Agir collectivement dans des situations sociales et professionnelles
5. **BC05** - Conseiller le client sur les produits d'animalerie
6. **BC06** - Situer l'entreprise dans son environnement socioprofessionnel
7. **BC07** - Communiquer en situation professionnelle
8. **BC08** - Organiser son travail en fonction de la politique commerciale
9. **BC09** - Mettre en œuvre des techniques de vente en animalerie
10. **BC10** - Gérer un rayon de produits d'animalerie
11. **BC11** - Mettre en œuvre des pratiques professionnelles liées aux produits d'animalerie
12. **BC12** - S'adapter à des enjeux professionnels particuliers

### Module Spécial : Reconnaissance des Animaux

Le module dédié à la reconnaissance d'animaux permet d'apprendre à identifier et conseiller sur :

- **Chiens** (Labrador, Berger Allemand, Caniche, Bulldog Français, Golden Retriever)
- **Chats** (Européen, Persan, Siamois, Maine Coon, Bengal)
- **Oiseaux** (Perroquet Gris du Gabon, Canari, Perruche Ondulée, Calao Rhinocéros, Diamant de Gould)
- **NAC** (Lapin Nain, Hamster Doré, Cochon d'Inde, Chinchilla, Furet)
- **Poissons** (Poisson Rouge, Guppy, Discus, Scalaire, Poisson-Clown)
- **Jardin Aquatique** (Carpe Koï, Tortue d'eau, Écrevisse Américaine, Grenouille Verte, Axolotl)

## ✨ Fonctionnalités

### Quiz Interactif
- Configuration personnalisée (bloc de compétences, niveau, catégorie d'animaux)
- Questions chronométrées avec barre de progression
- Explications détaillées après chaque réponse
- Score final avec pourcentage de réussite
- Revue des erreurs pour une amélioration ciblée

### Base de Questions
- Toutes les questions organisées par bloc de compétences
- Filtres par niveau de difficulté (Facile, Intermédiaire, Avancé)
- Filtres par catégorie d'animaux
- Recherche plein texte dans les questions et explications
- Possibilité d'afficher/masquer les réponses

### Module Reconnaissance Animaux
- **Apprentissage** : Fiches détaillées pour chaque espèce avec photos, caractéristiques, besoins, réglementation
- **Quiz d'identification** : Reconnaître les animaux à partir de photos
- **Comparaison** : Tableaux comparatifs par catégorie
- **Groupes** : Navigation par catégorie d'animaux

### Suivi de Progression
- Historique des quiz (20 derniers)
- Questions vues et pourcentage de maîtrise
- Blocs de compétences maîtrisés (seuil de 70%)
- Révisions recommandées basées sur vos performances
- Sauvegarde locale (localStorage)

## 🚀 Utilisation

### 1. Lancer en local
- Ouvrir le fichier `index.html` dans un navigateur web (Chrome, Firefox, Edge, Safari)
- Aucune installation nécessaire, application 100% statique

### 2. Navigation
- **Accueil** : Vue d'ensemble avec statistiques et recommandations
- **Quiz** : Configuration et passage des quiz
- **Base de Questions** : Révisions par bloc de compétences
- **Reconnaissance Animaux** : Module spécialisé
- **À Retenir** : Points clés à mémoriser

### 3. Conseils de révision
1. Commencez par la **base de questions** pour (re)voir les concepts clés
2. Enchaînez avec le **quiz** pour évaluer votre niveau
3. Utilisez le **module animaux** pour maîtriser la reconnaissance des espèces
4. Consultez régulièrement les **recommandations** pour cibler vos faiblesses

## 📂 Structure du Projet

```
tcva-app/
├── index.html              # Page principale
├── README.md               # Documentation
├── css/
│   ├── style.css           # Styles principaux
│   └── animals.css          # Styles du module animaux
├── js/
│   ├── quiz-tcva.js        # Base de questions TCVA
│   └── script-tcva.js      # Logique principale
└── modules/
    ├── animaux.html         # Page du module animaux
    ├── animaux.js           # Logique du module animaux
    └── animals-db.js        # Base de données des animaux
```

## 🎯 Accès aux Ressources

L'application s'appuie sur le référentiel officiel du **Bac Pro TCVA** et les documents du dossier `referentiel/` :

- RNCP38856 - BAC PRO Technicien conseil vente en animalerie
- Blocs de compétences officiels
- Réglementation et normes du secteur

## 📜 Licence

Ce projet est une application éducative gratuite. Vous pouvez l'utiliser, la modifier et la partager librement pour des fins pédagogiques.

## 💡 Conseils Pédagogiques

### Pour les élèves :
- Réviser régulièrement par petits modules
- Varier les modes d'apprentissage (quiz, fiche, reconnaissance visuelle)
- Prendre des notes sur les erreurs fréquentes
- Utiliser les recommandations pour cibler les blocs à renforcer

### Pour les enseignants :
- Intégrer l'application dans les séances de révision
- Utiliser le module animaux pour les TP pratiques
- Encourager les élèves à suivre leur progression
- Compléter avec des ressources papier du référentiel

## 🔧 Personnalisation

Vous pouvez facilement ajouter de nouvelles questions ou animaux :

1. **Ajouter une question** : Modifier le fichier `js/quiz-tcva.js`
   ```javascript
   {
       id: NOUVEL_ID,
       bloc: "BCXX",
       question: "Votre question",
       options: ["Réponse 1", "Réponse 2", "Réponse 3", "Réponse 4"],
       correct: INDEX_DE_LA_BONNE_REPONSE,
       explanation: "Explication détaillée",
       niveau: "Facile/Intermédiaire/Avancé",
       animal: "all" // ou "chien", "chat", etc.
   }
   ```

2. **Ajouter un animal** : Modifier le fichier `modules/animals-db.js`
   ```javascript
   {
       id: 'CATEGORIE-NUMERO',
       name: 'Nom de l\'animal',
       scientific: 'Nom scientifique',
       category: 'CATEGORIE',
       description: 'Description de l\'animal',
       characteristics: { taille: '...', poids: '...', esperanceVie: '...' },
       needs: { alimentation: '...', espace: '...' },
       image: 'URL_DE_L_IMAGE',
       funFact: 'Anecdote',
       regulation: 'Réglementation',
       advice: 'Conseil'
   }
   ```

## 📞 Support

Pour toute question ou suggestion, contactez votre enseignant référent ou consultez les documents officiels du Bac Pro TCVA.

---

**Application développée pour faciliter l'apprentissage et la maîtrise des compétences du Bac Pro TCVA**
