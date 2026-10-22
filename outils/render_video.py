"""Montage de la vidéo « Les métiers du végétal » (40 s, 1080 x 1080, 30 i/s).

Plans fixes animés (mouvements de caméra lents), mots-clés à l'écran,
sous-titres incrustés optionnels, écran final. Pas de piste son :
la voix off est ajoutée ensuite.

Usage (depuis la racine du dépôt) :
  pip install imageio-ffmpeg fonttools brotli pillow numpy
  python3 outils/render_video.py assets/video/metiers-du-vegetal.mp4
  python3 outils/render_video.py sortie.mp4 --sans-sous-titres
Images sources : sources/video/ (parc, fleuristerie, horticulture, paysage,
triptyque, mains-pousse). Les sous-titres .vtt/.srt sont écrits dans assets/video/.
"""
import os
import subprocess
import sys
import tempfile

import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFont

W = 1080
FPS = 30
DUREE = 40.0
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(RACINE, "sources", "video") + os.sep

FOREST = (15, 95, 49)
NIGHT = (12, 74, 39)
LIME = (175, 203, 8)
LIME_SOFT = (228, 238, 192)

SOUS_TITRES = "--sans-sous-titres" not in sys.argv
SORTIE = sys.argv[1]


def _ttf():
    """Montserrat du site (woff2) convertie en TTF temporaire pour Pillow."""
    from fontTools.ttLib import TTFont
    chemin = os.path.join(tempfile.gettempdir(), "montserrat-video.ttf")
    if not os.path.exists(chemin):
        f = TTFont(os.path.join(RACINE, "assets", "fonts", "montserrat-latin-wght-normal.woff2"))
        f.flavor = None
        f.save(chemin)
    return chemin


TTF = _ttf()


def police(taille, graisse):
    f = ImageFont.truetype(TTF, taille)
    f.set_variation_by_axes([graisse])
    return f


def charger(nom):
    return Image.open(SRC + nom).convert("RGB")


IMG = {n: charger(n + ".webp") for n in
       ["parc", "fleuristerie", "horticulture", "paysage", "triptyque", "mains-pousse"]}

# Plans : image, début, fin, recadrage de départ et d'arrivée (x, y, côté) en pixels
# source, durée du fondu d'entrée.
PLANS = [
    ("parc", 0.0, 1.6, (0, 0, 1254), (60, 50, 1120), 0.0),
    ("fleuristerie", 1.6, 2.8, (480, 320, 700), (520, 350, 640), 0.0),
    ("horticulture", 2.8, 4.2, (720, 0, 534), (700, 0, 554), 0.0),
    ("horticulture", 4.2, 9.0, (450, 560, 480), (500, 600, 400), 0.4),
    ("horticulture", 9.0, 15.0, (0, 80, 1100), (154, 80, 1100), 0.4),
    ("fleuristerie", 15.0, 21.0, (0, 0, 1254), (100, 60, 1100), 0.4),
    ("paysage", 21.0, 28.0, (100, 450, 800), (80, 0, 900), 0.4),
    ("triptyque", 28.0, 33.0, (0, 0, 1254), (40, 40, 1174), 0.4),
    ("mains-pousse", 33.0, 37.5, (60, 60, 1134), (140, 120, 980), 0.4),
    ("FIN", 37.5, 40.0, None, None, 0.5),
]

MOTS_CLES = [
    ("DES MÉTIERS À DÉCOUVRIR", 5.4, 8.8),
    ("HORTICULTURE", 10.0, 14.8),
    ("FLEURISTERIE", 16.0, 20.8),
    ("PAYSAGE", 22.0, 27.8),
    ("TROIS UNIVERS", 29.0, 32.8),
]

CUES = [
    (0.1, 1.6, "Derrière ce massif,"),
    (1.6, 2.8, "derrière ce bouquet,"),
    (2.8, 4.2, "derrière cette serre…"),
    (4.4, 9.0, "… il y a des mains, des gestes, des métiers."),
    (9.2, 15.0, "Faire naître et grandir le végétal : c’est l’horticulture."),
    (15.2, 21.0, "Choisir, composer, conseiller : c’est la fleuristerie."),
    (21.2, 28.0, "Imaginer, aménager, entretenir : c’est le paysage."),
    (28.2, 33.0, "Trois univers pour travailler avec le vivant."),
    (33.2, 37.5, "Et si votre avenir prenait racine dans le végétal ?"),
    (37.7, 40.0, "Explorez les métiers et les formations."),
]


def lisse(p):
    p = min(max(p, 0.0), 1.0)
    return p * p * (3 - 2 * p)


def cadre(plan, t):
    nom, t0, t1, a, b, _ = plan
    if nom == "FIN":
        return ecran_final()
    img = IMG[nom]
    p = lisse((t - t0) / (t1 - t0))
    x, y, c = [a[i] + (b[i] - a[i]) * p for i in range(3)]
    x = min(max(x, 0), img.width - c)
    y = min(max(y, 0), img.height - c)
    return img.transform((W, W), Image.Transform.EXTENT, (x, y, x + c, y + c), Image.Resampling.BICUBIC)


_FIN = None


def ecran_final():
    global _FIN
    if _FIN is None:
        im = Image.new("RGB", (W, W), NIGHT)
        d = ImageDraw.Draw(im)
        grand = police(78, 800)
        y = 250
        for ligne, coul in [("Et si votre avenir", "white"), ("prenait racine", "white"), ("dans le végétal ?", LIME)]:
            d.text((90, y), ligne, font=grand, fill=coul)
            y += 96
        d.line((92, y + 40, 182, y + 40), fill=LIME_SOFT, width=3)
        d.text((90, y + 80), "Explorez les métiers", font=police(44, 600), fill=LIME_SOFT)
        d.text((90, y + 136), "et les formations.", font=police(44, 600), fill=LIME_SOFT)
        d.text((90, 960), "Proposition exploratoire · Caroline Camilleri", font=police(26, 500), fill=LIME_SOFT)
        _FIN = im
    return _FIN


def mot_cle(base, texte, t, t0, t1):
    if not (t0 <= t < t1):
        return
    a = min(1.0, (t - t0) / 0.35, (t1 - t) / 0.35)
    dec = int((1 - lisse(a)) * 24)
    f = police(46, 800)
    l, h = f.getbbox(texte)[2], 46
    calque = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(calque)
    x, y = 60 - dec, 70
    d.rectangle((x, y, x + l + 56, y + h + 40), fill=FOREST + (int(235 * a),))
    d.rectangle((x, y, x + 8, y + h + 40), fill=LIME + (int(255 * a),))
    d.text((x + 32, y + 18), texte, font=f, fill=(255, 255, 255, int(255 * a)))
    base.alpha_composite(calque)


def sous_titre(base, texte):
    f = police(40, 600)
    mots, lignes, cur = texte.split(), [], ""
    for m in mots:
        essai = (cur + " " + m).strip()
        if f.getlength(essai) > 900 and cur:
            lignes.append(cur)
            cur = m
        else:
            cur = essai
    lignes.append(cur)
    calque = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(calque)
    hl = 54
    y = W - 70 - hl * len(lignes)
    for ligne in lignes:
        lg = f.getlength(ligne)
        x = (W - lg) / 2
        d.rounded_rectangle((x - 18, y - 6, x + lg + 18, y + hl - 4), radius=6, fill=(0, 0, 0, 165))
        d.text((x, y), ligne, font=f, fill="white")
        y += hl
    base.alpha_composite(calque)


def image(t):
    i = max(k for k, p in enumerate(PLANS) if p[1] <= t)
    plan = PLANS[i]
    im = cadre(plan, t)
    fondu = plan[5]
    if fondu and t < plan[1] + fondu and i > 0:
        prec = cadre(PLANS[i - 1], t)
        im = Image.blend(prec, im, lisse((t - plan[1]) / fondu))
    im = im.convert("RGBA")
    for texte, t0, t1 in MOTS_CLES:
        mot_cle(im, texte, t, t0, t1)
    if SOUS_TITRES:
        for t0, t1, texte in CUES:
            if t0 <= t < t1 and t < 37.5:
                sous_titre(im, texte)
    return im.convert("RGB")


def horodatage(s, sep):
    h, s = divmod(s, 3600)
    m, s = divmod(s, 60)
    return "%02d:%02d:%02d%s%03d" % (h, m, int(s), sep, round((s - int(s)) * 1000))


def ecrire_sous_titres():
    with open(os.path.join(RACINE, "assets", "video", "metiers-du-vegetal.vtt"), "w", encoding="utf-8") as v, \
            open(os.path.join(RACINE, "assets", "video", "metiers-du-vegetal.srt"), "w", encoding="utf-8") as s:
        v.write("WEBVTT\n\n")
        for n, (t0, t1, texte) in enumerate(CUES, 1):
            v.write("%s --> %s\n%s\n\n" % (horodatage(t0, "."), horodatage(t1, "."), texte))
            s.write("%d\n%s --> %s\n%s\n\n" % (n, horodatage(t0, ","), horodatage(t1, ","), texte))


if __name__ == "__main__":
    ecrire_sous_titres()
    cmd = [imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-loglevel", "error",
           "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", "%dx%d" % (W, W), "-r", str(FPS), "-i", "-",
           "-c:v", "libx264", "-preset", "slow", "-crf", "23", "-pix_fmt", "yuv420p",
           "-movflags", "+faststart", SORTIE]
    ff = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for k in range(int(DUREE * FPS)):
        ff.stdin.write(np.asarray(image(k / FPS)).tobytes())
    ff.stdin.close()
    ff.wait()
    image(12.0).save(os.path.join(RACINE, "assets", "video", "apercu.jpg"), quality=82)
