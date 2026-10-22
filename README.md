# portfolio-valhor
Portfolio de candidature — Communication digitale et éditoriale — Caroline Camilleri

Proposition exploratoire réalisée dans le cadre de ma candidature. Campagne non commandée et non diffusée.
Ce site n’est pas le site officiel de VALHOR.

## Consulter localement

Ouvrir `index.html` dans un navigateur (double-clic). Aucune installation, aucun serveur requis.
Pour un serveur local facultatif : `npx serve .` puis ouvrir l’adresse indiquée.

## Structure

```
index.html                  Squelette de la page
assets/js/content.js        TOUS les textes, chemins d’images et statuts (fichier à modifier)
assets/js/main.js           Rendu de la page, carrousel, agrandissement, menu mobile
assets/css/styles.css       Mise en forme (palette de travail en variables CSS)
assets/img/carrousel/       Pages 01 à 05 du carrousel (WebP 720 px, WebP 1122 px, JPG de secours)
assets/img/photos/          Recadrages photo issus des visuels, utilisés dans « La démarche »
valhor-0X-*.png.png         Fichiers sources fournis (non utilisés directement par le site)
```

## Mettre à jour les contenus

Tout se fait dans `assets/js/content.js`.

- **Newsletter** : renseigner `realisations.newsletter.apercus.ordinateur` et `.mobile`
  (chemins d’images, par ex. `assets/img/newsletter/desktop.webp`), puis
  `lienVersionComplete` (fichier HTML ou PDF), et passer `statut` à `"disponible"`.
  Le lien « Consulter la newsletter complète » n’apparaît que lorsque ce chemin est renseigné.
- **Vidéo** : renseigner `realisations.video.fichier` (par ex. `assets/video/metiers.mp4`),
  `sousTitres` (fichier `.vtt`), `affiche` et `descriptionAccessible`, puis passer `statut`
  à `"disponible"`. Le lecteur n’apparaît que lorsque le fichier est renseigné.
- **Calendrier** : `organisation.lignes` (le statut de chaque ligne pilote son badge).
- **Statuts** : libellés et icônes dans `STATUTS` (le statut est toujours porté par un texte,
  pas seulement par la couleur).

Pour régénérer les images optimisées à partir d’un nouveau PNG source :

```
convert source.png -strip -quality 82 assets/img/carrousel/nom.webp
convert source.png -strip -resize 720x -quality 80 assets/img/carrousel/nom-720.webp
convert source.png -strip -quality 84 -interlace Plane assets/img/carrousel/nom.jpg
```

## Accessibilité

Site conçu en tenant compte des bonnes pratiques (HTML sémantique, focus visible, carrousel
utilisable au clavier, transcription des pages, respect de `prefers-reduced-motion`).
Aucun audit de conformité RGAA n’a été réalisé.

## Contenus et IA

Visuels et contenus produits avec l’aide de l’IA, sous la direction éditoriale et visuelle de
Caroline Camilleri. Les personnes représentées sont des images générées.
Aucun formulaire, aucun outil de suivi, aucune police externe.
