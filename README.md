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
assets/js/main.js           Rendu de la page, maquette LinkedIn, carrousel, agrandissement
assets/css/styles.css       Mise en forme (palette de travail en variables CSS)
assets/img/carrousel/       Pages 01 à 05 du carrousel (carrés : WebP 720 px, WebP 1254 px, JPG de secours)
assets/fonts/               Montserrat (licence SIL OFL)
sources/                    Visuels fournis, en qualité d’origine (non utilisés directement par le site)
```

## Mettre à jour les contenus

Tout se fait dans `assets/js/content.js`. La page suit trois blocs : introduction,
six réalisations (chacune reliée à une attente citée de l’annonce, à mon expérience
et aux compétences illustrées), puis la démarche.

- **Newsletter** (réalisation `newsletter`) : renseigner `media.apercu` (image) et `lien`
  (fichier HTML ou PDF), puis passer `statut` à `"disponible"`. Le bouton
  « Consulter la version complète » n’apparaît que lorsque `lien` est renseigné.
- **Vidéo** (réalisation `video`) : renseigner `media.fichier` (par ex. `assets/video/metiers.mp4`),
  `media.sousTitres` (`.vtt`), `media.affiche` et `media.description`, puis passer `statut`
  à `"disponible"`. Le lecteur n’apparaît que lorsque le fichier est renseigné.
- **Carrousel** : tableau `carrousel` (ordre d’affichage = ordre du tableau).

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

## Typographie

Titres en Montserrat (licence libre SIL OFL, fichier dans `assets/fonts/`, hébergé sur le site :
aucun appel à un service externe). Texte courant en police système.
