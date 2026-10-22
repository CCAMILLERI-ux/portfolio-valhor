/*
 * Rendu du portfolio à partir de window.PORTFOLIO (assets/js/content.js).
 * Aucun contenu éditorial n'est écrit ici.
 */
(function () {
  "use strict";

  var C = window.PORTFOLIO;
  var main = document.getElementById("contenu");

  /* ---------- Utilitaires ---------- */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var ICONES = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 2"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/>',
    leaf: '<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19l8-8"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    prev: '<path d="M15 5l-7 7 7 7"/>',
    next: '<path d="M9 5l7 7-7 7"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'
  };

  function icone(nom, classe) {
    return '<svg class="' + (classe || "icon") + '" aria-hidden="true" focusable="false" viewBox="0 0 24 24">' + ICONES[nom] + "</svg>";
  }

  // Le statut est porté par un texte + une icône, jamais par la seule couleur.
  function badge(cle, libelle) {
    var s = C.STATUTS[cle];
    return '<span class="badge badge--' + esc(cle) + '">' + icone(s.icone) +
      '<span><span class="sr-only">Statut : </span>' + esc(libelle || s.libelle) + "</span></span>";
  }

  function liste(items, classe) {
    return '<ul class="' + (classe || "list") + '">' + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }

  function sectionHead(id, numero, titre, chapo) {
    return '<header class="section-head">' +
      '<p class="section-head__num" aria-hidden="true">' + numero + "</p>" +
      '<h2 id="' + id + '-titre">' + esc(titre) + "</h2>" +
      (chapo ? '<p class="lead">' + esc(chapo) + "</p>" : "") +
      "</header>";
  }

  function picture(base, alt, opts) {
    opts = opts || {};
    return '<picture>' +
      '<source type="image/webp" srcset="' + esc(base) + '-720.webp 720w, ' + esc(base) + '.webp 1122w" sizes="' + (opts.sizes || "(min-width: 900px) 520px, 92vw") + '">' +
      '<img src="' + esc(base) + '.jpg" width="1122" height="1402" alt="' + esc(alt) + '"' +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
      "</picture>";
  }

  /* ---------- En-tête, mention, pied de page ---------- */

  function slot(nom) { return document.querySelector('[data-slot="' + nom + '"]'); }

  slot("mention").innerHTML = icone("leaf") + "<span>" + esc(C.meta.mention) + "</span>";
  slot("autrice").textContent = C.meta.autrice;
  slot("role").textContent = C.meta.role;
  slot("nav").innerHTML = C.navigation.map(function (n) {
    return '<li><a href="#' + n.id + '">' + esc(n.libelle) + "</a></li>";
  }).join("");

  slot("footer").innerHTML =
    '<div><p class="site-footer__name">' + esc(C.meta.autrice) + "</p>" +
    "<p>" + esc(C.meta.role) + "</p></div>" +
    '<div class="site-footer__notes">' +
    "<p>" + esc(C.meta.mention) + "</p>" +
    "<p>" + esc(C.meta.ia) + "</p>" +
    "<p>Portfolio personnel et indépendant : ce site n’est pas le site officiel de VALHOR et n’engage pas l’interprofession. La palette de couleurs est une proposition de travail, et non une charte officielle.</p>" +
    "<p>" + esc(C.intro.destinataire.mention) + "</p>" +
    "<p>Site conçu en tenant compte des bonnes pratiques d’accessibilité. Aucun audit de conformité n’a été réalisé. Aucun outil de suivi n’est utilisé.</p>" +
    '<p><a href="#haut">Revenir en haut de la page</a></p>' +
    "</div>";

  /* ---------- 1. Introduction ---------- */

  var R = C.realisations;
  var livrables = [R.carrousel, R.publication, R.newsletter, R.video, R.article];
  var couverture = R.carrousel.diapositives[0];

  var html = "";

  html += '<section class="hero" aria-labelledby="intro-titre">' +
    '<div class="wrap hero__grid">' +
    '<div class="hero__text">' +
    '<div class="recipient">' +
    '<p class="eyebrow">' + esc(C.intro.surtitre) + "</p>" +
    '<picture><source type="image/webp" srcset="' + esc(C.intro.destinataire.logo) + '.webp">' +
    '<img class="recipient__logo" src="' + esc(C.intro.destinataire.logo) + '.png" width="600" height="149" alt="' + esc(C.intro.destinataire.alt) + '"></picture>' +
    "</div>" +
    '<h1 id="intro-titre">' + esc(C.intro.titre) + "</h1>" +
    '<p class="hero__lead">' + esc(C.intro.texte) + "</p>" +
    '<p class="hero__signature">' + esc(C.intro.signature) + "</p>" +
    '<p><a class="btn btn--primary" href="#realisations">' + esc(C.intro.bouton) + icone("arrow") + "</a></p>" +
    "</div>" +
    '<figure class="hero__visual">' +
    '<a class="hero__visual-link" href="#carrousel" aria-label="Voir le carrousel LinkedIn, page 1 : ' + esc(couverture.role) + '">' +
    picture(couverture.image, couverture.alt, { eager: true, sizes: "(min-width: 900px) 380px, 70vw" }) +
    "</a>" +
    "<figcaption>Couverture du carrousel LinkedIn · campagne « " + esc(C.intro.campagne.replace(/\.$/, "")) + " »</figcaption>" +
    "</figure>" +
    "</div>" +
    '<nav class="wrap deliverables" aria-labelledby="livrables-titre">' +
    '<h2 class="deliverables__title" id="livrables-titre">Accès direct aux réalisations</h2>' +
    '<ol class="deliverables__list">' +
    livrables.map(function (l) {
      return '<li><a href="#' + l.id + '">' +
        '<span class="deliverables__letter" aria-hidden="true">' + l.lettre + "</span>" +
        '<span class="deliverables__name">' + esc(l.titre) + "</span>" +
        badge(l.statut, l.mentionStatut) +
        "</a></li>";
    }).join("") +
    "</ol></nav>" +
    "</section>";

  /* ---------- 2. La démarche ---------- */

  var D = C.demarche;
  html += '<section class="section" id="demarche" aria-labelledby="demarche-titre"><div class="wrap">' +
    sectionHead("demarche", "01", D.titre, D.chapo) +
    '<div class="brief">' +
    '<h3 class="kicker">Le brief</h3>' +
    '<dl class="brief__list">' +
    D.brief.map(function (b) {
      return '<div class="brief__item"><dt>' + esc(b.terme) + "</dt><dd>" + esc(b.texte) + "</dd></div>";
    }).join("") +
    "</dl></div>" +
    '<div class="channels">' +
    '<h3 class="kicker">Le rôle des canaux</h3>' +
    '<ol class="channels__list">' +
    D.canaux.map(function (c) {
      return '<li><span class="channels__name">' + esc(c.canal) + '</span><span class="channels__role">' + esc(c.role) + "</span></li>";
    }).join("") +
    "</ol></div>" +
    '<div class="univers">' +
    '<h3 class="kicker">Trois univers professionnels</h3>' +
    '<ul class="univers__list">' +
    D.univers.map(function (u) {
      return '<li><figure><img src="' + esc(u.image) + '" alt="' + esc(u.alt) + '" loading="lazy" decoding="async" width="900" height="480">' +
        "<figcaption><strong>" + esc(u.nom) + "</strong>" + esc(u.accroche) + "</figcaption></figure></li>";
    }).join("") +
    "</ul>" +
    '<p class="note">Images générées avec l’aide de l’IA, extraites des visuels du carrousel.</p>' +
    "</div>" +
    "</div></section>";

  /* ---------- 3. Les réalisations ---------- */

  function livrableHead(l, extra) {
    return '<header class="deliverable__head">' +
      '<p class="deliverable__letter" aria-hidden="true">' + l.lettre + "</p>" +
      '<h3 id="' + l.id + '-titre"><span class="sr-only">Réalisation ' + l.lettre + " : </span>" + esc(l.titre) + "</h3>" +
      badge(l.statut, l.mentionStatut) +
      (extra || "") +
      "</header>";
  }

  html += '<section class="section section--tint" id="realisations" aria-labelledby="realisations-titre"><div class="wrap">' +
    sectionHead("realisations", "02", R.titre, R.chapo);

  // A. Carrousel
  var K = R.carrousel;
  var n = K.diapositives.length;
  html += '<article class="deliverable" id="' + K.id + '" aria-labelledby="' + K.id + '-titre">' +
    livrableHead(K) +
    '<div class="carousel-layout">' +
    '<div class="carousel" data-carousel aria-roledescription="carrousel" role="region" aria-label="Carrousel LinkedIn, ' + n + ' pages">' +
    '<div class="carousel__viewport" tabindex="0" aria-describedby="carousel-aide">' +
    K.diapositives.map(function (d, i) {
      return '<div class="carousel__slide" role="group" aria-roledescription="page" aria-label="' + (i + 1) + " sur " + n + " : " + esc(d.role) + '" data-index="' + i + '">' +
        picture(d.image, d.alt, { eager: i === 0 }) + "</div>";
    }).join("") +
    "</div>" +
    '<p class="sr-only" id="carousel-aide">Utilisez les flèches gauche et droite du clavier pour changer de page.</p>' +
    '<div class="carousel__controls">' +
    '<button class="btn-icon" type="button" data-action="prev" aria-label="Page précédente">' + icone("prev") + "</button>" +
    '<p class="carousel__counter" aria-hidden="true"><span data-current>1</span> / ' + n + "</p>" +
    '<button class="btn-icon" type="button" data-action="next" aria-label="Page suivante">' + icone("next") + "</button>" +
    '<button class="btn btn--ghost carousel__zoom" type="button" data-action="zoom">' + icone("expand") + '<span>Agrandir<span class="sr-only"> la page affichée</span></span></button>' +
    "</div>" +
    '<p class="sr-only" aria-live="polite" data-status></p>' +
    '<ol class="carousel__pages" aria-label="Aller directement à une page">' +
    K.diapositives.map(function (d, i) {
      return '<li><button type="button" data-goto="' + i + '" aria-label="Page ' + (i + 1) + " : " + esc(d.role) + '">' +
        '<span aria-hidden="true">' + d.numero + "</span></button></li>";
    }).join("") +
    "</ol>" +
    "</div>" +
    '<div class="carousel-layout__text">' +
    '<p class="lead lead--small">' + esc(K.explication) + "</p>" +
    liste(K.details, "list list--ticks") +
    '<p class="note">' + esc(K.mentionVisuels) + " " + esc(C.meta.ia) + "</p>" +
    "</div>" +
    "</div>" +
    '<details class="transcript">' +
    "<summary>Lire la transcription des " + n + " pages</summary>" +
    '<ol class="transcript__list">' +
    K.diapositives.map(function (d) {
      var t = d.transcription;
      return "<li><p class=\"transcript__meta\">Page " + d.numero + " · " + esc(d.role) + "</p>" +
        '<p class="transcript__kicker">' + esc(t.surtitre) + "</p>" +
        '<p class="transcript__title">' + esc(t.titre) + "</p>" +
        t.texte.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        "</li>";
    }).join("") +
    "</ol></details>" +
    "</article>";

  // B. Publication LinkedIn
  var P = R.publication;
  html += '<article class="deliverable" id="' + P.id + '" aria-labelledby="' + P.id + '-titre">' +
    livrableHead(P) +
    '<div class="split">' +
    '<div class="split__text"><p class="lead lead--small">' + esc(P.explication) + "</p>" +
    '<p class="note">' + esc(P.note) + "</p></div>" +
    '<figure class="post">' +
    '<div class="post__head">' +
    '<span class="post__avatar" aria-hidden="true">' + icone("pen") + "</span>" +
    '<div><p class="post__author">' + esc(P.auteurMaquette) + "</p>" +
    '<p class="post__label">Proposition éditoriale · non publiée</p></div>' +
    "</div>" +
    '<blockquote class="post__body">' +
    P.paragraphes.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
    '<p class="post__tags">' + P.hashtags.map(esc).join(" ") + "</p>" +
    "</blockquote>" +
    '<div class="post__media">' +
    '<img src="' + esc(couverture.image) + '-720.webp" alt="" width="1122" height="1402" loading="lazy" decoding="async">' +
    "<p>Carrousel joint · " + n + ' pages <a href="#carrousel">Voir le carrousel</a></p>' +
    "</div>" +
    "<figcaption class=\"sr-only\">Maquette de publication LinkedIn proposée, sans indicateurs d’engagement.</figcaption>" +
    "</figure>" +
    "</div>" +
    "</article>";

  // C. Newsletter
  var N = R.newsletter;
  function wireframe(type) {
    var apercu = N.apercus[type];
    var label = type === "ordinateur" ? "Aperçu ordinateur" : "Aperçu mobile";
    var inner;
    if (apercu) {
      inner = '<img src="' + esc(apercu) + '" alt="' + label + ' de la newsletter « ' + esc(N.objet) + ' »" loading="lazy" decoding="async">';
    } else {
      inner = '<div class="wire" aria-hidden="true">' +
        '<span class="wire__line wire__line--short"></span>' +
        '<span class="wire__hero"></span>' +
        '<span class="wire__line"></span><span class="wire__line wire__line--mid"></span>' +
        '<span class="wire__cols"><span></span><span></span><span></span></span>' +
        '<span class="wire__cta"></span>' +
        "</div>";
    }
    return '<figure class="device device--' + (type === "ordinateur" ? "desktop" : "mobile") + '">' +
      '<div class="device__screen">' + inner + "</div>" +
      "<figcaption>" + label + (apercu ? "" : " · structure") + "</figcaption></figure>";
  }
  html += '<article class="deliverable" id="' + N.id + '" aria-labelledby="' + N.id + '-titre">' +
    livrableHead(N) +
    '<div class="split split--reverse">' +
    '<div class="split__text">' +
    '<p class="lead lead--small">' + esc(N.explication) + "</p>" +
    '<p class="field"><span class="field__label">Objet proposé</span><span class="field__value">« ' + esc(N.objet) + " »</span></p>" +
    '<h4 class="kicker">Structure prévue</h4>' +
    '<ol class="steps-list">' +
    N.structure.map(function (s) {
      return "<li><strong>" + esc(s.bloc) + "</strong><span>" + esc(s.detail) + "</span></li>";
    }).join("") +
    "</ol>" +
    (N.lienVersionComplete
      ? '<p><a class="btn btn--primary" href="' + esc(N.lienVersionComplete) + '">Consulter la newsletter complète' + icone("arrow") + "</a></p>"
      : '<p class="note">La version complète sera ajoutée ici lorsqu’elle sera disponible.</p>') +
    "</div>" +
    '<div class="devices' + (N.apercus.ordinateur || N.apercus.mobile ? "" : " devices--placeholder") + '">' +
    (N.apercus.ordinateur || N.apercus.mobile ? "" : '<p class="placeholder-tag">' + icone("clock") + esc(N.mentionStatut) + "</p>") +
    wireframe("ordinateur") + wireframe("mobile") +
    "</div>" +
    "</div>" +
    "</article>";

  // D. Vidéo
  var V = R.video;
  var videoBloc;
  if (V.fichier) {
    videoBloc = '<figure class="video-frame video-frame--ready">' +
      '<video controls preload="metadata" playsinline' + (V.affiche ? ' poster="' + esc(V.affiche) + '"' : "") + ">" +
      '<source src="' + esc(V.fichier) + '">' +
      (V.sousTitres ? '<track kind="subtitles" srclang="fr" label="Français" src="' + esc(V.sousTitres) + '" default>' : "") +
      "</video>" +
      (V.descriptionAccessible ? "<figcaption>" + esc(V.descriptionAccessible) + "</figcaption>" : "") +
      "</figure>";
  } else {
    videoBloc = '<div class="video-frame">' +
      '<p class="placeholder-tag">' + icone("clock") + esc(V.mentionStatut) + "</p>" +
      '<p class="video-frame__duration">' + esc(V.duree) + "</p>" +
      '<p class="video-frame__hint">Emplacement réservé au fichier vidéo définitif.</p>' +
      "</div>";
  }
  html += '<article class="deliverable" id="' + V.id + '" aria-labelledby="' + V.id + '-titre">' +
    livrableHead(V) +
    '<div class="split">' +
    '<div class="split__text">' +
    '<p class="lead lead--small">' + esc(V.explication) + "</p>" +
    '<p class="field"><span class="field__label">Durée visée</span><span class="field__value">' + esc(V.duree) + "</span></p>" +
    '<h4 class="kicker">Composantes prévues</h4>' +
    liste(V.composantes, "list list--ticks") +
    "</div>" +
    videoBloc +
    "</div>" +
    "</article>";

  // E. Article
  var A = R.article;
  html += '<article class="deliverable" id="' + A.id + '" aria-labelledby="' + A.id + '-titre">' +
    livrableHead(A) +
    '<div class="article-preview">' +
    '<p class="article-preview__kicker">Angle proposé</p>' +
    '<p class="article-preview__title">' + esc(A.sujet) + "</p>" +
    '<p class="lead lead--small">' + esc(A.explication) + "</p>" +
    '<h4 class="kicker">Pistes de contenu</h4>' +
    liste(A.pistes, "list list--ticks") +
    '<p class="caution">' + icone("search") + "<span>" + esc(A.avertissement) + "</span></p>" +
    "</div>" +
    "</article>";

  html += "</div></section>";

  /* ---------- 4. L'organisation ---------- */

  var O = C.organisation;
  html += '<section class="section" id="organisation" aria-labelledby="organisation-titre"><div class="wrap">' +
    sectionHead("organisation", "03", O.titre, O.chapo) +
    '<div class="table-wrap">' +
    '<table class="calendar">' +
    "<caption>Calendrier de campagne illustratif sur deux semaines. " + esc(O.avertissement) + "</caption>" +
    "<thead><tr>" + O.colonnes.map(function (c) { return '<th scope="col">' + esc(c) + "</th>"; }).join("") + "</tr></thead>" +
    "<tbody>" +
    O.lignes.map(function (l) {
      var cells = [l.periode, l.canal, l.sujet, l.format, l.public];
      return '<tr class="' + (l.statut === "disponible" ? "is-ready" : "") + '">' +
        cells.map(function (v, i) {
          return (i === 0 ? '<th scope="row"' : "<td") + ' data-label="' + esc(O.colonnes[i]) + '">' + esc(v) + (i === 0 ? "</th>" : "</td>");
        }).join("") +
        '<td data-label="' + esc(O.colonnes[5]) + '">' + badge(l.statut) + "</td></tr>";
    }).join("") +
    "</tbody></table></div>" +
    '<div class="workflow">' +
    '<h3 class="kicker">' + esc(O.circuit.titre) + "</h3>" +
    '<ol class="workflow__list">' +
    O.circuit.etapes.map(function (e, i) {
      return '<li><span class="workflow__num" aria-hidden="true">' + (i + 1) + "</span>" +
        "<strong>" + esc(e.etape) + "</strong><span>" + esc(e.detail) + "</span></li>";
    }).join("") +
    "</ol>" +
    '<p class="note">' + esc(O.circuit.avertissement) + "</p>" +
    "</div>" +
    "</div></section>";

  /* ---------- 5. La mesure ---------- */

  var M = C.mesure;
  html += '<section class="section section--dark" id="mesure" aria-labelledby="mesure-titre"><div class="wrap">' +
    sectionHead("mesure", "04", M.titre, M.chapo) +
    '<div class="measure">' +
    '<div class="measure__kpis">' +
    '<h3 class="kicker">Indicateurs suivis</h3>' +
    '<dl class="kpi-list">' +
    M.indicateurs.map(function (g) {
      return '<div class="kpi-list__row"><dt>' + esc(g.canal) + "</dt><dd>" + liste(g.kpis, "chips") + "</dd></div>";
    }).join("") +
    "</dl></div>" +
    '<div class="measure__sponso">' +
    '<h3 class="kicker">' + esc(M.sponsorisation.titre) + "</h3>" +
    '<dl class="sponso-list">' +
    M.sponsorisation.etapes.map(function (e) {
      return "<div><dt>" + esc(e.terme) + "</dt><dd>" + esc(e.texte) + "</dd></div>";
    }).join("") +
    "</dl>" +
    '<p class="caution caution--dark">' + icone("search") + "<span>" + esc(M.sponsorisation.avertissement) + "</span></p>" +
    "</div>" +
    "</div>" +
    "</div></section>";

  /* ---------- 6. Mon profil ---------- */

  var F = C.profil;
  html += '<section class="section" id="profil" aria-labelledby="profil-titre"><div class="wrap">' +
    sectionHead("profil", "05", F.titre) +
    '<div class="profile">' +
    '<div class="profile__intro">' +
    '<p class="lead">' + esc(F.presentation) + "</p>" +
    '<p class="figure"><span class="figure__value" aria-hidden="true">' + esc(F.chiffre.valeur) + '</span><span class="sr-only">' + esc(F.chiffre.valeurLue) + ' </span><span class="figure__label">' + esc(F.chiffre.libelle) + "</span></p>" +
    "</div>" +
    '<div class="profile__match">' +
    '<h3 class="kicker">Mes expériences au regard du poste</h3>' +
    '<table class="match">' +
    '<caption class="sr-only">Correspondance entre mes expériences et les besoins du poste</caption>' +
    '<thead><tr><th scope="col">Mon expérience</th><th scope="col">Besoin du poste</th></tr></thead><tbody>' +
    F.correspondances.map(function (m) {
      return '<tr><th scope="row" data-label="Mon expérience">' + esc(m.experience) + '</th><td data-label="Besoin du poste">' + esc(m.besoin) + "</td></tr>";
    }).join("") +
    "</tbody></table></div>" +
    '<div class="contribution">' +
    '<h3 class="kicker">' + esc(F.contribution.titre) + "</h3>" +
    '<p class="contribution__text">' + esc(F.contribution.texte) + "</p>" +
    '<p class="note">' + esc(C.meta.ia) + "</p>" +
    "<p>" + esc(F.contact) + "</p>" +
    "</div>" +
    "</div>" +
    "</div></section>";

  main.insertAdjacentHTML("beforeend", html);

  /* ---------- Navigation mobile ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principale");
  function setNav(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }
  toggle.addEventListener("click", function () {
    setNav(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setNav(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setNav(false);
      toggle.focus();
    }
  });

  // Section en cours signalée dans le menu.
  if ("IntersectionObserver" in window) {
    var liens = {};
    C.navigation.forEach(function (n) { liens[n.id] = nav.querySelector('a[href="#' + n.id + '"]'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(liens).forEach(function (id) {
          if (id === en.target.id) liens[id].setAttribute("aria-current", "location");
          else liens[id].removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    C.navigation.forEach(function (n) {
      var s = document.getElementById(n.id);
      if (s) io.observe(s);
    });
  }

  /* ---------- Carrousel ---------- */

  var root = document.querySelector("[data-carousel]");
  var viewport = root.querySelector(".carousel__viewport");
  var slides = Array.prototype.slice.call(root.querySelectorAll(".carousel__slide"));
  var btnPrev = root.querySelector('[data-action="prev"]');
  var btnNext = root.querySelector('[data-action="next"]');
  var btnZoom = root.querySelector('[data-action="zoom"]');
  var current = root.querySelector("[data-current]");
  var status = root.querySelector("[data-status]");
  var pageBtns = Array.prototype.slice.call(root.querySelectorAll("[data-goto]"));
  var index = 0;

  function show(i, announce) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach(function (s, k) {
      var active = k === index;
      s.classList.toggle("is-active", active);
      s.setAttribute("aria-hidden", String(!active));
      if ("inert" in s) s.inert = !active;
    });
    pageBtns.forEach(function (b, k) {
      if (k === index) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
    current.textContent = index + 1;
    var d = K.diapositives[index];
    if (announce) status.textContent = "Page " + (index + 1) + " sur " + slides.length + " : " + d.role;

    // Pas de bouclage : on désactive en bout de course, sans perdre le focus.
    var focused = document.activeElement;
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === slides.length - 1;
    if (focused === btnPrev && btnPrev.disabled) btnNext.focus();
    if (focused === btnNext && btnNext.disabled) btnPrev.focus();

    if (lightbox.open) renderLightbox();
  }

  btnPrev.addEventListener("click", function () { show(index - 1, true); });
  btnNext.addEventListener("click", function () { show(index + 1, true); });
  pageBtns.forEach(function (b) {
    b.addEventListener("click", function () { show(Number(b.getAttribute("data-goto")), true); });
  });

  function onArrows(e) {
    if (e.key === "ArrowLeft") { show(index - 1, true); e.preventDefault(); }
    else if (e.key === "ArrowRight") { show(index + 1, true); e.preventDefault(); }
    else if (e.key === "Home") { show(0, true); e.preventDefault(); }
    else if (e.key === "End") { show(slides.length - 1, true); e.preventDefault(); }
  }
  viewport.addEventListener("keydown", onArrows);

  // Geste tactile : balayage horizontal.
  function bindSwipe(el, announce) {
    var startX = null, startY = null;
    el.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { startX = null; return; }
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      startX = startY = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        show(index + (dx < 0 ? 1 : -1), announce);
      }
    });
  }
  bindSwipe(viewport, true);

  /* ---------- Agrandissement ---------- */

  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox.querySelector(".lightbox__img");
  var lbCounter = lightbox.querySelector(".lightbox__counter");
  var lbPrev = lightbox.querySelector('[data-action="prev"]');
  var lbNext = lightbox.querySelector('[data-action="next"]');

  function renderLightbox() {
    var d = K.diapositives[index];
    lbImg.src = d.image + ".webp";
    lbImg.alt = d.alt;
    lbCounter.textContent = "Page " + (index + 1) + " / " + slides.length;
    lbPrev.disabled = index === 0;
    lbNext.disabled = index === slides.length - 1;
    if (document.activeElement === lbPrev && lbPrev.disabled) lbNext.focus();
    if (document.activeElement === lbNext && lbNext.disabled) lbPrev.focus();
  }

  if (typeof lightbox.showModal === "function") {
    btnZoom.addEventListener("click", function () {
      renderLightbox();
      lightbox.showModal();
      lightbox.querySelector('[data-action="close"]').focus();
    });
    lightbox.addEventListener("close", function () { btnZoom.focus(); });
    lightbox.querySelector('[data-action="close"]').addEventListener("click", function () { lightbox.close(); });
    lbPrev.addEventListener("click", function () { show(index - 1, false); });
    lbNext.addEventListener("click", function () { show(index + 1, false); });
    bindSwipe(lightbox.querySelector(".lightbox__stage"), false);
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End") onArrows(e);
    });
    // Clic sur le fond : fermeture.
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  } else {
    // Navigateur sans <dialog> : ouverture de l'image en pleine taille.
    btnZoom.addEventListener("click", function () {
      window.location.href = K.diapositives[index].image + ".jpg";
    });
  }

  show(0, false);
})();
