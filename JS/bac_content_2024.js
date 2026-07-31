// ============================================================
//  Contenu complet des sujets BAC — Série D — Burkina Faso
//  Toutes les formules et étapes de calcul sont nettoyées.
//  Les sauts de ligne LaTeX dans les systèmes/cases utilisent \\\\
// ============================================================

const BAC_CONTENT_2024 = [
  {
    id: 'bac-d-2024-s1',
    html: `
<h1>BACCALAURÉAT — SÉRIE D</h1>
<div class="subtitle">Session Normale 2024 — 1<sup>er</sup> tour — Épreuve de Mathématiques</div>

<div class="infoblock">
  <table>
    <tr><td>Pays</td><td class="val">Burkina Faso</td><td>Coefficient</td><td class="val">5</td></tr>
    <tr><td>Enseignement</td><td class="val">Général</td><td>Durée</td><td class="val">4 heures</td></tr>
    <tr><td>Calculatrice</td><td class="val">Non autorisée</td><td>Barème total</td><td class="val">20 points</td></tr>
  </table>
</div>

<h2>EXERCICE N°1 <span class="points">(4 points)</span></h2>
<p>Le plan complexe est muni d'un repère orthonormé direct $(O;\\vec{u},\\vec{v})$ d'unité graphique 2 cm.</p>
<ol>
  <li>Écrire $a=(3-i)^2$ sous la forme algébrique. <span class="points">(0,25 pt)</span></li>
  <li>On considère le polynôme $P$ défini par $P(z)=z^3+(-1+i)z^2+(2+2i)z+8i$.
    <ol type="a">
      <li>Démontrer que l'équation $P(z)=0$ admet une unique solution imaginaire pure $\\alpha i\\,;\\ (\\alpha\\in\\mathbb{R}^*)$. <span class="points">(0,25 pt)</span></li>
      <li>Déterminer les nombres complexes $a, b$ et $c$ tels que $P(z)=(z-\\alpha i)(az^2+bz+c)$. <span class="points">(0,5 pt)</span></li>
      <li>Résoudre dans $\\mathbb{C}$ l'équation $P(z)=0$. <span class="points">(0,5 pt)</span></li>
    </ol>
  </li>
  <li>On considère les points $A$, $B$ et $C$ d'affixes respectives $-1-i\\,;\\ 2-2i\\,;\\ 2i$.
    <ol type="a">
      <li>Placer les points $A$, $B$ et $C$ dans le repère. <span class="points">(0,5 pt)</span></li>
      <li>Quelle est la nature du triangle $ABC$ ? Justifier. <span class="points">(0,5 pt)</span></li>
      <li>Déterminer l'affixe du point $D$, image du point $A$ par la translation du vecteur $\\overrightarrow{BC}$. <span class="points">(0,25 pt)</span></li>
    </ol>
  </li>
  <li>On considère le point $E$ d'affixe $2+2i$.
    <ol type="a">
      <li>Placer le point $E$ dans le repère. <span class="points">(0,25 pt)</span></li>
      <li>Démontrer que les points $A, B, C$ et $E$ sont situés sur un même cercle dont on précisera le centre et le rayon. <span class="points">(1 pt)</span></li>
    </ol>
  </li>
</ol>

<div class="rappel">
  <span class="label">Rappels de cours — Nombres complexes</span>
  <ul>
    <li><strong>Carré d'un binôme :</strong> $(x-y)^2 = x^2 - 2xy + y^2$ et $i^2 = -1$, $i^3 = -i$, $i^4 = 1$.</li>
    <li><strong>Racine imaginaire pure :</strong> Pour trouver $\\alpha i$ racine de $P(z)=0$, poser $z = \\alpha i$, développer, puis écrire séparément partie réelle $= 0$ et partie imaginaire $= 0$.</li>
    <li><strong>Factorisation par identification :</strong> Développer $(z-z_0)(az^2+bz+c)$, regrouper par puissances de $z$, et identifier coefficient par coefficient.</li>
    <li><strong>Discriminant complexe :</strong> Pour $Az^2+Bz+C=0$, calculer $\\Delta = B^2-4AC$, chercher $\\delta$ tel que $\\delta^2=\\Delta$. Solutions : $z = \\dfrac{-B \\pm \\delta}{2A}$.</li>
    <li><strong>Rapport complexe :</strong> $\\dfrac{z_B-z_A}{z_C-z_A} = \\rho e^{i\\theta}$ où $\\rho = \\dfrac{AB}{AC}$ et $\\theta = (\\overrightarrow{AC},\\overrightarrow{AB})$. Si $\\theta = \\pm\\dfrac{\\pi}{2}$, le triangle est rectangle en $A$. Si $\\rho = 1$, il est isocèle en $A$.</li>
    <li><strong>Translation en complexes :</strong> L'image de $M(z_M)$ par la translation de vecteur $\\overrightarrow{BC}$ est le point $M'$ d'affixe $z_{M'} = z_M + (z_C - z_B)$.</li>
    <li><strong>Cercle circonscrit :</strong> Si le triangle $ABC$ est rectangle en $A$, son cercle circonscrit a pour diamètre l'hypoténuse $[BC]$. Le centre est le milieu $I$ de $[BC]$ : $z_I = \\dfrac{z_B+z_C}{2}$. Le rayon est $R = |z_C - z_I|$.</li>
    <li><strong>Module = distance :</strong> $|z_P - z_I| = R$ signifie que $P$ est sur le cercle de centre $I$ et rayon $R$.</li>
  </ul>
</div>

<details class="correction">
<summary><span class="txt"></span><span class="arrow">▾</span></summary>
<div class="corr-body">

<div class="step">
  <span class="label">Étape 1 — Forme algébrique de a = (3 - i)²</span>
  <p>En utilisant l'identité remarquable $(x-y)^2 = x^2 - 2xy + y^2$ avec $x=3$ et $y=i$ :</p>
  $$a = (3-i)^2 = 3^2 - 2 \\times 3 \\times i + i^2$$
  $$a = 9 - 6i + (-1)$$
  $$a = 9 - 1 - 6i$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$a = 8 - 6i$$
</div>

<div class="step">
  <span class="label">Étape 2a — Recherche de la solution imaginaire pure z₀ = αi (α ∈ ℝ*)</span>
  <p>On pose $z = \\alpha i$ dans l'équation $P(z) = 0$ avec $\\alpha \\in \\mathbb{R}^*$ :</p>
  $$P(\\alpha i) = (\\alpha i)^3 + (-1+i)(\\alpha i)^2 + (2+2i)(\\alpha i) + 8i = 0$$
  <p>Calculons chaque terme séparément :</p>
  <ul>
    <li>$(\\alpha i)^3 = \\alpha^3 i^3 = \\alpha^3 (-i) = -\\alpha^3 i$</li>
    <li>$(\\alpha i)^2 = \\alpha^2 i^2 = -\\alpha^2$, d'où $(-1+i)(-\\alpha^2) = \\alpha^2 - \\alpha^2 i$</li>
    <li>$(2+2i)(\\alpha i) = 2\\alpha i + 2\\alpha i^2 = 2\\alpha i - 2\\alpha = -2\\alpha + 2\\alpha i$</li>
  </ul>
  <p>En remplaçant et en regroupant :</p>
  $$P(\\alpha i) = -\\alpha^3 i + (\\alpha^2 - \\alpha^2 i) + (-2\\alpha + 2\\alpha i) + 8i = 0$$
  <p>Séparons la partie réelle et la partie imaginaire :</p>
  $$\\text{Partie réelle : } \\alpha^2 - 2\\alpha$$
  $$\\text{Partie imaginaire : } -\\alpha^3 - \\alpha^2 + 2\\alpha + 8$$
  <p>Un nombre complexe est nul si et seulement si sa partie réelle ET sa partie imaginaire sont nulles simultanément :</p>
  $$\\begin{cases} \\alpha^2 - 2\\alpha = 0 \\\\ -\\alpha^3 - \\alpha^2 + 2\\alpha + 8 = 0 \\end{cases}$$
  <p>Résolvons la première équation :</p>
  $$\\alpha(\\alpha - 2) = 0 \\implies \\alpha = 0 \\quad \\text{ou} \\quad \\alpha = 2$$
  <p>Comme $\\alpha \\in \\mathbb{R}^*$, la valeur $\\alpha = 0$ est exclue. Vérifions si $\\alpha = 2$ satisfait la seconde équation :</p>
  $$-(2)^3 - (2)^2 + 2(2) + 8 = -8 - 4 + 4 + 8 = 0 \\quad \\checkmark$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>L'unique solution imaginaire pure est $\\mathbf{z_0 = 2i}$ (pour $\\alpha = 2$).</p>
</div>

<div class="step">
  <span class="label">Étape 2b — Factorisation de P(z) sous la forme (z - 2i)(az² + bz + c)</span>
  <p>Comme $2i$ est racine de $P(z)$, on peut écrire :</p>
  $$P(z) = (z - 2i)(az^2 + bz + c)$$
  <p>Développons cette expression :</p>
  $$(z - 2i)(az^2 + bz + c) = a z^3 + b z^2 + c z - 2i a z^2 - 2i b z - 2i c$$
  <p>Regroupons les termes selon les puissances de $z$ :</p>
  $$= a z^3 + (b - 2ia) z^2 + (c - 2ib) z - 2ic$$
  <p>Identifions coefficients avec $P(z) = 1 z^3 + (-1+i) z^2 + (2+2i) z + 8i$ :</p>
  $$\\begin{cases} 
  a = 1 \\\\ 
  b - 2ia = -1 + i \\\\ 
  c - 2ib = 2 + 2i \\\\ 
  -2ic = 8i 
  \\end{cases}$$
  <p>Calculons chaque paramètre pas à pas :</p>
  <ul>
    <li>Du 1er terme : $\\mathbf{a = 1}$</li>
    <li>Du 4ème terme : $-2ic = 8i \\implies c = \\dfrac{8i}{-2i} = \\mathbf{-4}$</li>
    <li>Du 2ème terme : $b - 2i(1) = -1 + i \\implies b = -1 + i + 2i = \\mathbf{-1 + 3i}$</li>
  </ul>
  <p>Vérification sur le 3ème terme : $c - 2ib = -4 - 2i(-1+3i) = -4 + 2i - 6i^2 = -4 + 2i + 6 = 2 + 2i \\quad \\checkmark$</p>
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$P(z) = (z - 2i)\\bigl(z^2 + (-1+3i)z - 4\\bigr)$$
</div>

<div class="step">
  <span class="label">Étape 2c — Résolution de l'équation P(z) = 0 dans ℂ</span>
  <p>$P(z) = 0 \\iff (z - 2i) = 0 \\quad \\text{ou} \\quad z^2 + (-1+3i)z - 4 = 0$</p>
  <p>La première équation donne directement $z_0 = 2i$.</p>
  <p>Résolvons l'équation du second degré $z^2 + (-1+3i)z - 4 = 0$ de coefficients $A=1$, $B=(-1+3i)$, $C=-4$ :</p>
  <p>Calcul du discriminant $\\Delta$ :</p>
  $$\\Delta = B^2 - 4AC = (-1+3i)^2 - 4(1)(-4)$$
  $$\\Delta = \\bigl((-1)^2 + 2(-1)(3i) + (3i)^2\\bigr) + 16$$
  $$\\Delta = (1 - 6i - 9) + 16$$
  $$\\Delta = -8 - 6i + 16$$
  $$\\Delta = 8 - 6i$$
  <p>D'après l'Étape 1, nous savons que $(3-i)^2 = 8-6i$. Une racine carrée complexe de $\\Delta$ est donc :</p>
  $$\\delta = 3 - i$$
  <p>Calculons maintenant les deux solutions de l'équation du second degré :</p>
  $$z_1 = \\frac{-B - \\delta}{2A} = \\frac{-(-1+3i) - (3-i)}{2(1)} = \\frac{1 - 3i - 3 + i}{2} = \\frac{-2 - 2i}{2} = -1 - i$$
  $$z_2 = \\frac{-B + \\delta}{2A} = \\frac{-(-1+3i) + (3-i)}{2(1)} = \\frac{1 - 3i + 3 - i}{2} = \\frac{4 - 4i}{2} = 2 - 2i$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$S_{\\mathbb{C}} = \\{\\,2i\\,;\\ 2-2i\\,;\\ -1-i\\,\\}$$
</div>

<div class="step alt">
  <span class="label">Étape 3b — Nature du triangle ABC avec A(-1-i), B(2-2i), C(2i)</span>
  <p>Calculons le rapport $\\dfrac{z_B - z_A}{z_C - z_A}$ :</p>
  $$z_B - z_A = (2-2i) - (-1-i) = 2 - 2i + 1 + i = 3 - i$$
  $$z_C - z_A = 2i - (-1-i) = 2i + 1 + i = 1 + 3i$$
  <p>Effectuons le quotient en multipliant numérateur et dénominateur par le conjugué $(1-3i)$ :</p>
  $$\\frac{z_B - z_A}{z_C - z_A} = \\frac{3-i}{1+3i} = \\frac{(3-i)(1-3i)}{(1+3i)(1-3i)}$$
  $$\\text{Numérateur : } (3-i)(1-3i) = 3 - 9i - i + 3i^2 = 3 - 10i - 3 = -10i$$
  $$\\text{Dénominateur : } (1+3i)(1-3i) = 1^2 - (3i)^2 = 1 - (-9) = 10$$
  $$\\frac{z_B - z_A}{z_C - z_A} = \\frac{-10i}{10} = -i$$
  <p>Interprétation géométrique du résultat $-i$ :</p>
  <ul>
    <li><strong>Angle $(\\overrightarrow{AC}, \\overrightarrow{AB})$ :</strong> $\\arg(-i) = -\\dfrac{\\pi}{2} \\pmod{2\\pi}$, donc les droites $(AB)$ et $(AC)$ sont perpendiculaires. Le triangle est <strong>rectangle en A</strong>.</li>
    <li><strong>Rapport des longueurs :</strong> $\\dfrac{AB}{AC} = |-i| = 1 \\implies AB = AC$. Le triangle est <strong>isocèle en A</strong>.</li>
  </ul>
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>Le triangle $ABC$ est un triangle <strong>rectangle et isocèle en A</strong>.</p>
</div>

<div class="step">
  <span class="label">Étape 3c — Affixe du point D, image de A par la translation de vecteur BC</span>
  <p>Par définition de la translation de vecteur $\\overrightarrow{BC}$ :</p>
  $$\\overrightarrow{AD} = \\overrightarrow{BC} \\iff z_D - z_A = z_C - z_B$$
  $$z_D = z_A + z_C - z_B$$
  <p>Remplaçons par les affixes données :</p>
  $$z_D = (-1-i) + 2i - (2-2i)$$
  $$z_D = -1 - i + 2i - 2 + 2i$$
  $$z_D = (-1 - 2) + (-i + 2i + 2i)$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$z_D = -3 + 3i$$
</div>

<div class="step">
  <span class="label">Étape 4b — Démontrer que A, B, C et E(2+2i) sont sur un même cercle</span>
  <p><strong>1. Cercle circonscrit à ABC :</strong></p>
  <p>Puisque le triangle $ABC$ est rectangle en $A$, son cercle circonscrit $(\\mathcal{C})$ a pour diamètre l'hypoténuse $[BC]$.</p>
  <p>Le centre $I$ de ce cercle est le milieu de $[BC]$ :</p>
  $$z_I = \\frac{z_B + z_C}{2} = \\frac{(2-2i) + 2i}{2} = \\frac{2}{2} = 1 \\implies I(1\\,;0)$$
  <p>Le rayon $R$ de ce cercle est égal à la distance $IC$ :</p>
  $$R = |z_C - z_I| = |2i - 1| = |-1 + 2i| = \\sqrt{(-1)^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$$
  <p><strong>2. Vérification pour le point E(2+2i) :</strong></p>
  <p>Calculons la distance $IE = |z_E - z_I|$ :</p>
  $$z_E - z_I = (2+2i) - 1 = 1 + 2i$$
  $$IE = |1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$$
  <p>Comme $IE = \\sqrt{5} = R$, le point $E$ appartient également au cercle $(\\mathcal{C})$.</p>
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>Les quatre points $A, B, C$ et $E$ appartiennent tous au même cercle de <strong>centre $I(1\\,;0)$</strong> et de <strong>rayon $R = \\sqrt{5}$</strong> (soit $\\approx 2{,}24$ cm).</p>
</div>

</div>
</details>

<h2>EXERCICE N°2 <span class="points">(4 points)</span></h2>

<p>Le tableau suivant donne la consommation d'électricité des Burkinabès (GWh) entre 2015 et 2020.</p>

<table class="data">
  <tr><th>Années</th><td>2015</td><td>2016</td><td>2017</td><td>2018</td><td>2019</td><td>2020</td></tr>
  <tr><th>Rang $x_i$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
  <tr><th>Conso $y_i$ (GWh)</th><td>1200</td><td>1317</td><td>1452</td><td>1568</td><td>1686</td><td>1858</td></tr>
</table>

<ol>
  <li><ol type="a">
    <li>Représenter le nuage de points. <span class="points">(0,5 pt)</span></li>
    <li>Un ajustement affine est-il possible ? Justifier. <span class="points">(0,5 pt)</span></li>
  </ol></li>
  <li>Soient $A$ (point moyen des 3 premiers points) et $B$ (point moyen des 3 derniers points).
    <ol type="a">
      <li>Calculer les coordonnées de $A$ et $B$. <span class="points">(1 pt)</span></li>
      <li>Tracer la droite $(AB)$. <span class="points">(0,5 pt)</span></li>
      <li>Équation réduite de $(AB)$. <span class="points">(0,5 pt)</span></li>
    </ol>
  </li>
  <li><ol type="a">
    <li>Consommation estimée en 2023 ? <span class="points">(0,5 pt)</span></li>
    <li>Année où la consommation atteint 5641 GWh ? <span class="points">(0,5 pt)</span></li>
  </ol></li>
</ol>

<div class="rappel">
  <span class="label">Rappels — Statistiques à deux variables (méthode de Mayer)</span>
  <ul>
    <li><strong>Nuage de points :</strong> On place chaque couple $(x_i, y_i)$ dans un repère. Si les points sont approximativement alignés, un ajustement affine est justifié.</li>
    <li><strong>Méthode des sous-nuages (Mayer) :</strong> On divise les $n$ points en deux groupes de même effectif. Le point moyen de chaque groupe donne $A(\\bar{x}_1, \\bar{y}_1)$ et $B(\\bar{x}_2, \\bar{y}_2)$ avec $\\bar{x} = \\dfrac{\\text{somme des } x_i}{\\text{nombre de points}}$.</li>
    <li><strong>Équation de la droite $(AB)$ :</strong> $y = mx + p$ avec $m = \\dfrac{y_B - y_A}{x_B - x_A}$ et $p = y_A - m x_A$ (ou $p = y_B - m x_B$).</li>
    <li><strong>Rang et année :</strong> Si le rang 1 correspond à 2015, alors le rang $x$ correspond à l'année $2015 + x - 1 = 2014 + x$. Inversement, l'année $n$ a le rang $x = n - 2014$.</li>
    <li><strong>Prévision :</strong> Pour estimer $y$ à une année donnée, calculer d'abord le rang $x$ puis injecter dans l'équation de la droite.</li>
    <li><strong>Recherche d'une année :</strong> Pour trouver l'année où $y$ atteint une valeur donnée, résoudre $mx + p = y$ en $x$, puis retrouver l'année correspondante.</li>
  </ul>
</div>

<details class="correction">
<summary><span class="txt"></span><span class="arrow">▾</span></summary>
<div class="corr-body">

<div class="step">
  <span class="label">Étape 1b — Justification de l'ajustement affine</span>
  <p>Lorsqu'on observe le nuage des 6 points $(x_i, y_i)$, les points sont presque alignés le long d'une droite de pente positive (croissance régulière). Les variations ne montrent pas de courbure exponentielle marquée.</p>
  <p><strong>Conclusion :</strong> Un ajustement affine est tout à fait justifié et approprié.</p>
</div>

<div class="step">
  <span class="label">Étape 2a — Calcul détaillé des coordonnées des points moyens A et B</span>
  <p><strong>1. Sous-nuage des 3 premiers points (2015, 2016, 2017) :</strong></p>
  $$x_A = \\frac{1 + 2 + 3}{3} = \\frac{6}{3} = 2$$
  $$y_A = \\frac{1200 + 1317 + 1452}{3} = \\frac{3969}{3} = 1323$$
  <p><strong>2. Sous-nuage des 3 derniers points (2018, 2019, 2020) :</strong></p>
  $$x_B = \\frac{4 + 5 + 6}{3} = \\frac{15}{3} = 5$$
  $$y_B = \\frac{1568 + 1686 + 1858}{3} = \\frac{5112}{3} = 1704$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$A(2\\,;1323) \\qquad B(5\\,;1704)$$
</div>

<div class="step">
  <span class="label">Étape 2c — Calcul de l'équation réduite de (AB) : y = mx + p</span>
  <p><strong>1. Calcul du coefficient directeur m :</strong></p>
  $$m = \\frac{y_B - y_A}{x_B - x_A} = \\frac{1704 - 1323}{5 - 2} = \\frac{381}{3} = 127$$
  <p><strong>2. Calcul de l'ordonnée à l'origine p (en utilisant le point A) :</strong></p>
  $$y_A = m x_A + p \\implies 1323 = 127 \\times 2 + p$$
  $$1323 = 254 + p \\implies p = 1323 - 254 = 1069$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$(AB) :\\ y = 127x + 1069$$
</div>

<div class="step">
  <span class="label">Étape 3a — Estimation de la consommation en 2023</span>
  <p>Calculons le rang $x$ correspondant à l'année 2023 :</p>
  $$\\text{Rang } x = (2023 - 2015) + 1 = 8 + 1 = 9$$
  <p>Injectons $x = 9$ dans l'équation de la droite $(AB)$ :</p>
  $$y = 127(9) + 1069 = 1143 + 1069 = 2212$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>La consommation d'électricité estimée pour l'année 2023 s'élève à <strong>2212 GWh</strong>.</p>
</div>

<div class="step">
  <span class="label">Étape 3b — Détermination de l'année pour une consommation de 5641 GWh</span>
  <p>On cherche le rang $x$ tel que $y = 5641$ :</p>
  $$127x + 1069 = 5641$$
  $$127x = 5641 - 1069$$
  $$127x = 4572$$
  $$x = \\frac{4572}{127} = 36$$
  <p>Retrouvons l'année correspondant au rang $x = 36$ :</p>
  $$\\text{Année} = 2015 + 36 - 1 = 2050$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>La consommation atteindra 5641 GWh en l'année <strong>2050</strong>.</p>
</div>

</div>
</details>

<h2>PROBLÈME <span class="points">(12 points)</span></h2>

<h3>Partie A</h3>

<p>Soit $f$ la fonction définie par :</p>
$$f(x)=\\begin{cases} \\dfrac{x^2-4}{x+1} & \\text{si } x\\in\\,]-\\infty;2[ \\\\[8pt] \\sqrt{x^2-x-2} & \\text{si } x\\in[2;+\\infty[ \\end{cases}$$

<ol>
  <li>Montrer que $D_f=\\,]-\\infty;-1[\\,\\cup\\,]-1;+\\infty[$. <span class="points">(0,25 pt)</span></li>
  <li><ol type="a">
    <li>Calculer les limites aux bornes. Interpréter la limite en $-1$. <span class="points">(1 pt)</span></li>
    <li>Montrer que $y=x-\\dfrac{1}{2}$ est asymptote à $(\\mathcal{C})$ en $+\\infty$. <span class="points">(0,5 pt)</span></li>
  </ol></li>
  <li><ol type="a">
    <li>Trouver $a,b,c$ tels que $f(x)=ax+b+\\dfrac{c}{x+1}$ sur $]-\\infty;2[$. <span class="points">(0,5 pt)</span></li>
    <li>En déduire que $y=x-1$ est asymptote à $(\\mathcal{C})$ en $-\\infty$. <span class="points">(0,5 pt)</span></li>
  </ol></li>
  <li>Étudier la continuité de $f$ en 2. <span class="points">(0,5 pt)</span></li>
  <li><ol type="a">
    <li>Calculer $\\displaystyle\\lim_{x\\to 2^-}\\frac{f(x)-f(2)}{x-2}$ et $\\displaystyle\\lim_{x\\to 2^+}\\frac{f(x)-f(2)}{x-2}$. Déduire la dérivabilité en 2. <span class="points">(1,5 pt)</span></li>
    <li>Interprétation géométrique. <span class="points">(0,5 pt)</span></li>
  </ol></li>
</ol>

<div class="rappel">
  <span class="label">Rappels — Analyse : domaine, limites, continuité, dérivabilité</span>
  <ul>
    <li><strong>Domaine de définition :</strong> Pour une fraction $\\dfrac{N(x)}{D(x)}$, exclure les $x$ tels que $D(x) = 0$. Pour $\\sqrt{u(x)}$, on a besoin de $u(x) \\ge 0$.</li>
    <li><strong>Limites de fractions en $\\pm\\infty$ :</strong> On garde uniquement les termes de plus haut degré au numérateur et au dénominateur : $\\lim_{x\\to\\pm\\infty} \\dfrac{x^2-4}{x+1} = \\lim_{x\\to\\pm\\infty} \\dfrac{x^2}{x} = \\pm\\infty$.</li>
    <li><strong>Limite d'une fraction en un zéro du dénominateur :</strong> Si $N(x_0) \\ne 0$ et $D(x) \\to 0$, la limite est $\\pm\\infty$ (asymptote verticale). Le signe dépend du signe de $N(x_0)$ divisé par le signe de $D(x)$ de chaque côté.</li>
    <li><strong>Quantité conjuguée :</strong> $\\sqrt{A} - B = \\dfrac{A - B^2}{\\sqrt{A} + B}$ (multiplier numérateur et dénominateur par $\\sqrt{A}+B$).</li>
    <li><strong>Asymptote oblique $y = ax+b$ :</strong> La droite est asymptote oblique si $\\lim_{x\\to\\pm\\infty}[f(x) - (ax+b)] = 0$.</li>
    <li><strong>Continuité en $x_0$ :</strong> $f$ est continue en $x_0$ si $\\lim_{x\\to x_0^-} f(x) = \\lim_{x\\to x_0^+} f(x) = f(x_0)$.</li>
    <li><strong>Dérivabilité en $x_0$ :</strong> $f$ est dérivable en $x_0$ si les limites à gauche et à droite du taux d'accroissement $\\dfrac{f(x)-f(x_0)}{x-x_0}$ sont égales et finies.</li>
  </ul>
</div>

<details class="correction">
<summary><span class="txt"></span><span class="arrow">▾</span></summary>
<div class="corr-body">

<div class="step">
  <span class="label">Étape 1 — Détermination précise du domaine de définition Df</span>
  <p><strong>Sur l'intervalle $]-\\infty;2[$ :</strong> la fonction est une fraction rationnelle $f(x) = \\dfrac{x^2-4}{x+1}$. Le dénominateur s'annule pour $x+1=0 \\iff x = -1$. La valeur $-1$ doit donc être exclue de cet intervalle. D'où la réunion $]-\\infty;-1[ \\cup ]-1;2[$.</p>
  <p><strong>Sur l'intervalle $[2;+\\infty[$ :</strong> la fonction est une racine carrée $f(x) = \\sqrt{x^2-x-2}$. Cherchons le signe du trinôme $x^2-x-2$ de racines $-1$ et $2$. Pour tout $x \\ge 2$, le trinôme est positif ou nul. La racine est toujours bien définie sur $[2;+\\infty[$.</p>
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$D_f = \\,]-\\infty;-1[ \\,\\cup\\, ]-1;+\\infty[$$
</div>

<div class="step">
  <span class="label">Étape 2a — Calculs détaillés des limites aux bornes</span>
  <p><strong>1. Limite en $-\\infty$ :</strong></p>
  $$\\lim_{x\\to -\\infty} f(x) = \\lim_{x\\to -\\infty} \\frac{x^2-4}{x+1} = \\lim_{x\\to -\\infty} \\frac{x^2}{x} = \\lim_{x\\to -\\infty} x = -\\infty$$

  <p><strong>2. Limites à gauche et à droite de $-1$ :</strong></p>
  <p>Au numérateur : $(-1)^2 - 4 = 1 - 4 = -3$. Au dénominateur : $x+1 \\to 0$.</p>
  $$\\text{Si } x < -1 \\implies x+1 < 0 \\implies \\lim_{x\\to -1^-} \\frac{-3}{0^-} = +\\infty$$
  $$\\text{Si } x > -1 \\implies x+1 > 0 \\implies \\lim_{x\\to -1^+} \\frac{-3}{0^+} = -\\infty$$

  <p><strong>3. Limite en $+\\infty$ :</strong></p>
  $$\\lim_{x\\to +\\infty} f(x) = \\lim_{x\\to +\\infty} \\sqrt{x^2-x-2} = \\lim_{x\\to +\\infty} \\sqrt{x^2} = \\lim_{x\\to +\\infty} x = +\\infty$$
</div>
<div class="result">
  <span class="label">Résultat — Interprétation géométrique en −1</span>
  <p>Puisque $\\lim_{x\\to -1} f(x) = \\pm\\infty$, la droite d'équation $\\mathbf{x = -1}$ est une <strong>asymptote verticale</strong> à la courbe $(\\mathcal{C})$.</p>
</div>

<div class="step">
  <span class="label">Étape 2b — Démonstration de l'asymptote oblique y = x - 1/2 en +∞</span>
  <p>Calculons la limite de la différence $f(x) - \\left(x - \\frac{1}{2}\\right)$ en $+\\infty$ :</p>
  $$f(x) - \\left(x - \\frac{1}{2}\\right) = \\sqrt{x^2-x-2} - \\left(x - \\frac{1}{2}\\right)$$
  <p>Multiplions et divisons par la quantité conjuguée $\\sqrt{x^2-x-2} + \\left(x - \\frac{1}{2}\\right)$ :</p>
  $$= \\frac{\\left(\\sqrt{x^2-x-2}\\right)^2 - \\left(x - \\frac{1}{2}\\right)^2}{\\sqrt{x^2-x-2} + \\left(x - \\frac{1}{2}\\right)}$$
  $$\\text{Développons le numérateur : } (x^2 - x - 2) - \\left(x^2 - x + \\frac{1}{4}\\right) = x^2 - x - 2 - x^2 + x - \\frac{1}{4} = -2 - \\frac{1}{4} = -\\frac{9}{4}$$
  $$f(x) - \\left(x - \\frac{1}{2}\\right) = \\frac{-\\frac{9}{4}}{\\sqrt{x^2-x-2} + \\left(x - \\frac{1}{2}\\right)}$$
  <p>Quand $x \\to +\\infty$, le dénominateur tend vers $+\\infty$, donc le quotient tend vers 0.</p>
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>La droite d'équation $\\mathbf{y = x - \\dfrac{1}{2}}$ est bien une <strong>asymptote oblique</strong> à $(\\mathcal{C})$ au voisinage de $+\\infty$.</p>
</div>

<div class="step">
  <span class="label">Étape 3a — Décomposition de f(x) sur ]-∞; 2[ par identification</span>
  <p>On cherche $a, b, c$ tels que :</p>
  $$\\frac{x^2-4}{x+1} = a x + b + \\frac{c}{x+1} = \\frac{(ax+b)(x+1) + c}{x+1} = \\frac{a x^2 + (a+b)x + (b+c)}{x+1}$$
  <p>Par identification terme à terme avec le numérateur $x^2 + 0x - 4$ :</p>
  $$\\begin{cases} a = 1 \\\\[3pt] a + b = 0 \\implies b = -a = -1 \\\\[3pt] b + c = -4 \\implies -1 + c = -4 \\implies c = -3 \\end{cases}$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$f(x) = x - 1 - \\frac{3}{x+1} \\quad \\text{pour tout } x \\in \\,]-\\infty; 2[$$
</div>

<div class="step">
  <span class="label">Étape 3b — Asymptote oblique y = x - 1 en -∞</span>
  <p>D'après la question 3a : $f(x) - (x-1) = -\\dfrac{3}{x+1}$.</p>
  $$\\lim_{x\\to -\\infty} [f(x) - (x-1)] = \\lim_{x\\to -\\infty} \\left(-\\frac{3}{x+1}\\right) = 0$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>La droite $(D)$ d'équation $\\mathbf{y = x - 1}$ est une <strong>asymptote oblique</strong> à $(\\mathcal{C})$ en $-\\infty$.</p>
</div>

<div class="step">
  <span class="label">Étape 4 — Étude complète de la continuité en x = 2</span>
  <p>Calculons la limite à gauche en 2 ($x < 2$) :</p>
  $$\\lim_{x\\to 2^-} f(x) = \\lim_{x\\to 2^-} \\frac{x^2-4}{x+1} = \\frac{2^2 - 4}{2 + 1} = \\frac{0}{3} = 0$$
  <p>Calculons la limite à droite en 2 ($x > 2$) :</p>
  $$\\lim_{x\\to 2^+} f(x) = \\lim_{x\\to 2^+} \\sqrt{x^2-x-2} = \\sqrt{2^2 - 2 - 2} = \\sqrt{0} = 0$$
  <p>Valeur exacte de $f(2) = \\sqrt{2^2 - 2 - 2} = 0$.</p>
  <p>On constate que $\\lim_{x\\to 2^-} f(x) = \\lim_{x\\to 2^+} f(x) = f(2) = 0$.</p>
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>La fonction $f$ est <strong>continue en x = 2</strong>.</p>
</div>

<div class="step">
  <span class="label">Étape 5a — Calculs des deux taux d'accroissement en x = 2</span>
  <p><strong>1. Dérivabilité à gauche (x < 2) :</strong></p>
  $$\\lim_{x\\to 2^-} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x\\to 2^-} \\frac{\\frac{x^2-4}{x+1} - 0}{x - 2} = \\lim_{x\\to 2^-} \\frac{x^2-4}{(x-2)(x+1)}$$
  <p>Factorisons $x^2-4 = (x-2)(x+2)$ et simplifions par $(x-2)$ :</p>
  $$= \\lim_{x\\to 2^-} \\frac{(x-2)(x+2)}{(x-2)(x+1)} = \\lim_{x\\to 2^-} \\frac{x+2}{x+1} = \\frac{2+2}{2+1} = \\frac{4}{3}$$
  <p>La fonction est donc dérivable à gauche en 2, et $f'_g(2) = \\dfrac{4}{3}$.</p>

  <p><strong>2. Dérivabilité à droite (x > 2) :</strong></p>
  $$\\lim_{x\\to 2^+} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x\\to 2^+} \\frac{\\sqrt{x^2-x-2} - 0}{x - 2} = \\lim_{x\\to 2^+} \\frac{\\sqrt{(x-2)(x+1)}}{x - 2}$$
  <p>Pour $x > 2$, $x-2 = \\sqrt{(x-2)^2}$, donc :</p>
  $$= \\lim_{x\\to 2^+} \\sqrt{\\frac{(x-2)(x+1)}{(x-2)^2}} = \\lim_{x\\to 2^+} \\sqrt{\\frac{x+1}{x-2}} = \\sqrt{\\frac{3}{0^+}} = +\\infty$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>Puisque la limite à droite est infinie ($+\\infty$), $f$ <strong>n'est pas dérivable en x = 2</strong>.</p>
</div>

<div class="note">
  <span class="label">Interprétation géométrique en x = 2</span>
  <p>Au point $(2\\,;0)$, la courbe $(\\mathcal{C})$ présente un <strong>point anguleux</strong> :</p>
  <ul>
    <li>À gauche, une demi-tangente oblique de pente $m = \\dfrac{4}{3}$.</li>
    <li>À droite, une demi-tangente verticale dirigée vers le haut.</li>
  </ul>
</div>

</div>
</details>

<h3>Partie B</h3>

<ol>
  <li><ol type="a">
    <li>Étudier les variations de $f$. <span class="points">(1,5 pt)</span></li>
    <li>Dresser le tableau de variation. <span class="points">(0,25 pt)</span></li>
  </ol></li>
  <li>Équation de la tangente $(T)$ en $x=0$. <span class="points">(0,5 pt)</span></li>
  <li>Intersections de $(\\mathcal{C})$ avec l'axe $(Ox)$. <span class="points">(0,5 pt)</span></li>
</ol>

<div class="rappel">
  <span class="label">Rappels — Dérivation, tangentes et variations</span>
  <ul>
    <li><strong>Dérivée d'une fraction rationnelle</strong> $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$. En particulier $\\left(\\dfrac{1}{v}\\right)' = -\\dfrac{v'}{v^2}$.</li>
    <li><strong>Dérivée de $\\sqrt{u}$ :</strong> $(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$. Ici $u = x^2-x-2$ et $u' = 2x-1$.</li>
    <li><strong>Dérivée de $x - 1 - \\dfrac{3}{x+1}$ :</strong> La dérivée de $-\\dfrac{3}{x+1}$ est $+\\dfrac{3}{(x+1)^2}$, donc $f'(x) = 1 + \\dfrac{3}{(x+1)^2}$.</li>
    <li><strong>Signe de la dérivée :</strong> Si $f'(x) > 0$ sur un intervalle, $f$ est strictement croissante. Si $f'(x) < 0$, $f$ est strictement décroissante.</li>
    <li><strong>Équation de la tangente en $x_0$ :</strong> $y = f'(x_0)(x - x_0) + f(x_0)$. Il faut calculer $f(x_0)$ et $f'(x_0)$ séparément avant d'écrire l'équation.</li>
    <li><strong>Intersection avec $(Ox)$ :</strong> Poser $f(x) = 0$ sur chaque branche séparément, puis vérifier que la solution appartient bien à l'intervalle de définition de cette branche.</li>
  </ul>
</div>

<details class="correction">
<summary><span class="txt"></span><span class="arrow">▾</span></summary>
<div class="corr-body">

<div class="step">
  <span class="label">Étape 1a — Calculs détaillés des dérivées et étude des signes</span>
  <p><strong>1. Sur $]-\\infty;-1[$ et $]-1;2[$ :</strong></p>
  <p>En utilisant $f(x) = x - 1 - \\dfrac{3}{x+1}$ :</p>
  $$f'(x) = 1 - 3 \\left(-\\frac{1}{(x+1)^2}\\right) = 1 + \\frac{3}{(x+1)^2}$$
  <p>Comme $(x+1)^2 > 0$ et $3 > 0$, la dérivée $f'(x) > 0$ est strictement positive sur tout le domaine. $f$ est <strong>strictement croissante</strong> sur $]-\\infty;-1[$ et sur $]-1;2[$.</p>

  <p><strong>2. Sur $]2;+\\infty[$ :</strong></p>
  <p>En utilisant la formule de dérivée de $\\sqrt{u}$ qui est $\\dfrac{u'}{2\\sqrt{u}}$ avec $u(x) = x^2-x-2$ et $u'(x) = 2x-1$ :</p>
  $$f'(x) = \\frac{2x - 1}{2\\sqrt{x^2-x-2}}$$
  <p>Pour $x > 2$, $2x-1 > 3 > 0$ et la racine au dénominateur est strictement positive. Ainsi $f'(x) > 0$. $f$ est <strong>strictement croissante</strong> sur $]2;+\\infty[$.</p>
</div>

<div class="step">
  <span class="label">Étape 2 — Équation complète de la tangente (T) au point d'abscisse x = 0</span>
  <p>L'équation d'une tangente en $x_0$ est donnée par $y = f'(x_0)(x - x_0) + f(x_0)$. Ici $x_0 = 0$ :</p>
  $$f(0) = \\frac{0^2 - 4}{0 + 1} = \\frac{-4}{1} = -4$$
  $$f'(0) = 1 + \\frac{3}{(0+1)^2} = 1 + 3 = 4$$
  $$y = 4(x - 0) + (-4) \\implies y = 4x - 4$$
</div>
<div class="result">
  <span class="label">Résultat</span>
  $$(T) :\\ y = 4x - 4$$
</div>

<div class="step">
  <span class="label">Étape 3 — Points d'intersection avec l'axe des abscisses (Ox) (y = 0)</span>
  <p><strong>1. Sur $]-\\infty;2[$ :</strong></p>
  $$f(x) = 0 \\iff \\frac{x^2-4}{x+1} = 0 \\iff x^2 - 4 = 0 \\iff (x-2)(x+2) = 0$$
  <p>Les solutions sont $x = -2$ et $x = 2$. Seule $x = -2$ est strictement inférieure à 2. D'où le point <strong>$(-2\\,;0)$</strong>.</p>

  <p><strong>2. Sur $[2;+\\infty[$ :</strong></p>
  $$f(x) = 0 \\iff \\sqrt{x^2-x-2} = 0 \\iff x^2 - x - 2 = 0 \\iff (x-2)(x+1) = 0$$
  <p>Les solutions sont $x = 2$ et $x = -1$. Seule $x = 2$ appartient à $[2;+\\infty[$. D'où le point <strong>$(2\\,;0)$</strong>.</p>
</div>
<div class="result">
  <span class="label">Résultat</span>
  <p>Les deux points d'intersection de la courbe $(\\mathcal{C})$ avec l'axe $(Ox)$ sont <strong>$(-2\\,;0)$</strong> et <strong>$(2\\,;0)$</strong>.</p>
</div>

</div>
</details>

<div class="signature">— Fin du sujet — NERVEUX · Maths Terminale D · Burkina Faso</div>
`
  }
];

if (typeof window !== 'undefined') {
  window.BAC_CONTENT_REGISTRY = window.BAC_CONTENT_REGISTRY || {};
  BAC_CONTENT_2024.forEach(function(item){
    window.BAC_CONTENT_REGISTRY[item.id] = item.html;
  });
}
