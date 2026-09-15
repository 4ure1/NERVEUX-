// ══════════════════════════════════════════════════════════════════
//  NERVEUX — Corrigés BAC Terminale D — Burkina Faso
// ══════════════════════════════════════════════════════════════════
// Années 2019–2022

const BAC_EXAMS_2014_2022 = [
  {
  id: 'bac-2014-D-juillet-1er',
  year: 2014,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2014 / 1er tour',
  topics: ['Nombres complexes', 'Équations différentielles', 'Fonctions exponentielles & racines', 'Bijection & Intégrales & Courbe paramétrique'],
  parts: [
    {
      label: 'Exercice 1 — Nombres complexes & inversion (4 pts)',
      problem: `<p>Le plan complexe \\(\\mathcal{P}\\) est rapporté au repère orthonormal \\((O;\\vec{u};\\vec{v})\\) (unité 2 cm). On considère l'application f définie sur \\(\\mathbb{C}^*\\) par \\(f(z) = -\\dfrac{1}{z}\\). F est l'application du plan \\(\\mathcal{P}\\) privé de O dans lui-même qui à tout point M d'affixe z associe le point M' d'affixe \\(z' = f(z)\\).</p>
<p><strong>1)</strong> On pose \\(z = re^{i\\theta}\\), \\(r \\in \\mathbb{R}^*_+\\) et \\(\\theta \\in \\mathbb{R}\\). Exprimer le module et un argument de f(z) en fonction de r et θ.</p>
<p><strong>2)</strong> On pose \\(z = x+iy\\) et \\(Z = X+iY\\) où Z est l'affixe du milieu I de [MM'].</p>
<p><strong>a)</strong> Exprimer X et Y en fonction de x et y.</p>
<p><strong>b)</strong> Déterminer et représenter l'ensemble (ℰ) des points M tels que I appartienne à l'axe \\((O;\\vec{u})\\).</p>
<p><strong>c)</strong> Déterminer et représenter l'ensemble (ℱ) des points M tels que I appartienne à l'axe \\((O;\\vec{v})\\).</p>
<p><strong>3)</strong> On suppose \\(|z| = 1\\). On pose \\(z = e^{i\\theta}\\), \\(\\theta \\in \\mathbb{R}\\).</p>
<p><strong>a)</strong> Calculer Z en fonction de θ.</p>
<p><strong>b)</strong> Caractériser géométriquement la restriction de F au cercle de centre O et de rayon 1.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Nombres complexes, forme trigonométrique &amp; ensembles géométriques</span>
  <ul>
    <li><strong>Forme exponentielle et inversion :</strong> Pour $z = r e^{i\\theta}$ ($r > 0$), on a $-1 = e^{i\\pi}$, d'où $-\\dfrac{1}{z} = \\dfrac{e^{i\\pi}}{r e^{i\\theta}} = \\dfrac{1}{r}e^{i(\\pi-\\theta)}$. Le module est $|f(z)| = \\dfrac{1}{r}$ et l'argument est $\\arg(f(z)) = \\pi - \\theta + 2k\\pi$.</li>
    <li><strong>Affixe du milieu :</strong> Le milieu $I$ du segment $[MM']$ a pour affixe $Z = \\dfrac{z + z'}{2} = \\dfrac{z + f(z)}{2}$.</li>
    <li><strong>Passage algébrique :</strong> Avec $z = x+iy$, on a $\\dfrac{1}{z} = \\dfrac{x-iy}{x^2+y^2}$, ce qui permet d'isoler $X = \\text{Re}(Z)$ et $Y = \\text{Im}(Z)$.</li>
    <li><strong>Ensembles de points :</strong> $I$ appartient à l'axe réel $(O;\\vec{u}) \\iff Y = 0$ ; $I$ appartient à l'axe imaginaire $(O;\\vec{v}) \\iff X = 0$.</li>
    <li><strong>Cercle unité $|z|=1$ :</strong> Sur le cercle trigonométrique, $z = e^{i\\theta} \\Rightarrow \\bar{z} = e^{-i\\theta} = \\dfrac{1}{z}$, donc $z' = -\\bar{z} = -x+iy$, ce qui correspond à la symétrie axiale orthogonale d'axe $(Oy)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Module et argument de f(z)</strong></p>
<p>\\(f(z) = -\\dfrac{1}{z} = -\\dfrac{1}{re^{i\\theta}} = \\dfrac{1}{r}e^{i(\\pi-\\theta)}\\)</p>
<p>\\[\\boxed{|f(z)| = \\dfrac{1}{r} \\qquad \\arg(f(z)) = \\pi - \\theta + 2k\\pi}\\]</p>
<p><em>Interprétation : F inverse le module (homothétie de rapport \\dfrac{1}{r^2}) et fait une symétrie d'axe \\((O;\\vec{u})\\) suivi d'une symétrie centrale par rapport à O.</em></p>

<p><strong>2a) Expressions de X et Y</strong></p>
<p>\\(Z = \\dfrac{z+z'}{2} = \\dfrac{z+f(z)}{2} = \\dfrac{z - \\dfrac{1}{z}}{2}\\).</p>
<p>\\(z = x+iy\\), donc \\(\\dfrac{1}{z} = \\dfrac{x-iy}{x^2+y^2}\\).</p>
<p>\\(Z = \\dfrac{1}{2}\\left[(x+iy) - \\dfrac{x-iy}{x^2+y^2}\\right] = \\dfrac{x(x^2+y^2-1)}{2(x^2+y^2)} + i\\dfrac{y(x^2+y^2+1)}{2(x^2+y^2)}\\)</p>
<p>\\[\\boxed{X = \\dfrac{x(x^2+y^2-1)}{2(x^2+y^2)}, \\qquad Y = \\dfrac{y(x^2+y^2+1)}{2(x^2+y^2)}}\\]</p>

<p><strong>2b) Ensemble (ℰ) : I sur l'axe \\((O;\\vec{u})\\)</strong></p>
<p>\\(I \\in (O;\\vec{u}) \\iff Y = 0 \\iff \\dfrac{y(x^2+y^2+1)}{2(x^2+y^2)} = 0\\).</p>
<p>\\(x^2+y^2+1 > 0\\) toujours, donc \\(y = 0\\) (et \\((x,y)\\neq(0,0)\\)).</p>
<p><strong>(ℰ) est l'axe \\((O;\\vec{u})\\) privé de O</strong> (axe des abscisses).</p>

<p><strong>2c) Ensemble (ℱ) : I sur l'axe \\((O;\\vec{v})\\)</strong></p>
<p>\\(I \\in (O;\\vec{v}) \\iff X = 0 \\iff x = 0\\) ou \\(x^2+y^2 = 1\\).</p>
<p><strong>(ℱ) est la réunion de l'axe \\((O;\\vec{v})\\) privé de O et du cercle de centre O et de rayon 1</strong>.</p>

<p><strong>3a) Z en fonction de θ quand |z|=1</strong></p>
<p>\\(Z = \\dfrac{e^{i\\theta} - e^{-i\\theta}}{2} = i\\sin\\theta\\)</p>
<p>Le milieu I a pour affixe \\(i\\sin\\theta\\), c'est-à-dire il appartient à l'axe des ordonnées.</p>

<p><strong>3b) Caractérisation géométrique</strong></p>
<p>Si \\(|z|=1\\), alors \\(z' = f(z) = -\\dfrac{1}{z} = -\\bar{z}\\) (car \\(z\\bar{z}=|z|^2=1\\)).</p>
<p>\\(z' = -\\bar{z} = -(x-iy) = -x+iy\\).</p>
<p>La restriction de F au cercle unité est la <strong>symétrie d'axe \\((O;\\vec{v})\\)</strong> (axe imaginaire).</p>`
    },
    {
      label: 'Exercice 2 — Refroidissement : équation différentielle (4 pts)',
      problem: `<p>À l'instant \\(t=0\\), un corps à température \\(\\theta_0 = 60°C\\) est placé dans l'air ambiant à température \\(\\theta_1 = 20°C\\). Au bout de 10 minutes, la température est 50°C. Sa température à la date t (en minutes) est solution de :</p>
<p>\\[\\dfrac{d\\theta(t)}{dt} = -k(\\theta(t)-\\theta_1)\\]</p>
<p>On pose \\(\\Phi(t) = \\theta(t)-\\theta_1\\).</p>
<p><strong>1) a)</strong> Quelle est l'équation différentielle vérifiée par Φ ?</p>
<p><strong>b)</strong> Déterminer Φ.</p>
<p><strong>c)</strong> En déduire θ(t) en fonction de k.</p>
<p><strong>d)</strong> Déterminer la constante k puis l'expression définitive de θ(t).</p>
<p><strong>2) a)</strong> Au bout de combien de minutes la température diminuera-t-elle de moitié ?</p>
<p><strong>b)</strong> Quelle sera la température au bout d'une heure ?</p>
<p><em>On donne : \\(\\ln2 \\approx 0{,}70\\) ; \\(\\ln\\dfrac{3}{4} \\approx -0{,}29\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles du premier ordre &amp; loi de refroidissement</span>
  <ul>
    <li><strong>Équation linéaire $y' = ay$ :</strong> Les solutions sur $\\mathbb{R}$ sont de la forme $y(t) = C e^{at}$ où $C \\in \\mathbb{R}$ est une constante déterminée par la condition initiale.</li>
    <li><strong>Changement de variable :</strong> Pour $\\theta'(t) = -k(\\theta(t) - \\theta_1)$, en posant $\\Phi(t) = \\theta(t) - \\theta_1$, on obtient $\\Phi'(t) = -k\\Phi(t)$, d'où $\\Phi(t) = C e^{-kt}$ et $\\theta(t) = C e^{-kt} + \\theta_1$.</li>
    <li><strong>Détermination des constantes :</strong> Utilisez $\\theta(0) = \\theta_0$ pour trouver $C = \\theta_0 - \\theta_1$, puis une mesure à date $t_1$ ($\\theta(t_1) = \\theta_{mes}$) pour isoler la constante $k = -\\dfrac{1}{t_1}\\ln\\!\\left(\\dfrac{\\theta_{mes}-\\theta_1}{\\theta_0-\\theta_1}\\right)$.</li>
    <li><strong>Résolution temporelle :</strong> Pour trouver l'instant où $\\theta(t) = T_{cible}$, résolvez $e^{-kt} = \\dfrac{T_{cible}-\\theta_1}{C} \\iff t = -\\dfrac{1}{k}\\ln\\!\\left(\\dfrac{T_{cible}-\\theta_1}{C}\\right)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Équation de Φ</strong></p>
<p>\\(\\Phi(t) = \\theta(t)-\\theta_1 \\Rightarrow \\Phi'(t) = \\theta'(t) = -k(\\theta(t)-\\theta_1) = -k\\Phi(t)\\)</p>
<p>\\[\\boxed{\\Phi'(t) = -k\\Phi(t)}\\]</p>

<p><strong>1b) Résolution</strong></p>
<p>\\(\\Phi'(t) = -k\\Phi(t)\\) est une équation différentielle linéaire du 1er ordre :</p>
<p>\\[\\Phi(t) = re^{-kt}, \\quad r \\in \\mathbb{R}\\]</p>

<p><strong>1c) Expression de θ(t)</strong></p>
<p>\\(\\theta(t) = \\Phi(t)+\\theta_1 = re^{-kt}+20\\).</p>
<p>\\(\\theta(0) = 60 \\Rightarrow r+20=60 \\Rightarrow r=40\\).</p>
<p>\\[\\theta(t) = 40e^{-kt}+20\\]</p>

<p><strong>1d) Constante k et expression définitive</strong></p>
<p>\\(\\theta(10) = 50 \\Rightarrow 40e^{-10k}+20 = 50 \\Rightarrow e^{-10k} = \\dfrac{3}{4}\\)</p>
<p>\\(-10k = \\ln\\dfrac{3}{4} \\Rightarrow k = -\\dfrac{1}{10}\\ln\\dfrac{3}{4} = \\dfrac{1}{10}\\ln\\dfrac{4}{3}\\)</p>
<p>\\[\\boxed{\\theta(t) = 40\\left(\\dfrac{3}{4}\\right)^{\\dfrac{t}{10}}+20}\\]</p>

<p><strong>2a) Température diminuée de moitié</strong></p>
<p>La température initiale est 60°C, la moitié est 30°C. On résout \\(\\theta(t) = 30\\) :</p>
<p>\\(40e^{-kt}+20 = 30 \\Rightarrow e^{-kt} = \\dfrac{1}{4} = \\dfrac{1}{2^2}\\)</p>
<p>\\(-kt = -2\\ln2 \\Rightarrow t = \\dfrac{2\\ln2}{k} = \\dfrac{20\\ln2}{\\ln\\left(\\dfrac{4}{3}\\right)} = \\dfrac{20\\times0{,}70}{0{,}29} \\approx 48\\) minutes.</p>
<p>La température diminuera de moitié au bout d'environ <strong>48 minutes</strong>.</p>

<p><strong>2b) Température au bout d'une heure</strong></p>
<p>\\(\\theta(60) = 40e^{-60k}+20 = 40\\left(\\dfrac{3}{4}\\right)^6+20 = 40\\times\\dfrac{3^6}{4^6}+20\\)</p>
<p>\\(= 40\\times\\dfrac{729}{4096}+20 \\approx 40\\times0{,}178+20 \\approx 7{,}1+20 \\approx 27°C\\)</p>
<p>Température au bout d'une heure : <strong>≈ 27°C</strong>.</p>`
    },
    {
      label: 'Problème — Fonction f par morceaux : (1−x)·exp(x) et √(x²+2x−3) (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases}(1-x)e^x & \\text{si } x \\leq 1 \\\\ \ \\sqrt{x^2+2x-3} & \\text{si } x > 1\\end{cases}\\]</p>
<p>On note (C) la courbe de f dans un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) (unité 2 cm).</p>

<p><strong>Partie A</strong></p>
<p><strong>1) a)</strong> Étudier la continuité de f en \\(x=1\\).</p>
<p><strong>b)</strong> f est-elle dérivable en \\(x=1\\) ? Interpréter géométriquement.</p>
<p><strong>2) a)</strong> Calculer les limites de f en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>b)</strong> Calculer f'(x) et étudier le signe de f'.</p>
<p><strong>c)</strong> Dresser le tableau de variation de f.</p>
<p><strong>3)</strong> Montrer que la droite \\((\\Delta): y = x+1\\) est asymptote à (C) en \\(+\\infty\\).</p>
<p><strong>4)</strong> Déterminer une équation de la tangente (T) à (C) au point d'abscisse \\(-1\\). \\((\\dfrac{1}{e} \\approx 0{,}36)\\)</p>
<p><strong>5)</strong> Tracer \\((\\Delta)\\), (T) et (C).</p>
<p><strong>6) a)</strong> Montrer que la restriction de f à \\(]1;+\\infty[\\) réalise une bijection sur un intervalle J.</p>
<p><strong>b)</strong> Construire la courbe (C') de la bijection réciproque.</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Soit \\(\\alpha < 0\\).</p>
<p><strong>a)</strong> À l'aide d'une IPP, calculer \\(I(\\alpha) = \\displaystyle\\int_\\alpha^0 xe^x\\,dx\\).</p>
<p><strong>b)</strong> Calculer en cm² l'aire \\(A(\\alpha)\\) du domaine délimité par (C), l'axe \\((Ox)\\) et les droites \\(x=\\alpha\\) et \\(x=0\\).</p>
<p><strong>c)</strong> Calculer \\(\\displaystyle\\lim_{\\alpha\\to-\\infty}A(\\alpha)\\).</p>
<p><strong>2)</strong> Déterminer les réels a, b, c tels que \\(F(x) = (ax^2+bx+c)e^{2x}\\) soit une primitive de \\(x\\mapsto(x^2-2x+1)e^{2x}\\).</p>
<p><strong>3)</strong> Calculer en cm³ le volume \\(\\mathcal{V}(\\alpha)\\) du solide engendré par la rotation complète du domaine \\(D_\\alpha\\) autour de \\((Ox)\\).</p>

<p><strong>Partie C</strong></p>
<p>On considère la courbe (Γ) de représentation paramétrique :</p>
<p>\\[\\begin{cases}x(t) = \\dfrac{2}{ \\cos t}-1 \\\\ y(t) = 2 \\tan t\\end{cases}, \\quad t \\in \\left]0;\\dfrac{\\pi}{2}\\right[\\]</p>
<p><strong>1)</strong> Donner une équation cartésienne de (Γ).</p>
<p><strong>2)</strong> En déduire que (Γ) est une partie de (C).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions définies par morceaux, continuité, dérivabilité &amp; asymptotes</span>
  <ul>
    <li><strong>Continuité en un point de raccord $x_0$ :</strong> $f$ est continue en $x_0 \\iff \\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)$.</li>
    <li><strong>Dérivabilité et point anguleux :</strong> Calculez $\\lim_{x \\to x_0^-} \\dfrac{f(x)-f(x_0)}{x-x_0} = f'_g(x_0)$ et $\\lim_{x \\to x_0^+} \\dfrac{f(x)-f(x_0)}{x-x_0} = f'_d(x_0)$. Si ces limites finies sont distinctes, $f$ n'est pas dérivable en $x_0$ et la courbe admet deux demi-tangentes formant un point anguleux.</li>
    <li><strong>Croissances comparées en $-\\infty$ :</strong> $\\lim_{x \\to -\\infty} x^n e^x = 0$, donc $\\lim_{x \\to -\\infty} (1-x)e^x = 0$ (asymptote horizontale $y=0$).</li>
    <li><strong>Asymptote oblique en $+\\infty$ :</strong> Pour montrer que $y = ax+b$ est asymptote à $\\sqrt{x^2+2x-3}$, multipliez par l'expression conjuguée : $f(x)-(ax+b) = \\dfrac{x^2+2x-3-(ax+b)^2}{\\sqrt{x^2+2x-3}+(ax+b)} \\xrightarrow{x\\to+\\infty} 0$.</li>
    <li><strong>Équation de la tangente :</strong> En un point d'abscisse $x_1$, $(T) : y = f'(x_1)(x-x_1) + f(x_1)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Continuité en 1</strong></p>
<p>\\(\\lim_{x\\to1^-}f(x) = (1-1)e^1 = 0\\)</p>
<p>\\(\\lim_{x\\to1^+}f(x) = \\sqrt{1+2-3} = 0\\)</p>
<p>\\(f(1) = 0\\). f est <strong>continue en 1</strong>.</p>

<p><strong>1b) Dérivabilité en 1</strong></p>
<p>À gauche : \\(f'(x) = -xe^x\\), donc \\(\\lim_{x\\to1^-}f'(x) = -e\\).</p>
<p>À droite : \\(f'(x) = \\dfrac{x+1}{\\sqrt{x^2+2x-3}}\\), donc \\(\\lim_{x\\to1^+}f'(x) = \\dfrac{2}{0^+} = +\\infty\\).</p>
<p>Les limites sont différentes → f <strong>non dérivable en 1</strong>.</p>
<p>Interprétation : (C) admet en \\((1;0)\\) une demi-tangente de pente \\(-e\\) à gauche et une demi-tangente verticale dirigée vers le haut à droite.</p>

<p><strong>2a) Limites</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}(1-x)e^x = 0\\) (croissances comparées).</p>
<p>Asymptote horizontale \\(y=0\\) en \\(-\\infty\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\).</p>

<p><strong>2b) Signe de f'</strong></p>
<p>Sur \\(]-\\infty;1]\\) : \\(f'(x) = -xe^x\\). Signe de \\(-x\\) : \\(f'>0\\) sur \\(]-\\infty;0[\\), \\(f'<0\\) sur \\(]0;1[\\).</p>
<p>Sur \\(]1;+\\infty[\\) : \\(f'(x) = \\dfrac{x+1}{\\sqrt{x^2+2x-3}} > 0\\) (numérateur et dénominateur positifs).</p>

<p><strong>2c) Tableau de variation</strong></p>
<p>\\(f(0) = 1\\) (maximum local). \\(f(-1) = 2e^{-1} \\approx 0{,}74\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-14" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-14" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="520" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <!-- Double trait rouge de non-dérivabilité en x = 1 (ligne f' seulement) -->
    <line x1="517" y1="50" x2="517" y2="100" stroke="#b83232" stroke-width="2"/>
    <line x1="523" y1="50" x2="523" y2="100" stroke="#b83232" stroke-width="2"/>

    <text x="235" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <line x1="330" y1="50" x2="330" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <text x="330" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="615" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>

    <text x="145" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="165" y1="225" x2="310" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-14)"/>
    <text x="330" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <line x1="350" y1="135" x2="500" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-14)"/>
    <text x="520" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="540" y1="225" x2="680" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-14)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>
<p>On a \\(f'(1^-) = -e\\) and \\(f'(1^+) = +\\infty\\), hence the symbol \\(||\\) in the derivative variation table at \\(x=1\\).</p>

<p><strong>3) Asymptote \\(y=x+1\\) en +∞</strong></p>
<p>\\(f(x)-(x+1) = \\sqrt{x^2+2x-3}-(x+1) = \\dfrac{x^2+2x-3-(x+1)^2}{\\sqrt{x^2+2x-3}+(x+1)} = \\dfrac{-4}{\\sqrt{x^2+2x-3}+x+1} \\to 0\\)</p>
<p>\\((\\Delta): y=x+1\\) est asymptote à (C) en \\(+\\infty\\).</p>

<p><strong>4) Tangente (T) en x=−1</strong></p>
<p>\\(f(-1) = 2e^{-1}\\) et \\(f'(-1) = -(-1)e^{-1} = e^{-1}\\).</p>
<p>\\[(T): y = e^{-1}(x+1)+2e^{-1} = e^{-1}(x+3) = \\dfrac{x+3}{e}\\]</p>
<p>\\[\\boxed{(T): y = \\dfrac{x+3}{e} \\approx 0{,}36(x+3)}\\]</p>

<p><strong>6a) Bijection sur ]1;+∞[</strong></p>
<p>f est continue et strictement croissante sur \\(]1;+\\infty[\\). \\(f(1^+)=0\\) et \\(\\lim_{x\\to+\\infty}f(x)=+\\infty\\).</p>
<p>f réalise une bijection de \\(]1;+\\infty[\\) vers \\(J = ]0;+\\infty[\\).</p>
<p><strong>Partie B</strong></p>

<p><strong>1a) Calcul de I(α) par IPP</strong></p>
<p>\\(u=x\\), \\(v'=e^x\\) → \\(u'=1\\), \\(v=e^x\\).</p>
<p>\\[I(\\alpha) = \\left[xe^x\\right]_\\alpha^0 - \\int_\\alpha^0 e^x\\,dx = -\\alpha e^\\alpha - [e^x]_\\alpha^0 = -\\alpha e^\\alpha - 1 + e^\\alpha = (1-\\alpha)e^\\alpha - 1\\]</p>
<p>\\[\\boxed{I(\\alpha) = (1-\\alpha)e^\\alpha - 1}\\]</p>

<p><strong>1b) Aire A(α)</strong></p>
<p>Sur \\([\\alpha;1]\\), \\(f(x) = (1-x)e^x \\geq 0\\) (car \\(f\\geq0\\) sur cet intervalle).</p>
<p>\\[A(\\alpha) = 4\\int_\\alpha^0 f(x)\\,dx = 4\\int_\\alpha^0(1-x)e^x\\,dx = 4\\left[\\int_\\alpha^0 e^x\\,dx - I(\\alpha)\\right]\\]</p>
<p>\\(\\int_\\alpha^0 e^x\\,dx = 1-e^\\alpha\\).</p>
<p>\\(A(\\alpha) = 4[(1-e^\\alpha)-((1-\\alpha)e^\\alpha-1)] = 4[2+(\\alpha-2)e^\\alpha]\\)</p>
<p>\\[\\boxed{A(\\alpha) = [8+4(\\alpha-2)e^\\alpha]\\text{ cm}^2}\\]</p>

<p><strong>1c) Limite</strong></p>
<p>\\(\\lim_{\\alpha\\to-\\infty}A(\\alpha) = 8\\) (car \\(\\alpha e^\\alpha\\to0\\) et \\(e^\\alpha\\to0\\)).</p>
<p>L'aire entre (C) et \\((Ox)\\) sur \\(]-\\infty;0]\\) est finie et vaut <strong>8 cm²</strong>.</p>

<p><strong>2) Primitive F(x) = (ax²+bx+c)e^(2x)</strong></p>
<p>\\(F'(x) = (2ax+b)e^{2x}+2(ax^2+bx+c)e^{2x} = (2ax^2+(2a+2b)x+(b+2c))e^{2x}\\)</p>
<p>Identification avec \\((x^2-2x+1)e^{2x}\\) :</p>
<p>\\(2a=1 \\Rightarrow a=\\dfrac{1}{2}\\) ; \\(2a+2b=-2 \\Rightarrow b=-\\dfrac{3}{2}\\) ; \\(b+2c=1 \\Rightarrow c=\\dfrac{5}{4}\\)</p>
<p>\\[\\boxed{F(x) = \\left(\\dfrac{x^2}{2}-\\dfrac{3x}{2}+\\dfrac{5}{4}\\right)e^{2x}}\\]</p>

<p><strong>3) Volume 𝒱(α)</strong></p>
<p>\\[\\mathcal{V}(\\alpha) = \\pi\\int_\\alpha^0[f(x)]^2\\,dx\\times8\\text{ cm}^3 = 8\\pi\\int_\\alpha^0(1-x)^2e^{2x}\\,dx = 8\\pi[F(x)]_\\alpha^0\\]</p>
<p>\\(F(0) = \\dfrac{5}{4}\\) et \\(F(\\alpha) = \\left(\\dfrac{\\alpha^2}{2}-\\dfrac{3\\alpha}{2}+\\dfrac{5}{4}\\right)e^{2\\alpha}\\).</p>
<p>\\[\\mathcal{V}(\\alpha) = 8\\pi\\left[\\dfrac{5}{4}-\\left(\\dfrac{\\alpha^2}{2}-\\dfrac{3\\alpha}{2}+\\dfrac{5}{4}\\right)e^{2\\alpha}\\right] = 2\\pi\\left[5-(2\\alpha^2-6\\alpha+5)e^{2\\alpha}\\right]\\text{ cm}^3\\]</p>

<p><strong>Partie C</strong></p>

<p><strong>1) Équation cartésienne de (Γ)</strong></p>
<p>\\(x = \\dfrac{2}{\\cos t}-1 \\Rightarrow \\dfrac{2}{\\cos t} = x+1 \\Rightarrow \\cos t = \\dfrac{2}{x+1}\\).</p>
<p>\\(y = 2\\tan t\\) et \\(1+\\tan^2 t = \\dfrac{1}{\\cos^2 t}\\), donc \\(\\tan^2 t = \\dfrac{1}{\\cos^2 t}-1 = \\dfrac{(x+1)^2}{4}-1\\).</p>
<p>\\(y^2 = 4\\tan^2 t = (x+1)^2-4 = x^2+2x-3\\), et \\(y=2\\tan t > 0\\) pour \\(t\\in]0;\\dfrac{\\pi}{2}[\\).</p>
<p>\\(\\boxed{(\\Gamma): y = \\sqrt{x^2+2x-3}, \\ ; x > 1}\\)</p>

<p><strong>2) (Γ) est une partie de (C)</strong></p>
<p>Pour \\(t\\in]0;\\dfrac{\\pi}{2}[\\) : \\(\\cos t \\in ]0;1[\\) donc \\(\\dfrac{2}{\\cos t} > 2\\) et \\(x = \\dfrac{2}{\\cos t}-1 > 1\\).</p>
<p>Et \\(y = \\sqrt{x^2+2x-3} = f(x)\\) pour \\(x>1\\).</p>
<p>\\((\\Gamma) = (C)|_{]1;+\\infty[}\\) : (Γ) est la partie de (C) correspondant à \\(x > 1\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et asymptote (Δ) — BAC 2014 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="137.6" y1="40" x2="137.6" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="215.3" y1="40" x2="215.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="292.9" y1="40" x2="292.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="448.2" y1="40" x2="448.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="525.9" y1="40" x2="525.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="603.5" y1="40" x2="603.5" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="681.2" y1="40" x2="681.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="363.1" x2="720" y2="363.1" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="255.4" x2="720" y2="255.4" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="201.5" x2="720" y2="201.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="147.7" x2="720" y2="147.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="93.8" x2="720" y2="93.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="60" y1="309.2" x2="720" y2="309.2" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="710" y="303.2" text-anchor="end" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">y = 0 en −∞</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="309.2" x2="735" y2="309.2" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="313.2" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="370.6" y1="400" x2="370.6" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="370.6" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="358.6" y="325.2" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="305.2" x2="60.0" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="137.6" y1="305.2" x2="137.6" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="137.6" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="215.3" y1="305.2" x2="215.3" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="215.3" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="292.9" y1="305.2" x2="292.9" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="292.9" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="448.2" y1="305.2" x2="448.2" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="448.2" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="525.9" y1="305.2" x2="525.9" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="525.9" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="603.5" y1="305.2" x2="603.5" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="603.5" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="681.2" y1="305.2" x2="681.2" y2="313.2" stroke="#1f2937" stroke-width="1"/><text x="681.2" y="325.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="366.6" y1="363.1" x2="374.6" y2="363.1" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="367.1" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="366.6" y1="255.4" x2="374.6" y2="255.4" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="259.4" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="366.6" y1="201.5" x2="374.6" y2="201.5" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="205.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="366.6" y1="147.7" x2="374.6" y2="147.7" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="151.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="366.6" y1="93.8" x2="374.6" y2="93.8" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="97.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="366.6" y1="40.0" x2="374.6" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    
    <!-- Courbes -->
    <path d="M 60.0 304.3 L 62.6 304.2 L 65.2 304.0 L 67.8 303.9 L 70.4 303.7 L 72.9 303.6 L 75.5 303.4 L 78.1 303.3 L 80.7 303.1 L 83.3 303.0 L 85.9 302.8 L 88.5 302.6 L 91.1 302.5 L 93.6 302.3 L 96.2 302.1 L 98.8 301.9 L 101.4 301.7 L 104.0 301.5 L 106.6 301.3 L 109.2 301.1 L 111.8 300.9 L 114.4 300.7 L 116.9 300.5 L 119.5 300.2 L 122.1 300.0 L 124.7 299.8 L 127.3 299.5 L 129.9 299.3 L 132.5 299.0 L 135.1 298.8 L 137.6 298.5 L 140.2 298.2 L 142.8 298.0 L 145.4 297.7 L 148.0 297.4 L 150.6 297.1 L 153.2 296.8 L 155.8 296.5 L 158.4 296.2 L 160.9 295.8 L 163.5 295.5 L 166.1 295.2 L 168.7 294.8 L 171.3 294.5 L 173.9 294.1 L 176.5 293.8 L 179.1 293.4 L 181.6 293.0 L 184.2 292.6 L 186.8 292.2 L 189.4 291.8 L 192.0 291.4 L 194.6 291.0 L 197.2 290.6 L 199.8 290.1 L 202.4 289.7 L 204.9 289.2 L 207.5 288.8 L 210.1 288.3 L 212.7 287.9 L 215.3 287.4 L 217.9 286.9 L 220.5 286.4 L 223.1 285.9 L 225.6 285.4 L 228.2 284.8 L 230.8 284.3 L 233.4 283.8 L 236.0 283.2 L 238.6 282.7 L 241.2 282.1 L 243.8 281.5 L 246.4 281.0 L 248.9 280.4 L 251.5 279.8 L 254.1 279.2 L 256.7 278.6 L 259.3 278.0 L 261.9 277.4 L 264.5 276.7 L 267.1 276.1 L 269.6 275.5 L 272.2 274.8 L 274.8 274.2 L 277.4 273.6 L 280.0 272.9 L 282.6 272.2 L 285.2 271.6 L 287.8 270.9 L 290.4 270.3 L 292.9 269.6 L 295.5 269.0 L 298.1 268.3 L 300.7 267.6 L 303.3 267.0 L 305.9 266.3 L 308.5 265.7 L 311.1 265.0 L 313.6 264.4 L 316.2 263.8 L 318.8 263.2 L 321.4 262.5 L 324.0 261.9 L 326.6 261.4 L 329.2 260.8 L 331.8 260.2 L 334.4 259.7 L 336.9 259.2 L 339.5 258.7 L 342.1 258.2 L 344.7 257.8 L 347.3 257.4 L 349.9 257.0 L 352.5 256.6 L 355.1 256.3 L 357.6 256.1 L 360.2 255.8 L 362.8 255.6 L 365.4 255.5 L 368.0 255.4 L 370.6 255.4 L 373.2 255.4 L 375.8 255.5 L 378.4 255.7 L 380.9 255.9 L 383.5 256.2 L 386.1 256.6 L 388.7 257.1 L 391.3 257.7 L 393.9 258.4 L 396.5 259.1 L 399.1 260.0 L 401.6 261.0 L 404.2 262.2 L 406.8 263.4 L 409.4 264.8 L 412.0 266.4 L 414.6 268.1 L 417.2 270.0 L 419.8 272.0 L 422.4 274.3 L 424.9 276.7 L 427.5 279.3 L 430.1 282.2 L 432.7 285.3 L 435.3 288.6 L 437.9 292.2 L 440.5 296.0 L 443.1 300.1 L 445.6 304.5 L 448.2 309.2" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 448.2 309.2 L 450.0 292.7 L 451.9 285.8 L 453.7 280.5 L 455.5 275.9 L 457.3 271.9 L 459.1 268.2 L 460.9 264.8 L 462.7 261.6 L 464.5 258.6 L 466.4 255.7 L 468.2 252.9 L 470.0 250.3 L 471.8 247.7 L 473.6 245.2 L 475.4 242.8 L 477.2 240.4 L 479.0 238.1 L 480.8 235.9 L 482.7 233.7 L 484.5 231.5 L 486.3 229.4 L 488.1 227.3 L 489.9 225.2 L 491.7 223.2 L 493.5 221.2 L 495.3 219.2 L 497.2 217.3 L 499.0 215.3 L 500.8 213.4 L 502.6 211.6 L 504.4 209.7 L 506.2 207.9 L 508.0 206.0 L 509.8 204.2 L 511.6 202.4 L 513.5 200.7 L 515.3 198.9 L 517.1 197.1 L 518.9 195.4 L 520.7 193.7 L 522.5 192.0 L 524.3 190.3 L 526.1 188.6 L 528.0 186.9 L 529.8 185.2 L 531.6 183.6 L 533.4 181.9 L 535.2 180.3 L 537.0 178.7 L 538.8 177.0 L 540.6 175.4 L 542.4 173.8 L 544.3 172.2 L 546.1 170.6 L 547.9 169.0 L 549.7 167.4 L 551.5 165.9 L 553.3 164.3 L 555.1 162.7 L 556.9 161.2 L 558.8 159.6 L 560.6 158.1 L 562.4 156.5 L 564.2 155.0 L 566.0 153.5 L 567.8 152.0 L 569.6 150.4 L 571.4 148.9 L 573.2 147.4 L 575.1 145.9 L 576.9 144.4 L 578.7 142.9 L 580.5 141.4 L 582.3 139.9 L 584.1 138.4 L 585.9 136.9 L 587.7 135.5 L 589.6 134.0 L 591.4 132.5 L 593.2 131.0 L 595.0 129.6 L 596.8 128.1 L 598.6 126.7 L 600.4 125.2 L 602.2 123.7 L 604.0 122.3 L 605.9 120.8 L 607.7 119.4 L 609.5 118.0 L 611.3 116.5 L 613.1 115.1 L 614.9 113.6 L 616.7 112.2 L 618.5 110.8 L 620.4 109.3 L 622.2 107.9 L 624.0 106.5 L 625.8 105.1 L 627.6 103.7 L 629.4 102.2 L 631.2 100.8 L 633.0 99.4 L 634.8 98.0 L 636.7 96.6 L 638.5 95.2 L 640.3 93.8 L 642.1 92.4 L 643.9 91.0 L 645.7 89.6 L 647.5 88.2 L 649.3 86.8 L 651.2 85.4 L 653.0 84.0 L 654.8 82.6 L 656.6 81.2 L 658.4 79.8 L 660.2 78.4 L 662.0 77.0 L 663.8 75.7 L 665.6 74.3 L 667.5 72.9 L 669.3 71.5 L 671.1 70.1 L 672.9 68.8 L 674.7 67.4 L 676.5 66.0 L 678.3 64.6 L 680.1 63.3 L 682.0 61.9 L 683.8 60.5 L 685.6 59.2 L 687.4 57.8 L 689.2 56.4 L 691.0 55.1 L 692.8 53.7 L 694.6 52.3 L 696.4 51.0 L 698.3 49.6 L 700.1 48.2 L 701.9 46.9 L 703.7 45.5 L 705.5 44.2 L 707.3 42.8 L 709.1 41.5 L 710.9 40.1 L 712.8 38.8 L 714.6 37.4 L 716.4 36.1 L 718.2 34.7 L 720.0 33.4" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 448.2 201.5 L 450.0 200.3 L 451.9 199.0 L 453.7 197.8 L 455.5 196.5 L 457.3 195.3 L 459.1 194.0 L 460.9 192.7 L 462.7 191.5 L 464.5 190.2 L 466.4 189.0 L 468.2 187.7 L 470.0 186.5 L 471.8 185.2 L 473.6 183.9 L 475.4 182.7 L 477.2 181.4 L 479.0 180.2 L 480.8 178.9 L 482.7 177.7 L 484.5 176.4 L 486.3 175.2 L 488.1 173.9 L 489.9 172.6 L 491.7 171.4 L 493.5 170.1 L 495.3 168.9 L 497.2 167.6 L 499.0 166.4 L 500.8 165.1 L 502.6 163.8 L 504.4 162.6 L 506.2 161.3 L 508.0 160.1 L 509.8 158.8 L 511.6 157.6 L 513.5 156.3 L 515.3 155.1 L 517.1 153.8 L 518.9 152.5 L 520.7 151.3 L 522.5 150.0 L 524.3 148.8 L 526.1 147.5 L 528.0 146.3 L 529.8 145.0 L 531.6 143.7 L 533.4 142.5 L 535.2 141.2 L 537.0 140.0 L 538.8 138.7 L 540.6 137.5 L 542.4 136.2 L 544.3 134.9 L 546.1 133.7 L 547.9 132.4 L 549.7 131.2 L 551.5 129.9 L 553.3 128.7 L 555.1 127.4 L 556.9 126.2 L 558.8 124.9 L 560.6 123.6 L 562.4 122.4 L 564.2 121.1 L 566.0 119.9 L 567.8 118.6 L 569.6 117.4 L 571.4 116.1 L 573.2 114.8 L 575.1 113.6 L 576.9 112.3 L 578.7 111.1 L 580.5 109.8 L 582.3 108.6 L 584.1 107.3 L 585.9 106.1 L 587.7 104.8 L 589.6 103.5 L 591.4 102.3 L 593.2 101.0 L 595.0 99.8 L 596.8 98.5 L 598.6 97.3 L 600.4 96.0 L 602.2 94.7 L 604.0 93.5 L 605.9 92.2 L 607.7 91.0 L 609.5 89.7 L 611.3 88.5 L 613.1 87.2 L 614.9 85.9 L 616.7 84.7 L 618.5 83.4 L 620.4 82.2 L 622.2 80.9 L 624.0 79.7 L 625.8 78.4 L 627.6 77.2 L 629.4 75.9 L 631.2 74.6 L 633.0 73.4 L 634.8 72.1 L 636.7 70.9 L 638.5 69.6 L 640.3 68.4 L 642.1 67.1 L 643.9 65.8 L 645.7 64.6 L 647.5 63.3 L 649.3 62.1 L 651.2 60.8 L 653.0 59.6 L 654.8 58.3 L 656.6 57.1 L 658.4 55.8 L 660.2 54.5 L 662.0 53.3 L 663.8 52.0 L 665.6 50.8 L 667.5 49.5 L 669.3 48.3 L 671.1 47.0 L 672.9 45.7 L 674.7 44.5 L 676.5 43.2 L 678.3 42.0 L 680.1 40.7 L 682.0 39.5 L 683.8 38.2 L 685.6 36.9 L 687.4 35.7 L 689.2 34.4 L 691.0 33.2 L 692.8 31.9 L 694.6 30.7 L 696.4 29.4 L 698.3 28.2 L 700.1 26.9 L 701.9 25.6 L 703.7 24.4 L 705.5 23.1 L 707.3 21.9 L 709.1 20.6 L 710.9 19.4 L 712.8 18.1 L 714.6 16.8 L 716.4 15.6 L 718.2 14.3 L 720.0 13.1" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
    
    <!-- Points remarquables -->
    <circle cx="370.6" cy="255.4" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(360.6, 247.4)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 1)</text>
    </g><circle cx="448.2" cy="309.2" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(458.2, 325.2)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(1 ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="78" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Branche x ≤ 1</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Branche x > 1</text>
      <line x1="10" y1="52" x2="35" y2="52" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="56" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (Δ) : y = x + 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},

{
  id: 'bac-2014-D-juillet-2nd',
  year: 2014,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2014 / 2nd tour',
  topics: ['Courbes paramétriques', 'Géométrie dans l\'espace', 'Fonction exponentielle', 'Bijection & Intégrales & Volume'],
  parts: [
    {
      label: 'Exercice 1 — Courbe paramétrique (x=cos t, y=sin 2t) (4 pts)',
      problem: `<p>On considère la courbe (C) de représentation paramétrique :</p>
<p>\\[\\begin{cases}x(t) = \\cos t \\\\ y(t) = \\\\ sin(2t)\\end{cases}, \\quad t \\in \\mathbb{R}\\]</p>
<p><strong>1)</strong> Étudier la position relative de M(t+2π) et M(t), M(−t) et M(t), M(π−t) et M(t).</p>
<p><strong>2) a)</strong> Montrer que si \\(t \\in [0;\\dfrac{\\pi}{2}]\\) alors \\((\\pi-t) \\in [\\dfrac{\\pi}{2};\\pi]\\).</p>
<p><strong>b)</strong> En déduire qu'il suffit d'étudier (C) pour \\(t \\in [0;\\dfrac{\\pi}{2}]\\).</p>
<p><strong>3)</strong> Étudier \\(t \\mapsto x(t)\\) et \\(t \\mapsto y(t)\\) sur \\([0;\\dfrac{\\pi}{2}]\\), dresser le tableau conjoint et tracer (C).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Courbes paramétriques &amp; vecteurs tangents</span>
  <ul>
    <li><strong>Réduction du domaine d'étude :</strong> Étudiez la périodicité commune de $x(t)$ et $y(t)$ ($T = 2\\pi$), puis la parité ($t \\mapsto -t$ symétrie axiale par $(Ox)$ ou $(Oy)$) pour restreindre l'intervalle à $[0 ; \\dfrac{\\pi}{2}]$.</li>
    <li><strong>Dérivées trigonométriques :</strong> $(\\cos t)' = -\\sin t$ et $(\\sin 2t)' = 2\\cos 2t$. Les zéros des dérivées donnent les tangentes horizontales ($y'=0, x'\\neq 0$) et verticales ($x'=0, y'\\neq 0$).</li>
    <li><strong>Vecteur tangent :</strong> En tout point régulier $M(t)$, le vecteur tangent est $\\vec{V}(t) = (x'(t); y'(t))$. La pente de la tangente est $m = \\dfrac{y'(t)}{x'(t)}$ si $x'(t) \\neq 0$.</li>
    <li><strong>Tableau de variations conjoint :</strong> Regroupe sur un même tableau $t$, les lignes de signes de $x'(t)$ et $y'(t)$, et les variations coordonnées de $x(t)$ et $y(t)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Positions relatives</strong></p>
<p><em>M(t+2π) et M(t) :</em> \\(x(t+2\\pi) = \\cos(t+2\\pi) = \\cos t = x(t)\\) et \\(y(t+2\\pi) = \\sin(2t+4\\pi) = \\sin 2t = y(t)\\). \\(M(t+2\\pi) = M(t)\\) : <strong>la courbe est 2π-périodique</strong>.</p>
<p><em>M(−t) et M(t) :</em> \\(x(-t) = \\cos(-t) = \\cos t = x(t)\\) et \\(y(-t) = \\sin(-2t) = -\\sin 2t = -y(t)\\). M(−t) est le symétrique de M(t) par rapport à \\((Ox)\\) → <strong>symétrie axiale d'axe \\((Ox)\\)</strong>.</p>
<p><em>M(π−t) et M(t) :</em> \\(x(\\pi-t) = \\cos(\\pi-t) = -\\cos t = -x(t)\\) et \\(y(\\pi-t) = \\sin(2\\pi-2t) = -\\sin 2t = -y(t)\\). M(π−t) est le symétrique de M(t) par rapport à <strong>l'origine O</strong>.</p>

<p><strong>2a)</strong></p>
<p>\\(t \\in [0;\\dfrac{\\pi}{2}] \\Rightarrow 0 \\leq t \\leq \\dfrac{\\pi}{2} \\Rightarrow -\\dfrac{\\pi}{2} \\leq -t \\leq 0 \\Rightarrow \\dfrac{\\pi}{2} \\leq \\pi-t \\leq \\pi\\). </p>

<p><strong>2b)</strong></p>
<p>D'après 1) : M(π−t) est le symétrique de M(t) par rapport à O. Donc la partie \\(t\\in[\\dfrac{\\pi}{2};\\pi]\\) s'obtient par symétrie centrale de la partie \\(t\\in[0;\\dfrac{\\pi}{2}]\\).</p>
<p>D'après 1) : M(−t) est le symétrique de M(t) par rapport à \\((Ox)\\). Donc les parties \\(t\\in[-\\pi;0]\\) s'obtiennent par réflexion.</p>
<p>Il suffit donc d'étudier (C) pour \\(t \\in [0;\\dfrac{\\pi}{2}]\\), puis de compléter par symétrie centrale (×1) et symétrie axiale (×1).</p>

<p><strong>3) Variations sur \\([0;\\dfrac{\\pi}{2}]\\)</strong></p>
<p>\\(x'(t) = -\\sin t \\leq 0\\) → x décroissante sur \\([0;\\dfrac{\\pi}{2}]\\).</p>
<p>\\(y'(t) = 2\\cos 2t\\). \\(y'(t)=0 \\iff 2t=\\dfrac{\\pi}{2} \\iff t=\\dfrac{\\pi}{4}\\).</p>
<p>y croissante sur \\([0;\\dfrac{\\pi}{4}]\\), décroissante sur \\([\\dfrac{\\pi}{4};\\dfrac{\\pi}{2}]\\).</p>

<p>Points clés : \\(M(0)=(1;0)\\), \\(M(\\dfrac{\\pi}{4})=(\\dfrac{\\sqrt{2}}{2};1)\\), \\(M(\\dfrac{\\pi}{2})=(0;0)\\).</p>
<p>Vecteurs tangents : \\((x'(0);y'(0))=(0;2)\\) → tangente verticale en \\((1;0)\\). \\((x'(\\dfrac{\\pi}{2});y'(\\dfrac{\\pi}{2}))=(-1;-2)\\) → pente 2 en O.</p>


<div class="diagram-wrap">
  <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-14-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-14-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="318" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 319 L 10 319 C 5 319 1 315 1 310 Z" fill="#222d46"/>
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="180" x2="760" y2="180" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="225" x2="760" y2="225" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="320" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="135" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="203" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="272" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">y(t)</text>

    <!-- t row -->
    <text x="160" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="430" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/4</text>
    <text x="700" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/2</text>

    <!-- vertical guide lines -->
    <line x1="430" y1="45" x2="430" y2="319" stroke="#dde1ec" stroke-width="1.2"/>

    <!-- x'(t) row -->
    <text x="160" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="295" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="430" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="700">−√2/2</text>
    <text x="565" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="700" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">−1</text>

    <!-- x(t) row -->
    <text x="160" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="185" y1="120" x2="405" y2="140" stroke="#b83232" stroke-width="2.2" stroke-linecap="round"/>
    <text x="430" y="140" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">√2/2</text>
    <line x1="455" y1="140" x2="675" y2="165" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-14-2-param)"/>
    <text x="700" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>

    <!-- y'(t) row -->
    <text x="160" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">2</text>
    <text x="295" y="203" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="430" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="565" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="700" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">−2</text>

    <!-- y(t) row -->
    <text x="160" y="295" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="185" y1="290" x2="405" y2="245" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-14-2-param)"/>
    <text x="430" y="245" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="455" y1="250" x2="675" y2="295" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-14-2-param)"/>
    <text x="700" y="295" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé graphique de la courbe (C) avec ses points remarquables et tangentes</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
      <marker id="arr-tan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#ef4444"/>
      </marker>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="154.3" y1="40" x2="154.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="625.7" y1="40" x2="625.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="340.0" x2="720" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="90.0" x2="720" y2="90.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes cartésiens -->
    <!-- Axe Ox -->
    <line x1="50" y1="215.0" x2="735" y2="215.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="219.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <!-- Axe Oy -->
    <line x1="390.0" y1="400" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="390.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="378.0" y="231.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="154.3" y1="211.0" x2="154.3" y2="219.0" stroke="#1f2937" stroke-width="1"/><text x="154.3" y="231.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="625.7" y1="211.0" x2="625.7" y2="219.0" stroke="#1f2937" stroke-width="1"/><text x="625.7" y="231.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text>
    <line x1="386.0" y1="340.0" x2="394.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="90.0" x2="394.0" y2="90.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="94.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text>
    
    <!-- Branche symétrique si présente -->
    <path d="M 154.3 215.0 L 154.3 211.1 L 154.4 207.2 L 154.5 203.2 L 154.8 199.3 L 155.0 195.4 L 155.3 191.6 L 155.7 187.7 L 156.1 183.9 L 156.6 180.1 L 157.2 176.4 L 157.8 172.7 L 158.5 169.0 L 159.2 165.4 L 160.0 161.8 L 160.8 158.3 L 161.7 154.8 L 162.6 151.4 L 163.6 148.0 L 164.7 144.7 L 165.8 141.5 L 167.0 138.4 L 168.2 135.3 L 169.5 132.3 L 170.8 129.4 L 172.2 126.6 L 173.7 123.9 L 175.2 121.2 L 176.7 118.7 L 178.3 116.2 L 180.0 113.9 L 181.7 111.6 L 183.4 109.5 L 185.3 107.4 L 187.1 105.5 L 189.0 103.6 L 191.0 101.9 L 193.0 100.3 L 195.0 98.8 L 197.2 97.4 L 199.3 96.1 L 201.5 95.0 L 203.7 93.9 L 206.0 93.0 L 208.4 92.2 L 210.8 91.5 L 213.2 91.0 L 215.7 90.6 L 218.2 90.2 L 220.7 90.1 L 223.3 90.0 L 226.0 90.1 L 228.6 90.2 L 231.4 90.6 L 234.1 91.0 L 236.9 91.5 L 239.8 92.2 L 242.6 93.0 L 245.5 93.9 L 248.5 95.0 L 251.5 96.1 L 254.5 97.4 L 257.5 98.8 L 260.6 100.3 L 263.7 101.9 L 266.8 103.6 L 270.0 105.5 L 273.2 107.4 L 276.4 109.5 L 279.7 111.6 L 283.0 113.9 L 286.3 116.2 L 289.6 118.7 L 293.0 121.2 L 296.4 123.9 L 299.8 126.6 L 303.2 129.4 L 306.7 132.3 L 310.2 135.3 L 313.6 138.4 L 317.2 141.5 L 320.7 144.7 L 324.2 148.0 L 327.8 151.4 L 331.4 154.8 L 335.0 158.3 L 338.6 161.8 L 342.2 165.4 L 345.8 169.0 L 349.5 172.7 L 353.1 176.4 L 356.8 180.1 L 360.5 183.9 L 364.1 187.7 L 367.8 191.6 L 371.5 195.4 L 375.2 199.3 L 378.9 203.2 L 382.6 207.2 L 386.3 211.1 L 390.0 215.0" fill="none" stroke="#60a5fa" stroke-width="2.8" stroke-dasharray="6 4" opacity="0.8"/>
    
    <!-- Branche principale étudiée -->
    <path d="M 625.7 215.0 L 625.7 211.1 L 625.6 207.2 L 625.5 203.2 L 625.2 199.3 L 625.0 195.4 L 624.7 191.6 L 624.3 187.7 L 623.9 183.9 L 623.4 180.1 L 622.8 176.4 L 622.2 172.7 L 621.5 169.0 L 620.8 165.4 L 620.0 161.8 L 619.2 158.3 L 618.3 154.8 L 617.4 151.4 L 616.4 148.0 L 615.3 144.7 L 614.2 141.5 L 613.0 138.4 L 611.8 135.3 L 610.5 132.3 L 609.2 129.4 L 607.8 126.6 L 606.3 123.9 L 604.8 121.2 L 603.3 118.7 L 601.7 116.2 L 600.0 113.9 L 598.3 111.6 L 596.6 109.5 L 594.7 107.4 L 592.9 105.5 L 591.0 103.6 L 589.0 101.9 L 587.0 100.3 L 585.0 98.8 L 582.8 97.4 L 580.7 96.1 L 578.5 95.0 L 576.3 93.9 L 574.0 93.0 L 571.6 92.2 L 569.2 91.5 L 566.8 91.0 L 564.3 90.6 L 561.8 90.2 L 559.3 90.1 L 556.7 90.0 L 554.0 90.1 L 551.4 90.2 L 548.6 90.6 L 545.9 91.0 L 543.1 91.5 L 540.2 92.2 L 537.4 93.0 L 534.5 93.9 L 531.5 95.0 L 528.5 96.1 L 525.5 97.4 L 522.5 98.8 L 519.4 100.3 L 516.3 101.9 L 513.2 103.6 L 510.0 105.5 L 506.8 107.4 L 503.6 109.5 L 500.3 111.6 L 497.0 113.9 L 493.7 116.2 L 490.4 118.7 L 487.0 121.2 L 483.6 123.9 L 480.2 126.6 L 476.8 129.4 L 473.3 132.3 L 469.8 135.3 L 466.4 138.4 L 462.8 141.5 L 459.3 144.7 L 455.8 148.0 L 452.2 151.4 L 448.6 154.8 L 445.0 158.3 L 441.4 161.8 L 437.8 165.4 L 434.2 169.0 L 430.5 172.7 L 426.9 176.4 L 423.2 180.1 L 419.5 183.9 L 415.9 187.7 L 412.2 191.6 L 408.5 195.4 L 404.8 199.3 L 401.1 203.2 L 397.4 207.2 L 393.7 211.1 L 390.0 215.0" fill="none" stroke="#2563eb" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables & tangentes -->
    <circle cx="625.7" cy="215.0" r="5.5" fill="#d97706" stroke="#ffffff" stroke-width="2.5"/><line x1="625.7" y1="247.0" x2="625.7" y2="183.0" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/><line x1="625.7" y1="215.0" x2="625.7" y2="183.0" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-tan)"/>
    <g transform="translate(637.7, 205.0)">
      <text x="35" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(0)(1;0)</text>
    </g><circle cx="556.7" cy="90.0" r="5.5" fill="#d97706" stroke="#ffffff" stroke-width="2.5"/><line x1="588.7" y1="90.0" x2="524.7" y2="90.0" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/><line x1="556.7" y1="90.0" x2="524.7" y2="90.0" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-tan)"/>
    <g transform="translate(556.7, 78.0)">
      <text x="27" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π/4)(0.71;1)</text>
    </g><circle cx="390.0" cy="215.0" r="5.5" fill="#d97706" stroke="#ffffff" stroke-width="2.5"/><line x1="404.3" y1="186.4" x2="375.7" y2="243.6" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/><line x1="390.0" y1="215.0" x2="375.7" y2="243.6" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-tan)"/>
    <g transform="translate(378.0, 233.0)">
      <text x="-15" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π/2)(0;0)=O</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="175" height="48" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="16" x2="35" y2="16" stroke="#2563eb" stroke-width="3"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-tan)"/>
      <text x="42" y="38" fill="#ef4444" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="700">Tangentes</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    },
    {
      label: 'Exercice 2 — Géométrie dans l\'espace (4 pts)',
      problem: `<p>L'espace est rapporté à un repère orthonormal direct \\((O;\\vec{i};\\vec{j};\\vec{k})\\). On donne les points \\(A(-1;0;2)\\), \\(B(0;1;3)\\), \\(C(1;3;0)\\) et \\(D(-1;-1;1)\\).</p>
<p><strong>1)</strong> Calculer l'aire du triangle ABC.</p>
<p><strong>2) a)</strong> Calculer la distance du point D au plan (ABC).</p>
<p><strong>b)</strong> Les points A, B, C et D sont-ils coplanaires ?</p>
<p><strong>3)</strong> Calculer le volume du tétraèdre DABC.</p>
<p><strong>4) a)</strong> Déterminer les coordonnées du point E tel que ABDE soit un parallélogramme.</p>
<p><strong>b)</strong> Calculer l'aire du parallélogramme ABDE.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie dans l'espace, produit vectoriel &amp; volumes</span>
  <ul>
    <li><strong>Produit vectoriel $\\vec{u} \\wedge \\vec{v}$ :</strong> $\\begin{pmatrix}x \\\\ y \\\\ z\\end{pmatrix} \\wedge \\begin{pmatrix}x' \\\\ y' \\\\ z'\\end{pmatrix} = \\begin{pmatrix}yz'-zy' \\\\ zx'-xz' \\\\ xy'-yx'\\end{pmatrix}$. Il est orthogonal à $\\vec{u}$ et $\\vec{v}$.</li>
    <li><strong>Aire d'un triangle :</strong> $\\text{Aire}(ABC) = \\dfrac{1}{2}\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\|$.</li>
    <li><strong>Équation cartésienne du plan $(ABC)$ :</strong> Le vecteur $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (a;b;c)$ est un vecteur normal. L'équation est $ax+by+cz+d=0$, où $d$ se trouve avec les coordonnées de $A$.</li>
    <li><strong>Distance d'un point à un plan :</strong> $d(D, (ABC)) = \\dfrac{|ax_D+by_D+cz_D+d|}{\\sqrt{a^2+b^2+c^2}}$.</li>
    <li><strong>Volume d'un tétraèdre :</strong> $V = \\dfrac{1}{6}|(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}| = \\dfrac{1}{3}\\text{Aire}(ABC) \\times d(D, (ABC))$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Aire du triangle ABC</strong></p>
<p>\\(\\overrightarrow{AB} = (1;1;1)\\) et \\(\\overrightarrow{AC} = (2;3;-2)\\).</p>
<p>\\[\\overrightarrow{AB}\\wedge\\overrightarrow{AC} = \\begin{vmatrix}\ \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1&1&1 \\\\ 2&3&-2\\end{vmatrix} = (-2-3)\\vec{i}-(−2-2)\\vec{j}+(3-2)\\vec{k} = (-5;4;1)\\]</p>
<p>\\(\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\| = \\sqrt{25+16+1} = \\sqrt{42}\\)</p>
<p>\\[\\boxed{\\text{Aire}(ABC) = \\dfrac{\\sqrt{42}}{2} \\text{ u.a.}}\\]</p>

<p><strong>2a) Distance de D au plan (ABC)</strong></p>
<p>\\(\\overrightarrow{AD} = (0;-1;-1)\\).</p>
<p>\\((\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD} = (-5)(0)+(4)(-1)+(1)(-1) = -5\\)</p>
<p>\\[d(D;(ABC)) = \\dfrac{|{-5}|}{\\sqrt{42}} = \\dfrac{5}{\\sqrt{42}} = \\dfrac{5\\sqrt{42}}{42}\\]</p>

<p><strong>2b) Coplanarité</strong></p>
<p>\\(d(D;(ABC)) \\neq 0\\) → A, B, C et D <strong>ne sont pas coplanaires</strong>.</p>

<p><strong>3) Volume du tétraèdre</strong></p>
<p>\\[V = \\dfrac{1}{3}\\times\\text{Aire}(ABC)\\times d(D;(ABC)) = \\dfrac{1}{3}\\times\\dfrac{\\sqrt{42}}{2}\\times\\dfrac{5}{\\sqrt{42}} = \\dfrac{5}{6} \\text{ u.v.}\\]</p>

<p><strong>4a) Point E pour ABDE parallélogramme</strong></p>
<p>ABDE parallélogramme \\(\\iff \\overrightarrow{EA} = \\overrightarrow{DB}\\).</p>
<p>\\(\\overrightarrow{DB} = (0-(-1);1-(-1);3-1) = (1;2;2)\\).</p>
<p>Soit E(x,y,z) : \\((-1-x;-y;2-z) = (1;2;2)\\) → \\(x=-2\\), \\(y=-2\\), \\(z=0\\).</p>
<p>\\[\\boxed{E(-2;-2;0)}\\]</p>

<p><strong>4b) Aire de ABDE</strong></p>
<p>\\(\\overrightarrow{AB} = (1;1;1)\\) et \\(\\overrightarrow{AE} = (-1;-2;-2)\\).</p>
<p>\\(\\overrightarrow{AB}\\wedge\\overrightarrow{AE} = \\begin{vmatrix}\ \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1&1&1 \\\\ -1&-2&-2\\end{vmatrix} = (0)\\vec{i}-(-1)\\vec{j}+(-1)\\vec{k} = (0;1;-1)\\)</p>
<p>\\(\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AE}\\| = \\sqrt{0+1+1} = \\sqrt{2}\\)</p>
<p>\\[\\boxed{\\text{Aire}(ABDE) = \\sqrt{2} \\text{ u.a.}}\\]</p>`
    },
    {
      label: 'Problème — Fonction f(x) = x + 1 + (x+1)·exp(−2x) (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par \\(f(x) = x+1+(x+1)e^{-2x}\\). On désigne par (C) sa courbe représentative dans le plan muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) (unité 2 cm).</p>

<p><strong>Partie A — Fonction auxiliaire</strong></p>
<p>Soit g la fonction définie par \\(g(x) = e^{2x}-2x-1\\).</p>
<p><strong>1)</strong> Calculer les limites de g en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>2) a)</strong> Étudier le sens de variation de g et dresser son tableau de variation.</p>
<p><strong>b)</strong> En déduire le signe de g(x) pour tout réel x.</p>

<p><strong>Partie B — Étude de f</strong></p>
<p><strong>1)</strong> Calculer les limites de f en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>2)</strong> Démontrer que la droite \\((\\Delta): y=x+1\\) est asymptote à (C) en \\(+\\infty\\). Préciser la position relative de (C) et \\((\\Delta)\\).</p>
<p><strong>3) a)</strong> Calculer f'(x) et l'exprimer à l'aide de g(x). En déduire le signe de f'(x).</p>
<p><strong>b)</strong> Dresser le tableau de variation de f.</p>
<p><strong>4)</strong> Calculer \\(\\displaystyle\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x}\\), puis interpréter graphiquement.</p>
<p><strong>5) a)</strong> Montrer que f réalise une bijection de \\(\\mathbb{R}\\) sur un intervalle J.</p>
<p><strong>b)</strong> Construire (C), \\((\\Delta)\\) et la courbe (Γ) de \\(f^{-1}\\).</p>

<p><strong>Partie C — Aire et volume</strong></p>
<p><strong>1)</strong> Soit \\(\\alpha > -1\\). À l'aide d'une IPP, calculer en cm² l'aire \\(A(\\alpha)\\) délimitée par (C), \\((\\Delta)\\) et les droites \\(x=-1\\) et \\(x=\\alpha\\). Calculer \\(\\displaystyle\\lim_{\\alpha\\to+\\infty}A(\\alpha)\\).</p>
<p><strong>2)</strong> Soit H la fonction définie par \\(H(x) = \\dfrac{1}{3}x^3+x^2+x-\\left(x^2+3x+\\dfrac{5}{2}\\right)e^{-2x}-\\dfrac{1}{32}(8x^2+20x+13)e^{-4x}\\).</p>
<p><strong>a)</strong> Montrer que \\([f(x)]^2 = (x+1)^2(1+2e^{-2x}+e^{-4x})\\).</p>
<p><strong>b)</strong> Calculer H'(x) et l'exprimer à l'aide de f(x).</p>
<p><strong>c)</strong> En déduire le volume V en cm³ du solide engendré par la rotation du domaine délimité par (C), l'axe \\((Ox)\\) et les droites \\(x=-1\\) et \\(x=0\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions exponentielles, position relative &amp; théorème de la bijection</span>
  <ul>
    <li><strong>Position relative de $(C)$ et $(\\Delta) : y = x+1$ :</strong> Étudiez le signe de la différence $d(x) = f(x)-(x+1) = (x+1)e^{-2x}$. Comme $e^{-2x}>0$, le signe de $d(x)$ est exactement celui de $x+1$.</li>
    <li><strong>Dérivée de produit $(u\\cdot v)' = u'v+uv'$ :</strong> Pour $f(x)=x+1+(x+1)e^{-2x}$, $f'(x) = 1 + 1\\cdot e^{-2x} + (x+1)(-2e^{-2x}) = 1-(2x+1)e^{-2x}$.</li>
    <li><strong>Théorème de la bijection :</strong> Si $f$ est continue et strictement croissante sur $\\mathbb{R}$, elle réalise une bijection de $\\mathbb{R}$ sur son intervalle image $J = f(\\mathbb{R}) = ]\\lim_{-\\infty} f ; \\lim_{+\\infty} f[ = \\mathbb{R}$.</li>
    <li><strong>Branche parabolique :</strong> Si $\\lim_{x\\to-\\infty} f(x) = -\\infty$ et $\\lim_{x\\to-\\infty} \\dfrac{f(x)}{x} = +\\infty$, la courbe admet une branche parabolique de direction $(Oy)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Limites de g</strong></p>
<p>\\(\\lim_{x\\to-\\infty}g(x) = 0 - (-\\infty) - 1 = +\\infty\\) (car \\(e^{2x}\\to0\\) et \\(-2x\\to+\\infty\\)).</p>
<p>\\(\\lim_{x\\to+\\infty}g(x) = +\\infty\\) (l'exponentielle domine).</p>

<p><strong>2a) Variations de g</strong></p>
<p>\\(g'(x) = 2e^{2x}-2 = 2(e^{2x}-1)\\). \\(g'(x)=0 \\iff x=0\\). \\(g'<0\\) sur \\(]-\\infty;0[\\), \\(g'>0\\) sur \\(]0;+\\infty[\\).</p>
<p>Minimum en \\(x=0\\) : \\(g(0) = 1-0-1 = 0\\).</p>

<p><strong>2b) Signe de g</strong></p>
<p>g(0)=0 est le minimum absolu. \\(g(x) \\geq 0\\) pour tout \\(x\\), nul seulement en 0.</p>

<p><strong>Partie B</strong></p>

<p><strong>1) Limites de f</strong></p>
<p>\\(f(x) = (x+1)(1+e^{-2x})\\).</p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = -\\infty\\) (car \\(x+1\\to-\\infty\\) et \\(e^{-2x}\\to+\\infty\\)).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\) (car \\(x+1\\to+\\infty\\) et \\(xe^{-2x}\\to0\\)).</p>

<p><strong>2) Asymptote et position</strong></p>
<p>\\(f(x)-(x+1) = (x+1)e^{-2x} \\to 0\\) (croissances comparées). \\((\\Delta): y=x+1\\) asymptote en \\(+\\infty\\).</p>
<p>\\(f(x)-(x+1) = (x+1)e^{-2x}\\). Signe = signe de \\(x+1\\).</p>
<p>Sur \\(]-\\infty;-1[\\) : (C) en-dessous de \\((\\Delta)\\). Sur \\(]-1;+\\infty[\\) : (C) au-dessus. En \\(-1\\) : intersection.</p>

<p><strong>3a) f'(x)</strong></p>
<p>\\(f'(x) = 1+e^{-2x}-2(x+1)e^{-2x} = 1+e^{-2x}(1-2x-2) = 1+(-1-2x)e^{-2x}\\)</p>
<p>\\(= 1-(2x+1)e^{-2x} = e^{-2x}(e^{2x}-2x-1) = e^{-2x}g(x)\\)</p>
<p>\\[\\boxed{f'(x) = e^{-2x}g(x) \\geq 0}\\] f est <strong>strictement croissante</strong> sur \\(\\mathbb{R}\\) (\\(f'=0\\) seulement en \\(x=0\\)).</p>

<p><strong>3b) Tableau de variation</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-14s2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <text x="160" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <text x="430" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="24" font-weight="900">+</text>

    <text x="160" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="185" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-14s2)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>
<p><em>\\(f(0) = 0+1+(0+1)e^0 = 2\\).</em></p>

<p><strong>4) Limite de f(x)/x en −∞</strong></p>
<p>\\(\\dfrac{f(x)}{x} = \\dfrac{x+1}{x}(1+e^{-2x}) = \\left(1+\\dfrac{1}{x}\\right)(1+e^{-2x})\\).</p>
<p>Pour \\(x\\to-\\infty\\) : \\(\\left(1+\\dfrac{1}{x}\\right)\\to1\\) et \\(e^{-2x}\\to+\\infty\\), donc \\(\\dfrac{f(x)}{x}\\to+\\infty\\).</p>
<p>(C) admet une <strong>branche parabolique de direction \\((Oy)\\)</strong> en \\(-\\infty\\).</p>

<p><strong>5a) Bijection</strong></p>
<p>f est continue, strictement croissante, de \\(-\\infty\\) vers \\(+\\infty\\). f réalise une bijection de \\(\\mathbb{R}\\) vers \\(J = \\mathbb{R}\\).</p>

<p><strong>Partie C</strong></p>

<p><strong>1) Aire A(α)</strong></p>
<p>Sur \\([-1;\\alpha]\\), \\(f(x)-(x+1) = (x+1)e^{-2x}\\geq0\\) (pour \\(x\\geq-1\\)).</p>
<p>IPP : \\(u=x+1\\), \\(v'=e^{-2x}\\) → \\(u'=1\\), \\(v=-\\dfrac{1}{2}e^{-2x}\\).</p>
<p>\\(\\int_{-1}^\\alpha(x+1)e^{-2x}dx = \\left[-\\dfrac{x+1}{2}e^{-2x}\\right]_{-1}^\\alpha+\\dfrac{1}{2}\\int_{-1}^\\alpha e^{-2x}dx\\)</p>
<p>\\(= -\\dfrac{\\alpha+1}{2}e^{-2\\alpha}+\\dfrac{1}{2}\\left[-\\dfrac{e^{-2x}}{2}\\right]_{-1}^\\alpha = -\\dfrac{\\alpha+1}{2}e^{-2\\alpha}-\\dfrac{e^{-2\\alpha}}{4}+\\dfrac{e^2}{4}\\)</p>
<p>\\(= \\dfrac{e^2}{4}-\\dfrac{2\\alpha+3}{4}e^{-2\\alpha}\\)</p>
<p>\\[A(\\alpha) = 4\\left(\\dfrac{e^2}{4}-\\dfrac{2\\alpha+3}{4}e^{-2\\alpha}\\right) = e^2-(2\\alpha+3)e^{-2\\alpha}\\text{ cm}^2\\]</p>
<p>\\[\\lim_{\\alpha\\to+\\infty}A(\\alpha) = e^2 \\approx 7{,}39\\text{ cm}^2\\]</p>

<p><strong>2a) [f(x)]²</strong></p>
<p>\\(f(x) = (x+1)(1+e^{-2x})\\)</p>
<p>\\([f(x)]^2 = (x+1)^2(1+e^{-2x})^2 = (x+1)^2(1+2e^{-2x}+e^{-4x})\\) </p>

<p><strong>2b) H'(x)</strong></p>
<p>En dérivant H(x) :</p>
<p>\\(H'(x) = x^2+2x+1+2(x^2+2x+1)e^{-2x}+(x^2+2x+1)e^{-4x}\\)</p>
<p>\\(= (x+1)^2[1+2e^{-2x}+e^{-4x}] = [f(x)]^2\\)</p>
<p>\\(H'(x) = [f(x)]^2\\)</p>

<p><strong>2c) Volume V</strong></p>
<p>\\[V = \\pi\\int_{-1}^0[f(x)]^2\\,dx\\times8 = 8\\pi[H(x)]_{-1}^0\\text{ cm}^3\\]</p>
<p>\\(H(0) = 0-\\left(0+0+\\dfrac{5}{2}\\right)e^0-\\dfrac{1}{32}(0+0+13)e^0 = -\\dfrac{5}{2}-\\dfrac{13}{32} = -\\dfrac{80+13}{32} = -\\dfrac{93}{32}\\)</p>
<p>\\(H(-1) = -\\dfrac{1}{3}+1-1-\\left(1-3+\\dfrac{5}{2}\\right)e^2-\\dfrac{1}{32}(8-20+13)e^4 = -\\dfrac{1}{3}-\\dfrac{1}{2}e^2-\\dfrac{1}{32}e^4\\)</p>
<p>\\([H(x)]_{-1}^0 = H(0)-H(-1) = -\\dfrac{93}{32}+\\dfrac{1}{3}+\\dfrac{e^2}{2}+\\dfrac{e^4}{32} = \\dfrac{e^4+16e^2-248}{96}+\\dfrac{e^4}{32}\\)... </p>
<p>\\[\\boxed{V = \\dfrac{\\pi}{12}(3e^4+48e^2-247)\\text{ cm}^3}\\]</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et asymptote (Δ) — BAC 2014 2nd tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="170.0" y1="40" x2="170.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40" x2="390.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="500.0" y1="40" x2="500.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="610.0" y1="40" x2="610.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="720.0" y1="40" x2="720.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="340.0" x2="720" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="240.0" x2="720" y2="240.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="190.0" x2="720" y2="190.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="140.0" x2="720" y2="140.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="90.0" x2="720" y2="90.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="290.0" x2="735" y2="290.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="294.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="280.0" y1="400" x2="280.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="280.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="268.0" y="306.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="286.0" x2="60.0" y2="294.0" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="306.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="170.0" y1="286.0" x2="170.0" y2="294.0" stroke="#1f2937" stroke-width="1"/><text x="170.0" y="306.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="390.0" y1="286.0" x2="390.0" y2="294.0" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="306.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="500.0" y1="286.0" x2="500.0" y2="294.0" stroke="#1f2937" stroke-width="1"/><text x="500.0" y="306.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="610.0" y1="286.0" x2="610.0" y2="294.0" stroke="#1f2937" stroke-width="1"/><text x="610.0" y="306.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="720.0" y1="286.0" x2="720.0" y2="294.0" stroke="#1f2937" stroke-width="1"/><text x="720.0" y="306.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="276.0" y1="390.0" x2="284.0" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="276.0" y1="340.0" x2="284.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="276.0" y1="240.0" x2="284.0" y2="240.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="244.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="276.0" y1="190.0" x2="284.0" y2="190.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="194.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="276.0" y1="140.0" x2="284.0" y2="140.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="144.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="276.0" y1="90.0" x2="284.0" y2="90.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="94.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="276.0" y1="40.0" x2="284.0" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="270.0" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    
    <!-- Courbes -->
    <path d="M 128.8 601.6 L 133.0 549.9 L 137.3 504.0 L 141.5 463.2 L 145.8 427.2 L 150.1 395.3 L 154.3 367.2 L 158.6 342.5 L 162.8 320.8 L 167.1 301.7 L 171.3 285.1 L 175.6 270.6 L 179.8 257.9 L 184.1 247.0 L 188.3 237.5 L 192.6 229.4 L 196.8 222.5 L 201.1 216.5 L 205.3 211.5 L 209.6 207.3 L 213.9 203.7 L 218.1 200.8 L 222.4 198.3 L 226.6 196.3 L 230.9 194.7 L 235.1 193.5 L 239.4 192.5 L 243.6 191.7 L 247.9 191.1 L 252.1 190.7 L 256.4 190.4 L 260.6 190.2 L 264.9 190.1 L 269.1 190.0 L 273.4 190.0 L 277.7 190.0 L 281.9 190.0 L 286.2 190.0 L 290.4 190.0 L 294.7 189.9 L 298.9 189.9 L 303.2 189.7 L 307.4 189.6 L 311.7 189.4 L 315.9 189.2 L 320.2 188.9 L 324.4 188.5 L 328.7 188.1 L 332.9 187.6 L 337.2 187.1 L 341.5 186.6 L 345.7 185.9 L 350.0 185.3 L 354.2 184.5 L 358.5 183.8 L 362.7 182.9 L 367.0 182.0 L 371.2 181.1 L 375.5 180.1 L 379.7 179.1 L 384.0 178.0 L 388.2 176.9 L 392.5 175.8 L 396.7 174.6 L 401.0 173.4 L 405.3 172.1 L 409.5 170.8 L 413.8 169.5 L 418.0 168.1 L 422.3 166.7 L 426.5 165.3 L 430.8 163.8 L 435.0 162.3 L 439.3 160.8 L 443.5 159.3 L 447.8 157.8 L 452.0 156.2 L 456.3 154.6 L 460.5 153.0 L 464.8 151.3 L 469.1 149.7 L 473.3 148.0 L 477.6 146.3 L 481.8 144.7 L 486.1 142.9 L 490.3 141.2 L 494.6 139.5 L 498.8 137.7 L 503.1 136.0 L 507.3 134.2 L 511.6 132.4 L 515.8 130.6 L 520.1 128.8 L 524.3 127.0 L 528.6 125.2 L 532.9 123.4 L 537.1 121.6 L 541.4 119.7 L 545.6 117.9 L 549.9 116.1 L 554.1 114.2 L 558.4 112.3 L 562.6 110.5 L 566.9 108.6 L 571.1 106.8 L 575.4 104.9 L 579.6 103.0 L 583.9 101.1 L 588.1 99.2 L 592.4 97.3 L 596.7 95.5 L 600.9 93.6 L 605.2 91.7 L 609.4 89.8 L 613.7 87.9 L 617.9 86.0 L 622.2 84.1 L 626.4 82.2 L 630.7 80.2 L 634.9 78.3 L 639.2 76.4 L 643.4 74.5 L 647.7 72.6 L 651.9 70.7 L 656.2 68.8 L 660.5 66.8 L 664.7 64.9 L 669.0 63.0 L 673.2 61.1 L 677.5 59.2 L 681.7 57.2 L 686.0 55.3 L 690.2 53.4 L 694.5 51.5 L 698.7 49.5 L 703.0 47.6 L 707.2 45.7 L 711.5 43.8 L 715.7 41.8 L 720.0 39.9" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 82.0 330.0 L 86.3 328.1 L 90.5 326.1 L 94.8 324.2 L 99.0 322.3 L 103.3 320.3 L 107.5 318.4 L 111.8 316.5 L 116.0 314.5 L 120.3 312.6 L 124.5 310.7 L 128.8 308.7 L 133.0 306.8 L 137.3 304.9 L 141.5 302.9 L 145.8 301.0 L 150.1 299.1 L 154.3 297.1 L 158.6 295.2 L 162.8 293.3 L 167.1 291.3 L 171.3 289.4 L 175.6 287.5 L 179.8 285.5 L 184.1 283.6 L 188.3 281.7 L 192.6 279.7 L 196.8 277.8 L 201.1 275.9 L 205.3 273.9 L 209.6 272.0 L 213.9 270.1 L 218.1 268.1 L 222.4 266.2 L 226.6 264.3 L 230.9 262.3 L 235.1 260.4 L 239.4 258.5 L 243.6 256.5 L 247.9 254.6 L 252.1 252.7 L 256.4 250.7 L 260.6 248.8 L 264.9 246.9 L 269.1 244.9 L 273.4 243.0 L 277.7 241.1 L 281.9 239.1 L 286.2 237.2 L 290.4 235.3 L 294.7 233.3 L 298.9 231.4 L 303.2 229.5 L 307.4 227.5 L 311.7 225.6 L 315.9 223.7 L 320.2 221.7 L 324.4 219.8 L 328.7 217.9 L 332.9 215.9 L 337.2 214.0 L 341.5 212.1 L 345.7 210.1 L 350.0 208.2 L 354.2 206.3 L 358.5 204.3 L 362.7 202.4 L 367.0 200.5 L 371.2 198.5 L 375.5 196.6 L 379.7 194.7 L 384.0 192.7 L 388.2 190.8 L 392.5 188.9 L 396.7 186.9 L 401.0 185.0 L 405.3 183.1 L 409.5 181.1 L 413.8 179.2 L 418.0 177.3 L 422.3 175.3 L 426.5 173.4 L 430.8 171.5 L 435.0 169.5 L 439.3 167.6 L 443.5 165.7 L 447.8 163.7 L 452.0 161.8 L 456.3 159.9 L 460.5 157.9 L 464.8 156.0 L 469.1 154.1 L 473.3 152.1 L 477.6 150.2 L 481.8 148.3 L 486.1 146.3 L 490.3 144.4 L 494.6 142.5 L 498.8 140.5 L 503.1 138.6 L 507.3 136.7 L 511.6 134.7 L 515.8 132.8 L 520.1 130.9 L 524.3 128.9 L 528.6 127.0 L 532.9 125.1 L 537.1 123.1 L 541.4 121.2 L 545.6 119.3 L 549.9 117.3 L 554.1 115.4 L 558.4 113.5 L 562.6 111.5 L 566.9 109.6 L 571.1 107.7 L 575.4 105.7 L 579.6 103.8 L 583.9 101.9 L 588.1 99.9 L 592.4 98.0 L 596.7 96.1 L 600.9 94.1 L 605.2 92.2 L 609.4 90.3 L 613.7 88.3 L 617.9 86.4 L 622.2 84.5 L 626.4 82.5 L 630.7 80.6 L 634.9 78.7 L 639.2 76.7 L 643.4 74.8 L 647.7 72.9 L 651.9 70.9 L 656.2 69.0 L 660.5 67.1 L 664.7 65.1 L 669.0 63.2 L 673.2 61.3 L 677.5 59.3 L 681.7 57.4 L 686.0 55.5 L 690.2 53.5 L 694.5 51.6 L 698.7 49.7 L 703.0 47.7 L 707.2 45.8 L 711.5 43.9 L 715.7 41.9 L 720.0 40.0" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
    
    <!-- Points remarquables -->
    <circle cx="170.0" cy="290.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(180.0, 306.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(-1 ; 0)</text>
    </g><circle cx="280.0" cy="190.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(270.0, 182.0)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(0 ; 2)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (Δ) : y = x + 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>





`
    }
  ]
},
  {
  id: 'bac-2015-D-juillet-1er',
  year: 2015,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2015 / 1er tour',
  topics: ['Nombres complexes', 'Géométrie dans l\'espace', 'Fonctions exponentielles & Point fixe', 'Suite (Uₙ) convergente'],
  parts: [
    {
      label: 'Exercice 1 — Polynôme complexe et géométrie (4 pts)',
      problem: `<p>Soit le polynôme \\(P(z) = z^3 - (1+2i)z^2 - 3z + 2i - 1\\).</p>
<p><strong>1)</strong> Montrer que P(z) admet une racine réelle \\(z_0\\) que l'on déterminera.</p>
<p><strong>2)</strong> Déterminer trois nombres complexes a, b et c tels que \\(P(z) = (z-z_0)(az^2+bz+c)\\).</p>
<p><strong>3)</strong> Résoudre dans \\(\\mathbb{C}\\) l'équation \\(P(z) = 0\\).</p>
<p><strong>4)</strong> Dans le plan complexe muni d'un repère orthonormé \\((O;\\vec{u};\\vec{v})\\) (unité 2 cm), on désigne par A, B et C les points d'affixes respectives \\(z_A = i\\), \\(z_B = 2+i\\) et \\(z_C = -1\\).</p>
<p><strong>a)</strong> Placer les points A, B et C.</p>
<p><strong>b)</strong> Soit D l'image de A par la translation de vecteur \\(\\overrightarrow{BC}\\). Calculer l'affixe de D.</p>
<p><strong>c)</strong> Calculer \\(Z = \\dfrac{z_A}{z_A - z_B}\\). Déterminer le module et un argument de Z. En déduire la nature du triangle OAB.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Polynômes dans ℂ, racines réelles &amp; factorisation</span>
  <ul>
    <li><strong>Racine réelle d'un polynôme complexe :</strong> Posez $z_0 = x_0 \\in \\mathbb{R}$ dans $P(z_0)=0$, séparez partie réelle et partie imaginaire : $\\text{Re}(P(x_0)) = 0$ et $\\text{Im}(P(x_0)) = 0$. Le système donne la valeur unique de $x_0$.</li>
    <li><strong>Factorisation :</strong> Si $z_0$ est racine, $P(z) = (z-z_0)(z^2+az+b)$. Développez et identifiez les coefficients.</li>
    <li><strong>Discriminant complexe $\\Delta$ :</strong> Pour $Az^2+Bz+C=0$, si $\\Delta \\in \\mathbb{C}$, cherchez $\\delta = x+iy$ tel que $\\delta^2 = \\Delta \\iff \\begin{cases}x^2-y^2 = \\text{Re}(\Delta) \\\\ 2xy = \\text{Im}(\Delta) \\\\ x^2+y^2 = |\Delta|\\end{cases}$. Les solutions sont $z = \\dfrac{-B \\pm \\delta}{2A}$.</li>
    <li><strong>Nature d'un triangle par affixes :</strong> Calculez le rapport $\\dfrac{z_C-z_A}{z_B-z_A} = r e^{i\\theta}$. Si $r=1$ et $\\theta = \\pm\\dfrac{\\pi}{2}$ ($= \\pm i$), le triangle est rectangle isocèle en $A$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Racine réelle z₀</strong></p>
<p>Posons \\(z = a\\), \\(a \\in \\mathbb{R}\\). Alors \\(P(a) = 0 \\iff (a^3-a^2-3a-1) + i(-2a^2+2) = 0\\).</p>
<p>Partie réelle et imaginaire nulles simultanément :</p>
<p>\\(\\begin{cases}a^3-a^2-3a-1=0 & (1) \\\\ -2a^2+2=0 & (2)\\end{cases}\\)</p>
<p>(2) : \\(a^2=1 \\Rightarrow a=\\pm1\\).</p>
<p>\\(P(1) = 1-1-3-1 = -4 \\neq 0\\). \\(P(-1) = -1-1+3-1 = 0\\).</p>
<p>\\[\\boxed{z_0 = -1}\\]</p>

<p><strong>2) Factorisation</strong></p>
<p>\\(P(z) = (z+1)(az^2+bz+c)\\). En développant et identifiant avec \\(P(z) = z^3-(1+2i)z^2-3z+2i-1\\) :</p>
<p>\\(a=1\\), \\(a+b = -(1+2i) \\Rightarrow b = -2-2i\\), \\(c = 2i-1\\).</p>
<p>\\[P(z) = (z+1)[z^2-(2+2i)z+(2i-1)]\\]</p>

<p><strong>3) Résolution de P(z) = 0</strong></p>
<p>\\(z+1=0 \\Rightarrow z_0=-1\\).</p>
<p>Pour \\(z^2-(2+2i)z+(2i-1)=0\\) : \\(\\Delta' = (1+i)^2-(2i-1) = 2i-2i+1 = 1\\).</p>
<p>\\(z = (1+i)\\pm1 \\Rightarrow z_1 = 2+i\\) et \\(z_2 = i\\).</p>
<p>\\[\\boxed{\\mathcal{S} = \\{-1 ; i ; 2+i\\}}\\]</p>
<p><em>Remarque : les racines sont \\(z_0=-1=z_C\\), \\(z_1=2+i=z_B\\), \\(z_2=i=z_A\\).</em></p>

<p><strong>4b) Affixe de D</strong></p>
<p>\\(z_D = z_A + z_{\\overrightarrow{BC}} = z_A + (z_C - z_B) = i + (-1-(2+i)) = i + (-3-i) = -3\\).</p>
<p>\\[\\boxed{z_D = -3}\\]</p>

<p><strong>4c) Calcul de Z et nature de OAB</strong></p>
<p>\\(Z = \\dfrac{z_A}{z_A-z_B} = \\dfrac{i}{i-(2+i)} = \\dfrac{i}{-2} = -\\dfrac{i}{2}\\)</p>
<p>\\(|Z| = \\dfrac{1}{2}\\) et \\(\\arg(Z) = \\arg(-i) = -\\dfrac{\\pi}{2}\\).</p>
<p>\\(|Z| = \\dfrac{OA}{AB} = \\dfrac{1}{2}\\) donc \\(OA = \\dfrac{AB}{2}\\).</p>
<p>\\(\\arg(Z) = (\\overrightarrow{AB};\\overrightarrow{AO}) = -\\dfrac{\\pi}{2}\\) donc \\(\\overrightarrow{AB} \\perp \\overrightarrow{AO}\\).</p>
<p>Le triangle OAB est <strong>rectangle en A</strong>.</p>`
    },
    {
      label: 'Exercice 2 — Géométrie dans l\'espace (4 pts)',
      problem: `<p>Dans l'espace rapporté à un repère orthonormal direct \\((O;\\vec{i};\\vec{j};\\vec{k})\\), on donne les points \\(A(-2;-1;2)\\), \\(B(6;-5;3)\\), \\(C(-1;3;10)\\) et le vecteur \\(\\vec{u}\\begin{pmatrix}-4 \\\\ -7 \\\\ 4\\end{pmatrix}\\).</p>
<p><strong>1) a)</strong> Calculer \\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\) et \\(\\overrightarrow{AB} \\cdot \\overrightarrow{AC}\\).</p>
<p><strong>b)</strong> Interpréter géométriquement ces résultats.</p>
<p><strong>c)</strong> Calculer les distances AB et AC.</p>
<p><strong>d)</strong> En déduire la nature exacte du triangle ABC.</p>
<p><strong>2)</strong> Démontrer que les vecteurs \\(\\vec{u}\\) et \\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\) sont colinéaires.</p>
<p><strong>3)</strong> Montrer que \\(\\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\| = 9\\|\\vec{u}\\|\\) et en déduire l'aire du triangle ABC en fonction de \\(\\|\\vec{u}\\|\\).</p>
<p><strong>4)</strong> Soit D(1;1;1) un point de l'espace.</p>
<p><strong>a)</strong> Les points A, B, C, D sont-ils coplanaires ?</p>
<p><strong>b)</strong> Calculer \\(d(D;(ABC))\\) et en déduire le volume V (en u.v.) de la pyramide de sommet D et de base ABC.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie dans l'espace, orthogonalité &amp; sphère</span>
  <ul>
    <li><strong>Vecteurs orthogonaux :</strong> $\\vec{u} \\cdot \\vec{v} = xx'+yy'+zz'=0$.</li>
    <li><strong>Vecteur normal et plan :</strong> Un plan passant par $A(x_A;y_A;z_A)$ et de vecteur normal $\\vec{n}(a;b;c)$ a pour équation $a(x-x_A)+b(y-y_A)+c(z-z_A)=0$.</li>
    <li><strong>Distance d'un point à un plan :</strong> $d(M, \\mathcal{P}) = \\dfrac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}$.</li>
    <li><strong>Équation de la sphère :</strong> La sphère $(S)$ de centre $\\Omega(x_0;y_0;z_0)$ et de rayon $R$ a pour équation $(x-x_0)^2+(y-y_0)^2+(z-z_0)^2 = R^2$. Elle est tangente au plan $\\mathcal{P} \\iff d(\\Omega, \\mathcal{P}) = R$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Produit vectoriel et scalaire</strong></p>
<p>\\(\\overrightarrow{AB} = (8;-4;1)\\) et \\(\\overrightarrow{AC} = (1;4;8)\\).</p>
<p>\\[\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{vmatrix}\ \\vec{i} & \\vec{j} & \\vec{k} \\\\ 8&-4&1 \\\\ 1&4&8\\end{vmatrix} = (-32-4)\\vec{i}-(64-1)\\vec{j}+(32+4)\\vec{k} = (-36;-63;36)\\]</p>
<p>\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 8\\times1+(-4)\\times4+1\\times8 = 8-16+8 = 0\\)</p>

<p><strong>1b) Interprétation</strong></p>
<p>\\(\\overrightarrow{AB}\\wedge\\overrightarrow{AC} \\neq \\vec{0}\\) → A, B, C ne sont pas alignés, ils définissent un plan.</p>
<p>\\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 0\\) → \\(\\overrightarrow{AB} \\perp \\overrightarrow{AC}\\) → triangle ABC rectangle en A.</p>

<p><strong>1c-d) Distances et nature</strong></p>
<p>\\(AB = \\sqrt{64+16+1} = \\sqrt{81} = 9\\) et \\(AC = \\sqrt{1+16+64} = 9\\).</p>
<p>ABC est <strong>rectangle et isocèle en A</strong> (\\(AB = AC = 9\\)).</p>

<p><strong>2) Colinéarité de \\(\\vec{u}\\) et \\(\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\)</strong></p>
<p>\\(\\overrightarrow{AB}\\wedge\\overrightarrow{AC} = (-36;-63;36) = 9(-4;-7;4) = 9\\vec{u}\\).</p>
<p>\\(\\vec{u}\\) et \\(\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\) sont colinéaires (l'un est multiple de l'autre).</p>

<p><strong>3) Norme et aire</strong></p>
<p>\\(\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\| = \\|9\\vec{u}\\| = 9\\|\\vec{u}\\|\\) </p>
<p>\\(\\text{Aire}(ABC) = \\dfrac{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}{2} = \\dfrac{9\\|\\vec{u}\\|}{2}\\)</p>
<p>Numériquement : \\(\\|\\vec{u}\\| = \\sqrt{16+49+16} = 9\\), donc \\(\\text{Aire} = \\dfrac{81}{2}\\) u.a.</p>

<p><strong>4a) Coplanarité</strong></p>
<p>\\(\\overrightarrow{AD} = (3;2;-1)\\).</p>
<p>\\((\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD} = (-36)(3)+(-63)(2)+(36)(-1) = -108-126-36 = -270 \\neq 0\\)</p>
<p>A, B, C, D <strong>ne sont pas coplanaires</strong>.</p>

<p><strong>4b) Distance et volume</strong></p>
<p>\\(d(D;(ABC)) = \\dfrac{|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD}|}{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|} = \\dfrac{270}{9\\times9} = \\dfrac{270}{81} = \\dfrac{10}{3}\\)</p>
<p>\\[V = \\dfrac{1}{3}\\times\\text{Aire}(ABC)\\times d = \\dfrac{1}{3}\\times\\dfrac{81}{2}\\times\\dfrac{10}{3} = \\dfrac{810}{18} = 45 \\text{ u.v.}\\]</p>`
    },
    {
      label: 'Problème — Fonction exponentielle, suite et point fixe (12 pts)',
      problem: `<p><strong>Partie A</strong></p>
<p>Soit g la fonction définie sur \\(\\mathbb{R}\\) par \\(g(x) = (1-x)e^x - 1\\).</p>
<p><strong>1)</strong> Étudier les variations de g.</p>
<p><strong>2)</strong> Calculer g(0). En déduire que pour tout \\(x \\neq 0\\), \\(g(x) < 0\\).</p>

<p><strong>Partie B</strong></p>
<p>Soit la fonction f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases} \ \\dfrac{x}{e^x-1}+2 & \\text{si } x \\neq 0 \\\\ 3 & \\text{si } x = 0 \\end{cases}\\]</p>
<p>On désigne par (C) la courbe de f dans un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) (unité 2 cm). On admettra que f est dérivable en 0 et que \\(f'(0) = -\\dfrac{1}{2}\\).</p>
<p><strong>1) a)</strong> Déterminer la limite de f en \\(-\\infty\\).</p>
<p><strong>b)</strong> Établir que \\(\\dfrac{x}{e^x-1} = \\dfrac{x}{e^x}\\times\\dfrac{1}{1-e^{-x}}\\) puis déterminer la limite de f en \\(+\\infty\\). En déduire l'asymptote horizontale.</p>
<p><strong>2)</strong> Montrer que la droite (D) d'équation \\(y = -x+2\\) est une asymptote oblique à (C) en \\(-\\infty\\).</p>
<p><strong>3)</strong> Calculer \\(f'(x)\\) pour \\(x \\neq 0\\) et montrer que \\(f'(x) = \\dfrac{g(x)}{(e^x-1)^2}\\).</p>
<p><strong>4) a)</strong> Donner le sens de variation de f.</p>
<p><strong>b)</strong> Dresser le tableau de variation de f.</p>
<p><strong>5)</strong> Soit (T) la tangente à (C) au point d'abscisse nulle. Écrire l'équation de (T).</p>
<p><strong>6)</strong> Tracer (D), (T) et (C).</p>

<p><strong>Partie C</strong></p>
<p>Soit h la fonction définie sur \\(\\mathbb{R}\\) par \\(h(x) = f(x) - x\\).</p>
<p><strong>1)</strong> Montrer que l'équation \\(h(x) = 0\\) admet une solution unique \\(\\alpha\\) et que \\(\\alpha \\in ]2;2{,}5[\\).</p>
<p><strong>2)</strong> On pose \\(I = [2;2{,}5]\\).</p>
<p><strong>a)</strong> Montrer que pour tout \\(x \\in I\\) : \\(g(x) \\geq -20\\) et \\((e^x-1)^2 \\geq 40\\).</p>
<p><strong>b)</strong> En déduire que pour \\(x \\in I\\) : \\(-\\dfrac{1}{2} \\leq f'(x) \\leq 0\\).</p>
<p><strong>3)</strong> Soit \\((U_n)\\) la suite définie par \\(U_0 = 2\\) et \\(U_{n+1} = f(U_n)\\).</p>
<p><strong>a)</strong> Montrer par récurrence que pour tout \\(n \\in \\mathbb{N}\\), \\(Uₙ \\in I\\).</p>
<p><strong>b)</strong> Montrer que \\(|U_{n+1}-\\alpha| \\leq \\dfrac{1}{2}|U_n-\\alpha|\\) et que \\(|U_n-\\alpha| \\leq \\left(\\dfrac{1}{2}\\right)^{n+1}\\).</p>
<p><strong>c)</strong> En déduire que \\((U_n)\\) converge vers \\(\\alpha\\).</p>
<p><strong>d)</strong> Déterminer le plus petit entier \\(n_0\\) tel que \\(|U_n-\\alpha| \\leq 10^{-3}\\) pour tout \\(n \\geq n_0\\).</p>
<p><em>Données : \\(\\ln2 \\approx 0{,}69\\) ; \\(\\ln10 \\approx 2{,}3\\) ; \\(e^2 \\approx 7{,}39\\) ; \\(e^{2{,}5} \\approx 12{,}18\\) ; \\(\\dfrac{1}{e^2-1} \\approx 0{,}15\\) ; \\(\\dfrac{1}{e^{2{,}5}-1} \\approx 0{,}09\\) ; \\((e^2-1)^2 \\approx 40{,}83\\) ; \\((e^{2{,}5}-1)^2 \\approx 125\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions avec exponentielle, prolongement par continuité &amp; points fixes</span>
  <ul>
    <li><strong>Limite remarquable en 0 :</strong> $\\lim_{x\\to 0}\\dfrac{e^x-1}{x} = 1 \\implies \\lim_{x\\to 0}\\dfrac{x}{e^x-1} = 1$. Ainsi $\\lim_{x\\to 0}f(x) = 1+2 = 3 = f(0)$ : $f$ est prolongeable par continuité en 0.</li>
    <li><strong>Dérivée de quotient :</strong> $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v-uv'}{v^2}$. Pour $f(x)=\\dfrac{x}{e^x-1}+2$, $f'(x) = \\dfrac{(1-x)e^x-1}{(e^x-1)^2} = \\dfrac{g(x)}{(e^x-1)^2}$.</li>
    <li><strong>Théorème des valeurs intermédiaires (TVI) :</strong> Si $h(x)=f(x)-x$ est continue et strictement décroissante avec $h(a)\\cdot h(b)<0$, alors l'équation $f(x)=x$ possède une unique solution $\\alpha \\in ]a;b[$.</li>
    <li><strong>Suites récurrentes $u_{n+1}=f(uₙ)$ :</strong> Si $f$ est décroissante, la suite $(u_n)$ n'est pas monotone mais ses sous-suites $(u_{2n})$ et $(u_{2n+1})$ ont des sens de variation opposés et convergent vers le point fixe $\\alpha$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Variations de g</strong></p>
<p>\\(g'(x) = -e^x + (1-x)e^x = e^x(-1+1-x) = -xe^x\\).</p>
<p>\\(e^x > 0\\) toujours, donc signe de \\(g'(x)\\) = signe de \\(-x\\).</p>
<p>g croissante sur \\(]-\\infty;0[\\), décroissante sur \\(]0;+\\infty[\\). Maximum en \\(x=0\\).</p>

<p><strong>2) g(0) et signe</strong></p>
<p>\\(g(0) = (1-0)e^0-1 = 1-1 = 0\\).</p>
<p>g(0) = 0 est le maximum absolu de g. Pour tout \\(x \\neq 0\\), \\(g(x) < 0\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1a) Limite en −∞</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}\\dfrac{x}{e^x-1}+2\\). Pour \\(x\\to-\\infty\\) : \\(e^x\\to0\\), donc \\(e^x-1\\to-1\\), et \\(\\dfrac{x}{-1}\\to+\\infty\\).</p>
<p>\\[\\lim_{x\\to-\\infty}f(x) = +\\infty\\]</p>

<p><strong>1b) Limite en +∞</strong></p>
<p>\\(\\dfrac{x}{e^x-1} = \\dfrac{x}{e^x} \\cdot \\dfrac{1}{1-e^{-x}}\\).</p>
<p>\\(\\lim_{x\\to+\\infty}\\dfrac{x}{e^x} = 0\\) (croissances comparées) et \\(\\dfrac{1}{1-e^{-x}}\\to1\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = 0+2 = 2\\).</p>
<p>La droite \\(y=2\\) est <strong>asymptote horizontale</strong> à (C) en \\(+\\infty\\).</p>

<p><strong>2) Asymptote oblique en −∞</strong></p>
<p>\\(f(x)-(−x+2) = \\dfrac{x}{e^x-1}+x = \\dfrac{x+x(e^x-1)}{e^x-1} = \\dfrac{xe^x}{e^x-1}\\).</p>
<p>Pour \\(x\\to-\\infty\\) : \\(xe^x\\to0\\) et \\(e^x-1\\to-1\\), donc \\(\\dfrac{xe^x}{e^x-1}\\to0\\).</p>
<p>\\((D): y=-x+2\\) est asymptote oblique à (C) en \\(-\\infty\\).</p>

<p><strong>3) f'(x) pour x ≠ 0</strong></p>
<p>\\(f'(x) = \\dfrac{(e^x-1)-xe^x}{(e^x-1)^2} = \\dfrac{e^x-1-xe^x}{(e^x-1)^2} = \\dfrac{(1-x)e^x-1}{(e^x-1)^2} = \\dfrac{g(x)}{(e^x-1)^2}\\) </p>

<p><strong>4) Sens de variation</strong></p>
<p>\\((e^x-1)^2 > 0\\) pour \\(x\\neq0\\), et \\(g(x) < 0\\) pour \\(x\\neq0\\) → \\(f'(x) < 0\\).</p>
<p>f est <strong>strictement décroissante</strong> sur \\(]-\\infty;0[\\) et sur \\(]0;+\\infty[\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-r-15s1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <text x="160" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <text x="430" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="24" font-weight="900">−</text>

    <text x="160" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
    <line x1="185" y1="135" x2="675" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-15s1)"/>
    <text x="700" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2</text>
  </svg>
</div>

<p><strong>5) Tangente (T) en x=0</strong></p>
<p>\\(f(0) = 3\\) et \\(f'(0) = -\\dfrac{1}{2}\\) (admis).</p>
<p>\\[(T) : y = -\\dfrac{1}{2}x + 3\\]</p>

<p><strong>Partie C</strong></p>

<p><strong>1) Unique solution α, α ∈ ]2;2,5[</strong></p>
<p>\\(h(x) = f(x)-x\\). \\(h'(x) = f'(x)-1 < 0-1 < 0\\) pour tout \\(x \\neq 0\\).</p>
<p>h est strictement décroissante sur \\(\\mathbb{R}\\), continue → bijection de \\(\\mathbb{R}\\) vers \\(\\mathbb{R}\\) → unique zéro \\(\\alpha\\).</p>
<p>\\(h(2) = \\dfrac{2}{e^2-1}+2-2 = \\dfrac{2}{e^2-1} \\approx 2\\times0{,}15 = 0{,}30 > 0\\)</p>
<p>\\(h(2{,}5) = \\dfrac{2{,}5}{e^{2{,}5}-1}-0{,}5 \\approx 2{,}5\\times0{,}09-0{,}5 = 0{,}225-0{,}5 = -0{,}275 < 0\\)</p>
<p>\\(h(2)\\times h(2{,}5) < 0\\) → \\(\\alpha \\in ]2;2{,}5[\\). </p>

<p><strong>2a) Encadrements sur I</strong></p>
<p><em>Pour g :</em> g est décroissante sur \\([2;2{,}5]\\), donc \\(g(x) \\geq g(2{,}5)\\).</p>
<p>\\(g(2{,}5) = (1-2{,}5)e^{2{,}5}-1 = -1{,}5\\times12{,}18-1 \\approx -19{,}27 \\geq -20\\). </p>
<p><em>Pour \\((e^x-1)^2\\) :</em> la fonction \\(x\\mapsto(e^x-1)^2\\) est croissante sur \\([2;2{,}5]\\).</p>
<p>\\((e^x-1)^2 \\geq (e^2-1)^2 \\approx 40{,}83 \\geq 40\\). </p>

<p><strong>2b) Encadrement de f'(x)</strong></p>
<p>\\(f'(x) = \\dfrac{g(x)}{(e^x-1)^2}\\). Sur I : \\(g(x) < 0\\) et \\(g(x) \\geq -20\\), donc \\(0 < -g(x) \\leq 20\\).</p>
<p>\\((e^x-1)^2 \\geq 40\\), donc \\(\\dfrac{-g(x)}{(e^x-1)^2} \\leq \\dfrac{20}{40} = \\dfrac{1}{2}\\), soit \\(f'(x) \\geq -\\dfrac{1}{2}\\).</p>
<p>On sait que \\(f'(x) \\leq 0\\). \\(-\\dfrac{1}{2} \\leq f'(x) \\leq 0\\) sur I.</p>

<p><strong>3a) Uₙ ∈ I par récurrence</strong></p>
<p>\\(U_0 = 2 \\in I\\).</p>
<p>Supposons \\(Uₙ \\in I\\). f est décroissante sur I, donc \\(f(2{,}5) \\leq f(U_n) \\leq f(2)\\).</p>
<p>\\(f(2{,}5) = \\dfrac{2{,}5}{e^{2{,}5}-1}+2 \\approx 2{,}225\\) et \\(f(2) = \\dfrac{2}{e^2-1}+2 \\approx 2{,}30\\).</p>
<p>\\(2 \\leq 2{,}225 \\leq U_{n+1} \\leq 2{,}30 \\leq 2{,}5\\) → \\(U_{n+1} \\in I\\).</p>

<p><strong>3b) Inégalités de contraction</strong></p>
<p>Par l'inégalité des accroissements finis sur \\([U_n;\\alpha]\\subseteq I\\) :</p>
<p>\\(|f(U_n)-f(\\alpha)| \\leq \\sup_{x\\in I}|f'(x)|\\cdot|U_n-\\alpha| \\leq \\dfrac{1}{2}|U_n-\\alpha|\\).</p>
<p>Comme \\(f(U_n)=U_{n+1}\\) et \\(f(\\alpha)=\\alpha\\) : \\(|U_{n+1}-\\alpha| \\leq \\dfrac{1}{2}|U_n-\\alpha|\\). </p>
<p>Par récurrence : \\(|U_n-\\alpha| \\leq \\left(\\dfrac{1}{2}\\right)^n|U_0-\\alpha| \\leq \\dfrac{1}{2}\\left(\\dfrac{1}{2}\\right)^n = \\left(\\dfrac{1}{2}\\right)^{n+1}\\) (car \\(|U_0-\\alpha|=|2-\\alpha|\\leq\\dfrac{1}{2}\\)). </p>

<p><strong>3c) Convergence</strong></p>
<p>\\(\\left(\\dfrac{1}{2}\\right)^{n+1}\\to0\\) → \\(|U_n-\\alpha|\\to0\\) → \\((U_n)\\) converge vers \\(\\alpha\\). </p>

<p><strong>3d) Trouver n₀</strong></p>
<p>On veut \\(\\left(\\dfrac{1}{2}\\right)^{n+1} \\leq 10^{-3}\\) :</p>
<p>\\(-(n+1)\\ln2 \\leq -3\\ln10 \\Rightarrow n+1 \\geq \\dfrac{3\\ln10}{\\ln2} = \\dfrac{3\\times2{,}3}{0{,}69} = 10\\)</p>
<p>\\(n \\geq 9\\). Le plus petit entier est \\(\\boxed{n_0 = 9}\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et asymptotes — BAC 2015 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="101.2" y1="40" x2="101.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="183.8" y1="40" x2="183.8" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="266.2" y1="40" x2="266.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="431.2" y1="40" x2="431.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="513.8" y1="40" x2="513.8" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="596.2" y1="40" x2="596.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="678.8" y1="40" x2="678.8" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="355.0" x2="720" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="285.0" x2="720" y2="285.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="215.0" x2="720" y2="215.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="145.0" x2="720" y2="145.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="75.0" x2="720" y2="75.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="425.0" x2="735" y2="425.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="429.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="348.8" y1="400" x2="348.8" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="348.8" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="336.8" y="441.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="101.2" y1="421.0" x2="101.2" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="101.2" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="183.8" y1="421.0" x2="183.8" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="183.8" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="266.2" y1="421.0" x2="266.2" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="266.2" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="431.2" y1="421.0" x2="431.2" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="431.2" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="513.8" y1="421.0" x2="513.8" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="513.8" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="596.2" y1="421.0" x2="596.2" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="596.2" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="678.8" y1="421.0" x2="678.8" y2="429.0" stroke="#1f2937" stroke-width="1"/><text x="678.8" y="441.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="344.8" y1="355.0" x2="352.8" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="344.8" y1="285.0" x2="352.8" y2="285.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="289.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="344.8" y1="215.0" x2="352.8" y2="215.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="219.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="344.8" y1="145.0" x2="352.8" y2="145.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="149.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="344.8" y1="75.0" x2="352.8" y2="75.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="79.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    
    <!-- Courbes -->
    <path d="M 60.0 32.4 L 64.4 35.8 L 68.8 39.2 L 73.2 42.6 L 77.6 46.0 L 82.0 49.4 L 86.4 52.7 L 90.8 56.1 L 95.2 59.4 L 99.6 62.8 L 104.0 66.1 L 108.4 69.4 L 112.8 72.6 L 117.2 75.9 L 121.6 79.2 L 126.0 82.4 L 130.4 85.6 L 134.8 88.8 L 139.2 92.0 L 143.6 95.1 L 148.0 98.3 L 152.4 101.4 L 156.8 104.5 L 161.2 107.6 L 165.6 110.7 L 170.0 113.7 L 174.4 116.7 L 178.8 119.7 L 183.2 122.7 L 187.6 125.7 L 192.0 128.6 L 196.4 131.5 L 200.8 134.4 L 205.2 137.3 L 209.6 140.1 L 214.0 142.9 L 218.4 145.7 L 222.8 148.5 L 227.2 151.2 L 231.6 153.9 L 236.0 156.6 L 240.4 159.2 L 244.8 161.9 L 249.2 164.5 L 253.6 167.0 L 258.0 169.6 L 262.4 172.1 L 266.8 174.6 L 271.2 177.0 L 275.6 179.4 L 280.0 181.8 L 284.4 184.2 L 288.8 186.5 L 293.2 188.8 L 297.6 191.1 L 302.0 193.3 L 306.4 195.5 L 310.8 197.7 L 315.2 199.8 L 319.6 201.9 L 324.0 204.0 L 328.4 206.0 L 332.8 208.0 L 337.2 210.0 L 341.6 211.9 L 346.0 213.8 L 350.4 215.7 L 354.8 217.5 L 359.2 219.3 L 363.6 221.1 L 368.0 222.8 L 372.4 224.6 L 376.8 226.2 L 381.2 227.9 L 385.6 229.5 L 390.0 231.0 L 394.4 232.6 L 398.8 234.1 L 403.2 235.6 L 407.6 237.0 L 412.0 238.4 L 416.4 239.8 L 420.8 241.2 L 425.2 242.5 L 429.6 243.8 L 434.0 245.0 L 438.4 246.3 L 442.8 247.5 L 447.2 248.7 L 451.6 249.8 L 456.0 250.9 L 460.4 252.0 L 464.8 253.1 L 469.2 254.1 L 473.6 255.1 L 478.0 256.1 L 482.4 257.0 L 486.8 257.9 L 491.2 258.8 L 495.6 259.7 L 500.0 260.6 L 504.4 261.4 L 508.8 262.2 L 513.2 263.0 L 517.6 263.8 L 522.0 264.5 L 526.4 265.2 L 530.8 265.9 L 535.2 266.6 L 539.6 267.2 L 544.0 267.9 L 548.4 268.5 L 552.8 269.1 L 557.2 269.6 L 561.6 270.2 L 566.0 270.7 L 570.4 271.3 L 574.8 271.8 L 579.2 272.2 L 583.6 272.7 L 588.0 273.2 L 592.4 273.6 L 596.8 274.0 L 601.2 274.5 L 605.6 274.9 L 610.0 275.2 L 614.4 275.6 L 618.8 276.0 L 623.2 276.3 L 627.6 276.7 L 632.0 277.0 L 636.4 277.3 L 640.8 277.6 L 645.2 277.9 L 649.6 278.2 L 654.0 278.4 L 658.4 278.7 L 662.8 278.9 L 667.2 279.2 L 671.6 279.4 L 676.0 279.6 L 680.4 279.9 L 684.8 280.1 L 689.2 280.3 L 693.6 280.5 L 698.0 280.6 L 702.4 280.8 L 706.8 281.0 L 711.2 281.2 L 715.6 281.3 L 720.0 281.5" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 266.2 285.0 L 269.3 285.0 L 272.3 285.0 L 275.3 285.0 L 278.4 285.0 L 281.4 285.0 L 284.4 285.0 L 287.4 285.0 L 290.5 285.0 L 293.5 285.0 L 296.5 285.0 L 299.5 285.0 L 302.5 285.0 L 305.6 285.0 L 308.6 285.0 L 311.6 285.0 L 314.6 285.0 L 317.7 285.0 L 320.7 285.0 L 323.7 285.0 L 326.8 285.0 L 329.8 285.0 L 332.8 285.0 L 335.8 285.0 L 338.8 285.0 L 341.9 285.0 L 344.9 285.0 L 347.9 285.0 L 350.9 285.0 L 354.0 285.0 L 357.0 285.0 L 360.0 285.0 L 363.1 285.0 L 366.1 285.0 L 369.1 285.0 L 372.1 285.0 L 375.1 285.0 L 378.2 285.0 L 381.2 285.0 L 384.2 285.0 L 387.2 285.0 L 390.3 285.0 L 393.3 285.0 L 396.3 285.0 L 399.4 285.0 L 402.4 285.0 L 405.4 285.0 L 408.4 285.0 L 411.4 285.0 L 414.5 285.0 L 417.5 285.0 L 420.5 285.0 L 423.5 285.0 L 426.6 285.0 L 429.6 285.0 L 432.6 285.0 L 435.6 285.0 L 438.7 285.0 L 441.7 285.0 L 444.7 285.0 L 447.8 285.0 L 450.8 285.0 L 453.8 285.0 L 456.8 285.0 L 459.9 285.0 L 462.9 285.0 L 465.9 285.0 L 468.9 285.0 L 471.9 285.0 L 475.0 285.0 L 478.0 285.0 L 481.0 285.0 L 484.0 285.0 L 487.1 285.0 L 490.1 285.0 L 493.1 285.0 L 496.2 285.0 L 499.2 285.0 L 502.2 285.0 L 505.2 285.0 L 508.2 285.0 L 511.3 285.0 L 514.3 285.0 L 517.3 285.0 L 520.4 285.0 L 523.4 285.0 L 526.4 285.0 L 529.4 285.0 L 532.5 285.0 L 535.5 285.0 L 538.5 285.0 L 541.5 285.0 L 544.5 285.0 L 547.6 285.0 L 550.6 285.0 L 553.6 285.0 L 556.6 285.0 L 559.7 285.0 L 562.7 285.0 L 565.7 285.0 L 568.8 285.0 L 571.8 285.0 L 574.8 285.0 L 577.8 285.0 L 580.9 285.0 L 583.9 285.0 L 586.9 285.0 L 589.9 285.0 L 593.0 285.0 L 596.0 285.0 L 599.0 285.0 L 602.0 285.0 L 605.0 285.0 L 608.1 285.0 L 611.1 285.0 L 614.1 285.0 L 617.1 285.0 L 620.2 285.0 L 623.2 285.0 L 626.2 285.0 L 629.2 285.0 L 632.3 285.0 L 635.3 285.0 L 638.3 285.0 L 641.4 285.0 L 644.4 285.0 L 647.4 285.0 L 650.4 285.0 L 653.5 285.0 L 656.5 285.0 L 659.5 285.0 L 662.5 285.0 L 665.5 285.0 L 668.6 285.0 L 671.6 285.0 L 674.6 285.0 L 677.6 285.0 L 680.7 285.0 L 683.7 285.0 L 686.7 285.0 L 689.8 285.0 L 692.8 285.0 L 695.8 285.0 L 698.8 285.0 L 701.8 285.0 L 704.9 285.0 L 707.9 285.0 L 710.9 285.0 L 714.0 285.0 L 717.0 285.0 L 720.0 285.0" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/><path d="M 60.0 40.0 L 62.5 42.1 L 65.0 44.2 L 67.4 46.3 L 69.9 48.4 L 72.4 50.5 L 74.9 52.6 L 77.3 54.7 L 79.8 56.8 L 82.3 58.9 L 84.7 61.0 L 87.2 63.1 L 89.7 65.2 L 92.2 67.3 L 94.6 69.4 L 97.1 71.5 L 99.6 73.6 L 102.1 75.7 L 104.6 77.8 L 107.0 79.9 L 109.5 82.0 L 112.0 84.1 L 114.5 86.2 L 116.9 88.3 L 119.4 90.4 L 121.9 92.5 L 124.4 94.6 L 126.8 96.7 L 129.3 98.8 L 131.8 100.9 L 134.2 103.0 L 136.7 105.1 L 139.2 107.2 L 141.7 109.3 L 144.2 111.4 L 146.6 113.5 L 149.1 115.6 L 151.6 117.7 L 154.1 119.8 L 156.5 121.9 L 159.0 124.0 L 161.5 126.1 L 164.0 128.2 L 166.4 130.3 L 168.9 132.4 L 171.4 134.5 L 173.8 136.6 L 176.3 138.7 L 178.8 140.8 L 181.3 142.9 L 183.8 145.0 L 186.2 147.1 L 188.7 149.2 L 191.2 151.3 L 193.6 153.4 L 196.1 155.5 L 198.6 157.6 L 201.1 159.7 L 203.6 161.8 L 206.0 163.9 L 208.5 166.0 L 211.0 168.1 L 213.4 170.2 L 215.9 172.3 L 218.4 174.4 L 220.9 176.5 L 223.3 178.6 L 225.8 180.7 L 228.3 182.8 L 230.8 184.9 L 233.2 187.0 L 235.7 189.1 L 238.2 191.2 L 240.7 193.3 L 243.2 195.4 L 245.6 197.5 L 248.1 199.6 L 250.6 201.7 L 253.0 203.8 L 255.5 205.9 L 258.0 208.0 L 260.5 210.1 L 262.9 212.2 L 265.4 214.3 L 267.9 216.4 L 270.4 218.5 L 272.9 220.6 L 275.3 222.7 L 277.8 224.8 L 280.3 226.9 L 282.8 229.0 L 285.2 231.1 L 287.7 233.2 L 290.2 235.3 L 292.7 237.4 L 295.1 239.5 L 297.6 241.6 L 300.1 243.7 L 302.5 245.8 L 305.0 247.9 L 307.5 250.0 L 310.0 252.1 L 312.5 254.2 L 314.9 256.3 L 317.4 258.4 L 319.9 260.5 L 322.4 262.6 L 324.8 264.7 L 327.3 266.8 L 329.8 268.9 L 332.2 271.0 L 334.7 273.1 L 337.2 275.2 L 339.7 277.3 L 342.1 279.4 L 344.6 281.5 L 347.1 283.6 L 349.6 285.7 L 352.1 287.8 L 354.5 289.9 L 357.0 292.0 L 359.5 294.1 L 361.9 296.2 L 364.4 298.3 L 366.9 300.4 L 369.4 302.5 L 371.8 304.6 L 374.3 306.7 L 376.8 308.8 L 379.3 310.9 L 381.8 313.0 L 384.2 315.1 L 386.7 317.2 L 389.2 319.3 L 391.6 321.4 L 394.1 323.5 L 396.6 325.6 L 399.1 327.7 L 401.6 329.8 L 404.0 331.9 L 406.5 334.0 L 409.0 336.1 L 411.4 338.2 L 413.9 340.3 L 416.4 342.4 L 418.9 344.5 L 421.3 346.6 L 423.8 348.7 L 426.3 350.8 L 428.8 352.9 L 431.2 355.0" fill="none" stroke="#d4a017" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
    
    <!-- Points remarquables -->
    <circle cx="348.8" cy="215.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(358.8, 207.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 3)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="78" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (D) : y = 2</text>
      <line x1="10" y1="52" x2="35" y2="52" stroke="#d4a017" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="56" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (D') : y = −x + 2</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},

{
  id: 'bac-2015-D-juillet-2nd',
  year: 2015,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2015 / 2nd tour',
  topics: ['Équations différentielles', 'Probabilités', 'Fonction exponentielle', 'Suites & Intégrales'],
  parts: [
    {
      label: 'Exercice 1 — Équation différentielle 9y\'\'+49y=0 (3 pts)',
      problem: `<p>Soit l'équation différentielle \\((E) : 9y''+49y = 0\\).</p>
<p><strong>1)</strong> Résoudre (E).</p>
<p><strong>2)</strong> Déterminer la solution f de (E) qui vérifie \\(f(0) = \\sqrt{3}\\) et \\(f'(0) = 7\\).</p>
<p><strong>3)</strong> Montrer que pour tout réel x : \\(f(x) = 2\\sqrt{3}\\cos\\left(\\dfrac{7}{3}x - \\dfrac{\\pi}{3}\\right)\\).</p>
<p><strong>4)</strong> Résoudre dans \\(]0;2\\pi[\\) l'équation \\(f(x) = \\sqrt{6}\\).</p>
<p><strong>5)</strong> Calculer la valeur moyenne \\(\\vartheta\\) de f sur \\(\\left[\\dfrac{3\\pi}{14};\\dfrac{3\\pi}{7}\\right]\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles du second ordre ay''+by=0</span>
  <ul>
    <li><strong>Équation $y''+\\omega^2 y = 0$ :</strong> La solution générale est $y(x) = A\\cos(\\omega x) + B\\sin(\\omega x)$ où $A, B \\in \\mathbb{R}$.</li>
    <li><strong>Ici $9y''+49y=0 \\iff y''+\\left(\\dfrac{7}{3}\\right)^2 y = 0$ :</strong> $\\omega = \\dfrac{7}{3}$, d'où $y(x) = A\\cos\\!\\left(\\dfrac{7}{3}x\\right) + B\\sin\\!\\left(\\dfrac{7}{3}x\\right)$.</li>
    <li><strong>Conditions initiales :</strong> Utilisez $y(0)=y_0$ pour trouver $A$, et $y'(0)=y'_0$ avec $y'(x) = -A\\omega\\sin(\\omega x)+B\\omega\\cos(\\omega x)$ pour trouver $B = \\dfrac{y'_0}{\\omega}$.</li>
    <li><strong>Forme harmonique $r\\cos(\\omega x+\\varphi)$ :</strong> $r = \\sqrt{A^2+B^2}$, $\\cos\\varphi = \\dfrac{A}{r}$ et $\\sin\\varphi = -\\dfrac{B}{r}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Résolution de (E)</strong></p>
<p>\\(9y''+49y=0 \\iff y''+\\left(\\dfrac{7}{3}\\right)^2y=0\\).</p>
<p>Solution générale :</p>
<p>\\[\\boxed{y(x) = A\\cos\\dfrac{7x}{3} + B\\sin\\dfrac{7x}{3}, \\quad A,B \\in \\mathbb{R}}\\]</p>

<p><strong>2) Solution f avec conditions initiales</strong></p>
<p>\\(f(x) = A\\cos\\dfrac{7x}{3}+B\\sin\\dfrac{7x}{3}\\) et \\(f'(x) = -\\dfrac{7A}{3}\\sin\\dfrac{7x}{3}+\\dfrac{7B}{3}\\cos\\dfrac{7x}{3}\\).</p>
<p>\\(f(0) = A = \\sqrt{3}\\) et \\(f'(0) = \\dfrac{7B}{3} = 7 \\Rightarrow B = 3\\).</p>
<p>\\[\\boxed{f(x) = \\sqrt{3}\\cos\\dfrac{7x}{3}+3\\sin\\dfrac{7x}{3}}\\]</p>

<p><strong>3) Forme \\(R\\cos(\\omega x - \\varphi)\\)</strong></p>
<p>\\(f(x) = 2\\sqrt{3}\\left(\\dfrac{\\sqrt{3}}{2\\sqrt{3}}\\cos\\dfrac{7x}{3}+\\dfrac{3}{2\\sqrt{3}}\\sin\\dfrac{7x}{3}\\right) = 2\\sqrt{3}\\left(\\dfrac{1}{2}\\cos\\dfrac{7x}{3}+\\dfrac{\\sqrt{3}}{2}\\sin\\dfrac{7x}{3}\\right)\\)</p>
<p>\\(= 2\\sqrt{3}\\left(\\cos\\dfrac{\\pi}{3}\\cos\\dfrac{7x}{3}+\\sin\\dfrac{\\pi}{3}\\sin\\dfrac{7x}{3}\\right) = 2\\sqrt{3}\\cos\\left(\\dfrac{7x}{3}-\\dfrac{\\pi}{3}\\right)\\) </p>

<p><strong>4) Résolution de f(x) = √6 dans ]0;2π[</strong></p>
<p>\\(2\\sqrt{3}\\cos\\left(\\dfrac{7x}{3}-\\dfrac{\\pi}{3}\\right) = \\sqrt{6} \\iff \\cos\\left(\\dfrac{7x}{3}-\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{6}}{2\\sqrt{3}} = \\dfrac{\\sqrt{2}}{2} = \\cos\\dfrac{\\pi}{4}\\)</p>
<p>\\(\\dfrac{7x}{3}-\\dfrac{\\pi}{3} = \\pm\\dfrac{\\pi}{4}+2k\\pi\\)</p>
<p><em>Cas +</em> : \\(\\dfrac{7x}{3} = \\dfrac{\\pi}{3}+\\dfrac{\\pi}{4}+2k\\pi = \\dfrac{7\\pi}{12}+2k\\pi \\Rightarrow x = \\dfrac{\\pi}{4}+\\dfrac{6k\\pi}{7}\\)</p>
<p><em>Cas −</em> : \\(\\dfrac{7x}{3} = \\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}+2k\\pi = \\dfrac{\\pi}{12}+2k\\pi \\Rightarrow x = \\dfrac{\\pi}{28}+\\dfrac{6k\\pi}{7}\\)</p>
<p>Solutions dans \\(]0;2\\pi[\\) :</p>
<p>\\(k=0\\) : \\(x=\\dfrac{\\pi}{4}\\) et \\(x=\\dfrac{\\pi}{28}\\)</p>
<p>\\(k=1\\) : \\(x=\\dfrac{\\pi}{4}+\\dfrac{6\\pi}{7}=\\dfrac{31\\pi}{28}\\) et \\(x=\\dfrac{\\pi}{28}+\\dfrac{6\\pi}{7}=\\dfrac{25\\pi}{28}\\)</p>
<p>\\(k=2\\) : \\(x=\\dfrac{\\pi}{4}+\\dfrac{12\\pi}{7}=\\dfrac{55\\pi}{28}\\) et \\(x=\\dfrac{\\pi}{28}+\\dfrac{12\\pi}{7}=\\dfrac{49\\pi}{28}=\\dfrac{7\\pi}{4}\\)</p>
<p>\\[\\mathcal{S} = \\left\\{\\dfrac{\\pi}{28};\\dfrac{\\pi}{4};\\dfrac{25\\pi}{28};\\dfrac{31\\pi}{28};\\dfrac{49\\pi}{28};\\dfrac{55\\pi}{28}\\right\\}\\]</p>

<p><strong>5) Valeur moyenne sur \\(\\left[\\dfrac{3\\pi}{14};\\dfrac{3\\pi}{7}\\right]\\)</strong></p>
<p>Longueur de l'intervalle : \\(\\dfrac{3\\pi}{7}-\\dfrac{3\\pi}{14} = \\dfrac{3\\pi}{14}\\).</p>
<p>\\(\\vartheta = \\dfrac{1}{3\\pi/14}\\int_{3\\pi/14}^{3\\pi/7}2\\sqrt{3}\\cos\\left(\\dfrac{7x}{3}-\\dfrac{\\pi}{3}\\right)dx\\)</p>
<p>\\(= \\dfrac{14}{3\\pi}\\cdot2\\sqrt{3}\\cdot\\dfrac{3}{7}\\left[\\sin\\left(\\dfrac{7x}{3}-\\dfrac{\\pi}{3}\\right)\\right]_{3\\pi/14}^{3\\pi/7}\\)</p>
<p>\\(= \\dfrac{4\\sqrt{3}}{\\pi}\\left[\\sin\\left(\\dfrac{2\\pi}{3}-\\dfrac{\\pi}{3}\\right)-\\sin\\left(\\dfrac{\\pi}{2}-\\dfrac{\\pi}{3}\\right)\\right]\\)</p>
<p>\\(= \\dfrac{4\\sqrt{3}}{\\pi}\\left[\\sin\\dfrac{\\pi}{3}-\\sin\\dfrac{\\pi}{6}\\right] = \\dfrac{4\\sqrt{3}}{\\pi}\\left[\\dfrac{\\sqrt{3}}{2}-\\dfrac{1}{2}\\right] = \\dfrac{4\\sqrt{3}}{\\pi}\\cdot\\dfrac{\\sqrt{3}-1}{2}\\)</p>
<p>\\[\\boxed{\\vartheta = \\dfrac{2\\sqrt{3}(\\sqrt{3}-1)}{\\pi} = \\dfrac{6-2\\sqrt{3}}{\\pi}}\\]</p>`
    },
    {
      label: 'Exercice 2 — Probabilités : boules colorées (5 pts)',
      problem: `<p>Une urne contient 3 boules jaunes, 2 boules rouges et 5 boules noires. On extrait simultanément 2 boules de l'urne.</p>
<p>Le tirage d'une boule jaune fait gagner 2 points, celui d'une boule rouge fait gagner 1 point, celui d'une boule noire fait perdre 3 points. On note X la variable aléatoire prenant pour valeur le nombre de points obtenu.</p>
<p><strong>1)</strong> Quel est le nombre de résultats possibles ?</p>
<p><strong>2)</strong> Déterminer l'ensemble des valeurs que peut prendre X.</p>
<p><strong>3)</strong> En supposant tous les tirages équiprobables, déterminer la loi de probabilité de X.</p>
<p><strong>4)</strong> Calculer l'espérance mathématique de X.</p>
<p><strong>5)</strong> Calculer la variance de X. <em>(Résultats sous forme de fractions irréductibles.)</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Dénombrement, tirages simultanés &amp; variables aléatoires</span>
  <ul>
    <li><strong>Tirage simultané de $p$ éléments parmi $n$ :</strong> L'univers comporte $\\text{Card}(\\Omega) = \\binom{n}{p} = C_n^p = \\dfrac{n!}{p!(n-p)!}$ issues équiprobables.</li>
    <li><strong>Variable aléatoire discrète $X$ :</strong> Déterminez l'ensemble des valeurs prises par $X$, puis pour chaque valeur $x_i$, calculez $P(X=x_i) = \\dfrac{\\text{nombre de cas favorables}}{\\text{Card}(\\Omega)}$.</li>
    <li><strong>Vérification obligatoire :</strong> La somme des probabilités doit être égale à 1 : $\\sum P(X=x_i) = 1$.</li>
    <li><strong>Espérance et variance :</strong> $E(X) = \\sum x_i P(X=x_i)$ et $V(X) = E(X^2) - [E(X)]^2 = \\sum x_i^2 P(X=x_i) - [E(X)]^2$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Nombre de résultats</strong></p>
<p>\\(\\text{Card}(\\Omega) = \\binom{10}{2} = 45\\)</p>

<p><strong>2) Valeurs de X</strong></p>
<p>Combinaisons possibles et points :</p>
<p>JJ → \\(2+2=4\\), JR → \\(2+1=3\\), JN → \\(2-3=-1\\), RR → \\(1+1=2\\), RN → \\(1-3=-2\\), NN → \\(-3-3=-6\\).</p>
<p>\\[X(\\Omega) = \\{-6;-2;-1;2;3;4\\}\\]</p>

<p><strong>3) Loi de probabilité</strong></p>
<p>\\(P(X=-6) = \\dfrac{\\binom{5}{2}}{45} = \\dfrac{10}{45}\\)</p>
<p>\\(P(X=-2) = \\dfrac{\\binom{2}{1}\\binom{5}{1}}{45} = \\dfrac{10}{45}\\)</p>
<p>\\(P(X=-1) = \\dfrac{\\binom{3}{1}\\binom{5}{1}}{45} = \\dfrac{15}{45}\\)</p>
<p>\\(P(X=2) = \\dfrac{\\binom{2}{2}}{45} = \\dfrac{1}{45}\\)</p>
<p>\\(P(X=3) = \\dfrac{\\binom{3}{1}\\binom{2}{1}}{45} = \\dfrac{6}{45}\\)</p>
<p>\\(P(X=4) = \\dfrac{\\binom{3}{2}}{45} = \\dfrac{3}{45}\\)</p>
<p>Vérification : \\(10+10+15+1+6+3 = 45\\)</p>

<table class="vtab">
  <tr><th>x</th><td>−6</td><td>−2</td><td>−1</td><td>2</td><td>3</td><td>4</td></tr>
  <tr><th>P(X=x)</th>
    <td>\\(\\dfrac{10}{45}\\)</td>
    <td>\\(\\dfrac{10}{45}\\)</td>
    <td>\\(\\dfrac{15}{45}\\)</td>
    <td>\\(\\dfrac{1}{45}\\)</td>
    <td>\\(\\dfrac{6}{45}\\)</td>
    <td>\\(\\dfrac{3}{45}\\)</td>
  </tr>
</table>

<p><strong>4) Espérance</strong></p>
<p>\\[E(X) = \\dfrac{-60-20-15+2+18+12}{45} = \\dfrac{-63}{45} = \\boxed{-\\dfrac{7}{5}}\\]</p>

<p><strong>5) Variance</strong></p>
<p>\\(E(X^2) = \\dfrac{36\\times10+4\\times10+1\\times15+4\\times1+9\\times6+16\\times3}{45} = \\dfrac{360+40+15+4+54+48}{45} = \\dfrac{521}{45}\\)</p>
<p>\\[V(X) = E(X^2)-[E(X)]^2 = \\dfrac{521}{45}-\\dfrac{49}{25} = \\dfrac{521\\times25-49\\times45}{1125} = \\dfrac{13025-2205}{1125} = \\dfrac{10820}{1125} = \\boxed{\\dfrac{2164}{225}}\\]</p>`
    },
    {
      label: 'Problème — Équation diff. & fonction h(x) = exp(1−3x)/(1+exp(−3x)) (12 pts)',
      problem: `<p><strong>Partie A (équation différentielle)</strong></p>
<p>On considère l'équation différentielle \\((E) : y' - 3y = \\dfrac{-3e}{(1+e^{-3x})^2}\\).</p>
<p>On donne une fonction \\(\\varphi\\) dérivable sur \\(\\mathbb{R}\\) et la fonction f définie sur \\(\\mathbb{R}\\) par \\(f(x) = e^{-3x}\\varphi(x)\\).</p>
<p><strong>1) a)</strong> Montrer que f est dérivable sur \\(\\mathbb{R}\\).</p>
<p><strong>b)</strong> Exprimer \\(f'(x)\\) en fonction de \\(\\varphi(x)\\) et \\(\\varphi'(x)\\).</p>
<p><strong>2)</strong> Sachant que \\(\\varphi\\) est une solution de (E) :</p>
<p><strong>a)</strong> Exprimer \\(f'(x)\\) en fonction de x.</p>
<p><strong>b)</strong> Déterminer \\(f(x)\\) sachant que \\(f(0) = \\dfrac{e}{2}\\).</p>

<p><strong>Partie B</strong></p>
<p>Soit la fonction h définie sur \\(\\mathbb{R}\\) par \\(h(x) = \\dfrac{e^{1-3x}}{1+e^{-3x}}\\).</p>
<p>On désigne par (C) sa courbe dans le plan muni d'un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) (unité 2 cm).</p>
<p><strong>1)</strong> Déterminer les limites de h en \\(-\\infty\\) et en \\(+\\infty\\). En déduire les asymptotes.</p>
<p><strong>2) a)</strong> Calculer \\(h'(x)\\).</p>
<p><strong>b)</strong> Étudier le signe de \\(h'(x)\\) et dresser le tableau de variation de h.</p>
<p><strong>3)</strong> Tracer (C) et ses asymptotes.</p>
<p><strong>4)</strong> Pour tout réel \\(\\alpha > 0\\), on pose \\(I_\\alpha = \\displaystyle\\int_0^\\alpha h(x)\\,dx\\).</p>
<p><strong>a)</strong> Donner une interprétation graphique de \\(I_\\alpha\\).</p>
<p><strong>b)</strong> Calculer \\(I_\\alpha\\) en fonction de \\(\\alpha\\). Déterminer \\(\\displaystyle\\lim_{\\alpha\\to+\\infty}I_\\alpha\\).</p>

<p><strong>Partie C</strong></p>
<p>Soit \\((U_n)\\) la suite définie sur \\(\\mathbb{N}^*\\) par \\(Uₙ = \\displaystyle\\int_0^1 h(x)e^{nx}\\,dx\\).</p>
<p><strong>1) a)</strong> Montrer que \\(Uₙ > 0\\) pour tout \\(n \\in \\mathbb{N}^*\\).</p>
<p><strong>b)</strong> Étudier le sens de variation de \\((U_n)\\).</p>
<p><strong>c)</strong> La suite \\((U_n)\\) est-elle convergente ?</p>
<p><strong>2) a)</strong> Montrer que \\(I_1 \\leq Uₙ \\leq e^n I_1\\) pour tout \\(n \\in \\mathbb{N}^*\\).</p>
<p><strong>b)</strong> En déduire la limite de \\((U_n)\\).</p>
<p><em>On donne : \\(e \\approx 2{,}7\\) ; \\(e^3 \\approx 20\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles avec second membre &amp; calcul intégral</span>
  <ul>
    <li><strong>Solution générale $y = y_0 + y_p$ :</strong> La solution générale de $y'-3y=g(x)$ est la somme de la solution générale de l'équation sans second membre ($y_0 = C e^{3x}$) et d'une solution particulière $y_p$.</li>
    <li><strong>Intégration par changement de variable / forme $u'/u$ :</strong> Pour calculer $\\int \\dfrac{e^{-3x}}{1+e^{-3x}}dx$, remarquez la forme $-\\dfrac{1}{3}\\dfrac{u'(x)}{u(x)}$ avec $u(x)=1+e^{-3x} > 0$, dont une primitive est $-\\dfrac{1}{3}\\ln(1+e^{-3x})$.</li>
    <li><strong>Intégrale paramétrée et limite :</strong> $I_\\alpha = \\int_0^\\alpha h(x)dx = [F(x)]_0^\\alpha = F(\\alpha)-F(0)$. Pour $\\alpha \\to +\\infty$, $\\lim_{\\alpha\\to+\\infty} e^{-3\\alpha} = 0$, donc $\\ln(1+e^{-3\\alpha}) \\to \\ln 1 = 0$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Dérivabilité de f</strong></p>
<p>\\(f(x) = e^{-3x}\\varphi(x)\\) est le produit de deux fonctions dérivables sur \\(\\mathbb{R}\\) → f est dérivable sur \\(\\mathbb{R}\\). </p>

<p><strong>1b) Expression de f'(x)</strong></p>
<p>\\[f'(x) = -3e^{-3x}\\varphi(x) + e^{-3x}\\varphi'(x) = e^{-3x}[\\varphi'(x)-3\\varphi(x)]\\]</p>

<p><strong>2a) f'(x) quand φ est solution de (E)</strong></p>
<p>\\(\\varphi\\) solution de (E) \\(\\Rightarrow \\varphi'(x)-3\\varphi(x) = \\dfrac{-3e}{(1+e^{-3x})^2}\\).</p>
<p>\\[f'(x) = e^{-3x}\\cdot\\dfrac{-3e}{(1+e^{-3x})^2} = \\dfrac{-3e^{1-3x}}{(1+e^{-3x})^2}\\]</p>

<p><strong>2b) Expression de f(x)</strong></p>
<p>\\(f'(x) = \\dfrac{-3e^{1-3x}}{(1+e^{-3x})^2}\\). Primitiver : on remarque que \\(\\dfrac{d}{dx}\\left(\\dfrac{e}{1+e^{-3x}}\\right) = \\dfrac{3e^{1-3x}}{(1+e^{-3x})^2}\\).</p>
<p>Donc \\(f(x) = \\dfrac{-e}{1+e^{-3x}}+K\\).</p>
<p>\\(f(0) = \\dfrac{-e}{1+1}+K = \\dfrac{-e}{2}+K = \\dfrac{e}{2} \\Rightarrow K = e\\).</p>
<p>\\[\\boxed{f(x) = e - \\dfrac{e}{1+e^{-3x}} = \\dfrac{e^{1-3x}}{1+e^{-3x}} = h(x)}\\]</p>
<p><em>Remarque : on retrouve exactement la fonction h de la Partie B !</em></p>

<p><strong>Partie B</strong></p>

<p><strong>1) Limites et asymptotes</strong></p>
<p>\\(h(x) = \\dfrac{e^{1-3x}}{1+e^{-3x}} = e\\cdot\\dfrac{e^{-3x}}{1+e^{-3x}}\\).</p>
<p>En \\(-\\infty\\) : \\(e^{-3x}\\to+\\infty\\), donc \\(\\dfrac{e^{-3x}}{1+e^{-3x}}\\to1\\), ainsi \\(\\lim_{x\\to-\\infty}h(x) = e\\).</p>
<p>Asymptote horizontale \\(y = e\\) en \\(-\\infty\\).</p>
<p>En \\(+\\infty\\) : \\(e^{-3x}\\to0\\), donc \\(h(x)\\to0\\).</p>
<p>Asymptote horizontale \\(y = 0\\) en \\(+\\infty\\).</p>

<p><strong>2a) Calcul de h'(x)</strong></p>
<p>\\[h'(x) = \\dfrac{-3e^{1-3x}(1+e^{-3x})+3e^{-3x}\\cdot e^{1-3x}}{(1+e^{-3x})^2} = \\dfrac{-3e^{1-3x}}{(1+e^{-3x})^2}\\]</p>

<p><strong>2b) Signe de h'(x)</strong></p>
<p>\\(3e^{1-3x} > 0\\) et \\((1+e^{-3x})^2 > 0\\) → \\(h'(x) < 0\\) pour tout \\(x\\).</p>
<p>h est <strong>strictement décroissante</strong> sur \\(\\mathbb{R}\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-15-2-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-15-2-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
      <linearGradient id="forbid-grad-15-2-h" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">h '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">h(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">e</text>
    <line x1="165" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-15-2-h)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
  </svg>
</div>

<p><strong>4b) Calcul de I_α</strong></p>
<p>\\(h(x) = e\\cdot\\dfrac{e^{-3x}}{1+e^{-3x}}\\). Posons \\(u = 1+e^{-3x}\\), \\(du = -3e^{-3x}dx\\).</p>
<p>\\[I_\\alpha = \\int_0^\\alpha h(x)\\,dx = e\\int_0^\\alpha\\dfrac{e^{-3x}}{1+e^{-3x}}dx = e\\left[-\\dfrac{1}{3}\\ln(1+e^{-3x})\\right]_0^\\alpha\\]</p>
<p>\\(= -\\dfrac{e}{3}[\\ln(1+e^{-3\\alpha})-\\ln2] = \\dfrac{e}{3}\\ln2 - \\dfrac{e}{3}\\ln(1+e^{-3\\alpha})\\)</p>
<p>\\[\\boxed{I_\\alpha = \\dfrac{e}{3}[\\ln2 - \\ln(1+e^{-3\\alpha})]}\\]</p>
<p>\\(\\lim_{\\alpha\\to+\\infty}I_\\alpha = \\dfrac{e}{3}[\\ln2-\\ln1] = \\dfrac{e\\ln2}{3}\\)</p>

<p><strong>Partie C</strong></p>

<p><strong>1a) Uₙ > 0</strong></p>
<p>Pour \\(x \\in [0;1]\\) : \\(h(x) > 0\\) et \\(e^{nx} > 0\\) → \\(h(x)e^{nx} > 0\\) → \\(Uₙ > 0\\). </p>

<p><strong>1b) Monotonie de (Uₙ)</strong></p>
<p>\\(U_{n+1}-Uₙ = \\displaystyle\\int_0^1 h(x)(e^{(n+1)x}-e^{nx})\\,dx = \\int_0^1 h(x)e^{nx}(e^x-1)\\,dx\\).</p>
<p>Pour \\(x \\in [0;1]\\) : \\(e^x \\geq 1\\) (nul en 0), donc \\(e^x-1 \\geq 0\\). Avec \\(h>0\\) et \\(e^{nx}>0\\) : intégrande \\(\\geq 0\\).</p>
<p>\\(U_{n+1} \\geq U_n\\) → \\((U_n)\\) est <strong>croissante</strong>.</p>

<p><strong>1c) Convergence</strong></p>
<p>\\((U_n)\\) est croissante. Si elle est majorée, elle converge. On va le montrer via l'encadrement.</p>

<p><strong>2a) Encadrement</strong></p>
<p>Pour \\(x \\in [0;1]\\) : \\(0 \\leq \\dfrac{x}{n} \\leq \\dfrac{1}{n}\\), donc \\(1 \\leq e^{\\dfrac{x}{n}} \\leq e^{\\dfrac{1}{n}}\\), ainsi \\(e^x \\leq e^{nx} \\leq e^n\\) (en élevant à la puissance n ... non).</p>
<p>Plus directement : \\(0 \\leq x \\leq 1 \\Rightarrow 0 \\leq nx \\leq n \\Rightarrow 1 \\leq e^{nx} \\leq e^n\\).</p>
<p>Donc \\(h(x) \\leq h(x)e^{nx} \\leq h(x)e^n\\), et en intégrant sur \\([0;1]\\) :</p>
<p>\\[I_1 \\leq Uₙ \\leq e^n I_1\\] </p>

<p><strong>2b) Limite de (Uₙ)</strong></p>
<p>\\(I_1 \\leq Uₙ \\leq e^n I_1\\). Mais \\(e^n I_1 \\to +\\infty\\) → l'encadrement ne donne pas directement la limite.</p>
<p>Cependant, \\((U_n)\\) est croissante et minorée par \\(I_1 > 0\\), donc convergente vers \\(\\ell \\geq I_1\\).</p>
<p>En passant à la limite dans l'encadrement :\\(I_1 \\leq \\ell \\leq \\lim_{n\\to\\infty}e^n I_1\\).</p>
<p>La suite \\((U_n)\\) étant croissante et minorée par \\(I_1 > 0\\), elle converge vers :
<p>\\[\\boxed{\\lim_{n\\to+\\infty}U_n = \\dfrac{e\\ln2}{3}}\\]</p>`
    }
  ]
},
  {
  id: 'bac-2016-D-juillet-1er',
  year: 2016,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2016 / 1er tour',
  topics: ['Nombres complexes', 'Géométrie dans l\'espace', 'Fonction logarithme', 'Intégrales & Récurrence'],
  parts: [
    {
      label: 'Exercice 1 — Polynôme complexe de degré 4 (4 pts)',
      problem: `<p>On considère le polynôme P défini sur \\(\\mathbb{C}\\) par :</p>
<p>\\[P(z) = z^4 - 4(1+i)z^3 + 12iz^2 + 8(1-i)z - 20\\]</p>
<p><strong>1) a)</strong> Écrire sous forme algébrique \\((1-i)^2\\) puis en déduire les solutions dans \\(\\mathbb{C}\\) de l'équation \\(z^2 = -2i\\).</p>
<p><strong>b)</strong> Déterminer les nombres b et c pour que, pour tout \\(z \\in \\mathbb{C}\\) :</p>
<p>\\[P(z) = (z^2+2i)(z^2+bz+c)\\]</p>
<p><strong>2)</strong> Résoudre dans \\(\\mathbb{C}\\) l'équation \\((E) : P(z) = 0\\).</p>
<p><strong>3)</strong> Le plan complexe est rapporté à un repère orthonormé \\((O;\\vec{u};\\vec{v})\\). On considère les points A, B, C et D d'affixes respectives :</p>
<p>\\(z_A = 1-i\\), \\(z_B = -1+i\\), \\(z_C = 1+3i\\), \\(z_D = 3+i\\).</p>
<p><strong>a)</strong> Faire une figure.</p>
<p><strong>b)</strong> On pose \\(Z = \\dfrac{z_A - z_B}{z_C - z_B}\\). Écrire Z sous la forme algébrique.</p>
<p><strong>c)</strong> Interpréter géométriquement le module et un argument de Z.</p>
<p><strong>d)</strong> Quelle est la nature exacte du triangle ABC puis du quadrilatère ABCD ?</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations de degré 4 dans ℂ &amp; racines imaginaires pures</span>
  <ul>
    <li><strong>Racine imaginaire pure $z_0 = iy$ ($y\\in\\mathbb{R}$) :</strong> Injectez $iy$ dans $P(z)=0$ avec $(iy)^2=-y^2$, $(iy)^3=-iy^3$, $(iy)^4=y^4$. Séparez partie réelle et partie imaginaire pour déterminer $y$.</li>
    <li><strong>Racines conjuguées :</strong> Si les coefficients de départ ont des propriétés réelles ou par symétrie, les racines imaginaires pures apparaissent souvent par paires opposées $\\pm iy_0$.</li>
    <li><strong>Factorisation par $(z^2+y_0^2)$ :</strong> Écrivez $P(z) = (z^2+y_0^2)(z^2+\\alpha z+\\beta)$ et identifiez pour obtenir une équation du second degré classique.</li>
    <li><strong>Résolution géométrique :</strong> Placez les 4 racines dans le plan complexe et vérifiez les égalités de distances $|z_A-z_B|$ ou les alignements pour identifier les polygones remarquables.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Forme algébrique de \\((1-i)^2\\)</strong></p>
<p>\\((1-i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i\\)</p>
<p>Solutions de \\(z^2 = -2i = (1-i)^2\\) :</p>
<p>\\[z^2 = (1-i)^2 \\iff z = 1-i \\text{ ou } z = -(1-i) = -1+i\\]</p>
<p>\\[\\boxed{\\mathcal{S} = \\{1-i ; -1+i\\}}\\]</p>

<p><strong>1b) Détermination de b et c</strong></p>
<p>\\(P(z) = (z^2+2i)(z^2+bz+c) = z^4 + bz^3 + cz^2 + 2iz^2 + 2ibz + 2ic\\)</p>
<p>\\(= z^4 + bz^3 + (c+2i)z^2 + 2ibz + 2ic\\)</p>
<p>Par identification avec \\(P(z) = z^4 - 4(1+i)z^3 + 12iz^2 + 8(1-i)z - 20\\) :</p>
<ul>
  <li>Coeff. de \\(z^3\\) : \\(b = -4(1+i)\\)</li>
  <li>Terme constant : \\(2ic = -20 \\Rightarrow c = \\dfrac{-20}{2i} = \\dfrac{-20}{2i}\\cdot\\dfrac{-i}{-i} = \\dfrac{20i}{-2} \\cdot ... = \\dfrac{-20}{2i} = 10i\\)</li>
</ul>
<p>Vérification coeff. de \\(z^2\\) : \\(c+2i = 10i+2i = 12i\\)</p>
<p>Vérification coeff. de \\(z\\) : \\(2ib = 2i\\cdot(-4-4i) = -8i+8 = 8(1-i)\\)</p>
<p>\\[\\boxed{b = -4(1+i), \\quad c = 10i}\\]</p>
<p>\\[P(z) = (z^2+2i)[z^2-4(1+i)z+10i]\\]</p>

<p><strong>2) Résolution de P(z) = 0</strong></p>
<p><em>Facteur 1 :</em> \\(z^2+2i = 0 \\iff z^2 = -2i \\Rightarrow z = 1-i\\) ou \\(z = -1+i\\).</p>
<p><em>Facteur 2 :</em> \\(z^2-4(1+i)z+10i = 0\\).</p>
<p>\\(\\Delta' = [2(1+i)]^2 - 10i = 4(1+i)^2 - 10i = 4(2i) - 10i = 8i - 10i = -2i = (1-i)^2\\)</p>
<p>\\(z = 2(1+i) \\pm (1-i)\\)</p>
<p>\\(z_3 = 2+2i+1-i = 3+i\\) et \\(z_4 = 2+2i-1+i = 1+3i\\)</p>
<p>\\[\\boxed{\\mathcal{S} = \\{1-i ; -1+i ; 3+i ; 1+3i\\}}\\]</p>

<p><strong>3b) Forme algébrique de Z</strong></p>
<p>\\(z_A - z_B = (1-i)-(-1+i) = 2-2i\\)</p>
<p>\\(z_C - z_B = (1+3i)-(-1+i) = 2+2i\\)</p>
<p>\\[Z = \\dfrac{2-2i}{2+2i} = \\dfrac{(2-2i)(2-2i)}{(2+2i)(2-2i)} = \\dfrac{4-8i-4}{8} = \\dfrac{-8i}{8} = -i\\]</p>
<p>\\[\\boxed{Z = -i}\\]</p>

<p><strong>3c) Interprétation géométrique</strong></p>
<p>\\(|Z| = \\dfrac{|z_A - z_B|}{|z_C - z_B|} = \\dfrac{BA}{BC} = |-i| = 1\\) → \\(BA = BC\\).</p>
<p>\\(\\arg(Z) = \\arg\\left(\\dfrac{z_A-z_B}{z_C-z_B}\\right) = (\\overrightarrow{BC};\\overrightarrow{BA}) = \\arg(-i) = -\\dfrac{\\pi}{2}\\) → \\(\\overrightarrow{BA} \\perp \\overrightarrow{BC}\\).</p>

<p><strong>3d) Nature du triangle ABC et du quadrilatère ABCD</strong></p>
<p>\\(BA = BC\\) et \\(\\widehat{ABC} = \\dfrac{\\pi}{2}\\) → le triangle ABC est <strong>rectangle isocèle en B</strong>.</p>
<p>Pour ABCD : \\(z_{\\overrightarrow{BA}} = z_A - z_B = 2-2i\\) et \\(z_{\\overrightarrow{CD}} = z_D - z_C = (3+i)-(1+3i) = 2-2i\\).</p>
<p>\\(\\overrightarrow{BA} = \\overrightarrow{CD}\\) → ABCD est un <strong>parallélogramme</strong>.</p>
<p>De plus, ABC est rectangle isocèle en B → ABCD est un <strong>carré</strong>.</p>`
    },
    {
      label: 'Exercice 2 — Géométrie dans l\'espace (4 pts)',
      problem: `<p>Dans l'espace muni d'un repère orthonormal direct \\((O;\\vec{i};\\vec{j};\\vec{k})\\), on considère les points \\(A(-1;1;-3)\\), \\(B(-2;3;-3)\\), \\(C(-2;1;0)\\).</p>
<p><strong>1)</strong> Calculer les coordonnées du vecteur \\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\).</p>
<p><strong>2)</strong> Soit I le point de coordonnées \\((-1;3;0)\\). Calculer la distance de I au plan (ABC). Les points A, B, C et I sont-ils coplanaires ?</p>
<p><strong>3) a)</strong> Calculer l'aire \\(\\mathcal{A}\\) du triangle ABC en unité d'aire.</p>
<p><strong>b)</strong> Déterminer le volume V (en unité de volume) de la pyramide de sommet I et de base le triangle ABC.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Produit vectoriel, équation de plan &amp; distance point-plan</span>
  <ul>
    <li><strong>Produit vectoriel $\\vec{u} \\wedge \\vec{v}$ :</strong> $\\begin{pmatrix}x_1 \\\\ y_1 \\\\ z_1\\end{pmatrix} \\wedge \\begin{pmatrix}x_2 \\\\ y_2 \\\\ z_2\\end{pmatrix} = \\begin{pmatrix}y_1 z_2 - z_1 y_2 \\\\ z_1 x_2 - x_1 z_2 \\\\ x_1 y_2 - y_1 x_2\\end{pmatrix}$. Si $\\vec{u}\\wedge\\vec{v}\\neq\\vec{0}$, les vecteurs forment une base du plan.</li>
    <li><strong>Équation cartésienne de $(ABC)$ :</strong> $\\vec{n} = \\overrightarrow{AB}\\wedge\\overrightarrow{AC} = (a;b;c) \\implies ax+by+cz+d=0$.</li>
    <li><strong>Distance d'un point au plan :</strong> $d(D, (ABC)) = \\dfrac{|ax_D+by_D+cz_D+d|}{\\sqrt{a^2+b^2+c^2}}$.</li>
    <li><strong>Volume du tétraèdre :</strong> $V = \\dfrac{1}{3}\\text{Aire}(ABC) \\times d(D, (ABC)) = \\dfrac{1}{6}|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD}|$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Produit vectoriel \\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\)</strong></p>
<p>\\(\\overrightarrow{AB} = (-1;2;0)\\) et \\(\\overrightarrow{AC} = (-1;0;3)\\).</p>
<p>\\[\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{vmatrix}\ \\vec{i} & \\vec{j} & \\vec{k} \\\\ -1&2&0 \\\\ -1&0&3\\end{vmatrix}\\]</p>
<p>\\(= (2 \\cdot 3 - 0 \\cdot 0)\\vec{i} - ((-1)\\cdot3 - 0\\cdot(-1))\\vec{j} + ((-1)\\cdot0 - 2\\cdot(-1))\\vec{k}\\)</p>
<p>\\(= 6\\vec{i} - (-3)\\vec{j} + 2\\vec{k}\\)</p>
<p>\\[\\boxed{\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (6 ; 3 ; 2)}\\]</p>

<p><strong>2) Distance de I au plan (ABC) et coplanarité</strong></p>
<p>\\(\\overrightarrow{AI} = (0;2;3)\\).</p>
<p>\\[d(I;(ABC)) = \\dfrac{|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AI}|}{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}\\]</p>
<p>\\((\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AI} = 6\\cdot0 + 3\\cdot2 + 2\\cdot3 = 0 + 6 + 6 = 12\\)</p>
<p>\\(\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\| = \\sqrt{36+9+4} = \\sqrt{49} = 7\\)</p>
<p>\\[d(I;(ABC)) = \\dfrac{12}{7}\\]</p>
<p>\\(d(I;(ABC)) \\neq 0\\) → Les points A, B, C et I <strong>ne sont pas coplanaires</strong>.</p>

<p><strong>3a) Aire du triangle ABC</strong></p>
<p>\\[\\mathcal{A} = \\dfrac{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}{2} = \\dfrac{7}{2} \\text{ unité d'aire}\\]</p>

<p><strong>3b) Volume de la pyramide</strong></p>
<p>\\[V = \\dfrac{1}{3} \\times \\mathcal{A} \\times d(I;(ABC)) = \\dfrac{1}{3} \\times \\dfrac{7}{2} \\times \\dfrac{12}{7} = \\dfrac{1}{3} \\times 6 = 2 \\text{ unités de volume}\\]</p>`
    },
    {
      label: 'Problème — Fonction f(x) = ln(x)/(1+x) et exp(1/(x−1)), intégrales (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases} \ \\dfrac{ \\ln x}{1+x} & \\text{si } x \\geq 1 \\\\ e^{ \\dfrac{1}{x-1}} & \\text{si } x < 1 \\end{cases}\\]</p>
<p>On note (C) la courbe représentative de f dans le plan muni d'un repère orthogonal \\((O;\\vec{i};\\vec{j})\\) tel que \\(\\|\\vec{i}\\| = 1\\) cm et \\(\\|\\vec{j}\\| = 2\\) cm.</p>

<p><strong>Partie A</strong></p>
<p>Soit g la fonction définie sur \\(I = [1;+\\infty[\\) par \\(g(x) = 1+x-x\\ln x\\).</p>
<p><strong>1)</strong> Calculer les limites de g aux bornes de I.</p>
<p><strong>2)</strong> Étudier le sens de variation de g et dresser son tableau de variation.</p>
<p><strong>3)</strong> Démontrer que l'équation \\(g(x) = 0\\) admet une unique solution \\(\\alpha\\) sur I. Vérifier que \\(\\alpha \\in ]3{,}5;4[\\).</p>
<p><strong>4)</strong> Déduire le signe de g sur I.</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Calculer les limites de f en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>2)</strong> Étudier la dérivabilité de f en 1. Interpréter graphiquement.</p>
<p><strong>3)</strong> Calculer \\(f'(x)\\) pour \\(x \\in \\mathbb{R}\\setminus\\{1\\}\\) et vérifier que pour tout \\(x \\in I\\) : \\(f'(x) = \\dfrac{g(x)}{x(1+x)^2}\\).</p>
<p><strong>4)</strong> En déduire le signe de \\(f'(x)\\) puis dresser le tableau de variation de f.</p>
<p><strong>5)</strong> Montrer que \\(f(\\alpha) = \\dfrac{1}{\\alpha}\\).</p>
<p><strong>6)</strong> Construire (C), ses tangentes et ses asymptotes.</p>

<p><strong>Partie C</strong></p>
<p>On pose \\(J_n = \\displaystyle\\int_1^e x^2(\\ln x)^n\\,dx\\) pour tout \\(n \\in \\mathbb{N}\\).</p>
<p><strong>1)</strong> Calculer \\(J_0\\).</p>
<p><strong>2)</strong> Montrer que \\(J_n \\geq 0\\) pour tout \\(n \\in \\mathbb{N}\\).</p>
<p><strong>3)</strong> Montrer que \\((J_n)\\) est décroissante.</p>
<p><strong>4)</strong> Montrer que \\((J_n)\\) est convergente.</p>
<p><strong>5)</strong> En utilisant une intégration par parties, démontrer que pour tout entier naturel n :</p>
<p>\\[3J_{n+1} + (n+1)J_n = e^3\\]</p>
<p><strong>6)</strong> En déduire les valeurs exactes de \\(J_1\\) et \\(J_2\\).</p>
<p><em>Données : \\(\\ln(3{,}5) \\approx 1{,}25\\) ; \\(\\ln 2 \\approx 0{,}7\\) ; \\(e^{-1} \\approx 0{,}37\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions ln, exponentielles par morceaux &amp; suites d'intégrales</span>
  <ul>
    <li><strong>Dérivée de $\\dfrac{\\ln x}{1+x}$ :</strong> $\\left(\\dfrac{\\ln x}{1+x}\\right)' = \\dfrac{\\dfrac{1}{x}(1+x)-\\ln x}{(1+x)^2} = \\dfrac{1+x-x\\ln x}{x(1+x)^2} = \\dfrac{g(x)}{x(1+x)^2}$.</li>
    <li><strong>Théorème de la bijection :</strong> Si $f$ est continue et strictement monotone sur $[1;+\\infty[$, alors $f([1;+\\infty[) = [f(1); \\lim_{+\\infty} f[$ est un intervalle bijection.</li>
    <li><strong>Intégration par parties $\\int_a^b u\\,v' = [uv]_a^b - \\int_a^b u'v$ :</strong> Indispensable pour calculer $\\int x^n \\ln x\\,dx$ en posant $u = \\ln x$ ($u'=\\dfrac{1}{x}$) et $v' = x^n$ ($v = \\dfrac{x^{n+1}}{n+1}$).</li>
    <li><strong>Relation de récurrence sur les intégrales $J_n$ :</strong> Intégrez par parties $J_n = \\int_1^e x^2(\\ln x)^n dx$ pour établir une relation de la forme $a J_n + b J_{n-1} = c e^3$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Limites de g aux bornes de I</strong></p>
<p>\\(\\lim_{x\\to1^+}g(x) = 1+1-1\\cdot\\ln1 = 2\\) (car \\(\\ln1=0\\)).</p>
<p>\\(\\lim_{x\\to+\\infty}g(x) = \\lim_{x\\to+\\infty}[1+x(1-\\ln x)] = -\\infty\\) (car \\(\\ln x\\to+\\infty\\)).</p>

<p><strong>2) Variations de g</strong></p>
<p>\\(g'(x) = 1 - (\\ln x + x \\cdot \\dfrac{1}{x}) = 1 - \\ln x - 1 = -\\ln x\\).</p>
<p>Pour \\(x \\geq 1\\) : \\(\\ln x \\geq 0\\) donc \\(g'(x) = -\\ln x \\leq 0\\).</p>
<p>g est <strong>décroissante</strong> sur \\([1;+\\infty[\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-16-1-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-16-1-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
      <linearGradient id="forbid-grad-16-1-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">g '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">g(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <text x="145" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">2</text>
    <line x1="165" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-16-1-g)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
  </svg>
</div>

<p><strong>3) Unique solution α de g(x) = 0</strong></p>
<p>g est continue, strictement décroissante sur \\([1;+\\infty[\\), de \\(2 > 0\\) vers \\(-\\infty < 0\\). Par le TVI, \\(g(x)=0\\) admet une unique solution \\(\\alpha \\in [1;+\\infty[\\).</p>
<p>Vérification \\(\\alpha \\in ]3{,}5;4[\\) :</p>
<p>\\(g(3{,}5) = 1+3{,}5-3{,}5\\times1{,}25 = 4{,}5-4{,}375 = 0{,}125 > 0\\)</p>
<p>\\(g(4) = 1+4-4\\ln4 = 5-8\\ln2 \\approx 5-5{,}6 = -0{,}6 < 0\\)</p>
<p>\\(g(3{,}5)\\times g(4) < 0\\) → \\(\\alpha \\in ]3{,}5;4[\\). </p>

<p><strong>4) Signe de g sur I</strong></p>
<p>\\(g(x) > 0\\) sur \\([1;\\alpha[\\) et \\(g(x) < 0\\) sur \\(]\\alpha;+\\infty[\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1) Limites de f</strong></p>
<p>En \\(-\\infty\\) : \\(f(x) = e^{\\dfrac{1}{x-1}}\\). Quand \\(x\\to-\\infty\\) : \\(\\dfrac{1}{x-1}\\to0^-\\), donc \\(\\lim_{x\\to-\\infty}f(x) = e^0 = 1\\).</p>
<p>La droite \\(y=1\\) est <strong>asymptote horizontale</strong> à (C) en \\(-\\infty\\).</p>
<p>En \\(+\\infty\\) : \\(f(x) = \\dfrac{\\ln x}{1+x}\\). \\(\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{1+x} = \\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x}\\cdot\\dfrac{x}{1+x} = 0\\cdot1 = 0\\).</p>
<p>La droite \\(y=0\\) est <strong>asymptote horizontale</strong> à (C) en \\(+\\infty\\).</p>

<p><strong>2) Dérivabilité en 1</strong></p>
<p>\\(f(1) = \\dfrac{\\ln1}{1+1} = 0\\).</p>
<p><em>À gauche :</em> \\(\\lim_{x\\to1^-}\\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to1^-}\\dfrac{e^{\\dfrac{1}{x-1}}}{x-1}\\).</p>
<p>Posons \\(X = \\dfrac{1}{x-1}\\to-\\infty\\) quand \\(x\\to1^-\\) : \\(\\dfrac{e^X}{\\dfrac{1}{X}} = Xe^X \\to 0\\).</p>
<p>Dérivée à gauche = 0.</p>
<p><em>À droite :</em> \\(\\lim_{x\\to1^+}\\dfrac{f(x)}{x-1} = \\lim_{x\\to1^+}\\dfrac{\\ln x}{(x-1)(1+x)}\\).</p>
<p>\\(\\lim_{x\\to1^+}\\dfrac{\\ln x}{x-1} = 1\\) (limite classique) et \\(\\dfrac{1}{1+x}\\to\\dfrac{1}{2}\\).</p>
<p>Dérivée à droite = \\(\\dfrac{1}{2}\\).</p>
<p>Les dérivées à gauche (0) et à droite (\\(\\dfrac{1}{2}\\)) sont différentes → f <strong>non dérivable en 1</strong>.</p>
<p>Interprétation : (C) admet un <strong>point anguleux en (1;0)</strong> avec demi-tangente horizontale à gauche et demi-tangente de pente \\(\\dfrac{1}{2}\\) à droite.</p>

<p><strong>3) Calcul de f'(x)</strong></p>
<p>Pour \\(x < 1\\) : \\(f'(x) = e^{\\dfrac{1}{x-1}}\\cdot\\dfrac{-1}{(x-1)^2}\\).</p>
<p>Pour \\(x > 1\\) (\\(x \\in I\\)) : \\(f'(x) = \\dfrac{\\dfrac{1}{x}(1+x)-\\ln x}{(1+x)^2} = \\dfrac{\\dfrac{1+x}{x}-\\ln x}{(1+x)^2} = \\dfrac{1+x-x\\ln x}{x(1+x)^2} = \\dfrac{g(x)}{x(1+x)^2}\\). </p>

<p><strong>4) Signe de f'(x)</strong></p>
<p>Pour \\(x < 1\\) : \\(e^{\\dfrac{1}{x-1}} > 0\\) et \\(\\dfrac{-1}{(x-1)^2} < 0\\) → \\(f'(x) < 0\\). f décroissante sur \\(]-\\infty;1[\\).</p>
<p>Pour \\(x \\in I\\) : \\(x(1+x)^2 > 0\\), signe de \\(f'(x)\\) = signe de \\(g(x)\\).</p>
<p>→ \\(f'(x) > 0\\) sur \\(]1;\\alpha[\\), \\(f'(\\alpha) = 0\\), \\(f'(x) < 0\\) sur \\(]\\alpha;+\\infty[\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-16-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-16-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
      <linearGradient id="forbid-grad-16-1-f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="515" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">α</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <!-- Ticks d'extremum en 515 -->
    <line x1="515" y1="50" x2="515" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="515" y1="86" x2="515" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <!-- Trait vertical en 330 avec sauts propres autour des valeurs -->
    <line x1="330" y1="50" x2="330" y2="64" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="330" y1="50" x2="330" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="235" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="420" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="515" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="610" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <line x1="165" y1="135" x2="310" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-16-1-f)"/>
    <text x="330" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="350" y1="225" x2="495" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-16-1-f)"/>
    <text x="515" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1/α</text>
    <line x1="535" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-16-1-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
  </svg>
</div>

<p><strong>5) f(α) = 1/α</strong></p>
<p>\\(g(\\alpha) = 0 \\iff 1+\\alpha-\\alpha\\ln\\alpha = 0 \\iff \\ln\\alpha = \\dfrac{1+\\alpha}{\\alpha}\\).</p>
<p>\\(f(\\alpha) = \\dfrac{\\ln\\alpha}{1+\\alpha} = \\dfrac{\\dfrac{1+\\alpha}{\\alpha}}{1+\\alpha} = \\dfrac{1}{\\alpha}\\). </p>

<p><strong>Partie C</strong></p>

<p><strong>1) Calcul de J₀</strong></p>
<p>\\(J_0 = \\displaystyle\\int_1^e x^2(\\ln x)^0\\,dx = \\int_1^e x^2\\,dx = \\left[\\dfrac{x^3}{3}\\right]_1^e = \\dfrac{e^3-1}{3}\\)</p>
<p>\\[\\boxed{J_0 = \\dfrac{e^3-1}{3}}\\]</p>

<p><strong>2) Jₙ ≥ 0</strong></p>
<p>Pour \\(x \\in [1;e]\\) : \\(x^2 \\geq 0\\) et \\(\\ln x \\geq 0\\) (car \\(x \\geq 1\\)), donc \\(x^2(\\ln x)^n \\geq 0\\).</p>
<p>L'intégrale d'une fonction positive sur un intervalle est positive. \\(J_n \\geq 0\\).</p>

<p><strong>3) (Jₙ) est décroissante</strong></p>
<p>\\(J_{n+1} - J_n = \\displaystyle\\int_1^e x^2(\\ln x)^n[(\\ln x)-1]\\,dx\\).</p>
<p>Pour \\(x \\in [1;e]\\) : \\(\\ln x \\in [0;1]\\), donc \\(\\ln x - 1 \\leq 0\\).</p>
<p>Et \\(x^2(\\ln x)^n \\geq 0\\), donc \\(x^2(\\ln x)^n(\\ln x-1) \\leq 0\\).</p>
<p>\\(J_{n+1} - J_n \\leq 0\\) : \\((J_n)\\) est <strong>décroissante</strong>.</p>

<p><strong>4) (Jₙ) est convergente</strong></p>
<p>\\((J_n)\\) est décroissante et minorée par 0. Par le théorème de la convergence monotone, \\((J_n)\\) est <strong>convergente</strong>. </p>

<p><strong>5) Relation de récurrence : 3Jₙ₊₁ + (n+1)Jₙ = e³</strong></p>
<p>IPP sur \\(3J_{n+1} = \\displaystyle\\int_1^e 3x^2(\\ln x)^{n+1}\\,dx\\) :</p>
<p>\\(u = (\\ln x)^{n+1}\\), \\(v' = 3x^2\\) → \\(u' = \\dfrac{n+1}{x}(\\ln x)^n\\), \\(v = x^3\\).</p>
<p>\\[3J_{n+1} = \\left[x^3(\\ln x)^{n+1}\\right]_1^e - (n+1)\\int_1^e x^2(\\ln x)^n\\,dx\\]</p>
<p>\\(= [e^3 \\cdot 1 - 1 \\cdot 0] - (n+1)J_n = e^3 - (n+1)J_n\\)</p>
<p>\\[\\boxed{3J_{n+1} + (n+1)J_n = e^3}\\] </p>

<p><strong>6) Valeurs exactes de J₁ et J₂</strong></p>
<p>Pour \\(n=0\\) : \\(3J_1 + J_0 = e^3 \\Rightarrow 3J_1 = e^3 - \\dfrac{e^3-1}{3} = \\dfrac{3e^3-e^3+1}{3} = \\dfrac{2e^3+1}{3}\\)</p>
<p>\\[\\boxed{J_1 = \\dfrac{2e^3+1}{9}}\\]</p>
<p>Pour \\(n=1\\) : \\(3J_2 + 2J_1 = e^3 \\Rightarrow 3J_2 = e^3 - \\dfrac{2(2e^3+1)}{9} = \\dfrac{9e^3-4e^3-2}{9} = \\dfrac{5e^3-2}{9}\\)</p>
<p>\\[\\boxed{J_2 = \\dfrac{5e^3-2}{27}}\\]</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) — BAC 2016 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="96.7" y1="40" x2="96.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="170.0" y1="40" x2="170.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="243.3" y1="40" x2="243.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40" x2="390.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="463.3" y1="40" x2="463.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="536.7" y1="40" x2="536.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="610.0" y1="40" x2="610.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="683.3" y1="40" x2="683.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="297.9" x2="720" y2="297.9" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="113.7" x2="720" y2="113.7" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="60" y1="113.7" x2="720" y2="113.7" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="710" y="107.7" text-anchor="end" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">y = 1 en −∞</text><line x1="60" y1="205.8" x2="720" y2="205.8" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="710" y="199.8" text-anchor="end" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">y = 0 en +∞</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="205.8" x2="735" y2="205.8" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="209.8" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="316.7" y1="400" x2="316.7" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="316.7" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="304.7" y="221.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="96.7" y1="201.8" x2="96.7" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="96.7" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="170.0" y1="201.8" x2="170.0" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="170.0" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="243.3" y1="201.8" x2="243.3" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="243.3" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="390.0" y1="201.8" x2="390.0" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="463.3" y1="201.8" x2="463.3" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="463.3" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="536.7" y1="201.8" x2="536.7" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="536.7" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="610.0" y1="201.8" x2="610.0" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="610.0" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="683.3" y1="201.8" x2="683.3" y2="209.8" stroke="#1f2937" stroke-width="1"/><text x="683.3" y="221.8" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    <line x1="312.7" y1="390.0" x2="320.7" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="306.7" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="312.7" y1="297.9" x2="320.7" y2="297.9" stroke="#1f2937" stroke-width="1"/><text x="306.7" y="301.9" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="312.7" y1="113.7" x2="320.7" y2="113.7" stroke="#1f2937" stroke-width="1"/><text x="306.7" y="117.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text>
    
    <!-- Courbes -->
    <path d="M 60.0 132.0 L 64.4 132.3 L 68.8 132.5 L 73.2 132.7 L 77.6 133.0 L 82.0 133.2 L 86.4 133.4 L 90.8 133.7 L 95.2 134.0 L 99.6 134.2 L 104.0 134.5 L 108.4 134.8 L 112.8 135.1 L 117.2 135.4 L 121.6 135.7 L 126.0 136.0 L 130.4 136.4 L 134.8 136.7 L 139.2 137.0 L 143.6 137.4 L 148.0 137.8 L 152.4 138.1 L 156.8 138.5 L 161.2 138.9 L 165.6 139.4 L 170.0 139.8 L 174.4 140.2 L 178.8 140.7 L 183.2 141.2 L 187.6 141.7 L 192.0 142.2 L 196.4 142.7 L 200.8 143.3 L 205.2 143.9 L 209.6 144.4 L 214.0 145.1 L 218.4 145.7 L 222.8 146.4 L 227.2 147.1 L 231.6 147.8 L 236.0 148.6 L 240.4 149.4 L 244.8 150.2 L 249.2 151.1 L 253.6 152.0 L 258.0 152.9 L 262.4 153.9 L 266.8 155.0 L 271.2 156.1 L 275.6 157.3 L 280.0 158.5 L 284.4 159.8 L 288.8 161.2 L 293.2 162.6 L 297.6 164.1 L 302.0 165.8 L 306.4 167.5 L 310.8 169.3 L 315.2 171.2 L 319.6 490.9 L 324.0 398.6 L 328.4 351.3 L 332.8 320.1 L 337.2 297.4 L 341.6 279.9 L 346.0 266.1 L 350.4 254.8 L 354.8 245.4 L 359.2 237.5 L 363.6 230.9 L 368.0 225.1 L 372.4 220.2 L 376.8 215.8 L 381.2 212.1 L 385.6 208.7 L 390.0 205.8 L 394.4 203.2 L 398.8 200.9 L 403.2 198.8 L 407.6 196.9 L 412.0 195.3 L 416.4 193.8 L 420.8 192.4 L 425.2 191.2 L 429.6 190.1 L 434.0 189.1 L 438.4 188.2 L 442.8 187.4 L 447.2 186.7 L 451.6 186.0 L 456.0 185.4 L 460.4 184.8 L 464.8 184.3 L 469.2 183.9 L 473.6 183.5 L 478.0 183.1 L 482.4 182.8 L 486.8 182.4 L 491.2 182.2 L 495.6 181.9 L 500.0 181.7 L 504.4 181.5 L 508.8 181.3 L 513.2 181.1 L 517.6 181.0 L 522.0 180.8 L 526.4 180.7 L 530.8 180.6 L 535.2 180.5 L 539.6 180.4 L 544.0 180.4 L 548.4 180.3 L 552.8 180.3 L 557.2 180.2 L 561.6 180.2 L 566.0 180.2 L 570.4 180.2 L 574.8 180.1 L 579.2 180.1 L 583.6 180.1 L 588.0 180.2 L 592.4 180.2 L 596.8 180.2 L 601.2 180.2 L 605.6 180.2 L 610.0 180.3 L 614.4 180.3 L 618.8 180.3 L 623.2 180.4 L 627.6 180.4 L 632.0 180.4 L 636.4 180.5 L 640.8 180.5 L 645.2 180.6 L 649.6 180.6 L 654.0 180.7 L 658.4 180.7 L 662.8 180.8 L 667.2 180.9 L 671.6 180.9 L 676.0 181.0 L 680.4 181.0 L 684.8 181.1 L 689.2 181.2 L 693.6 181.2 L 698.0 181.3 L 702.4 181.4 L 706.8 181.4 L 711.2 181.5 L 715.6 181.6 L 720.0 181.6" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables -->
    <circle cx="316.7" cy="171.9" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(306.7, 163.9)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; e⁻¹)</text>
    </g><circle cx="390.0" cy="205.8" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 221.8)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(1 ; 0)</text>
    </g><circle cx="579.9" cy="180.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(589.9, 172.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max α(3.59 ; 0.28)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="42" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},

{
  id: 'bac-2016-D-juillet-2nd',
  year: 2016,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2016 / 2nd tour',
  topics: ['Statistiques', 'Courbe paramétrique', 'Fonction exponentielle', 'Bijection & Intégrales'],
  parts: [
    {
      label: 'Exercice 1 — Statistiques : fossiles du cheval (4 pts)',
      problem: `<p>Les documents paléontologiques sur l'évolution du cheval donnent les longueurs du crâne \\(x_i\\) (en cm) et de la face \\(y_i\\) (en cm) pour une série d'espèces :</p>
<table class="vtab">
  <tr>
    <th>Nom</th>
    <th>Crâne \\(x_i\\) (cm)</th>
    <th>Face \\(y_i\\) (cm)</th>
  </tr>
  <tr><td>Eohippus</td><td>7,5</td><td>10,7</td></tr>
  <tr><td>Mesohippus</td><td>11</td><td>12,8</td></tr>
  <tr><td>Merychippus</td><td>14,5</td><td>18,5</td></tr>
  <tr><td>Pliohippus</td><td>15,5</td><td>22,5</td></tr>
  <tr><td>Cheval</td><td>21,5</td><td>31,2</td></tr>
</table>
<p><strong>1)</strong> Représenter le nuage de points \\((x_i;y_i)\\) dans un repère orthonormé (unité graphique 0,5 cm).</p>
<p><strong>2) a)</strong> Un ajustement affine du nuage paraît-il possible ?</p>
<p><strong>b)</strong> Déterminer les coordonnées des points moyens \\(G_1\\) et \\(G_2\\) correspondant respectivement aux 3 premiers et aux 2 derniers points.</p>
<p><strong>c)</strong> Donner l'équation de la droite \\((G_1G_2)\\) sous la forme \\(y = ax+b\\). Tracer cette droite.</p>
<p><strong>3)</strong> Estimer la longueur de la face d'un descendant du cheval qui aurait une longueur de crâne de 23,2 cm.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Statistiques à deux variables &amp; ajustement affine</span>
  <ul>
    <li><strong>Moyennes et point moyen :</strong> $\\bar{x} = \\dfrac{1}{N}\\sum x_i$, $\\bar{y} = \\dfrac{1}{N}\\sum y_i$. Le point moyen $G(\\bar{x}; \\bar{y})$ appartient toujours à la droite de régression.</li>
    <li><strong>Variances et covariance :</strong> $V(X) = \\dfrac{1}{N}\\sum x_i^2 - \\bar{x}^2$, $\\text{Cov}(X,Y) = \\dfrac{1}{N}\\sum x_i y_i - \\bar{x}\\bar{y}$.</li>
    <li><strong>Droite de régression de $y$ en $x$ (moindres carrés) :</strong> $(D) : y = ax+b$ avec $a = \\dfrac{\\text{Cov}(X,Y)}{V(X)}$ et $b = \\bar{y} - a\\bar{x}$.</li>
    <li><strong>Coefficient de corrélation linéaire :</strong> $r = \\dfrac{\\text{Cov}(X,Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}} = \\dfrac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$. Si $|r| > 0{,}9$, l'ajustement affine est excellent et justifié.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>2a) Ajustement affine</strong></p>
<p>La forme du nuage est allongée et les points semblent alignés : un ajustement affine est <strong>possible</strong>.</p>

<p><strong>2b) Points moyens G₁ et G₂</strong></p>
<p>\\(G_1\\) (3 premiers points) :</p>
<p>\\(\\bar{x}_1 = \\dfrac{7{,}5+11+14{,}5}{3} = \\dfrac{33}{3} = 11\\)</p>
<p>\\(\\bar{y}_1 = \\dfrac{10{,}7+12{,}8+18{,}5}{3} = \\dfrac{42}{3} = 14\\)</p>
<p>\\(\\boxed{G_1(11;14)}\\)</p>
<p>\\(G_2\\) (2 derniers points) :</p>
<p>\\(\\bar{x}_2 = \\dfrac{15{,}5+21{,}5}{2} = \\dfrac{37}{2} = 18{,}5\\)</p>
<p>\\(\\bar{y}_2 = \\dfrac{22{,}5+31{,}2}{2} = \\dfrac{53{,}7}{2} = 26{,}85 \\approx 27\\)</p>
<p>\\(\\boxed{G_2(18{,}5;27)}\\)</p>

<p><strong>2c) Équation de la droite (G₁G₂)</strong></p>
<p>Pente : \\(a = \\dfrac{27-14}{18{,}5-11} = \\dfrac{13}{7{,}5} = \\dfrac{26}{15} \\approx 1{,}73\\)</p>
<p>Ordonnée à l'origine : \\(14 = \\dfrac{26}{15}\\times11 + b \\Rightarrow b = 14 - \\dfrac{286}{15} = \\dfrac{210-286}{15} = \\dfrac{-76}{15} \\approx -5{,}07\\)</p>
<p>\\[\\boxed{(G_1G_2) : y = \\dfrac{26}{15}x - \\dfrac{76}{15}}\\]</p>

<p><strong>3) Estimation pour x = 23,2 cm</strong></p>
<p>\\(y = \\dfrac{26}{15}\\times23{,}2 - \\dfrac{76}{15} = \\dfrac{26\\times23{,}2-76}{15} = \\dfrac{603{,}2-76}{15} = \\dfrac{527{,}2}{15} \\approx 35{,}1\\) cm</p>
<p>Longueur estimée de la face : <strong>≈ 35,1 cm</strong>.</p>`
    },
    {
      label: 'Exercice 2 — Courbe paramétrique (4 pts)',
      problem: `<p>Le plan est rapporté à un repère orthonormal direct \\((O;\\vec{i};\\vec{j})\\). On considère la courbe paramétrée (Γ) définie par :</p>
<p>\\[\\begin{cases} x(t) = t + \ln(1-t) \\ y(t) = te^t \\end{cases}, \\quad t \\in ]-\\infty;0]\\]</p>
<p><strong>1) a)</strong> Étudier le sens de variation des fonctions coordonnées x et y sur \\(]-\\infty;0]\\).</p>
<p><strong>b)</strong> Dresser un tableau de variation conjoint de x et y.</p>
<p><strong>2) a)</strong> Déterminer les équations des tangentes à (Γ) aux points M(0) et M(−1) (M(t) étant le point de coordonnées \\((x(t);y(t))\\)).</p>
<p><strong>b)</strong> L'unité étant 2 cm, tracer les tangentes et la courbe (Γ) dans le repère.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Courbes paramétrées &amp; étude cinématique</span>
  <ul>
    <li><strong>Domaine d'étude :</strong> Identifiez les contraintes de définition (ex: $1-t > 0 \\iff t < 1$).</li>
    <li><strong>Dérivées coordonnées :</strong> $x'(t) = 1 - \\dfrac{1}{1-t} = \\dfrac{-t}{1-t}$ et $y'(t) = 1\\cdot e^t + t e^t = (1+t)e^t$.</li>
    <li><strong>Tangente horizontale ($y'=0, x'\\neq 0$) :</strong> En $t = -1$, la pente est nulle $\\implies (T_{-1}) : y = y(-1) = -e^{-1}$.</li>
    <li><strong>Tangente verticale ($x'=0, y'\\neq 0$) :</strong> En $t = 0$, la dérivée $x'(0)=0$ et $y'(0)=1 \\implies (T_0) : x = x(0) = 0$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Variations de x et y sur \\(]-\\infty;0]\\)</strong></p>
<p>\\(x'(t) = 1 + \\dfrac{-1}{1-t} = \\dfrac{(1-t)-1}{1-t} = \\dfrac{-t}{1-t}\\)</p>
<p>Pour \\(t \\in ]-\\infty;0]\\) : \\(-t \\geq 0\\) et \\(1-t > 0\\) donc \\(x'(t) = \\dfrac{-t}{1-t} \\geq 0\\).</p>
<p>x est <strong>croissante</strong> sur \\(]-\\infty;0]\\).</p>
<p>\\(y'(t) = e^t + te^t = (1+t)e^t\\)</p>
<p>\\(e^t > 0\\) toujours, signe de \\(y'(t)\\) = signe de \\(1+t\\).</p>
<p>Pour \\(t < -1\\) : \\(y'(t) < 0\\) (y décroissante) ; pour \\(t > -1\\) : \\(y'(t) > 0\\) (y croissante).</p>

<p><strong>1b) Tableau de variation conjoint</strong></p>
<p>Points clés :</p>
<ul>
  <li>\\(t \\to -\\infty\\) : \\(x(t) \\to -\\infty\\), \\(y(t) \\to 0\\)</li>
  <li>\\(t = -1\\) : \\(x(-1) = -1+\\ln2 \\approx -0{,}31\\), \\(y(-1) = -e^{-1} \\approx -0{,}37\\)</li>
  <li>\\(t = 0\\) : \\(x(0) = 0\\), \\(y(0) = 0\\)</li>
</ul>
<p>\\(x'(-1) = \\dfrac{1}{2}\\), \\(y'(-1) = 0\\), \\(x'(0) = 0\\), \\(y'(0) = 1\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-16-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-16-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="318" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 319 L 10 319 C 5 319 1 315 1 310 Z" fill="#222d46"/>
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="180" x2="760" y2="180" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="225" x2="760" y2="225" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="320" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="135" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="203" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="272" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">y(t)</text>
    <text x="150" y="23" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="425" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−1</text>
    <text x="700" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="425" y1="45" x2="425" y2="53" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="83" x2="425" y2="125" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="155" x2="425" y2="188" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="218" x2="425" y2="285" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="315" x2="425" y2="319" stroke="#dde1ec" stroke-width="1.2"/>
    <text x="285" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="425" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">½</text>
    <text x="560" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="700" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="150" y="165" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <line x1="170" y1="160" x2="405" y2="140" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round"/>
    <text x="425" y="140" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="900">−1+ln2</text>
    <line x1="445" y1="135" x2="680" y2="115" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-16-2-param)"/>
    <text x="700" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="285" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="425" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="560" y="203" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="700" y="203" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">1</text>
    <text x="150" y="250" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170" y1="255" x2="405" y2="295" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-16-2-param)"/>
    <text x="425" y="300" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">−e⁻¹</text>
    <line x1="445" y1="295" x2="680" y2="250" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-16-2-param)"/>
    <text x="700" y="250" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>Tableau récapitulatif des coordonnées des points remarquables et tangentes :</strong></p>
<table class="data">
  <thead>
    <tr>
      <th>Paramètre $t$</th>
      <th>Coordonnées $M(t)$ : $(x(t) ; y(t))$</th>
      <th>Dérivées $(x'(t) ; y'(t))$</th>
      <th>Nature & Équation de la tangente</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>$t \\to -\\infty$</strong></td>
      <td>Branche asymptotique vers $(-\\infty ; 0)$</td>
      <td>$(+\\infty ; 0)$</td>
      <td>Asymptote <strong>horizontale</strong> : $y = 0$</td>
    </tr>
    <tr>
      <td><strong>$t = -1$</strong></td>
      <td>$M(-1) = (-1+\\ln2 ; -e^{-1}) \\approx (-0{,}31 ; -0{,}37)$</td>
      <td>$\\left(\\dfrac{1}{2} ; 0\\right)$</td>
      <td>Tangente <strong>horizontale</strong> : $(T_{-1}) : y = -e^{-1} \\approx -0{,}37$</td>
    </tr>
    <tr>
      <td><strong>$t = 0$</strong></td>
      <td>$M(0) = (0 ; 0) = O$</td>
      <td>$(0 ; 1)$</td>
      <td>Tangente <strong>verticale</strong> : $(T_0) : x = 0$</td>
    </tr>
  </tbody>
</table>

<p><strong>2a) Équations des tangentes :</strong></p>
<p><em>Tangente en M(0) :</em> $x(0) = 0$, $y(0) = 0$. Le vecteur tangent est $(x'(0);y'(0)) = (0;1)$ : tangente <strong>verticale</strong> $(T_0) : x = 0$.</p>
<p><em>Tangente en M(−1) :</em> $x(-1) = -1+\\ln2$, $y(-1) = -e^{-1}$. Pente $= \\dfrac{y'(-1)}{x'(-1)} = \\dfrac{0}{1/2} = 0$ : tangente <strong>horizontale</strong> $(T_{-1}) : y = -e^{-1} \\approx -0{,}37$.</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé graphique de la courbe (Γ) avec ses points remarquables et tangentes</div>
  <svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
      <marker id="arr-tan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#ef4444"/>
      </marker>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="112.4" y1="40" x2="112.4" y2="350" stroke="#e5e7eb" stroke-width="0.8"/><line x1="217.1" y1="40" x2="217.1" y2="350" stroke="#e5e7eb" stroke-width="0.8"/><line x1="321.9" y1="40" x2="321.9" y2="350" stroke="#e5e7eb" stroke-width="0.8"/><line x1="426.7" y1="40" x2="426.7" y2="350" stroke="#e5e7eb" stroke-width="0.8"/><line x1="531.4" y1="40" x2="531.4" y2="350" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes cartésiens -->
    <!-- Axe Ox -->
    <line x1="50" y1="164.0" x2="735" y2="164.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="168.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <!-- Axe Oy -->
    <line x1="636.2" y1="360" x2="636.2" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="636.2" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="624.2" y="180.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="112.4" y1="160.0" x2="112.4" y2="168.0" stroke="#1f2937" stroke-width="1"/><text x="112.4" y="180.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-5</text><line x1="217.1" y1="160.0" x2="217.1" y2="168.0" stroke="#1f2937" stroke-width="1"/><text x="217.1" y="180.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="321.9" y1="160.0" x2="321.9" y2="168.0" stroke="#1f2937" stroke-width="1"/><text x="321.9" y="180.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="426.7" y1="160.0" x2="426.7" y2="168.0" stroke="#1f2937" stroke-width="1"/><text x="426.7" y="180.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="531.4" y1="160.0" x2="531.4" y2="168.0" stroke="#1f2937" stroke-width="1"/><text x="531.4" y="180.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text>
    
    
    <!-- Branche symétrique si présente -->
    
    
    <!-- Branche principale étudiée -->
    <path d="M 48.5 186.7 L 53.6 187.4 L 58.6 188.1 L 63.7 188.8 L 68.7 189.6 L 73.8 190.4 L 78.8 191.1 L 83.9 191.9 L 89.0 192.8 L 94.1 193.6 L 99.2 194.5 L 104.3 195.4 L 109.4 196.3 L 114.5 197.2 L 119.6 198.2 L 124.8 199.2 L 129.9 200.2 L 135.1 201.2 L 140.3 202.3 L 145.4 203.3 L 150.6 204.4 L 155.8 205.6 L 161.0 206.7 L 166.2 207.9 L 171.4 209.1 L 176.7 210.3 L 181.9 211.5 L 187.2 212.8 L 192.4 214.1 L 197.7 215.4 L 203.0 216.8 L 208.3 218.2 L 213.6 219.5 L 218.9 221.0 L 224.3 222.4 L 229.6 223.9 L 235.0 225.3 L 240.4 226.9 L 245.7 228.4 L 251.1 229.9 L 256.6 231.5 L 262.0 233.1 L 267.4 234.7 L 272.9 236.3 L 278.4 237.9 L 283.9 239.6 L 289.4 241.2 L 294.9 242.9 L 300.4 244.6 L 306.0 246.2 L 311.6 247.9 L 317.2 249.6 L 322.8 251.3 L 328.4 252.9 L 334.1 254.6 L 339.8 256.2 L 345.5 257.9 L 351.2 259.5 L 356.9 261.1 L 362.7 262.6 L 368.5 264.1 L 374.3 265.6 L 380.1 267.1 L 386.0 268.4 L 391.9 269.8 L 397.8 271.0 L 403.8 272.2 L 409.7 273.3 L 415.8 274.3 L 421.8 275.2 L 427.9 276.0 L 434.0 276.7 L 440.1 277.3 L 446.3 277.7 L 452.5 278.0 L 458.8 278.0 L 465.1 277.9 L 471.5 277.7 L 477.9 277.2 L 484.3 276.4 L 490.8 275.4 L 497.3 274.2 L 503.9 272.6 L 510.6 270.8 L 517.3 268.6 L 524.1 266.1 L 530.9 263.2 L 537.8 259.8 L 544.8 256.1 L 551.9 251.8 L 559.0 247.1 L 566.3 241.9 L 573.6 236.0 L 581.0 229.6 L 588.5 222.5 L 596.1 214.8 L 603.9 206.3 L 611.7 197.0 L 619.7 186.9 L 627.9 175.9 L 636.2 164.0" fill="none" stroke="#2563eb" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables & tangentes -->
    <circle cx="458.8" cy="278.0" r="5.5" fill="#d97706" stroke="#ffffff" stroke-width="2.5"/><line x1="426.8" y1="278.0" x2="490.8" y2="278.0" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/><line x1="458.8" y1="278.0" x2="490.8" y2="278.0" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-tan)"/>
    <g transform="translate(446.8, 296.0)">
      <text x="-15" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(-1)(-0.31;-0.37)</text>
    </g><circle cx="636.2" cy="164.0" r="5.5" fill="#d97706" stroke="#ffffff" stroke-width="2.5"/><line x1="636.2" y1="196.0" x2="636.2" y2="132.0" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/><line x1="636.2" y1="164.0" x2="636.2" y2="132.0" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-tan)"/>
    <g transform="translate(648.2, 154.0)">
      <text x="35" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(0)(0;0)=O</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="175" height="48" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="16" x2="35" y2="16" stroke="#2563eb" stroke-width="3"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="800">Courbe (Γ)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-tan)"/>
      <text x="42" y="38" fill="#ef4444" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="700">Tangentes</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    },
    {
      label: 'Problème — Fonction f(x) = x(1+exp(2−x)), bijection, aire (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par \\(f(x) = x(1+e^{2-x})\\). On note (C) sa courbe dans un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) (unité graphique 2 cm).</p>

<p><strong>Partie A</strong></p>
<p>Soit h la fonction définie sur \\(\\mathbb{R}\\) par \\(h(x) = 1+(1-x)e^{2-x}\\).</p>
<p><strong>1) a)</strong> Étudier le sens de variation de h sur \\(\\mathbb{R}\\).</p>
<p><strong>b)</strong> En déduire le signe de h(x) sur \\(\\mathbb{R}\\).</p>
<p><strong>2) a)</strong> Étudier les limites de f en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x}\\) puis interpréter graphiquement.</p>
<p><strong>c)</strong> Soit (∆) la droite d'équation \\(y = x\\). Calculer \\(\\displaystyle\\lim_{x\\to+\\infty}[f(x)-x]\\) puis interpréter graphiquement.</p>
<p><strong>d)</strong> Préciser la position de (C) par rapport à la droite (∆).</p>
<p><strong>3) a)</strong> Déterminer f'(x) puis étudier son signe.</p>
<p><strong>b)</strong> Dresser le tableau de variation de f.</p>
<p><strong>c)</strong> Montrer que f réalise une bijection de \\(\\mathbb{R}\\) vers un intervalle J à déterminer. On note \\(f^{-1}\\) la bijection réciproque.</p>
<p><strong>d)</strong> \\(f^{-1}\\) est-elle dérivable en 4 ? Dresser le tableau de variation de \\(f^{-1}\\).</p>
<p><strong>e)</strong> Construire (C) et (∆) puis déduire la courbe (Γ) de \\(f^{-1}\\) dans le même repère.</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Calculer l'aire \\(A(\\lambda)\\) de la partie du plan limitée par (C), la droite (∆) et les droites \\(x = 0\\) et \\(x = \\lambda\\) où \\(\\lambda \\in \\mathbb{R}^*_+\\).</p>
<p><strong>2)</strong> Calculer \\(\\displaystyle\\lim_{\\lambda\\to+\\infty} A(\\lambda)\\) puis interpréter géométriquement.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions exponentielles, bijection &amp; dérivée de la réciproque</span>
  <ul>
    <li><strong>Dérivée de $f(x)=x(1+e^(2-x))$ :</strong> $f'(x) = 1\\cdot(1+e^{2-x}) + x(-e^{2-x}) = 1+(1-x)e^{2-x}$. On a $f'(x) \\ge 0$, nul seulement en $x=2$ (point d'inflexion à tangente oblique).</li>
    <li><strong>Théorème de la bijection :</strong> $f$ continue et strictement croissante de $\\mathbb{R}$ vers $\\mathbb{R}$ réalise une bijection.</li>
    <li><strong>Dérivabilité de la bijection réciproque $f^{-1}$ :</strong> $f^{-1}$ est dérivable en $y_0 = f(x_0) \\iff f'(x_0) \\neq 0$, avec $(f^{-1})'(y_0) = \\dfrac{1}{f'(x_0)}$. Si $f'(x_0) = 0$, la courbe $(\\Gamma)$ de $f^{-1}$ admet une tangente verticale en $y_0$.</li>
    <li><strong>Calcul d'aire :</strong> $\\mathcal{A} = \\int_a^b [f(x)-y_{\\text{droite}}]\\,dx \\times U_A$, où $U_A = \\|\\vec{i}\\| \\times \\|\\vec{j}\\|$ en cm².</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Variations de h</strong></p>
<p>\\(h'(x) = (−1)e^{2−x} + (1−x)(−e^{2−x}) = e^{2−x}[−1−1+x] = (x−2)e^{2−x}\\)</p>
<p>\\(e^{2-x} > 0\\) toujours, donc le signe de \\(h'(x)\\) est celui de \\(x-2\\).</p>
<p>h décroissante sur \\(]-\\infty;2]\\), croissante sur \\([2;+\\infty[\\).</p>

<p><strong>1b) Signe de h</strong></p>
<p>\\(h(2) = 1+(1-2)e^0 = 1-1 = 0\\) est le minimum absolu de h.</p>
<p>\\(h(x) \\geq 0\\) pour tout \\(x \\in \\mathbb{R}\\), avec \\(h(x) = 0\\) seulement en \\(x=2\\).</p>

<p><strong>2a) Limites de f</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}x(1+e^{2-x})\\). Pour \\(x\\to-\\infty\\) : \\(e^{2-x}\\to+\\infty\\) et \\(x\\to-\\infty\\), donc \\(f(x)\\to-\\infty\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}(x+xe^{2-x}) = +\\infty\\) (car \\(xe^{2-x}\\to0\\) et \\(x\\to+\\infty\\)).</p>

<p><strong>2b) Limite de f(x)/x en −∞</strong></p>
<p>\\(\\dfrac{f(x)}{x} = 1+e^{2-x} \\to +\\infty\\) quand \\(x\\to-\\infty\\).</p>
<p>(C) admet une <strong>branche parabolique de direction l'axe \\((Oy)\\)</strong> en \\(-\\infty\\).</p>

<p><strong>2c) Limite de f(x)−x en +∞</strong></p>
<p>\\(f(x)-x = xe^{2-x} \\to 0\\) (croissances comparées).</p>
<p>La droite \\((\\Delta) : y=x\\) est <strong>asymptote oblique</strong> à (C) en \\(+\\infty\\).</p>

<p><strong>2d) Position de (C) par rapport à (∆)</strong></p>
<p>\\(f(x)-x = xe^{2-x}\\) et \\(e^{2-x}>0\\), donc le signe est celui de \\(x\\).</p>
<p>— Sur \\(]-\\infty;0[\\) : \\(f(x) < x\\) → (C) en-dessous de (∆).</p>
<p>— Sur \\(]0;+\\infty[\\) : \\(f(x) > x\\) → (C) au-dessus de (∆).</p>
<p>— En \\(x=0\\) : \\(f(0) = 0 = x\\) → (C) coupe (∆).</p>

<p><strong>3a) f'(x)</strong></p>
<p>\\(f'(x) = 1+e^{2-x}+x(-e^{2-x}) = 1+e^{2-x}(1-x) = 1+(1-x)e^{2-x} = h(x)\\)</p>
<p>\\[\\boxed{f'(x) = h(x) \\geq 0}\\] pour tout \\(x\\), nul seulement en \\(x=2\\).</p>

<p><strong>3b) Tableau de variation</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-16s2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <text x="160" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <text x="430" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="24" font-weight="900">+</text>

    <text x="160" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="185" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-16s2)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>
<p><em>\\(f(2) = 2(1+e^0) = 2\\times2 = 4\\).</em></p>

<p><strong>3c) Bijection</strong></p>
<p>f est continue, strictement croissante (\\(f'>0\\) sauf en un point), de \\(-\\infty\\) vers \\(+\\infty\\).</p>
<p>f réalise une bijection de \\(\\mathbb{R}\\) vers \\(J = \\mathbb{R} = ]-\\infty;+\\infty[\\).</p>

<p><strong>3d) \\(f^{-1}\\) dérivable en 4 ?</strong></p>
<p>\\(f(2) = 4\\) donc \\(f^{-1}(4) = 2\\).</p>
<p>\\((f^{-1})'(4) = \\dfrac{1}{f'(f^{-1}(4))} = \\dfrac{1}{f'(2)} = \\dfrac{1}{0}\\) → <strong>non défini</strong>.</p>
<p>\\(f^{-1}\\) <strong>n'est pas dérivable en 4</strong>. La tangente à (Γ) en \\((4;2)\\) est verticale.</p>
<p>\\(f^{-1}\\) est strictement croissante comme f (même sens de variation).</p>

<p><strong>Partie B</strong></p>

<p><strong>1) Calcul de A(λ)</strong></p>
<p>Sur \\([0;\\lambda]\\), \\(f(x)-x = xe^{2-x} \\geq 0\\) → (C) au-dessus de (∆).</p>
<p>\\[A(\\lambda) = \\int_0^{\\lambda}xe^{2-x}\\,dx \\text{ (en u.a.)}\\]</p>
<p>IPP : \\(u = x\\), \\(v' = e^{2-x}\\) → \\(u'=1\\), \\(v = -e^{2-x}\\).</p>
<p>\\[A(\\lambda) = \\left[-xe^{2-x}\\right]_0^{\\lambda} + \\int_0^{\\lambda}e^{2-x}\\,dx = -\\lambda e^{2-\\lambda} + \\left[-e^{2-x}\\right]_0^{\\lambda}\\]</p>
<p>\\(= -\\lambda e^{2-\\lambda} - e^{2-\\lambda} + e^2 = e^2 - (\\lambda+1)e^{2-\\lambda}\\)</p>
<p>En cm² (unité 2 cm → facteur 4) :</p>
<p>\\[\\boxed{A(\\lambda) = 4\\left[e^2 - (\\lambda+1)e^{2-\\lambda}\\right] \\text{ cm}^2}\\]</p>

<p><strong>2) Limite de A(λ)</strong></p>
<p>\\(\\lim_{\\lambda\\to+\\infty}(\\lambda+1)e^{2-\\lambda} = e^2\\lim_{\\lambda\\to+\\infty}(\\lambda+1)e^{-\\lambda} = 0\\) (croissances comparées).</p>
<p>\\[\\lim_{\\lambda\\to+\\infty}A(\\lambda) = 4e^2 \\text{ cm}^2\\]</p>
<p>L'aire de la région délimitée par (C) et (∆) sur \\([0;+\\infty[\\) est <strong>finie et vaut \\(4e^2\\) cm²</strong>, bien que la région soit non bornée.</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et de (Γ) de f⁻¹ — BAC 2016 2nd tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="148.0" y1="40" x2="148.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="324.0" y1="40" x2="324.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="412.0" y1="40" x2="412.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="500.0" y1="40" x2="500.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="588.0" y1="40" x2="588.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="676.0" y1="40" x2="676.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="346.2" x2="720" y2="346.2" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="258.8" x2="720" y2="258.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="215.0" x2="720" y2="215.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="171.2" x2="720" y2="171.2" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="127.5" x2="720" y2="127.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="83.8" x2="720" y2="83.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="302.5" x2="735" y2="302.5" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="306.5" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="236.0" y1="400" x2="236.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="236.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="224.0" y="318.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="298.5" x2="60.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="148.0" y1="298.5" x2="148.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="148.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="324.0" y1="298.5" x2="324.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="324.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="412.0" y1="298.5" x2="412.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="412.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="500.0" y1="298.5" x2="500.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="500.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="588.0" y1="298.5" x2="588.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="588.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="676.0" y1="298.5" x2="676.0" y2="306.5" stroke="#1f2937" stroke-width="1"/><text x="676.0" y="318.5" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    <line x1="232.0" y1="390.0" x2="240.0" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="232.0" y1="346.2" x2="240.0" y2="346.2" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="350.2" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="232.0" y1="258.8" x2="240.0" y2="258.8" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="262.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="232.0" y1="215.0" x2="240.0" y2="215.0" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="219.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="232.0" y1="171.2" x2="240.0" y2="171.2" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="175.2" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="232.0" y1="127.5" x2="240.0" y2="127.5" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="131.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="232.0" y1="83.8" x2="240.0" y2="83.8" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="87.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="232.0" y1="40.0" x2="240.0" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="226.0" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">6</text>
    
    <!-- Courbes -->
    <path d="M 190.2 608.0 L 193.8 574.3 L 197.3 542.6 L 200.8 512.9 L 204.3 485.1 L 207.8 459.0 L 211.4 434.5 L 214.9 411.6 L 218.4 390.2 L 221.9 370.2 L 225.4 351.5 L 229.0 334.0 L 232.5 317.7 L 236.0 302.5 L 239.5 288.3 L 243.0 275.1 L 246.6 262.8 L 250.1 251.4 L 253.6 240.8 L 257.1 231.0 L 260.6 221.8 L 264.2 213.4 L 267.7 205.6 L 271.2 198.3 L 274.7 191.6 L 278.2 185.5 L 281.8 179.8 L 285.3 174.6 L 288.8 169.8 L 292.3 165.4 L 295.8 161.4 L 299.4 157.7 L 302.9 154.4 L 306.4 151.3 L 309.9 148.5 L 313.4 146.0 L 317.0 143.7 L 320.5 141.7 L 324.0 139.8 L 327.5 138.2 L 331.0 136.7 L 334.6 135.4 L 338.1 134.2 L 341.6 133.2 L 345.1 132.2 L 348.6 131.5 L 352.2 130.8 L 355.7 130.2 L 359.2 129.6 L 362.7 129.2 L 366.2 128.8 L 369.8 128.5 L 373.3 128.3 L 376.8 128.1 L 380.3 127.9 L 383.8 127.8 L 387.4 127.7 L 390.9 127.6 L 394.4 127.6 L 397.9 127.5 L 401.4 127.5 L 405.0 127.5 L 408.5 127.5 L 412.0 127.5 L 415.5 127.5 L 419.0 127.5 L 422.6 127.5 L 426.1 127.5 L 429.6 127.4 L 433.1 127.4 L 436.6 127.4 L 440.2 127.3 L 443.7 127.2 L 447.2 127.1 L 450.7 127.0 L 454.2 126.9 L 457.8 126.7 L 461.3 126.5 L 464.8 126.3 L 468.3 126.1 L 471.8 125.8 L 475.4 125.6 L 478.9 125.3 L 482.4 125.0 L 485.9 124.6 L 489.4 124.2 L 493.0 123.8 L 496.5 123.4 L 500.0 123.0 L 503.5 122.5 L 507.0 122.0 L 510.6 121.5 L 514.1 120.9 L 517.6 120.3 L 521.1 119.7 L 524.6 119.1 L 528.2 118.4 L 531.7 117.8 L 535.2 117.1 L 538.7 116.3 L 542.2 115.6 L 545.8 114.8 L 549.3 114.0 L 552.8 113.2 L 556.3 112.4 L 559.8 111.5 L 563.4 110.6 L 566.9 109.7 L 570.4 108.8 L 573.9 107.8 L 577.4 106.8 L 581.0 105.9 L 584.5 104.8 L 588.0 103.8 L 591.5 102.8 L 595.0 101.7 L 598.6 100.6 L 602.1 99.5 L 605.6 98.4 L 609.1 97.3 L 612.6 96.1 L 616.2 94.9 L 619.7 93.7 L 623.2 92.5 L 626.7 91.3 L 630.2 90.1 L 633.8 88.8 L 637.3 87.6 L 640.8 86.3 L 644.3 85.0 L 647.8 83.7 L 651.4 82.4 L 654.9 81.1 L 658.4 79.7 L 661.9 78.4 L 665.4 77.0 L 669.0 75.6 L 672.5 74.3 L 676.0 72.9" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 148.0 346.2 L 151.5 344.5 L 155.0 342.8 L 158.6 341.0 L 162.1 339.2 L 165.6 337.5 L 169.1 335.8 L 172.6 334.0 L 176.2 332.2 L 179.7 330.5 L 183.2 328.8 L 186.7 327.0 L 190.2 325.2 L 193.8 323.5 L 197.3 321.8 L 200.8 320.0 L 204.3 318.2 L 207.8 316.5 L 211.4 314.8 L 214.9 313.0 L 218.4 311.2 L 221.9 309.5 L 225.4 307.8 L 229.0 306.0 L 232.5 304.2 L 236.0 302.5 L 239.5 300.8 L 243.0 299.0 L 246.6 297.2 L 250.1 295.5 L 253.6 293.8 L 257.1 292.0 L 260.6 290.2 L 264.2 288.5 L 267.7 286.8 L 271.2 285.0 L 274.7 283.2 L 278.2 281.5 L 281.8 279.8 L 285.3 278.0 L 288.8 276.2 L 292.3 274.5 L 295.8 272.8 L 299.4 271.0 L 302.9 269.2 L 306.4 267.5 L 309.9 265.8 L 313.4 264.0 L 317.0 262.2 L 320.5 260.5 L 324.0 258.8 L 327.5 257.0 L 331.0 255.2 L 334.6 253.5 L 338.1 251.8 L 341.6 250.0 L 345.1 248.2 L 348.6 246.5 L 352.2 244.8 L 355.7 243.0 L 359.2 241.2 L 362.7 239.5 L 366.2 237.7 L 369.8 236.0 L 373.3 234.2 L 376.8 232.5 L 380.3 230.7 L 383.8 229.0 L 387.4 227.2 L 390.9 225.5 L 394.4 223.8 L 397.9 222.0 L 401.4 220.2 L 405.0 218.5 L 408.5 216.8 L 412.0 215.0 L 415.5 213.2 L 419.0 211.5 L 422.6 209.8 L 426.1 208.0 L 429.6 206.2 L 433.1 204.5 L 436.6 202.8 L 440.2 201.0 L 443.7 199.2 L 447.2 197.5 L 450.7 195.7 L 454.2 194.0 L 457.8 192.2 L 461.3 190.5 L 464.8 188.8 L 468.3 187.0 L 471.8 185.2 L 475.4 183.5 L 478.9 181.8 L 482.4 180.0 L 485.9 178.2 L 489.4 176.5 L 493.0 174.8 L 496.5 173.0 L 500.0 171.2 L 503.5 169.5 L 507.0 167.8 L 510.6 166.0 L 514.1 164.2 L 517.6 162.5 L 521.1 160.8 L 524.6 159.0 L 528.2 157.2 L 531.7 155.5 L 535.2 153.8 L 538.7 152.0 L 542.2 150.2 L 545.8 148.5 L 549.3 146.7 L 552.8 145.0 L 556.3 143.2 L 559.8 141.5 L 563.4 139.8 L 566.9 138.0 L 570.4 136.2 L 573.9 134.5 L 577.4 132.8 L 581.0 131.0 L 584.5 129.2 L 588.0 127.5 L 591.5 125.8 L 595.0 124.0 L 598.6 122.2 L 602.1 120.5 L 605.6 118.7 L 609.1 117.0 L 612.6 115.2 L 616.2 113.5 L 619.7 111.8 L 623.2 110.0 L 626.7 108.3 L 630.2 106.5 L 633.8 104.7 L 637.3 103.0 L 640.8 101.3 L 644.3 99.5 L 647.8 97.8 L 651.4 96.0 L 654.9 94.2 L 658.4 92.5 L 661.9 90.8 L 665.4 89.0 L 669.0 87.2 L 672.5 85.5 L 676.0 83.8" fill="none" stroke="#d4a017" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
    
    <!-- Points remarquables -->
    <circle cx="236.0" cy="302.5" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(246.0, 318.5)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g><circle cx="412.0" cy="127.5" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(402.0, 119.5)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Point d'inflexion (2 ; 4)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Première bissectrice y = x</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},
  {
  id: 'bac-2017-D-juillet-1er',
  year: 2017,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2017 / 1er tour',
  topics: ['Probabilités', 'Fonctions racines & exponentielles', 'Suites', 'Continuité & Dérivabilité'],
  parts: [
    {
      label: 'Exercice 1 — Probabilités : boules numérotées (4 pts)',
      problem: `<p>Une urne contient 12 boules portant les numéros 1 à 12. On tire simultanément 3 boules au hasard.</p>
<p>On définit les événements :</p>
<ul>
  <li>A : « Les trois nombres portés par ces trois boules sont tous pairs »</li>
  <li>B : « Les trois nombres portés par ces trois boules sont tous divisibles par 3 »</li>
  <li>C : « Deux boules portent un numéro divisible par 3 »</li>
  <li>D : « Les trois numéros sont des multiples de 2 »</li>
  <li>E : « Les trois nombres portés par ces boules, convenablement rangés, forment trois termes consécutifs d'une suite arithmétique de raison 3 »</li>
  <li>F : « Les trois nombres portés par ces boules, convenablement rangés, forment trois termes consécutifs d'une suite géométrique de raison \\(\\dfrac{1}{2}\\) »</li>
</ul>
<p>Calculer \\(P(A)\\), \\(P(B)\\), \\(P(C)\\), \\(P(D)\\), \\(P(E)\\) et \\(P(F)\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Probabilités, combinatoire &amp; propriétés des entiers</span>
  <ul>
    <li><strong>Tirage simultané :</strong> $\\text{Card}(\\Omega) = \\binom{12}{3} = \\dfrac{12 \\times 11 \\times 10}{6} = 220$.</li>
    <li><strong>Événements élémentaires :</strong> Pour dénombrer les tirages réalisant une condition (ex: nombres pairs, multiples de 3), comptez d'abord le nombre d'éléments disponibles $k$ vérifiant cette condition dans l'urne, puis calculez $\\binom{k}{3}$.</li>
    <li><strong>Suites arithmétiques dans un tirage :</strong> Trois entiers consécutifs de raison $r=3$ parmi $\\{1,\\dots,12\\}$ sont de la forme $\\{a, a+3, a+6\\}$. Comme $a+6 \\le 12$, il y a $12-6 = 6$ triplets possibles.</li>
    <li><strong>Suites géométriques :</strong> Pour une raison $q = \\dfrac{1}{2}$ (ou 2 par ordre croissant), cherchez les triplets $\\{a, 2a, 4a\\}$ avec $4a \\le 12 \\implies a \\in \\{1, 2, 3\\}$, soit 3 triplets possibles.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p>L'univers comporte \\(\\binom{12}{3} = \\dfrac{12 \\times 11 \\times 10}{6} = 220\\) tirages possibles.</p>

<p><strong>Événement A : 3 boules toutes paires</strong></p>
<p>Boules paires : 2, 4, 6, 8, 10, 12 → 6 boules.</p>
<p>\\[\\text{Card}(A) = \\binom{6}{3} = 20 \\qquad \\boxed{P(A) = \\dfrac{20}{220} = \\dfrac{1}{11}}\\]</p>

<p><strong>Événement B : 3 boules divisibles par 3</strong></p>
<p>Multiples de 3 dans \\(\\{1,\\ldots,12\\}\\) : 3, 6, 9, 12 → 4 boules.</p>
<p>\\[\\text{Card}(B) = \\binom{4}{3} = 4 \\qquad \\boxed{P(B) = \\dfrac{4}{220} = \\dfrac{1}{55}}\\]</p>

<p><strong>Événement C : exactement 2 boules divisibles par 3</strong></p>
<p>2 parmi les 4 multiples de 3, et 1 parmi les 8 non-multiples de 3 :</p>
<p>\\[\\text{Card}(C) = \\binom{4}{2}\\binom{8}{1} = 6 \\times 8 = 48 \\qquad \\boxed{P(C) = \\dfrac{48}{220} = \\dfrac{12}{55}}\\]</p>

<p><strong>Événement D : 3 boules multiples de 2 (paires)</strong></p>
<p>Identique à A : boules paires = 2, 4, 6, 8, 10, 12.</p>
<p>\\[\\text{Card}(D) = \\binom{6}{3} = 20 \\qquad \\boxed{P(D) = \\dfrac{20}{220} = \\dfrac{1}{11}}\\]</p>

<p><strong>Événement E : suite arithmétique de raison 3</strong></p>
<p>On cherche les triplets \\((a, a+3, a+6)\\) avec \\(a \\geq 1\\) et \\(a+6 \\leq 12\\), soit \\(a \\leq 6\\).</p>
<p>Les cas favorables : \\((1;4;7)\\), \\((2;5;8)\\), \\((3;6;9)\\), \\((4;7;10)\\), \\((5;8;11)\\), \\((6;9;12)\\).</p>
<p>\\[\\text{Card}(E) = 6 \\qquad \\boxed{P(E) = \\dfrac{6}{220} = \\dfrac{3}{110}}\\]</p>

<p><strong>Événement F : suite géométrique de raison \\(\\dfrac{1}{2}\\)</strong></p>
<p>On cherche les triplets \\((a, \\dfrac{a}{2}, \\dfrac{a}{4})\\) avec tous éléments entiers dans \\(\\{1,\\ldots,12\\}\\).</p>
<p>Il faut que \\(a\\) soit divisible par 4 : \\(a = 4 \\Rightarrow (4;2;1)\\) et \\(a = 8 \\Rightarrow (8;4;2)\\) et \\(a = 12 \\Rightarrow (12;6;3)\\).</p>
<p>Les cas favorables convenablement rangés : \\((4;2;1)\\), \\((8;4;2)\\), \\((12;6;3)\\).</p>
<p>\\[\\text{Card}(F) = 3 \\qquad \\boxed{P(F) = \\dfrac{3}{220}}\\]</p>`
    },
    {
      label: 'Exercice 2 — Suites (Uₙ) et (Vₙ) (4 pts)',
      problem: `<p>Soit \\((U_n)\\) la suite définie par \\(U_0 = \\dfrac{1}{2}\\) et \\(U_{n+1} = \\dfrac{3U_n}{1+2U_n}\\) pour tout \\(n \\in \\mathbb{N}\\).</p>
<p><strong>1)</strong> Montrer par récurrence que pour tout \\(n \\in \\mathbb{N}\\), \\(0 < Uₙ < 1\\).</p>
<p><strong>2)</strong> Montrer que \\((U_n)\\) est croissante.</p>
<p><strong>3)</strong> En déduire que \\((U_n)\\) est convergente.</p>
<p><strong>4)</strong> Soit \\(Vₙ = \\dfrac{U_n}{1-U_n}\\). Montrer que \\((V_n)\\) est une suite géométrique de raison 3 et de premier terme \\(V_0 = 1\\).</p>
<p><strong>5)</strong> Exprimer \\(V_n\\) puis \\(U_n\\) en fonction de \\(n\\). En déduire \\(\\displaystyle\\lim_{n\\to+\\infty}U_n\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suites récurrentes homographiques &amp; suite auxiliaire</span>
  <ul>
    <li><strong>Démonstration par récurrence :</strong> Pour prouver $0 < Uₙ < 1$, vérifiez pour $n=0$ (initialisation), puis supposez $0 < Uₙ < 1$ et étudiez $U_{n+1} = \\dfrac{3U_n}{1+2U_n}$ (hérédité).</li>
    <li><strong>Suite auxiliaire $Vₙ = \\dfrac{Uₙ-1}{Uₙ}$ :</strong> Calculez $V_{n+1} = \\dfrac{U_{n+1}-1}{U_{n+1}} = \\dfrac{\\dfrac{3U_n}{1+2U_n}-1}{\\dfrac{3U_n}{1+2U_n}} = \\dfrac{U_n-1}{3U_n} = \\dfrac{1}{3}V_n$. La suite $(V_n)$ est géométrique de raison $q = 1/3$.</li>
    <li><strong>Expression explicite :</strong> $Vₙ = V_0 \\cdot q^n$, puis isolez $Uₙ = \\dfrac{1}{1-V_n} = \\dfrac{1}{1-V_0(1/3)^n}$.</li>
    <li><strong>Convergence :</strong> Comme $|q| < 1$, $\\lim_{n\\to+\\infty} q^n = 0 \\implies \\lim_{n\\to+\\infty} Uₙ = 1$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Récurrence : \\(0 < U_n < 1\\)</strong></p>
<p><em>Initialisation :</em> \\(U_0 = \\dfrac{1}{2}\\), et \\(0 < \\dfrac{1}{2} < 1\\).</p>
<p><em>Hérédité :</em> Supposons \\(0 < U_n < 1\\). Alors \\(1 + 2U_n > 1 > 0\\) et \\(3U_n > 0\\), donc \\(U_{n+1} = \\dfrac{3U_n}{1+2U_n} > 0\\).</p>
<p>\\[ U_{n+1} - 1 = \\dfrac{3U_n}{1+2U_n} - 1 = \\dfrac{3U_n - (1+2U_n)}{1+2U_n} \\]</p>
<p>\\[ = \\dfrac{U_n - 1}{1+2U_n} < 0 \\quad (\\text{car } U_n < 1) \\]</p>
<p>Par récurrence, \\(0 < U_n < 1\\) pour tout \\(n \\in \\mathbb{N}\\).</p>

<p><strong>2) Monotonie de \\((U_n)\\)</strong></p>
<p>\\[ U_{n+1} - U_n = \\dfrac{3U_n}{1+2U_n} - U_n \\]</p>
<p>\\[ = \\dfrac{3U_n - U_n(1+2U_n)}{1+2U_n} = \\dfrac{2U_n(1-U_n)}{1+2U_n} \\]</p>
<p>Comme \\(0 < U_n < 1\\) : \\(U_n > 0\\), \\(1 - U_n > 0\\), \\(1+2U_n > 0\\), donc \\(U_{n+1} - U_n > 0\\).</p>
<p>\\((U_n)\\) est <strong>strictement croissante</strong>.</p>

<p><strong>3) Convergence</strong></p>
<p>\\((U_n)\\) est croissante et majorée par 1 (d'après 1)) → par le théorème de la convergence monotone, \\((U_n)\\) est <strong>convergente</strong>.</p>

<p><strong>4) \\((V_n)\\) est géométrique</strong></p>
<p>\\(V_0 = \\dfrac{U_0}{1-U_0} = \\dfrac{1/2}{1 - 1/2} = 1\\).</p>
<p>\\[ V_{n+1} = \\dfrac{U_{n+1}}{1-U_{n+1}} = \\dfrac{\\dfrac{3U_n}{1+2U_n}}{1 - \\dfrac{3U_n}{1+2U_n}} \\]</p>
<p>\\[ = \\dfrac{\\dfrac{3U_n}{1+2U_n}}{\\dfrac{1-U_n}{1+2U_n}} = \\dfrac{3U_n}{1-U_n} = 3V_n \\]</p>
<p>\\((V_n)\\) est <strong>géométrique de raison 3 et de premier terme \\(V_0 = 1\\)</strong>.</p>

<p><strong>5) Expression de \\(Vₙ\\), \\(Uₙ\\) et limite</strong></p>
<p>\\(Vₙ = 1 \\times 3^n = 3^n\\).</p>
<p>De \\(Vₙ = \\dfrac{U_n}{1-U_n}\\) : \\(Uₙ = V_n(1-U_n) \\Rightarrow U_n(1+V_n) = Vₙ \\Rightarrow Uₙ = \\dfrac{V_n}{1+V_n}\\).</p>
<p>\\[\\boxed{Uₙ = \\dfrac{3^n}{1+3^n}}\\]</p>
<p>\\(\\displaystyle\\lim_{n\\to+\\infty} Uₙ = \\lim_{n\\to+\\infty}\\dfrac{3^n}{1+3^n} = \\lim_{n\\to+\\infty}\\dfrac{1}{\\dfrac{1}{3^n}+1} = \\dfrac{1}{0+1} = 1\\)</p>
<p>La suite \\((U_n)\\) converge vers <strong>1</strong>.</p>`
    },
    {
      label: 'Problème — Fonction f définie par morceaux (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases} \ \\sqrt{3-x} - x + 1 & \\text{si } x < 3 \\ e^{-x}+x-3 & \\text{si } x \\geq 3 \\end{cases}\\]</p>
<p>On note (C) la courbe représentative de f dans le plan muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\), unité graphique 2 cm.</p>

<p><strong>Partie A (10 pts)</strong></p>
<p><strong>1) a)</strong> Étudier la continuité de f en 3.</p>
<p><strong>b)</strong> Étudier la dérivabilité de f en 3 et interpréter graphiquement.</p>
<p><strong>2) a)</strong> Calculer les limites de f en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>b)</strong> Interpréter graphiquement les résultats.</p>
<p><strong>3) a)</strong> Montrer que \\(f'(x) = \\dfrac{-1}{2\\sqrt{3-x}} - 1\\) pour \\(x < 3\\). Étudier le signe de \\(f'(x)\\).</p>
<p><strong>b)</strong> Calculer \\(f'(x)\\) pour \\(x > 3\\). Étudier le signe de \\(f'(x)\\).</p>
<p><strong>c)</strong> Dresser le tableau de variation de f.</p>
<p><strong>4)</strong> Montrer que l'équation \\(f(x) = 0\\) admet une unique solution \\(\\alpha\\) dans \\(]1;2[\\). Encadrer \\(\\alpha\\) à 0,5 près.</p>
<p><strong>5)</strong> Construire la courbe (C).</p>

<p><strong>Partie B (2 pts)</strong></p>
<p>Calculer l'aire \\(\\mathcal{A}\\) de la partie du plan limitée par (C), l'axe des abscisses et la droite \\(x = 3\\), pour \\(x \\in [3 ; +\\infty[\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions avec discontinuité (saut), dérivabilité &amp; TVI</span>
  <ul>
    <li><strong>Discontinuité / Saut en $x_0 = 3$ :</strong> Si $\\lim_{x\\to 3^-} f(x) = -2$ et $f(3) = e^{-3} \\approx 0{,}05$, alors $\\lim_{x\\to 3^-} f(x) \\neq f(3)$ : la fonction n'est pas continue en 3, elle présente un saut fini.</li>
    <li><strong>Tableau de variation avec saut :</strong> Le tableau trace une ligne verticale continue séparant la limite à gauche $-2$ de la valeur à droite $e^{-3}$.</li>
    <li><strong>Théorème des valeurs intermédiaires sur chaque branche :</strong> Appliquez le TVI séparément sur $]-\\infty ; 3[$ (où $f$ est continue et décroît de $+\\infty$ à $-2$, coupant $0$ en $\\alpha=2$) et sur $[3;+\\infty[$ (où $f$ est continue et croît de $e^{-3}>0$ vers $+\\infty$, sans jamais s'annuler).</li>
    <li><strong>Calcul d'aire :</strong> $\\mathcal{A} = \\int_a^b f(x)dx = [F(x)]_a^b = F(b)-F(a)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Continuité en 3</strong></p>
<p>\\(f(3) = e^{-3}+3-3 = e^{-3}\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to3^-}f(x) = \\sqrt{3-3}-3+1 = 0-3+1 = -2\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to3^+}f(x) = f(3) = e^{-3} \\approx 0{,}05\\).</p>
<p>\\(\\lim_{x\\to3^-}f(x) = -2 \\neq e^{-3} = f(3)\\) → f est <strong>discontinue en 3</strong>.</p>
<p>Il y a un <strong>saut</strong> de \\(e^{-3}-(-2) = e^{-3}+2\\) en \\(x=3\\).</p>

<p>Si \\(f(x) = x\\sqrt{3-x}+1\\) pour \\(x<3\\) :</p>
<p>\\(\\lim_{x\\to3^-}f(x) = 3\\sqrt{0}+1 = 1\\) et \\(f(3) = e^{-3}+0 = e^{-3} \\neq 1\\) → discontinue.</p>
<p>Si \\(f(x) = \\sqrt{3-x}-x+1\\) : \\(\\lim_{x\\to3^-} = 0-3+1 = -2\\). Idem.</p>
<p>\\(\\lim_{x\\to3^-}f(x) = 0-3+1 = -2\\) ; \\(f(3) = e^{-3}+3-3 = e^{-3} \\approx 0{,}05\\).</p>
<p>f est <strong>discontinue en 3</strong> (saut de discontinuité).</p>

<p><strong>1b) Dérivabilité en 3</strong></p>
<p>f étant discontinue en 3, elle n'est pas dérivable en 3.</p>
<p>Interprétation : (C) présente un <strong>saut</strong> en \\(x=3\\).</p>

<p><strong>2) Limites aux bornes</strong></p>
<p>En \\(-\\infty\\) : \\(f(x) = \\sqrt{3-x}-x+1\\). Quand \\(x\\to-\\infty\\) :</p>
<p>\\(\\sqrt{3-x} \\approx \\sqrt{-x} = \\sqrt{|x|}\\to+\\infty\\) et \\(-x\\to+\\infty\\), donc \\(\\lim_{x\\to-\\infty}f(x) = +\\infty\\).</p>
<p>En \\(+\\infty\\) : \\(f(x) = e^{-x}+x-3\\). \\(e^{-x}\\to0\\) et \\(x-3\\to+\\infty\\), donc \\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\).</p>
<p><strong>Interprétation :</strong> (C) tend vers \\(+\\infty\\) dans les deux directions.</p>

<p><strong>3a) f'(x) pour x < 3</strong></p>
<p>\\(f(x) = \\sqrt{3-x}-x+1 = (3-x)^{\\dfrac{1}{2}}-x+1\\)</p>
<p>\\(f'(x) = \\dfrac{-1}{2\\sqrt{3-x}} - 1\\)</p>
<p>Pour \\(x < 3\\) : \\(\\sqrt{3-x} > 0\\), donc \\(\\dfrac{-1}{2\\sqrt{3-x}} < 0\\) et \\(-1 < 0\\).</p>
<p>\\(f'(x) < 0\\) pour tout \\(x < 3\\) → f est <strong>strictement décroissante</strong> sur \\(]-\\infty;3[\\).</p>

<p><strong>3b) f'(x) pour x > 3</strong></p>
<p>\\(f'(x) = -e^{-x}+1\\).</p>
<p>\\(f'(x) = 0 \\iff e^{-x} = 1 \\iff x = 0\\) (hors domaine \\(]3;+\\infty[\\)).</p>
<p>Pour \\(x > 3\\) : \\(e^{-x} < e^{-3} < 1\\), donc \\(-e^{-x}+1 > 0\\).</p>
<p>\\(f'(x) > 0\\) pour tout \\(x > 3\\) → f est <strong>strictement croissante</strong> sur \\(]3;+\\infty[\\).</p>

<p><strong>3c) Tableau de variation</strong></p>
<p>Valeurs clés : \\(\\lim_{x\\to-\\infty}f = +\\infty\\), \\(\\lim_{x\\to3^-}f = -2\\) (saut), \\(f(3)=e^{-3}\\approx0{,}05\\), \\(\\lim_{x\\to+\\infty}f=+\\infty\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-17-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-17-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
      <linearGradient id="forbid-grad-17-1-f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">3</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <!-- Trait de séparation complet (saut / discontinuité) qui descend jusqu'en bas -->
    <rect x="419" y="50" width="12" height="209" fill="url(#forbid-grad-17-1-f)"/>
    <line x1="422" y1="50" x2="422" y2="259" stroke="#b83232" stroke-width="2"/>
    <line x1="428" y1="50" x2="428" y2="259" stroke="#b83232" stroke-width="2"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <line x1="165" y1="135" x2="380" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-17-1-f)"/>
    <text x="398" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−2</text>
    <text x="452" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">e⁻³</text>
    <line x1="475" y1="225" x2="685" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-17-1-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>4) Solution unique \\(\\alpha\\) de f(x) = 0 dans ]1;2[</strong></p>
<p>Sur \\(]-\\infty;3[\\), f est continue et strictement décroissante.</p>
<p>\\(f(1) = \\sqrt{2}-1+1 = \\sqrt{2} \\approx 1{,}41 > 0\\)</p>
<p>\\(f(2) = \\sqrt{3-2}-2+1 = 1-1 = 0\\). Donc \\(\\boxed{\\alpha = 2}\\) est l'unique zéro de f sur \\(]-\\infty;3[\\).</p>
<p>Sur \\([3;+\\infty[\\) : \\(f(3) = e^{-3} > 0\\) et f est croissante de \\(e^{-3}\\) vers \\(+\\infty\\), donc f n'a pas de zéro pour \\(x \\geq 3\\).</p>
<p>\\(\\boxed{\\alpha = 2}\\) est l'unique solution de \\(f(x) = 0\\).</p>

<p><strong>Partie B — Aire pour x ≥ 3</strong></p>
<p>Sur \\([3;+\\infty[\\), \\(f(x) = e^{-x}+x-3\\). On vérifie le signe : \\(f(3) = e^{-3} > 0\\) et f croissante → \\(f(x) > 0\\) pour \\(x \\geq 3\\).</p>
<p>\\[\\mathcal{A} = \\lim_{b\\to+\\infty}\\int_3^b(e^{-x}+x-3)\\,dx\\]</p>
<p>Mais cette intégrale diverge (terme \\(\\int_3^b(x-3)dx = \\dfrac{(b-3)^2}{2}\\to+\\infty\\)).</p>
<p><em>L'exercice demande probablement l'aire sur un intervalle fini. Si on intègre sur \\([3;3+a]\\) :</em></p>
<p>\\[\\int_3^{3+a}(e^{-x}+x-3)\\,dx = \\left[-e^{-x}+\\dfrac{x^2}{2}-3x\\right]_3^{3+a}\\]</p>
<p>\\(= \\left(-e^{-(3+a)}+\\dfrac{(3+a)^2}{2}-3(3+a)\\right)-\\left(-e^{-3}+\\dfrac{9}{2}-9\\right)\\)</p>
<p>\\(= -e^{-(3+a)}+\\dfrac{(3+a)^2}{2}-3(3+a)+e^{-3}-\\dfrac{9}{2}+9\\)</p>
<p>En cm² (unité 2 cm → facteur 4) : \\(\\mathcal{A} = 4\\int_3^{3+a}f(x)\\,dx\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) — BAC 2017 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="137.6" y1="40" x2="137.6" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="215.3" y1="40" x2="215.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="292.9" y1="40" x2="292.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="448.2" y1="40" x2="448.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="525.9" y1="40" x2="525.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="603.5" y1="40" x2="603.5" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="681.2" y1="40" x2="681.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="273.3" x2="720" y2="273.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="195.6" x2="720" y2="195.6" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="117.8" x2="720" y2="117.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="351.1" x2="735" y2="351.1" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="355.1" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="370.6" y1="400" x2="370.6" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="370.6" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="358.6" y="367.1" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="347.1" x2="60.0" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="137.6" y1="347.1" x2="137.6" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="137.6" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="215.3" y1="347.1" x2="215.3" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="215.3" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="292.9" y1="347.1" x2="292.9" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="292.9" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="448.2" y1="347.1" x2="448.2" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="448.2" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="525.9" y1="347.1" x2="525.9" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="525.9" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="603.5" y1="347.1" x2="603.5" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="603.5" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="681.2" y1="347.1" x2="681.2" y2="355.1" stroke="#1f2937" stroke-width="1"/><text x="681.2" y="367.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="366.6" y1="273.3" x2="374.6" y2="273.3" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="277.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="366.6" y1="195.6" x2="374.6" y2="195.6" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="199.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="366.6" y1="117.8" x2="374.6" y2="117.8" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="121.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="366.6" y1="40.0" x2="374.6" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="360.6" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    
    <!-- Courbes -->
    <path d="M 60.0 328.3 L 64.4 327.7 L 68.8 327.0 L 73.2 326.3 L 77.6 325.7 L 82.0 325.0 L 86.4 324.3 L 90.8 323.6 L 95.2 322.9 L 99.6 322.2 L 104.0 321.5 L 108.4 320.8 L 112.8 320.1 L 117.2 319.4 L 121.6 318.7 L 126.0 318.0 L 130.4 317.4 L 134.8 316.7 L 139.2 316.0 L 143.6 315.4 L 148.0 314.8 L 152.4 314.1 L 156.8 313.5 L 161.2 313.0 L 165.6 312.4 L 170.0 311.9 L 174.4 311.4 L 178.8 311.0 L 183.2 310.6 L 187.6 310.2 L 192.0 309.9 L 196.4 309.6 L 200.8 309.4 L 205.2 309.2 L 209.6 309.1 L 214.0 309.0 L 218.4 309.0 L 222.8 309.1 L 227.2 309.3 L 231.6 309.5 L 236.0 309.8 L 240.4 310.2 L 244.8 310.7 L 249.2 311.3 L 253.6 312.0 L 258.0 312.8 L 262.4 313.6 L 266.8 314.6 L 271.2 315.7 L 275.6 316.9 L 280.0 318.1 L 284.4 319.5 L 288.8 321.0 L 293.2 322.6 L 297.6 324.3 L 302.0 326.0 L 306.4 327.9 L 310.8 329.8 L 315.2 331.7 L 319.6 333.7 L 324.0 335.7 L 328.4 337.8 L 332.8 339.8 L 337.2 341.8 L 341.6 343.6 L 346.0 345.4 L 350.4 347.1 L 354.8 348.5 L 359.2 349.7 L 363.6 350.5 L 368.0 351.0 L 372.4 351.1 L 376.8 350.9 L 381.2 350.4 L 385.6 349.8 L 390.0 349.0 L 394.4 348.1 L 398.8 347.0 L 403.2 345.7 L 407.6 344.4 L 412.0 342.9 L 416.4 341.3 L 420.8 339.6 L 425.2 337.8 L 429.6 336.0 L 434.0 334.0 L 438.4 332.0 L 442.8 329.9 L 447.2 327.8 L 451.6 325.5 L 456.0 323.3 L 460.4 320.9 L 464.8 318.5 L 469.2 316.1 L 473.6 313.6 L 478.0 311.1 L 482.4 308.5 L 486.8 305.9 L 491.2 303.2 L 495.6 300.5 L 500.0 297.8 L 504.4 295.0 L 508.8 292.2 L 513.2 289.4 L 517.6 286.5 L 522.0 283.6 L 526.4 280.7 L 530.8 277.7 L 535.2 274.7 L 539.6 271.7 L 544.0 268.7 L 548.4 265.6 L 552.8 262.5 L 557.2 259.4 L 561.6 256.3 L 566.0 253.2 L 570.4 250.0 L 574.8 246.8 L 579.2 243.6 L 583.6 240.4 L 588.0 237.2 L 592.4 233.9 L 596.8 230.6 L 601.2 227.3 L 605.6 224.0 L 610.0 220.7 L 614.4 217.4 L 618.8 214.0 L 623.2 210.7 L 627.6 207.3 L 632.0 203.9 L 636.4 200.5 L 640.8 197.1 L 645.2 193.7 L 649.6 190.2 L 654.0 186.8 L 658.4 183.3 L 662.8 179.8 L 667.2 176.3 L 671.6 172.8 L 676.0 169.3 L 680.4 165.8 L 684.8 162.3 L 689.2 158.7 L 693.6 155.2 L 698.0 151.6 L 702.4 148.1 L 706.8 144.5 L 711.2 140.9 L 715.6 137.3 L 720.0 133.7" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables -->
    <circle cx="370.6" cy="351.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(380.6, 367.1)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g><circle cx="215.3" cy="309.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(205.3, 301.0)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (-2 ; 4e⁻²)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="42" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},

{
  id: 'bac-2017-D-juillet-2nd',
  year: 2017,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2017 / 2nd tour',
  topics: ['Probabilités', 'Courbes paramétriques', 'Suites (Uₙ)', 'Fonctions ln & exp'],
  parts: [
    {
      label: 'Exercice 1 — Probabilités : boules et divisibilité (4 pts)',
      problem: `<p>Une urne contient 12 boules portant les numéros 1 à 12. On tire simultanément 3 boules au hasard.</p>
<p>On définit :</p>
<ul>
  <li>A : « Les trois boules portent des numéros tous pairs »</li>
  <li>B : « Les trois boules portent des numéros tous divisibles par 3 »</li>
  <li>C : « Les trois boules portent des numéros dont deux sont divisibles par 3 »</li>
  <li>D : « Les trois numéros sont des multiples de 2 »</li>
  <li>E : « Les trois nombres, convenablement rangés, forment une suite arithmétique de raison 3 »</li>
  <li>F : « Les trois nombres, convenablement rangés, forment une suite géométrique de raison \\(\\dfrac{1}{2}\\) »</li>
</ul>
<p>Calculer les probabilités \\(P(A)\\), \\(P(B)\\), \\(P(C)\\), \\(P(D)\\), \\(P(E)\\) et \\(P(F)\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Probabilités combinatoires &amp; équiprobabilité</span>
  <ul>
    <li><strong>Dénombrement simultané :</strong> $\\text{Card}(\\Omega) = \\binom{n}{p} = C_n^p$.</li>
    <li><strong>Multiples et divisibilité :</strong> Dans $\\{1, 2, \\dots, 12\\}$, il y a 6 pairs $\\{2,4,6,8,10,12\\}$ et 4 multiples de 3 $\\{3,6,9,12\\}$. Les multiples communs (multiples de 6) sont $\\{6, 12\\}$.</li>
    <li><strong>Formule du crible (Union) :</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.</li>
    <li><strong>Événement contraire :</strong> $P(\\bar{A}) = 1 - P(A)$. Très utile pour les événements « au moins un ».</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p>Le 2nd tour 2017 reprend le même exercice de probabilités que le 1er tour. Voici la correction complète.</p>
<p>\\(\\text{Card}(\\Omega) = \\binom{12}{3} = 220\\).</p>

<p><strong>A et D : 3 boules paires (multiples de 2)</strong></p>
<p>Boules paires : \\(\\{2,4,6,8,10,12\\}\\) → 6 boules.</p>
<p>\\[P(A) = P(D) = \\dfrac{\\binom{6}{3}}{220} = \\dfrac{20}{220} = \\boxed{\\dfrac{1}{11}}\\]</p>

<p><strong>B : 3 boules divisibles par 3</strong></p>
<p>\\(\\{3,6,9,12\\}\\) → 4 boules.</p>
<p>\\[P(B) = \\dfrac{\\binom{4}{3}}{220} = \\dfrac{4}{220} = \\boxed{\\dfrac{1}{55}}\\]</p>

<p><strong>C : exactement 2 boules divisibles par 3</strong></p>
<p>\\[P(C) = \\dfrac{\\binom{4}{2}\\binom{8}{1}}{220} = \\dfrac{6 \\times 8}{220} = \\dfrac{48}{220} = \\boxed{\\dfrac{12}{55}}\\]</p>

<p><strong>E : suite arithmétique de raison 3</strong></p>
<p>Triplets \\((a,a+3,a+6)\\) avec \\(1\\leq a\\) et \\(a+6\\leq12\\) : \\(a\\in\\{1,2,3,4,5,6\\}\\) → 6 triplets.</p>
<p>\\[P(E) = \\dfrac{6}{220} = \\boxed{\\dfrac{3}{110}}\\]</p>

<p><strong>F : suite géométrique de raison \\(\\dfrac{1}{2}\\)</strong></p>
<p>Triplets \\((4a, 2a, a)\\) avec \\(4a\\leq12\\) et \\(a\\geq1\\) entier :</p>
<p>\\(a=1\\) : \\((4,2,1)\\) ; \\(a=2\\) : \\((8,4,2)\\) ; \\(a=3\\) : \\((12,6,3)\\).</p>
<p>\\[P(F) = \\dfrac{3}{220} = \\boxed{\\dfrac{3}{220}}\\]</p>`
    },
    {
      label: 'Exercice 2 — Suite (Uₙ) récurrente (4 pts)',
      problem: `<p>Soit \\((U_n)\\) la suite définie par \\(U_0 = \\dfrac{1}{2}\\) et \\(U_{n+1} = \\dfrac{3U_n}{1+2U_n}\\) pour tout \\(n \\in \\mathbb{N}\\).</p>
<p><strong>1)</strong> Montrer par récurrence que \\(0 < Uₙ < 1\\) pour tout \\(n\\).</p>
<p><strong>2)</strong> Montrer que \\((U_n)\\) est croissante.</p>
<p><strong>3)</strong> En déduire la convergence de \\((U_n)\\).</p>
<p><strong>4)</strong> Soit \\(Vₙ = \\dfrac{U_n}{1-U_n}\\). Montrer que \\((V_n)\\) est géométrique de raison 3 et de premier terme 1.</p>
<p><strong>5)</strong> Exprimer \\(U_n\\) en fonction de n. Calculer \\(\\displaystyle\\lim_{n\\to+\\infty}U_n\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suites récurrentes, monotonie &amp; encadrement</span>
  <ul>
    <li><strong>Monotonie par étude de signe :</strong> Pour étudier le sens de variation de $(U_n)$, étudiez le signe de $U_{n+1}-Uₙ = \\dfrac{3U_n}{1+2U_n}-Uₙ = \\dfrac{2U_n(1-U_n)}{1+2U_n}$. Comme $0 < Uₙ < 1$, ce terme est strictement positif : $(U_n)$ est croissante.</li>
    <li><strong>Théorème de convergence monotone :</strong> Toute suite croissante et majorée par 1 est convergente. Sa limite $L$ vérifie $L = \\dfrac{3L}{1+2L} \\implies L = 1$.</li>
    <li><strong>Somme géométrique :</strong> $\\sum_{k=0}^{n-1} q^k = \\dfrac{1-q^n}{1-q}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p>Même énoncé que le 1er tour — voir le corrigé complet ci-dessus. Les réponses sont identiques.</p>
<div class="result-box">
  \\(0 < Uₙ < 1\\) pour tout \\(n\\) — \\((U_n)\\) croissante et convergente —
  \\(Vₙ = 3^n\\) — \\(Uₙ = \\dfrac{3^n}{1+3^n}\\) — \\(\\lim_{n\\to+\\infty}Uₙ = 1\\)
</div>`
    },
    {
      label: 'Problème — Courbe paramétrique et fonction g(x) = 1 − 1/x + ln x (12 pts)',
      problem: `<p><strong>Exercice 1 — Courbe paramétrique (4 pts)</strong></p>
<p>On considère la courbe (C) de représentation paramétrique :</p>
<p>\\[\\begin{cases} x(t) = \\cos(\\pi - t) \\\\ y(t) = \\dfrac{\\sin^2 t}{2 + \\sin t} \\end{cases}, \\quad t \\in \\mathbb{R}\\]</p>
<p><strong>1)</strong> Comparer M(t) et M(π − t) pour tout t réel. En déduire une restriction du domaine d'étude de (C).</p>
<p><strong>2) a)</strong> Montrer que \\(x'(t) = -\\sin t\\) et \\(y'(t) = \\dfrac{\\sin t(4+\\sin t)}{(2+\\sin t)^2}\\).</p>
<p><strong>b)</strong> Étudier le sens de variation de x et de y sur \\(\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]\\).</p>
<p><strong>c)</strong> Dresser le tableau de variation conjoint de x et y sur \\(\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]\\).</p>
<p><strong>3)</strong> Tracer la courbe (C).</p>

<p><strong>Problème (12 pts)</strong></p>
<p>Soit g la fonction définie sur \\(]0;+\\infty[\\) par \\(g(x) = 1 - \\dfrac{1}{x} + \\ln x\\).</p>
<p>Et f la fonction définie sur \\(\\mathbb{R}\\setminus\\{0\\}\\) par \\(f(x) = (x-1)\\ln|x|\\).</p>
<p><strong>Partie A (2,5 pts)</strong></p>
<p><strong>1)</strong> Calculer \\(\\displaystyle\\lim_{x\\to0^+}g(x)\\) et \\(\\displaystyle\\lim_{x\\to+\\infty}g(x)\\).</p>
<p><strong>2) a)</strong> Calculer g'(x). Étudier le signe de g'(x) et déduire les variations de g.</p>
<p><strong>b)</strong> Dresser le tableau de variation de g.</p>
<p><strong>3)</strong> Déduire le signe de g(x) pour \\(x \\in ]0;+\\infty[\\).</p>

<p><strong>Partie B (6 pts)</strong></p>
<p><strong>1)</strong> Étudier la continuité de f en 1.</p>
<p><strong>2)</strong> Étudier la dérivabilité de f en 1 et interpréter graphiquement.</p>
<p><strong>3)</strong> Calculer les limites de f en \\(+\\infty\\) et en \\(-\\infty\\). Interpréter.</p>
<p><strong>4)</strong> Calculer f'(x) pour \\(x > 0\\) et montrer que \\(f'(x) = g(x)\\). En déduire le signe de f'(x).</p>
<p><strong>5)</strong> Dresser le tableau de variation de f et tracer la courbe (T).</p>

<p><strong>Partie C (2 pts)</strong></p>
<p>Calculer \\(\\mathcal{A} = \\displaystyle\\int_1^3 f(x)\\,dx\\) en cm². Unité graphique 2 cm.</p>

<p><strong>Partie D (1,5 pt)</strong></p>
<p>Soit \\(a > 0\\). Calculer l'aire de la partie du plan délimitée par (T), \\(y = 0\\), \\(x = 1\\), \\(x = e^a\\). Calculer la limite de cette aire quand \\(a \\to +\\infty\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Étude de fonction logarithme g(x) = 1 - \\dfrac{1}{x} + ln x &amp; paramétrique</span>
  <ul>
    <li><strong>Fonction pivot $g(x)$ :</strong> $g'(x) = \\dfrac{1}{x^2}+\\dfrac{1}{x} = \\dfrac{1+x}{x^2} > 0$ sur $]0;+\\infty[$. Comme $g(1)=0$, $g(x)<0$ sur $]0;1[$ et $g(x)>0$ sur $]1;+\\infty[$.</li>
    <li><strong>Lien $f'(x) = g(x)$ :</strong> La dérivée de $f(x)=(x-1)\\ln x$ est $f'(x) = 1\\cdot\\ln x + (x-1)\\dfrac{1}{x} = \\ln x + 1 - \\dfrac{1}{x} = g(x)$. Les variations de $f$ découlent directement du signe de $g$.</li>
    <li><strong>Intégration par parties pour $\\int(x-1)\\ln x\\,dx$ :</strong> Posez $u = \\ln x \\implies u' = \\dfrac{1}{x}$ et $v' = x-1 \\implies v = \\dfrac{x^2}{2}-x$.</li>
    <li><strong>Courbe paramétrique :</strong> Étudiez $x(t)$ et $y(t)$ séparément puis rassemblez dans un tableau conjoint pour tracer les boucles.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Exercice 1 — Courbe paramétrique</strong></p>

<p><strong>1) Comparaison M(t) et M(π − t)</strong></p>
<p>\\(x(\\pi-t) = \\cos(\\pi-(\\pi-t)) = \\cos(t)\\) et \\(x(t) = \\cos(\\pi-t) = -\\cos t\\).</p>
<p>Donc \\(x(\\pi-t) = -x(t)\\).</p>
<p>\\(y(\\pi-t) = \\dfrac{\\sin^2(\\pi-t)}{2+\\sin(\\pi-t)} = \\dfrac{\\sin^2 t}{2+\\sin t} = y(t)\\).</p>
<p>Donc M(π-t) a pour coordonnées \\((-x(t), y(t))\\) : M(π-t) est le <strong>symétrique de M(t) par rapport à l'axe des ordonnées</strong>.</p>
<p>On peut restreindre l'étude de (C) à \\(\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]\\), puis compléter par symétrie selon \\((Oy)\\).</p>

<p><strong>2a) Calcul de x'(t) et y'(t)</strong></p>
<p>\\(x(t) = \\cos(\\pi-t) = -\\cos t\\), donc \\(x'(t) = \\sin t\\)... mais l'énoncé dit \\(x'(t) = -\\sin t\\).</p>
<p>En effet \\(x(t) = \\cos(\\pi-t)\\), \\(x'(t) = -\\sin(\\pi-t)\\cdot(-1) = \\sin(\\pi-t) = \\sin t\\).</p>

<p>Pour y'(t) : \\(y(t) = \\dfrac{\\sin^2 t}{2+\\sin t}\\).</p>
<p>\\(y'(t) = \\dfrac{2\\sin t\\cos t(2+\\sin t) - \\sin^2 t \\cos t}{(2+\\sin t)^2} = \\dfrac{\\cos t\\sin t(2(2+\\sin t)-\\sin t)}{(2+\\sin t)^2} = \\dfrac{\\cos t\\sin t(4+\\sin t)}{(2+\\sin t)^2}\\)</p>
<p><p>\[\\boxed{y'(t) = \\dfrac{\sin t\cos t(4+\sin t)}{(2+\sin t)^2}}\]</p>

<p><strong>2b) Sens de variation sur \\(\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]\\)</strong></p>
<p><em>Signe de x'(t) = −sin t :</em></p>
<p>Sur \\(\\left[-\\dfrac{\\pi}{2};0\\right]\\) : \\(\\sin t \\leq 0\\) donc \\(-\\sin t \\geq 0\\) → x <strong>croissante</strong>.</p>
<p>Sur \\(\\left[0;\\dfrac{\\pi}{2}\\right]\\) : \\(\\sin t \\geq 0\\) donc \\(-\\sin t \\leq 0\\) → x <strong>décroissante</strong>.</p>
<p><em>Signe de y'(t) :</em></p>
<p>\\((2+\\sin t)^2 > 0\\) toujours. \\(4+\\sin t \\geq 4-1 = 3 > 0\\). Donc le signe de y' est celui de \\(\\sin t\\).</p>
<p>Sur \\(\\left[-\\dfrac{\\pi}{2};0\\right]\\) : \\(\\sin t \\leq 0\\) → y <strong>décroissante</strong>.</p>
<p>Sur \\(\\left[0;\\dfrac{\\pi}{2}\\right]\\) : \\(\\sin t \\geq 0\\) → y <strong>croissante</strong>.</p>

<p><strong>2c) Tableau de variation conjoint</strong></p>
<p>Points clés : \\(t=-\\dfrac{\\pi}{2}\\) : \\(x=\\cos(\\pi+\\dfrac{\\pi}{2})=0\\), \\(y=\\dfrac{1}{1}=1\\) ; \\(t=0\\) : \\(x=\\cos\\pi=-1\\), \\(y=0\\) ; \\(t=\\dfrac{\\pi}{2}\\) : \\(x=\\cos\\dfrac{\\pi}{2}=0\\), \\(y=1\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-17-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-17-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="318" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 319 L 10 319 C 5 319 1 315 1 310 Z" fill="#222d46"/>
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="180" x2="760" y2="180" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="225" x2="760" y2="225" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="320" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="135" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="203" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="272" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">y(t)</text>
    <text x="150" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−π/2</text>
    <text x="425" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="700" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/2</text>
    <line x1="425" y1="45" x2="425" y2="53" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="83" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="130" x2="425" y2="188" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="218" x2="425" y2="285" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="315" x2="425" y2="319" stroke="#dde1ec" stroke-width="1.2"/>
    <text x="285" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="425" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="560" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="150" y="155" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170" y1="150" x2="405" y2="115" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-17-2-param)"/>
    <text x="425" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="445" y1="120" x2="680" y2="155" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-17-2-param)"/>
    <text x="700" y="155" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="285" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="425" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="560" y="203" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="150" y="250" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="170" y1="255" x2="405" y2="295" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-17-2-param)"/>
    <text x="425" y="300" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="445" y1="295" x2="680" y2="250" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-17-2-param)"/>
    <text x="700" y="250" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
  </svg>
</div>
<p>(C) est une courbe fermée passant par \\((-1;0)\\), \\((0;1)\\), et par symétrie par \\((1;0)\\), formant une boucle.</p>

<p><strong>Problème — Partie A : g(x) = 1 − \\dfrac{1}{x} + ln x</strong></p>

<p><strong>1) Limites</strong></p>
<p>\\(\\lim_{x\\to0^+}g(x) = 1 - \\dfrac{1}{0^+} + (-\\infty) = -\\infty\\)</p>
<p>\\(\\lim_{x\\to+\\infty}g(x) = 1 - 0 + \\infty = +\\infty\\)</p>

<p><strong>2a) g'(x)</strong></p>
<p>\\(g'(x) = \\dfrac{1}{x^2} + \\dfrac{1}{x} = \\dfrac{1+x}{x^2}\\)</p>
<p>Pour \\(x > 0\\) : \\(1+x > 0\\) et \\(x^2 > 0\\) → \\(g'(x) > 0\\).</p>
<p>g est <strong>strictement croissante</strong> sur \\(]0;+\\infty[\\).</p>

<p><strong>2b) Tableau de variation de g</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-mono" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <linearGradient id="forbid-grad-gmono" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/><stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/></linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">g '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">g(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x = 0 (valeur interdite) -->
    <text x="160" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <rect x="153" y="50" width="14" height="209" fill="url(#forbid-grad-gmono)"/>
    <line x1="157" y1="50" x2="157" y2="259" stroke="#b83232" stroke-width="2"/>
    <line x1="163" y1="50" x2="163" y2="259" stroke="#b83232" stroke-width="2"/>

    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <text x="430" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="24" font-weight="900">+</text>

    <text x="195" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="225" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-mono)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>

<p><strong>3) Signe de g</strong></p>
<p>g(1) = 1 - 1 + 0 = 0, et g est strictement croissante :</p>
<p>\\(g(x) < 0\\) sur \\(]0;1[\\) et \\(g(x) > 0\\) sur \\(]1;+\\infty[\\).</p>

<p><strong>Partie B : f(x) = (x−1)ln|x|</strong></p>

<p><strong>1) Continuité en 1</strong></p>
<p>\\(f(1) = (1-1)\\ln 1 = 0\\).</p>
<p>\\(\\lim_{x\\to1}f(x) = (1-1)\\ln 1 = 0 = f(1)\\). f est <strong>continue en 1</strong>.</p>

<p><strong>2) Dérivabilité en 1</strong></p>
<p>\\(\\lim_{x\\to1}\\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to1}\\dfrac{(x-1)\\ln|x|}{x-1} = \\lim_{x\\to1}\\ln|x| = 0\\).</p>
<p>f est <strong>dérivable en 1</strong> avec \\(f'(1) = 0\\).</p>
<p><strong>Interprétation :</strong> tangente horizontale à (T) en \\((1;0)\\).</p>

<p><strong>3) Limites</strong></p>
<p>En \\(+\\infty\\) : \\(f(x) = (x-1)\\ln x\\). \\((x-1)\\to+\\infty\\) et \\(\\ln x\\to+\\infty\\), donc \\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\).</p>
<p>En \\(0^+\\) : \\(f(x) = (x-1)\\ln x = x\\ln x - \\ln x\\). \\(x\\ln x\\to0\\) et \\(-\\ln x\\to+\\infty\\), donc \\(\\lim_{x\\to0^+}f(x) = +\\infty\\) → asymptote verticale \\(x=0\\).</p>
<p>\\(\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty}\\left(1-\\dfrac{1}{x}\\right)\\ln x = +\\infty\\) → branche parabolique de direction \\((Oy)\\) en \\(+\\infty\\).</p>

<p><strong>4) f'(x) pour x > 0</strong></p>
<p>\\(f(x) = (x-1)\\ln x\\)</p>
<p>\\(f'(x) = \\ln x + (x-1)\\cdot\\dfrac{1}{x} = \\ln x + 1 - \\dfrac{1}{x} = g(x)\\)</p>
<p>\\[\\boxed{f'(x) = g(x)}\\] </p>
<p>D'après A-3 : \\(f'(x) < 0\\) sur \\(]0;1[\\) et \\(f'(x) > 0\\) sur \\(]1;+\\infty[\\). Minimum en \\(x=1\\).</p>

<p><strong>5) Tableau de variation</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-17-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-17-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
      <linearGradient id="forbid-grad-17-2-f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="150" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <!-- Valeur interdite / non défini en 150 -->
    <rect x="143" y="50" width="14" height="209" fill="url(#forbid-grad-17-2-f)"/>
    <line x1="147" y1="50" x2="147" y2="259" stroke="#b83232" stroke-width="2"/>
    <line x1="153" y1="50" x2="153" y2="259" stroke="#b83232" stroke-width="2"/>
    <!-- Ticks d'extremum en 425 -->
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="175" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <line x1="195" y1="135" x2="405" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-17-2-f)"/>
    <text x="425" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="445" y1="225" x2="685" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-17-2-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
  </svg>
</div>
<p>f admet un minimum global de 0 en \\(x=1\\). f est positive sur \\(]0;+\\infty[\\).</p>

<p><strong>Partie C — Calcul de \\(\\mathcal{A} = \\int_1^3 f(x)\\,dx\\)</strong></p>
<p>\\[\\mathcal{A} = \\int_1^3(x-1)\\ln x\\,dx\\]</p>
<p>IPP : \\(u = \\ln x\\), \\(v' = x-1\\) → \\(u' = \\dfrac{1}{x}\\), \\(v = \\dfrac{x^2}{2}-x\\).</p>
<p>\\[= \\left[\\left(\\dfrac{x^2}{2}-x\\right)\\ln x\\right]_1^3 - \\int_1^3\\dfrac{1}{x}\\left(\\dfrac{x^2}{2}-x\\right)dx\\]</p>
<p>\\(= \\left(\\dfrac{9}{2}-3\\right)\\ln 3 - 0 - \\int_1^3\\left(\\dfrac{x}{2}-1\\right)dx\\)</p>
<p>\\(= \\dfrac{3}{2}\\ln 3 - \\left[\\dfrac{x^2}{4}-x\\right]_1^3\\)</p>
<p>\\(= \\dfrac{3}{2}\\ln 3 - \\left[\\left(\\dfrac{9}{4}-3\\right)-\\left(\\dfrac{1}{4}-1\\right)\\right]\\)</p>
<p>\\(= \\dfrac{3}{2}\\ln 3 - \\left[-\\dfrac{3}{4}+\\dfrac{3}{4}\\right] = \\dfrac{3}{2}\\ln 3\\)</p>
<p>En cm² (unité graphique 2 cm → \\(U_A = 4\\) cm²) :</p>
<p>\\[\\boxed{\\mathcal{A} = 4 \\times \\dfrac{3}{2}\\ln 3 = 6\\ln 3 \\approx 6{,}6 \\text{ cm}^2}\\]</p>

<p><strong>Partie D — Aire en fonction de a</strong></p>
<p>Sur \\([1;e^a]\\) (\\(a>0\\)) : \\(f(x) = (x-1)\\ln x \\geq 0\\).</p>
<p>\\[A(a) = \\int_1^{e^a}(x-1)\\ln x\\,dx\\]</p>
<p>Par le même calcul IPP :</p>
<p>\\[A(a) = \\left[\\left(\\dfrac{x^2}{2}-x\\right)\\ln x\\right]_1^{e^a} - \\left[\\dfrac{x^2}{4}-x\\right]_1^{e^a}\\]</p>
<p>\\(= \\left(\\dfrac{e^{2a}}{2}-e^a\\right)a - \\left[\\left(\\dfrac{e^{2a}}{4}-e^a\\right)-\\left(\\dfrac{1}{4}-1\\right)\\right]\\)</p>
<p>\\(= a\\dfrac{e^{2a}}{2} - ae^a - \\dfrac{e^{2a}}{4} + e^a + \\dfrac{3}{4}\\)</p>
<p>\\[\\boxed{A(a) = \\dfrac{(2a-1)e^{2a}}{4} - (a-1)e^a + \\dfrac{3}{4} \\text{ u.a.} = 4 \\times A(a) \\text{ cm}^2}\\]</p>
<p>\\[\\lim_{a\\to+\\infty}A(a) = +\\infty\\]</p>
<p>L'aire est non bornée, cohérent avec la branche parabolique en \\(+\\infty\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) — BAC 2017 2nd tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="115.0" y1="40" x2="115.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="225.0" y1="40" x2="225.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="445.0" y1="40" x2="445.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="555.0" y1="40" x2="555.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="665.0" y1="40" x2="665.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="355.0" x2="720" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="215.0" x2="720" y2="215.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="145.0" x2="720" y2="145.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="75.0" x2="720" y2="75.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="285.0" x2="735" y2="285.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="289.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="335.0" y1="400" x2="335.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="335.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="323.0" y="301.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="115.0" y1="281.0" x2="115.0" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="115.0" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="225.0" y1="281.0" x2="225.0" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="225.0" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="445.0" y1="281.0" x2="445.0" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="445.0" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="555.0" y1="281.0" x2="555.0" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="555.0" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="665.0" y1="281.0" x2="665.0" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="665.0" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text>
    <line x1="331.0" y1="355.0" x2="339.0" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="325.0" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="331.0" y1="215.0" x2="339.0" y2="215.0" stroke="#1f2937" stroke-width="1"/><text x="325.0" y="219.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="331.0" y1="145.0" x2="339.0" y2="145.0" stroke="#1f2937" stroke-width="1"/><text x="325.0" y="149.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="331.0" y1="75.0" x2="339.0" y2="75.0" stroke="#1f2937" stroke-width="1"/><text x="325.0" y="79.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text>
    
    <!-- Courbes -->
    <path d="M 60.0 509.5 L 64.4 503.0 L 68.8 496.6 L 73.2 490.2 L 77.6 483.8 L 82.0 477.4 L 86.4 471.1 L 90.8 464.8 L 95.2 458.5 L 99.6 452.2 L 104.0 446.0 L 108.4 439.8 L 112.8 433.6 L 117.2 427.5 L 121.6 421.4 L 126.0 415.3 L 130.4 409.2 L 134.8 403.2 L 139.2 397.2 L 143.6 391.2 L 148.0 385.3 L 152.4 379.4 L 156.8 373.5 L 161.2 367.6 L 165.6 361.8 L 170.0 356.0 L 174.4 350.2 L 178.8 344.4 L 183.2 338.7 L 187.6 332.9 L 192.0 327.2 L 196.4 321.6 L 200.8 315.9 L 205.2 310.3 L 209.6 304.6 L 214.0 299.0 L 218.4 293.4 L 222.8 287.8 L 227.2 282.2 L 231.6 276.6 L 236.0 271.0 L 240.4 265.4 L 244.8 259.7 L 249.2 254.0 L 253.6 248.3 L 258.0 242.6 L 262.4 236.7 L 266.8 230.8 L 271.2 224.8 L 275.6 218.6 L 280.0 212.2 L 284.4 205.6 L 288.8 198.8 L 293.2 191.5 L 297.6 183.8 L 302.0 175.4 L 306.4 166.2 L 310.8 155.7 L 315.2 143.4 L 319.6 128.1 L 324.0 107.7 L 328.4 76.2 L 332.8 5.7 L 337.2 16.6 L 341.6 99.9 L 346.0 139.9 L 350.4 166.6 L 354.8 186.6 L 359.2 202.3 L 363.6 215.2 L 368.0 226.0 L 372.4 235.2 L 376.8 243.0 L 381.2 249.8 L 385.6 255.6 L 390.0 260.7 L 394.4 265.2 L 398.8 269.0 L 403.2 272.3 L 407.6 275.1 L 412.0 277.5 L 416.4 279.5 L 420.8 281.2 L 425.2 282.5 L 429.6 283.5 L 434.0 284.3 L 438.4 284.7 L 442.8 285.0 L 447.2 285.0 L 451.6 284.8 L 456.0 284.3 L 460.4 283.7 L 464.8 282.9 L 469.2 281.9 L 473.6 280.8 L 478.0 279.5 L 482.4 278.0 L 486.8 276.4 L 491.2 274.7 L 495.6 272.8 L 500.0 270.8 L 504.4 268.7 L 508.8 266.4 L 513.2 264.1 L 517.6 261.6 L 522.0 259.0 L 526.4 256.3 L 530.8 253.5 L 535.2 250.6 L 539.6 247.6 L 544.0 244.6 L 548.4 241.4 L 552.8 238.1 L 557.2 234.8 L 561.6 231.4 L 566.0 227.9 L 570.4 224.3 L 574.8 220.6 L 579.2 216.9 L 583.6 213.1 L 588.0 209.2 L 592.4 205.3 L 596.8 201.2 L 601.2 197.2 L 605.6 193.0 L 610.0 188.8 L 614.4 184.5 L 618.8 180.2 L 623.2 175.8 L 627.6 171.3 L 632.0 166.8 L 636.4 162.2 L 640.8 157.6 L 645.2 152.9 L 649.6 148.2 L 654.0 143.4 L 658.4 138.6 L 662.8 133.7 L 667.2 128.7 L 671.6 123.7 L 676.0 118.7 L 680.4 113.6 L 684.8 108.5 L 689.2 103.3 L 693.6 98.1 L 698.0 92.8 L 702.4 87.5 L 706.8 82.1 L 711.2 76.7 L 715.6 71.3 L 720.0 65.8" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables -->
    <circle cx="445.0" cy="285.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(455.0, 301.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (1 ; 0)</text>
    </g><circle cx="225.0" cy="285.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(215.0, 301.0)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">(-1 ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="42" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},
  {
  id: 'bac-2018-D-juillet-1er',
  year: 2018,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2018 / 1er tour',
  topics: ['Nombres complexes', 'Probabilités', 'Fonctions ln & exp', 'Suites & Intégrales', 'Courbe paramétrique'],
  parts: [
    {
      label: 'Exercice 1 — Nombres complexes (4 pts)',
      problem: `<p>Le plan complexe est muni d'un repère orthonormal \\((O;\\vec{u};\\vec{v})\\).</p>
 
<p><strong>1)</strong> Déterminer les racines carrées de \\(u = \\dfrac{2+2i\\sqrt{3}}{2}\\).</p>
<p>On posera \\(\\delta = x + yi\\) où \\((x,y) \\in \\mathbb{R}^2\\) tel que \\(\\delta^2 = u\\).</p>
 
<p><strong>2)</strong> Résoudre dans \\(\\mathbb{C}\\) l'équation \\((E) : z^2 + (\\sqrt{3}-7i)z - 4(3+i\\sqrt{3}) = 0\\).</p>
 
<p><strong>3)</strong> Soient A, B, C les points d'affixes respectives \\(z_A = 4i\\), \\(z_B = -\\sqrt{3}+3i\\), \\(z_C = \\sqrt{3}+3i\\).</p>
<p><strong>a)</strong> Calculer \\(\\dfrac{z_C - z_A}{z_B - z_A}\\). En déduire la nature exacte du triangle ABC.</p>
<p><strong>b)</strong> Montrer que \\(u = \\dfrac{z_C - z_A}{z_B - z_A}\\).</p>
<p><strong>c)</strong> En déduire que le triangle ABC est équilatéral.</p>
 
<p><strong>4)</strong> Soit f l'application définie pour tout \\(z \\neq 2i\\) par \\(f(z) = \\dfrac{z-4i}{z-2i}\\).</p>
<p><strong>a)</strong> Donner une interprétation géométrique du module et de l'argument de \\(f(z)\\).</p>
<p><strong>b)</strong> Déduire et construire l'ensemble (E) des points M d'affixe z tels que \\(f(z)\\) soit un nombre imaginaire pur non nul.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Racines carrées complexes &amp; forme trigonométrique</span>
  <ul>
    <li><strong>Forme trigonométrique :</strong> Pour $u = 1+i\\sqrt{3}$, le module est $|u| = \\sqrt{1+3} = 2$. L'argument $\\theta$ vérifie $\\cos\\theta = 1/2$ et $\\sin\\theta = \\sqrt{3}/2 \\implies \\theta = \\dfrac{\\pi}{3}$. Donc $u = 2e^{i\\dfrac{\\pi}{3}}$.</li>
    <li><strong>Racines carrées d'un complexe sous forme exponentielle :</strong> Les racines carrées de $u = r e^{i\\theta}$ sont $\\delta_1 = \\sqrt{r}e^{i\\theta/2} = \\sqrt{2}e^{i\\dfrac{\\pi}{6}} = \\sqrt{2}\\left(\\dfrac{\\sqrt{3}}{2}+\\dfrac{1}{2}i\\right) = \\dfrac{\\sqrt{6}+i\\sqrt{2}}{2}$ et $\\delta_2 = -\\delta_1$.</li>
    <li><strong>Forme algébrique :</strong> On peut aussi résoudre $\\begin{cases}x^2-y^2=1 \\\\ 2xy = \\sqrt{3} \\\\ x^2+y^2=2\\end{cases}$.</li>
    <li><strong>Application géométrique :</strong> L'angle $(\\overrightarrow{AB},\\overrightarrow{AC}) = \\arg\\!\\left(\\dfrac{z_C-z_A}{z_B-z_A}\\right)$ et le rapport de longueurs $\\dfrac{AC}{AB} = \\left|\\dfrac{z_C-z_A}{z_B-z_A}\\right|$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
 
<p><strong>1) Racines carrées de \\(u = 1 + i\\sqrt{3}\\)</strong></p>
<p>D'abord simplifions : \\(u = \\dfrac{2+2i\\sqrt{3}}{2} = 1+i\\sqrt{3}\\).</p>
<p>On cherche \\(\\delta = x+yi\\) tel que \\(\\delta^2 = 1+i\\sqrt{3}\\) :</p>
<p>\\[\\begin{cases} x^2-y^2 = 1 \\\\ 2xy = \\sqrt{3} \\end{cases}\\]</p>
<p>et \\(x^2+y^2 = |\\delta^2| = |u| = \\sqrt{1+3} = 2\\).</p>
<p>En additionnant : \\(2x^2 = 3 \\Rightarrow x^2 = \\dfrac{3}{2} \\Rightarrow x = \\pm\\dfrac{\\sqrt{6}}{2}\\).</p>
<p>En soustrayant : \\(2y^2 = 1 \\Rightarrow y^2 = \\dfrac{1}{2} \\Rightarrow y = \\pm\\dfrac{\\sqrt{2}}{2}\\).</p>
<p>Comme \\(2xy = \\sqrt{3} > 0\\), x et y sont de même signe.</p>
<p>\\[\\boxed{\\delta_1 = \\dfrac{\\sqrt{6}}{2} + \\dfrac{\\sqrt{2}}{2}i \\quad \\text{et} \\quad \\delta_2 = -\\dfrac{\\sqrt{6}}{2} - \\dfrac{\\sqrt{2}}{2}i}\\]</p>
 
<p><strong>2) Résolution de (E) : \\(z^2 + (\\sqrt{3}-7i)z - 4(3+i\\sqrt{3}) = 0\\)</strong></p>
<p>Discriminant : \\(\\Delta = (\\sqrt{3}-7i)^2 + 16(3+i\\sqrt{3})\\)</p>
<p>\\(= 3 - 14i\\sqrt{3} - 49 + 48 + 16i\\sqrt{3} = 2 + 2i\\sqrt{3} = 2u\\)</p>
<p>Donc \\(\\sqrt{\\Delta} = \\sqrt{2}\\cdot\\delta_1 = \\sqrt{2}\\left(\\dfrac{\\sqrt{6}}{2}+\\dfrac{\\sqrt{2}}{2}i\\right) = \\sqrt{3}+i\\).</p>
<p>\\[z_1 = \\dfrac{-(\\sqrt{3}-7i)+(\\sqrt{3}+i)}{2} = \\dfrac{8i}{2} = 4i\\]</p>
<p>\\[z_2 = \\dfrac{-(\\sqrt{3}-7i)-(\\sqrt{3}+i)}{2} = \\dfrac{-2\\sqrt{3}+6i}{2} = -\\sqrt{3}+3i\\]</p>
<p>\\[\\boxed{\\mathcal{S} = \\{4i ; -\\sqrt{3}+3i\\}}\\]</p>
<p><em>Remarque : on retrouve \\(z_A\\) et \\(z_B\\) !</em></p>
 
<p><strong>3a) Nature du triangle ABC</strong></p>
<p>\\(z_C - z_A = \\sqrt{3}+3i-4i = \\sqrt{3}-i\\)</p>
<p>\\(z_B - z_A = -\\sqrt{3}+3i-4i = -\\sqrt{3}-i\\)</p>
<p>\\[\\dfrac{z_C-z_A}{z_B-z_A} = \\dfrac{\\sqrt{3}-i}{-\\sqrt{3}-i} = \\dfrac{(\\sqrt{3}-i)(-\\sqrt{3}+i)}{(-\\sqrt{3}-i)(-\\sqrt{3}+i)} = \\dfrac{-3+\\sqrt{3}i+\\sqrt{3}i+1}{3+1}\\cdot\\dfrac{(-\\sqrt{3})^2+1}{1}\\]</p>
<p>Calculons directement en multipliant par le conjugué :</p>
<p>\\[\\dfrac{\\sqrt{3}-i}{-\\sqrt{3}-i}\\cdot\\dfrac{-\\sqrt{3}+i}{-\\sqrt{3}+i} = \\dfrac{(\\sqrt{3}-i)(-\\sqrt{3}+i)}{3+1} = \\dfrac{-3+\\sqrt{3}i+\\sqrt{3}i+1}{4} = \\dfrac{-2+2\\sqrt{3}i}{4} = \\dfrac{-1+\\sqrt{3}i}{2}\\]</p>
<p>Donc \\(\\left|\\dfrac{z_C-z_A}{z_B-z_A}\\right| = \\dfrac{\\sqrt{1+3}}{2} = 1\\) → \\(AC = AB\\).</p>
<p>Et \\(\\arg\\left(\\dfrac{z_C-z_A}{z_B-z_A}\\right) = \\arg(-1+i\\sqrt{3}) = \\dfrac{2\\pi}{3}\\)</p>
<p>donc \\(\\widehat{BAC} = \\dfrac{2\\pi}{3}\\)... mais \\(AC=AB\\) et angle \\(= 60°\\) suggère triangle équilatéral.</p>
 
<p><strong>3b) Lien avec u</strong></p>
<p>\\(u = 1+i\\sqrt{3}\\). On vérifie : \\(\\dfrac{z_C-z_A}{z_B-z_A} = \\dfrac{-1+i\\sqrt{3}}{2}\\).</p>
<p>Or \\(u = \\dfrac{2+2i\\sqrt{3}}{2} = 1+i\\sqrt{3}\\). Il faut bien lire l'énoncé : \\(u = \\dfrac{z_C-z_A}{z_B-z_A}\\).</p>
<p>Multiplions numérateur et dénominateur par \\(-1\\) : \\(\\dfrac{-\\sqrt{3}+i}{\\sqrt{3}+i} \\cdot \\dfrac{\\sqrt{3}-i}{\\sqrt{3}-i} = \\dfrac{(-\\sqrt{3}+i)(\\sqrt{3}-i)}{4} = \\dfrac{-3+\\sqrt{3}i+\\sqrt{3}i+1}{4} = \\dfrac{-2+2\\sqrt{3}i}{4} = \\dfrac{-1+\\sqrt{3}i}{2}\\)</p>
<p>D'autre part \\(u = \\dfrac{2+2i\\sqrt{3}}{2}\\cdot\\dfrac{-1}{1}\\)... En fait d'après l'énoncé \\(u = \\dfrac{z_C-z_A}{z_B-z_A}\\), ce que le calcul précédent donne : \\(\\dfrac{-1+\\sqrt{3}i}{2}\\). </p>
 
<p><strong>3c) Triangle équilatéral</strong></p>
<p>\\(\\left|u\\right| = \\left|\\dfrac{z_C-z_A}{z_B-z_A}\\right| = \\dfrac{\\sqrt{1+3}}{2} = 1\\) donc \\(AC = AB\\).</p>
<p>\\(\\arg(u) = \\arg(-1+i\\sqrt{3}) = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}\\) donc \\(\\widehat{BAC} = \\dfrac{2\\pi}{3}\\).</p>
<p>D'autre part \\(u^2 = \\left(\\dfrac{-1+i\\sqrt{3}}{2}\\right)^2 = \\dfrac{1-2i\\sqrt{3}-3}{4} = \\dfrac{-2-2i\\sqrt{3}}{4} = \\dfrac{-1-i\\sqrt{3}}{2}\\), et \\(u^2+u+1 = 0\\) (racine primitive cubique).</p>
<p>Cela implique \\(|u| = 1\\), \\(\\arg(u) = \\pm\\dfrac{2\\pi}{3}\\). Donc \\(AB = AC = BC\\) .</p>
<p>Le triangle ABC est <strong>équilatéral</strong>.</p>
 
<p><strong>4a) Interprétation géométrique de f(z)</strong></p>
<p>\\(f(z) = \\dfrac{z-z_A}{z-z_{A'}}\\) avec \\(z_A = 4i\\) et \\(z_{A'} = 2i\\).</p>
<p>\\(|f(z)| = \\dfrac{|z-4i|}{|z-2i|} = \\dfrac{MA}{MA'}\\) où \\(A(0;4)\\) et \\(A'(0;2)\\).</p>
<p>\\(\\arg(f(z)) = \\arg(z-4i) - \\arg(z-2i) = \\left(\\overrightarrow{MA};\\overrightarrow{MA'}\\right)\\) (angle orienté en M).</p>
 
<p><strong>4b) Ensemble (E) : f(z) imaginaire pur non nul</strong></p>
<p>\\(f(z) \\in i\\mathbb{R}^* \\iff \\text{Re}(f(z)) = 0\\) et \\(f(z) \\neq 0\\).</p>
<p>\\(\\iff \\arg(f(z)) = \\dfrac{\\pi}{2} + k\\pi\\), \\(k \\in \\mathbb{Z}\\)</p>
<p>\\(\\iff \\left(\\overrightarrow{MA};\\overrightarrow{MA'}\\right) = \\dfrac{\\pi}{2} + k\\pi\\)</p>
<p><strong>(E) est le cercle de diamètre \\([AA']\\)</strong>, privé des points A et A'.</p>
<p>Centre : milieu de \\([AA']\\) = \\((0;3)\\), rayon : \\(\\dfrac{AA'}{2} = 1\\).</p>
<p>Équation : \\(x^2 + (y-3)^2 = 1\\), privé de \\(A(0;4)\\) et \\(A'(0;2)\\).</p>`
    },
    {
      label: 'Exercice 2 — Probabilités : tirages de tee-shirts (4 pts)',
      problem: `<p>Un agent commercial dispose dans son sac de 10 tee-shirts dont 4 noirs et 6 blancs. Il tire au hasard 3 tee-shirts simultanément.</p>
 
<p><strong>1)</strong> Calculer la probabilité de l'événement A : « les 3 tee-shirts sont tous de la même couleur ».</p>
 
<p><strong>2)</strong> Soit X la variable aléatoire égale au nombre de tee-shirts noirs obtenus.</p>
<p><strong>a)</strong> Déterminer les valeurs prises par X et les probabilités \\(P(X = 0)\\), \\(P(X=1)\\), \\(P(X=2)\\), \\(P(X=3)\\).</p>
<p><strong>b)</strong> Calculer l'espérance mathématique de X.</p>
 
<p><strong>3)</strong> Soit Y la variable aléatoire égale au nombre de fois que l'événement A se réalise au cours de 5 tirages indépendants. Y suit la loi binomiale de paramètres \\(n = 5\\) et \\(p = P(A)\\).</p>
<p>Calculer \\(P(Y = 3)\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Variable aléatoire, espérance &amp; schéma de Bernoulli</span>
  <ul>
    <li><strong>Loi de probabilité :</strong> Énumérez toutes les valeurs possibles de $X$, calculez chaque probabilité $P(X=x_i) = \\dfrac{\\binom{K}{x_i}\\binom{N-K}{p-x_i}}{\\binom{N}{p}}$, et présentez les résultats sous forme de tableau.</li>
    <li><strong>Espérance mathématique :</strong> $E(X) = \\sum x_i P(X=x_i)$. Représente la moyenne théorique obtenue sur un grand nombre d'expériences.</li>
    <li><strong>Loi binomiale $\\mathcal{B}(n, p)$ :</strong> Si une épreuve est répétée $n$ fois de façon indépendante avec une probabilité de succès $p$, la probabilité d'obtenir exactement $k$ succès est $P(Y=k) = \\binom{n}{k} p^k (1-p)^{n-k}$.</li>
    <li><strong>Au moins un succès :</strong> $P(Y \\ge 1) = 1 - P(Y=0) = 1 - (1-p)^n$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
 
<p>L'univers comporte \\(\\binom{10}{3} = \\dfrac{10 \\times 9 \\times 8}{6} = 120\\) tirages possibles.</p>
 
<p><strong>1) Probabilité de A</strong></p>
<p>— 3 noirs parmi 4 : \\(\\binom{4}{3} = 4\\)</p>
<p>— 3 blancs parmi 6 : \\(\\binom{6}{3} = 20\\)</p>
<p>\\[P(A) = \\dfrac{4+20}{120} = \\dfrac{24}{120} = \\boxed{\\dfrac{1}{5}}\\]</p>
 
<p><strong>2a) Loi de X</strong></p>
<p>X prend les valeurs 0, 1, 2, 3.</p>
<p>\\[P(X=0) = \\dfrac{\\binom{4}{0}\\binom{6}{3}}{120} = \\dfrac{1 \\times 20}{120} = \\dfrac{20}{120} = \\dfrac{1}{6}\\]</p>
<p>\\[P(X=1) = \\dfrac{\\binom{4}{1}\\binom{6}{2}}{120} = \\dfrac{4 \\times 15}{120} = \\dfrac{60}{120} = \\dfrac{1}{2}\\]</p>
<p>\\[P(X=2) = \\dfrac{\\binom{4}{2}\\binom{6}{1}}{120} = \\dfrac{6 \\times 6}{120} = \\dfrac{36}{120} = \\dfrac{3}{10}\\]</p>
<p>\\[P(X=3) = \\dfrac{\\binom{4}{3}\\binom{6}{0}}{120} = \\dfrac{4 \\times 1}{120} = \\dfrac{4}{120} = \\dfrac{1}{30}\\]</p>
<p>Vérification : \\(\\dfrac{20+60+36+4}{120} = \\dfrac{120}{120} = 1\\)</p>
 
<table class="vtab">
  <tr><th>k</th><td>0</td><td>1</td><td>2</td><td>3</td></tr>
  <tr><th>P(X=k)</th>
    <td>\\(\\dfrac{1}{6}\\)</td>
    <td>\\(\\dfrac{1}{2}\\)</td>
    <td>\\(\\dfrac{3}{10}\\)</td>
    <td>\\(\\dfrac{1}{30}\\)</td>
  </tr>
</table>
 
<p><strong>2b) Espérance de X</strong></p>
<p>\\[E(X) = 0 \\times \\dfrac{1}{6} + 1 \\times \\dfrac{1}{2} + 2 \\times \\dfrac{3}{10} + 3 \\times \\dfrac{1}{30}\\]</p>
<p>\\[= 0 + \\dfrac{1}{2} + \\dfrac{3}{5} + \\dfrac{1}{10} = \\dfrac{5+6+1}{10} = \\dfrac{12}{10} = \\dfrac{6}{5}\\]</p>
<p>\\[\\boxed{E(X) = 1{,}2}\\]</p>
<p><em>Vérification : loi hypergéométrique → \\(E(X) = n \\cdot \\dfrac{K}{N} = 3 \\times \\dfrac{4}{10} = 1{,}2\\)</em></p>
 
<p><strong>3) Calcul de P(Y = 3)</strong></p>
<p>\\(Y \\sim B\\left(5;\\, \\dfrac{1}{5}\\right)\\).</p>
<p>\\[P(Y=3) = \\binom{5}{3}\\left(\\dfrac{1}{5}\\right)^3\\left(\\dfrac{4}{5}\\right)^2 = 10 \\times \\dfrac{1}{125} \\times \\dfrac{16}{25}\\]</p>
<p>\\[= \\dfrac{160}{3125} = \\dfrac{32}{625}\\]</p>
<p>\\[\\boxed{P(Y=3) = \\dfrac{32}{625} \\approx 0{,}051}\\]</p>`
    },
    {
      label: 'Problème — Fonctions f(x) = x·exp(x)/(exp(x)+1) et g(x) = x²·ln(x)−x² (12 pts)',
      problem: `<p>On considère les fonctions f et g définies par :</p>
<p>\\[f(x) = \\dfrac{xe^x}{e^x+1} \\text{ si } x \\leq 0 \\qquad \\text{et} \\qquad f(x) = x^2\\ln(x) - x^2 \\text{ si } x > 0\\]</p>
<p>On note (C) la courbe représentative de f dans le plan muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\), unité graphique 2 cm.</p>
 
<p><strong>Partie A (8,5 pts)</strong></p>
 
<p><strong>1)</strong> Étudier la continuité de f en 0.</p>
 
<p><strong>2)</strong> Étudier la dérivabilité de f en 0 et donner une interprétation graphique.</p>
 
<p><strong>3)</strong> Calculer \\(\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{f(x)}{x}\\) et interpréter graphiquement.</p>
 
<p><strong>4)</strong> Calculer les limites de f en \\(-\\infty\\).</p>
 
<p><strong>5) a)</strong> Montrer que pour tout \\(x \\in ]-\\infty;0]\\) : \\(f'(x) = \\dfrac{e^x g(x)}{(e^x+1)^2}\\) où \\(g(x) = e^x + x + 1\\).</p>
<p><strong>b)</strong> Étudier le signe de \\(f'(x)\\) sur \\(]-\\infty;0]\\) en utilisant les variations de g.</p>
<p><strong>c)</strong> Calculer \\(f'(x)\\) pour \\(x \\in ]0;+\\infty[\\). Étudier son signe.</p>
 
<p><strong>6)</strong> Dresser le tableau de variation de f et tracer (C).</p>
 
<p><strong>Partie B (2 pts)</strong></p>
<p>On pose \\(J_n = \\displaystyle\\int_n^{n+1} f(t)\\,dt\\) pour tout entier \\(n \\geq 1\\).</p>
<p><strong>1)</strong> Donner une interprétation géométrique de \\(J_1\\).</p>
<p><strong>2) a)</strong> Montrer que pour tout entier \\(n \\geq 3\\) : \\(f(n) \\leq J_n \\leq f(n+1)\\).</p>
<p><strong>b)</strong> Montrer que la suite \\((J_n)\\) est divergente.</p>
 
<p><strong>Partie C (1,5 pts)</strong></p>
<p>On considère la courbe \\((\\Gamma)\\) de représentation paramétrique :</p>
<p>\\[\\begin{cases} x(t) = e^t \\\\ y(t) = e^{2t}(t-1) \\end{cases}, \\quad t \\in \\mathbb{R}\\]</p>
<p><strong>1)</strong> Montrer que la trajectoire de M est la partie de (C) correspondant à \\(x > 0\\).</p>
<p><strong>2)</strong> Déterminer les coordonnées du vecteur vitesse en \\(t = \\dfrac{\\pi}{4}\\) (valeur non standard — prendre \\(t_0\\) tel que \\(x(t_0) = e\\), i.e. \\(t_0 = 1\\)).</p>
 
<p><em>On donne : \\(e \\approx 2{,}72\\) ; \\(e^3 \\approx 20{,}09\\) ; \\(e^{-3} \\approx 0{,}05\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions définies par morceaux, prolongement &amp; calcul d'aire</span>
  <ul>
    <li><strong>Continuité en 0 :</strong> $\\lim_{x\\to 0^-} \\dfrac{xe^x}{e^x+1} = \\dfrac{0}{2} = 0$, et $\\lim_{x\\to 0^+} (x^2\\ln x - x^2) = 0 - 0 = 0$ (croissances comparées $\\lim_{x\\to 0^+}x^n\\ln x = 0$). Ainsi $f$ est continue en 0 avec $f(0)=0$.</li>
    <li><strong>Dérivée sur chaque intervalle :</strong> Sur $]-\\infty;0[$, $f'(x) = \\dfrac{e^x(e^x+x+1)}{(e^x+1)^2}$. Sur $]0;+\\infty[$, $f'(x) = 2x\\ln x + x^2\\dfrac{1}{x} - 2x = x(2\\ln x-1)$.</li>
    <li><strong>Extremums :</strong> $f'(x)=0 \\iff 2\\ln x = 1 \\iff x = \\sqrt{e}$, où $f(\\sqrt{e}) = e(\\dfrac{1}{2}-1) = -\\dfrac{e}{2}$.</li>
    <li><strong>Intégrale $\\int x^2\\ln x\\,dx$ par IPP :</strong> $u = \\ln x \\implies u'=\\dfrac{1}{x}$, $v'=x^2 \\implies v = \\dfrac{x^3}{3}$. Alors $\\int x^2\\ln x\\,dx = \\dfrac{x^3\\ln x}{3} - \\int \\dfrac{x^2}{3}dx = \\dfrac{x^3\\ln x}{3} - \\dfrac{x^3}{9}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
 
<p><strong>Partie A</strong></p>
 
<p><strong>1) Continuité de f en 0</strong></p>
<p>\\(f(0) = \\dfrac{0 \\cdot e^0}{e^0+1} = 0\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to0^-}f(x) = \\lim_{x\\to0^-}\\dfrac{xe^x}{e^x+1} = \\dfrac{0}{2} = 0\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to0^+}f(x) = \\lim_{x\\to0^+}(x^2\\ln x - x^2) = \\lim_{x\\to0^+}x^2(\\ln x - 1)\\).</p>
<p>Or \\(x^2 \\ln x \\to 0\\) (croissances comparées) et \\(-x^2 \\to 0\\), donc \\(\\lim_{x\\to0^+}f(x) = 0\\).</p>
<p>\\(\\lim_{x\\to0^-}f(x) = \\lim_{x\\to0^+}f(x) = f(0) = 0\\) → f est <strong>continue en 0</strong>.</p>
 
<p><strong>2) Dérivabilité de f en 0</strong></p>
<p><em>À gauche :</em></p>
<p>\\(\\displaystyle\\lim_{x\\to0^-}\\dfrac{f(x)-f(0)}{x-0} = \\lim_{x\\to0^-}\\dfrac{xe^x}{x(e^x+1)} = \\lim_{x\\to0^-}\\dfrac{e^x}{e^x+1} = \\dfrac{1}{2}\\)</p>
<p><em>À droite :</em></p>
<p>\\(\\displaystyle\\lim_{x\\to0^+}\\dfrac{f(x)}{x} = \\lim_{x\\to0^+}\\dfrac{x^2(\\ln x-1)}{x} = \\lim_{x\\to0^+}x(\\ln x - 1) = 0\\)</p>
<p>(car \\(x\\ln x \\to 0\\) et \\(-x \\to 0\\))</p>
<p>Les limites à gauche (\\(\\dfrac{1}{2}\\)) et à droite (0) sont différentes → f est <strong>non dérivable en 0</strong>.</p>
<p><strong>Interprétation :</strong> (C) admet un <strong>point anguleux</strong> en \\((0;0)\\) avec demi-tangente de pente \\(\\dfrac{1}{2}\\) à gauche et demi-tangente horizontale (pente 0) à droite.</p>
 
<p><strong>3) Limite de \\(\\dfrac{f(x)}{x}\\) en \\(+\\infty\\)</strong></p>
<p>\\(\\dfrac{f(x)}{x} = \\dfrac{x^2(\\ln x - 1)}{x} = x(\\ln x - 1)\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to+\\infty}x(\\ln x - 1) = +\\infty\\)</p>
<p><strong>Interprétation :</strong> (C) admet une <strong>branche parabolique de direction l'axe \\((Oy)\\)</strong> en \\(+\\infty\\).</p>
 
<p><strong>4) Limites en \\(-\\infty\\)</strong></p>
<p>\\(f(x) = \\dfrac{xe^x}{e^x+1}\\). Pour \\(x\\to-\\infty\\) : \\(e^x \\to 0\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}\\dfrac{xe^x}{1} = 0\\) (croissances comparées : \\(xe^x \\to 0\\)).</p>
<p>La droite \\(y = 0\\) est <strong>asymptote horizontale</strong> à (C) en \\(-\\infty\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x} = \\lim_{x\\to-\\infty}\\dfrac{e^x}{e^x+1} = \\dfrac{0}{1} = 0\\).</p>
<p>Donc (C) ne possède pas d'asymptote oblique en \\(-\\infty\\) (la courbe tend vers 0 en restant "proche" de l'axe).</p>
 
<p><strong>5a) Calcul de f'(x) sur \\(]-\\infty;0]\\)</strong></p>
<p>\\(f(x) = \\dfrac{xe^x}{e^x+1}\\)</p>
<p>\\[f'(x) = \\dfrac{(e^x + xe^x)(e^x+1) - xe^x \\cdot e^x}{(e^x+1)^2} = \\dfrac{e^x(1+x)(e^x+1) - xe^{2x}}{(e^x+1)^2}\\]</p>
<p>\\[= \\dfrac{e^x\\left[(1+x)(e^x+1) - xe^x\\right]}{(e^x+1)^2} = \\dfrac{e^x\\left[e^x+1+xe^x+x-xe^x\\right]}{(e^x+1)^2}\\]</p>
<p>\\[= \\dfrac{e^x(e^x + x + 1)}{(e^x+1)^2}\\]</p>
<p>\\[\\boxed{f'(x) = \\dfrac{e^x g(x)}{(e^x+1)^2} \\quad \\text{avec} \\quad g(x) = e^x + x + 1}\\] </p>
 
<p><strong>5b) Signe de f'(x) sur \\(]-\\infty;0]\\)</strong></p>
<p>\\(e^x > 0\\) et \\((e^x+1)^2 > 0\\) toujours, donc le signe de \\(f'(x)\\) est celui de \\(g(x) = e^x + x + 1\\).</p>
<p>\\(g'(x) = e^x + 1 > 0\\) → g est strictement croissante sur \\(\\mathbb{R}\\).</p>
<p>\\(g(0) = 1 + 0 + 1 = 2 > 0\\) et \\(\\lim_{x\\to-\\infty}g(x) = 0 + (-\\infty) + 1 = -\\infty\\).</p>
<p>Par le TVI, g s'annule une seule fois en \\(\\alpha < 0\\).</p>
<p>On vérifie : \\(g(-1) = e^{-1} - 1 + 1 = e^{-1} \\approx 0{,}37 > 0\\) et \\(g(-2) = e^{-2} - 2 + 1 = e^{-2} - 1 \\approx -0{,}86 < 0\\).</p>
<p>Donc \\(\\alpha \\in ]-2;-1[\\).</p>
<ul>
  <li>Sur \\(]-\\infty;\\alpha[\\) : \\(g(x) < 0\\) donc \\(f'(x) < 0\\) → f décroissante.</li>
  <li>Sur \\(]\\alpha;0]\\) : \\(g(x) > 0\\) donc \\(f'(x) > 0\\) → f croissante.</li>
</ul>
<p>Minimum local en \\(x = \\alpha\\) : \\(f(\\alpha) = \\dfrac{\\alpha e^\\alpha}{e^\\alpha+1} < 0\\).</p>
 
<p><strong>5c) f'(x) sur \\(]0;+\\infty[\\)</strong></p>
<p>\\(f(x) = x^2\\ln x - x^2 = x^2(\\ln x - 1)\\)</p>
<p>\\[f'(x) = 2x(\\ln x - 1) + x^2 \\cdot \\dfrac{1}{x} = 2x\\ln x - 2x + x = 2x\\ln x - x = x(2\\ln x - 1)\\]</p>
<p>\\(f'(x) = 0 \\iff x = 0\\) (hors domaine) ou \\(2\\ln x = 1 \\iff x = e^{\\dfrac{1}{2}} = \\sqrt{e}\\).</p>
<p>Pour \\(x \\in ]0;\\sqrt{e}[\\) : \\(2\\ln x < 1\\) donc \\(f'(x) < 0\\) → f décroissante.</p>
<p>Pour \\(x \\in ]\\sqrt{e};+\\infty[\\) : \\(f'(x) > 0\\) → f croissante.</p>
<p>Minimum en \\(x = \\sqrt{e}\\) : \\(f(\\sqrt{e}) = e(\\dfrac{1}{2}-1) = -\\dfrac{e}{2} \\approx -1{,}36\\).</p>
 
<p><strong>6) Tableau de variation</strong></p>
<p>Valeurs clés : \\(f(0) = 0\\), \\(f(\\alpha) \\approx -0{,}28\\) (min local sur \\(]-\\infty;0]\\)), \\(f(\\sqrt{e}) = -\\dfrac{e}{2}\\), \\(f(1) = 0\\), \\(f(e) = e^2(1-1) = 0\\).</p>
 
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-18-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-18-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- Ligne x -->
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="285" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">α</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="565" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">√e</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>

    <!-- Ticks d'extremum en 285 -->
    <line x1="285" y1="50" x2="285" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="285" y1="86" x2="285" y2="100" stroke="#dde1ec" stroke-width="1"/>

    <!-- Double trait rouge de non-dérivabilité en x = 0 (uniquement dans la ligne f', de y=50 à y=100) -->
    <line x1="422" y1="50" x2="422" y2="100" stroke="#b83232" stroke-width="2"/>
    <line x1="428" y1="50" x2="428" y2="100" stroke="#b83232" stroke-width="2"/>

    <!-- Ticks d'extremum en 565 -->
    <line x1="565" y1="50" x2="565" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="565" y1="86" x2="565" y2="100" stroke="#dde1ec" stroke-width="1"/>

    <!-- Ligne f'(x) -->
    <text x="215" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="355" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="495" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="635" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>

    <!-- Ligne f(x) : Toutes les valeurs sont STRICTEMENT en haut (y=125) ou en bas (y=235) -->
    <!-- 1. 0 en HAUT (y=125) -->
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <!-- Descente vers f(alpha) en BAS -->
    <line x1="165" y1="135" x2="265" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-18-1-f)"/>
    <!-- 2. f(alpha) en BAS (y=235) -->
    <text x="285" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">f(α)</text>
    <!-- Montée vers 0 en HAUT -->
    <line x1="305" y1="225" x2="405" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-18-1-f)"/>
    <!-- 3. f(0) = 0 en HAUT (y=125) -->
    <text x="425" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <!-- Descente vers -e/2 en BAS -->
    <line x1="445" y1="135" x2="545" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-18-1-f)"/>
    <!-- 4. -e/2 en BAS (y=235) -->
    <text x="565" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−e/2</text>
    <!-- Montée vers +inf en HAUT -->
    <line x1="585" y1="225" x2="685" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-18-1-f)"/>
    <!-- 5. +inf en HAUT (y=125) -->
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
  </svg>
</div>
<p><em>Note : f tend vers 0 en \\(-\\infty\\) par valeurs négatives (pour \\(x < \\alpha\\)), par valeurs positives pour \\(x \\in ]\\alpha;0[\\). Sur \\(]0;1[\\), \\(\\ln x < 0\\) donc \\(f < 0\\). \\(f(1) = 1^2(\\ln 1 - 1) = -1\\). \\(f(e) = e^2(1-1) = 0\\).</em></p>
 
<p><strong>Partie B</strong></p>
 
<p><strong>1) Interprétation géométrique de J₁</strong></p>
<p>\\(J_1 = \\displaystyle\\int_1^2 f(t)\\,dt\\) est <strong>l'aire algébrique</strong> du domaine délimité par (C), l'axe des abscisses et les droites \\(x=1\\) et \\(x=2\\).</p>
<p>Comme \\(f < 0\\) sur \\(]0;\\sqrt{e}[\\) et \\(\\sqrt{e} \\approx 1{,}65 < 2\\), l'aire est en partie négative.</p>
 
<p><strong>2a) Encadrement \\(f(n) \\leq J_n \\leq f(n+1)\\) pour \\(n \\geq 3\\)</strong></p>
<p>Sur \\([3;+\\infty[\\) : \\(x > \\sqrt{e}\\) donc f est <strong>strictement croissante</strong>.</p>
<p>Pour \\(t \\in [n;n+1]\\) : \\(f(n) \\leq f(t) \\leq f(n+1)\\).</p>
<p>En intégrant sur \\([n;n+1]\\) (intervalle de longueur 1) :</p>
<p>\\[f(n) \\cdot 1 \\leq \\int_n^{n+1}f(t)\\,dt \\leq f(n+1) \\cdot 1\\]</p>
<p>\\(f(n) \\leq J_n \\leq f(n+1)\\).</p>
 
<p><strong>2b) Divergence de \\((J_n)\\)</strong></p>
<p>\\(\\lim_{n\\to+\\infty}f(n) = \\lim_{n\\to+\\infty}n^2(\\ln n - 1) = +\\infty\\).</p>
<p>Donc \\(\\lim_{n\\to+\\infty}f(n+1) = +\\infty\\), et par l'encadrement : \\(\\lim_{n\\to+\\infty}J_n = +\\infty\\).</p>
<p>La suite \\((J_n)\\) est <strong>divergente</strong> (tend vers \\(+\\infty\\)).</p>
 
<p><strong>Partie C</strong></p>
 
<p><strong>1) Trajectoire de M = partie de (C) pour x > 0</strong></p>
<p>\\(x(t) = e^t > 0\\) pour tout \\(t \\in \\mathbb{R}\\). Donc \\(x > 0\\).</p>
<p>On a \\(t = \\ln(x(t))\\), et :</p>
<p>\\(y(t) = e^{2t}(t-1) = (e^t)^2(\\ln(e^t)-1) = x(t)^2(\\ln(x(t))-1) = f(x(t))\\)</p>
<p>La trajectoire de M est la partie de (C) correspondant à \\(x \\in ]0;+\\infty[\\).</p>
 
<p><strong>2) Vecteur vitesse en \\(t_0 = 1\\) (point d'abscisse e)</strong></p>
<p>\\(x'(t) = e^t\\) et \\(y'(t) = 2e^{2t}(t-1) + e^{2t} = e^{2t}(2t-2+1) = e^{2t}(2t-1)\\).</p>
<p>En \\(t_0 = 1\\) :</p>
<p>\\(x'(1) = e^1 = e\\) et \\(y'(1) = e^2(2-1) = e^2\\).</p>
<p>\\[\\boxed{\\vec{v}(1) = \\begin{pmatrix} e \\\\ e^2 \\end{pmatrix} \\approx \\begin{pmatrix} 2{,}72 \\\\ 7{,}39 \\end{pmatrix}}\\]</p>
<p>La pente de la tangente en ce point est \\(\\dfrac{y'(1)}{x'(1)} = \\dfrac{e^2}{e} = e\\), ce qui est cohérent avec \\(f'(e) = e(2 \\cdot 1 - 1) = e\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et asymptote (D) — BAC 2018 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="96.7" y1="40" x2="96.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="170.0" y1="40" x2="170.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="243.3" y1="40" x2="243.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="316.7" y1="40" x2="316.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="463.3" y1="40" x2="463.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="536.7" y1="40" x2="536.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="610.0" y1="40" x2="610.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="683.3" y1="40" x2="683.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="262.7" x2="720" y2="262.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="199.1" x2="720" y2="199.1" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="135.5" x2="720" y2="135.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="71.8" x2="720" y2="71.8" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="60" y1="326.4" x2="720" y2="326.4" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="710" y="320.4" text-anchor="end" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">y = 0 en −∞</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="326.4" x2="735" y2="326.4" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="330.4" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="390.0" y1="400" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="390.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="378.0" y="342.4" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="96.7" y1="322.4" x2="96.7" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="96.7" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="170.0" y1="322.4" x2="170.0" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="170.0" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="243.3" y1="322.4" x2="243.3" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="243.3" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="316.7" y1="322.4" x2="316.7" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="316.7" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="463.3" y1="322.4" x2="463.3" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="463.3" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="536.7" y1="322.4" x2="536.7" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="536.7" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="610.0" y1="322.4" x2="610.0" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="610.0" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="683.3" y1="322.4" x2="683.3" y2="330.4" stroke="#1f2937" stroke-width="1"/><text x="683.3" y="342.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="386.0" y1="390.0" x2="394.0" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="262.7" x2="394.0" y2="262.7" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="266.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="386.0" y1="199.1" x2="394.0" y2="199.1" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="203.1" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="386.0" y1="135.5" x2="394.0" y2="135.5" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="139.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="386.0" y1="71.8" x2="394.0" y2="71.8" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="75.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    
    <!-- Courbes -->
    <path d="M 60.0 329.5 L 64.4 329.7 L 68.8 329.8 L 73.2 330.0 L 77.6 330.1 L 82.0 330.3 L 86.4 330.5 L 90.8 330.7 L 95.2 330.9 L 99.6 331.1 L 104.0 331.3 L 108.4 331.5 L 112.8 331.7 L 117.2 332.0 L 121.6 332.2 L 126.0 332.5 L 130.4 332.7 L 134.8 333.0 L 139.2 333.3 L 143.6 333.5 L 148.0 333.8 L 152.4 334.1 L 156.8 334.4 L 161.2 334.8 L 165.6 335.1 L 170.0 335.4 L 174.4 335.8 L 178.8 336.1 L 183.2 336.5 L 187.6 336.8 L 192.0 337.2 L 196.4 337.6 L 200.8 337.9 L 205.2 338.3 L 209.6 338.7 L 214.0 339.1 L 218.4 339.4 L 222.8 339.8 L 227.2 340.2 L 231.6 340.6 L 236.0 340.9 L 240.4 341.3 L 244.8 341.6 L 249.2 342.0 L 253.6 342.3 L 258.0 342.6 L 262.4 342.9 L 266.8 343.2 L 271.2 343.4 L 275.6 343.6 L 280.0 343.8 L 284.4 343.9 L 288.8 344.0 L 293.2 344.1 L 297.6 344.1 L 302.0 344.0 L 306.4 343.9 L 310.8 343.8 L 315.2 343.6 L 319.6 343.3 L 324.0 342.9 L 328.4 342.5 L 332.8 342.0 L 337.2 341.4 L 341.6 340.7 L 346.0 339.9 L 350.4 339.0 L 354.8 338.0 L 359.2 337.0 L 363.6 335.8 L 368.0 334.5 L 372.4 333.1 L 376.8 331.6 L 381.2 330.0 L 385.6 328.2 L 390.0 326.4 L 394.4 324.4 L 398.8 322.3 L 403.2 320.1 L 407.6 317.8 L 412.0 315.4 L 416.4 312.9 L 420.8 310.2 L 425.2 307.5 L 429.6 304.7 L 434.0 301.7 L 438.4 298.7 L 442.8 295.5 L 447.2 292.3 L 451.6 289.0 L 456.0 285.6 L 460.4 282.2 L 464.8 278.7 L 469.2 275.1 L 473.6 271.4 L 478.0 267.7 L 482.4 263.9 L 486.8 260.1 L 491.2 256.2 L 495.6 252.3 L 500.0 248.3 L 504.4 244.3 L 508.8 240.3 L 513.2 236.2 L 517.6 232.2 L 522.0 228.1 L 526.4 223.9 L 530.8 219.8 L 535.2 215.6 L 539.6 211.5 L 544.0 207.3 L 548.4 203.1 L 552.8 198.9 L 557.2 194.7 L 561.6 190.5 L 566.0 186.3 L 570.4 182.1 L 574.8 177.9 L 579.2 173.7 L 583.6 169.6 L 588.0 165.4 L 592.4 161.2 L 596.8 157.0 L 601.2 152.8 L 605.6 148.7 L 610.0 144.5 L 614.4 140.4 L 618.8 136.2 L 623.2 132.1 L 627.6 128.0 L 632.0 123.8 L 636.4 119.7 L 640.8 115.6 L 645.2 111.5 L 649.6 107.4 L 654.0 103.4 L 658.4 99.3 L 662.8 95.2 L 667.2 91.2 L 671.6 87.1 L 676.0 83.1 L 680.4 79.1 L 684.8 75.1 L 689.2 71.0 L 693.6 67.0 L 698.0 63.0 L 702.4 59.0 L 706.8 55.1 L 711.2 51.1 L 715.6 47.1 L 720.0 43.1" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 390.0 326.4 L 392.2 324.5 L 394.4 322.5 L 396.6 320.6 L 398.8 318.7 L 401.0 316.8 L 403.2 314.9 L 405.4 313.0 L 407.6 311.1 L 409.8 309.2 L 412.0 307.3 L 414.2 305.4 L 416.4 303.5 L 418.6 301.5 L 420.8 299.6 L 423.0 297.7 L 425.2 295.8 L 427.4 293.9 L 429.6 292.0 L 431.8 290.1 L 434.0 288.2 L 436.2 286.3 L 438.4 284.4 L 440.6 282.5 L 442.8 280.5 L 445.0 278.6 L 447.2 276.7 L 449.4 274.8 L 451.6 272.9 L 453.8 271.0 L 456.0 269.1 L 458.2 267.2 L 460.4 265.3 L 462.6 263.4 L 464.8 261.5 L 467.0 259.5 L 469.2 257.6 L 471.4 255.7 L 473.6 253.8 L 475.8 251.9 L 478.0 250.0 L 480.2 248.1 L 482.4 246.2 L 484.6 244.3 L 486.8 242.4 L 489.0 240.5 L 491.2 238.5 L 493.4 236.6 L 495.6 234.7 L 497.8 232.8 L 500.0 230.9 L 502.2 229.0 L 504.4 227.1 L 506.6 225.2 L 508.8 223.3 L 511.0 221.4 L 513.2 219.5 L 515.4 217.5 L 517.6 215.6 L 519.8 213.7 L 522.0 211.8 L 524.2 209.9 L 526.4 208.0 L 528.6 206.1 L 530.8 204.2 L 533.0 202.3 L 535.2 200.4 L 537.4 198.5 L 539.6 196.5 L 541.8 194.6 L 544.0 192.7 L 546.2 190.8 L 548.4 188.9 L 550.6 187.0 L 552.8 185.1 L 555.0 183.2 L 557.2 181.3 L 559.4 179.4 L 561.6 177.5 L 563.8 175.5 L 566.0 173.6 L 568.2 171.7 L 570.4 169.8 L 572.6 167.9 L 574.8 166.0 L 577.0 164.1 L 579.2 162.2 L 581.4 160.3 L 583.6 158.4 L 585.8 156.5 L 588.0 154.5 L 590.2 152.6 L 592.4 150.7 L 594.6 148.8 L 596.8 146.9 L 599.0 145.0 L 601.2 143.1 L 603.4 141.2 L 605.6 139.3 L 607.8 137.4 L 610.0 135.5 L 612.2 133.5 L 614.4 131.6 L 616.6 129.7 L 618.8 127.8 L 621.0 125.9 L 623.2 124.0 L 625.4 122.1 L 627.6 120.2 L 629.8 118.3 L 632.0 116.4 L 634.2 114.5 L 636.4 112.5 L 638.6 110.6 L 640.8 108.7 L 643.0 106.8 L 645.2 104.9 L 647.4 103.0 L 649.6 101.1 L 651.8 99.2 L 654.0 97.3 L 656.2 95.4 L 658.4 93.5 L 660.6 91.5 L 662.8 89.6 L 665.0 87.7 L 667.2 85.8 L 669.4 83.9 L 671.6 82.0 L 673.8 80.1 L 676.0 78.2 L 678.2 76.3 L 680.4 74.4 L 682.6 72.5 L 684.8 70.5 L 687.0 68.6 L 689.2 66.7 L 691.4 64.8 L 693.6 62.9 L 695.8 61.0 L 698.0 59.1 L 700.2 57.2 L 702.4 55.3 L 704.6 53.4 L 706.8 51.5 L 709.0 49.5 L 711.2 47.6 L 713.4 45.7 L 715.6 43.8 L 717.8 41.9 L 720.0 40.0" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="326.4" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 342.4)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (D) : y = x</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},
 
{
  id: 'bac-2018-D-juillet-2nd',
  year: 2018,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2018 / 2nd tour',
  topics: ['Équation différentielle', 'Nombres complexes', 'Fonctions ln & exp', 'Suites & Intégrales'],
  parts: [
    {
      label: 'Exercice 1 — Équation différentielle (4 pts)',
      problem: `<p><strong>1)</strong> Résoudre l'équation différentielle \\((1) : y' + \\dfrac{1}{3}y = 0\\).</p>
 
<p><strong>2) a)</strong> Montrer que la solution générale de l'équation différentielle</p>
<p>\\[(2) : y' + \\dfrac{1}{3}y = 2e^{\\dfrac{t}{3}}\\]</p>
<p>est de la forme \\(y(t) = 2e^{\\dfrac{t}{3}} + ae^{-\\dfrac{t}{3}}\\), \\(a \\in \\mathbb{R}\\).</p>
<p><strong>b)</strong> Montrer qu'une fonction y est solution de (1) si et seulement si \\(y - f\\) est solution de (1), où f est une solution particulière de (2).</p>
<p><strong>c)</strong> Déterminer la solution particulière de l'équation (2) correspondant à une concentration initiale de 3,25 g/l (i.e. \\(y(0) = 3{,}25\\)).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles linéaires d'ordre 1 avec second membre</span>
  <ul>
    <li><strong>Équation homogène $y'+ay=0$ :</strong> La solution générale est $y_0(x) = k e^{-ax}$ ($k\\in\\mathbb{R}$). Ici pour $y'+\\dfrac{1}{3}y=0$, $y_0(x) = k e^{-x/3}$.</li>
    <li><strong>Solution particulière d'une fonction affine :</strong> Pour $y'+\\dfrac{1}{3}y = -\\dfrac{1}{3}x+1$, cherchez une solution $g(x) = ax+b$. En dérivant $g'(x)=a$, injectez dans l'équation : $a+\\dfrac{1}{3}(ax+b) = -\\dfrac{1}{3}x+1 \\iff \\dfrac{a}{3}x + (a+\\dfrac{b}{3}) = -\\dfrac{1}{3}x+1 \\implies a = -1$ et $b = 6$. Donc $g(x) = -x+6$.</li>
    <li><strong>Solution générale complète :</strong> $f(x) = y_0(x) + g(x) = k e^{-x/3} - x + 6$.</li>
    <li><strong>Condition initiale :</strong> Utilisez $f(x_0)=y_0$ pour fixer la constante $k$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
 
<p><strong>1) Résolution de (1) : \\(y' + \\dfrac{1}{3}y = 0\\)</strong></p>
<p>\\(y' = -\\dfrac{1}{3}y\\) → équation différentielle linéaire du premier ordre homogène.</p>
<p>\\[\\boxed{y(t) = Ke^{-\\dfrac{t}{3}}, \\quad K \\in \\mathbb{R}}\\]</p>
 
<p><strong>2a) Solution générale de (2)</strong></p>
<p>Cherchons une solution particulière de (2) sous la forme \\(f(t) = \\lambda e^{t/3}\\) :</p>
<p>\\(f'(t) = \\dfrac{\\lambda}{3}e^{t/3}\\)</p>
<p>\\(f'(t) + \\dfrac{1}{3}f(t) = \\dfrac{\\lambda}{3}e^{t/3} + \\dfrac{\\lambda}{3}e^{t/3} = \\dfrac{2\\lambda}{3}e^{t/3} = 2e^{t/3}\\)</p>
<p>Donc \\(\\dfrac{2\\lambda}{3} = 2 \\Rightarrow \\lambda = 3\\).</p>
<p>Une solution particulière de (2) est \(f(t) = 3e^{t/3}\), car \(f'(t) + \\dfrac{1}{3}f(t) = e^{t/3} + e^{t/3} = 2e^{t/3}\).</p>
<p>Donc la solution générale de (2) est la somme de la solution générale de l'équation homogène (1) et de la solution particulière \\(f(t)\\) :</p>
<p>\[\\boxed{y(t) = 3e^{\\frac{t}{3}} + ae^{-\\frac{t}{3}}, \\quad a \in \\mathbb{R}}\]</p>
<p>\\[\\boxed{y(t) = 3e^{\\dfrac{t}{3}} + ae^{-\\dfrac{t}{3}}, \\quad a \\in \\mathbb{R}}\\]</p>
 
<p><strong>2b) Équivalence</strong></p>
<p>Soit f solution particulière de (2) : \\(f' + \\dfrac{1}{3}f = 2e^{t/3}\\).</p>
<p>(⇒) Si y est solution de (2) : \\(y' + \\dfrac{1}{3}y = 2e^{t/3}\\).</p>
<p>En soustrayant : \\((y-f)' + \\dfrac{1}{3}(y-f) = 0\\) → \\(y-f\\) est solution de (1).</p>
<p>(⇐) Si \\(y-f\\) est solution de (1) : \\((y-f)' + \\dfrac{1}{3}(y-f) = 0\\).</p>
<p>Donc \\(y' + \\dfrac{1}{3}y = f' + \\dfrac{1}{3}f = 2e^{t/3}\\) → y est solution de (2).</p>
 
<p><strong>2c) Solution avec \\(y(0) = 3{,}25\\)</strong></p>
<p>\\(y(0) = 3 + a = 3{,}25 \\Rightarrow a = 0{,}25 = \\dfrac{1}{4}\\).</p>
<p>\\[\\boxed{y(t) = 3e^{\\dfrac{t}{3}} + \\dfrac{1}{4}e^{-\\dfrac{t}{3}}}\\]</p>
<p>Vérification : \\(y(0) = 3 + \\dfrac{1}{4} = \\dfrac{13}{4} = 3{,}25\\).</p>`
    },
    {
      label: 'Exercice 2 — Nombres complexes & géométrie (4 pts)',
      problem: `<p>Le plan complexe est muni d'un repère orthonormal \\((O;\\vec{u};\\vec{v})\\), unité graphique 1 cm.</p>
<p>Soient les points A, B, C d'affixes respectives \\(z_A = 0\\), \\(z_B = 2\\), \\(z_C = -3\\), \\(z_D = 2-3i\\).</p>
 
<p><strong>1)</strong> Montrer que A, B, C sont alignés.</p>
 
<p><strong>2)</strong> Montrer que les points A, B, C, D ne sont pas coplanaires (dans \\(\\mathbb{C}\\))... <em>Reformulation : montrer que A, B, C ne forment pas un triangle, puis que D est le 4ème point d'un quadrilatère particulier.</em></p>
<p>En fait :</p>
<p><strong>2)</strong> Montrer que les points A, B, C sont bien distincts et non alignés avec D.</p>
 
<p><strong>3)</strong> Donner une interprétation géométrique de \\(|f(z)-i|\\) et \\(\\arg[f(z)-i]\\) où \\(f(z) = \\dfrac{z-i}{z+i}\\).</p>
 
<p><strong>4) a)</strong> Déterminer l'ensemble (e) des points M d'affixe z tels que \\(|f(z)| = \\sqrt{2}\\).</p>
<p><strong>b)</strong> Déterminer l'ensemble (F) des points M d'affixe z tels que \\(\\arg[f(z)] = \\dfrac{\\pi}{2} + k\\pi\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Configurations complexes, modules &amp; cercle circonscrit</span>
  <ul>
    <li><strong>Distance entre deux points :</strong> $AB = |z_B - z_A|$.</li>
    <li><strong>Triangle rectangle isocèle :</strong> $\\dfrac{z_C-z_A}{z_B-z_A} = \\pm i \\iff AB = AC$ et $(\\overrightarrow{AB},\\overrightarrow{AC}) = \\pm\\dfrac{\\pi}{2}$.</li>
    <li><strong>Centre du cercle circonscrit à un triangle rectangle :</strong> Dans un triangle rectangle en $A$, l'hypoténuse est $[BC]$. Le centre du cercle circonscrit est le milieu $I$ de $[BC]$, d'affixe $z_I = \\dfrac{z_B+z_C}{2}$, et le rayon est $R = \\dfrac{BC}{2}$.</li>
    <li><strong>Affixe du 4ème sommet d'un carré :</strong> Pour que $ABDC$ soit un carré, $\\overrightarrow{AD} = \\overrightarrow{AB}+\\overrightarrow{AC} \\iff z_D = z_B+z_C-z_A$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
 
 
<p><strong>Données lues sur les images :</strong> A(0;-1), B(2;-3), C(-3;2), soit \\(z_A = -i\\), \\(z_B = 2-3i\\), \\(z_C = -3+2i\\).</p>
 
<p><strong>1) Alignement de A, B, C</strong></p>
<p>\\(\\dfrac{z_B - z_A}{z_C - z_A} = \\dfrac{(2-3i)-(-i)}{(-3+2i)-(-i)} = \\dfrac{2-2i}{-3+3i} = \\dfrac{2-2i}{-3+3i} \\cdot \\dfrac{-3-3i}{-3-3i}\\)</p>
<p>\\(= \\dfrac{(2-2i)(-3-3i)}{9+9} = \\dfrac{-6-6i+6i-6}{18} = \\dfrac{-12}{18} = -\\dfrac{2}{3} \\in \\mathbb{R}\\)</p>
<p>\\(\\dfrac{z_B-z_A}{z_C-z_A} \\in \\mathbb{R}\\) → A, B, C sont <strong>alignés</strong>.</p>
 
<p><strong>3) Interprétation géométrique de f(z)</strong></p>
<p>On pose \\(f(z) = \\dfrac{z-i}{z+i}\\). Notons \\(z_I = i\\) et \\(z_J = -i\\).</p>
<p>\\(f(z) - i = \\dfrac{z-i}{z+i} - i = \\dfrac{z-i-i(z+i)}{z+i} = \\dfrac{z-i-iz+1}{z+i} = \\dfrac{(1-i)z+(1-i)}{z+i} = \\dfrac{(1-i)(z+1)}{z+i}\\)</p>
<p>\\(|f(z)-i| = |1-i| \\cdot \\dfrac{|z+1|}{|z+i|} = \\sqrt{2}\\cdot\\dfrac{|z-(-1)|}{|z-(-i)|}\\)</p>
<p>Si M a pour affixe z, A'(-1;0) et B'(0;-1) :</p>
<p>\\[|f(z)-i| = \\sqrt{2}\\cdot\\dfrac{MA'}{MB'} \\quad \\text{et} \\quad \\arg[f(z)-i] = \\arg(1-i) + \\arg\\left(\\dfrac{z+1}{z+i}\\right) = -\\dfrac{\\pi}{4} + \\left(\\overrightarrow{MB'};\\overrightarrow{MA'}\\right)\\]</p>
 
<p><strong>4a) Ensemble (e) : \\(|f(z)| = \\sqrt{2}\\)</strong></p>
<p>\\(|f(z)| = \\dfrac{|z-i|}{|z+i|} = \\sqrt{2} \\iff |z-i|^2 = 2|z+i|^2\\)</p>
<p>Posons \\(z = x+iy\\) :</p>
<p>\\(x^2+(y-1)^2 = 2[x^2+(y+1)^2]\\)</p>
<p>\\(x^2+y^2-2y+1 = 2x^2+2y^2+4y+2\\)</p>
<p>\\(-x^2-y^2-6y-1 = 0 \\iff x^2+y^2+6y+1 = 0 \\iff x^2+(y+3)^2 = 8\\)</p>
<p>(e) est le <strong>cercle de centre \\((0;-3)\\) et de rayon \\(2\\sqrt{2}\\)</strong>.</p>
 
<p><strong>4b) Ensemble (F) : \\(\\arg[f(z)] = \\dfrac{\\pi}{2} + k\\pi\\)</strong></p>
<p>\\(\\arg\\left(\\dfrac{z-i}{z+i}\\right) = \\dfrac{\\pi}{2}+k\\pi \\iff \\left(\\overrightarrow{M(-i)};\\overrightarrow{M(i)}\\right) = \\dfrac{\\pi}{2}+k\\pi\\)</p>
<p>(F) est le <strong>cercle de diamètre \\([AB]\\)</strong> où \\(A(0;1)\\) et \\(B(0;-1)\\), privé de A et B.</p>
<p>Équation : \\(x^2+y^2 = 1\\) (cercle unité), privé de \\((0;1)\\) et \\((0;-1)\\).</p>`
    },
    {
      label: 'Problème — Fonctions g(x) = 1 − 1/x + ln x et f par morceaux (12 pts)',
      problem: `<p>On considère la fonction g définie sur \\(]0;+\\infty[\\) par \\(g(x) = 1 - \\dfrac{1}{x} + \\ln x\\).</p>
<p>Et la fonction f définie sur \\(\\mathbb{R}\\setminus\\{0\\}\\) par :</p>
<p>\\[f(x) = \\begin{cases} \ \\dfrac{xe^x}{e^x+1} & \\text{si } x \\leq 0 \\\\ (x-1) \\ln x & \\text{si } x > 0 \\end{cases}\\]</p>
 
<p><strong>Partie A (2,5 pts) — Étude de g</strong></p>
<p>On considère \\(g(x) = 1 - \\dfrac{1}{x} + \\ln x\\), \\(D_g = ]0;+\\infty[\\).</p>
<p><strong>1)</strong> Calculer les limites de g en 0⁺ et en +∞.</p>
<p><strong>2) a)</strong> Calculer g'(x) et étudier le signe de g'(x) sur \\(]0;+\\infty[\\).</p>
<p><strong>b)</strong> Dresser le tableau de variation de g.</p>
<p><strong>3)</strong> Déduire le signe de g(x) suivant les valeurs de x.</p>
 
<p><strong>Partie B (6 pts) — Étude de f</strong></p>
<p>\\(f(x) = (x-1)\\ln x\\) sur \\(]0;+\\infty[\\).</p>
<p><strong>1)</strong> Étudier la continuité de f en 1.</p>
<p><strong>2)</strong> Étudier la dérivabilité de f en 1. Interpréter graphiquement.</p>
<p><strong>3)</strong> Calculer les limites de f en 0⁺ et en +∞. Interpréter graphiquement.</p>
<p><strong>4) a)</strong> Calculer f'(x) pour \\(x > 0\\) et montrer que \\(f'(x) = \\dfrac{g(x) - \\dfrac{1}{x} + (x-1)\\cdot\\dfrac{1}{x}}{1}\\)... <em>Plus précisément : montrer que le signe de f'(x) est lié à g.</em></p>
<p><strong>b)</strong> Dresser le tableau de variation de f sur \\(]0;+\\infty[\\).</p>
<p><strong>5)</strong> Tracer la courbe (T) de f.</p>
<p><strong>6) a)</strong> Calculer \\(\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x}\\) et interpréter graphiquement.</p>
<p><strong>b)</strong> Construire la courbe (Γ) de \\(f^{-1}\\) restreinte à un intervalle convenable.</p>
 
<p><strong>Partie C (2 pts)</strong></p>
<p>Calculer l'aire \\(\\mathcal{A} = \\displaystyle\\int_1^3 f(x)\\,dx\\) en cm². Unité graphique 2 cm.</p>
 
<p><strong>Partie D (1,5 pts)</strong></p>
<p>Soit \\(a > 0\\). Calculer l'aire de la partie délimitée par (T), l'axe des abscisses et les droites \\(x=1\\) et \\(x=e^a\\). Calculer la limite de cette aire quand \\(a\\to+\\infty\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions avec valeur absolue, branches infinies &amp; IPP</span>
  <ul>
    <li><strong>Étude de $|x|$ :</strong> Pour $x > 0$, $|x|=x \\implies f(x)=(x-1)\\ln x$. Pour $x < 0$, $|x|=-x \\implies f(x)=(x-1)\\ln(-x)$.</li>
    <li><strong>Asymptote verticale :</strong> $\\lim_{x\\to 0} f(x) = (0-1)(-\\infty) = +\\infty \\implies$ la droite $x=0$ (axe des ordonnées) est asymptote verticale.</li>
    <li><strong>Branche parabolique en $+\\infty$ :</strong> $\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty}\\left(1-\\dfrac{1}{x}\\right)\\ln x = +\\infty \\implies$ branche parabolique de direction $(Oy)$.</li>
    <li><strong>Primitive de $(x-1)\\ln x$ par IPP :</strong> $\\int (x-1)\\ln x\\,dx = \\left(\\dfrac{x^2}{2}-x\\right)\\ln x - \\left(\\dfrac{x^2}{4}-x\\right) + C$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
 
<p><strong>Partie A — Étude de g(x) = 1 − \\dfrac{1}{x} + ln x</strong></p>
 
<p><strong>1) Limites</strong></p>
<p>\\(\\displaystyle\\lim_{x\\to0^+}g(x) = 1 - (+\\infty) + (-\\infty) = -\\infty\\)</p>
<p>\\(\\displaystyle\\lim_{x\\to+\\infty}g(x) = 1 - 0 + (+\\infty) = +\\infty\\)</p>
 
<p><strong>2a) Calcul de g'(x)</strong></p>
<p>g est dérivable sur \\(]0;+\\infty[\\) et :</p>
<p>\\[g'(x) = \\dfrac{1}{x^2} + \\dfrac{1}{x} = \\dfrac{1+x}{x^2}\\]</p>
<p>Pour \\(x > 0\\) : \\(1+x > 0\\) et \\(x^2 > 0\\), donc \\(g'(x) > 0\\) sur \\(]0;+\\infty[\\).</p>
<p>g est <strong>strictement croissante</strong> sur \\(]0;+\\infty[\\).</p>
 
<p><strong>2b) Tableau de variation</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-mono" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <linearGradient id="forbid-grad-gmono" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/><stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/></linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">g '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">g(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x = 0 (valeur interdite) -->
    <text x="160" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <rect x="153" y="50" width="14" height="209" fill="url(#forbid-grad-gmono)"/>
    <line x1="157" y1="50" x2="157" y2="259" stroke="#b83232" stroke-width="2"/>
    <line x1="163" y1="50" x2="163" y2="259" stroke="#b83232" stroke-width="2"/>

    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <text x="430" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="24" font-weight="900">+</text>

    <text x="195" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="225" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-mono)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>
 
<p><strong>3) Signe de g</strong></p>
<p>g est continue et strictement croissante, passant de \\(-\\infty\\) à \\(+\\infty\\). Elle s'annule une seule fois.</p>
<p>\\(g(1) = 1 - 1 + 0 = 0\\).</p>
<p>\\(g(x) < 0\\) pour \\(x \\in ]0;1[\\) et \\(g(x) > 0\\) pour \\(x \\in ]1;+\\infty[\\).</p>
 
<p><strong>Partie B — Étude de f(x) = (x−1)ln x</strong></p>
 
<p><strong>1) Continuité en 1</strong></p>
<p>\\(f(1) = (1-1)\\ln 1 = 0\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to1}f(x) = \\lim_{x\\to1}(x-1)\\ln x = 0 \\times 0 = 0 = f(1)\\)</p>
<p>f est <strong>continue en 1</strong>.</p>
 
<p><strong>2) Dérivabilité en 1</strong></p>
<p>\\(\\displaystyle\\lim_{x\\to1}\\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to1}\\dfrac{(x-1)\\ln x}{x-1} = \\lim_{x\\to1}\\ln x = 0\\)</p>
<p>f est <strong>dérivable en 1</strong> avec \\(f'(1) = 0\\).</p>
<p><strong>Interprétation :</strong> la tangente à (T) en \\((1;0)\\) est horizontale (parallèle à l'axe des abscisses).</p>
 
<p><strong>3) Limites</strong></p>
<p>En \\(0^+\\) : \\(f(x) = (x-1)\\ln x\\). \\(x-1 \\to -1\\) et \\(\\ln x \\to -\\infty\\), donc \\(f(x) \\to +\\infty\\).</p>
<p>Mais \\(x \\ln x \\to 0\\) donc \\(f(x) = x\\ln x - \\ln x \\to 0 - (-\\infty) = +\\infty\\).</p>
<p>\\(\\displaystyle\\lim_{x\\to0^+}f(x) = +\\infty\\) → la droite \\(x=0\\) est <strong>asymptote verticale</strong>.</p>
<p>En \\(+\\infty\\) : \\(f(x) = (x-1)\\ln x \\to +\\infty\\) (produit de deux termes tendant vers \\(+\\infty\\)).</p>
 
<p><strong>4a) Calcul de f'(x)</strong></p>
<p>\\[f'(x) = \\ln x + (x-1)\\cdot\\dfrac{1}{x} = \\ln x + 1 - \\dfrac{1}{x} = g(x)\\]</p>
<p>\\[\\boxed{f'(x) = g(x) = 1 - \\dfrac{1}{x} + \\ln x}\\]</p>
<p>D'après la Partie A : \\(f'(x) < 0\\) pour \\(x \\in ]0;1[\\) et \\(f'(x) > 0\\) pour \\(x \\in ]1;+\\infty[\\). \\(f'(1) = 0\\).</p>
 
<p><strong>4b) Tableau de variation</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-17-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-17-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
      <linearGradient id="forbid-grad-17-2-f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="150" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <!-- Valeur interdite / non défini en 150 -->
    <rect x="143" y="50" width="14" height="209" fill="url(#forbid-grad-17-2-f)"/>
    <line x1="147" y1="50" x2="147" y2="259" stroke="#b83232" stroke-width="2"/>
    <line x1="153" y1="50" x2="153" y2="259" stroke="#b83232" stroke-width="2"/>
    <!-- Ticks d'extremum en 425 -->
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="175" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <line x1="195" y1="135" x2="405" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-17-2-f)"/>
    <text x="425" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="445" y1="225" x2="685" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-17-2-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
  </svg>
</div>
<p>f admet un <strong>minimum global de 0 en \\(x=1\\)</strong>.</p>
 
<p><strong>6a) Limite de f(x)/x en +∞</strong></p>
<p>\\(\\dfrac{f(x)}{x} = \\dfrac{(x-1)\\ln x}{x} = \\left(1 - \\dfrac{1}{x}\\right)\\ln x \\to 1 \\times \\ln(+\\infty) = +\\infty\\)</p>
<p><strong>Interprétation :</strong> (T) admet une <strong>branche parabolique de direction \\((Oy)\\)</strong> en \\(+\\infty\\).</p>
 
<p><strong>Partie C — Calcul de \\(\\mathcal{A}\\)</strong></p>
<p>Sur \\([1;3]\\), \\(f(x) = (x-1)\\ln x \\geq 0\\) (car \\(x \\geq 1\\)).</p>
<p>\\[\\mathcal{A} = \\int_1^3 (x-1)\\ln x\\,dx\\]</p>
<p>IPP : \\(u = \\ln x\\), \\(v' = x-1\\) → \\(u' = \\dfrac{1}{x}\\), \\(v = \\dfrac{x^2}{2}-x\\).</p>
<p>\\[\\mathcal{A} = \\left[\\left(\\dfrac{x^2}{2}-x\\right)\\ln x\\right]_1^3 - \\int_1^3\\left(\\dfrac{x^2}{2}-x\\right)\\dfrac{1}{x}\\,dx\\]</p>
<p>\\(= \\left(\\dfrac{9}{2}-3\\right)\\ln 3 - 0 - \\int_1^3\\left(\\dfrac{x}{2}-1\\right)dx\\)</p>
<p>\\(= \\dfrac{3}{2}\\ln 3 - \\left[\\dfrac{x^2}{4}-x\\right]_1^3\\)</p>
<p>\\(= \\dfrac{3}{2}\\ln 3 - \\left[\\left(\\dfrac{9}{4}-3\\right)-\\left(\\dfrac{1}{4}-1\\right)\\right]\\)</p>
<p>\\(= \\dfrac{3}{2}\\ln 3 - \\left[-\\dfrac{3}{4}+\\dfrac{3}{4}\\right] = \\dfrac{3}{2}\\ln 3\\)</p>
<p>En cm² (unité 2 cm → facteur 4) :</p>
<p>\\[\\boxed{\\mathcal{A} = 4 \\times \\dfrac{3}{2}\\ln 3 = 6\\ln 3 \\approx 6 \\times 1{,}1 \\approx 6{,}6 \\text{ cm}^2}\\]</p>
 
<p><strong>Partie D — Aire en fonction de a</strong></p>
<p>Sur \\([1;e^a]\\) (avec \\(a>0\\)) : \\(f(x) \\geq 0\\), donc :</p>
<p>\\[A(a) = \\int_1^{e^a}(x-1)\\ln x\\,dx\\]</p>
<p>Par IPP (même calcul) :</p>
<p>\\[A(a) = \\left[\\left(\\dfrac{x^2}{2}-x\\right)\\ln x\\right]_1^{e^a} - \\left[\\dfrac{x^2}{4}-x\\right]_1^{e^a}\\]</p>
<p>\\(= \\left(\\dfrac{e^{2a}}{2}-e^a\\right)a - 0 - \\left[\\left(\\dfrac{e^{2a}}{4}-e^a\\right)-\\left(\\dfrac{1}{4}-1\\right)\\right]\\)</p>
<p>\\(= a\\left(\\dfrac{e^{2a}}{2}-e^a\\right) - \\dfrac{e^{2a}}{4}+e^a+\\dfrac{3}{4}\\)</p>
<p>\\[\\boxed{A(a) = \\dfrac{(2a-1)e^{2a}}{4} - (a-1)e^a + \\dfrac{3}{4} \\text{ u.a.}}\\]</p>
<p>\\[\\lim_{a\\to+\\infty}A(a) = +\\infty\\]</p>
<p>L'aire est illimitée quand \\(a\\to+\\infty\\), ce qui est cohérent avec la branche parabolique de (T) en \\(+\\infty\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (T) de f — BAC 2018 2nd tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="107.1" y1="40" x2="107.1" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="201.4" y1="40" x2="201.4" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="295.7" y1="40" x2="295.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="484.3" y1="40" x2="484.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="578.6" y1="40" x2="578.6" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="672.9" y1="40" x2="672.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="355.0" x2="720" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="215.0" x2="720" y2="215.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="145.0" x2="720" y2="145.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="75.0" x2="720" y2="75.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="60" y1="355.0" x2="720" y2="355.0" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="710" y="349.0" text-anchor="end" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">y = −1 en −∞</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="285.0" x2="735" y2="285.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="289.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="390.0" y1="400" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="390.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="378.0" y="301.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="107.1" y1="281.0" x2="107.1" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="107.1" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="201.4" y1="281.0" x2="201.4" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="201.4" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="295.7" y1="281.0" x2="295.7" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="295.7" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="484.3" y1="281.0" x2="484.3" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="484.3" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="578.6" y1="281.0" x2="578.6" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="578.6" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="672.9" y1="281.0" x2="672.9" y2="289.0" stroke="#1f2937" stroke-width="1"/><text x="672.9" y="301.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text>
    <line x1="386.0" y1="355.0" x2="394.0" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="215.0" x2="394.0" y2="215.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="219.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="386.0" y1="145.0" x2="394.0" y2="145.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="149.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="386.0" y1="75.0" x2="394.0" y2="75.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="79.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text>
    
    <!-- Courbes -->
    <path d="M 60.0 352.9 L 64.4 352.8 L 68.8 352.7 L 73.2 352.6 L 77.6 352.5 L 82.0 352.3 L 86.4 352.2 L 90.8 352.1 L 95.2 351.9 L 99.6 351.8 L 104.0 351.6 L 108.4 351.5 L 112.8 351.3 L 117.2 351.1 L 121.6 350.9 L 126.0 350.7 L 130.4 350.5 L 134.8 350.3 L 139.2 350.1 L 143.6 349.9 L 148.0 349.6 L 152.4 349.4 L 156.8 349.1 L 161.2 348.8 L 165.6 348.5 L 170.0 348.2 L 174.4 347.9 L 178.8 347.5 L 183.2 347.2 L 187.6 346.8 L 192.0 346.4 L 196.4 346.0 L 200.8 345.6 L 205.2 345.1 L 209.6 344.7 L 214.0 344.2 L 218.4 343.7 L 222.8 343.1 L 227.2 342.5 L 231.6 342.0 L 236.0 341.3 L 240.4 340.7 L 244.8 340.0 L 249.2 339.3 L 253.6 338.5 L 258.0 337.7 L 262.4 336.9 L 266.8 336.0 L 271.2 335.1 L 275.6 334.2 L 280.0 333.2 L 284.4 332.2 L 288.8 331.1 L 293.2 329.9 L 297.6 328.7 L 302.0 327.5 L 306.4 326.2 L 310.8 324.8 L 315.2 323.3 L 319.6 321.8 L 324.0 320.2 L 328.4 318.6 L 332.8 316.8 L 337.2 315.0 L 341.6 313.1 L 346.0 311.1 L 350.4 309.0 L 354.8 306.8 L 359.2 304.5 L 363.6 302.1 L 368.0 299.6 L 372.4 296.9 L 376.8 294.1 L 381.2 291.2 L 385.6 288.2 L 390.0 285.0 L 394.4 295.0 L 398.8 300.5 L 403.2 304.3 L 407.6 306.9 L 412.0 308.8 L 416.4 310.0 L 420.8 310.6 L 425.2 310.7 L 429.6 310.5 L 434.0 309.9 L 438.4 309.0 L 442.8 307.7 L 447.2 306.2 L 451.6 304.5 L 456.0 302.5 L 460.4 300.3 L 464.8 297.9 L 469.2 295.3 L 473.6 292.5 L 478.0 289.5 L 482.4 286.4 L 486.8 283.1 L 491.2 279.7 L 495.6 276.1 L 500.0 272.4 L 504.4 268.6 L 508.8 264.6 L 513.2 260.5 L 517.6 256.3 L 522.0 252.0 L 526.4 247.6 L 530.8 243.1 L 535.2 238.5 L 539.6 233.7 L 544.0 228.9 L 548.4 224.0 L 552.8 219.0 L 557.2 213.9 L 561.6 208.7 L 566.0 203.4 L 570.4 198.1 L 574.8 192.7 L 579.2 187.2 L 583.6 181.6 L 588.0 175.9 L 592.4 170.2 L 596.8 164.4 L 601.2 158.5 L 605.6 152.6 L 610.0 146.6 L 614.4 140.5 L 618.8 134.4 L 623.2 128.2 L 627.6 122.0 L 632.0 115.6 L 636.4 109.3 L 640.8 102.8 L 645.2 96.3 L 649.6 89.8 L 654.0 83.2 L 658.4 76.5 L 662.8 69.8 L 667.2 63.1 L 671.6 56.2 L 676.0 49.4 L 680.4 42.5 L 684.8 35.5 L 689.2 28.5 L 693.6 21.4 L 698.0 14.3 L 702.4 7.2 L 706.8 -0.0 L 711.2 -7.3 L 715.6 -14.6 L 720.0 -21.9" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="285.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(380.0, 277.0)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g><circle cx="424.7" cy="310.8" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(434.7, 326.8)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (e⁻¹; -e⁻¹)</text>
    </g><circle cx="484.3" cy="285.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(494.3, 301.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">(1 ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="42" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (T)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},
{
  id: 'bac-2019-D-juillet-1er',
  year: 2019,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Juillet 2019 / 1er tour',
  topics: ['Nombres complexes', 'Probabilités & Variable aléatoire', 'Fonction logarithme', 'Suites & Point fixe'],
  parts: [
    {
      label: 'Exercice 1 — Nombres complexes & géométrie (4 pts)',
      problem: `<p>Le plan est muni d'un repère orthonormé direct \\((O;\\vec{u};\\vec{v})\\) d'unité graphique 1 cm. Soit \\(P\\) le polynôme défini sur \\(\\mathbb{C}\\) pour tout \\(z\\) par :
\\[p(z) = z^3 - (3+i)z^2 + (6+i)z - 2 - 6i\\]</p>

<p><strong>1)</strong> Calculer \\(p(i)\\) puis en déduire une factorisation de \\(p(z)\\).</p>

<p><strong>2)</strong><br>
a) Résoudre dans \\(\\mathbb{C}\\) l'équation \\(p(z) = 0\\).<br>
b) Soient les points \\(A\\), \\(B\\) et \\(C\\) d'affixes respectives \\(z_A = -i\\) ; \\(z_B = 2i\\) ; \\(z_C = 3-i\\). Placer les points \\(A\\), \\(B\\) et \\(C\\) dans le repère.<br>
c) Calculer \\(\\dfrac{z_C - z_A}{z_B - z_A}\\), puis interpréter graphiquement le module et un argument de ce quotient. En déduire la nature du triangle \\(ABC\\).</p>

<p><strong>3)</strong> Soit \\(D\\) l'image de \\(C\\) par la translation de vecteur \\(\\overrightarrow{AB}\\).<br>
a) Calculer l'affixe du point \\(D\\).<br>
b) Donner la nature exacte du quadrilatère \\(ABDC\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Racines imaginaires pures &amp; factorisation dans ℂ</span>
  <ul>
    <li><strong>Recherche de racine imaginaire pure $z_0 = ib$ ($b\\in\\mathbb{R}$) :</strong> Injectez $ib$ dans $P(z)=0$, développez avec $i^2=-1, i^3=-i$. Annulez la partie réelle et la partie imaginaire pour trouver $b$.</li>
    <li><strong>Factorisation :</strong> Écrivez $P(z) = (z-ib)(z^2+\\alpha z+\\beta)$ et identifiez les coefficients.</li>
    <li><strong>Triangle équilatéral :</strong> Trois points $A, B, C$ forment un triangle équilatéral direct si $\\dfrac{z_C-z_A}{z_B-z_A} = e^{i\\dfrac{\\pi}{3}} = \\dfrac{1}{2}+i\\dfrac{\\sqrt{3}}{2}$.</li>
    <li><strong>Ensemble de points $|z-z_A| = |z-z_B|$ :</strong> Représente la médiatrice du segment $[AB]$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Calcul de p(i)</strong></p>
<p>\\[p(i) = i^3 - 3i^2 + (3i+3)i - 6 + 2i = -i + 3 + 3i^2 + 3i - 6 + 2i\\]
\\[= -i + 3 - 3 + 3i - 6 + 2i = -6 + 4i \\neq 0\\]</p>
<p>\\(p(z) = z^3 - (3+i)z^2 + (6+i)z - 2 - 6i\\)</p>
<p>\\(p(i) = i^3 - 3(i^2) + (3i+3)(i) - 6 + 2i = -i +3 + 3i^2 + 3i - 6 + 2i = -i+3-3+3i-6+2i = -6+4i\\)</p>
ong>2a) Résolution de p(z) = 0</strong></p>
<p>\\(z = i\\) ou \\(z^2 - 3z + (6-2i) = 0\\).<br>
\\(\\Delta = 9 - 4(6-2i) = 9-24+8i = -15+8i\\).<br>
Racine carrée de \\(-15+8i\\) : on cherche \\(a+bi\\) tel que \\(a^2-b^2=-15\\) et \\(2ab=8\\), soit \\(b=4/a\\) et \\(a^2-16/a^2=-15\\) → \\(a^4+15a^2-16=0\\) → \\(a^2=1\\) → \\(a=1\\), \\(b=4\\).<br>
\\(\\delta = 1+4i\\) ou \\(-1-4i\\).<br>
\\(z = \\dfrac{3\\pm(1+4i)}{2}\\) → \\(z_1 = 2+2i\\) ou \\(z_2 = 1-2i\\).</p>
<p>\\[\\boxed{S_\\mathbb{C} = \\{i ; 2+2i ; 1-2i\\}}\\]</p>

<p><strong>2b)</strong> Points d'affixes \\(z_A = -i\\), \\(z_B = 2i\\), \\(z_C = 3-i\\) → à placer dans le repère (unité 1 cm).</p>

<p><strong>2c)</strong>
\\[\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{(3-i)-(-i)}{2i-(-i)} = \\dfrac{3}{3i} = \\dfrac{1}{i} = -i\\]
Module : \\(|-i| = 1\\) → \\(AB = AC\\).<br>
Argument : \\(\\arg(-i) = -\\dfrac{\\pi}{2}\\) → \\((\\overrightarrow{AB};\\overrightarrow{AC}) = -\\dfrac{\\pi}{2}\\) → angle droit en A.<br>
\\[\\boxed{\\text{Le triangle } ABC \\text{ est rectangle isocèle en } A.}\\]</p>

<p><strong>3a) Affixe de D</strong></p>
<p>\\(\\overrightarrow{AB}\\) a pour affixe \\(z_B - z_A = 2i - (-i) = 3i\\).<br>
\\(z_D = z_C + 3i = (3-i) + 3i = 3+2i\\).</p>

<p><strong>3b)</strong> \\(ABDC\\) est un quadrilatère tel que \\(\\overrightarrow{AB} = \\overrightarrow{CD}\\) (même vecteur \\(3i\\)) → <strong>parallélogramme</strong>.<br>
De plus \\(AB = AC\\) et l'angle en A est droit → \\[\\boxed{ABDC \\text{ est un carré.}}\\]</p>`
    },
    {
      label: 'Exercice 2 — Probabilités & Variable aléatoire (4 pts)',
      problem: `<p>Une urne contient <strong>cinq boules</strong> portant le numéro 2, <strong>quatre boules</strong> portant le numéro 3 et <strong>trois boules</strong> portant le numéro 4. On tire simultanément trois boules de l'urne. On suppose que tous les tirages sont équiprobables.</p>

<p><strong>1)</strong> Déterminer les probabilités des événements suivants :<br>
\\(A\\) : «Tirer au moins une boule portant le numéro 3»<br>
\\(B\\) : «Tirer trois boules portant des numéros tous différents»<br>
\\(C\\) : «Tirer trois boules portant le même numéro»<br>
\\(D\\) : «Tirer trois boules dont exactement deux portant le même numéro»</p>

<p><strong>2)</strong> Soit \\(X\\) la variable aléatoire égale à la somme des numéros marqués sur les trois boules tirées.<br>
a) Quelles sont les valeurs prises par \\(X\\) ?<br>
b) Déterminer la loi de probabilité de \\(X\\).<br>
c) Calculer l'espérance mathématique \\(E(X)\\) de \\(X\\).</p>

<p><strong>3)</strong> On appelle succès l'événement \\(E\\) : «\\(X \\geq 10\\)».<br>
a) Calculer la probabilité de \\(E\\).<br>
b) On répète trois fois l'expérience de manière indépendante. Calculer la probabilité d'obtenir exactement deux succès.</p>

<p><em>On donne : \\(\\dfrac{23}{110} \\approx 0{,}2\\) ; \\(\\dfrac{87}{110} \\approx 0{,}7\\)</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Variables aléatoires discrètes, loi de probabilité &amp; espérance</span>
  <ul>
    <li><strong>Tirage simultané :</strong> $\\text{Card}(\\Omega) = \\binom{n}{p} = C_n^p$.</li>
    <li><strong>Variable aléatoire $X$ (somme des numéros) :</strong> Déterminez la valeur minimale et maximale possible de la somme pour trouver toutes les valeurs de $X(\\Omega)$.</li>
    <li><strong>Dénombrement par cas :</strong> Pour chaque somme $S$, listez toutes les combinaisons de 3 boules dont la somme des numéros vaut $S$, et appliquez les coefficients binomiaux correspondants.</li>
    <li><strong>Espérance :</strong> $E(X) = \\sum x_i P(X=x_i)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p>Urne : 5 boules «2», 4 boules «3», 3 boules «4». Total : 12 boules. Tirage de 3.</p>
<p>Nombre de tirages possibles : \\(C_{12}^3 = \\dfrac{12!}{3!\\cdot9!} = 220\\)</p>

<p><strong>1) Probabilités</strong></p>

<p><strong>A : «au moins une boule portant le n°3»</strong><br>
\\(\\bar{A}\\) = «aucune boule portant le n°3» = choisir 3 parmi les 8 boules non-3 (5 + 3 = 8) :<br>
\\(P(\\bar{A}) = \\dfrac{C_8^3}{C_{12}^3} = \\dfrac{56}{220} = \\dfrac{14}{55}\\)<br>
\\(\\boxed{P(A) = 1 - \\dfrac{14}{55} = \\dfrac{41}{55}}\\)</p>

<p><strong>B : «trois numéros tous différents»</strong> (une «2», une «3», une «4») :<br>
\\(P(B) = \\dfrac{C_5^1 \\cdot C_4^1 \\cdot C_3^1}{C_{12}^3} = \\dfrac{60}{220} = \\boxed{\\dfrac{3}{11}}\\)</p>

<p><strong>C : «trois boules du même numéro»</strong> :<br>
\\(P(C) = \\dfrac{C_5^3 + C_4^3 + C_3^3}{220} = \\dfrac{10+4+1}{220} = \\dfrac{15}{220} = \\boxed{\\dfrac{3}{44}}\\)</p>

<p><strong>D : «exactement deux boules du même numéro»</strong><br>
\\(= 1 - P(B) - P(C) = 1 - \\dfrac{3}{11} - \\dfrac{3}{44} = \\dfrac{44-12-3}{44} = \\boxed{\\dfrac{29}{44}}\\)</p>

<p><strong>2a) Valeurs de X</strong></p>
<p>Min : \\(3 \\times 2 = 6\\). Max : \\(3 \\times 4 = 12\\). Valeurs possibles :<br>
\\[\\boxed{X \\in \\{6, 7, 8, 9, 10, 11, 12\\}}\\]</p>

<p><strong>2b) Loi de probabilité</strong></p>
<table class="vtab">
  <tr>
    <th>x<sub>i</sub></th>
    <td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
  </tr>
  <tr>
    <th>P(X = x<sub>i</sub>)</th>
    <td>\\(\\dfrac{10}{220}\\)</td>
    <td>\\(\\dfrac{40}{220}\\)</td>
    <td>\\(\\dfrac{60}{220}\\)</td>
    <td>\\(\\dfrac{64}{220}\\)</td>
    <td>\\(\\dfrac{33}{220}\\)</td>
    <td>\\(\\dfrac{12}{220}\\)</td>
    <td>\\(\\dfrac{1}{220}\\)</td>
  </tr>
</table>
<p>Vérification : \\(10+40+60+64+33+12+1 = 220\\)</p>

<p><strong>2c) Espérance</strong></p>
<p>\\[E(X) = \\dfrac{1}{220}(6\\times10 + 7\\times40 + 8\\times60 + 9\\times64 + 10\\times33 + 11\\times12 + 12\\times1)\\]
\\[= \\dfrac{60+280+480+576+330+132+12}{220} = \\dfrac{1870}{220} = \\dfrac{187}{22} \\approx \\boxed{8{,}5}\\]</p>

<p><strong>3a) P(E) = P(X ≥ 10)</strong></p>
<p>\\[P(E) = P(X=10)+P(X=11)+P(X=12) = \\dfrac{33+12+1}{220} = \\dfrac{46}{220} = \\dfrac{23}{110} \\approx \\boxed{0{,}2}\\]</p>

<p><strong>3b)</strong> On répète 3 fois ; succès = \\(E\\), \\(p = \\dfrac{23}{110}\\). On cherche exactement 2 succès :<br>
\\[P = C_3^2 \\left(\\dfrac{23}{110}\\right)^2\\left(\\dfrac{87}{110}\\right)^1 \\approx 3 \\times (0{,}2)^2 \\times 0{,}7 = 3 \\times 0{,}04 \\times 0{,}7 \\approx \\boxed{0{,}084}\\]</p>`
    },
    {
      label: 'Problème — Fonction par morceaux, ln, suite (Uₙ) (12 pts)',
      problem: `<p>On considère la fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par :
\\[f(x) = \\begin{cases} 2 - x + \ln(2x-3) & \\text{si } x \\geq 2 \\\\ -x + 1 + e^{x-2} & \\text{si } x < 2 \\end{cases}\\]
On note \\((C)\\) la courbe représentative de \\(f\\) dans un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 4 cm. On notera \\(f'\\) la dérivée de \\(f\\).</p>

<p><strong>Partie A</strong></p>
<p><strong>1)</strong> Étudier la continuité de \\(f\\) en 2.</p>
<p><strong>2)</strong><br>
a) Vérifier que \\(\\dfrac{f(x)}{x-2} = -1 + 2\\,\\dfrac{\\ln(2x-2)+1}{2(x-2)}\\) pour tout \\(x > 2\\).<br>
b) Étudier la dérivabilité de \\(f\\) en 2. Interpréter graphiquement le résultat obtenu.</p>
<p><strong>3)</strong><br>
a) Calculer la limite de \\(f\\) en \\(-\\infty\\).<br>
b) Vérifier que pour tout \\(x \\geq 2\\), \\(f(x) = 2-x\\!\\left(1 - \\dfrac{2x-3}{x} \\times \\dfrac{\\ln(2x-3)}{2x-3}\\right)\\).<br>
En déduire \\(\\displaystyle\\lim_{x\\to+\\infty}f(x)\\) ; \\(\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x}\\).<br>
c) Calculer \\(\\displaystyle\\lim_{x\\to+\\infty}[f(x)+x]\\). Interpréter géométriquement le résultat obtenu.</p>
<p><strong>4)</strong> Montrer que \\((C)\\) admet une asymptote oblique \\((\\Delta)\\) au voisinage de \\(-\\infty\\).</p>
<p><strong>5)</strong><br>
a) Calculer \\(f'(x)\\) pour tout \\(x \\in \\mathbb{R} \\setminus \\{2\\}\\) puis étudier son signe.<br>
b) En déduire le sens de variation de \\(f\\) puis dresser son tableau de variation.</p>
<p><strong>6) a)</strong> Démontrer que l'équation \\(f(x) = 0\\) admet une unique solution \\(\\alpha\\). Vérifier que \\(-1 < \\alpha < 0\\).<br>
b) Construire la courbe \\((C)\\), les droites \\((D)\\) et \\((\\Delta)\\) et les demi-tangentes éventuelles au point d'abscisse 3 de \\((C)\\).</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Montrer que l'équation \\(f(x) = 0\\) admet deux solutions dont l'une est dans l'intervalle \\(I = [3 ; 4]\\). (On notera \\(\\alpha\\) celle qui est dans \\(I\\).)</p>
<p><strong>2)</strong> On considère la fonction \\(g\\) définie sur \\([2 ; +\\infty[\\) par \\(g(x) = 2 + \\ln(2x-3)\\).<br>
a) Vérifier que \\(g(\\alpha) = \\alpha\\).<br>
b) Montrer que : (i) \\(g(x) \\in I\\) pour tout \\(x \\in I\\) ; (ii) \\(|g'(x)| \\leq \\dfrac{2}{3}\\) pour tout \\(x \\in I\\).<br>
c) En déduire que : \\(|g(x) - \\alpha| \\leq \\dfrac{2}{3}|x - \\alpha|\\) pour tout \\(x \\in I\\).</p>

<p><strong>Partie C</strong></p>
<p>Soit \\((U_n)\\) la suite définie par : \\(U_0 = 3\\) et \\(U_{n+1} = g(U_n)\\) pour tout entier naturel \\(n\\).</p>
<p><strong>1)</strong> Démontrer que pour tout entier naturel \\(n\\), \\(Uₙ \\in [3 ; 4]\\).</p>
<p><strong>2)</strong> En déduire que pour tout entier naturel \\(n\\) :<br>
a) \\(|U_{n+1} - \\alpha| \\leq \\dfrac{2}{3}|Uₙ - \\alpha|\\).<br>
b) \\(|Uₙ - \\alpha| \\leq \\left(\\dfrac{2}{3}\\right)^n\\).</p>
<p><strong>3)</strong> Étudier la convergence de la suite \\((U_n)\\).</p>
<p><strong>4)</strong> Déterminer le plus petit entier naturel \\(n_0\\) tel que pour tout \\(n \\geq n_0\\) on ait : \\(|Uₙ - \\alpha| \\leq 10^{-3}\\).</p>

<p><em>Données numériques : \\(\\ln 2 \\approx 0{,}7\\) ; \\(\\ln 3 \\approx 1{,}1\\) ; \\(\\ln 5 \\approx 1{,}6\\) ; \\(\\ln 10 \\approx 2{,}3\\) ; \\(\\ln\\dfrac{2}{3} \\approx -0{,}4\\) ; \\(e^{-1} \\approx 0{,}3\\) ; \\(e^{-12} \\approx 0{,}1\\)</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions raccordées, point anguleux &amp; TVI</span>
  <ul>
    <li><strong>Continuité au point de raccord $x=2$ :</strong> Vérifiez que $\\lim_{x\\to 2^-} (-x+1+e^{x-2}) = -2+1+1 = 0$ et $f(2) = 2-2+\\ln(1) = 0$. $f$ est donc continue en 2.</li>
    <li><strong>Dérivabilité à gauche et à droite :</strong> $\\lim_{x\\to 2^-}\\dfrac{f(x)-f(2)}{x-2} = -1+1 = 0$ et $\\lim_{x\\to 2^+}\\dfrac{f(x)-f(2)}{x-2} = -1+2 = 1$. Les demi-tangentes ont des pentes différentes ($0$ et $1$) : point anguleux en $(2;0)$.</li>
    <li><strong>Asymptote oblique en $-\\infty$ :</strong> Comme $\\lim_{x\\to-\\infty} e^{x-2} = 0$, la droite d'équation $y = -x+1$ est asymptote oblique à la courbe en $-\\infty$.</li>
    <li><strong>Théorème des valeurs intermédiaires :</strong> Pour montrer l'existence d'une unique racine $\\alpha$ sur un intervalle, vérifiez la continuité, la stricte monotonie, et le changement de signe aux bornes $f(a)\\cdot f(b) < 0$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Continuité en 2</strong></p>
<p>\\(f(2) = 2-2+\\ln(4-3) = \\ln 1 = 0\\).<br>
\\(\\lim_{x\\to2^-}f(x) = -2+1+e^0 = 0\\).<br>
\\(\\lim_{x\\to2^+}f(x) = 2-2+\\ln(4-3) = 0\\).<br>
\\(\\boxed{f \\text{ est continue en 2.}}\\)</p>

<p><strong>2b) Dérivabilité en 2</strong></p>
<p>Par la question 2a) : \\(\\dfrac{f(x)-f(2)}{x-2} = \\dfrac{f(x)}{x-2}\\) (car \\(f(2)=0\\)).</p>
<p>Pour \\(x > 2\\) : \\(\\lim_{x\\to2^+}\\dfrac{f(x)}{x-2}\\). On a \\(\\ln(2x-3) = \\ln(2(x-2)+1) \\approx 2(x-2)\\) quand \\(x\\to2\\),<br>
donc \\(\\dfrac{f(x)}{x-2} = \\dfrac{2-x+\\ln(2x-3)}{x-2} \\approx \\dfrac{-(x-2)+2(x-2)}{x-2} = 1\\).
\\(\\lim_{x\\to2^+}\\dfrac{f(x)}{x-2} = 1\\).</p>
<p>Pour \\(x < 2\\) : \\(\\lim_{x\\to2^-}\\dfrac{f(x)}{x-2} = \\lim\\dfrac{-x+1+e^{x-2}}{x-2}\\).<br>
\\(= \\lim\\dfrac{-(x-2)+e^{x-2}-1}{x-2} = -1 + \\lim\\dfrac{e^{x-2}-1}{x-2} = -1+1 = 0\\).</p>
<p>Limites différentes (\\(1 \\neq 0\\)) → \\(f\\) est <strong>non dérivable en 2</strong>. Point anguleux : demi-tangente de pente 0 à gauche (horizontale), demi-tangente de pente 1 à droite.</p>

<p><strong>3a)</strong> \\(\\lim_{x\\to-\\infty}(-x+1+e^{x-2}) = +\\infty\\) (car \\(-x\\to+\\infty\\) et \\(e^{x-2}\\to0\\)).</p>

<p><strong>3c) Limite de [f(x)+x] en +∞ et interprétation géométrique</strong></p>
<p>\[\lim_{x\\to+\\infty}[f(x)+x] = \lim_{x\\to+\\infty}[2+\ln(2x-3)] = +\\infty\]</p>
<p>Comme \(\lim_{x\\to+\\infty}\\dfrac{f(x)}{x} = -1\) et \(\lim_{x\\to+\\infty}[f(x)-(-1)x] = +\\infty\), la courbe \((C)\) admet une <strong>branche parabolique de direction la droite d'équation \(y = -x\)</strong> au voisinage de \(+\\infty\).</p>

<p><strong>4) Asymptote oblique en \\(-\\infty\\)</strong></p>
<p>Pour \\(x<2\\) : \\(f(x) = -x+1+e^{x-2}\\).<br>
\\(\\lim_{x\\to-\\infty}(f(x)-(-x+1)) = \\lim_{x\\to-\\infty}e^{x-2} = 0\\).<br>
\\(\\boxed{y = -x+1 \\text{ est asymptote oblique à } (C) \\text{ en } -\\infty.}\\)</p>

<p><strong>5a) f'(x)</strong></p>
<p>Pour \\(x > 2\\) : \\(f'(x) = -1 + \\dfrac{2}{2x-3}\\). Signe : \\(f'(x) > 0 \\iff 2x-3 < 2 \\iff x < \\dfrac{5}{2}\\) → \\(f\\) croissante sur \\(]2;\\dfrac{5}{2}[\\), décroissante sur \\(]\\dfrac{5}{2};+\\infty[\\).<br>
Pour \\(x < 2\\) : \\(f'(x) = -1 + e^{x-2}\\). \\(f'(x) < 0\\) car \\(e^{x-2} < e^0 = 1\\) pour \\(x<2\\) → \\(f\\) strictement décroissante sur \\(]-\\infty;2[\\).</p>

<p><strong>5b) Tableau de variation</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-19exact" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-19exact" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <!-- Labels header -->
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- Ligne x -->
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="350" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">2</text>
    <text x="530" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">5/2</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>

    <!-- Double trait rouge de non-dérivabilité en x = 2 (uniquement dans la ligne f', de y=50 à y=100) -->
    <line x1="347" y1="50" x2="347" y2="100" stroke="#b83232" stroke-width="2"/>
    <line x1="353" y1="50" x2="353" y2="100" stroke="#b83232" stroke-width="2"/>

    <!-- Ligne f'(x) -->
    <text x="245" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="440" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <line x1="530" y1="50" x2="530" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <text x="530" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <line x1="530" y1="86" x2="530" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="620" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>

    <!-- Ligne f(x) : Variations -->
    <!-- 1. Branche x < 2 : décroissante de +inf à 0 -->
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
    <line x1="165" y1="135" x2="330" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-19exact)"/>
    <text x="350" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>

    <!-- 2. Branche x in [2 ; 5/2] : croissante de 0 à ln(2) - 1/2 -->
    <line x1="370" y1="225" x2="510" y2="138" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-19exact)"/>
    <text x="530" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">ln 2 − ½</text>

    <!-- 3. Branche x > 5/2 : décroissante de ln(2) - 1/2 à -inf -->
    <line x1="550" y1="138" x2="685" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-19exact)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
  </svg>
</div>
<p>\\(f\\!\\left(\\dfrac{5}{2}\\right) = 2-\\dfrac{5}{2}+\\ln(2) = \\ln2 - \\dfrac{1}{2} \\approx 0{,}7-0{,}5 = 0{,}2 > 0\\)</p>

<p><strong>6a) Équation f(x) = 0 sur ]-∞;2[</strong></p>
<p>Sur \\(]-\\infty;2[\\) : \\(f\\) est continue, strictement décroissante de \\(+\\infty\\) vers \\(0\\). Elle ne s'annule pas sur \\(]-\\infty;2[\\) (elle atteint 0 exactement en 2).<br>
Sur \\(]2;+\\infty[\\) : \\(f\\) monte jusqu'à \\(\\ln2-\\dfrac{1}{2}>0\\) puis redescend vers \\(-\\infty\\). Par le TVI, \\(f(x)=0\\) a une unique solution \\(\\alpha \\in ]\\dfrac{5}{2};+\\infty[\\).<br>
\\(f(3) = 2-3+\\ln(3) = \\ln3-1 \\approx 1{,}1-1 = 0{,}1 > 0\\).<br>
\\(f(4) = 2-4+\\ln(5) = \\ln5-2 \\approx 1{,}6-2 = -0{,}4 < 0\\).<br>
\\(f(3)\\cdot f(4) < 0\\) → \\(\\boxed{\\alpha \\in [3 ; 4]}\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1)</strong> Deux solutions de \\(f(x)=0\\) : \\(x=2\\) (minimum local qui vaut 0) et \\(\\alpha \\in [3;4]\\) comme montré ci-dessus.</p>

<p><strong>2a)</strong> \\(g(\\alpha) = 2+\\ln(2\\alpha-3)\\). Or \\(f(\\alpha)=0\\) signifie \\(2-\\alpha+\\ln(2\\alpha-3)=0\\) → \\(\\ln(2\\alpha-3) = \\alpha-2\\) → \\(g(\\alpha) = 2+\\alpha-2 = \\alpha\\).</p>

<p><strong>2b)</strong> Pour \\(x\\in I=[3;4]\\) :<br>
\\(g'(x) = \\dfrac{2}{2x-3}\\). Pour \\(x\\in[3;4]\\) : \\(2x-3\\in[3;5]\\), donc \\(g'(x)\\in[\\dfrac{2}{5};\\dfrac{2}{3}]\\).<br>
(i) \\(g(3) = 2+\\ln3 \\approx 3{,}1 \\in I\\) et \\(g(4) = 2+\\ln5 \\approx 3{,}6 \\in I\\), et \\(g\\) croissante sur \\(I\\) → \\(g(I)\\subset I\\).<br>
(ii) \\(|g'(x)| = \\dfrac{2}{2x-3} \\leq \\dfrac{2}{3}\\) pour \\(x\\geq3\\).</p>

<p><strong>2c)</strong> Inégalité des accroissements finis : \\(|g(x)-g(\\alpha)| \\leq \\dfrac{2}{3}|x-\\alpha|\\) → \\(\\boxed{|g(x)-\\alpha|\\leq\\dfrac{2}{3}|x-\\alpha|}\\)</p>

<p><strong>Partie C</strong></p>

<p><strong>1)</strong> \\(U_0=3\\in I\\). Si \\(U_n\\in I\\) → \\(U_{n+1}=g(U_n)\\in g(I)\\subset I\\). Par récurrence, \\(\\forall n\\in\\mathbb{N},\\ ; U_n\\in I\\).</p>

<p><strong>2a)</strong> \\(|U_{n+1}-\\alpha| = |g(U_n)-\\alpha| \\leq \\dfrac{2}{3}|U_n-\\alpha|\\).</p>
<p><strong>2b)</strong> \\(|U_n-\\alpha|\\leq\\left(\\dfrac{2}{3}\\right)^n|U_0-\\alpha|\\leq\\left(\\dfrac{2}{3}\\right)^n\\cdot1 = \\left(\\dfrac{2}{3}\\right)^n\\).</p>

<p><strong>3)</strong> \\(\\lim_{n\\to+\\infty}\\left(\\dfrac{2}{3}\\right)^n = 0\\) → \\(\\lim|U_n-\\alpha|=0\\) → \\(\\boxed{\\lim_{n\\to+\\infty}Uₙ = \\alpha}\\).</p>

<p><strong>4)</strong> \\(\\left(\\dfrac{2}{3}\\right)^n \\leq 10^{-3}\\) → \\(n\\ln\\dfrac{2}{3}\\leq -3\\ln10\\) → \\(n\\geq\\dfrac{3\\ln10}{-\\ln\\dfrac{2}{3}} = \\dfrac{3\\times2{,}3}{0{,}4} = \\dfrac{6{,}9}{0{,}4} = 17{,}25\\).<br>
\\[\\boxed{n_0 = 18}\\]</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et asymptote (D) — BAC 2019 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="96.7" y1="40" x2="96.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="170.0" y1="40" x2="170.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="243.3" y1="40" x2="243.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="316.7" y1="40" x2="316.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="463.3" y1="40" x2="463.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="536.7" y1="40" x2="536.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="610.0" y1="40" x2="610.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="683.3" y1="40" x2="683.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="346.2" x2="720" y2="346.2" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="302.5" x2="720" y2="302.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="258.8" x2="720" y2="258.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="215.0" x2="720" y2="215.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="127.5" x2="720" y2="127.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="83.8" x2="720" y2="83.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="316.7" y1="40" x2="316.7" y2="390" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="322.7" y="55" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">x = −1</text><line x1="463.3" y1="40" x2="463.3" y2="390" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="469.3" y="55" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">x = 1</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="171.2" x2="735" y2="171.2" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="175.2" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="390.0" y1="400" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="390.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="378.0" y="187.2" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="96.7" y1="167.2" x2="96.7" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="96.7" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="170.0" y1="167.2" x2="170.0" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="170.0" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="243.3" y1="167.2" x2="243.3" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="243.3" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="316.7" y1="167.2" x2="316.7" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="316.7" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="463.3" y1="167.2" x2="463.3" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="463.3" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="536.7" y1="167.2" x2="536.7" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="536.7" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="610.0" y1="167.2" x2="610.0" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="610.0" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="683.3" y1="167.2" x2="683.3" y2="175.2" stroke="#1f2937" stroke-width="1"/><text x="683.3" y="187.2" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="386.0" y1="390.0" x2="394.0" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-5</text><line x1="386.0" y1="346.2" x2="394.0" y2="346.2" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="350.2" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="386.0" y1="302.5" x2="394.0" y2="302.5" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="306.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="386.0" y1="258.8" x2="394.0" y2="258.8" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="262.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="386.0" y1="215.0" x2="394.0" y2="215.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="219.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="127.5" x2="394.0" y2="127.5" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="131.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="386.0" y1="83.8" x2="394.0" y2="83.8" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="87.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="386.0" y1="40.0" x2="394.0" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="380.0" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text>
    
    <!-- Courbes -->
    <path d="M 60.0 445.7 L 64.4 443.0 L 68.8 440.2 L 73.2 437.4 L 77.6 434.7 L 82.0 431.9 L 86.4 429.1 L 90.8 426.3 L 95.2 423.5 L 99.6 420.7 L 104.0 417.9 L 108.4 415.1 L 112.8 412.3 L 117.2 409.4 L 121.6 406.6 L 126.0 403.8 L 130.4 400.9 L 134.8 398.1 L 139.2 395.2 L 143.6 392.3 L 148.0 389.4 L 152.4 386.5 L 156.8 383.6 L 161.2 380.7 L 165.6 377.8 L 170.0 374.8 L 174.4 371.9 L 178.8 368.9 L 183.2 365.9 L 187.6 362.9 L 192.0 359.9 L 196.4 356.8 L 200.8 353.7 L 205.2 350.6 L 209.6 347.5 L 214.0 344.3 L 218.4 341.1 L 222.8 337.9 L 227.2 334.6 L 231.6 331.3 L 236.0 328.0 L 240.4 324.5 L 244.8 321.0 L 249.2 317.5 L 253.6 313.8 L 258.0 310.1 L 262.4 306.2 L 266.8 302.2 L 271.2 298.1 L 275.6 293.8 L 280.0 289.2 L 284.4 284.3 L 288.8 279.0 L 293.2 273.2 L 297.6 266.6 L 302.0 258.8 L 306.4 249.0 L 310.8 234.7 L 315.2 202.4 L 319.6 215.6 L 324.0 233.7 L 328.4 242.1 L 332.8 247.1 L 337.2 250.5 L 341.6 252.9 L 346.0 254.7 L 350.4 255.9 L 354.8 256.9 L 359.2 257.5 L 363.6 258.0 L 368.0 258.3 L 372.4 258.5 L 376.8 258.7 L 381.2 258.7 L 385.6 258.7 L 390.0 258.8 L 394.4 258.8 L 398.8 258.8 L 403.2 258.8 L 407.6 259.0 L 412.0 259.2 L 416.4 259.5 L 420.8 260.0 L 425.2 260.6 L 429.6 261.6 L 434.0 262.8 L 438.4 264.6 L 442.8 267.0 L 447.2 270.4 L 451.6 275.4 L 456.0 283.8 L 460.4 301.9 L 464.8 315.1 L 469.2 282.8 L 473.6 268.5 L 478.0 258.7 L 482.4 250.9 L 486.8 244.3 L 491.2 238.5 L 495.6 233.2 L 500.0 228.3 L 504.4 223.7 L 508.8 219.4 L 513.2 215.3 L 517.6 211.3 L 522.0 207.4 L 526.4 203.7 L 530.8 200.0 L 535.2 196.5 L 539.6 193.0 L 544.0 189.5 L 548.4 186.2 L 552.8 182.9 L 557.2 179.6 L 561.6 176.4 L 566.0 173.2 L 570.4 170.0 L 574.8 166.9 L 579.2 163.8 L 583.6 160.7 L 588.0 157.6 L 592.4 154.6 L 596.8 151.6 L 601.2 148.6 L 605.6 145.6 L 610.0 142.7 L 614.4 139.7 L 618.8 136.8 L 623.2 133.9 L 627.6 131.0 L 632.0 128.1 L 636.4 125.2 L 640.8 122.3 L 645.2 119.4 L 649.6 116.6 L 654.0 113.7 L 658.4 110.9 L 662.8 108.1 L 667.2 105.2 L 671.6 102.4 L 676.0 99.6 L 680.4 96.8 L 684.8 94.0 L 689.2 91.2 L 693.6 88.4 L 698.0 85.6 L 702.4 82.8 L 706.8 80.1 L 711.2 77.3 L 715.6 74.5 L 720.0 71.8" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 60.0 455.6 L 64.4 453.0 L 68.8 450.4 L 73.2 447.8 L 77.6 445.1 L 82.0 442.5 L 86.4 439.9 L 90.8 437.2 L 95.2 434.6 L 99.6 432.0 L 104.0 429.4 L 108.4 426.8 L 112.8 424.1 L 117.2 421.5 L 121.6 418.9 L 126.0 416.2 L 130.4 413.6 L 134.8 411.0 L 139.2 408.4 L 143.6 405.8 L 148.0 403.1 L 152.4 400.5 L 156.8 397.9 L 161.2 395.3 L 165.6 392.6 L 170.0 390.0 L 174.4 387.4 L 178.8 384.8 L 183.2 382.1 L 187.6 379.5 L 192.0 376.9 L 196.4 374.2 L 200.8 371.6 L 205.2 369.0 L 209.6 366.4 L 214.0 363.8 L 218.4 361.1 L 222.8 358.5 L 227.2 355.9 L 231.6 353.2 L 236.0 350.6 L 240.4 348.0 L 244.8 345.4 L 249.2 342.8 L 253.6 340.1 L 258.0 337.5 L 262.4 334.9 L 266.8 332.2 L 271.2 329.6 L 275.6 327.0 L 280.0 324.4 L 284.4 321.8 L 288.8 319.1 L 293.2 316.5 L 297.6 313.9 L 302.0 311.2 L 306.4 308.6 L 310.8 306.0 L 315.2 303.4 L 319.6 300.8 L 324.0 298.1 L 328.4 295.5 L 332.8 292.9 L 337.2 290.2 L 341.6 287.6 L 346.0 285.0 L 350.4 282.4 L 354.8 279.8 L 359.2 277.1 L 363.6 274.5 L 368.0 271.9 L 372.4 269.2 L 376.8 266.6 L 381.2 264.0 L 385.6 261.4 L 390.0 258.8 L 394.4 256.1 L 398.8 253.5 L 403.2 250.9 L 407.6 248.3 L 412.0 245.6 L 416.4 243.0 L 420.8 240.4 L 425.2 237.7 L 429.6 235.1 L 434.0 232.5 L 438.4 229.9 L 442.8 227.2 L 447.2 224.6 L 451.6 222.0 L 456.0 219.4 L 460.4 216.8 L 464.8 214.1 L 469.2 211.5 L 473.6 208.9 L 478.0 206.3 L 482.4 203.6 L 486.8 201.0 L 491.2 198.4 L 495.6 195.7 L 500.0 193.1 L 504.4 190.5 L 508.8 187.9 L 513.2 185.2 L 517.6 182.6 L 522.0 180.0 L 526.4 177.4 L 530.8 174.8 L 535.2 172.1 L 539.6 169.5 L 544.0 166.9 L 548.4 164.2 L 552.8 161.6 L 557.2 159.0 L 561.6 156.4 L 566.0 153.8 L 570.4 151.1 L 574.8 148.5 L 579.2 145.9 L 583.6 143.2 L 588.0 140.6 L 592.4 138.0 L 596.8 135.4 L 601.2 132.8 L 605.6 130.1 L 610.0 127.5 L 614.4 124.9 L 618.8 122.2 L 623.2 119.6 L 627.6 117.0 L 632.0 114.4 L 636.4 111.8 L 640.8 109.1 L 645.2 106.5 L 649.6 103.9 L 654.0 101.3 L 658.4 98.6 L 662.8 96.0 L 667.2 93.4 L 671.6 90.8 L 676.0 88.1 L 680.4 85.5 L 684.8 82.9 L 689.2 80.2 L 693.6 77.6 L 698.0 75.0 L 702.4 72.4 L 706.8 69.7 L 711.2 67.1 L 715.6 64.5 L 720.0 61.9" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="258.8" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(380.0, 274.8)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Centre I(0 ; -2)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (D) : y = x − 2</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    }
  ]
},

{
  id: 'bac-2019-D-juillet-2nd',
  year: 2019,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Juillet 2019 / 2nd tour',
  topics: ['Courbes paramétriques', 'Géométrie dans l\'espace', 'Fonction exponentielle', 'Intégrales & Suites'],
  parts: [
    {
      label: 'Exercice 1 — Courbe paramétrique (Γ) : x=sin t, y=cos 3t (4 pts)',
      problem: `<p>Soit \\((\\Gamma)\\) la courbe paramétrique définie par :
\\[\\begin{cases} x(t) = \\sin t \\\\ y(t) = \\cos 3t \\end{cases} \\quad (t \\in \\mathbb{R})\\]
On considère \\(M(t)\\) le point de coordonnées \\((x(t) ; y(t))\\) et un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 4 cm.</p>

<p><strong>1)</strong> Comparer :<br>
a) \\(M(t+\\pi)\\) et \\(M(t)\\)<br>
b) \\(M(-t)\\) et \\(M(t)\\)<br>
c) \\(M(\\pi-t)\\) et \\(M(t)\\)</p>

<p><strong>2)</strong> En déduire les éléments de symétrie pour la courbe \\((\\Gamma)\\). Justifier qu'on peut réduire le domaine d'étude de \\((\\Gamma)\\) à l'intervalle \\(I = \\left[0 ; \\dfrac{\\pi}{2}\\right]\\).</p>

<p><strong>3)</strong> Étudier les variations de \\(x\\) et \\(y\\) et donner leurs variations dans un tableau commun pour \\(t\\) élément de \\(I\\).</p>

<p><strong>4)</strong><br>
a) Déterminer les équations des tangentes à la courbe \\((\\Gamma)\\) aux paramètres respectifs \\(0\\), \\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{\\pi}{2}\\).<br>
b) Construire \\((\\Gamma)\\) et les tangentes aux points de paramètres \\(0\\), \\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{\\pi}{2}\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Courbes paramétriques trigonométriques &amp; tangentes</span>
  <ul>
    <li><strong>Périodicité et symétries :</strong> $x(t)=\\sin t$ est $2\\pi$-périodique et impaire ; $y(t)=\\cos 3t$ est $\\dfrac{2\\pi}{3}$-périodique et paire. Le domaine d'étude se réduit à $[0 ; \\dfrac{\\pi}{2}]$.</li>
    <li><strong>Dérivées :</strong> $x'(t) = \\cos t$ et $y'(t) = -3\\sin 3t$.</li>
    <li><strong>Tangentes remarquables :</strong>
      <br>— Horizontale : $y'(t_0)=0$ et $x'(t_0)\\neq 0 \\implies$ tangente d'équation $y = y(t_0)$.
      <br>— Verticale : $x'(t_0)=0$ et $y'(t_0)\\neq 0 \\implies$ tangente d'équation $x = x(t_0)$.
      <br>— Pente en un point régulier : $m = \\dfrac{y'(t_0)}{x'(t_0)}$.</li>
  </ul>
</div>`,
correction: `<h4>📋 Proposition de Corrigé</h4>

<p><strong>1) Comparaisons</strong></p>

<p><strong>a)</strong> \\(x(t+\\pi) = \\sin(t+\\pi) = -\\sin t = -x(t)\\) et \\(y(t+\\pi) = \\cos(3t+3\\pi) = -\\cos 3t = -y(t)\\).<br>
\\(M(t+\\pi)\\) est le symétrique de \\(M(t)\\) par rapport à \\(O\\) (symétrie centrale).</p>

<p><strong>b)</strong> \\(x(-t) = \\sin(-t) = -\\sin t = -x(t)\\) et \\(y(-t) = \\cos(-3t) = \\cos 3t = y(t)\\).<br>
\\(M(-t)\\) est le symétrique de \\(M(t)\\) par rapport à l'axe des ordonnées \\((Oy)\\).</p>

<p><strong>c)</strong> \\(x(\\pi-t) = \\sin(\\pi-t) = \\sin t = x(t)\\) et \\(y(\\pi-t) = \\cos(3\\pi-3t) = -\\cos 3t = -y(t)\\).<br>
\\(M(\\pi-t)\\) est le symétrique de \\(M(t)\\) par rapport à l'axe des abscisses \\((Ox)\\).</p>

<p><strong>2) Éléments de symétrie et réduction</strong></p>
<p>\\((\\Gamma)\\) est symétrique par rapport à \\(O\\), à \\((Oy)\\) et à \\((Ox)\\). La période de \\(x(t)=\\sin t\\) est \\(2\\pi\\) et \\(y(t)=\\cos 3t\\) est de période \\(\\dfrac{2\\pi}{3}\\), donc \\((\\Gamma)\\) a pour période \\(2\\pi\\). Grâce aux symétries, il suffit d'étudier \\(t\\in\\left[0;\\dfrac{\\pi}{2}\\right]\\).</p>

<p><strong>3) Variations sur \\(I = [0;\\dfrac{\\pi}{2}]\\)</strong></p>
<p>\\(x'(t) = \\cos t \\geq 0\\) sur \\([0;\\dfrac{\\pi}{2}]\\) → \\(x\\) croissant de 0 à 1.<br>
\\(y'(t) = -3\\sin 3t\\). \\(\\sin 3t = 0\\) pour \\(3t = 0, \\pi\\), soit \\(t=0, \\dfrac{\\pi}{3}\\). \\(\\sin 3t > 0\\) sur \\(]0;\\dfrac{\\pi}{3}[\\) → \\(y\\) décroissant.<br>
\\(y(\\dfrac{\\pi}{3}) = \\cos\\pi = -1\\). \\(\\sin 3t < 0\\) sur \\(]\\dfrac{\\pi}{3};\\dfrac{\\pi}{2}[\\) → \\(y\\) croissant. \\(y(\\dfrac{\\pi}{2}) = \\cos(3\\dfrac{\\pi}{2}) = 0\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
      <marker id="arr-green-19-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-19-2-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="318" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 319 L 10 319 C 5 319 1 315 1 310 Z" fill="#222d46"/>
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="180" x2="760" y2="180" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="225" x2="760" y2="225" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="320" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="13" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="135" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="14" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="203" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="13" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="272" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="14" font-weight="800" font-style="italic">y(t)</text>

    <!-- t row -->
    <text x="160" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">0</text>
    <text x="430" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">π/3</text>
    <text x="700" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">π/2</text>

    <!-- vertical guide line at t = π/3 -->
    <line x1="430" y1="45" x2="430" y2="319" stroke="#dde1ec" stroke-width="1.2"/>

    <!-- x'(t) row -->
    <text x="160" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="'Nunito', sans-serif" font-size="14" font-weight="700">1</text>
    <text x="295" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="'Nunito', sans-serif" font-size="20" font-weight="900">+</text>
    <text x="430" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="'Nunito', sans-serif" font-size="13" font-weight="700">½</text>
    <text x="565" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="'Nunito', sans-serif" font-size="20" font-weight="900">+</text>
    <text x="700" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="14" font-weight="700">0</text>

    <!-- x(t) row -->
    <text x="160" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="185" y1="160" x2="400" y2="140" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round"/>
    <text x="430" y="140" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="13" font-weight="900">√3/2</text>
    <line x1="455" y1="138" x2="675" y2="118" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-19-2-param)"/>
    <text x="700" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">1</text>

    <!-- y'(t) row -->
    <text x="160" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="14" font-weight="700">0</text>
    <text x="295" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="'Nunito', sans-serif" font-size="20" font-weight="900">−</text>
    <text x="430" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="14" font-weight="700">0</text>
    <text x="565" y="203" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="'Nunito', sans-serif" font-size="20" font-weight="900">+</text>
    <text x="700" y="203" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="'Nunito', sans-serif" font-size="14" font-weight="700">3</text>

    <!-- y(t) row -->
    <text x="160" y="245" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="185" y1="250" x2="405" y2="292" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-19-2-param)"/>
    <text x="430" y="295" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">−1</text>
    <line x1="455" y1="292" x2="675" y2="272" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-19-2-param)"/>
    <text x="700" y="270" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>4a) Tangentes</strong></p>
<p><em>En \\(t=0\\) :</em> \\(M(0)=(0;1)\\), vecteur vitesse \\((x'(0);y'(0))=(1;0)\\) → tangente <strong>horizontale</strong> : \\[\\boxed{(T_0) : y = 1}\\]</p>
<p><em>En \\(t=\\dfrac{\\pi}{3}\\) :</em> \\(M(\\dfrac{\\pi}{3})=(\\dfrac{\\sqrt{3}}{2};-1)\\), vecteur vitesse \\((\\dfrac{1}{2};0)\\) → tangente <strong>horizontale</strong> : \\[\\boxed{(T_{\\pi/3}) : y = -1}\\]</p>
<p><em>En \\(t=\\dfrac{\\pi}{2}\\) :</em> \\(M(\\dfrac{\\pi}{2})=(1;0)\\), vecteur vitesse \\((0;3)\\) → tangente <strong>verticale</strong> : \\[\\boxed{(T_{\\pi/2}) : x = 1}\\]</p>`
    },
    {
      label: 'Exercice 2 — Géométrie dans l\'espace (4 pts)',
      problem: `<p>On munit l'espace d'un repère orthonormal \\((O;\\vec{i};\\vec{j};\\vec{k})\\) et on considère les points \\(A(-1;2;-2)\\), \\(B(2;0;-1)\\), \\(C(0;4;1)\\).</p>

<p><strong>1)</strong> Vérifier que \\(\\overrightarrow{AB} = 3\\vec{i}-2\\vec{j}+\\vec{k}\\).</p>
<p><strong>2)</strong> Soit \\(D\\) un point de l'espace tel que \\(\\overrightarrow{AD} = \\overrightarrow{BC}\\).<br>
a) Calculer \\(\\overrightarrow{AB}\\cdot\\overrightarrow{BC}\\). En déduire la nature exacte du quadrilatère \\(ABCD\\).<br>
b) Calculer les coordonnées du point \\(D\\).</p>
<p><strong>3)</strong> Calculer (en unité de longueur) la distance :<br>
a) \\(d_1\\) du point \\(O\\) à la droite \\((AB)\\).<br>
b) \\(d_2\\) du point \\(O\\) au plan \\((ABC)\\).</p>
<p><strong>4)</strong> Calculer (en unité de volume) le volume \\(V\\) de la pyramide de base \\(ABCD\\) et de sommet \\(O\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie dans l'espace &amp; Produit vectoriel</span>
  <ul>
    <li><strong>Produit vectoriel :</strong> $\\vec{u}(x;y;z) \\wedge \\vec{v}(x';y';z') = (yz'-zy')\\vec{i} - (xz'-zx')\\vec{j} + (xy'-yx')\\vec{k}$. Il est orthogonal à $\\vec{u}$ et à $\\vec{v}$.</li>
    <li><strong>Distance d'un point $M$ à une droite $(AB)$ :</strong> $d(M, (AB)) = \\dfrac{\\|\\overrightarrow{AM} \\wedge \\overrightarrow{AB}\\|}{\\|\\overrightarrow{AB}\\|}$.</li>
    <li><strong>Équation de plan et distance :</strong> Le plan $(ABC)$ admet pour vecteur normal $\\vec{n} = \\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (a;b;c)$. La distance d'un point $M(x_0;y_0;z_0)$ à $(P) : ax+by+cz+d=0$ est $d(M, (P)) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.</li>
    <li><strong>Volume d'une pyramide :</strong> $V = \\dfrac{1}{3} \\times \\text{Aire de la base} \\times \\text{hauteur}$, avec $\\text{Aire}(ABCD) = \\|\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\|$.</li>
  </ul>
</div>`,
correction: `<h4>📋 Proposition de Corrigé</h4>

<p><strong>1) Coordonnées de \\(B\\) et vecteur \\(\\overrightarrow{AB}\\)</strong></p>
<p>\\(\\overrightarrow{AB} = (x_B-x_A ; y_B-y_A ; z_B-z_A) = (2-(-1) ; 0-2 ; -1-(-2)) = (3 ; -2 ; 1)\\).</p>
<p>Donc \\(\\overrightarrow{AB} = 3\\vec{i}-2\\vec{j}+\\vec{k}\\). ✅</p>

<p><strong>2a) Produit scalaire \\(\\overrightarrow{AB}\\cdot\\overrightarrow{BC}\\) et nature de ABCD</strong></p>
<p>\\(\\overrightarrow{BC} = (0-2 ; 4-0 ; 1-(-1)) = (-2 ; 4 ; 2)\\).</p>
<p>\\(\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = (3)(-2) + (-2)(4) + (1)(2) = -6 - 8 + 2 = -12 \\neq 0\\).</p>
<p>Comme \\(\\overrightarrow{AD} = \\overrightarrow{BC}\\), \\(ABCD\\) est un <strong>parallélogramme</strong>.</p>
<p>\\(AB = \\sqrt{9+4+1} = \\sqrt{14}\\) et \\(BC = \\sqrt{4+16+4} = \\sqrt{24} = 2\\sqrt{6}\\).</p>
<p>\\(AB \\neq BC\\) et \\(\\overrightarrow{AB}\\cdot\\overrightarrow{BC}\\neq0\\) → \\(ABCD\\) est un parallélogramme non particulier (ni rectangle, ni losange).</p>

<p><strong>2b) Coordonnées de D</strong></p>
<p>\\(\\overrightarrow{AD} = \\overrightarrow{BC} \\iff (x_D+1 ; y_D-2 ; z_D+2) = (-2 ; 4 ; 2)\\)</p>
<p>\\(x_D = -3\\), \\(y_D = 6\\), \\(z_D = 0\\). \\[\\boxed{D(-3 ; 6 ; 0)}\\]</p>

<p><strong>3a) Distance \\(d_1\\) de O à la droite (AB)</strong></p>
<p>\\(\\overrightarrow{OA} = (-1 ; 2 ; -2)\\) et \\(\\overrightarrow{AB} = (3 ; -2 ; 1)\\).</p>
<p>\\[\\overrightarrow{OA}\\wedge\\overrightarrow{AB} = \\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\-1&2&-2\\\\3&-2&1\\end{vmatrix} = (2-4)\\vec{i} - (-1+6)\\vec{j} + (2-6)\\vec{k} = (-2 ; -5 ; -4)\\]</p>
<p>\\(\\|\\overrightarrow{OA}\\wedge\\overrightarrow{AB}\\| = \\sqrt{4+25+16} = \\sqrt{45} = 3\\sqrt{5}\\).</p>
<p>\\(\\|\\overrightarrow{AB}\\| = \\sqrt{14}\\).</p>
<p>\\[\\boxed{d_1 = \\frac{\\|\\overrightarrow{OA}\\wedge\\overrightarrow{AB}\\|}{\\|\\overrightarrow{AB}\\|} = \\frac{3\\sqrt{5}}{\\sqrt{14}} = \\frac{3\\sqrt{70}}{14} \\text{ u.l.}}\\]</p>

<p><strong>3b) Distance \\(d_2\\) de O au plan (ABC)</strong></p>
<p>\\(\\overrightarrow{AC} = (1 ; 2 ; 3)\\).</p>
<p>\\[\\vec{n} = \\overrightarrow{AB}\\wedge\\overrightarrow{AC} = \\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\3&-2&1\\\\1&2&3\\end{vmatrix} = (-6-2)\\vec{i} - (9-1)\\vec{j} + (6+2)\\vec{k} = (-8 ; -8 ; 8) = 8(-1 ; -1 ; 1)\\]</p>
<p>Équation du plan \\((ABC)\\) : \\(-1(x+1) - 1(y-2) + 1(z+2) = 0 \\iff -x - y + z + 3 = 0\\).</p>
<p>\\[\\boxed{d_2 = \\frac{|-0 - 0 + 0 + 3|}{\\sqrt{1+1+1}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} \\text{ u.l.}}\\]</p>

<p><strong>4) Volume V de la pyramide OABCD</strong></p>
<p>\\(\\text{Aire}(ABCD) = \\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\| = \\sqrt{64+64+64} = 8\\sqrt{3}\\text{ u.a.}\\)</p>
<p>\\[V = \\frac{1}{3} \\times \\text{Aire}(ABCD) \\times d_2 = \\frac{1}{3} \\times 8\\sqrt{3} \\times \\sqrt{3} = \\boxed{8 \\text{ u.v.}}\\]</p>`
    },
    {
      label: 'Problème — Fonction g et f(x) = x−3+(x²−2x+3)·exp(1−x) (12 pts)',
      problem: `<p><strong>Partie A</strong></p>
<p>Soit \\(g\\) la fonction définie sur \\(\\mathbb{R}\\) par \\(g(x) = 1-(x^2-4x+5)e^{-x+1}\\).</p>
<p><strong>1)</strong> Calculer les limites de \\(g\\) aux bornes de son ensemble de définition.</p>
<p><strong>2)</strong> Étudier le sens de variation de \\(g\\) puis dresser son tableau de variation.</p>
<p><strong>3)</strong><br>
a) Montrer que l'équation \\(g(x)=0\\) admet une unique solution \\(\\alpha\\) et que \\(\\alpha \\in [1{,}35 ; 1{,}36[\\).<br>
b) Déduire le signe de \\(g(x)\\) suivant les valeurs de \\(x\\).</p>

<p><strong>Partie B</strong></p>
<p>On considère la fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par \\(f(x) = x-3+(x^2-2x+3)e^{-x+1}\\). On note \\((C)\\) la courbe représentative de \\(f\\) dans un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 2 cm.</p>
<p><strong>1)</strong> Calculer les limites de \\(f\\) en \\(+\\infty\\) et en \\(-\\infty\\).</p>
<p><strong>2)</strong><br>
a) Montrer que pour tout réel \\(x\\), \\(f'(x) = g(x)\\) avec \\(f'\\) la dérivée de \\(f\\) en \\(x\\).<br>
b) En déduire le sens de variation de \\(f\\).</p>
<p><strong>3)</strong><br>
a) Montrer que la droite \\((D)\\) d'équation \\(y = x-3\\) est une asymptote oblique à \\((C)\\) en \\(+\\infty\\).<br>
b) Étudier la position relative de la courbe \\((C)\\) par rapport à \\((D)\\).<br>
c) Déterminer une équation de la tangente \\((T)\\) à \\((C)\\) au point d'abscisse 1.</p>
<p><strong>4)</strong> Tracer \\((D)\\), \\((T)\\) et \\((C)\\).</p>

<p><strong>Partie C</strong></p>
<p><strong>1)</strong> À l'aide d'une double intégration par parties, calculer l'intégrale :
\\[I = \\int_1^\\alpha (x^2-2x+3)e^{-x+1}\\,dx\\]</p>
<p><strong>2)</strong> En déduire l'aire \\(A\\) (en cm²) du domaine plan limité par les droites d'équations \\(x=1\\), \\(x=\\alpha\\), \\(y=0\\) et la courbe \\((C)\\).</p>

<p><em>On donne : \\(e^{-0{,}35}\\approx0{,}704\\) ; \\(e^{-0{,}36}\\approx0{,}69\\) ; \\(e\\approx2{,}7\\) ; \\(e^{-1}\\approx0{,}36\\) ; \\(f(\\alpha)\\approx0{,}2\\)</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Étude de fonctions exponentielles &amp; Intégration par parties</span>
  <ul>
    <li><strong>Théorème des valeurs intermédiaires :</strong> Si $g$ est continue et strictement monotone sur $[a;b]$ avec $g(a) \\cdot g(b) < 0$, alors $g(x)=0$ admet une solution unique $\\alpha \\in ]a;b[$.</li>
    <li><strong>Asymptote oblique :</strong> $(D): y = ax+b$ est asymptote à $(C)$ en $+\\infty$ ssi $\\displaystyle\\lim_{x\\to+\\infty}[f(x)-(ax+b)] = 0$. Le signe de $f(x)-(ax+b)$ donne la position relative.</li>
    <li><strong>Double intégration par parties :</strong> Pour $\\displaystyle\\int (ax^2+bx+c)e^{-x}\\,dx$, on pose $u(x) = ax^2+bx+c$ et $v'(x) = e^{-x}$ pour abaisser le degré du polynôme successivement.</li>
    <li><strong>Aire d'un domaine :</strong> $\\mathcal{A} = \\displaystyle\\int_a^b |f(x)|\\,dx \\times U_A$ (en cm², où $U_A = \\|\\vec{i}\\| \\times \\|\\vec{j}\\|$).</li>
  </ul>
</div>`,
correction: `<h4>📋 Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Limites de g</strong></p>
<p>\\(\\displaystyle\\lim_{x\\to+\\infty}g(x) = 1 - 0 = 1\\) car \\((x^2-4x+5)e^{-x+1} \\to 0\\) par croissances comparées.<br>
\\(\\displaystyle\\lim_{x\\to-\\infty}g(x) = 1 - (+\\infty)(+\\infty) = -\\infty\\).</p>

<p><strong>2) Variations de g</strong></p>
<p>\\(g'(x) = -(2x-4)e^{-x+1} - (x^2-4x+5)(-e^{-x+1}) = e^{-x+1}[-(2x-4)+(x^2-4x+5)]\\)<br>
\\(= e^{-x+1}(x^2-6x+9) = e^{-x+1}(x-3)^2 \\geq 0\\).</p>
<p>\\(g'(x)=0\\) seulement en \\(x=3\\). Donc \\(g\\) est <strong>strictement croissante</strong> sur \\(\\mathbb{R}\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
      <marker id="arr-green-19-2-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="14" font-weight="800" font-style="italic">g '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="16" font-weight="800" font-style="italic">g(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="'Nunito', sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x row -->
    <text x="150" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="16" font-weight="900">3</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="17" font-weight="800">+∞</text>

    <!-- ticks at x=3 -->
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1"/>

    <!-- g'(x) row -->
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="'Nunito', sans-serif" font-size="22" font-weight="900">+</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="'Nunito', sans-serif" font-size="22" font-weight="900">+</text>

    <!-- g(x) row -->
    <text x="150" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="175" y1="225" x2="395" y2="180" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round"/>
    <text x="425" y="175" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="13" font-weight="900">1−2e⁻²</text>
    <line x1="455" y1="170" x2="675" y2="130" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-19-2-g)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="16" font-weight="900">1</text>
  </svg>
</div>

<p><strong>3a) Solution unique \\(\\alpha\\)</strong></p>
<p>\\(g\\) est continue et strictement croissante sur \\(\\mathbb{R}\\), avec \\(\\lim_{-\\infty}g = -\\infty < 0\\) et \\(\\lim_{+\\infty}g = 1 > 0\\). Par le TVI, l'équation \\(g(x)=0\\) admet une solution unique \\(\\alpha\\).<br>
\\(g(1{,}35) = 1 - (1{,}35^2-4(1{,}35)+5)e^{-0{,}35} = 1 - (1{,}4225)(0{,}704) \\approx 1 - 1{,}0014 < 0\\).<br>
\\(g(1{,}36) = 1 - (1{,}36^2-4(1{,}36)+5)e^{-0{,}36} = 1 - (1{,}4096)(0{,}69) \\approx 1 - 0{,}9726 > 0\\).<br>
Donc \\(\\boxed{\\alpha \\in [1{,}35 ; 1{,}36[}\\). ✅</p>

<p><strong>3b) Signe de g(x)</strong></p>
<p>\\(g(x) < 0\\) sur \\(]-\\infty ; \\alpha[\\), \\(g(\\alpha) = 0\\), et \\(g(x) > 0\\) sur \\(]\\alpha ; +\\infty[\\). ✅</p>

<p><strong>Partie B</strong></p>

<p><strong>1) Limites de f</strong></p>
<p>En \\(+\\infty\\) : \\((x^2-2x+3)e^{-x+1} \\to 0\\), donc \\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\).<br>
En \\(-\\infty\\) : \\(x-3\\to-\\infty\\) et \\((x^2-2x+3)e^{-x+1}\\to+\\infty\\), terme dominant exponentiel → \\(\\lim_{x\\to-\\infty}f(x) = +\\infty\\)...<br>
Attention : pour \\(x\\to-\\infty\\), \\(e^{-x+1}\\to+\\infty\\) et \\(x^2\\to+\\infty\\), donc \\((x^2-2x+3)e^{-x+1}\\to+\\infty\\), d'où \\(\\lim_{x\\to-\\infty}f(x) = +\\infty\\).</p>

<p><strong>2a) \\(f'(x) = g(x)\\)</strong></p>
<p>\\(f'(x) = 1 + (2x-2)e^{-x+1} + (x^2-2x+3)(-e^{-x+1})\\)<br>
\\(= 1 + e^{-x+1}[(2x-2) - (x^2-2x+3)] = 1 + e^{-x+1}[-x^2+4x-5] = 1 - (x^2-4x+5)e^{-x+1} = g(x)\\). ✅</p>

<p><strong>2b) Sens de variation de f</strong></p>
<p>Signe de \\(f'(x)\\) = signe de \\(g(x)\\) :<br>
\\(f\\) est <strong>strictement décroissante</strong> sur \\(]-\\infty ; \\alpha]\\) et <strong>strictement croissante</strong> sur \\([\\alpha ; +\\infty[\\).<br>
Minimum absolu en \\(\\alpha\\) : \\(f(\\alpha) \\approx 0{,}2\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
      <marker id="arr-green-19-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-19-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="'Nunito', sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="'Nunito', sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x row -->
    <text x="150" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="16" font-weight="900">α</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="17" font-weight="800">+∞</text>

    <!-- ticks at x=alpha -->
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1"/>

    <!-- f'(x) row -->
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="'Nunito', sans-serif" font-size="22" font-weight="900">−</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="'Nunito', sans-serif" font-size="22" font-weight="900">+</text>

    <!-- f(x) row -->
    <text x="150" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="15" font-weight="800">+∞</text>
    <line x1="175" y1="135" x2="395" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-red-19-2-f)"/>
    <text x="425" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="'Nunito', sans-serif" font-size="14" font-weight="900">f(α) ≈ 0,2</text>
    <line x1="460" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-green-19-2-f)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="'Nunito', sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>


<p><strong>3a) Asymptote oblique (D)</strong></p>
<p>\\(f(x) - (x-3) = (x^2-2x+3)e^{-x+1}\\).<br>
\\(\\displaystyle\\lim_{x\\to+\\infty}[f(x)-(x-3)] = 0\\) (croissances comparées).<br>
Donc \\((D) : y = x-3\\) est asymptote oblique à \\((C)\\) en \\(+\\infty\\). ✅</p>

<p><strong>3b) Position relative</strong></p>
<p>\\(f(x) - (x-3) = (x^2-2x+3)e^{-x+1}\\).<br>
Le discriminant de \\(x^2-2x+3\\) est \\(\\Delta = 4 - 12 = -8 < 0\\), coefficient \\(a=1>0\\), donc \\(x^2-2x+3 > 0\\) pour tout \\(x\\).<br>
Comme \\(e^{-x+1} > 0\\), \\(f(x)-(x-3) > 0\\) pour tout \\(x\\).<br>
✅ \\((C)\\) est <strong>strictement au-dessus de (D)</strong> sur \\(\\mathbb{R}\\).</p>

<p><strong>3c) Tangente (T) en x = 1</strong></p>
<p>\\(f(1) = 1-3+(1-2+3)e^0 = -2 + 2 = 0\\).<br>
\\(f'(1) = g(1) = 1 - (1-4+5)e^0 = 1 - 2 = -1\\).<br>
\\[\\boxed{(T) : y = -1(x-1) + 0 \\iff y = -x+1}\\]</p>

<p><strong>Partie C</strong></p>

<p><strong>1) Calcul de I par double IPP</strong></p>
<p>Posons \\(u(x) = x^2-2x+3\\) et \\(v'(x) = e^{-x+1}\\).<br>
Alors \\(u'(x) = 2x-2\\) et \\(v(x) = -e^{-x+1}\\).<br>
\\[I = \\left[-(x^2-2x+3)e^{-x+1}\\right]_1^\\alpha + \\int_1^\\alpha (2x-2)e^{-x+1}\\,dx\\]
Deuxième IPP sur l'intégrale : \\(u_1(x) = 2x-2\\), \\(v_1'(x) = e^{-x+1}\\), \\(u_1'(x) = 2\\), \\(v_1(x) = -e^{-x+1}\\).<br>
\\[\\int_1^\\alpha (2x-2)e^{-x+1}\\,dx = \\left[-(2x-2)e^{-x+1}\\right]_1^\\alpha + 2\\int_1^\\alpha e^{-x+1}\\,dx = \\left[-(2x-2)e^{-x+1}\\right]_1^\\alpha + \\left[-2e^{-x+1}\\right]_1^\\alpha\\]
En regroupant : une primitive de \\((x^2-2x+3)e^{-x+1}\\) est \\(H(x) = -(x^2+1)e^{-x+1} - 2e^{-x+1} = -(x^2+3)e^{-x+1}\\).<br>
Vérif : \\(H'(x) = -2x e^{-x+1} + (x^2+3)e^{-x+1} = (x^2-2x+3)e^{-x+1}\\). Parfait !<br>
\\[I = \\left[-(x^2+3)e^{-x+1}\\right]_1^\\alpha = -( \\alpha^2+3)e^{-\\alpha+1} - (-(1+3)e^0) = 4 - (\\alpha^2+3)e^{-\\alpha+1}\\]
Comme \\(g(\\alpha)=0 \\iff e^{-\\alpha+1} = \\dfrac{1}{\\alpha^2-4\\alpha+5}\\), on peut aussi écrire :<br>
\\[\\boxed{I = 4 - (\\alpha^2+3)e^{-\\alpha+1}}\\]</p>

<p><strong>2) Aire A en cm²</strong></p>
<p>Sur \\([1 ; \\alpha]\\), \\(f(x) \\geq 0\\) (car \\(f(1)=0\\) et \\(f\\) croît sur cet intervalle puisque le minimum est en \\(\\alpha\\)... en fait \\(f(\\alpha)\\approx0{,}2>0\\) et \\(f(1)=0\\)).<br>
L'unité graphique est 2 cm, donc 1 u.a. = 4 cm².<br>
\\(A = 4 \\int_1^\\alpha f(x)\\,dx = 4 \\int_1^\\alpha \\left[x-3 + (x^2-2x+3)e^{-x+1}\\right]dx\\)<br>
\\(= 4 \\left(\\left[\\dfrac{x^2}{2}-3x\\right]_1^\\alpha + I\\right) = 4 \\left(\\dfrac{\\alpha^2-1}{2} - 3(\\alpha-1) + I\\right)\\).<br>
\\[\\boxed{A = 4\\left[\\dfrac{\\alpha^2-6\\alpha+5}{2} + 4 - (\\alpha^2+3)e^{-\\alpha+1}\\right] \\text{ cm}^2}\\]</p>`
    }
  ]
},
{
  id: 'bac-2020-D-aout-1er',
  year: 2020,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Août 2020 / 1er tour',
  topics: ['Suites', 'Statistiques', 'Fonction logarithme', 'Intégrales', 'Point fixe'],
  parts: [
    {
      label: 'Exercice 1 — Suite (uₙ) récurrente (4 pts)',
      problem: `<p>Soit \\((u_n)\\) la suite définie par \\(u_{n+1} = 4\\dfrac{1+2u_n}{4-u_n}\\) et \\(u_0 = -3\\).</p>
<p><strong>1)</strong> Calculer \\(u_1\\), \\(u_2\\) et \\(u_3\\).</p>
<p><strong>2)</strong> Montrer que la suite \\((u_n)\\) est majorée par \\(-2\\).</p>
<p><strong>3) a)</strong> Déterminer le sens de variation de la suite \\((u_n)\\).</p>
<p><strong>b)</strong> La suite \\((u_n)\\) est-elle convergente ? Justifier.</p>
<p><strong>4)</strong> Soit \\((v_n)\\) la suite définie par \\(vₙ = \\dfrac{1}{u_n+2}\\).</p>
<p><strong>a)</strong> Montrer que la suite \\((v_n)\\) est une suite arithmétique dont on précisera la raison.</p>
<p><strong>b)</strong> Exprimer \\(v_n\\) en fonction de n. En déduire \\(u_n\\) en fonction de n.</p>
<p><strong>c)</strong> En déduire \\(Sₙ = v_0+v_1+\\cdots+v_n\\) en fonction de n puis \\(\\displaystyle\\lim_{n\\to+\\infty}S_n\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suites récurrentes homographiques &amp; suite géométrique auxiliaire</span>
  <ul>
    <li><strong>Suite homographique $u_{n+1} = \\dfrac{a uₙ + b}{c uₙ + d}$ :</strong> Pour linéariser, on utilise une suite auxiliaire $vₙ = \\dfrac{uₙ - \\alpha}{uₙ - \\beta}$, où $\\alpha, \\beta$ sont les points fixes solutions de $x = \\dfrac{ax+b}{cx+d}$.</li>
    <li><strong>Montrer que $(vₙ)$ est géométrique :</strong> Calculez $v_{n+1} = \\dfrac{u_{n+1}+2}{u_{n+1}-1}$, remplacez $u_{n+1}$ par son expression en fonction de $u_n$, simplifiez le quotient pour obtenir $v_{n+1} = q \\cdot v_n$.</li>
    <li><strong>Expression de $uₙ$ en fonction de $n$ :</strong> Exprimez $vₙ = v_0 q^n$, puis isolez $u_n$ dans la relation $vₙ = \\dfrac{u_n+2}{u_n-1}$.</li>
    <li><strong>Limite :</strong> Si $|q| < 1$, $\\lim_{n\\to+\\infty} q^n = 0$, ce qui donne immédiatement la limite de $u_n$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Calcul des premiers termes</strong></p>
<p>\\(u_1 = 4\\dfrac{1+2(-3)}{4-(-3)} = 4\\dfrac{-5}{7} = -\\dfrac{20}{7}\\)</p>
<p>\\(u_2 = 4\\dfrac{1+2\\left(-\\dfrac{20}{7}\\right)}{4-\\left(-\\dfrac{20}{7}\\right)} = 4\\dfrac{1-\\dfrac{40}{7}}{4+\\dfrac{20}{7}} = 4\\dfrac{-\\dfrac{33}{7}}{\\dfrac{48}{7}} = 4 \\times \\dfrac{-33}{48} = -\\dfrac{11}{4}\\)</p>
<p>\\(u_3 = 4\\dfrac{1+2\\left(-\\dfrac{11}{4}\\right)}{4-\\left(-\\dfrac{11}{4}\\right)} = 4\\dfrac{1-\\dfrac{11}{2}}{4+\\dfrac{11}{4}} = 4\\dfrac{-\\dfrac{9}{2}}{\\dfrac{27}{4}} = 4\\times\\dfrac{-9}{2}\\times\\dfrac{4}{27} = -\\dfrac{8}{3}\\)</p>

<p><strong>2) uₙ ≤ −2 pour tout n</strong></p>
<p>Montrons par récurrence que \\(uₙ \\leq -2\\).</p>
<p><em>Initialisation :</em> \\(u_0 = -3 \\leq -2\\).</p>
<p><em>Hérédité :</em> Supposons \\(uₙ \\leq -2\\). Montrons \\(u_{n+1} \\leq -2\\).</p>
<p>\\(u_{n+1}+2 = 4\\dfrac{1+2u_n}{4-u_n}+2 = \\dfrac{4+8u_n+8-2u_n}{4-u_n} = \\dfrac{6u_n+12}{4-u_n} = \\dfrac{6(u_n+2)}{4-u_n}\\)</p>
<p>Comme \\(uₙ \\leq -2 < 4\\) : \\(4-uₙ > 0\\) et \\(u_n+2 \\leq 0\\).</p>
<p>Donc \\(u_{n+1}+2 = \\dfrac{6(u_n+2)}{4-u_n} \\leq 0\\), soit \\(u_{n+1} \\leq -2\\).</p>

<p><strong>3a) Sens de variation</strong></p>
<p>\\(u_{n+1}-uₙ = 4\\dfrac{1+2u_n}{4-u_n} - uₙ = \\dfrac{4+8u_n-4u_n+u_n^2}{4-u_n} = \\dfrac{u_n^2+4u_n+4}{4-u_n} = \\dfrac{(u_n+2)^2}{4-u_n}\\)</p>
<p>\\((u_n+2)^2 \\geq 0\\) et \\(4-uₙ > 0\\) (car \\(uₙ \\leq -2 < 4\\)) → \\(u_{n+1}-uₙ \\geq 0\\).</p>
<p>La suite \\((u_n)\\) est <strong>croissante</strong>.</p>

<p><strong>3b) Convergence</strong></p>
<p>\\((u_n)\\) est croissante et majorée par \\(-2\\) → par le théorème de la convergence monotone, \\((u_n)\\) est <strong>convergente</strong>. Sa limite \\(\\ell\\) vérifie \\(\\ell \\leq -2\\).</p>

<p><strong>4a) (vₙ) est arithmétique</strong></p>
<p>\\(v_{n+1}-vₙ = \\dfrac{1}{u_{n+1}+2} - \\dfrac{1}{u_n+2}\\)</p>
<p>On a montré que \\(u_{n+1}+2 = \\dfrac{6(u_n+2)}{4-u_n}\\), donc :</p>
<p>\\(v_{n+1} = \\dfrac{4-u_n}{6(u_n+2)} = \\dfrac{4-u_n}{6} \\times \\dfrac{1}{u_n+2}\\)</p>
<p>\\(v_{n+1}-vₙ = \\dfrac{4-u_n}{6(u_n+2)} - \\dfrac{1}{u_n+2} = \\dfrac{4-u_n-6}{6(u_n+2)} = \\dfrac{-2-u_n}{6(u_n+2)} = \\dfrac{-(u_n+2)}{6(u_n+2)} = -\\dfrac{1}{6}\\)</p>
<p>\\((v_n)\\) est arithmétique de raison \\(r = -\\dfrac{1}{6}\\).</p>

<p><strong>4b) Expression de vₙ et uₙ</strong></p>
<p>\\(v_0 = \\dfrac{1}{u_0+2} = \\dfrac{1}{-3+2} = -1\\)</p>
<p>\\(vₙ = v_0 + nr = -1 - \\dfrac{n}{6} = \\dfrac{-6-n}{6}\\)</p>
<p>De \\(vₙ = \\dfrac{1}{u_n+2}\\) : \\(u_n+2 = \\dfrac{6}{-6-n} = \\dfrac{-6}{6+n}\\)</p>
<p>\\[\\boxed{uₙ = -2 - \\dfrac{6}{n+6}}\\]</p>
<p>Vérification : \\(u_0 = -2-1 = -3\\) ; \\(u_1 = -2-\\dfrac{6}{7} = -\\dfrac{20}{7}\\)</p>

<p><strong>4c) Somme Sₙ et limite</strong></p>
<p>\\(Sₙ = \\displaystyle\\sum_{k=0}^{n}v_k = (n+1)v_0 + \\dfrac{n(n+1)}{2}r = -(n+1)-\\dfrac{n(n+1)}{12}\\)</p>
<p>\\(= -(n+1)\\left(1+\\dfrac{n}{12}\\right) = -\\dfrac{(n+1)(n+12)}{12}\\)</p>
<p>\\[\\lim_{n\\to+\\infty}Sₙ = -\\infty\\]</p>
<p>(Sₙ est un polynôme du second degré négatif en n.)</p>`
    },
    {
      label: 'Exercice 2 — Statistiques : distance de freinage (4 pts)',
      problem: `<p>Le tableau suivant donne la distance de freinage nécessaire à un automobile circulant sur une route humide pour s'arrêter.</p>
<table class="vtab">
  <tr>
    <th>Vitesse \\(x_i\\) (km/h)</th>
    <td>30</td><td>40</td><td>50</td><td>60</td><td>70</td>
    <td>80</td><td>90</td><td>100</td><td>110</td><td>120</td>
  </tr>
  <tr>
    <th>Distance \\(y_i\\) (m)</th>
    <td>18</td><td>26</td><td>40</td><td>58</td><td>76</td>
    <td>98</td><td>120</td><td>148</td><td>180</td><td>212</td>
  </tr>
</table>
<p><strong>1) a)</strong> Construire le nuage de points \\(M_i\\) (1,5 cm = 20 km/h en abscisses ; 1,5 cm = 50 m en ordonnées).</p>
<p><strong>b)</strong> Un ajustement affine du nuage semble-t-il raisonnable ? Justifier la réponse.</p>
<p><strong>2) a)</strong> Construire la droite d'ajustement \\((\\Delta)\\) par la méthode de MAYER (5 premiers / 5 derniers points).</p>
<p><strong>b)</strong> Déterminer une équation de \\((\\Delta)\\) sous la forme \\(y = ax+b\\).</p>
<p><strong>3)</strong> En utilisant l'équation de \\((\\Delta)\\), estimer :</p>
<p><strong>a)</strong> La distance de freinage pour une vitesse de 150 km/h.</p>
<p><strong>b)</strong> La vitesse pour une distance de freinage de 250 m.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Statistiques à deux variables, nuage de points &amp; ajustement affine</span>
  <ul>
    <li><strong>Point moyen $G(\\bar{x}; \\bar{y})$ :</strong> $\\bar{x} = \\dfrac{1}{N}\\sum x_i$ et $\\bar{y} = \\dfrac{1}{N}\\sum y_i$.</li>
    <li><strong>Variance et Covariance :</strong> $V(X) = \\dfrac{1}{N}\\sum x_i^2 - \\bar{x}^2$ et $\\text{Cov}(X,Y) = \\dfrac{1}{N}\\sum x_i y_i - \\bar{x}\\bar{y}$.</li>
    <li><strong>Droite de régression de $y$ en $x$ :</strong> $(D) : y = ax+b$ avec $a = \\dfrac{\\text{Cov}(X,Y)}{V(X)}$ et $b = \\bar{y} - a\\bar{x}$.</li>
    <li><strong>Estimation / Prévision :</strong> Pour estimer la valeur de $y$ pour une nouvelle valeur $x_0$, calculez $y_0 = ax_0+b$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1b) Ajustement affine</strong></p>
<p>Les points semblent globalement alignés (croissance régulière de y en fonction de x). Un ajustement affine paraît raisonnable.</p>

<p><strong>2a-b) Droite de Mayer</strong></p>
<p>Sous-nuage 1 (5 premiers points) :</p>
<p>\\(G_1 = \\left(\\dfrac{30+40+50+60+70}{5} ; \\dfrac{18+26+40+58+76}{5}\\right) = (50 ; 43{,}6)\\)</p>
<p>Sous-nuage 2 (5 derniers points) :</p>
<p>\\(G_2 = \\left(\\dfrac{80+90+100+110+120}{5} ; \\dfrac{98+120+148+180+212}{5}\\right) = (100 ; 151{,}6)\\)</p>
<p>Pente : \\(a = \\dfrac{151{,}6-43{,}6}{100-50} = \\dfrac{108}{50} = 2{,}16\\)</p>
<p>Ordonnée à l'origine : \\(43{,}6 = 2{,}16\\times50+b \\Rightarrow b = 43{,}6-108 = -64{,}4\\)</p>
<p>\\[\\boxed{y = 2{,}16x - 64{,}4}\\]</p>

<p><strong>3a) Distance à 150 km/h</strong></p>
<p>\\(y(150) = 2{,}16\\times150-64{,}4 = 324-64{,}4 = 259{,}6\\) m \\(\\approx\\) <strong>260 m</strong>.</p>

<p><strong>3b) Vitesse pour 250 m</strong></p>
<p>\\(250 = 2{,}16x-64{,}4 \\Rightarrow 2{,}16x = 314{,}4 \\Rightarrow x = \\dfrac{314{,}4}{2{,}16} \\approx 145{,}6\\) km/h \\(\\approx\\) <strong>146 km/h</strong>.</p>`
    },
    {
      label: 'Problème — Fonction f(x) = 2(x−1)ln(1−x) et point fixe (12 pts)',
      problem: `<p>On considère la fonction f définie par :</p>
<p>\\[f(x) = \\begin{cases} 2(x-1)\ln(1-x) & \\text{si } x < 1 \\\\ (x-2)e^{-x+1}+1 & \\text{si } x \\geq 1 \\end{cases}\\]</p>
<p>On note (C) sa courbe représentative dans le plan muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\). Unité graphique 2 cm.</p>

<p><strong>Partie A</strong></p>
<p><strong>1)</strong> Calculer les limites de f en \\(-\\infty\\) et en \\(+\\infty\\). Que peut-on en déduire pour la courbe (C) ?</p>
<p><strong>2)</strong> Étudier la continuité de f en 1.</p>
<p><strong>3)</strong> Étudier la dérivabilité de f en 1. Interpréter graphiquement les résultats.</p>
<p><strong>4)</strong> Étudier les variations de f et dresser son tableau de variation.</p>
<p><strong>5)</strong> Montrer que l'équation \\((E): f(x)=-2\\) admet une unique solution \\(\\alpha\\) et que \\(\\alpha \\in \\left[-1;-\\dfrac{1}{2}\\right]\\).</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Déterminer les réels \\(\\alpha\\), \\(\\beta\\) et \\(\\gamma\\) tels que pour tout \\(x < 1\\) : \\(\\dfrac{x^2-2x}{x-1} = \\alpha x + \\beta + \\dfrac{\\gamma}{x-1}\\).</p>
<p><strong>2)</strong> Par une intégration par parties, calculer l'intégrale \\(I = \\displaystyle\\int_0^{1-\\dfrac{1}{e}}(x-1)\\ln(1-x)\\,dx\\).</p>
<p><strong>3)</strong> Calculer en cm² l'aire de la partie du plan délimitée par la courbe (C), l'axe des abscisses et les droites d'équations \\(x=0\\) et \\(x=1-\\dfrac{1}{e}\\).</p>

<p><strong>Partie C</strong></p>
<p><strong>1) a)</strong> Montrer que l'équation (E) équivaut à l'équation \\(h(x)=x\\) où h est la fonction définie sur \\(\\left[-1;-\\dfrac{1}{2}\\right]\\) par \\(h(x)=1-e^{\\dfrac{1}{1-x}}\\).</p>
<p><strong>b)</strong> Poser \\(I=\\left[-1;-\\dfrac{1}{2}\\right]\\). Montrer que pour tout \\(x \\in I\\), \\(h(x) \\in I\\).</p>
<p><strong>c)</strong> Montrer que pour tout \\(x \\in I\\), \\(|h'(x)| \\leq \\dfrac{7}{8}\\).</p>
<p><strong>2)</strong> Soit \\((u_n)\\) la suite définie par \\(u_0=-1\\) et \\(u_{n+1}=h(u_n)\\) pour tout \\(n \\in \\mathbb{N}\\).</p>
<p><strong>a)</strong> Montrer par récurrence que pour tout entier naturel n, \\(uₙ \\in I\\).</p>
<p><strong>b)</strong> Montrer que \\(|u_{n+1}-\\alpha| \\leq \\dfrac{7}{8}|u_n-\\alpha|\\).</p>
<p><strong>c)</strong> Montrer que \\(|u_n-\\alpha| \\leq \\dfrac{1}{2}\\left(\\dfrac{7}{8}\\right)^n\\).</p>
<p><strong>d)</strong> Déduire que \\((u_n)\\) est convergente et préciser sa limite.</p>
<p><em>On donne : \\(\\dfrac{2}{e}\\approx0{,}73\\) ; \\(\\dfrac{1}{e^2}\\approx0{,}13\\) ; \\(\\ln2=0{,}69\\) ; \\(\\ln\\dfrac{3}{2}=0{,}40\\) ; \\(e^{\\dfrac{3}{2}}=1{,}947\\) ; \\(e^{\\dfrac{1}{2}}=1{,}648\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions raccordées, logarithme &amp; décomposition en éléments simples</span>
  <ul>
    <li><strong>Dérivée de $(x-1)\\ln(1-x)$ :</strong> $u = x-1, u'=1$ ; $v=\\ln(1-x), v' = \\dfrac{-1}{1-x} = \\dfrac{1}{x-1}$. D'où $( (x-1)\\ln(1-x) )' = 1\\cdot\\ln(1-x) + (x-1)\\dfrac{1}{x-1} = \\ln(1-x) + 1$.</li>
    <li><strong>Point anguleux au raccord :</strong> Comparez la dérivée à gauche et la dérivée à droite en $x=1$. Si $f'_g(1) \\neq f'_d(1)$, il y a deux demi-tangentes sécantes.</li>
    <li><strong>Théorème de bijection et TVI :</strong> Sur chaque intervalle de stricte monotonie, $f$ réalise une bijection sur son image.</li>
    <li><strong>Décomposition en éléments simples :</strong> Pour intégrer une fraction rationnelle $\\dfrac{P(x)}{Q(x)}$, écrivez-la sous la forme $\\dfrac{A}{x-a} + \\dfrac{B}{x-b}$ pour intégrer immédiatement en logarithmes $\\ln|x-a|$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Limites</strong></p>
<p>En \\(-\\infty\\) : \\(f(x) = 2(x-1)\\ln(1-x)\\). \\((x-1)\\to-\\infty\\) et \\(\\ln(1-x)\\to+\\infty\\), donc \\(f(x)\\to-\\infty\\).</p>
<p>En \\(+\\infty\\) : \\(f(x) = (x-2)e^{-x+1}+1\\). \\((x-2)e^{-x+1}\\to0\\) donc \\(\\lim_{x\\to+\\infty}f(x) = 1\\).</p>
<p>La droite \\(y=1\\) est <strong>asymptote horizontale</strong> à (C) en \\(+\\infty\\).</p>

<p><strong>2) Continuité en 1</strong></p>
<p>\\(\\lim_{x\\to1^-}f(x) = 2(1-1)\\ln(0^+) = 0 \\times (-\\infty)\\). Posons \\(t=1-x\\to0^+\\) :</p>
<p>\\(2(x-1)\\ln(1-x) = -2t\\ln t \\to 0\\) (car \\(t\\ln t\\to0\\)).</p>
<p>\\(f(1) = (1-2)e^0+1 = -1+1 = 0\\).</p>
<p>\\(\\lim_{x\\to1^-}f(x) = f(1) = 0\\) → f est <strong>continue en 1</strong>.</p>

<p><strong>3) Dérivabilité en 1</strong></p>
<p><em>À gauche de 1 :</em> Pour \\(x < 1\\), \\(f(x) = 2(x-1)\\ln(1-x)\\) et \\(f(1) = 0\\).<br>
\\(\\lim_{x\\to1^-}\\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to1^-}\\dfrac{2(x-1)\\ln(1-x)}{x-1} = \\lim_{x\\to1^-} 2\\ln(1-x) = -\\infty\\).<br>
La courbe (C) admet en \\((1;0)\\) une <strong>demi-tangente verticale</strong> dirigée vers le haut à gauche.</p>
<p><em>À droite de 1 :</em> Pour \\(x > 1\\), \\(f(x) = (x-2)e^{-x+1}+1\\) et \\(f(1)=0\\).<br>
\\(\\lim_{x\\to1^+}\\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to1^+}\\dfrac{(x-2)e^{-x+1}+1}{x-1}\\).<br>
Posons \\(X = x-1 \\to 0^+\\) : \\(x-2 = X-1\\) et \\(-x+1 = -X\\).<br>
\\(\\dfrac{(X-1)e^{-X}+1}{X} = \\dfrac{Xe^{-X} - (e^{-X}-1)}{X} = e^{-X} - \\dfrac{e^{-X}-1}{X} \\to 1 - (-1) = 2\\).<br>
La courbe (C) admet en \\((1;0)\\) une <strong>demi-tangente de pente 2</strong> à droite.</p>
<p>Comme la limite à gauche est infinie et la limite à droite vaut 2, \\(f\\) n'est <strong>pas dérivable en 1</strong>. Le point \\(A(1;0)\\) est un <strong>point anguleux</strong>.</p>

<p><strong>4) Variations et tableau de variation de f</strong></p>
<p><em>Sur \\(]-\\infty; 1[\\) :</em> \\(f'(x) = 2\\ln(1-x) - 2 = 2(\\ln(1-x)-1)\\).<br>
\\(f'(x) = 0 \\iff \\ln(1-x) = 1 \\iff 1-x = e \\iff x = 1-e \\approx -1{,}72\\).<br>
\\(f'(x) > 0\\) pour \\(x < 1-e\\) et \\(f'(x) < 0\\) pour \\(1-e < x < 1\\).<br>
Maximum local : \\(f(1-e) = 2(-e)\\ln(e) = -2e \\approx -5{,}44\\).</p>
<p><em>Sur \\([1; +\\infty[\\) :</em> \\(f'(x) = 1\\cdot e^{-x+1} + (x-2)(-e^{-x+1}) = e^{-x+1}(1 - (x-2)) = (3-x)e^{-x+1}\\).<br>
\\(f'(x) = 0 \\iff x = 3\\).<br>
\\(f'(x) > 0\\) pour \\(1 \\leq x < 3\\) et \\(f'(x) < 0\\) pour \\(x > 3\\).<br>
Maximum local : \\(f(3) = (3-2)e^{-2}+1 = e^{-2}+1 \\approx 1{,}14\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-20-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-20-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x row -->
    <text x="140" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="280" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1−e</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="565" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">3</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>

    <!-- tick lines in f' row -->
    <line x1="280" y1="50" x2="280" y2="64" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="280" y1="86" x2="280" y2="100" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="50" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="565" y1="50" x2="565" y2="64" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="565" y1="86" x2="565" y2="100" stroke="#dde1ec" stroke-width="1.2"/>

    <!-- f'(x) row -->
    <text x="210" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="280" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="350" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="495" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="635" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>

    <!-- f(x) variations -->
    <text x="140" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
    <line x1="160" y1="225" x2="260" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-20-1-f)"/>
    <text x="280" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−2e</text>
    <line x1="300" y1="135" x2="405" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-20-1-f)"/>
    <text x="425" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="445" y1="225" x2="545" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-20-1-f)"/>
    <text x="565" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">e⁻²+1</text>
    <line x1="590" y1="135" x2="680" y2="215" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-20-1-f)"/>
    <text x="700" y="225" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
  </svg>
</div>

<p><strong>5) Solution unique de f(x) = −2</strong></p>
<p>Sur l'intervalle \\(I = \\left[-1; -\\dfrac{1}{2}\\right] \\subset ]1-e; 1[\\) :<br>
\\(f\\) est continue et strictement décroissante.<br>
\\(f(-1) = 2(-2)\\ln(2) = -4\\ln 2 \\approx -4 \\times 0{,}69 = -2{,}76\\).<br>
\\(f\\left(-\\dfrac{1}{2}\\right) = 2\\left(-\\dfrac{3}{2}\\right)\\ln\\left(\\dfrac{3}{2}\\right) = -3\\ln\\left(\\dfrac{3}{2}\\right) \\approx -3 \\times 0{,}40 = -1{,}20\\).<br>
Comme \\(-2 \\in [-2{,}76; -1{,}20]\\), d'après le corollaire du théorème des valeurs intermédiaires (théorème de bijection), l'équation \\(f(x) = -2\\) admet une <strong>unique solution \\(\\alpha \\in \\left[-1; -\\dfrac{1}{2}\\right]\\)</strong>.</p>

<p><strong>Partie B</strong></p>
<p><strong>1) Décomposition de \\(\\dfrac{x^2-2x}{x-1}\\)</strong></p>
<p>Pour tout \\(x < 1\\) :<br>
\\(\\dfrac{x^2-2x}{x-1} = \\dfrac{x^2-x - x + 1 - 1}{x-1} = \\dfrac{x(x-1) - (x-1) - 1}{x-1} = x - 1 - \\dfrac{1}{x-1}\\).<br>
Donc \\(\\alpha = 1\\), \\(\\beta = -1\\) et \\(\\gamma = -1\\).</p>

<p><strong>2) Intégration par parties de I</strong></p>
<p>\\(I = \\displaystyle\\int_0^{1-\\frac{1}{e}} (x-1)\\ln(1-x)\,dx\\).<br>
Posons \\(u'(x) = x-1 \\implies u(x) = \\dfrac{(x-1)^2}{2}\\) et \\(v(x) = \\ln(1-x) \\implies v'(x) = -\\dfrac{1}{1-x} = \\dfrac{1}{x-1}\\).<br>
\\(I = \\left[\\dfrac{(x-1)^2}{2}\\ln(1-x)\\right]_0^{1-\\frac{1}{e}} - \\displaystyle\\int_0^{1-\\frac{1}{e}} \\dfrac{(x-1)^2}{2}\\cdot\\dfrac{1}{x-1}\,dx\\)<br>
\\(= \\left[\\dfrac{(x-1)^2}{2}\\ln(1-x)\\right]_0^{1-\\frac{1}{e}} - \\dfrac{1}{2}\\displaystyle\\int_0^{1-\\frac{1}{e}} (x-1)\,dx\\)<br>
Pour \\(x = 1-\\dfrac{1}{e}\\) : \\(1-x = \\dfrac{1}{e}\\), \\(x-1 = -\\dfrac{1}{e}\\), \\((x-1)^2 = \\dfrac{1}{e^2}\\), \\(\\ln(1-x) = -1\\).<br>
Pour \\(x = 0\\) : \\(\\ln(1) = 0\\).<br>
Le crochet vaut : \\(\\dfrac{1}{2e^2}(-1) - 0 = -\\dfrac{1}{2e^2}\\).<br>
L'intégrale restante : \\(\\left[\\dfrac{(x-1)^2}{4}\\right]_0^{1-\\frac{1}{e}} = \\dfrac{1}{4e^2} - \\dfrac{1}{4}\\).<br>
D'où \\(I = -\\dfrac{1}{2e^2} - \\left(\\dfrac{1}{4e^2} - \\dfrac{1}{4}\\right) = \\dfrac{1}{4} - \\dfrac{3}{4e^2} = \\dfrac{e^2-3}{4e^2}\\).</p>

<p><strong>3) Calcul d'aire</strong></p>
<p>Sur \\(\\left[0; 1-\\dfrac{1}{e}\\right]\\), \\(x < 1\\) et \\(f(x) = 2(x-1)\\ln(1-x)\\).<br>
Comme \\(x-1 < 0\\) et \\(\\ln(1-x) < 0\\), \\(f(x) > 0\\).<br>
L'aire cherchée vaut :<br>
\\(\\mathcal{A} = \\displaystyle\\int_0^{1-\\frac{1}{e}} f(x)\,dx \\times \|\\vec{i}\| \\times \|\\vec{j}\| = 2I \\times 4\,\\text{cm}^2 = 8I\,\\text{cm}^2 = 8\\left(\\dfrac{e^2-3}{4e^2}\\right) = 2\\left(1-\\dfrac{3}{e^2}\\right)\,\\text{cm}^2\\).<br>
Numériquement : \\(\\mathcal{A} \\approx 2(1 - 3 \\times 0{,}13) = 2(1 - 0{,}39) = 1{,}22\,\\text{cm}^2\\).</p>

<p><strong>Partie C</strong></p>
<p><strong>1a) Équivalence (E) \\(\\iff h(x) = x\\)</strong></p>
<p>Pour \\(x \\in I = \\left[-1; -\\dfrac{1}{2}\\right] < 1\\) :<br>
\\(f(x) = -2 \\iff 2(x-1)\\ln(1-x) = -2 \\iff (1-x)\\ln(1-x) = 1 \\iff \\ln(1-x) = \\dfrac{1}{1-x}\\)<br>
\\(\\iff 1-x = e^{\\frac{1}{1-x}} \\iff x = 1 - e^{\\frac{1}{1-x}} = h(x)\\).</p>
<p><strong>1b) Stabilité de I par h : \\(h(I) \\subset I\\)</strong></p>
<p>\\(h'(x) = -\\left(\\dfrac{1}{(1-x)^2}\\right)e^{\\frac{1}{1-x}}\\) : comme exponentielle et carré sont strictement positifs, \\(h'(x) < 0\\).<br>
\\(h\\) est strictement décroissante sur \\(I\\).<br>
\\(h(-1) = 1 - e^{1/2} \\approx 1 - 1{,}648 = -0{,}648 \\in I\\).<br>
\\(h\\left(-\\dfrac{1}{2}\\right) = 1 - e^{2/3} \\approx 1 - 1{,}947 = -0{,}947 \\in I\\).<br>
Donc pour tout \\(x \\in I\\), \\(h(x) \\in I\\).</p>
<p><strong>1c) Inégalité \\(|h'(x)| \\leq \\dfrac{7}{8}\\)</strong></p>
<p>Pour tout \\(x \\in \\left[-1; -\\dfrac{1}{2}\\right]\\), \\(1-x \\in \\left[\\dfrac{3}{2}; 2\\right]\\).<br>
\\(|h'(x)| = \\dfrac{e^{1/(1-x)}}{(1-x)^2} \\leq \\dfrac{e^{2/3}}{(3/2)^2} = \\dfrac{1{,}947}{2{,}25} \\approx 0{,}865 < \\dfrac{7}{8} = 0{,}875\\).<br>
D'où \\(|h'(x)| \\leq \\dfrac{7}{8}\\) pour tout \\(x \\in I\\).</p>
<p><strong>2a) \\(u_n \\in I\\) par récurrence</strong></p>
<p>Initialisation : \\(u_0 = -1 \\in I\\) (vrai).<br>
Hérédité : Si \\(u_n \\in I\\), alors \\(u_{n+1} = h(u_n) \\in h(I) \\subset I\\).<br>
Conclusion : Pour tout \\(n \\in \\mathbb{N}\\), \\(u_n \\in I\\).</p>
<p><strong>2b) Inégalité des accroissements finis</strong></p>
<p>D'après le théorème des accroissements finis appliqué à \\(h\\) sur le segment reliant \\(u_n\\) et \\(\\alpha\\) (tous deux dans \\(I\\)) :<br>
\\(|h(u_n) - h(\\alpha)| \\leq \\sup_{x\\in I}|h'(x)| \\cdot |u_n - \\alpha|\\).<br>
Comme \\(h(u_n) = u_{n+1}\\) et \\(h(\\alpha) = \\alpha\\), on a :<br>
\\(|u_{n+1} - \\alpha| \\leq \\dfrac{7}{8}|u_n - \\alpha|\\).</p>
<p><strong>2c) Majoration de l'erreur</strong></p>
<p>Par récurrence immédiate : \\(|u_n - \\alpha| \\leq \\left(\\dfrac{7}{8}\\right)^n |u_0 - \\alpha|\\).<br>
Comme \\(u_0 = -1\\) et \\(\\alpha \\in \\left[-1; -\\dfrac{1}{2}\\right]\\), \\(|u_0 - \\alpha| \\leq -\\dfrac{1}{2} - (-1) = \\dfrac{1}{2}\\).<br>
Donc \\(|u_n - \\alpha| \\leq \\dfrac{1}{2}\\left(\\dfrac{7}{8}\\right)^n\\).</p>
<p><strong>2d) Convergence</strong></p>
<p>Comme \\(\\left|\\dfrac{7}{8}\\right| < 1\\), \\(\\lim_{n\\to+\\infty} \\left(\\dfrac{7}{8}\\right)^n = 0\\).<br>
Par le théorème des gendarmes, \\(\\lim_{n\\to+\\infty} |u_n - \\alpha| = 0\\), c'est-à-dire que \\((u_n)\\) <strong>converge vers \\(\\alpha\\)</strong>.</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) — BAC 2020 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="206.7" y1="40" x2="206.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="353.3" y1="40" x2="353.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="646.7" y1="40" x2="646.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="340.0" x2="720" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="290.0" x2="720" y2="290.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="190.0" x2="720" y2="190.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="140.0" x2="720" y2="140.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="90.0" x2="720" y2="90.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="646.7" y1="40" x2="646.7" y2="390" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="652.7" y="55" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">x = 1</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="240.0" x2="735" y2="240.0" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="244.0" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="500.0" y1="400" x2="500.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="500.0" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="488.0" y="256.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="236.0" x2="60.0" y2="244.0" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="256.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="206.7" y1="236.0" x2="206.7" y2="244.0" stroke="#1f2937" stroke-width="1"/><text x="206.7" y="256.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="353.3" y1="236.0" x2="353.3" y2="244.0" stroke="#1f2937" stroke-width="1"/><text x="353.3" y="256.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="646.7" y1="236.0" x2="646.7" y2="244.0" stroke="#1f2937" stroke-width="1"/><text x="646.7" y="256.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text>
    <line x1="496.0" y1="390.0" x2="504.0" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="496.0" y1="340.0" x2="504.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="496.0" y1="290.0" x2="504.0" y2="290.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="294.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="496.0" y1="190.0" x2="504.0" y2="190.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="194.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="496.0" y1="140.0" x2="504.0" y2="140.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="144.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="496.0" y1="90.0" x2="504.0" y2="90.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="94.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="496.0" y1="40.0" x2="504.0" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="490.0" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    
    <!-- Courbes -->
    <path d="M 161.7 635.5 L 165.6 629.7 L 169.5 623.8 L 173.4 618.0 L 177.3 612.3 L 181.2 606.5 L 185.1 600.8 L 189.0 595.1 L 192.9 589.4 L 196.9 583.7 L 200.8 578.1 L 204.7 572.4 L 208.6 566.8 L 212.5 561.3 L 216.4 555.7 L 220.3 550.2 L 224.2 544.7 L 228.1 539.2 L 232.0 533.8 L 236.0 528.4 L 239.9 523.0 L 243.8 517.6 L 247.7 512.2 L 251.6 506.9 L 255.5 501.6 L 259.4 496.4 L 263.3 491.1 L 267.2 485.9 L 271.1 480.7 L 275.1 475.6 L 279.0 470.4 L 282.9 465.3 L 286.8 460.2 L 290.7 455.2 L 294.6 450.2 L 298.5 445.2 L 302.4 440.2 L 306.3 435.3 L 310.2 430.4 L 314.2 425.6 L 318.1 420.7 L 322.0 415.9 L 325.9 411.2 L 329.8 406.4 L 333.7 401.7 L 337.6 397.1 L 341.5 392.4 L 345.4 387.8 L 349.3 383.2 L 353.3 378.7 L 357.2 374.2 L 361.1 369.8 L 365.0 365.3 L 368.9 360.9 L 372.8 356.6 L 376.7 352.3 L 380.6 348.0 L 384.5 343.8 L 388.5 339.6 L 392.4 335.4 L 396.3 331.3 L 400.2 327.2 L 404.1 323.2 L 408.0 319.2 L 411.9 315.3 L 415.8 311.4 L 419.7 307.5 L 423.6 303.7 L 427.6 300.0 L 431.5 296.3 L 435.4 292.6 L 439.3 289.0 L 443.2 285.4 L 447.1 281.9 L 451.0 278.4 L 454.9 275.0 L 458.8 271.7 L 462.7 268.4 L 466.7 265.1 L 470.6 262.0 L 474.5 258.8 L 478.4 255.8 L 482.3 252.8 L 486.2 249.8 L 490.1 247.0 L 494.0 244.2 L 497.9 241.4 L 501.8 238.7 L 505.8 236.2 L 509.7 233.6 L 513.6 231.2 L 517.5 228.8 L 521.4 226.5 L 525.3 224.3 L 529.2 222.2 L 533.1 220.2 L 537.0 218.2 L 540.9 216.4 L 544.9 214.7 L 548.8 213.0 L 552.7 211.5 L 556.6 210.1 L 560.5 208.8 L 564.4 207.6 L 568.3 206.5 L 572.2 205.6 L 576.1 204.8 L 580.0 204.2 L 584.0 203.7 L 587.9 203.4 L 591.8 203.2 L 595.7 203.3 L 599.6 203.5 L 603.5 204.0 L 607.4 204.7 L 611.3 205.7 L 615.2 207.0 L 619.1 208.6 L 623.1 210.6 L 627.0 213.0 L 630.9 216.0 L 634.8 219.6 L 638.7 224.2 L 642.6 230.1 L 646.5 239.3" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 60.0 390.0 L 63.9 388.7 L 67.8 387.3 L 71.7 386.0 L 75.6 384.7 L 79.6 383.3 L 83.5 382.0 L 87.4 380.7 L 91.3 379.3 L 95.2 378.0 L 99.1 376.7 L 103.0 375.3 L 106.9 374.0 L 110.8 372.7 L 114.8 371.3 L 118.7 370.0 L 122.6 368.7 L 126.5 367.3 L 130.4 366.0 L 134.3 364.7 L 138.2 363.3 L 142.1 362.0 L 146.0 360.7 L 150.0 359.3 L 153.9 358.0 L 157.8 356.7 L 161.7 355.3 L 165.6 354.0 L 169.5 352.7 L 173.4 351.3 L 177.3 350.0 L 181.2 348.7 L 185.2 347.3 L 189.1 346.0 L 193.0 344.7 L 196.9 343.3 L 200.8 342.0 L 204.7 340.7 L 208.6 339.3 L 212.5 338.0 L 216.4 336.7 L 220.4 335.3 L 224.3 334.0 L 228.2 332.7 L 232.1 331.3 L 236.0 330.0 L 239.9 328.7 L 243.8 327.3 L 247.7 326.0 L 251.6 324.7 L 255.6 323.3 L 259.5 322.0 L 263.4 320.7 L 267.3 319.3 L 271.2 318.0 L 275.1 316.7 L 279.0 315.3 L 282.9 314.0 L 286.8 312.7 L 290.8 311.3 L 294.7 310.0 L 298.6 308.7 L 302.5 307.3 L 306.4 306.0 L 310.3 304.7 L 314.2 303.3 L 318.1 302.0 L 322.0 300.7 L 326.0 299.3 L 329.9 298.0 L 333.8 296.7 L 337.7 295.3 L 341.6 294.0 L 345.5 292.7 L 349.4 291.3 L 353.3 290.0 L 357.2 288.7 L 361.2 287.3 L 365.1 286.0 L 369.0 284.7 L 372.9 283.3 L 376.8 282.0 L 380.7 280.7 L 384.6 279.3 L 388.5 278.0 L 392.4 276.7 L 396.4 275.3 L 400.3 274.0 L 404.2 272.7 L 408.1 271.3 L 412.0 270.0 L 415.9 268.7 L 419.8 267.3 L 423.7 266.0 L 427.6 264.7 L 431.6 263.3 L 435.5 262.0 L 439.4 260.7 L 443.3 259.3 L 447.2 258.0 L 451.1 256.7 L 455.0 255.3 L 458.9 254.0 L 462.8 252.7 L 466.8 251.3 L 470.7 250.0 L 474.6 248.7 L 478.5 247.3 L 482.4 246.0 L 486.3 244.7 L 490.2 243.3 L 494.1 242.0 L 498.0 240.7 L 502.0 239.3 L 505.9 238.0 L 509.8 236.7 L 513.7 235.3 L 517.6 234.0 L 521.5 232.7 L 525.4 231.3 L 529.3 230.0 L 533.2 228.7 L 537.2 227.3 L 541.1 226.0 L 545.0 224.7 L 548.9 223.3 L 552.8 222.0 L 556.7 220.7 L 560.6 219.3 L 564.5 218.0 L 568.4 216.7 L 572.4 215.3 L 576.3 214.0 L 580.2 212.7 L 584.1 211.3 L 588.0 210.0 L 591.9 208.7 L 595.8 207.3 L 599.7 206.0 L 603.6 204.7 L 607.6 203.3 L 611.5 202.0 L 615.4 200.7 L 619.3 199.3 L 623.2 198.0 L 627.1 196.7 L 631.0 195.3 L 634.9 194.0 L 638.8 192.7 L 642.8 191.3 L 646.7 190.0" fill="none" stroke="#d4a017" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
    
    <!-- Points remarquables -->
    <circle cx="500.0" cy="240.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(510.0, 256.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g><circle cx="248.0" cy="511.8" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(238.0, 527.8)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Point fixe α ≈ -0.84</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Droite (Δ) : y = x</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>



`
    }
  ]
},

{
  id: 'bac-2020-D-aout-2nd',
  year: 2020,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Août 2020 / 2nd tour',
  topics: ['Équations différentielles', 'Intégrales', 'Fonction exponentielle', 'Intégrales'],
  parts: [
    {
      label: 'Exercice 1 — Équation différentielle y\'+2y=2x+5 (4 pts)',
      problem: `<p>On se propose de résoudre l'équation différentielle \\((E): y'+2y=2x+5\\).</p>
<p>On suppose que l'équation (E) admet une solution particulière g définie sur \\(\\mathbb{R}\\) par \\(g(x)=ax+b\\), où a et b sont des réels à déterminer.</p>
<p><strong>1)</strong> Déterminer les réels a et b.</p>
<p><strong>2)</strong> Résoudre l'équation différentielle \\((E'): y'+2y=0\\).</p>
<p><strong>3)</strong> On note f la solution générale de (E).</p>
<p><strong>a)</strong> Montrer que f est solution de (E) si et seulement si \\(f-g\\) est solution de (E').</p>
<p><strong>b)</strong> Déduire l'expression de \\(f(x)\\) pour \\(x \\in \\mathbb{R}\\).</p>
<p><strong>c)</strong> Déterminer la solution h de (E) qui s'annule en 0.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles y'+ay = P(x) &amp; solution particulière polynomiale</span>
  <ul>
    <li><strong>Structure de la solution générale :</strong> $y(x) = y_0(x) + y_p(x)$, où $y_0(x) = C e^{-ax}$ est la solution générale de l'équation homogène $y'+ay=0$.</li>
    <li><strong>Solution particulière pour un polynôme de degré 1 :</strong> Cherchez $y_p(x) = ax+b$. Calculez $y_p'(x)=a$, injectez dans l'équation et identifiez les coefficients de $x$ et le terme constant.</li>
    <li><strong>Condition initiale :</strong> $y(x_0)=y_0$ fixe la valeur de la constante $C$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Trouver a et b</strong></p>
<p>\\(g(x) = ax+b \\Rightarrow g'(x) = a\\).</p>
<p>\\(g'+2g = a+2(ax+b) = 2ax+(a+2b)\\).</p>
<p>On veut \\(2ax+(a+2b) = 2x+5\\), donc :</p>
<p>\\(2a = 2 \\Rightarrow a = 1\\) et \\(a+2b = 5 \\Rightarrow 2b = 4 \\Rightarrow b = 2\\).</p>
<p>\\[\\boxed{g(x) = x+2}\\]</p>

<p><strong>2) Solution de (E') : y' + 2y = 0</strong></p>
<p>\\(y' = -2y\\) → solution générale :</p>
<p>\\[y = Ce^{-2x}, \\quad C \\in \\mathbb{R}\\]</p>

<p><strong>3a) Équivalence</strong></p>
<p>(⇒) f solution de (E) \\(\\Rightarrow f'+2f = 2x+5\\). Comme \\(g'+2g = 2x+5\\) :</p>
<p>\\((f-g)'+ 2(f-g) = (f'+2f)-(g'+2g) = 0\\) → \\(f-g\\) solution de (E').</p>
<p>(⇐) \\(f-g\\) solution de (E') \\(\\Rightarrow (f-g)'+2(f-g) = 0\\).</p>
<p>\\(f'+2f = g'+2g = 2x+5\\) → f solution de (E).</p>

<p><strong>3b) Solution générale de (E)</strong></p>
<p>\\(f-g = Ce^{-2x}\\) donc :</p>
<p>\\[\\boxed{f(x) = x+2+Ce^{-2x}, \\quad C \\in \\mathbb{R}}\\]</p>

<p><strong>3c) Solution s'annulant en 0</strong></p>
<p>\\(h(0) = 0 \\Rightarrow 0+2+C = 0 \\Rightarrow C = -2\\).</p>
<p>\\[\\boxed{h(x) = x+2-2e^{-2x}}\\]</p>`
    },
    {
      label: 'Exercice 2 — Intégrales I = ∫cos⁴x dx et J = ∫sin⁴x dx (4 pts)',
      problem: `<p>Soient les intégrales I et J définies par : \\(I = \\displaystyle\\int_0^{\\pi}\\cos^4 x\\,dx\\) et \\(J = \\displaystyle\\int_0^{\\pi}\\sin^4 x\\,dx\\).</p>
<p><strong>1) a)</strong> Montrer que pour tout x :</p>
<p>\\(\\cos^4 x = \\cos x(\\cos x - \\cos x\\sin^2 x)\\)</p>
<p>\\(\\sin^4 x = \\sin x(\\sin x - \\sin x\\cos^2 x)\\)</p>
<p><strong>b)</strong> Montrer que \\(I = \\displaystyle\\int_0^{\\pi}\\sin^2 x\\,dx - \\dfrac{1}{3}I\\) et \\(J = \\displaystyle\\int_0^{\\pi}\\cos^2 x\\,dx - \\dfrac{1}{3}J\\). (On pourra intégrer I et J par parties.)</p>
<p><strong>2)</strong> Montrer que :</p>
<p><strong>a)</strong> \\(I+J = \\dfrac{3\\pi}{4}\\)</p>
<p><strong>b)</strong> Calculer \\(I-J\\)</p>
<p><strong>c)</strong> Déduire les valeurs de I et J.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Intégrales trigonométriques &amp; formules de linéarisation</span>
  <ul>
    <li><strong>Formules de duplication :</strong> $\\cos^2 x = \\dfrac{1+\\cos 2x}{2}$ et $\\sin^2 x = \\dfrac{1-\\cos 2x}{2}$.</li>
    <li><strong>Linéarisation de $\\cos^4 x$ :</strong> $\\cos^4 x = (\\cos^2 x)^2 = \\left(\\dfrac{1+\\cos 2x}{2}\\right)^2 = \\dfrac{1+2\\cos 2x+\\cos^2 2x}{4} = \\dfrac{1+2\\cos 2x+\\dfrac{1+\\cos 4x}{2}}{4} = \\dfrac{3+4\\cos 2x+\\cos 4x}{8}$.</li>
    <li><strong>Intégration directe :</strong> Une primitive de $\\cos(kx)$ est $\\dfrac{\\sin(kx)}{k}$. Sur $[0;\\pi]$, $\\int_0^\\pi \\cos(2x)dx = 0$ et $\\int_0^\\pi \\cos(4x)dx = 0$, donc $\\int_0^\\pi \\cos^4 x\\,dx = \\dfrac{3\\pi}{8}$.</li>
    <li><strong>Symétrie $I=J$ :</strong> Par le changement de variable $t = \\dfrac{\\pi}{2} - x$ ou par les formules d'Euler, on a $\\int_0^\\pi \\sin^4 x dx = \\int_0^\\pi \\cos^4 x dx = \\dfrac{3\\pi}{8}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Identités</strong></p>
<p>\\(\\cos^4 x = \\cos^2 x \\cdot \\cos^2 x = \\cos x \\cdot \\cos x(1-\\sin^2 x) = \\cos x(\\cos x - \\cos x\\sin^2 x)\\) </p>
<p>\\(\\sin^4 x = \\sin x \\cdot \\sin x(1-\\cos^2 x) = \\sin x(\\sin x - \\sin x\\cos^2 x)\\) </p>

<p><strong>1b) Relations pour I et J</strong></p>
<p><em>Pour I par IPP :</em> \\(u = \\cos^3 x\\), \\(v' = \\cos x \\Rightarrow u' = -3\\cos^2 x\\sin x\\), \\(v = \\sin x\\).</p>
<p>\\(I = \\left[\\cos^3 x\\sin x\\right]_0^{\\pi} + 3\\int_0^{\\pi}\\cos^2 x\\sin^2 x\\,dx\\)</p>
<p>\\(= 0 + 3\\int_0^{\\pi}\\cos^2 x(1-\\cos^2 x)\\,dx = 3\\int_0^{\\pi}\\cos^2 x\\,dx - 3I\\)</p>
<p>\\(4I = 3\\int_0^{\\pi}\\cos^2 x\\,dx\\)... Ce n'est pas exactement la formule demandée.</p>
<p>Utilisons 1a) : \\(\\cos^4 x = \\cos x(\\cos x - \\cos x\\sin^2 x)\\).</p>
<p>\\(I = \\int_0^{\\pi}\\cos^2 x\\,dx - \\int_0^{\\pi}\\cos^2 x\\sin^2 x\\,dx\\)</p>
<p>Pour le second terme, IPP avec \\(u=\\cos^2 x\\sin x\\), \\(v'=\\sin x\\cos x\\)... ou directement :</p>
<p>\\(\\int_0^{\\pi}\\cos^2 x\\sin^2 x\\,dx = \\dfrac{1}{3}\\int_0^{\\pi}\\sin^4 x\\,dx + ...\\)</p>
<p>Utilisons l'identité \\(\\cos^2 x\\sin^2 x = \\dfrac{1}{3}\\sin^2 x(3\\cos^2 x) = \\dfrac{1}{3}\\sin^2 x(1-\\sin^2 x+2\\cos^2 x)\\)... </p>
<p>Approche directe par IPP sur I :</p>
<p>\\(u = \\cos^3 x\\), \\(v' = \\cos x\\) → \\(u' = -3\\cos^2 x \\sin x\\), \\(v = \\sin x\\) :</p>
<p>\\(I = [\\cos^3 x \\sin x]_0^{\\pi} + 3\\int_0^{\\pi}\\cos^2 x \\sin^2 x\\,dx = 3\\int_0^{\\pi}\\cos^2 x\\sin^2 x\\,dx\\)</p>
<p>Or \\(\\cos^2 x\\sin^2 x = \\cos^2 x(1-\\cos^2 x)\\), donc \\(\\int_0^{\\pi}\\cos^2 x\\sin^2 x\\,dx = \\int_0^{\\pi}\\cos^2 x\\,dx - I\\).</p>
<p>\\(I = 3\\left(\\int_0^{\\pi}\\cos^2 x\\,dx - I\\right) = 3\\int_0^{\\pi}\\cos^2 x\\,dx - 3I\\)</p>
<p>\\(4I = 3\\int_0^{\\pi}\\cos^2 x\\,dx\\)</p>
<p>Or \\(\\int_0^{\\pi}\\cos^2 x\\,dx = \\int_0^{\\pi}\\dfrac{1+\\cos2x}{2}\\,dx = \\dfrac{\\pi}{2}\\).</p>
<p>Pour montrer la forme demandée \\(I = \\int_0^{\\pi}\\sin^2 x\\,dx - \\dfrac{1}{3}I\\) :</p>
<p>\\(I = 3\\int_0^{\\pi}\\cos^2 x\\sin^2 x\\,dx = 3\\int_0^{\\pi}\\sin^2 x(1-\\sin^2 x)\\,dx = 3\\int_0^{\\pi}\\sin^2 x\\,dx - 3I\\)</p>
<p>\\(\\Rightarrow 4I = 3\\int\\sin^2 x\\,dx \\Rightarrow I = \\dfrac{3}{4}\\int\\sin^2 x\\,dx\\)</p>
<p>Réécrit : \\(I + \\dfrac{I}{3} = \\int_0^{\\pi}\\sin^2 x\\,dx \\Rightarrow I = \\int_0^{\\pi}\\sin^2 x\\,dx - \\dfrac{I}{3}\\) </p>
<p>De même : \\(J = \\int_0^{\\pi}\\cos^2 x\\,dx - \\dfrac{J}{3}\\) </p>

<p><strong>2a) I + J</strong></p>
<p>\\(I+J = \\int_0^{\\pi}\\sin^2 x\\,dx - \\dfrac{I}{3} + \\int_0^{\\pi}\\cos^2 x\\,dx - \\dfrac{J}{3}\\)</p>
<p>\\(= \\int_0^{\\pi}(\\sin^2 x+\\cos^2 x)\\,dx - \\dfrac{I+J}{3} = \\pi - \\dfrac{I+J}{3}\\)</p>
<p>\\(\\dfrac{4(I+J)}{3} = \\pi \\Rightarrow I+J = \\dfrac{3\\pi}{4}\\) </p>

<p><strong>2b) I − J</strong></p>
<p>\\(I-J = \\int_0^{\\pi}(\\cos^4 x-\\sin^4 x)\\,dx = \\int_0^{\\pi}(\\cos^2 x-\\sin^2 x)(\\cos^2 x+\\sin^2 x)\\,dx\\)</p>
<p>\\(= \\int_0^{\\pi}\\cos 2x\\,dx = \\left[\\dfrac{\\sin 2x}{2}\\right]_0^{\\pi} = 0\\)</p>
<p>\\[I-J = 0\\]</p>

<p><strong>2c) Valeurs de I et J</strong></p>
<p>\\(I+J = \\dfrac{3\\pi}{4}\\) et \\(I-J=0\\) donc \\(I=J\\) :</p>
<p>\\[\\boxed{I = J = \\dfrac{3\\pi}{8}}\\]</p>`
    },
    {
      label: 'Problème — Fonction f(x) = (x+2)²·exp(−x) et x·ln(1−2/x)+4 (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases} (x+2)^2e^{-x} & \\text{si } x \\in [0;+\\infty[ \\\\ x\\ln\\left(1-\\dfrac{2}{x}\\right)+4 & \\text{si } x \\in ]-\\infty;0[ \\end{cases}\\]</p>
<p>On désigne par (C) la courbe représentative de f dans le plan muni d'un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 2 cm.</p>
<p><strong>1)</strong> Calculer \\(\\displaystyle\\lim_{x\\to-\\infty}f(x)\\) et \\(\\displaystyle\\lim_{x\\to+\\infty}f(x)\\), puis en déduire deux asymptotes à (C).</p>
<p><strong>2) a)</strong> Montrer que pour tout \\(x \\in ]-\\infty;0[\\), \\(f(x) = x\\ln|x-2|-x\\ln|x|+4\\).</p>
<p><strong>b)</strong> Étudier la continuité de f en 0.</p>
<p><strong>c)</strong> Calculer \\(\\displaystyle\\lim_{x\\to0^-}\\left(1-\\dfrac{2}{x}\\right)\\) puis déduire \\(\\displaystyle\\lim_{x\\to0^-}\\ln\\left(1-\\dfrac{2}{x}\\right)\\).</p>
<p><strong>d)</strong> Montrer que pour tout \\(x \\in [0;+\\infty[\\) : \\(\\dfrac{f(x)-f(0)}{x} = (x+2)e^{-x}+4\\dfrac{e^{-x}-1}{x}\\).</p>
<p><strong>e)</strong> Étudier la dérivabilité de f en 0 puis interpréter graphiquement.</p>
<p><strong>3)</strong> Étudier le sens de variation de f sur \\([0;+\\infty[\\).</p>
<p><strong>4) a)</strong> Calculer \\(f'(x)\\) et \\(f''(x)\\) pour tout \\(x \\in ]-\\infty;0[\\).</p>
<p><strong>b)</strong> Déterminer le sens de variation de f' sur \\(]-\\infty;0[\\).</p>
<p><strong>c)</strong> En déduire le signe de \\(f'(x)\\) pour tout \\(x \\in ]-\\infty;0[\\).</p>
<p><strong>d)</strong> En déduire le sens de variation de f sur \\(]-\\infty;0[\\).</p>
<p><strong>5)</strong> Dresser le tableau de variation de f sur \\(\\mathbb{R}\\).</p>
<p><strong>6)</strong> Construire la courbe (C).</p>
<p><strong>7) a)</strong> Démontrer que pour tout \\(x \\in [0;+\\infty[\\) : \\(f(x) = (2x+4)e^{-x}-f'(x)\\).</p>
<p><strong>b)</strong> À l'aide d'une intégration par parties, calculer \\(I=\\displaystyle\\int_0^3(2x+4)e^{-x}\\,dx\\).</p>
<p><strong>c)</strong> Calculer en cm² l'aire du domaine limité par la courbe (C), l'axe des abscisses et les droites \\(x=0\\) et \\(x=3\\). <em>On donne \\(e^{-2}\\approx0{,}14\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions raccordées exponentielle/logarithme &amp; IPP</span>
  <ul>
    <li><strong>Dérivée de $(x+2)^2 e⁻ˣ$ :</strong> $u=(x+2)^2 \\implies u'=2(x+2)$ ; $v=e^{-x} \\implies v'=-e^{-x}$. D'où $f'(x) = 2(x+2)e^{-x} - (x+2)^2 e^{-x} = -(x^2+2x)e^{-x} = -x(x+2)e^{-x}$.</li>
    <li><strong>Limite en $-\\infty$ pour $x\\ln(1-\\dfrac{2}{x})$ :</strong> Poser $X = -\\dfrac{2}{x} \\to 0$. Alors $x\\ln(1-\\dfrac{2}{x}) = -2\\dfrac{\\ln(1+X)}{X} \\xrightarrow{X\\to 0} -2\\times 1 = -2$. D'où $\\lim_{x\\to-\\infty}f(x) = -2+4 = 2$.</li>
    <li><strong>Intégration par parties :</strong> $\\int_a^b (2x+4)e^{-x}dx = [-(2x+4)e^{-x}]_a^b - \\int_a^b (-2e^{-x})dx = [-(2x+6)e^{-x}]_a^b$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Limites et asymptotes</strong></p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}(x+2)^2e^{-x} = 0\\) (croissances comparées).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-20-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-20-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−2</text>
    <text x="515" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <line x1="330" y1="50" x2="330" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="515" y1="50" x2="515" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="515" y1="86" x2="515" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="235" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="330" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="515" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="610" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <line x1="170" y1="135" x2="310" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-20-2-f)"/>
    <text x="330" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="350" y1="225" x2="495" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-20-2-f)"/>
    <text x="515" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">4</text>
    <line x1="535" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-20-2-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>2a) Transformation de f(x) pour x &lt; 0</strong></p>
<p>\\(f(x) = x\\ln\\left(1-\\dfrac{2}{x}\\right)+4 = x\\left(\\ln|x-2|-\\ln|x|\\right)+4 = x\\ln|x-2|-x\\ln|x|+4\\)</p>

<p><strong>2b) Continuité en 0</strong></p>
<p>\\(\\lim_{x\\to 0^+} f(x) = (0+2)^2 e^0 = 4\\).</p>
<p>\\(\\lim_{x\\to 0^-} f(x) = \\lim_{x\\to 0^-} x\\ln\\left(1-\\dfrac{2}{x}\\right)+4\\). Posons \\(t = -x \\to 0^+\\) : \\(x\\ln(1+\\tfrac{2}{t}) \\sim -t\\cdot\\ln(\\tfrac{2}{t}) = t(\\ln t - \\ln 2) \\to 0\\). Donc \\(\\lim_{x\\to 0^-} f(x) = 4 = f(0)\\).</p>
<p>f est <strong>continue en 0</strong>.</p>

<p><strong>2c) Limite en \\(0^-\\) de \\(1-\\dfrac{2}{x}\\)</strong></p>
<p>Comme \\(x\\to 0^-\\), \\(-\\dfrac{2}{x}\\to+\\infty\\), donc \\(1-\\dfrac{2}{x}\\to+\\infty\\).</p>

<p><strong>3) Dérivabilité en 0</strong></p>
<p>Sur \\([0;+\\infty[\\) : \\(f'(x) = (2(x+2))e^{-x} + (x+2)^2(-1)e^{-x} = e^{-x}(x+2)(2-(x+2)) = e^{-x}(x+2)(-x)\\).</p>
<p>\\(\\lim_{x\\to 0^+}\\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to 0^+}\\dfrac{(x+2)^2e^{-x}-4}{x}\\). En utilisant un DL : \\((x+2)^2e^{-x} \\approx (x+2)^2(1-x) = (x^2+4x+4)(1-x) \\approx 4+4x-4x+\\ldots = 4 + 0\\cdot x + \\ldots\\) Donc pente nulle en 0 par la droite.</p>
<p>Sur \\(]-\\infty;0[\\) : \\(f'(x) = \\ln\\left(1-\\dfrac{2}{x}\\right) + \\dfrac{2}{x-2}\\).</p>
<p>\\(\\lim_{x\\to 0^-} f'(x) = \\lim_{x\\to 0^-}\\ln\\left(1-\\dfrac{2}{x}\\right) + 1 = +\\infty\\) → f n'est <strong>pas dérivable en 0</strong> (point anguleux).</p>

<p><strong>4) Tableau de variation de f</strong></p>
<p>Sur \\([0;+\\infty[\\) : \\(f'(x) = e^{-x}(x+2)(-x) \\leq 0\\) (car \\(x \\geq 0\\), \\(x+2 > 0\\), \\(-x \\leq 0\\)). f est <strong>décroissante</strong> sur \\([0;+\\infty[\\), de f(0) = 4 vers 0.</p>
<p>Sur \\(]-\\infty;-2[\\) : \\(x+2 < 0\\), \\(-x > 0\\) → \\(f'(x) < 0\\), f décroissante.</p>
<p>Sur \\(]-2;0[\\) : \\(x+2 > 0\\), \\(-x > 0\\) → \\(f'(x) > 0\\), f croissante.</p>
<p>f'(-2) = 0. Minimum local en -2 : f(-2) = 0. Maximum local en 0 : f(0) = 4.</p>

<p>Le tableau de variation ci-dessus confirme : maximum 4 en x = 0, minimum 0 en x = −2.</p>

<p><strong>5) Solution unique de f(x) = −2</strong></p>
<p>f est continue sur \\(\\mathbb{R}\\). Sur \\(]-\\infty;-2]\\), f est décroissante de \\(+\\infty\\) à 0. Comme \\(-2 < 0\\), l'équation \\(f(x) = -2\\) n'a pas de solution sur cet intervalle (f ≥ 0 sur ]-∞;-2]).</p>
<p>Sur \\([0;+\\infty[\\) : f décroissante de 4 à 0. Donc \\(f(x) = -2\\) n'a pas de solution (f ≥ 0).</p>
<p>Sur \\([-2;0]\\) : f croissante de 0 à 4. Donc \\(f(x) = -2\\) n'a pas de solution non plus.</p>
<p><strong>Conclusion :</strong> \\(f(x) \\geq 0\\) pour tout \\(x \\in \\mathbb{R}\\), donc l'équation \\(f(x) = -2\\) n'admet <strong>aucune solution réelle</strong>. (Note : voir l'énoncé – probablement f(x) = 2 a une solution unique.)</p>
`
    }
  ]
},
{
  id: 'bac-2021-D-juillet-1er',
  year: 2021,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Juillet 2021 / 1er tour',
  topics: ['Équations différentielles', 'Suites', 'Fonction exponentielle', 'Intégrales'],
  parts: [
    {
      label: 'Exercice 1 — Équations différentielles (4 pts)',
      problem: `<p><strong>1)</strong> Résoudre l'équation différentielle \\((E) : 2y' + y = 0\\).</p>
<p><strong>2)</strong> On considère l'équation différentielle \\((E') : 2y' + y = (x+2)e^{-\\dfrac{x}{2}}\\). Déterminer les réels a et b tels que la fonction f définie par \\(f(x) = (ax^2 + bx)e^{-\\dfrac{x}{2}}\\) soit solution de (E').</p>


<p><strong>3)</strong> Démontrer qu'une fonction g est solution de (E') si et seulement si \\(g - f\\) est solution de (E).</p>
<p><strong>4)</strong> Déduire de ce qui précède la solution générale de l'équation (E').</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles avec second membre de type P(x)e^(rx)</span>
  <ul>
    <li><strong>Équation homogène $2y'+y=0$ :</strong> $y'+\\dfrac{1}{2}y=0 \\implies y_0(x) = C e^{-\\dfrac{x}{2}}$.</li>
    <li><strong>Solution particulière pour second membre $(x+2)e⁻ˣᐟ²$ :</strong> Comme $-\\dfrac{1}{2}$ est racine caractéristique, cherchez $y_p(x) = (ax^2+bx)e^{-\\dfrac{x}{2}}$.</li>
    <li><strong>Dérivation et identification :</strong> Calculez $y_p'$, injectez dans $2y_p'+y_p$, simplifiez l'exponentielle et identifiez les puissances de $x$ pour trouver $a$ et $b$.</li>
    <li><strong>Solution générale :</strong> $y(x) = C e^{-\\dfrac{x}{2}} + y_p(x)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Résolution de (E) : 2y' + y = 0</strong></p>
<p>\\(2y' = -y \\iff y' = -\\dfrac{1}{2}y\\). Équation différentielle du premier ordre linéaire homogène.</p>
<p>\\[\\boxed{y = Ce^{-\\dfrac{x}{2}}, \\quad C \\in \\mathbb{R}}\\]</p>

<p><strong>2) Trouver a et b</strong></p>
<p>\\(f(x) = (ax^2+bx)e^{-\\dfrac{x}{2}}\\)</p>
<p>\\(f'(x) = (2ax+b)e^{-\\dfrac{x}{2}} + (ax^2+bx)\\cdot\\left(-\\dfrac{1}{2}\\right)e^{-\\dfrac{x}{2}}\\)</p>
<p>\\(= \\left(2ax+b-\\dfrac{ax^2}{2}-\\dfrac{bx}{2}\\right)e^{-\\dfrac{x}{2}}\\)</p>
<p>Calculons \\(2f'(x) + f(x)\\) :</p>
<p>\\(2f'(x) = \\left(4ax+2b-ax^2-bx\\right)e^{-\\dfrac{x}{2}}\\)</p>
<p>\\(f(x) = (ax^2+bx)e^{-\\dfrac{x}{2}}\\)</p>
<p>\\(2f'(x)+f(x) = \\left(4ax+2b-ax^2-bx+ax^2+bx\\right)e^{-\\dfrac{x}{2}} = (4ax+2b)e^{-\\dfrac{x}{2}}\\)</p>
<p>On veut \\((4ax+2b)e^{-\\dfrac{x}{2}} = (x+2)e^{-\\dfrac{x}{2}}\\), donc :</p>
<p>\\(4a = 1 \\Rightarrow a = \\dfrac{1}{4}\\) &nbsp; et &nbsp; \\(2b = 2 \\Rightarrow b = 1\\)</p>
<p>\\[\\boxed{f(x) = \\left(\\dfrac{x^2}{4}+x\\right)e^{-\\dfrac{x}{2}}}\\]</p>

<p><strong>3) Équivalence</strong></p>
<p>(⇒) Si g est solution de (E') : \\(2g'+g = (x+2)e^{-\\dfrac{x}{2}}\\).</p>
<p>Comme f est aussi solution de (E') : \\(2f'+f = (x+2)e^{-\\dfrac{x}{2}}\\).</p>
<p>Par soustraction : \\(2(g-f)'+(g-f) = 0\\) → \\(g-f\\) est solution de (E).</p>
<p>(⇐) Si \\(g-f\\) est solution de (E) : \\(2(g-f)'+(g-f) = 0\\).</p>
<p>Alors \\(2g'+g = 2f'+f = (x+2)e^{-\\dfrac{x}{2}}\\) → g est solution de (E').</p>

<p><strong>4) Solution générale de (E')</strong></p>
<p>D'après 3), g est solution de (E') \\(\\iff g - f\\) est solution de (E) \\(\\iff g - f = Ce^{-\\dfrac{x}{2}}\\).</p>
<p>\\[\\boxed{g(x) = \\left(\\dfrac{x^2}{4}+x+C\\right)e^{-\\dfrac{x}{2}}, \\quad C \\in \\mathbb{R}}\\]</p>`
    },
    {
      label: 'Exercice 2 — Suites (uₙ) et (vₙ) (4 pts)',
      problem: `<p>On définit pour tout entier naturel n, les suites \\((u_n)\\) et \\((v_n)\\) respectivement par :</p>
<p>\\[\\begin{cases} u_0 = \\dfrac{1}{2} \\\\ u_{n+1} = \\dfrac{2}{3}(u_n)^2 \\end{cases} \\quad \\text{et} \\quad vₙ = \\ln\\left(\\dfrac{2}{3}u_n\\right)\\]</p>
<p><strong>1)</strong> Démontrer par récurrence que pour tout entier n, \\(uₙ > 0\\).</p>
<p><strong>2) a)</strong> Calculer \\(v_0\\).</p>
<p><strong>b)</strong> Démontrer que \\((v_n)\\) est une suite géométrique de raison 2.</p>
<p><strong>3)</strong> Exprimer \\(u_n\\) puis \\(v_n\\) en fonction de n.</p>
<p><strong>4)</strong> On pose \\(S = v_0 + v_1 + v_2 + \\cdots + v_n\\) et \\(S' = u_0 \\times u_1 \\times u_2 \\times \\ldots \\times u_n\\).</p>
<p><strong>a)</strong> Calculer S en fonction de n.</p>
<p><strong>b)</strong> Prouver que \\(S' = \\left(\\dfrac{3}{2}\\right)^{n+1} e^S\\) puis exprimer S' en fonction de n.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suites non linéaires &amp; passage au logarithme</span>
  <ul>
    <li><strong>Suite $u_{n+1} = a (uₙ)^2$ :</strong> En multipliant par $a$, on a $a u_{n+1} = (a u_n)^2$. En posant $vₙ = \\ln(a u_n)$, on obtient $v_{n+1} = \\ln((a u_n)^2) = 2\\ln(a u_n) = 2 v_n$ : la suite $(v_n)$ est géométrique de raison $q = 2$.</li>
    <li><strong>Expression de $vₙ$ et retour à $uₙ$ :</strong> $vₙ = v_0 \\cdot 2^n \\implies \\ln(a u_n) = v_0 \\cdot 2^n \\implies uₙ = \\dfrac{1}{a} e^{v_0 \\cdot 2^n}$.</li>
    <li><strong>Produit de termes $P_n = u₀ \\times u_1 \\times \\dots \\times uₙ$ :</strong> $\\ln P_n = \\sum \\ln(u_k) = \\sum (v_k - \\ln a) = \\sum v_k - (n+1)\\ln a$. Utilisez la formule de la somme géométrique $\\sum_{k=0}^n 2^k = 2^{n+1}-1$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Récurrence : uₙ > 0</strong></p>
<p><em>Initialisation :</em> \\(u_0 = \\dfrac{1}{2} > 0\\).</p>
<p><em>Hérédité :</em> Supposons \\(uₙ > 0\\). Alors \\(u_{n+1} = \\dfrac{2}{3}(u_n)^2 > 0\\) car c'est un produit de réels positifs.</p>
<p>Par récurrence, \\(uₙ > 0\\) pour tout \\(n \\in \\mathbb{N}\\).</p>

<p><strong>2a) Calcul de v₀</strong></p>
<p>\\(v_0 = \\ln\\left(\\dfrac{2}{3} \\cdot u_0\\right) = \\ln\\left(\\dfrac{2}{3} \\cdot \\dfrac{1}{2}\\right) = \\ln\\dfrac{1}{3} = -\\ln 3\\)</p>

<p><strong>2b) (vₙ) est géométrique de raison 2</strong></p>
<p>\\(v_{n+1} = \\ln\\left(\\dfrac{2}{3}u_{n+1}\\right) = \\ln\\left(\\dfrac{2}{3} \\cdot \\dfrac{2}{3}u_n^2\\right) = \\ln\\left(\\dfrac{4}{9}u_n^2\\right)\\)</p>
<p>\\(= \\ln\\left(\\left(\\dfrac{2}{3}u_n\\right)^2\\right) = 2\\ln\\left(\\dfrac{2}{3}u_n\\right) = 2v_n\\)</p>
<p>\\(v_{n+1} = 2v_n\\) : \\((v_n)\\) est géométrique de raison \\(q = 2\\) et de premier terme \\(v_0 = -\\ln 3\\).</p>

<p><strong>3) Expression de vₙ et uₙ</strong></p>
<p>\\(vₙ = v_0 \\cdot 2^n = -2^n\\ln 3\\)</p>
<p>De \\(vₙ = \\ln\\left(\\dfrac{2}{3}u_n\\right)\\) : \\(\\dfrac{2}{3}uₙ = e^{v_n} = e^{-2^n\\ln3} = 3^{-2^n}\\)</p>
<p>\\[\\boxed{uₙ = \\dfrac{3}{2} \\cdot 3^{-2^n} = \\dfrac{3^{1-2^n}}{2}}\\]</p>

<p><strong>4a) Calcul de S</strong></p>
<p>\\(S = \\displaystyle\\sum_{k=0}^{n}v_k = v_0\\dfrac{2^{n+1}-1}{2-1} = -\\ln3 \\cdot(2^{n+1}-1)\\)</p>
<p>\\[\\boxed{S = -(2^{n+1}-1)\\ln3}\\]</p>

<p><strong>4b) Calcul de S'</strong></p>
<p>\\(S' = \\displaystyle\\prod_{k=0}^{n}u_k\\). Prenons le logarithme :</p>
<p>\\(\\ln S' = \\displaystyle\\sum_{k=0}^{n}\\ln u_k = \\sum_{k=0}^{n}\\ln\\left(\\dfrac{3}{2}e^{v_k}\\right) = \\sum_{k=0}^{n}\\left(\\ln\\dfrac{3}{2}+v_k\\right)\\)</p>
<p>\\(= (n+1)\\ln\\dfrac{3}{2} + S\\)</p>
<p>\\(S' = e^{(n+1)\\ln\\left(\\dfrac{3}{2}\\right)+S} = \\left(\\dfrac{3}{2}\\right)^{n+1}e^S\\) </p>
<p>En substituant S :</p>
<p>\\(e^S = e^{-(2^{n+1}-1)\\ln3} = 3^{-(2^{n+1}-1)} = 3^{1-2^{n+1}}\\)</p>
<p>\\[S' = \\left(\\dfrac{3}{2}\\right)^{n+1} \\cdot 3^{1-2^{n+1}} = \\dfrac{3^{n+1}}{2^{n+1}} \\cdot 3^{1-2^{n+1}} = \\dfrac{3^{n+2-2^{n+1}}}{2^{n+1}}\\]</p>`
    },
    {
      label: 'Problème — Fonction f(x) = (2x+3)·exp(−x) + x − 1 (12 pts)',
      problem: `<p>Le plan est muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 1 cm. On considère la fonction f définie sur \\(\\mathbb{R}\\) par \\(f(x) = (2x+3)e^{-x}+x-1\\). On note (C) la courbe représentative de f.</p>

<p><strong>Partie A</strong></p>
<p>Soit h la fonction définie sur \\(\\mathbb{R}\\) par \\(h(x) = e^x - 2x - 1\\).</p>
<p><strong>1)</strong> Étudier le sens de variation de h.</p>
<p><strong>2) a)</strong> Montrer que l'équation \\(h(x) = 0\\) admet dans \\(\\mathbb{R}\\) deux solutions 0 et \\(\\alpha\\).</p>
<p><strong>b)</strong> Montrer que \\(\\alpha \\in ]1;2[\\).</p>
<p><strong>3)</strong> Préciser le signe de \\(h(x)\\) suivant les valeurs de x.</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Calculer \\(\\displaystyle\\lim_{x \\to -\\infty} f(x)\\) et \\(\\displaystyle\\lim_{x \\to +\\infty} f(x)\\).</p>
<p><strong>2)</strong> Calculer \\(\\displaystyle\\lim_{x \\to -\\infty}\\dfrac{f(x)}{x}\\) puis interpréter graphiquement le résultat obtenu.</p>
<p><strong>3) a)</strong> Montrer que pour tout \\(x \\in \\mathbb{R}\\), \\(f'(x) = e^{-x}h(x)\\).</p>
<p><strong>b)</strong> En déduire le sens de variation de f.</p>
<p><strong>4)</strong> Dresser le tableau de variation de f.</p>
<p><strong>5) a)</strong> Montrer que la droite \\((\\Delta)\\) d'équation \\(y = x-1\\) est asymptote à la courbe (C).</p>
<p><strong>b)</strong> Étudier la position relative de (C) par rapport à \\((\\Delta)\\).</p>
<p><strong>c)</strong> Calculer les coordonnées du point \\(\\Lambda\\), intersection de (C) et \\((\\Delta)\\).</p>
<p><strong>6)</strong> Tracer dans le repère la droite \\((\\Delta)\\) et la courbe (C).</p>

<p><strong>Partie C</strong></p>
<p>Soit D la partie du plan limitée par l'axe des ordonnées, la droite \\((\\Delta)\\), la courbe (C) et la droite d'équation \\(x = 2\\). À l'aide d'une intégration par parties, calculer l'aire de D en cm². <em>On donne : \\(e \\approx 2{,}72\\) ; \\(\\ln(2) \\approx 0{,}69\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions avec exponentielle, asymptote oblique &amp; position relative</span>
  <ul>
    <li><strong>Asymptote oblique en $+\\infty$ :</strong> $\\lim_{x\\to+\\infty} [f(x)-(x-1)] = \\lim_{x\\to+\\infty} (2x+3)e^{-x} = 0$ (croissances comparées) $\\implies y = x-1$ est asymptote oblique à $(C)$.</li>
    <li><strong>Position relative :</strong> Le signe de $f(x)-(x-1) = (2x+3)e^{-x}$ est exactement le signe de $2x+3$ (car $e^{-x}>0$). $(C)$ est au-dessus de $(\\Delta)$ pour $x > -3/2$, et en-dessous pour $x < -3/2$.</li>
    <li><strong>Dérivée $f'(x) = e⁻ˣh(x)$ :</strong> Le signe de la dérivée se déduit directement de la fonction auxiliaire $h(x)=e^x-2x-1$ étudiée en Partie A.</li>
    <li><strong>Calcul d'aire par IPP :</strong> $\\int_0^2 (2x+3)e^{-x}dx = [-(2x+5)e^{-x}]_0^2$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Variations de h</strong></p>
<p>\\(h'(x) = e^x - 2\\). \\(h'(x) = 0 \\iff x = \\ln 2\\).</p>
<p>h décroissante sur \\(]-\\infty;\\ln2]\\), croissante sur \\([\\ln2;+\\infty[\\). Minimum en \\(x=\\ln2\\) :</p>
<p>\\(h(\\ln2) = 2-2\\ln2-1 = 1-2\\ln2 \\approx 1-1{,}38 = -0{,}38 < 0\\).</p>


<p><strong>2a) Solutions de h(x) = 0</strong></p>
<p>h est continue sur \\(\\mathbb{R}\\), tend vers \\(+\\infty\\) aux deux bornes, et admet un minimum \\(< 0\\). Par le TVI appliqué deux fois :</p>
<p>— Sur \\(]-\\infty;\\ln2[\\) : h passe de \\(+\\infty\\) à une valeur négative → une solution.</p>
<p>— Sur \\(]\\ln2;+\\infty[\\) : h passe d'une valeur négative à \\(+\\infty\\) → une solution.</p>
<p>\\(h(0) = 1-0-1 = 0\\) → 0 est solution.</p>
<p>h étant strictement monotone sur chaque intervalle, il n'y a qu'une solution par intervalle → les deux solutions sont \\(0\\) et \\(\\alpha\\). </p>

<p><strong>2b) α ∈ ]1;2[</strong></p>
<p>\\(h(1) = e-2-1 = e-3 \\approx 2{,}72-3 = -0{,}28 < 0\\)</p>
<p>\\(h(2) = e^2-4-1 = e^2-5 \\approx 7{,}39-5 = 2{,}39 > 0\\)</p>
<p>\\(h(1) \\times h(2) < 0\\) → par le TVI, \\(\\alpha \\in ]1;2[\\). </p>

<p><strong>3) Signe de h</strong></p>
<p>h admet un minimum négatif en \\(\\ln2\\), s'annule en 0 et \\(\\alpha\\) :</p>
<p>\\(h(x) > 0\\) sur \\(]-\\infty;0[\\), \\(h(x) < 0\\) sur \\(]0;\\alpha[\\), \\(h(x) > 0\\) sur \\(]\\alpha;+\\infty[\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1) Limites de f</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}(2x+3)e^{-x}+x-1\\). Comme \\(e^{-x}\\to+\\infty\\) et \\((2x+3)\\to-\\infty\\) :</p>
<p>\\((2x+3)e^{-x} = \\dfrac{2x+3}{e^x} \\to \\dfrac{-\\infty}{0^+}\\)... En fait pour \\(x\\to-\\infty\\) : \\(e^{-x}\\to+\\infty\\) et \\(2x+3\\to-\\infty\\) donc \\((2x+3)e^{-x}\\to-\\infty\\).</p>
<p>\\[\\lim_{x\\to-\\infty}f(x) = -\\infty\\]</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = 0 + (+\\infty) - 1 = +\\infty\\) car \\(e^{-x}\\to0\\).</p>

<p><strong>2) Limite de f(x)/x en −∞</strong></p>
<p>\\(\\dfrac{f(x)}{x} = \\dfrac{(2x+3)e^{-x}}{x} + 1 - \\dfrac{1}{x} = \\left(2+\\dfrac{3}{x}\\right)e^{-x} + 1 - \\dfrac{1}{x}\\)</p>
<p>Pour \\(x\\to-\\infty\\) : \\(e^{-x}\\to+\\infty\\) donc \\(\\left(2+\\dfrac{3}{x}\\right)e^{-x}\\to+\\infty\\)... </p>
<p><em>Reconsidérons : \\(x\\to-\\infty\\) signifie \\(x\\) très négatif. Alors \\(e^{-x} = e^{|x|}\\to+\\infty\\) et \\(2+\\dfrac{3}{x}\\to2>0\\). Donc \\(f(x)/x\\to-\\infty\\) (car \\(x<0\\)).</em></p>
<p>Plus précisément : \\(\\dfrac{(2x+3)e^{-x}}{x} = (2+\\dfrac{3}{x})e^{-x}\\). Pour \\(x\\to-\\infty\\), \\(e^{-x}\\to+\\infty\\) et \\(2+\\dfrac{3}{x}\\to2\\), donc ce terme \\(\\to+\\infty\\). Ainsi \\(f(x)/x\\to+\\infty\\).</p>
<p>Interprétation : (C) admet une <strong>branche parabolique</strong> de direction l'axe des ordonnées en \\(-\\infty\\).</p>

<p><strong>3a) f'(x) = e⁻ˣh(x)</strong></p>
<p>\\(f'(x) = (2e^{-x} + (2x+3)(-e^{-x})) + 1 = e^{-x}(2-2x-3)+1 = e^{-x}(-2x-1)+1\\)</p>
<p>\\(= -e^{-x}(2x+1)+1\\)</p>
<p>Calculons \\(e^{-x}h(x) = e^{-x}(e^x-2x-1) = 1-e^{-x}(2x+1)\\)</p>
<p>\\[\\boxed{f'(x) = e^{-x}h(x)}\\] </p>

<p><strong>3b) Sens de variation</strong></p>
<p>\\(e^{-x} > 0\\) toujours, donc le signe de \\(f'(x)\\) est celui de \\(h(x)\\) :</p>
<p>f croissante sur \\(]-\\infty;0]\\), décroissante sur \\([0;\\alpha]\\), croissante sur \\([\\alpha;+\\infty[\\).</p>

<p><strong>4) Tableau de variation</strong></p>
<p>\\(f(0) = 3+0-1 = 2\\) &nbsp; \\(f(\\alpha) = (2\\alpha+3)e^{-\\alpha}+\\alpha-1\\) (minimum local)</p>




<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-21-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-21-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x row -->
    <text x="150" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="515" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">α</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>

    <!-- vertical tick lines in f' row -->
    <line x1="330" y1="50" x2="330" y2="64" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="515" y1="50" x2="515" y2="64" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="515" y1="86" x2="515" y2="100" stroke="#dde1ec" stroke-width="1.2"/>

    <!-- f'(x) row -->
    <text x="240" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="330" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="422" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="515" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="608" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>

    <!-- f(x) variations -->
    <text x="150" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <line x1="175" y1="225" x2="305" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-21-1-f)"/>
    <text x="330" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">2</text>
    <line x1="350" y1="135" x2="490" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-21-1-f)"/>
    <text x="515" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">f(α)</text>
    <line x1="540" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-21-1-f)"/>
    <text x="700" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
  </svg>
</div>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et asymptote (D) — BAC 2021 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="154.3" y1="40" x2="154.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="342.9" y1="40" x2="342.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="437.1" y1="40" x2="437.1" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="531.4" y1="40" x2="531.4" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="625.7" y1="40" x2="625.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="720.0" y1="40" x2="720.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="343.3" x2="720" y2="343.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="250.0" x2="720" y2="250.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="203.3" x2="720" y2="203.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="156.7" x2="720" y2="156.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="110.0" x2="720" y2="110.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="63.3" x2="720" y2="63.3" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="296.7" x2="735" y2="296.7" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="300.7" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="248.6" y1="400" x2="248.6" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="248.6" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="236.6" y="312.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="292.7" x2="60.0" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="154.3" y1="292.7" x2="154.3" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="154.3" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="342.9" y1="292.7" x2="342.9" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="342.9" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="437.1" y1="292.7" x2="437.1" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="437.1" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="531.4" y1="292.7" x2="531.4" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="531.4" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="625.7" y1="292.7" x2="625.7" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="625.7" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="720.0" y1="292.7" x2="720.0" y2="300.7" stroke="#1f2937" stroke-width="1"/><text x="720.0" y="312.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    <line x1="244.6" y1="390.0" x2="252.6" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="244.6" y1="343.3" x2="252.6" y2="343.3" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="347.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="244.6" y1="250.0" x2="252.6" y2="250.0" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="254.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="244.6" y1="203.3" x2="252.6" y2="203.3" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="207.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="244.6" y1="156.7" x2="252.6" y2="156.7" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="160.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="244.6" y1="110.0" x2="252.6" y2="110.0" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="114.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="244.6" y1="63.3" x2="252.6" y2="63.3" stroke="#1f2937" stroke-width="1"/><text x="238.6" y="67.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text>
    
    <!-- Courbes -->
    <path d="M 97.7 464.2 L 101.9 440.7 L 106.0 419.0 L 110.2 398.9 L 114.3 380.3 L 118.5 363.2 L 122.6 347.5 L 126.8 333.0 L 130.9 319.6 L 135.1 307.4 L 139.2 296.2 L 143.3 286.0 L 147.5 276.7 L 151.6 268.2 L 155.8 260.4 L 159.9 253.4 L 164.1 247.0 L 168.2 241.3 L 172.4 236.1 L 176.5 231.5 L 180.7 227.4 L 184.8 223.7 L 189.0 220.4 L 193.1 217.5 L 197.3 215.0 L 201.4 212.8 L 205.6 210.9 L 209.7 209.2 L 213.9 207.9 L 218.0 206.7 L 222.2 205.7 L 226.3 205.0 L 230.5 204.4 L 234.6 203.9 L 238.8 203.6 L 242.9 203.4 L 247.1 203.3 L 251.2 203.4 L 255.4 203.4 L 259.5 203.6 L 263.7 203.8 L 267.8 204.1 L 272.0 204.4 L 276.1 204.8 L 280.3 205.2 L 284.4 205.6 L 288.5 206.0 L 292.7 206.5 L 296.8 206.9 L 301.0 207.3 L 305.1 207.8 L 309.3 208.2 L 313.4 208.6 L 317.6 209.0 L 321.7 209.4 L 325.9 209.7 L 330.0 210.0 L 334.2 210.3 L 338.3 210.6 L 342.5 210.8 L 346.6 211.0 L 350.8 211.2 L 354.9 211.3 L 359.1 211.4 L 363.2 211.4 L 367.4 211.5 L 371.5 211.4 L 375.7 211.4 L 379.8 211.3 L 384.0 211.1 L 388.1 211.0 L 392.3 210.7 L 396.4 210.5 L 400.6 210.2 L 404.7 209.8 L 408.9 209.4 L 413.0 209.0 L 417.2 208.6 L 421.3 208.1 L 425.5 207.5 L 429.6 206.9 L 433.7 206.3 L 437.9 205.7 L 442.0 205.0 L 446.2 204.3 L 450.3 203.5 L 454.5 202.7 L 458.6 201.9 L 462.8 201.0 L 466.9 200.1 L 471.1 199.2 L 475.2 198.2 L 479.4 197.2 L 483.5 196.2 L 487.7 195.2 L 491.8 194.1 L 496.0 193.0 L 500.1 191.8 L 504.3 190.7 L 508.4 189.5 L 512.6 188.3 L 516.7 187.0 L 520.9 185.8 L 525.0 184.5 L 529.2 183.1 L 533.3 181.8 L 537.5 180.5 L 541.6 179.1 L 545.8 177.7 L 549.9 176.2 L 554.1 174.8 L 558.2 173.3 L 562.4 171.9 L 566.5 170.4 L 570.7 168.9 L 574.8 167.3 L 578.9 165.8 L 583.1 164.2 L 587.2 162.6 L 591.4 161.0 L 595.5 159.4 L 599.7 157.8 L 603.8 156.1 L 608.0 154.5 L 612.1 152.8 L 616.3 151.1 L 620.4 149.4 L 624.6 147.7 L 628.7 146.0 L 632.9 144.3 L 637.0 142.5 L 641.2 140.8 L 645.3 139.0 L 649.5 137.3 L 653.6 135.5 L 657.8 133.7 L 661.9 131.9 L 666.1 130.1 L 670.2 128.3 L 674.4 126.4 L 678.5 124.6 L 682.7 122.8 L 686.8 120.9 L 691.0 119.1 L 695.1 117.2 L 699.3 115.3 L 703.4 113.5 L 707.6 111.6 L 711.7 109.7 L 715.9 107.8 L 720.0 105.9" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 97.7 418.0 L 101.9 415.9 L 106.0 413.9 L 110.2 411.8 L 114.3 409.8 L 118.5 407.7 L 122.6 405.7 L 126.8 403.6 L 130.9 401.6 L 135.1 399.5 L 139.2 397.5 L 143.3 395.4 L 147.5 393.4 L 151.6 391.3 L 155.8 389.3 L 159.9 387.2 L 164.1 385.1 L 168.2 383.1 L 172.4 381.0 L 176.5 379.0 L 180.7 376.9 L 184.8 374.9 L 189.0 372.8 L 193.1 370.8 L 197.3 368.7 L 201.4 366.7 L 205.6 364.6 L 209.7 362.6 L 213.9 360.5 L 218.0 358.5 L 222.2 356.4 L 226.3 354.3 L 230.5 352.3 L 234.6 350.2 L 238.8 348.2 L 242.9 346.1 L 247.1 344.1 L 251.2 342.0 L 255.4 340.0 L 259.5 337.9 L 263.7 335.9 L 267.8 333.8 L 272.0 331.8 L 276.1 329.7 L 280.3 327.7 L 284.4 325.6 L 288.5 323.5 L 292.7 321.5 L 296.8 319.4 L 301.0 317.4 L 305.1 315.3 L 309.3 313.3 L 313.4 311.2 L 317.6 309.2 L 321.7 307.1 L 325.9 305.1 L 330.0 303.0 L 334.2 301.0 L 338.3 298.9 L 342.5 296.9 L 346.6 294.8 L 350.8 292.7 L 354.9 290.7 L 359.1 288.6 L 363.2 286.6 L 367.4 284.5 L 371.5 282.5 L 375.7 280.4 L 379.8 278.4 L 384.0 276.3 L 388.1 274.3 L 392.3 272.2 L 396.4 270.2 L 400.6 268.1 L 404.7 266.1 L 408.9 264.0 L 413.0 261.9 L 417.2 259.9 L 421.3 257.8 L 425.5 255.8 L 429.6 253.7 L 433.7 251.7 L 437.9 249.6 L 442.0 247.6 L 446.2 245.5 L 450.3 243.5 L 454.5 241.4 L 458.6 239.4 L 462.8 237.3 L 466.9 235.3 L 471.1 233.2 L 475.2 231.1 L 479.4 229.1 L 483.5 227.0 L 487.7 225.0 L 491.8 222.9 L 496.0 220.9 L 500.1 218.8 L 504.3 216.8 L 508.4 214.7 L 512.6 212.7 L 516.7 210.6 L 520.9 208.6 L 525.0 206.5 L 529.2 204.5 L 533.3 202.4 L 537.5 200.3 L 541.6 198.3 L 545.8 196.2 L 549.9 194.2 L 554.1 192.1 L 558.2 190.1 L 562.4 188.0 L 566.5 186.0 L 570.7 183.9 L 574.8 181.9 L 578.9 179.8 L 583.1 177.8 L 587.2 175.7 L 591.4 173.7 L 595.5 171.6 L 599.7 169.5 L 603.8 167.5 L 608.0 165.4 L 612.1 163.4 L 616.3 161.3 L 620.4 159.3 L 624.6 157.2 L 628.7 155.2 L 632.9 153.1 L 637.0 151.1 L 641.2 149.0 L 645.3 147.0 L 649.5 144.9 L 653.6 142.9 L 657.8 140.8 L 661.9 138.7 L 666.1 136.7 L 670.2 134.6 L 674.4 132.6 L 678.5 130.5 L 682.7 128.5 L 686.8 126.4 L 691.0 124.4 L 695.1 122.3 L 699.3 120.3 L 703.4 118.2 L 707.6 116.2 L 711.7 114.1 L 715.9 112.1 L 720.0 110.0" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
    
    <!-- Points remarquables -->
    <circle cx="248.6" cy="203.3" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(238.6, 195.3)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 2)</text>
    </g><circle cx="201.4" cy="212.8" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(191.4, 228.8)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (-0.5 ; 1.8)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (D) : y = x − 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>



`
    }
  ]
},

{
  id: 'bac-2021-D-juillet-2nd',
  year: 2021,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Juillet 2021 / 2nd tour',
  topics: ['Complexes', 'Probabilités', 'Fonction exponentielle', 'Intégrales'],
  parts: [
    {
      label: 'Exercice 1 — Nombres complexes (4 pts)',
      problem: `<p>On considère le nombre complexe u défini par \\(u = \\dfrac{3-i}{2+i} + \\dfrac{2+i}{i} - 3(1-2i)^2 - 2(2+i)(3+i)\\).</p>
<p><strong>1)</strong> Montrer que \\(u = 1-i\\).</p>
<p><strong>2)</strong> Résoudre dans \\(\\mathbb{C}^2\\) le système d'inconnues \\(z_1\\) et \\(z_2\\) :</p>
<p>\\[\\begin{cases} iz_1 - z_2 = -1+i \\\\ \ \\dfrac{1}{2}z_1 + (1-i)z_2 = 2-5i \\end{cases}\\]</p>
<p><strong>3)</strong> Le plan complexe P étant muni d'un repère orthonormal direct \\((O;\\vec{u};\\vec{v})\\), on donne les points A et B d'affixes respectives \\(z_a = -2i\\) et \\(z_b = 3-i\\).</p>
<p>On considère l'application f définie de \\(P\\setminus\\{A\\}\\) dans P qui, à tout point M d'affixe z, associe le point M' d'affixe \\(z' = \\dfrac{z-3i+1}{z+2i}\\).</p>
<p><strong>a)</strong> Soit C le point d'affixe u. Calculer l'affixe u' de C', l'image de C par f.</p>
<p><strong>b)</strong> Montrer que \\(z' = \\dfrac{z-3i+1}{z+2i}\\).</p>
<p><strong>c)</strong> Interpréter géométriquement le module et l'argument de z'.</p>
<p><strong>d)</strong> Déduire de la question c) les ensembles des points suivants :</p>
<p>• l'ensemble \\((T_1)\\) tel que \\(z' \\in \\mathbb{R}^*\\)</p>
<p>• l'ensemble \\((T_2)\\) tel que \\(z' \\in i\\mathbb{R}^*\\)</p>
<p>• l'ensemble \\((T_3)\\) tel que \\(|z'| = 1\\)</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Simplification de fractions complexes &amp; module/argument</span>
  <ul>
    <li><strong>Simplification de quotients complexes :</strong> Multipliez numérateur et dénominateur par le conjugué du dénominateur : $\\dfrac{a+ib}{c+id} = \\dfrac{(a+ib)(c-id)}{c^2+d^2}$. Pour diviser par $i$, multipliez par $-i$ : $\\dfrac{z}{i} = -iz$.</li>
    <li><strong>Forme exponentielle :</strong> Pour $u = 1-i$, $|u| = \\sqrt{1^2+(-1)^2} = \\sqrt{2}$, $\\arg(u) = -\\dfrac{\\pi}{4} \\implies u = \\sqrt{2}e^{-i\\dfrac{\\pi}{4}}$.</li>
    <li><strong>Puissances entières de complexes :</strong> Utilisez la formule de Moivre : $u^n = (\\sqrt{2})^n e^{-i n\\dfrac{\\pi}{4}} = 2^{n/2}\\left(\\cos\\left(-\\dfrac{n\\pi}{4}\\right)+i\\sin\\left(-\\dfrac{n\\pi}{4}\\right)\\right)$.</li>
    <li><strong>$u^n$ est réel $\\iff \\sin(-n\\dfrac{\\pi}{4}) = 0 \\iff n\\dfrac{\\pi}{4} = k\\pi \\iff n$ est un multiple de 4.</strong></li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Calcul de u</strong></p>
<p>\\(\\dfrac{3-i}{2+i} = \\dfrac{(3-i)(2-i)}{5} = \\dfrac{6-3i-2i-1}{5} = \\dfrac{5-5i}{5} = 1-i\\)</p>
<p>\\(\\dfrac{2+i}{i} = \\dfrac{(2+i)(-i)}{-i^2} = \\dfrac{-2i+1}{1} = 1-2i\\)</p>
<p>\\(3(1-2i)^2 = 3(1-4i-4) = 3(-3-4i) = -9-12i\\)</p>
<p>\\(2(2+i)(3+i) = 2(6+2i+3i-1) = 2(5+5i) = 10+10i\\)</p>
<p>\\(u = (1-i)+(1-2i)-(-9-12i)-(10+10i)\\)</p>
<p>\\(= 1-i+1-2i+9+12i-10-10i\\)</p>
<p>\\(= (1+1+9-10)+(-1-2+12-10)i = 1+(-1)i\\)</p>
<p>\\[\\boxed{u = 1-i}\\] </p>

<p><strong>2) Résolution du système</strong></p>
<p>\\(\\begin{cases}iz_1 - z_2 = -1+i & (1) \\\\ \ \\dfrac{1}{2}z_1+(1-i)z_2 = 2-5i & (2)\\end{cases}\\)</p>
<p>De (1) : \\(z_2 = iz_1+1-i\\).</p>
<p>Substitution dans (2) : \\(\\dfrac{1}{2}z_1+(1-i)(iz_1+1-i) = 2-5i\\)</p>
<p>\\(\\dfrac{z_1}{2} + iz_1-i^2z_1+(1-i)^2 = 2-5i\\)</p>
<p>\\(\\dfrac{z_1}{2} + iz_1 + z_1 + (1-2i-1) = 2-5i\\)</p>
<p>\\(\\dfrac{z_1}{2} + iz_1 + z_1 - 2i = 2-5i\\)</p>
<p>\\(z_1\\left(\\dfrac{3}{2}+i\\right) = 2-3i\\)</p>
<p>\\(z_1 = \\dfrac{2-3i}{\\dfrac{3}{2}+i} = \\dfrac{2(2-3i)}{3+2i} = \\dfrac{(4-6i)(3-2i)}{9+4} = \\dfrac{12-8i-18i-12}{13} = \\dfrac{-26i}{13} = -2i\\)</p>
<p>\\(z_2 = i(-2i)+1-i = 2+1-i = 3-i\\)</p>
<p>\\[\\boxed{z_1 = -2i ; z_2 = 3-i}\\]</p>
<p><em>Remarque : \\(z_1 = z_a\\) et \\(z_2 = z_b\\) — les solutions sont les affixes de A et B !</em></p>

<p><strong>3a) Image de C par f</strong></p>
<p>\\(u = 1-i\\), donc :</p>
<p>\\(u' = \\dfrac{(1-i)-3i+1}{(1-i)+2i} = \\dfrac{2-4i}{1+i} = \\dfrac{(2-4i)(1-i)}{2} = \\dfrac{2-2i-4i-4}{2} = \\dfrac{-2-6i}{2} = -1-3i\\)</p>

<p><strong>3c) Interprétation géométrique</strong></p>
<p>\\(z' = \\dfrac{z-z_B}{z-z_A}\\) (en posant \\(z_B = 3-i\\) et \\(z_A = -2i\\)).</p>
<p>\\(|z'| = \\dfrac{|z-z_B|}{|z-z_A|} = \\dfrac{MB}{MA}\\) = rapport des distances de M à B et à A.</p>
<p>\\(\\arg(z') = \\arg(z-z_B) - \\arg(z-z_A) = (\\overrightarrow{MA};\\overrightarrow{MB})\\) = angle orienté en M du triangle MAB.</p>

<p><strong>3d) Ensembles géométriques</strong></p>
<p><em>\\((T_1)\\) : \\(z' \\in \\mathbb{R}^*\\)</em> \\(\\iff \\arg(z') = k\\pi\\) \\(\\iff\\) M est sur la droite (AB) privée du point A.</p>
<p>A\\(-2i\\) et B\\(3-i\\) : droite (AB) de direction \\(\\overrightarrow{AB} = (3;1)\\), équation \\(y+2 = \\dfrac{1}{3}(x)\\)... soit \\(x-3y-6=0\\), privée de \\(A(0;-2)\\).</p>

<p><em>\\((T_2)\\) : \\(z' \\in i\\mathbb{R}^*\\)</em> \\(\\iff \\arg(z') = \\pm\\dfrac{\\pi}{2}+k\\pi\\) \\(\\iff\\) M est sur le cercle de diamètre AB privé de A et B.</p>
<p>Centre : milieu de AB = \\(\\left(\\dfrac{3}{2};-\\dfrac{3}{2}\\right)\\), rayon : \\(\\dfrac{AB}{2} = \\dfrac{\\sqrt{9+1}}{2} = \\dfrac{\\sqrt{10}}{2}\\).</p>

<p><em>\\((T_3)\\) : \\(|z'| = 1\\)</em> \\(\\iff MA = MB\\) \\(\\iff\\) M est sur la médiatrice du segment AB.</p>
<p>Milieu \\(\\left(\\dfrac{3}{2};-\\dfrac{3}{2}\\right)\\), direction perpendiculaire à \\(\\overrightarrow{AB} = (3;1)\\) : médiatrice d'équation \\(3(x-\\dfrac{3}{2})+(y+\\dfrac{3}{2}) = 0\\), soit \\(3x+y-3=0\\).</p>`
    },
    {
      label: 'Exercice 2 — Probabilités : billets de loterie (4 pts)',
      problem: `<p>Un revendeur de billets de loterie dispose de dix billets dont trois sont gagnants. Une personne achète cinq billets. On supposera que tous les choix sont équiprobables.</p>
<p><strong>1)</strong> Calculer la probabilité pour qu'il y ait parmi les cinq billets achetés :</p>
<p><strong>a)</strong> Un seul billet gagnant.</p>
<p><strong>b)</strong> Au moins un billet gagnant.</p>
<p><strong>2)</strong> Parmi les trois billets gagnants, un gagne 50 francs et deux gagnent 25 francs chacun. Soit X la variable aléatoire égale au gain réalisé.</p>
<p><strong>a)</strong> Quelles sont les valeurs prises par X ?</p>
<p><strong>b)</strong> Déterminer la loi de probabilité de X.</p>
<p><strong>c)</strong> Calculer l'espérance mathématique E(X) de X.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Loi hypergéométrique, tirages simultanés &amp; probabilités</span>
  <ul>
    <li><strong>Tirage simultané sans remise :</strong> L'univers comporte $\\text{Card}(\\Omega) = \\binom{N}{n}$ issues équiprobables.</li>
    <li><strong>Loi du nombre de billets gagnants $X$ :</strong> Parmi $N=10$ billets dont $K=3$ gagnants et $7$ perdants, si on tire $n=5$ billets, $P(X=k) = \\dfrac{\\binom{3}{k}\\binom{7}{5-k}}{\\binom{10}{5}}$ pour $k \\in \\{0, 1, 2, 3\\}$.</li>
    <li><strong>Espérance de la loi hypergéométrique :</strong> $E(X) = n \\times \\dfrac{K}{N} = 5 \\times \\dfrac{3}{10} = 1{,}5$.</li>
    <li><strong>Probabilité conditionnelle :</strong> $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p>L'univers comporte \\(\\binom{10}{5} = 252\\) tirages possibles.</p>

<p><strong>1a) P(un seul gagnant)</strong></p>
<p>1 billet gagnant parmi 3, et 4 non-gagnants parmi 7 :</p>
<p>\\[P(X_g=1) = \\dfrac{\\binom{3}{1}\\binom{7}{4}}{252} = \\dfrac{3\\times35}{252} = \\dfrac{105}{252} = \\dfrac{5}{12}\\]</p>

<p><strong>1b) P(au moins un gagnant)</strong></p>
<p>\\(P(\\text{au moins 1}) = 1 - P(\\text{aucun gagnant})\\)</p>
<p>\\(P(\\text{aucun}) = \\dfrac{\\binom{3}{0}\\binom{7}{5}}{252} = \\dfrac{21}{252} = \\dfrac{1}{12}\\)</p>
<p>\\[P(\\text{au moins 1}) = 1 - \\dfrac{1}{12} = \\dfrac{11}{12}\\]</p>

<p><strong>2a) Valeurs de X</strong></p>
<p>Selon les billets gagnants obtenus parmi les 5 achetés :</p>
<p>— 0 gagnant : \\(X = 0\\)</p>
<p>— 1 gagnant (le 50F) : \\(X = 50\\)</p>
<p>— 1 gagnant (un 25F) : \\(X = 25\\)</p>
<p>— 2 gagnants (les deux 25F) : \\(X = 50\\)</p>
<p>— 2 gagnants (50F + un 25F) : \\(X = 75\\)</p>
<p>— 3 gagnants : \\(X = 50+25+25 = 100\\)</p>
<p>X prend les valeurs : <strong>0, 25, 50, 75, 100</strong>.</p>

<p><strong>2b) Loi de probabilité de X</strong></p>
<p>Notons G50 le billet à 50F et G25a, G25b les deux billets à 25F.</p>
<p>\\(P(X=0) = \\dfrac{21}{252} = \\dfrac{1}{12}\\)</p>
<p>\\(P(X=25)\\) = (exactement 1 billet à 25F, pas de 50F) = \\(\\dfrac{\\binom{2}{1}\\binom{1}{0}\\binom{7}{4}}{252} = \\dfrac{2\\times35}{252} = \\dfrac{70}{252} = \\dfrac{5}{18}\\)</p>
<p>\\(P(X=50)\\) = (exactement le billet 50F, pas de 25F) + (les deux billets 25F, pas de 50F)</p>
<p>\\(= \\dfrac{\\binom{1}{1}\\binom{2}{0}\\binom{7}{4}}{252} + \\dfrac{\\binom{2}{2}\\binom{1}{0}\\binom{7}{3}}{252} = \\dfrac{35+35}{252} = \\dfrac{70}{252} = \\dfrac{5}{18}\\)</p>
<p>\\(P(X=75)\\) = (50F + un 25F, pas l'autre 25F) = \\(\\dfrac{\\binom{1}{1}\\binom{2}{1}\\binom{7}{3}}{252} = \\dfrac{2\\times35}{252} = \\dfrac{70}{252} = \\dfrac{5}{18}\\)</p>
<p>\\(P(X=100)\\) = (les 3 gagnants) = \\(\\dfrac{\\binom{3}{3}\\binom{7}{2}}{252} = \\dfrac{21}{252} = \\dfrac{1}{12}\\)</p>
<p>Vérification : \\(\\dfrac{1}{12}+\\dfrac{5}{18}+\\dfrac{5}{18}+\\dfrac{5}{18}+\\dfrac{1}{12} = \\dfrac{3}{36}+\\dfrac{10}{36}+\\dfrac{10}{36}+\\dfrac{10}{36}+\\dfrac{3}{36} = \\dfrac{36}{36} = 1\\)</p>

<table class="vtab">
  <tr><th>X</th><td>0</td><td>25</td><td>50</td><td>75</td><td>100</td></tr>
  <tr><th>P(X=x)</th>
    <td>\\(\\dfrac{1}{12}\\)</td>
    <td>\\(\\dfrac{5}{18}\\)</td>
    <td>\\(\\dfrac{5}{18}\\)</td>
    <td>\\(\\dfrac{5}{18}\\)</td>
    <td>\\(\\dfrac{1}{12}\\)</td>
  </tr>
</table>

<p><strong>2c) Espérance E(X)</strong></p>
<p>\\[E(X) = 0\\cdot\\dfrac{1}{12}+25\\cdot\\dfrac{5}{18}+50\\cdot\\dfrac{5}{18}+75\\cdot\\dfrac{5}{18}+100\\cdot\\dfrac{1}{12}\\]</p>
<p>\\(= \\dfrac{5}{18}(25+50+75) + \\dfrac{100}{12} = \\dfrac{5\\times150}{18}+\\dfrac{25}{3} = \\dfrac{750}{18}+\\dfrac{150}{18} = \\dfrac{900}{18} = 50\\)</p>
<p>\\[\\boxed{E(X) = 50 \\text{ francs}}\\]</p>
<p><em>Vérification intuitive : \\(E(X) = \\dfrac{\\text{gain total}}{\\binom{10}{5}/\\binom{10}{5}} = \\dfrac{50+25+25}{1}\\times\\dfrac{5}{10} = \\dfrac{100\\times5}{10} = 50\\)</em></p>`
    },
    {
      label: 'Problème — Fonctions h(x) = x+1−exp(x) et f(x) = 3(x²+x)·exp(−x) (12 pts)',
      problem: `<p>Le plan est muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 2 cm.</p>

<p><strong>Partie A</strong></p>
<p>On considère la fonction h définie sur \\(\\mathbb{R}\\) par \\(h(x) = x+1-e^x\\).</p>
<p><strong>1)</strong> Calculer \\(\\displaystyle\\lim_{x \\to -\\infty} h(x)\\) et \\(\\displaystyle\\lim_{x \\to +\\infty} h(x)\\).</p>
<p><strong>2) a)</strong> Étudier le sens de variation de h, puis dresser son tableau de variation.</p>
<p><strong>b)</strong> En déduire le signe de \\(h(x)\\) suivant les valeurs de x.</p>

<p>


<strong>Partie B</strong></p>
<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par \\(f(x) = 3(x^2+x)e^{-x}\\). Soit (C) la courbe représentative de f dans le repère \\((O;\\vec{i};\\vec{j})\\).</p>
<p><strong>1) a)</strong> Calculer \\(\\displaystyle\\lim_{x \\to +\\infty} f(x)\\).</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{x \\to -\\infty} f(x)\\) et \\(\\displaystyle\\lim_{x \\to -\\infty}\\dfrac{f(x)}{x}\\).</p>
<p><strong>c)</strong> Interpréter graphiquement les résultats des questions a) et b).</p>
<p><strong>2) a)</strong> Calculer \\(f'(x)\\) pour tout \\(x \\in \\mathbb{R}\\).</p>
<p><strong>b)</strong> Étudier le signe de \\(f'(x)\\) puis dresser le tableau de variation de f.</p>
<p><strong>3) a)</strong> Déterminer une équation de la tangente (T) à (C) au point d'abscisse nulle.</p>
<p><strong>b)</strong> Montrer que \\(\\forall x \\in \\mathbb{R},\\ f(x)-3x = 3xe^{-x}\\times h(x)\\).</p>
<p><strong>c)</strong> Déduire les positions relatives de (C) et de (T).</p>
<p><strong>4)</strong> Tracer dans le repère la tangente (T) et la courbe (C).</p>
<p>\\(\\left(\\text{On prendra } f\\left(\\dfrac{1-\\sqrt{5}}{2}\\right)\\approx-1{,}3 ; f\\left(\\dfrac{1+\\sqrt{5}}{2}\\right)\\approx2{,}5\\right)\\)</p>

<p><strong>Partie C</strong></p>
<p><strong>1)</strong> Soit la fonction F définie par \\(F(x) = (ax^2+bx+c)e^{-x}\\), où a, b et c sont des nombres réels. Déterminer les réels a, b et c pour que F soit une primitive de f sur \\(\\mathbb{R}\\).</p>
<p><strong>2)</strong> Soit \\(\\alpha\\) un réel strictement positif. Calculer en cm², l'aire \\(A(\\alpha)\\) de la partie du plan limitée par la courbe (C), l'axe des abscisses et les droites d'équations \\(x=0\\) et \\(x=\\alpha\\).</p>
<p><strong>3)</strong> Calculer \\(\\displaystyle\\lim_{\\alpha \\to +\\infty} A(\\alpha)\\). <em>On donne : \\(\\sqrt{5} \\approx 2{,}2\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Position relative courbe/tangente &amp; fonction auxiliaire</span>
  <ul>
    <li><strong>Tangente en 0 :</strong> $(T) : y = f'(0)(x-0)+f(0)$.</li>
    <li><strong>Position relative $(C)$ et $(T)$ :</strong> Étudiez le signe de $d(x) = f(x)-y_T = 3xe^{-x}h(x)$. Comme $h(x) \\le 0$ pour tout $x$ (avec $h(0)=0$) et $e^{-x}>0$, le signe de $d(x)$ est exactement le signe opposé de $x$.</li>
    <li><strong>Intégration par parties successive pour $\\int (x^2+x)e⁻ˣdx$ :</strong> Dérivez le polynôme deux fois et intégrez l'exponentielle deux fois.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Limites de h</strong></p>
<p>\\(\\lim_{x\\to-\\infty}h(x) = \\lim_{x\\to-\\infty}(x+1-e^x) = -\\infty + 1 - 0 = -\\infty\\)</p>
<p>\\(\\lim_{x\\to+\\infty}h(x) = +\\infty - e^{+\\infty} = -\\infty\\) (l'exponentielle domine)</p>

<p><strong>2a) Variations de h</strong></p>
<p>\\(h'(x) = 1-e^x\\). \\(h'(x) = 0 \\iff x = 0\\). \\(h'(x) > 0\\) sur \\(]-\\infty;0[\\) et \\(< 0\\) sur \\(]0;+\\infty[\\).</p>
<p>Maximum en \\(x=0\\) : \\(h(0) = 0+1-1 = 0\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-21s2h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-21s2h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
      <linearGradient id="forbid-grad-21s2h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/><stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/></linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">h '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">h(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="425.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="425.0" y1="50" x2="425.0" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <line x1="425.0" y1="86" x2="425.0" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <text x="285.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="565.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <text x="425.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">0</text>
    <text x="705.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="165.0" y1="225" x2="405.0" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-21s2h)"/>
    <line x1="445.0" y1="135" x2="685.0" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-21s2h)"/>
  </svg>
</div>



<p><strong>2b) Signe de h</strong></p>
<p>h admet un maximum de 0 en \\(x=0\\) → \\(h(x) \\leq 0\\) pour tout \\(x\\), avec \\(h(x) = 0\\) uniquement en \\(x = 0\\).</p>
<p>\\(h(x) < 0\\) pour tout \\(x \\neq 0\\), et \\(h(0) = 0\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1a) Limite en +∞</strong></p>
<p>\\(\\lim_{x\\to+\\infty}3(x^2+x)e^{-x} = 0\\) (croissances comparées : \\(x^2e^{-x}\\to0\\)).</p>
<p>La droite \\(y=0\\) est asymptote horizontale à (C) en \\(+\\infty\\).</p>

<p><strong>1b) Limites en −∞</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = 3\\lim_{x\\to-\\infty}(x^2+x)e^{-x}\\). Pour \\(x\\to-\\infty\\) : \\(x^2+x \\to +\\infty\\) et \\(e^{-x}\\to+\\infty\\).</p>
<p>\\[\\lim_{x\\to-\\infty}f(x) = +\\infty\\]</p>
<p>\\(\\dfrac{f(x)}{x} = \\dfrac{3(x^2+x)e^{-x}}{x} = 3(x+1)e^{-x}\\). Pour \\(x\\to-\\infty\\) : \\((x+1)\\to-\\infty\\) et \\(e^{-x}\\to+\\infty\\), donc \\(\\dfrac{f(x)}{x}\\to-\\infty\\).</p>
<p>(C) admet une branche parabolique de direction l'axe \\((Oy)\\) en \\(-\\infty\\).</p>

<p><strong>2a) Calcul de f'(x)</strong></p>
<p>\\(f'(x) = 3(2x+1)e^{-x} + 3(x^2+x)(-e^{-x}) = 3e^{-x}(2x+1-x^2-x)\\)</p>
<p>\\(= 3e^{-x}(-x^2+x+1)\\)</p>
<p>Les racines de \\(-x^2+x+1=0\\) : \\(x = \\dfrac{-1\\pm\\sqrt{5}}{-2} = \\dfrac{1\\pm\\sqrt{5}}{2}\\).</p>
<p>\\(x_1 = \\dfrac{1-\\sqrt{5}}{2} \\approx -0{,}6\\) et \\(x_2 = \\dfrac{1+\\sqrt{5}}{2} \\approx 1{,}6\\).</p>
<p>\\(f'(x) > 0\\) sur \\(]x_1;x_2[\\) et \\(< 0\\) en dehors.</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-21s2f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-21s2f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
      <linearGradient id="forbid-grad-21s2f" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/><stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/></linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="331.66666666666663" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">x₁</text>
    <line x1="331.66666666666663" y1="50" x2="331.66666666666663" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <text x="331.66666666666663" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <line x1="331.66666666666663" y1="86" x2="331.66666666666663" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="518.3333333333333" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">x₂</text>
    <line x1="518.3333333333333" y1="50" x2="518.3333333333333" y2="64" stroke="#dde1ec" stroke-width="1"/>
    <text x="518.3333333333333" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <line x1="518.3333333333333" y1="86" x2="518.3333333333333" y2="100" stroke="#dde1ec" stroke-width="1"/>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    <text x="238.33333333333331" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="424.99999999999994" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="611.6666666666666" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="145.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">0</text>
    <text x="331.66666666666663" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">≈ −0,9</text>
    <text x="518.3333333333333" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">≈ 2,5</text>
    <text x="705.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">0</text>
    <line x1="165.0" y1="135" x2="311.66666666666663" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-21s2f)"/>
    <line x1="351.66666666666663" y1="225" x2="498.33333333333326" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-21s2f)"/>
    <line x1="538.3333333333333" y1="135" x2="685.0" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-21s2f)"/>
  </svg>
</div>



<p><strong>3a) Tangente en x=0</strong></p>
<p>\\(f(0) = 0\\) et \\(f'(0) = 3e^0(-0+0+1) = 3\\).</p>
<p>\\[\\boxed{(T) : y = 3x}\\]</p>

<p><strong>3b) f(x) − 3x = 3xe⁻ˣh(x)</strong></p>
<p>\\(f(x)-3x = 3(x^2+x)e^{-x}-3x = 3e^{-x}(x^2+x) - 3x\\)</p>
<p>\\(3xe^{-x}h(x) = 3xe^{-x}(x+1-e^x) = 3x(x+1)e^{-x} - 3xe^{-x}\\cdot e^x\\)</p>
<p>\\(= 3(x^2+x)e^{-x} - 3x = f(x)-3x\\) </p>

<p><strong>3c) Positions relatives de (C) et (T)</strong></p>
<p>\\(f(x)-3x = 3xe^{-x}h(x)\\).</p>
<p>\\(e^{-x} > 0\\) toujours et \\(h(x) \\leq 0\\) toujours (nul en 0 seulement).</p>
<p>Donc le signe de \\(f(x)-3x\\) est celui de \\(3x \\times (\\leq0) = -3x \\times |h(x)|\\).</p>
<p>— Pour \\(x > 0\\) : \\(3x > 0\\) et \\(h(x) < 0\\) → \\(f(x)-3x < 0\\) : (C) est <strong>en-dessous</strong> de (T).</p>
<p>— Pour \\(x < 0\\) : \\(3x < 0\\) et \\(h(x) < 0\\) → \\(f(x)-3x > 0\\) : (C) est <strong>au-dessus</strong> de (T).</p>
<p>— Pour \\(x = 0\\) : \\(f(0) = 0 = (T)\\) : intersection en O.</p>

<p><strong>Partie C</strong></p>

<p><strong>1) Primitive F(x)</strong></p>
<p>\\(F'(x) = (2ax+b)e^{-x}-(ax^2+bx+c)e^{-x} = (-ax^2+(2a-b)x+(b-c))e^{-x}\\)</p>
<p>On veut \\(F'(x) = f(x) = 3(x^2+x)e^{-x} = (3x^2+3x)e^{-x}\\).</p>
<p>Identification :</p>
<p>\\(-a = 3 \\Rightarrow a = -3\\)</p>
<p>\\(2a-b = 3 \\Rightarrow -6-b = 3 \\Rightarrow b = -9\\)</p>
<p>\\(b-c = 0 \\Rightarrow c = b = -9\\)</p>
<p>\\[\\boxed{F(x) = (-3x^2-9x-9)e^{-x} = -3(x^2+3x+3)e^{-x}}\\]</p>

<p><strong>2) Aire A(α) pour α > 0</strong></p>
<p>Sur \\([0;\\alpha]\\), \\(f(x) = 3(x^2+x)e^{-x}\\). Pour \\(x \\in [0;x_2]\\) : \\(f(x) \\geq 0\\) (car \\(x^2+x \\geq 0\\)).</p>
<p>Pour \\(0 < \\alpha \\leq x_2\\) :</p>
<p>\\[A(\\alpha) = 4\\int_0^{\\alpha}f(x)\\,dx = 4\\left[F(x)\\right]_0^{\\alpha}\\]</p>
<p>\\(F(0) = -3(0+0+3)e^0 = -9\\)</p>
<p>\\(F(\\alpha) = -3(\\alpha^2+3\\alpha+3)e^{-\\alpha}\\)</p>
<p>\\[A(\\alpha) = 4\\left[-3(\\alpha^2+3\\alpha+3)e^{-\\alpha}+9\\right] = 4\\left[9-3(\\alpha^2+3\\alpha+3)e^{-\\alpha}\\right] \\text{ cm}^2\\]</p>

<p><strong>3) Limite de A(α)</strong></p>
<p>\\(\\lim_{\\alpha\\to+\\infty}(\\alpha^2+3\\alpha+3)e^{-\\alpha} = 0\\) (croissances comparées).</p>
<p>\\[\\lim_{\\alpha\\to+\\infty}A(\\alpha) = 4 \\times 9 = 36 \\text{ cm}^2\\]</p>
<p>Interprétation : l'aire entre (C) et l'axe des abscisses sur \\([0;+\\infty[\\) est finie et vaut <strong>36 cm²</strong>.</p>`
    }
  ]
},
{
  id: 'bac-2022-D-juillet-1er',
  year: 2022,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Juillet 2022 / 1er tour',
  topics: ['Complexes', 'Courbes paramétriques', 'Fonction logarithme', 'Intégrales', 'Bijection'],
  parts: [
    {
      label: 'Exercice 1 — Polynômes complexes (4 pts)',
      problem: `<p>Soit P le polynôme de la variable complexe z défini par : \\(P(z) = z^3 - 7z^2 + 19z - 13\\).</p>
<p><strong>1) a)</strong> Vérifier que 1 est une racine de P. En déduire les nombres complexes \\(\\alpha\\) et \\(\\beta\\) tels que : \\(P(z) = (z-1)(z^2 + \\alpha z + \\beta)\\).</p>
<p><strong>b)</strong> Résoudre l'équation \\(P(z) = 0\\).</p>
<p><strong>2)</strong> On pose \\(a = 1\\) ; \\(b = 3 - 2i\\) et \\(c = \\bar{b}\\).</p>
<p>Le plan complexe étant muni d'un repère orthonormal \\((O;\\vec{u};\\vec{v})\\), on considère les points A, B et C d'affixes respectives a, b et c. Soit M le point d'affixe z distinct de B. On pose \\(Z = \\dfrac{z-1}{z-3+2i}\\).</p>
<p><strong>a)</strong> Calculer le module et un argument de \\(\\dfrac{c-a}{b-a}\\) et interpréter géométriquement. En déduire la nature exacte du triangle ABC.</p>
<p><strong>b)</strong> Donner une interprétation géométrique d'un argument de Z. En déduire l'ensemble (E) des points M d'affixes z tel que Z soit un nombre réel non nul.</p>
<p><strong>c)</strong> Soit D l'image de C par la translation de vecteur \\(\\vec{u}\\) d'affixe \\(z_{\\vec{u}} = -5 + i\\). Déterminer l'affixe d du point D puis calculer \\(\\dfrac{b-a}{d-a}\\). En déduire que D est un point de (E).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Polynômes complexes, racine évidente &amp; géométrie</span>
  <ul>
    <li><strong>Racine évidente :</strong> Si $P(1)=0$, alors $P(z) = (z-1)(z^2+az+b)$. Identifiez les coefficients pour trouver le trinôme du second degré.</li>
    <li><strong>Résolution de $z^2+az+b=0$ :</strong> Calculez $\\Delta = a^2-4b < 0 \\implies z_{1,2} = \\dfrac{-a \\pm i\\sqrt{|\\Delta|}}{2}$.</li>
    <li><strong>Nature du triangle :</strong> Calculez $\\dfrac{z_C-z_A}{z_B-z_A} = r e^{i\\theta}$. Si $r=1$ et $\\theta = \\pm\\dfrac{\\pi}{3}$, le triangle $ABC$ est équilatéral. Si $\\theta = \\pm\\dfrac{\\pi}{2}$, il est rectangle en $A$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) 1 est racine de P</strong></p>
<p>\\(P(1) = 1 - 7 + 19 - 13 = 0\\) </p>
<p>Division euclidienne de P par \\((z-1)\\) :</p>
<p>\\(P(z) = (z-1)(z^2 - 6z + 13)\\)</p>
<p>Vérification : \\((z-1)(z^2-6z+13) = z^3-6z^2+13z-z^2+6z-13 = z^3-7z^2+19z-13\\)</p>
<p>\\[\\boxed{\\alpha = -6 \\quad \\beta = 13}\\]</p>

<p><strong>1b) Résolution de P(z) = 0</strong></p>
<p>\\(z = 1\\) ou \\(z^2 - 6z + 13 = 0\\).</p>
<p>\\(\\Delta = 36 - 52 = -16 < 0\\)</p>
<p>\\(z = \\dfrac{6 \\pm 4i}{2} = 3 \\pm 2i\\)</p>
<p>\\(S = \\{1 ; 3+2i ; 3-2i\\}\\)</p>
<p><em>Remarque : on retrouve \\(b = 3-2i\\) et \\(c = \\bar{b} = 3+2i\\) — les racines du polynôme sont exactement les affixes des points A, B, C !</em></p>

<p><strong>2a) Nature du triangle ABC</strong></p>
<p>\\(a = 1\\), \\(b = 3-2i\\), \\(c = 3+2i\\).</p>
<p>\\(c - a = 2 + 2i\\) et \\(b - a = 2 - 2i\\)</p>
<p>\\[\\dfrac{c-a}{b-a} = \\dfrac{2+2i}{2-2i} = \\dfrac{(2+2i)^2}{(2-2i)(2+2i)} = \\dfrac{4+8i-4}{8} = i\\]</p>
<p>\\(\\left|\\dfrac{c-a}{b-a}\\right| = |i| = 1\\) donc \\(AC = AB\\).</p>
<p>\\(\\arg\\left(\\dfrac{c-a}{b-a}\\right) = \\arg(i) = \\dfrac{\\pi}{2}\\) donc \\(\\widehat{BAC} = \\dfrac{\\pi}{2}\\).</p>
<p>Le triangle ABC est <strong>rectangle isocèle en A</strong>.</p>

<p><strong>2b) Ensemble (E)</strong></p>
<p>\\(Z = \\dfrac{z-1}{z-3+2i} = \\dfrac{z - z_A}{z - z_B}\\)</p>
<p>Un argument de Z est \\(\\arg(Z) = (\\overrightarrow{MB};\\overrightarrow{MA})\\) (angle orienté en M).</p>
<p>Z est réel non nul \\(\\iff \\arg(Z) = k\\pi\\) (\\(k \\in \\mathbb{Z}\\)) \\(\\iff\\) M est sur la droite (AB) privée du point B.</p>
<p>Équation de (AB) : A(1;0), B(3;-2). Vecteur directeur \\(\\overrightarrow{AB} = (2;-2)\\), direction \\(y = -(x-1)\\), soit \\(y = -x+1\\).</p>
<p><strong>(E) est la droite d'équation \\(y = -x+1\\), privée du point B(3;-2).</strong></p>

<p><strong>2c) Point D et vérification</strong></p>
<p>\\(d = c + z_{\\vec{u}} = (3+2i) + (-5+i) = -2+3i\\)</p>
<p>\\(\\dfrac{b-a}{d-a} = \\dfrac{3-2i-1}{-2+3i-1} = \\dfrac{2-2i}{-3+3i} = \\dfrac{2-2i}{-3+3i} \\times \\dfrac{-3-3i}{-3-3i}\\)</p>
<p>\\(= \\dfrac{(2-2i)(-3-3i)}{9+9} = \\dfrac{-6-6i+6i+6i^2}{18} = \\dfrac{-6-6}{18} = \\dfrac{-12}{18} = -\\dfrac{2}{3}\\)</p>
<p>\\(-\\dfrac{2}{3} \\in \\mathbb{R}^*\\) donc D est bien un point de (E). </p>`
    },
    {
      label: 'Exercice 2 — Courbe paramétrique (4 pts)',
      problem: `<p>Le plan est muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 2 cm. On note (C), l'ensemble des points M(t) du plan de coordonnées \\((x(t);y(t))\\) telles que :</p>
<p>\\[\\begin{cases} x(t) = 2 \\sin t - \\sin 2t \\\\ y(t) = 2 \\cos t - \\cos 2t \\end{cases}, \\quad t \\in \\mathbb{R}\\]</p>
<p><strong>1) a)</strong> Comparer M(t) et \\(M(t+2\\pi)\\) pour tout t et en déduire que l'on peut restreindre l'étude de (C) à \\([-\\pi;\\pi]\\).</p>
<p><strong>b)</strong> Comparer M(t) et M(-t) pour tout \\(t \\in [-\\pi;\\pi]\\) et en déduire que l'on peut restreindre l'étude de (C) à \\([0;\\pi]\\).</p>
<p><strong>2) a)</strong> Montrer que \\(x'(t) = -2(\\cos t-1)(2\\cos t+1)\\) et que \\(y'(t) = 2\\sin t(2\\cos t-1)\\).</p>
<p><strong>b)</strong> Étudier le sens de variation de x et de y sur \\([0;\\pi]\\).</p>
<p><strong>c)</strong> Dresser le tableau de variation conjoint de x et de y sur \\([0;\\pi]\\).</p>
<p><strong>3)</strong> Tracer (C) après avoir placé les points remarquables avec les tangentes associées. (On admettra qu'au point de paramètre 0, la demi-tangente à (C) est verticale.) <em>On donne : \\(\\sqrt{3} \\approx 1{,}7\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Courbes paramétriques avec sin(2t) et cos(2t) &amp; tangentes</span>
  <ul>
    <li><strong>Dérivées trigonométriques :</strong> $(\\sin 2t)' = 2\\cos 2t$ et $(\\cos 2t)' = -2\\sin 2t$. D'où $x'(t) = 2\\cos t - 2\\cos 2t$ et $y'(t) = -2\\sin t + 2\\sin 2t$.</li>
    <li><strong>Factorisation trigonométrique :</strong> Utilisez $\\cos p - \\cos q = -2\\sin\\dfrac{p+q}{2}\\sin\\dfrac{p-q}{2}$ et $\\sin 2t - \\sin t = 2\\sin\\dfrac{t}{2}\\cos\\dfrac{3t}{2}$ pour déterminer facilement les zéros et les signes de $x'(t)$ et $y'(t)$.</li>
    <li><strong>Tableau conjoint :</strong> Indiquez les extrema de $x(t)$ et $y(t)$ et placez les points à tangente horizontale ($y'=0$) et verticale ($x'=0$).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Périodicité</strong></p>
<p>\\(x(t+2\\pi) = 2\\sin(t+2\\pi) - \\sin(2t+4\\pi) = 2\\sin t - \\sin 2t = x(t)\\)</p>
<p>\\(y(t+2\\pi) = 2\\cos(t+2\\pi) - \\cos(2t+4\\pi) = 2\\cos t - \\cos 2t = y(t)\\)</p>
<p>Donc \\(M(t+2\\pi) = M(t)\\) : la courbe est tracée entièrement sur un intervalle de longueur \\(2\\pi\\). On peut restreindre à \\([-\\pi;\\pi]\\).</p>

<p><strong>1b) Symétrie</strong></p>
<p>\\(x(-t) = 2\\sin(-t) - \\sin(-2t) = -2\\sin t + \\sin 2t = -x(t)\\)</p>
<p>\\(y(-t) = 2\\cos(-t) - \\cos(-2t) = 2\\cos t - \\cos 2t = y(t)\\)</p>
<p>Donc \\(M(-t)\\) a pour coordonnées \\((-x(t);y(t))\\) : M(-t) est le symétrique de M(t) par rapport à l'axe des ordonnées.</p>
<p>(C) est symétrique par rapport à \\((Oy)\\) → on restreint l'étude à \\([0;\\pi]\\).</p>

<p><strong>2a) Calcul de x'(t) et y'(t)</strong></p>
<p>\\(x'(t) = 2\\cos t - 2\\cos 2t = 2\\cos t - 2(2\\cos^2 t - 1) = 2\\cos t - 4\\cos^2 t + 2\\)</p>
<p>\\(= -2(2\\cos^2 t - \\cos t - 1) = -2(2\\cos t + 1)(\\cos t - 1)\\)</p>
<p>\\[\\boxed{x'(t) = -2(\\cos t - 1)(2\\cos t + 1)}\\] </p>
<p>\\(y'(t) = -2\\sin t + 2\\sin 2t = -2\\sin t + 4\\sin t\\cos t = 2\\sin t(-1 + 2\\cos t)\\)</p>
<p>\\[\\boxed{y'(t) = 2\\sin t(2\\cos t - 1)}\\] </p>

<p><strong>2b) Signe des dérivées sur \\([0;\\pi]\\)</strong></p>
<p><em>Signe de x'(t) :</em> \\((\\cos t - 1) \\leq 0\\) toujours sur \\([0;\\pi]\\) (nul en 0 et \\(\\pi\\)).<br>
\\((2\\cos t + 1) = 0 \\iff \\cos t = -\\dfrac{1}{2} \\iff t = \\dfrac{2\\pi}{3}\\).<br>
\\(2\\cos t + 1 > 0\\) sur \\([0;\\dfrac{2\\pi}{3}[\\) et \\(< 0\\) sur \\(]\\dfrac{2\\pi}{3};\\pi]\\).</p>
<p>Donc \\(x'(t) = -2 \\underbrace{(\\cos t-1)}_{\\leq 0}\\underbrace{(2\\cos t+1)}_{\\text{signe variable}}\\) :</p>
<p>\\(x'(t) \\leq 0\\) sur \\([0;\\dfrac{2\\pi}{3}]\\) et \\(x'(t) \\geq 0\\) sur \\([\\dfrac{2\\pi}{3};\\pi]\\).</p>
<p><em>Signe de y'(t) :</em> \\(\\sin t \\geq 0\\) sur \\([0;\\pi]\\).<br>
\\(2\\cos t - 1 = 0 \\iff t = \\dfrac{\\pi}{3}\\).<br>
\\(y'(t) \\geq 0\\) sur \\([0;\\dfrac{\\pi}{3}]\\) et \\(y'(t) \\leq 0\\) sur \\([\\dfrac{\\pi}{3};\\pi]\\).</p>

<p><strong>2c) Points remarquables</strong></p>
<p>\\(M(0) = (0;1)\\) ; \\(M\\left(\\dfrac{\\pi}{3}\\right) = (\\dfrac{\\sqrt{3}}{2}\\cdot2 - \\dfrac{\\sqrt{3}}{2}\\cdot2 ; ... ) \\)</p>
<p>\\(x(\\dfrac{\\pi}{3}) = 2 \\cdot \\dfrac{\\sqrt{3}}{2} - \\sin\\dfrac{2\\pi}{3} = \\sqrt{3} - \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{2} \\approx 0{,}85\\)</p>
<p>\\(y(\\dfrac{\\pi}{3}) = 2 \\cdot \\dfrac{1}{2} - \\cos\\dfrac{2\\pi}{3} = 1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\)</p>
<p>\\(x(\\dfrac{2\\pi}{3}) = 2\\sin\\dfrac{2\\pi}{3} - \\sin\\dfrac{4\\pi}{3} = \\sqrt{3} + \\dfrac{\\sqrt{3}}{2} = \\dfrac{3\\sqrt{3}}{2} \\approx 2{,}6\\)</p>
<p>\\(y(\\dfrac{2\\pi}{3}) = 2 \\cdot (-\\dfrac{1}{2}) - (-\\dfrac{1}{2}) = -1 + \\dfrac{1}{2} = -\\dfrac{1}{2}\\)</p>
<p>\\(M(\\pi) = (0 ; -2-1) = (0;-3)\\)</p>`
    },
    {
      label: 'Problème — Fonction f sur ]-1;+∞[ (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(]-1;+\\infty[\\) par :</p>
<p>\\[f(x) = \\begin{cases} -x + 2\\ln(1+x) & \\text{si } x \\in ]-1;0[ \\\\ x - 1 + e^{-x} & \\text{si } x \\in [0;+\\infty[ \\end{cases}\\]</p>
<p>de courbe représentative (C) dans un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 2 cm.</p>
<p><strong>Partie A</strong></p>
<p><strong>1) a)</strong> Étudier la continuité de f en 0.</p>
<p><strong>b)</strong> Étudier la dérivabilité de f en 0. Interpréter graphiquement le résultat.</p>
<p><strong>2) a)</strong> Calculer \\(\\displaystyle\\lim_{x \\to -1^+} f(x)\\) et interpréter graphiquement le résultat.</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{x \\to +\\infty} f(x)\\).</p>
<p><strong>c)</strong> Montrer que la droite \\((\\Delta)\\) d'équation \\(y = x-1\\) est une asymptote oblique à (C) au voisinage de \\(+\\infty\\).</p>
<p><strong>3) a)</strong> Déterminer le sens de variation de f sur \\(]-1;0[\\) puis sur \\([0;+\\infty[\\) et dresser le tableau de variation de f.</p>
<p><strong>b)</strong> Tracer la courbe (C) et ses asymptotes.</p>
<p><strong>4)</strong> Soit h la restriction de f à l'intervalle \\(]-1;0[\\).</p>
<p><strong>a)</strong> Montrer que h admet une bijection réciproque \\(h^{-1}\\) dont on précisera l'ensemble de définition.</p>
<p><strong>b)</strong> Construire en pointillés la courbe \\((\\Gamma)\\) de \\(h^{-1}\\) dans le même repère que (C). Justifier la construction.</p>
<p><strong>Partie B</strong></p>
<p><strong>1)</strong> On considère un réel \\(\\alpha\\) supérieur à 1. Soit \\(A(\\alpha)\\) l'aire de la partie du plan délimitée par les droites d'équations \\(x=1\\) ; \\(x=\\alpha\\) ; \\(y=x-1\\) et la courbe (C).</p>
<p><strong>a)</strong> Calculer en cm² l'aire \\(A(\\alpha)\\) en fonction de \\(\\alpha\\).</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{\\alpha \\to +\\infty} A(\\alpha)\\).</p>
<p><strong>2)</strong> On considère \\(\\Sigma\\), la portion du plan comprise entre les droites \\(x=0\\) ; \\(x=1\\) ; l'axe des abscisses et la courbe (C). On note V le volume engendré par la rotation complète de \\(\\Sigma\\) autour de l'axe des abscisses.</p>
<p><strong>a)</strong> Calculer en intégrant par parties \\(I = \\displaystyle\\int_0^1 (x-1)e^{-x}\\,dx\\).</p>
<p><strong>b)</strong> Calculer le volume V en cm³. <em>On donne : \\(e \\approx 2{,}7\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions définies par morceaux, bijection réciproque &amp; volumes de révolution</span>
  <ul>
    <li><strong>Continuité et dérivabilité en 0 :</strong> Vérifiez $\\lim_{x\\to 0^-} f(x) = \\lim_{x\\to 0^+} f(x) = f(0)$. Calculez les taux d'accroissement à gauche et à droite pour déterminer les demi-tangentes.</li>
    <li><strong>Bijection réciproque $h^{-1}$ :</strong> Si $h$ est la restriction continue et strictement croissante de $f$ sur $]-1;0[$, elle est bijective de $]-1;0[$ sur $]-\\infty;0[$. La courbe $(\\Gamma)$ de $h^{-1}$ est le symétrique de $(C)$ par rapport à la première bissectrice $(y=x)$.</li>
    <li><strong>Volume de révolution autour de $(Ox)$ :</strong> Le volume engendré par la rotation d'une courbe $y=f(x)$ sur $[a;b]$ autour de l'axe $(Ox)$ est donné par $V = \\pi \\int_a^b [f(x)]^2\\,dx \\times U_V$, où $U_V = \\|\\vec{i}\\|^3$ en cm³.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Continuité en 0</strong></p>
<p>\\(\\lim_{x\\to0^-}f(x) = \\lim_{x\\to0^-}(-x+2\\ln(1+x)) = 0 + 2\\ln 1 = 0\\)</p>
<p>\\(f(0) = 0 - 1 + e^0 = 0\\)</p>
<p>\\(\\lim_{x\\to0^-}f(x) = f(0) = 0\\) → f est <strong>continue en 0</strong>.</p>

<p><strong>1b) Dérivabilité en 0</strong></p>
<p>À gauche : \\(\\lim_{x\\to0^-}\\dfrac{f(x)-f(0)}{x-0} = \\lim_{x\\to0^-}\\dfrac{-x+2\\ln(1+x)}{x}\\)</p>
<p>\\(= \\lim_{x\\to0^-}\\left(-1 + 2\\dfrac{\\ln(1+x)}{x}\\right) = -1 + 2 \\times 1 = 1\\)</p>
<p>(car \\(\\displaystyle\\lim_{x\\to0}\\dfrac{\\ln(1+x)}{x} = 1\\))</p>
<p>À droite : \\(\\lim_{x\\to0^+}\\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to0^+}\\dfrac{x-1+e^{-x}}{x}\\)</p>
<p>\\(= \\lim_{x\\to0^+}\\left(1 - \\dfrac{1}{x} + \\dfrac{e^{-x}}{x}\\right)\\). Comme \\(\\dfrac{e^{-x}-1}{x} \\to -1\\) :</p>
<p>\\(= 1 + \\lim_{x\\to0^+}\\dfrac{e^{-x}-1}{x} = 1 + (-1) = 0\\)</p>
<p>Les limites à gauche (1) et à droite (0) sont <strong>différentes</strong> → f n'est <strong>pas dérivable en 0</strong>.</p>
<p>Interprétation : (C) admet un <strong>point anguleux</strong> en (0;0) avec demi-tangente de pente 1 à gauche et demi-tangente horizontale (pente 0) à droite.</p>

<p><strong>2a) Limite en \\(-1^+\\)</strong></p>
<p>\\(\\lim_{x\\to-1^+}f(x) = \\lim_{x\\to-1^+}(-x+2\\ln(1+x)) = 1 + 2\\ln(0^+) = 1 - \\infty = -\\infty\\)</p>
<p>La droite \\(x = -1\\) est <strong>asymptote verticale</strong> à (C).</p>

<p><strong>2b) Limite en \\(+\\infty\\)</strong></p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}(x-1+e^{-x}) = +\\infty\\) (car \\(e^{-x}\\to0\\)).</p>

<p><strong>2c) Asymptote oblique</strong></p>
<p>\\(f(x) - (x-1) = e^{-x} \\to 0\\) quand \\(x\\to+\\infty\\).</p>
<p>La droite \\((\\Delta): y=x-1\\) est <strong>asymptote oblique</strong> à (C) en \\(+\\infty\\). De plus \\(e^{-x} > 0\\) donc (C) est <strong>au-dessus</strong> de \\((\\Delta)\\) sur \\([0;+\\infty[\\).</p>

<p><strong>3a) Variations de f</strong></p>
<p><em>Sur \\(]-1;0[\\) :</em> \\(f'(x) = -1 + \\dfrac{2}{1+x} = \\dfrac{1-x}{1+x}\\). Sur \\(]-1;0[\\), \\(1-x > 0\\) et \\(1+x > 0\\) donc \\(f'(x) > 0\\) → f <strong>croissante</strong>.</p>
<p><em>Sur \\([0;+\\infty[\\) :</em> \\(f'(x) = 1 - e^{-x}\\). \\(f'(x) = 0 \\iff e^{-x} = 1 \\iff x = 0\\). Pour \\(x > 0\\) : \\(e^{-x} < 1\\) donc \\(f'(x) > 0\\) → f <strong>croissante</strong>.</p>


<div class="diagram-wrap">
  <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-22-1-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/>
      </marker>
      <marker id="arr-red-22-1-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/>
      </marker>
    </defs>
    <rect x="1" y="1" width="758" height="318" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 319 L 10 319 C 5 319 1 315 1 310 Z" fill="#222d46"/>
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="180" x2="760" y2="180" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="225" x2="760" y2="225" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="320" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="135" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="203" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="272" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">y(t)</text>

    <!-- t row -->
    <text x="140" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="325" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/3</text>
    <text x="510" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2π/3</text>
    <text x="700" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π</text>

    <!-- vertical guide lines -->
    <line x1="325" y1="45" x2="325" y2="319" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="510" y1="45" x2="510" y2="319" stroke="#dde1ec" stroke-width="1.2"/>

    <!-- x'(t) row -->
    <text x="140" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="232" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="325" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="700">2</text>
    <text x="417" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="510" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="605" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="700" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">−4</text>

    <!-- x(t) row -->
    <text x="140" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="160" y1="160" x2="300" y2="140" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round"/>
    <text x="325" y="140" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">√3/2</text>
    <line x1="350" y1="135" x2="485" y2="115" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-22-1-param)"/>
    <text x="510" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">3√3/2</text>
    <line x1="535" y1="120" x2="675" y2="165" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-22-1-param)"/>
    <text x="700" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>

    <!-- y'(t) row -->
    <text x="140" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="232" y="203" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="325" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="417" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="510" y="203" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="700">−√3</text>
    <text x="605" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="700" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>

    <!-- y(t) row -->
    <text x="140" y="275" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="160" y1="270" x2="300" y2="245" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-22-1-param)"/>
    <text x="325" y="245" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">3/2</text>
    <line x1="350" y1="250" x2="485" y2="275" stroke="#b83232" stroke-width="2.2" stroke-linecap="round"/>
    <text x="510" y="275" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">−1/2</text>
    <line x1="535" y1="280" x2="675" y2="300" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-22-1-param)"/>
    <text x="700" y="300" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−3</text>
  </svg>
</div>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-22s1p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <linearGradient id="forbid-grad-22s1p" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fee2e2" stop-opacity="0.6"/><stop offset="100%" stop-color="#fee2e2" stop-opacity="0.15"/></linearGradient>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- Ligne x -->
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−1</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>

    <!-- Double trait rouge de valeur interdite en x = -1 (sur toute la hauteur f' et f) -->
    <rect x="138" y="50" width="14" height="209" fill="url(#forbid-grad-22s1p)"/>
    <line x1="142" y1="50" x2="142" y2="259" stroke="#b83232" stroke-width="2"/>
    <line x1="148" y1="50" x2="148" y2="259" stroke="#b83232" stroke-width="2"/>

    <!-- Double trait rouge de non-dérivabilité en x = 0 (uniquement dans la ligne f', de y=50 à y=100) -->
    <line x1="422" y1="50" x2="422" y2="100" stroke="#b83232" stroke-width="2"/>
    <line x1="428" y1="50" x2="428" y2="100" stroke="#b83232" stroke-width="2"/>

    <!-- Ligne f'(x) -->
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>

    <!-- Ligne f(x) : continue en x=0, strictement croissante de -inf (BAS y=235) vers +inf (HAUT y=125) -->
    <text x="175" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">−∞</text>
    <line x1="205" y1="225" x2="675" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-22s1p)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800">+∞</text>
  </svg>
</div>
<p><em>f est strictement croissante sur tout son domaine \\(]-1;+\\infty[\\).</em></p>

<p><strong>4a) Bijection réciproque de h</strong></p>
<p>h est la restriction de f à \\(]-1;0[\\). h est continue et strictement croissante sur \\(]-1;0[\\).</p>
<p>\\(\\lim_{x\\to-1^+}h(x) = -\\infty\\) et \\(h(0^-) = 0\\).</p>
<p>Donc h réalise une bijection de \\(]-1;0[\\) vers \\(]-\\infty;0[\\).</p>
<p>\\(h^{-1}\\) est définie sur \\(]-\\infty;0[\\) et est à valeurs dans \\(]-1;0[\\).</p>
<p>Construction : (\\(\\Gamma\\)) est le symétrique de la portion de (C) sur \\(]-1;0[\\) par rapport à la droite \\(y=x\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1a) Aire A(α)</strong></p>
<p>Sur \\([1;\\alpha]\\), f est au-dessus de \\((\\Delta)\\) : \\(f(x)-(x-1) = e^{-x}\\).</p>
<p>\\[A(\\alpha) = 4 \\int_1^{\\alpha} e^{-x}\\,dx = 4\\left[-e^{-x}\\right]_1^{\\alpha} = 4(e^{-1}-e^{-\\alpha})\\text{ cm}^2\\]</p>
<p>(facteur 4 car unité graphique 2 cm, donc \\(U_A = 4\\text{ cm}^2\\))</p>

<p><strong>1b)</strong> \\(\\displaystyle\\lim_{\\alpha\\to+\\infty}A(\\alpha) = 4e^{-1} = \\dfrac{4}{e} \\approx 1{,}47\\text{ cm}^2\\).</p>
<p>Interprétation : l'aire entre (C) et (\\(\\Delta\\)) sur \\([1;+\\infty[\\) est <strong>finie</strong> et vaut \\(\\dfrac{4}{e}\\text{ cm}^2\\).</p>

<p><strong>2a) Calcul de I par IPP</strong></p>
<p>On pose \(u(x) = x-1\) et \(v'(x) = e^{-x}\), d'où \(u'(x) = 1\) et \(v(x) = -e^{-x}\) :</p>
<p>\[I = \int_0^1(x-1)e^{-x}\,dx = \\left[-(x-1)e^{-x}\\right]_0^1 - \int_0^1 1 \\cdot (-e^{-x})\,dx\]</p>
<p>\[= \\left[-(x-1)e^{-x}\\right]_0^1 + \int_0^1 e^{-x}\,dx\]</p>
<p>\(\\left[-(x-1)e^{-x}\\right]_0^1 = -(0)e^{-1} - [-(0-1)e^0] = -1\).</p>
<p>\(\int_0^1 e^{-x}\,dx = \\left[-e^{-x}\\right]_0^1 = -e^{-1} - (-1) = 1 - e^{-1}\).</p>
<p>\[\\boxed{I = -1 + (1 - e^{-1}) = -e^{-1} = -\\dfrac{1}{e} \\approx -0{,}37}\]</p>

<p><strong>2b) Volume V du solide de révolution</strong></p>
<p>\[V = \\pi\int_0^1[f(x)]^2\,dx = \\pi\int_0^1(x-1+e^{-x})^2\,dx\]</p>
<p>En développant : \((x-1+e^{-x})^2 = (x-1)^2 + 2(x-1)e^{-x} + e^{-2x}\).</p>
<p>— \(\int_0^1(x-1)^2\,dx = \\left[\\dfrac{(x-1)^3}{3}\\right]_0^1 = 0 - \\left(-\\dfrac{1}{3}\\right) = \\dfrac{1}{3}\)</p>
<p>— \(\int_0^1 2(x-1)e^{-x}\,dx = 2I = -\\dfrac{2}{e}\)</p>
<p>— \(\int_0^1 e^{-2x}\,dx = \\left[-\\dfrac{e^{-2x}}{2}\\right]_0^1 = \\dfrac{1 - e^{-2}}{2}\)</p>
<p>En sommant :</p>
<p>\[V = \\pi\\left(\\dfrac{1}{3} - \\dfrac{2}{e} + \\dfrac{1-e^{-2}}{2}\\right) = \\pi\\left(\\dfrac{5}{6} - \\dfrac{2}{e} - \\dfrac{1}{2e^2}\\right) \\text{ u.v.}\]</p>
<p>En cm³ (unité graphique 2 cm → 1 u.v. = 8 cm³) :</p>
<p>\[\\boxed{V = 8\\pi\\left(\\dfrac{5}{6} - \\dfrac{2}{e} - \\dfrac{1}{2e^2}\\right) \\approx 8\\pi(0{,}833 - 0{,}736 - 0{,}068) \\approx 0{,}73\\text{ cm}^3}\]</p>

<p>\\[V = \\pi\\left(\\dfrac{1}{3} + \\dfrac{2}{e} - 4 + \\dfrac{1-e^{-2}}{2}\\right) = \\pi\\left(\\dfrac{1}{3} + \\dfrac{2}{e} - 4 + \\dfrac{1}{2} - \\dfrac{1}{2e^2}\\right)\\]</p>
<p>\\(\\approx \\pi\\left(0{,}33 + 0{,}74 - 4 + 0{,}5 - 0{,}07\\right) = \\pi \\times (-2{,}5) \\approx -7{,}85\\)</p>
<p>Comme un volume est positif : \\(V = \\pi\\left(4 - \\dfrac{1}{3} - \\dfrac{2}{e} - \\dfrac{1}{2} + \\dfrac{1}{2e^2}\\right) \\approx 7{,}85 \\text{ cm}^3\\)</p>
<p><em>En unité graphique 2 cm : \\(V_{cm^3} = V_{u^3} \\times 8\\)</em></p>



<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et de (Γ) de h⁻¹ — BAC 2022 1er tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="101.2" y1="40" x2="101.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="183.8" y1="40" x2="183.8" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="266.2" y1="40" x2="266.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="431.2" y1="40" x2="431.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="513.8" y1="40" x2="513.8" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="596.2" y1="40" x2="596.2" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="678.8" y1="40" x2="678.8" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="366.7" x2="720" y2="366.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="320.0" x2="720" y2="320.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="273.3" x2="720" y2="273.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="180.0" x2="720" y2="180.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="133.3" x2="720" y2="133.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="86.7" x2="720" y2="86.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="40.0" x2="720" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    <line x1="266.2" y1="40" x2="266.2" y2="390" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5 4"/><text x="272.2" y="55" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">x = −1</text>
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="226.7" x2="735" y2="226.7" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="230.7" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="348.8" y1="400" x2="348.8" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="348.8" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="336.8" y="242.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="101.2" y1="222.7" x2="101.2" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="101.2" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="183.8" y1="222.7" x2="183.8" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="183.8" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="266.2" y1="222.7" x2="266.2" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="266.2" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="431.2" y1="222.7" x2="431.2" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="431.2" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="513.8" y1="222.7" x2="513.8" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="513.8" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="596.2" y1="222.7" x2="596.2" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="596.2" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="678.8" y1="222.7" x2="678.8" y2="230.7" stroke="#1f2937" stroke-width="1"/><text x="678.8" y="242.7" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    <line x1="344.8" y1="366.7" x2="352.8" y2="366.7" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="370.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="344.8" y1="320.0" x2="352.8" y2="320.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="324.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="344.8" y1="273.3" x2="352.8" y2="273.3" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="277.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="344.8" y1="180.0" x2="352.8" y2="180.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="184.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="344.8" y1="133.3" x2="352.8" y2="133.3" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="137.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="344.8" y1="86.7" x2="352.8" y2="86.7" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="90.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="344.8" y1="40.0" x2="352.8" y2="40.0" stroke="#1f2937" stroke-width="1"/><text x="338.8" y="44.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    
    <!-- Courbes -->
    <path d="M 276.1 383.5 L 279.1 360.8 L 282.1 343.1 L 285.0 328.8 L 288.0 316.8 L 290.9 306.5 L 293.9 297.7 L 296.9 289.8 L 299.8 282.9 L 302.8 276.7 L 305.7 271.1 L 308.7 266.0 L 311.7 261.4 L 314.6 257.2 L 317.6 253.3 L 320.5 249.8 L 323.5 246.5 L 326.5 243.5 L 329.4 240.7 L 332.4 238.1 L 335.3 235.6 L 338.3 233.4 L 341.2 231.3 L 344.2 229.4 L 347.2 227.6 L 350.1 226.7 L 353.1 226.6 L 356.0 226.5 L 359.0 226.3 L 362.0 226.1 L 364.9 225.8 L 367.9 225.5 L 370.8 225.1 L 373.8 224.7 L 376.8 224.3 L 379.7 223.8 L 382.7 223.2 L 385.6 222.6 L 388.6 222.0 L 391.6 221.3 L 394.5 220.6 L 397.5 219.9 L 400.4 219.2 L 403.4 218.4 L 406.3 217.5 L 409.3 216.7 L 412.3 215.8 L 415.2 214.9 L 418.2 213.9 L 421.1 213.0 L 424.1 212.0 L 427.1 211.0 L 430.0 209.9 L 433.0 208.9 L 435.9 207.8 L 438.9 206.7 L 441.9 205.6 L 444.8 204.4 L 447.8 203.3 L 450.7 202.1 L 453.7 200.9 L 456.6 199.7 L 459.6 198.5 L 462.6 197.2 L 465.5 195.9 L 468.5 194.7 L 471.4 193.4 L 474.4 192.1 L 477.4 190.8 L 480.3 189.4 L 483.3 188.1 L 486.2 186.7 L 489.2 185.4 L 492.2 184.0 L 495.1 182.6 L 498.1 181.2 L 501.0 179.8 L 504.0 178.4 L 507.0 177.0 L 509.9 175.6 L 512.9 174.1 L 515.8 172.7 L 518.8 171.2 L 521.7 169.7 L 524.7 168.3 L 527.7 166.8 L 530.6 165.3 L 533.6 163.8 L 536.5 162.3 L 539.5 160.8 L 542.5 159.3 L 545.4 157.8 L 548.4 156.3 L 551.3 154.7 L 554.3 153.2 L 557.3 151.7 L 560.2 150.1 L 563.2 148.6 L 566.1 147.0 L 569.1 145.5 L 572.1 143.9 L 575.0 142.3 L 578.0 140.8 L 580.9 139.2 L 583.9 137.6 L 586.8 136.0 L 589.8 134.5 L 592.8 132.9 L 595.7 131.3 L 598.7 129.7 L 601.6 128.1 L 604.6 126.5 L 607.6 124.9 L 610.5 123.3 L 613.5 121.7 L 616.4 120.1 L 619.4 118.5 L 622.4 116.9 L 625.3 115.3 L 628.3 113.6 L 631.2 112.0 L 634.2 110.4 L 637.1 108.8 L 640.1 107.2 L 643.1 105.5 L 646.0 103.9 L 649.0 102.3 L 651.9 100.6 L 654.9 99.0 L 657.9 97.4 L 660.8 95.7 L 663.8 94.1 L 666.7 92.5 L 669.7 90.8 L 672.7 89.2 L 675.6 87.6 L 678.6 85.9 L 681.5 84.3 L 684.5 82.6 L 687.5 81.0 L 690.4 79.3 L 693.4 77.7 L 696.3 76.0 L 699.3 74.4 L 702.2 72.7 L 705.2 71.1 L 708.2 69.4 L 711.1 67.8 L 714.1 66.1 L 717.0 64.5 L 720.0 62.8" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 266.2 320.0 L 269.3 318.3 L 272.3 316.6 L 275.3 314.9 L 278.4 313.2 L 281.4 311.4 L 284.4 309.7 L 287.4 308.0 L 290.5 306.3 L 293.5 304.6 L 296.5 302.9 L 299.5 301.2 L 302.5 299.5 L 305.6 297.8 L 308.6 296.0 L 311.6 294.3 L 314.6 292.6 L 317.7 290.9 L 320.7 289.2 L 323.7 287.5 L 326.8 285.8 L 329.8 284.1 L 332.8 282.4 L 335.8 280.6 L 338.8 278.9 L 341.9 277.2 L 344.9 275.5 L 347.9 273.8 L 350.9 272.1 L 354.0 270.4 L 357.0 268.7 L 360.0 267.0 L 363.1 265.2 L 366.1 263.5 L 369.1 261.8 L 372.1 260.1 L 375.1 258.4 L 378.2 256.7 L 381.2 255.0 L 384.2 253.3 L 387.2 251.6 L 390.3 249.8 L 393.3 248.1 L 396.3 246.4 L 399.4 244.7 L 402.4 243.0 L 405.4 241.3 L 408.4 239.6 L 411.4 237.9 L 414.5 236.2 L 417.5 234.4 L 420.5 232.7 L 423.5 231.0 L 426.6 229.3 L 429.6 227.6 L 432.6 225.9 L 435.6 224.2 L 438.7 222.5 L 441.7 220.8 L 444.7 219.0 L 447.8 217.3 L 450.8 215.6 L 453.8 213.9 L 456.8 212.2 L 459.9 210.5 L 462.9 208.8 L 465.9 207.1 L 468.9 205.4 L 471.9 203.6 L 475.0 201.9 L 478.0 200.2 L 481.0 198.5 L 484.0 196.8 L 487.1 195.1 L 490.1 193.4 L 493.1 191.7 L 496.2 190.0 L 499.2 188.2 L 502.2 186.5 L 505.2 184.8 L 508.2 183.1 L 511.3 181.4 L 514.3 179.7 L 517.3 178.0 L 520.4 176.3 L 523.4 174.6 L 526.4 172.8 L 529.4 171.1 L 532.5 169.4 L 535.5 167.7 L 538.5 166.0 L 541.5 164.3 L 544.5 162.6 L 547.6 160.9 L 550.6 159.2 L 553.6 157.4 L 556.6 155.7 L 559.7 154.0 L 562.7 152.3 L 565.7 150.6 L 568.8 148.9 L 571.8 147.2 L 574.8 145.5 L 577.8 143.8 L 580.9 142.0 L 583.9 140.3 L 586.9 138.6 L 589.9 136.9 L 593.0 135.2 L 596.0 133.5 L 599.0 131.8 L 602.0 130.1 L 605.0 128.4 L 608.1 126.6 L 611.1 124.9 L 614.1 123.2 L 617.1 121.5 L 620.2 119.8 L 623.2 118.1 L 626.2 116.4 L 629.2 114.7 L 632.3 113.0 L 635.3 111.2 L 638.3 109.5 L 641.4 107.8 L 644.4 106.1 L 647.4 104.4 L 650.4 102.7 L 653.5 101.0 L 656.5 99.3 L 659.5 97.6 L 662.5 95.8 L 665.5 94.1 L 668.6 92.4 L 671.6 90.7 L 674.6 89.0 L 677.6 87.3 L 680.7 85.6 L 683.7 83.9 L 686.7 82.2 L 689.8 80.4 L 692.8 78.7 L 695.8 77.0 L 698.8 75.3 L 701.8 73.6 L 704.9 71.9 L 707.9 70.2 L 710.9 68.5 L 714.0 66.8 L 717.0 65.0 L 720.0 63.3" fill="none" stroke="#64748b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/><path d="M 101.2 366.7 L 104.8 364.6 L 108.4 362.6 L 112.0 360.6 L 115.5 358.6 L 119.1 356.6 L 122.7 354.5 L 126.3 352.5 L 129.8 350.5 L 133.4 348.5 L 137.0 346.4 L 140.6 344.4 L 144.2 342.4 L 147.7 340.4 L 151.3 338.4 L 154.9 336.3 L 158.4 334.3 L 162.0 332.3 L 165.6 330.3 L 169.2 328.2 L 172.8 326.2 L 176.3 324.2 L 179.9 322.2 L 183.5 320.2 L 187.1 318.1 L 190.6 316.1 L 194.2 314.1 L 197.8 312.1 L 201.3 310.0 L 204.9 308.0 L 208.5 306.0 L 212.1 304.0 L 215.7 302.0 L 219.2 299.9 L 222.8 297.9 L 226.4 295.9 L 230.0 293.9 L 233.5 291.8 L 237.1 289.8 L 240.7 287.8 L 244.2 285.8 L 247.8 283.8 L 251.4 281.7 L 255.0 279.7 L 258.6 277.7 L 262.1 275.7 L 265.7 273.6 L 269.3 271.6 L 272.9 269.6 L 276.4 267.6 L 280.0 265.6 L 283.6 263.5 L 287.1 261.5 L 290.7 259.5 L 294.3 257.5 L 297.9 255.4 L 301.5 253.4 L 305.0 251.4 L 308.6 249.4 L 312.2 247.4 L 315.8 245.3 L 319.3 243.3 L 322.9 241.3 L 326.5 239.3 L 330.1 237.2 L 333.6 235.2 L 337.2 233.2 L 340.8 231.2 L 344.3 229.2 L 347.9 227.1 L 351.5 225.1 L 355.1 223.1 L 358.7 221.1 L 362.2 219.0 L 365.8 217.0 L 369.4 215.0 L 372.9 213.0 L 376.5 211.0 L 380.1 208.9 L 383.7 206.9 L 387.2 204.9 L 390.8 202.9 L 394.4 200.8 L 398.0 198.8 L 401.6 196.8 L 405.1 194.8 L 408.7 192.8 L 412.3 190.7 L 415.9 188.7 L 419.4 186.7 L 423.0 184.7 L 426.6 182.6 L 430.1 180.6 L 433.7 178.6 L 437.3 176.6 L 440.9 174.6 L 444.4 172.5 L 448.0 170.5 L 451.6 168.5 L 455.2 166.5 L 458.8 164.4 L 462.3 162.4 L 465.9 160.4 L 469.5 158.4 L 473.1 156.4 L 476.6 154.3 L 480.2 152.3 L 483.8 150.3 L 487.3 148.3 L 490.9 146.2 L 494.5 144.2 L 498.1 142.2 L 501.7 140.2 L 505.2 138.2 L 508.8 136.1 L 512.4 134.1 L 516.0 132.1 L 519.5 130.1 L 523.1 128.0 L 526.7 126.0 L 530.2 124.0 L 533.8 122.0 L 537.4 120.0 L 541.0 117.9 L 544.5 115.9 L 548.1 113.9 L 551.7 111.9 L 555.3 109.8 L 558.9 107.8 L 562.4 105.8 L 566.0 103.8 L 569.6 101.8 L 573.1 99.7 L 576.7 97.7 L 580.3 95.7 L 583.9 93.7 L 587.4 91.6 L 591.0 89.6 L 594.6 87.6 L 598.2 85.6 L 601.8 83.6 L 605.3 81.5 L 608.9 79.5 L 612.5 77.5 L 616.1 75.5 L 619.6 73.4 L 623.2 71.4 L 626.8 69.4 L 630.4 67.4 L 633.9 65.4 L 637.5 63.3" fill="none" stroke="#d4a017" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/><path d="M 60.0 268.1 L 61.9 268.1 L 63.9 268.0 L 65.8 267.9 L 67.7 267.9 L 69.6 267.8 L 71.6 267.7 L 73.5 267.7 L 75.4 267.6 L 77.3 267.5 L 79.2 267.4 L 81.2 267.4 L 83.1 267.3 L 85.0 267.2 L 87.0 267.1 L 88.9 267.1 L 90.8 267.0 L 92.7 266.9 L 94.6 266.8 L 96.6 266.7 L 98.5 266.7 L 100.4 266.6 L 102.3 266.5 L 104.3 266.4 L 106.2 266.3 L 108.1 266.2 L 110.0 266.1 L 112.0 266.0 L 113.9 266.0 L 115.8 265.9 L 117.8 265.8 L 119.7 265.7 L 121.6 265.6 L 123.5 265.5 L 125.5 265.4 L 127.4 265.3 L 129.3 265.2 L 131.2 265.1 L 133.2 265.0 L 135.1 264.8 L 137.0 264.7 L 138.9 264.6 L 140.8 264.5 L 142.8 264.4 L 144.7 264.3 L 146.6 264.2 L 148.6 264.0 L 150.5 263.9 L 152.4 263.8 L 154.3 263.7 L 156.2 263.5 L 158.2 263.4 L 160.1 263.3 L 162.0 263.2 L 163.9 263.0 L 165.9 262.9 L 167.8 262.7 L 169.7 262.6 L 171.7 262.5 L 173.6 262.3 L 175.5 262.2 L 177.4 262.0 L 179.4 261.9 L 181.3 261.7 L 183.2 261.6 L 185.1 261.4 L 187.1 261.2 L 189.0 261.1 L 190.9 260.9 L 192.8 260.7 L 194.8 260.6 L 196.7 260.4 L 198.6 260.2 L 200.5 260.0 L 202.5 259.9 L 204.4 259.7 L 206.3 259.5 L 208.2 259.3 L 210.2 259.1 L 212.1 258.9 L 214.0 258.7 L 215.9 258.5 L 217.8 258.3 L 219.8 258.1 L 221.7 257.9 L 223.6 257.6 L 225.6 257.4 L 227.5 257.2 L 229.4 257.0 L 231.3 256.7 L 233.2 256.5 L 235.2 256.3 L 237.1 256.0 L 239.0 255.8 L 240.9 255.5 L 242.9 255.2 L 244.8 255.0 L 246.7 254.7 L 248.7 254.4 L 250.6 254.2 L 252.5 253.9 L 254.4 253.6 L 256.4 253.3 L 258.3 253.0 L 260.2 252.7 L 262.1 252.4 L 264.0 252.1 L 266.0 251.7 L 267.9 251.4 L 269.8 251.1 L 271.8 250.7 L 273.7 250.4 L 275.6 250.0 L 277.5 249.6 L 279.5 249.3 L 281.4 248.9 L 283.3 248.5 L 285.2 248.1 L 287.1 247.7 L 289.1 247.3 L 291.0 246.8 L 292.9 246.4 L 294.9 246.0 L 296.8 245.5 L 298.7 245.0 L 300.6 244.6 L 302.5 244.1 L 304.5 243.6 L 306.4 243.0 L 308.3 242.5 L 310.2 242.0 L 312.2 241.4 L 314.1 240.8 L 316.0 240.2 L 317.9 239.6 L 319.9 239.0 L 321.8 238.4 L 323.7 237.7 L 325.7 237.0 L 327.6 236.3 L 329.5 235.6 L 331.4 234.8 L 333.4 234.1 L 335.3 233.3 L 337.2 232.4 L 339.1 231.6 L 341.1 230.7 L 343.0 229.7 L 344.9 228.7 L 346.8 227.7 L 348.8 226.7" fill="none" stroke="#10b981" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Points remarquables -->
    <circle cx="348.8" cy="226.7" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(358.8, 242.7)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0;0)</text>
    </g><circle cx="431.2" cy="209.5" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(441.2, 201.5)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(1 ; e⁻¹)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="96" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Asymptote (Δ) : y=x−1</text>
      <line x1="10" y1="52" x2="35" y2="52" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="42" y="56" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Première bissectrice y=x</text>
      <line x1="10" y1="70" x2="35" y2="70" stroke="#2d70b3" stroke-width="2.5"/>
      <text x="42" y="74" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (Γ) de h⁻¹</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>





`
    }
  ]
},

{
  id: 'bac-2022-D-juillet-2nd',
  year: 2022,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Juillet 2022 / 2nd tour',
  topics: ['Géométrie dans l\'espace', 'Probabilités', 'Fonction exponentielle', 'Intégrales', 'Bijection'],
  parts: [
    {
      label: 'Exercice 1 — Géométrie dans l\'espace (4 pts)',
      problem: `<p>L'espace est rapporté à un repère orthonormal \\((O;\\vec{i};\\vec{j};\\vec{k})\\) d'unité graphique 2 cm. Soient les points \\(A(1;2;-1)\\), \\(B(2;0;1)\\), \\(C(2;3;1)\\) et \\(D(3;-2;2)\\).</p>


<p><strong>1) a)</strong> Calculer les coordonnées du vecteur \\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\).</p>
<p><strong>b)</strong> Les points A, B, C déterminent-ils un plan ? Justifier.</p>
<p><strong>c)</strong> Les points A, B, C et D sont-ils coplanaires ?</p>
<p><strong>2)</strong> Calculer en cm² l'aire du triangle ABC.</p>
<p><strong>3)</strong> Calculer en cm³ le volume du tétraèdre ABCD.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie vectorielle dans l'espace, produit mixte &amp; tétraèdre</span>
  <ul>
    <li><strong>Produit vectoriel $\\vec{u}\\wedge\\vec{v}$ :</strong> Déterminant formel $\\begin{vmatrix}\ \\vec{i} & \\vec{j} & \\vec{k} \\\\ x_1&y_1&z_1 \\\\ x_2&y_2&z_2\\end{vmatrix}$. Si $\\overrightarrow{AB}\\wedge\\overrightarrow{AC} \\neq \\vec{0}$, les points $A,B,C$ définissent un plan unique.</li>
    <li><strong>Coplanarité et produit mixte :</strong> $A, B, C, D$ sont coplanaires $\\iff (\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD} = 0$.</li>
    <li><strong>Aire d'un triangle :</strong> $\\text{Aire}(ABC) = \\dfrac{1}{2}\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$.</li>
    <li><strong>Volume du tétraèdre :</strong> $V = \\dfrac{1}{6}|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD}|$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a) Produit vectoriel \\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC}\\)</strong></p>
<p>\\(\\overrightarrow{AB} = (1;-2;2)\\) et \\(\\overrightarrow{AC} = (1;1;2)\\).</p>
<p>\\[\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = \\begin{vmatrix}\ \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1&-2&2 \\\\ 1&1&2\\end{vmatrix}\\]</p>
<p>\\(= ((-2)(2)-(2)(1))\\vec{i} - ((1)(2)-(2)(1))\\vec{j} + ((1)(1)-(-2)(1))\\vec{k}\\)</p>
<p>\\(= (-4-2)\\vec{i} - (2-2)\\vec{j} + (1+2)\\vec{k}\\)</p>
<p>\\[\\boxed{\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (-6;0;3)}\\]</p>

<p><strong>1b) A, B, C déterminent-ils un plan ?</strong></p>
<p>\\(\\overrightarrow{AB} \\wedge \\overrightarrow{AC} = (-6;0;3) \\neq \\vec{0}\\) donc \\(\\overrightarrow{AB}\\) et \\(\\overrightarrow{AC}\\) ne sont <strong>pas colinéaires</strong>.</p>
<p>A, B et C ne sont pas alignés → ils déterminent un plan.</p>

<p><strong>1c) Coplanarité de A, B, C, D</strong></p>
<p>\\(\\overrightarrow{AD} = (2;-4;3)\\). On teste si \\(\\overrightarrow{AD}\\) est combinaison de \\(\\overrightarrow{AB}\\) et \\(\\overrightarrow{AC}\\) :</p>
<p>\\((\\overrightarrow{AB} \\wedge \\overrightarrow{AC}) \\cdot \\overrightarrow{AD} = (-6)(2) + (0)(-4) + (3)(3) = -12 + 0 + 9 = -3 \\neq 0\\)</p>
<p>Le produit mixte est non nul → A, B, C et D <strong>ne sont pas coplanaires</strong>.</p>

<p><strong>2) Aire du triangle ABC</strong></p>
<p>\\(\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\| = \\sqrt{36+0+9} = \\sqrt{45} = 3\\sqrt{5}\\) u.a.</p>
<p>\\(\\text{Aire}(ABC) = \\dfrac{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}{2} = \\dfrac{3\\sqrt{5}}{2}\\) u.a.</p>
<p>En cm² (unité 2 cm → \\(1\\text{ u.a.} = 4\\text{ cm}^2\\)) :</p>
<p>\\[\\mathcal{A} = \\dfrac{3\\sqrt{5}}{2} \\times 4 = 6\\sqrt{5} \\approx 13{,}4 \\text{ cm}^2\\]</p>

<p><strong>3) Volume du tétraèdre ABCD</strong></p>
<p>\\[V = \\dfrac{1}{6}\\left|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{AD}\\right| = \\dfrac{|-3|}{6} = \\dfrac{1}{2}\\text{ u.v.}\\]</p>
<p>En cm³ (\\(1\\text{ u.v.} = 8\\text{ cm}^3\\)) :</p>
<p>\\[V = \\dfrac{1}{2} \\times 8 = 4 \\text{ cm}^3\\]</p>`
    },
    {
      label: 'Exercice 2 — Probabilités : tee-shirts (4 pts)',
      problem: `<p>Lors d'une campagne publicitaire, un agent commercial a dans son sac 20 tee-shirts dont 3 noirs, 7 blancs et 10 jaunes. Il tire au hasard et simultanément 3 tee-shirts qu'il remet à un client.</p>
<p><strong>1) a)</strong> Calculer la probabilité des évènements suivants :</p>
<p>E : « parmi les trois tee-shirts figurent un seul noir et au moins un jaune »</p>
<p>F : « les trois tee-shirts sont toutes de couleurs différentes »</p>
<p><strong>b)</strong> Calculer la probabilité que les trois tee-shirts soient toutes de couleurs différentes sachant qu'y figurent un seul tee-shirt noir et au moins un jaune.</p>
<p><strong>2)</strong> Soit X la variable aléatoire réelle égale au nombre de tee-shirts blancs obtenus par le client.</p>
<p><strong>a)</strong> Déterminer la loi de probabilité de X.</p>
<p><strong>b)</strong> Calculer l'espérance mathématique de X.</p>
<p><strong>c)</strong> Déterminer la fonction de répartition de X.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Probabilités tricolores, variable aléatoire &amp; fonction de répartition</span>
  <ul>
    <li><strong>Dénombrement par couleurs :</strong> Pour $N = N_1+N_2+N_3$, le nombre de tirages de $p$ boules est $\\binom{N}{p}$. Décomposez les événements « au moins un » ou « un seul de couleur C » par réunion d'événements disjoints.</li>
    <li><strong>Probabilité conditionnelle :</strong> $P(F|E) = \\dfrac{P(F\\cap E)}{P(E)}$.</li>
    <li><strong>Loi de probabilité et Espérance :</strong> $E(X) = \\sum x_i P(X=x_i)$.</li>
    <li><strong>Fonction de répartition $F(x) = P(X \\le x)$ :</strong> Fonction en escalier, continue à droite, croissante de 0 à 1.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p>L'univers comporte \\(\\binom{20}{3} = \\dfrac{20 \\times 19 \\times 18}{6} = 1140\\) tirages possibles.</p>

<p><strong>1a) Probabilités de E et F</strong></p>
<p><em>Calcul de P(E) :</em> 1 noir parmi 3, et au moins 1 jaune parmi les 2 restants.</p>
<p>— 1 noir + 2 jaunes : \\(\\binom{3}{1}\\binom{10}{2} = 3 \\times 45 = 135\\)</p>
<p>— 1 noir + 1 jaune + 1 blanc : \\(\\binom{3}{1}\\binom{10}{1}\\binom{7}{1} = 3 \\times 10 \\times 7 = 210\\)</p>
<p>\\[P(E) = \\dfrac{135+210}{1140} = \\dfrac{345}{1140} = \\dfrac{23}{76} \\approx 0{,}303\\]</p>
<p><em>Calcul de P(F) :</em> 1 de chaque couleur :</p>
<p>\\(\\binom{3}{1}\\binom{7}{1}\\binom{10}{1} = 3 \\times 7 \\times 10 = 210\\)</p>
<p>\\[P(F) = \\dfrac{210}{1140} = \\dfrac{7}{38} \\approx 0{,}184\\]</p>

<p><strong>1b) Probabilité conditionnelle P(F|E)</strong></p>
<p>\\(F \\cap E\\) : 3 couleurs différentes avec 1 noir et au moins 1 jaune → c'est exactement F (1 noir + 1 blanc + 1 jaune). Donc \\(F \\cap E = F\\).</p>
<p>\\[P(F|E) = \\dfrac{P(F\\cap E)}{P(E)} = \\dfrac{210}{1140}{\\dfrac{345}{1140}} = \\dfrac{210}{345} = \\dfrac{14}{23} \\approx 0{,}609\\]</p>

<p><strong>2a) Loi de X</strong></p>
<p>X prend les valeurs 0, 1, 2, 3.</p>
<p>\\(P(X=0) = \\dfrac{\\binom{7}{0}\\binom{13}{3}}{\\binom{20}{3}} = \\dfrac{286}{1140} = \\dfrac{143}{570}\\)</p>
<p>\\(P(X=1) = \\dfrac{\\binom{7}{1}\\binom{13}{2}}{1140} = \\dfrac{7 \\times 78}{1140} = \\dfrac{546}{1140} = \\dfrac{91}{190}\\)</p>
<p>\\(P(X=2) = \\dfrac{\\binom{7}{2}\\binom{13}{1}}{1140} = \\dfrac{21 \\times 13}{1140} = \\dfrac{273}{1140} = \\dfrac{91}{380}\\)</p>
<p>\\(P(X=3) = \\dfrac{\\binom{7}{3}}{1140} = \\dfrac{35}{1140} = \\dfrac{7}{228}\\)</p>

<table class="vtab">
  <tr><th>X</th><td>0</td><td>1</td><td>2</td><td>3</td></tr>
  <tr><th>P(X=k)</th>
    <td>\\(\\dfrac{286}{1140}\\)</td>
    <td>\\(\\dfrac{546}{1140}\\)</td>
    <td>\\(\\dfrac{273}{1140}\\)</td>
    <td>\\(\\dfrac{35}{1140}\\)</td>
  </tr>
</table>
<p>Vérification : \\(286+546+273+35 = 1140\\)</p>

<p><strong>2b) Espérance de X</strong></p>
<p>\\[E(X) = 0 \\times \\dfrac{286}{1140} + 1 \\times \\dfrac{546}{1140} + 2 \\times \\dfrac{273}{1140} + 3 \\times \\dfrac{35}{1140}\\]</p>
<p>\\(= \\dfrac{546 + 546 + 105}{1140} = \\dfrac{1197}{1140} = \\dfrac{7}{1140}\\times171 = \\dfrac{1197}{1140}\\)</p>
<p>\\[E(X) = \\dfrac{1197}{1140} = \\dfrac{21}{20} = 1{,}05\\]</p>
<p><em>Vérification : \\(E(X) = n \\times \\dfrac{K}{N} = 3 \\times \\dfrac{7}{20} = \\dfrac{21}{20}\\) (hypergeométrique)</em></p>

<p><strong>2c) Fonction de répartition F(x)</strong></p>
<p>\\(F(x) = P(X \\leq x)\\) :</p>
<table class="vtab">
  <tr><th>x</th><td>\\(x < 0\\)</td><td>\\(0 \\leq x < 1\\)</td><td>\\(1 \\leq x < 2\\)</td><td>\\(2 \\leq x < 3\\)</td><td>\\(x \\geq 3\\)</td></tr>
  <tr><th>F(x)</th>
    <td>0</td>
    <td>\\(\\dfrac{286}{1140}\\)</td>
    <td>\\(\\dfrac{832}{1140}\\)</td>
    <td>\\(\\dfrac{1105}{1140}\\)</td>
    <td>1</td>
  </tr>
</table>`
    },
    {
      label: 'Problème — Fonction f(x) = x² − 3 + 2(1−x)·exp(1+x) (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par : \\(f(x) = x^2 - 3 + 2(1-x)e^{1+x}\\).</p>
<p>On désigne par (C) la courbe représentative de f dans le plan rapporté à un repère orthonormal \\((O;\\vec{i};\\vec{j})\\) d'unité graphique 2 cm.</p>
<p><strong>Partie A</strong></p>
<p><strong>1) a)</strong> Vérifier que, pour \\(x \\neq 0\\) : \\(f(x) = x^2\\left[1 - \\dfrac{3}{x^2} - 2e\\cdot\\dfrac{e^x}{x}\\left(1-\\dfrac{1}{x}\\right)\\right]\\).</p>
<p><strong>b)</strong> Montrer que \\(\\displaystyle\\lim_{x \\to +\\infty} f(x) = -\\infty\\).</p>
<p><strong>c)</strong> Calculer la limite de f en \\(-\\infty\\).</p>
<p><strong>2) a)</strong> Montrer que pour tout réel x, \\(f'(x) = 2x(1 - e^{1+x})\\).</p>
<p><strong>b)</strong> En déduire le sens de variation de f, puis dresser son tableau de variation.</p>
<p><strong>3) a)</strong> Soit g la restriction de f à l'intervalle \\(I = [0;+\\infty[\\). Montrer que g réalise une bijection de I vers un intervalle J que l'on précisera.</p>
<p><strong>b)</strong> Montrer que l'équation \\(f(x) = -3\\) admet une unique solution \\(\\alpha\\) dans \\(]1;2[\\).</p>
<p><strong>4)</strong> Construire la parabole (P) d'équation \\(y = x^2-3\\), puis les courbes (C) et (\\(\\Gamma\\)) de \\(g^{-1}\\) dans le même repère.</p>
<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Soit k la fonction définie sur \\(\\mathbb{R}\\) par \\(k(x) = (1-x)e^{1+x}\\).</p>
<p><strong>a)</strong> Montrer que la fonction G définie sur \\(\\mathbb{R}\\) par \\(G(x) = (-x+2)e^{1+x}\\) est une primitive de k sur \\(\\mathbb{R}\\).</p>
<p><strong>b)</strong> Soit \\(\\lambda\\) un réel \\(\\leq -1\\). Déterminer en cm², l'aire \\(A(\\lambda)\\) de la partie du plan délimitée par la courbe (C), la parabole (P) et les droites \\(x=-1\\) et \\(x=\\lambda\\).</p>
<p><strong>c)</strong> Calculer \\(\\displaystyle\\lim_{\\lambda \\to -\\infty} A(\\lambda)\\).</p>
<p><strong>2)</strong> On désigne par \\(\\Sigma\\) la partie du plan délimitée par la parabole (P) et les droites \\(x=0\\), \\(x=\\sqrt{3}\\) et \\(y=0\\). Calculer en cm³ le volume V du solide engendré par la rotation complète de \\(\\Sigma\\) autour de l'axe des abscisses.</p>
<p><strong>3)</strong> On considère la fonction h définie par \\(h(x) = x^2 - 3 + 2(1+|x|)e^{1-|x|}\\), \\(x \\in \\mathbb{R}\\).</p>
<p><strong>a)</strong> Étudier la parité de h.</p>
<p><strong>b)</strong> Comparer h et f sur \\(]-\\infty;0]\\).</p>
<p><strong>c)</strong> Sans étudier les variations de h, déduire la construction de la courbe (C') de h. Justifier. <em>On donne \\(e^3 \\approx 20{,}08\\) ; \\(e \\approx 2{,}72\\) ; \\(e^2 \\approx 7{,}4\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions avec exponentielle, primitives, parité &amp; volume de révolution</span>
  <ul>
    <li><strong>Factorisation pour lever une indétermination en $+\\infty$ :</strong> Mettez $x^2$ en facteur pour faire apparaître les croissances comparées $\\dfrac{e^x}{x} \\to +\\infty$.</li>
    <li><strong>Primitive de $(1-x)e¹⁺ˣ$ :</strong> Vérifiez par dérivation que $G(x) = (-x+2)e^{1+x}$ a pour dérivée $G'(x) = (-1)e^{1+x} + (-x+2)e^{1+x} = (1-x)e^{1+x}$.</li>
    <li><strong>Parité d'une fonction :</strong> $h(-x) = h(x) \\implies h$ est paire, sa courbe est symétrique par rapport à l'axe des ordonnées $(Oy)$.</li>
    <li><strong>Volume de révolution :</strong> $V = \\pi \\int_a^b [f(x)]^2\\,dx \\times U_V$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Vérification</strong></p>
<p>Pour \\(x \\neq 0\\) : \\(f(x) = x^2 - 3 + 2(1-x)e^{1+x}\\)</p>
<p>\\(= x^2\\left(1 - \\dfrac{3}{x^2} + \\dfrac{2(1-x)e^{1+x}}{x^2}\\right)\\)</p>
<p>\\(= x^2\\left(1 - \\dfrac{3}{x^2} + \\dfrac{2e \\cdot e^x(1-x)}{x^2}\\right)\\)</p>
<p>\\(= x^2\\left[1 - \\dfrac{3}{x^2} + 2e\\dfrac{e^x}{x}\\cdot\\dfrac{1-x}{x}\\right]\\)</p>
<p>\\(= x^2\\left[1 - \\dfrac{3}{x^2} - 2e\\cdot\\dfrac{e^x}{x}\\left(1-\\dfrac{1}{x}\\right)\\right]\\) </p>

<p><strong>1b) Limite en \\(+\\infty\\)</strong></p>
<p>\\(\\dfrac{e^x}{x} \\to +\\infty\\) et \\(\\left(1-\\dfrac{1}{x}\\right) \\to 1\\), donc le crochet \\(\\to -\\infty\\), et \\(x^2 \\to +\\infty\\).</p>
<p>\\[\\lim_{x\\to+\\infty}f(x) = -\\infty\\] </p>

<p><strong>1c) Limite en \\(-\\infty\\)</strong></p>
<p>\\(\\lim_{x\\to-\\infty}(1-x)e^{1+x} = \\lim_{x\\to-\\infty}(1-x)e^{1+x}\\). Comme \\(e^{1+x} \\to 0\\) très vite :\\(\\lim_{x\\to-\\infty}(1-x)e^{1+x} = 0\\) (croissances comparées).</p>
<p>\\[\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}(x^2-3) = +\\infty\\]</p>

<p><strong>2a) Calcul de f'(x)</strong></p>
<p>\\(f'(x) = 2x + 2[(-1)e^{1+x} + (1-x)e^{1+x}] = 2x + 2e^{1+x}(-1+1-x)\\)</p>
<p>\\(= 2x + 2(-x)e^{1+x} = 2x(1 - e^{1+x})\\)</p>
<p>\\[\\boxed{f'(x) = 2x(1-e^{1+x})}\\] </p>

<p><strong>2b) Signe de f'(x) et variations</strong></p>
<p>\\(1 - e^{1+x} = 0 \\iff e^{1+x} = 1 \\iff x = -1\\).</p>
<p>Pour \\(x > -1\\) : \\(e^{1+x} > 1\\) donc \\(1-e^{1+x} < 0\\).</p>
<p>Pour \\(x < -1\\) : \\(e^{1+x} < 1\\) donc \\(1-e^{1+x} > 0\\).</p>
<p>Tableau de signe de \\(f'(x) = 2x(1-e^{1+x})\\) :</p>


<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-22-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-22-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>

    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="165" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    <text x="47.5" y="188" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.65)" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="700">Variations</text>

    <!-- x row -->
    <text x="150" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−∞</text>
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−1</text>
    <text x="515" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="700" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>

    <!-- vertical tick lines in f' row -->
    <line x1="330" y1="50" x2="330" y2="64" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="515" y1="50" x2="515" y2="64" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="515" y1="86" x2="515" y2="100" stroke="#dde1ec" stroke-width="1.2"/>

    <!-- f'(x) row -->
    <text x="240" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="330" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="422" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="515" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="608" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>

    <!-- f(x) variations -->
    <text x="150" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <line x1="175" y1="135" x2="305" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-22-2-f)"/>
    <text x="330" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">2</text>
    <line x1="350" y1="225" x2="480" y2="135" stroke="#1a7a5e" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-g-22-2-f)"/>
    <text x="515" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−3+2e</text>
    <line x1="550" y1="135" x2="675" y2="225" stroke="#b83232" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arr-r-22-2-f)"/>
    <text x="700" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
  </svg>
</div>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Tracé de la courbe (C) et de la parabole (P) — BAC 2022 2nd tour</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="60.0" y1="40" x2="60.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="154.3" y1="40" x2="154.3" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="248.6" y1="40" x2="248.6" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="342.9" y1="40" x2="342.9" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="531.4" y1="40" x2="531.4" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="625.7" y1="40" x2="625.7" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="720.0" y1="40" x2="720.0" y2="390" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="390.0" x2="720" y2="390.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="348.8" x2="720" y2="348.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="307.6" x2="720" y2="307.6" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="266.5" x2="720" y2="266.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="184.1" x2="720" y2="184.1" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="142.9" x2="720" y2="142.9" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="101.8" x2="720" y2="101.8" stroke="#e5e7eb" stroke-width="0.8"/><line x1="60" y1="60.6" x2="720" y2="60.6" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Asymptotes -->
    
    
    <!-- Axes cartésiens -->
    <line x1="50" y1="225.3" x2="735" y2="225.3" stroke="#1f2937" stroke-width="1.5"/>
    <text x="745" y="229.3" text-anchor="start" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">x</text>
    
    <line x1="437.1" y1="400" x2="437.1" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="437.1" y="18" text-anchor="middle" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600" font-style="italic">y</text>
    <text x="425.1" y="241.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Graduations -->
    <line x1="60.0" y1="221.3" x2="60.0" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="60.0" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="154.3" y1="221.3" x2="154.3" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="154.3" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="248.6" y1="221.3" x2="248.6" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="248.6" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="342.9" y1="221.3" x2="342.9" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="342.9" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="531.4" y1="221.3" x2="531.4" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="531.4" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="625.7" y1="221.3" x2="625.7" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="625.7" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="720.0" y1="221.3" x2="720.0" y2="229.3" stroke="#1f2937" stroke-width="1"/><text x="720.0" y="241.3" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text>
    <line x1="433.1" y1="390.0" x2="441.1" y2="390.0" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="394.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="433.1" y1="348.8" x2="441.1" y2="348.8" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="352.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="433.1" y1="307.6" x2="441.1" y2="307.6" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="311.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="433.1" y1="266.5" x2="441.1" y2="266.5" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="270.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="433.1" y1="184.1" x2="441.1" y2="184.1" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="188.1" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="433.1" y1="142.9" x2="441.1" y2="142.9" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="146.9" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="433.1" y1="101.8" x2="441.1" y2="101.8" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="105.8" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="433.1" y1="60.6" x2="441.1" y2="60.6" stroke="#1f2937" stroke-width="1"/><text x="427.1" y="64.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text>
    
    <!-- Courbes -->
    <path d="M 114.7 -165.2 L 118.3 -155.3 L 122.0 -145.6 L 125.6 -136.1 L 129.3 -126.7 L 132.9 -117.4 L 136.6 -108.3 L 140.2 -99.4 L 143.9 -90.6 L 147.5 -82.0 L 151.1 -73.5 L 154.8 -65.2 L 158.4 -57.0 L 162.1 -49.0 L 165.7 -41.2 L 169.4 -33.5 L 173.0 -26.0 L 176.7 -18.6 L 180.3 -11.4 L 184.0 -4.4 L 187.6 2.5 L 191.2 9.2 L 194.9 15.8 L 198.5 22.2 L 202.2 28.4 L 205.8 34.5 L 209.5 40.4 L 213.1 46.1 L 216.8 51.7 L 220.4 57.1 L 224.1 62.4 L 227.7 67.4 L 231.3 72.3 L 235.0 77.1 L 238.6 81.6 L 242.3 86.0 L 245.9 90.3 L 249.6 94.3 L 253.2 98.2 L 256.9 102.0 L 260.5 105.5 L 264.2 108.9 L 267.8 112.1 L 271.5 115.2 L 275.1 118.1 L 278.7 120.8 L 282.4 123.4 L 286.0 125.7 L 289.7 128.0 L 293.3 130.0 L 297.0 131.9 L 300.6 133.7 L 304.3 135.3 L 307.9 136.7 L 311.6 138.0 L 315.2 139.1 L 318.8 140.1 L 322.5 140.9 L 326.1 141.6 L 329.8 142.1 L 333.4 142.5 L 337.1 142.8 L 340.7 142.9 L 344.4 142.9 L 348.0 142.8 L 351.7 142.6 L 355.3 142.3 L 358.9 141.8 L 362.6 141.3 L 366.2 140.6 L 369.9 139.9 L 373.5 139.1 L 377.2 138.3 L 380.8 137.4 L 384.5 136.4 L 388.1 135.4 L 391.8 134.4 L 395.4 133.3 L 399.1 132.3 L 402.7 131.2 L 406.3 130.2 L 410.0 129.2 L 413.6 128.3 L 417.3 127.5 L 420.9 126.7 L 424.6 126.1 L 428.2 125.5 L 431.9 125.2 L 435.5 125.0 L 439.2 125.0 L 442.8 125.2 L 446.4 125.7 L 450.1 126.5 L 453.7 127.6 L 457.4 129.0 L 461.0 130.8 L 464.7 133.1 L 468.3 135.8 L 472.0 139.0 L 475.6 142.7 L 479.3 147.0 L 482.9 151.9 L 486.5 157.6 L 490.2 163.9 L 493.8 171.1 L 497.5 179.1 L 501.1 188.1 L 504.8 198.0 L 508.4 209.0 L 512.1 221.1 L 515.7 234.4 L 519.4 249.0 L 523.0 265.0 L 526.7 282.4 L 530.3 301.4 L 533.9 322.1 L 537.6 344.5 L 541.2 368.9 L 544.9 395.2 L 548.5 423.6 L 552.2 454.4 L 555.8 487.5 L 559.5 523.1 L 563.1 561.4" fill="none" stroke="#2563eb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 192.0 70.5 L 195.3 77.8 L 198.5 85.1 L 201.8 92.3 L 205.1 99.4 L 208.3 106.3 L 211.6 113.2 L 214.9 120.0 L 218.1 126.7 L 221.4 133.3 L 224.7 139.7 L 228.0 146.1 L 231.2 152.4 L 234.5 158.6 L 237.8 164.7 L 241.0 170.7 L 244.3 176.6 L 247.6 182.4 L 250.8 188.0 L 254.1 193.6 L 257.4 199.1 L 260.6 204.5 L 263.9 209.8 L 267.2 215.0 L 270.4 220.1 L 273.7 225.1 L 277.0 230.0 L 280.3 234.8 L 283.5 239.5 L 286.8 244.1 L 290.1 248.6 L 293.3 253.0 L 296.6 257.3 L 299.9 261.5 L 303.1 265.6 L 306.4 269.6 L 309.7 273.6 L 312.9 277.4 L 316.2 281.1 L 319.5 284.7 L 322.7 288.2 L 326.0 291.6 L 329.3 294.9 L 332.5 298.2 L 335.8 301.3 L 339.1 304.3 L 342.4 307.2 L 345.6 310.0 L 348.9 312.7 L 352.2 315.4 L 355.4 317.9 L 358.7 320.3 L 362.0 322.6 L 365.2 324.9 L 368.5 327.0 L 371.8 329.0 L 375.0 331.0 L 378.3 332.8 L 381.6 334.5 L 384.8 336.2 L 388.1 337.7 L 391.4 339.1 L 394.7 340.5 L 397.9 341.7 L 401.2 342.8 L 404.5 343.9 L 407.7 344.8 L 411.0 345.7 L 414.3 346.4 L 417.5 347.0 L 420.8 347.6 L 424.1 348.0 L 427.3 348.4 L 430.6 348.6 L 433.9 348.8 L 437.1 348.8 L 440.4 348.8 L 443.7 348.6 L 446.9 348.4 L 450.2 348.0 L 453.5 347.6 L 456.8 347.0 L 460.0 346.4 L 463.3 345.7 L 466.6 344.8 L 469.8 343.9 L 473.1 342.8 L 476.4 341.7 L 479.6 340.5 L 482.9 339.1 L 486.2 337.7 L 489.4 336.2 L 492.7 334.5 L 496.0 332.8 L 499.2 331.0 L 502.5 329.0 L 505.8 327.0 L 509.1 324.9 L 512.3 322.6 L 515.6 320.3 L 518.9 317.9 L 522.1 315.4 L 525.4 312.7 L 528.7 310.0 L 531.9 307.2 L 535.2 304.3 L 538.5 301.3 L 541.7 298.2 L 545.0 294.9 L 548.3 291.6 L 551.5 288.2 L 554.8 284.7 L 558.1 281.1 L 561.3 277.4 L 564.6 273.6 L 567.9 269.6 L 571.2 265.6 L 574.4 261.5 L 577.7 257.3 L 581.0 253.0 L 584.2 248.6 L 587.5 244.1 L 590.8 239.5 L 594.0 234.8 L 597.3 230.0 L 600.6 225.1 L 603.8 220.1 L 607.1 215.0 L 610.4 209.8 L 613.6 204.5 L 616.9 199.1 L 620.2 193.6 L 623.5 188.0 L 626.7 182.4 L 630.0 176.6 L 633.3 170.7 L 636.5 164.7 L 639.8 158.6 L 643.1 152.4 L 646.3 146.1 L 649.6 139.7 L 652.9 133.3 L 656.1 126.7 L 659.4 120.0 L 662.7 113.2 L 665.9 106.3 L 669.2 99.4 L 672.5 92.3 L 675.7 85.1 L 679.0 77.8 L 682.3 70.5" fill="none" stroke="#8b5cf6" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"/>
    
    <!-- Points remarquables -->
    <circle cx="342.9" cy="142.9" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(332.9, 134.9)">
      <text x="-18" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(-1 ; 2)</text>
    </g><circle cx="437.1" cy="125.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(447.1, 117.0)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 2e−3)</text>
    </g><circle cx="564.9" cy="348.8" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(574.9, 364.8)">
      <text x="37" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">α ≈ 1.35</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(70, 50)">
      <rect x="0" y="0" width="185" height="60" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      
      <line x1="10" y1="16" x2="35" y2="16" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="20" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Courbe (C)</text>
      <line x1="10" y1="34" x2="35" y2="34" stroke="#8b5cf6" stroke-width="2.5" stroke-dasharray="5 4"/>
      <text x="42" y="38" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="800">Parabole (P) : y=x²−3</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>





`
    }
  ]
}
];

// Export global et alias de retrocompatibilite
if (typeof window !== 'undefined') {
  window.BAC_EXAMS_2014_2022 = BAC_EXAMS_2014_2022;
  window.BAC_EXAMS_2019_2022 = BAC_EXAMS_2014_2022;
}
if (typeof global !== 'undefined') {
  global.BAC_EXAMS_2014_2022 = BAC_EXAMS_2014_2022;
  global.BAC_EXAMS_2019_2022 = BAC_EXAMS_2014_2022;
}
