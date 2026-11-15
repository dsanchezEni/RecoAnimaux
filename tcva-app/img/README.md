# Dossier Images - Animaux

Ce dossier contient les images des animaux pour le module de reconnaissance d'animaux.

## Structure

```
img/
├── README.md                    # Ce fichier
├── chien-001.jpg               # Labrador Retriever
├── chien-002.jpg               # Berger Allemand
├── chien-003.jpg               # Caniche
├── chien-004.jpg               # Bulldog Français
├── chien-005.jpg               # Golden Retriever
├── chat-001.jpg                # Chat Européen
├── chat-002.jpg                # Persan
├── chat-003.jpg                # Siamois
├── chat-004.jpg                # Maine Coon
├── chat-005.jpg                # Bengal
├── oiseau-001.jpg             # Perroquet Gris du Gabon
├── oiseau-002.jpg             # Canari
├── oiseau-003.jpg             # Perruche Ondulée
├── oiseau-004.jpg             # Calao Rhinocéros
├── oiseau-005.jpg             # Diamant de Gould
├── NAC-001.jpg                # Lapin Nain
├── NAC-002.jpg                # Hamster Doré
├── NAC-003.jpg                # Cochon d'Inde
├── NAC-004.jpg                # Chinchilla
├── NAC-005.jpg                # Furet
├── poisson-001.jpg            # Poisson Rouge
├── poisson-002.jpg            # Guppy
├── poisson-003.jpg            # Discus
├── poisson-004.jpg            # Scalaire
├── poisson-005.jpg            # Poisson-Clown
├── jardin-001.jpg             # Carpe Koï
├── jardin-002.jpg             # Tortue d'eau
├── jardin-003.jpg             # Écrevisse Américaine
├── jardin-004.jpg             # Grenouille Verte
└── jardin-005.jpg             # Axolotl
```

## Images Actuelles

Les images actuelles sont des **placeholders SVG** (400x300 pixels) qui s'affichent correctement dans les navigateurs. Elles contiennent :
- Un fond gris clair
- Le nom de la catégorie
- L'ID de l'animal
- Un message indiquant qu'il faut remplacer l'image

## Comment ajouter vos propres images

### Option 1 : Remplacer les fichiers existants

1. Préparez vos images (format JPG, PNG ou WebP recommandé)
2. Nommez-les avec les mêmes IDs que dans la base de données :
   - `chien-001.jpg` pour le Labrador Retriever
   - `chat-001.jpg` pour le Chat Européen
   - etc.
3. Remplacez les fichiers existants dans ce dossier

### Option 2 : Utiliser des images externes

Modifiez le fichier `modules/animals-db.js` et remplacez les chemins locaux par des URLs externes :

```javascript
{
    id: 'chien-001',
    name: 'Labrador Retriever',
    image: 'https://votre-site.com/images/labrador.jpg',
    // ... autres propriétés
}
```

## Taille recommandée

- **Format** : JPG, PNG ou WebP
- **Dimensions** : 400x300 pixels (minimum) pour une bonne qualité d'affichage
- **Taille de fichier** : Moins de 500 Ko par image pour un chargement rapide

## Conseils

1. **Noms de fichiers** : Respectez la convention de nommage existante (`CATEGORIE-NUMERO.jpg`)
2. **Qualité** : Utilisez des images de bonne qualité mais optimisées pour le web
3. **Droits d'auteur** : Assurez-vous d'avoir les droits d'utilisation des images
4. **Format** : Préférez le format WebP pour un meilleur rapport qualité/taille

## Liste des correspondances

| ID | Animal | Catégorie |
|----|--------|-----------|
| chien-001 | Labrador Retriever | chien |
| chien-002 | Berger Allemand | chien |
| chien-003 | Caniche | chien |
| chien-004 | Bulldog Français | chien |
| chien-005 | Golden Retriever | chien |
| chat-001 | Chat Européen | chat |
| chat-002 | Persan | chat |
| chat-003 | Siamois | chat |
| chat-004 | Maine Coon | chat |
| chat-005 | Bengal | chat |
| oiseau-001 | Perroquet Gris du Gabon | oiseau |
| oiseau-002 | Canari | oiseau |
| oiseau-003 | Perruche Ondulée | oiseau |
| oiseau-004 | Calao Rhinocéros | oiseau |
| oiseau-005 | Diamant de Gould | oiseau |
| NAC-001 | Lapin Nain | NAC |
| NAC-002 | Hamster Doré | NAC |
| NAC-003 | Cochon d'Inde | NAC |
| NAC-004 | Chinchilla | NAC |
| NAC-005 | Furet | NAC |
| poisson-001 | Poisson Rouge | poisson |
| poisson-002 | Guppy | poisson |
| poisson-003 | Discus | poisson |
| poisson-004 | Scalaire | poisson |
| poisson-005 | Poisson-Clown | poisson |
| jardin-001 | Carpe Koï | jardin |
| jardin-002 | Tortue d'eau | jardin |
| jardin-003 | Écrevisse Américaine | jardin |
| jardin-004 | Grenouille Verte | jardin |
| jardin-005 | Axolotl | jardin |

## Outils pour optimiser les images

- **TinyPNG** : https://tinypng.com/ (compression sans perte de qualité)
- **Squoosh** : https://squoosh.app/ (conversion et optimisation)
- **GIMP** : Logiciel gratuit pour redimensionner
- **Photoshop** : Outils professionnels d'optimisation

## Remarque

Les sous-dossiers (`chien/`, `chat/`, etc.) sont vides et peuvent être supprimés ou utilisés pour organiser vos images par catégorie si vous le souhaitez.
