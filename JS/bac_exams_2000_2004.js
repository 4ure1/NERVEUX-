// ══════════════════════════════════════════════════════════════════
//  NERVEUX — Corrigés BAC Terminale D — Burkina Faso
// ══════════════════════════════════════════════════════════════════
// Années 2000–2004

const BAC_EXAMS_2000_2004 = [
{
  id: 'bac-2000-D-normale',
  year: 2000,
  series: 'D',
  tour: 'Session Normale',
  topics: ['Statistiques', 'Nombres complexes', 'Fonctions ln', 'Intégrales'],
  parts: [
    {
      label: 'Exercice I — Statistiques (4 pts)',
      problem: `<p>Le tableau suivant donne pour chaque année, le nombre de naissances enregistrées dans une Mairie :</p>
<table class="vtab">
  <tr>
    <th>Années</th>
    <td>1988</td><td>1990</td><td>1992</td><td>1994</td><td>1996</td><td>1998</td>
  </tr>
  <tr>
    <th>Rang \\(x_i\\)</th>
    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
  </tr>
  <tr>
    <th>Naissances \\(y_i\\)</th>
    <td>374</td><td>A</td><td>334</td><td>312</td><td>B</td><td>266</td>
  </tr>
</table>
<p>La droite d'ajustement obtenue par la méthode de Mayer est : \\(y = -22x + 397\\).</p>
<p><strong>1)</strong> Estimer le nombre de naissances lors de l'année 1995.</p>
<p><strong>2)</strong> On suppose que l'évolution reste semblable au cours des années à venir.</p>
<p><strong>a)</strong> Quel sera le nombre de naissances au cours de l'année 2000 ?</p>
<p><strong>b)</strong> À partir de quelle année y aura-t-il deux fois moins de naissances qu'en 1988 ?</p>
<p><strong>3)</strong> Déterminer A et B.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Statistiques &amp ; Droite d'ajustement</span>
  <ul>
    <li><strong>Droite de Mayer :</strong> On divise la série en deux sous-groupes de mêmes effectifs. On calcule les points moyens $G_1(\\bar{x}_1 ; \\bar{y}_1)$ et $G_2(\\bar{x}_2 ; \\bar{y}_2)$, puis la droite passe par ces deux points.</li>
    <li><strong>Équation de la droite :</strong> $y = ax + b$ où $a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}$ et $b = \\bar{y}_1 - a\\bar{x}_1$.</li>
    <li><strong>Prévision :</strong> Pour un rang $x$ donné, on lit $y = ax + b$ sur la droite d'ajustement.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p><strong>1) Naissances en 1995</strong></p>
<p>1995 est entre les rangs 4 et 5, donc \\(x = \\dfrac{4+5}{2} = 4{,}5\\).</p>
<p>\\[y(4{,}5) = -22 \\times 4{,}5 + 397 = -99 + 397 = 298\\]</p>
<p> On peut estimer à <strong>298 naissances</strong> en 1995.</p>

<p><strong>2) a) Naissances en 2000</strong></p>
<p>L'année 2000 correspond au rang \\(x = 7\\) (la séquence commence en 1988 de rang 1, par pas de 2 ans).</p>
<p>\\[y(7) = -22 \\times 7 + 397 = -154 + 397 = 243\\]</p>
<p> <strong>243 naissances</strong> en 2000.</p>

<p><strong>2) b) Deux fois moins de naissances qu'en 1988</strong></p>
<p>En 1988, \\(y = 374\\). On cherche quand \\(y \\leq \\dfrac{374}{2} = 187\\).</p>
<p>\\[-22x + 397 \\leq 187 \\iff -22x \\leq -210 \\iff x \\geq \\dfrac{210}{22} \\approx 9{,}54\\]</p>
<p>Donc \\(x = 10\\), ce qui correspond à l'année \\(1986 + 2 \\times 10 = 2006\\).</p>
<p> C'est à partir de <strong>2006</strong> qu'il y aura deux fois moins de naissances.</p>

<p><strong>3) Détermination de A et B</strong></p>
<p>\\(x = 2\\) pour 1990 : \\(A = -22 \\times 2 + 397 = 353\\)</p>
<p>\\(x = 5\\) pour 1996 : \\(B = -22 \\times 5 + 397 = 287\\)</p>
<p> \\(A = 353\\) et \\(B = 287\\).</p>`
    },
    {
      label: 'Exercice II — Nombres complexes (4 pts)',
      problem: `<p>Dans le plan muni d'un repère orthonormé \\((O;\\vec{u},\\vec{v})\\), on donne les points A et B d'affixes :</p>
<p>\\[Z_A = 2 + 2i \\quad \\text{et} \\quad Z_B = (1+\\sqrt{3}) + i(3+\\sqrt{3})\\]</p>
<p><strong>1)</strong> Écrire le nombre complexe \\(Z = \\dfrac{Z_A}{Z_B}\\) sous forme algébrique.</p>
<p><strong>2) a)</strong> Déterminer OA et AB. Vérifier que \\(OB = 2(1+\\sqrt{3})\\).</p>
<p><strong>b)</strong> Déterminer en radians la mesure principale de \\((\\vec{u};\\overrightarrow{OA})\\) et de \\((\\vec{u};\\overrightarrow{OB})\\). En déduire une mesure en radians de l'angle \\((\\overrightarrow{OA};\\overrightarrow{OB})\\).</p>
<p><strong>3)</strong> En utilisant les questions précédentes, donner les valeurs exactes de \\(\\cos\\dfrac{\\pi}{12}\\) et \\(\\sin\\dfrac{\\pi}{12}\\).</p>
<p><strong>4) a)</strong> Déterminer l'affixe du point D image de A dans la rotation de centre O et d'angle \\(\\alpha = 2(\\overrightarrow{OA};\\overrightarrow{OB})\\).</p>
<p><strong>b)</strong> Quelle est la nature du quadrilatère OABD ? Justifier. (On prendra \\(\\sqrt{3} \\approx 1{,}7\\).)</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Nombres complexes &amp ; argument</span>
  <ul>
    <li><strong>Module :</strong> $|z| = |x + iy| = \\sqrt{x^2 + y^2}$. Distance à l'origine dans le plan complexe.</li>
    <li><strong>Argument :</strong> $\\arg(z) = \\theta$ tel que $z = r e^{i\\theta}$ (forme exponentielle), avec $r = |z|$.</li>
    <li><strong>Quotient :</strong> $\\arg\\!\\left(\\dfrac{z_A}{z_B}\\right) = \\arg(z_A) - \\arg(z_B)$, ce qui donne l'angle $\\widehat{(\\overrightarrow{OB};\\overrightarrow{OA})}$.</li>
    <li><strong>Forme algébrique :</strong> $\\dfrac{a+ib}{c+id} = \\dfrac{(a+ib)(c-id)}{c^2+d^2}$ (multiplication par le conjugué).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p><strong>1) Forme algébrique de \\(Z = \\dfrac{Z_A}{Z_B}\\)</strong></p>
<p>On multiplie par le conjugué de \\(Z_B\\) :</p>
<p>\\[Z = \\dfrac{(2+2i)\\overline{Z_B}}{|Z_B|^2} = \\dfrac{(2+2i)[(1+\\sqrt{3})-i(3+\\sqrt{3})]}{(1+\\sqrt{3})^2+(3+\\sqrt{3})^2}\\]</p>
<p>Le dénominateur vaut \\(1+2\\sqrt{3}+3+9+6\\sqrt{3}+3 = 16+8\\sqrt{3}\\).</p>
<p>Le numérateur :\\[(2+2i)(1+\\sqrt{3}) - i(2+2i)(3+\\sqrt{3})\\]
\\[= 2+2\\sqrt{3}+2i+2i\\sqrt{3} - (6i+2i\\sqrt{3}-6+2\\sqrt{3}) \\cdot (-1)\\cdot(-1)\\]</p>
<p>Après développement et simplification :</p>
<p>\\[\\boxed{Z = \\dfrac{1}{2} + i\\left(\\dfrac{\\sqrt{3}-2}{2}\\right)}\\]</p>

<p><strong>2) a) Calcul de OA, AB et vérification de OB</strong></p>
<p>\\[OA = |Z_A| = |2+2i| = \\sqrt{4+4} = 2\\sqrt{2}\\]</p>
<p>\\[AB = |Z_B - Z_A| = |(-1+\\sqrt{3})+i(1+\\sqrt{3})| = \\sqrt{(-1+\\sqrt{3})^2+(1+\\sqrt{3})^2} = \\sqrt{8} = 2\\sqrt{2}\\]</p>
<p>\\[OB = |Z_B| = \\sqrt{(1+\\sqrt{3})^2+(3+\\sqrt{3})^2} = \\sqrt{16+8\\sqrt{3}} = 2\\sqrt{4+2\\sqrt{3}} = 2\\sqrt{(1+\\sqrt{3})^2} = 2(1+\\sqrt{3})\\]</p>
<p> Vérifié.</p>

<p><strong>2) b) Arguments et angle</strong></p>
<p>\\[(\\vec{u};\\overrightarrow{OA}) = \\arg(Z_A) = \\arg(2+2i) = \\dfrac{\\pi}{4}\\]</p>
<p>Pour \\(Z_B\\) : \\(\\cos\\theta = \\dfrac{1+\\sqrt{3}}{2(1+\\sqrt{3})} = \\dfrac{1}{2}\\) et \\(\\sin\\theta = \\dfrac{3+\\sqrt{3}}{2(1+\\sqrt{3})} = \\dfrac{\\sqrt{3}}{2}\\), donc \\(\\theta = \\dfrac{\\pi}{3}\\).</p>
<p>\\[(\\overrightarrow{OA};\\overrightarrow{OB}) = -\\dfrac{\\pi}{4} + \\dfrac{\\pi}{3} = \\boxed{\\dfrac{\\pi}{12}}\\]</p>

<p><strong>3) Valeurs exactes de \\(\\cos\\dfrac{\\pi}{12}\\) et \\(\\sin\\dfrac{\\pi}{12}\\)</strong></p>
<p>On a \\(\\arg(Z) = -\\dfrac{\\pi}{12}\\) et \\(|Z| = \\dfrac{OA}{OB} = \\dfrac{2\\sqrt{2}}{2(1+\\sqrt{3})} = \\dfrac{\\sqrt{6}-\\sqrt{2}}{2}\\).</p>
<p>Par identification des formes trigonométrique et algébrique de Z :</p>
<p>\\[\\boxed{\\cos\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}} \\qquad \\boxed{\\sin\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{6}-\\sqrt{2}}{4}}\\]</p>

<p><strong>4) a) Affixe de D</strong></p>
<p>\\(\\alpha = 2 \\times \\dfrac{\\pi}{12} = \\dfrac{\\pi}{6}\\)</p>
<p>\\[Z_D = e^{i\\dfrac{\\pi}{6}} \\cdot Z_A = \\left(\\dfrac{\\sqrt{3}}{2}+\\dfrac{i}{2}\\right)(2+2i) = \\sqrt{3}+i\\sqrt{3}+i-1\\]</p>
<p>\\[\\boxed{Z_D = (\\sqrt{3}-1)+i(1+\\sqrt{3})}\\]</p>

<p><strong>4) b) Nature du quadrilatère OABD</strong></p>
<p>D est l'image de A par une rotation de centre O, donc \\(OD = OA = 2\\sqrt{2}\\).</p>
<p>D'après 2)a) \\(OA = AB = 2\\sqrt{2}\\), et \\(BD = |Z_D - Z_B| = |{-2-2i}| = 2\\sqrt{2}\\).</p>
<p>Ainsi \\(OA = AB = OD = BD = 2\\sqrt{2}\\) : les quatre côtés sont égaux.</p>
<p> <strong>OABD est un losange.</strong></p>`
    },
    {
      label: 'Problème — Fonctions ln, variations et encadrement d\'aire (12 pts)',
      problem: `<p><strong>Partie A</strong></p>
<p>Soit la fonction g définie sur \\(]1;+\\infty[\\) par \\(g(x) = \\dfrac{x}{2x-1} - \\ln(x-1)\\).</p>
<p><strong>1)</strong> Étudier le sens de variation de g.</p>
<p><strong>2) a)</strong> Montrer que l'équation \\(g(x)=0\\) a une unique solution \\(\\alpha\\) dans \\(]1;+\\infty[\\).</p>
<p><strong>b)</strong> Montrer que \\(2 < \\alpha < 3\\).</p>
<p><strong>3)</strong> En déduire le signe de g sur \\(]1;+\\infty[\\).</p>

<p><strong>Partie B</strong></p>
<p>On considère la fonction f sur \\(]1;+\\infty[\\) par \\(f(x) = \\dfrac{2\\ln(x-1)}{x^2-x}\\). Soit (C) la courbe représentative dans un repère \\((O;\\vec{i},\\vec{j})\\) — unité : 2 cm sur \\((x'Ox)\\) et 4 cm sur \\((y'Oy)\\).</p>
<p><strong>1)</strong> Calculer les limites de f en 1 et en \\(+\\infty\\). Interpréter les résultats.</p>
<p><strong>2) a)</strong> Montrer que pour tout \\(x \\in ]1;+\\infty[\\) :</p>
<p>\\[f'(x) = \\dfrac{2(2x-1)}{(x^2-x)^2} \\times g(x)\\]</p>
<p>En déduire les variations de f.</p>
<p><strong>b)</strong> Montrer que \\(f(\\alpha) = \\dfrac{2\\alpha}{(\\alpha-1)(2\\alpha-1)}\\) et dresser le tableau de variation de f.</p>
<p><strong>3)</strong> Construire la courbe (C).</p>

<p><strong>Partie C</strong></p>
<p>On se propose de donner un encadrement de l'aire A (en cm²) de l'ensemble des points \\(M(x;y)\\) tels que \\(2 \\leq x \\leq \\dfrac{5}{2}\\) et \\(0 \\leq y \\leq f(x)\\).</p>
<p><strong>1) a)</strong> Montrer que pour tout \\(x \\geq 2\\) :</p>
<p>\\[\\dfrac{1}{(x-1)^2} \\leq \\dfrac{2}{x^2-x} \\leq \\dfrac{1}{x-1}\\]</p>
<p><strong>b)</strong> En déduire que pour tout \\(x \\geq 2\\) :</p>
<p>\\[\\dfrac{\\ln(x-1)}{(x-1)^2} \\leq f(x) \\leq \\dfrac{\\ln(x-1)}{x-1}\\]</p>
<p><strong>2) a)</strong> Calculer \\(I = \\displaystyle\\int_2^{\\dfrac{5}{2}} \\dfrac{\\ln(x-1)}{x-1}\\,dx\\).</p>
<p><strong>b)</strong> En utilisant une intégration par parties, calculer \\(J = \\displaystyle\\int_2^{\\dfrac{5}{2}} \\dfrac{\\ln(x-1)}{(x-1)^2}\\,dx\\).</p>
<p><strong>3) a)</strong> Déduire un encadrement de \\(K = \\displaystyle\\int_2^{\\dfrac{5}{2}} f(x)\\,dx\\).</p>
<p><strong>b)</strong> Exprimer A en fonction de K, puis en déduire un encadrement de A.</p>
<p><em>On donne : \\(\\ln 2 = 0{,}69\\), \\(\\ln 3 = 1{,}09\\), \\(\\alpha = 2{,}85\\) et \\(f(\\alpha) = 0{,}25\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions logarithme &amp ; tableau de variations</span>
  <ul>
    <li><strong>Dérivée :</strong> $(\\ln u)' = \\dfrac{u'}{u}$. En particulier $\\left(\\ln(x-a)\\right)' = \\dfrac{1}{x-a}$.</li>
    <li><strong>Limites classiques :</strong> $\\lim_{x \\to +\\infty} \\ln x = +\\infty$, $\\lim_{x \\to 0^+} \\ln x = -\\infty$, $\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$.</li>
    <li><strong>Tableau de variations :</strong> On étudie le signe de $f'(x)$ : si $f' > 0$ alors $f$ est croissante, si $f' < 0$ alors $f$ est décroissante.</li>
    <li><strong>Encadrement :</strong> Sur un intervalle $[a;b]$, si $m \\leq f(x) \\leq M$, on peut en déduire des encadrements de $\\ln$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Sens de variation de g</strong></p>
<p>\\[g'(x) = \\dfrac{2x-1-2x}{(2x-1)^2} - \\dfrac{1}{x-1} = \\dfrac{-1}{(2x-1)^2} - \\dfrac{1}{x-1}\\]</p>
<p>\\[g'(x) = \\dfrac{-(x-1)-(2x-1)^2}{(x-1)(2x-1)^2} = \\dfrac{-4x^2+3x}{(x-1)(2x-1)^2}\\]</p>
<p>Sur \\(]1;+\\infty[\\), \\((x-1)>0\\) et \\((2x-1)^2>0\\). Pour \\(x>1\\), \\(-4x^2+3x < 0\\) (le polynôme \\(-4x^2+3x\\) a ses racines en 0 et 3/4, toutes deux inférieures à 1).</p>
<p> Donc \\(g'(x) < 0\\) sur \\(]1;+\\infty[\\) : <strong>g est strictement décroissante</strong>.</p>

<p><strong>2) a) Unicité de \\(\\alpha\\)</strong></p>
<p>g est continue et strictement décroissante sur \\(]1;+\\infty[\\). De plus :\\(\\lim_{x\\to1^+}g(x) = +\\infty\\) et \\(\\lim_{x\\to+\\infty}g(x) = -\\infty\\).</p>
<p>Donc g réalise une bijection de \\(]1;+\\infty[\\) sur \\(\\mathbb{R}\\). Comme \\(0\\in\\mathbb{R}\\), l'équation \\(g(x)=0\\) admet une unique solution \\(\\alpha\\). </p>

<p><strong>2) b) Encadrement de \\(\\alpha\\)</strong></p>
<p>\\(g(2) = \\dfrac{2}{3} - \\ln 1 = \\dfrac{2}{3} > 0\\)</p>
<p>\\(g(3) = \\dfrac{3}{5} - \\ln 2 \\approx 0{,}6 - 0{,}69 < 0\\)</p>
<p>\\(g(2)\\times g(3) < 0\\), donc par le TVI \\(\\boxed{2 < \\alpha < 3}\\). </p>

<p><strong>3) Signe de g</strong></p>
<p>g étant décroissante : \\(g(x) > 0\\) sur \\(]1;\\alpha[\\) et \\(g(x) < 0\\) sur \\(]\\alpha;+\\infty[\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1) Limites de f</strong></p>
<p>\\(\\lim_{x\\to1^+}f(x) = \\lim_{x\\to1^+}\\dfrac{2\\ln(x-1)}{x^2-x}\\) : le numérateur tend vers \\(-\\infty\\) et le dénominateur vers \\(0^+\\), donc \\(\\lim_{x\\to1^+}f(x) = -\\infty\\).</p>
<p>→ La droite \\(x=1\\) est asymptote verticale à (C).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}\\dfrac{2}{x}\\cdot\\dfrac{\\ln(x-1)}{x-1} = 0\\).</p>
<p>→ La droite \\(y=0\\) est asymptote horizontale à (C).</p>

<p><strong>2) a) Calcul de f'(x)</strong></p>
<p>\\[f'(x) = \\dfrac{\\dfrac{2}{x-1}(x^2-x) - 2(2x-1)\\ln(x-1)}{(x^2-x)^2} = \\dfrac{2(2x-1)\\left[\\dfrac{x}{2x-1}-\\ln(x-1)\\right]}{(x^2-x)^2}\\]</p>
<p>Or \\(\\dfrac{x}{2x-1}-\\ln(x-1) = g(x)\\), donc \\(f'(x) = \\dfrac{2(2x-1)}{(x^2-x)^2}\\times g(x)\\). </p>
<p>Comme \\(\\dfrac{2(2x-1)}{(x^2-x)^2} > 0\\), le signe de \\(f'(x)\\) est celui de \\(g(x)\\) : f est <strong>croissante sur \\(]1;\\alpha[\\)</strong> et <strong>décroissante sur \\(]\\alpha;+\\infty[\\)</strong>.</p>

<p><strong>2) b) Calcul de f(α)</strong></p>
<p>\\(g(\\alpha)=0 \\iff \\ln(\\alpha-1) = \\dfrac{\\alpha}{2\\alpha-1}\\).</p>
<p>\\[f(\\alpha) = \\dfrac{2\\ln(\\alpha-1)}{\\alpha^2-\\alpha} = \\dfrac{\\dfrac{2\\alpha}{2\\alpha-1}}{\\alpha(\\alpha-1)} = \\dfrac{2\\alpha}{(\\alpha-1)(2\\alpha-1)}\\] </p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2000" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2000" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <!-- Ligne x -->
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">α</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    
    <!-- Double barre en 1 -->
    <line x1="142" y1="50" x2="142" y2="260" stroke="#b83232" stroke-width="2"/>
    <line x1="148" y1="50" x2="148" y2="260" stroke="#b83232" stroke-width="2"/>
    
    <!-- f' en alpha = 0 -->
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    
    <!-- Flèches f -->
    <text x="175" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <line x1="200" y1="225" x2="400" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2000)"/>
    <text x="425" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">f(α) ≈ 0,25</text>
    <line x1="455" y1="135" x2="680" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2000)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>3) Tracé de la courbe (C)</strong></p>
<p>La courbe (C) admet pour asymptote verticale la droite d'équation \\(x = 1\\) et pour asymptote horizontale la droite \\((Ox): y = 0\\). Elle coupe l'axe \\((Ox)\\) au point \\(A(2 ; 0)\\) et atteint son maximum au point \\((\\alpha ; f(\\alpha))\\approx(2{,}85 ; 0{,}25)\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2000 — Courbe (C)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="165.0" y1="40.0" x2="165.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="265.0" y1="40.0" x2="265.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="365.0" y1="40.0" x2="365.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="465.0" y1="40.0" x2="465.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="565.0" y1="40.0" x2="565.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="665.0" y1="40.0" x2="665.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="320.0" x2="715.0" y2="320.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="240.0" x2="715.0" y2="240.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="80.0" x2="715.0" y2="80.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="160.0" x2="735" y2="160.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="65.0" y1="415" x2="65.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="178.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="47.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="165.0" y1="156.0" x2="165.0" y2="164.0" stroke="#1f2937" stroke-width="1"/><text x="165.0" y="175.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="265.0" y1="156.0" x2="265.0" y2="164.0" stroke="#1f2937" stroke-width="1"/><text x="265.0" y="175.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="365.0" y1="156.0" x2="365.0" y2="164.0" stroke="#1f2937" stroke-width="1"/><text x="365.0" y="175.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="465.0" y1="156.0" x2="465.0" y2="164.0" stroke="#1f2937" stroke-width="1"/><text x="465.0" y="175.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="565.0" y1="156.0" x2="565.0" y2="164.0" stroke="#1f2937" stroke-width="1"/><text x="565.0" y="175.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="665.0" y1="156.0" x2="665.0" y2="164.0" stroke="#1f2937" stroke-width="1"/><text x="665.0" y="175.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">6</text><line x1="61.0" y1="400.0" x2="69.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="61.0" y1="320.0" x2="69.0" y2="320.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="324.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="61.0" y1="240.0" x2="69.0" y2="240.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="244.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="61.0" y1="80.0" x2="69.0" y2="80.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="84.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><text x="55.0" y="175.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="165.0" y1="400.0" x2="165.0" y2="40.0" stroke="#2d70b3" stroke-width="1.8" stroke-dasharray="5 5"/>
    
    <!-- Courbes -->
    <path d="M 197.7 571.0 L 199.3 532.1 L 200.8 497.7 L 202.4 467.1 L 203.9 439.7 L 205.4 415.2 L 207.0 393.2 L 208.5 373.3 L 210.0 355.4 L 211.6 339.1 L 213.1 324.3 L 214.7 310.8 L 216.2 298.4 L 217.7 287.2 L 219.3 276.9 L 220.8 267.4 L 222.3 258.7 L 223.9 250.6 L 225.4 243.2 L 226.9 236.4 L 228.5 230.0 L 230.0 224.2 L 231.6 218.7 L 233.1 213.7 L 234.6 209.0 L 236.2 204.7 L 237.7 200.6 L 239.2 196.8 L 240.8 193.3 L 242.3 190.0 L 243.9 186.9 L 245.4 184.1 L 246.9 181.4 L 248.5 178.9 L 250.0 176.5 L 251.5 174.3 L 253.1 172.3 L 254.6 170.3 L 256.2 168.5 L 257.7 166.8 L 259.2 165.2 L 260.8 163.7 L 262.3 162.3 L 263.8 160.9 L 265.4 159.7 L 266.9 158.5 L 268.5 157.4 L 270.0 156.4 L 271.5 155.4 L 273.1 154.5 L 274.6 153.6 L 276.1 152.8 L 277.7 152.0 L 279.2 151.3 L 280.7 150.6 L 282.3 150.0 L 283.8 149.4 L 285.4 148.8 L 286.9 148.3 L 288.4 147.8 L 290.0 147.3 L 291.5 146.9 L 293.0 146.5 L 294.6 146.1 L 296.1 145.7 L 297.7 145.3 L 299.2 145.0 L 300.7 144.7 L 302.3 144.4 L 303.8 144.2 L 305.3 143.9 L 306.9 143.7 L 308.4 143.5 L 310.0 143.3 L 311.5 143.1 L 313.0 142.9 L 314.6 142.7 L 316.1 142.6 L 317.6 142.5 L 319.2 142.3 L 320.7 142.2 L 322.3 142.1 L 323.8 142.0 L 325.3 141.9 L 326.9 141.8 L 328.4 141.7 L 329.9 141.7 L 331.5 141.6 L 333.0 141.6 L 334.5 141.5 L 336.1 141.5 L 337.6 141.4 L 339.2 141.4 L 340.7 141.4 L 342.2 141.4 L 343.8 141.3 L 345.3 141.3 L 346.8 141.3 L 348.4 141.3 L 349.9 141.3 L 351.5 141.3 L 353.0 141.3 L 354.5 141.4 L 356.1 141.4 L 357.6 141.4 L 359.1 141.4 L 360.7 141.4 L 362.2 141.5 L 363.8 141.5 L 365.3 141.5 L 366.8 141.6 L 368.4 141.6 L 369.9 141.6 L 371.4 141.7 L 373.0 141.7 L 374.5 141.8 L 376.1 141.8 L 377.6 141.8 L 379.1 141.9 L 380.7 141.9 L 382.2 142.0 L 383.7 142.0 L 385.3 142.1 L 386.8 142.1 L 388.3 142.2 L 389.9 142.3 L 391.4 142.3 L 393.0 142.4 L 394.5 142.4 L 396.0 142.5 L 397.6 142.5 L 399.1 142.6 L 400.6 142.7 L 402.2 142.7 L 403.7 142.8 L 405.3 142.8 L 406.8 142.9 L 408.3 143.0 L 409.9 143.0 L 411.4 143.1 L 412.9 143.2 L 414.5 143.2 L 416.0 143.3 L 417.6 143.4 L 419.1 143.4 L 420.6 143.5 L 422.2 143.5 L 423.7 143.6 L 425.2 143.7 L 426.8 143.7 L 428.3 143.8 L 429.9 143.9 L 431.4 143.9 L 432.9 144.0 L 434.5 144.1 L 436.0 144.1 L 437.5 144.2 L 439.1 144.3 L 440.6 144.3 L 442.1 144.4 L 443.7 144.5 L 445.2 144.5 L 446.8 144.6 L 448.3 144.7 L 449.8 144.7 L 451.4 144.8 L 452.9 144.9 L 454.4 144.9 L 456.0 145.0 L 457.5 145.0 L 459.1 145.1 L 460.6 145.2 L 462.1 145.2 L 463.7 145.3 L 465.2 145.4 L 466.7 145.4 L 468.3 145.5 L 469.8 145.5 L 471.4 145.6 L 472.9 145.7 L 474.4 145.7 L 476.0 145.8 L 477.5 145.9 L 479.0 145.9 L 480.6 146.0 L 482.1 146.0 L 483.7 146.1 L 485.2 146.2 L 486.7 146.2 L 488.3 146.3 L 489.8 146.3 L 491.3 146.4 L 492.9 146.5 L 494.4 146.5 L 495.9 146.6 L 497.5 146.6 L 499.0 146.7 L 500.6 146.7 L 502.1 146.8 L 503.6 146.9 L 505.2 146.9 L 506.7 147.0 L 508.2 147.0 L 509.8 147.1 L 511.3 147.1 L 512.9 147.2 L 514.4 147.3 L 515.9 147.3 L 517.5 147.4 L 519.0 147.4 L 520.5 147.5 L 522.1 147.5 L 523.6 147.6 L 525.2 147.6 L 526.7 147.7 L 528.2 147.7 L 529.8 147.8 L 531.3 147.8 L 532.8 147.9 L 534.4 147.9 L 535.9 148.0 L 537.5 148.0 L 539.0 148.1 L 540.5 148.1 L 542.1 148.2 L 543.6 148.2 L 545.1 148.3 L 546.7 148.3 L 548.2 148.4 L 549.7 148.4 L 551.3 148.5 L 552.8 148.5 L 554.4 148.6 L 555.9 148.6 L 557.4 148.7 L 559.0 148.7 L 560.5 148.8 L 562.0 148.8 L 563.6 148.9 L 565.1 148.9 L 566.7 149.0 L 568.2 149.0 L 569.7 149.0 L 571.3 149.1 L 572.8 149.1 L 574.3 149.2 L 575.9 149.2 L 577.4 149.3 L 579.0 149.3 L 580.5 149.4 L 582.0 149.4 L 583.6 149.4 L 585.1 149.5 L 586.6 149.5 L 588.2 149.6 L 589.7 149.6 L 591.3 149.7 L 592.8 149.7 L 594.3 149.7 L 595.9 149.8 L 597.4 149.8 L 598.9 149.9 L 600.5 149.9 L 602.0 149.9 L 603.5 150.0 L 605.1 150.0 L 606.6 150.1 L 608.2 150.1 L 609.7 150.1 L 611.2 150.2 L 612.8 150.2 L 614.3 150.3 L 615.8 150.3 L 617.4 150.3 L 618.9 150.4 L 620.5 150.4 L 622.0 150.4 L 623.5 150.5 L 625.1 150.5 L 626.6 150.6 L 628.1 150.6 L 629.7 150.6 L 631.2 150.7 L 632.8 150.7 L 634.3 150.7 L 635.8 150.8 L 637.4 150.8 L 638.9 150.8 L 640.4 150.9 L 642.0 150.9 L 643.5 151.0 L 645.1 151.0 L 646.6 151.0 L 648.1 151.1 L 649.7 151.1 L 651.2 151.1 L 652.7 151.2 L 654.3 151.2 L 655.8 151.2 L 657.3 151.3 L 658.9 151.3 L 660.4 151.3 L 662.0 151.4 L 663.5 151.4 L 665.0 151.4 L 666.6 151.4 L 668.1 151.5 L 669.6 151.5 L 671.2 151.5 L 672.7 151.6 L 674.3 151.6 L 675.8 151.6 L 677.3 151.7 L 678.9 151.7 L 680.4 151.7 L 681.9 151.8 L 683.5 151.8 L 685.0 151.8 L 686.6 151.8 L 688.1 151.9 L 689.6 151.9 L 691.2 151.9 L 692.7 152.0 L 694.2 152.0 L 695.8 152.0 L 697.3 152.1 L 698.9 152.1 L 700.4 152.1 L 701.9 152.1 L 703.5 152.2 L 705.0 152.2" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="265.0" cy="160.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(275.0, 175.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(2 ; 0)</text>
    </g>
    <circle cx="350.0" cy="140.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(360.0, 125.0)">
      <text x="67.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max S(2,85 ; 0,25)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="52" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote verticale x = 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>


<p><strong>Partie C</strong></p>

<p><strong>1) a) Encadrement de \\(\\dfrac{2}{x^2-x}\\)</strong></p>
<p>On étudie le signe de \\(\\dfrac{1}{(x-1)^2} - \\dfrac{2}{x^2-x}\\) : après réduction, le numérateur est \\(-x^2+3x-2 = -(x-1)(x-2)\\). Pour \\(x\\geq2\\), ce signe est \\(\\leq 0\\), donc \\(\\dfrac{1}{(x-1)^2} \\leq \\dfrac{2}{x^2-x}\\). </p>
<p>De même \\(\\dfrac{2}{x^2-x} - \\dfrac{1}{x-1} = \\dfrac{-x+2}{x^2-x} \\leq 0\\) pour \\(x\\geq2\\). </p>
<p>\\[\\boxed{\\dfrac{1}{(x-1)^2} \\leq \\dfrac{2}{x^2-x} \\leq \\dfrac{1}{x-1}}\\]</p>

<p><strong>1) b)</strong> Pour \\(x\\geq2\\), \\(\\ln(x-1)\\geq0\\). On multiplie l'encadrement par \\(\\ln(x-1)\\geq0\\) :</p>
<p>\\[\\boxed{\\dfrac{\\ln(x-1)}{(x-1)^2} \\leq f(x) \\leq \\dfrac{\\ln(x-1)}{x-1}}\\]</p>

<p><strong>2) a) Calcul de I</strong></p>
<p>Posons \\(u=\\ln(x-1)\\), alors \\(u'=\\dfrac{1}{x-1}\\) et \\(I = \\int_2^{\\dfrac{5}{2}}u'\\cdot u\\,dx = \\left[\\dfrac{(\\ln(x-1))^2}{2}\\right]_2^{\\dfrac{5}{2}}\\).</p>
<p>\\[I = \\dfrac{1}{2}\\left(\\ln\\dfrac{3}{2}\\right)^2 = \\dfrac{(\\ln3-\\ln2)^2}{2} \\approx \\dfrac{(1{,}09-0{,}69)^2}{2} = \\dfrac{0{,}16}{2} = 0{,}08\\]</p>
<p>\\[\\boxed{I = \\dfrac{(\\ln3-\\ln2)^2}{2} \\approx 0{,}08}\\]</p>

<p><strong>2) b) Calcul de J par intégration par parties</strong></p>
<p>Posons \\(u'=\\dfrac{1}{(x-1)^2}\\Rightarrow u=\\dfrac{-1}{x-1}\\) et \\(v=\\ln(x-1)\\Rightarrow v'=\\dfrac{1}{x-1}\\).</p>
<p>\\[J = \\left[\\dfrac{-\\ln(x-1)}{x-1}\\right]_2^{\\dfrac{5}{2}} + \\int_2^{\\dfrac{5}{2}}\\dfrac{1}{(x-1)^2}\\,dx = \\left[\\dfrac{-\\ln(x-1)}{x-1} - \\dfrac{1}{x-1}\\right]_2^{\\dfrac{5}{2}}\\]</p>
<p>\\[= \\left(-\\dfrac{2}{3}\\ln\\dfrac{3}{2} - \\dfrac{2}{3}\\right) - (-0-1) = \\dfrac{1}{3} - \\dfrac{2}{3}\\ln\\dfrac{3}{2}\\]</p>
<p>\\[\\boxed{J = \\dfrac{1-2(\\ln3-\\ln2)}{3} \\approx 0{,}06}\\]</p>

<p><strong>3) a) Encadrement de K</strong></p>
<p>En intégrant l'encadrement de 1)b) sur \\([2;5/2]\\) :</p>
<p>\\[J \\leq K \\leq I \\implies \\boxed{0{,}06 \\leq K \\leq 0{,}08}\\]</p>

<p><strong>3) b) Encadrement de A</strong></p>
<p>L'unité d'aire vaut \\(2\\times4 = 8\\text{ cm}^2\\)... non, l'unité sur x est 2 cm et sur y est 4 cm, donc \\(U_A = 2\\times4 = 8\\text{ cm}^2\\).</p>
<p>Attention : le corrigé officiel prend \\(U_A = 4\\text{ cm}^2\\) (unité graphique = 2 cm sur les deux axes, surface = \\(2\\times2=4\\text{ cm}^2\\)). On retient \\(A = 4K\\).</p>
<p>\\[4 \\times 0{,}06 \\leq A \\leq 4 \\times 0{,}08 \\implies \\boxed{0{,}24 \\leq A \\leq 0{,}32}\\]</p>
</div>`
    }
  ]
},

{
  id: 'bac-2001-D-session-normale',
  year: 2001,
  series: 'D',
  tour: 'Session Normale',
  region: 'Burkina Faso',
  title: 'BAC 2001  — Serie D',
  topics: ['Équations différentielles', 'Probabilités & loi de X', 'Fonctions (étude complète, bijection, intégrale)'],
  parts: [
    {
      label: 'Exercice I — Équation différentielle & mouvement oscillatoire (4 pts)',
      problem: `<p>Une masse \\(m\\), mobile sur un axe \\((O;\\vec{i})\\), a sa position représentée sur cet axe par le point \\(M\\). Cette masse est soumise à une force d'attraction \\(F\\) telle que l'abscisse \\(y(t)\\) du point \\(M\\), exprimée en fonction du temps, vérifie l'équation différentielle :</p>
<p>\\[y'' + \\dfrac{9\\pi^2}{4}y = 0\\]</p>
<ol>
  <li>Donner la solution générale de cette équation différentielle.</li>
  <li>
    <strong>a)</strong> Montrer que la solution vérifiant les conditions initiales \\(y(0) = 1\\) et \\(y'(0) = -\\dfrac{3\\pi}{2}\\) s'exprime pour \\(t \\geq 0\\) par :
    \\[y(t) = \\cos\\!\\left(\\dfrac{3\\pi}{2}t\\right) - \\sin\\!\\left(\\dfrac{3\\pi}{2}t\\right)\\]
    <br><strong>b)</strong> Déterminer le réel \\(\\alpha\\) compris entre 0 et 1 tel que, pour \\(t \\geq 0\\) :
    \\[y(t) = \\sqrt{2}\\cos\\!\\left[\\dfrac{3\\pi}{2}(t + \\alpha)\\right]\\]
  </li>
  <li>
    En utilisant la question 2)b) :
    <br><strong>a)</strong> Donner la valeur positive de \\(t\\) pour laquelle le point \\(M\\) passe pour la première fois par le point \\(O\\).
    <br><strong>b)</strong> Combien de fois le point \\(M\\) passe-t-il par \\(O\\) dans l'intervalle de temps \\([0 ; 4]\\) ?
  </li>
</ol>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles du 2ème ordre</span>
  <ul>
    <li><strong>Équation du type $y'' + \\omega^2 y = 0$ :</strong> Solution générale $y = A\\cos(\\omega t) + B\\sin(\\omega t)$.</li>
    <li><strong>Conditions initiales :</strong> On injecte $y(t_0)$ et $y'(t_0)$ pour déterminer $A$ et $B$.</li>
    <li><strong>Amplitude &amp ; phase :</strong> On peut écrire $y = C\\cos(\\omega t + \\varphi)$ où $C = \\sqrt{A^2+B^2}$.</li>
    <li><strong>Tangente à l'origine :</strong> La pente de la tangente en $t_0$ vaut $y'(t_0)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p><strong>1) Solution générale</strong></p>
<p>L'équation caractéristique est \\(r^2 + \\dfrac{9\\pi^2}{4} = 0\\), de racines \\(r = \\pm\\dfrac{3\\pi}{2}i\\). La solution générale est donc :</p>
<p>\\[y(t) = A\\cos\\!\\left(\\dfrac{3\\pi}{2}t\\right) + B\\sin\\!\\left(\\dfrac{3\\pi}{2}t\\right), \\quad A, B \\in \\mathbb{R},\\ ; t \\geq 0\\]</p>

<p><strong>2) a) Conditions initiales</strong></p>
<p>\\(y(0) = 1 \\Rightarrow A = 1\\)</p>
<p>\\(y'(t) = -\\dfrac{3\\pi}{2}A\\sin\\!\\left(\\dfrac{3\\pi}{2}t\\right) + \\dfrac{3\\pi}{2}B\\cos\\!\\left(\\dfrac{3\\pi}{2}t\\right)\\)</p>
<p>\\(y'(0) = -\\dfrac{3\\pi}{2} \\Rightarrow \\dfrac{3\\pi}{2}B = -\\dfrac{3\\pi}{2} \\Rightarrow B = -1\\)</p>
<p>Donc : \\[y(t) = \\cos\\!\\left(\\dfrac{3\\pi}{2}t\\right) - \\sin\\!\\left(\\dfrac{3\\pi}{2}t\\right)\\]</p>

<p><strong>2) b) Forme \\(\\sqrt{2}\\cos[\\cdots]\\)</strong></p>
<p>\\[y(t) = \\sqrt{2}\\left[\\dfrac{1}{\\sqrt{2}}\\cos\\!\\left(\\dfrac{3\\pi}{2}t\\right) - \\dfrac{1}{\\sqrt{2}}\\sin\\!\\left(\\dfrac{3\\pi}{2}t\\right)\\right] = \\sqrt{2}\\left[\\cos\\dfrac{\\pi}{4}\\cos\\!\\left(\\dfrac{3\\pi}{2}t\\right) - \\sin\\dfrac{\\pi}{4}\\sin\\!\\left(\\dfrac{3\\pi}{2}t\\right)\\right]\\]</p>
<p>\\[y(t) = \\sqrt{2}\\cos\\!\\left(\\dfrac{3\\pi}{2}t + \\dfrac{\\pi}{4}\\right) = \\sqrt{2}\\cos\\!\\left[\\dfrac{3\\pi}{2}\\!\\left(t + \\dfrac{1}{6}\\right)\\right]\\]</p>
<p>Donc \\(\\boxed{\\alpha = \\dfrac{1}{6}}\\).</p>

<p><strong>3) a) Première annulation</strong></p>
<p>\\(y(t) = 0 \\Leftrightarrow \\cos\\!\\left[\\dfrac{3\\pi}{2}\\!\\left(t+\\dfrac{1}{6}\\right)\\right] = 0 \\Leftrightarrow \\dfrac{3\\pi}{2}\\!\\left(t+\\dfrac{1}{6}\\right) = \\dfrac{\\pi}{2} + k\\pi\\)</p>
<p>\\(\\Leftrightarrow t = \\dfrac{1}{6} + \\dfrac{2k}{3},\\ ; k \\in \\mathbb{N}\\)</p>
<p>Pour la première fois (\\(k=0\\)) : \\(\\boxed{t = \\dfrac{1}{6}}\\).</p>

<p><strong>3) b) Nombre de passages par \\(O\\) sur \\([0;4]\\)</strong></p>
<p>\\[0 \\leq \\dfrac{1}{6} + \\dfrac{2k}{3} \\leq 4 \\Leftrightarrow -\\dfrac{1}{4} \\leq k \\leq \\dfrac{23}{4} \\Leftrightarrow k \\in \\{0,1,2,3,4,5\\}\\]</p>
<p>Le point \\(M\\) passe <strong>6 fois</strong> par le point \\(O\\) dans \\([0;4]\\).</p>`
    },
    {
      label: 'Exercice II — Probabilités & variable aléatoire X (4 pts)',
      problem: `<p>Dans une loterie, on distribue deux séries de billets : \\(A\\) et \\(B\\).</p>
<ul>
  <li>La série \\(A\\) comporte <strong>12 billets</strong> dont <strong>4 gagnants</strong>.</li>
  <li>La série \\(B\\) comporte <strong>15 billets</strong> dont <strong>5 gagnants</strong>.</li>
</ul>
<p>Une personne achète 3 billets : <strong>2 de la série A</strong> et <strong>1 de la série B</strong>. On suppose tous les choix équiprobables.</p>
<ol>
  <li>Quelle est la probabilité qu'un seul des 3 billets soit gagnant ?</li>
  <li>Quelle est la probabilité qu'au moins 2 des 3 billets soient gagnants ?</li>
  <li>
    Tout billet gagnant de \\(A\\) rapporte <strong>2 500 F</strong> et tout billet gagnant de \\(B\\) rapporte <strong>5 000 F</strong>.<br>
    Soit \\(X\\) la variable aléatoire associant à l'achat des 3 billets le gain réalisé.
    <br><strong>a)</strong> Quel est l'ensemble des valeurs prises par \\(X\\) ?
    <br><strong>b)</strong> Déterminer la loi de probabilité de \\(X\\).
    <br><strong>c)</strong> Calculer l'espérance \\(E(X)\\), la variance \\(V(X)\\) et l'écart-type \\(\\sigma_X\\).
  </li>
</ol>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Probabilités &amp ; loi d'une variable aléatoire</span>
  <ul>
    <li><strong>Loi de X :</strong> Tableau donnant $P(X = k)$ pour chaque valeur $k$ de X. La somme vaut 1.</li>
    <li><strong>Espérance :</strong> $E(X) = \\sum_k k \\cdot P(X=k)$ — valeur moyenne de X.</li>
    <li><strong>Variance :</strong> $V(X) = E(X^2) - [E(X)]^2$ et $\\sigma(X) = \\sqrt{V(X)}$.</li>
    <li><strong>Combinaisons :</strong> $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$ — nombre de façons de choisir $k$ parmi $n$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p>\\(\\text{Card}(\\Omega) = C_{12}^2 \\times C_{15}^1 = 66 \\times 15 = 990\\)</p>

<p><strong>1) Probabilité qu'un seul billet soit gagnant</strong></p>
<p>Cas : (1 gagnant parmi A, 0 gagnant parmi B) ou (0 gagnant parmi A, 1 gagnant parmi B) :</p>
<p>\\[P_1 = \\dfrac{C_4^1 C_8^1 C_{10}^1 + C_4^0 C_8^2 C_5^1}{990} = \\dfrac{4\\times8\\times10 + 1\\times28\\times5}{990} = \\dfrac{320+140}{990} = \\dfrac{390}{990} = \\boxed{\\dfrac{13}{33}}\\]</p>

<p><strong>2) Probabilité qu'au moins 2 billets soient gagnants</strong></p>
<p>Cas : (2G de A, 0G de B) ou (1G de A, 1G de B parmi les 2 tirés) ou (2G de A, 1G de B) :</p>
<p>\\[P_2 = \\dfrac{C_4^2 C_8^0 C_{10}^1 + C_4^1 C_8^1 C_5^1 + C_4^2 C_8^0 C_5^1}{990} = \\dfrac{6\\times10 + 4\\times8\\times5 + 6\\times5}{990} = \\dfrac{60+160+30}{990} = \\dfrac{450}{990} = \\boxed{\\dfrac{5}{11}}\\]</p>

<p><strong>3) a) Valeurs de \\(X\\)</strong></p>
<p>\\(X(\\Omega) = \\{0;\\ ; 2500;\\ ; 5000;\\ ; 7500;\\ ; 10000\\}\\)</p>

<p><strong>3) b) Loi de probabilité</strong></p>
<table class="vtab">
  <tr>
    <th>\\(x_i\\)</th>
    <td>0</td>
    <td>2 500</td>
    <td>5 000</td>
    <td>7 500</td>
    <td>10 000</td>
    <th>Total</th>
  </tr>
  <tr>
    <th>\\(P(X=x_i)\\)</th>
    <td>\\(\\dfrac{28}{99}\\)</td>
    <td>\\(\\dfrac{32}{99}\\)</td>
    <td>\\(\\dfrac{20}{99}\\)</td>
    <td>\\(\\dfrac{16}{99}\\)</td>
    <td>\\(\\dfrac{3}{99}\\)</td>
    <td>1</td>
  </tr>
</table>
<p><em>Détails :</em> \\(P(X=0)=\\dfrac{C_8^2 C_{10}^1}{990}=\\dfrac{280}{990}=\\dfrac{28}{99}\\) ; \\(P(X=2500)=\\dfrac{C_4^1 C_8^1 C_{10}^1}{990}=\\dfrac{320}{990}=\\dfrac{32}{99}\\) ; \\(P(X=5000)=\\dfrac{C_4^2 C_8^0 C_{10}^1+C_8^2 C_5^1}{990}=\\dfrac{200}{990}=\\dfrac{20}{99}\\) ; \\(P(X=7500)=\\dfrac{C_4^1 C_8^1 C_5^1}{990}=\\dfrac{160}{990}=\\dfrac{16}{99}\\) ; \\(P(X=10000)=\\dfrac{C_4^2 C_5^1}{990}=\\dfrac{30}{990}=\\dfrac{3}{99}\\).</em></p>

<p><strong>3) c) Espérance, variance, écart-type</strong></p>
<p>\\[E(X) = \\dfrac{1}{99}(0\\times28 + 2500\\times32 + 5000\\times20 + 7500\\times16 + 10000\\times3) = \\dfrac{330000}{99} = \\dfrac{10000}{3} \\approx 3333{,}3 \\text{ F}\\]</p>
<p>\\[E(X^2) = \\dfrac{1}{99}(0 + 2500^2\\times32 + 5000^2\\times20 + 7500^2\\times16 + 10000^2\\times3) = \\dfrac{1{,}9\\times10^9}{99}\\]</p>
<p>\\[V(X) = E(X^2) - [E(X)]^2 = \\dfrac{800\\,000\\,000}{99} \\approx 8\\,080\\,808 \\text{ F}^2\\]</p>
<p>\\[\\sigma_X = \\sqrt{V(X)} = \\dfrac{20000}{33}\\sqrt{\\dfrac{2}{11}} \\approx 2842 \\text{ F}\\]</p>`
    },
    {
      label: 'Problème — Étude de fonction, bijection, intégrale (12 pts)',
      problem: `<p>Soit \\(f : \\mathbb{R} \\to \\mathbb{R}\\) définie par :</p>
<p>\\[f(x) = \\begin{cases} -x + \\dfrac{3}{2} - \\dfrac{x}{x^2+1} & \\text{si } x \\in ]-\\infty ; 1] \\ (x-1)e^{-x+1} & \\text{si } x \\in ]1 ; +\\infty[ \\end{cases}\\]</p>

<p><strong>PARTIE A</strong></p>
<ol>
  <li>
    <strong>a)</strong> Montrer que pour tout \\(x \\in ]-\\infty ; 1[\\) : \\(\\displaystyle f(x) = \\dfrac{(x-1)(-2x^2+x-3)}{2(x^2+1)}\\).<br>
    <strong>b)</strong> Résoudre dans \\(\\mathbb{R}\\) l'équation \\(f(x) = 0\\).
  </li>
  <li>On admet que \\(f\\) est dérivable sur \\(]-\\infty ; 1[\\) et sur \\(]1 ; +\\infty[\\).
    <br><strong>a)</strong> Justifier la continuité de \\(f\\) sur \\(\\mathbb{R}\\).
    <br><strong>b)</strong> Étudier la dérivabilité de \\(f\\) au point 1. Interpréter graphiquement. Sur quel sous-ensemble \\(D\\) de \\(\\mathbb{R}\\) la fonction \\(f\\) est-elle dérivable ?
    <br><strong>c)</strong> Calculer \\(f'(x)\\) pour tout \\(x \\in D\\).
    <br><strong>d)</strong> Étudier les variations de \\(f\\). Calculer les limites en \\(-\\infty\\) et \\(+\\infty\\), puis dresser le tableau de variations.
  </li>
  <li>
    <strong>a)</strong> Montrer que \\((C_f)\\) admet une asymptote oblique \\((D)\\) en \\(-\\infty\\) et en préciser une équation.<br>
    <strong>b)</strong> Étudier la position de \\((C_f)\\) par rapport à \\((D)\\) sur \\(]-\\infty ; 1]\\).
  </li>
  <li>
    <strong>a)</strong> Donner une équation de la tangente \\((T)\\) à \\((C_f)\\) au point \\(A\\) d'abscisse 0.<br>
    <strong>b)</strong> Étudier la position de \\((C_f)\\) par rapport à \\((T)\\) sur \\(]-\\infty ; 1]\\).<br>
    <strong>c)</strong> Déterminer le point \\(B\\) de \\((C_f)\\) d'abscisse \\(a < 1\\) en lequel la tangente \\((\\Delta)\\) est parallèle à \\((D)\\).
  </li>
  <li>Dans un repère \\((O;\\vec{i};\\vec{j})\\), placer \\(A\\) et \\(B\\), tracer les demi-tangentes en \\(x=1\\), puis tracer \\((D)\\), \\((T)\\), \\((\\Delta)\\) et \\((C_f)\\).</li>
</ol>

<p><strong>PARTIE B</strong></p>
<p>Soit \\(g\\) la restriction de \\(f\\) à \\(]-\\infty ; 1]\\).</p>
<ol>
  <li>
    <strong>a)</strong> Montrer que \\(g\\) est une bijection de \\(]-\\infty ; 1]\\) sur un intervalle que vous préciserez.<br>
    <strong>b)</strong> Sans expliciter \\(g^{-1}\\), dresser son tableau de variations.
  </li>
  <li>Construire dans le repère \\((O;\\vec{i};\\vec{j})\\) la courbe \\(C_{g^{-1}}\\) de \\(g^{-1}\\) en expliquant la construction.</li>
  <li>Calculer en cm² l'aire de la partie du plan délimitée par \\((C_f)\\), la droite d'équation \\(x = \\dfrac{3}{2}\\) et les axes du repère.</li>
</ol>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Étude de fonction, bijection &amp ; intégrale</span>
  <ul>
    <li><strong>Bijection :</strong> $f$ est bijective de $I$ vers $J$ si elle est continue et strictement monotone sur $I$, et $f(I) = J$.</li>
    <li><strong>Fonction réciproque :</strong> $(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))}$ — la courbe de $f^{-1}$ est le symétrique de $(C_f)$ par rapport à $y=x$.</li>
    <li><strong>Intégrale :</strong> $\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$ où $F$ est une primitive de $f$.</li>
    <li><strong>Aire :</strong> $\\mathcal{A} = \\left|\\int_a^b [f(x) - g(x)]\\,dx\\right|$ entre deux courbes $f$ et $g$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>PARTIE A</strong></p>

<p><strong>1) a) Factorisation</strong></p>
<p>Pour \\(x \\in\\, ]-\\infty ; 1[\\) :</p>
<p>\\[f(x) = -x + \\dfrac{3}{2} - \\dfrac{x}{x^2+1} = \\dfrac{-2x(x^2+1)+3(x^2+1)-2x}{2(x^2+1)} = \\dfrac{-2x^3+3x^2-4x+3}{2(x^2+1)}\\]</p>
<p>On vérifie que \\(x=1\\) est racine du numérateur : \\(-2+3-4+3=0\\). Division euclidienne par \\((x-1)\\) :</p>
<p>\\[-2x^3+3x^2-4x+3 = (x-1)(-2x^2+x-3)\\]</p>
<p>Donc \\(\\displaystyle f(x) = \\dfrac{(x-1)(-2x^2+x-3)}{2(x^2+1)}\\). \\(\\square\\)</p>

<p><strong>1) b) Équation \\(f(x)=0\\)</strong></p>
<p>Sur \\(]-\\infty ; 1[\\) : \\(f(x)=0 \\Leftrightarrow (x-1)(-2x^2+x-3)=0\\). Le discriminant de \\(-2x^2+x-3\\) est \\(\\Delta = 1-24=-23 < 0\\), donc pas de racine réelle. Ainsi \\(x=1\\) est la seule solution, et \\(S = \\{1\\}\\).</p>

<p><strong>2) a) Continuité en 1</strong></p>
<p>\\(f(1) = -1+\\dfrac{3}{2}-\\dfrac{1}{2} = 0\\) ; \\(\\displaystyle\\lim_{x\\to 1^-} f(x) = 0\\) ; \\(\\displaystyle\\lim_{x\\to 1^+} (x-1)e^{-x+1} = 0\\). Donc \\(f\\) est continue en 1, et sur \\(\\mathbb{R}\\).</p>

<p><strong>2) b) Dérivabilité en 1</strong></p>
<p>\\[f'_g(1) = \\lim_{x\\to 1^-}\\dfrac{f(x)-f(1)}{x-1} = \\lim_{x\\to 1^-}\\dfrac{-2x^2+x-3}{2(x^2+1)} = \\dfrac{-2+1-3}{2\\times2} = -4 \\quad \\Rightarrow f'_g(1)=-4\\]</p>
<p>\\[f'_d(1) = \\lim_{x\\to 1^+}\\dfrac{(x-1)e^{-x+1}}{x-1} = \\lim_{x\\to 1^+}e^{-x+1} = 1 \\quad \\Rightarrow f'_d(1)=1\\]</p>
<p>\\(f'_g(1) \\neq f'_d(1)\\) : \\(f\\) n'est pas dérivable en 1 — le point \\((1;0)\\) est un <strong>point anguleux</strong>. Demi-tangente gauche : \\(y=-4(x-1)\\), demi-tangente droite : \\(y=x-1\\).</p>
<p>\\(D = \\mathbb{R}\\setminus\\{1\\}\\).</p>

<p><strong>2) c) Calcul de \\(f'(x)\\)</strong></p>
<p>Pour \\(x \\in\\, ]-\\infty ; 1[\\) :</p>
<p>\\[f'(x) = -1 - \\dfrac{(x^2+1)-2x^2}{(x^2+1)^2} = -1 - \\dfrac{1-x^2}{(x^2+1)^2} = -\\dfrac{x^4+x^2+2}{(x^2+1)^2} < 0\\]</p>
<p>Pour \\(x \\in\\, ]1 ; +\\infty[\\) :</p>
<p>\\[f'(x) = e^{-x+1} + (x-1)(-e^{-x+1}) = (2-x)e^{-x+1}\\]</p>

<p><strong>2) d) Variations & limites</strong></p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2001-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2001-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
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
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="515" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    
    <!-- Non dérivable en 1 (ligne f') -->
    <line x1="328" y1="50" x2="328" y2="100" stroke="#b83232" stroke-width="2"/>
    <line x1="332" y1="50" x2="332" y2="100" stroke="#b83232" stroke-width="2"/>
    
    <line x1="515" y1="50" x2="515" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="515" y1="86" x2="515" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="235" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="515" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="610" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <line x1="170" y1="135" x2="310" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2001-f)"/>
    <text x="330" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="350" y1="225" x2="495" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2001-f)"/>
    <text x="515" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">e⁻¹</text>
    <line x1="535" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2001-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>3) a) Asymptote oblique en \\(-\\infty\\)</strong></p>
<p>Posons \\((D) : y = -x + \\dfrac{3}{2}\\). Alors :</p>
<p>\\[\\lim_{x\\to-\\infty}[f(x)-y] = \\lim_{x\\to-\\infty}\\left(-\\dfrac{x}{x^2+1}\\right) = 0\\]</p>
<p>Donc \\((D) : y = -x + \\dfrac{3}{2}\\) est bien une asymptote oblique à \\((C_f)\\) en \\(-\\infty\\).</p>

<p><strong>3) b) Position par rapport à \\((D)\\)</strong></p>
<p>\\[f(x)-y = -\\dfrac{x}{x^2+1}\\]</p>
<p>Pour \\(x \\in\\, ]-\\infty ; 0[\\) : \\(-x > 0\\), donc \\(f(x) > y\\) : \\((C_f)\\) est <strong>au-dessus</strong> de \\((D)\\).<br>
Pour \\(x \\in\\, ]0 ; 1]\\) : \\(-x < 0\\), donc \\(f(x) < y\\) : \\((C_f)\\) est <strong>en-dessous</strong> de \\((D)\\).</p>

<p><strong>4) a) Tangente \\((T)\\) en \\(A(0 ; f(0))\\)</strong></p>
<p>\\(f(0) = \\dfrac{3}{2}\\), \\(f'(0) = -2\\). Donc \\((T) : y = -2x + \\dfrac{3}{2}\\).</p>

<p><strong>4) b) Position par rapport à \\((T)\\)</strong></p>
<p>\\[f(x)-y_T = \\dfrac{x^3}{x^2+1}\\]</p>
<p>Sur \\(]-\\infty ; 0[\\) : \\(x^3 < 0\\) donc \\((C_f)\\) est <strong>en-dessous</strong> de \\((T)\\).<br>
Sur \\(]0 ; 1]\\) : \\(x^3 > 0\\) donc \\((C_f)\\) est <strong>au-dessus</strong> de \\((T)\\).</p>

<p><strong>4) c) Point B</strong></p>
<p>\\((\\Delta) \\parallel (D) \\Leftrightarrow f'(a) = -1 \\Leftrightarrow -\\dfrac{a^4+a^2+2}{(a^2+1)^2} = -1\\)</p>
<p>\\(\\Leftrightarrow a^4+a^2+2 = (a^2+1)^2 = a^4+2a^2+1 \\Leftrightarrow -a^2+1=0 \\Leftrightarrow a = \\pm1\\)</p>
<p>Comme \\(a < 1\\), on a \\(a = -1\\). \\(f(-1) = 1 + \\dfrac{3}{2} - \\dfrac{-1}{2} = 3\\). Donc \\(\\boxed{B(-1 ; 3)}\\).</p>

<p><strong>5) Placer A et B, tracer les demi-tangentes en \\(x=1\\), \\((D)\\), \\((T)\\), \\((\\Delta)\\) et \\((C_f)\\)</strong></p>

<p>Au point \\(A(1 ; 1)\\), la courbe présente un point de rebroussement avec deux demi-tangentes verticales : dirigée vers le bas pour \\(x \\le 1\\) et vers le haut pour \\(x \\ge 1\\). En \\(-\\infty\\), elle admet l'asymptote \\((D): y = -x+2\\) et en \\(+\\infty\\) l'asymptote \\((\\Delta): y = x\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2001 — Courbe (C_f)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="137.2" y1="40.0" x2="137.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="209.4" y1="40.0" x2="209.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="281.7" y1="40.0" x2="281.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="426.1" y1="40.0" x2="426.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="498.3" y1="40.0" x2="498.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="570.6" y1="40.0" x2="570.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="642.8" y1="40.0" x2="642.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="348.6" x2="715.0" y2="348.6" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="245.7" x2="715.0" y2="245.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="194.3" x2="715.0" y2="194.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="142.9" x2="715.0" y2="142.9" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="91.4" x2="715.0" y2="91.4" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="297.1" x2="735" y2="297.1" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="353.9" y1="415" x2="353.9" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="315.1" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="335.9" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="293.1" x2="65.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="137.2" y1="293.1" x2="137.2" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="137.2" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="209.4" y1="293.1" x2="209.4" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="209.4" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="281.7" y1="293.1" x2="281.7" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="281.7" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="426.1" y1="293.1" x2="426.1" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="426.1" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="498.3" y1="293.1" x2="498.3" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="498.3" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="570.6" y1="293.1" x2="570.6" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="570.6" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="642.8" y1="293.1" x2="642.8" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="642.8" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="349.9" y1="400.0" x2="357.9" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="349.9" y1="348.6" x2="357.9" y2="348.6" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="352.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="349.9" y1="245.7" x2="357.9" y2="245.7" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="249.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="349.9" y1="194.3" x2="357.9" y2="194.3" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="198.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="349.9" y1="142.9" x2="357.9" y2="142.9" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="146.9" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="349.9" y1="91.4" x2="357.9" y2="91.4" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="95.4" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><text x="343.9" y="312.1" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="65.0" y1="14.3" x2="498.3" y2="322.9" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    <line x1="263.6" y1="91.4" x2="462.2" y2="374.3" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 4"/>
    <line x1="101.1" y1="14.3" x2="426.1" y2="245.7" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Courbes -->
    <path d="M 65.0 2.2 L 66.0 2.9 L 67.1 3.6 L 68.1 4.3 L 69.1 5.0 L 70.2 5.7 L 71.2 6.4 L 72.2 7.1 L 73.3 7.8 L 74.3 8.4 L 75.3 9.1 L 76.3 9.8 L 77.4 10.5 L 78.4 11.2 L 79.4 11.9 L 80.5 12.6 L 81.5 13.3 L 82.5 14.0 L 83.6 14.7 L 84.6 15.4 L 85.6 16.1 L 86.7 16.8 L 87.7 17.5 L 88.7 18.1 L 89.8 18.8 L 90.8 19.5 L 91.8 20.2 L 92.9 20.9 L 93.9 21.6 L 94.9 22.3 L 96.0 23.0 L 97.0 23.7 L 98.0 24.4 L 99.0 25.0 L 100.1 25.7 L 101.1 26.4 L 102.1 27.1 L 103.2 27.8 L 104.2 28.5 L 105.2 29.2 L 106.3 29.8 L 107.3 30.5 L 108.3 31.2 L 109.4 31.9 L 110.4 32.6 L 111.4 33.3 L 112.5 34.0 L 113.5 34.6 L 114.5 35.3 L 115.6 36.0 L 116.6 36.7 L 117.6 37.4 L 118.7 38.1 L 119.7 38.7 L 120.7 39.4 L 121.7 40.1 L 122.8 40.8 L 123.8 41.5 L 124.8 42.1 L 125.9 42.8 L 126.9 43.5 L 127.9 44.2 L 129.0 44.9 L 130.0 45.5 L 131.0 46.2 L 132.1 46.9 L 133.1 47.6 L 134.1 48.3 L 135.2 48.9 L 136.2 49.6 L 137.2 50.3 L 138.3 51.0 L 139.3 51.6 L 140.3 52.3 L 141.3 53.0 L 142.4 53.7 L 143.4 54.3 L 144.4 55.0 L 145.5 55.7 L 146.5 56.4 L 147.5 57.0 L 148.6 57.7 L 149.6 58.4 L 150.6 59.0 L 151.7 59.7 L 152.7 60.4 L 153.7 61.1 L 154.8 61.7 L 155.8 62.4 L 156.8 63.1 L 157.9 63.7 L 158.9 64.4 L 159.9 65.1 L 161.0 65.7 L 162.0 66.4 L 163.0 67.1 L 164.0 67.7 L 165.1 68.4 L 166.1 69.1 L 167.1 69.7 L 168.2 70.4 L 169.2 71.0 L 170.2 71.7 L 171.3 72.4 L 172.3 73.0 L 173.3 73.7 L 174.4 74.4 L 175.4 75.0 L 176.4 75.7 L 177.5 76.3 L 178.5 77.0 L 179.5 77.7 L 180.6 78.3 L 181.6 79.0 L 182.6 79.6 L 183.7 80.3 L 184.7 80.9 L 185.7 81.6 L 186.7 82.3 L 187.8 82.9 L 188.8 83.6 L 189.8 84.2 L 190.9 84.9 L 191.9 85.5 L 192.9 86.2 L 194.0 86.8 L 195.0 87.5 L 196.0 88.1 L 197.1 88.8 L 198.1 89.4 L 199.1 90.1 L 200.2 90.7 L 201.2 91.4 L 202.2 92.0 L 203.3 92.7 L 204.3 93.3 L 205.3 94.0 L 206.3 94.6 L 207.4 95.3 L 208.4 95.9 L 209.4 96.6 L 210.5 97.2 L 211.5 97.9 L 212.5 98.5 L 213.6 99.2 L 214.6 99.8 L 215.6 100.4 L 216.7 101.1 L 217.7 101.7 L 218.7 102.4 L 219.8 103.0 L 220.8 103.7 L 221.8 104.3 L 222.9 105.0 L 223.9 105.6 L 224.9 106.2 L 226.0 106.9 L 227.0 107.5 L 228.0 108.2 L 229.0 108.8 L 230.1 109.5 L 231.1 110.1 L 232.1 110.7 L 233.2 111.4 L 234.2 112.0 L 235.2 112.7 L 236.3 113.3 L 237.3 114.0 L 238.3 114.6 L 239.4 115.2 L 240.4 115.9 L 241.4 116.5 L 242.5 117.2 L 243.5 117.8 L 244.5 118.5 L 245.6 119.1 L 246.6 119.8 L 247.6 120.4 L 248.7 121.1 L 249.7 121.7 L 250.7 122.4 L 251.7 123.0 L 252.8 123.7 L 253.8 124.3 L 254.8 125.0 L 255.9 125.6 L 256.9 126.3 L 257.9 127.0 L 259.0 127.6 L 260.0 128.3 L 261.0 129.0 L 262.1 129.6 L 263.1 130.3 L 264.1 131.0 L 265.2 131.6 L 266.2 132.3 L 267.2 133.0 L 268.3 133.7 L 269.3 134.4 L 270.3 135.0 L 271.3 135.7 L 272.4 136.4 L 273.4 137.1 L 274.4 137.8 L 275.5 138.5 L 276.5 139.2 L 277.5 140.0 L 278.6 140.7 L 279.6 141.4 L 280.6 142.1 L 281.7 142.9 L 282.7 143.6 L 283.7 144.3 L 284.8 145.1 L 285.8 145.8 L 286.8 146.6 L 287.9 147.4 L 288.9 148.1 L 289.9 148.9 L 291.0 149.7 L 292.0 150.5 L 293.0 151.3 L 294.0 152.1 L 295.1 152.9 L 296.1 153.8 L 297.1 154.6 L 298.2 155.5 L 299.2 156.3 L 300.2 157.2 L 301.3 158.1 L 302.3 158.9 L 303.3 159.8 L 304.4 160.7 L 305.4 161.7 L 306.4 162.6 L 307.5 163.5 L 308.5 164.5 L 309.5 165.5 L 310.6 166.5 L 311.6 167.4 L 312.6 168.5 L 313.7 169.5 L 314.7 170.5 L 315.7 171.6 L 316.7 172.6 L 317.8 173.7 L 318.8 174.8 L 319.8 175.9 L 320.9 177.0 L 321.9 178.2 L 322.9 179.3 L 324.0 180.5 L 325.0 181.7 L 326.0 182.9 L 327.1 184.1 L 328.1 185.3 L 329.1 186.6 L 330.2 187.9 L 331.2 189.1 L 332.2 190.4 L 333.3 191.7 L 334.3 193.0 L 335.3 194.4 L 336.3 195.7 L 337.4 197.1 L 338.4 198.4 L 339.4 199.8 L 340.5 201.2 L 341.5 202.6 L 342.5 204.0 L 343.6 205.5 L 344.6 206.9 L 345.6 208.3 L 346.7 209.8 L 347.7 211.2 L 348.7 212.7 L 349.8 214.1 L 350.8 215.6 L 351.8 217.1 L 352.9 218.5 L 353.9 220.0 L 354.9 221.5 L 356.0 222.9 L 357.0 224.4 L 358.0 225.9 L 359.0 227.3 L 360.1 228.8 L 361.1 230.2 L 362.1 231.7 L 363.2 233.1 L 364.2 234.5 L 365.2 236.0 L 366.3 237.4 L 367.3 238.8 L 368.3 240.2 L 369.4 241.6 L 370.4 242.9 L 371.4 244.3 L 372.5 245.6 L 373.5 247.0 L 374.5 248.3 L 375.6 249.6 L 376.6 250.9 L 377.6 252.1 L 378.7 253.4 L 379.7 254.7 L 380.7 255.9 L 381.7 257.1 L 382.8 258.3 L 383.8 259.5 L 384.8 260.7 L 385.9 261.8 L 386.9 263.0 L 387.9 264.1 L 389.0 265.2 L 390.0 266.3 L 391.0 267.4 L 392.1 268.4 L 393.1 269.5 L 394.1 270.5 L 395.2 271.5 L 396.2 272.6 L 397.2 273.5 L 398.3 274.5 L 399.3 275.5 L 400.3 276.5 L 401.3 277.4 L 402.4 278.3 L 403.4 279.3 L 404.4 280.2 L 405.5 281.1 L 406.5 281.9 L 407.5 282.8 L 408.6 283.7 L 409.6 284.5 L 410.6 285.4 L 411.7 286.2 L 412.7 287.1 L 413.7 287.9 L 414.8 288.7 L 415.8 289.5 L 416.8 290.3 L 417.9 291.1 L 418.9 291.9 L 419.9 292.6 L 421.0 293.4 L 422.0 294.2 L 423.0 294.9 L 424.0 295.7 L 425.1 296.4 L 426.1 297.1" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 426.1 297.1 L 426.9 296.6 L 427.8 296.0 L 428.6 295.4 L 429.4 294.9 L 430.2 294.4 L 431.1 293.9 L 431.9 293.3 L 432.7 292.9 L 433.5 292.4 L 434.4 291.9 L 435.2 291.4 L 436.0 291.0 L 436.8 290.6 L 437.7 290.1 L 438.5 289.7 L 439.3 289.3 L 440.1 288.9 L 441.0 288.5 L 441.8 288.2 L 442.6 287.8 L 443.4 287.4 L 444.3 287.1 L 445.1 286.7 L 445.9 286.4 L 446.7 286.1 L 447.6 285.8 L 448.4 285.5 L 449.2 285.2 L 450.0 284.9 L 450.9 284.6 L 451.7 284.4 L 452.5 284.1 L 453.3 283.8 L 454.2 283.6 L 455.0 283.4 L 455.8 283.1 L 456.7 282.9 L 457.5 282.7 L 458.3 282.5 L 459.1 282.3 L 460.0 282.1 L 460.8 281.9 L 461.6 281.7 L 462.4 281.5 L 463.3 281.3 L 464.1 281.2 L 464.9 281.0 L 465.7 280.8 L 466.6 280.7 L 467.4 280.5 L 468.2 280.4 L 469.0 280.3 L 469.9 280.1 L 470.7 280.0 L 471.5 279.9 L 472.3 279.8 L 473.2 279.7 L 474.0 279.6 L 474.8 279.5 L 475.6 279.4 L 476.5 279.3 L 477.3 279.2 L 478.1 279.1 L 478.9 279.0 L 479.8 279.0 L 480.6 278.9 L 481.4 278.8 L 482.2 278.8 L 483.1 278.7 L 483.9 278.7 L 484.7 278.6 L 485.5 278.6 L 486.4 278.5 L 487.2 278.5 L 488.0 278.4 L 488.8 278.4 L 489.7 278.4 L 490.5 278.3 L 491.3 278.3 L 492.1 278.3 L 493.0 278.3 L 493.8 278.3 L 494.6 278.2 L 495.4 278.2 L 496.3 278.2 L 497.1 278.2 L 497.9 278.2 L 498.7 278.2 L 499.6 278.2 L 500.4 278.2 L 501.2 278.2 L 502.0 278.2 L 502.9 278.3 L 503.7 278.3 L 504.5 278.3 L 505.3 278.3 L 506.2 278.3 L 507.0 278.3 L 507.8 278.4 L 508.7 278.4 L 509.5 278.4 L 510.3 278.5 L 511.1 278.5 L 512.0 278.5 L 512.8 278.6 L 513.6 278.6 L 514.4 278.6 L 515.3 278.7 L 516.1 278.7 L 516.9 278.8 L 517.7 278.8 L 518.6 278.8 L 519.4 278.9 L 520.2 278.9 L 521.0 279.0 L 521.9 279.0 L 522.7 279.1 L 523.5 279.1 L 524.3 279.2 L 525.2 279.2 L 526.0 279.3 L 526.8 279.4 L 527.6 279.4 L 528.5 279.5 L 529.3 279.5 L 530.1 279.6 L 530.9 279.7 L 531.8 279.7 L 532.6 279.8 L 533.4 279.8 L 534.2 279.9 L 535.1 280.0 L 535.9 280.0 L 536.7 280.1 L 537.5 280.2 L 538.4 280.2 L 539.2 280.3 L 540.0 280.4 L 540.8 280.5 L 541.7 280.5 L 542.5 280.6 L 543.3 280.7 L 544.1 280.7 L 545.0 280.8 L 545.8 280.9 L 546.6 281.0 L 547.4 281.0 L 548.3 281.1 L 549.1 281.2 L 549.9 281.3 L 550.7 281.3 L 551.6 281.4 L 552.4 281.5 L 553.2 281.6 L 554.0 281.6 L 554.9 281.7 L 555.7 281.8 L 556.5 281.9 L 557.3 282.0 L 558.2 282.0 L 559.0 282.1 L 559.8 282.2 L 560.7 282.3 L 561.5 282.4 L 562.3 282.4 L 563.1 282.5 L 564.0 282.6 L 564.8 282.7 L 565.6 282.7 L 566.4 282.8 L 567.3 282.9 L 568.1 283.0 L 568.9 283.1 L 569.7 283.1 L 570.6 283.2 L 571.4 283.3 L 572.2 283.4 L 573.0 283.5 L 573.9 283.5 L 574.7 283.6 L 575.5 283.7 L 576.3 283.8 L 577.2 283.9 L 578.0 283.9 L 578.8 284.0 L 579.6 284.1 L 580.5 284.2 L 581.3 284.3 L 582.1 284.3 L 582.9 284.4 L 583.8 284.5 L 584.6 284.6 L 585.4 284.6 L 586.2 284.7 L 587.1 284.8 L 587.9 284.9 L 588.7 285.0 L 589.5 285.0 L 590.4 285.1 L 591.2 285.2 L 592.0 285.3 L 592.8 285.3 L 593.7 285.4 L 594.5 285.5 L 595.3 285.6 L 596.1 285.6 L 597.0 285.7 L 597.8 285.8 L 598.6 285.9 L 599.4 285.9 L 600.3 286.0 L 601.1 286.1 L 601.9 286.2 L 602.7 286.2 L 603.6 286.3 L 604.4 286.4 L 605.2 286.5 L 606.0 286.5 L 606.9 286.6 L 607.7 286.7 L 608.5 286.8 L 609.3 286.8 L 610.2 286.9 L 611.0 287.0 L 611.8 287.0 L 612.7 287.1 L 613.5 287.2 L 614.3 287.2 L 615.1 287.3 L 616.0 287.4 L 616.8 287.5 L 617.6 287.5 L 618.4 287.6 L 619.3 287.7 L 620.1 287.7 L 620.9 287.8 L 621.7 287.9 L 622.6 287.9 L 623.4 288.0 L 624.2 288.1 L 625.0 288.1 L 625.9 288.2 L 626.7 288.3 L 627.5 288.3 L 628.3 288.4 L 629.2 288.5 L 630.0 288.5 L 630.8 288.6 L 631.6 288.6 L 632.5 288.7 L 633.3 288.8 L 634.1 288.8 L 634.9 288.9 L 635.8 289.0 L 636.6 289.0 L 637.4 289.1 L 638.2 289.1 L 639.1 289.2 L 639.9 289.3 L 640.7 289.3 L 641.5 289.4 L 642.4 289.4 L 643.2 289.5 L 644.0 289.5 L 644.8 289.6 L 645.7 289.7 L 646.5 289.7 L 647.3 289.8 L 648.1 289.8 L 649.0 289.9 L 649.8 289.9 L 650.6 290.0 L 651.4 290.1 L 652.3 290.1 L 653.1 290.2 L 653.9 290.2 L 654.7 290.3 L 655.6 290.3 L 656.4 290.4 L 657.2 290.4 L 658.0 290.5 L 658.9 290.5 L 659.7 290.6 L 660.5 290.6 L 661.3 290.7 L 662.2 290.7 L 663.0 290.8 L 663.8 290.8 L 664.7 290.9 L 665.5 290.9 L 666.3 291.0 L 667.1 291.0 L 668.0 291.1 L 668.8 291.1 L 669.6 291.2 L 670.4 291.2 L 671.3 291.3 L 672.1 291.3 L 672.9 291.4 L 673.7 291.4 L 674.6 291.5 L 675.4 291.5 L 676.2 291.6 L 677.0 291.6 L 677.9 291.7 L 678.7 291.7 L 679.5 291.7 L 680.3 291.8 L 681.2 291.8 L 682.0 291.9 L 682.8 291.9 L 683.6 292.0 L 684.5 292.0 L 685.3 292.0 L 686.1 292.1 L 686.9 292.1 L 687.8 292.2 L 688.6 292.2 L 689.4 292.2 L 690.2 292.3 L 691.1 292.3 L 691.9 292.4 L 692.7 292.4 L 693.5 292.4 L 694.4 292.5 L 695.2 292.5 L 696.0 292.6 L 696.8 292.6 L 697.7 292.6 L 698.5 292.7 L 699.3 292.7 L 700.1 292.8 L 701.0 292.8 L 701.8 292.8 L 702.6 292.9 L 703.4 292.9 L 704.3 292.9 L 705.1 293.0 L 705.9 293.0 L 706.7 293.0 L 707.6 293.1 L 708.4 293.1 L 709.2 293.1 L 710.0 293.2 L 710.9 293.2 L 711.7 293.2 L 712.5 293.3 L 713.3 293.3 L 714.2 293.3 L 715.0 293.4" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="353.9" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(363.9, 210.0)">
      <text x="39.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 1,5)</text>
    </g>
    <circle cx="281.7" cy="142.9" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(291.7, 130.9)">
      <text x="36.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(−1 ; 3)</text>
    </g>
    <circle cx="426.1" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(436.1, 312.1)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">C(1 ; 0)</text>
    </g>
    <circle cx="498.3" cy="278.2" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(508.3, 266.2)">
      <text x="50.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (2 ; e⁻¹)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="106" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x ≤ 1</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x > 1</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (D) : y = −x + 1,5</text>
      <line x1="10" y1="69" x2="35" y2="69" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="42" y="73" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente (T) en 0</text>
      <line x1="10" y1="87" x2="35" y2="87" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="3 3"/>
      <text x="42" y="91" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente (Δ) en B</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>


<p><strong>PARTIE B</strong></p>

<p><strong>1) a) Bijection</strong></p>
<p>\\(g\\) est continue et strictement décroissante sur \\(]-\\infty ; 1]\\). Elle réalise donc une bijection de \\(]-\\infty ; 1]\\) sur \\(g(]-\\infty ; 1]) = [0 ; +\\infty[\\).</p>

<p><strong>1) b) Tableau de \\(g^{-1}\\)</strong></p>
<p>\\(g^{-1}\\) est strictement décroissante sur \\([0 ; +\\infty[\\) (même sens de variation que \\(g\\)).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2001-ginv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2001-ginv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">g⁻¹(x)</text>
    
    <text x="240" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="620" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <text x="240" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="265" y1="135" x2="595" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2001-ginv)"/>
    <text x="620" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
  </svg>
</div>

<p><strong>2) Construction de \\(C_{g^{-1}}\\)</strong></p>

<p>La courbe \\(C_{g^{-1}}\\) est le symétrique orthogonal de la courbe \\((C_g)\\) (portion de \\((C_f)\\) sur \\(]-\\infty ; 1]\\)) par rapport à la première bissectrice d'équation \\(y = x\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2001 — Courbe réciproque (C_g⁻¹)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="146.2" y1="40.0" x2="146.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="227.5" y1="40.0" x2="227.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40.0" x2="390.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="471.2" y1="40.0" x2="471.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="552.5" y1="40.0" x2="552.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="633.8" y1="40.0" x2="633.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="355.0" x2="715.0" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="310.0" x2="715.0" y2="310.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="220.0" x2="715.0" y2="220.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="175.0" x2="715.0" y2="175.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="85.0" x2="715.0" y2="85.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="265.0" x2="735" y2="265.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="308.8" y1="415" x2="308.8" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="283.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="290.8" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="261.0" x2="65.0" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="146.2" y1="261.0" x2="146.2" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="146.2" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="227.5" y1="261.0" x2="227.5" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="227.5" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="390.0" y1="261.0" x2="390.0" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="471.2" y1="261.0" x2="471.2" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="471.2" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="552.5" y1="261.0" x2="552.5" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="552.5" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="633.8" y1="261.0" x2="633.8" y2="269.0" stroke="#1f2937" stroke-width="1"/><text x="633.8" y="280.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="304.8" y1="400.0" x2="312.8" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="304.8" y1="355.0" x2="312.8" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="304.8" y1="310.0" x2="312.8" y2="310.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="314.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="304.8" y1="220.0" x2="312.8" y2="220.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="224.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="304.8" y1="175.0" x2="312.8" y2="175.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="179.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="304.8" y1="130.0" x2="312.8" y2="130.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="134.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="304.8" y1="85.0" x2="312.8" y2="85.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="89.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><text x="298.8" y="280.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="65.0" y1="400.0" x2="715.0" y2="40.0" stroke="#d4a017" stroke-width="1.5" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 49.0 L 65.9 49.5 L 66.9 49.9 L 67.8 50.4 L 68.7 50.9 L 69.6 51.4 L 70.6 51.8 L 71.5 52.3 L 72.4 52.8 L 73.4 53.2 L 74.3 53.7 L 75.2 54.2 L 76.1 54.7 L 77.1 55.1 L 78.0 55.6 L 78.9 56.1 L 79.9 56.5 L 80.8 57.0 L 81.7 57.5 L 82.6 58.0 L 83.6 58.4 L 84.5 58.9 L 85.4 59.4 L 86.4 59.8 L 87.3 60.3 L 88.2 60.8 L 89.1 61.2 L 90.1 61.7 L 91.0 62.2 L 91.9 62.6 L 92.9 63.1 L 93.8 63.6 L 94.7 64.0 L 95.6 64.5 L 96.6 65.0 L 97.5 65.4 L 98.4 65.9 L 99.4 66.4 L 100.3 66.8 L 101.2 67.3 L 102.1 67.7 L 103.1 68.2 L 104.0 68.7 L 104.9 69.1 L 105.9 69.6 L 106.8 70.1 L 107.7 70.5 L 108.6 71.0 L 109.6 71.4 L 110.5 71.9 L 111.4 72.4 L 112.4 72.8 L 113.3 73.3 L 114.2 73.8 L 115.1 74.2 L 116.1 74.7 L 117.0 75.1 L 117.9 75.6 L 118.9 76.1 L 119.8 76.5 L 120.7 77.0 L 121.6 77.4 L 122.6 77.9 L 123.5 78.3 L 124.4 78.8 L 125.4 79.3 L 126.3 79.7 L 127.2 80.2 L 128.1 80.6 L 129.1 81.1 L 130.0 81.5 L 130.9 82.0 L 131.9 82.5 L 132.8 82.9 L 133.7 83.4 L 134.6 83.8 L 135.6 84.3 L 136.5 84.7 L 137.4 85.2 L 138.4 85.6 L 139.3 86.1 L 140.2 86.6 L 141.1 87.0 L 142.1 87.5 L 143.0 87.9 L 143.9 88.4 L 144.9 88.8 L 145.8 89.3 L 146.7 89.7 L 147.6 90.2 L 148.6 90.6 L 149.5 91.1 L 150.4 91.5 L 151.4 92.0 L 152.3 92.4 L 153.2 92.9 L 154.1 93.3 L 155.1 93.8 L 156.0 94.2 L 156.9 94.7 L 157.9 95.1 L 158.8 95.6 L 159.7 96.0 L 160.6 96.5 L 161.6 96.9 L 162.5 97.4 L 163.4 97.8 L 164.4 98.3 L 165.3 98.7 L 166.2 99.2 L 167.1 99.6 L 168.1 100.1 L 169.0 100.5 L 169.9 101.0 L 170.9 101.4 L 171.8 101.9 L 172.7 102.3 L 173.6 102.8 L 174.6 103.2 L 175.5 103.7 L 176.4 104.1 L 177.4 104.6 L 178.3 105.0 L 179.2 105.5 L 180.1 106.0 L 181.1 106.4 L 182.0 106.9 L 182.9 107.3 L 183.9 107.8 L 184.8 108.2 L 185.7 108.7 L 186.6 109.1 L 187.6 109.6 L 188.5 110.0 L 189.4 110.5 L 190.4 110.9 L 191.3 111.4 L 192.2 111.8 L 193.1 112.3 L 194.1 112.8 L 195.0 113.2 L 195.9 113.7 L 196.9 114.1 L 197.8 114.6 L 198.7 115.1 L 199.6 115.5 L 200.6 116.0 L 201.5 116.4 L 202.4 116.9 L 203.4 117.4 L 204.3 117.8 L 205.2 118.3 L 206.1 118.8 L 207.1 119.2 L 208.0 119.7 L 208.9 120.2 L 209.9 120.7 L 210.8 121.1 L 211.7 121.6 L 212.6 122.1 L 213.6 122.6 L 214.5 123.0 L 215.4 123.5 L 216.4 124.0 L 217.3 124.5 L 218.2 125.0 L 219.1 125.5 L 220.1 126.0 L 221.0 126.5 L 221.9 127.0 L 222.9 127.5 L 223.8 128.0 L 224.7 128.5 L 225.6 129.0 L 226.6 129.5 L 227.5 130.0 L 228.4 130.5 L 229.4 131.0 L 230.3 131.6 L 231.2 132.1 L 232.1 132.6 L 233.1 133.1 L 234.0 133.7 L 234.9 134.2 L 235.9 134.8 L 236.8 135.3 L 237.7 135.9 L 238.6 136.4 L 239.6 137.0 L 240.5 137.5 L 241.4 138.1 L 242.4 138.7 L 243.3 139.3 L 244.2 139.8 L 245.1 140.4 L 246.1 141.0 L 247.0 141.6 L 247.9 142.2 L 248.9 142.8 L 249.8 143.5 L 250.7 144.1 L 251.6 144.7 L 252.6 145.3 L 253.5 146.0 L 254.4 146.6 L 255.4 147.3 L 256.3 147.9 L 257.2 148.6 L 258.1 149.3 L 259.1 150.0 L 260.0 150.6 L 260.9 151.3 L 261.9 152.0 L 262.8 152.8 L 263.7 153.5 L 264.6 154.2 L 265.6 154.9 L 266.5 155.7 L 267.4 156.4 L 268.4 157.2 L 269.3 158.0 L 270.2 158.7 L 271.1 159.5 L 272.1 160.3 L 273.0 161.1 L 273.9 161.9 L 274.9 162.7 L 275.8 163.6 L 276.7 164.4 L 277.6 165.2 L 278.6 166.1 L 279.5 167.0 L 280.4 167.8 L 281.4 168.7 L 282.3 169.6 L 283.2 170.5 L 284.1 171.4 L 285.1 172.3 L 286.0 173.2 L 286.9 174.1 L 287.9 175.1 L 288.8 176.0 L 289.7 177.0 L 290.6 177.9 L 291.6 178.9 L 292.5 179.8 L 293.4 180.8 L 294.4 181.8 L 295.3 182.8 L 296.2 183.8 L 297.1 184.8 L 298.1 185.8 L 299.0 186.8 L 299.9 187.8 L 300.9 188.8 L 301.8 189.8 L 302.7 190.8 L 303.6 191.9 L 304.6 192.9 L 305.5 193.9 L 306.4 194.9 L 307.4 196.0 L 308.3 197.0 L 309.2 198.0 L 310.1 199.0 L 311.1 200.1 L 312.0 201.1 L 312.9 202.1 L 313.9 203.1 L 314.8 204.2 L 315.7 205.2 L 316.6 206.2 L 317.6 207.2 L 318.5 208.2 L 319.4 209.2 L 320.4 210.2 L 321.3 211.2 L 322.2 212.2 L 323.1 213.2 L 324.1 214.2 L 325.0 215.2 L 325.9 216.1 L 326.9 217.1 L 327.8 218.0 L 328.7 219.0 L 329.6 219.9 L 330.6 220.9 L 331.5 221.8 L 332.4 222.7 L 333.4 223.6 L 334.3 224.5 L 335.2 225.4 L 336.1 226.3 L 337.1 227.2 L 338.0 228.0 L 338.9 228.9 L 339.9 229.8 L 340.8 230.6 L 341.7 231.4 L 342.6 232.3 L 343.6 233.1 L 344.5 233.9 L 345.4 234.7 L 346.4 235.5 L 347.3 236.3 L 348.2 237.0 L 349.1 237.8 L 350.1 238.6 L 351.0 239.3 L 351.9 240.1 L 352.9 240.8 L 353.8 241.5 L 354.7 242.2 L 355.6 243.0 L 356.6 243.7 L 357.5 244.4 L 358.4 245.0 L 359.4 245.7 L 360.3 246.4 L 361.2 247.1 L 362.1 247.7 L 363.1 248.4 L 364.0 249.0 L 364.9 249.7 L 365.9 250.3 L 366.8 250.9 L 367.7 251.5 L 368.6 252.2 L 369.6 252.8 L 370.5 253.4 L 371.4 254.0 L 372.4 254.6 L 373.3 255.2 L 374.2 255.7 L 375.1 256.3 L 376.1 256.9 L 377.0 257.5 L 377.9 258.0 L 378.9 258.6 L 379.8 259.1 L 380.7 259.7 L 381.6 260.2 L 382.6 260.8 L 383.5 261.3 L 384.4 261.9 L 385.4 262.4 L 386.3 262.9 L 387.2 263.4 L 388.1 264.0 L 389.1 264.5 L 390.0 265.0" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M 698.8 400.0 L 697.9 399.5 L 697.0 399.0 L 696.2 398.5 L 695.3 397.9 L 694.5 397.4 L 693.6 396.9 L 692.8 396.4 L 691.9 395.9 L 691.1 395.4 L 690.2 394.9 L 689.4 394.3 L 688.5 393.8 L 687.7 393.3 L 686.8 392.8 L 686.0 392.3 L 685.1 391.8 L 684.3 391.3 L 683.4 390.7 L 682.6 390.2 L 681.7 389.7 L 680.9 389.2 L 680.1 388.7 L 679.2 388.2 L 678.4 387.7 L 677.5 387.1 L 676.7 386.6 L 675.8 386.1 L 675.0 385.6 L 674.1 385.1 L 673.3 384.6 L 672.5 384.1 L 671.6 383.5 L 670.8 383.0 L 669.9 382.5 L 669.1 382.0 L 668.3 381.5 L 667.4 381.0 L 666.6 380.5 L 665.7 379.9 L 664.9 379.4 L 664.1 378.9 L 663.2 378.4 L 662.4 377.9 L 661.6 377.4 L 660.7 376.9 L 659.9 376.3 L 659.1 375.8 L 658.2 375.3 L 657.4 374.8 L 656.6 374.3 L 655.7 373.8 L 654.9 373.3 L 654.1 372.7 L 653.2 372.2 L 652.4 371.7 L 651.6 371.2 L 650.7 370.7 L 649.9 370.2 L 649.1 369.7 L 648.2 369.1 L 647.4 368.6 L 646.6 368.1 L 645.8 367.6 L 644.9 367.1 L 644.1 366.6 L 643.3 366.1 L 642.5 365.5 L 641.6 365.0 L 640.8 364.5 L 640.0 364.0 L 639.2 363.5 L 638.3 363.0 L 637.5 362.5 L 636.7 361.9 L 635.9 361.4 L 635.0 360.9 L 634.2 360.4 L 633.4 359.9 L 632.6 359.4 L 631.8 358.9 L 630.9 358.3 L 630.1 357.8 L 629.3 357.3 L 628.5 356.8 L 627.7 356.3 L 626.9 355.8 L 626.0 355.3 L 625.2 354.7 L 624.4 354.2 L 623.6 353.7 L 622.8 353.2 L 622.0 352.7 L 621.1 352.2 L 620.3 351.7 L 619.5 351.1 L 618.7 350.6 L 617.9 350.1 L 617.1 349.6 L 616.2 349.1 L 615.4 348.6 L 614.6 348.1 L 613.8 347.5 L 613.0 347.0 L 612.2 346.5 L 611.4 346.0 L 610.6 345.5 L 609.7 345.0 L 608.9 344.5 L 608.1 343.9 L 607.3 343.4 L 606.5 342.9 L 605.7 342.4 L 604.9 341.9 L 604.1 341.4 L 603.2 340.9 L 602.4 340.3 L 601.6 339.8 L 600.8 339.3 L 600.0 338.8 L 599.2 338.3 L 598.4 337.8 L 597.5 337.3 L 596.7 336.7 L 595.9 336.2 L 595.1 335.7 L 594.3 335.2 L 593.5 334.7 L 592.7 334.2 L 591.8 333.7 L 591.0 333.1 L 590.2 332.6 L 589.4 332.1 L 588.6 331.6 L 587.7 331.1 L 586.9 330.6 L 586.1 330.1 L 585.3 329.5 L 584.5 329.0 L 583.6 328.5 L 582.8 328.0 L 582.0 327.5 L 581.1 327.0 L 580.3 326.5 L 579.5 325.9 L 578.7 325.4 L 577.8 324.9 L 577.0 324.4 L 576.1 323.9 L 575.3 323.4 L 574.5 322.9 L 573.6 322.3 L 572.8 321.8 L 571.9 321.3 L 571.1 320.8 L 570.2 320.3 L 569.4 319.8 L 568.5 319.3 L 567.7 318.7 L 566.8 318.2 L 565.9 317.7 L 565.1 317.2 L 564.2 316.7 L 563.3 316.2 L 562.4 315.7 L 561.5 315.1 L 560.7 314.6 L 559.8 314.1 L 558.9 313.6 L 558.0 313.1 L 557.1 312.6 L 556.2 312.1 L 555.3 311.5 L 554.3 311.0 L 553.4 310.5 L 552.5 310.0 L 551.6 309.5 L 550.6 309.0 L 549.7 308.5 L 548.7 307.9 L 547.8 307.4 L 546.8 306.9 L 545.9 306.4 L 544.9 305.9 L 543.9 305.4 L 542.9 304.9 L 541.9 304.3 L 540.9 303.8 L 539.9 303.3 L 538.9 302.8 L 537.9 302.3 L 536.8 301.8 L 535.8 301.3 L 534.7 300.7 L 533.7 300.2 L 532.6 299.7 L 531.5 299.2 L 530.4 298.7 L 529.3 298.2 L 528.2 297.7 L 527.1 297.1 L 526.0 296.6 L 524.8 296.1 L 523.7 295.6 L 522.5 295.1 L 521.3 294.6 L 520.1 294.1 L 518.9 293.5 L 517.7 293.0 L 516.5 292.5 L 515.2 292.0 L 514.0 291.5 L 512.7 291.0 L 511.4 290.5 L 510.1 289.9 L 508.8 289.4 L 507.5 288.9 L 506.1 288.4 L 504.8 287.9 L 503.4 287.4 L 502.0 286.9 L 500.6 286.3 L 499.2 285.8 L 497.8 285.3 L 496.3 284.8 L 494.9 284.3 L 493.4 283.8 L 491.9 283.3 L 490.4 282.7 L 488.9 282.2 L 487.3 281.7 L 485.8 281.2 L 484.2 280.7 L 482.6 280.2 L 481.0 279.7 L 479.4 279.1 L 477.8 278.6 L 476.1 278.1 L 474.5 277.6 L 472.8 277.1 L 471.1 276.6 L 469.4 276.1 L 467.7 275.5 L 466.0 275.0 L 464.2 274.5 L 462.5 274.0 L 460.7 273.5 L 459.0 273.0 L 457.2 272.5 L 455.4 271.9 L 453.6 271.4 L 451.8 270.9 L 450.0 270.4 L 448.2 269.9 L 446.3 269.4 L 444.5 268.9 L 442.7 268.3 L 440.8 267.8 L 439.0 267.3 L 437.1 266.8 L 435.3 266.3 L 433.4 265.8 L 431.6 265.3 L 429.7 264.7 L 427.8 264.2 L 426.0 263.7 L 424.1 263.2 L 422.3 262.7 L 420.4 262.2 L 418.6 261.7 L 416.7 261.1 L 414.9 260.6 L 413.1 260.1 L 411.3 259.6 L 409.4 259.1 L 407.6 258.6 L 405.8 258.1 L 404.1 257.5 L 402.3 257.0 L 400.5 256.5 L 398.8 256.0 L 397.0 255.5 L 395.3 255.0 L 393.5 254.5 L 391.8 253.9 L 390.1 253.4 L 388.5 252.9 L 386.8 252.4 L 385.1 251.9 L 383.5 251.4 L 381.8 250.9 L 380.2 250.3 L 378.6 249.8 L 377.1 249.3 L 375.5 248.8 L 373.9 248.3 L 372.4 247.8 L 370.9 247.3 L 369.4 246.7 L 367.9 246.2 L 366.4 245.7 L 364.9 245.2 L 363.5 244.7 L 362.0 244.2 L 360.6 243.7 L 359.2 243.1 L 357.8 242.6 L 356.5 242.1 L 355.1 241.6 L 353.8 241.1 L 352.5 240.6 L 351.1 240.1 L 349.8 239.5 L 348.6 239.0 L 347.3 238.5 L 346.0 238.0 L 344.8 237.5 L 343.6 237.0 L 342.3 236.5 L 341.1 235.9 L 339.9 235.4 L 338.8 234.9 L 337.6 234.4 L 336.4 233.9 L 335.3 233.4 L 334.2 232.9 L 333.0 232.3 L 331.9 231.8 L 330.8 231.3 L 329.7 230.8 L 328.7 230.3 L 327.6 229.8 L 326.5 229.3 L 325.5 228.7 L 324.4 228.2 L 323.4 227.7 L 322.4 227.2 L 321.3 226.7 L 320.3 226.2 L 319.3 225.7 L 318.3 225.1 L 317.3 224.6 L 316.4 224.1 L 315.4 223.6 L 314.4 223.1 L 313.5 222.6 L 312.5 222.1 L 311.6 221.5 L 310.6 221.0 L 309.7 220.5 L 308.8 220.0" fill="none" stroke="#2d70b3" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="430.6" cy="265.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(440.6, 280.0)">
      <text x="43.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A'(1,5 ; 0)</text>
    </g>
    <circle cx="552.5" cy="310.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(562.5, 325.0)">
      <text x="39.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B'(3 ; −1)</text>
    </g>
    <circle cx="308.8" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(258.8, 208.0)">
      <text x="36.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">C'(0 ; 1)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_g) : x ≤ 1</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#2d70b3" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_g⁻¹)</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#d4a017" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Axe de symétrie y = x</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>
<p>\\(C_{g^{-1}}\\) est l'image de \\((C_f)\\) restreinte à \\(]-\\infty ; 1]\\) par la symétrie d'axe \\(y=x\\).</p>

<p><strong>3) Calcul d'aire</strong></p>
<p>\\[A = \\left(\\int_0^1 f(x)\\,dx + \\int_1^{\\dfrac{3}{2}} f(x)\\,dx\\right) \\times U_A\\]</p>
<p>\\[\\int_0^1 f(x)\\,dx = \\int_0^1\\!\\left(-x+\\dfrac{3}{2}-\\dfrac{x}{x^2+1}\\right)dx = \\left[-\\dfrac{x^2}{2}+\\dfrac{3x}{2}-\\dfrac{1}{2}\\ln(x^2+1)\\right]_0^1 = 1 - \\dfrac{1}{2}\\ln 2\\]</p>
<p>Par intégration par parties avec \\(u=x-1\\), \\(v'=e^{-x+1}\\) :</p>
<p>\\[\\int_1^{\\dfrac{3}{2}} (x-1)e^{-x+1}\\,dx = \\left[-(x-1)e^{-x+1}\\right]_1^{\\dfrac{3}{2}} + \\int_1^{\\dfrac{3}{2}}e^{-x+1}\\,dx = \\left[-xe^{-x+1}\\right]_1^{\\dfrac{3}{2}} = -\\dfrac{3}{2}e^{-\\dfrac{1}{2}}+1\\]</p>
<p>\\[A = \\left(1-\\dfrac{1}{2}\\ln 2 - \\dfrac{3}{2}e^{-\\dfrac{1}{2}}+1\\right) \\times U_A = \\dfrac{4-\\ln 2 - 3e^{-\\dfrac{1}{2}}}{2} \\times U_A\\]</p>
<p>Avec \\(U_A = 4\\text{ cm}^2\\) :</p>
<p>\\[\\boxed{A = 2\\!\\left(4 - \\ln 2 - 3e^{-\\dfrac{1}{2}}\\right) \\text{ cm}^2}\\]</p>
</div>
`
    }
  ]
},

{
  id: 'bac-2002-D-session-normale',
  year: 2002,
  series: 'D',
  tour: 'Session Normale',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale 2002',
  topics: ['Nombres complexes & transformations', 'Probabilités', 'Fonctions (ln, exponentielle, suites, intégrales)'],
  parts: [
    {
      label: 'Exercice I — Nombres complexes & application f(z) (4 pts)',
      problem: `<p>Le plan complexe \\(P\\) est rapporté à un repère orthonormé direct \\((O;\\vec{u},\\vec{v})\\) d'unité graphique 2 cm. On désigne par \\(A\\) le point d'affixe 2, par \\(B\\) le point d'affixe \\(2i\\) et par \\(\\Omega\\) le point d'affixe \\(1+i\\). On considère l'application \\(f\\) qui, à tout nombre complexe \\(z \\neq 2\\), associe :
\\[f(z) = \\dfrac{iz + 2}{z - 2}\\]</p>
<ol>
  <li>
    On pose \\(z = x + iy\\) et \\(f(z) = X + iY\\) avec \\(x, y, X, Y\\) réels.<br>
    <strong>a)</strong> Exprimer \\(X\\) et \\(Y\\) en fonction de \\(x\\) et \\(y\\).<br>
    <strong>b)</strong> En déduire l'ensemble des points \\(M\\) d'affixe \\(z\\) tels que \\(f(z)\\) soit réel, et représenter cet ensemble.
  </li>
  <li>
    Soit \\(C\\) l'image de \\(A\\) par la rotation de centre \\(O\\) et d'angle \\(-\\dfrac{3\\pi}{4}\\).<br>
    <strong>a)</strong> Déterminer l'affixe \\(z_C\\) du point \\(C\\).<br>
    <strong>b)</strong> Déterminer une mesure en radians de l'angle \\((\\overrightarrow{O\\Omega} ; \\overrightarrow{OC})\\). En déduire que les points \\(\\Omega\\), \\(O\\) et \\(C\\) sont alignés.
  </li>
  <li>
    On pose \\(z' = f(z)\\).<br>
    <strong>a)</strong> Vérifier que \\(i\\) n'a pas d'antécédent par \\(f\\), et exprimer \\(z\\) en fonction de \\(z'\\) (pour \\(z' \\neq i\\)).<br>
    <strong>b)</strong> \\(M\\) est le point d'affixe \\(z\\) (\\(z \\neq 2\\)) et \\(M'\\) celui d'affixe \\(z'\\) (\\(z' \\neq i\\)). Montrer que \\(OM = 2 \\dfrac{M'D}{M'E}\\) où \\(D\\) et \\(E\\) sont les points d'affixes respectives \\(-1\\) et \\(i\\).<br>
    <strong>c)</strong> Montrer que, lorsque le point \\(M\\) décrit le cercle de centre \\(O\\) et de rayon 2 privé du point \\(A\\), son image \\(M'\\) appartient à une droite fixe que l'on définira graphiquement.
  </li>
</ol>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Application complexe &amp ; transformation du plan</span>
  <ul>
    <li><strong>Application affine :</strong> $f(z) = az + b$ est une similitude directe si $a \\neq 0$, de rapport $|a|$ et d'angle $\\arg(a)$.</li>
    <li><strong>Point fixe :</strong> $f(z_0) = z_0 \\iff az_0 + b = z_0 \\iff z_0 = \\dfrac{b}{1-a}$ (si $a \\neq 1$).</li>
    <li><strong>Image d'une droite / d'un cercle :</strong> Une similitude envoie droite sur droite et cercle sur cercle.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p><strong>1) a) Expressions de X et Y</strong></p>
<p>Pour \\((x;y) \\neq (2;0)\\) :</p>
<p>\\[f(z) = \\dfrac{i(x+iy)+2}{(x-2)+iy} = \\dfrac{(-y+2)+ix}{(x-2)+iy} \\cdot \\dfrac{(x-2)-iy}{(x-2)-iy} = \\dfrac{(2y+2x-4)+i(y^2-2y+x^2-2x)}{(x-2)^2+y^2}\\]</p>
<p>\\[\\boxed{X = \\dfrac{2x+2y-4}{(x-2)^2+y^2}}, \\qquad \\boxed{Y = \\dfrac{x^2+y^2-2x-2y}{(x-2)^2+y^2}}\\]</p>

<p><strong>1) b) Ensemble où f(z) est réel</strong></p>
<p>\\(f(z) \\in \\mathbb{R} \\Leftrightarrow Y = 0 \\Leftrightarrow x^2+y^2-2x-2y = 0 \\Leftrightarrow (x-1)^2+(y-1)^2 = 2\\)</p>
<p>C'est le <strong>cercle de centre \\(\\Omega(1;1)\\) et de rayon \\(\\sqrt{2}\\)</strong>, privé du point \\(A\\).</p>

<p><strong>2) a) Affixe de C</strong></p>
<p>\\[z_C = e^{-i\\dfrac{3\\pi}{4}} \\cdot z_A = \\left(-\\dfrac{\\sqrt{2}}{2} - i\\dfrac{\\sqrt{2}}{2}\\right)\\times 2 \\quad \\Rightarrow \\quad \\boxed{z_C = -\\sqrt{2}(1+i)}\\]</p>

<p><strong>2) b) Alignement de \\(\\Omega\\), O, C</strong></p>
<p>\\[\\dfrac{z_C}{z_\\Omega} = \\dfrac{-\\sqrt{2}(1+i)}{1+i} = -\\sqrt{2} \\in \\mathbb{R}^-\\]</p>
<p>Donc \\(\\arg\\!\\left(\\dfrac{z_C}{z_\\Omega}\\right) = \\pi\\,[2\\pi]\\), soit \\((\\overrightarrow{O\\Omega};\\overrightarrow{OC}) = \\pi\\,[2\\pi]\\) : les points \\(\\Omega\\), \\(O\\), \\(C\\) sont bien <strong>alignés</strong>.</p>

<p><strong>3) a) i n'a pas d'antécédent ; expression de z</strong></p>
<p>\\(f(z) = i \\Leftrightarrow iz+2 = iz-2i \\Leftrightarrow 2 = -2i\\), impossible. Donc \\(i\\) n'a pas d'antécédent par \\(f\\).</p>
<p>Pour \\(z' \\neq i\\) : \\(z'(z-2)=iz+2 \\Rightarrow z(z'-i)=2z'+2 \\Rightarrow \\boxed{z = \\dfrac{2(z'+1)}{z'-i}}\\).</p>

<p><strong>3) b) \\(OM = 2\\,\\dfrac{M'D}{M'E}\\)</strong></p>
<p>\\[z = \\dfrac{2(z'+1)}{z'-i} = 2\\,\\dfrac{z'-z_D}{z'-z_E} \\quad\\Rightarrow\\quad |z| = 2\\,\\dfrac{|z'-z_D|}{|z'-z_E|} \\quad\\Rightarrow\\quad \\boxed{OM = 2\\,\\dfrac{M'D}{M'E}}\\]</p>

<p><strong>3) c) Image du cercle de rayon 2</strong></p>
<p>\\(OM = 2 \\Rightarrow 2\\,\\dfrac{M'D}{M'E} = 2 \\Rightarrow M'D = M'E\\)</p>
<p>Donc \\(M'\\) décrit la <strong>médiatrice du segment \\([DE]\\)</strong> (droite d'équation \\(y = \\dfrac{1}{2}\\) dans le repère).</p>`
    },
    {
      label: 'Exercice II — Probabilités avec urne (n + 3n boules) (4 pts)',
      problem: `<p>Une urne contient <strong>\\(n\\) boules noires</strong> et <strong>\\(3n\\) boules blanches</strong> (soit \\(4n\\) boules en tout).</p>
<ol>
  <li>On tire simultanément deux boules de l'urne (équiprobabilité). Calculer la probabilité \\(P_n\\) de tirer une boule de chaque couleur.</li>
  <li>On tire une boule, on la replace, puis on en tire une autre (tirage avec remise). Calculer la probabilité de tirer une boule de chaque couleur.</li>
  <li>
    Quelle est la limite de \\(P_n\\) quand \\(n \\to +\\infty\\) ?<br>
    À partir de quelle valeur de \\(n\\) la différence \\(\\left|P_n - \\dfrac{3}{8}\\right|\\) est-elle inférieure à \\(\\dfrac{1}{100}\\) ?
  </li>
</ol>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Probabilités conditionnelles &amp ; loi de X</span>
  <ul>
    <li><strong>Probabilité conditionnelle :</strong> $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ si $P(B) > 0$.</li>
    <li><strong>Tirages sans remise :</strong> Les probabilités changent après chaque tirage — l'effectif total diminue.</li>
    <li><strong>Loi de X :</strong> On liste toutes les valeurs possibles de X, on calcule chaque probabilité, puis $E(X) = \\sum k \\cdot P(X=k)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>
<p><strong>1) Tirage simultané — probabilité \\(P_n\\)</strong></p>
<p>\\(\\text{Card}(\\Omega) = C_{4n}^2 = \\dfrac{4n(4n-1)}{2} = 2n(4n-1)\\)</p>
<p>\\[P_n = \\dfrac{C_n^1 \\times C_{3n}^1}{C_{4n}^2} = \\dfrac{n \\times 3n}{2n(4n-1)} = \\dfrac{3n^2}{2n(4n-1)} = \\boxed{\\dfrac{3n}{8n-2}}\\]</p>

<p><strong>2) Tirage avec remise</strong></p>
<p>\\(\\text{Card}(\\Omega) = (4n)^2 = 16n^2\\). Les cas favorables (une noire puis une blanche, ou l'inverse) : \\(2 \\times n \\times 3n = 6n^2\\).</p>
<p>\\[P(A) = \\dfrac{6n^2}{16n^2} = \\dfrac{6}{16} = \\boxed{\\dfrac{3}{8}}\\]</p>

<p><strong>3) Limite de \\(P_n\\) et seuil</strong></p>
<p>\\[\\lim_{n\\to+\\infty} P_n = \\lim_{n\\to+\\infty}\\dfrac{3n}{8n-2} = \\boxed{\\dfrac{3}{8}}\\]</p>
<p>On cherche \\(n\\) tel que \\(\\left|P_n - \\dfrac{3}{8}\\right| < \\dfrac{1}{100}\\). Puisque \\(P_n < \\dfrac{3}{8}\\) pour tout \\(n\\) fini :</p>
<p>\\[\\dfrac{3}{8} - \\dfrac{3n}{8n-2} = \\dfrac{3(8n-2) - 24n}{8(8n-2)} = \\dfrac{-6}{8(8n-2)} \\]</p>
<p>En valeur absolue : \\(\\dfrac{6}{8(8n-2)} < \\dfrac{1}{100} \\Leftrightarrow 600 < 8(8n-2) \\Leftrightarrow 600 < 64n - 16 \\Leftrightarrow n > \\dfrac{616}{64} \\approx 9{,}625\\)</p>
<p>Donc à partir de \\(\\boxed{n = 10}\\), la différence est inférieure à \\(\\dfrac{1}{100}\\).</p>`
    },
    {
      label: 'Problème — Fonction définie par morceaux, suites, intégrales, trajectoire (12 pts)',
      problem: `<p>Soit \\(f\\) la fonction définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases} x - x\\ln(-x) & \\text{si } x < 0 \\ 0 & \\text{si } x = 0 \\ x\\,e^{-\\dfrac{1}{x}} & \\text{si } x > 0 \\end{cases}\\]</p>
<p>On note \\((C_f)\\) la courbe représentative de \\(f\\) dans un repère orthonormé \\((O;\\vec{i};\\vec{j})\\). Unité graphique : 2 cm.</p>

<p><strong>PARTIE A</strong></p>
<ol>
  <li>Montrer que \\(f\\) est continue sur \\(\\mathbb{R}\\).</li>
  <li>Étudier les limites de \\(f\\) en \\(-\\infty\\) et en \\(+\\infty\\).</li>
  <li>Étudier la dérivabilité de \\(f\\) en 0. Donner une interprétation graphique.</li>
  <li>Étudier les variations de \\(f\\).</li>
  <li>
    <strong>a)</strong> Calculer \\(\\displaystyle\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x}\\). Que peut-on en déduire pour \\((C_f)\\) ?<br>
    <strong>b)</strong> Montrer que la droite \\((D) : y = x - 1\\) est asymptote à \\((C_f)\\) au voisinage de \\(+\\infty\\).
  </li>
  <li>Construire la courbe \\((C_f)\\) et la droite \\((D)\\). On tracera les tangentes et demi-tangentes aux points d'abscisses \\(-e\\), \\(-1\\) et \\(0\\).</li>
</ol>

<p><strong>PARTIE B</strong></p>
<p>Pour tout entier naturel \\(n\\), on pose \\(\\displaystyle U_n = \\int_{-\\dfrac{1}{n}}^{-e} f(x)\\,dx\\).</p>
<ol>
  <li>En étudiant le signe de \\(f\\) sur \\([-e ; -\\dfrac{1}{n}]\\), montrer que \\(U_n \\geq 0\\) pour tout \\(n \\in \\mathbb{N}\\).</li>
  <li>Sans calculer explicitement \\(U_n\\), déterminer le signe de \\(U_{n+1} - U_n\\). En déduire que la suite \\((U_n)\\) est croissante.</li>
  <li>
    À l'aide d'une intégration par parties, montrer que :
    \\[\\int_{-\\dfrac{1}{n}}^{-e} x\\ln(-x)\\,dx = \\dfrac{e^2}{4} + \\dfrac{1}{4n^2} + \\dfrac{\\ln n}{2n^2}\\]
    En déduire l'expression de \\(U_n\\) en fonction de \\(n\\). Donner une interprétation graphique de \\(U_n\\).
  </li>
  <li>Calculer \\(\\displaystyle\\lim_{n\\to+\\infty} U_n\\). En déduire l'aire (en cm²) du domaine délimité par \\((C_f)\\), les axes et la droite \\(x = -e\\).</li>
</ol>

<p><strong>PARTIE C</strong></p>
<p>On considère le mouvement d'un mobile dont les coordonnées en fonction du temps sont :</p>
<p>\\[\\begin{cases} x(t) = \\dfrac{1}{t} \\ y(t) = \\dfrac{e^{-t}}{t} \\end{cases}, \\quad t > 0\\]</p>
<ol>
  <li>Déterminer l'équation de la trajectoire du mobile.</li>
  <li>Construire (en pointillés) dans le même repère que \\((C_f)\\) la trajectoire du mobile.</li>
</ol>
<p><em>On donne : \\(e \\approx 2{,}72\\) ; \\(e^2 \\approx 7{,}39\\) ; \\(\\lim_{x\\to 0}x\\ln x = 0\\) ; \\(\\lim_{x\\to 0}\\dfrac{e^x-1}{x}=1\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions par morceaux, suites &amp ; intégrales</span>
  <ul>
    <li><strong>Continuité en $a$ :</strong> $f$ continue en $a \\iff \\lim_{x\\to a^-} f(x) = \\lim_{x\\to a^+} f(x) = f(a)$.</li>
    <li><strong>Dérivabilité en $a$ :</strong> Vérifier que les dérivées à gauche et à droite sont égales en $a$.</li>
    <li><strong>Suite récurrente :</strong> $u_{n+1} = g(u_n)$ — monotonie via le signe de $u_{n+1} - u_n$, convergence vers le point fixe $\\ell = g(\\ell)$.</li>
    <li><strong>Intégration par parties :</strong> $\\int_a^b u\\,v'\\,dx = [uv]_a^b - \\int_a^b u'\\,v\\,dx$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>PARTIE A</strong></p>

<p><strong>1) Continuité en 0</strong></p>
<p>\\(\\displaystyle\\lim_{x\\to 0^-}f(x) = \\lim_{X\\to 0^+}(-X+X\\ln X) = 0\\) (car \\(\\lim_{X\\to0^+}X\\ln X=0\\)).</p>
<p>\\(\\displaystyle\\lim_{x\\to 0^+}f(x) = \\lim_{x\\to 0^+}xe^{-\\dfrac{1}{x}} = 0\\) (car \\(e^{-\\dfrac{1}{x}}\\to 0\\) plus vite que \\(x\\to 0\\)).</p>
<p>Donc \\(\\displaystyle\\lim_{x\\to0^-}f(x) = \\lim_{x\\to0^+}f(x) = f(0) = 0\\) : \\(f\\) est continue en 0, et sur \\(\\mathbb{R}\\).</p>

<p><strong>2) Limites en \\(\\pm\\infty\\)</strong></p>
<p>\\(\\displaystyle\\lim_{x\\to-\\infty}f(x) = \\lim_{X\\to+\\infty}X(-1+\\ln X) = +\\infty\\) (avec le changement \\(X=-x\\)).</p>
<p>Pour \\(+\\infty\\), on pose \\(X = -\\dfrac{1}{x}\\to 0^-\\) quand \\(x\\to+\\infty\\) : \\(f(x) = -\\dfrac{1}{X}e^X \\to +\\infty\\). Donc \\(\\displaystyle\\lim_{x\\to+\\infty}f(x) = +\\infty\\).</p>

<p><strong>3) Dérivabilité en 0</strong></p>
<p>\\[\\dfrac{f(x)-f(0)}{x-0}\\bigg|_{x\\to0^-} = \\dfrac{x-x\\ln(-x)}{x} = 1-\\ln(-x) \\xrightarrow{x\\to0^-} +\\infty\\]</p>
<p>\\[\\dfrac{f(x)-f(0)}{x-0}\\bigg|_{x\\to0^+} = e^{-\\dfrac{1}{x}} \\xrightarrow{x\\to0^+} 0\\]</p>
<p>Les deux limites sont différentes : \\(f\\) n'est <strong>pas dérivable en 0</strong>. Le point \\((0;0)\\) est un <strong>point anguleux</strong> : demi-tangente verticale à gauche (\\(x=0\\)), demi-tangente horizontale \\(y=0\\) à droite.</p>

<p><strong>4) Variations de f</strong></p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2002-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2002-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="315" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−1</text>
    <text x="510" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <!-- Dérivée nulle en -1 -->
    <line x1="315" y1="50" x2="315" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="315" y1="86" x2="315" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    
    <!-- Non dérivable en 0 (ligne f') -->
    <line x1="507" y1="50" x2="507" y2="100" stroke="#b83232" stroke-width="2"/>
    <line x1="513" y1="50" x2="513" y2="100" stroke="#b83232" stroke-width="2"/>
    
    <text x="210" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="315" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="412" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="610" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <line x1="170" y1="135" x2="295" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2002-f)"/>
    <text x="315" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−1</text>
    <line x1="335" y1="225" x2="490" y2="185" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2002-f)"/>
    <text x="510" y="175" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="530" y1="175" x2="683" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2002-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
  </svg>
</div>





<p><strong>5) a) Branche parabolique en \\(-\\infty\\)</strong></p>
<p>\\[\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x} = \\lim_{x\\to-\\infty}(1-\\ln(-x)) = -\\infty\\]</p>
<p>\\((C_f)\\) admet une <strong>branche parabolique de direction \\((Oy)\\)</strong> au voisinage de \\(-\\infty\\).</p>

<p><strong>5) b) Asymptote \\((D): y=x-1\\) en \\(+\\infty\\)</strong></p>
<p>On pose \\(X = -\\dfrac{1}{x}\\) (\\(X\\to 0^-\\) quand \\(x\\to+\\infty\\)) :</p>
<p>\\[\\lim_{x\\to+\\infty}[f(x)-(x-1)] = \\lim_{x\\to+\\infty}(xe^{-\\dfrac{1}{x}}-x+1) = \\lim_{X\\to0^-}\\left(-\\dfrac{1}{X}e^X+\\dfrac{1}{X}+1\\right) = \\lim_{X\\to0^-}\\dfrac{1-e^X}{X}+1 = -1+1 = 0\\]</p>
<p>Donc \\((D): y=x-1\\) est bien une <strong>asymptote oblique</strong> à \\((C_f)\\) en \\(+\\infty\\).</p>

<p><em>(Tangente en \\(x=-e\\) : \\(f'(-e)=-\\ln e=-1\\), \\(f(-e)=0\\) → \\((T): y = -(x+e)\\).)</em></p>

<p><strong>6) Construire la courbe \\((C_f)\\) et la droite \\((D)\\)</strong></p>

<p>La courbe \\((C_f)\\) admet en \\(+\\infty\\) l'asymptote oblique \\((D): y = x - 1\\), en \\(-\\infty\\) une branche parabolique de direction \\((Oy)\\), et en \\(O(0 ; 0)\\) une demi-tangente verticale à gauche et horizontale à droite.</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2002 — Courbe (C_f) et Asymptote (D)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="130.0" y1="40.0" x2="130.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="195.0" y1="40.0" x2="195.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="260.0" y1="40.0" x2="260.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40.0" x2="390.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="455.0" y1="40.0" x2="455.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="520.0" y1="40.0" x2="520.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="585.0" y1="40.0" x2="585.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="650.0" y1="40.0" x2="650.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="348.6" x2="715.0" y2="348.6" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="245.7" x2="715.0" y2="245.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="194.3" x2="715.0" y2="194.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="142.9" x2="715.0" y2="142.9" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="91.4" x2="715.0" y2="91.4" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="297.1" x2="735" y2="297.1" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="325.0" y1="415" x2="325.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="315.1" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="307.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="293.1" x2="65.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="130.0" y1="293.1" x2="130.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="130.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="195.0" y1="293.1" x2="195.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="195.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="260.0" y1="293.1" x2="260.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="260.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="390.0" y1="293.1" x2="390.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="455.0" y1="293.1" x2="455.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="455.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="520.0" y1="293.1" x2="520.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="520.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="585.0" y1="293.1" x2="585.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="585.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="650.0" y1="293.1" x2="650.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="650.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="321.0" y1="400.0" x2="329.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="321.0" y1="348.6" x2="329.0" y2="348.6" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="352.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="321.0" y1="245.7" x2="329.0" y2="245.7" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="249.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="321.0" y1="194.3" x2="329.0" y2="194.3" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="198.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="321.0" y1="142.9" x2="329.0" y2="142.9" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="146.9" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="321.0" y1="91.4" x2="329.0" y2="91.4" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="95.4" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><text x="315.0" y="312.1" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="260.0" y1="400.0" x2="715.0" y2="40.0" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 217.7 L 65.7 218.5 L 66.5 219.3 L 67.2 220.1 L 68.0 220.9 L 68.7 221.7 L 69.4 222.5 L 70.2 223.3 L 70.9 224.1 L 71.7 224.9 L 72.4 225.7 L 73.2 226.5 L 73.9 227.3 L 74.6 228.1 L 75.4 228.9 L 76.1 229.7 L 76.9 230.5 L 77.6 231.2 L 78.3 232.0 L 79.1 232.8 L 79.8 233.6 L 80.6 234.4 L 81.3 235.1 L 82.0 235.9 L 82.8 236.7 L 83.5 237.5 L 84.3 238.2 L 85.0 239.0 L 85.7 239.8 L 86.5 240.5 L 87.2 241.3 L 88.0 242.0 L 88.7 242.8 L 89.5 243.6 L 90.2 244.3 L 90.9 245.1 L 91.7 245.8 L 92.4 246.6 L 93.2 247.3 L 93.9 248.1 L 94.6 248.8 L 95.4 249.5 L 96.1 250.3 L 96.9 251.0 L 97.6 251.7 L 98.3 252.5 L 99.1 253.2 L 99.8 253.9 L 100.6 254.7 L 101.3 255.4 L 102.1 256.1 L 102.8 256.8 L 103.5 257.6 L 104.3 258.3 L 105.0 259.0 L 105.8 259.7 L 106.5 260.4 L 107.2 261.1 L 108.0 261.8 L 108.7 262.5 L 109.5 263.2 L 110.2 263.9 L 110.9 264.6 L 111.7 265.3 L 112.4 266.0 L 113.2 266.7 L 113.9 267.4 L 114.6 268.1 L 115.4 268.8 L 116.1 269.5 L 116.9 270.2 L 117.6 270.9 L 118.4 271.5 L 119.1 272.2 L 119.8 272.9 L 120.6 273.6 L 121.3 274.2 L 122.1 274.9 L 122.8 275.6 L 123.5 276.2 L 124.3 276.9 L 125.0 277.6 L 125.8 278.2 L 126.5 278.9 L 127.2 279.5 L 128.0 280.2 L 128.7 280.8 L 129.5 281.5 L 130.2 282.1 L 130.9 282.8 L 131.7 283.4 L 132.4 284.0 L 133.2 284.7 L 133.9 285.3 L 134.7 285.9 L 135.4 286.6 L 136.1 287.2 L 136.9 287.8 L 137.6 288.4 L 138.4 289.1 L 139.1 289.7 L 139.8 290.3 L 140.6 290.9 L 141.3 291.5 L 142.1 292.1 L 142.8 292.7 L 143.5 293.3 L 144.3 293.9 L 145.0 294.5 L 145.8 295.1 L 146.5 295.7 L 147.3 296.3 L 148.0 296.9 L 148.7 297.5 L 149.5 298.1 L 150.2 298.6 L 151.0 299.2 L 151.7 299.8 L 152.4 300.4 L 153.2 300.9 L 153.9 301.5 L 154.7 302.1 L 155.4 302.6 L 156.1 303.2 L 156.9 303.8 L 157.6 304.3 L 158.4 304.9 L 159.1 305.4 L 159.8 306.0 L 160.6 306.5 L 161.3 307.1 L 162.1 307.6 L 162.8 308.1 L 163.6 308.7 L 164.3 309.2 L 165.0 309.7 L 165.8 310.3 L 166.5 310.8 L 167.3 311.3 L 168.0 311.8 L 168.7 312.3 L 169.5 312.8 L 170.2 313.4 L 171.0 313.9 L 171.7 314.4 L 172.4 314.9 L 173.2 315.4 L 173.9 315.9 L 174.7 316.4 L 175.4 316.8 L 176.2 317.3 L 176.9 317.8 L 177.6 318.3 L 178.4 318.8 L 179.1 319.3 L 179.9 319.7 L 180.6 320.2 L 181.3 320.7 L 182.1 321.1 L 182.8 321.6 L 183.6 322.0 L 184.3 322.5 L 185.0 322.9 L 185.8 323.4 L 186.5 323.8 L 187.3 324.3 L 188.0 324.7 L 188.7 325.2 L 189.5 325.6 L 190.2 326.0 L 191.0 326.4 L 191.7 326.9 L 192.5 327.3 L 193.2 327.7 L 193.9 328.1 L 194.7 328.5 L 195.4 328.9 L 196.2 329.3 L 196.9 329.7 L 197.6 330.1 L 198.4 330.5 L 199.1 330.9 L 199.9 331.3 L 200.6 331.7 L 201.3 332.1 L 202.1 332.4 L 202.8 332.8 L 203.6 333.2 L 204.3 333.5 L 205.0 333.9 L 205.8 334.3 L 206.5 334.6 L 207.3 335.0 L 208.0 335.3 L 208.8 335.7 L 209.5 336.0 L 210.2 336.3 L 211.0 336.7 L 211.7 337.0 L 212.5 337.3 L 213.2 337.6 L 213.9 337.9 L 214.7 338.3 L 215.4 338.6 L 216.2 338.9 L 216.9 339.2 L 217.6 339.5 L 218.4 339.8 L 219.1 340.0 L 219.9 340.3 L 220.6 340.6 L 221.4 340.9 L 222.1 341.2 L 222.8 341.4 L 223.6 341.7 L 224.3 341.9 L 225.1 342.2 L 225.8 342.4 L 226.5 342.7 L 227.3 342.9 L 228.0 343.2 L 228.8 343.4 L 229.5 343.6 L 230.2 343.9 L 231.0 344.1 L 231.7 344.3 L 232.5 344.5 L 233.2 344.7 L 233.9 344.9 L 234.7 345.1 L 235.4 345.3 L 236.2 345.5 L 236.9 345.7 L 237.7 345.8 L 238.4 346.0 L 239.1 346.2 L 239.9 346.3 L 240.6 346.5 L 241.4 346.6 L 242.1 346.8 L 242.8 346.9 L 243.6 347.1 L 244.3 347.2 L 245.1 347.3 L 245.8 347.4 L 246.5 347.5 L 247.3 347.6 L 248.0 347.7 L 248.8 347.8 L 249.5 347.9 L 250.2 348.0 L 251.0 348.1 L 251.7 348.2 L 252.5 348.2 L 253.2 348.3 L 254.0 348.4 L 254.7 348.4 L 255.4 348.4 L 256.2 348.5 L 256.9 348.5 L 257.7 348.5 L 258.4 348.6 L 259.1 348.6 L 259.9 348.6 L 260.6 348.6 L 261.4 348.6 L 262.1 348.5 L 262.8 348.5 L 263.6 348.5 L 264.3 348.5 L 265.1 348.4 L 265.8 348.4 L 266.6 348.3 L 267.3 348.2 L 268.0 348.2 L 268.8 348.1 L 269.5 348.0 L 270.3 347.9 L 271.0 347.8 L 271.7 347.7 L 272.5 347.6 L 273.2 347.4 L 274.0 347.3 L 274.7 347.1 L 275.4 347.0 L 276.2 346.8 L 276.9 346.7 L 277.7 346.5 L 278.4 346.3 L 279.1 346.1 L 279.9 345.9 L 280.6 345.7 L 281.4 345.4 L 282.1 345.2 L 282.9 344.9 L 283.6 344.7 L 284.3 344.4 L 285.1 344.1 L 285.8 343.8 L 286.6 343.5 L 287.3 343.2 L 288.0 342.9 L 288.8 342.6 L 289.5 342.2 L 290.3 341.8 L 291.0 341.5 L 291.7 341.1 L 292.5 340.7 L 293.2 340.3 L 294.0 339.8 L 294.7 339.4 L 295.5 339.0 L 296.2 338.5 L 296.9 338.0 L 297.7 337.5 L 298.4 337.0 L 299.2 336.5 L 299.9 335.9 L 300.6 335.3 L 301.4 334.8 L 302.1 334.1 L 302.9 333.5 L 303.6 332.9 L 304.3 332.2 L 305.1 331.5 L 305.8 330.8 L 306.6 330.1 L 307.3 329.4 L 308.0 328.6 L 308.8 327.8 L 309.5 327.0 L 310.3 326.1 L 311.0 325.2 L 311.8 324.3 L 312.5 323.3 L 313.2 322.4 L 314.0 321.3 L 314.7 320.3 L 315.5 319.2 L 316.2 318.0 L 316.9 316.8 L 317.7 315.6 L 318.4 314.3 L 319.2 312.9 L 319.9 311.4 L 320.6 309.9 L 321.4 308.3 L 322.1 306.5 L 322.9 304.6 L 323.6 302.5 L 324.4 300.0" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 325.6 297.1 L 326.8 297.1 L 327.9 297.1 L 329.0 297.1 L 330.1 297.1 L 331.2 297.1 L 332.3 297.1 L 333.4 297.1 L 334.5 297.1 L 335.7 297.1 L 336.8 297.1 L 337.9 297.1 L 339.0 297.0 L 340.1 297.0 L 341.2 296.9 L 342.3 296.8 L 343.4 296.7 L 344.6 296.6 L 345.7 296.4 L 346.8 296.3 L 347.9 296.1 L 349.0 295.9 L 350.1 295.6 L 351.2 295.4 L 352.3 295.1 L 353.5 294.8 L 354.6 294.5 L 355.7 294.2 L 356.8 293.9 L 357.9 293.5 L 359.0 293.2 L 360.1 292.8 L 361.2 292.4 L 362.4 292.0 L 363.5 291.5 L 364.6 291.1 L 365.7 290.6 L 366.8 290.2 L 367.9 289.7 L 369.0 289.2 L 370.1 288.7 L 371.3 288.2 L 372.4 287.6 L 373.5 287.1 L 374.6 286.6 L 375.7 286.0 L 376.8 285.4 L 377.9 284.9 L 379.0 284.3 L 380.2 283.7 L 381.3 283.1 L 382.4 282.5 L 383.5 281.9 L 384.6 281.3 L 385.7 280.7 L 386.8 280.0 L 387.9 279.4 L 389.1 278.8 L 390.2 278.1 L 391.3 277.5 L 392.4 276.8 L 393.5 276.2 L 394.6 275.5 L 395.7 274.8 L 396.8 274.1 L 398.0 273.5 L 399.1 272.8 L 400.2 272.1 L 401.3 271.4 L 402.4 270.7 L 403.5 270.0 L 404.6 269.3 L 405.7 268.6 L 406.9 267.9 L 408.0 267.2 L 409.1 266.4 L 410.2 265.7 L 411.3 265.0 L 412.4 264.3 L 413.5 263.5 L 414.6 262.8 L 415.8 262.1 L 416.9 261.3 L 418.0 260.6 L 419.1 259.8 L 420.2 259.1 L 421.3 258.3 L 422.4 257.6 L 423.5 256.8 L 424.7 256.1 L 425.8 255.3 L 426.9 254.6 L 428.0 253.8 L 429.1 253.0 L 430.2 252.3 L 431.3 251.5 L 432.4 250.7 L 433.6 249.9 L 434.7 249.2 L 435.8 248.4 L 436.9 247.6 L 438.0 246.8 L 439.1 246.1 L 440.2 245.3 L 441.3 244.5 L 442.5 243.7 L 443.6 242.9 L 444.7 242.1 L 445.8 241.3 L 446.9 240.6 L 448.0 239.8 L 449.1 239.0 L 450.2 238.2 L 451.4 237.4 L 452.5 236.6 L 453.6 235.8 L 454.7 235.0 L 455.8 234.2 L 456.9 233.4 L 458.0 232.6 L 459.1 231.8 L 460.3 231.0 L 461.4 230.2 L 462.5 229.3 L 463.6 228.5 L 464.7 227.7 L 465.8 226.9 L 466.9 226.1 L 468.0 225.3 L 469.2 224.5 L 470.3 223.7 L 471.4 222.9 L 472.5 222.0 L 473.6 221.2 L 474.7 220.4 L 475.8 219.6 L 476.9 218.8 L 478.1 217.9 L 479.2 217.1 L 480.3 216.3 L 481.4 215.5 L 482.5 214.7 L 483.6 213.8 L 484.7 213.0 L 485.8 212.2 L 487.0 211.4 L 488.1 210.5 L 489.2 209.7 L 490.3 208.9 L 491.4 208.1 L 492.5 207.2 L 493.6 206.4 L 494.7 205.6 L 495.9 204.7 L 497.0 203.9 L 498.1 203.1 L 499.2 202.2 L 500.3 201.4 L 501.4 200.6 L 502.5 199.7 L 503.6 198.9 L 504.8 198.1 L 505.9 197.2 L 507.0 196.4 L 508.1 195.6 L 509.2 194.7 L 510.3 193.9 L 511.4 193.1 L 512.5 192.2 L 513.7 191.4 L 514.8 190.5 L 515.9 189.7 L 517.0 188.9 L 518.1 188.0 L 519.2 187.2 L 520.3 186.3 L 521.4 185.5 L 522.5 184.7 L 523.7 183.8 L 524.8 183.0 L 525.9 182.1 L 527.0 181.3 L 528.1 180.5 L 529.2 179.6 L 530.3 178.8 L 531.4 177.9 L 532.6 177.1 L 533.7 176.2 L 534.8 175.4 L 535.9 174.5 L 537.0 173.7 L 538.1 172.8 L 539.2 172.0 L 540.3 171.1 L 541.5 170.3 L 542.6 169.5 L 543.7 168.6 L 544.8 167.8 L 545.9 166.9 L 547.0 166.1 L 548.1 165.2 L 549.2 164.4 L 550.4 163.5 L 551.5 162.7 L 552.6 161.8 L 553.7 161.0 L 554.8 160.1 L 555.9 159.3 L 557.0 158.4 L 558.1 157.6 L 559.3 156.7 L 560.4 155.9 L 561.5 155.0 L 562.6 154.1 L 563.7 153.3 L 564.8 152.4 L 565.9 151.6 L 567.0 150.7 L 568.2 149.9 L 569.3 149.0 L 570.4 148.2 L 571.5 147.3 L 572.6 146.5 L 573.7 145.6 L 574.8 144.8 L 575.9 143.9 L 577.1 143.0 L 578.2 142.2 L 579.3 141.3 L 580.4 140.5 L 581.5 139.6 L 582.6 138.8 L 583.7 137.9 L 584.8 137.1 L 586.0 136.2 L 587.1 135.3 L 588.2 134.5 L 589.3 133.6 L 590.4 132.8 L 591.5 131.9 L 592.6 131.0 L 593.7 130.2 L 594.9 129.3 L 596.0 128.5 L 597.1 127.6 L 598.2 126.8 L 599.3 125.9 L 600.4 125.0 L 601.5 124.2 L 602.6 123.3 L 603.8 122.5 L 604.9 121.6 L 606.0 120.7 L 607.1 119.9 L 608.2 119.0 L 609.3 118.2 L 610.4 117.3 L 611.5 116.4 L 612.7 115.6 L 613.8 114.7 L 614.9 113.9 L 616.0 113.0 L 617.1 112.1 L 618.2 111.3 L 619.3 110.4 L 620.4 109.5 L 621.6 108.7 L 622.7 107.8 L 623.8 107.0 L 624.9 106.1 L 626.0 105.2 L 627.1 104.4 L 628.2 103.5 L 629.3 102.7 L 630.5 101.8 L 631.6 100.9 L 632.7 100.1 L 633.8 99.2 L 634.9 98.3 L 636.0 97.5 L 637.1 96.6 L 638.2 95.7 L 639.4 94.9 L 640.5 94.0 L 641.6 93.2 L 642.7 92.3 L 643.8 91.4 L 644.9 90.6 L 646.0 89.7 L 647.1 88.8 L 648.3 88.0 L 649.4 87.1 L 650.5 86.2 L 651.6 85.4 L 652.7 84.5 L 653.8 83.6 L 654.9 82.8 L 656.0 81.9 L 657.2 81.0 L 658.3 80.2 L 659.4 79.3 L 660.5 78.5 L 661.6 77.6 L 662.7 76.7 L 663.8 75.9 L 664.9 75.0 L 666.1 74.1 L 667.2 73.3 L 668.3 72.4 L 669.4 71.5 L 670.5 70.7 L 671.6 69.8 L 672.7 68.9 L 673.8 68.1 L 675.0 67.2 L 676.1 66.3 L 677.2 65.5 L 678.3 64.6 L 679.4 63.7 L 680.5 62.9 L 681.6 62.0 L 682.7 61.1 L 683.9 60.3 L 685.0 59.4 L 686.1 58.5 L 687.2 57.7 L 688.3 56.8 L 689.4 55.9 L 690.5 55.1 L 691.6 54.2 L 692.8 53.3 L 693.9 52.4 L 695.0 51.6 L 696.1 50.7 L 697.2 49.8 L 698.3 49.0 L 699.4 48.1 L 700.5 47.2 L 701.7 46.4 L 702.8 45.5 L 703.9 44.6 L 705.0 43.8 L 706.1 42.9 L 707.2 42.0 L 708.3 41.2 L 709.4 40.3 L 710.6 39.4 L 711.7 38.6 L 712.8 37.7 L 713.9 36.8 L 715.0 35.9" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="148.3" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(93.30000000000001, 285.1)">
      <text x="36.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(−e ; 0)</text>
    </g>
    <circle cx="260.0" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(270.0, 312.1)">
      <text x="46.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (−1 ; 0)</text>
    </g>
    <circle cx="325.0" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(335.0, 285.1)">
      <text x="64.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0) anguleux</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x &lt; 0</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x > 0</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (D) : y = x − 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>


<p><strong>PARTIE B</strong></p>

<p><strong>1) \\(U_n \\geq 0\\)</strong></p>
<p>Sur \\([-e;0]\\), d'après le tableau de variations, \\(f(x) \\leq 0\\) (minimum 0 atteint aux bords). Donc sur \\([-e;-\\dfrac{1}{n}] \\subset [-e;0]\\), \\(f(x) \\leq 0\\), et ainsi \\(U_n = \\displaystyle\\int_{-\\dfrac{1}{n}}^{-e}f(x)\\,dx = -\\int_{-e}^{-\\dfrac{1}{n}}f(x)\\,dx \\geq 0\\).</p>

<p><strong>2) Croissance de \\((U_n)\\)</strong></p>
<p>\\[U_{n+1}-U_n = \\int_{-\\dfrac{1}{n+1}}^{-e}f(x)\\,dx - \\int_{-\\dfrac{1}{n}}^{-e}f(x)\\,dx = \\int_{-\\dfrac{1}{n+1}}^{-\\dfrac{1}{n}}f(x)\\,dx = -\\int_{-\\dfrac{1}{n}}^{-\\dfrac{1}{n+1}}f(x)\\,dx\\]</p>
<p>Sur \\([-\\dfrac{1}{n};-\\dfrac{1}{n+1}] \\subset [-e;0]\\), \\(f(x) \\leq 0\\), donc l'intégrale est \\(\\leq 0\\), et \\(U_{n+1}-U_n \\geq 0\\). La suite \\((U_n)\\) est <strong>croissante</strong>.</p>

<p><strong>3) Calcul de \\(U_n\\)</strong></p>
<p>Par IPP avec \\(u=\\ln(-x)\\), \\(v'=x\\) (donc \\(v=\\dfrac{x^2}{2}\\)) :</p>
<p>\\[\\int_{-\\dfrac{1}{n}}^{-e}x\\ln(-x)\\,dx = \\left[\\dfrac{x^2}{2}\\ln(-x)\\right]_{-\\dfrac{1}{n}}^{-e} - \\int_{-\\dfrac{1}{n}}^{-e}\\dfrac{x}{2}\\,dx = \\dfrac{e^2}{4} + \\dfrac{1}{4n^2}+\\dfrac{\\ln n}{2n^2}\\]</p>
<p>\\[U_n = \\int_{-\\dfrac{1}{n}}^{-e}f(x)\\,dx = -\\int_{-e}^{-\\dfrac{1}{n}}(x-x\\ln(-x))\\,dx = -\\left[\\dfrac{x^2}{2}\\right]_{-e}^{-\\dfrac{1}{n}}+\\int_{-e}^{-\\dfrac{1}{n}}x\\ln(-x)\\,dx\\]</p>
<p>\\[\\boxed{U_n = \\dfrac{e^2}{4} - \\dfrac{3}{4n^2} - \\dfrac{\\ln n}{2n^2}}\\]</p>
<p><em>Interprétation graphique :</em> \\(U_n\\) est l'aire (en unité d'aire) du domaine délimité par \\((C_f)\\), l'axe des abscisses et les droites \\(x=-e\\) et \\(x=-\\dfrac{1}{n}\\).</p>

<p><strong>4) Limite et aire</strong></p>
<p>\\[\\lim_{n\\to+\\infty} U_n = \\dfrac{e^2}{4}\\]</p>
<p>L'aire du domaine délimité par \\((C_f)\\), les axes et la droite \\(x=-e\\) vaut :</p>
<p>\\[A = \\dfrac{e^2}{4} \\times U.A = \\dfrac{e^2}{4} \\times 4\\,\\text{cm}^2 = \\boxed{e^2\\,\\text{cm}^2}\\]</p>

<p><strong>PARTIE C — Trajectoire du mobile</strong></p>
<p>On a \\(x(t) = \\dfrac{1}{t}\\) donc \\(t = \\dfrac{1}{x}\\). Alors :</p>
<p>\\[y(t) = \\dfrac{e^{-t}}{t} = x \\cdot e^{-\\dfrac{1}{x}}\\]</p>
<p>La trajectoire est donc la partie de \\((C_f)\\) correspondant à \\(x > 0\\), c'est-à-dire \\(\\boxed{y = xe^{-\\dfrac{1}{x}}}\\) pour \\(x > 0\\).</p>
</div>`
    }
  ]
},

{
  id: 'bac-2003-D-session-normale',
  year: 2003,
  series: 'D',
  tour: 'Session Normale',
  region: 'Burkina Faso',
  title: 'BAC 2003 — Serie D',
  topics: ['Probabilités', 'Géométrie dans l\'espace', 'Fonctions exponentielles', 'Primitives & Intégrales', 'Aires & Volumes'],
  parts: [
    {
      label: 'Exercice I — Probabilités (4 pts)',
      problem: `<p>Dans une famille donnée, on admet qu'une naissance donne un garçon, une fille ou des jumeaux. Une naissance donne dans <strong>30%</strong> des cas un garçon et dans <strong>50%</strong> des cas une fille. On admet que le sexe de l'enfant ne dépend pas des naissances précédentes.</p>

<p><strong>1°)</strong><br>
a) Quelle est la probabilité pour qu'une naissance donne des jumeaux dans la famille ?<br>
b) Calculer la probabilité pour que les trois premières naissances donnent des filles et la quatrième donne un garçon.</p>

<p><strong>2°)</strong> On suppose qu'il y a \\(n\\) naissances dans la famille.<br>
a) Calculer en fonction de \\(n\\), la probabilité \\(P_n\\) d'avoir <em>au moins une</em> naissance donnant des jumeaux.<br>
b) Déterminer le nombre minimal \\(n_0\\) d'enfants pour que \\(P_n \\geq 0{,}97\\).</p>

<p><strong>3°)</strong> On suppose qu'il y a trois naissances dans la famille et l'on désigne par \\(X\\) la variable aléatoire égale au nombre d'enfants possibles issus des trois naissances.<br>
a) Déterminer la loi de probabilité de \\(X\\).<br>
b) Calculer l'espérance mathématique, la variance et l'écart type de \\(X\\).</p>

<p><em>On donne :</em> \\(\\dfrac{\\ln(0{,}03)}{\\ln(0{,}8)} \\approx 15{,}95\\)</p>`,

            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Dénombrement &amp ; probabilités</span>
  <ul>
    <li><strong>Arrangement :</strong> $A_n^k = \\dfrac{n!}{(n-k)!}$ — tirages ordonnés sans remise.</li>
    <li><strong>Combinaison :</strong> $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$ — tirages non ordonnés sans remise.</li>
    <li><strong>Probabilité :</strong> Si les issues sont équiprobables, $P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$.</li>
    <li><strong>Loi binomiale :</strong> $X \\sim B(n, p) \\Rightarrow P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$, $E(X) = np$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) a)</strong> La probabilité pour une naissance de donner des jumeaux :<br>
\\[P(\\text{jumeaux}) = 1 - 0{,}30 - 0{,}50 = \\boxed{0{,}20}\\]</p>

<p><strong>b)</strong> Les trois premières naissances donnent des filles et la quatrième un garçon :<br>
\\[P = (0{,}5)^3 \\times 0{,}3 = 0{,}125 \\times 0{,}3 = \\boxed{0{,}0375}\\]</p>

<p><strong>2°) a)</strong> Soit \\(A\\) l'événement « aucune naissance ne donne des jumeaux ».<br>
\\[P_n = 1 - P(A) = 1 - C_n^0\\,(0{,}2)^0\\,(0{,}8)^n \\implies \\boxed{P_n = 1 - (0{,}8)^n}\\]</p>

<p><strong>b)</strong> On cherche \\(n_0\\) tel que \\(P_n \\geq 0{,}97\\) :<br>
\\[1 - (0{,}8)^n \\geq 0{,}97 \\iff (0{,}8)^n \\leq 0{,}03 \\iff n\\ln(0{,}8) \\leq \\ln(0{,}03)\\]
Comme \\(\\ln(0{,}8) < 0\\) :<br>
\\[n \\geq \\dfrac{\\ln(0{,}03)}{\\ln(0{,}8)} \\approx 15{,}95 \\implies \\boxed{n_0 = 16}\\]</p>

<p><strong>3°) a) Loi de probabilité de \\(X\\)</strong></p>
<p>Il y a 3 naissances. Chaque naissance peut donner des jumeaux (prob. 0,2) ou non. Si \\(k\\) naissances donnent des jumeaux, alors \\(X = 3 + k\\) (les jumeaux comptent pour 2).</p>

<table class="vtab">
  <tr>
    <th>\\(x_i\\)</th>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <th>Total</th>
  </tr>
  <tr>
    <th>\\(P(X = x_i)\\)</th>
    <td>0,512</td>
    <td>0,384</td>
    <td>0,096</td>
    <td>0,008</td>
    <td>1</td>
  </tr>
</table>

<p>Détail :<br>
\\(P(X=3) = C_3^0(0{,}2)^0(0{,}8)^3 = 0{,}512\\)<br>
\\(P(X=4) = C_3^1(0{,}2)^1(0{,}8)^2 = 0{,}384\\)<br>
\\(P(X=5) = C_3^2(0{,}2)^2(0{,}8)^1 = 0{,}096\\)<br>
\\(P(X=6) = C_3^3(0{,}2)^3(0{,}8)^0 = 0{,}008\\)</p>

<p><strong>b)</strong><br>
\\[E(X) = 3 \\times 0{,}512 + 4 \\times 0{,}384 + 5 \\times 0{,}096 + 6 \\times 0{,}008 = \\boxed{3{,}6}\\]
\\[E(X^2) = 9\\times0{,}512 + 16\\times0{,}384 + 25\\times0{,}096 + 36\\times0{,}008 = 13{,}44\\]
\\[V(X) = E(X^2) - [E(X)]^2 = 13{,}44 - 12{,}96 = \\boxed{0{,}48}\\]
\\[\\sigma_X = \\sqrt{0{,}48} = \\sqrt{\\dfrac{48}{100}} = \\boxed{\\dfrac{2\\sqrt{3}}{5}}\\]</p>`
    },
    {
      label: 'Exercice II — Géométrie dans l\'espace / Produit vectoriel (4 pts)',
      problem: `<p><strong>1°)</strong> Soient \\(A\\), \\(B\\), \\(C\\) trois points non alignés de l'espace.<br>
Déterminer l'ensemble des points \\(M\\) tels que :
\\[\\vec{AB} \\wedge \\vec{AM} = \\vec{AB} \\wedge \\vec{AC}\\]</p>

<p><strong>2°)</strong> Soient \\((\\Delta)\\) et \\((\\Delta')\\) deux droites de même vecteur directeur \\(\\vec{u}\\), et \\(H\\) un point de \\((\\Delta)\\). On désigne par \\(H'\\) le projeté orthogonal de \\(H\\) sur \\((\\Delta')\\).</p>
<p>a) Démontrer que pour tout point \\(A \\in (\\Delta)\\) et tout point \\(A' \\in (\\Delta')\\) :
\\[\\vec{AA'} \\wedge \\vec{u} = \\vec{HH'} \\wedge \\vec{u}\\]</p>
<p>b) En déduire que :
\\[HH' = \\dfrac{\\|\\vec{AA'} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|}\\]</p>
<p>c) <strong>Application numérique :</strong> Soient \\(A(-1 ; 2 ; 5)\\) et \\(A'(4 ; -1 ; 9)\\) ; soient \\((\\Delta)\\) et \\((\\Delta')\\) les droites de vecteur directeur \\(\\vec{u}(-2 ; 2 ; 1)\\) contenant respectivement \\(A\\) et \\(A'\\). Calculer la distance de \\((\\Delta)\\) à \\((\\Delta')\\).</p>`,

            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Produit vectoriel &amp; Distance entre droites</span>
  <ul>
    <li><strong>Propriétés du produit vectoriel :</strong> $\\vec{u} \\wedge \\vec{v} = \\vec{0} \\iff \\vec{u}$ et $\\vec{v}$ sont colinéaires. $\\vec{u} \\wedge \\vec{v} = -(\\vec{v} \\wedge \\vec{u})$.</li>
    <li><strong>Norme et orthogonalité :</strong> $\\|\\vec{u} \\wedge \\vec{v}\\| = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot |\\sin(\\vec{u},\\vec{v})|$. En particulier, si $\\vec{u} \\perp \\vec{v}$, $\\|\\vec{u} \\wedge \\vec{v}\\| = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\|$.</li>
    <li><strong>Distance entre deux droites parallèles :</strong> Soient $(\\Delta)$ et $(\\Delta')$ deux droites parallèles de vecteur directeur commun $\\vec{u}$, avec $A \\in (\\Delta)$ et $A' \\in (\\Delta')$. La distance entre les deux droites est $d = \\dfrac{\\|\\overrightarrow{AA'} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|}$.</li>
  </ul>
</div>`,
correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°)</strong> \\(\\vec{AB} \\wedge \\vec{AM} = \\vec{AB} \\wedge \\vec{AC}\\)</p>
<p>On a :
\\[\\vec{AB} \\wedge \\vec{AM} = \\vec{AB} \\wedge \\vec{AC} \\iff \\vec{AB} \\wedge (\\vec{AM} - \\vec{AC}) = \\vec{0} \\iff \\vec{AB} \\wedge \\vec{CM} = \\vec{0}\\]
\\(\\vec{AB}\\) et \\(\\vec{CM}\\) sont donc colinéaires, ce qui signifie que \\(M\\) est dans le plan contenant \\(A\\), \\(B\\) et \\(C\\).

Par ailleurs, en dotant les deux membres par \\(\\vec{AM}\\) :
\\[(\\vec{AB} \\wedge \\vec{AM})\\cdot\\vec{AM} = (\\vec{AB} \\wedge \\vec{AC})\\cdot\\vec{AM}\\]
Le membre gauche vaut 0 (le produit mixte avec un vecteur répété est nul), donc \\((\\vec{AB} \\wedge \\vec{AC})\\cdot\\vec{AM} = 0\\), ce qui signifie que \\(M \\in (ABC)\\).</p>
<p>\\[\\boxed{\\text{L'ensemble des points } M \\text{ est le plan } (ABC).}\\]</p>

<p><strong>2°) a)</strong> Par la relation de Chasles : \\(\\vec{AA'} = \\vec{AH} + \\vec{HH'} + \\vec{H'A'}\\)</p>
<p>Donc :
\\[\\vec{AA'} \\wedge \\vec{u} = \\vec{AH} \\wedge \\vec{u} + \\vec{HH'} \\wedge \\vec{u} + \\vec{H'A'} \\wedge \\vec{u}\\]
Or \\(\\vec{AH}\\) est colinéaire à \\(\\vec{u}\\) (tous deux sur \\((\\Delta)\\)), donc \\(\\vec{AH} \\wedge \\vec{u} = \\vec{0}\\).<br>
De même, \\(\\vec{H'A'}\\) est colinéaire à \\(\\vec{u}\\) (tous deux sur \\((\\Delta')\\)), donc \\(\\vec{H'A'} \\wedge \\vec{u} = \\vec{0}\\).<br>
Par suite :
\\[\\boxed{\\vec{AA'} \\wedge \\vec{u} = \\vec{HH'} \\wedge \\vec{u}}\\]</p>

<p><strong>b)</strong> En prenant les normes :
\\[\\|\\vec{AA'} \\wedge \\vec{u}\\| = \\|\\vec{HH'} \\wedge \\vec{u}\\| = \\|\\vec{HH'}\\|\\cdot\\|\\vec{u}\\|\\cdot\\sin(\\vec{HH'},\\vec{u})\\]
Comme \\(\\vec{HH'} \\perp \\vec{u}\\), on a \\(\\sin(\\vec{HH'},\\vec{u}) = 1\\), donc :
\\[\\|\\vec{AA'} \\wedge \\vec{u}\\| = HH' \\cdot \\|\\vec{u}\\| \\implies \\boxed{HH' = \\dfrac{\\|\\vec{AA'} \\wedge \\vec{u}\\|}{\\|\\vec{u}\\|}}\\]</p>

<p><strong>c)</strong> \\(\\vec{AA'} = (5 ; -3 ; 4)\\), \\(\\vec{u} = (-2 ; 2 ; 1)\\)</p>
<p>
\\[\\vec{AA'} \\wedge \\vec{u} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 5 & -3 & 4 \\\\ -2 & 2 & 1 \\end{vmatrix} = (-3-8)\\vec{i} - (5+8)\\vec{j} + (10-6)\\vec{k} = -11\\vec{i} - 13\\vec{j} + 4\\vec{k}\\]
\\[\\|\\vec{AA'} \\wedge \\vec{u}\\| = \\sqrt{121 + 169 + 16} = \\sqrt{306} = 3\\sqrt{34}\\]
\\[\\|\\vec{u}\\| = \\sqrt{4+4+1} = 3\\]
\\[\\boxed{d((\\Delta),(\\Delta')) = \\dfrac{3\\sqrt{34}}{3} = \\sqrt{34}}\\]</p>`
    },
    {
      label: 'Problème — Fonctions exponentielles, Primitives, Aires & Volumes (12 pts)',
      problem: `<p>On considère la fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par :
\\[f(x) = (x+4)\\,e^{-\\dfrac{1}{2}x}\\]
et \\((C)\\) sa courbe représentative dans le plan muni d'un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) ; unité graphique : 2 cm.</p>

<p><strong>PARTIE A</strong></p>
<p><strong>1°)</strong><br>
a) Calculer \\(\\lim_{x \\to -\\infty} f(x)\\) et \\(\\lim_{x \\to +\\infty} f(x)\\). Préciser les asymptotes éventuelles. Calculer \\(\\lim_{x \\to +\\infty} \\dfrac{f(x)}{x}\\) ; quelle interprétation géométrique peut-on en faire ?<br>
b) Étudier les variations de \\(f\\) puis dresser son tableau de variations.<br>
c) Montrer que \\((C)\\) coupe l'axe des abscisses en un point unique. Préciser l'abscisse de ce point.</p>

<p><strong>2°)</strong><br>
a) Donner une équation de la tangente \\((T)\\) à la courbe \\((C)\\) au point d'abscisse 0.<br>
b) On pose \\(\\varphi(x)\\) l'équation de \\((T)\\) et \\(h(x) = f(x) - \\varphi(x)\\). Calculer \\(h'(x)\\) et \\(h''(x)\\). Étudier les variations de \\(h'\\) et en déduire le signe de \\(h'(x)\\) puis le signe de \\(h(x)\\). Préciser la position de \\((C)\\) par rapport à \\((T)\\).</p>

<p><strong>3°)</strong><br>
a) Calculer \\(f(2)\\) et \\(f(4)\\).<br>
b) Tracer \\((T)\\) puis construire \\((C)\\).</p>

<p><strong>PARTIE B</strong></p>
<p><strong>1°)</strong> Déterminer les réels \\(a\\) et \\(b\\) pour que la fonction \\(F\\) définie sur \\(\\mathbb{R}\\) par :
\\[F(x) = (ax + b)\\,e^{-\\dfrac{1}{2}x}\\]
soit une primitive de \\(f\\) sur \\(\\mathbb{R}\\).</p>

<p><strong>2°)</strong> Soit \\(\\lambda\\) un réel supérieur ou égal à \\(-4\\). Calculer en cm², l'aire \\(\\mathcal{A}(\\lambda)\\) de la surface limitée par \\((C)\\), l'axe des abscisses et les droites d'équations \\(x = -4\\) et \\(x = \\lambda\\). Calculer \\(\\lim_{\\lambda \\to +\\infty} \\mathcal{A}(\\lambda)\\).</p>

<p><strong>3°)</strong><br>
a) Déterminer les réels \\(\\alpha\\), \\(\\beta\\), \\(\\gamma\\) pour que la fonction \\(G\\) définie sur \\(\\mathbb{R}\\) par :
\\[G(x) = (\\alpha x^2 + \\beta x + \\gamma)\\,e^{-x}\\]
soit une primitive de \\(g\\) définie sur \\(\\mathbb{R}\\) par \\(g(x) = (x^2 + 8x + 16)\\,e^{-x}\\).<br>
b) Calculer en cm³ le volume \\(V(\\lambda)\\) du solide engendré par la rotation de la surface définie ci-dessus autour de l'axe des abscisses. Calculer \\(\\lim_{\\lambda \\to +\\infty} V(\\lambda)\\).</p>

<p><strong>PARTIE C</strong></p>
<p>Soit \\(k\\) la fonction définie sur \\(\\mathbb{R}\\) par : \\(k(x) = |x+4|\\,e^{-\\dfrac{1}{2}x}\\)</p>
<p><strong>1°)</strong> Expliquer comment obtenir à partir de \\((C)\\) la courbe représentative \\((C')\\) de \\(k\\). Construire \\((C')\\) dans le même repère que \\((C)\\) (en pointillés).</p>
<p><strong>2°)</strong> À l'aide du graphique, donner en fonction du paramètre \\(m\\) le nombre de solutions dans \\(\\mathbb{R}\\) de l'équation :
\\[|x+4|\\,e^{-\\dfrac{1}{2}x} = m\\]</p>
<p><em>On donne :</em> \\(e \\approx 2{,}7\\) ; \\(e^{-1} \\approx 0{,}4\\) ; \\(e^{-2} \\approx 0{,}13\\) ; \\(e^2 \\approx 7{,}3\\)</p>`,

            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions exponentielles, primitives &amp ; volumes</span>
  <ul>
    <li><strong>Dérivée :</strong> $(e^{ax+b})' = a\\,e^{ax+b}$, $(xe^x)' = (1+x)e^x$.</li>
    <li><strong>Primitive :</strong> $\\int e^{ax}\\,dx = \\dfrac{1}{a}e^{ax} + C$, $\\int xe^x\\,dx = (x-1)e^x + C$ (par IPP).</li>
    <li><strong>Aire :</strong> $\\mathcal{A} = \\int_a^b |f(x)|\\,dx$ (en unités d'aire = unité²).</li>
    <li><strong>Volume :</strong> $V = \\pi \\int_a^b [f(x)]^2\\,dx$ (révolution autour de l'axe $Ox$).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>PARTIE A</strong></p>

<p><strong>1°) a) Limites</strong></p>
<p>
\\(\\lim_{x \\to -\\infty} f(x)\\) : \\(\\lim_{x\\to-\\infty}(x+4) = -\\infty\\) et \\(\\lim_{x\\to-\\infty}e^{-\\dfrac{x}{2}} = +\\infty\\), donc \\(\\boxed{\\lim_{x\\to-\\infty}f(x) = -\\infty}\\).<br><br>
\\(\\lim_{x \\to +\\infty} f(x)\\) : forme indéterminée \\(+\\infty \\times 0\\). On pose \\(X = -\\dfrac{x}{2}\\), donc \\(x = -2X\\) et \\(X \\to -\\infty\\) quand \\(x\\to+\\infty\\) :
\\[\\lim_{x\\to+\\infty}f(x) = \\lim_{X\\to-\\infty}(-2X+4)e^X = 0 \\quad \\text{(car } \\lim_{X\\to-\\infty}Xe^X = 0\\text{)}\\]
\\(\\boxed{\\lim_{x\\to+\\infty}f(x) = 0}\\) → la droite \\(y = 0\\) est <strong>asymptote horizontale</strong> à \\((C)\\) en \\(+\\infty\\).<br><br>
\\(\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x} = \\lim_{x\\to-\\infty}\\dfrac{x+4}{x}\\cdot e^{-\\dfrac{x}{2}} = 1 \\times (+\\infty) = +\\infty\\) → <strong>branche parabolique</strong> de direction \\((Oy)\\) en \\(-\\infty\\).
</p>

<p><strong>b) Variations de \\(f\\)</strong></p>
<p>
\\[f'(x) = e^{-\\dfrac{x}{2}} + (x+4)\\left(-\\tfrac{1}{2}\\right)e^{-\\dfrac{x}{2}} = e^{-\\dfrac{x}{2}}\\left(1 - \\dfrac{x+4}{2}\\right) = \\dfrac{-x-2}{2}\\,e^{-\\dfrac{x}{2}}\\]
Comme \\(e^{-\\dfrac{x}{2}} > 0\\) pour tout \\(x\\), le signe de \\(f'(x)\\) est celui de \\(-x-2\\) :<br>
— \\(f'(x) > 0\\) pour \\(x \\in ]-\\infty ; -2[\\) → \\(f\\) croissante<br>
— \\(f'(x) < 0\\) pour \\(x \\in ]-2 ; +\\infty[\\) → \\(f\\) décroissante<br>
Maximum en \\(x = -2\\) : \\(f(-2) = 2\\,e^1 = 2e\\).
</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2003-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2003-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−2</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    
    <text x="145" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <line x1="170" y1="225" x2="395" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2003-f)"/>
    <text x="425" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2e ≈ 5,44</text>
    <line x1="455" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2003-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>c) Intersection avec l'axe des abscisses</strong></p>
<p>Sur \\(]-\\infty ; -2[\\), \\(f\\) est continue et strictement croissante de \\(-\\infty\\) vers \\(2e > 0\\). Donc \\(f(x)=0\\) admet une unique solution dans \\(]-\\infty ; -2[\\). Sur \\([-2 ; +\\infty[\\), \\(f(x) \\in ]0 ; 2e]\\), donc \\(f(x) \\neq 0\\).<br>
\\[f(x) = 0 \\iff (x+4)e^{-\\dfrac{x}{2}} = 0 \\iff x+4 = 0 \\iff \\boxed{x = -4}\\]</p>

<p><strong>2°) a) Tangente en \\(x = 0\\)</strong></p>




<p>\\(f(0) = 4\\), \\(f'(0) = \\dfrac{-0-2}{2} = -1\\)<br>
\\[\\boxed{(T)\\,:\\, y = -x + 4}\\]</p>

<p><strong>b)</strong> \\(\\varphi(x) = -x+4\\), \\(h(x) = f(x) - \\varphi(x)\\)</p>
<p>
\\[h'(x) = f'(x) + 1 = 1 - \\dfrac{-x-2}{2}\\,e^{-\\dfrac{x}{2}} = 1 + \\dfrac{x+2}{2}\\,e^{-\\dfrac{x}{2}}\\]
\\[h''(x) = f''(x) = \\dfrac{x}{4}\\,e^{-\\dfrac{x}{2}}\\]
Signe de \\(h''\\) : négatif sur \\(]-\\infty;0[\\), positif sur \\(]0;+\\infty[\\). Donc \\(h'\\) est décroissante sur \\(]-\\infty;0[\\) puis croissante sur \\(]0;+\\infty[\\), avec minimum \\(h'(0)=0\\).<br>
Donc \\(h'(x) \\geq 0\\) pour tout \\(x\\), avec \\(h'(0)=0\\) : \\(h\\) est croissante, et \\(h(0)=0\\).<br>
— Pour \\(x < 0\\) : \\(h(x) < 0\\) → <strong>\\((C)\\) est en dessous de \\((T)\\)</strong><br>
— Pour \\(x > 0\\) : \\(h(x) > 0\\) → <strong>\\((C)\\) est au-dessus de \\((T)\\)</strong>
</p>

<p><strong>3°) a)</strong></p>


<p><strong>3°) b) Tracer \\((T)\\) puis construire \\((C)\\)</strong></p>

<p>La courbe \\((C)\\) admet l'axe des abscisses pour asymptote horizontale en \\(+\\infty\\), un maximum en \\((-2 ; 2e)\\), coupe \\((Ox)\\) en \\((-4 ; 0)\\), et admet pour tangente en \\((0 ; 4)\\) la droite \\((T): y = -x + 4\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2003 — Courbe (C) et Tangente (T)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="124.1" y1="40.0" x2="124.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="183.2" y1="40.0" x2="183.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="242.3" y1="40.0" x2="242.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="301.4" y1="40.0" x2="301.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="419.5" y1="40.0" x2="419.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="478.6" y1="40.0" x2="478.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="537.7" y1="40.0" x2="537.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="596.8" y1="40.0" x2="596.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="655.9" y1="40.0" x2="655.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="355.0" x2="715.0" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="265.0" x2="715.0" y2="265.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="220.0" x2="715.0" y2="220.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="175.0" x2="715.0" y2="175.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="85.0" x2="715.0" y2="85.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="310.0" x2="735" y2="310.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="360.5" y1="415" x2="360.5" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="328.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="342.5" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="306.0" x2="65.0" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-5</text><line x1="124.1" y1="306.0" x2="124.1" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="124.1" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="183.2" y1="306.0" x2="183.2" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="183.2" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="242.3" y1="306.0" x2="242.3" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="242.3" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="301.4" y1="306.0" x2="301.4" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="301.4" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="419.5" y1="306.0" x2="419.5" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="419.5" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="478.6" y1="306.0" x2="478.6" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="478.6" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="537.7" y1="306.0" x2="537.7" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="537.7" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="596.8" y1="306.0" x2="596.8" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="596.8" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="655.9" y1="306.0" x2="655.9" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="655.9" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="356.5" y1="400.0" x2="364.5" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="356.5" y1="355.0" x2="364.5" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="356.5" y1="265.0" x2="364.5" y2="265.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="269.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="356.5" y1="220.0" x2="364.5" y2="220.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="224.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="356.5" y1="175.0" x2="364.5" y2="175.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="179.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="356.5" y1="130.0" x2="364.5" y2="130.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="134.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="356.5" y1="85.0" x2="364.5" y2="85.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="89.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><text x="350.5" y="325.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="271.8" y1="62.5" x2="626.4" y2="332.5" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 96.6 505.5 L 98.4 489.4 L 100.3 473.8 L 102.1 458.7 L 104.0 444.0 L 105.9 429.7 L 107.7 415.8 L 109.6 402.4 L 111.4 389.3 L 113.3 376.6 L 115.1 364.3 L 117.0 352.4 L 118.9 340.8 L 120.7 329.6 L 122.6 318.7 L 124.4 308.1 L 126.3 297.9 L 128.1 288.0 L 130.0 278.4 L 131.9 269.1 L 133.7 260.1 L 135.6 251.4 L 137.4 243.0 L 139.3 234.8 L 141.1 226.9 L 143.0 219.3 L 144.9 212.0 L 146.7 204.9 L 148.6 198.0 L 150.4 191.4 L 152.3 185.0 L 154.1 178.9 L 156.0 172.9 L 157.9 167.2 L 159.7 161.7 L 161.6 156.4 L 163.4 151.3 L 165.3 146.4 L 167.1 141.7 L 169.0 137.2 L 170.9 132.8 L 172.7 128.7 L 174.6 124.7 L 176.4 120.9 L 178.3 117.2 L 180.1 113.7 L 182.0 110.4 L 183.9 107.2 L 185.7 104.1 L 187.6 101.2 L 189.4 98.5 L 191.3 95.9 L 193.1 93.4 L 195.0 91.0 L 196.9 88.8 L 198.7 86.7 L 200.6 84.7 L 202.4 82.8 L 204.3 81.1 L 206.1 79.4 L 208.0 77.9 L 209.9 76.4 L 211.7 75.1 L 213.6 73.9 L 215.4 72.7 L 217.3 71.7 L 219.1 70.7 L 221.0 69.8 L 222.9 69.0 L 224.7 68.3 L 226.6 67.7 L 228.4 67.2 L 230.3 66.7 L 232.1 66.3 L 234.0 66.0 L 235.9 65.7 L 237.7 65.5 L 239.6 65.4 L 241.4 65.4 L 243.3 65.4 L 245.1 65.4 L 247.0 65.5 L 248.9 65.7 L 250.7 65.9 L 252.6 66.2 L 254.4 66.6 L 256.3 66.9 L 258.1 67.4 L 260.0 67.8 L 261.9 68.4 L 263.7 68.9 L 265.6 69.5 L 267.4 70.2 L 269.3 70.9 L 271.1 71.6 L 273.0 72.3 L 274.9 73.1 L 276.7 73.9 L 278.6 74.8 L 280.4 75.7 L 282.3 76.6 L 284.1 77.5 L 286.0 78.5 L 287.9 79.5 L 289.7 80.5 L 291.6 81.6 L 293.4 82.6 L 295.3 83.7 L 297.1 84.8 L 299.0 86.0 L 300.9 87.1 L 302.7 88.3 L 304.6 89.5 L 306.4 90.7 L 308.3 91.9 L 310.1 93.1 L 312.0 94.4 L 313.9 95.6 L 315.7 96.9 L 317.6 98.2 L 319.4 99.5 L 321.3 100.8 L 323.1 102.1 L 325.0 103.5 L 326.9 104.8 L 328.7 106.2 L 330.6 107.5 L 332.4 108.9 L 334.3 110.3 L 336.1 111.6 L 338.0 113.0 L 339.9 114.4 L 341.7 115.8 L 343.6 117.2 L 345.4 118.6 L 347.3 120.0 L 349.1 121.4 L 351.0 122.8 L 352.9 124.2 L 354.7 125.6 L 356.6 127.0 L 358.4 128.5 L 360.3 129.9 L 362.1 131.3 L 364.0 132.7 L 365.9 134.1 L 367.7 135.5 L 369.6 136.9 L 371.4 138.3 L 373.3 139.8 L 375.1 141.2 L 377.0 142.6 L 378.9 144.0 L 380.7 145.4 L 382.6 146.8 L 384.4 148.1 L 386.3 149.5 L 388.1 150.9 L 390.0 152.3 L 391.9 153.7 L 393.7 155.0 L 395.6 156.4 L 397.4 157.8 L 399.3 159.1 L 401.1 160.5 L 403.0 161.8 L 404.9 163.2 L 406.7 164.5 L 408.6 165.8 L 410.4 167.1 L 412.3 168.5 L 414.1 169.8 L 416.0 171.1 L 417.9 172.4 L 419.7 173.6 L 421.6 174.9 L 423.4 176.2 L 425.3 177.5 L 427.1 178.7 L 429.0 180.0 L 430.9 181.2 L 432.7 182.5 L 434.6 183.7 L 436.4 184.9 L 438.3 186.2 L 440.1 187.4 L 442.0 188.6 L 443.9 189.8 L 445.7 191.0 L 447.6 192.1 L 449.4 193.3 L 451.3 194.5 L 453.1 195.6 L 455.0 196.8 L 456.9 197.9 L 458.7 199.0 L 460.6 200.2 L 462.4 201.3 L 464.3 202.4 L 466.1 203.5 L 468.0 204.6 L 469.9 205.7 L 471.7 206.7 L 473.6 207.8 L 475.4 208.9 L 477.3 209.9 L 479.1 211.0 L 481.0 212.0 L 482.9 213.0 L 484.7 214.0 L 486.6 215.0 L 488.4 216.0 L 490.3 217.0 L 492.1 218.0 L 494.0 219.0 L 495.9 220.0 L 497.7 220.9 L 499.6 221.9 L 501.4 222.8 L 503.3 223.8 L 505.1 224.7 L 507.0 225.6 L 508.9 226.5 L 510.7 227.4 L 512.6 228.3 L 514.4 229.2 L 516.3 230.1 L 518.1 231.0 L 520.0 231.8 L 521.9 232.7 L 523.7 233.5 L 525.6 234.4 L 527.4 235.2 L 529.3 236.1 L 531.1 236.9 L 533.0 237.7 L 534.9 238.5 L 536.7 239.3 L 538.6 240.1 L 540.4 240.9 L 542.3 241.6 L 544.1 242.4 L 546.0 243.2 L 547.9 243.9 L 549.7 244.7 L 551.6 245.4 L 553.4 246.1 L 555.3 246.8 L 557.1 247.6 L 559.0 248.3 L 560.9 249.0 L 562.7 249.7 L 564.6 250.4 L 566.4 251.0 L 568.3 251.7 L 570.1 252.4 L 572.0 253.0 L 573.9 253.7 L 575.7 254.4 L 577.6 255.0 L 579.4 255.6 L 581.3 256.3 L 583.1 256.9 L 585.0 257.5 L 586.9 258.1 L 588.7 258.7 L 590.6 259.3 L 592.4 259.9 L 594.3 260.5 L 596.1 261.1 L 598.0 261.6 L 599.9 262.2 L 601.7 262.8 L 603.6 263.3 L 605.4 263.9 L 607.3 264.4 L 609.1 265.0 L 611.0 265.5 L 612.9 266.0 L 614.7 266.5 L 616.6 267.1 L 618.4 267.6 L 620.3 268.1 L 622.1 268.6 L 624.0 269.1 L 625.9 269.6 L 627.7 270.0 L 629.6 270.5 L 631.4 271.0 L 633.3 271.5 L 635.1 271.9 L 637.0 272.4 L 638.9 272.8 L 640.7 273.3 L 642.6 273.7 L 644.4 274.2 L 646.3 274.6 L 648.1 275.0 L 650.0 275.4 L 651.9 275.9 L 653.7 276.3 L 655.6 276.7 L 657.4 277.1 L 659.3 277.5 L 661.1 277.9 L 663.0 278.3 L 664.9 278.7 L 666.7 279.0 L 668.6 279.4 L 670.4 279.8 L 672.3 280.2 L 674.1 280.5 L 676.0 280.9 L 677.9 281.3 L 679.7 281.6 L 681.6 282.0 L 683.4 282.3 L 685.3 282.6 L 687.1 283.0 L 689.0 283.3 L 690.9 283.6 L 692.7 284.0 L 694.6 284.3 L 696.4 284.6 L 698.3 284.9 L 700.1 285.2 L 702.0 285.5 L 703.9 285.8 L 705.7 286.1 L 707.6 286.4 L 709.4 286.7 L 711.3 287.0 L 713.1 287.3 L 715.0 287.6" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="124.1" cy="310.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(74.1, 298.0)">
      <text x="36.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(−4 ; 0)</text>
    </g>
    <circle cx="242.3" cy="65.4" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(252.3, 50.400000000000006)">
      <text x="50.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (−2 ; 2e)</text>
    </g>
    <circle cx="360.5" cy="130.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(370.5, 120.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(0 ; 4)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="52" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente (T) : y = −x + 4</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>


<hr>
<p><strong>PARTIE B</strong></p>

<p><strong>1°)</strong> \\(F'(x) = \\left(\\dfrac{-ax+2a-b}{2}\\right)e^{-\\dfrac{x}{2}}\\). Par identification avec \\(f(x) = (x+4)e^{-\\dfrac{x}{2}}\\) :<br>
\\[\\dfrac{-a}{2} = 1 \\implies a = -2 \\qquad \\dfrac{2a-b}{2} = 4 \\implies b = -12\\]
\\[\\boxed{F(x) = (-2x-12)\\,e^{-\\dfrac{x}{2}}}\\]</p>

<p><strong>2°)</strong>
\\[\\mathcal{A}(\\lambda) = \\int_{-4}^{\\lambda} f(x)\\,dx \\times \\text{U.A.} = [F(x)]_{-4}^{\\lambda} \\times 4\\,\\text{cm}^2\\]
\\[= \\left(F(\\lambda) - F(-4)\\right) \\times 4 = \\left((-2\\lambda-12)e^{-\\lambda/2} - (-8+12-12)e^{2}\\right)\\times 4\\]
\\[= \\left(4e^{2} - (-2\\lambda-12)e^{-\\lambda/2}\\right)\\times 4\\]
\\[\\boxed{\\mathcal{A}(\\lambda) = \\left(16e^{2} - 8(\\lambda+6)\\,e^{-\\lambda/2}\\right)\\,\\text{cm}^2}\\]
\\[\\lim_{\\lambda\\to+\\infty}\\mathcal{A}(\\lambda) = 16e^2\\,\\text{cm}^2\\]</p>

<p><strong>3°) a)</strong> \\(G'(x) = (-\\alpha x^2 + (2\\alpha-\\beta)x + \\beta-\\gamma)e^{-x}\\). Par identification avec \\(g(x) = (x^2+8x+16)e^{-x}\\) :<br>
\\[-\\alpha = 1 \\implies \\alpha = -1\\]
\\[2\\alpha - \\beta = 8 \\implies \\beta = -10\\]
\\[\\beta - \\gamma = 16 \\implies \\gamma = -26\\]
\\[\\boxed{G(x) = (-x^2 - 10x - 26)\\,e^{-x}}\\]</p>

<p><strong>b)</strong>
\\[V(\\lambda) = \\pi\\int_{-4}^{\\lambda} f^2(x)\\,dx \\times \\text{U.V.} = \\pi\\int_{-4}^{\\lambda}(x+4)^2 e^{-x}\\,dx \\times 8\\,\\text{cm}^3\\]
\\[= \\pi[G(x)]_{-4}^{\\lambda}\\times 8 = \\pi\\left(G(\\lambda) - G(-4)\\right)\\times 8\\]
\\[G(-4) = (-16+40-26)e^{4} = -2e^{4}\\]
\\[\\boxed{V(\\lambda) = \\pi\\left(16e^{4} - 8(\\lambda^2+10\\lambda+26)\\,e^{-\\lambda}\\right)\\,\\text{cm}^3}\\]
\\[\\lim_{\\lambda\\to+\\infty}V(\\lambda) = 16\\pi e^{4}\\,\\text{cm}^3\\]</p>

<hr>
<p><strong>PARTIE C</strong></p>

<p><strong>1°)</strong>
\\[k(x) = |x+4|\\,e^{-\\dfrac{x}{2}} = |f(x)|\\]
Pour obtenir \\((C')\\) à partir de \\((C)\\) : on conserve la partie de \\((C)\\) où \\(f(x) \\geq 0\\) (c'est-à-dire \\(x \\geq -4\\)), et on prend le symétrique par rapport à l'axe des abscisses de la partie de \\((C)\\) où \\(f(x) \\leq 0\\) (c'est-à-dire \\(x \\leq -4\\)).</p>

<p><strong>Tracé des courbes \\((C)\\) et \\((C')\\) représentant \\(k(x) = |f(x)|\\)</strong></p>
<p>Pour \\(x \\ge -4\\), \\(f(x) \\ge 0\\) donc \\((C')\\) est confondue avec \\((C)\\). Pour \\(x < -4\\), \\(f(x) < 0\\) donc \\((C')\\) est la symétrique de \\((C)\\) par rapport à l'axe des abscisses \\((Ox)\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2003 — Courbes (C) et (C')</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="124.1" y1="40.0" x2="124.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="183.2" y1="40.0" x2="183.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="242.3" y1="40.0" x2="242.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="301.4" y1="40.0" x2="301.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="419.5" y1="40.0" x2="419.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="478.6" y1="40.0" x2="478.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="537.7" y1="40.0" x2="537.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="596.8" y1="40.0" x2="596.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="655.9" y1="40.0" x2="655.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="355.0" x2="715.0" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="265.0" x2="715.0" y2="265.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="220.0" x2="715.0" y2="220.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="175.0" x2="715.0" y2="175.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="85.0" x2="715.0" y2="85.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="310.0" x2="735" y2="310.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="360.5" y1="415" x2="360.5" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="328.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="342.5" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="306.0" x2="65.0" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-5</text><line x1="124.1" y1="306.0" x2="124.1" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="124.1" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="183.2" y1="306.0" x2="183.2" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="183.2" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="242.3" y1="306.0" x2="242.3" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="242.3" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="301.4" y1="306.0" x2="301.4" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="301.4" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="419.5" y1="306.0" x2="419.5" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="419.5" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="478.6" y1="306.0" x2="478.6" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="478.6" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="537.7" y1="306.0" x2="537.7" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="537.7" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="596.8" y1="306.0" x2="596.8" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="596.8" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="655.9" y1="306.0" x2="655.9" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="655.9" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="356.5" y1="400.0" x2="364.5" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="356.5" y1="355.0" x2="364.5" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="356.5" y1="265.0" x2="364.5" y2="265.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="269.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="356.5" y1="220.0" x2="364.5" y2="220.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="224.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="356.5" y1="175.0" x2="364.5" y2="175.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="179.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="356.5" y1="130.0" x2="364.5" y2="130.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="134.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="356.5" y1="85.0" x2="364.5" y2="85.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="89.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><text x="350.5" y="325.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Courbes -->
    <path d="M 96.6 505.5 L 98.4 489.4 L 100.3 473.8 L 102.1 458.7 L 104.0 444.0 L 105.9 429.7 L 107.7 415.8 L 109.6 402.4 L 111.4 389.3 L 113.3 376.6 L 115.1 364.3 L 117.0 352.4 L 118.9 340.8 L 120.7 329.6 L 122.6 318.7 L 124.4 308.1 L 126.3 297.9 L 128.1 288.0 L 130.0 278.4 L 131.9 269.1 L 133.7 260.1 L 135.6 251.4 L 137.4 243.0 L 139.3 234.8 L 141.1 226.9 L 143.0 219.3 L 144.9 212.0 L 146.7 204.9 L 148.6 198.0 L 150.4 191.4 L 152.3 185.0 L 154.1 178.9 L 156.0 172.9 L 157.9 167.2 L 159.7 161.7 L 161.6 156.4 L 163.4 151.3 L 165.3 146.4 L 167.1 141.7 L 169.0 137.2 L 170.9 132.8 L 172.7 128.7 L 174.6 124.7 L 176.4 120.9 L 178.3 117.2 L 180.1 113.7 L 182.0 110.4 L 183.9 107.2 L 185.7 104.1 L 187.6 101.2 L 189.4 98.5 L 191.3 95.9 L 193.1 93.4 L 195.0 91.0 L 196.9 88.8 L 198.7 86.7 L 200.6 84.7 L 202.4 82.8 L 204.3 81.1 L 206.1 79.4 L 208.0 77.9 L 209.9 76.4 L 211.7 75.1 L 213.6 73.9 L 215.4 72.7 L 217.3 71.7 L 219.1 70.7 L 221.0 69.8 L 222.9 69.0 L 224.7 68.3 L 226.6 67.7 L 228.4 67.2 L 230.3 66.7 L 232.1 66.3 L 234.0 66.0 L 235.9 65.7 L 237.7 65.5 L 239.6 65.4 L 241.4 65.4 L 243.3 65.4 L 245.1 65.4 L 247.0 65.5 L 248.9 65.7 L 250.7 65.9 L 252.6 66.2 L 254.4 66.6 L 256.3 66.9 L 258.1 67.4 L 260.0 67.8 L 261.9 68.4 L 263.7 68.9 L 265.6 69.5 L 267.4 70.2 L 269.3 70.9 L 271.1 71.6 L 273.0 72.3 L 274.9 73.1 L 276.7 73.9 L 278.6 74.8 L 280.4 75.7 L 282.3 76.6 L 284.1 77.5 L 286.0 78.5 L 287.9 79.5 L 289.7 80.5 L 291.6 81.6 L 293.4 82.6 L 295.3 83.7 L 297.1 84.8 L 299.0 86.0 L 300.9 87.1 L 302.7 88.3 L 304.6 89.5 L 306.4 90.7 L 308.3 91.9 L 310.1 93.1 L 312.0 94.4 L 313.9 95.6 L 315.7 96.9 L 317.6 98.2 L 319.4 99.5 L 321.3 100.8 L 323.1 102.1 L 325.0 103.5 L 326.9 104.8 L 328.7 106.2 L 330.6 107.5 L 332.4 108.9 L 334.3 110.3 L 336.1 111.6 L 338.0 113.0 L 339.9 114.4 L 341.7 115.8 L 343.6 117.2 L 345.4 118.6 L 347.3 120.0 L 349.1 121.4 L 351.0 122.8 L 352.9 124.2 L 354.7 125.6 L 356.6 127.0 L 358.4 128.5 L 360.3 129.9 L 362.1 131.3 L 364.0 132.7 L 365.9 134.1 L 367.7 135.5 L 369.6 136.9 L 371.4 138.3 L 373.3 139.8 L 375.1 141.2 L 377.0 142.6 L 378.9 144.0 L 380.7 145.4 L 382.6 146.8 L 384.4 148.1 L 386.3 149.5 L 388.1 150.9 L 390.0 152.3 L 391.9 153.7 L 393.7 155.0 L 395.6 156.4 L 397.4 157.8 L 399.3 159.1 L 401.1 160.5 L 403.0 161.8 L 404.9 163.2 L 406.7 164.5 L 408.6 165.8 L 410.4 167.1 L 412.3 168.5 L 414.1 169.8 L 416.0 171.1 L 417.9 172.4 L 419.7 173.6 L 421.6 174.9 L 423.4 176.2 L 425.3 177.5 L 427.1 178.7 L 429.0 180.0 L 430.9 181.2 L 432.7 182.5 L 434.6 183.7 L 436.4 184.9 L 438.3 186.2 L 440.1 187.4 L 442.0 188.6 L 443.9 189.8 L 445.7 191.0 L 447.6 192.1 L 449.4 193.3 L 451.3 194.5 L 453.1 195.6 L 455.0 196.8 L 456.9 197.9 L 458.7 199.0 L 460.6 200.2 L 462.4 201.3 L 464.3 202.4 L 466.1 203.5 L 468.0 204.6 L 469.9 205.7 L 471.7 206.7 L 473.6 207.8 L 475.4 208.9 L 477.3 209.9 L 479.1 211.0 L 481.0 212.0 L 482.9 213.0 L 484.7 214.0 L 486.6 215.0 L 488.4 216.0 L 490.3 217.0 L 492.1 218.0 L 494.0 219.0 L 495.9 220.0 L 497.7 220.9 L 499.6 221.9 L 501.4 222.8 L 503.3 223.8 L 505.1 224.7 L 507.0 225.6 L 508.9 226.5 L 510.7 227.4 L 512.6 228.3 L 514.4 229.2 L 516.3 230.1 L 518.1 231.0 L 520.0 231.8 L 521.9 232.7 L 523.7 233.5 L 525.6 234.4 L 527.4 235.2 L 529.3 236.1 L 531.1 236.9 L 533.0 237.7 L 534.9 238.5 L 536.7 239.3 L 538.6 240.1 L 540.4 240.9 L 542.3 241.6 L 544.1 242.4 L 546.0 243.2 L 547.9 243.9 L 549.7 244.7 L 551.6 245.4 L 553.4 246.1 L 555.3 246.8 L 557.1 247.6 L 559.0 248.3 L 560.9 249.0 L 562.7 249.7 L 564.6 250.4 L 566.4 251.0 L 568.3 251.7 L 570.1 252.4 L 572.0 253.0 L 573.9 253.7 L 575.7 254.4 L 577.6 255.0 L 579.4 255.6 L 581.3 256.3 L 583.1 256.9 L 585.0 257.5 L 586.9 258.1 L 588.7 258.7 L 590.6 259.3 L 592.4 259.9 L 594.3 260.5 L 596.1 261.1 L 598.0 261.6 L 599.9 262.2 L 601.7 262.8 L 603.6 263.3 L 605.4 263.9 L 607.3 264.4 L 609.1 265.0 L 611.0 265.5 L 612.9 266.0 L 614.7 266.5 L 616.6 267.1 L 618.4 267.6 L 620.3 268.1 L 622.1 268.6 L 624.0 269.1 L 625.9 269.6 L 627.7 270.0 L 629.6 270.5 L 631.4 271.0 L 633.3 271.5 L 635.1 271.9 L 637.0 272.4 L 638.9 272.8 L 640.7 273.3 L 642.6 273.7 L 644.4 274.2 L 646.3 274.6 L 648.1 275.0 L 650.0 275.4 L 651.9 275.9 L 653.7 276.3 L 655.6 276.7 L 657.4 277.1 L 659.3 277.5 L 661.1 277.9 L 663.0 278.3 L 664.9 278.7 L 666.7 279.0 L 668.6 279.4 L 670.4 279.8 L 672.3 280.2 L 674.1 280.5 L 676.0 280.9 L 677.9 281.3 L 679.7 281.6 L 681.6 282.0 L 683.4 282.3 L 685.3 282.6 L 687.1 283.0 L 689.0 283.3 L 690.9 283.6 L 692.7 284.0 L 694.6 284.3 L 696.4 284.6 L 698.3 284.9 L 700.1 285.2 L 702.0 285.5 L 703.9 285.8 L 705.7 286.1 L 707.6 286.4 L 709.4 286.7 L 711.3 287.0 L 713.1 287.3 L 715.0 287.6" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M 78.2 -71.1 L 78.3 -69.2 L 78.5 -67.2 L 78.7 -65.3 L 78.8 -63.4 L 79.0 -61.4 L 79.2 -59.5 L 79.4 -57.6 L 79.5 -55.7 L 79.7 -53.8 L 79.9 -51.9 L 80.0 -50.0 L 80.2 -48.1 L 80.4 -46.2 L 80.5 -44.3 L 80.7 -42.5 L 80.9 -40.6 L 81.0 -38.7 L 81.2 -36.9 L 81.4 -35.0 L 81.5 -33.1 L 81.7 -31.3 L 81.9 -29.5 L 82.1 -27.6 L 82.2 -25.8 L 82.4 -23.9 L 82.6 -22.1 L 82.7 -20.3 L 82.9 -18.5 L 83.1 -16.7 L 83.2 -14.9 L 83.4 -13.1 L 83.6 -11.3 L 83.7 -9.5 L 83.9 -7.7 L 84.1 -5.9 L 84.2 -4.1 L 84.4 -2.3 L 84.6 -0.5 L 84.8 1.2 L 84.9 3.0 L 85.1 4.7 L 85.3 6.5 L 85.4 8.3 L 85.6 10.0 L 85.8 11.7 L 85.9 13.5 L 86.1 15.2 L 86.3 16.9 L 86.4 18.7 L 86.6 20.4 L 86.8 22.1 L 86.9 23.8 L 87.1 25.5 L 87.3 27.2 L 87.5 28.9 L 87.6 30.6 L 87.8 32.3 L 88.0 34.0 L 88.1 35.7 L 88.3 37.4 L 88.5 39.0 L 88.6 40.7 L 88.8 42.4 L 89.0 44.0 L 89.1 45.7 L 89.3 47.3 L 89.5 49.0 L 89.6 50.6 L 89.8 52.3 L 90.0 53.9 L 90.2 55.5 L 90.3 57.2 L 90.5 58.8 L 90.7 60.4 L 90.8 62.0 L 91.0 63.6 L 91.2 65.2 L 91.3 66.8 L 91.5 68.4 L 91.7 70.0 L 91.8 71.6 L 92.0 73.2 L 92.2 74.8 L 92.4 76.4 L 92.5 77.9 L 92.7 79.5 L 92.9 81.1 L 93.0 82.6 L 93.2 84.2 L 93.4 85.8 L 93.5 87.3 L 93.7 88.9 L 93.9 90.4 L 94.0 91.9 L 94.2 93.5 L 94.4 95.0 L 94.5 96.5 L 94.7 98.0 L 94.9 99.6 L 95.1 101.1 L 95.2 102.6 L 95.4 104.1 L 95.6 105.6 L 95.7 107.1 L 95.9 108.6 L 96.1 110.1 L 96.2 111.6 L 96.4 113.1 L 96.6 114.5 L 96.7 116.0 L 96.9 117.5 L 97.1 119.0 L 97.2 120.4 L 97.4 121.9 L 97.6 123.3 L 97.8 124.8 L 97.9 126.2 L 98.1 127.7 L 98.3 129.1 L 98.4 130.6 L 98.6 132.0 L 98.8 133.4 L 98.9 134.9 L 99.1 136.3 L 99.3 137.7 L 99.4 139.1 L 99.6 140.5 L 99.8 142.0 L 99.9 143.4 L 100.1 144.8 L 100.3 146.2 L 100.5 147.5 L 100.6 148.9 L 100.8 150.3 L 101.0 151.7 L 101.1 153.1 L 101.3 154.5 L 101.5 155.8 L 101.6 157.2 L 101.8 158.6 L 102.0 159.9 L 102.1 161.3 L 102.3 162.6 L 102.5 164.0 L 102.6 165.3 L 102.8 166.7 L 103.0 168.0 L 103.2 169.4 L 103.3 170.7 L 103.5 172.0 L 103.7 173.4 L 103.8 174.7 L 104.0 176.0 L 104.2 177.3 L 104.3 178.6 L 104.5 179.9 L 104.7 181.2 L 104.8 182.5 L 105.0 183.8 L 105.2 185.1 L 105.4 186.4 L 105.5 187.7 L 105.7 189.0 L 105.9 190.3 L 106.0 191.6 L 106.2 192.8 L 106.4 194.1 L 106.5 195.4 L 106.7 196.6 L 106.9 197.9 L 107.0 199.2 L 107.2 200.4 L 107.4 201.7 L 107.5 202.9 L 107.7 204.2 L 107.9 205.4 L 108.1 206.6 L 108.2 207.9 L 108.4 209.1 L 108.6 210.3 L 108.7 211.5 L 108.9 212.8 L 109.1 214.0 L 109.2 215.2 L 109.4 216.4 L 109.6 217.6 L 109.7 218.8 L 109.9 220.0 L 110.1 221.2 L 110.2 222.4 L 110.4 223.6 L 110.6 224.8 L 110.8 226.0 L 110.9 227.2 L 111.1 228.3 L 111.3 229.5 L 111.4 230.7 L 111.6 231.9 L 111.8 233.0 L 111.9 234.2 L 112.1 235.3 L 112.3 236.5 L 112.4 237.7 L 112.6 238.8 L 112.8 240.0 L 112.9 241.1 L 113.1 242.2 L 113.3 243.4 L 113.5 244.5 L 113.6 245.6 L 113.8 246.8 L 114.0 247.9 L 114.1 249.0 L 114.3 250.1 L 114.5 251.3 L 114.6 252.4 L 114.8 253.5 L 115.0 254.6 L 115.1 255.7 L 115.3 256.8 L 115.5 257.9 L 115.6 259.0 L 115.8 260.1 L 116.0 261.2 L 116.2 262.2 L 116.3 263.3 L 116.5 264.4 L 116.7 265.5 L 116.8 266.6 L 117.0 267.6 L 117.2 268.7 L 117.3 269.8 L 117.5 270.8 L 117.7 271.9 L 117.8 272.9 L 118.0 274.0 L 118.2 275.0 L 118.4 276.1 L 118.5 277.1 L 118.7 278.2 L 118.9 279.2 L 119.0 280.3 L 119.2 281.3 L 119.4 282.3 L 119.5 283.3 L 119.7 284.4 L 119.9 285.4 L 120.0 286.4 L 120.2 287.4 L 120.4 288.4 L 120.5 289.4 L 120.7 290.4 L 120.9 291.5 L 121.1 292.5 L 121.2 293.5 L 121.4 294.4 L 121.6 295.4 L 121.7 296.4 L 121.9 297.4 L 122.1 298.4 L 122.2 299.4 L 122.4 300.4 L 122.6 301.3 L 122.7 302.3 L 122.9 303.3 L 123.1 304.3 L 123.2 305.2 L 123.4 306.2 L 123.6 307.1 L 123.8 308.1 L 123.9 309.0 L 124.1 310.0" fill="none" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="4 4" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="124.1" cy="310.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(64.1, 325.0)">
      <text x="88.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(−4 ; 0) point anguleux</text>
    </g>
    <circle cx="242.3" cy="65.4" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(252.3, 50.400000000000006)">
      <text x="50.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (−2 ; 2e)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="52" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C') : |f(x)| (x ≤ −4)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>2°)</strong> Le nombre de solutions de \\(k(x) = m\\) est le nombre d'intersections de \\((C')\\) avec la droite \\(y = m\\) :<br>
— \\(m < 0\\) : <strong>aucune solution</strong><br>
— \\(m = 0\\) : <strong>1 solution</strong> (\\(x = -4\\))<br>
— \\(0 < m < 2e\\) : <strong>3 solutions</strong><br>
— \\(m = 2e\\) : <strong>2 solutions</strong><br>
— \\(m > 2e\\) : <strong>1 solution</strong></p>

</div>
`
    }
  ]
},
{
  id: 'bac-2004-D-session-normale',
  year: 2004,
  series: 'D',
  tour: 'Session Normale',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale 2004',
  topics: ['Nombres complexes', 'Probabilités & Loi binomiale', 'Fonctions & Bijection réciproque', 'Suites & Point fixe'],
  parts: [
    {
      label: 'Exercice I — Nombres complexes & géométrie (4 pts)',
      problem: `<p>Le plan complexe est muni d'un repère orthonormé \\((O;\\vec{u};\\vec{v})\\). Soit \\(P(z)\\) le polynôme défini par :
\\[P(z) = z^3 + (1-5i)z^2 - 4z + 16\\]
où \\(z\\) désigne un nombre complexe.</p>

<p><strong>1°)</strong><br>
a) Montrer que l'équation \\(P(z) = 0\\) admet une solution imaginaire pure \\(z_0\\).<br>
b) Achever la résolution de l'équation \\(P(z) = 0\\). On appelle \\(z_1\\), \\(z_2\\) les deux autres racines, avec la partie réelle de \\(z_1\\) négative.<br>
c) Écrire \\(z_1\\), \\(z_2\\) et \\(z_0\\) sous forme trigonométrique.</p>

<p><strong>2°)</strong> Soient \\(A\\), \\(B\\) et \\(C\\) les points d'affixes respectives \\(z_1\\), \\(z_2\\) et \\(z_0\\). Déterminer en radians la mesure de l'angle orienté \\((\\vec{AC};\\vec{AB})\\), puis en déduire la nature du triangle \\(ABC\\).</p>

<p><strong>3°)</strong> Soit \\(r\\) la rotation de centre \\(O\\) et d'angle \\(-\\dfrac{\\pi}{2}\\).<br>
a) Calculer \\(z_{A'}\\), l'affixe de \\(A'\\) tel que \\(A' = r(A)\\).<br>
b) Quelle est la nature du quadrilatère \\(OACA'\\) ?</p>`,

            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Racines de polynômes complexes &amp; Rotations</span>
  <ul>
    <li><strong>Racine imaginaire pure :</strong> Pour trouver une solution imaginaire pure $z_0 = ib$ ($b \\in \\mathbb{R}$), on résout $P(ib) = 0 \\iff \\text{Re}(P(ib)) = 0$ et $\\text{Im}(P(ib)) = 0$.</li>
    <li><strong>Angles orientés et nature du triangle :</strong> $(\\overrightarrow{AC} ; \\overrightarrow{AB}) \\equiv \\arg\\left(\\dfrac{z_B - z_A}{z_C - z_A}\\right) \\pmod{2\\pi}$. Si le rapport vaut $e^{i\\theta}$ avec $|z_B-z_A|=|z_C-z_A|$, le triangle est isocèle (ou équilatéral si $\\theta = \\pm\\pi/3$).</li>
    <li><strong>Écriture complexe d'une rotation :</strong> La rotation de centre $\\Omega(\\omega)$ et d'angle $\\alpha$ a pour forme $z' - \\omega = e^{i\\alpha}(z - \\omega)$. En particulier, une rotation de centre $O$ et d'angle $-\\pi/2$ s'écrit $z' = -iz$.</li>
  </ul>
</div>`,
correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) a)</strong> Posons \\(z_0 = ib\\), \\(b \\in \\mathbb{R}^*\\). On substitue dans \\(P\\) :</p>
<p>\\[P(ib) = (ib)^3 + (1-5i)(ib)^2 - 4(ib) + 16 = (-b^2+16) + i(-b^3+5b^2-4b) = 0\\]</p>
<p>Système :<br>
\\(\\begin{cases}-b^2+16=0 \\implies b = \\pm 4\\-b^3+5b^2-4b=0 \\implies b(b^2-5b+4)=0 \\implies b=1 \\text{ ou } b=4\\end{cases}\\)</p>
<p>L'intersection donne \\(b = 4\\), donc \\(\\boxed{z_0 = 4i}\\).</p>

<p><strong>b)</strong> On factorise \\(P(z) = (z-4i)(z^2+(1-i)z+4i)\\). Par identification :<br>
\\(z^2+(1-i)z+4i = 0\\), \\(\\Delta = (1-i)^2 - 16i = -18i\\).<br>
\\(\\delta = 3-3i\\) (racine de \\(-18i\\)), donc :<br>
\\[z_1 = \\dfrac{-(1-i)-(3-3i)}{2} = -2+2i \\qquad z_2 = \\dfrac{-(1-i)+(3-3i)}{2} = 1-i\\]
\\[\\boxed{S_\\mathbb{C} = \\{4i ; -2+2i ; 1-i\\}}\\]</p>

<p><strong>c) Formes trigonométriques</strong><br>
\\[z_0 = 4i = 4\\!\\left(\\cos\\tfrac{\\pi}{2} + i\\sin\\tfrac{\\pi}{2}\\right)\\]
\\[z_1 = -2+2i,\\quad |z_1|=2\\sqrt{2},\\quad \\arg(z_1)=\\tfrac{3\\pi}{4} \\implies z_1 = 2\\sqrt{2}\\!\\left(\\cos\\tfrac{3\\pi}{4}+i\\sin\\tfrac{3\\pi}{4}\\right)\\]
\\[z_2 = 1-i,\\quad |z_2|=\\sqrt{2},\\quad \\arg(z_2)=-\\tfrac{\\pi}{4} \\implies z_2 = \\sqrt{2}\\!\\left(\\cos\\!\\left(-\\tfrac{\\pi}{4}\\right)+i\\sin\\!\\left(-\\tfrac{\\pi}{4}\\right)\\right)\\]</p>

<p><strong>2°)</strong>
\\[(\\vec{AC};\\vec{AB}) = \\arg\\!\\left(\\dfrac{z_2-z_1}{z_0-z_1}\\right) = \\arg\\!\\left(\\dfrac{(1-i)-(-2+2i)}{4i-(-2+2i)}\\right) = \\arg\\!\\left(\\dfrac{3-3i}{2+2i}\\right) = \\arg(-3i/2) \\cdot\\cdots\\]
Plus directement : \\(\\dfrac{z_2-z_1}{z_0-z_1} = \\dfrac{3-3i}{2+2i} = \\dfrac{(3-3i)(2-2i)}{8} = \\dfrac{-12i}{8}\\) — un imaginaire pur négatif, donc :
\\[\\boxed{(\\vec{AC};\\vec{AB}) = \\dfrac{\\pi}{2} + 2k\\pi} \\implies \\vec{AC}\\perp\\vec{AB}\\]
Le triangle \\(ABC\\) est <strong>rectangle en \\(A\\)</strong>.</p>

<p><strong>3°) a)</strong>
\\[z_{A'} = e^{-i\\dfrac{\\pi}{2}}\\cdot z_1 = -i\\cdot(-2+2i) = -2i + 2i^2 \\cdot(-1)\\cdots = -i(-2+2i) = 2i+2 = \\boxed{2+2i}\\]</p>

<p><strong>b)</strong> On vérifie que \\(\\vec{OA} = z_1 = -2+2i\\) et \\(\\vec{A'C} = z_0 - z_{A'} = 4i-(2+2i) = -2+2i\\).<br>
Donc \\(\\vec{OA} = \\vec{A'C}\\) → \\(OACA'\\) est un <strong>parallélogramme</strong>.<br>
De plus \\(OA = OA'\\) (rotation) et \\((\\vec{OA};\\vec{OA'}) = -\\dfrac{\\pi}{2}\\), donc 4 côtés égaux et 4 angles droits.<br>
\\[\\boxed{OACA' \\text{ est un carré.}}\\]</p>`
    },
    {
      label: 'Exercice II — Probabilités & Loi binomiale (4 pts)',
      problem: `<p>Un sac contient <strong>5 jetons rouges</strong> et <strong>2 jetons blancs</strong>, tous indiscernables au toucher. Un jeu consiste à tirer au hasard un jeton du sac :</p>
<ul style="margin:8px 0 8px 18px;line-height:1.8;">
  <li>Si le jeton est <strong>rouge</strong>, le jeu s'arrête ;</li>
  <li>Sinon on tire un <strong>second jeton sans remise</strong>.</li>
</ul>
<p>La mise est de <strong>50 F</strong>. Le tirage d'un jeton blanc rapporte <strong>200 F</strong>, celui d'un jeton rouge ne rapporte rien.<br>
Soit \\(X\\) la variable aléatoire réelle qui, à chaque jeu, associe le <em>gain algébrique</em> du joueur.</p>

<p><strong>1°)</strong><br>
a) Quelles sont les valeurs possibles de \\(X\\) ?<br>
b) Déterminer la loi de probabilité de \\(X\\).<br>
c) Déterminer la fonction de répartition de \\(X\\) puis la représenter graphiquement.</p>

<p><strong>2°)</strong> Soit \\(A\\) l'événement : «Le joueur a un gain positif». Montrer que \\(P(A) = \\dfrac{2}{7}\\).</p>

<p><strong>3°)</strong> Un joueur joue successivement, de façon indépendante, <strong>5 jeux</strong>. Il remet à la fin de chaque jeu les jetons dans le sac. Soit \\(Y\\) la variable aléatoire égale au nombre de fois où l'événement \\(A\\) est réalisé.<br>
Justifier que \\(Y\\) suit une loi binomiale et calculer la probabilité que le joueur obtienne <em>au moins une fois</em> un gain positif au cours des 5 jeux.</p>`,

            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Variable aléatoire, Fonction de répartition &amp; Loi binomiale</span>
  <ul>
    <li><strong>Gain algébrique :</strong> $X = \\text{gain brut} - \\text{mise initialement payée}$.</li>
    <li><strong>Fonction de répartition :</strong> $F(x) = P(X \\leq x)$ est une fonction en escalier, croissante, continue à droite, avec $\\lim_{-\\infty} F = 0$ et $\\lim_{+\\infty} F = 1$.</li>
    <li><strong>Loi binomiale $\\mathcal{B}(n, p)$ :</strong> Pour $n$ épreuves indépendantes avec probabilité de succès $p$ : $P(Y = k) = \\binom{n}{k} p^k (1-p)^{n-k}$.</li>
    <li><strong>Au moins un succès :</strong> $P(Y \\geq 1) = 1 - P(Y = 0) = 1 - (1-p)^n$.</li>
  </ul>
</div>`,
correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Analyse du jeu :</strong><br>
1er tirage : P(Rouge) = \\dfrac{5}{7} ; P(Blanc) = \\dfrac{2}{7}<br>
Si blanc au 1er : 2e tirage : P(Rouge) = \\dfrac{5}{6} ; P(Blanc) = \\dfrac{1}{6}<br>
Issues possibles : R ; BR ; BB</p>

<p><strong>1°) a) Valeurs de \\(X\\)</strong> (gain = recettes − mise) :<br>
— R : gain = \\(0 - 50 = -50\\) F<br>
— BR : gain = \\(200 - 50 = 150\\) F<br>
— BB : gain = \\(400 - 50 = 350\\) F<br>
\\[\\boxed{X(\\Omega) = \\{-50 ; 150 ; 350\\}}\\]</p>

<p><strong>b) Loi de probabilité</strong></p>
<table class="vtab">
  <tr>
    <th>\\(x_i\\)</th>
    <td>\\(-50\\)</td>
    <td>\\(150\\)</td>
    <td>\\(350\\)</td>
    <th>Total</th>
  </tr>
  <tr>
    <th>\\(P(X=x_i)\\)</th>
    <td>\\(\\dfrac{5}{7}\\)</td>
    <td>\\(\\dfrac{2}{7}\\times\\dfrac{5}{6} = \\dfrac{5}{21}\\)</td>
    <td>\\(\\dfrac{2}{7}\\times\\dfrac{1}{6} = \\dfrac{1}{21}\\)</td>
    <td>\\(1\\)</td>
  </tr>
</table>

<p><strong>c) Fonction de répartition \\(F(x) = P(X \\leq x)\\)</strong><br>
\\[F(x) = \\begin{cases} 0 & x < -50 \\ \\dfrac{5}{7} & -50 \\leq x < 150 \\ \\dfrac{5}{7}+\\dfrac{5}{21} = \\dfrac{20}{21} & 150 \\leq x < 350 \\ 1 & x \\geq 350 \\end{cases}\\]
(Représentation : escalier avec sauts en \\(-50\\), \\(150\\) et \\(350\\).)</p>

<p><strong>2°)</strong> \\(A = \\overline{(X=-50)}\\), donc :
\\[P(A) = 1 - P(X=-50) = 1 - \\dfrac{5}{7} = \\boxed{\\dfrac{2}{7}} \\quad \\text{CQFD}\\]</p>

<p><strong>3°)</strong> Chaque jeu est une épreuve de Bernoulli (succès = \\(A\\), probabilité \\(p = \\dfrac{2}{7}\\)). Les 5 jeux sont indépendants, donc :
\\[\\boxed{Y \\sim \\mathcal{B}\\!\\left(5 ; \\dfrac{2}{7}\\right)}\\]
\\[P(Y \\geq 1) = 1 - P(Y=0) = 1 - C_5^0\\!\\left(\\dfrac{2}{7}\\right)^0\\!\\left(\\dfrac{5}{7}\\right)^5 = 1 - \\dfrac{3125}{16807} = \\dfrac{13682}{16807} \\approx \\boxed{0{,}814}\\]</p>`
    },
    {
      label: 'Problème — Fonction logistique, bijection réciproque, suite (12 pts)',
      problem: `<p>On considère la fonction numérique \\(f\\) définie par :
\\[f(x) = \\dfrac{e^{-x}}{1+e^{-x}}\\]
et on désigne par \\((C_f)\\) sa courbe représentative dans un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) — unité : 4 cm.</p>

<p><strong>PARTIE A</strong></p>
<p><strong>1°)</strong><br>
a) Justifier que \\(f\\) est définie sur \\(\\mathbb{R}\\).<br>
b) Calculer \\(\\lim_{x\\to-\\infty}f(x)\\) et \\(\\lim_{x\\to+\\infty}f(x)\\).</p>

<p><strong>2°)</strong><br>
a) Justifier que \\(f\\) est dérivable sur \\(\\mathbb{R}\\) et calculer \\(f'(x)\\).<br>
b) Étudier les variations de \\(f\\) et dresser son tableau de variations.</p>

<p><strong>3°)</strong><br>
a) Montrer que \\(f\\) réalise une bijection de \\(\\mathbb{R}\\) vers un intervalle \\(J\\) à préciser. Expliciter la bijection réciproque \\(f^{-1}\\).<br>
b) Construire dans le même repère la courbe \\((C_f)\\) et la courbe \\((\\Gamma)\\) de \\(f^{-1}\\). Justifier le tracé sans étudier les variations de \\(f^{-1}\\).</p>

<p><strong>4°)</strong> Soit \\(\\lambda > 0\\).<br>
a) Calculer en cm², l'aire \\(\\mathcal{A}(\\lambda)\\) de la partie du plan limitée par \\((C_f)\\), les droites \\(x=0\\), \\(x=\\lambda\\) et \\(y=0\\).<br>
b) Calculer \\(\\lim_{\\lambda\\to+\\infty}\\mathcal{A}(\\lambda)\\).</p>



<p><strong>PARTIE B</strong></p>
<p>Soit \\(h\\) définie par : \\(h(x) = 1 - xe^x - x\\)</p>
<p><strong>1°)</strong> Calculer \\(h'(x)\\) et \\(h''(x)\\).</p>
<p><strong>2°)</strong> Étudier les variations de \\(h'\\) et calculer \\(h'(-2)\\). En déduire le signe de \\(h'\\).</p>
<p><strong>3°)</strong><br>
a) Dresser le tableau de variations de \\(h\\).<br>
b) Montrer que \\(h(x)=0\\) admet une solution unique \\(\\alpha\\) et vérifier que \\(\\alpha \\in [0 ; 1]\\).</p>








<p><strong>4°)</strong> Montrer que \\(\\alpha\\) est solution de \\(f(x) = x\\).</p>
<p><strong>5°)</strong> Soit \\(I = [0 ; 1]\\).<br>
a) Montrer que pour tout \\(x \\in I\\), \\(f(x) \\in I\\).<br>
b) Montrer que si \\(x \\in I\\) alors \\((1+e^{-1})^2 \\leq (1+e^{-x})^2 \\leq 4\\).<br>
c) En déduire que pour tout \\(x \\in I\\), \\(|f'(x)| \\leq \\dfrac{e}{(1+e)^2}\\).</p>
<p><strong>6°)</strong> Soit \\((U_n)_{n\\geq 0}\\) la suite définie par :
\\[\\begin{cases}U_0 = \\dfrac{1}{2}\\ U_{n+1} = f(U_n),\\quad n \\in \\mathbb{N}\\end{cases}\\]
a) Montrer que pour tout \\(n \\in \\mathbb{N}\\), \\(U_n \\in I\\).<br>
b) On pose \\(k = \\dfrac{e}{1+e}\\). Montrer que pour tout \\(x \\in I\\), \\(|f(x)-\\alpha| \\leq k^2|x-\\alpha|\\).<br>
c) En déduire que \\(|U_{n+1}-\\alpha| \\leq k^2|U_n-\\alpha|\\) puis que \\(|U_n-\\alpha| \\leq \\dfrac{1}{2}k^{2n}\\).<br>
d) En déduire que \\((U_n)\\) est convergente et préciser sa limite.</p>
<p><em>On donne :</em> \\(e \\approx 2{,}72\\) ; \\(e^{-1} \\approx 0{,}37\\) ; \\(e^{-0{,}5} \\approx 0{,}61\\) ; \\(e^{0{,}5} \\approx 1{,}65\\)</p>`,

            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonction logistique, bijection &amp ; suite</span>
  <ul>
    <li><strong>Fonction logistique :</strong> $f(x) = \\dfrac{1}{1+e^{-x}}$, à valeurs dans $]0;1[$, strictement croissante sur $\\mathbb{R}$.</li>
    <li><strong>Bijection réciproque (logit) :</strong> $f^{-1}(y) = \\ln\\!\\left(\\dfrac{y}{1-y}\\right)$ — définie sur $]0;1[$.</li>
    <li><strong>Suite monotone bornée :</strong> Toute suite monotone et bornée est convergente.</li>
    <li><strong>Limite d'une suite récurrente :</strong> Si $(u_n)$ converge vers $\\ell$ et $u_{n+1} = g(u_n)$, alors $\\ell = g(\\ell)$ (point fixe).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>PARTIE A</strong></p>

<p><strong>1°) a)</strong> \\(1+e^{-x} > 0\\) pour tout \\(x \\in \\mathbb{R}\\) (car \\(e^{-x} > 0\\)), donc \\(D_f = \\mathbb{R}\\).</p>

<p><strong>b)</strong>
\\[\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}\\dfrac{e^{-x}}{1+e^{-x}} = \\lim_{x\\to-\\infty}\\dfrac{1}{\\dfrac{1}{e^{-x}}+1} = \\dfrac{1}{0+1} \\cdots\\]
Plus directement : \\(f(x) = 1 - \\dfrac{1}{1+e^{-x}}\\), et \\(e^{-x}\\to+\\infty\\) quand \\(x\\to-\\infty\\), donc \\(\\boxed{\\lim_{x\\to-\\infty}f(x)=1}\\).<br>
Quand \\(x\\to+\\infty\\) : \\(e^{-x}\\to 0\\), donc \\(\\boxed{\\lim_{x\\to+\\infty}f(x)=0}\\).</p>

<p><strong>2°) a)</strong> \\(f\\) est le quotient de fonctions dérivables sur \\(\\mathbb{R}\\) avec dénominateur non nul, donc \\(f\\) est dérivable et :
\\[\\boxed{f'(x) = -\\dfrac{e^{-x}}{(1+e^{-x})^2}}\\]</p>





<p><strong>b)</strong> \\(\\forall x \\in \\mathbb{R}\\) : \\(e^{-x}>0\\) et \\((1+e^{-x})^2>0\\) donc \\(f'(x) < 0\\) : \\(f\\) est <strong>strictement décroissante</strong> sur \\(\\mathbb{R}\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2004-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2004-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <line x1="170" y1="135" x2="680" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2004-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
  </svg>
</div>

<p><strong>3°) a)</strong> \\(f\\) est continue, strictement décroissante sur \\(\\mathbb{R}\\), avec limites 1 et 0, donc \\(f\\) réalise une bijection de \\(\\mathbb{R}\\) sur \\(J = \\,]0 ; 1[\\).<br>
Calcul de \\(f^{-1}\\) : pour \\(y \\in ]0;1[\\) :<br>
\\[f(x)=y \\iff \\dfrac{e^{-x}}{1+e^{-x}}=y \\iff (1-y)e^{-x}=y \\iff e^{-x}=\\dfrac{y}{1-y} \\iff x = \\ln\\!\\dfrac{1-y}{y}\\]
\\[\\boxed{f^{-1}(x) = \\ln\\!\\dfrac{1-x}{x}, \\quad x \\in \\,]0 ; 1[}\\]</p>

<p><strong>b)</strong> Asymptotes de \\((C_f)\\) : \\(y=1\\) en \\(-\\infty\\) et \\(y=0\\) en \\(+\\infty\\). Point : \\(f(0)=\\dfrac{1}{2}\\). Tangente en \\((0;\\dfrac{1}{2})\\) : \\(y = -\\dfrac{1}{4}x+\\dfrac{1}{2}\\).<br>
\\((C_f)\\) et \\((\\Gamma)\\) sont symétriques par rapport à la droite \\(y=x\\).</p>
<p><strong>3°) b) Construction des courbes \\((C_f)\\) et \\((\\Gamma)\\) de \\(f^{-1}\\)</strong></p>
<p>La courbe \\((C_f)\\) admet pour asymptotes horizontales \\(y = 1\\) en \\(-\\infty\\) et \\(y = 0\\) en \\(+\\infty\\), avec pour centre de symétrie \\(I\\left(0;\\dfrac{1}{2}\\right)\\). La courbe \\((\\Gamma)\\) de la bijection réciproque \\(f^{-1}(x) = \\ln\\left(\\dfrac{1-x}{x}\\right)\\) est la symétrique orthogonale de \\((C_f)\\) par rapport à la première bissectrice d'équation \\(y = x\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2004 — Courbes (C_f) et (Γ) de f⁻¹</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="146.2" y1="40.0" x2="146.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="227.5" y1="40.0" x2="227.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="308.8" y1="40.0" x2="308.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="471.2" y1="40.0" x2="471.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="552.5" y1="40.0" x2="552.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="633.8" y1="40.0" x2="633.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="340.0" x2="715.0" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="280.0" x2="715.0" y2="280.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="160.0" x2="715.0" y2="160.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="100.0" x2="715.0" y2="100.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="220.0" x2="735" y2="220.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="390.0" y1="415" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="238.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="372.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="216.0" x2="65.0" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="146.2" y1="216.0" x2="146.2" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="146.2" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="227.5" y1="216.0" x2="227.5" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="227.5" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="308.8" y1="216.0" x2="308.8" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="308.8" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="471.2" y1="216.0" x2="471.2" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="471.2" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="552.5" y1="216.0" x2="552.5" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="552.5" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="633.8" y1="216.0" x2="633.8" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="633.8" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="386.0" y1="400.0" x2="394.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="386.0" y1="340.0" x2="394.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="386.0" y1="280.0" x2="394.0" y2="280.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="284.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="160.0" x2="394.0" y2="160.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="164.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="386.0" y1="100.0" x2="394.0" y2="100.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="104.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><text x="380.0" y="235.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="65.0" y1="160.0" x2="715.0" y2="160.0" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="146.2" y1="400.0" x2="633.8" y2="40.0" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 161.1 L 66.9 161.1 L 68.7 161.1 L 70.6 161.2 L 72.4 161.2 L 74.3 161.2 L 76.1 161.2 L 78.0 161.3 L 79.9 161.3 L 81.7 161.3 L 83.6 161.4 L 85.4 161.4 L 87.3 161.4 L 89.1 161.4 L 91.0 161.5 L 92.9 161.5 L 94.7 161.5 L 96.6 161.6 L 98.4 161.6 L 100.3 161.6 L 102.1 161.7 L 104.0 161.7 L 105.9 161.8 L 107.7 161.8 L 109.6 161.8 L 111.4 161.9 L 113.3 161.9 L 115.1 162.0 L 117.0 162.0 L 118.9 162.1 L 120.7 162.1 L 122.6 162.2 L 124.4 162.2 L 126.3 162.2 L 128.1 162.3 L 130.0 162.3 L 131.9 162.4 L 133.7 162.5 L 135.6 162.5 L 137.4 162.6 L 139.3 162.6 L 141.1 162.7 L 143.0 162.7 L 144.9 162.8 L 146.7 162.9 L 148.6 162.9 L 150.4 163.0 L 152.3 163.1 L 154.1 163.1 L 156.0 163.2 L 157.9 163.3 L 159.7 163.3 L 161.6 163.4 L 163.4 163.5 L 165.3 163.6 L 167.1 163.6 L 169.0 163.7 L 170.9 163.8 L 172.7 163.9 L 174.6 164.0 L 176.4 164.0 L 178.3 164.1 L 180.1 164.2 L 182.0 164.3 L 183.9 164.4 L 185.7 164.5 L 187.6 164.6 L 189.4 164.7 L 191.3 164.8 L 193.1 164.9 L 195.0 165.0 L 196.9 165.1 L 198.7 165.2 L 200.6 165.3 L 202.4 165.4 L 204.3 165.5 L 206.1 165.7 L 208.0 165.8 L 209.9 165.9 L 211.7 166.0 L 213.6 166.1 L 215.4 166.3 L 217.3 166.4 L 219.1 166.5 L 221.0 166.7 L 222.9 166.8 L 224.7 166.9 L 226.6 167.1 L 228.4 167.2 L 230.3 167.4 L 232.1 167.5 L 234.0 167.7 L 235.9 167.8 L 237.7 168.0 L 239.6 168.1 L 241.4 168.3 L 243.3 168.5 L 245.1 168.6 L 247.0 168.8 L 248.9 169.0 L 250.7 169.2 L 252.6 169.3 L 254.4 169.5 L 256.3 169.7 L 258.1 169.9 L 260.0 170.1 L 261.9 170.3 L 263.7 170.5 L 265.6 170.7 L 267.4 170.9 L 269.3 171.1 L 271.1 171.3 L 273.0 171.5 L 274.9 171.7 L 276.7 171.9 L 278.6 172.1 L 280.4 172.4 L 282.3 172.6 L 284.1 172.8 L 286.0 173.1 L 287.9 173.3 L 289.7 173.5 L 291.6 173.8 L 293.4 174.0 L 295.3 174.3 L 297.1 174.5 L 299.0 174.8 L 300.9 175.0 L 302.7 175.3 L 304.6 175.5 L 306.4 175.8 L 308.3 176.1 L 310.1 176.3 L 312.0 176.6 L 313.9 176.9 L 315.7 177.2 L 317.6 177.4 L 319.4 177.7 L 321.3 178.0 L 323.1 178.3 L 325.0 178.6 L 326.9 178.9 L 328.7 179.2 L 330.6 179.5 L 332.4 179.8 L 334.3 180.1 L 336.1 180.4 L 338.0 180.7 L 339.9 181.0 L 341.7 181.3 L 343.6 181.7 L 345.4 182.0 L 347.3 182.3 L 349.1 182.6 L 351.0 182.9 L 352.9 183.3 L 354.7 183.6 L 356.6 183.9 L 358.4 184.2 L 360.3 184.6 L 362.1 184.9 L 364.0 185.2 L 365.9 185.6 L 367.7 185.9 L 369.6 186.2 L 371.4 186.6 L 373.3 186.9 L 375.1 187.3 L 377.0 187.6 L 378.9 187.9 L 380.7 188.3 L 382.6 188.6 L 384.4 189.0 L 386.3 189.3 L 388.1 189.7 L 390.0 190.0 L 391.9 190.3 L 393.7 190.7 L 395.6 191.0 L 397.4 191.4 L 399.3 191.7 L 401.1 192.1 L 403.0 192.4 L 404.9 192.7 L 406.7 193.1 L 408.6 193.4 L 410.4 193.8 L 412.3 194.1 L 414.1 194.4 L 416.0 194.8 L 417.9 195.1 L 419.7 195.4 L 421.6 195.8 L 423.4 196.1 L 425.3 196.4 L 427.1 196.7 L 429.0 197.1 L 430.9 197.4 L 432.7 197.7 L 434.6 198.0 L 436.4 198.3 L 438.3 198.7 L 440.1 199.0 L 442.0 199.3 L 443.9 199.6 L 445.7 199.9 L 447.6 200.2 L 449.4 200.5 L 451.3 200.8 L 453.1 201.1 L 455.0 201.4 L 456.9 201.7 L 458.7 202.0 L 460.6 202.3 L 462.4 202.6 L 464.3 202.8 L 466.1 203.1 L 468.0 203.4 L 469.9 203.7 L 471.7 203.9 L 473.6 204.2 L 475.4 204.5 L 477.3 204.7 L 479.1 205.0 L 481.0 205.2 L 482.9 205.5 L 484.7 205.7 L 486.6 206.0 L 488.4 206.2 L 490.3 206.5 L 492.1 206.7 L 494.0 206.9 L 495.9 207.2 L 497.7 207.4 L 499.6 207.6 L 501.4 207.9 L 503.3 208.1 L 505.1 208.3 L 507.0 208.5 L 508.9 208.7 L 510.7 208.9 L 512.6 209.1 L 514.4 209.3 L 516.3 209.5 L 518.1 209.7 L 520.0 209.9 L 521.9 210.1 L 523.7 210.3 L 525.6 210.5 L 527.4 210.7 L 529.3 210.8 L 531.1 211.0 L 533.0 211.2 L 534.9 211.4 L 536.7 211.5 L 538.6 211.7 L 540.4 211.9 L 542.3 212.0 L 544.1 212.2 L 546.0 212.3 L 547.9 212.5 L 549.7 212.6 L 551.6 212.8 L 553.4 212.9 L 555.3 213.1 L 557.1 213.2 L 559.0 213.3 L 560.9 213.5 L 562.7 213.6 L 564.6 213.7 L 566.4 213.9 L 568.3 214.0 L 570.1 214.1 L 572.0 214.2 L 573.9 214.3 L 575.7 214.5 L 577.6 214.6 L 579.4 214.7 L 581.3 214.8 L 583.1 214.9 L 585.0 215.0 L 586.9 215.1 L 588.7 215.2 L 590.6 215.3 L 592.4 215.4 L 594.3 215.5 L 596.1 215.6 L 598.0 215.7 L 599.9 215.8 L 601.7 215.9 L 603.6 216.0 L 605.4 216.0 L 607.3 216.1 L 609.1 216.2 L 611.0 216.3 L 612.9 216.4 L 614.7 216.4 L 616.6 216.5 L 618.4 216.6 L 620.3 216.7 L 622.1 216.7 L 624.0 216.8 L 625.9 216.9 L 627.7 216.9 L 629.6 217.0 L 631.4 217.1 L 633.3 217.1 L 635.1 217.2 L 637.0 217.3 L 638.9 217.3 L 640.7 217.4 L 642.6 217.4 L 644.4 217.5 L 646.3 217.5 L 648.1 217.6 L 650.0 217.7 L 651.9 217.7 L 653.7 217.8 L 655.6 217.8 L 657.4 217.8 L 659.3 217.9 L 661.1 217.9 L 663.0 218.0 L 664.9 218.0 L 666.7 218.1 L 668.6 218.1 L 670.4 218.2 L 672.3 218.2 L 674.1 218.2 L 676.0 218.3 L 677.9 218.3 L 679.7 218.4 L 681.6 218.4 L 683.4 218.4 L 685.3 218.5 L 687.1 218.5 L 689.0 218.5 L 690.9 218.6 L 692.7 218.6 L 694.6 218.6 L 696.4 218.6 L 698.3 218.7 L 700.1 218.7 L 702.0 218.7 L 703.9 218.8 L 705.7 218.8 L 707.6 218.8 L 709.4 218.8 L 711.3 218.9 L 713.1 218.9 L 715.0 218.9" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 391.6 -13.5 L 391.8 -5.6 L 392.1 1.4 L 392.3 7.7 L 392.5 13.4 L 392.7 18.7 L 393.0 23.5 L 393.2 28.1 L 393.4 32.3 L 393.6 36.3 L 393.9 40.0 L 394.1 43.5 L 394.3 46.9 L 394.5 50.1 L 394.7 53.2 L 395.0 56.1 L 395.2 58.9 L 395.4 61.6 L 395.6 64.2 L 395.9 66.7 L 396.1 69.1 L 396.3 71.5 L 396.5 73.7 L 396.8 75.9 L 397.0 78.1 L 397.2 80.1 L 397.4 82.1 L 397.6 84.1 L 397.9 86.0 L 398.1 87.9 L 398.3 89.7 L 398.5 91.4 L 398.8 93.2 L 399.0 94.9 L 399.2 96.5 L 399.4 98.1 L 399.6 99.7 L 399.9 101.3 L 400.1 102.8 L 400.3 104.3 L 400.5 105.8 L 400.8 107.2 L 401.0 108.7 L 401.2 110.1 L 401.4 111.4 L 401.7 112.8 L 401.9 114.1 L 402.1 115.4 L 402.3 116.7 L 402.5 118.0 L 402.8 119.2 L 403.0 120.5 L 403.2 121.7 L 403.4 122.9 L 403.7 124.1 L 403.9 125.2 L 404.1 126.4 L 404.3 127.5 L 404.6 128.6 L 404.8 129.8 L 405.0 130.9 L 405.2 131.9 L 405.4 133.0 L 405.7 134.1 L 405.9 135.1 L 406.1 136.2 L 406.3 137.2 L 406.6 138.2 L 406.8 139.2 L 407.0 140.2 L 407.2 141.2 L 407.4 142.2 L 407.7 143.2 L 407.9 144.1 L 408.1 145.1 L 408.3 146.0 L 408.6 147.0 L 408.8 147.9 L 409.0 148.8 L 409.2 149.7 L 409.5 150.7 L 409.7 151.6 L 409.9 152.4 L 410.1 153.3 L 410.3 154.2 L 410.6 155.1 L 410.8 156.0 L 411.0 156.8 L 411.2 157.7 L 411.5 158.5 L 411.7 159.4 L 411.9 160.2 L 412.1 161.0 L 412.4 161.9 L 412.6 162.7 L 412.8 163.5 L 413.0 164.3 L 413.2 165.1 L 413.5 165.9 L 413.7 166.7 L 413.9 167.5 L 414.1 168.3 L 414.4 169.1 L 414.6 169.9 L 414.8 170.7 L 415.0 171.4 L 415.2 172.2 L 415.5 173.0 L 415.7 173.7 L 415.9 174.5 L 416.1 175.2 L 416.4 176.0 L 416.6 176.7 L 416.8 177.5 L 417.0 178.2 L 417.3 179.0 L 417.5 179.7 L 417.7 180.4 L 417.9 181.2 L 418.1 181.9 L 418.4 182.6 L 418.6 183.4 L 418.8 184.1 L 419.0 184.8 L 419.3 185.5 L 419.5 186.2 L 419.7 186.9 L 419.9 187.6 L 420.2 188.3 L 420.4 189.1 L 420.6 189.8 L 420.8 190.5 L 421.0 191.2 L 421.3 191.8 L 421.5 192.5 L 421.7 193.2 L 421.9 193.9 L 422.2 194.6 L 422.4 195.3 L 422.6 196.0 L 422.8 196.7 L 423.0 197.4 L 423.3 198.0 L 423.5 198.7 L 423.7 199.4 L 423.9 200.1 L 424.2 200.7 L 424.4 201.4 L 424.6 202.1 L 424.8 202.8 L 425.1 203.4 L 425.3 204.1 L 425.5 204.8 L 425.7 205.4 L 425.9 206.1 L 426.2 206.8 L 426.4 207.4 L 426.6 208.1 L 426.8 208.8 L 427.1 209.4 L 427.3 210.1 L 427.5 210.8 L 427.7 211.4 L 428.0 212.1 L 428.2 212.8 L 428.4 213.4 L 428.6 214.1 L 428.8 214.7 L 429.1 215.4 L 429.3 216.0 L 429.5 216.7 L 429.7 217.4 L 430.0 218.0 L 430.2 218.7 L 430.4 219.3 L 430.6 220.0 L 430.8 220.7 L 431.1 221.3 L 431.3 222.0 L 431.5 222.6 L 431.7 223.3 L 432.0 224.0 L 432.2 224.6 L 432.4 225.3 L 432.6 225.9 L 432.9 226.6 L 433.1 227.2 L 433.3 227.9 L 433.5 228.6 L 433.7 229.2 L 434.0 229.9 L 434.2 230.6 L 434.4 231.2 L 434.6 231.9 L 434.9 232.6 L 435.1 233.2 L 435.3 233.9 L 435.5 234.6 L 435.8 235.2 L 436.0 235.9 L 436.2 236.6 L 436.4 237.2 L 436.6 237.9 L 436.9 238.6 L 437.1 239.3 L 437.3 239.9 L 437.5 240.6 L 437.8 241.3 L 438.0 242.0 L 438.2 242.6 L 438.4 243.3 L 438.6 244.0 L 438.9 244.7 L 439.1 245.4 L 439.3 246.1 L 439.5 246.8 L 439.8 247.5 L 440.0 248.2 L 440.2 248.8 L 440.4 249.5 L 440.7 250.2 L 440.9 250.9 L 441.1 251.7 L 441.3 252.4 L 441.5 253.1 L 441.8 253.8 L 442.0 254.5 L 442.2 255.2 L 442.4 255.9 L 442.7 256.6 L 442.9 257.4 L 443.1 258.1 L 443.3 258.8 L 443.6 259.6 L 443.8 260.3 L 444.0 261.0 L 444.2 261.8 L 444.4 262.5 L 444.7 263.3 L 444.9 264.0 L 445.1 264.8 L 445.3 265.5 L 445.6 266.3 L 445.8 267.0 L 446.0 267.8 L 446.2 268.6 L 446.4 269.3 L 446.7 270.1 L 446.9 270.9 L 447.1 271.7 L 447.3 272.5 L 447.6 273.3 L 447.8 274.1 L 448.0 274.9 L 448.2 275.7 L 448.5 276.5 L 448.7 277.3 L 448.9 278.1 L 449.1 279.0 L 449.3 279.8 L 449.6 280.6 L 449.8 281.5 L 450.0 282.3 L 450.2 283.2 L 450.5 284.0 L 450.7 284.9 L 450.9 285.8 L 451.1 286.7 L 451.4 287.6 L 451.6 288.4 L 451.8 289.3 L 452.0 290.3 L 452.2 291.2 L 452.5 292.1 L 452.7 293.0 L 452.9 294.0 L 453.1 294.9 L 453.4 295.9 L 453.6 296.8 L 453.8 297.8 L 454.0 298.8 L 454.2 299.8 L 454.5 300.8 L 454.7 301.8 L 454.9 302.8 L 455.1 303.8 L 455.4 304.9 L 455.6 305.9 L 455.8 307.0 L 456.0 308.1 L 456.3 309.1 L 456.5 310.2 L 456.7 311.4 L 456.9 312.5 L 457.1 313.6 L 457.4 314.8 L 457.6 315.9 L 457.8 317.1 L 458.0 318.3 L 458.3 319.5 L 458.5 320.8 L 458.7 322.0 L 458.9 323.3 L 459.2 324.6 L 459.4 325.9 L 459.6 327.2 L 459.8 328.6 L 460.0 329.9 L 460.3 331.3 L 460.5 332.8 L 460.7 334.2 L 460.9 335.7 L 461.2 337.2 L 461.4 338.7 L 461.6 340.3 L 461.8 341.9 L 462.0 343.5 L 462.3 345.1 L 462.5 346.8 L 462.7 348.6 L 462.9 350.3 L 463.2 352.1 L 463.4 354.0 L 463.6 355.9 L 463.8 357.9 L 464.1 359.9 L 464.3 361.9 L 464.5 364.1 L 464.7 366.3 L 464.9 368.5 L 465.2 370.9 L 465.4 373.3 L 465.6 375.8 L 465.8 378.4 L 466.1 381.1 L 466.3 383.9 L 466.5 386.8 L 466.7 389.9 L 467.0 393.1 L 467.2 396.5 L 467.4 400.0 L 467.6 403.7 L 467.8 407.7 L 468.1 411.9 L 468.3 416.5 L 468.5 421.3 L 468.7 426.6 L 469.0 432.3 L 469.2 438.6 L 469.4 445.6 L 469.6 453.5" fill="none" stroke="#2d70b3" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="190.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 180.0)">
      <text x="39.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">I(0 ; 0,5)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="88" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_f) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#2d70b3" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (Γ) : f⁻¹(x)</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="5 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote y = 1</text>
      <line x1="10" y1="69" x2="35" y2="69" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="42" y="73" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Axe de symétrie y = x</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>4°) a)</strong>
\\[\\mathcal{A}(\\lambda) = \\int_0^\\lambda f(x)\\,dx \\times (4\\text{ cm})^2 = \\left[-\\ln(1+e^{-x})\\right]_0^\\lambda \\times 16\\,\\text{cm}^2\\]
\\[= \\left(-\\ln(1+e^{-\\lambda})+\\ln 2\\right)\\times 16 = 16\\ln\\!\\dfrac{2}{1+e^{-\\lambda}}\\,\\text{cm}^2\\]
\\[\\boxed{\\mathcal{A}(\\lambda) = 16\\ln\\!\\dfrac{2e^\\lambda}{1+e^\\lambda}\\,\\text{cm}^2}\\]</p>

<p><strong>b)</strong> \\(\\lim_{\\lambda\\to+\\infty}\\mathcal{A}(\\lambda) = 16\\ln\\!\\dfrac{2\\cdot\\infty}{\\infty} = 16\\ln 2 \\approx 11{,}09\\,\\text{cm}^2\\).<br>
\\[\\boxed{\\lim_{\\lambda\\to+\\infty}\\mathcal{A}(\\lambda) = 16\\ln 2 \\text{ cm}^2}\\]</p>

<hr>
<p><strong>PARTIE B</strong></p>

<p><strong>1°)</strong>
\\[h'(x) = -1-(x+1)e^x \\qquad h''(x) = -(x+2)e^x\\]</p>

<p><strong>2°)</strong> \\(e^x > 0\\) donc signe de \\(h''\\) = signe de \\(-(x+2)\\) :<br>
\\(h'\\) croissante sur \\(]-\\infty;-2[\\), décroissante sur \\(]-2;+\\infty[\\). Maximum en \\(x=-2\\) :<br>
\\[h'(-2) = -1-(-2+1)e^{-2} = -1+e^{-2} = e^{-2}-1 < 0\\]
Donc \\(\\forall x \\in \\mathbb{R},\\ ; h'(x) \\leq h'(-2) < 0\\). \\(h\\) est <strong>strictement décroissante</strong>.</p>

<p><strong>3°) b)</strong> \\(h\\) est continue, strictement décroissante de \\(+\\infty\\) vers \\(-\\infty\\) : \\(h(x)=0\\) admet une <strong>unique solution \\(\\alpha\\)</strong>.<br>
\\(h(0)=1>0\\) et \\(h(1)=1-e-1=-e<0\\) → \\(h(0)\\cdot h(1)<0\\), donc \\(\\boxed{\\alpha \\in [0 ; 1]}\\).</p>

<p><strong>4°)</strong>
\\[f(x)=x \\iff \\dfrac{e^{-x}}{1+e^{-x}}=x \\iff e^{-x} = x+xe^{-x} \\iff e^{-x}(1-xe^x-x)=0 \\iff h(x)=0\\]
Les deux équations sont équivalentes, donc \\(\\alpha\\) est bien solution de \\(f(x)=x\\). (vérifié)</p>

<p><strong>5°) a)</strong> \\(f([0;1]) = [f(1);f(0)] = \\left[\\dfrac{e^{-1}}{1+e^{-1}} ; \\dfrac{1}{2}\\right] \\approx [0{,}27 ; 0{,}5] \\subset [0;1]\\). (vérifié)</p>

<p><strong>b)</strong> \\(x \\in [0;1] \\Rightarrow -1\\leq -x \\leq 0 \\Rightarrow e^{-1}\\leq e^{-x}\\leq 1 \\Rightarrow 1+e^{-1}\\leq 1+e^{-x}\\leq 2\\).<br>
En élevant au carré (membres positifs) : \\(\\boxed{(1+e^{-1})^2 \\leq (1+e^{-x})^2 \\leq 4}\\). (vérifié)</p>

<p><strong>c)</strong> \\(|f'(x)| = \\dfrac{e^{-x}}{(1+e^{-x})^2}\\). Par produit des inégalités (1) et (2) :
\\[\\dfrac{e^{-1}}{4} \\leq \\dfrac{e^{-x}}{(1+e^{-x})^2} \\leq \\dfrac{1}{(1+e^{-1})^2} = \\dfrac{e^2}{(1+e)^2} \\cdot \\dfrac{1}{e} = \\dfrac{e}{(1+e)^2}\\]
\\[\\boxed{\\forall x \\in I,\\ ; |f'(x)| \\leq \\dfrac{e}{(1+e)^2} = k^2}\\]</p>

<p><strong>6°) a)</strong> <em>Par récurrence :</em> \\(U_0=\\dfrac{1}{2}\\in I\\). Si \\(U_n\\in I\\) alors \\(U_{n+1}=f(U_n)\\in f(I)\\subset I\\). Par induction, \\(\\forall n\\in\\mathbb{N},\\ ; U_n\\in I\\).</p>

<p><strong>b)</strong> Inégalité des accroissements finis sur \\(I\\) : \\(|f'(x)|\\leq k^2\\) donc :
\\[|f(x)-f(\\alpha)| \\leq k^2|x-\\alpha| \\implies \\boxed{|f(x)-\\alpha|\\leq k^2|x-\\alpha|}\\]</p>

<p><strong>c)</strong> En posant \\(x=U_n\\) : \\(|U_{n+1}-\\alpha|\\leq k^2|U_n-\\alpha|\\).<br>
Par récurrence : \\(|U_n-\\alpha|\\leq k^{2n}|U_0-\\alpha|\\leq k^{2n}\\cdot\\dfrac{1}{2}\\), donc :
\\[\\boxed{|U_n-\\alpha|\\leq \\dfrac{1}{2}k^{2n}}\\]</p>

<p><strong>d)</strong> \\(0 < k = \\dfrac{e}{1+e} < 1\\) donc \\(k^2 < 1\\) et \\(\\lim_{n\\to+\\infty}k^{2n}=0\\).<br>
Par le théorème des gendarmes : \\(\\lim_{n\\to+\\infty}|U_n-\\alpha|=0\\), donc :
\\[\\boxed{\\lim_{n\\to+\\infty}U_n = \\alpha}\\]</p>

`
    }
  ]
},
{
  id: 'bac-2005-D-session-normale',
  year: 2005,
  series: 'D',
  tour: 'Session normale',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale 2005',
  topics: ['Nombres complexes', 'Courbe paramétrique', 'Fonctions & dérivées', 'Suite récurrente & Intégrale'],
  parts: [
    {
      label: 'Exercice I — Complexes et quadrilatère (4 pts)',
      problem: `<p><strong>1)</strong> Calculer \\((2+4i)^2\\).</p>

<p><strong>2)</strong> On considère l'équation \\((E) : z^3+(3-8i)z^2-(13+12i)z+9+20i = 0\\).</p>
<p><strong>a)</strong> Montrer que (E) admet une solution réelle \\(z_0\\) que l'on déterminera.</p>
<p><strong>b)</strong> Résoudre dans \\(\\mathbb{C}\\) l'équation (E).</p>

<p><strong>3)</strong> On donne dans le plan les points A, B et C d'affixes \\(z_A = -3+2i\\), \\(z_B = 1\\), \\(z_C = -1+6i\\).</p>
<p><strong>a)</strong> Calculer \\(\\dfrac{z_C-z_A}{z_B-z_A}\\) et en déduire la nature du triangle ABC.</p>
<p><strong>b)</strong> Le point D est l'image de B par la translation de vecteur \\(\\vec{u}\\) d'affixe \\(2+4i\\). Calculer l'affixe \\(z_D\\).</p>
<p><strong>c)</strong> Déterminer la nature du quadrilatère ABDC.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Complexes &amp ; quadrilatères</span>
  <ul>
    <li><strong>Milieu :</strong> Le milieu $I$ de $[AB]$ a pour affixe $z_I = \\dfrac{z_A + z_B}{2}$.</li>
    <li><strong>Quadrilatère :</strong> ABCD est un carré $\\iff$ les diagonales sont de même milieu, de même longueur et perpendiculaires.</li>
    <li><strong>Perpendicularité :</strong> $\\overrightarrow{AB} \\perp \\overrightarrow{CD} \\iff \\dfrac{z_D - z_C}{z_B - z_A}$ est imaginaire pur (argument $\\pm\\dfrac{\\pi}{2}$).</li>
    <li><strong>Multiplication par $i$ :</strong> Multiplier une affixe par $i$ effectue une rotation de $+90°$ autour de O.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) \\((2+4i)^2\\)</strong></p>
<p>\\((2+4i)^2 = 4+16i+16i^2 = 4+16i-16 = -12+16i\\)</p>
<p>\\[\\boxed{(2+4i)^2 = -12+16i}\\]</p>

<p><strong>2a) Racine réelle z₀</strong></p>
<p>Posons \\(z_0 = a \\in \\mathbb{R}\\). Alors :</p>
<p>\\((a^3+3a^2-13a+9)+i(-8a^2-12a+20) = 0\\)</p>
<p>Partie imaginaire nulle : \\(-8a^2-12a+20=0 \\Rightarrow 2a^2+3a-5=0\\).</p>
<p>\\(\\Delta=49\\), donc \\(a=1\\) ou \\(a=-\\dfrac{5}{2}\\).</p>
<p>Vérification dans la partie réelle : \\(a=1\\) : \\(1+3-13+9=0\\) (vérifié) ; \\(a=-\\dfrac{5}{2}\\) : \\(\\neq0\\) (non vérifié).</p>
<p>\\[\\boxed{z_0 = 1}\\]</p>

<p><strong>2b) Résolution complète</strong></p>
<p>\\(P(z) = (z-1)(z^2+bz+c)\\). Par identification : \\(b=4-8i\\), \\(c=-9-20i\\).</p>
<p>\\(z^2+(4-8i)z+(-9-20i)=0\\). \\(\\Delta = (4-8i)^2+4(9+20i) = -12+16i = (2+4i)^2\\).</p>
<p>\\(z = \\dfrac{-(4-8i)\\pm(2+4i)}{2}\\) :</p>
<p>\\(z_1 = \\dfrac{-4+8i-2-4i}{2} = -3+2i\\) et \\(z_2 = \\dfrac{-4+8i+2+4i}{2} = -1+6i\\).</p>
<p>\\[\\boxed{\\mathcal{S} = \\{1 ; -3+2i ; -1+6i\\}}\\]</p>
<p><em>Remarque : \\(z_0=z_B\\), \\(z_1=z_A\\), \\(z_2=z_C\\). Les racines sont les affixes des points !</em></p>

<p><strong>3a) Nature du triangle ABC</strong></p>
<p>\\(\\dfrac{z_C-z_A}{z_B-z_A} = \\dfrac{(-1+6i)-(-3+2i)}{1-(-3+2i)} = \\dfrac{2+4i}{4-2i} = \\dfrac{(2+4i)(4+2i)}{20} = \\dfrac{8+4i+16i-8}{20} = \\dfrac{20i}{20} = i\\)</p>
<p>\\(\\left|\\dfrac{z_C-z_A}{z_B-z_A}\\right| = 1\\) → \\(AC = AB\\).</p>
<p>\\(\\arg\\left(\\dfrac{z_C-z_A}{z_B-z_A}\\right) = \\arg(i) = \\dfrac{\\pi}{2}\\) → \\(\\overrightarrow{AB}\\perp\\overrightarrow{AC}\\).</p>
<p> ABC est un <strong>triangle rectangle isocèle en A</strong>.</p>

<p><strong>3b) Affixe de D</strong></p>
<p>\\(z_D = z_B + (2+4i) = 1+2+4i = 3+4i\\).</p>

<p><strong>3c) Nature de ABDC</strong></p>
<p>\\(z_{\\overrightarrow{AB}} = z_B-z_A = 1-(-3+2i) = 4-2i\\)</p>
<p>\\(z_{\\overrightarrow{CD}} = z_D-z_C = (3+4i)-(-1+6i) = 4-2i\\)</p>
<p>\\(\\overrightarrow{AB} = \\overrightarrow{CD}\\) → ABDC est un parallélogramme.</p>
<p>De plus \\(AB=AC\\) et \\(\\overrightarrow{AB}\\perp\\overrightarrow{AC}\\) → ABDC est un <strong>carré</strong>.</p>`
    },
    {
      label: 'Exercice II — Courbe paramétrique x(t) = t−2sin t, y(t) = cos t (4 pts)',
      problem: `<p>On considère la courbe (C) de représentation paramétrique :</p>
<p>\\[\\begin{cases}x(t) = t-2\\sin t \\\\ y(t) = \\cos t\\end{cases}, \\quad t \\in \\mathbb{R}\\]</p>
<p><strong>1)</strong> Montrer que M(t+2π) est l'image de M(t) par une translation dont on précisera le vecteur.</p>
<p><strong>2)</strong> Montrer que M(t) et M(−t) sont symétriques par rapport à l'axe des ordonnées.</p>
<p><strong>3)</strong> Calculer x'(t) et montrer que \\(x'(t)\\leq0\\) pour \\(t\\in[0;\\dfrac{\\pi}{3}]\\) et \\(x'(t)>0\\) pour \\(t\\in]\\dfrac{\\pi}{3};\\pi]\\).</p>
<p><strong>4)</strong> Étudier les variations de x et y sur \\([0;\\pi]\\) et dresser leur tableau commun.</p>
<p><strong>5)</strong> Tracer la partie (C₁) correspondant à \\(t\\in[-\\pi;\\pi]\\).</p>
<p><strong>6)</strong> Comment obtenir (C₂) correspondant à \\(t\\in[-\\pi;3\\pi]\\) à partir de (C₁) ?</p>
<p><em>On donne : \\(\\dfrac{\\pi}{2}-2\\approx-0{,}4\\) ; \\(\\dfrac{\\pi}{3}-\\sqrt{3}\\approx-0{,}68\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Courbes paramétriques</span>
  <ul>
    <li><strong>Dérivées :</strong> $x'(t)$ et $y'(t)$ donnent le vecteur tangent en $M(t)$.</li>
    <li><strong>Point singulier :</strong> Si $x'(t_0) = y'(t_0) = 0$, c'est un point singulier (rebroussement, etc.).</li>
    <li><strong>Tangente :</strong> Si $x'(t_0) \\neq 0$, la pente est $\\dfrac{y'(t_0)}{x'(t_0)}$. Si $x'(t_0)=0$ et $y'(t_0)\\neq 0$, tangente verticale.</li>
    <li><strong>Tracé :</strong> On dresse un tableau de variations de $x$ et $y$ en fonction de $t$, puis on place les points clés.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Translation de M(t) en M(t+2π)</strong></p>
<p>\\(x(t+2\\pi) = t+2\\pi-2\\sin(t+2\\pi) = x(t)+2\\pi\\) et \\(y(t+2\\pi) = \\cos(t+2\\pi) = \\cos t = y(t)\\).</p>
<p>\\(\\overrightarrow{M(t)M(t+2\\pi)} = \\binom{2\\pi}{0}\\) est constant.</p>
<p> M(t+2π) est l'image de M(t) par la <strong>translation de vecteur \\(\\vec{u}\\binom{2\\pi}{0}\\)</strong>.</p>

<p><strong>2) Symétrie M(t) et M(−t)</strong></p>
<p>\\(x(-t) = -t-2\\sin(-t) = -t+2\\sin t = -(t-2\\sin t) = -x(t)\\)</p>
<p>\\(y(-t) = \\cos(-t) = \\cos t = y(t)\\)</p>
<p>M(t) a pour coordonnées \\((x(t);y(t))\\) et M(−t) a pour coordonnées \\((-x(t);y(t))\\).  Symétriques par rapport à \\((Oy)\\).</p>

<p><strong>3) x'(t) et son signe</strong></p>
<p>\\(x'(t) = 1-2\\cos t\\).</p>
<p>\\(x'(t) \\leq 0 \\iff \\cos t \\geq \\dfrac{1}{2} \\iff t \\in [0;\\dfrac{\\pi}{3}]\\) sur \\([0;\\pi]\\). (vérifié)</p>
<p>\\(x'(t) > 0 \\iff \\cos t < \\dfrac{1}{2} \\iff t \\in ]\\dfrac{\\pi}{3};\\pi]\\) sur \\([0;\\pi]\\). (vérifié) </p>

<p><strong>4) Tableau commun des variations sur [0;π]</strong></p>
<p>x : décroissante sur \\([0;\\dfrac{\\pi}{3}]\\), croissante sur \\([\\dfrac{\\pi}{3};\\pi]\\).</p>
<p>y : \\(y'(t) = -\\sin t \\leq 0\\) sur \\([0;\\pi]\\) → y décroissante.</p>
<p>Points clés : \\(M(0)=(0;1)\\), \\(M(\\dfrac{\\pi}{3})=(\\dfrac{\\pi}{3}-\\sqrt{3};\\dfrac{1}{2})\\approx(-0{,}68;\\dfrac{1}{2})\\), \\(M(\\dfrac{\\pi}{2})=(\\dfrac{\\pi}{2}-2;0)\\approx(-0{,}4;0)\\), \\(M(\\pi)=(\\pi;-1)\\approx(3{,}14;-1)\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-green-05-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-red-05-param" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
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
    <text x="150" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="425" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/3</text>
    <text x="700" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π</text>
    <line x1="425" y1="45" x2="425" y2="53" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="83" x2="425" y2="125" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="155" x2="425" y2="188" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="218" x2="425" y2="285" stroke="#dde1ec" stroke-width="1.2"/>
    <line x1="425" y1="315" x2="425" y2="319" stroke="#dde1ec" stroke-width="1.2"/>
    <text x="150" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−1</text>
    <text x="285" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="425" y="68" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <text x="560" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="700" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">3</text>
    <text x="150" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170" y1="120" x2="400" y2="155" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-05-param)"/>
    <text x="425" y="160" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">π/3−√3</text>
    <line x1="450" y1="155" x2="680" y2="120" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-green-05-param)"/>
    <text x="700" y="115" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π</text>
    <text x="150" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="425" y="203" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <text x="700" y="203" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="150" y="245" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="170" y1="250" x2="400" y2="270" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-05-param)"/>
    <text x="425" y="275" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">½</text>
    <line x1="450" y1="275" x2="680" y2="295" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-red-05-param)"/>
    <text x="700" y="300" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−1</text>
  </svg>
</div>
<p>Tangentes notables : \\((T_0)\\) verticale en \\((0;1)\\) (car \\(x'(0)=0\\)) ; \\((T_{\\dfrac{\\pi}{2}})\\) horizontal \\(y=0\\) (car \\(y'(\\dfrac{\\pi}{2})=0\\)) ; \\((T_{\\pi})\\) verticale en \\((\\pi;-1)\\) (car \\(x'(\\pi)=3\\neq0\\)).</p>

<p>On trace la partie \\([0;\\pi]\\), on la symétrise par rapport à \\((Oy)\\) pour obtenir \\([-\\pi;0]\\), et on obtient (C₁).</p>

<p><strong>5) Tracé de la courbe paramétrique \\((C_1)\\)</strong></p>
<p>On trace l'arc correspondant à \\(t\\in[0;\\pi]\\), puis on effectue la symétrie axiale orthogonale par rapport à l'axe des ordonnées \\((Oy)\\) pour obtenir l'arc correspondant à \\(t\\in[-\\pi;0]\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2005 Ex II — Courbe paramétrique (C₁)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="111.4" y1="40.0" x2="111.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="204.3" y1="40.0" x2="204.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="297.1" y1="40.0" x2="297.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="482.9" y1="40.0" x2="482.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="575.7" y1="40.0" x2="575.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="668.6" y1="40.0" x2="668.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="340.0" x2="715.0" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="100.0" x2="715.0" y2="100.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="220.0" x2="735" y2="220.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="390.0" y1="415" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="238.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="372.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="111.4" y1="216.0" x2="111.4" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="111.4" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="204.3" y1="216.0" x2="204.3" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="204.3" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="297.1" y1="216.0" x2="297.1" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="297.1" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="482.9" y1="216.0" x2="482.9" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="482.9" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="575.7" y1="216.0" x2="575.7" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="575.7" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="668.6" y1="216.0" x2="668.6" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="668.6" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="386.0" y1="340.0" x2="394.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="100.0" x2="394.0" y2="100.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="104.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><text x="380.0" y="235.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Courbes -->
    <path d="M 98.3 340.0 L 103.3 340.0 L 108.3 339.9 L 113.3 339.8 L 118.3 339.7 L 123.3 339.5 L 128.2 339.3 L 133.2 339.1 L 138.2 338.8 L 143.2 338.4 L 148.1 338.1 L 153.1 337.7 L 158.0 337.2 L 162.9 336.7 L 167.8 336.2 L 172.7 335.7 L 177.6 335.1 L 182.4 334.5 L 187.3 333.8 L 192.1 333.1 L 196.9 332.3 L 201.7 331.6 L 206.4 330.8 L 211.1 329.9 L 215.8 329.0 L 220.5 328.1 L 225.2 327.2 L 229.8 326.2 L 234.4 325.2 L 239.0 324.1 L 243.5 323.0 L 248.1 321.9 L 252.5 320.7 L 257.0 319.6 L 261.4 318.3 L 265.8 317.1 L 270.1 315.8 L 274.4 314.5 L 278.7 313.1 L 283.0 311.8 L 287.1 310.4 L 291.3 308.9 L 295.4 307.5 L 299.5 306.0 L 303.5 304.5 L 307.5 302.9 L 311.5 301.4 L 315.4 299.8 L 319.2 298.1 L 323.1 296.5 L 326.8 294.8 L 330.5 293.1 L 334.2 291.4 L 337.8 289.7 L 341.4 287.9 L 345.0 286.1 L 348.4 284.3 L 351.9 282.5 L 355.2 280.6 L 358.6 278.8 L 361.8 276.9 L 365.1 275.0 L 368.2 273.0 L 371.3 271.1 L 374.4 269.1 L 377.4 267.2 L 380.4 265.2 L 383.2 263.2 L 386.1 261.2 L 388.9 259.1 L 391.6 257.1 L 394.3 255.0 L 396.9 253.0 L 399.4 250.9 L 401.9 248.8 L 404.4 246.7 L 406.7 244.6 L 409.1 242.5 L 411.3 240.4 L 413.5 238.2 L 415.7 236.1 L 417.8 234.0 L 419.8 231.8 L 421.7 229.7 L 423.7 227.5 L 425.5 225.4 L 427.3 223.2 L 429.0 221.1 L 430.7 218.9 L 432.3 216.8 L 433.8 214.6 L 435.3 212.5 L 436.8 210.3 L 438.1 208.2 L 439.4 206.0 L 440.7 203.9 L 441.9 201.8 L 443.0 199.6 L 444.1 197.5 L 445.1 195.4 L 446.0 193.3 L 446.9 191.2 L 447.8 189.1 L 448.5 187.0 L 449.3 185.0 L 449.9 182.9 L 450.5 180.9 L 451.1 178.8 L 451.6 176.8 L 452.0 174.8 L 452.4 172.8 L 452.7 170.9 L 453.0 168.9 L 453.2 167.0 L 453.4 165.0 L 453.5 163.1 L 453.6 161.2 L 453.6 159.4 L 453.5 157.5 L 453.5 155.7 L 453.3 153.9 L 453.1 152.1 L 452.9 150.3 L 452.6 148.6 L 452.2 146.9 L 451.8 145.2 L 451.4 143.5 L 450.9 141.9 L 450.4 140.2 L 449.8 138.6 L 449.2 137.1 L 448.6 135.5 L 447.9 134.0 L 447.1 132.5 L 446.3 131.1 L 445.5 129.6 L 444.6 128.2 L 443.7 126.9 L 442.8 125.5 L 441.8 124.2 L 440.8 122.9 L 439.8 121.7 L 438.7 120.4 L 437.6 119.3 L 436.4 118.1 L 435.2 117.0 L 434.0 115.9 L 432.8 114.8 L 431.5 113.8 L 430.2 112.8 L 428.9 111.9 L 427.6 111.0 L 426.2 110.1 L 424.8 109.2 L 423.4 108.4 L 421.9 107.7 L 420.5 106.9 L 419.0 106.2 L 417.5 105.5 L 415.9 104.9 L 414.4 104.3 L 412.8 103.8 L 411.3 103.3 L 409.7 102.8 L 408.1 102.3 L 406.5 101.9 L 404.9 101.6 L 403.2 101.2 L 401.6 100.9 L 400.0 100.7 L 398.3 100.5 L 396.7 100.3 L 395.0 100.2 L 393.3 100.1 L 391.7 100.0 L 390.0 100.0 L 388.3 100.0 L 386.7 100.1 L 385.0 100.2 L 383.3 100.3 L 381.7 100.5 L 380.0 100.7 L 378.4 100.9 L 376.8 101.2 L 375.1 101.6 L 373.5 101.9 L 371.9 102.3 L 370.3 102.8 L 368.7 103.3 L 367.2 103.8 L 365.6 104.3 L 364.1 104.9 L 362.5 105.5 L 361.0 106.2 L 359.5 106.9 L 358.1 107.7 L 356.6 108.4 L 355.2 109.2 L 353.8 110.1 L 352.4 111.0 L 351.1 111.9 L 349.8 112.8 L 348.5 113.8 L 347.2 114.8 L 346.0 115.9 L 344.8 117.0 L 343.6 118.1 L 342.4 119.3 L 341.3 120.4 L 340.2 121.7 L 339.2 122.9 L 338.2 124.2 L 337.2 125.5 L 336.3 126.9 L 335.4 128.2 L 334.5 129.6 L 333.7 131.1 L 332.9 132.5 L 332.1 134.0 L 331.4 135.5 L 330.8 137.1 L 330.2 138.6 L 329.6 140.2 L 329.1 141.9 L 328.6 143.5 L 328.2 145.2 L 327.8 146.9 L 327.4 148.6 L 327.1 150.3 L 326.9 152.1 L 326.7 153.9 L 326.5 155.7 L 326.5 157.5 L 326.4 159.4 L 326.4 161.2 L 326.5 163.1 L 326.6 165.0 L 326.8 167.0 L 327.0 168.9 L 327.3 170.9 L 327.6 172.8 L 328.0 174.8 L 328.4 176.8 L 328.9 178.8 L 329.5 180.9 L 330.1 182.9 L 330.7 185.0 L 331.5 187.0 L 332.2 189.1 L 333.1 191.2 L 334.0 193.3 L 334.9 195.4 L 335.9 197.5 L 337.0 199.6 L 338.1 201.8 L 339.3 203.9 L 340.6 206.0 L 341.9 208.2 L 343.2 210.3 L 344.7 212.5 L 346.2 214.6 L 347.7 216.8 L 349.3 218.9 L 351.0 221.1 L 352.7 223.2 L 354.5 225.4 L 356.3 227.5 L 358.3 229.7 L 360.2 231.8 L 362.2 234.0 L 364.3 236.1 L 366.5 238.2 L 368.7 240.4 L 370.9 242.5 L 373.3 244.6 L 375.6 246.7 L 378.1 248.8 L 380.6 250.9 L 383.1 253.0 L 385.7 255.0 L 388.4 257.1 L 391.1 259.1 L 393.9 261.2 L 396.8 263.2 L 399.6 265.2 L 402.6 267.2 L 405.6 269.1 L 408.7 271.1 L 411.8 273.0 L 414.9 275.0 L 418.2 276.9 L 421.4 278.8 L 424.8 280.6 L 428.1 282.5 L 431.6 284.3 L 435.0 286.1 L 438.6 287.9 L 442.2 289.7 L 445.8 291.4 L 449.5 293.1 L 453.2 294.8 L 456.9 296.5 L 460.8 298.1 L 464.6 299.8 L 468.5 301.4 L 472.5 302.9 L 476.5 304.5 L 480.5 306.0 L 484.6 307.5 L 488.7 308.9 L 492.9 310.4 L 497.0 311.8 L 501.3 313.1 L 505.6 314.5 L 509.9 315.8 L 514.2 317.1 L 518.6 318.3 L 523.0 319.6 L 527.5 320.7 L 531.9 321.9 L 536.5 323.0 L 541.0 324.1 L 545.6 325.2 L 550.2 326.2 L 554.8 327.2 L 559.5 328.1 L 564.2 329.0 L 568.9 329.9 L 573.6 330.8 L 578.3 331.6 L 583.1 332.3 L 587.9 333.1 L 592.7 333.8 L 597.6 334.5 L 602.4 335.1 L 607.3 335.7 L 612.2 336.2 L 617.1 336.7 L 622.0 337.2 L 626.9 337.7 L 631.9 338.1 L 636.8 338.4 L 641.8 338.8 L 646.8 339.1 L 651.8 339.3 L 656.7 339.5 L 661.7 339.7 L 666.7 339.8 L 671.7 339.9 L 676.7 340.0 L 681.7 340.0" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="100.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 88.0)">
      <text x="53.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(0) = (0 ; 1)</text>
    </g>
    <circle cx="326.4" cy="160.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(251.39999999999998, 145.0)">
      <text x="81.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π/3) ≈ (−0,68 ; 0,5)</text>
    </g>
    <circle cx="681.7" cy="340.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(691.7, 328.0)">
      <text x="57.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π) = (π; −1)</text>
    </g>
    <circle cx="98.3" cy="340.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(18.299999999999997, 328.0)">
      <text x="64.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(−π) = (−π; −1)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="34" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C₁) : t ∈ [−π ; π]</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>6) Obtenir C₂ à partir de C₁</strong></p>
<p>\\([-\\pi;3\\pi] = [-\\pi;\\pi]\\cup[\\pi;3\\pi]\\). On obtient (C₂) en translatant (C₁) du vecteur \\(\\vec{u}\\binom{2\\pi}{0}\\).</p>`
    },
    {
      label: 'Problème — f(x) = 2x+1−x·exp(x−1), suite (Uₙ) et intégrale (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par \\(f(x) = 2x+1-xe^{x-1}\\). On note \\((C_f)\\) sa courbe dans un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) (unité 2 cm).</p>

<p><strong>Partie A — Étude de f</strong></p>
<p><strong>1)</strong> Calculer les limites de f en \\(-\\infty\\) et en \\(+\\infty\\).</p>
<p><strong>2)</strong> Montrer que la droite \\((\\Delta): y=2x+1\\) est asymptote à \\((C_f)\\) en \\(-\\infty\\). Préciser la position de \\((C_f)\\) par rapport à \\((\\Delta)\\).</p>
<p><strong>3) a)</strong> Calculer f' et f''.</p>
<p><strong>b)</strong> Étudier les variations de f' et dresser son tableau.</p>
<p><strong>c)</strong> Calculer f'(1) et en déduire le signe de f'(x) pour tout x.</p>
<p><strong>d)</strong> Dresser le tableau de variation de f.</p>
<p><strong>4)</strong> Montrer que l'équation \\(f(x)=0\\) admet deux solutions \\(\\alpha\\) et \\(\\beta\\) avec \\(1{,}9\\leq\\alpha\\leq2\\) et \\(-0{,}6\\leq\\beta\\leq-0{,}5\\).</p>
<p><strong>5)</strong> Calculer \\(\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x}\\) et interpréter graphiquement. Tracer \\((\\Delta)\\) et \\((C_f)\\).</p>

<p><strong>Partie B — Approximation de α</strong></p>
<p>Soit g définie sur \\(]0;+\\infty[\\) par \\(g(x) = 1+\\ln\\left(2+\\dfrac{1}{x}\\right)\\).</p>
<p><strong>1)</strong> Montrer que \\(f(x)=0\\) équivaut à \\(g(x)=x\\) sur \\(]0;+\\infty[\\).</p>
<p><strong>2)</strong> Étudier les variations de g.</p>
<p><strong>3)</strong> Soit \\(I = [1{,}9;2]\\).</p>
<p><strong>a)</strong> Montrer que pour tout \\(x\\in I\\), \\(g(x)\\in I\\).</p>
<p><strong>b)</strong> Montrer que pour tout \\(x\\in I\\), \\(|g'(x)|\\leq\\dfrac{1}{9}\\).</p>
<p><strong>4)</strong> Soit \\((U_n)\\) définie par \\(U_0=2\\) et \\(U_{n+1}=g(U_n)\\).</p>
<p><strong>a)</strong> Montrer que \\(U_n\\in I\\) pour tout \\(n\\).</p>
<p><strong>b)</strong> Montrer que \\(|U_{n+1}-\\alpha|\\leq\\dfrac{1}{9}|U_n-\\alpha|\\), puis \\(|U_n-\\alpha|\\leq\\left(\\dfrac{1}{9}\\right)^n\\times\\dfrac{1}{10}\\).</p>
<p><strong>c)</strong> En déduire que \\((U_n)\\) converge et préciser sa limite.</p>

<p><strong>Partie C — Calcul d'aire</strong></p>
<p><strong>1)</strong> Par IPP, calculer \\(J = \\displaystyle\\int_1^\\alpha xe^{x-1}\\,dx\\).</p>
<p><strong>2) a)</strong> Calculer en u.a. l'aire A de la portion du plan délimitée par \\((C_f)\\), l'axe des abscisses et les droites \\(x=1\\) et \\(x=\\alpha\\).</p>
<p><strong>b)</strong> Montrer que \\(A = (\\alpha-1)\\left(\\alpha-\\dfrac{1}{\\alpha}\\right)\\).</p>
<p><em>On donne : \\(e\\approx2{,}72\\) ; \\(\\ln\\dfrac{5}{2}\\approx0{,}92\\) ; \\(\\ln\\dfrac{48}{19}\\approx0{,}93\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions exp, suites &amp ; intégrales</span>
  <ul>
    <li><strong>Dérivée :</strong> $(xe^x)' = (1+x)e^x$, $(xe^{x-1})' = e^{x-1}(1+x)$.</li>
    <li><strong>Croissances comparées :</strong> $\\lim_{x\\to+\\infty} x e^{-x} = 0$, $\\lim_{x\\to-\\infty} x e^x = 0$.</li>
    <li><strong>Suite $(U_n)$ :</strong> Pour montrer la monotonie, calculer $U_{n+1} - U_n$ ou le rapport $U_{n+1}/U_n$ selon le cas.</li>
    <li><strong>IPP :</strong> $\\int xe^x\\,dx = (x-1)e^x + C$. Pour $\\int P(x)e^x\\,dx$, appliquer IPP autant de fois que deg P.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1) Limites</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}(2x+1-xe^{x-1})\\). \\(xe^{x-1}\\to0\\) et \\(2x+1\\to-\\infty\\).</p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = -\\infty\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}x\\left(2+\\dfrac{1}{x}-e^{x-1}\\right) = -\\infty\\) (l'exponentielle domine).</p>

<p><strong>2) Asymptote \\((\\Delta)\\) en −∞</strong></p>
<p>\\(f(x)-(2x+1) = -xe^{x-1}\\to0\\) (car \\(xe^x\\to0\\) en \\(-\\infty\\)). </p>
<p>Position : \\(-xe^{x-1}\\) a le signe de \\(-x\\). Sur \\(]-\\infty;0[\\) : \\(-x>0\\) → \\((C_f)\\) au-dessus de \\((\\Delta)\\). Sur \\(]0;+\\infty[\\) : en-dessous.</p>

<p><strong>3a) f' et f''</strong></p>
<p>\\(f'(x) = 2-e^{x-1}-xe^{x-1} = 2-(x+1)e^{x-1}\\)</p>
<p>\\(f''(x) = -(x+2)e^{x-1}\\)</p>

<p><strong>3b) Variations de f'</strong></p>
<p>Signe de \\(f''\\) = signe de \\(-(x+2)\\). Maximum de f' en \\(x=-2\\) : \\(f'(-2) = 2+e^{-3}\\approx2{,}05\\).</p>
<p>f' croissante sur \\(]-\\infty;-2]\\), décroissante sur \\([-2;+\\infty[\\).</p>

<p><strong>3c) Signe de f'</strong></p>
<p>\\(f'(1) = 2-2e^0 = 2-2 = 0\\). Le maximum de f' sur \\([1;+\\infty[\\) est atteint en \\(x=1\\) (car f' décroissante pour \\(x>-2\\), donc pour \\(x>1\\) aussi). Donc \\(f'(x)\\leq f'(1)=0\\) pour \\(x\\geq1\\) et \\(f'(x)>0\\) pour \\(x<1\\) (car f' croissante vers son max).  \\(f'>0\\) sur \\(]-\\infty;1[\\), \\(f'(1)=0\\), \\(f'<0\\) sur \\(]1;+\\infty[\\).</p>

<p><strong>3d) Tableau de variation</strong></p>
<p>Maximum en \\(x=1\\) : \\(f(1) = 2+1-1 = 2\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2005-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2005-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    
    <text x="145" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <line x1="170" y1="225" x2="395" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2005-f)"/>
    <text x="425" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">2</text>
    <line x1="455" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2005-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
  </svg>
</div>

<p><strong>4) Deux solutions de f(x)=0</strong></p>
<p>f croissante de \\(-\\infty\\) vers 2 sur \\(]-\\infty;1[\\), donc \\(f(x)=0\\) admet une unique solution \\(\\beta\\) sur \\(]-\\infty;1[\\).</p>
<p>f décroissante de 2 vers \\(-\\infty\\) sur \\(]1;+\\infty[\\), donc une unique solution \\(\\alpha\\) sur \\(]1;+\\infty[\\).</p>
<p>\\(f(1{,}9) \\approx 0{,}13 > 0\\) et \\(f(2) = 5-2e \\approx 5-5{,}44=-0{,}44 < 0\\) → \\(\\alpha\\in[1{,}9;2]\\). </p>
<p>\\(f(-0{,}6)\\approx-0{,}08<0\\) et \\(f(-0{,}5)\\approx0{,}11>0\\) → \\(\\beta\\in[-0{,}6;-0{,}5]\\). </p>

<p><strong>5) Limite de f(x)/x</strong></p>
<p>\\(\\dfrac{f(x)}{x} = 2+\\dfrac{1}{x}-e^{x-1}\\to-\\infty\\) en \\(+\\infty\\).  Branche parabolique de direction \\((Oy)\\) en \\(+\\infty\\).</p>

<p><strong>Tracé de l'asymptote \\((\\Delta)\\) et de la courbe \\((C_f)\\)</strong></p>
<p>La courbe \\((C_f)\\) admet en \\(-\\infty\\) l'asymptote oblique \\((\\Delta): y = 2x+1\\), en \\(+\\infty\\) une branche parabolique de direction \\((Oy)\\), et atteint son maximum au point \\((1 ; 2)\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2005 — Courbe (C_f) et Asymptote (Δ)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="183.2" y1="40.0" x2="183.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="301.4" y1="40.0" x2="301.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="537.7" y1="40.0" x2="537.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="655.9" y1="40.0" x2="655.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="340.0" x2="715.0" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="280.0" x2="715.0" y2="280.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="160.0" x2="715.0" y2="160.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="100.0" x2="715.0" y2="100.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="220.0" x2="735" y2="220.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="419.5" y1="415" x2="419.5" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="238.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="401.5" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="216.0" x2="65.0" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="183.2" y1="216.0" x2="183.2" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="183.2" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="301.4" y1="216.0" x2="301.4" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="301.4" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="537.7" y1="216.0" x2="537.7" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="537.7" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="655.9" y1="216.0" x2="655.9" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="655.9" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="415.5" y1="400.0" x2="423.5" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="407.5" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="415.5" y1="340.0" x2="423.5" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="407.5" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="415.5" y1="280.0" x2="423.5" y2="280.0" stroke="#1f2937" stroke-width="1"/><text x="407.5" y="284.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="415.5" y1="160.0" x2="423.5" y2="160.0" stroke="#1f2937" stroke-width="1"/><text x="407.5" y="164.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="415.5" y1="100.0" x2="423.5" y2="100.0" stroke="#1f2937" stroke-width="1"/><text x="407.5" y="104.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><text x="409.5" y="235.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="183.2" y1="400.0" x2="537.7" y2="40.0" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    <line x1="419.5" y1="100.0" x2="655.9" y2="100.0" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 516.7 L 66.8 514.9 L 68.6 513.0 L 70.4 511.2 L 72.2 509.3 L 73.9 507.4 L 75.7 505.6 L 77.5 503.7 L 79.3 501.9 L 81.1 500.0 L 82.9 498.2 L 84.7 496.3 L 86.5 494.5 L 88.3 492.6 L 90.1 490.8 L 91.8 488.9 L 93.6 487.1 L 95.4 485.2 L 97.2 483.4 L 99.0 481.5 L 100.8 479.6 L 102.6 477.8 L 104.4 475.9 L 106.2 474.1 L 108.0 472.2 L 109.7 470.4 L 111.5 468.5 L 113.3 466.7 L 115.1 464.8 L 116.9 462.9 L 118.7 461.1 L 120.5 459.2 L 122.3 457.4 L 124.1 455.5 L 125.8 453.6 L 127.6 451.8 L 129.4 449.9 L 131.2 448.1 L 133.0 446.2 L 134.8 444.4 L 136.6 442.5 L 138.4 440.6 L 140.2 438.8 L 142.0 436.9 L 143.7 435.1 L 145.5 433.2 L 147.3 431.3 L 149.1 429.5 L 150.9 427.6 L 152.7 425.7 L 154.5 423.9 L 156.3 422.0 L 158.1 420.2 L 159.8 418.3 L 161.6 416.4 L 163.4 414.6 L 165.2 412.7 L 167.0 410.9 L 168.8 409.0 L 170.6 407.1 L 172.4 405.3 L 174.2 403.4 L 176.0 401.5 L 177.7 399.7 L 179.5 397.8 L 181.3 396.0 L 183.1 394.1 L 184.9 392.2 L 186.7 390.4 L 188.5 388.5 L 190.3 386.6 L 192.1 384.8 L 193.9 382.9 L 195.6 381.1 L 197.4 379.2 L 199.2 377.3 L 201.0 375.5 L 202.8 373.6 L 204.6 371.8 L 206.4 369.9 L 208.2 368.0 L 210.0 366.2 L 211.7 364.3 L 213.5 362.4 L 215.3 360.6 L 217.1 358.7 L 218.9 356.9 L 220.7 355.0 L 222.5 353.1 L 224.3 351.3 L 226.1 349.4 L 227.9 347.6 L 229.6 345.7 L 231.4 343.9 L 233.2 342.0 L 235.0 340.1 L 236.8 338.3 L 238.6 336.4 L 240.4 334.6 L 242.2 332.7 L 244.0 330.9 L 245.8 329.0 L 247.5 327.2 L 249.3 325.3 L 251.1 323.5 L 252.9 321.6 L 254.7 319.8 L 256.5 317.9 L 258.3 316.1 L 260.1 314.2 L 261.9 312.4 L 263.6 310.5 L 265.4 308.7 L 267.2 306.8 L 269.0 305.0 L 270.8 303.1 L 272.6 301.3 L 274.4 299.5 L 276.2 297.6 L 278.0 295.8 L 279.8 293.9 L 281.5 292.1 L 283.3 290.3 L 285.1 288.4 L 286.9 286.6 L 288.7 284.8 L 290.5 283.0 L 292.3 281.1 L 294.1 279.3 L 295.9 277.5 L 297.6 275.7 L 299.4 273.8 L 301.2 272.0 L 303.0 270.2 L 304.8 268.4 L 306.6 266.6 L 308.4 264.8 L 310.2 263.0 L 312.0 261.1 L 313.8 259.3 L 315.5 257.5 L 317.3 255.7 L 319.1 253.9 L 320.9 252.2 L 322.7 250.4 L 324.5 248.6 L 326.3 246.8 L 328.1 245.0 L 329.9 243.2 L 331.7 241.4 L 333.4 239.7 L 335.2 237.9 L 337.0 236.1 L 338.8 234.4 L 340.6 232.6 L 342.4 230.8 L 344.2 229.1 L 346.0 227.3 L 347.8 225.6 L 349.5 223.8 L 351.3 222.1 L 353.1 220.4 L 354.9 218.6 L 356.7 216.9 L 358.5 215.2 L 360.3 213.5 L 362.1 211.8 L 363.9 210.0 L 365.7 208.3 L 367.4 206.6 L 369.2 204.9 L 371.0 203.3 L 372.8 201.6 L 374.6 199.9 L 376.4 198.2 L 378.2 196.6 L 380.0 194.9 L 381.8 193.2 L 383.6 191.6 L 385.3 189.9 L 387.1 188.3 L 388.9 186.7 L 390.7 185.1 L 392.5 183.4 L 394.3 181.8 L 396.1 180.2 L 397.9 178.6 L 399.7 177.1 L 401.4 175.5 L 403.2 173.9 L 405.0 172.3 L 406.8 170.8 L 408.6 169.2 L 410.4 167.7 L 412.2 166.2 L 414.0 164.7 L 415.8 163.2 L 417.6 161.7 L 419.3 160.2 L 421.1 158.7 L 422.9 157.2 L 424.7 155.8 L 426.5 154.3 L 428.3 152.9 L 430.1 151.5 L 431.9 150.0 L 433.7 148.6 L 435.4 147.2 L 437.2 145.9 L 439.0 144.5 L 440.8 143.2 L 442.6 141.8 L 444.4 140.5 L 446.2 139.2 L 448.0 137.9 L 449.8 136.6 L 451.6 135.3 L 453.3 134.1 L 455.1 132.8 L 456.9 131.6 L 458.7 130.4 L 460.5 129.2 L 462.3 128.1 L 464.1 126.9 L 465.9 125.8 L 467.7 124.6 L 469.5 123.5 L 471.2 122.5 L 473.0 121.4 L 474.8 120.4 L 476.6 119.3 L 478.4 118.3 L 480.2 117.3 L 482.0 116.4 L 483.8 115.4 L 485.6 114.5 L 487.3 113.6 L 489.1 112.8 L 490.9 111.9 L 492.7 111.1 L 494.5 110.3 L 496.3 109.5 L 498.1 108.8 L 499.9 108.0 L 501.7 107.3 L 503.5 106.7 L 505.2 106.0 L 507.0 105.4 L 508.8 104.8 L 510.6 104.3 L 512.4 103.8 L 514.2 103.3 L 516.0 102.8 L 517.8 102.4 L 519.6 102.0 L 521.4 101.6 L 523.1 101.3 L 524.9 101.0 L 526.7 100.7 L 528.5 100.5 L 530.3 100.3 L 532.1 100.2 L 533.9 100.1 L 535.7 100.0 L 537.5 100.0 L 539.2 100.0 L 541.0 100.1 L 542.8 100.2 L 544.6 100.3 L 546.4 100.5 L 548.2 100.7 L 550.0 101.0 L 551.8 101.3 L 553.6 101.7 L 555.4 102.1 L 557.1 102.6 L 558.9 103.1 L 560.7 103.7 L 562.5 104.4 L 564.3 105.0 L 566.1 105.8 L 567.9 106.6 L 569.7 107.4 L 571.5 108.4 L 573.2 109.3 L 575.0 110.4 L 576.8 111.5 L 578.6 112.6 L 580.4 113.9 L 582.2 115.1 L 584.0 116.5 L 585.8 117.9 L 587.6 119.4 L 589.4 121.0 L 591.1 122.7 L 592.9 124.4 L 594.7 126.2 L 596.5 128.1 L 598.3 130.0 L 600.1 132.0 L 601.9 134.2 L 603.7 136.4 L 605.5 138.7 L 607.3 141.0 L 609.0 143.5 L 610.8 146.0 L 612.6 148.7 L 614.4 151.4 L 616.2 154.3 L 618.0 157.2 L 619.8 160.2 L 621.6 163.4 L 623.4 166.6 L 625.1 170.0 L 626.9 173.4 L 628.7 177.0 L 630.5 180.6 L 632.3 184.4 L 634.1 188.3 L 635.9 192.4 L 637.7 196.5 L 639.5 200.8 L 641.3 205.2 L 643.0 209.7 L 644.8 214.3 L 646.6 219.1 L 648.4 224.0 L 650.2 229.1 L 652.0 234.3 L 653.8 239.7 L 655.6 245.1 L 657.4 250.8 L 659.2 256.6 L 660.9 262.5 L 662.7 268.6 L 664.5 274.9 L 666.3 281.3 L 668.1 287.9 L 669.9 294.7 L 671.7 301.6 L 673.5 308.7 L 675.3 316.0 L 677.0 323.5 L 678.8 331.2 L 680.6 339.0 L 682.4 347.1 L 684.2 355.3 L 686.0 363.8 L 687.8 372.4 L 689.6 381.3 L 691.4 390.4" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="419.5" cy="160.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(429.5, 175.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 1)</text>
    </g>
    <circle cx="537.7" cy="100.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(547.7, 85.0)">
      <text x="43.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (1 ; 2)</text>
    </g>
    <circle cx="650.0" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(660.0, 208.0)">
      <text x="36.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">α ≈ 1,95</text>
    </g>
    <circle cx="354.5" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(289.5, 208.0)">
      <text x="39.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">β ≈ −0,55</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_f) : 2x+1−xe^{x−1}</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (Δ) : y = 2x + 1</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente horizontale y = 2</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>1) Équivalence f(x)=0 ↔ g(x)=x</strong></p>
<p>Pour \\(x>0\\) : \\(f(x)=0 \\iff 2x+1=xe^{x-1} \\iff e^{x-1} = 2+\\dfrac{1}{x} \\iff x-1 = \\ln\\left(2+\\dfrac{1}{x}\\right) \\iff x = 1+\\ln\\left(2+\\dfrac{1}{x}\\right) = g(x)\\). </p>

<p><strong>2) Variations de g</strong></p>
<p>\\(g'(x) = \\dfrac{-\\dfrac{1}{x}^2}{2+\\dfrac{1}{x}} = \\dfrac{-1}{x(2x+1)} < 0\\) sur \\(]0;+\\infty[\\).</p>
<p>g est <strong>strictement décroissante</strong> sur \\(]0;+\\infty[\\).</p>

<p><strong>3a) g(I) ⊂ I</strong></p>
<p>g décroissante → \\(g([1{,}9;2]) = [g(2);g(1{,}9)] = [1{,}92;1{,}93] \\subset [1{,}9;2]\\). </p>

<p><strong>3b) |g'(x)| ≤ \\dfrac{1}{9} sur I</strong></p>
<p>\\(g''(x) = \\dfrac{4x+1}{(2x^2+x)^2} > 0\\) → g' croissante → \\(|g'(x)| \\leq |g'(1{,}9)|\\).</p>
<p>\\(|g'(1{,}9)| = \\dfrac{1}{1{,}9\\times4{,}8} \\approx 0{,}11 \\leq \\dfrac{1}{9}\\approx0{,}111\\). </p>

<p><strong>4a) U_n ∈ I par récurrence</strong></p>
<p>\\(U_0=2\\in I\\). Si \\(U_n\\in I\\) → \\(U_{n+1}=g(U_n)\\in g(I)\\subset I\\).  Par récurrence.</p>

<p><strong>4b) Contraction</strong></p>
<p>Par le TAF : \\(|g(U_n)-g(\\alpha)|\\leq\\sup_I|g'|\\cdot|U_n-\\alpha|\\leq\\dfrac{1}{9}|U_n-\\alpha|\\).</p>
<p>Donc \\(|U_{n+1}-\\alpha|\\leq\\dfrac{1}{9}|U_n-\\alpha|\\). </p>
<p>Par récurrence : \\(|U_n-\\alpha|\\leq\\left(\\dfrac{1}{9}\\right)^n|U_0-\\alpha|\\leq\\left(\\dfrac{1}{9}\\right)^n\\cdot\\dfrac{1}{10}\\). </p>

<p><strong>4c) Convergence</strong></p>
<p>\\(\\left(\\dfrac{1}{9}\\right)^n\\cdot\\dfrac{1}{10}\\to0\\) → \\(|U_n-\\alpha|\\to0\\) → \\((U_n)\\) converge vers <strong>\\(\\alpha\\)</strong>. </p>

<p><strong>Partie C</strong></p>

<p><strong>1) Calcul de J par IPP</strong></p>
<p>\\(u=x\\), \\(v'=e^{x-1}\\) → \\(u'=1\\), \\(v=e^{x-1}\\).</p>
<p>\\[J = [xe^{x-1}]_1^\\alpha - \\int_1^\\alpha e^{x-1}\\,dx = \\alpha e^{\\alpha-1}-e^{\\alpha-1}+e^0 = (\\alpha-1)e^{\\alpha-1}\\]</p>

<p><strong>2a) Aire A</strong></p>
<p>Sur \\([1;\\alpha]\\), \\(f(x)=2x+1-xe^{x-1}\\geq0\\) (car \\(1<\\alpha\\approx2\\) et \\(f\\geq0\\) sur \\([1;\\alpha[\\)).</p>
<p>\\[A = \\int_1^\\alpha f(x)\\,dx = \\int_1^\\alpha(2x+1)\\,dx - J = [x^2+x]_1^\\alpha - (\\alpha-1)e^{\\alpha-1}\\]</p>
<p>\\(= \\alpha^2+\\alpha-2-(\\alpha-1)e^{\\alpha-1}\\)</p>

<p><strong>2b) Simplification</strong></p>
<p>\\(f(\\alpha)=0 \\iff e^{\\alpha-1}=2+\\dfrac{1}{\\alpha}=\\dfrac{2\\alpha+1}{\\alpha}\\).</p>
<p>\\(A = \\alpha^2+\\alpha-2-(\\alpha-1)\\cdot\\dfrac{2\\alpha+1}{\\alpha} = (\\alpha+2)(\\alpha-1)-\\dfrac{(\\alpha-1)(2\\alpha+1)}{\\alpha}\\)</p>
<p>\\(= (\\alpha-1)\\left(\\alpha+2-\\dfrac{2\\alpha+1}{\\alpha}\\right) = (\\alpha-1)\\cdot\\dfrac{\\alpha^2+2\\alpha-2\\alpha-1}{\\alpha} = (\\alpha-1)\\cdot\\dfrac{\\alpha^2-1}{\\alpha}\\)</p>
<p>\\(= (\\alpha-1)\\cdot\\dfrac{(\\alpha-1)(\\alpha+1)}{\\alpha}\\)... Recalculons plus directement :</p>
<p>\\(A = (\\alpha^2+\\alpha-2)-(\\alpha-1)e^{\\alpha-1} = (\\alpha-1)(\\alpha+2)-(\\alpha-1)\\dfrac{2\\alpha+1}{\\alpha} = (\\alpha-1)\\left[(\\alpha+2)-\\dfrac{2\\alpha+1}{\\alpha}\\right]\\)</p>
<p>\\(= (\\alpha-1)\\cdot\\dfrac{\\alpha^2+2\\alpha-2\\alpha-1}{\\alpha} = (\\alpha-1)\\cdot\\dfrac{\\alpha^2-1}{\\alpha} = (\\alpha-1)\\cdot\\dfrac{(\\alpha+1)(\\alpha-1)}{\\alpha}\\)... </p>
<p>D'après le corrigé du PDF :</p>
<p>\\[\\boxed{A = (\\alpha-1)\\left(\\alpha-\\dfrac{1}{\\alpha}\\right) \\text{ u.a.}}\\]</p>
<p><em>En cm² (unité 2 cm → facteur 4) : \\(\\mathcal{A} = 4(\\alpha-1)\\left(\\alpha-\\dfrac{1}{\\alpha}\\right)\\) cm².</em></p>

</div>
`
    }
  ]
},
{
  id: 'bac-2006-D-session-normale',
  year: 2006,
  series: 'D',
  tour: 'Session normale',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale 2006',
  topics: ['Nombres complexes', 'Statistiques (régression de Mayer)', 'Fonctions trig. & exponentielle', 'Suite récurrente & Intégrales'],
  parts: [
    {
      label: 'Exercice I — Complexes : système & quadrilatère ABDC (4 pts)',
      problem: `<p>Le plan complexe est muni d'un repère \\(R = (O;\\vec{u};\\vec{v})\\), unité graphique 2 cm.</p>

<p><strong>1°)</strong> Résoudre dans \\(\\mathbb{C}\\times\\mathbb{C}\\) le système d'inconnues \\(z\\) et \\(z'\\) :</p>
<p>\\[\\begin{cases} iz + \\bar{z'} = -2\\sqrt{3} \\\\ \\bar{z} - iz' = -2 \\end{cases}\\]</p>

<p><strong>2°)</strong> Soient les points A, B d'affixes respectives \\(Z_A = -1+i\\sqrt{3}\\) et \\(Z_B = -\\sqrt{3}-i\\).</p>
<p><strong>a)</strong> Écrire \\(Z_A\\), \\(Z_B\\) et \\(Z_A\\cdot Z_B\\) sous forme trigonométrique.</p>
<p><strong>b)</strong> Montrer que \\(Z_A^3\\) est réel et \\(Z_B^3\\) est imaginaire pur.</p>

<p><strong>3°)</strong> Soit r la rotation de centre O et d'angle \\(-\\dfrac{\\pi}{2}\\).</p>
<p><strong>a)</strong> On pose \\(r(A) = C\\). Calculer \\(Z_C\\).</p>
<p><strong>b)</strong> On pose \\(r(C) = D\\). Calculer \\(Z_D\\).</p>
<p><strong>c)</strong> Placer les points A, B, C, D.</p>

<p><strong>4°) a)</strong> Montrer que O est le milieu de \\([AD]\\) et \\([BC]\\).</p>
<p><strong>b)</strong> Calculer le module et l'argument de \\(\\dfrac{Z_A}{Z_B}\\).</p>
<p><strong>c)</strong> En déduire la nature du quadrilatère ABDC.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Complexes, systèmes &amp ; géométrie</span>
  <ul>
    <li><strong>Résolution d'un système complexe :</strong> On peut identifier parties réelles et imaginaires pour obtenir un système 2×2 réel.</li>
    <li><strong>Vecteurs dans $\\mathbb{C}$ :</strong> $\\overrightarrow{AB} \\parallel \\overrightarrow{CD} \\iff \\dfrac{z_D - z_C}{z_B - z_A} \\in \\mathbb{R}$.</li>
    <li><strong>Quadrilatère :</strong> ABDC est un parallélogramme $\\iff z_A + z_D = z_B + z_C$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) Résolution du système</strong></p>
<p>En prenant le conjugué de la 2e équation : \\(z + i\\bar{z'} = -2\\).</p>
<p>Le système devient \\(\\begin{cases}iz + \\bar{z'} = -2\\sqrt{3} \\\\ z + i\\bar{z'} = -2\\end{cases}\\).</p>
<p>Par la méthode des déterminants :</p>
<p>\\(D = \\begin{vmatrix}i&1\\\\1&i\\end{vmatrix} = -2\\),
\\(D_z = \\begin{vmatrix}-2\\sqrt{3}&1\\\\-2&i\\end{vmatrix} = -2\\sqrt{3}i+2\\)</p>
<p>\\(z = \\dfrac{D_z}{D} = \\dfrac{-2\\sqrt{3}i+2}{-2} = -1+i\\sqrt{3}\\)</p>
<p>\\(\\bar{z'} = -2\\sqrt{3} - iz = -2\\sqrt{3}-i(-1+i\\sqrt{3}) = -2\\sqrt{3}+i+\\sqrt{3} = -\\sqrt{3}+i\\)</p>
<p>Donc \\(z' = -\\sqrt{3}-i\\).</p>
<p>\\[\\boxed{S_{\\mathbb{C}\\times\\mathbb{C}} = \\{(-1+i\\sqrt{3} ; -\\sqrt{3}-i)\\}}\\]</p>
<p><em>Remarque : \\(z = Z_A\\) et \\(z' = Z_B\\) !</em></p>

<p><strong>2a) Formes trigonométriques</strong></p>
<p>\\(|Z_A| = \\sqrt{1+3} = 2\\), \\(\\arg(Z_A) = \\dfrac{2\\pi}{3}\\) → \\(Z_A = 2\\left(\\cos\\dfrac{2\\pi}{3}+i\\sin\\dfrac{2\\pi}{3}\\right)\\)</p>
<p>\\(|Z_B| = \\sqrt{3+1} = 2\\), \\(\\arg(Z_B) = -\\dfrac{5\\pi}{6}\\) (dans \\(]-\\pi;\\pi]\\)) → \\(Z_B = 2\\left(\\cos\\dfrac{-5\\pi}{6}+i\\sin\\dfrac{-5\\pi}{6}\\right)\\)</p>
<p>\\(Z_A\\cdot Z_B\\) : module 4, argument \\(\\dfrac{2\\pi}{3}-\\dfrac{5\\pi}{6} = -\\dfrac{\\pi}{6}\\) → \\(Z_A Z_B = 4\\left(\\cos\\dfrac{-\\pi}{6}+i\\sin\\dfrac{-\\pi}{6}\\right)\\)</p>

<p><strong>2b)</strong></p>
<p>\\(\\arg(Z_A^3) = 3\\times\\dfrac{2\\pi}{3} = 2\\pi \\equiv 0 \\pmod{2\\pi}\\) → \\(Z_A^3\\) est <strong>réel</strong>. (vérifié)</p>
<p>\\(\\arg(Z_B^3) = 3\\times\\dfrac{-5\\pi}{6} = -\\dfrac{5\\pi}{2} \\equiv -\\dfrac{\\pi}{2} \\pmod{2\\pi}\\) → \\(Z_B^3\\) est <strong>imaginaire pur</strong>. (vérifié)</p>

<p><strong>3a) Affixe de C = r(A)</strong></p>
<p>\\(Z_C = e^{-i\\dfrac{\\pi}{2}}\\cdot Z_A = -i(-1+i\\sqrt{3}) = i - i^2\\sqrt{3} = \\sqrt{3}+i\\)</p>
<p>\\[\\boxed{Z_C = \\sqrt{3}+i}\\]</p>

<p><strong>3b) Affixe de D = r(C)</strong></p>
<p>\\(Z_D = e^{-i\\dfrac{\\pi}{2}}\\cdot Z_C = -i(\\sqrt{3}+i) = -i\\sqrt{3}+1 = 1-i\\sqrt{3}\\)</p>
<p>\\[\\boxed{Z_D = 1-i\\sqrt{3}}\\]</p>

<p><strong>4a) O milieu de [AD] et [BC]</strong></p>
<p>\\(\\dfrac{Z_A+Z_D}{2} = \\dfrac{(-1+i\\sqrt{3})+(1-i\\sqrt{3})}{2} = 0 = Z_O\\) (vérifié)</p>
<p>\\(\\dfrac{Z_B+Z_C}{2} = \\dfrac{(-\\sqrt{3}-i)+(\\sqrt{3}+i)}{2} = 0 = Z_O\\) (vérifié)</p>
<p> O est le milieu de \\([AD]\\) et \\([BC]\\).</p>

<p><strong>4b)</strong></p>
<p>\\(\\left|\\dfrac{Z_A}{Z_B}\\right| = \\dfrac{|Z_A|}{|Z_B|} = \\dfrac{2}{2} = 1\\)</p>
<p>\\(\\arg\\left(\\dfrac{Z_A}{Z_B}\\right) = \\dfrac{2\\pi}{3}+\\dfrac{5\\pi}{6} = \\dfrac{4\\pi+5\\pi}{6} = \\dfrac{3\\pi}{2} \\equiv -\\dfrac{\\pi}{2} \\pmod{2\\pi}\\)</p>

<p><strong>4c) Nature du quadrilatère ABDC</strong></p>
<p>Les diagonales [AD] et [BC] se coupent en leur milieu O → ABDC est un <strong>parallélogramme</strong>.</p>
<p>De plus \\(OA = OB\\) (car \\(|Z_A/Z_B|=1\\)) et \\((\\overrightarrow{OB};\\overrightarrow{OA}) = -\\dfrac{\\pi}{2}\\) donc \\(OA = OB\\) et \\(\\overrightarrow{OA}\\perp\\overrightarrow{OB}\\).</p>
<p>Les diagonales sont de même longueur et perpendiculaires →  <strong>ABDC est un carré</strong>.</p>`
    },
    {
      label: 'Exercice II — Statistiques : prix/quantité (4 pts)',
      problem: `<p>Le tableau suivant donne les résultats d'une étude sur un produit P ; \\(x_i\\) est le prix de vente unitaire (en FCFA) et \\(y_i\\) la quantité disponible sur le marché (en milliers) :</p>
<table class="vtab">
  <tr>
    <th>\\(x_i\\) (FCFA)</th>
    <td>30</td><td>35</td><td>45</td><td>60</td><td>80</td><td>100</td>
  </tr>
  <tr>
    <th>\\(y_i\\) (milliers)</th>
    <td>12,5</td><td>13</td><td>13</td><td>15</td><td>15,5</td><td>16</td>
  </tr>
</table>
<p><strong>1°) a)</strong> Construire le nuage de points \\(M_i\\) (1,5 cm = 10 FCFA en abscisse ; 1 cm = 1000 en ordonnées).</p>
<p><strong>b)</strong> Un ajustement affine semble-t-il raisonnable ? Justifier.</p>
<p><strong>2°) a)</strong> Construire la droite \\((\\Delta)\\) d'ajustement par la méthode de Mayer (3 premiers / 3 derniers points). Déterminer l'équation de \\((\\Delta)\\) sous la forme \\(y = ax+b\\).</p>
<p><strong>3°)</strong> À l'aide de \\((\\Delta)\\), estimer :</p>
<p><strong>a)</strong> La quantité disponible pour un prix de vente de 150 FCFA.</p>
<p><strong>b)</strong> Le prix de vente si la quantité disponible est de 20 000 unités.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Ajustement affine &amp ; statistiques</span>
  <ul>
    <li><strong>Moyenne :</strong> $\\bar{x} = \\dfrac{1}{n}\\sum x_i$, $\\bar{y} = \\dfrac{1}{n}\\sum y_i$.</li>
    <li><strong>Droite de régression :</strong> $y = ax + b$ avec $a = \\dfrac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$ et $b = \\bar{y} - a\\bar{x}$.</li>
    <li><strong>Droite de Mayer :</strong> On divise en deux demi-séries et on joint les points moyens $G_1$ et $G_2$.</li>
    <li><strong>Prévision :</strong> Extrapoler en lisant $y = ax+b$ pour un $x$ hors de l'intervalle initial (avec prudence).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1b) Ajustement affine</strong></p>
<p>Le nuage de points a un aspect rectiligne → un ajustement affine est <strong>raisonnable</strong>.</p>

<p><strong>2a) Droite de Mayer</strong></p>
<p>\\(G_1\\) (3 premiers) : \\(\\bar{x}_1 = \\dfrac{30+35+45}{3} = \\dfrac{110}{3} \\approx 36{,}7\\), \\(\\bar{y}_1 = \\dfrac{12{,}5+13+13}{3} = \\dfrac{38{,}5}{3} \\approx 12{,}8\\)</p>
<p>\\(\\boxed{G_1(36{,}7 ; 12{,}8)}\\)</p>
<p>\\(G_2\\) (3 derniers) : \\(\\bar{x}_2 = \\dfrac{60+80+100}{3} = 80\\), \\(\\bar{y}_2 = \\dfrac{15+15{,}5+16}{3} = \\dfrac{46{,}5}{3} = 15{,}5\\)</p>
<p>\\(\\boxed{G_2(80 ; 15{,}5)}\\)</p>
<p>Pente : \\(a = \\dfrac{15{,}5-12{,}8}{80-36{,}7} = \\dfrac{2{,}7}{43{,}3} \\approx 0{,}06\\)</p>
<p>Ordonnée à l'origine : \\(15{,}5 = 0{,}06\\times80+b \\Rightarrow b = 15{,}5-4{,}8 = 10{,}7\\)</p>
<p>\\[\\boxed{(\\Delta): y = 0{,}06x+10{,}7}\\]</p>

<p><strong>3a)</strong> \\(y(150) = 0{,}06\\times150+10{,}7 = 9+10{,}7 = 19{,}7\\)</p>
<p> Quantité estimée : <strong>19 700 unités</strong>.</p>

<p><strong>3b)</strong> \\(20 = 0{,}06x+10{,}7 \\Rightarrow x = \\dfrac{9{,}3}{0{,}06} = 155\\) FCFA</p>
<p> Prix estimé : <strong>155 FCFA</strong>.</p>`
    },
    {
      label: 'Problème — f(x) = exp(−x)·sin x, primitives, aire, volume, suite (Uₙ) (12 pts)',
      problem: `<p>On considère la fonction \\(f\\) définie sur \\([0;+\\infty[\\) par \\(f(x) = e^{-x}\\sin x\\) et \\((C_f)\\) sa courbe dans un repère orthonormé \\((O;\\vec{i};\\vec{j})\\) (2 cm en abscisse, 10 cm en ordonnées).</p>

<p><strong>Partie A — Étude de f</strong></p>
<p><strong>1°)</strong> Montrer que pour tout \\(x\\geq0\\) : \\(-e^{-x}\\leq f(x)\\leq e^{-x}\\). En déduire l'asymptote de \\((C_f)\\) en \\(+\\infty\\).</p>
<p><strong>2°)</strong> Déterminer les abscisses des points d'intersection de \\((C_f)\\) avec l'axe des abscisses.</p>
<p><strong>3°)</strong> Étude de f sur \\([0;\\pi]\\).</p>
<p><strong>a)</strong> Établir : \\(\\cos x - \\sin x = \\sqrt{2}\\sin\\!\\left(\\dfrac{\\pi}{4}-x\\right)\\).</p>
<p><strong>b)</strong> Calculer \\(f'(x)\\) et étudier son signe sur \\([0;\\pi]\\).</p>
<p><strong>c)</strong> Dresser le tableau de variation de f sur \\([0;\\pi]\\).</p>
<p><strong>4°)</strong> Tracer \\((C_1)\\), la portion de \\((C_f)\\) pour \\(t\\in[0;\\pi]\\).</p>
<p><em>On donne : \\(e^{-\\dfrac{\\pi}{4}}\\approx0{,}46\\) ; \\(e^{-\\dfrac{\\pi}{2}}\\approx0{,}21\\) ; \\(e^{-3\\dfrac{\\pi}{4}}\\approx0{,}09\\).</em></p>

<p><strong>Partie B — Calcul d'aire et de volume</strong></p>
<p><strong>1°) a)</strong> Vérifier l'égalité : \\(f''(x)+2f'(x)+2f(x) = 0\\).</p>
<p><strong>b)</strong> En déduire une primitive F de f sur \\([0;+\\infty[\\).</p>
<p><strong>2°)</strong> Soit D le domaine délimité par \\((C_1)\\), l'axe \\((Ox)\\) et les droites \\(x=0\\) et \\(x=\\pi\\). Calculer en cm² l'aire de D.</p>
<p><strong>3°)</strong> Soit \\(\\varphi(x) = e^{-2x}\\cos(2x)\\).</p>
<p><strong>a)</strong> Vérifier : \\(\\varphi''(x)+4\\varphi'(x)+8\\varphi(x) = 0\\).</p>
<p><strong>b)</strong> En déduire une primitive \\(\\Phi\\) de \\(\\varphi\\).</p>
<p><strong>c)</strong> Calculer en cm³ le volume V du solide engendré par la rotation complète de D autour de \\((Ox)\\).</p>

<p><strong>Partie C — Suite (U_n)</strong></p>
<p>On pose \\(U_n = \\displaystyle\\int_0^\\pi e^{-x}\\sin(nx)\\,dx\\).</p>
<p><strong>1°) a)</strong> Par deux IPP successives, montrer que \\(U_n = \\dfrac{n}{1+n^2}(1-e^{-\\pi}\\cos(n\\pi))\\).</p>
<p><strong>b)</strong> En déduire que \\(|U_n|\\leq\\dfrac{2n}{1+n^2}\\).</p>
<p><strong>2°)</strong> Calculer \\(\\displaystyle\\lim_{n\\to+\\infty}U_n\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — $e^{-x}\\sin x$, IPP, aire &amp ; suite</span>
  <ul>
    <li><strong>Primitive de $e^{ax}\\sin(bx)$ :</strong> Utiliser deux IPP successives pour obtenir $\\int e^{ax}\\sin(bx)\\,dx = \\dfrac{e^{ax}(a\\sin bx - b\\cos bx)}{a^2+b^2} + C$.</li>
    <li><strong>Signe de $f$ :</strong> $e^{-x} > 0$ toujours, donc le signe de $f(x) = e^{-x}\\sin x$ est celui de $\\sin x$.</li>
    <li><strong>Relation de Chasles :</strong> $\\int_0^{(n+1)\\pi} = \\int_0^{\\pi} + \\int_{\\pi}^{2\\pi} + \\ldots$ — utile pour décomposer les intégrales.</li>
    <li><strong>Série géométrique :</strong> $\\sum_{k=0}^{n} r^k = \\dfrac{1-r^{n+1}}{1-r}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°) Encadrement et asymptote</strong></p>
<p>\\(-1\\leq\\sin x\\leq1\\) et \\(e^{-x}>0\\), donc \\(-e^{-x}\\leq e^{-x}\\sin x\\leq e^{-x}\\) </p>
<p>\\(\\lim_{x\\to+\\infty}(-e^{-x}) = \\lim_{x\\to+\\infty}e^{-x} = 0\\) → par le théorème des gendarmes : \\(\\lim_{x\\to+\\infty}f(x) = 0\\).</p>
<p> La droite \\(y=0\\) est <strong>asymptote horizontale</strong> à \\((C_f)\\) en \\(+\\infty\\).</p>

<p><strong>2°) Intersections avec \\((Ox)\\)</strong></p>
<p>\\(f(x)=0 \\iff e^{-x}\\sin x = 0 \\iff \\sin x = 0\\) (car \\(e^{-x}>0\\))</p>
<p>\\(\\iff x = k\\pi\\), \\(k\\in\\mathbb{Z}\\). Sur \\([0;+\\infty[\\) : \\(x = 0, \\pi, 2\\pi, 3\\pi, \\ldots\\)</p>
<p> Les abscisses sont \\(\\boxed{x = k\\pi}\\), \\(k\\in\\mathbb{N}\\).</p>

<p><strong>3a)</strong></p>
<p>\\(\\sqrt{2}\\sin\\!\\left(\\dfrac{\\pi}{4}-x\\right) = \\sqrt{2}\\!\\left(\\sin\\dfrac{\\pi}{4}\\cos x-\\cos\\dfrac{\\pi}{4}\\sin x\\right) = \\sqrt{2}\\left(\\dfrac{\\sqrt{2}}{2}\\cos x-\\dfrac{\\sqrt{2}}{2}\\sin x\\right) = \\cos x-\\sin x\\) </p>

<p><strong>3b) f'(x)</strong></p>
<p>\\(f'(x) = -e^{-x}\\sin x+e^{-x}\\cos x = e^{-x}(\\cos x-\\sin x) = \\sqrt{2}e^{-x}\\sin\\!\\left(\\dfrac{\\pi}{4}-x\\right)\\)</p>
<p>Sur \\([0;\\pi]\\) : \\(e^{-x}>0\\) et \\(\\sqrt{2}>0\\). Signe de \\(f'(x)\\) = signe de \\(\\sin\\!\\left(\\dfrac{\\pi}{4}-x\\right)\\).</p>
<p>\\(\\dfrac{\\pi}{4}-x = 0 \\iff x=\\dfrac{\\pi}{4}\\). Pour \\(x<\\dfrac{\\pi}{4}\\) : \\(\\sin>0\\) ; pour \\(x>\\dfrac{\\pi}{4}\\) : \\(\\sin<0\\).</p>
<p> f croissante sur \\([0;\\dfrac{\\pi}{4}]\\), décroissante sur \\([\\dfrac{\\pi}{4};\\pi]\\).</p>

<p><strong>3c) Tableau de variation</strong></p>
<p>\\(f(0)=0\\), \\(f\\!\\left(\\dfrac{\\pi}{4}\\right) = e^{-\\dfrac{\\pi}{4}}\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}e^{-\\dfrac{\\pi}{4}}\\approx0{,}32\\), \\(f(\\pi) = 0\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2006-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2006-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">π/4</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">π</text>
    
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    
    <text x="145" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="170" y1="225" x2="385" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2006-f)"/>
    <text x="425" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="900">√2/2 e⁻π/⁴ ≈ 0,32</text>
    <line x1="465" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2006-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
  </svg>
</div>

<p><strong>4°) Tracé de la portion de courbe \\((C_1)\\) sur \\([0 ; \\pi]\\)</strong></p>
<p>La courbe \\((C_1)\\) est comprise entre les courbes enveloppes d'équations \\(y = -e^{-x}\\) et \\(y = e^{-x}\\). Elle admet pour tangente à l'origine la première bissectrice \\(y = x\\) et atteint son maximum en \\(\\left(\\dfrac{\\pi}{4}; \\dfrac{\\sqrt{2}}{2}e^{-\\dfrac{\\pi}{4}}\\right)\\approx(0{,}79 ; 0{,}32)\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2006 — Portion (C₁) sur [0 ; π]</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="291.7" y1="40.0" x2="291.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="442.9" y1="40.0" x2="442.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="594.1" y1="40.0" x2="594.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="297.1" x2="735" y2="297.1" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="140.6" y1="415" x2="140.6" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="315.1" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="122.6" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="291.7" y1="293.1" x2="291.7" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="291.7" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="442.9" y1="293.1" x2="442.9" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="442.9" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="594.1" y1="293.1" x2="594.1" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="594.1" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><text x="130.6" y="312.1" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="140.6" y1="297.1" x2="208.6" y2="65.7" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 140.6 297.1 L 141.9 292.6 L 143.3 288.1 L 144.7 283.7 L 146.0 279.3 L 147.4 275.1 L 148.7 270.9 L 150.1 266.8 L 151.4 262.8 L 152.8 258.9 L 154.1 255.0 L 155.5 251.2 L 156.9 247.5 L 158.2 243.9 L 159.6 240.3 L 160.9 236.8 L 162.3 233.4 L 163.6 230.0 L 165.0 226.8 L 166.4 223.5 L 167.7 220.4 L 169.1 217.3 L 170.4 214.3 L 171.8 211.4 L 173.1 208.5 L 174.5 205.7 L 175.9 203.0 L 177.2 200.3 L 178.6 197.7 L 179.9 195.1 L 181.3 192.6 L 182.6 190.2 L 184.0 187.8 L 185.4 185.5 L 186.7 183.3 L 188.1 181.1 L 189.4 178.9 L 190.8 176.8 L 192.1 174.8 L 193.5 172.9 L 194.9 170.9 L 196.2 169.1 L 197.6 167.3 L 198.9 165.5 L 200.3 163.8 L 201.6 162.2 L 203.0 160.6 L 204.4 159.0 L 205.7 157.5 L 207.1 156.1 L 208.4 154.7 L 209.8 153.3 L 211.1 152.0 L 212.5 150.8 L 213.9 149.6 L 215.2 148.4 L 216.6 147.3 L 217.9 146.2 L 219.3 145.2 L 220.6 144.2 L 222.0 143.2 L 223.3 142.3 L 224.7 141.4 L 226.1 140.6 L 227.4 139.8 L 228.8 139.1 L 230.1 138.3 L 231.5 137.7 L 232.8 137.0 L 234.2 136.4 L 235.6 135.9 L 236.9 135.3 L 238.3 134.9 L 239.6 134.4 L 241.0 134.0 L 242.3 133.6 L 243.7 133.2 L 245.1 132.9 L 246.4 132.6 L 247.8 132.4 L 249.1 132.1 L 250.5 131.9 L 251.8 131.8 L 253.2 131.6 L 254.6 131.5 L 255.9 131.4 L 257.3 131.4 L 258.6 131.3 L 260.0 131.3 L 261.3 131.4 L 262.7 131.4 L 264.1 131.5 L 265.4 131.6 L 266.8 131.7 L 268.1 131.9 L 269.5 132.1 L 270.8 132.3 L 272.2 132.5 L 273.6 132.7 L 274.9 133.0 L 276.3 133.3 L 277.6 133.6 L 279.0 133.9 L 280.3 134.3 L 281.7 134.6 L 283.0 135.0 L 284.4 135.4 L 285.8 135.9 L 287.1 136.3 L 288.5 136.8 L 289.8 137.2 L 291.2 137.7 L 292.5 138.2 L 293.9 138.8 L 295.3 139.3 L 296.6 139.9 L 298.0 140.5 L 299.3 141.0 L 300.7 141.7 L 302.0 142.3 L 303.4 142.9 L 304.8 143.5 L 306.1 144.2 L 307.5 144.9 L 308.8 145.6 L 310.2 146.3 L 311.5 147.0 L 312.9 147.7 L 314.3 148.4 L 315.6 149.2 L 317.0 149.9 L 318.3 150.7 L 319.7 151.4 L 321.0 152.2 L 322.4 153.0 L 323.8 153.8 L 325.1 154.6 L 326.5 155.4 L 327.8 156.3 L 329.2 157.1 L 330.5 157.9 L 331.9 158.8 L 333.3 159.6 L 334.6 160.5 L 336.0 161.4 L 337.3 162.2 L 338.7 163.1 L 340.0 164.0 L 341.4 164.9 L 342.7 165.8 L 344.1 166.7 L 345.5 167.6 L 346.8 168.5 L 348.2 169.4 L 349.5 170.3 L 350.9 171.3 L 352.2 172.2 L 353.6 173.1 L 355.0 174.1 L 356.3 175.0 L 357.7 175.9 L 359.0 176.9 L 360.4 177.8 L 361.7 178.8 L 363.1 179.7 L 364.5 180.7 L 365.8 181.6 L 367.2 182.6 L 368.5 183.5 L 369.9 184.5 L 371.2 185.4 L 372.6 186.4 L 374.0 187.4 L 375.3 188.3 L 376.7 189.3 L 378.0 190.2 L 379.4 191.2 L 380.7 192.2 L 382.1 193.1 L 383.5 194.1 L 384.8 195.0 L 386.2 196.0 L 387.5 196.9 L 388.9 197.9 L 390.2 198.9 L 391.6 199.8 L 393.0 200.8 L 394.3 201.7 L 395.7 202.7 L 397.0 203.6 L 398.4 204.5 L 399.7 205.5 L 401.1 206.4 L 402.5 207.4 L 403.8 208.3 L 405.2 209.2 L 406.5 210.2 L 407.9 211.1 L 409.2 212.0 L 410.6 212.9 L 411.9 213.9 L 413.3 214.8 L 414.7 215.7 L 416.0 216.6 L 417.4 217.5 L 418.7 218.4 L 420.1 219.3 L 421.4 220.2 L 422.8 221.1 L 424.2 222.0 L 425.5 222.9 L 426.9 223.8 L 428.2 224.6 L 429.6 225.5 L 430.9 226.4 L 432.3 227.2 L 433.7 228.1 L 435.0 229.0 L 436.4 229.8 L 437.7 230.7 L 439.1 231.5 L 440.4 232.3 L 441.8 233.2 L 443.2 234.0 L 444.5 234.8 L 445.9 235.7 L 447.2 236.5 L 448.6 237.3 L 449.9 238.1 L 451.3 238.9 L 452.7 239.7 L 454.0 240.5 L 455.4 241.3 L 456.7 242.0 L 458.1 242.8 L 459.4 243.6 L 460.8 244.3 L 462.2 245.1 L 463.5 245.9 L 464.9 246.6 L 466.2 247.4 L 467.6 248.1 L 468.9 248.8 L 470.3 249.6 L 471.6 250.3 L 473.0 251.0 L 474.4 251.7 L 475.7 252.4 L 477.1 253.1 L 478.4 253.8 L 479.8 254.5 L 481.1 255.2 L 482.5 255.9 L 483.9 256.5 L 485.2 257.2 L 486.6 257.9 L 487.9 258.5 L 489.3 259.2 L 490.6 259.8 L 492.0 260.5 L 493.4 261.1 L 494.7 261.7 L 496.1 262.4 L 497.4 263.0 L 498.8 263.6 L 500.1 264.2 L 501.5 264.8 L 502.9 265.4 L 504.2 266.0 L 505.6 266.6 L 506.9 267.2 L 508.3 267.7 L 509.6 268.3 L 511.0 268.9 L 512.4 269.4 L 513.7 270.0 L 515.1 270.5 L 516.4 271.1 L 517.8 271.6 L 519.1 272.1 L 520.5 272.7 L 521.9 273.2 L 523.2 273.7 L 524.6 274.2 L 525.9 274.7 L 527.3 275.2 L 528.6 275.7 L 530.0 276.2 L 531.3 276.7 L 532.7 277.1 L 534.1 277.6 L 535.4 278.1 L 536.8 278.5 L 538.1 279.0 L 539.5 279.4 L 540.8 279.9 L 542.2 280.3 L 543.6 280.8 L 544.9 281.2 L 546.3 281.6 L 547.6 282.0 L 549.0 282.5 L 550.3 282.9 L 551.7 283.3 L 553.1 283.7 L 554.4 284.1 L 555.8 284.5 L 557.1 284.8 L 558.5 285.2 L 559.8 285.6 L 561.2 286.0 L 562.6 286.3 L 563.9 286.7 L 565.3 287.0 L 566.6 287.4 L 568.0 287.7 L 569.3 288.1 L 570.7 288.4 L 572.1 288.8 L 573.4 289.1 L 574.8 289.4 L 576.1 289.7 L 577.5 290.0 L 578.8 290.3 L 580.2 290.7 L 581.6 291.0 L 582.9 291.3 L 584.3 291.5 L 585.6 291.8 L 587.0 292.1 L 588.3 292.4 L 589.7 292.7 L 591.1 292.9 L 592.4 293.2 L 593.8 293.5 L 595.1 293.7 L 596.5 294.0 L 597.8 294.2 L 599.2 294.5 L 600.5 294.7 L 601.9 295.0 L 603.3 295.2 L 604.6 295.4 L 606.0 295.7 L 607.3 295.9 L 608.7 296.1 L 610.0 296.3 L 611.4 296.5 L 612.8 296.7 L 614.1 296.9 L 615.5 297.1" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="140.6" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(150.6, 312.1)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g>
    <circle cx="259.3" cy="131.3" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(269.3, 119.30000000000001)">
      <text x="60.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (π/4 ; 0,32)</text>
    </g>
    <circle cx="615.5" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(565.5, 312.1)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(π; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="52" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C₁) : e<tspan dy="-3" font-size="9">-x</tspan><tspan dy="3"> sin x</tspan></text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente en 0 (y = x)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>1a) Vérification</strong></p>
<p>\\(f'(x) = e^{-x}(\\cos x-\\sin x)\\), \\(f''(x) = e^{-x}(-\\sin x-\\cos x)-e^{-x}(\\cos x-\\sin x) = -2e^{-x}\\cos x\\)</p>
<p>\\(f''+2f'+2f = e^{-x}(-2\\cos x + 2\\cos x - 2\\sin x + 2\\sin x) = 0\\) </p>

<p><strong>1b) Primitive F de f</strong></p>
<p>\\(f''(x)+2f'(x)+2f(x)=0 \\Rightarrow f(x) = \\dfrac{-f''(x)-2f'(x)}{2} = \\left(\\dfrac{-f'(x)-2f(x)}{2}\\right)'\\)</p>
<p>Donc \\(F(x) = \\dfrac{-f'(x)-2f(x)}{2} = \\dfrac{-e^{-x}(\\cos x-\\sin x)-2e^{-x}\\sin x}{2}\\)</p>
<p>\\[\\boxed{F(x) = \\dfrac{-e^{-x}(\\cos x+\\sin x)}{2}}\\]</p>

<p><strong>2°) Aire de D</strong></p>
<p>Sur \\([0;\\pi]\\), \\(f(x)\\geq0\\).</p>
<p>\\(A = \\int_0^\\pi f(x)\\,dx\\times U_A = [F(x)]_0^\\pi\\times U_A\\)</p>
<p>\\(F(\\pi) = \\dfrac{-e^{-\\pi}(\\cos\\pi+\\sin\\pi)}{2} = \\dfrac{-e^{-\\pi}(-1)}{2} = \\dfrac{e^{-\\pi}}{2}\\)</p>
<p>\\(F(0) = \\dfrac{-(1+0)}{2} = -\\dfrac{1}{2}\\)</p>
<p>\\(A = \\left(\\dfrac{e^{-\\pi}}{2}+\\dfrac{1}{2}\\right)\\times U_A = \\dfrac{1+e^{-\\pi}}{2}\\times U_A\\)</p>
<p>Avec \\(U_A = 2\\text{ cm}\\times10\\text{ cm} = 20\\text{ cm}^2\\) :</p>
<p>\\[\\boxed{A = 10(1+e^{-\\pi})\\text{ cm}^2 \\approx 10{,}4\\text{ cm}^2}\\]</p>

<p><strong>3a) Vérification pour \\(\\varphi\\)</strong></p>
<p>\\(\\varphi'(x) = -2e^{-2x}(\\cos2x+\\sin2x)\\), \\(\\varphi''(x) = 8e^{-2x}\\sin2x\\)</p>
<p>\\(\\varphi''+4\\varphi'+8\\varphi = e^{-2x}(8\\sin2x-8\\sin2x-8\\cos2x+8\\cos2x) = 0\\) </p>

<p><strong>3b) Primitive \\(\\Phi\\) de \\(\\varphi\\)</strong></p>
<p>Par la même méthode : \\(\\Phi(x) = \\dfrac{-\\varphi'(x)-4\\varphi(x)}{8} = \\dfrac{-e^{-2x}(\\cos2x-\\sin2x)}{4}\\)</p>

<p><strong>3c) Volume V</strong></p>
<p>\\(V = \\pi\\int_0^\\pi[f(x)]^2\\,dx\\times U_V = \\pi\\int_0^\\pi e^{-2x}\\sin^2 x\\,dx\\times U_V\\)</p>
<p>\\(\\sin^2 x = \\dfrac{1-\\cos2x}{2}\\) donc :</p>
<p>\\(V = \\pi\\int_0^\\pi\\dfrac{e^{-2x}-e^{-2x}\\cos2x}{2}\\,dx\\times U_V = \\pi\\left[\\dfrac{-e^{-2x}}{4}-\\dfrac{\\Phi(x)}{2}\\right]_0^\\pi\\times U_V\\)</p>
<p>Calcul : \\(\\left[\\dfrac{-e^{-2x}}{4}\\right]_0^\\pi = -\\dfrac{e^{-2\\pi}}{4}+\\dfrac{1}{4}\\)</p>
<p>\\(\\left[-\\dfrac{\\Phi(x)}{2}\\right]_0^\\pi = \\dfrac{e^{-2x}(\\cos2x-\\sin2x)}{8}\\bigg|_0^\\pi = \\dfrac{e^{-2\\pi}}{8}-\\dfrac{1}{8}\\)</p>
<p>\\(V = \\pi\\left(\\dfrac{1}{4}-\\dfrac{e^{-2\\pi}}{4}+\\dfrac{e^{-2\\pi}}{8}-\\dfrac{1}{8}\\right)\\times U_V = \\pi\\left(\\dfrac{1}{8}-\\dfrac{e^{-2\\pi}}{8}\\right)\\times U_V = \\dfrac{\\pi(1-e^{-2\\pi})}{8}\\times U_V\\)</p>
<p>\\(U_V = 2\\times10\\times1 = 20\\text{ cm}^3\\) (approximation avec \\(\\|\\vec{k}\\|=1\\text{ cm}\\)) :</p>
<p>\\[\\boxed{V = \\dfrac{5\\pi}{2}(1-e^{-2\\pi})\\approx 7{,}8\\text{ cm}^3}\\]</p>

<p><strong>Partie C</strong></p>

<p><strong>1a) Expression de U_n</strong></p>
<p>1ère IPP : \\(u=\\sin(nx)\\), \\(v'=e^{-x}\\) :</p>
<p>\\(U_n = [-e^{-x}\\sin(nx)]_0^\\pi + n\\int_0^\\pi e^{-x}\\cos(nx)\\,dx = n\\int_0^\\pi e^{-x}\\cos(nx)\\,dx\\)</p>
<p>2e IPP : \\(u=\\cos(nx)\\), \\(v'=e^{-x}\\) :</p>
<p>\\(n\\int_0^\\pi e^{-x}\\cos(nx)\\,dx = n\\left([-e^{-x}\\cos(nx)]_0^\\pi - n\\int_0^\\pi e^{-x}\\sin(nx)\\,dx\\right)\\)</p>
<p>\\(= n(1-e^{-\\pi}\\cos(n\\pi)) - n^2 U_n\\)</p>
<p>\\((1+n^2)U_n = n(1-e^{-\\pi}\\cos(n\\pi))\\)</p>
<p>\\[\\boxed{U_n = \\dfrac{n}{1+n^2}(1-e^{-\\pi}\\cos(n\\pi))}\\] </p>

<p><strong>1b) Inégalité</strong></p>
<p>\\(-1\\leq\\cos(n\\pi)\\leq1\\) donc \\(1-e^{-\\pi}\\leq1-e^{-\\pi}\\cos(n\\pi)\\leq1+e^{-\\pi} < 2\\).</p>
<p>Donc \\(0 < \\dfrac{n}{1+n^2}(1-e^{-\\pi}\\cos(n\\pi)) < \\dfrac{2n}{1+n^2}\\), soit \\(|U_n|\\leq\\dfrac{2n}{1+n^2}\\). </p>

<p><strong>2°) Limite</strong></p>
<p>\\(\\lim_{n\\to+\\infty}\\dfrac{2n}{1+n^2} = \\lim_{n\\to+\\infty}\\dfrac{2}{n+\\dfrac{1}{n}} = 0\\).</p>
<p>Par le théorème des gendarmes : \\(\\displaystyle\\lim_{n\\to+\\infty}U_n = 0\\).</p>
<p> La suite \\((U_n)\\) est <strong>convergente de limite 0</strong>.</p>

</div>
`
    }
  ]
},
{
  id: 'bac-2007-D-juillet-1er',
  year: 2007,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2007 / 1er tour',
  topics: ['Nombres complexes', 'Suites récurrente & géométrique', 'Fonctions logarithmes', 'Bijection & Intégrale & Courbe paramétrique'],
  parts: [
    {
      label: 'Exercice I — Polynôme complexe & carré ABDC (4 pts)',
      problem: `<p>Soit P le polynôme de variable complexe z défini par :</p>
<p>\\[P(z) = z^3 - 5(1-i)z^2 - 2(1-9i)z + 16 - 8i\\]</p>
<p><strong>1°)</strong> Montrer que \\(P(z)=0\\) admet une solution imaginaire pure \\(z_0\\) que l'on déterminera.</p>
<p><strong>2°)</strong> Résoudre dans \\(\\mathbb{C}\\) l'équation \\(P(z)=0\\). On désignera \\(z_1\\) et \\(z_2\\) les deux autres solutions telles que \\(\\text{Im}(z_1) < \\text{Im}(z_2)\\).</p>


<p><strong>3°)</strong> Le plan complexe est muni d'un repère orthonormé \\((O;\\vec{u};\\vec{v})\\), unité 1 cm. Soient A, B, C les points d'affixes \\(z_1\\), \\(z_0\\), \\(\\bar{z}_2\\).</p>
<p><strong>a)</strong> Placer A, B, C.</p>
<p><strong>b)</strong> Calculer \\(\\dfrac{\\bar{z}_2 - z_1}{z_0 - z_1}\\).</p>
<p><strong>c)</strong> En déduire la nature du triangle ABC.</p>
<p><strong>4°)</strong> Soit t la translation de vecteur \\(\\overrightarrow{AB}\\).</p>
<p><strong>a)</strong> Exprimer \\(z'\\) en fonction de \\(z\\) pour M' = t(M).</p>
<p><strong>b)</strong> Calculer l'affixe de D = t(C).</p>
<p><strong>c)</strong> Donner la nature exacte du quadrilatère ABDC. Justifier.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Polynômes complexes &amp ; racines</span>
  <ul>
    <li><strong>Racine évidente :</strong> Si $P(z_0) = 0$, alors $(z - z_0)$ divise $P(z)$. On effectue la division euclidienne.</li>
    <li><strong>Racines conjuguées :</strong> Si $P$ est à coefficients réels, les racines complexes vont par paires conjuguées $z_0$ et $\\bar{z}_0$.</li>
    <li><strong>Carré :</strong> ABDC est un carré $\\iff |\\overrightarrow{AB}| = |\\overrightarrow{BD}|$ et $\\overrightarrow{AB} \\perp \\overrightarrow{BD}$ (i.e. $\\dfrac{z_D - z_B}{z_B - z_A}$ est imaginaire pur de module 1).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) Racine imaginaire pure z₀</strong></p>
<p>Posons \\(z_0 = ib\\), \\(b\\in\\mathbb{R}^*\\). En substituant dans P :</p>
<p>\\[P(ib) = 0 \\iff \\begin{cases}5b^2-18b+16=0 & (1)\\\\-b^3+5b^2-2b-8=0 & (2)\\end{cases}\\]</p>
<p>(1) : \\(\\Delta=1\\), \\(b=\\dfrac{8}{5}\\) ou \\(b=2\\).</p>
<p>Vérification dans (2) : \\(b=2\\) : \\(-8+20-4-8=0\\) (vérifié) ; \\(b=\\dfrac{8}{5}\\) : (non vérifié).</p>
<p>\\[\\boxed{z_0 = 2i}\\]</p>

<p><strong>2°) Résolution complète</strong></p>
<p>On factorise : \\(P(z) = (z-2i)(z^2+(-5-3i)z+4+8i)\\).</p>
<p>Pour \\(z^2-(5+3i)z+(4+8i)=0\\) : \\(\\Delta = -2i\\).</p>
<p>Racine carrée de \\(-2i\\) : \\(\\delta = 1-i\\) ou \\(-1+i\\).</p>
<p>\\(z = \\dfrac{(5+3i)\\pm(1-i)}{2}\\) → \\(z_1 = 2+2i\\) et \\(z_2 = 3+i\\).</p>
<p>Comme \\(\\text{Im}(z_1) = 2 > \\text{Im}(z_2) = 1\\) : on renomme \\(z_1 = 3+i\\) et \\(z_2 = 2+2i\\).</p>
<p>\\[\\boxed{S_\\mathbb{C} = \\{2i ; 3+i ; 2+2i\\}}\\]</p>

<p><strong>3b)</strong> \\(z_1 = 3+i\\), \\(z_0 = 2i\\), \\(\\bar{z}_2 = 2-2i\\).</p>
<p>\\[\\dfrac{\\bar{z}_2-z_1}{z_0-z_1} = \\dfrac{(2-2i)-(3+i)}{2i-(3+i)} = \\dfrac{-1-3i}{-3+i} = \\dfrac{(-1-3i)(-3-i)}{10} = \\dfrac{3+i+9i-3}{10} = \\dfrac{10i}{10} = i\\]</p>

<p><strong>3c) Nature du triangle ABC</strong></p>
<p>\\(\\left|\\dfrac{\\bar{z}_2-z_1}{z_0-z_1}\\right| = 1\\) → \\(AC = AB\\).</p>
<p>\\(\\arg\\left(\\dfrac{\\bar{z}_2-z_1}{z_0-z_1}\\right) = \\dfrac{\\pi}{2}\\) → \\(\\overrightarrow{AB}\\perp\\overrightarrow{AC}\\).</p>
<p> Triangle ABC <strong>rectangle isocèle en A</strong>.</p>

<p><strong>4a)</strong> \\(z_{\\overrightarrow{AB}} = z_0-z_1 = 2i-(3+i) = -3+i\\).</p>
<p>\\(z' = z+(-3+i)\\)</p>

<p><strong>4b)</strong> \\(z_D = \\bar{z}_2+(-3+i) = (2-2i)+(-3+i) = -1-i\\)</p>

<p><strong>4c)</strong> \\(\\overrightarrow{AB} = \\overrightarrow{CD}\\) (t(C)=D) donc ABDC est un <strong>parallélogramme</strong>. De plus \\(AB=AC\\) et \\(\\overrightarrow{AB}\\perp\\overrightarrow{AC}\\) → 4 côtés égaux et 4 angles droits.</p>
<p> ABDC est un <strong>carré</strong>.</p>`
    },
    {
      label: 'Exercice II — Suite (V_n) et (U_n) géométrique (4 pts)',
      problem: `<p>Soit \\((V_n)\\) la suite définie sur \\(\\mathbb{N}^*\\) par \\(V_1 = \\dfrac{1}{2}\\) et \\(V_{n+1} = \\dfrac{n+1}{2n}V_n\\).</p>
<p><strong>1°)</strong> Calculer \\(V_2\\), \\(V_3\\) et \\(V_4\\).</p>
<p><strong>2°) a)</strong> Démontrer que \\(V_n > 0\\) pour tout \\(n > 0\\).</p>
<p><strong>b)</strong> Démontrer que \\((V_n)\\) est décroissante.</p>
<p><strong>c)</strong> En déduire que \\((V_n)\\) est convergente.</p>
<p><strong>3°)</strong> Soit \\(U_n = \\dfrac{V_n}{n}\\) pour tout \\(n > 0\\).</p>
<p><strong>a)</strong> Montrer que \\((U_n)\\) est une suite géométrique. Préciser la raison et le premier terme.</p>
<p><strong>b)</strong> Exprimer \\(U_n\\) puis \\(V_n\\) en fonction de n.</p>
<p><strong>c)</strong> Calculer \\(\\displaystyle\\lim_{n\\to+\\infty}U_n\\) et \\(\\displaystyle\\lim_{n\\to+\\infty}V_n\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suites géométriques &amp ; arithmétiques</span>
  <ul>
    <li><strong>Suite géométrique :</strong> $V_{n+1} = r \\cdot V_n \\Rightarrow V_n = V_0 \\cdot r^n$. Converge vers 0 si $|r| < 1$.</li>
    <li><strong>Changement de variable :</strong> Poser $V_n = U_n - \\ell$ (où $\\ell$ est le point fixe) ramène à une suite géométrique.</li>
    <li><strong>Somme géométrique :</strong> $\\sum_{k=0}^{n} r^k = \\dfrac{1 - r^{n+1}}{1 - r}$ pour $r \\neq 1$.</li>
    <li><strong>Limite :</strong> $\\lim_{n\\to+\\infty} r^n = 0$ si $|r| < 1$, $+\\infty$ si $r > 1$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°)</strong></p>
<p>\\(V_2 = \\dfrac{2}{2}V_1 = 1\\times\\dfrac{1}{2} = \\dfrac{1}{2}\\)</p>
<p>\\(V_3 = \\dfrac{3}{4}V_2 = \\dfrac{3}{4}\\times\\dfrac{1}{2} = \\dfrac{3}{8}\\)</p>
<p>\\(V_4 = \\dfrac{4}{6}V_3 = \\dfrac{2}{3}\\times\\dfrac{3}{8} = \\dfrac{1}{4}\\)</p>

<p><strong>2a) V_n > 0 par récurrence</strong></p>
<p>\\(V_1 = \\dfrac{1}{2} > 0\\). Si \\(V_n > 0\\), alors \\(V_{n+1} = \\dfrac{n+1}{2n}V_n > 0\\) (car \\(\\dfrac{n+1}{2n}>0\\)). (vérifié)</p>

<p><strong>2b) Décroissance</strong></p>
<p>\\(V_{n+1}-V_n = \\dfrac{n+1}{2n}V_n - V_n = V_n\\left(\\dfrac{n+1}{2n}-1\\right) = V_n\\cdot\\dfrac{1-n}{2n}\\)</p>
<p>Pour \\(n\\geq1\\) : \\(1-n\\leq0\\) et \\(V_n>0\\) → \\(V_{n+1}-V_n\\leq0\\).  \\((V_n)\\) est décroissante.</p>

<p><strong>2c)</strong> \\((V_n)\\) est décroissante et minorée par 0 → elle est <strong>convergente</strong>.</p>

<p><strong>3a) (U_n) géométrique</strong></p>
<p>\\(U_{n+1} = \\dfrac{V_{n+1}}{n+1} = \\dfrac{1}{n+1}\\cdot\\dfrac{n+1}{2n}V_n = \\dfrac{V_n}{2n} = \\dfrac{1}{2}\\cdot\\dfrac{V_n}{n} = \\dfrac{1}{2}U_n\\)</p>
<p> \\((U_n)\\) est géométrique de raison \\(q=\\dfrac{1}{2}\\) et de premier terme \\(U_1 = V_1 = \\dfrac{1}{2}\\).</p>

<p><strong>3b)</strong></p>
<p>\\(U_n = \\dfrac{1}{2}\\left(\\dfrac{1}{2}\\right)^{n-1} = \\dfrac{1}{2^n}\\)</p>
<p>\\(V_n = nU_n = \\dfrac{n}{2^n}\\)</p>

<p><strong>3c)</strong></p>
<p>\\(\\lim_{n\\to+\\infty}U_n = \\lim_{n\\to+\\infty}\\dfrac{1}{2^n} = 0\\)</p>
<p>\\(\\lim_{n\\to+\\infty}V_n = \\lim_{n\\to+\\infty}\\dfrac{n}{2^n} = 0\\) (croissances comparées)</p>`
    },
    {
      label: 'Problème — g(x)=x²+2−2lnx & f(x)=x+2lnx/x, bijection, intégrale, courbe param. (12 pts)',
      problem: `<p><strong>Partie A</strong></p>
<p>Soit g définie sur \\(]0;+\\infty[\\) par \\(g(x) = x^2+2-2\\ln x\\).</p>
<p><strong>1°)</strong> Calculer \\(\\displaystyle\\lim_{x\\to0^+}g(x)\\) et \\(\\displaystyle\\lim_{x\\to+\\infty}g(x)\\).</p>
<p><strong>2°)</strong> Étudier le sens de variation de g et dresser son tableau.</p>
<p><strong>3°)</strong> En déduire que \\(g(x)>0\\) pour tout \\(x>0\\).</p>

<p><strong>Partie B</strong></p>
<p>Soit f définie sur \\(]0;+\\infty[\\) par \\(f(x) = x+\\dfrac{2\\ln x}{x}\\). Courbe (C) dans \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>
<p><strong>1°)</strong> Calculer \\(\\displaystyle\\lim_{x\\to0^+}f(x)\\) et \\(\\displaystyle\\lim_{x\\to+\\infty}f(x)\\). Asymptote verticale.</p>
<p><strong>2°) a)</strong> Calculer \\(f'(x)\\) et montrer que \\(f'(x)\\) a le même signe que \\(g(x)\\).</p>
<p><strong>b)</strong> En déduire les variations de f.</p>
<p><strong>3°) a)</strong> Montrer que \\(y=x\\) est asymptote oblique à (C). Position relative.</p>
<p><strong>b)</strong> Trouver le point B de (C) en lequel la tangente est parallèle à \\(y=x\\).</p>
<p><strong>4°)</strong> Équation de la tangente (T) à (C) au point A d'abscisse 1.</p>
<p><strong>5°) a)</strong> Montrer que f est une bijection de \\(]0;+\\infty[\\) sur \\(\\mathbb{R}\\).</p>
<p><strong>b)</strong> Montrer que \\(f(x)=0\\) a une unique solution \\(\\alpha\\in]\\dfrac{1}{2};1[\\).</p>
<p><strong>c)</strong> Construire (C).</p>
<p><strong>6°)</strong> Construire la courbe (C') de \\(f^{-1}\\) dans le même repère.</p>
<p><strong>7°)</strong> Calculer en cm² l'aire S du domaine délimité par (C), \\(y=x\\), \\(x=1\\) et \\(x=e\\).</p>

<p><strong>Partie C</strong></p>
<p>Soit (Γ) l'ensemble des points M(x(t);y(t)) avec \\(x(t)=e^t\\), \\(y(t)=e^t+2te^{-t}\\), \\(t\\geq0\\).</p>
<p><strong>1°)</strong> Montrer que (Γ) est une partie de (C).</p>
<p><strong>2°)</strong> Tracer (Γ) en pointillés sur le même graphique.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions $\\ln$, bijection &amp ; courbe paramétrique</span>
  <ul>
    <li><strong>Dérivées utiles :</strong> $(\\ln x)' = \\dfrac{1}{x}$, $\\left(\\dfrac{\\ln x}{x}\\right)' = \\dfrac{1 - \\ln x}{x^2}$.</li>
    <li><strong>Bijection :</strong> $f$ est bijective sur $I$ si elle est continue et strictement monotone sur $I$.</li>
    <li><strong>Courbe paramétrique :</strong> Vecteur tangent en $t_0$ : $(x'(t_0), y'(t_0))$. Tangente horizontale si $y'=0$ et $x'\\neq 0$, verticale si $x'=0$ et $y'\\neq 0$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°)</strong></p>
<p>\\(\\lim_{x\\to0^+}g(x) = 0+2-(-\\infty) = +\\infty\\)</p>
<p>\\(\\lim_{x\\to+\\infty}g(x) = +\\infty\\) (car \\(x^2\\) domine \\(\\ln x\\))</p>

<p><strong>2°)</strong></p>
<p>\\(g'(x) = 2x-\\dfrac{2}{x} = \\dfrac{2(x^2-1)}{x} = \\dfrac{2(x-1)(x+1)}{x}\\)</p>
<p>Pour \\(x>0\\) : signe de \\(g'\\) = signe de \\(x-1\\). Donc g décroissante sur \\(]0;1]\\), croissante sur \\([1;+\\infty[\\).</p>
<p>Minimum en \\(x=1\\) : \\(g(1) = 1+2-0 = 3\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">g'(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">g(x)</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0^+</text>
    <text x="425.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="285.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="565.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="425.0" y1="50" x2="425.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425.0" y1="86" x2="425.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="400.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-3)"/>
    <line x1="450.0" y1="135" x2="680.0" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-3)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">+∞</text>
    <text x="425.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">3</text>
    <text x="705.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>3°)</strong> Le minimum absolu de g est 3 > 0, donc \\(g(x)>0\\) pour tout \\(x>0\\). </p>

<p><strong>Partie B</strong></p>

<p><strong>1°)</strong></p>
<p>\\(\\lim_{x\\to0^+}f(x) = \\lim_{x\\to0^+}\\left(x+\\dfrac{2\\ln x}{x}\\right) = 0+\\dfrac{2\\times(-\\infty)}{0^+} = -\\infty\\)</p>
<p> Asymptote verticale \\(x=0\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\) (car \\(x\\to+\\infty\\) et \\(\\dfrac{2\\ln x}{x}\\to0\\)).</p>

<p><strong>2a) f'(x)</strong></p>
<p>\\(f'(x) = 1+\\dfrac{\\dfrac{2}{x}\\cdot x - 2\\ln x}{x^2} = 1+\\dfrac{2-2\\ln x}{x^2} = \\dfrac{x^2+2-2\\ln x}{x^2} = \\dfrac{g(x)}{x^2}\\)</p>
<p>Pour \\(x>0\\) : \\(x^2>0\\), signe de \\(f'(x)\\) = signe de \\(g(x) > 0\\).</p>
<p> \\(f'(x) > 0\\) pour tout \\(x>0\\) → f est <strong>strictement croissante</strong> sur \\(]0;+\\infty[\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2007-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2007-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <!-- Double barre en 0 -->
    <line x1="142" y1="50" x2="142" y2="260" stroke="#b83232" stroke-width="2"/>
    <line x1="148" y1="50" x2="148" y2="260" stroke="#b83232" stroke-width="2"/>
    
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    
    <text x="175" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <line x1="200" y1="225" x2="680" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2007-1-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>3a) Asymptote y=x</strong></p>
<p>\\(\\lim_{x\\to+\\infty}(f(x)-x) = \\lim_{x\\to+\\infty}\\dfrac{2\\ln x}{x} = 0\\) </p>
<p>Position : \\(f(x)-x = \\dfrac{2\\ln x}{x}\\). Signe = signe de \\(\\ln x\\) :</p>
<p>Sur \\(]0;1[\\) : (C) en-dessous de \\(y=x\\) ; sur \\(]1;+\\infty[\\) : (C) au-dessus.</p>

<p><strong>3b) Point B (tangente ∥ à y=x)</strong></p>
<p>\\(f'(x_B) = 1 \\iff g(x_B) = x_B^2 \\iff x_B^2+2-2\\ln x_B = x_B^2 \\iff \\ln x_B = 1 \\iff x_B = e\\)</p>
<p>\\(y_B = e+\\dfrac{2}{e}\\) → \\(\\boxed{B\\!\\left(e ; e+\\dfrac{2}{e}\\right)}\\)</p>

<p><strong>4°) Tangente (T) en A(1)</strong></p>
<p>\\(f(1) = 1+0 = 1\\), \\(f'(1) = 3\\) (car \\(f'(1)=g(1)/1=3\\)).</p>
<p>\\[\\boxed{(T): y = 3x-2}\\]</p>

<p><strong>5a) Bijection de f sur ℝ</strong></p>
<p>f est continue, strictement croissante, \\(f(]0;+\\infty[) = ]-\\infty;+\\infty[ = \\mathbb{R}\\). </p>

<p><strong>5b) Solution α de f(x)=0</strong></p>
<p>Bijection → unique solution. \\(f\\left(\\dfrac{1}{2}\\right) = \\dfrac{1}{2}-4\\ln2 \\approx 0{,}5-2{,}77 < 0\\) et \\(f(1) = 1 > 0\\) → \\(\\alpha\\in]\\dfrac{1}{2};1[\\). </p>

<p><strong>5°) c) & 6°) Construction des courbes \\((C)\\) et \\((C')\\)</strong></p>
<p>La courbe \\((C)\\) admet l'axe des ordonnées \\((Oy)\\) comme asymptote verticale et la droite \\((D): y = x\\) comme asymptote oblique. La courbe \\((C')\\) de la bijection réciproque \\(f^{-1}\\) est la symétrique de \\((C)\\) par rapport à la droite \\(y = x\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2007 Tour 1 — Courbes (C) et (C')</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="173.3" y1="40.0" x2="173.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="281.7" y1="40.0" x2="281.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40.0" x2="390.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="498.3" y1="40.0" x2="498.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="606.7" y1="40.0" x2="606.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="360.0" x2="715.0" y2="360.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="320.0" x2="715.0" y2="320.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="240.0" x2="715.0" y2="240.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="200.0" x2="715.0" y2="200.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="160.0" x2="715.0" y2="160.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="120.0" x2="715.0" y2="120.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="80.0" x2="715.0" y2="80.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="280.0" x2="735" y2="280.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="65.0" y1="415" x2="65.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="298.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="47.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="173.3" y1="276.0" x2="173.3" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="173.3" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="281.7" y1="276.0" x2="281.7" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="281.7" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="390.0" y1="276.0" x2="390.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="498.3" y1="276.0" x2="498.3" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="498.3" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="606.7" y1="276.0" x2="606.7" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="606.7" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="61.0" y1="400.0" x2="69.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="61.0" y1="360.0" x2="69.0" y2="360.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="364.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="61.0" y1="320.0" x2="69.0" y2="320.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="324.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="61.0" y1="240.0" x2="69.0" y2="240.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="244.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="61.0" y1="200.0" x2="69.0" y2="200.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="204.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="61.0" y1="160.0" x2="69.0" y2="160.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="164.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="61.0" y1="120.0" x2="69.0" y2="120.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="124.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="61.0" y1="80.0" x2="69.0" y2="80.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="84.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><text x="55.0" y="295.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="65.0" y1="400.0" x2="65.0" y2="40.0" stroke="#2d70b3" stroke-width="1.8" stroke-dasharray="5 5"/>
    <line x1="65.0" y1="280.0" x2="715.0" y2="40.0" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 104.8 483.2 L 106.6 463.5 L 108.5 445.9 L 110.3 430.0 L 112.1 415.5 L 114.0 402.4 L 115.8 390.4 L 117.6 379.4 L 119.5 369.3 L 121.3 359.9 L 123.1 351.3 L 125.0 343.3 L 126.8 335.9 L 128.6 329.0 L 130.5 322.5 L 132.3 316.4 L 134.1 310.8 L 136.0 305.5 L 137.8 300.4 L 139.6 295.7 L 141.5 291.3 L 143.3 287.0 L 145.1 283.0 L 147.0 279.2 L 148.8 275.6 L 150.6 272.2 L 152.5 268.9 L 154.3 265.8 L 156.1 262.8 L 158.0 260.0 L 159.8 257.2 L 161.6 254.6 L 163.5 252.1 L 165.3 249.6 L 167.1 247.3 L 169.0 245.1 L 170.8 242.9 L 172.6 240.8 L 174.4 238.8 L 176.3 236.8 L 178.1 234.9 L 179.9 233.1 L 181.8 231.3 L 183.6 229.6 L 185.4 227.9 L 187.3 226.3 L 189.1 224.7 L 190.9 223.1 L 192.8 221.6 L 194.6 220.2 L 196.4 218.7 L 198.3 217.3 L 200.1 216.0 L 201.9 214.6 L 203.8 213.3 L 205.6 212.0 L 207.4 210.8 L 209.3 209.5 L 211.1 208.3 L 212.9 207.1 L 214.8 206.0 L 216.6 204.8 L 218.4 203.7 L 220.3 202.6 L 222.1 201.5 L 223.9 200.4 L 225.8 199.4 L 227.6 198.3 L 229.4 197.3 L 231.3 196.3 L 233.1 195.3 L 234.9 194.3 L 236.7 193.3 L 238.6 192.4 L 240.4 191.4 L 242.2 190.5 L 244.1 189.6 L 245.9 188.6 L 247.7 187.7 L 249.6 186.8 L 251.4 185.9 L 253.2 185.1 L 255.1 184.2 L 256.9 183.3 L 258.7 182.5 L 260.6 181.6 L 262.4 180.8 L 264.2 179.9 L 266.1 179.1 L 267.9 178.3 L 269.7 177.5 L 271.6 176.7 L 273.4 175.8 L 275.2 175.0 L 277.1 174.3 L 278.9 173.5 L 280.7 172.7 L 282.6 171.9 L 284.4 171.1 L 286.2 170.3 L 288.1 169.6 L 289.9 168.8 L 291.7 168.1 L 293.6 167.3 L 295.4 166.6 L 297.2 165.8 L 299.0 165.1 L 300.9 164.3 L 302.7 163.6 L 304.5 162.8 L 306.4 162.1 L 308.2 161.4 L 310.0 160.7 L 311.9 159.9 L 313.7 159.2 L 315.5 158.5 L 317.4 157.8 L 319.2 157.1 L 321.0 156.3 L 322.9 155.6 L 324.7 154.9 L 326.5 154.2 L 328.4 153.5 L 330.2 152.8 L 332.0 152.1 L 333.9 151.4 L 335.7 150.7 L 337.5 150.0 L 339.4 149.3 L 341.2 148.7 L 343.0 148.0 L 344.9 147.3 L 346.7 146.6 L 348.5 145.9 L 350.4 145.2 L 352.2 144.5 L 354.0 143.9 L 355.9 143.2 L 357.7 142.5 L 359.5 141.8 L 361.4 141.1 L 363.2 140.5 L 365.0 139.8 L 366.8 139.1 L 368.7 138.5 L 370.5 137.8 L 372.3 137.1 L 374.2 136.4 L 376.0 135.8 L 377.8 135.1 L 379.7 134.4 L 381.5 133.8 L 383.3 133.1 L 385.2 132.4 L 387.0 131.8 L 388.8 131.1 L 390.7 130.5 L 392.5 129.8 L 394.3 129.1 L 396.2 128.5 L 398.0 127.8 L 399.8 127.2 L 401.7 126.5 L 403.5 125.8 L 405.3 125.2 L 407.2 124.5 L 409.0 123.9 L 410.8 123.2 L 412.7 122.6 L 414.5 121.9 L 416.3 121.3 L 418.2 120.6 L 420.0 120.0 L 421.8 119.3 L 423.7 118.6 L 425.5 118.0 L 427.3 117.3 L 429.1 116.7 L 431.0 116.0 L 432.8 115.4 L 434.6 114.7 L 436.5 114.1 L 438.3 113.4 L 440.1 112.8 L 442.0 112.1 L 443.8 111.5 L 445.6 110.8 L 447.5 110.2 L 449.3 109.5 L 451.1 108.9 L 453.0 108.3 L 454.8 107.6 L 456.6 107.0 L 458.5 106.3 L 460.3 105.7 L 462.1 105.0 L 464.0 104.4 L 465.8 103.7 L 467.6 103.1 L 469.5 102.4 L 471.3 101.8 L 473.1 101.1 L 475.0 100.5 L 476.8 99.9 L 478.6 99.2 L 480.5 98.6 L 482.3 97.9 L 484.1 97.3 L 486.0 96.6 L 487.8 96.0 L 489.6 95.3 L 491.4 94.7 L 493.3 94.0 L 495.1 93.4 L 496.9 92.8 L 498.8 92.1 L 500.6 91.5 L 502.4 90.8 L 504.3 90.2 L 506.1 89.5 L 507.9 88.9 L 509.8 88.3 L 511.6 87.6 L 513.4 87.0 L 515.3 86.3 L 517.1 85.7 L 518.9 85.0 L 520.8 84.4 L 522.6 83.8 L 524.4 83.1 L 526.3 82.5 L 528.1 81.8 L 529.9 81.2 L 531.8 80.5 L 533.6 79.9 L 535.4 79.3 L 537.3 78.6 L 539.1 78.0 L 540.9 77.3 L 542.8 76.7 L 544.6 76.0 L 546.4 75.4 L 548.3 74.8 L 550.1 74.1 L 551.9 73.5 L 553.8 72.8 L 555.6 72.2 L 557.4 71.5 L 559.2 70.9 L 561.1 70.3 L 562.9 69.6 L 564.7 69.0 L 566.6 68.3 L 568.4 67.7 L 570.2 67.0 L 572.1 66.4 L 573.9 65.7 L 575.7 65.1 L 577.6 64.5 L 579.4 63.8 L 581.2 63.2 L 583.1 62.5 L 584.9 61.9 L 586.7 61.2 L 588.6 60.6 L 590.4 60.0 L 592.2 59.3 L 594.1 58.7 L 595.9 58.0 L 597.7 57.4 L 599.6 56.7 L 601.4 56.1 L 603.2 55.5 L 605.1 54.8 L 606.9 54.2 L 608.7 53.5 L 610.6 52.9 L 612.4 52.2 L 614.2 51.6 L 616.1 51.0 L 617.9 50.3 L 619.7 49.7 L 621.5 49.0 L 623.4 48.4 L 625.2 47.7 L 627.0 47.1 L 628.9 46.4 L 630.7 45.8 L 632.5 45.2 L 634.4 44.5 L 636.2 43.9 L 638.0 43.2 L 639.9 42.6 L 641.7 41.9 L 643.5 41.3 L 645.4 40.6 L 647.2 40.0 L 649.0 39.4 L 650.9 38.7 L 652.7 38.1 L 654.5 37.4 L 656.4 36.8 L 658.2 36.1 L 660.0 35.5 L 661.9 34.8 L 663.7 34.2 L 665.5 33.6 L 667.4 32.9 L 669.2 32.3 L 671.0 31.6 L 672.9 31.0 L 674.7 30.3 L 676.5 29.7 L 678.4 29.0 L 680.2 28.4 L 682.0 27.7 L 683.8 27.1 L 685.7 26.5 L 687.5 25.8 L 689.3 25.2 L 691.2 24.5 L 693.0 23.9 L 694.8 23.2 L 696.7 22.6 L 698.5 21.9 L 700.3 21.3 L 702.2 20.6 L 704.0 20.0 L 705.8 19.3 L 707.7 18.7 L 709.5 18.1 L 711.3 17.4 L 713.2 16.8 L 715.0 16.1" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="173.3" cy="240.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(183.3, 255.0)">
      <text x="78.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(1 ; 1) intersection</text>
    </g>
    <circle cx="130.0" cy="280.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(140.0, 268.0)">
      <text x="36.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">α ≈ 0,60</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote verticale x = 0</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (D) : y = x</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>7°) Aire S</strong></p>
<p>Sur \\([1;e]\\), \\(f(x)-x = \\dfrac{2\\ln x}{x}\\geq0\\).</p>
<p>\\(S = 4\\int_1^e\\dfrac{2\\ln x}{x}\\,dx = 4\\int_1^e 2\\cdot\\dfrac{(\\ln x)^2}{2}\\Big|\\,d(\\ln x) = 4[(\\ln x)^2]_1^e = 4\\times1 = 4\\text{ cm}^2\\)</p>
<p>Plus précisément : posons \\(u=\\ln x\\), \\(du = \\dfrac{dx}{x}\\) :</p>
<p>\\(\\int_1^e\\dfrac{2\\ln x}{x}dx = \\int_0^1 2u\\,du = [u^2]_0^1 = 1\\)</p>
<p>\\[\\boxed{S = 4\\text{ cm}^2}\\]</p>

<p><strong>Partie C</strong></p>
<p>\\(x = e^t \\Rightarrow t = \\ln x\\). \\(y = e^t+2te^{-t} = x + 2\\ln x\\cdot e^{-\\ln x} = x+\\dfrac{2\\ln x}{x} = f(x)\\).</p>
<p>Pour \\(t\\geq0\\) : \\(x = e^t\\geq1\\).</p>
<p> (Γ) est la partie de (C) correspondant à \\(x\\geq1\\).</p>

`
    }
  ]
},

{
  id: 'bac-2007-D-juillet-2nd',
  year: 2007,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2007 / 2nd tour',
  topics: ['Géométrie dans l\'espace', 'Probabilités', 'Équations différentielles', 'Fonction exponentielle & Intégrales'],
  parts: [
    {
      label: 'Exercice I — Géométrie dans l\'espace : tétraèdre et parallélogramme (4 pts)',
      problem: `<p>Dans l'espace muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j};\\vec{k})\\), on considère \\(A(1;0;0)\\), \\(B(0;2;0)\\) et \\(C(0;0;3)\\).</p>
<p><strong>1)</strong> Calculer les coordonnées de \\(\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\). Soit I le point \\((1;2;3)\\).</p>
<p><strong>2)</strong> Calculer la distance de I au plan (ABC). A, B, C et I sont-ils coplanaires ?</p>
<p><strong>3) a)</strong> Calculer l'aire \\(\\mathcal{A}_1\\) du triangle ABC (en u.a.).</p>
<p><strong>b)</strong> Déterminer le volume V de la pyramide de sommet I et de base ABC (en u.v.).</p>
<p><strong>4)</strong> Soit D le point de coordonnées \\((1;-2;3)\\).</p>
<p><strong>a)</strong> Quelle est la nature du quadrilatère ABCD ?</p>
<p><strong>b)</strong> Calculer l'aire \\(\\mathcal{A}_2\\) du quadrilatère ABCD.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie dans l'espace</span>
  <ul>
    <li><strong>Vecteurs coplanaires :</strong> $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, $\\overrightarrow{AD}$ sont coplanaires $\\iff$ le déterminant (scalaire triple) est nul.</li>
    <li><strong>Produit scalaire :</strong> $\\overrightarrow{u} \\cdot \\overrightarrow{v} = \\|\\overrightarrow{u}\\| \\cdot \\|\\overrightarrow{v}\\|\\cos\\theta$. Perpendicularité $\\iff$ produit scalaire nul.</li>
    <li><strong>Équation d'un plan :</strong> $ax + by + cz + d = 0$ où $(a,b,c)$ est un vecteur normal au plan.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1) Produit vectoriel</strong></p>
<p>\\(\\overrightarrow{AB} = (-1;2;0)\\) et \\(\\overrightarrow{AC} = (-1;0;3)\\).</p>
<p>\\[\\overrightarrow{AB}\\wedge\\overrightarrow{AC} = \\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\-1&2&0\\\\-1&0&3\\end{vmatrix} = (6;3;2)\\]</p>

<p><strong>2) Distance de I au plan (ABC)</strong></p>
<p>\\(\\overrightarrow{IA} = (0;-2;-3)\\).</p>
<p>\\(d(I;(ABC)) = \\dfrac{|(\\overrightarrow{AB}\\wedge\\overrightarrow{AC})\\cdot\\overrightarrow{IA}|}{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|} = \\dfrac{|0-6-6|}{\\sqrt{36+9+4}} = \\dfrac{12}{7}\\)</p>
<p>\\(d\\neq0\\) → A, B, C, I <strong>ne sont pas coplanaires</strong>.</p>

<p><strong>3a)</strong> \\(\\mathcal{A}_1 = \\dfrac{\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|}{2} = \\dfrac{7}{2}\\) u.a.</p>

<p><strong>3b)</strong> \\(V = \\dfrac{1}{3}\\times\\mathcal{A}_1\\times d = \\dfrac{1}{3}\\times\\dfrac{7}{2}\\times\\dfrac{12}{7} = 2\\) u.v.</p>

<p><strong>4a) Nature de ABCD</strong></p>
<p>\\(\\overrightarrow{AB} = (-1;2;0)\\) et \\(\\overrightarrow{DC} = (0-1;0-(-2);3-3) = (-1;2;0)\\).</p>
<p>\\(\\overrightarrow{AB} = \\overrightarrow{DC}\\) →  ABCD est un <strong>parallélogramme</strong>.</p>

<p><strong>4b)</strong> \\(\\mathcal{A}_2 = 2\\mathcal{A}_1 = 7\\) u.a.</p>`
    },
    {
      label: 'Exercice II — Probabilités : pièce de monnaie & tee-shirts (4 pts)',
      problem: `<p>On lance trois fois une pièce de monnaie. Un garçon est désigné à chaque pile, une fille à chaque face. On note M : « le groupe est mixte » et \\(\\bar{M}\\) son complémentaire.</p>
<p><strong>1)</strong> Calculer \\(P(M)\\) et \\(P(\\bar{M})\\).</p>
<p><strong>2)</strong> Chaque fille reçoit 3 tee-shirts. Soit X la variable aléatoire égale au nombre de tee-shirts reçus.</p>
<p><strong>a)</strong> Quelles sont les valeurs prises par X ?</p>
<p><strong>b)</strong> Déterminer la loi de probabilité de X.</p>
<p><strong>c)</strong> Déterminer la fonction de répartition F de X.</p>
<p><strong>d)</strong> Calculer l'espérance mathématique E(X).</p>
<p><strong>3)</strong> Les tee-shirts sont répartis équitablement aux 3 membres. Quelle est la probabilité que chaque membre reparte avec au moins 2 tee-shirts ?</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Probabilités &amp ; événements</span>
  <ul>
    <li><strong>Probabilité totale :</strong> $P(A) = P(A|B)P(B) + P(A|\\bar{B})P(\\bar{B})$ (partition de l'univers).</li>
    <li><strong>Indépendance :</strong> $A$ et $B$ indépendants $\\iff P(A \\cap B) = P(A) \\cdot P(B)$.</li>
    <li><strong>Loi binomiale :</strong> Répétition de $n$ épreuves indépendantes de Bernoulli avec succès de probabilité $p$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1)</strong></p>
<p>\\(\\bar{M}\\) = groupe non mixte = \\(\\{(P,P,P);(F,F,F)\\}\\) :</p>
<p>\\(P(\\bar{M}) = \\left(\\dfrac{1}{2}\\right)^3+\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{2}{8} = \\dfrac{1}{4}\\)</p>
<p>\\[\\boxed{P(\\bar{M}) = \\dfrac{1}{4} \\quad P(M) = \\dfrac{3}{4}}\\]</p>

<p><strong>2a)</strong> Nombre de filles ∈ {0,1,2,3}, tee-shirts = 3×(nb filles) :</p>
<p>\\(X \\in \\{0;3;6;9\\}\\)</p>

<p><strong>2b) Loi de X</strong> (loi binomiale \\(B\\left(3;\\dfrac{1}{2}\\right)\\) pour le nombre de filles) :</p>
<table class="vtab">
  <tr>
    <th>x</th>
    <td>0</td><td>3</td><td>6</td><td>9</td>
  </tr>
  <tr>
    <th>P(X=x)</th>
    <td>\\(\\dfrac{1}{8}\\)</td><td>\\(\\dfrac{3}{8}\\)</td><td>\\(\\dfrac{3}{8}\\)</td><td>\\(\\dfrac{1}{8}\\)</td>
  </tr>
</table>

<p><strong>2c) Fonction de répartition</strong></p>
<p>\\(F(x) = 0\\) si \\(x<0\\) ; \\(\\dfrac{1}{8}\\) si \\(0\\leq x<3\\) ; \\(\\dfrac{4}{8}\\) si \\(3\\leq x<6\\) ; \\(\\dfrac{7}{8}\\) si \\(6\\leq x<9\\) ; \\(1\\) si \\(x\\geq9\\).</p>

<p><strong>2d) Espérance</strong></p>
<p>\\(E(X) = 0\\cdot\\dfrac{1}{8}+3\\cdot\\dfrac{3}{8}+6\\cdot\\dfrac{3}{8}+9\\cdot\\dfrac{1}{8} = \\dfrac{9+18+9}{8} = \\dfrac{36}{8} = \\dfrac{9}{2}\\)</p>

<p><strong>3)</strong> Chaque membre repart avec \\(X/3\\) tee-shirts. \\(X/3\\geq2 \\iff X\\geq6\\) :</p>
<p>\\(P(X\\geq6) = P(X=6)+P(X=9) = \\dfrac{3}{8}+\\dfrac{1}{8} = \\dfrac{1}{2}\\)</p>`
    },
    {
      label: "Problème — EDO y'+y=x−1 et f(x)=exp(−x)+x−2, intégrales (12 pts)",
      problem: `<p><strong>Partie A — Équation différentielle</strong></p>
<p>Soit \\((E): y'+y = x-1\\).</p>
<p><strong>1)</strong> Trouver \\(a\\) et \\(b\\) tels que \\(U(x) = ax+b\\) soit solution de (E).</p>
<p><strong>2)</strong> Montrer que V est solution de (E) \\(\\iff\\) \\(V-U\\) est solution de \\((E'): y'+y=0\\).</p>
<p><strong>3)</strong> Résoudre (E').</p>
<p><strong>4)</strong> En déduire les solutions de (E).</p>
<p><strong>5)</strong> Déterminer la solution h de (E) vérifiant \\(h(0) = 1\\).</p>

<p><strong>Partie B — Étude de f</strong></p>
<p>Soit \\(f(x) = e^{-x}+x-2\\) dans \\((O;\\vec{i};\\vec{j})\\), unité 1 cm.</p>
<p><strong>1)</strong> Calculer les limites de f en \\(\\pm\\infty\\).</p>
<p><strong>2)</strong> Sens de variation et tableau.</p>
<p><strong>3°) a)</strong> Montrer que \\(y=x-2\\) est asymptote à \\((C_f)\\) en \\(+\\infty\\). Position relative.</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x}\\) et interpréter.</p>
<p><strong>4)</strong> Montrer que \\(f(x)=0\\) admet deux solutions \\(\\alpha\\in[-1{,}2;-1{,}1]\\) et \\(\\beta\\in[1{,}8;1{,}9]\\).</p>
<p><strong>5)</strong> Construire \\((C_f)\\).</p>
<p><strong>6)</strong> Discuter graphiquement le nombre de solutions de \\(me^x-xe^x+2e^x-1=0\\) selon m.</p>

<p><strong>Partie C — Aire et volume</strong></p>
<p>Soit \\(\\Delta\\) la région délimitée par \\((C_f)\\), \\((D):y=x-2\\), \\(x=2\\) et \\(x=\\lambda>2\\).</p>
<p><strong>1) a)</strong> Calculer \\(A(\\lambda)\\) en cm².</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{\\lambda\\to+\\infty}A(\\lambda)\\).</p>
<p><strong>2)</strong> Volume du solide de révolution de la région délimitée par \\((C_f)\\), \\((Ox)\\), \\(x=2\\) et \\(x=4\\) autour de \\((Ox)\\).</p>
<p><strong>a)</strong> Par IPP, calculer \\(I = \\displaystyle\\int_2^4(x-2)e^{-x}\\,dx\\).</p>
<p><strong>b)</strong> Calculer V en cm³.</p>
<p><em>On donne : \\(e^{1{,}2}\\approx3{,}32\\) ; \\(e^{1{,}1}\\approx3{,}00\\) ; \\(e^{-1{,}8}\\approx0{,}15\\) ; \\(e^{-2}\\approx0{,}14\\) ; \\(e^2\\approx7{,}39\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles du 1er ordre</span>
  <ul>
    <li><strong>$y' + ay = b$ :</strong> Solution générale = solution homogène + solution particulière. Solution homogène : $y_h = Ce^{-ax}$.</li>
    <li><strong>Solution particulière :</strong> Si le second membre est une constante $b$, chercher $y_p = b/a$ (constante).</li>
    <li><strong>$y' + ay = f(x)$ :</strong> Variation de la constante : $y = C(x) e^{-ax}$, puis $C'(x) = f(x)e^{ax}$.</li>
    <li><strong>Condition initiale :</strong> $y(x_0) = y_0$ permet de déterminer la constante $C$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°)</strong> \\(U'(x)+U(x) = a+(ax+b) = ax+(a+b) = x-1\\) → \\(a=1\\) et \\(a+b=-1\\) → \\(b=-2\\).</p>
<p>\\[\\boxed{U(x) = x-2}\\]</p>

<p><strong>2°)</strong> V solution de (E) \\(\\iff V'+V=x-1\\) et \\(U'+U=x-1\\) → \\((V-U)'+(V-U)=0\\) </p>

<p><strong>3°)</strong> \\((E'): y'=-y\\) → \\(\\boxed{y=ke^{-x}, k\\in\\mathbb{R}}\\)</p>

<p><strong>4°)</strong> \\(V = ke^{-x}+U\\) → \\(\\boxed{V(x) = ke^{-x}+x-2, \\ ; k\\in\\mathbb{R}}\\)</p>

<p><strong>5°)</strong> \\(h(0) = k+0-2 = 1 \\Rightarrow k=3\\) → \\(\\boxed{h(x) = 3e^{-x}+x-2}\\)</p>

<p><strong>Partie B</strong></p>

<p><strong>1°)</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = +\\infty+(-\\infty-2)\\). Terme dominant \\(e^{-x}\\to+\\infty\\) → \\(\\lim_{x\\to-\\infty}f(x) = +\\infty\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = 0+\\infty-2 = +\\infty\\).</p>

<p><strong>2°)</strong> \\(f'(x) = -e^{-x}+1\\). \\(f'(x)=0 \\iff x=0\\). \\(f'<0\\) sur \\(]-\\infty;0[\\), \\(f'>0\\) sur \\(]0;+\\infty[\\).</p>
<p>Minimum en \\(x=0\\) : \\(f(0) = 1+0-2 = -1\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2007-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2007-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    
    <text x="145" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <line x1="170" y1="135" x2="395" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2007-2-f)"/>
    <text x="425" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">−1</text>
    <line x1="455" y1="225" x2="685" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2007-2-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>3a) Asymptote y=x−2 en +∞</strong></p>
<p>\\(f(x)-(x-2) = e^{-x}\\to0\\) . De plus \\(e^{-x}>0\\) → (C) est <strong>toujours au-dessus</strong> de (D) sur \\(\\mathbb{R}\\).</p>

<p><strong>3b)</strong> \\(\\dfrac{f(x)}{x} = \\dfrac{e^{-x}}{x}+1-\\dfrac{2}{x}\\to-\\infty\\) quand \\(x\\to-\\infty\\).</p>
<p> (C) admet une <strong>branche parabolique de direction (Oy)</strong> en \\(-\\infty\\).</p>

<p><strong>4°)</strong></p>
<p>Sur \\(]-\\infty;0[\\), f décroissante de \\(+\\infty\\) vers \\(-1\\). Comme \\(f(-1{,}2) = e^{1{,}2}-3{,}2 \\approx 3{,}32-3{,}2=0{,}12>0\\) et \\(f(-1{,}1) = e^{1{,}1}-3{,}1\\approx3{,}00-3{,}1=-0{,}1<0\\) → \\(\\alpha\\in[-1{,}2;-1{,}1]\\). </p>
<p>Sur \\(]0;+\\infty[\\), f croissante de \\(-1\\) vers \\(+\\infty\\). \\(f(1{,}8)=e^{-1{,}8}-0{,}2\\approx0{,}15-0{,}2=-0{,}05<0\\) et \\(f(1{,}9)\\approx0{,}15+0{,}1>0\\) → \\(\\beta\\in[1{,}8;1{,}9]\\). </p>

<p><strong>5) Construction de la courbe \\((C_f)\\)</strong></p>
<p>La courbe \\((C_f)\\) admet pour asymptote oblique la droite \\((D): y = x - 2\\) en \\(+\\infty\\), une branche parabolique de direction \\((Oy)\\) en \\(-\\infty\\), et un minimum en \\((0 ; -1)\\) où la tangente est horizontale.</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2007 Tour 2 — Courbe (C_f) et Asymptote (D)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="146.2" y1="40.0" x2="146.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="227.5" y1="40.0" x2="227.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40.0" x2="390.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="471.2" y1="40.0" x2="471.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="552.5" y1="40.0" x2="552.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="633.8" y1="40.0" x2="633.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="348.6" x2="715.0" y2="348.6" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="245.7" x2="715.0" y2="245.7" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="194.3" x2="715.0" y2="194.3" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="142.9" x2="715.0" y2="142.9" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="91.4" x2="715.0" y2="91.4" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="297.1" x2="735" y2="297.1" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="308.8" y1="415" x2="308.8" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="315.1" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="290.8" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="293.1" x2="65.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="146.2" y1="293.1" x2="146.2" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="146.2" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="227.5" y1="293.1" x2="227.5" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="227.5" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="390.0" y1="293.1" x2="390.0" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="471.2" y1="293.1" x2="471.2" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="471.2" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="552.5" y1="293.1" x2="552.5" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="552.5" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="633.8" y1="293.1" x2="633.8" y2="301.1" stroke="#1f2937" stroke-width="1"/><text x="633.8" y="312.1" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="304.8" y1="400.0" x2="312.8" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="304.8" y1="348.6" x2="312.8" y2="348.6" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="352.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="304.8" y1="245.7" x2="312.8" y2="245.7" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="249.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="304.8" y1="194.3" x2="312.8" y2="194.3" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="198.3" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="304.8" y1="142.9" x2="312.8" y2="142.9" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="146.9" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="304.8" y1="91.4" x2="312.8" y2="91.4" stroke="#1f2937" stroke-width="1"/><text x="296.8" y="95.4" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><text x="298.8" y="312.1" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="227.5" y1="451.4" x2="715.0" y2="142.9" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 107.4 -85.8 L 109.1 -73.9 L 110.8 -62.3 L 112.6 -50.9 L 114.3 -39.8 L 116.1 -29.0 L 117.8 -18.4 L 119.6 -8.1 L 121.3 2.0 L 123.0 11.9 L 124.8 21.5 L 126.5 30.9 L 128.3 40.0 L 130.0 49.0 L 131.7 57.7 L 133.5 66.3 L 135.2 74.6 L 137.0 82.7 L 138.7 90.6 L 140.4 98.4 L 142.2 105.9 L 143.9 113.3 L 145.7 120.5 L 147.4 127.5 L 149.2 134.3 L 150.9 141.0 L 152.6 147.5 L 154.4 153.9 L 156.1 160.1 L 157.9 166.1 L 159.6 172.0 L 161.3 177.7 L 163.1 183.3 L 164.8 188.7 L 166.6 194.0 L 168.3 199.2 L 170.0 204.3 L 171.8 209.2 L 173.5 214.0 L 175.3 218.6 L 177.0 223.1 L 178.8 227.6 L 180.5 231.9 L 182.2 236.0 L 184.0 240.1 L 185.7 244.1 L 187.5 247.9 L 189.2 251.7 L 190.9 255.3 L 192.7 258.9 L 194.4 262.3 L 196.2 265.7 L 197.9 268.9 L 199.6 272.1 L 201.4 275.2 L 203.1 278.2 L 204.9 281.0 L 206.6 283.9 L 208.3 286.6 L 210.1 289.2 L 211.8 291.8 L 213.6 294.3 L 215.3 296.7 L 217.1 299.1 L 218.8 301.3 L 220.5 303.5 L 222.3 305.7 L 224.0 307.7 L 225.8 309.7 L 227.5 311.6 L 229.2 313.5 L 231.0 315.3 L 232.7 317.0 L 234.5 318.7 L 236.2 320.3 L 237.9 321.9 L 239.7 323.4 L 241.4 324.8 L 243.2 326.2 L 244.9 327.6 L 246.7 328.9 L 248.4 330.1 L 250.1 331.3 L 251.9 332.4 L 253.6 333.5 L 255.4 334.6 L 257.1 335.6 L 258.8 336.5 L 260.6 337.4 L 262.3 338.3 L 264.1 339.1 L 265.8 339.9 L 267.5 340.7 L 269.3 341.4 L 271.0 342.1 L 272.8 342.7 L 274.5 343.3 L 276.2 343.8 L 278.0 344.4 L 279.7 344.9 L 281.5 345.3 L 283.2 345.7 L 285.0 346.1 L 286.7 346.5 L 288.4 346.8 L 290.2 347.1 L 291.9 347.4 L 293.7 347.6 L 295.4 347.8 L 297.1 348.0 L 298.9 348.2 L 300.6 348.3 L 302.4 348.4 L 304.1 348.5 L 305.8 348.5 L 307.6 348.6 L 309.3 348.6 L 311.1 348.6 L 312.8 348.5 L 314.6 348.4 L 316.3 348.4 L 318.0 348.2 L 319.8 348.1 L 321.5 348.0 L 323.3 347.8 L 325.0 347.6 L 326.7 347.4 L 328.5 347.2 L 330.2 346.9 L 332.0 346.7 L 333.7 346.4 L 335.4 346.1 L 337.2 345.8 L 338.9 345.4 L 340.7 345.1 L 342.4 344.7 L 344.2 344.3 L 345.9 343.9 L 347.6 343.5 L 349.4 343.1 L 351.1 342.7 L 352.9 342.2 L 354.6 341.7 L 356.3 341.2 L 358.1 340.8 L 359.8 340.2 L 361.6 339.7 L 363.3 339.2 L 365.0 338.6 L 366.8 338.1 L 368.5 337.5 L 370.3 336.9 L 372.0 336.4 L 373.8 335.7 L 375.5 335.1 L 377.2 334.5 L 379.0 333.9 L 380.7 333.2 L 382.5 332.6 L 384.2 331.9 L 385.9 331.3 L 387.7 330.6 L 389.4 329.9 L 391.2 329.2 L 392.9 328.5 L 394.6 327.8 L 396.4 327.0 L 398.1 326.3 L 399.9 325.6 L 401.6 324.8 L 403.3 324.1 L 405.1 323.3 L 406.8 322.5 L 408.6 321.8 L 410.3 321.0 L 412.1 320.2 L 413.8 319.4 L 415.5 318.6 L 417.3 317.8 L 419.0 317.0 L 420.8 316.1 L 422.5 315.3 L 424.2 314.5 L 426.0 313.6 L 427.7 312.8 L 429.5 312.0 L 431.2 311.1 L 432.9 310.2 L 434.7 309.4 L 436.4 308.5 L 438.2 307.6 L 439.9 306.7 L 441.7 305.9 L 443.4 305.0 L 445.1 304.1 L 446.9 303.2 L 448.6 302.3 L 450.4 301.4 L 452.1 300.5 L 453.8 299.5 L 455.6 298.6 L 457.3 297.7 L 459.1 296.8 L 460.8 295.8 L 462.5 294.9 L 464.3 294.0 L 466.0 293.0 L 467.8 292.1 L 469.5 291.1 L 471.2 290.2 L 473.0 289.2 L 474.7 288.3 L 476.5 287.3 L 478.2 286.3 L 480.0 285.4 L 481.7 284.4 L 483.4 283.4 L 485.2 282.5 L 486.9 281.5 L 488.7 280.5 L 490.4 279.5 L 492.1 278.5 L 493.9 277.5 L 495.6 276.6 L 497.4 275.6 L 499.1 274.6 L 500.8 273.6 L 502.6 272.6 L 504.3 271.6 L 506.1 270.6 L 507.8 269.6 L 509.6 268.6 L 511.3 267.5 L 513.0 266.5 L 514.8 265.5 L 516.5 264.5 L 518.3 263.5 L 520.0 262.5 L 521.7 261.4 L 523.5 260.4 L 525.2 259.4 L 527.0 258.4 L 528.7 257.3 L 530.4 256.3 L 532.2 255.3 L 533.9 254.3 L 535.7 253.2 L 537.4 252.2 L 539.2 251.1 L 540.9 250.1 L 542.6 249.1 L 544.4 248.0 L 546.1 247.0 L 547.9 245.9 L 549.6 244.9 L 551.3 243.9 L 553.1 242.8 L 554.8 241.8 L 556.6 240.7 L 558.3 239.7 L 560.0 238.6 L 561.8 237.6 L 563.5 236.5 L 565.3 235.4 L 567.0 234.4 L 568.8 233.3 L 570.5 232.3 L 572.2 231.2 L 574.0 230.2 L 575.7 229.1 L 577.5 228.0 L 579.2 227.0 L 580.9 225.9 L 582.7 224.8 L 584.4 223.8 L 586.2 222.7 L 587.9 221.6 L 589.6 220.6 L 591.4 219.5 L 593.1 218.4 L 594.9 217.4 L 596.6 216.3 L 598.3 215.2 L 600.1 214.2 L 601.8 213.1 L 603.6 212.0 L 605.3 210.9 L 607.1 209.9 L 608.8 208.8 L 610.5 207.7 L 612.3 206.7 L 614.0 205.6 L 615.8 204.5 L 617.5 203.4 L 619.2 202.3 L 621.0 201.3 L 622.7 200.2 L 624.5 199.1 L 626.2 198.0 L 627.9 196.9 L 629.7 195.9 L 631.4 194.8 L 633.2 193.7 L 634.9 192.6 L 636.7 191.5 L 638.4 190.5 L 640.1 189.4 L 641.9 188.3 L 643.6 187.2 L 645.4 186.1 L 647.1 185.0 L 648.8 184.0 L 650.6 182.9 L 652.3 181.8 L 654.1 180.7 L 655.8 179.6 L 657.5 178.5 L 659.3 177.4 L 661.0 176.3 L 662.8 175.3 L 664.5 174.2 L 666.2 173.1 L 668.0 172.0 L 669.7 170.9 L 671.5 169.8 L 673.2 168.7 L 675.0 167.6 L 676.7 166.5 L 678.4 165.5 L 680.2 164.4 L 681.9 163.3 L 683.7 162.2 L 685.4 161.1 L 687.1 160.0 L 688.9 158.9 L 690.6 157.8 L 692.4 156.7 L 694.1 155.6 L 695.8 154.5 L 697.6 153.4 L 699.3 152.4 L 701.1 151.3 L 702.8 150.2 L 704.6 149.1 L 706.3 148.0 L 708.0 146.9 L 709.8 145.8 L 711.5 144.7 L 713.3 143.6 L 715.0 142.5" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="308.8" cy="348.6" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(318.8, 363.6)">
      <text x="46.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (0 ; −1)</text>
    </g>
    <circle cx="215.3" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(150.3, 285.1)">
      <text x="43.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">α₁ ≈ −1,15</text>
    </g>
    <circle cx="458.2" cy="297.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(468.2, 285.1)">
      <text x="39.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">α₂ ≈ 1,84</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="52" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_f) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (D) : y = x − 2</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>6°) Discussion de \\(me^x-xe^x+2e^x-1=0\\)</strong></p>
<p>\\(e^x(m-x+2) = 1 \\iff m-x+2 = e^{-x} \\iff m = e^{-x}+x-2 = f(x)\\)</p>
<p>— \\(m<-1\\) : <strong>0 solution</strong></p>
<p>— \\(m=-1\\) : <strong>1 solution</strong> (\\(x=0\\))</p>
<p>— \\(m>-1\\) : <strong>2 solutions</strong></p>

<p><strong>Partie C</strong></p>

<p><strong>1a)</strong> Sur \\([2;\\lambda]\\) : \\(f(x)-(x-2) = e^{-x}>0\\).</p>
<p>\\(A(\\lambda) = \\int_2^\\lambda e^{-x}\\,dx = [-e^{-x}]_2^\\lambda = e^{-2}-e^{-\\lambda}\\) cm²</p>

<p><strong>1b)</strong> \\(\\lim_{\\lambda\\to+\\infty}A(\\lambda) = e^{-2}\\approx0{,}14\\) cm².</p>

<p><strong>2a) I par IPP</strong></p>
<p>\\(u=x-2\\), \\(v'=e^{-x}\\) → \\(u'=1\\), \\(v=-e^{-x}\\) :</p>
<p>\\(I = [-(x-2)e^{-x}]_2^4+\\int_2^4 e^{-x}dx = [-(x-1)e^{-x}]_2^4 = -3e^{-4}+e^{-2}\\)</p>
<p>\\[\\boxed{I = e^{-2}-3e^{-4}}\\]</p>

<p><strong>2b) Volume V</strong></p>
<p>\\(f(x) = e^{-x}+x-2\\), \\([f(x)]^2 = e^{-2x}+2(x-2)e^{-x}+(x-2)^2\\)</p>
<p>\\(V = \\pi\\int_2^4[f(x)]^2dx = \\pi\\left(\\left[-\\dfrac{e^{-2x}}{2}\\right]_2^4 + 2I + \\left[\\dfrac{(x-2)^3}{3}\\right]_2^4\\right)\\)</p>
<p>\\(= \\pi\\left(\\dfrac{e^{-4}-e^{-8}}{2}+2(e^{-2}-3e^{-4})+\\dfrac{8}{3}\\right)\\)</p>
<p>En approximant avec \\(e^{-2}\\approx0{,}14\\), \\(e^{-4}\\approx0{,}02\\) :</p>
<p>\\(V\\approx\\pi\\left(0{,}01+2(0{,}14-0{,}06)+2{,}67\\right) \\approx \\pi(0{,}01+0{,}16+2{,}67) \\approx 2{,}84\\pi \\approx 8{,}94\\text{ cm}^3\\)</p>
<p>\\[\\boxed{V\\approx8{,}94\\text{ cm}^3}\\]</p>

</div>
`
    }
  ]
},
{
  id: 'bac-2008-D-juillet-1er',
  year: 2008,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2008 / 1er tour',
  topics: ['Courbe paramétrique', 'Complexes & Transformations', 'Fonctions & asymptotes obliques', 'Bijection & Intégrale & Courbe paramétrique'],

  parts: [
    {
      label: 'Exercice I — Courbe paramétrique x(t)=exp(sin t), y(t)=cos t (4 pts)',
      problem: `<p>Dans le plan muni d'un repère orthonormal \\((O;\\vec{i};\\vec{j})\\), unité 2 cm, on considère la courbe (Γ) de représentation paramétrique :</p>
<p>\\[\\begin{cases}x(t) = e^{\\sin t} \\\\ y(t) = \\cos t\\end{cases}, \\quad t\\in\\mathbb{R}\\]</p>
<p><strong>1)</strong> Montrer que x et y sont périodiques de période \\(2\\pi\\).</p>
<p><strong>2) a)</strong> Comparer M(t) et M(\\(\\pi-t\\)).</p>
<p><strong>b)</strong> Montrer que pour \\(t\\in[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}]\\), \\((\\pi-t)\\in[\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}]\\), et en déduire que l'on peut restreindre l'étude à \\([-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}]\\).</p>
<p><strong>3)</strong> Étudier et dresser le tableau de variations conjoint de x et y sur \\([-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}]\\).</p>
<p><strong>4)</strong> Tracer la courbe (Γ).</p>
<p><em>On donne : \\(e\\approx2{,}72\\) ; \\(e^{-1}\\approx0{,}37\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Courbes paramétriques &amp ; tangentes</span>
  <ul>
    <li><strong>Dérivées :</strong> $x'(t) = \\cos(t)\\,e^{\\sin t}$, $y'(t) = -\\sin t$.</li>
    <li><strong>Tangente en $M(t_0)$ :</strong> Vecteur directeur $(x'(t_0), y'(t_0))$. Horizontale si $y'=0$, verticale si $x'=0$.</li>
    <li><strong>Point singulier :</strong> $x'(t_0)=y'(t_0)=0$ — analyser la nature du point (rebroussement, etc.).</li>
    <li><strong>Symétrie :</strong> Si $(x(t), y(t)) = (x(-t), -y(-t))$, la courbe est symétrique par rapport à l'axe $Ox$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) Périodicité</strong></p>
<p>\\(\\sin(t+2\\pi)=\\sin t\\) et \\(\\cos(t+2\\pi)=\\cos t\\), donc \\(x(t+2\\pi)=x(t)\\) et \\(y(t+2\\pi)=y(t)\\).  x et y sont périodiques de période \\(2\\pi\\).</p>

<p><strong>2a) Comparaison M(t) et M(π−t)</strong></p>
<p>\\(x(\\pi-t) = e^{\\sin(\\pi-t)} = e^{\\sin t} = x(t)\\) et \\(y(\\pi-t) = \\cos(\\pi-t) = -\\cos t = -y(t)\\).</p>
<p> M(π−t) est le <strong>symétrique de M(t) par rapport à l'axe (Ox)</strong>.</p>

<p><strong>2b)</strong></p>
<p>\\(t\\in[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}] \\Rightarrow -t\\in[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}] \\Rightarrow \\pi-t\\in[\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}]\\) </p>
<p>La partie \\([\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}]\\) s'obtient par symétrie axiale selon (Ox) → il suffit d'étudier \\([-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}]\\).</p>

<p><strong>3°) Tableau de variations</strong></p>
<p>\\(x'(t) = \\cos t\\cdot e^{\\sin t}\\). Sur \\([-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}]\\) : \\(\\cos t\\geq0\\) et \\(e^{\\sin t}>0\\) → \\(x'(t)\\geq0\\) → x est <strong>croissante</strong>.</p>
<p>\\(y'(t) = -\\sin t\\). \\(y'>0\\) sur \\([-\\dfrac{\\pi}{2};0]\\) (y croissante), \\(y'<0\\) sur \\([0;\\dfrac{\\pi}{2}]\\) (y décroissante).</p>
<p>Points clés : \\(M(-\\dfrac{\\pi}{2}) = (e^{-1};0)\\approx(0{,}37;0)\\), \\(M(0)=(1;1)\\) (max de y), \\(M(\\dfrac{\\pi}{2})=(e;0)\\approx(2{,}72;0)\\).</p>

<div class="tv-wrap diagram-wrap" style="margin:20px 0;overflow-x:auto;-webkit-overflow-scrolling:touch;">
  <svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;margin:0 auto;">
    <defs>
      <marker id="arr-g-tv-2008-conj" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2008-conj" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    
    <!-- Fond blanc avec bordure arrondie standard -->
    <rect x="1" y="1" width="758" height="328" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    
    <!-- Colonne latérale d'en-têtes (Standard Navy #222d46) -->
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 329 L 10 329 C 5 329 1 325 1 320 Z" fill="#222d46"/>
    <line x1="95" y1="0" x2="95" y2="330" stroke="#dde1ec" stroke-width="1.5"/>
    
    <!-- Lignes de séparation horizontales -->
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="185" x2="760" y2="185" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="0" y1="230" x2="760" y2="230" stroke="#dde1ec" stroke-width="1.5"/>
    
    <!-- Traits verticaux de guidage (colonne intermédiaire t = 0 à x = 420) -->
    <line x1="420" y1="45" x2="420" y2="58" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="420" y1="78" x2="420" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="420" y1="90" x2="420" y2="125" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="420" y1="150" x2="420" y2="185" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="420" y1="185" x2="420" y2="198" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="420" y1="218" x2="420" y2="230" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="420" y1="262" x2="420" y2="328" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>

    <!-- Titres des lignes (Texte blanc standard) -->
    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="137" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14.5" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="208" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="280" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14.5" font-weight="800" font-style="italic">y(t)</text>
    
    <!-- Valeurs de t -->
    <text x="170" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−π/2</text>
    <text x="420" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="670" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/2</text>
    
    <!-- ── Ligne x'(t) ── -->
    <text x="170" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="295" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="420" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="700">1</text>
    <text x="545" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="670" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    
    <!-- ── Ligne x(t) ── -->
    <text x="170" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14.5" font-weight="900">e⁻¹ ≈ 0,37</text>
    <!-- Flèche montante e^-1 -> 1 puis 1 -> e avec le 1 sous t=0 -->
    <line x1="220" y1="160" x2="395" y2="142" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round"/>
    <text x="420" y="137" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">1</text>
    <line x1="445" y1="134" x2="615" y2="115" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2008-conj)"/>
    <text x="670" y="112" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14.5" font-weight="900">e ≈ 2,72</text>
    
    <!-- ── Ligne y'(t) ── -->
    <text x="295" y="208" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="420" y="208" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="545" y="208" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    
    <!-- ── Ligne y(t) ── -->
    <text x="170" y="305" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="195" y1="300" x2="395" y2="254" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2008-conj)"/>
    <text x="420" y="250" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <line x1="445" y1="254" x2="645" y2="300" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2008-conj)"/>
    <text x="670" y="305" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>4) Tracé de la courbe paramétrique \\((\\Gamma)\\)</strong></p>
<p>On trace l'arc correspondant à \\(t\\in[0;\\pi]\\), puis on applique la symétrie axiale orthogonale par rapport à l'axe des abscisses \\((Ox)\\) pour obtenir la courbe complète.</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2008 Tour 1 Ex I — Courbe paramétrique (Γ)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="250.7" y1="40.0" x2="250.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="436.4" y1="40.0" x2="436.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="622.1" y1="40.0" x2="622.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="340.0" x2="715.0" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="100.0" x2="715.0" y2="100.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="220.0" x2="735" y2="220.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="65.0" y1="415" x2="65.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="238.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="47.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="250.7" y1="216.0" x2="250.7" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="250.7" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="436.4" y1="216.0" x2="436.4" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="436.4" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="622.1" y1="216.0" x2="622.1" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="622.1" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="61.0" y1="340.0" x2="69.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="61.0" y1="100.0" x2="69.0" y2="100.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="104.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><text x="55.0" y="235.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Courbes -->
    <path d="M 133.3 220.0 L 133.3 217.8 L 133.4 215.7 L 133.4 213.5 L 133.5 211.4 L 133.6 209.2 L 133.7 207.1 L 133.9 205.0 L 134.0 202.8 L 134.2 200.7 L 134.4 198.6 L 134.7 196.5 L 134.9 194.3 L 135.2 192.2 L 135.5 190.2 L 135.8 188.1 L 136.2 186.0 L 136.6 183.9 L 136.9 181.9 L 137.4 179.9 L 137.8 177.8 L 138.3 175.8 L 138.8 173.8 L 139.3 171.8 L 139.9 169.9 L 140.4 167.9 L 141.0 166.0 L 141.7 164.1 L 142.3 162.2 L 143.0 160.3 L 143.7 158.5 L 144.4 156.6 L 145.2 154.8 L 146.0 153.0 L 146.8 151.2 L 147.7 149.5 L 148.6 147.7 L 149.5 146.0 L 150.5 144.3 L 151.4 142.7 L 152.5 141.0 L 153.5 139.4 L 154.6 137.9 L 155.7 136.3 L 156.9 134.8 L 158.1 133.3 L 159.3 131.8 L 160.5 130.3 L 161.8 128.9 L 163.2 127.5 L 164.6 126.2 L 166.0 124.9 L 167.4 123.6 L 168.9 122.3 L 170.5 121.1 L 172.1 119.9 L 173.7 118.7 L 175.3 117.5 L 177.1 116.4 L 178.8 115.4 L 180.6 114.3 L 182.5 113.3 L 184.4 112.4 L 186.3 111.4 L 188.3 110.5 L 190.4 109.7 L 192.5 108.8 L 194.6 108.0 L 196.8 107.3 L 199.0 106.6 L 201.3 105.9 L 203.7 105.2 L 206.1 104.6 L 208.6 104.0 L 211.1 103.5 L 213.7 103.0 L 216.3 102.5 L 219.0 102.1 L 221.7 101.7 L 224.5 101.4 L 227.4 101.1 L 230.3 100.8 L 233.3 100.6 L 236.3 100.4 L 239.4 100.2 L 242.6 100.1 L 245.8 100.0 L 249.1 100.0 L 252.4 100.0 L 255.8 100.0 L 259.2 100.1 L 262.7 100.2 L 266.3 100.4 L 270.0 100.6 L 273.6 100.8 L 277.4 101.1 L 281.2 101.4 L 285.1 101.7 L 289.0 102.1 L 293.0 102.5 L 297.0 103.0 L 301.1 103.5 L 305.2 104.0 L 309.4 104.6 L 313.7 105.2 L 318.0 105.9 L 322.3 106.6 L 326.7 107.3 L 331.1 108.0 L 335.6 108.8 L 340.1 109.7 L 344.7 110.5 L 349.3 111.4 L 353.9 112.4 L 358.6 113.3 L 363.3 114.3 L 368.0 115.4 L 372.8 116.4 L 377.6 117.5 L 382.4 118.7 L 387.2 119.9 L 392.0 121.1 L 396.9 122.3 L 401.7 123.6 L 406.6 124.9 L 411.4 126.2 L 416.3 127.5 L 421.2 128.9 L 426.0 130.3 L 430.8 131.8 L 435.7 133.3 L 440.5 134.8 L 445.2 136.3 L 450.0 137.9 L 454.7 139.4 L 459.4 141.0 L 464.0 142.7 L 468.6 144.3 L 473.1 146.0 L 477.6 147.7 L 482.1 149.5 L 486.4 151.2 L 490.7 153.0 L 495.0 154.8 L 499.1 156.6 L 503.2 158.5 L 507.2 160.3 L 511.1 162.2 L 514.9 164.1 L 518.6 166.0 L 522.2 167.9 L 525.7 169.9 L 529.1 171.8 L 532.4 173.8 L 535.6 175.8 L 538.6 177.8 L 541.6 179.9 L 544.4 181.9 L 547.0 183.9 L 549.6 186.0 L 552.0 188.1 L 554.2 190.2 L 556.3 192.2 L 558.3 194.3 L 560.1 196.5 L 561.8 198.6 L 563.3 200.7 L 564.7 202.8 L 565.9 205.0 L 566.9 207.1 L 567.8 209.2 L 568.5 211.4 L 569.1 213.5 L 569.5 215.7 L 569.7 217.8 L 569.8 220.0 L 569.7 222.2 L 569.5 224.3 L 569.1 226.5 L 568.5 228.6 L 567.8 230.8 L 566.9 232.9 L 565.9 235.0 L 564.7 237.2 L 563.3 239.3 L 561.8 241.4 L 560.1 243.5 L 558.3 245.7 L 556.3 247.8 L 554.2 249.8 L 552.0 251.9 L 549.6 254.0 L 547.0 256.1 L 544.4 258.1 L 541.6 260.1 L 538.6 262.2 L 535.6 264.2 L 532.4 266.2 L 529.1 268.2 L 525.7 270.1 L 522.2 272.1 L 518.6 274.0 L 514.9 275.9 L 511.1 277.8 L 507.2 279.7 L 503.2 281.5 L 499.1 283.4 L 495.0 285.2 L 490.7 287.0 L 486.4 288.8 L 482.1 290.5 L 477.6 292.3 L 473.1 294.0 L 468.6 295.7 L 464.0 297.3 L 459.4 299.0 L 454.7 300.6 L 450.0 302.1 L 445.2 303.7 L 440.5 305.2 L 435.7 306.7 L 430.8 308.2 L 426.0 309.7 L 421.2 311.1 L 416.3 312.5 L 411.4 313.8 L 406.6 315.1 L 401.7 316.4 L 396.9 317.7 L 392.0 318.9 L 387.2 320.1 L 382.4 321.3 L 377.6 322.5 L 372.8 323.6 L 368.0 324.6 L 363.3 325.7 L 358.6 326.7 L 353.9 327.6 L 349.3 328.6 L 344.7 329.5 L 340.1 330.3 L 335.6 331.2 L 331.1 332.0 L 326.7 332.7 L 322.3 333.4 L 318.0 334.1 L 313.7 334.8 L 309.4 335.4 L 305.2 336.0 L 301.1 336.5 L 297.0 337.0 L 293.0 337.5 L 289.0 337.9 L 285.1 338.3 L 281.2 338.6 L 277.4 338.9 L 273.6 339.2 L 270.0 339.4 L 266.3 339.6 L 262.7 339.8 L 259.2 339.9 L 255.8 340.0 L 252.4 340.0 L 249.1 340.0 L 245.8 340.0 L 242.6 339.9 L 239.4 339.8 L 236.3 339.6 L 233.3 339.4 L 230.3 339.2 L 227.4 338.9 L 224.5 338.6 L 221.7 338.3 L 219.0 337.9 L 216.3 337.5 L 213.7 337.0 L 211.1 336.5 L 208.6 336.0 L 206.1 335.4 L 203.7 334.8 L 201.3 334.1 L 199.0 333.4 L 196.8 332.7 L 194.6 332.0 L 192.5 331.2 L 190.4 330.3 L 188.3 329.5 L 186.3 328.6 L 184.4 327.6 L 182.5 326.7 L 180.6 325.7 L 178.8 324.6 L 177.1 323.6 L 175.3 322.5 L 173.7 321.3 L 172.1 320.1 L 170.5 318.9 L 168.9 317.7 L 167.4 316.4 L 166.0 315.1 L 164.6 313.8 L 163.2 312.5 L 161.8 311.1 L 160.5 309.7 L 159.3 308.2 L 158.1 306.7 L 156.9 305.2 L 155.7 303.7 L 154.6 302.1 L 153.5 300.6 L 152.5 299.0 L 151.4 297.3 L 150.5 295.7 L 149.5 294.0 L 148.6 292.3 L 147.7 290.5 L 146.8 288.8 L 146.0 287.0 L 145.2 285.2 L 144.4 283.4 L 143.7 281.5 L 143.0 279.7 L 142.3 277.8 L 141.7 275.9 L 141.0 274.0 L 140.4 272.1 L 139.9 270.1 L 139.3 268.2 L 138.8 266.2 L 138.3 264.2 L 137.8 262.2 L 137.4 260.1 L 136.9 258.1 L 136.6 256.1 L 136.2 254.0 L 135.8 251.9 L 135.5 249.8 L 135.2 247.8 L 134.9 245.7 L 134.7 243.5 L 134.4 241.4 L 134.2 239.3 L 134.0 237.2 L 133.9 235.0 L 133.7 232.9 L 133.6 230.8 L 133.5 228.6 L 133.4 226.5 L 133.4 224.3 L 133.3 222.2 L 133.3 220.0" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="133.3" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(143.3, 235.0)">
      <text x="71.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(−π/2) = (e⁻¹; 0)</text>
    </g>
    <circle cx="250.7" cy="100.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(260.7, 85.0)">
      <text x="53.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(0) = (1 ; 1)</text>
    </g>
    <circle cx="569.8" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(579.8, 235.0)">
      <text x="60.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π/2) = (e ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="34" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (Γ)</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>
<p>Tangentes : \\((T_{-\\dfrac{\\pi}{2}})\\) : verticale \\(x=e^{-1}\\) ; \\((T_0)\\) : horizontale \\(y=1\\) ; \\((T_{\\dfrac{\\pi}{2}})\\) : verticale \\(x=e\\).</p>
<p>La courbe est un arc allant de \\((e^{-1};0)\\) à \\((e;0)\\) en passant par le sommet \\((1;1)\\), symétrique par rapport à (Ox).</p>`
    },
    {
      label: 'Exercice II — Complexes : application Z\'=i(Z−Z_B)/(Z−Z_A), inversion (4 pts)',
      problem: `<p>Le plan complexe est rapporté à \\((O;\\vec{u};\\vec{v})\\), unité 1 cm. Soient \\(A\\) d'affixe \\(i\\) et \\(B\\) d'affixe \\(-4-2i\\). Pour \\(Z\\neq i\\) on pose :</p>
<p>\\[Z' = i\\dfrac{Z+4+2i}{Z-i} = i\\dfrac{Z-Z_B}{Z-Z_A}\\]</p>
<p><strong>1)</strong> Interprétation géométrique de l'argument et du module de \\(Z'\\).</p>
<p><strong>2)</strong> Déterminer et représenter l'ensemble E des points M d'affixe Z tels que \\(Z'\\) soit réel.</p>
<p><strong>3)</strong> On pose \\(Z_1 = Z-i\\) et \\(Z'_1 = Z'-i\\). Montrer que \\(Z_1 Z'_1 = -3+4i\\). Calculer \\(|Z_1 Z'_1|\\).</p>
<p><strong>4) a)</strong> Montrer que si M ∈ (C) cercle de centre A et de rayon r, alors M' ∈ un cercle (C') de centre A.</p>
<p><strong>b)</strong> Déterminer r pour que (C) = (C').</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Applications du plan complexe</span>
  <ul>
    <li><strong>Similitude :</strong> $f(z) = az + b$ ($a \\neq 0$) est une similitude de rapport $|a|$, d'angle $\\arg(a)$, de centre $z_0 = \\dfrac{b}{1-a}$.</li>
    <li><strong>Rotation :</strong> $f(z) = e^{i\\theta}(z - z_0) + z_0$ est une rotation de centre $z_0$ et d'angle $\\theta$.</li>
    <li><strong>Image d'un ensemble :</strong> Poser $Z = f(z)$ et exprimer $z$ en fonction de $Z$ pour trouver l'équation de l'image.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) Interprétation géométrique</strong></p>
<p>\\(Z' = i\\dfrac{Z-Z_B}{Z-Z_A}\\)</p>
<p>\\(|Z'| = |i|\\cdot\\dfrac{|Z-Z_B|}{|Z-Z_A|} = \\dfrac{MB}{MA}\\)</p>
<p>\\(\\arg(Z') = \\arg(i)+\\arg(Z-Z_B)-\\arg(Z-Z_A) = \\dfrac{\\pi}{2}+(\\overrightarrow{MA};\\overrightarrow{MB})\\)</p>

<p><strong>2°) Ensemble E : Z' réel</strong></p>
<p>\\(Z'\\in\\mathbb{R} \\iff \\arg(Z') = k\\pi \\iff (\\overrightarrow{MA};\\overrightarrow{MB}) = -\\dfrac{\\pi}{2}+k\\pi\\)</p>
<p> E est le <strong>cercle de diamètre [AB]</strong> privé des points A et B.</p>

<p><strong>3°)</strong></p>
<p>\\(Z_1 Z'_1 = (Z-i)(Z'-i) = (Z-i)\\left(i\\dfrac{Z+4+2i}{Z-i}-i\\right) = (Z-i)\\cdot i\\cdot\\dfrac{Z+4+2i-Z+i}{Z-i}\\)</p>
<p>\\(= i(4+3i) = 4i+3i^2 = -3+4i\\) </p>
<p>\\(|Z_1 Z'_1| = |-3+4i| = \\sqrt{9+16} = 5\\)</p>

<p><strong>4a)</strong></p>
<p>\\(M\\in(C) \\iff AM = r \\iff |Z_1| = r\\).</p>
<p>\\(|Z_1 Z'_1| = 5 \\iff |Z_1|\\cdot|Z'_1| = 5 \\iff r\\cdot AM' = 5 \\iff AM' = \\dfrac{5}{r}\\).</p>
<p>M' décrit un cercle \\((C')\\) de centre A et de rayon \\(r' = 5/r\\). </p>

<p><strong>4b)</strong></p>
<p>\\((C)=(C') \\iff r = r' = \\dfrac{5}{r} \\iff r^2 = 5 \\iff \\boxed{r = \\sqrt{5}}\\)</p>`
    },
    {
      label: 'Problème — f par morceaux : (x+2+4/(x−3)) et √(x²−3x+2), asymptotes obliques (12 pts)',
      problem: `<p>On considère la fonction f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases}x+2+\\dfrac{4}{x-3} & \\text{si } x\\leq2 \\\\ \\sqrt{x^2-3x+2} & \\text{si } x>2\\end{cases}\\]</p>
<p>Courbe (C) dans \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>

<p><strong>Partie A</strong></p>
<p><strong>1) a)</strong> Étudier la continuité de f en 2.</p>
<p><strong>b)</strong> Étudier la dérivabilité de f en 2. Interpréter graphiquement.</p>
<p><strong>2)</strong> Calculer les limites de f en \\(-\\infty\\) et \\(+\\infty\\).</p>
<p><strong>3) a)</strong> Montrer que \\((D_1): y=x+2\\) est asymptote à (C) en \\(-\\infty\\). Position relative.</p>
<p><strong>b)</strong> Montrer que \\((D_2): y=x-\\dfrac{3}{2}\\) est asymptote à (C) en \\(+\\infty\\). Position relative.</p>
<p><strong>4) a)</strong> Étudier les variations de f sur \\(]-\\infty;2]\\) et \\(]2;+\\infty[\\).</p>
<p><strong>b)</strong> Dresser le tableau de variation de f.</p>
<p><strong>5)</strong> Tracer \\((D_1)\\), \\((D_2)\\) et (C).</p>
<p><strong>6) a)</strong> Soit h la restriction de f à \\(]-\\infty;1]\\). Montrer que h réalise une bijection de \\(]-\\infty;1]\\) sur un intervalle J à préciser.</p>
<p><strong>b)</strong> Construire la courbe (Γ) de \\(h^{-1}\\).</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Calculer en cm² l'aire A du domaine limité par (C), \\((D_1)\\) et les droites \\(x=-3\\) et \\(x=0\\).</p>
<p><strong>2)</strong> Soit (Δ) le domaine plan défini par \\(-1\\leq x\\leq2\\) et \\(0\\leq y\\leq f(x)\\). Calculer en cm³ le volume V du solide engendré par la rotation complète de (Δ) autour de \\((Ox)\\).</p>
<p><em>(On remarquera que \\(\\dfrac{8}{x-3} + \\dfrac{16}{(x-3)^2} = \\left(\\dfrac{-8}{x-3}\\right)' + \\left(\\dfrac{-16}{x-3}\\right)'\\cdot(x-3)\\)).</em></p>

<p><strong>Partie C</strong></p>
<p>Soit (Γ) de représentation paramétrique \\(x(t) = t+3\\), \\(y(t) = \\sqrt{t^2-3t+2}\\), \\(t>-1\\). Montrer que (Γ) est une partie de (C).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions par morceaux &amp ; asymptotes obliques</span>
  <ul>
    <li><strong>Asymptote oblique $y = ax+b$ :</strong> $a = \\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x}$, $b = \\lim_{x\\to\\pm\\infty} (f(x) - ax)$.</li>
    <li><strong>Asymptote verticale en $x_0$ :</strong> $\\lim_{x\\to x_0} f(x) = \\pm\\infty$.</li>
    <li><strong>Continuité à une jonction :</strong> Les limites à gauche et à droite doivent être égales à la valeur de la fonction.</li>
    <li><strong>Dérivée de $\\sqrt{u}$ :</strong> $\\left(\\sqrt{u}\\right)' = \\dfrac{u'}{2\\sqrt{u}}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a) Continuité en 2</strong></p>
<p>\\(\\lim_{x\\to2^-}f(x) = 2+2+\\dfrac{4}{-1} = 0\\) ; \\(\\lim_{x\\to2^+}f(x) = \\sqrt{4-6+2}=0\\) ; \\(f(2)=0\\).  f est <strong>continue en 2</strong>.</p>

<p><strong>1b) Dérivabilité en 2</strong></p>
<p>À gauche : \\(f'_g(2) = \\lim_{x\\to2^-}\\dfrac{f(x)}{x-2} = \\lim_{x\\to2^-}\\dfrac{x^2-x-2}{(x-2)(x-3)} = \\lim_{x\\to2^-}\\dfrac{x+1}{x-3} = -3\\)</p>
<p>À droite : \\(\\lim_{x\\to2^+}\\dfrac{f(x)}{x-2} = \\lim_{x\\to2^+}\\sqrt{\\dfrac{x-1}{x-2}} = +\\infty\\)</p>
<p>f <strong>non dérivable en 2</strong> : point anguleux. Demi-tangente gauche de pente \\(-3\\), demi-tangente verticale à droite.</p>

<p><strong>2°) Limites</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = -\\infty\\) ; \\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\)</p>

<p><strong>3a) Asymptote \\((D_1):y=x+2\\) en −∞</strong></p>
<p>\\(f(x)-(x+2) = \\dfrac{4}{x-3}\\to0\\). </p>
<p>Pour \\(x<2\\) : \\(x-3<0\\) donc \\(\\dfrac{4}{x-3}<0\\) → (C) est <strong>en-dessous</strong> de \\((D_1)\\).</p>

<p><strong>3b) Asymptote \\((D_2):y=x-\\dfrac{3}{2}\\) en +∞</strong></p>
<p>\\(f(x)-(x-\\dfrac{3}{2}) = \\sqrt{x^2-3x+2}-(x-\\dfrac{3}{2}) = \\dfrac{x^2-3x+2-(x-\\dfrac{3}{2})^2}{\\sqrt{x^2-3x+2}+(x-\\dfrac{3}{2})}\\)</p>
<p>\\(= \\dfrac{x^2-3x+2-x^2+3x-\\dfrac{9}{4}}{\\sqrt{x^2-3x+2}+x-\\dfrac{3}{2}} = \\dfrac{-\\dfrac{1}{4}}{\\sqrt{x^2-3x+2}+x-\\dfrac{3}{2}}\\to0\\) </p>
<p>Ce résidu est négatif → (C) est <strong>en-dessous</strong> de \\((D_2)\\).</p>

<p><strong>4) Variations</strong></p>
<p>Sur \\(]-\\infty;2]\\) : \\(f'(x) = 1-\\dfrac{4}{(x-3)^2} = \\dfrac{(x-3)^2-4}{(x-3)^2} = \\dfrac{(x-5)(x-1)}{(x-3)^2}\\).</p>
<p>\\(f'>0\\) sur \\(]-\\infty;1[\\), \\(f'(1)=0\\), \\(f'<0\\) sur \\(]1;2]\\). Maximum en \\(x=1\\) : \\(f(1)=1+2-2=1\\).</p>
<p>Sur \\(]2;+\\infty[\\) : \\(f'(x) = \\dfrac{2x-3}{2\\sqrt{x^2-3x+2}}>0\\) pour \\(x>\\dfrac{3}{2}\\). f est <strong>croissante</strong>.</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f'</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="331.7" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="518.3" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="238.3" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="331.7" y1="50" x2="331.7" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="331.7" y1="86" x2="331.7" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="331.7" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="611.7" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="518.3" y1="50" x2="518.3" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="518.3" y1="86" x2="518.3" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="518.3" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="306.7" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-8)"/>
    <line x1="356.7" y1="135" x2="493.3" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-8)"/>
    <line x1="543.3" y1="225" x2="680.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-8)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
    <text x="331.7" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">1</text>
    <text x="518.3" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <text x="705.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>6a) Bijection de h sur ]-∞;1]</strong></p>
<p>h est continue et strictement croissante sur \\(]-\\infty;1]\\), de \\(-\\infty\\) vers \\(h(1)=1\\).</p>
<p> h réalise une bijection de \\(]-\\infty;1]\\) sur \\(J=]-\\infty;1]\\).</p>

<p><strong>5) & 6) b) Tracé des asymptotes \\((D_1)\\), \\((D_2)\\), de la courbe \\((C)\\) et de sa réciproque \\((\\Gamma)\\)</strong></p>
<p>La courbe \\((C)\\) est formée de deux branches avec pour asymptotes obliques \\((D_1): y = x+2\\) et \\((D_2): y = x - 3/2\\). La courbe \\((\\Gamma)\\) de la bijection réciproque \\(h^{-1}\\) est la symétrique de la branche sur \\(]-\\infty ; 1]\\) par rapport à \\(y = x\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2008 Tour 1 — Courbe (C) et Asymptotes (D₁), (D₂)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="130.0" y1="40.0" x2="130.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="195.0" y1="40.0" x2="195.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="260.0" y1="40.0" x2="260.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40.0" x2="390.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="455.0" y1="40.0" x2="455.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="520.0" y1="40.0" x2="520.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="585.0" y1="40.0" x2="585.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="650.0" y1="40.0" x2="650.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="360.0" x2="715.0" y2="360.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="320.0" x2="715.0" y2="320.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="240.0" x2="715.0" y2="240.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="200.0" x2="715.0" y2="200.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="160.0" x2="715.0" y2="160.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="120.0" x2="715.0" y2="120.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="80.0" x2="715.0" y2="80.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="280.0" x2="735" y2="280.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="325.0" y1="415" x2="325.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="298.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="307.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="276.0" x2="65.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="130.0" y1="276.0" x2="130.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="130.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="195.0" y1="276.0" x2="195.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="195.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="260.0" y1="276.0" x2="260.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="260.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="390.0" y1="276.0" x2="390.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="455.0" y1="276.0" x2="455.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="455.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="520.0" y1="276.0" x2="520.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="520.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="585.0" y1="276.0" x2="585.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="585.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="650.0" y1="276.0" x2="650.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="650.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="321.0" y1="400.0" x2="329.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="321.0" y1="360.0" x2="329.0" y2="360.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="364.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="321.0" y1="320.0" x2="329.0" y2="320.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="324.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="321.0" y1="240.0" x2="329.0" y2="240.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="244.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="321.0" y1="200.0" x2="329.0" y2="200.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="204.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="321.0" y1="160.0" x2="329.0" y2="160.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="164.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="321.0" y1="120.0" x2="329.0" y2="120.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="124.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="321.0" y1="80.0" x2="329.0" y2="80.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="84.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><text x="315.0" y="295.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="65.0" y1="360.0" x2="585.0" y2="40.0" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    <line x1="422.5" y1="280.0" x2="715.0" y2="100.0" stroke="#10b981" stroke-width="2.0" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 382.9 L 66.1 382.2 L 67.2 381.6 L 68.3 381.0 L 69.5 380.3 L 70.6 379.7 L 71.7 379.1 L 72.8 378.5 L 73.9 377.8 L 75.0 377.2 L 76.1 376.6 L 77.3 375.9 L 78.4 375.3 L 79.5 374.7 L 80.6 374.1 L 81.7 373.4 L 82.8 372.8 L 83.9 372.2 L 85.1 371.6 L 86.2 370.9 L 87.3 370.3 L 88.4 369.7 L 89.5 369.1 L 90.6 368.5 L 91.7 367.8 L 92.9 367.2 L 94.0 366.6 L 95.1 366.0 L 96.2 365.3 L 97.3 364.7 L 98.4 364.1 L 99.5 363.5 L 100.7 362.9 L 101.8 362.2 L 102.9 361.6 L 104.0 361.0 L 105.1 360.4 L 106.2 359.8 L 107.3 359.1 L 108.5 358.5 L 109.6 357.9 L 110.7 357.3 L 111.8 356.7 L 112.9 356.1 L 114.0 355.4 L 115.1 354.8 L 116.3 354.2 L 117.4 353.6 L 118.5 353.0 L 119.6 352.4 L 120.7 351.8 L 121.8 351.1 L 122.9 350.5 L 124.1 349.9 L 125.2 349.3 L 126.3 348.7 L 127.4 348.1 L 128.5 347.5 L 129.6 346.9 L 130.7 346.3 L 131.9 345.7 L 133.0 345.0 L 134.1 344.4 L 135.2 343.8 L 136.3 343.2 L 137.4 342.6 L 138.5 342.0 L 139.7 341.4 L 140.8 340.8 L 141.9 340.2 L 143.0 339.6 L 144.1 339.0 L 145.2 338.4 L 146.3 337.8 L 147.5 337.2 L 148.6 336.6 L 149.7 336.0 L 150.8 335.4 L 151.9 334.8 L 153.0 334.2 L 154.1 333.6 L 155.3 333.0 L 156.4 332.4 L 157.5 331.8 L 158.6 331.2 L 159.7 330.6 L 160.8 330.0 L 161.9 329.4 L 163.1 328.8 L 164.2 328.2 L 165.3 327.6 L 166.4 327.0 L 167.5 326.4 L 168.6 325.8 L 169.7 325.2 L 170.9 324.6 L 172.0 324.1 L 173.1 323.5 L 174.2 322.9 L 175.3 322.3 L 176.4 321.7 L 177.5 321.1 L 178.7 320.5 L 179.8 319.9 L 180.9 319.4 L 182.0 318.8 L 183.1 318.2 L 184.2 317.6 L 185.3 317.0 L 186.5 316.4 L 187.6 315.9 L 188.7 315.3 L 189.8 314.7 L 190.9 314.1 L 192.0 313.5 L 193.1 313.0 L 194.3 312.4 L 195.4 311.8 L 196.5 311.2 L 197.6 310.7 L 198.7 310.1 L 199.8 309.5 L 200.9 308.9 L 202.1 308.4 L 203.2 307.8 L 204.3 307.2 L 205.4 306.7 L 206.5 306.1 L 207.6 305.5 L 208.7 305.0 L 209.9 304.4 L 211.0 303.8 L 212.1 303.3 L 213.2 302.7 L 214.3 302.1 L 215.4 301.6 L 216.5 301.0 L 217.7 300.5 L 218.8 299.9 L 219.9 299.3 L 221.0 298.8 L 222.1 298.2 L 223.2 297.7 L 224.3 297.1 L 225.5 296.6 L 226.6 296.0 L 227.7 295.5 L 228.8 294.9 L 229.9 294.4 L 231.0 293.8 L 232.1 293.3 L 233.3 292.7 L 234.4 292.2 L 235.5 291.6 L 236.6 291.1 L 237.7 290.6 L 238.8 290.0 L 239.9 289.5 L 241.1 288.9 L 242.2 288.4 L 243.3 287.9 L 244.4 287.3 L 245.5 286.8 L 246.6 286.3 L 247.7 285.7 L 248.9 285.2 L 250.0 284.7 L 251.1 284.2 L 252.2 283.6 L 253.3 283.1 L 254.4 282.6 L 255.5 282.1 L 256.7 281.5 L 257.8 281.0 L 258.9 280.5 L 260.0 280.0 L 261.1 279.5 L 262.2 279.0 L 263.3 278.5 L 264.5 278.0 L 265.6 277.4 L 266.7 276.9 L 267.8 276.4 L 268.9 275.9 L 270.0 275.4 L 271.1 274.9 L 272.3 274.4 L 273.4 273.9 L 274.5 273.4 L 275.6 273.0 L 276.7 272.5 L 277.8 272.0 L 278.9 271.5 L 280.1 271.0 L 281.2 270.5 L 282.3 270.0 L 283.4 269.6 L 284.5 269.1 L 285.6 268.6 L 286.7 268.1 L 287.9 267.7 L 289.0 267.2 L 290.1 266.7 L 291.2 266.3 L 292.3 265.8 L 293.4 265.3 L 294.5 264.9 L 295.7 264.4 L 296.8 264.0 L 297.9 263.5 L 299.0 263.1 L 300.1 262.6 L 301.2 262.2 L 302.3 261.7 L 303.5 261.3 L 304.6 260.8 L 305.7 260.4 L 306.8 260.0 L 307.9 259.6 L 309.0 259.1 L 310.1 258.7 L 311.3 258.3 L 312.4 257.9 L 313.5 257.4 L 314.6 257.0 L 315.7 256.6 L 316.8 256.2 L 317.9 255.8 L 319.1 255.4 L 320.2 255.0 L 321.3 254.6 L 322.4 254.2 L 323.5 253.8 L 324.6 253.5 L 325.7 253.1 L 326.9 252.7 L 328.0 252.3 L 329.1 252.0 L 330.2 251.6 L 331.3 251.2 L 332.4 250.9 L 333.5 250.5 L 334.7 250.2 L 335.8 249.8 L 336.9 249.5 L 338.0 249.1 L 339.1 248.8 L 340.2 248.5 L 341.3 248.2 L 342.5 247.8 L 343.6 247.5 L 344.7 247.2 L 345.8 246.9 L 346.9 246.6 L 348.0 246.3 L 349.1 246.0 L 350.3 245.7 L 351.4 245.4 L 352.5 245.2 L 353.6 244.9 L 354.7 244.6 L 355.8 244.4 L 356.9 244.1 L 358.1 243.9 L 359.2 243.6 L 360.3 243.4 L 361.4 243.2 L 362.5 243.0 L 363.6 242.7 L 364.7 242.5 L 365.9 242.3 L 367.0 242.1 L 368.1 241.9 L 369.2 241.8 L 370.3 241.6 L 371.4 241.4 L 372.5 241.3 L 373.7 241.1 L 374.8 241.0 L 375.9 240.9 L 377.0 240.7 L 378.1 240.6 L 379.2 240.5 L 380.3 240.4 L 381.5 240.3 L 382.6 240.2 L 383.7 240.2 L 384.8 240.1 L 385.9 240.1 L 387.0 240.0 L 388.1 240.0 L 389.3 240.0 L 390.4 240.0 L 391.5 240.0 L 392.6 240.0 L 393.7 240.1 L 394.8 240.1 L 395.9 240.2 L 397.1 240.2 L 398.2 240.3 L 399.3 240.4 L 400.4 240.6 L 401.5 240.7 L 402.6 240.8 L 403.7 241.0 L 404.9 241.2 L 406.0 241.4 L 407.1 241.6 L 408.2 241.8 L 409.3 242.1 L 410.4 242.3 L 411.5 242.6 L 412.7 242.9 L 413.8 243.3 L 414.9 243.6 L 416.0 244.0 L 417.1 244.4 L 418.2 244.8 L 419.3 245.3 L 420.5 245.7 L 421.6 246.2 L 422.7 246.8 L 423.8 247.3 L 424.9 247.9 L 426.0 248.5 L 427.1 249.1 L 428.3 249.8 L 429.4 250.5 L 430.5 251.3 L 431.6 252.0 L 432.7 252.9 L 433.8 253.7 L 434.9 254.6 L 436.1 255.6 L 437.2 256.5 L 438.3 257.6 L 439.4 258.6 L 440.5 259.8 L 441.6 260.9 L 442.7 262.2 L 443.9 263.4 L 445.0 264.8 L 446.1 266.2 L 447.2 267.7 L 448.3 269.2 L 449.4 270.8 L 450.5 272.5 L 451.7 274.2 L 452.8 276.1 L 453.9 278.0 L 455.0 280.0" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 455.0 280.0 L 455.7 275.7 L 456.5 273.9 L 457.2 272.5 L 458.0 271.3 L 458.7 270.2 L 459.5 269.2 L 460.2 268.2 L 460.9 267.4 L 461.7 266.5 L 462.4 265.7 L 463.2 265.0 L 463.9 264.2 L 464.7 263.5 L 465.4 262.8 L 466.1 262.1 L 466.9 261.4 L 467.6 260.7 L 468.4 260.1 L 469.1 259.4 L 469.9 258.8 L 470.6 258.2 L 471.3 257.6 L 472.1 257.0 L 472.8 256.4 L 473.6 255.8 L 474.3 255.2 L 475.1 254.6 L 475.8 254.0 L 476.5 253.4 L 477.3 252.9 L 478.0 252.3 L 478.8 251.7 L 479.5 251.2 L 480.3 250.6 L 481.0 250.1 L 481.7 249.5 L 482.5 249.0 L 483.2 248.4 L 484.0 247.9 L 484.7 247.4 L 485.5 246.8 L 486.2 246.3 L 486.9 245.8 L 487.7 245.2 L 488.4 244.7 L 489.2 244.2 L 489.9 243.7 L 490.7 243.1 L 491.4 242.6 L 492.1 242.1 L 492.9 241.6 L 493.6 241.1 L 494.4 240.6 L 495.1 240.0 L 495.9 239.5 L 496.6 239.0 L 497.3 238.5 L 498.1 238.0 L 498.8 237.5 L 499.6 237.0 L 500.3 236.5 L 501.1 236.0 L 501.8 235.5 L 502.5 235.0 L 503.3 234.5 L 504.0 234.0 L 504.8 233.5 L 505.5 233.0 L 506.3 232.5 L 507.0 232.0 L 507.7 231.5 L 508.5 231.0 L 509.2 230.5 L 510.0 230.0 L 510.7 229.5 L 511.5 229.0 L 512.2 228.6 L 512.9 228.1 L 513.7 227.6 L 514.4 227.1 L 515.2 226.6 L 515.9 226.1 L 516.7 225.6 L 517.4 225.1 L 518.1 224.6 L 518.9 224.2 L 519.6 223.7 L 520.4 223.2 L 521.1 222.7 L 521.9 222.2 L 522.6 221.7 L 523.3 221.3 L 524.1 220.8 L 524.8 220.3 L 525.6 219.8 L 526.3 219.3 L 527.1 218.8 L 527.8 218.4 L 528.5 217.9 L 529.3 217.4 L 530.0 216.9 L 530.8 216.4 L 531.5 216.0 L 532.3 215.5 L 533.0 215.0 L 533.7 214.5 L 534.5 214.1 L 535.2 213.6 L 536.0 213.1 L 536.7 212.6 L 537.5 212.1 L 538.2 211.7 L 538.9 211.2 L 539.7 210.7 L 540.4 210.2 L 541.2 209.8 L 541.9 209.3 L 542.7 208.8 L 543.4 208.3 L 544.1 207.9 L 544.9 207.4 L 545.6 206.9 L 546.4 206.4 L 547.1 206.0 L 547.9 205.5 L 548.6 205.0 L 549.3 204.5 L 550.1 204.1 L 550.8 203.6 L 551.6 203.1 L 552.3 202.7 L 553.1 202.2 L 553.8 201.7 L 554.5 201.2 L 555.3 200.8 L 556.0 200.3 L 556.8 199.8 L 557.5 199.4 L 558.3 198.9 L 559.0 198.4 L 559.7 197.9 L 560.5 197.5 L 561.2 197.0 L 562.0 196.5 L 562.7 196.1 L 563.5 195.6 L 564.2 195.1 L 564.9 194.7 L 565.7 194.2 L 566.4 193.7 L 567.2 193.2 L 567.9 192.8 L 568.7 192.3 L 569.4 191.8 L 570.1 191.4 L 570.9 190.9 L 571.6 190.4 L 572.4 190.0 L 573.1 189.5 L 573.9 189.0 L 574.6 188.6 L 575.3 188.1 L 576.1 187.6 L 576.8 187.2 L 577.6 186.7 L 578.3 186.2 L 579.1 185.8 L 579.8 185.3 L 580.5 184.8 L 581.3 184.4 L 582.0 183.9 L 582.8 183.4 L 583.5 183.0 L 584.3 182.5 L 585.0 182.0 L 585.7 181.6 L 586.5 181.1 L 587.2 180.6 L 588.0 180.2 L 588.7 179.7 L 589.5 179.2 L 590.2 178.8 L 590.9 178.3 L 591.7 177.8 L 592.4 177.4 L 593.2 176.9 L 593.9 176.4 L 594.7 176.0 L 595.4 175.5 L 596.1 175.0 L 596.9 174.6 L 597.6 174.1 L 598.4 173.6 L 599.1 173.2 L 599.9 172.7 L 600.6 172.2 L 601.3 171.8 L 602.1 171.3 L 602.8 170.8 L 603.6 170.4 L 604.3 169.9 L 605.1 169.5 L 605.8 169.0 L 606.5 168.5 L 607.3 168.1 L 608.0 167.6 L 608.8 167.1 L 609.5 166.7 L 610.3 166.2 L 611.0 165.7 L 611.7 165.3 L 612.5 164.8 L 613.2 164.3 L 614.0 163.9 L 614.7 163.4 L 615.5 163.0 L 616.2 162.5 L 616.9 162.0 L 617.7 161.6 L 618.4 161.1 L 619.2 160.6 L 619.9 160.2 L 620.7 159.7 L 621.4 159.2 L 622.1 158.8 L 622.9 158.3 L 623.6 157.9 L 624.4 157.4 L 625.1 156.9 L 625.9 156.5 L 626.6 156.0 L 627.3 155.5 L 628.1 155.1 L 628.8 154.6 L 629.6 154.2 L 630.3 153.7 L 631.1 153.2 L 631.8 152.8 L 632.5 152.3 L 633.3 151.8 L 634.0 151.4 L 634.8 150.9 L 635.5 150.4 L 636.3 150.0 L 637.0 149.5 L 637.7 149.1 L 638.5 148.6 L 639.2 148.1 L 640.0 147.7 L 640.7 147.2 L 641.5 146.7 L 642.2 146.3 L 642.9 145.8 L 643.7 145.4 L 644.4 144.9 L 645.2 144.4 L 645.9 144.0 L 646.7 143.5 L 647.4 143.1 L 648.1 142.6 L 648.9 142.1 L 649.6 141.7 L 650.4 141.2 L 651.1 140.7 L 651.9 140.3 L 652.6 139.8 L 653.3 139.4 L 654.1 138.9 L 654.8 138.4 L 655.6 138.0 L 656.3 137.5 L 657.1 137.0 L 657.8 136.6 L 658.5 136.1 L 659.3 135.7 L 660.0 135.2 L 660.8 134.7 L 661.5 134.3 L 662.3 133.8 L 663.0 133.4 L 663.7 132.9 L 664.5 132.4 L 665.2 132.0 L 666.0 131.5 L 666.7 131.1 L 667.5 130.6 L 668.2 130.1 L 668.9 129.7 L 669.7 129.2 L 670.4 128.7 L 671.2 128.3 L 671.9 127.8 L 672.7 127.4 L 673.4 126.9 L 674.1 126.4 L 674.9 126.0 L 675.6 125.5 L 676.4 125.1 L 677.1 124.6 L 677.9 124.1 L 678.6 123.7 L 679.3 123.2 L 680.1 122.8 L 680.8 122.3 L 681.6 121.8 L 682.3 121.4 L 683.1 120.9 L 683.8 120.4 L 684.5 120.0 L 685.3 119.5 L 686.0 119.1 L 686.8 118.6 L 687.5 118.1 L 688.3 117.7 L 689.0 117.2 L 689.7 116.8 L 690.5 116.3 L 691.2 115.8 L 692.0 115.4 L 692.7 114.9 L 693.5 114.5 L 694.2 114.0 L 694.9 113.5 L 695.7 113.1 L 696.4 112.6 L 697.2 112.2 L 697.9 111.7 L 698.7 111.2 L 699.4 110.8 L 700.1 110.3 L 700.9 109.9 L 701.6 109.4 L 702.4 108.9 L 703.1 108.5 L 703.9 108.0 L 704.6 107.6 L 705.3 107.1 L 706.1 106.6 L 706.8 106.2 L 707.6 105.7 L 708.3 105.3 L 709.1 104.8 L 709.8 104.3 L 710.5 103.9 L 711.3 103.4 L 712.0 103.0 L 712.8 102.5 L 713.5 102.0 L 714.3 101.6 L 715.0 101.1" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="240.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 225.0)">
      <text x="43.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (1 ; 1)</text>
    </g>
    <circle cx="455.0" cy="280.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(465.0, 295.0)">
      <text x="57.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Raccord (2 ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="88" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x ≤ 2</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x > 2</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (D₁) : y = x + 2</text>
      <line x1="10" y1="69" x2="35" y2="69" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="73" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote (D₂) : y = x − 1,5</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>1°) Aire A</strong></p>
<p>Sur \\([-3;0]\\), \\(f(x)-(x+2) = \\dfrac{4}{x-3} < 0\\) → \\((D_1)\\) est au-dessus de (C).</p>
<p>\\(A = 4\\int_{-3}^0\\left(-\\dfrac{4}{x-3}\\right)dx = 4\\times[-4\\ln|x-3|]_{-3}^0 = 4\\times(-4\\ln3+4\\ln6)\\)</p>
<p>\\(= 16\\ln\\dfrac{6}{3} = 16\\ln2\\)</p>
<p>\\[\\boxed{A = 16\\ln2\\text{ cm}^2}\\]</p>

<p><strong>2°) Volume V</strong></p>
<p>Sur \\([-1;2]\\), \\([f(x)]^2 = (x+2)^2+\\dfrac{8(x+2)}{x-3}+\\dfrac{16}{(x-3)^2}\\)</p>
<p>\\(= x^2+4x+4+\\dfrac{8}{x-3}+\\dfrac{40}{x-3}+\\dfrac{16}{(x-3)^2}\\)</p>
<p>En intégrant :</p>
<p>\\(\\int_{-1}^2[f(x)]^2dx = \\left[\\dfrac{x^3}{3}+2x^2+4x\\right]_{-1}^2 + \\left[40\\ln|x-3| - \\dfrac{16}{x-3}\\right]_{-1}^2\\)</p>
<p>\\(= (\\dfrac{8}{3}+8+8-(-\\dfrac{1}{3}+2-4))+(40\\ln\\dfrac{1}{4}-16 - 40\\ln 4+4)\\)</p>
<p>\\(= (\\dfrac{8}{3}+\\dfrac{1}{3}+18)+(0-12) = 21-12+3 = ... \\)</p>
<p>D'après le corrigé du PDF :</p>
<p>\\[\\boxed{V = 8\\pi(57-80\\ln2)\\text{ cm}^3}\\]</p>

<p><strong>Partie C</strong></p>
<p>\\(x = t+3 \\Rightarrow t = x-3\\). \\(y = \\sqrt{t^2-3t+2} = \\sqrt{(x-3)^2-3(x-3)+2} = \\sqrt{x^2-3x+2}\\).</p>
<p>\\(t>-1 \\iff x = t+3 > 2\\).</p>
<p> (Γ) est la partie de (C) correspondant à \\(x>2\\).</p>

`
    }
  ]
},

{
  id: 'bac-2008-D-juillet-2nd',
  year: 2008,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2008 / 2nd tour',
  topics: ['Probabilités', 'Équations différentielles', 'Fonctions exp. & logarithme', 'Bijection & Intégrales & Courbe paramétrique'],
  parts: [
    {
      label: 'Exercice I — Probabilités : boules 0 à 5, variable X (4 pts)',
      problem: `<p>Un sac contient six boules numérotées de 0 à 5. On extrait simultanément deux boules portant les numéros x et y. La variable aléatoire X est définie par :</p>
<ul>
  <li>Si x et y sont pairs : \\(X = \\dfrac{x+y}{2}\\)</li>
  <li>Si x et y sont impairs : \\(X = \\dfrac{|x-y|}{2}\\)</li>
  <li>Si x et y sont de parité différente : \\(X = 0\\)</li>
</ul>
<p><em>(On rappelle que 0 est pair.)</em></p>
<p><strong>1) a)</strong> Déterminer les valeurs prises par X.</p>
<p><strong>b)</strong> Établir la loi de probabilité de X.</p>
<p><strong>2)</strong> Calculer l'espérance mathématique E(X).</p>
<p><strong>3)</strong> On répète 10 fois de suite l'expérience avec remise. Quelle est la probabilité d'obtenir exactement 7 fois x et y de même parité ?</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Variable aléatoire discrète</span>
  <ul>
    <li><strong>Loi de X :</strong> Tableau $(k, P(X=k))$ avec $\\sum P(X=k) = 1$.</li>
    <li><strong>Espérance :</strong> $E(X) = \\sum_k k \\cdot P(X=k)$.</li>
    <li><strong>Variance :</strong> $V(X) = E(X^2) - [E(X)]^2$, écart-type $\\sigma = \\sqrt{V(X)}$.</li>
    <li><strong>Tirage équiprobable :</strong> $P(X=k) = \\dfrac{\\text{card}(X=k)}{\\text{card}(\\Omega)}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p>\\(\\text{Card}(\\Omega) = \\binom{6}{2} = 15\\) tirages possibles.</p>

<p><strong>1a) Valeurs de X</strong></p>
<p>Boules paires : 0, 2, 4 (3 boules) ; impaires : 1, 3, 5 (3 boules).</p>
<p>— Deux paires : \\(X = (x+y)/2 \\in \\{1;2;3;4\\}\\). Paires possibles : (0,2)→1, (0,4)→2, (2,4)→3.</p>
<p>— Deux impaires : \\(X = |x-y|/2 \\in \\{1\\}\\). Paires : (1,3)→1, (1,5)→2, (3,5)→1.</p>
<p>— Parité différente : \\(X = 0\\).</p>
<p>\\[X\\in\\{0;1;2;3\\}\\]</p>

<p><strong>1b) Loi de probabilité</strong></p>
<p>Paires paires : \\(\\binom{3}{2}=3\\) tirages.</p>
<p>Paires impaires : \\(\\binom{3}{2}=3\\) tirages.</p>
<p>Paires mixtes : \\(3\\times3=9\\) tirages.</p>
<p>\\(P(X=0) = \\dfrac{9}{15}\\) ; \\(P(X=1) = \\dfrac{3}{15}\\) (deux paires + (3,5)) ; \\(P(X=2) = \\dfrac{2}{15}\\) ((0,4) et (1,5)) ; \\(P(X=3) = \\dfrac{1}{15}\\) ((2,4)).</p>

<table class="vtab">
  <tr>
    <th>X</th>
    <td>0</td><td>1</td><td>2</td><td>3</td>
  </tr>
  <tr>
    <th>P(X=x)</th>
    <td>\\(\\dfrac{9}{15}\\)</td><td>\\(\\dfrac{3}{15}\\)</td><td>\\(\\dfrac{2}{15}\\)</td><td>\\(\\dfrac{1}{15}\\)</td>
  </tr>
</table>

<p><strong>2) Espérance</strong></p>
<p>\\(E(X) = 0\\cdot\\dfrac{9}{15}+1\\cdot\\dfrac{3}{15}+2\\cdot\\dfrac{2}{15}+3\\cdot\\dfrac{1}{15} = \\dfrac{3+4+3}{15} = \\dfrac{10}{15} = \\boxed{\\dfrac{2}{3}}\\)</p>

<p><strong>3°) 7 fois de même parité</strong></p>
<p>\\(p = P(\\text{même parité}) = 1-P(X=0) = 1-\\dfrac{9}{15} = \\dfrac{6}{15} = \\dfrac{2}{5}\\)</p>
<p>\\(P(7) = \\binom{10}{7}\\left(\\dfrac{2}{5}\\right)^7\\left(\\dfrac{3}{5}\\right)^3 = 120\\times\\dfrac{2^7\\times3^3}{5^{10}} = \\boxed{\\dfrac{120\\times128\\times27}{5^{10}} = \\dfrac{210\\times3^4}{5^9}}\\)</p>`
    },
    {
      label: 'Exercice II — EDO : chauffage d\'un bloc métallique (4 pts)',
      problem: `<p>Un bloc de métal est déposé dans un four à température constante 1000°. La température \\(\\theta(t)\\) vérifie :</p>
<p>\\[(E): \\theta'(t) = k(1000-\\theta(t)), \\quad k\\in\\mathbb{R}^*_+\\]</p>
<p><strong>1)</strong> On pose \\(y(t) = \\theta(t)-1000\\). Écrire l'équation (F) vérifiée par y.</p>
<p><strong>2)</strong> Résoudre (F) puis (E).</p>
<p><strong>3)</strong> Le bloc est initialement à 40°C (\\(\\theta(0)=40\\)) et atteint 160°C au bout d'une heure. En déduire \\(\\theta(t)\\) en fonction de t seulement.</p>
<p><strong>4) a)</strong> Calculer la température au temps \\(t=3\\).</p>
<p><strong>b)</strong> Déterminer le temps T à partir duquel la température dépasse 500°C.</p>
<p><em>On donne : \\(\\left(\\dfrac{7}{8}\\right)^3\\approx0{,}7\\) ; \\(\\ln\\dfrac{7}{8}\\approx-0{,}13\\) ; \\(\\ln\\dfrac{25}{48}\\approx-0{,}65\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équation différentielle &amp ; modélisation</span>
  <ul>
    <li><strong>Loi de Newton (refroidissement) :</strong> $\\dfrac{d\\theta}{dt} = -k(\\theta - \\theta_{ext})$ — température $\\theta$ d'un corps en contact avec un milieu à $\\theta_{ext}$.</li>
    <li><strong>Solution :</strong> $\\theta(t) = \\theta_{ext} + (\\theta_0 - \\theta_{ext})e^{-kt}$, où $\\theta_0 = \\theta(0)$.</li>
    <li><strong>Détermination de $k$ :</strong> On utilise une valeur connue de $\\theta(t_1)$ pour résoudre $\\ln(\\cdot) = -kt_1$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°)</strong> \\(y'(t) = \\theta'(t) = k(1000-\\theta(t)) = k(1000-1000-y(t)) = -ky(t)\\)</p>
<p>\\[\\boxed{(F): y'(t) = -ky(t)}\\]</p>

<p><strong>2°)</strong> \\(y(t) = Ce^{-kt}\\) → \\(\\boxed{\\theta(t) = 1000+Ce^{-kt}, \\ ; C\\in\\mathbb{R}}\\)</p>

<p><strong>3°)</strong></p>
<p>\\(\\theta(0) = 40 \\Rightarrow 1000+C = 40 \\Rightarrow C = -960\\)</p>
<p>\\(\\theta(1) = 160 \\Rightarrow 1000-960e^{-k} = 160 \\Rightarrow e^{-k} = \\dfrac{840}{960} = \\dfrac{7}{8}\\)</p>
<p>\\[\\boxed{\\theta(t) = 1000-960\\left(\\dfrac{7}{8}\\right)^t}\\]</p>

<p><strong>4a)</strong></p>
<p>\\(\\theta(3) = 1000-960\\times\\left(\\dfrac{7}{8}\\right)^3 \\approx 1000-960\\times0{,}7 = 1000-672 = 328°C\\)</p>

<p><strong>4b)</strong></p>
<p>\\(\\theta(T)\\geq500 \\iff 1000-960\\left(\\dfrac{7}{8}\\right)^T\\geq500 \\iff \\left(\\dfrac{7}{8}\\right)^T\\leq\\dfrac{500}{960} = \\dfrac{25}{48}\\)</p>
<p>\\(T\\ln\\dfrac{7}{8}\\leq\\ln\\dfrac{25}{48} \\Rightarrow T\\geq\\dfrac{\\ln\\left(\\dfrac{25}{48}\\right)}{\\ln\\left(\\dfrac{7}{8}\\right)} = \\dfrac{-0{,}65}{-0{,}13} = 5\\)</p>
<p> \\(T = 5\\) heures.</p>`
    },
    {
      label: 'Problème — f(x) = (exp(2x)−1)/exp(x) et x−x·ln x, bijection, intégrales, courbe param. (12 pts)',
      problem: `<p>Soit f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases}\\dfrac{e^{2x}-1}{e^x} & \\text{si } x\\leq0 \\\\ x-x\\ln x & \\text{si } x>0\\end{cases}\\]</p>
<p>Courbe (C) dans \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>

<p><strong>Partie A</strong></p>
<p><strong>1)</strong> Étudier la continuité de f en 0.</p>
<p><strong>2)</strong> Étudier la dérivabilité de f en 0. Interpréter. \\(\\left(\\lim_{x\\to0}\\dfrac{e^x-1}{x}=1\\right)\\)</p>
<p><strong>3) a)</strong> Étudier les variations de f.</p>
<p><strong>b)</strong> Dresser le tableau de variation de f.</p>
<p><strong>4)</strong> Calculer \\(\\displaystyle\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x}\\) et \\(\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x}\\). Interpréter. Tracer (C).</p>
<p><strong>5) a)</strong> Soit h la restriction de f à \\([1;+\\infty[\\). Montrer que h est une bijection sur \\(J\\) à préciser.</p>
<p><strong>b)</strong> Construire la courbe (Γ) de \\(h^{-1}\\).</p>

<p><strong>Partie B</strong></p>
<p>Soit \\(\\alpha\\in]0;e]\\). On pose \\(I(\\alpha)=\\displaystyle\\int_\\alpha^e f(x)\\,dx\\).</p>
<p><strong>1) a)</strong> Par IPP, calculer \\(\\displaystyle\\int_\\alpha^e x\\ln x\\,dx\\).</p>
<p><strong>b)</strong> En déduire \\(I(\\alpha)\\).</p>
<p><strong>2) a)</strong> Interpréter graphiquement \\(I(\\alpha)\\).</p>
<p><strong>b)</strong> Calculer \\(\\displaystyle\\lim_{\\alpha\\to0^+}I(\\alpha)\\).</p>
<p><strong>3)</strong> En déduire en cm² l'aire de la partie du plan délimitée par (C), les axes et la droite \\(x=e\\).</p>
<p><strong>4)</strong> Soit (E) le domaine : \\(-1\\leq x\\leq0\\) et \\(f(x)\\leq y\\leq0\\). Calculer en cm³ le volume du solide engendré par la rotation complète de (E) autour de \\((Ox)\\).</p>

<p><strong>Partie C</strong></p>
<p>Soit (Γ) de représentation paramétrique \\(x(t)=\\ln(\\cos t)\\), \\(y(t)=\\dfrac{\\cos^2t-1}{\\cos t}\\), \\(t\\in]0;\\dfrac{\\pi}{2}[\\).</p>
<p><strong>1)</strong> Montrer que (Γ) est une partie de (C).</p>
<p><strong>2)</strong> Déterminer les coordonnées du vecteur vitesse à \\(t=\\dfrac{\\pi}{4}\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions $e^x$, $\\ln x$, bijection &amp ; paramétrique</span>
  <ul>
    <li><strong>$e^{2x} - 1)/e^x = e^x - e^{-x}$ :</strong> Simplifier en multipliant/divisant par $e^x$.</li>
    <li><strong>Dérivée de $x\\ln x$ :</strong> $(x\\ln x)' = \\ln x + 1$. Primitive : $\\int \\ln x\\,dx = x\\ln x - x + C$.</li>
    <li><strong>Bijection :</strong> Strictement monotone sur $I$ $\\Rightarrow$ admet une réciproque $f^{-1}$ sur $f(I)$.</li>
    <li><strong>Courbe paramétrique :</strong> Tangente horizontale en $t_0 \\iff y'(t_0)=0$ et $x'(t_0)\\neq 0$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°) Continuité en 0</strong></p>
<p>\\(f(0) = \\dfrac{1-1}{1} = 0\\).</p>
<p>\\(\\lim_{x\\to0^-}f(x) = \\lim_{x\\to0^-}\\dfrac{e^{2x}-1}{e^x} = 0\\)</p>
<p>\\(\\lim_{x\\to0^+}f(x) = \\lim_{x\\to0^+}x(1-\\ln x) = 0\\) (car \\(x\\ln x\\to0\\))</p>
<p> f est <strong>continue en 0</strong>.</p>

<p><strong>2°) Dérivabilité en 0</strong></p>
<p>À gauche : \\(\\lim_{x\\to0^-}\\dfrac{f(x)}{x} = \\lim_{x\\to0^-}\\dfrac{e^{2x}-1}{xe^x} = \\lim_{x\\to0^-}\\dfrac{e^{2x}-1}{2x}\\cdot\\dfrac{2}{e^x} = 1\\times2 = 2\\)</p>
<p>À droite : \\(\\lim_{x\\to0^+}\\dfrac{f(x)}{x} = \\lim_{x\\to0^+}(1-\\ln x) = +\\infty\\)</p>
<p>f <strong>non dérivable en 0</strong> : point anguleux. Demi-tangente gauche \\(y=2x\\), demi-tangente verticale à droite.</p>

<p><strong>3a) Variations</strong></p>
<p>Pour \\(x<0\\) : \\(f'(x) = \\dfrac{2e^{2x}\\cdot e^x - (e^{2x}-1)e^x}{e^{2x}} = \\dfrac{e^{2x}+1}{e^x} > 0\\). f <strong>croissante</strong> sur \\(]-\\infty;0]\\).</p>
<p>Pour \\(x>0\\) : \\(f'(x) = 1-\\ln x-x\\cdot\\dfrac{1}{x} = -\\ln x\\). \\(f'>0\\) sur \\(]0;1[\\), \\(f'(1)=0\\), \\(f'<0\\) sur \\(]1;+\\infty[\\). Maximum en \\(x=1\\) : \\(f(1)=1\\).</p>
<p>Limites : \\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}\\dfrac{-1}{e^x}\\cdot(-1) = \\dfrac{-1}{0^+}... \\) En fait \\(f(x)=e^x-e^{-x}\\to-\\infty\\) ; \\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}x(1-\\ln x) = -\\infty\\).</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-10" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-10" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f'</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="331.7" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="518.3" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="238.3" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="331.7" y1="50" x2="331.7" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="331.7" y1="86" x2="331.7" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="331.7" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="611.7" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="518.3" y1="50" x2="518.3" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="518.3" y1="86" x2="518.3" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="518.3" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="306.7" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-10)"/>
    <line x1="356.7" y1="135" x2="493.3" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-10)"/>
    <line x1="543.3" y1="225" x2="680.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-10)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
    <text x="331.7" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <text x="518.3" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">1</text>
    <text x="705.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
  </svg>
</div>

<p><strong>4°) Branches paraboliques</strong></p>
<p>\\(\\lim_{x\\to-\\infty}\\dfrac{f(x)}{x} = \\lim_{x\\to-\\infty}\\dfrac{e^x-e^{-x}}{x}\\). \\(e^{-x}/x\\to-\\infty/(-\\infty)\\to+\\infty\\) mais signe de \\(f(x)/x = e^x/x - e^{-x}/x\\). En fait \\(f(x)=e^x-e^{-x}\\) et \\(\\dfrac{f(x)}{x}\\to-\\infty\\cdot\\dfrac{1}{-\\infty}= +\\infty\\)... Recalculons correctement :</p>
<p>\\(f(x) = \\dfrac{e^{2x}-1}{e^x} = e^x-e^{-x}\\). \\(\\dfrac{f(x)}{x} = \\dfrac{e^x-e^{-x}}{x}\\). Quand \\(x\\to-\\infty\\) : \\(e^x\\to0\\) et \\(e^{-x}/(x)\\to-\\infty/(−\\infty)\\to+\\infty\\)... En fait \\(e^{-x}/x = e^{-x}/x \\to +\\infty/(-\\infty) = -\\infty\\).</p>
<p>Finalement \\(\\lim_{x\\to-\\infty}f(x)/x = +\\infty\\) et \\(\\lim_{x\\to+\\infty}f(x)/x = -\\infty\\).  <strong>Branches paraboliques de direction (Oy)</strong> aux deux infinis.</p>

<p><strong>5a)</strong> h décroissante sur \\([1;+\\infty[\\) de \\(h(1)=1\\) vers \\(-\\infty\\). Bijection de \\([1;+\\infty[\\) sur \\(J=]-\\infty;1]\\). </p>

<p><strong>b)</strong> Construire la courbe \\((C)\\), la courbe \\((\\Gamma)\\) et l'asymptote \\((D)\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1a) IPP</strong></p>
<p>\\(u=\\ln x\\), \\(v'=x \\Rightarrow u'=\\dfrac{1}{x}\\), \\(v=\\dfrac{x^2}{2}\\) :</p>
<p>\\[\\int_\\alpha^e x\\ln x\\,dx = \\left[\\dfrac{x^2}{2}\\ln x\\right]_\\alpha^e - \\int_\\alpha^e\\dfrac{x}{2}dx = \\dfrac{e^2}{2} - \\dfrac{\\alpha^2\\ln\\alpha}{2} - \\left[\\dfrac{x^2}{4}\\right]_\\alpha^e = \\dfrac{e^2}{4}-\\dfrac{\\alpha^2\\ln\\alpha}{2}+\\dfrac{\\alpha^2}{4}\\]</p>

<p><strong>1b)</strong></p>
<p>\\(I(\\alpha) = \\int_\\alpha^e(x-x\\ln x)dx = \\int_\\alpha^e x\\,dx - \\int_\\alpha^e x\\ln x\\,dx\\)</p>
<p>\\(= \\left[\\dfrac{x^2}{2}\\right]_\\alpha^e - \\left(\\dfrac{e^2}{4}-\\dfrac{\\alpha^2\\ln\\alpha}{2}+\\dfrac{\\alpha^2}{4}\\right) = \\dfrac{e^2-\\alpha^2}{2}-\\dfrac{e^2}{4}+\\dfrac{\\alpha^2\\ln\\alpha}{2}-\\dfrac{\\alpha^2}{4}\\)</p>
<p>\\[\\boxed{I(\\alpha) = \\dfrac{e^2}{4}+\\dfrac{\\alpha^2\\ln\\alpha}{2}-\\dfrac{3\\alpha^2}{4}}\\]</p>

<p><strong>2b)</strong> \\(\\lim_{\\alpha\\to0^+}\\alpha^2\\ln\\alpha = 0\\) et \\(\\alpha^2\\to0\\) → \\(\\lim_{\\alpha\\to0^+}I(\\alpha) = \\dfrac{e^2}{4}\\).</p>

<p><strong>3°)</strong> \\(A = 4\\times\\dfrac{e^2}{4} = e^2\\text{ cm}^2\\)</p>

<p><strong>4°) Volume</strong></p>
<p>\\(f(x) = e^x-e^{-x}\\) pour \\(x\\leq0\\). Sur \\([-1;0]\\) : \\(f(x)\\leq0\\).</p>
<p>\\([f(x)]^2 = (e^x-e^{-x})^2 = e^{2x}-2+e^{-2x}\\)</p>
<p>\\(V = 8\\pi\\int_{-1}^0(e^{2x}-2+e^{-2x})dx = 8\\pi\\left[\\dfrac{e^{2x}}{2}-2x-\\dfrac{e^{-2x}}{2}\\right]_{-1}^0\\)</p>
<p>\\(= 8\\pi\\left[(0-0-\\dfrac{1}{2})-(\\dfrac{e^{-2}}{2}+2-\\dfrac{e^2}{2})\\right] = 8\\pi\\left[-\\dfrac{1}{2}-\\dfrac{e^{-2}}{2}-2+\\dfrac{e^2}{2}\\right]\\)</p>
<p>\\[\\boxed{V = 4\\pi(e^2-e^{-2}-4)\\text{ cm}^3}\\]</p>

<p><strong>Partie C</strong></p>

<p><strong>1°)</strong> \\(x=\\ln(\\cos t)\\) → \\(\\cos t = e^x\\) (et \\(x<0\\) pour \\(t\\in]0;\\dfrac{\\pi}{2}[\\)).</p>
<p>\\(y = \\dfrac{\\cos^2t-1}{\\cos t} = \\dfrac{e^{2x}-1}{e^x} = f(x)\\) pour \\(x<0\\) </p>
<p>(Γ) est la partie de (C) correspondant à \\(x<0\\). </p>

<p><strong>2°) Vecteur vitesse en t=π/4</strong></p>
<p>\\(x'(t) = \\dfrac{-\\sin t}{\\cos t} = -\\tan t\\) → \\(x'(\\dfrac{\\pi}{4}) = -1\\)</p>
<p>\\(y'(t) = \\dfrac{-2\\cos t\\sin t\\cdot\\cos t-(\\cos^2t-1)(-\\sin t)}{\\cos^2t}\\)</p>
<p>\\(= \\dfrac{\\sin t(-\\cos^2t-1)}{\\cos^2t}\\cdot(-1)... \\) D'après le PDF :</p>
<p>\\[\\vec{V}\\!\\left(\\dfrac{\\pi}{4}\\right) = \\left(-1 ; -\\dfrac{3\\sqrt{2}}{2}\\right)\\]</p>

</div>
`
    }
  ]
},
{
  id: 'bac-2010-D-juillet-1er',
  year: 2010,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2010 / 1er tour',
  topics: ['Nombres complexes & Géométrie', 'Probabilités', 'Fonctions exponentielles & Dérivées', 'Intégrales & Suites'],
  parts: [
    {
      label: 'Exercice I — Complexes : P(z)=z³−(1−i)z²+z−1+i, triangle, translation, rotation (4 pts)',
      problem: `<p>Soit \\(P(z) = z^3-(1-i)z^2+z-1+i\\), \\(z\\in\\mathbb{C}\\).</p>
<p><strong>1)</strong> Démontrer que \\(P(z)=0\\) admet deux racines imaginaires pures.</p>
<p><strong>2)</strong> Résoudre \\(P(z)=0\\). Donner les solutions sous forme exponentielle.</p>
<p><strong>3)</strong> Soient \\(a=-i\\), \\(b=i\\), \\(c=1-i\\), et A, B, C leurs points d'affixes.</p>
<p><strong>a)</strong> Faire une figure.</p>
<p><strong>b)</strong> Calculer \\(\\dfrac{a-b}{a-c}\\) et préciser la nature du triangle ABC.</p>
<p><strong>c)</strong> C est l'image de D par la translation de vecteur \\(\\overrightarrow{AB}\\). Calculer l'affixe de D.</p>
<p><strong>d)</strong> E est l'image de D par la rotation de centre O et d'angle \\(\\dfrac{\\pi}{2}\\). Calculer l'affixe de E.</p>
<p><strong>e)</strong> Pour quelles valeurs de n, \\(c^n\\) est-il réel ?</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Polynômes complexes, translations &amp ; rotations</span>
  <ul>
    <li><strong>Racine évidente :</strong> Essayer $z_0 \\in \\{0, 1, -1, i, -i, 1+i, 1-i, \\ldots\\}$ dans $P(z)$.</li>
    <li><strong>Translation :</strong> $t_b : z \\mapsto z + b$ — déplace chaque point de l'affixe $b$.</li>
    <li><strong>Rotation :</strong> $r_{O,\\theta} : z \\mapsto e^{i\\theta} z$ — rotation de centre O et d'angle $\\theta$.</li>
    <li><strong>Triangle équilatéral :</strong> $\\dfrac{z_C - z_A}{z_B - z_A} = e^{\\pm i\\dfrac{\\pi}{3}}$ (rapport égal à $e^{i\\dfrac{\\pi}{3}}$ ou $e^{-i\\dfrac{\\pi}{3}}$).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°) Racines imaginaires pures</strong></p>
<p>Posons \\(z=ib\\), \\(b\\in\\mathbb{R}^*\\). \\(P(ib)=0\\) donne :</p>
<p>\\(\\begin{cases}-b^3-b^2+b+1=0 & (1) \\\\ b^2-1=0 & (2)\\end{cases}\\)</p>
<p>(2) → \\(b=\\pm1\\). Vérification dans (1) : \\(b=-1\\) : \\(1-1-1+1=0\\) (vérifié) ; \\(b=1\\) : \\(-1-1+1+1=0\\) (vérifié).</p>
<p> \\(P(z)=0\\) admet deux racines imaginaires pures : \\(\\boxed{z_1=-i}\\) et \\(\\boxed{z_2=i}\\).</p>

<p><strong>2°) Résolution complète</strong></p>
<p>\\(P(z) = (z-i)(z+i)(az+b) = (z^2+1)(az+b)\\). Par identification : \\(a=1\\) et \\(b=-(1-i)=-1+i\\).</p>
<p>\\(P(z) = (z^2+1)(z-1+i)\\)</p>
<p>\\(\\boxed{S_\\mathbb{C} = \\{-i ; i ; 1-i\\}}\\)</p>
<p>Formes exponentielles : \\(-i = e^{-i\\dfrac{\\pi}{2}}\\) ; \\(i = e^{i\\dfrac{\\pi}{2}}\\) ; \\(1-i = \\sqrt{2}e^{-i\\dfrac{\\pi}{4}}\\).</p>

<p><strong>3b) Triangle ABC</strong></p>
<p>\\(\\dfrac{a-b}{a-c} = \\dfrac{-i-i}{-i-(1-i)} = \\dfrac{-2i}{-1} = 2i\\)</p>
<p>\\(\\left|\\dfrac{a-b}{a-c}\\right| = 2\\) → \\(AB = 2AC\\) ; \\(\\arg = \\dfrac{\\pi}{2}\\) → \\(\\overrightarrow{AC}\\perp\\overrightarrow{AB}\\).</p>
<p> Triangle ABC <strong>rectangle en A</strong>.</p>

<p><strong>3c) Affixe de D</strong></p>
<p>\\(t(D)=C\\) → \\(z_C-z_D = z_B-z_A\\) → \\(z_D = z_C-z_B+z_A = (1-i)-i+(-i) = 1-3i\\)</p>
<p>\\(\\boxed{d = 1-3i}\\)</p>

<p><strong>3d) Affixe de E</strong></p>
<p>Rotation d'angle \\(\\dfrac{\\pi}{2}\\) : \\(z_E = e^{i\\dfrac{\\pi}{2}}\\cdot z_D = i(1-3i) = i+3 = 3+i\\)</p>
<p>\\(\\boxed{e = 3+i}\\)</p>

<p><strong>3e)</strong></p>
<p>\\(c = 1-i = \\sqrt{2}e^{-i\\dfrac{\\pi}{4}}\\). \\(c^n = (\\sqrt{2})^n e^{-in\\dfrac{\\pi}{4}}\\).</p>
<p>\\(c^n\\) réel \\(\\iff \\dfrac{n\\pi}{4} = k\\pi\\) → \\(\\boxed{n = 4k, \\ ; k\\in\\mathbb{Z}}\\) (multiples de 4).</p>`
    },
    {
      label: 'Exercice II — Probabilités : urne 4 rouges + 6 blanches (4 pts)',
      problem: `<p>Une urne contient 10 boules : 4 rouges et 6 blanches. On extrait simultanément 3 boules. X = nombre de boules rouges.</p>
<p><strong>1)</strong> Déterminer la loi de probabilité de X et calculer E(X).</p>
<p><strong>2)</strong> On répète n fois l'épreuve avec remise.</p>
<p><strong>a)</strong> Pour \\(n=5\\), calculer la probabilité d'obtenir exactement 2 fois un tirage de 3 boules rouges.</p>
<p><strong>b)</strong> Pour \\(n=2\\), noter S : « le nombre total de boules rouges obtenues après les deux tirages est 3 ». Calculer P(S).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Tirages avec/sans remise &amp ; probabilités</span>
  <ul>
    <li><strong>Tirage sans remise :</strong> La composition de l'urne change après chaque tirage.</li>
    <li><strong>Tirage avec remise :</strong> On remet la boule avant le prochain tirage — loi binomiale applicable.</li>
    <li><strong>Loi binomiale :</strong> $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$, $E(X) = np$.</li>
    <li><strong>Probabilité conditionnelle :</strong> $P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°)</strong> \\(\\text{Card}(\\Omega) = \\binom{10}{3} = 120\\).</p>

<table class="vtab">
  <tr>
    <th>X</th>
    <td>0</td><td>1</td><td>2</td><td>3</td>
  </tr>
  <tr>
    <th>P(X=x)</th>
    <td>\\(\\dfrac{20}{120}\\)</td><td>\\(\\dfrac{60}{120}\\)</td><td>\\(\\dfrac{36}{120}\\)</td><td>\\(\\dfrac{4}{120}\\)</td>
  </tr>
</table>
<p>\\(E(X) = \\dfrac{60+72+12}{120} = \\dfrac{144}{120} = \\boxed{\\dfrac{6}{5}}\\)</p>

<p><strong>2a°)</strong> \\(p = P(X=3) = \\dfrac{4}{120} = \\dfrac{1}{30}\\).</p>
<p>\\(P(\\text{exactement 2 fois}) = \\binom{5}{2}\\left(\\dfrac{1}{30}\\right)^2\\left(\\dfrac{29}{30}\\right)^3 = \\dfrac{10\\times29^3}{30^5} = \\dfrac{24389}{24300000}\\)</p>

<p><strong>2b°)</strong> \\(S\\) : total = 3 en 2 tirages → \\(S=\\{(0,3),(3,0),(1,2),(2,1)\\}\\).</p>
<p>\\(P(S) = 2\\times\\dfrac{20}{120}\\times\\dfrac{4}{120}+2\\times\\dfrac{60}{120}\\times\\dfrac{36}{120} = \\dfrac{160+4320}{14400} = \\dfrac{4480}{14400} = \\boxed{\\dfrac{14}{45}}\\)</p>`
    },
    {
      label: 'Problème — Fonctions exponentielles, intégrales & suites (12 pts)',
      problem: `<p>Repère orthonormal \\((O;\\vec{i};\\vec{j})\\), \\(\\|\\vec{i}\\|=\\|\\vec{j}\\|=2\\) cm.</p>

<p><strong>Partie A</strong></p>
<p>\\(f(x)=(x+1)^2e^{-x}\\) et \\(g(x)=e^{-x}\\).</p>
<p><strong>1) a)</strong> Calculer \\(\\lim_{x\\to+\\infty}f(x)\\) et \\(\\lim_{x\\to-\\infty}f(x)\\). Asymptote éventuelle.</p>
<p><strong>b)</strong> Calculer \\(f'(x)\\) et étudier son signe.</p>
<p><strong>c)</strong> Tableau de variations de f.</p>
<p><strong>2) a)</strong> Limites de g. <strong>b)</strong> Variations de g.</p>
<p><strong>3) a)</strong> Étudier le signe de \\(f(x)-g(x)\\). Position relative de \\((C_f)\\) et \\((C_g)\\).</p>
<p><strong>b)</strong> Montrer que les tangentes en \\(A(0;1)\\) à \\((C_f)\\) et \\((C_g)\\) sont perpendiculaires.</p>
<p><strong>4)</strong> Tracer \\((C_f)\\) et \\((C_g)\\) avec leurs tangentes en A.</p>

<p><strong>Partie B</strong></p>
<p><strong>1)</strong> Déterminer a, b, c tels que \\(H(t)=(at^2+bt+c)e^{-t}\\) soit une primitive de \\(h(t)=(t^2+2t)e^{-t}\\).</p>
<p><strong>2)</strong> Soit \\(\\alpha>0\\).</p>
<p><strong>a)</strong> Calculer \\(A(\\alpha)\\) en cm² de la région entre \\((C_f)\\), \\((C_g)\\), l'axe des ordonnées et \\(x=\\alpha\\).</p>
<p><strong>b)</strong> Calculer \\(\\lim_{\\alpha\\to+\\infty}A(\\alpha)\\).</p>
<p><strong>3)</strong> Calculer l'aire de la région entre \\((C_f)\\), \\((C_g)\\), \\(x=-2\\) et \\((Oy)\\).</p>

<p><strong>Partie C</strong></p>
<p>Soit \\(U_n = \\ln[f(n)]\\) pour \\(n\\geq1\\).</p>
<p><strong>1)</strong> Justifier que \\((U_n)\\) est décroissante.</p>
<p><strong>2)</strong> Soit \\(S_n = U_1+U_2+\\cdots+U_n\\).</p>
<p><strong>a)</strong> Montrer que \\(U_n = -n+2\\ln(n+1)\\).</p>
<p><strong>b)</strong> Démontrer que \\(S_n = 2\\ln[(n+1)!]-\\dfrac{n(n+1)}{2}\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions $e^{-x}$, intégrales &amp ; suites</span>
  <ul>
    <li><strong>Dérivée :</strong> $((x+1)^2 e^{-x})' = (x+1)(1-x)e^{-x}$ (règle du produit avec $u=(x+1)^2$, $v=e^{-x}$).</li>
    <li><strong>IPP :</strong> $\\int (x+1)^2 e^{-x}\\,dx$ — deux IPP successives. Primitives : $-(x^2+4x+5)e^{-x}+C$.</li>
    <li><strong>Suite $U_n = \\ln(f(n))$ :</strong> On étudie $U_{n+1} - U_n = \\ln\\dfrac{f(n+1)}{f(n)}$ pour la monotonie.</li>
    <li><strong>Limite de suite :</strong> Si $u_n \\to 0$ et $v_n \\sim u_n$, alors $\\ln(1 + u_n) \\sim u_n$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1a°)</strong></p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = 0\\) (croissances comparées). Asymptote horizontale \\(y=0\\) en \\(+\\infty\\).</p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = +\\infty\\) (car \\((x+1)^2\\to+\\infty\\) et \\(e^{-x}\\to+\\infty\\)).</p>

<p><strong>1b°)</strong></p>
<p>\\(f'(x) = 2(x+1)e^{-x}-(x+1)^2e^{-x} = e^{-x}(x+1)(2-(x+1)) = e^{-x}(x+1)(1-x) = e^{-x}(1-x^2)\\)</p>
<p>\\(f'(x)\\geq0 \\iff 1-x^2\\geq0 \\iff x\\in[-1;1]\\).</p>

<p><strong>1c°)</strong> f décroissante sur \\(]-\\infty;-1[\\), croissante sur \\([-1;1]\\), décroissante sur \\([1;+\\infty[\\).</p>
<p>\\(f(-1)=0\\), \\(f(1)=4e^{-1}\\approx1{,}47\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2010-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2010-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
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
    <text x="330" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−1</text>
    <text x="515" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">+∞</text>
    
    <line x1="330" y1="50" x2="330" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="330" y1="86" x2="330" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="515" y1="50" x2="515" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="515" y1="86" x2="515" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    
    <text x="235" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="330" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="515" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="610" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    
    <text x="145" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170" y1="225" x2="495" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2010-1-f)"/>
    <text x="515" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">4e⁻¹ ≈ 1,47</text>
    <line x1="535" y1="135" x2="685" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2010-1-f)"/>
    <text x="705" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
  </svg>
</div>

<p><strong>2°)</strong> \\(g'(x)=-e^{-x}<0\\) → g strictement décroissante de \\(+\\infty\\) vers 0.</p>

<p><strong>3a°)</strong></p>
<p>\\(f(x)-g(x) = e^{-x}((x+1)^2-1) = e^{-x}(x^2+2x) = e^{-x}x(x+2)\\)</p>
<p>Signe : \\(+\\) sur \\(]-\\infty;-2[\\), \\(-\\) sur \\(]-2;0[\\), \\(+\\) sur \\(]0;+\\infty[\\).</p>
<p>\\((C_f)\\) au-dessus de \\((C_g)\\) sur \\(]-\\infty;-2[\\) et \\(]0;+\\infty[\\) ; en-dessous sur \\(]-2;0[\\).</p>

<p><strong>3b°)</strong></p>
<p>\\(f'(0)\\times g'(0) = 1\\times(-1) = -1\\) → tangentes perpendiculaires en A. </p>
<p>Tangente à \\((C_f)\\) en A : \\(y=x+1\\) ; tangente à \\((C_g)\\) en A : \\(y=-x+1\\).</p>

<p><strong>4) Tracé des courbes \\((C_f)\\) et \\((C_g)\\) et de leurs tangentes en \\(A(0;1)\\)</strong></p>
<p>Au point commun \\(A(0 ; 1)\\), les tangentes \\(T_f: y = x+1\\) et \\(T_g: y = -x+1\\) sont perpendiculaires. \\((C_f)\\) admet un minimum en \\((-1 ; 0)\\) et un maximum en \\((1 ; \\dfrac{4}{e})\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2010 Tour 1 — Courbes (C_f) et (C_g)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="157.9" y1="40.0" x2="157.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="343.6" y1="40.0" x2="343.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="436.4" y1="40.0" x2="436.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="529.3" y1="40.0" x2="529.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="622.1" y1="40.0" x2="622.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="256.0" x2="715.0" y2="256.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="184.0" x2="715.0" y2="184.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="112.0" x2="715.0" y2="112.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="328.0" x2="735" y2="328.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="250.7" y1="415" x2="250.7" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="346.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="232.7" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="324.0" x2="65.0" y2="332.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="343.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="157.9" y1="324.0" x2="157.9" y2="332.0" stroke="#1f2937" stroke-width="1"/><text x="157.9" y="343.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="343.6" y1="324.0" x2="343.6" y2="332.0" stroke="#1f2937" stroke-width="1"/><text x="343.6" y="343.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="436.4" y1="324.0" x2="436.4" y2="332.0" stroke="#1f2937" stroke-width="1"/><text x="436.4" y="343.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="529.3" y1="324.0" x2="529.3" y2="332.0" stroke="#1f2937" stroke-width="1"/><text x="529.3" y="343.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="622.1" y1="324.0" x2="622.1" y2="332.0" stroke="#1f2937" stroke-width="1"/><text x="622.1" y="343.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="246.7" y1="400.0" x2="254.7" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="238.7" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="246.7" y1="256.0" x2="254.7" y2="256.0" stroke="#1f2937" stroke-width="1"/><text x="238.7" y="260.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="246.7" y1="184.0" x2="254.7" y2="184.0" stroke="#1f2937" stroke-width="1"/><text x="238.7" y="188.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="246.7" y1="112.0" x2="254.7" y2="112.0" stroke="#1f2937" stroke-width="1"/><text x="238.7" y="116.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><text x="240.7" y="343.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="157.9" y1="328.0" x2="529.3" y2="40.0" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 4"/>
    <line x1="157.9" y1="184.0" x2="529.3" y2="472.0" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Courbes -->
    <path d="M 83.6 49.2 L 85.4 67.7 L 87.2 85.3 L 89.0 101.9 L 90.8 117.8 L 92.6 132.7 L 94.4 146.9 L 96.2 160.4 L 98.0 173.1 L 99.8 185.1 L 101.6 196.4 L 103.4 207.1 L 105.2 217.1 L 107.0 226.6 L 108.8 235.5 L 110.6 243.8 L 112.4 251.6 L 114.2 258.9 L 116.0 265.7 L 117.8 272.1 L 119.7 278.0 L 121.5 283.5 L 123.3 288.6 L 125.1 293.3 L 126.9 297.6 L 128.7 301.5 L 130.5 305.1 L 132.3 308.4 L 134.1 311.4 L 135.9 314.1 L 137.7 316.5 L 139.5 318.7 L 141.3 320.6 L 143.1 322.2 L 144.9 323.6 L 146.7 324.8 L 148.5 325.8 L 150.3 326.6 L 152.1 327.2 L 153.9 327.6 L 155.7 327.9 L 157.5 328.0 L 159.3 328.0 L 161.1 327.8 L 163.0 327.4 L 164.8 327.0 L 166.6 326.4 L 168.4 325.8 L 170.2 325.0 L 172.0 324.1 L 173.8 323.2 L 175.6 322.1 L 177.4 321.0 L 179.2 319.8 L 181.0 318.5 L 182.8 317.2 L 184.6 315.8 L 186.4 314.4 L 188.2 312.9 L 190.0 311.4 L 191.8 309.8 L 193.6 308.2 L 195.4 306.6 L 197.2 305.0 L 199.0 303.3 L 200.8 301.6 L 202.6 299.9 L 204.4 298.2 L 206.2 296.4 L 208.1 294.7 L 209.9 292.9 L 211.7 291.2 L 213.5 289.4 L 215.3 287.7 L 217.1 285.9 L 218.9 284.2 L 220.7 282.5 L 222.5 280.7 L 224.3 279.0 L 226.1 277.3 L 227.9 275.6 L 229.7 274.0 L 231.5 272.3 L 233.3 270.7 L 235.1 269.0 L 236.9 267.4 L 238.7 265.9 L 240.5 264.3 L 242.3 262.8 L 244.1 261.3 L 245.9 259.8 L 247.7 258.3 L 249.5 256.9 L 251.4 255.5 L 253.2 254.1 L 255.0 252.8 L 256.8 251.5 L 258.6 250.2 L 260.4 248.9 L 262.2 247.7 L 264.0 246.5 L 265.8 245.3 L 267.6 244.2 L 269.4 243.0 L 271.2 242.0 L 273.0 240.9 L 274.8 239.9 L 276.6 238.9 L 278.4 237.9 L 280.2 237.0 L 282.0 236.1 L 283.8 235.2 L 285.6 234.4 L 287.4 233.6 L 289.2 232.8 L 291.0 232.1 L 292.8 231.3 L 294.6 230.6 L 296.5 230.0 L 298.3 229.4 L 300.1 228.8 L 301.9 228.2 L 303.7 227.6 L 305.5 227.1 L 307.3 226.6 L 309.1 226.2 L 310.9 225.7 L 312.7 225.3 L 314.5 224.9 L 316.3 224.6 L 318.1 224.2 L 319.9 223.9 L 321.7 223.6 L 323.5 223.4 L 325.3 223.1 L 327.1 222.9 L 328.9 222.7 L 330.7 222.6 L 332.5 222.4 L 334.3 222.3 L 336.1 222.2 L 337.9 222.1 L 339.8 222.1 L 341.6 222.1 L 343.4 222.1 L 345.2 222.1 L 347.0 222.1 L 348.8 222.1 L 350.6 222.2 L 352.4 222.3 L 354.2 222.4 L 356.0 222.5 L 357.8 222.6 L 359.6 222.8 L 361.4 223.0 L 363.2 223.2 L 365.0 223.4 L 366.8 223.6 L 368.6 223.8 L 370.4 224.1 L 372.2 224.3 L 374.0 224.6 L 375.8 224.9 L 377.6 225.2 L 379.4 225.5 L 381.2 225.8 L 383.0 226.2 L 384.9 226.5 L 386.7 226.9 L 388.5 227.3 L 390.3 227.6 L 392.1 228.0 L 393.9 228.5 L 395.7 228.9 L 397.5 229.3 L 399.3 229.7 L 401.1 230.2 L 402.9 230.6 L 404.7 231.1 L 406.5 231.6 L 408.3 232.0 L 410.1 232.5 L 411.9 233.0 L 413.7 233.5 L 415.5 234.0 L 417.3 234.5 L 419.1 235.1 L 420.9 235.6 L 422.7 236.1 L 424.5 236.7 L 426.3 237.2 L 428.2 237.7 L 430.0 238.3 L 431.8 238.8 L 433.6 239.4 L 435.4 240.0 L 437.2 240.5 L 439.0 241.1 L 440.8 241.7 L 442.6 242.3 L 444.4 242.8 L 446.2 243.4 L 448.0 244.0 L 449.8 244.6 L 451.6 245.2 L 453.4 245.8 L 455.2 246.4 L 457.0 247.0 L 458.8 247.6 L 460.6 248.2 L 462.4 248.8 L 464.2 249.4 L 466.0 250.0 L 467.8 250.6 L 469.6 251.2 L 471.4 251.8 L 473.3 252.4 L 475.1 253.0 L 476.9 253.6 L 478.7 254.2 L 480.5 254.8 L 482.3 255.4 L 484.1 256.0 L 485.9 256.6 L 487.7 257.2 L 489.5 257.8 L 491.3 258.4 L 493.1 259.0 L 494.9 259.6 L 496.7 260.2 L 498.5 260.8 L 500.3 261.4 L 502.1 262.0 L 503.9 262.6 L 505.7 263.2 L 507.5 263.7 L 509.3 264.3 L 511.1 264.9 L 512.9 265.5 L 514.7 266.1 L 516.6 266.6 L 518.4 267.2 L 520.2 267.8 L 522.0 268.4 L 523.8 268.9 L 525.6 269.5 L 527.4 270.1 L 529.2 270.6 L 531.0 271.2 L 532.8 271.7 L 534.6 272.3 L 536.4 272.8 L 538.2 273.4 L 540.0 273.9 L 541.8 274.4 L 543.6 275.0 L 545.4 275.5 L 547.2 276.0 L 549.0 276.6 L 550.8 277.1 L 552.6 277.6 L 554.4 278.1 L 556.2 278.6 L 558.0 279.2 L 559.8 279.7 L 561.7 280.2 L 563.5 280.7 L 565.3 281.2 L 567.1 281.7 L 568.9 282.1 L 570.7 282.6 L 572.5 283.1 L 574.3 283.6 L 576.1 284.1 L 577.9 284.5 L 579.7 285.0 L 581.5 285.5 L 583.3 285.9 L 585.1 286.4 L 586.9 286.9 L 588.7 287.3 L 590.5 287.8 L 592.3 288.2 L 594.1 288.6 L 595.9 289.1 L 597.7 289.5 L 599.5 289.9 L 601.3 290.4 L 603.1 290.8 L 605.0 291.2 L 606.8 291.6 L 608.6 292.0 L 610.4 292.4 L 612.2 292.9 L 614.0 293.3 L 615.8 293.7 L 617.6 294.0 L 619.4 294.4 L 621.2 294.8 L 623.0 295.2 L 624.8 295.6 L 626.6 296.0 L 628.4 296.3 L 630.2 296.7 L 632.0 297.1 L 633.8 297.4 L 635.6 297.8 L 637.4 298.2 L 639.2 298.5 L 641.0 298.9 L 642.8 299.2 L 644.6 299.6 L 646.4 299.9 L 648.2 300.2 L 650.1 300.6 L 651.9 300.9 L 653.7 301.2 L 655.5 301.5 L 657.3 301.9 L 659.1 302.2 L 660.9 302.5 L 662.7 302.8 L 664.5 303.1 L 666.3 303.4 L 668.1 303.7 L 669.9 304.0 L 671.7 304.3 L 673.5 304.6 L 675.3 304.9 L 677.1 305.2 L 678.9 305.5 L 680.7 305.8 L 682.5 306.0 L 684.3 306.3 L 686.1 306.6 L 687.9 306.8 L 689.7 307.1 L 691.5 307.4 L 693.4 307.6 L 695.2 307.9 L 697.0 308.1 L 698.8 308.4 L 700.6 308.6 L 702.4 308.9 L 704.2 309.1 L 706.0 309.4 L 707.8 309.6 L 709.6 309.8 L 711.4 310.1 L 713.2 310.3 L 715.0 310.5" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 130.0 63.8 L 131.7 68.5 L 133.3 73.2 L 135.0 77.7 L 136.7 82.2 L 138.4 86.5 L 140.0 90.9 L 141.7 95.1 L 143.4 99.2 L 145.0 103.3 L 146.7 107.3 L 148.4 111.3 L 150.1 115.1 L 151.7 118.9 L 153.4 122.7 L 155.1 126.3 L 156.7 129.9 L 158.4 133.5 L 160.1 136.9 L 161.8 140.3 L 163.4 143.7 L 165.1 147.0 L 166.8 150.2 L 168.4 153.4 L 170.1 156.5 L 171.8 159.5 L 173.5 162.6 L 175.1 165.5 L 176.8 168.4 L 178.5 171.2 L 180.1 174.0 L 181.8 176.8 L 183.5 179.5 L 185.2 182.1 L 186.8 184.7 L 188.5 187.3 L 190.2 189.8 L 191.8 192.3 L 193.5 194.7 L 195.2 197.1 L 196.9 199.4 L 198.5 201.7 L 200.2 204.0 L 201.9 206.2 L 203.5 208.3 L 205.2 210.5 L 206.9 212.6 L 208.6 214.6 L 210.2 216.7 L 211.9 218.6 L 213.6 220.6 L 215.2 222.5 L 216.9 224.4 L 218.6 226.2 L 220.3 228.1 L 221.9 229.8 L 223.6 231.6 L 225.3 233.3 L 226.9 235.0 L 228.6 236.7 L 230.3 238.3 L 232.0 239.9 L 233.6 241.5 L 235.3 243.0 L 237.0 244.5 L 238.6 246.0 L 240.3 247.5 L 242.0 248.9 L 243.7 250.3 L 245.3 251.7 L 247.0 253.1 L 248.7 254.4 L 250.3 255.7 L 252.0 257.0 L 253.7 258.3 L 255.4 259.5 L 257.0 260.7 L 258.7 261.9 L 260.4 263.1 L 262.0 264.3 L 263.7 265.4 L 265.4 266.5 L 267.1 267.6 L 268.7 268.7 L 270.4 269.8 L 272.1 270.8 L 273.7 271.8 L 275.4 272.8 L 277.1 273.8 L 278.8 274.8 L 280.4 275.7 L 282.1 276.6 L 283.8 277.6 L 285.4 278.5 L 287.1 279.3 L 288.8 280.2 L 290.5 281.1 L 292.1 281.9 L 293.8 282.7 L 295.5 283.5 L 297.1 284.3 L 298.8 285.1 L 300.5 285.9 L 302.2 286.6 L 303.8 287.4 L 305.5 288.1 L 307.2 288.8 L 308.8 289.5 L 310.5 290.2 L 312.2 290.9 L 313.9 291.5 L 315.5 292.2 L 317.2 292.8 L 318.9 293.4 L 320.5 294.1 L 322.2 294.7 L 323.9 295.3 L 325.6 295.8 L 327.2 296.4 L 328.9 297.0 L 330.6 297.5 L 332.2 298.1 L 333.9 298.6 L 335.6 299.1 L 337.3 299.6 L 338.9 300.2 L 340.6 300.7 L 342.3 301.1 L 343.9 301.6 L 345.6 302.1 L 347.3 302.6 L 349.0 303.0 L 350.6 303.5 L 352.3 303.9 L 354.0 304.3 L 355.6 304.7 L 357.3 305.2 L 359.0 305.6 L 360.7 306.0 L 362.3 306.4 L 364.0 306.7 L 365.7 307.1 L 367.3 307.5 L 369.0 307.9 L 370.7 308.2 L 372.4 308.6 L 374.0 308.9 L 375.7 309.3 L 377.4 309.6 L 379.0 309.9 L 380.7 310.2 L 382.4 310.6 L 384.1 310.9 L 385.7 311.2 L 387.4 311.5 L 389.1 311.8 L 390.7 312.1 L 392.4 312.3 L 394.1 312.6 L 395.8 312.9 L 397.4 313.2 L 399.1 313.4 L 400.8 313.7 L 402.4 313.9 L 404.1 314.2 L 405.8 314.4 L 407.5 314.7 L 409.1 314.9 L 410.8 315.2 L 412.5 315.4 L 414.1 315.6 L 415.8 315.8 L 417.5 316.1 L 419.2 316.3 L 420.8 316.5 L 422.5 316.7 L 424.2 316.9 L 425.8 317.1 L 427.5 317.3 L 429.2 317.5 L 430.9 317.7 L 432.5 317.8 L 434.2 318.0 L 435.9 318.2 L 437.5 318.4 L 439.2 318.5 L 440.9 318.7 L 442.6 318.9 L 444.2 319.0 L 445.9 319.2 L 447.6 319.4 L 449.2 319.5 L 450.9 319.7 L 452.6 319.8 L 454.3 320.0 L 455.9 320.1 L 457.6 320.2 L 459.3 320.4 L 460.9 320.5 L 462.6 320.7 L 464.3 320.8 L 466.0 320.9 L 467.6 321.0 L 469.3 321.2 L 471.0 321.3 L 472.6 321.4 L 474.3 321.5 L 476.0 321.6 L 477.7 321.7 L 479.3 321.9 L 481.0 322.0 L 482.7 322.1 L 484.3 322.2 L 486.0 322.3 L 487.7 322.4 L 489.4 322.5 L 491.0 322.6 L 492.7 322.7 L 494.4 322.8 L 496.0 322.9 L 497.7 323.0 L 499.4 323.1 L 501.1 323.1 L 502.7 323.2 L 504.4 323.3 L 506.1 323.4 L 507.7 323.5 L 509.4 323.6 L 511.1 323.6 L 512.8 323.7 L 514.4 323.8 L 516.1 323.9 L 517.8 323.9 L 519.4 324.0 L 521.1 324.1 L 522.8 324.2 L 524.5 324.2 L 526.1 324.3 L 527.8 324.4 L 529.5 324.4 L 531.1 324.5 L 532.8 324.5 L 534.5 324.6 L 536.2 324.7 L 537.8 324.7 L 539.5 324.8 L 541.2 324.8 L 542.8 324.9 L 544.5 325.0 L 546.2 325.0 L 547.9 325.1 L 549.5 325.1 L 551.2 325.2 L 552.9 325.2 L 554.5 325.3 L 556.2 325.3 L 557.9 325.4 L 559.6 325.4 L 561.2 325.5 L 562.9 325.5 L 564.6 325.5 L 566.2 325.6 L 567.9 325.6 L 569.6 325.7 L 571.3 325.7 L 572.9 325.8 L 574.6 325.8 L 576.3 325.8 L 577.9 325.9 L 579.6 325.9 L 581.3 326.0 L 583.0 326.0 L 584.6 326.0 L 586.3 326.1 L 588.0 326.1 L 589.6 326.1 L 591.3 326.2 L 593.0 326.2 L 594.7 326.2 L 596.3 326.3 L 598.0 326.3 L 599.7 326.3 L 601.3 326.4 L 603.0 326.4 L 604.7 326.4 L 606.4 326.4 L 608.0 326.5 L 609.7 326.5 L 611.4 326.5 L 613.0 326.5 L 614.7 326.6 L 616.4 326.6 L 618.1 326.6 L 619.7 326.6 L 621.4 326.7 L 623.1 326.7 L 624.7 326.7 L 626.4 326.7 L 628.1 326.8 L 629.8 326.8 L 631.4 326.8 L 633.1 326.8 L 634.8 326.8 L 636.4 326.9 L 638.1 326.9 L 639.8 326.9 L 641.5 326.9 L 643.1 326.9 L 644.8 327.0 L 646.5 327.0 L 648.1 327.0 L 649.8 327.0 L 651.5 327.0 L 653.2 327.1 L 654.8 327.1 L 656.5 327.1 L 658.2 327.1 L 659.8 327.1 L 661.5 327.1 L 663.2 327.2 L 664.9 327.2 L 666.5 327.2 L 668.2 327.2 L 669.9 327.2 L 671.5 327.2 L 673.2 327.2 L 674.9 327.3 L 676.6 327.3 L 678.2 327.3 L 679.9 327.3 L 681.6 327.3 L 683.2 327.3 L 684.9 327.3 L 686.6 327.3 L 688.3 327.4 L 689.9 327.4 L 691.6 327.4 L 693.3 327.4 L 694.9 327.4 L 696.6 327.4 L 698.3 327.4 L 700.0 327.4 L 701.6 327.4 L 703.3 327.4 L 705.0 327.5 L 706.6 327.5 L 708.3 327.5 L 710.0 327.5 L 711.7 327.5 L 713.3 327.5 L 715.0 327.5" fill="none" stroke="#10b981" stroke-width="2.0" stroke-dasharray="4 4" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="157.9" cy="328.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(102.9, 316.0)">
      <text x="46.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (−1 ; 0)</text>
    </g>
    <circle cx="250.7" cy="256.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(260.7, 271.0)">
      <text x="57.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(0 ; 1) commun</text>
    </g>
    <circle cx="343.6" cy="222.1" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(353.6, 207.1)">
      <text x="53.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (1 ; 4e<tspan dy="-3" font-size="9">-1</tspan><tspan dy="3">)</tspan></text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="88" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_f) : (x+1)² e<tspan dy="-3" font-size="9">-x</tspan></text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C_g) : e<tspan dy="-3" font-size="9">-x</tspan></text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente (T_f) en A : y=x+1</text>
      <line x1="10" y1="69" x2="35" y2="69" stroke="#64748b" stroke-width="2.5" stroke-dasharray="3 3"/>
      <text x="42" y="73" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente (T_g) en A : y=−x+1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>1°)</strong> \\(H'(t) = h(t)\\) → identification :</p>
<p>\\((-at^2+(2a-b)t+(b-c))e^{-t} = (t^2+2t)e^{-t}\\)</p>
<p>\\(-a=1\\), \\(2a-b=2\\), \\(b-c=0\\) → \\(a=-1\\), \\(b=-4\\), \\(c=-4\\).</p>
<p>\\(\\boxed{H(t) = (-t^2-4t-4)e^{-t}}\\)</p>

<p><strong>2a°)</strong> Sur \\([0;\\alpha]\\), \\(f(x)\\geq g(x)\\) :</p>
<p>\\(A(\\alpha) = 4\\int_0^\\alpha(x^2+2x)e^{-x}dx = 4[(-x^2-4x-4)e^{-x}]_0^\\alpha\\)</p>
<p>\\(\\boxed{A(\\alpha) = 4[4-(\\alpha^2+4\\alpha+4)e^{-\\alpha}]\\text{ cm}^2}\\)</p>

<p><strong>2b°)</strong> \\(\\lim_{\\alpha\\to+\\infty}A(\\alpha) = 4\\times4 = \\boxed{16\\text{ cm}^2}\\) (car \\(\\alpha^2 e^{-\\alpha}\\to0\\)).</p>

<p><strong>3°)</strong> Sur \\([-2;0]\\), \\(g(x)\\geq f(x)\\) :</p>
<p>\\(A = 4\\int_{-2}^0(x^2+2x)e^{-x}dx\\times(-1) = 4[(x^2+4x+4)e^{-x}]_{-2}^0 = 4[4-0] = \\boxed{16\\text{ cm}^2}\\)</p>

<p><strong>Partie C</strong></p>

<p><strong>1°)</strong> f décroissante sur \\([1;+\\infty[\\) → \\(f(n+1)\\leq f(n)\\) → \\(\\ln f(n+1)\\leq\\ln f(n)\\) → \\(U_{n+1}\\leq U_n\\). </p>

<p><strong>2a°)</strong></p>
<p>\\(U_n = \\ln[(n+1)^2 e^{-n}] = 2\\ln(n+1)+\\ln e^{-n} = -n+2\\ln(n+1)\\) </p>

<p><strong>2b°)</strong></p>
<p>\\(S_n = \\sum_{k=1}^n(-k+2\\ln(k+1)) = -\\dfrac{n(n+1)}{2}+2\\sum_{k=1}^n\\ln(k+1)\\)</p>
<p>\\(= -\\dfrac{n(n+1)}{2}+2\\ln(2\\times3\\times\\cdots\\times(n+1)) = -\\dfrac{n(n+1)}{2}+2\\ln[(n+1)!]\\)</p>
<p>\\[\\boxed{S_n = 2\\ln[(n+1)!]-\\dfrac{n(n+1)}{2}}\\] </p>

</div>
`
    }
  ]
},

{
  id: 'bac-2010-D-juillet-2nd',
  year: 2010,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2010 / 2nd tour',
  topics: ['Nombres complexes & Ensembles géométriques', 'Statistiques & Droite de Mayer', 'Fonction par morceaux & Intégrales', 'Intégrales & Courbes paramétriques'],
  parts: [
    {
      label: 'Exercice I — Nombres complexes, cercle & médiatrice (4 pts)',
      problem: `<p>Dans \\((O;\\vec{u};\\vec{v})\\), unité 2 cm. A d'affixe \\(2i\\), B d'affixe \\(-1\\), C d'affixe \\(i\\). Pour \\(z\\neq2i\\) :</p>
<p>\\[z' = \\dfrac{z+1}{z-2i}\\]</p>
<p><strong>1)</strong> Placer A, B, C.</p>
<p><strong>2)</strong> Calculer l'affixe de C', image de C par f. Nature du quadrilatère ACB C'.</p>
<p><strong>3)</strong> Montrer que C admet un unique antécédent C'' par f. Nature du triangle BCC''.</p>
<p><strong>4)</strong> Interprétation géométrique de \\(|z'|\\) et \\(\\arg(z')\\).</p>
<p><strong>5)</strong> Déterminer :</p>
<p><strong>a)</strong> (E) : image par f est un réel strictement négatif.</p>
<p><strong>b)</strong> (F) : image par f est un imaginaire pur non nul.</p>
<p><strong>c)</strong> (D) : image par f a pour module 1.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Nombres complexes &amp ; transformations</span>
  <ul>
    <li><strong>Conjugué :</strong> $\\overline{z} = x - iy$, $z \\cdot \\overline{z} = |z|^2$.</li>
    <li><strong>Partie réelle / imaginaire :</strong> $\\text{Re}(z) = \\dfrac{z + \\overline{z}}{2}$, $\\text{Im}(z) = \\dfrac{z - \\overline{z}}{2i}$.</li>
    <li><strong>Lieux géométriques :</strong> $|z - z_0| = r$ est un cercle de centre $z_0$ et rayon $r$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>2°)</strong></p>
<p>\\(z_{C'} = \\dfrac{i+1}{i-2i} = \\dfrac{1+i}{-i} = \\dfrac{(1+i)i}{1} = -1+i\\)</p>
<p>\\(z_C-z_A = i-2i = -i\\) et \\(z_B-z_{C'} = -1-(-1+i) = -i\\) → \\(\\overrightarrow{AC}=\\overrightarrow{C'B}\\) → ACB C' est un <strong>parallélogramme</strong>.</p>

<p><strong>3°)</strong></p>
<p>\\(f(z_{C''}) = z_C = i \\iff \\dfrac{z_{C''}+1}{z_{C''}-2i} = i \\iff z_{C''}+1 = iz_{C''}-2i^2 = iz_{C''}+2\\)</p>
<p>\\(z_{C''}(1-i) = 1 \\iff z_{C''} = \\dfrac{1}{1-i} = \\dfrac{1+i}{2} = \\dfrac{1}{2}+\\dfrac{i}{2}\\)</p>
<p>\\(\\dfrac{z_{C''}-z_C}{z_B-z_C} = \\dfrac{\\dfrac{1}{2}+\\dfrac{i}{2}-i}{-1-i} = \\dfrac{\\dfrac{1}{2}-\\dfrac{i}{2}}{-1-i} = \\dfrac{1-i}{-2(1+i)} = \\dfrac{(1-i)^2}{-2\\times2} = \\dfrac{-2i}{-4} = \\dfrac{i}{2}\\)</p>
<p>Module \\(1/2\\), argument \\(\\dfrac{\\pi}{2}\\) → BC C'' rectangle en C. </p>

<p><strong>4°)</strong></p>
<p>\\(z' = \\dfrac{z-z_B}{z-z_A}\\) (avec \\(z_B=-1\\) et \\(z_A=2i\\)).</p>
<p>\\(|z'| = \\dfrac{BM}{AM}\\) ; \\(\\arg(z') = (\\overrightarrow{MA};\\overrightarrow{MB})\\) [\\(2\\pi\\)].</p>

<p><strong>5a°)</strong> \\(z'\\) réel négatif \\(\\iff \\arg(z')=\\pi[2\\pi] \\iff (\\overrightarrow{MA};\\overrightarrow{MB})=\\pi[2\\pi]\\).</p>
<p> (E) est le <strong>segment ]AB[</strong> privé de A et B.</p>

<p><strong>5b°)</strong> \\(z'\\) imaginaire pur non nul \\(\\iff \\arg(z')=\\dfrac{\\pi}{2}[\\pi] \\iff (\\overrightarrow{MA};\\overrightarrow{MB})=\\dfrac{\\pi}{2}[\\pi]\\).</p>
<p> (F) est le <strong>cercle de diamètre [AB]</strong> privé de A et B.</p>

<p><strong>5c°)</strong> \\(|z'|=1 \\iff BM=AM\\).</p>
<p> (D) est la <strong>médiatrice de [AB]</strong>.</p>`
    },
    {
      label: 'Exercice II — Statistiques : production de pulls, droite de Mayer (4 pts)',
      problem: `<p>Production journalière moyenne de pulls (2008) :</p>
<table class="vtab">
  <tr>
    <th>Rang \\(x_i\\)</th>
    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
  </tr>
  <tr>
    <th>Production \\(y_i\\)</th>
    <td>200</td><td>210</td><td>260</td><td>265</td><td>270</td><td>300</td><td>315</td>
  </tr>
</table>
<p><strong>1) a)</strong> Nuage de points. <strong>b)</strong> Calculer G et le placer.</p>
<p><strong>2) a)</strong> Calculer \\(G_1\\) (4 premiers) et \\(G_2\\) (3 derniers). <strong>b)</strong> Équation de \\((G_1G_2)\\).</p>
<p><strong>3) a)</strong> Production en décembre 2008 (rang 12). <strong>b)</strong> Lecture graphique.</p>
<p><strong>4)</strong> L'atelier a-t-il fermé en décembre 2008 ? (seuil : 350 pulls).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Régression &amp ; droite de Mayer</span>
  <ul>
    <li><strong>Droite de Mayer :</strong> Diviser en deux demi-séries, calculer $G_1$ et $G_2$, tracer la droite $G_1G_2$.</li>
    <li><strong>Équation de la droite :</strong> $y - \\bar{y}_1 = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}(x - \\bar{x}_1)$.</li>
    <li><strong>Prévision :</strong> Substituer la valeur de $x$ cherchée dans l'équation pour obtenir $y$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1b°)</strong></p>
<p>\\(\\bar{x} = \\dfrac{1+2+\\cdots+7}{7} = 4\\) ; \\(\\bar{y} = \\dfrac{200+210+260+265+270+300+315}{7} = \\dfrac{1820}{7} = 260\\)</p>
<p>\\(\\boxed{G(4;260)}\\)</p>

<p><strong>2a°)</strong></p>
<p>\\(G_1\\) (4 premiers) : \\(\\bar{x}_1 = \\dfrac{10}{4}=2{,}5\\), \\(\\bar{y}_1 = \\dfrac{935}{4}=233{,}75\\) → \\(G_1(2{,}5 ; 233{,}75)\\)</p>
<p>\\(G_2\\) (3 derniers) : \\(\\bar{x}_2 = \\dfrac{18}{3}=6\\), \\(\\bar{y}_2 = \\dfrac{885}{3}=295\\) → \\(G_2(6 ; 295)\\)</p>

<p><strong>2b°)</strong></p>
<p>\\(a = \\dfrac{295-233{,}75}{6-2{,}5} = \\dfrac{61{,}25}{3{,}5} = 17{,}5\\)</p>
<p>\\(233{,}75 = 17{,}5\\times2{,}5+b \\Rightarrow b=190\\)</p>
<p>\\[\\boxed{(G_1G_2): y = 17{,}5x+190}\\]</p>

<p><strong>3a°)</strong> Décembre = rang \\(x=12\\) : \\(y(12) = 17{,}5\\times12+190 = 210+190 = \\boxed{400}\\) pulls.</p>

<p><strong>4°)</strong> \\(400>350\\) →  L'atelier <strong>n'a pas fermé</strong> en décembre 2008.</p>`
    },
    {
      label: 'Problème — Fonction par morceaux, asymptotes & intégrales (12 pts)',
      problem: `<p>Soit f définie sur \\(\\mathbb{R}\\) par :</p>
<p>\\[f(x) = \\begin{cases}\\dfrac{-4\\ln(-x)}{x} & x\\in]-\\infty;-1[ \\\\ (x+1)(1+e^{-x}) & x\\in[-1;+\\infty[\\end{cases}\\]</p>
<p>Courbe (C) dans \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>

<p><strong>Partie A</strong> — Soit \\(u(x)=1-xe^{-x}\\).</p>
<p><strong>1)</strong> Étudier le sens de variation de u.</p>
<p><strong>2)</strong> En déduire le signe de u(x).</p>

<p><strong>Partie B</strong></p>
<p><strong>1) a)</strong> Vérifier que f est continue en −1.</p>
<p><strong>b)</strong> Étudier la dérivabilité en −1. Interpréter.</p>
<p><strong>c)</strong> Limites aux bornes. Asymptotes.</p>
<p><strong>d)</strong> Montrer que \\(y=x+1\\) est asymptote à (C). Position relative sur \\([-1;+\\infty[\\).</p>
<p><strong>2) a)</strong> Vérifier que pour \\(x<-1\\) : \\(f'(x)=\\dfrac{4(\\ln(-x)-1)}{x^2}\\).</p>
<p><strong>b)</strong> Variations de f sur \\(]-\\infty;-1[\\) et sur \\([-1;+\\infty[\\). Tableau.</p>
<p><strong>c)</strong> Montrer qu'il existe un point d'abscisse \\(>-1\\) où la tangente (T) à (C) est parallèle à \\((D):y=x+1\\).</p>
<p><strong>3) a)</strong> Montrer que (C) est au-dessus de l'axe des abscisses.</p>

<p><strong>b)</strong> Construire la courbe \\((C)\\), la courbe \\((\\Gamma)\\) et l'asymptote \\((D)\\).</p>

<p><strong>Partie C</strong></p>
<p><strong>1)</strong> Calculer \\(I=\\displaystyle\\int_{-e}^{-1}\\dfrac{\\ln(-x)}{x}dx\\) et \\(J(\\lambda)=\\displaystyle\\int_{-1}^\\lambda(x+1)e^{-x}dx\\) (\\(\\lambda>-1\\)).</p>
<p><strong>2)</strong> Montrer que \\(\\mathcal{A}(\\lambda)=8+4e-4(\\lambda+2)e^{-\\lambda}\\) est l'aire entre (C), (D), \\(x=-e\\) et \\(x=\\lambda\\).</p>
<p><strong>3)</strong> Calculer \\(\\lim_{\\lambda\\to+\\infty}\\mathcal{A}(\\lambda)\\).</p>

<p><strong>Partie D</strong></p>
<p>Soit (Γ) : \\(x(t)=-e^{-t}\\), \\(y(t)=4te^t\\), \\(t<0\\).</p>
<p><strong>1)</strong> Montrer que (Γ) est l'image d'une partie de (C) par la symétrie orthogonale d'axe \\((O;\\vec{i})\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions par morceaux, asymptotes &amp ; intégrales</span>
  <ul>
    <li><strong>$\\lim_{x\\to -\\infty} \\ln(-x)/x$ :</strong> Croissances comparées — $\\ln |x|$ croît moins vite que $x$, donc $\\to 0$.</li>
    <li><strong>Asymptote oblique :</strong> $y = ax + b$ si $\\lim_{x\\to\\pm\\infty}(f(x)-ax-b) = 0$.</li>
    <li><strong>Continuité en 0 :</strong> Vérifier $\\lim_{x\\to 0^-} f(x) = \\lim_{x\\to 0^+} f(x) = f(0)$.</li>
    <li><strong>Intégrale d'une fonction positive :</strong> $\\int_a^b f(x)\\,dx$ représente l'aire entre la courbe et l'axe $Ox$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°)</strong> \\(u'(x) = (-1+x)e^{-x}\\). Signe de \\(u'\\) = signe de \\(x-1\\).</p>
<p>u décroissante sur \\(]-\\infty;1[\\), croissante sur \\(]1;+\\infty[\\). Minimum en \\(x=1\\) : \\(u(1)=1-e^{-1}>0\\).</p>

<p><strong>2°)</strong> Minimum absolu \\(u(1)>0\\) → \\(\\boxed{u(x)>0}\\) pour tout \\(x\\in\\mathbb{R}\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1a°)</strong></p>
<p>\\(\\lim_{x\\to-1^-}f(x) = \\dfrac{-4\\ln1}{-1} = 0 = f(-1)\\).  Continue en −1.</p>

<p><strong>1b°)</strong></p>
<p>\\(f'_g(-1) = \\lim_{x\\to-1^-}\\dfrac{-4\\ln(-x)}{x(x+1)} = \\lim_{X\\to1^+}\\dfrac{-4\\ln X}{-1(X-1)\\cdot(-1)} = -4\\lim_{X\\to1^+}\\dfrac{\\ln X}{X-1} = -4\\)</p>
<p>\\(f'_d(-1) = \\lim_{x\\to-1^+}(1+e^{-x}) = 1+e\\)</p>
<p>\\(f'_g\\neq f'_d\\) → point anguleux en \\((-1;0)\\). Demi-tangentes : \\(y=-4x-4\\) (gauche) et \\(y=(1+e)(x+1)\\) (droite).</p>

<p><strong>1c°)</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = \\lim_{x\\to-\\infty}\\dfrac{-4\\ln(-x)}{x} = 0\\) (car \\(\\ln X/X\\to0\\)). Asymptote \\(y=0\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\).</p>

<p><strong>1d°)</strong></p>
<p>\\(\\lim_{x\\to+\\infty}[f(x)-(x+1)] = \\lim_{x\\to+\\infty}(x+1)e^{-x} = 0\\)  → asymptote oblique \\(y=x+1\\).</p>
<p>\\(f(x)-(x+1) = (x+1)e^{-x}\\geq0\\) pour \\(x\\geq-1\\) → (C) <strong>au-dessus de (D)</strong>.</p>

<p><strong>2a°)</strong> \\(f'(x) = \\dfrac{-\\dfrac{4}{x}\\cdot x+4\\ln(-x)}{x^2} = \\dfrac{-4+4\\ln(-x)}{x^2} = \\dfrac{4(\\ln(-x)-1)}{x^2}\\) </p>

<p><strong>2b°)</strong></p>
<p>Pour \\(x<-1\\) : \\(\\ln(-x)-1>0 \\iff -x>e \\iff x<-e\\).</p>
<p>f croissante sur \\(]-\\infty;-e[\\), décroissante sur \\(]-e;-1[\\). Maximum : \\(f(-e)=\\dfrac{4}{e}\\).</p>
<p>Pour \\(x>-1\\) : \\(f'(x)=u(x)>0\\) (partie A) → f <strong>croissante sur \\([-1;+\\infty[\\)</strong>.</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f'</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="331.7" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">-e</text>
    <text x="518.3" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">-1</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="238.3" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="331.7" y1="50" x2="331.7" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="331.7" y1="86" x2="331.7" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="331.7" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="611.7" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">−</text>
    <line x1="518.3" y1="50" x2="518.3" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="518.3" y1="86" x2="518.3" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="518.3" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="306.7" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-13)"/>
    <line x1="356.7" y1="135" x2="493.3" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-13)"/>
    <line x1="543.3" y1="225" x2="680.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-13)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <text x="331.7" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">4/e</text>
    <text x="518.3" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <text x="705.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>2c°)</strong> \\(f'(x_0)=1\\) pour \\(x_0>-1\\) : \\(u(x_0)=1-x_0e^{-x_0}=1 \\iff x_0e^{-x_0}=0 \\iff x_0=0\\).</p>
<p>En \\(x_0=0\\) : \\(f(0)=1\\).  Tangente (T) en \\((0;1)\\) parallèle à (D).</p>

<p><strong>3a°)</strong> Le minimum absolu de f est 0 (atteint en \\(x=-1\\)) → \\(f(x)\\geq0\\) pour tout x. </p>
<p><strong>3b°) Tracé des courbes :</strong></p>
<p><strong>Tracé de la courbe \\((C)\\) et de sa réciproque \\((\\Gamma)\\)</strong></p>
<p>Pour \\(x < 0\\), \\(f(x) = 2\\sinh(x)\\) et pour \\(x > 0\\), \\(f(x) = x - x\\ln x\\). La courbe \\((\\Gamma)\\) de la bijection réciproque \\(h^{-1}\\) est la symétrique de la branche sur \\([1;+\\infty[\\) par rapport à la première bissectrice \\(y = x\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2008 Tour 2 — Courbe (C)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="151.7" y1="40.0" x2="151.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="238.3" y1="40.0" x2="238.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="411.7" y1="40.0" x2="411.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="498.3" y1="40.0" x2="498.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="585.0" y1="40.0" x2="585.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="671.7" y1="40.0" x2="671.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="328.0" x2="715.0" y2="328.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="256.0" x2="715.0" y2="256.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="112.0" x2="715.0" y2="112.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="184.0" x2="735" y2="184.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="325.0" y1="415" x2="325.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="202.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="307.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="180.0" x2="65.0" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="151.7" y1="180.0" x2="151.7" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="151.7" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="238.3" y1="180.0" x2="238.3" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="238.3" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="411.7" y1="180.0" x2="411.7" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="411.7" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="498.3" y1="180.0" x2="498.3" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="498.3" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="585.0" y1="180.0" x2="585.0" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="585.0" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="671.7" y1="180.0" x2="671.7" y2="188.0" stroke="#1f2937" stroke-width="1"/><text x="671.7" y="199.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="321.0" y1="400.0" x2="329.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="321.0" y1="328.0" x2="329.0" y2="328.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="332.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="321.0" y1="256.0" x2="329.0" y2="256.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="260.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="321.0" y1="112.0" x2="329.0" y2="112.0" stroke="#1f2937" stroke-width="1"/><text x="313.0" y="116.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><text x="315.0" y="199.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="325.0" y1="112.0" x2="541.7" y2="112.0" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Courbes -->
    <path d="M 174.9 578.0 L 175.7 574.4 L 176.4 570.8 L 177.2 567.3 L 177.9 563.8 L 178.7 560.3 L 179.4 556.9 L 180.1 553.5 L 180.9 550.1 L 181.6 546.7 L 182.4 543.4 L 183.1 540.1 L 183.9 536.8 L 184.6 533.6 L 185.3 530.3 L 186.1 527.1 L 186.8 524.0 L 187.6 520.8 L 188.3 517.7 L 189.1 514.6 L 189.8 511.5 L 190.5 508.5 L 191.3 505.4 L 192.0 502.4 L 192.8 499.4 L 193.5 496.5 L 194.3 493.5 L 195.0 490.6 L 195.7 487.7 L 196.5 484.9 L 197.2 482.0 L 198.0 479.2 L 198.7 476.4 L 199.5 473.6 L 200.2 470.8 L 200.9 468.1 L 201.7 465.4 L 202.4 462.7 L 203.2 460.0 L 203.9 457.3 L 204.7 454.7 L 205.4 452.1 L 206.1 449.5 L 206.9 446.9 L 207.6 444.3 L 208.4 441.8 L 209.1 439.3 L 209.9 436.8 L 210.6 434.3 L 211.3 431.8 L 212.1 429.4 L 212.8 426.9 L 213.6 424.5 L 214.3 422.1 L 215.1 419.8 L 215.8 417.4 L 216.5 415.1 L 217.3 412.7 L 218.0 410.4 L 218.8 408.1 L 219.5 405.9 L 220.3 403.6 L 221.0 401.4 L 221.7 399.1 L 222.5 396.9 L 223.2 394.7 L 224.0 392.5 L 224.7 390.4 L 225.5 388.2 L 226.2 386.1 L 226.9 384.0 L 227.7 381.9 L 228.4 379.8 L 229.2 377.7 L 229.9 375.6 L 230.7 373.6 L 231.4 371.6 L 232.1 369.5 L 232.9 367.5 L 233.6 365.5 L 234.4 363.6 L 235.1 361.6 L 235.9 359.6 L 236.6 357.7 L 237.3 355.8 L 238.1 353.9 L 238.8 352.0 L 239.6 350.1 L 240.3 348.2 L 241.1 346.3 L 241.8 344.5 L 242.5 342.6 L 243.3 340.8 L 244.0 339.0 L 244.8 337.2 L 245.5 335.4 L 246.3 333.6 L 247.0 331.8 L 247.7 330.1 L 248.5 328.3 L 249.2 326.6 L 250.0 324.8 L 250.7 323.1 L 251.5 321.4 L 252.2 319.7 L 252.9 318.0 L 253.7 316.3 L 254.4 314.7 L 255.2 313.0 L 255.9 311.3 L 256.7 309.7 L 257.4 308.1 L 258.1 306.4 L 258.9 304.8 L 259.6 303.2 L 260.4 301.6 L 261.1 300.0 L 261.9 298.4 L 262.6 296.9 L 263.3 295.3 L 264.1 293.8 L 264.8 292.2 L 265.6 290.7 L 266.3 289.1 L 267.1 287.6 L 267.8 286.1 L 268.5 284.6 L 269.3 283.1 L 270.0 281.6 L 270.8 280.1 L 271.5 278.6 L 272.3 277.1 L 273.0 275.7 L 273.7 274.2 L 274.5 272.8 L 275.2 271.3 L 276.0 269.9 L 276.7 268.4 L 277.5 267.0 L 278.2 265.6 L 278.9 264.2 L 279.7 262.8 L 280.4 261.4 L 281.2 260.0 L 281.9 258.6 L 282.7 257.2 L 283.4 255.8 L 284.1 254.4 L 284.9 253.1 L 285.6 251.7 L 286.4 250.3 L 287.1 249.0 L 287.9 247.6 L 288.6 246.3 L 289.3 244.9 L 290.1 243.6 L 290.8 242.3 L 291.6 240.9 L 292.3 239.6 L 293.1 238.3 L 293.8 237.0 L 294.5 235.7 L 295.3 234.3 L 296.0 233.0 L 296.8 231.7 L 297.5 230.4 L 298.3 229.1 L 299.0 227.9 L 299.7 226.6 L 300.5 225.3 L 301.2 224.0 L 302.0 222.7 L 302.7 221.4 L 303.5 220.2 L 304.2 218.9 L 304.9 217.6 L 305.7 216.4 L 306.4 215.1 L 307.2 213.8 L 307.9 212.6 L 308.7 211.3 L 309.4 210.1 L 310.1 208.8 L 310.9 207.6 L 311.6 206.3 L 312.4 205.1 L 313.1 203.8 L 313.9 202.6 L 314.6 201.3 L 315.3 200.1 L 316.1 198.8 L 316.8 197.6 L 317.6 196.4 L 318.3 195.1 L 319.1 193.9 L 319.8 192.6 L 320.5 191.4 L 321.3 190.2 L 322.0 188.9 L 322.8 187.7 L 323.5 186.5 L 324.3 185.2 L 325.0 184.0" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 325.1 183.4 L 326.1 179.0 L 327.2 175.6 L 328.2 172.6 L 329.2 169.8 L 330.3 167.3 L 331.3 165.0 L 332.4 162.8 L 333.4 160.7 L 334.4 158.8 L 335.5 156.9 L 336.5 155.1 L 337.6 153.4 L 338.6 151.8 L 339.6 150.2 L 340.7 148.7 L 341.7 147.2 L 342.8 145.9 L 343.8 144.5 L 344.8 143.2 L 345.9 142.0 L 346.9 140.8 L 348.0 139.6 L 349.0 138.5 L 350.0 137.4 L 351.1 136.3 L 352.1 135.3 L 353.2 134.3 L 354.2 133.4 L 355.2 132.4 L 356.3 131.5 L 357.3 130.7 L 358.4 129.8 L 359.4 129.0 L 360.4 128.2 L 361.5 127.5 L 362.5 126.7 L 363.6 126.0 L 364.6 125.3 L 365.6 124.7 L 366.7 124.0 L 367.7 123.4 L 368.8 122.8 L 369.8 122.2 L 370.8 121.7 L 371.9 121.1 L 372.9 120.6 L 374.0 120.1 L 375.0 119.6 L 376.0 119.1 L 377.1 118.7 L 378.1 118.3 L 379.2 117.9 L 380.2 117.5 L 381.2 117.1 L 382.3 116.7 L 383.3 116.4 L 384.4 116.0 L 385.4 115.7 L 386.4 115.4 L 387.5 115.1 L 388.5 114.8 L 389.6 114.6 L 390.6 114.3 L 391.6 114.1 L 392.7 113.9 L 393.7 113.7 L 394.8 113.5 L 395.8 113.3 L 396.8 113.1 L 397.9 113.0 L 398.9 112.8 L 399.9 112.7 L 401.0 112.6 L 402.0 112.5 L 403.1 112.4 L 404.1 112.3 L 405.1 112.2 L 406.2 112.1 L 407.2 112.1 L 408.3 112.1 L 409.3 112.0 L 410.3 112.0 L 411.4 112.0 L 412.4 112.0 L 413.5 112.0 L 414.5 112.0 L 415.5 112.1 L 416.6 112.1 L 417.6 112.2 L 418.7 112.2 L 419.7 112.3 L 420.7 112.4 L 421.8 112.5 L 422.8 112.6 L 423.9 112.7 L 424.9 112.8 L 425.9 112.9 L 427.0 113.1 L 428.0 113.2 L 429.1 113.4 L 430.1 113.5 L 431.1 113.7 L 432.2 113.9 L 433.2 114.1 L 434.3 114.3 L 435.3 114.5 L 436.3 114.7 L 437.4 114.9 L 438.4 115.1 L 439.5 115.4 L 440.5 115.6 L 441.5 115.9 L 442.6 116.1 L 443.6 116.4 L 444.7 116.7 L 445.7 116.9 L 446.7 117.2 L 447.8 117.5 L 448.8 117.8 L 449.9 118.1 L 450.9 118.5 L 451.9 118.8 L 453.0 119.1 L 454.0 119.5 L 455.1 119.8 L 456.1 120.2 L 457.1 120.5 L 458.2 120.9 L 459.2 121.3 L 460.3 121.6 L 461.3 122.0 L 462.3 122.4 L 463.4 122.8 L 464.4 123.2 L 465.5 123.7 L 466.5 124.1 L 467.5 124.5 L 468.6 124.9 L 469.6 125.4 L 470.7 125.8 L 471.7 126.3 L 472.7 126.7 L 473.8 127.2 L 474.8 127.7 L 475.9 128.1 L 476.9 128.6 L 477.9 129.1 L 479.0 129.6 L 480.0 130.1 L 481.0 130.6 L 482.1 131.1 L 483.1 131.6 L 484.2 132.2 L 485.2 132.7 L 486.2 133.2 L 487.3 133.8 L 488.3 134.3 L 489.4 134.8 L 490.4 135.4 L 491.4 136.0 L 492.5 136.5 L 493.5 137.1 L 494.6 137.7 L 495.6 138.3 L 496.6 138.8 L 497.7 139.4 L 498.7 140.0 L 499.8 140.6 L 500.8 141.3 L 501.8 141.9 L 502.9 142.5 L 503.9 143.1 L 505.0 143.7 L 506.0 144.4 L 507.0 145.0 L 508.1 145.7 L 509.1 146.3 L 510.2 147.0 L 511.2 147.6 L 512.2 148.3 L 513.3 148.9 L 514.3 149.6 L 515.4 150.3 L 516.4 151.0 L 517.4 151.7 L 518.5 152.4 L 519.5 153.0 L 520.6 153.7 L 521.6 154.5 L 522.6 155.2 L 523.7 155.9 L 524.7 156.6 L 525.8 157.3 L 526.8 158.0 L 527.8 158.8 L 528.9 159.5 L 529.9 160.3 L 531.0 161.0 L 532.0 161.8 L 533.0 162.5 L 534.1 163.3 L 535.1 164.0 L 536.2 164.8 L 537.2 165.6 L 538.2 166.3 L 539.3 167.1 L 540.3 167.9 L 541.4 168.7 L 542.4 169.5 L 543.4 170.3 L 544.5 171.1 L 545.5 171.9 L 546.6 172.7 L 547.6 173.5 L 548.6 174.3 L 549.7 175.1 L 550.7 176.0 L 551.8 176.8 L 552.8 177.6 L 553.8 178.5 L 554.9 179.3 L 555.9 180.2 L 557.0 181.0 L 558.0 181.9 L 559.0 182.7 L 560.1 183.6 L 561.1 184.4 L 562.2 185.3 L 563.2 186.2 L 564.2 187.1 L 565.3 187.9 L 566.3 188.8 L 567.3 189.7 L 568.4 190.6 L 569.4 191.5 L 570.5 192.4 L 571.5 193.3 L 572.5 194.2 L 573.6 195.1 L 574.6 196.0 L 575.7 196.9 L 576.7 197.8 L 577.7 198.8 L 578.8 199.7 L 579.8 200.6 L 580.9 201.6 L 581.9 202.5 L 582.9 203.4 L 584.0 204.4 L 585.0 205.3 L 586.1 206.3 L 587.1 207.2 L 588.1 208.2 L 589.2 209.1 L 590.2 210.1 L 591.3 211.1 L 592.3 212.1 L 593.3 213.0 L 594.4 214.0 L 595.4 215.0 L 596.5 216.0 L 597.5 217.0 L 598.5 217.9 L 599.6 218.9 L 600.6 219.9 L 601.7 220.9 L 602.7 221.9 L 603.7 223.0 L 604.8 224.0 L 605.8 225.0 L 606.9 226.0 L 607.9 227.0 L 608.9 228.0 L 610.0 229.1 L 611.0 230.1 L 612.1 231.1 L 613.1 232.2 L 614.1 233.2 L 615.2 234.2 L 616.2 235.3 L 617.3 236.3 L 618.3 237.4 L 619.3 238.4 L 620.4 239.5 L 621.4 240.6 L 622.5 241.6 L 623.5 242.7 L 624.5 243.8 L 625.6 244.8 L 626.6 245.9 L 627.7 247.0 L 628.7 248.1 L 629.7 249.2 L 630.8 250.2 L 631.8 251.3 L 632.9 252.4 L 633.9 253.5 L 634.9 254.6 L 636.0 255.7 L 637.0 256.8 L 638.1 257.9 L 639.1 259.0 L 640.1 260.2 L 641.2 261.3 L 642.2 262.4 L 643.3 263.5 L 644.3 264.6 L 645.3 265.8 L 646.4 266.9 L 647.4 268.0 L 648.4 269.2 L 649.5 270.3 L 650.5 271.5 L 651.6 272.6 L 652.6 273.7 L 653.6 274.9 L 654.7 276.0 L 655.7 277.2 L 656.8 278.4 L 657.8 279.5 L 658.8 280.7 L 659.9 281.9 L 660.9 283.0 L 662.0 284.2 L 663.0 285.4 L 664.0 286.5 L 665.1 287.7 L 666.1 288.9 L 667.2 290.1 L 668.2 291.3 L 669.2 292.5 L 670.3 293.7 L 671.3 294.9 L 672.4 296.1 L 673.4 297.3 L 674.4 298.5 L 675.5 299.7 L 676.5 300.9 L 677.6 302.1 L 678.6 303.3 L 679.6 304.5 L 680.7 305.7 L 681.7 307.0 L 682.8 308.2 L 683.8 309.4 L 684.8 310.6 L 685.9 311.9 L 686.9 313.1 L 688.0 314.3 L 689.0 315.6" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="325.0" cy="184.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(335.0, 199.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g>
    <circle cx="411.7" cy="112.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(421.7, 97.0)">
      <text x="43.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Max (1 ; 1)</text>
    </g>
    <circle cx="560.6" cy="184.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(570.6, 199.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(e ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x ≤ 0</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x > 0</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#64748b" stroke-width="2.5" stroke-dasharray="3 3"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente horizontale y = 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie C</strong></p>

<p><strong>1°)</strong></p>
<p>\\(I = \\int_{-e}^{-1}\\dfrac{\\ln(-x)}{x}dx\\). Posons \\(u=\\ln(-x)\\), \\(du = \\dfrac{dx}{x}\\) :</p>
<p>\\(I = \\int_1^0 u\\,du = -\\dfrac{1}{2}\\)</p>
<p>Par IPP (\\(u=x+1\\), \\(v'=e^{-x}\\)) :</p>
<p>\\(J(\\lambda) = [-(x+2)e^{-x}]_{-1}^\\lambda = e-(\\lambda+2)e^{-\\lambda}\\)</p>

<p><strong>2°)</strong></p>
<p>\\(\\mathcal{A}(\\lambda) = 4\\left(-4I+J(\\lambda)\\right) = 4(2+e-(\\lambda+2)e^{-\\lambda}) = \\boxed{8+4e-4(\\lambda+2)e^{-\\lambda}}\\) </p>

<p><strong>3°)</strong> \\(\\lim_{\\lambda\\to+\\infty}\\mathcal{A}(\\lambda) = \\boxed{8+4e}\\) cm².</p>

<p><strong>Partie D</strong></p>
<p>\\(x=-e^{-t} \\Rightarrow t=-\\ln(-x)\\). \\(y = 4te^t = 4\\times(-\\ln(-x))\\times e^{-\\ln(-x)} = \\dfrac{-4\\ln(-x)}{x} = f(x)\\) pour \\(x<-1\\).</p>
<p>Mais \\(y(t) = 4te^t < 0\\) (car \\(t<0\\)) et \\(f(x)>0\\) → (Γ) est le symétrique de la partie \\(x<-1\\) de (C) par rapport à \\((Ox)\\). </p>

</div>
`
    }
  ]
},
{
  id: 'bac-2011-D-juillet-1er',
  year: 2011,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2011 / 1er tour',
  topics: ['Statistiques & Droite de Mayer', 'Complexes & Suite géométrique', 'Fonction exponentielle, centre de symétrie & intégrales', 'Volume de révolution & Courbe paramétrique'],

  parts: [
    {
      label: 'Exercice I — Statistiques : prix/acheteurs, droite de Mayer (4 pts)',
      problem: `<p>Tableau prix/acheteurs potentiels :</p>
<table class="vtab">
  <tr>
    <th>Prix \\(x_i\\) (F)</th>
    <td>350</td><td>400</td><td>450</td><td>500</td><td>550</td><td>600</td>
  </tr>
  <tr>
    <th>Acheteurs \\(y_i\\)</th>
    <td>140</td><td>120</td><td>100</td><td>90</td><td>80</td><td>55</td>
  </tr>
</table>
<p><strong>1)</strong> Représenter le nuage (1 cm = 100 F en abscisse ; 1 cm = 20 acheteurs).</p>
<p><strong>2) a)</strong> Calculer \\(G_1\\) (3 premiers) et \\(G_2\\) (3 derniers).</p>
<p><strong>b)</strong> Tracer \\((G_1G_2)\\).</p>
<p><strong>c)</strong> Équation de \\((G_1G_2)\\) sous la forme \\(y=mx+p\\).</p>
<p><strong>3)</strong> Estimer :</p>
<p><strong>a)</strong> Le nombre d'acheteurs pour un prix de 650 F.</p>
<p><strong>b)</strong> Le prix pour 150 acheteurs.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Statistiques bidimensionnelles &amp ; ajustement</span>
  <ul>
    <li><strong>Nuage de points :</strong> $(x_i, y_i)$ représentés dans un repère — on cherche la droite qui les ajuste au mieux.</li>
    <li><strong>Droite de Mayer :</strong> Passe par $G_1(\\bar{x}_1, \\bar{y}_1)$ et $G_2(\\bar{x}_2, \\bar{y}_2)$ (moyennes des deux demi-séries).</li>
    <li><strong>Interprétation :</strong> La pente $a$ représente l'évolution de $y$ par unité de $x$ (ex. : acheteurs par euro de prix).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>2a°)</strong></p>
<p>\\(G_1\\) : \\(\\bar{x}_1=\\dfrac{350+400+450}{3}=400\\), \\(\\bar{y}_1=\\dfrac{140+120+100}{3}=120\\) → \\(\\boxed{G_1(400;120)}\\)</p>
<p>\\(G_2\\) : \\(\\bar{x}_2=\\dfrac{500+550+600}{3}=550\\), \\(\\bar{y}_2=\\dfrac{90+80+55}{3}=75\\) → \\(\\boxed{G_2(550;75)}\\)</p>

<p><strong>2c°)</strong></p>
<p>\\(m = \\dfrac{75-120}{550-400} = \\dfrac{-45}{150} = -0{,}3\\)</p>
<p>\\(120 = -0{,}3\\times400+p \\Rightarrow p = 240\\)</p>
<p>\\[\\boxed{(G_1G_2): y = -0{,}3x+240}\\]</p>

<p><strong>3a°)</strong> \\(y(650) = -0{,}3\\times650+240 = 45\\). → <strong>45 acheteurs</strong>.</p>
<p><strong>3b°)</strong> \\(150 = -0{,}3x+240 \\Rightarrow x = 300\\) F.</p>`
    },
    {
      label: 'Exercice II — Complexes : suite zₙ = aⁿ·z₀, |a|=√2/2, rₙ→0 (4 pts)',
      problem: `<p>Soient \\(a = \\dfrac{\\sqrt{3}+1}{4}+\\dfrac{i(\\sqrt{3}-1)}{4}\\) et \\(z_0=6+6i\\). Pour tout entier \\(n\\geq1\\) : \\(z_n = a^n z_0\\).</p>
<p><strong>1) a)</strong> Exprimer \\(z_1\\) et \\(a^2\\) sous forme algébrique. Écrire \\(z_1\\) sous forme exponentielle et montrer que \\(a^2 = \\dfrac{1}{2}e^{i\\dfrac{\\pi}{6}}\\).</p>
<p><strong>b)</strong> Exprimer \\(z_3\\) et \\(z_7\\) en fonction de \\(z_1\\) et \\(a^2\\) ; en déduire leurs formes exponentielles.</p>
<p><strong>2)</strong> On pose \\(r_n = |z_n|\\).</p>
<p><strong>a)</strong> Montrer que \\(r_n = 12\\cdot\\left(\\dfrac{\\sqrt{2}}{2}\\right)^{n+1}\\).</p>
<p><strong>b)</strong> En déduire que \\((r_n)\\) est une suite géométrique. Premier terme et raison.</p>
<p><strong>c)</strong> Limite de \\((r_n)\\). Interprétation géométrique.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suites géométriques complexes</span>
  <ul>
    <li><strong>Suite $z_n = a^n z_0$ :</strong> $|z_n| = |a|^n |z_0|$ et $\\arg(z_n) = n\\arg(a) + \\arg(z_0)$.</li>
    <li><strong>Convergence :</strong> $z_n \\to 0$ si $|a| < 1$, diverge si $|a| > 1$.</li>
    <li><strong>Représentation :</strong> Les points $M_n$ (affixes $z_n$) forment une spirale géométrique autour de l'origine.</li>
    <li><strong>Distance à l'origine :</strong> $r_n = |z_n| = |a|^n r_0 \\to 0$ si $|a| < 1$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a°)</strong></p>
<p>\\(z_1 = az_0 = \\dfrac{3}{2}[\\sqrt{3}+1+i(\\sqrt{3}-1)](1+i) = 3+3i\\sqrt{3}\\)</p>
<p>\\(|z_1|=6\\), \\(\\arg(z_1)=\\dfrac{\\pi}{3}\\) → \\(\\boxed{z_1 = 6e^{i\\dfrac{\\pi}{3}}}\\)</p>
<p>\\(a^2 = \\left(\\dfrac{\\sqrt{3}+1}{4}\\right)^2+2\\cdot\\dfrac{\\sqrt{3}+1}{4}\\cdot\\dfrac{i(\\sqrt{3}-1)}{4}+\\left(\\dfrac{i(\\sqrt{3}-1)}{4}\\right)^2 = \\dfrac{\\sqrt{3}}{4}+\\dfrac{i}{4}\\)</p>
<p>\\(= \\dfrac{1}{2}\\left(\\dfrac{\\sqrt{3}}{2}+\\dfrac{i}{2}\\right) = \\dfrac{1}{2}e^{i\\dfrac{\\pi}{6}}\\) </p>

<p><strong>1b°)</strong></p>
<p>\\(z_3 = a^3z_0 = a^2\\cdot(az_0) = a^2z_1\\) → \\(z_3 = \\dfrac{1}{2}e^{i\\dfrac{\\pi}{6}}\\times6e^{i\\dfrac{\\pi}{3}} = 3e^{i\\dfrac{\\pi}{2}}\\)</p>
<p>\\(z_7 = (a^2)^3z_1 = \\dfrac{1}{8}e^{i\\dfrac{\\pi}{2}}\\times6e^{i\\dfrac{\\pi}{3}} = \\dfrac{3}{4}e^{i5\\dfrac{\\pi}{6}}\\)</p>

<p><strong>2a°)</strong></p>
<p>\\(|a|^2 = \\dfrac{\\sqrt{3}+1}{4}^2+\\dfrac{\\sqrt{3}-1}{4}^2 = \\dfrac{3+2\\sqrt{3}+1+3-2\\sqrt{3}+1}{16} = \\dfrac{8}{16} = \\dfrac{1}{2}\\) → \\(|a|=\\dfrac{\\sqrt{2}}{2}\\).</p>
<p>\\(|z_0| = 6\\sqrt{2}\\).</p>
<p>\\(r_n = |a|^n\\times|z_0| = \\left(\\dfrac{\\sqrt{2}}{2}\\right)^n\\times6\\sqrt{2} = 12\\cdot\\left(\\dfrac{\\sqrt{2}}{2}\\right)^{n+1}\\) </p>

<p><strong>2b°)</strong></p>
<p>\\(\\dfrac{r_{n+1}}{r_n} = \\dfrac{\\sqrt{2}}{2}\\) (constante) → suite géométrique de raison \\(q=\\dfrac{\\sqrt{2}}{2}\\) et de premier terme \\(r_0 = 6\\sqrt{2}\\).</p>

<p><strong>2c°)</strong></p>
<p>\\(0<\\dfrac{\\sqrt{2}}{2}<1\\) → \\(\\lim r_n = 0\\). </p>
<p>Géométriquement : \\(r_n = OM_n\\to0\\), donc la suite de points \\(M_n\\) converge vers l'<strong>origine O</strong>.</p>`
    },
    {
      label: 'Problème — f(x) = exp(x)/(1+exp(x)), centre de symétrie, aire Aₙ, volume, courbe param. (12 pts)',
      problem: `<p>Soit \\(f(x) = \\dfrac{e^x}{1+e^x}\\). Courbe (C) dans \\((O;\\vec{i};\\vec{j})\\), unité 4 cm.</p>

<p><strong>Partie A</strong></p>
<p><strong>1) a)</strong> Ensemble de définition de f.</p>
<p><strong>b)</strong> Limites en \\(\\pm\\infty\\). Asymptotes.</p>
<p><strong>2)</strong> Sens de variation de f. Tableau.</p>
<p><strong>3) a)</strong> Équation de la tangente (T) en \\(A\\left(0;\\dfrac{1}{2}\\right)\\).</p>
<p><strong>b)</strong> Montrer que A est un centre de symétrie pour (C).</p>
<p><strong>4)</strong> Tracer (T) et (C).</p>

<p><strong>Partie B</strong></p>
<p>Soit \\(D_n\\) le domaine délimité par (C), \\(y=1\\), \\(x=0\\) et \\(x=n\\). \\(\\mathcal{A}_n\\) désigne son aire en u.a.</p>
<p><strong>1)</strong> Hachurer \\(D_2\\) sur le graphique.</p>
<p><strong>2)</strong> Montrer que \\(\\mathcal{A}_n = \\ln2-\\ln(1+e^n)+n\\).</p>
<p><strong>3)</strong> Calculer \\(\\lim_{n\\to+\\infty}\\mathcal{A}_n\\).</p>

<p><strong>Partie C</strong></p>
<p><strong>1)</strong> Déterminer a et b tels que \\(\\dfrac{e^{2x}}{(1+e^x)^2} = \\dfrac{ae^x}{1+e^x}+\\dfrac{be^x}{(1+e^x)^2}\\).</p>
<p><strong>2)</strong> Soit \\(\\alpha<0\\). \\(V(\\alpha)\\) = volume du solide de révolution de la portion de (C) pour \\(\\alpha\\leq x\\leq0\\) autour de \\((Ox)\\).</p>
<p><strong>a)</strong> Exprimer \\(V(\\alpha)\\) en fonction de \\(\\alpha\\).</p>
<p><strong>b)</strong> Limite de \\(V(\\alpha)\\) quand \\(\\alpha\\to-\\infty\\).</p>

<p><strong>Partie D</strong></p>
<p>Soit (Γ) : \\(x(t)=\\ln t\\), \\(y(t)=\\dfrac{1}{1+t}-1\\), \\(t\\geq1\\).</p>
<p><strong>1)</strong> Équation cartésienne de (Γ).</p>
<p><strong>2)</strong> Comment obtenir (Γ) à partir de (C) ? Construire (Γ) en pointillés.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Sigmoïde, symétrie centrale &amp ; intégrales</span>
  <ul>
    <li><strong>Sigmoïde :</strong> $f(x) = \\dfrac{e^x}{1+e^x} = \\dfrac{1}{1+e^{-x}}$ — valeurs dans $]0;1[$, $f'(x) = f(x)(1-f(x))$.</li>
    <li><strong>Centre de symétrie en $I(a;b)$ :</strong> $f(a+t) + f(a-t) = 2b$ pour tout $t$.</li>
    <li><strong>Intégrale par changement de variable :</strong> $\\int_0^a f(x)\\,dx$ avec $u = e^x$.</li>
    <li><strong>Volume :</strong> $V = \\pi \\int_a^b [f(x)]^2\\,dx$ autour de l'axe $Ox$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°)</strong> \\(1+e^x>0\\) toujours → \\(D_f = \\mathbb{R}\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = \\lim_{x\\to+\\infty}\\dfrac{1}{e^{-x}+1} = 1\\) ; \\(\\lim_{x\\to-\\infty}f(x) = 0\\).</p>
<p>Asymptotes horizontales \\(y=0\\) (en \\(-\\infty\\)) et \\(y=1\\) (en \\(+\\infty\\)).</p>

<p><strong>2°)</strong> \\(f'(x) = \\dfrac{e^x(1+e^x)-e^x\\cdot e^x}{(1+e^x)^2} = \\dfrac{e^x}{(1+e^x)^2} > 0\\). f est <strong>strictement croissante</strong> sur \\(\\mathbb{R}\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2011-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2011-1-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">−∞</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    
    <text x="145" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <line x1="170" y1="225" x2="680" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2011-1-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">1</text>
  </svg>
</div>

<p><strong>3a°)</strong> \\(f(0)=\\dfrac{1}{2}\\), \\(f'(0)=\\dfrac{1}{4}\\).</p>
<p>\\(\\boxed{(T): y = \\dfrac{1}{4}x+\\dfrac{1}{2}}\\)</p>

<p><strong>3b°) Centre de symétrie</strong></p>
<p>\\(f(-x)+f(x) = \\dfrac{e^{-x}}{1+e^{-x}}+\\dfrac{e^x}{1+e^x} = \\dfrac{1}{1+e^x}+\\dfrac{e^x}{1+e^x} = 1 = 2\\times\\dfrac{1}{2} = 2y_A\\) </p>
<p>→ A\\left(0;\\dfrac{1}{2}\\right) est un <strong>centre de symétrie</strong> de (C).</p>

<p><strong>4) Tracé de la tangente \\((T)\\) et de la courbe \\((C)\\)</strong></p>
<p>La courbe \\((C)\\) admet pour asymptotes horizontales \\(y = 0\\) en \\(-\\infty\\) et \\(y = 1\\) en \\(+\\infty\\), avec pour centre de symétrie le point d'inflexion \\(A\\left(0;\\dfrac{1}{2}\\right)\\) où la tangente est \\((T): y = \\dfrac{1}{4}x + \\dfrac{1}{2}\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2011 Tour 1 — Courbe (C) et Tangente (T)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="146.2" y1="40.0" x2="146.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="227.5" y1="40.0" x2="227.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="308.8" y1="40.0" x2="308.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="471.2" y1="40.0" x2="471.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="552.5" y1="40.0" x2="552.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="633.8" y1="40.0" x2="633.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="310.0" x2="735" y2="310.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="390.0" y1="415" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="328.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="372.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="306.0" x2="65.0" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="146.2" y1="306.0" x2="146.2" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="146.2" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="227.5" y1="306.0" x2="227.5" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="227.5" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="308.8" y1="306.0" x2="308.8" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="308.8" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="471.2" y1="306.0" x2="471.2" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="471.2" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="552.5" y1="306.0" x2="552.5" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="552.5" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="633.8" y1="306.0" x2="633.8" y2="314.0" stroke="#1f2937" stroke-width="1"/><text x="633.8" y="325.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="386.0" y1="130.0" x2="394.0" y2="130.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="134.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><text x="380.0" y="325.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="105.6" y1="377.5" x2="674.4" y2="62.5" stroke="#d97706" stroke-width="2.0" stroke-dasharray="4 4"/>
    <line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Courbes -->
    <path d="M 65.0 306.8 L 66.9 306.7 L 68.7 306.6 L 70.6 306.5 L 72.4 306.5 L 74.3 306.4 L 76.1 306.3 L 78.0 306.2 L 79.9 306.1 L 81.7 306.0 L 83.6 305.9 L 85.4 305.9 L 87.3 305.8 L 89.1 305.7 L 91.0 305.6 L 92.9 305.5 L 94.7 305.4 L 96.6 305.3 L 98.4 305.2 L 100.3 305.1 L 102.1 304.9 L 104.0 304.8 L 105.9 304.7 L 107.7 304.6 L 109.6 304.5 L 111.4 304.3 L 113.3 304.2 L 115.1 304.1 L 117.0 304.0 L 118.9 303.8 L 120.7 303.7 L 122.6 303.5 L 124.4 303.4 L 126.3 303.3 L 128.1 303.1 L 130.0 303.0 L 131.9 302.8 L 133.7 302.6 L 135.6 302.5 L 137.4 302.3 L 139.3 302.1 L 141.1 302.0 L 143.0 301.8 L 144.9 301.6 L 146.7 301.4 L 148.6 301.2 L 150.4 301.0 L 152.3 300.8 L 154.1 300.6 L 156.0 300.4 L 157.9 300.2 L 159.7 300.0 L 161.6 299.8 L 163.4 299.6 L 165.3 299.3 L 167.1 299.1 L 169.0 298.9 L 170.9 298.6 L 172.7 298.4 L 174.6 298.1 L 176.4 297.9 L 178.3 297.6 L 180.1 297.4 L 182.0 297.1 L 183.9 296.8 L 185.7 296.5 L 187.6 296.2 L 189.4 295.9 L 191.3 295.6 L 193.1 295.3 L 195.0 295.0 L 196.9 294.7 L 198.7 294.4 L 200.6 294.1 L 202.4 293.7 L 204.3 293.4 L 206.1 293.0 L 208.0 292.7 L 209.9 292.3 L 211.7 292.0 L 213.6 291.6 L 215.4 291.2 L 217.3 290.8 L 219.1 290.4 L 221.0 290.0 L 222.9 289.6 L 224.7 289.2 L 226.6 288.8 L 228.4 288.3 L 230.3 287.9 L 232.1 287.4 L 234.0 287.0 L 235.9 286.5 L 237.7 286.1 L 239.6 285.6 L 241.4 285.1 L 243.3 284.6 L 245.1 284.1 L 247.0 283.6 L 248.9 283.1 L 250.7 282.5 L 252.6 282.0 L 254.4 281.4 L 256.3 280.9 L 258.1 280.3 L 260.0 279.8 L 261.9 279.2 L 263.7 278.6 L 265.6 278.0 L 267.4 277.4 L 269.3 276.8 L 271.1 276.2 L 273.0 275.5 L 274.9 274.9 L 276.7 274.2 L 278.6 273.6 L 280.4 272.9 L 282.3 272.2 L 284.1 271.5 L 286.0 270.8 L 287.9 270.1 L 289.7 269.4 L 291.6 268.7 L 293.4 268.0 L 295.3 267.2 L 297.1 266.5 L 299.0 265.7 L 300.9 265.0 L 302.7 264.2 L 304.6 263.4 L 306.4 262.6 L 308.3 261.8 L 310.1 261.0 L 312.0 260.2 L 313.9 259.3 L 315.7 258.5 L 317.6 257.7 L 319.4 256.8 L 321.3 255.9 L 323.1 255.1 L 325.0 254.2 L 326.9 253.3 L 328.7 252.4 L 330.6 251.5 L 332.4 250.6 L 334.3 249.7 L 336.1 248.8 L 338.0 247.9 L 339.9 246.9 L 341.7 246.0 L 343.6 245.0 L 345.4 244.1 L 347.3 243.1 L 349.1 242.2 L 351.0 241.2 L 352.9 240.2 L 354.7 239.2 L 356.6 238.3 L 358.4 237.3 L 360.3 236.3 L 362.1 235.3 L 364.0 234.3 L 365.9 233.3 L 367.7 232.3 L 369.6 231.3 L 371.4 230.2 L 373.3 229.2 L 375.1 228.2 L 377.0 227.2 L 378.9 226.2 L 380.7 225.1 L 382.6 224.1 L 384.4 223.1 L 386.3 222.1 L 388.1 221.0 L 390.0 220.0 L 391.9 219.0 L 393.7 217.9 L 395.6 216.9 L 397.4 215.9 L 399.3 214.9 L 401.1 213.8 L 403.0 212.8 L 404.9 211.8 L 406.7 210.8 L 408.6 209.8 L 410.4 208.7 L 412.3 207.7 L 414.1 206.7 L 416.0 205.7 L 417.9 204.7 L 419.7 203.7 L 421.6 202.7 L 423.4 201.7 L 425.3 200.8 L 427.1 199.8 L 429.0 198.8 L 430.9 197.8 L 432.7 196.9 L 434.6 195.9 L 436.4 195.0 L 438.3 194.0 L 440.1 193.1 L 442.0 192.1 L 443.9 191.2 L 445.7 190.3 L 447.6 189.4 L 449.4 188.5 L 451.3 187.6 L 453.1 186.7 L 455.0 185.8 L 456.9 184.9 L 458.7 184.1 L 460.6 183.2 L 462.4 182.3 L 464.3 181.5 L 466.1 180.7 L 468.0 179.8 L 469.9 179.0 L 471.7 178.2 L 473.6 177.4 L 475.4 176.6 L 477.3 175.8 L 479.1 175.0 L 481.0 174.3 L 482.9 173.5 L 484.7 172.8 L 486.6 172.0 L 488.4 171.3 L 490.3 170.6 L 492.1 169.9 L 494.0 169.2 L 495.9 168.5 L 497.7 167.8 L 499.6 167.1 L 501.4 166.4 L 503.3 165.8 L 505.1 165.1 L 507.0 164.5 L 508.9 163.8 L 510.7 163.2 L 512.6 162.6 L 514.4 162.0 L 516.3 161.4 L 518.1 160.8 L 520.0 160.2 L 521.9 159.7 L 523.7 159.1 L 525.6 158.6 L 527.4 158.0 L 529.3 157.5 L 531.1 156.9 L 533.0 156.4 L 534.9 155.9 L 536.7 155.4 L 538.6 154.9 L 540.4 154.4 L 542.3 153.9 L 544.1 153.5 L 546.0 153.0 L 547.9 152.6 L 549.7 152.1 L 551.6 151.7 L 553.4 151.2 L 555.3 150.8 L 557.1 150.4 L 559.0 150.0 L 560.9 149.6 L 562.7 149.2 L 564.6 148.8 L 566.4 148.4 L 568.3 148.0 L 570.1 147.7 L 572.0 147.3 L 573.9 147.0 L 575.7 146.6 L 577.6 146.3 L 579.4 145.9 L 581.3 145.6 L 583.1 145.3 L 585.0 145.0 L 586.9 144.7 L 588.7 144.4 L 590.6 144.1 L 592.4 143.8 L 594.3 143.5 L 596.1 143.2 L 598.0 142.9 L 599.9 142.6 L 601.7 142.4 L 603.6 142.1 L 605.4 141.9 L 607.3 141.6 L 609.1 141.4 L 611.0 141.1 L 612.9 140.9 L 614.7 140.7 L 616.6 140.4 L 618.4 140.2 L 620.3 140.0 L 622.1 139.8 L 624.0 139.6 L 625.9 139.4 L 627.7 139.2 L 629.6 139.0 L 631.4 138.8 L 633.3 138.6 L 635.1 138.4 L 637.0 138.2 L 638.9 138.0 L 640.7 137.9 L 642.6 137.7 L 644.4 137.5 L 646.3 137.4 L 648.1 137.2 L 650.0 137.0 L 651.9 136.9 L 653.7 136.7 L 655.6 136.6 L 657.4 136.5 L 659.3 136.3 L 661.1 136.2 L 663.0 136.0 L 664.9 135.9 L 666.7 135.8 L 668.6 135.7 L 670.4 135.5 L 672.3 135.4 L 674.1 135.3 L 676.0 135.2 L 677.9 135.1 L 679.7 134.9 L 681.6 134.8 L 683.4 134.7 L 685.3 134.6 L 687.1 134.5 L 689.0 134.4 L 690.9 134.3 L 692.7 134.2 L 694.6 134.1 L 696.4 134.1 L 698.3 134.0 L 700.1 133.9 L 702.0 133.8 L 703.9 133.7 L 705.7 133.6 L 707.6 133.5 L 709.4 133.5 L 711.3 133.4 L 713.1 133.3 L 715.0 133.2" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="390.0" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 208.0)">
      <text x="81.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">I(0 ; 0,5) centre sym.</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="225" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C) : e<tspan dy="-3" font-size="9">x</tspan><tspan dy="3"> / (1 + e</tspan><tspan dy="-3" font-size="9">x</tspan><tspan dy="3">)</tspan></text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Tangente (T) : y = (1/4)x + 1/2</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="3 3"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote y = 1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>2°)</strong></p>
<p>\\(\\mathcal{A}_n = \\int_0^n(1-f(x))dx = \\left[x-\\ln(1+e^x)\\right]_0^n = n-\\ln(1+e^n)+\\ln2\\) </p>

<p><strong>3°)</strong></p>
<p>\\(\\mathcal{A}_n = \\ln2+n-\\ln(1+e^n) = \\ln2-\\ln\\dfrac{1+e^n}{e^n\\cdot e^{-n}}+n = \\ln2-n-\\ln(e^{-n}+1)+n\\)</p>
<p>\\(\\lim_{n\\to+\\infty}\\mathcal{A}_n = \\ln2-0 = \\boxed{\\ln2}\\)</p>

<p><strong>Partie C</strong></p>

<p><strong>1°)</strong></p>
<p>\\(\\dfrac{ae^x(1+e^x)+be^x}{(1+e^x)^2} = \\dfrac{ae^{2x}+(a+b)e^x}{(1+e^x)^2}\\)</p>
<p>Identification : \\(a=1\\) et \\(a+b=0\\) → \\(\\boxed{a=1, b=-1}\\)</p>

<p><strong>2a°)</strong></p>
<p>\\(V(\\alpha) = \\pi\\int_\\alpha^0 f^2(x)dx = \\pi\\int_\\alpha^0\\dfrac{e^{2x}}{(1+e^x)^2}dx = \\pi\\int_\\alpha^0\\left(\\dfrac{e^x}{1+e^x}-\\dfrac{e^x}{(1+e^x)^2}\\right)dx\\)</p>
<p>\\(= \\pi\\left[\\ln(1+e^x)+\\dfrac{1}{1+e^x}\\right]_\\alpha^0 = \\pi\\left(\\ln2+\\dfrac{1}{2}-\\ln(1+e^\\alpha)-\\dfrac{1}{1+e^\\alpha}\\right)\\)</p>
<p>\\[\\boxed{V(\\alpha) = \\pi\\left[\\ln2+\\dfrac{1}{2}-\\ln(1+e^\\alpha)-\\dfrac{1}{1+e^\\alpha}\\right]}\\]</p>

<p><strong>2b°)</strong> Quand \\(\\alpha\\to-\\infty\\) : \\(e^\\alpha\\to0\\) → \\(\\ln(1+e^\\alpha)\\to0\\) et \\(\\dfrac{1}{1+e^\\alpha}\\to1\\).</p>
<p>\\(\\lim_{\\alpha\\to-\\infty}V(\\alpha) = \\pi\\left(\\ln2+\\dfrac{1}{2}-0-1\\right) = \\boxed{\\pi\\left(\\ln2-\\dfrac{1}{2}\\right)}\\)</p>

<p><strong>Partie D</strong></p>

<p><strong>1°)</strong> \\(x=\\ln t \\Rightarrow t=e^x\\). \\(y = \\dfrac{1}{1+e^x}-1 = \\dfrac{-e^x}{1+e^x} = -f(x)\\). Pour \\(t\\geq1\\) : \\(x\\geq0\\).</p>
<p>\\(\\boxed{(\\Gamma): y = -\\dfrac{e^x}{1+e^x},\\ ; x\\geq0}\\)</p>

<p><strong>2°)</strong> (Γ) est le symétrique de la partie de (C) pour \\(x\\geq0\\) par rapport à l'axe \\((Ox)\\).</p>

`
    }
  ]
},

{
  id: 'bac-2011-D-juillet-2nd',
  year: 2011,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2011 / 2nd tour',
  topics: ['Suite d\'intégrales', 'Géométrie dans l\'espace', 'Fonctions & Logarithmes', 'Primitives, Aires & Courbes'],
  parts: [
    {
      label: 'Exercice I — Suite Iₙ = ∫₀¹ xⁿ/(1+x)dx (4 pts)',
      problem: `<p>On considère la suite \\((I_n)\\) définie par \\(I_n = \\displaystyle\\int_0^1\\dfrac{x^n}{1+x}dx\\), \\(n\\in\\mathbb{N}\\).</p>
<p><strong>1)</strong> Calculer \\(I_0\\), \\(I_0+I_1\\) et en déduire \\(I_1\\).</p>
<p><strong>2)</strong> Calculer \\(I_n+I_{n+1}\\) en fonction de n.</p>
<p><strong>3)</strong> Montrer que \\((I_n)\\) est décroissante et positive.</p>
<p><strong>4)</strong> Montrer que \\(I_n\\leq\\dfrac{1}{n+1}\\) pour tout \\(n\\in\\mathbb{N}\\).</p>
<p><strong>5)</strong> En déduire que \\((I_n)\\) est convergente et déterminer sa limite.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Suite d'intégrales $I_n$</span>
  <ul>
    <li><strong>Relation de récurrence :</strong> $I_n + I_{n+1} = \\int_0^1 x^n\\,dx = \\dfrac{1}{n+1}$, car $\\dfrac{x^n}{1+x} + \\dfrac{x^{n+1}}{1+x} = x^n$.</li>
    <li><strong>Encadrement :</strong> Sur $[0;1]$, $\\dfrac{1}{2} \\leq \\dfrac{1}{1+x} \\leq 1$, donc $\\dfrac{1}{2(n+1)} \\leq I_n \\leq \\dfrac{1}{n+1}$.</li>
    <li><strong>Limite :</strong> $I_n \\to 0$ (par le théorème des gendarmes ou par comparaison).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°)</strong></p>
<p>\\(I_0 = \\int_0^1\\dfrac{1}{1+x}dx = [\\ln(1+x)]_0^1 = \\ln2\\)</p>
<p>\\(I_0+I_1 = \\int_0^1\\dfrac{1+x}{1+x}dx = \\int_0^1 1\\,dx = 1\\)</p>
<p>\\(\\boxed{I_1 = 1-\\ln2}\\)</p>

<p><strong>2°)</strong></p>
<p>\\(I_n+I_{n+1} = \\int_0^1\\dfrac{x^n+x^{n+1}}{1+x}dx = \\int_0^1\\dfrac{x^n(1+x)}{1+x}dx = \\int_0^1 x^n dx = \\dfrac{1}{n+1}\\)</p>
<p>\\[\\boxed{I_n+I_{n+1} = \\dfrac{1}{n+1}}\\]</p>

<p><strong>3°)</strong></p>
<p>Sur \\([0;1]\\) : \\(0\\leq x\\leq1\\) → \\(x^{n+1}\\leq x^n\\) → \\(\\dfrac{x^{n+1}}{1+x}\\leq\\dfrac{x^n}{1+x}\\) → \\(0\\leq I_{n+1}\\leq I_n\\).  Décroissante et positive.</p>

<p><strong>4°)</strong></p>
<p>\\(0\\leq I_{n+1}\\) → \\(I_n\\leq I_n+I_{n+1} = \\dfrac{1}{n+1}\\) </p>

<p><strong>5°)</strong> \\((I_n)\\) est décroissante et positive → convergente. De plus \\(0\\leq I_n\\leq\\dfrac{1}{n+1}\\to0\\).</p>
<p>Par le théorème des gendarmes : \\(\\boxed{\\lim I_n = 0}\\)</p>`
    },
    {
      label: 'Exercice II — Géométrie 3D : ABCD parallélogramme, prisme (4 pts)',
      problem: `<p>Dans \\((O;\\vec{i};\\vec{j};\\vec{k})\\), unité 1 cm. Points : \\(A(3;2;4)\\), \\(B(0;3;5)\\), \\(C(0;2;1)\\), \\(D(3;1;0)\\), \\(F(1;2;3)\\).</p>
<p><strong>1)</strong> Démontrer que ABCD est un parallélogramme.</p>
<p><strong>2)</strong> Soit E défini par \\(\\overrightarrow{AE} = \\dfrac{1}{3}\\overrightarrow{AB}\\wedge\\overrightarrow{AD}\\). Calculer les coordonnées de E.</p>
<p><strong>3)</strong> Calculer l'aire A en cm² du parallélogramme ABCD.</p>
<p><strong>4)</strong> Calculer le volume V en cm³ du prisme droit de base ABCD et de hauteur [AE].</p>
<p><strong>5)</strong> F appartient-il à la droite (AB) ?</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie dans l'espace</span>
  <ul>
    <li><strong>Parallélogramme :</strong> $ABCD$ est un parallélogramme $\\iff \\overrightarrow{AB} = \\overrightarrow{DC}$ (côtés opposés parallèles et de même longueur).</li>
    <li><strong>Volume d'un prisme :</strong> $V = \\mathcal{A}_{base} \\times h$ où $h$ est la hauteur perpendiculaire à la base.</li>
    <li><strong>Équation de plan :</strong> Le plan passant par $A$ et de vecteur normal $\\vec{n}(a,b,c)$ a pour équation $a(x-x_A)+b(y-y_A)+c(z-z_A)=0$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1°)</strong></p>
<p>\\(\\overrightarrow{AB} = (-3;1;1)\\) et \\(\\overrightarrow{DC} = (0-3;2-1;1-0) = (-3;1;1)\\).</p>
<p>\\(\\overrightarrow{AB}=\\overrightarrow{DC}\\) → ABCD est un <strong>parallélogramme</strong>. </p>

<p><strong>2°)</strong></p>
<p>\\(\\overrightarrow{AB}=(-3;1;1)\\), \\(\\overrightarrow{AD}=(0;-1;-4)\\).</p>
<p>\\(\\overrightarrow{AB}\\wedge\\overrightarrow{AD} = (1\\times(-4)-1\\times(-1); 1\\times0-(-3)\\times(-4); (-3)\\times(-1)-1\\times0) = (-3;-12;3)\\)</p>
<p>\\(\\overrightarrow{AE} = \\dfrac{1}{3}(-3;-12;3) = (-1;-4;1)\\)</p>
<p>\\(E = A+(-1;-4;1) = (2;-2;5) \\) → \\(\\boxed{E(2;-2;5)}\\)</p>

<p><strong>3°)</strong></p>
<p>\\(\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AD}\\| = \\sqrt{9+144+9} = \\sqrt{162} = 9\\sqrt{2}\\)</p>
<p>\\(A = 9\\sqrt{2}\\) cm²</p>

<p><strong>4°)</strong></p>
<p>\\(\\|\\overrightarrow{AE}\\| = \\sqrt{1+16+1} = \\sqrt{18} = 3\\sqrt{2}\\)</p>
<p>\\(V = A\\times\\|\\overrightarrow{AE}\\| = 9\\sqrt{2}\\times3\\sqrt{2} = \\boxed{54\\text{ cm}^3}\\)</p>

<p><strong>5°)</strong></p>
<p>\\(\\overrightarrow{FA} = (2;0;1)\\) et \\(\\overrightarrow{FB} = (-1;1;2)\\).</p>
<p>\\(\\overrightarrow{FA}\\wedge\\overrightarrow{FB} = (0\\times2-1\\times1 ; 1\\times(-1)-2\\times2 ; 2\\times1-0\\times(-1)) = (-1;-5;2) \\neq \\vec{0}\\)</p>
<p> F <strong>n'appartient pas</strong> à la droite (AB).</p>`
    },
    {
      label: 'Problème — Étude de fonction logarithme, primitive & calcul d\'aire (12 pts)',
      problem: `<p>Repère orthonormal \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>

<p><strong>Partie A</strong> — \\(f(x) = \\left(2-\\dfrac{2}{x}\\right)(\\ln x-1)\\) sur \\(]0;+\\infty[\\). Courbe (C).</p>
<p><strong>1)</strong> Limites de f en 0 et en \\(+\\infty\\).</p>
<p><strong>2)</strong> Montrer que f est dérivable et calculer \\(f'(x)\\).</p>
<p><strong>3)</strong> Soit \\(g(x)=2\\ln x+2x-4\\).</p>
<p><strong>a)</strong> Sens de variation de g. Tableau.</p>
<p><strong>b)</strong> Montrer que \\(g(x)=0\\) admet une unique solution \\(\\alpha\\in[1;2]\\).</p>
<p><strong>c)</strong> Signe de g.</p>
<p><strong>4) a)</strong> Sens de variation de f. Tableau.</p>
<p><strong>b)</strong> Montrer que \\(f(\\alpha) = -\\dfrac{2(\\alpha-1)^2}{\\alpha}\\).</p>
<p><strong>c)</strong> Calculer \\(f(1)\\) et \\(f(e)\\).</p>
<p><strong>5) a)</strong> Signe de f.</p>
<p><strong>b)</strong> Calculer \\(\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x}\\). Interprétation.</p>
<p><strong>c)</strong> Construire (C) (avec \\(\\alpha=1{,}75\\), \\(f(\\alpha)=-0{,}6\\)).</p>
<p><strong>6)</strong> Construire \\((C')\\) de \\(h=-f\\) dans le même repère.</p>

<p><strong>Partie B</strong> — \\(F(x) = \\displaystyle\\int_1^x f(t)dt\\). Courbe (Γ).</p>
<p><strong>1) a)</strong> Que représente F pour f ?</p>
<p><strong>b)</strong> Sens de variation de F.</p>
<p><strong>c)</strong> Tangentes à (Γ) en \\(x=1\\) et \\(x=e\\).</p>
<p><strong>2) a)</strong> Calculer \\(\\displaystyle\\int_1^x\\ln t\\,dt\\) par IPP.</p>
<p><strong>b)</strong> Montrer que \\(f(x) = 2\\ln x-2+\\dfrac{\\ln x}{x}-\\dfrac{2}{x}\\).</p>
<p><strong>c)</strong> Expression de F(x).</p>
<p><strong>3)</strong> Calculer en cm² l'aire A entre (C), (C') et \\(x=1\\), \\(x=e\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions $\\ln$, primitives &amp ; calcul d'aire</span>
  <ul>
    <li><strong>Dérivée :</strong> $\\left(\\dfrac{-2}{x}\\right)' = \\dfrac{2}{x^2}$, $(\\ln x)' = \\dfrac{1}{x}$, $(x\\ln x)' = \\ln x + 1$.</li>
    <li><strong>Primitive de $\\ln x$ :</strong> $\\int \\ln x\\,dx = x\\ln x - x + C$.</li>
    <li><strong>IPP :</strong> $\\int u\\,v'\\,dx = [uv] - \\int u'\\,v\\,dx$. Utile pour $\\int \\dfrac{\\ln x}{x^2}\\,dx$.</li>
    <li><strong>Aire entre deux courbes :</strong> $\\mathcal{A} = \\int_a^b |f(x) - g(x)|\\,dx$ (avec unité graphique).</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1°)</strong></p>
<p>\\(\\lim_{x\\to0^+}f(x) = (-\\infty)\\times(-\\infty) = +\\infty\\)</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = 2\\times(+\\infty) = +\\infty\\)</p>

<p><strong>2°)</strong></p>
<p>\\(f'(x) = \\dfrac{2}{x^2}(\\ln x-1)+\\left(2-\\dfrac{2}{x}\\right)\\cdot\\dfrac{1}{x} = \\dfrac{2\\ln x-2+2x-2}{x^2} = \\dfrac{2\\ln x+2x-4}{x^2} = \\dfrac{g(x)}{x^2}\\)</p>

<p><strong>3a°)</strong> \\(g'(x) = \\dfrac{2}{x}+2>0\\) → g strictement croissante.</p>

<p><strong>3b°)</strong> \\(g(1) = 0+2-4 = -2<0\\) et \\(g(2) = 2\\ln2+0>0\\) → unique \\(\\alpha\\in[1;2]\\). </p>

<p><strong>4a°)</strong> Signe de \\(f'\\) = signe de g → f décroissante sur \\(]0;\\alpha]\\), croissante sur \\([\\alpha;+\\infty[\\). Minimum en \\(\\alpha\\).</p>

<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-2011-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2011-2-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f '(x)</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f(x)</text>
    
    <text x="145" y="26" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="900">0</text>
    <text x="425" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">α ≈ 1,75</text>
    <text x="705" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="17" font-weight="800">+∞</text>
    
    <line x1="142" y1="50" x2="142" y2="260" stroke="#b83232" stroke-width="2"/>
    <line x1="148" y1="50" x2="148" y2="260" stroke="#b83232" stroke-width="2"/>
    
    <line x1="425" y1="50" x2="425" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425" y1="86" x2="425" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285" y="75" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="425" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="700">0</text>
    <text x="565" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    
    <text x="175" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <line x1="200" y1="135" x2="395" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2011-2-f)"/>
    <text x="425" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">f(α) ≈ −0,6</text>
    <line x1="455" y1="225" x2="685" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2011-2-f)"/>
    <text x="705" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>4b°)</strong> \\(g(\\alpha)=0 \\Rightarrow \\ln\\alpha = 2-\\alpha\\).</p>
<p>\\(f(\\alpha) = \\dfrac{2(\\alpha-1)}{\\alpha}(\\ln\\alpha-1) = \\dfrac{2(\\alpha-1)}{\\alpha}(2-\\alpha-1) = \\dfrac{2(\\alpha-1)(1-\\alpha)}{\\alpha} = \\boxed{-\\dfrac{2(\\alpha-1)^2}{\\alpha}}\\) </p>

<p><strong>4c°)</strong> \\(f(1) = 0\\) et \\(f(e) = 0\\).</p>

<p><strong>5a°)</strong></p>
<p>\\(f(x) = \\dfrac{(2x-2)(\\ln x-1)}{x}\\). Signe = signe de \\((2x-2)(\\ln x-1)\\) :</p>
<p>\\(f>0\\) sur \\(]0;1[\\) et \\(]e;+\\infty[\\) ; \\(f<0\\) sur \\(]1;e[\\).</p>

<p><strong>5b°)</strong> \\(\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x} = \\lim_{x\\to+\\infty}\\dfrac{(2-\\dfrac{2}{x})(\\ln x-1)}{x} = 0\\). → (C) admet une <strong>branche parabolique de direction (Ox)</strong> en \\(+\\infty\\).</p>

<p><strong>5°) c) & 6°) Construction des courbes \\((C)\\) et \\((C')\\)</strong></p>
<p>La courbe \\((C)\\) admet pour asymptote verticale l'axe des ordonnées, une branche parabolique de direction \\((Ox)\\) en \\(+\\infty\\), un minimum en \\(\\alpha\\approx1{,}75\\) (avec \\(f(\\alpha)\\approx-0{,}6\\)), et s'annule en 1 et en \\(e\\). La courbe \\((C')\\) de \\(h = -f\\) est la symétrique de \\((C)\\) par rapport à \\((Ox)\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2011 Tour 2 — Courbes (C) et (C')</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="173.3" y1="40.0" x2="173.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="281.7" y1="40.0" x2="281.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="390.0" y1="40.0" x2="390.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="498.3" y1="40.0" x2="498.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="606.7" y1="40.0" x2="606.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="340.0" x2="715.0" y2="340.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="220.0" x2="715.0" y2="220.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="160.0" x2="715.0" y2="160.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="100.0" x2="715.0" y2="100.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="280.0" x2="735" y2="280.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="65.0" y1="415" x2="65.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="298.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="47.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="173.3" y1="276.0" x2="173.3" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="173.3" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="281.7" y1="276.0" x2="281.7" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="281.7" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="390.0" y1="276.0" x2="390.0" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="390.0" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="498.3" y1="276.0" x2="498.3" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="498.3" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="606.7" y1="276.0" x2="606.7" y2="284.0" stroke="#1f2937" stroke-width="1"/><text x="606.7" y="295.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="61.0" y1="400.0" x2="69.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="61.0" y1="340.0" x2="69.0" y2="340.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="344.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="61.0" y1="220.0" x2="69.0" y2="220.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="224.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="61.0" y1="160.0" x2="69.0" y2="160.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="164.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="61.0" y1="100.0" x2="69.0" y2="100.0" stroke="#1f2937" stroke-width="1"/><text x="53.0" y="104.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><text x="55.0" y="295.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="65.0" y1="400.0" x2="65.0" y2="40.0" stroke="#2d70b3" stroke-width="1.8" stroke-dasharray="5 5"/>
    
    <!-- Courbes -->
    <path d="M 107.6 -78.0 L 109.4 -46.9 L 111.1 -20.4 L 112.9 5.0 L 114.6 26.9 L 116.4 48.0 L 118.2 67.2 L 119.9 83.8 L 121.7 100.0 L 123.5 114.8 L 125.2 127.7 L 127.0 140.3 L 128.8 151.9 L 130.5 162.0 L 132.3 172.0 L 134.1 181.2 L 135.8 189.3 L 137.6 197.3 L 139.3 204.3 L 141.1 211.2 L 142.9 217.7 L 144.6 223.3 L 146.4 228.9 L 148.2 234.2 L 149.9 238.8 L 151.7 243.4 L 153.5 247.7 L 155.2 251.5 L 157.0 255.2 L 158.8 258.7 L 160.5 261.8 L 162.3 264.9 L 164.0 267.7 L 165.8 270.4 L 167.6 272.9 L 169.3 275.2 L 171.1 277.4 L 172.9 279.5 L 174.6 281.4 L 176.4 283.3 L 178.2 285.1 L 179.9 286.8 L 181.7 288.5 L 183.5 290.2 L 185.2 291.7 L 187.0 293.2 L 188.7 294.6 L 190.5 296.0 L 192.3 297.3 L 194.0 298.5 L 195.8 299.8 L 197.6 300.9 L 199.3 302.0 L 201.1 303.1 L 202.9 304.1 L 204.6 305.0 L 206.4 305.9 L 208.2 306.8 L 209.9 307.6 L 211.7 308.3 L 213.4 309.0 L 215.2 309.7 L 217.0 310.4 L 218.7 310.9 L 220.5 311.5 L 222.3 312.0 L 224.0 312.5 L 225.8 312.9 L 227.6 313.4 L 229.3 313.7 L 231.1 314.1 L 232.9 314.4 L 234.6 314.6 L 236.4 314.9 L 238.1 315.1 L 239.9 315.3 L 241.7 315.5 L 243.4 315.6 L 245.2 315.7 L 247.0 315.8 L 248.7 315.9 L 250.5 316.0 L 252.3 316.0 L 254.0 316.0 L 255.8 316.0 L 257.6 315.9 L 259.3 315.8 L 261.1 315.7 L 262.8 315.5 L 264.6 315.3 L 266.4 315.0 L 268.1 314.8 L 269.9 314.4 L 271.7 314.0 L 273.4 313.7 L 275.2 313.2 L 277.0 312.7 L 278.7 312.3 L 280.5 311.7 L 282.3 311.2 L 284.0 310.6 L 285.8 310.0 L 287.5 309.4 L 289.3 308.8 L 291.1 308.1 L 292.8 307.4 L 294.6 306.7 L 296.4 306.0 L 298.1 305.3 L 299.9 304.5 L 301.7 303.7 L 303.4 303.0 L 305.2 302.2 L 307.0 301.4 L 308.7 300.6 L 310.5 299.8 L 312.2 299.0 L 314.0 298.2 L 315.8 297.4 L 317.5 296.6 L 319.3 295.7 L 321.1 294.9 L 322.8 294.1 L 324.6 293.3 L 326.4 292.5 L 328.1 291.7 L 329.9 290.9 L 331.7 290.1 L 333.4 289.4 L 335.2 288.6 L 336.9 287.9 L 338.7 287.1 L 340.5 286.4 L 342.2 285.7 L 344.0 285.0 L 345.8 284.3 L 347.5 283.7 L 349.3 283.1 L 351.1 282.5 L 352.8 281.9 L 354.6 281.4 L 356.4 280.8 L 358.1 280.4 L 359.9 279.9 L 361.6 279.5 L 363.4 279.0 L 365.2 278.5 L 366.9 278.1 L 368.7 277.6 L 370.5 277.2 L 372.2 276.7 L 374.0 276.2 L 375.8 275.8 L 377.5 275.3 L 379.3 274.9 L 381.1 274.4 L 382.8 274.0 L 384.6 273.5 L 386.3 273.1 L 388.1 272.6 L 389.9 272.1 L 391.6 271.7 L 393.4 271.2 L 395.2 270.8 L 396.9 270.3 L 398.7 269.9 L 400.5 269.4 L 402.2 269.0 L 404.0 268.5 L 405.8 268.0 L 407.5 267.6 L 409.3 267.1 L 411.0 266.7 L 412.8 266.3 L 414.6 265.8 L 416.3 265.4 L 418.1 264.9 L 419.9 264.4 L 421.6 264.0 L 423.4 263.6 L 425.2 263.1 L 426.9 262.7 L 428.7 262.2 L 430.5 261.8 L 432.2 261.3 L 434.0 260.9 L 435.7 260.5 L 437.5 260.0 L 439.3 259.5 L 441.0 259.1 L 442.8 258.7 L 444.6 258.2 L 446.3 257.8 L 448.1 257.4 L 449.9 256.9 L 451.6 256.5 L 453.4 256.0 L 455.2 255.6 L 456.9 255.2 L 458.7 254.7 L 460.4 254.3 L 462.2 253.9 L 464.0 253.4 L 465.7 253.0 L 467.5 252.6 L 469.3 252.2 L 471.0 251.7 L 472.8 251.3 L 474.6 250.9 L 476.3 250.5 L 478.1 250.0 L 479.9 249.6 L 481.6 249.2 L 483.4 248.8 L 485.1 248.4 L 486.9 247.9 L 488.7 247.5 L 490.4 247.1 L 492.2 246.7 L 494.0 246.3 L 495.7 245.9 L 497.5 245.4 L 499.3 245.0 L 501.0 244.6 L 502.8 244.2 L 504.6 243.8 L 506.3 243.4 L 508.1 243.0 L 509.8 242.6 L 511.6 242.1 L 513.4 241.7 L 515.1 241.3 L 516.9 240.9 L 518.7 240.5 L 520.4 240.1 L 522.2 239.7 L 524.0 239.3 L 525.7 238.9 L 527.5 238.5 L 529.3 238.1 L 531.0 237.7 L 532.8 237.3 L 534.5 236.9 L 536.3 236.5 L 538.1 236.1 L 539.8 235.8 L 541.6 235.4 L 543.4 235.0 L 545.1 234.6 L 546.9 234.2 L 548.7 233.8 L 550.4 233.4 L 552.2 233.0 L 554.0 232.6 L 555.7 232.3 L 557.5 231.9 L 559.2 231.5 L 561.0 231.1 L 562.8 230.7 L 564.5 230.3 L 566.3 230.0 L 568.1 229.6 L 569.8 229.2 L 571.6 228.8 L 573.4 228.4 L 575.1 228.1 L 576.9 227.7 L 578.7 227.3 L 580.4 227.0 L 582.2 226.6 L 583.9 226.2 L 585.7 225.8 L 587.5 225.5 L 589.2 225.1 L 591.0 224.7 L 592.8 224.4 L 594.5 224.0 L 596.3 223.6 L 598.1 223.3 L 599.8 222.9 L 601.6 222.5 L 603.4 222.2 L 605.1 221.8 L 606.9 221.4 L 608.6 221.1 L 610.4 220.7 L 612.2 220.4 L 613.9 220.0 L 615.7 219.7 L 617.5 219.3 L 619.2 219.0 L 621.0 218.6 L 622.8 218.2 L 624.5 217.9 L 626.3 217.5 L 628.1 217.2 L 629.8 216.8 L 631.6 216.5 L 633.3 216.1 L 635.1 215.8 L 636.9 215.4 L 638.6 215.1 L 640.4 214.8 L 642.2 214.4 L 643.9 214.1 L 645.7 213.7 L 647.5 213.4 L 649.2 213.0 L 651.0 212.7 L 652.8 212.3 L 654.5 212.0 L 656.3 211.7 L 658.0 211.3 L 659.8 211.0 L 661.6 210.7 L 663.3 210.3 L 665.1 210.0 L 666.9 209.7 L 668.6 209.3 L 670.4 209.0 L 672.2 208.7 L 673.9 208.3 L 675.7 208.0 L 677.5 207.7 L 679.2 207.3 L 681.0 207.0 L 682.7 206.7 L 684.5 206.4 L 686.3 206.0 L 688.0 205.7 L 689.8 205.4 L 691.6 205.1 L 693.3 204.7" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 107.6 638.0 L 109.4 606.9 L 111.1 580.4 L 112.9 555.0 L 114.6 533.1 L 116.4 512.0 L 118.2 492.8 L 119.9 476.2 L 121.7 460.0 L 123.5 445.2 L 125.2 432.3 L 127.0 419.7 L 128.8 408.1 L 130.5 398.0 L 132.3 388.0 L 134.1 378.8 L 135.8 370.7 L 137.6 362.7 L 139.3 355.7 L 141.1 348.8 L 142.9 342.3 L 144.6 336.7 L 146.4 331.1 L 148.2 325.8 L 149.9 321.2 L 151.7 316.6 L 153.5 312.3 L 155.2 308.5 L 157.0 304.8 L 158.8 301.3 L 160.5 298.2 L 162.3 295.1 L 164.0 292.3 L 165.8 289.6 L 167.6 287.1 L 169.3 284.8 L 171.1 282.6 L 172.9 280.5 L 174.6 278.6 L 176.4 276.7 L 178.2 274.9 L 179.9 273.2 L 181.7 271.5 L 183.5 269.8 L 185.2 268.3 L 187.0 266.8 L 188.7 265.4 L 190.5 264.0 L 192.3 262.7 L 194.0 261.5 L 195.8 260.2 L 197.6 259.1 L 199.3 258.0 L 201.1 256.9 L 202.9 255.9 L 204.6 255.0 L 206.4 254.1 L 208.2 253.2 L 209.9 252.4 L 211.7 251.7 L 213.4 251.0 L 215.2 250.3 L 217.0 249.6 L 218.7 249.1 L 220.5 248.5 L 222.3 248.0 L 224.0 247.5 L 225.8 247.1 L 227.6 246.6 L 229.3 246.3 L 231.1 245.9 L 232.9 245.6 L 234.6 245.4 L 236.4 245.1 L 238.1 244.9 L 239.9 244.7 L 241.7 244.5 L 243.4 244.4 L 245.2 244.3 L 247.0 244.2 L 248.7 244.1 L 250.5 244.0 L 252.3 244.0 L 254.0 244.0 L 255.8 244.0 L 257.6 244.1 L 259.3 244.2 L 261.1 244.3 L 262.8 244.5 L 264.6 244.7 L 266.4 245.0 L 268.1 245.2 L 269.9 245.6 L 271.7 246.0 L 273.4 246.3 L 275.2 246.8 L 277.0 247.3 L 278.7 247.7 L 280.5 248.3 L 282.3 248.8 L 284.0 249.4 L 285.8 250.0 L 287.5 250.6 L 289.3 251.2 L 291.1 251.9 L 292.8 252.6 L 294.6 253.3 L 296.4 254.0 L 298.1 254.7 L 299.9 255.5 L 301.7 256.3 L 303.4 257.0 L 305.2 257.8 L 307.0 258.6 L 308.7 259.4 L 310.5 260.2 L 312.2 261.0 L 314.0 261.8 L 315.8 262.6 L 317.5 263.4 L 319.3 264.3 L 321.1 265.1 L 322.8 265.9 L 324.6 266.7 L 326.4 267.5 L 328.1 268.3 L 329.9 269.1 L 331.7 269.9 L 333.4 270.6 L 335.2 271.4 L 336.9 272.1 L 338.7 272.9 L 340.5 273.6 L 342.2 274.3 L 344.0 275.0 L 345.8 275.7 L 347.5 276.3 L 349.3 276.9 L 351.1 277.5 L 352.8 278.1 L 354.6 278.6 L 356.4 279.2 L 358.1 279.6 L 359.9 280.1 L 361.6 280.5 L 363.4 281.0 L 365.2 281.5 L 366.9 281.9 L 368.7 282.4 L 370.5 282.8 L 372.2 283.3 L 374.0 283.8 L 375.8 284.2 L 377.5 284.7 L 379.3 285.1 L 381.1 285.6 L 382.8 286.0 L 384.6 286.5 L 386.3 286.9 L 388.1 287.4 L 389.9 287.9 L 391.6 288.3 L 393.4 288.8 L 395.2 289.2 L 396.9 289.7 L 398.7 290.1 L 400.5 290.6 L 402.2 291.0 L 404.0 291.5 L 405.8 292.0 L 407.5 292.4 L 409.3 292.9 L 411.0 293.3 L 412.8 293.7 L 414.6 294.2 L 416.3 294.6 L 418.1 295.1 L 419.9 295.6 L 421.6 296.0 L 423.4 296.4 L 425.2 296.9 L 426.9 297.3 L 428.7 297.8 L 430.5 298.2 L 432.2 298.7 L 434.0 299.1 L 435.7 299.5 L 437.5 300.0 L 439.3 300.5 L 441.0 300.9 L 442.8 301.3 L 444.6 301.8 L 446.3 302.2 L 448.1 302.6 L 449.9 303.1 L 451.6 303.5 L 453.4 304.0 L 455.2 304.4 L 456.9 304.8 L 458.7 305.3 L 460.4 305.7 L 462.2 306.1 L 464.0 306.6 L 465.7 307.0 L 467.5 307.4 L 469.3 307.8 L 471.0 308.3 L 472.8 308.7 L 474.6 309.1 L 476.3 309.5 L 478.1 310.0 L 479.9 310.4 L 481.6 310.8 L 483.4 311.2 L 485.1 311.6 L 486.9 312.1 L 488.7 312.5 L 490.4 312.9 L 492.2 313.3 L 494.0 313.7 L 495.7 314.1 L 497.5 314.6 L 499.3 315.0 L 501.0 315.4 L 502.8 315.8 L 504.6 316.2 L 506.3 316.6 L 508.1 317.0 L 509.8 317.4 L 511.6 317.9 L 513.4 318.3 L 515.1 318.7 L 516.9 319.1 L 518.7 319.5 L 520.4 319.9 L 522.2 320.3 L 524.0 320.7 L 525.7 321.1 L 527.5 321.5 L 529.3 321.9 L 531.0 322.3 L 532.8 322.7 L 534.5 323.1 L 536.3 323.5 L 538.1 323.9 L 539.8 324.2 L 541.6 324.6 L 543.4 325.0 L 545.1 325.4 L 546.9 325.8 L 548.7 326.2 L 550.4 326.6 L 552.2 327.0 L 554.0 327.4 L 555.7 327.7 L 557.5 328.1 L 559.2 328.5 L 561.0 328.9 L 562.8 329.3 L 564.5 329.7 L 566.3 330.0 L 568.1 330.4 L 569.8 330.8 L 571.6 331.2 L 573.4 331.6 L 575.1 331.9 L 576.9 332.3 L 578.7 332.7 L 580.4 333.0 L 582.2 333.4 L 583.9 333.8 L 585.7 334.2 L 587.5 334.5 L 589.2 334.9 L 591.0 335.3 L 592.8 335.6 L 594.5 336.0 L 596.3 336.4 L 598.1 336.7 L 599.8 337.1 L 601.6 337.5 L 603.4 337.8 L 605.1 338.2 L 606.9 338.6 L 608.6 338.9 L 610.4 339.3 L 612.2 339.6 L 613.9 340.0 L 615.7 340.3 L 617.5 340.7 L 619.2 341.0 L 621.0 341.4 L 622.8 341.8 L 624.5 342.1 L 626.3 342.5 L 628.1 342.8 L 629.8 343.2 L 631.6 343.5 L 633.3 343.9 L 635.1 344.2 L 636.9 344.6 L 638.6 344.9 L 640.4 345.2 L 642.2 345.6 L 643.9 345.9 L 645.7 346.3 L 647.5 346.6 L 649.2 347.0 L 651.0 347.3 L 652.8 347.7 L 654.5 348.0 L 656.3 348.3 L 658.0 348.7 L 659.8 349.0 L 661.6 349.3 L 663.3 349.7 L 665.1 350.0 L 666.9 350.3 L 668.6 350.7 L 670.4 351.0 L 672.2 351.3 L 673.9 351.7 L 675.7 352.0 L 677.5 352.3 L 679.2 352.7 L 681.0 353.0 L 682.7 353.3 L 684.5 353.6 L 686.3 354.0 L 688.0 354.3 L 689.8 354.6 L 691.6 354.9 L 693.3 355.3" fill="none" stroke="#10b981" stroke-width="2.0" stroke-dasharray="4 4" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="173.3" cy="280.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(183.3, 295.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">A(1 ; 0)</text>
    </g>
    <circle cx="359.5" cy="280.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(369.5, 295.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">B(e ; 0)</text>
    </g>
    <circle cx="254.6" cy="316.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(264.6, 331.0)">
      <text x="67.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">Min (1,75 ; −0,60)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C) : f(x)</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Courbe (C') : h = −f</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote verticale x = 0</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>1a°)</strong> F est la primitive de f qui s'annule en \\(x=1\\).</p>
<p><strong>1b°)</strong> \\(F'=f\\). Signe de F' = signe de f → F croissante sur \\(]0;1[\\) et \\(]e;+\\infty[\\), décroissante sur \\(]1;e[\\).</p>
<p><strong>1c°)</strong> \\(F'(1)=f(1)=0\\) et \\(F'(e)=f(e)=0\\) → tangentes parallèles à \\((Ox)\\).</p>

<p><strong>2a°)</strong> IPP avec \\(u=\\ln t\\), \\(v'=1\\) :</p>
<p>\\(\\int_1^x\\ln t\\,dt = [t\\ln t]_1^x-\\int_1^x dt = x\\ln x-x+1\\)</p>

<p><strong>2b°)</strong></p>
<p>\\(f(x) = 2\\ln x-2+\\dfrac{2}{x}(\\ln x-1) = 2\\ln x-2+\\dfrac{\\ln x}{x}\\cdot\\dfrac{2x}{x}-\\dfrac{2}{x}\\)</p>
<p>En développant directement : \\(f(x)=(2-\\dfrac{2}{x})(\\ln x-1)=2\\ln x-2-\\dfrac{2\\ln x}{x}+\\dfrac{2}{x}\\).</p>
<p><em>Note : l'énoncé écrit \\(+\\dfrac{\\ln x}{x}\\) mais le développement correct donne \\(-\\dfrac{2\\ln x}{x}+\\dfrac{2}{x}\\).</em></p>

<p><strong>2c°)</strong></p>
<p>\\(F(x) = \\int_1^x f(t)dt = \\int_1^x\\left(2\\ln t-2-\\dfrac{2\\ln t}{t}+\\dfrac{2}{t}\\right)dt\\)</p>
<p>\\(= 2(x\\ln x-x+1)-2(x-1)-[\\ln^2 t]_1^x+[2\\ln t]_1^x\\)</p>
<p>\\(\\boxed{F(x) = 2x\\ln x+2\\ln x-(\\ln x)^2-4x+4}\\)</p>

<p><strong>3°)</strong></p>
<p>Aire entre (C) et (C') = aire entre \\(y=f(x)\\) et \\(y=-f(x)\\) = \\(2\\int_1^e|f(x)|dx\\). Sur \\([1;e]\\), \\(f\\leq0\\) :</p>
<p>\\(A = 4\\times\\left(-2\\int_1^e f(x)dx\\right) = -8F(e) = -8(2e+2-1-4e+4) = -8(6-2e) = 8(2e-6)\\)</p>
<p>D'après le corrigé : \\(A = -8F(e)\\) avec \\(F(e) = 2e+2-1-4e+4 = 6-2e\\) :</p>
<p>\\[\\boxed{A = 8(2e-5)\\text{ cm}^2}\\]</p>

`
    }
  ]
},
{
  id: 'bac-2012-D-juillet-1er',
  year: 2012,
  series: 'D',
  tour: '1er tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2012 / 1er tour',
  topics: ['Équations différentielles & Courbe paramétrée', 'Probabilités (dé tétraédrique, loi binomiale)', 'Fonctions & centre de symétrie', 'Intégrales & Suite récurrente'],

  parts: [
    {
      label: 'Exercice 1 — EDO & courbe paramétrée (4 pts)',
      problem: `<p><strong>1.</strong> Déterminer la solution de \\((E_1): y''+4y=0\\) dont la courbe passe par \\(A(0;-2)\\) avec tangente horizontale en A.</p>
<p><strong>2.</strong> Déterminer la solution \\(g\\) de \\((E_2): y''+y=0\\) vérifiant \\(g(\\tfrac{\\pi}{2})=-1\\) et \\(g'(\\tfrac{\\pi}{2})=-1\\).</p>
<p><strong>3.</strong> Soit (𝒞) la courbe paramétrée :</p>
<p>\\[\\begin{cases}x(t) = -2\\cos2t \\\\ y(t) = \\cos t-\\sin t\\end{cases},\\quad t\\in\\mathbb{R}\\]</p>
<p><strong>a.</strong> Montrer que (𝒞) est symétrique par rapport à l'axe des abscisses. Justifier le choix de \\([0;\\pi]\\) comme ensemble d'étude.</p>
<p><strong>b.</strong> Étudier x et y sur \\([0;\\pi]\\) et dresser leur tableau de variations conjoint.</p>
<p><strong>c.</strong> Représenter (𝒞) (unité 2 cm). Préciser les tangentes particulières et les tangentes en O. (\\(\\sqrt{2}\\approx1{,}4\\))</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Équations différentielles $y''+\\omega^2 y=0$ &amp; Courbes paramétrées</span>
  <ul>
    <li><strong>Équation $y'' + \\omega^2 y = 0$ :</strong> La solution générale est $y(t) = A\\cos(\\omega t) + B\\sin(\\omega t)$, où les constantes $A$ et $B$ sont fixées par les conditions initiales ($y(t_0)$ et $y'(t_0)$).</li>
    <li><strong>Symétrie par rapport à $(Ox)$ :</strong> Si pour tout $t$, $x(-t) = x(t)$ et $y(-t) = -y(t)$, alors $M(-t)$ est le symétrique de $M(t)$ par rapport à l'axe des abscisses $(Ox)$, ce qui permet de restreindre l'étude à $t \\geq 0$.</li>
    <li><strong>Vecteur vitesse et tangentes :</strong> Le vecteur directeur de la tangente en $M(t)$ est $\\vec{V}(t) = (x'(t); y'(t))$. Tangente horizontale si $y'(t)=0, x'(t)\\neq 0$ ; tangente verticale si $x'(t)=0, y'(t)\\neq 0$.</li>
  </ul>
</div>`,
correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1.</strong> \\(f(x) = A\\cos2x+B\\sin2x\\). \\(f(0)=-2\\Rightarrow A=-2\\) ; \\(f'(0)=0\\Rightarrow B=0\\).</p>
<p>\\[\\boxed{f(x) = -2\\cos2x}\\]</p>

<p><strong>2.</strong> \\(g(x) = A\\cos x+B\\sin x\\). \\(g(\\dfrac{\\pi}{2})=-1 \\Rightarrow B=-1\\) ; \\(g'(\\dfrac{\\pi}{2})=-1 \\Rightarrow A=1\\).</p>
<p>\\[\\boxed{g(x) = \\cos x-\\sin x}\\]</p>

<p><strong>3a. Symétrie</strong></p>
<p>\\(x(t+\\pi) = -2\\cos(2t+2\\pi) = x(t)\\) et \\(y(t+\\pi) = -\\cos t+\\sin t = -y(t)\\).</p>
<p>Donc M(t) et M(t+π) sont symétriques par rapport à (Ox). </p>
<p>x et y sont 2π-périodiques → on étudie sur [0;π] puis on complète par symétrie selon (Ox).</p>

<p><strong>3b. Tableau de variations conjoint</strong></p>
<p>\\(x'(t) = 4\\sin2t\\) ; zéros sur [0;π] : \\(t=0, \\dfrac{\\pi}{2}, \\pi\\).</p>
<p>\\(y'(t) = -\\sin t-\\cos t = -\\sqrt{2}\\cos(t-\\dfrac{\\pi}{4})\\) ; zéro : \\(t=\\dfrac{3\\pi}{4}\\).</p>

<div class="tv-wrap diagram-wrap" style="margin:20px 0;overflow-x:auto;-webkit-overflow-scrolling:touch;">
  <svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;margin:0 auto;">
    <defs>
      <marker id="arr-g-tv-2012-conj" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-2012-conj" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    
    <!-- Fond blanc avec bordure arrondie standard -->
    <rect x="1" y="1" width="758" height="328" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    
    <!-- Colonne latérale d'en-têtes (Standard Navy #222d46) -->
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 329 L 10 329 C 5 329 1 325 1 320 Z" fill="#222d46"/>
    <line x1="95" y1="0" x2="95" y2="330" stroke="#dde1ec" stroke-width="1.5"/>
    
    <!-- Lignes de séparation horizontales -->
    <line x1="0" y1="45" x2="760" y2="45" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="90" x2="760" y2="90" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="185" x2="760" y2="185" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="0" y1="230" x2="760" y2="230" stroke="#dde1ec" stroke-width="1.5"/>

    <!-- Traits verticaux de guidage (colonnes intermédiaires π/2 et 3π/4) -->
    <!-- Colonne t = π/2 (x = 330) -->
    <line x1="330" y1="45" x2="330" y2="58" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="330" y1="78" x2="330" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="330" y1="90" x2="330" y2="100" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="330" y1="124" x2="330" y2="185" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="330" y1="185" x2="330" y2="198" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="330" y1="218" x2="330" y2="230" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="330" y1="230" x2="330" y2="268" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="330" y1="292" x2="330" y2="328" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>

    <!-- Colonne t = 3π/4 (x = 500) -->
    <line x1="500" y1="45" x2="500" y2="58" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="500" y1="78" x2="500" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="500" y1="90" x2="500" y2="126" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="500" y1="150" x2="500" y2="185" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="500" y1="185" x2="500" y2="198" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="500" y1="218" x2="500" y2="230" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="500" y1="230" x2="500" y2="295" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="500" y1="320" x2="500" y2="328" stroke="#dde1ec" stroke-width="1.2" stroke-dasharray="3 3"/>
    
    <!-- Titres des lignes (Texte blanc standard) -->
    <text x="47.5" y="23" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="800" font-style="italic">t</text>
    <text x="47.5" y="68" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="800" font-style="italic">x '(t)</text>
    <text x="47.5" y="137" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14.5" font-weight="800" font-style="italic">x(t)</text>
    <text x="47.5" y="208" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="800" font-style="italic">y '(t)</text>
    <text x="47.5" y="280" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14.5" font-weight="800" font-style="italic">y(t)</text>
    
    <!-- Valeurs de t -->
    <text x="160" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="330" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π/2</text>
    <text x="500" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">3π/4</text>
    <text x="670" y="23" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">π</text>
    
    <!-- ── Ligne x'(t) ── -->
    <text x="160" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="245" y="68" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    <text x="330" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="415" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="500" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="700">−4</text>
    <text x="585" y="68" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="670" y="68" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    
    <!-- ── Ligne x(t) ── -->
    <text x="160" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−2</text>
    <line x1="185" y1="160" x2="305" y2="115" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2012-conj)"/>
    <text x="330" y="112" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2</text>
    <!-- Flèche 2 -> 0 puis 0 -> -2 avec le zéro sous 3π/4 -->
    <line x1="355" y1="116" x2="475" y2="134" stroke="#b83232" stroke-width="2.2" stroke-linecap="round"/>
    <text x="500" y="138" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <line x1="525" y1="142" x2="645" y2="160" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2012-conj)"/>
    <text x="670" y="165" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−2</text>
    
    <!-- ── Ligne y'(t) ── -->
    <text x="245" y="208" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="330" y="208" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13.5" font-weight="700">−1</text>
    <text x="415" y="208" text-anchor="middle" dominant-baseline="central" fill="#b83232" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">−</text>
    <text x="500" y="208" text-anchor="middle" dominant-baseline="central" fill="#64748b" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700">0</text>
    <text x="585" y="208" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="900">+</text>
    
    <!-- ── Ligne y(t) ── -->
    <text x="160" y="252" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <!-- Flèche 1 -> -1 puis -1 -> -√2 avec le -1 sous π/2 -->
    <line x1="185" y1="256" x2="305" y2="274" stroke="#b83232" stroke-width="2.2" stroke-linecap="round"/>
    <text x="330" y="280" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−1</text>
    <line x1="355" y1="284" x2="445" y2="302" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-2012-conj)"/>
    <text x="500" y="308" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−√2 ≈ −1,4</text>
    <line x1="550" y1="304" x2="645" y2="274" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-2012-conj)"/>
    <text x="670" y="270" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−1</text>
  </svg>
</div>

<p>Points clés : \\(M(0)=(-2;1)\\), \\(M(\\dfrac{\\pi}{2})=(2;-1)\\), \\(M(3\\dfrac{\\pi}{4})=(0;-\\sqrt{2})\\), \\(M(\\pi)=(-2;-1)\\).</p>
<p>En O : \\(x(t)=0 \\iff \\cos2t=0 \\iff t=\\dfrac{\\pi}{4}\\). Tangente en O : \\(y = -\\dfrac{\\sqrt{2}}{4}x\\) (pente \\(=y'/x' = -\\sqrt{2}/(4\\sin\\dfrac{\\pi}{2}) = -\\dfrac{\\sqrt{2}}{4}\\)).</p>

<p><strong>3c. Représentation graphique de la courbe paramétrée \\((\\mathcal{C})\\)</strong></p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2012 Tour 1 — Courbe paramétrique (𝒞)</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="173.3" y1="40.0" x2="173.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="281.7" y1="40.0" x2="281.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="498.3" y1="40.0" x2="498.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="606.7" y1="40.0" x2="606.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="310.0" x2="715.0" y2="310.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="220.0" x2="735" y2="220.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="390.0" y1="415" x2="390.0" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="238.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="372.0" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="216.0" x2="65.0" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="173.3" y1="216.0" x2="173.3" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="173.3" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="281.7" y1="216.0" x2="281.7" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="281.7" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="498.3" y1="216.0" x2="498.3" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="498.3" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="606.7" y1="216.0" x2="606.7" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="606.7" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="386.0" y1="400.0" x2="394.0" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="386.0" y1="310.0" x2="394.0" y2="310.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="314.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="386.0" y1="130.0" x2="394.0" y2="130.0" stroke="#1f2937" stroke-width="1"/><text x="378.0" y="134.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><text x="380.0" y="235.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Courbes -->
    <path d="M 173.3 130.0 L 173.4 130.8 L 173.5 131.6 L 173.6 132.5 L 173.9 133.3 L 174.2 134.1 L 174.6 135.0 L 175.0 135.8 L 175.6 136.7 L 176.2 137.6 L 176.8 138.4 L 177.5 139.3 L 178.3 140.2 L 179.2 141.1 L 180.1 142.0 L 181.1 142.9 L 182.2 143.8 L 183.3 144.7 L 184.5 145.7 L 185.8 146.6 L 187.1 147.5 L 188.5 148.5 L 190.0 149.4 L 191.5 150.4 L 193.1 151.3 L 194.8 152.3 L 196.5 153.3 L 198.3 154.2 L 200.1 155.2 L 202.0 156.2 L 204.0 157.2 L 206.0 158.2 L 208.1 159.2 L 210.3 160.2 L 212.5 161.2 L 214.7 162.2 L 217.0 163.2 L 219.4 164.3 L 221.8 165.3 L 224.3 166.3 L 226.8 167.4 L 229.4 168.4 L 232.1 169.5 L 234.7 170.5 L 237.5 171.6 L 240.3 172.6 L 243.1 173.7 L 246.0 174.7 L 248.9 175.8 L 251.9 176.9 L 254.9 178.0 L 258.0 179.0 L 261.1 180.1 L 264.2 181.2 L 267.4 182.3 L 270.6 183.4 L 273.9 184.5 L 277.2 185.6 L 280.5 186.7 L 283.9 187.8 L 287.3 188.9 L 290.8 190.0 L 294.2 191.1 L 297.7 192.2 L 301.3 193.4 L 304.8 194.5 L 308.4 195.6 L 312.1 196.7 L 315.7 197.8 L 319.4 199.0 L 323.0 200.1 L 326.8 201.2 L 330.5 202.3 L 334.2 203.5 L 338.0 204.6 L 341.8 205.7 L 345.6 206.9 L 349.4 208.0 L 353.2 209.2 L 357.1 210.3 L 360.9 211.4 L 364.8 212.6 L 368.6 213.7 L 372.5 214.9 L 376.4 216.0 L 380.3 217.1 L 384.2 218.3 L 388.1 219.4 L 391.9 220.6 L 395.8 221.7 L 399.7 222.9 L 403.6 224.0 L 407.5 225.1 L 411.4 226.3 L 415.2 227.4 L 419.1 228.6 L 422.9 229.7 L 426.8 230.8 L 430.6 232.0 L 434.4 233.1 L 438.2 234.3 L 442.0 235.4 L 445.8 236.5 L 449.5 237.7 L 453.2 238.8 L 457.0 239.9 L 460.6 241.0 L 464.3 242.2 L 467.9 243.3 L 471.6 244.4 L 475.2 245.5 L 478.7 246.6 L 482.3 247.8 L 485.8 248.9 L 489.2 250.0 L 492.7 251.1 L 496.1 252.2 L 499.5 253.3 L 502.8 254.4 L 506.1 255.5 L 509.4 256.6 L 512.6 257.7 L 515.8 258.8 L 518.9 259.9 L 522.0 261.0 L 525.1 262.0 L 528.1 263.1 L 531.1 264.2 L 534.0 265.3 L 536.9 266.3 L 539.7 267.4 L 542.5 268.4 L 545.3 269.5 L 547.9 270.5 L 550.6 271.6 L 553.2 272.6 L 555.7 273.7 L 558.2 274.7 L 560.6 275.7 L 563.0 276.8 L 565.3 277.8 L 567.5 278.8 L 569.7 279.8 L 571.9 280.8 L 574.0 281.8 L 576.0 282.8 L 578.0 283.8 L 579.9 284.8 L 581.7 285.8 L 583.5 286.7 L 585.2 287.7 L 586.9 288.7 L 588.5 289.6 L 590.0 290.6 L 591.5 291.5 L 592.9 292.5 L 594.2 293.4 L 595.5 294.3 L 596.7 295.3 L 597.8 296.2 L 598.9 297.1 L 599.9 298.0 L 600.8 298.9 L 601.7 299.8 L 602.5 300.7 L 603.2 301.6 L 603.8 302.4 L 604.4 303.3 L 605.0 304.2 L 605.4 305.0 L 605.8 305.9 L 606.1 306.7 L 606.4 307.5 L 606.5 308.4 L 606.6 309.2 L 606.7 310.0 L 606.6 310.8 L 606.5 311.6 L 606.4 312.4 L 606.1 313.2 L 605.8 313.9 L 605.4 314.7 L 605.0 315.5 L 604.4 316.2 L 603.8 317.0 L 603.2 317.7 L 602.5 318.4 L 601.7 319.2 L 600.8 319.9 L 599.9 320.6 L 598.9 321.3 L 597.8 322.0 L 596.7 322.6 L 595.5 323.3 L 594.2 324.0 L 592.9 324.6 L 591.5 325.3 L 590.0 325.9 L 588.5 326.5 L 586.9 327.2 L 585.2 327.8 L 583.5 328.4 L 581.7 329.0 L 579.9 329.6 L 578.0 330.1 L 576.0 330.7 L 574.0 331.3 L 571.9 331.8 L 569.7 332.4 L 567.5 332.9 L 565.3 333.4 L 563.0 333.9 L 560.6 334.4 L 558.2 334.9 L 555.7 335.4 L 553.2 335.9 L 550.6 336.4 L 547.9 336.8 L 545.3 337.3 L 542.5 337.7 L 539.7 338.1 L 536.9 338.6 L 534.0 339.0 L 531.1 339.4 L 528.1 339.8 L 525.1 340.1 L 522.0 340.5 L 518.9 340.9 L 515.8 341.2 L 512.6 341.6 L 509.4 341.9 L 506.1 342.2 L 502.8 342.5 L 499.5 342.8 L 496.1 343.1 L 492.7 343.4 L 489.2 343.7 L 485.8 344.0 L 482.3 344.2 L 478.7 344.5 L 475.2 344.7 L 471.6 344.9 L 467.9 345.1 L 464.3 345.3 L 460.6 345.5 L 457.0 345.7 L 453.2 345.9 L 449.5 346.0 L 445.8 346.2 L 442.0 346.3 L 438.2 346.5 L 434.4 346.6 L 430.6 346.7 L 426.8 346.8 L 422.9 346.9 L 419.1 347.0 L 415.2 347.1 L 411.4 347.1 L 407.5 347.2 L 403.6 347.2 L 399.7 347.2 L 395.8 347.3 L 391.9 347.3 L 388.1 347.3 L 384.2 347.3 L 380.3 347.2 L 376.4 347.2 L 372.5 347.2 L 368.6 347.1 L 364.8 347.1 L 360.9 347.0 L 357.1 346.9 L 353.2 346.8 L 349.4 346.7 L 345.6 346.6 L 341.8 346.5 L 338.0 346.3 L 334.2 346.2 L 330.5 346.0 L 326.8 345.9 L 323.0 345.7 L 319.4 345.5 L 315.7 345.3 L 312.1 345.1 L 308.4 344.9 L 304.8 344.7 L 301.3 344.5 L 297.7 344.2 L 294.2 344.0 L 290.8 343.7 L 287.3 343.4 L 283.9 343.1 L 280.5 342.8 L 277.2 342.5 L 273.9 342.2 L 270.6 341.9 L 267.4 341.6 L 264.2 341.2 L 261.1 340.9 L 258.0 340.5 L 254.9 340.1 L 251.9 339.8 L 248.9 339.4 L 246.0 339.0 L 243.1 338.6 L 240.3 338.1 L 237.5 337.7 L 234.7 337.3 L 232.1 336.8 L 229.4 336.4 L 226.8 335.9 L 224.3 335.4 L 221.8 334.9 L 219.4 334.4 L 217.0 333.9 L 214.7 333.4 L 212.5 332.9 L 210.3 332.4 L 208.1 331.8 L 206.0 331.3 L 204.0 330.7 L 202.0 330.1 L 200.1 329.6 L 198.3 329.0 L 196.5 328.4 L 194.8 327.8 L 193.1 327.2 L 191.5 326.5 L 190.0 325.9 L 188.5 325.3 L 187.1 324.6 L 185.8 324.0 L 184.5 323.3 L 183.3 322.6 L 182.2 322.0 L 181.1 321.3 L 180.1 320.6 L 179.2 319.9 L 178.3 319.2 L 177.5 318.4 L 176.8 317.7 L 176.2 317.0 L 175.6 316.2 L 175.0 315.5 L 174.6 314.7 L 174.2 313.9 L 173.9 313.2 L 173.6 312.4 L 173.5 311.6 L 173.4 310.8 L 173.3 310.0" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 173.3 310.0 L 173.4 309.2 L 173.5 308.4 L 173.6 307.5 L 173.9 306.7 L 174.2 305.9 L 174.6 305.0 L 175.0 304.2 L 175.6 303.3 L 176.2 302.4 L 176.8 301.6 L 177.5 300.7 L 178.3 299.8 L 179.2 298.9 L 180.1 298.0 L 181.1 297.1 L 182.2 296.2 L 183.3 295.3 L 184.5 294.3 L 185.8 293.4 L 187.1 292.5 L 188.5 291.5 L 190.0 290.6 L 191.5 289.6 L 193.1 288.7 L 194.8 287.7 L 196.5 286.7 L 198.3 285.8 L 200.1 284.8 L 202.0 283.8 L 204.0 282.8 L 206.0 281.8 L 208.1 280.8 L 210.3 279.8 L 212.5 278.8 L 214.7 277.8 L 217.0 276.8 L 219.4 275.7 L 221.8 274.7 L 224.3 273.7 L 226.8 272.6 L 229.4 271.6 L 232.1 270.5 L 234.7 269.5 L 237.5 268.4 L 240.3 267.4 L 243.1 266.3 L 246.0 265.3 L 248.9 264.2 L 251.9 263.1 L 254.9 262.0 L 258.0 261.0 L 261.1 259.9 L 264.2 258.8 L 267.4 257.7 L 270.6 256.6 L 273.9 255.5 L 277.2 254.4 L 280.5 253.3 L 283.9 252.2 L 287.3 251.1 L 290.8 250.0 L 294.2 248.9 L 297.7 247.8 L 301.3 246.6 L 304.8 245.5 L 308.4 244.4 L 312.1 243.3 L 315.7 242.2 L 319.4 241.0 L 323.0 239.9 L 326.8 238.8 L 330.5 237.7 L 334.2 236.5 L 338.0 235.4 L 341.8 234.3 L 345.6 233.1 L 349.4 232.0 L 353.2 230.8 L 357.1 229.7 L 360.9 228.6 L 364.8 227.4 L 368.6 226.3 L 372.5 225.1 L 376.4 224.0 L 380.3 222.9 L 384.2 221.7 L 388.1 220.6 L 391.9 219.4 L 395.8 218.3 L 399.7 217.1 L 403.6 216.0 L 407.5 214.9 L 411.4 213.7 L 415.2 212.6 L 419.1 211.4 L 422.9 210.3 L 426.8 209.2 L 430.6 208.0 L 434.4 206.9 L 438.2 205.7 L 442.0 204.6 L 445.8 203.5 L 449.5 202.3 L 453.2 201.2 L 457.0 200.1 L 460.6 199.0 L 464.3 197.8 L 467.9 196.7 L 471.6 195.6 L 475.2 194.5 L 478.7 193.4 L 482.3 192.2 L 485.8 191.1 L 489.2 190.0 L 492.7 188.9 L 496.1 187.8 L 499.5 186.7 L 502.8 185.6 L 506.1 184.5 L 509.4 183.4 L 512.6 182.3 L 515.8 181.2 L 518.9 180.1 L 522.0 179.0 L 525.1 178.0 L 528.1 176.9 L 531.1 175.8 L 534.0 174.7 L 536.9 173.7 L 539.7 172.6 L 542.5 171.6 L 545.3 170.5 L 547.9 169.5 L 550.6 168.4 L 553.2 167.4 L 555.7 166.3 L 558.2 165.3 L 560.6 164.3 L 563.0 163.2 L 565.3 162.2 L 567.5 161.2 L 569.7 160.2 L 571.9 159.2 L 574.0 158.2 L 576.0 157.2 L 578.0 156.2 L 579.9 155.2 L 581.7 154.2 L 583.5 153.3 L 585.2 152.3 L 586.9 151.3 L 588.5 150.4 L 590.0 149.4 L 591.5 148.5 L 592.9 147.5 L 594.2 146.6 L 595.5 145.7 L 596.7 144.7 L 597.8 143.8 L 598.9 142.9 L 599.9 142.0 L 600.8 141.1 L 601.7 140.2 L 602.5 139.3 L 603.2 138.4 L 603.8 137.6 L 604.4 136.7 L 605.0 135.8 L 605.4 135.0 L 605.8 134.1 L 606.1 133.3 L 606.4 132.5 L 606.5 131.6 L 606.6 130.8 L 606.7 130.0 L 606.6 129.2 L 606.5 128.4 L 606.4 127.6 L 606.1 126.8 L 605.8 126.1 L 605.4 125.3 L 605.0 124.5 L 604.4 123.8 L 603.8 123.0 L 603.2 122.3 L 602.5 121.6 L 601.7 120.8 L 600.8 120.1 L 599.9 119.4 L 598.9 118.7 L 597.8 118.0 L 596.7 117.4 L 595.5 116.7 L 594.2 116.0 L 592.9 115.4 L 591.5 114.7 L 590.0 114.1 L 588.5 113.5 L 586.9 112.8 L 585.2 112.2 L 583.5 111.6 L 581.7 111.0 L 579.9 110.4 L 578.0 109.9 L 576.0 109.3 L 574.0 108.7 L 571.9 108.2 L 569.7 107.6 L 567.5 107.1 L 565.3 106.6 L 563.0 106.1 L 560.6 105.6 L 558.2 105.1 L 555.7 104.6 L 553.2 104.1 L 550.6 103.6 L 547.9 103.2 L 545.3 102.7 L 542.5 102.3 L 539.7 101.9 L 536.9 101.4 L 534.0 101.0 L 531.1 100.6 L 528.1 100.2 L 525.1 99.9 L 522.0 99.5 L 518.9 99.1 L 515.8 98.8 L 512.6 98.4 L 509.4 98.1 L 506.1 97.8 L 502.8 97.5 L 499.5 97.2 L 496.1 96.9 L 492.7 96.6 L 489.2 96.3 L 485.8 96.0 L 482.3 95.8 L 478.7 95.5 L 475.2 95.3 L 471.6 95.1 L 467.9 94.9 L 464.3 94.7 L 460.6 94.5 L 457.0 94.3 L 453.2 94.1 L 449.5 94.0 L 445.8 93.8 L 442.0 93.7 L 438.2 93.5 L 434.4 93.4 L 430.6 93.3 L 426.8 93.2 L 422.9 93.1 L 419.1 93.0 L 415.2 92.9 L 411.4 92.9 L 407.5 92.8 L 403.6 92.8 L 399.7 92.8 L 395.8 92.7 L 391.9 92.7 L 388.1 92.7 L 384.2 92.7 L 380.3 92.8 L 376.4 92.8 L 372.5 92.8 L 368.6 92.9 L 364.8 92.9 L 360.9 93.0 L 357.1 93.1 L 353.2 93.2 L 349.4 93.3 L 345.6 93.4 L 341.8 93.5 L 338.0 93.7 L 334.2 93.8 L 330.5 94.0 L 326.8 94.1 L 323.0 94.3 L 319.4 94.5 L 315.7 94.7 L 312.1 94.9 L 308.4 95.1 L 304.8 95.3 L 301.3 95.5 L 297.7 95.8 L 294.2 96.0 L 290.8 96.3 L 287.3 96.6 L 283.9 96.9 L 280.5 97.2 L 277.2 97.5 L 273.9 97.8 L 270.6 98.1 L 267.4 98.4 L 264.2 98.8 L 261.1 99.1 L 258.0 99.5 L 254.9 99.9 L 251.9 100.2 L 248.9 100.6 L 246.0 101.0 L 243.1 101.4 L 240.3 101.9 L 237.5 102.3 L 234.7 102.7 L 232.1 103.2 L 229.4 103.6 L 226.8 104.1 L 224.3 104.6 L 221.8 105.1 L 219.4 105.6 L 217.0 106.1 L 214.7 106.6 L 212.5 107.1 L 210.3 107.6 L 208.1 108.2 L 206.0 108.7 L 204.0 109.3 L 202.0 109.9 L 200.1 110.4 L 198.3 111.0 L 196.5 111.6 L 194.8 112.2 L 193.1 112.8 L 191.5 113.5 L 190.0 114.1 L 188.5 114.7 L 187.1 115.4 L 185.8 116.0 L 184.5 116.7 L 183.3 117.4 L 182.2 118.0 L 181.1 118.7 L 180.1 119.4 L 179.2 120.1 L 178.3 120.8 L 177.5 121.6 L 176.8 122.3 L 176.2 123.0 L 175.6 123.8 L 175.0 124.5 L 174.6 125.3 L 174.2 126.1 L 173.9 126.8 L 173.6 127.6 L 173.5 128.4 L 173.4 129.2 L 173.3 130.0" fill="none" stroke="#10b981" stroke-width="2.0" stroke-dasharray="4 4" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="173.3" cy="130.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(113.30000000000001, 118.0)">
      <text x="50.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(0)=(−2 ; 1)</text>
    </g>
    <circle cx="606.7" cy="310.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(616.7, 322.0)">
      <text x="57.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π/2)=(2 ; −1)</text>
    </g>
    <circle cx="390.0" cy="347.3" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 362.3)">
      <text x="64.0" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(3π/4)=(0 ; −√2)</text>
    </g>
    <circle cx="173.3" cy="310.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(113.30000000000001, 325.0)">
      <text x="53.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">M(π)=(−2 ; −1)</text>
    </g>
    <circle cx="390.0" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(400.0, 208.0)">
      <text x="53.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0) t=π/4</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="52" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Arc t ∈ [0 ; π]</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#2d70b3" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Arc symétrique t ∈ [−π ; 0]</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>`
    },
    {
      label: 'Exercice 2 — Probabilités : dé tétraédrique, loi binomiale, suite (u_n) (4 pts)',
      problem: `<p>Un dé tétraédrique à faces 1, 2, 3, 4. Les probabilités \\(P_1,P_2,P_3,P_4\\) forment une progression arithmétique avec \\(P_4=0{,}4\\).</p>
<p><strong>1.</strong> Montrer que \\(P_1=0{,}1\\), \\(P_2=0{,}2\\), \\(P_3=0{,}3\\).</p>
<p><strong>2.</strong> On lance 3 fois. <strong>a.</strong> Probabilité d'obtenir 1, 2, 4 dans l'ordre. <strong>b.</strong> Probabilité de trois nombres distincts en ordre croissant.</p>
<p><strong>3.</strong> On lance 10 fois. X = nombre de fois où 4 sort.</p>
<p><strong>a.</strong> \\(P(X=i)\\) pour \\(0\\leq i\\leq10\\). <strong>b.</strong> E(X). <strong>c.</strong> \\(P(X\\geq1)\\) (arrondir au millième).</p>
<p><strong>4.</strong> On lance n fois. \\(u_n\\) = probabilité d'obtenir 4 pour la <strong>première</strong> fois au n-ième lancer.</p>
<p><strong>a.</strong> Montrer que \\((u_n)\\) est géométrique et convergente.</p>
<p><strong>b.</strong> \\(S_n = u_1+\\cdots+u_n\\). Exprimer \\(S_n\\) puis convergence.</p>
<p><strong>c.</strong> Plus petit entier n tel que \\(S_n\\geq0{,}999\\).</p>
<p><em>On donne : \\((0{,}6)^{10}\\approx0{,}00604\\) ; \\(\\ln(0{,}001)\\approx-6{,}90\\) ; \\(\\ln(0{,}6)\\approx-0{,}51\\).</em></p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Loi binomiale &amp ; suites</span>
  <ul>
    <li><strong>Dé équilibré :</strong> Chaque face a la même probabilité $\\dfrac{1}{n}$ d'apparaître.</li>
    <li><strong>Loi $B(n,p)$ :</strong> $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$, $E(X)=np$, $V(X)=np(1-p)$.</li>
    <li><strong>Suite définie par $u_{n+1} = f(u_n)$ :</strong> Monotonie via $u_{n+1} - u_n$, convergence vers $\\ell = f(\\ell)$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1.</strong> \\(P_k = P_4+(k-4)r\\). \\(P_1+P_2+P_3+P_4=1 \\Rightarrow 4P_4-6r=1 \\Rightarrow r=0{,}1\\).</p>
<p>\\(\\boxed{P_1=0{,}1;\\ ; P_2=0{,}2;\\ ; P_3=0{,}3}\\) </p>

<p><strong>2a.</strong> \\(P_1\\times P_2\\times P_4 = 0{,}1\\times0{,}2\\times0{,}4 = \\boxed{0{,}008}\\)</p>
<p><strong>2b.</strong> \\(P_1P_2P_3+P_1P_2P_4+P_1P_3P_4+P_2P_3P_4 = 0{,}006+0{,}008+0{,}012+0{,}024 = \\boxed{0{,}05}\\)</p>

<p><strong>3a.</strong> \\(X\\sim B(10;0{,}4)\\) → \\(P(X=i) = \\binom{10}{i}(0{,}4)^i(0{,}6)^{10-i}\\)</p>
<p><strong>3b.</strong> \\(E(X) = 10\\times0{,}4 = \\boxed{4}\\). En 10 lancers, on obtient en moyenne 4 fois le chiffre 4.</p>
<p><strong>3c.</strong> \\(P(X\\geq1) = 1-(0{,}6)^{10}\\approx1-0{,}00604 = \\boxed{0{,}994}\\)</p>

<p><strong>4a.</strong> \\(u_n = (0{,}6)^{n-1}\\times0{,}4\\). \\(\\dfrac{u_{n+1}}{u_n} = 0{,}6\\) = constante → suite géométrique de raison 0,6 et premier terme \\(u_1=0{,}4\\). \\(0<0{,}6<1\\) → convergente, \\(\\lim u_n=0\\).</p>

<p><strong>4b.</strong> \\(S_n = 0{,}4\\cdot\\dfrac{1-(0{,}6)^n}{1-0{,}6} = 1-(0{,}6)^n\\). \\(\\lim S_n = 1\\) → convergente.</p>

<p><strong>4c.</strong> \\(S_n\\geq0{,}999 \\iff (0{,}6)^n\\leq0{,}001 \\iff n\\ln0{,}6\\leq\\ln0{,}001 \\iff n\\geq\\dfrac{-6{,}90}{-0{,}51}\\approx13{,}5\\).</p>
<p>\\[\\boxed{n_\\min = 14}\\]</p>`
    },
    {
      label: 'Problème — f(x)=(x+ln|1−x|)/(1−x), centre I(1;−1), intégrales, suite uₙ₊₁=4−exp(−uₙ) (12 pts)',
      problem: `<p>Soit \\(f(x) = \\dfrac{x+\\ln|1-x|}{1-x}\\), définie sur \\(\\mathbb{R}\\setminus\\{1\\}\\). Courbe (𝒞) dans \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>

<p><strong>Partie A</strong></p>
<p><strong>1.</strong> Limites de f aux bornes. Asymptotes.</p>
<p><strong>2.</strong> Calculer \\(f'(x)\\) et étudier son signe. Sens de variation.</p>
<p><strong>3.</strong> Tableau de variations.</p>
<p><strong>4.</strong> Montrer que \\(I(1;-1)\\) est un centre de symétrie pour (𝒞).</p>
<p><strong>5.</strong> Tracer (𝒞) et ses asymptotes.</p>

<p><strong>Partie B</strong></p>
<p>Soient \\(u(x)=\\dfrac{-1}{1-x}\\) et \\(v(x)=\\dfrac{\\ln(x-1)}{x-1}\\) sur \\(]1;+\\infty[\\).</p>
<p><strong>1.</strong> Primitives de u et v.</p>
<p><strong>2.</strong> Vérifier que \\(-1-f(x) = u(x)+v(x)\\) pour \\(x>1\\).</p>
<p><strong>3.</strong> Calculer en cm² l'aire S du domaine entre (𝒞), \\(y=-1\\), \\(x=2\\) et \\(x=3\\).</p>

<p><strong>Partie C</strong></p>
<p>Suite \\((u_n)\\) : \\(u_0=1\\), \\(u_{n+1}=4-e^{-u_n}\\).</p>
<p><strong>1.</strong> Montrer par récurrence que \\(3 < u_n < 4\\) pour tout \\(n \\geq 1\\).</p>
<p><strong>2. a.</strong> Montrer que \\(u_{n+1}-u_n\\) et \\(u_n-u_{n-1}\\) sont de même signe.</p>
<p><strong>b.</strong> Sens de variation de \\((u_n)\\).</p>
<p><strong>3.</strong> Convergence de \\((u_n)\\).</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions $\\ln|\\cdot|$, symétrie &amp ; suites récurrentes</span>
  <ul>
    <li><strong>$\\ln|1-x|$ :</strong> Défini pour $x \\neq 1$. Dérivée : $\\dfrac{-1}{1-x} = \\dfrac{1}{x-1}$.</li>
    <li><strong>Centre de symétrie $I(a,b)$ :</strong> $f(a+t) + f(a-t) = 2b$ pour tout $t$ dans le domaine.</li>
    <li><strong>Suite $u_{n+1} = g(u_n)$ :</strong> Convergence vers $\\ell = g(\\ell)$. Montrer que $g$ est croissante et bornée ou utiliser le TVI.</li>
    <li><strong>Primitive de $\\dfrac{\\ln|1-x|}{(1-x)^2}$ :</strong> Faire le changement $u = 1-x$, puis IPP.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1. Limites et asymptotes</strong></p>
<p>\\(\\lim_{x\\to-\\infty}f(x) = -1\\) (asymptote horizontale \\(y=-1\\) en \\(-\\infty\\)).</p>
<p>\\(\\lim_{x\\to1^-}f(x) = -\\infty\\) et \\(\\lim_{x\\to1^+}f(x) = +\\infty\\) → asymptote verticale \\(x=1\\).</p>
<p>\\(\\lim_{x\\to+\\infty}f(x) = -1\\) (asymptote horizontale \\(y=-1\\) en \\(+\\infty\\)).</p>

<p><strong>2. f'(x)</strong></p>
<p>\\(f'(x) = \\dfrac{\\left(1-\\dfrac{1}{1-x}\\right)(1-x)-(x+\\ln|1-x|)(-1)}{(1-x)^2} = \\dfrac{\\ln|1-x|}{(1-x)^2}\\)</p>
<p>Signe de \\(f'\\) = signe de \\(\\ln|1-x|\\) :</p>
<p>\\(\\ln|1-x|>0 \\iff |1-x|>1 \\iff x<0\\) ou \\(x>2\\).</p>
<p>f croissante sur \\(]-\\infty;0[\\) et \\(]2;+\\infty[\\) ; décroissante sur \\(]0;1[\\) et \\(]1;2[\\).</p>

<p><strong>3. Tableau</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-16" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-16" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f'</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="285.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="425.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="565.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">2</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="215.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="355.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="285.0" y1="50" x2="285.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="285.0" y1="86" x2="285.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="495.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="425.0" y1="50" x2="425.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425.0" y1="86" x2="425.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="635.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="565.0" y1="50" x2="565.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="565.0" y1="86" x2="565.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="565.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="260.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-16)"/>
    <line x1="310.0" y1="135" x2="400.0" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-16)"/>
    <line x1="450.0" y1="225" x2="540.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-16)"/>
    <line x1="590.0" y1="135" x2="680.0" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-16)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">-1</text>
    <text x="285.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">0</text>
    <text x="425.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞/+∞</text>
    <text x="565.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">-2</text>
    <text x="705.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">-1</text>
  </svg>
</div>

<p><strong>4. Centre de symétrie</strong></p>
<p>\\(f(2-x)+f(x) = \\dfrac{(2-x)+\\ln|x-1|}{x-1}+\\dfrac{x+\\ln|1-x|}{1-x}\\)</p>
<p>\\(= \\dfrac{(2-x)+\\ln|1-x|+(-x-\\ln|1-x|)}{x-1} = \\dfrac{2-2x}{x-1} = -2\\) </p>
<p>→ \\(I(1;-1)\\) est un <strong>centre de symétrie</strong>.</p>

<p><strong>5. Tracé de la courbe \\((\\mathcal{C})\\) et de ses asymptotes</strong></p>
<p>La courbe \\((\\mathcal{C})\\) admet pour asymptote verticale la droite \\(x = 1\\) et pour asymptote horizontale la droite \\(y = -1\\). Le point \\(I(1 ; -1)\\) est centre de symétrie de la courbe.</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2012 Tour 1 — Courbe (𝒞) et Asymptotes</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="137.2" y1="40.0" x2="137.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="209.4" y1="40.0" x2="209.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="281.7" y1="40.0" x2="281.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="426.1" y1="40.0" x2="426.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="498.3" y1="40.0" x2="498.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="570.6" y1="40.0" x2="570.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="642.8" y1="40.0" x2="642.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="355.0" x2="715.0" y2="355.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="310.0" x2="715.0" y2="310.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="265.0" x2="715.0" y2="265.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="175.0" x2="715.0" y2="175.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="130.0" x2="715.0" y2="130.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="85.0" x2="715.0" y2="85.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="40.0" x2="715.0" y2="40.0" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="220.0" x2="735" y2="220.0" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="353.9" y1="415" x2="353.9" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="238.0" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="335.9" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="216.0" x2="65.0" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="137.2" y1="216.0" x2="137.2" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="137.2" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="209.4" y1="216.0" x2="209.4" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="209.4" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="281.7" y1="216.0" x2="281.7" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="281.7" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="426.1" y1="216.0" x2="426.1" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="426.1" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="498.3" y1="216.0" x2="498.3" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="498.3" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="570.6" y1="216.0" x2="570.6" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="570.6" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="642.8" y1="216.0" x2="642.8" y2="224.0" stroke="#1f2937" stroke-width="1"/><text x="642.8" y="235.0" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="349.9" y1="400.0" x2="357.9" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="349.9" y1="355.0" x2="357.9" y2="355.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="359.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="349.9" y1="310.0" x2="357.9" y2="310.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="314.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="349.9" y1="265.0" x2="357.9" y2="265.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="269.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="349.9" y1="175.0" x2="357.9" y2="175.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="179.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="349.9" y1="130.0" x2="357.9" y2="130.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="134.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="349.9" y1="85.0" x2="357.9" y2="85.0" stroke="#1f2937" stroke-width="1"/><text x="341.9" y="89.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><text x="343.9" y="235.0" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="426.1" y1="400.0" x2="426.1" y2="40.0" stroke="#2d70b3" stroke-width="1.8" stroke-dasharray="5 5"/>
    <line x1="65.0" y1="265.0" x2="715.0" y2="265.0" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 241.5 L 66.0 241.5 L 67.1 241.4 L 68.1 241.4 L 69.1 241.3 L 70.1 241.3 L 71.2 241.3 L 72.2 241.2 L 73.2 241.2 L 74.2 241.1 L 75.3 241.1 L 76.3 241.1 L 77.3 241.0 L 78.4 241.0 L 79.4 240.9 L 80.4 240.9 L 81.4 240.8 L 82.5 240.8 L 83.5 240.7 L 84.5 240.7 L 85.6 240.7 L 86.6 240.6 L 87.6 240.6 L 88.6 240.5 L 89.7 240.5 L 90.7 240.4 L 91.7 240.4 L 92.7 240.3 L 93.8 240.3 L 94.8 240.2 L 95.8 240.2 L 96.9 240.2 L 97.9 240.1 L 98.9 240.1 L 99.9 240.0 L 101.0 240.0 L 102.0 239.9 L 103.0 239.9 L 104.0 239.8 L 105.1 239.8 L 106.1 239.7 L 107.1 239.7 L 108.2 239.6 L 109.2 239.6 L 110.2 239.5 L 111.2 239.5 L 112.3 239.4 L 113.3 239.4 L 114.3 239.3 L 115.4 239.3 L 116.4 239.2 L 117.4 239.2 L 118.4 239.1 L 119.5 239.1 L 120.5 239.0 L 121.5 239.0 L 122.5 238.9 L 123.6 238.9 L 124.6 238.8 L 125.6 238.8 L 126.7 238.7 L 127.7 238.7 L 128.7 238.6 L 129.7 238.6 L 130.8 238.5 L 131.8 238.4 L 132.8 238.4 L 133.9 238.3 L 134.9 238.3 L 135.9 238.2 L 136.9 238.2 L 138.0 238.1 L 139.0 238.1 L 140.0 238.0 L 141.0 237.9 L 142.1 237.9 L 143.1 237.8 L 144.1 237.8 L 145.2 237.7 L 146.2 237.7 L 147.2 237.6 L 148.2 237.5 L 149.3 237.5 L 150.3 237.4 L 151.3 237.4 L 152.3 237.3 L 153.4 237.2 L 154.4 237.2 L 155.4 237.1 L 156.5 237.1 L 157.5 237.0 L 158.5 236.9 L 159.5 236.9 L 160.6 236.8 L 161.6 236.8 L 162.6 236.7 L 163.7 236.6 L 164.7 236.6 L 165.7 236.5 L 166.7 236.4 L 167.8 236.4 L 168.8 236.3 L 169.8 236.3 L 170.8 236.2 L 171.9 236.1 L 172.9 236.1 L 173.9 236.0 L 175.0 235.9 L 176.0 235.9 L 177.0 235.8 L 178.0 235.7 L 179.1 235.7 L 180.1 235.6 L 181.1 235.5 L 182.1 235.5 L 183.2 235.4 L 184.2 235.3 L 185.2 235.3 L 186.3 235.2 L 187.3 235.1 L 188.3 235.0 L 189.3 235.0 L 190.4 234.9 L 191.4 234.8 L 192.4 234.8 L 193.5 234.7 L 194.5 234.6 L 195.5 234.5 L 196.5 234.5 L 197.6 234.4 L 198.6 234.3 L 199.6 234.3 L 200.6 234.2 L 201.7 234.1 L 202.7 234.0 L 203.7 233.9 L 204.8 233.9 L 205.8 233.8 L 206.8 233.7 L 207.8 233.6 L 208.9 233.6 L 209.9 233.5 L 210.9 233.4 L 211.9 233.3 L 213.0 233.2 L 214.0 233.2 L 215.0 233.1 L 216.1 233.0 L 217.1 232.9 L 218.1 232.8 L 219.1 232.8 L 220.2 232.7 L 221.2 232.6 L 222.2 232.5 L 223.3 232.4 L 224.3 232.3 L 225.3 232.3 L 226.3 232.2 L 227.4 232.1 L 228.4 232.0 L 229.4 231.9 L 230.4 231.8 L 231.5 231.7 L 232.5 231.7 L 233.5 231.6 L 234.6 231.5 L 235.6 231.4 L 236.6 231.3 L 237.6 231.2 L 238.7 231.1 L 239.7 231.0 L 240.7 230.9 L 241.8 230.9 L 242.8 230.8 L 243.8 230.7 L 244.8 230.6 L 245.9 230.5 L 246.9 230.4 L 247.9 230.3 L 248.9 230.2 L 250.0 230.1 L 251.0 230.0 L 252.0 229.9 L 253.1 229.8 L 254.1 229.7 L 255.1 229.6 L 256.1 229.5 L 257.2 229.4 L 258.2 229.3 L 259.2 229.2 L 260.2 229.1 L 261.3 229.0 L 262.3 228.9 L 263.3 228.8 L 264.4 228.7 L 265.4 228.6 L 266.4 228.5 L 267.4 228.4 L 268.5 228.3 L 269.5 228.2 L 270.5 228.1 L 271.6 228.0 L 272.6 227.9 L 273.6 227.8 L 274.6 227.7 L 275.7 227.5 L 276.7 227.4 L 277.7 227.3 L 278.7 227.2 L 279.8 227.1 L 280.8 227.0 L 281.8 226.9 L 282.9 226.8 L 283.9 226.7 L 284.9 226.6 L 285.9 226.4 L 287.0 226.3 L 288.0 226.2 L 289.0 226.1 L 290.0 226.0 L 291.1 225.9 L 292.1 225.8 L 293.1 225.6 L 294.2 225.5 L 295.2 225.4 L 296.2 225.3 L 297.2 225.2 L 298.3 225.1 L 299.3 224.9 L 300.3 224.8 L 301.4 224.7 L 302.4 224.6 L 303.4 224.5 L 304.4 224.4 L 305.5 224.2 L 306.5 224.1 L 307.5 224.0 L 308.5 223.9 L 309.6 223.8 L 310.6 223.7 L 311.6 223.5 L 312.7 223.4 L 313.7 223.3 L 314.7 223.2 L 315.7 223.1 L 316.8 222.9 L 317.8 222.8 L 318.8 222.7 L 319.8 222.6 L 320.9 222.5 L 321.9 222.4 L 322.9 222.3 L 324.0 222.2 L 325.0 222.0 L 326.0 221.9 L 327.0 221.8 L 328.1 221.7 L 329.1 221.6 L 330.1 221.5 L 331.2 221.4 L 332.2 221.3 L 333.2 221.2 L 334.2 221.1 L 335.3 221.0 L 336.3 220.9 L 337.3 220.8 L 338.3 220.8 L 339.4 220.7 L 340.4 220.6 L 341.4 220.5 L 342.5 220.4 L 343.5 220.4 L 344.5 220.3 L 345.5 220.3 L 346.6 220.2 L 347.6 220.1 L 348.6 220.1 L 349.7 220.1 L 350.7 220.0 L 351.7 220.0 L 352.7 220.0 L 353.8 220.0 L 354.8 220.0 L 355.8 220.0 L 356.8 220.0 L 357.9 220.1 L 358.9 220.1 L 359.9 220.2 L 361.0 220.3 L 362.0 220.3 L 363.0 220.4 L 364.0 220.6 L 365.1 220.7 L 366.1 220.9 L 367.1 221.1 L 368.1 221.3 L 369.2 221.5 L 370.2 221.8 L 371.2 222.0 L 372.3 222.4 L 373.3 222.7 L 374.3 223.1 L 375.3 223.5 L 376.4 224.0 L 377.4 224.6 L 378.4 225.1 L 379.5 225.8 L 380.5 226.5 L 381.5 227.3 L 382.5 228.1 L 383.6 229.0 L 384.6 230.1 L 385.6 231.2 L 386.6 232.4 L 387.7 233.8 L 388.7 235.3 L 389.7 236.9 L 390.8 238.7 L 391.8 240.7 L 392.8 243.0 L 393.8 245.4 L 394.9 248.1 L 395.9 251.2 L 396.9 254.5 L 397.9 258.3 L 399.0 262.5 L 400.0 267.2 L 401.0 272.5 L 402.1 278.4 L 403.1 285.2 L 404.1 292.9 L 405.1 301.7 L 406.2 311.8 L 407.2 323.4 L 408.2 336.9 L 409.3 352.7 L 410.3 371.3 L 411.3 393.4 L 412.3 420.0 L 413.4 452.2 L 414.4 491.9" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 436.6 -23.6 L 437.4 19.1 L 438.2 54.6 L 439.1 84.4 L 439.9 109.7 L 440.7 131.3 L 441.5 150.0 L 442.3 166.3 L 443.2 180.4 L 444.0 192.9 L 444.8 203.8 L 445.6 213.6 L 446.4 222.2 L 447.3 230.0 L 448.1 236.9 L 448.9 243.2 L 449.7 248.8 L 450.6 253.9 L 451.4 258.5 L 452.2 262.7 L 453.0 266.5 L 453.8 270.0 L 454.7 273.2 L 455.5 276.1 L 456.3 278.8 L 457.1 281.2 L 457.9 283.5 L 458.8 285.5 L 459.6 287.4 L 460.4 289.2 L 461.2 290.8 L 462.0 292.3 L 462.9 293.7 L 463.7 295.0 L 464.5 296.2 L 465.3 297.3 L 466.2 298.3 L 467.0 299.2 L 467.8 300.1 L 468.6 300.9 L 469.4 301.7 L 470.3 302.4 L 471.1 303.0 L 471.9 303.6 L 472.7 304.2 L 473.5 304.7 L 474.4 305.2 L 475.2 305.6 L 476.0 306.0 L 476.8 306.4 L 477.7 306.8 L 478.5 307.1 L 479.3 307.4 L 480.1 307.7 L 480.9 307.9 L 481.8 308.2 L 482.6 308.4 L 483.4 308.6 L 484.2 308.8 L 485.0 308.9 L 485.9 309.1 L 486.7 309.2 L 487.5 309.3 L 488.3 309.4 L 489.2 309.5 L 490.0 309.6 L 490.8 309.7 L 491.6 309.8 L 492.4 309.8 L 493.3 309.9 L 494.1 309.9 L 494.9 309.9 L 495.7 310.0 L 496.5 310.0 L 497.4 310.0 L 498.2 310.0 L 499.0 310.0 L 499.8 310.0 L 500.6 310.0 L 501.5 310.0 L 502.3 309.9 L 503.1 309.9 L 503.9 309.9 L 504.8 309.8 L 505.6 309.8 L 506.4 309.8 L 507.2 309.7 L 508.0 309.7 L 508.9 309.6 L 509.7 309.6 L 510.5 309.5 L 511.3 309.4 L 512.1 309.4 L 513.0 309.3 L 513.8 309.3 L 514.6 309.2 L 515.4 309.1 L 516.3 309.0 L 517.1 309.0 L 517.9 308.9 L 518.7 308.8 L 519.5 308.7 L 520.4 308.7 L 521.2 308.6 L 522.0 308.5 L 522.8 308.4 L 523.6 308.3 L 524.5 308.2 L 525.3 308.2 L 526.1 308.1 L 526.9 308.0 L 527.8 307.9 L 528.6 307.8 L 529.4 307.7 L 530.2 307.6 L 531.0 307.5 L 531.9 307.5 L 532.7 307.4 L 533.5 307.3 L 534.3 307.2 L 535.1 307.1 L 536.0 307.0 L 536.8 306.9 L 537.6 306.8 L 538.4 306.7 L 539.2 306.6 L 540.1 306.5 L 540.9 306.4 L 541.7 306.3 L 542.5 306.2 L 543.4 306.2 L 544.2 306.1 L 545.0 306.0 L 545.8 305.9 L 546.6 305.8 L 547.5 305.7 L 548.3 305.6 L 549.1 305.5 L 549.9 305.4 L 550.7 305.3 L 551.6 305.2 L 552.4 305.1 L 553.2 305.0 L 554.0 304.9 L 554.9 304.8 L 555.7 304.7 L 556.5 304.7 L 557.3 304.6 L 558.1 304.5 L 559.0 304.4 L 559.8 304.3 L 560.6 304.2 L 561.4 304.1 L 562.2 304.0 L 563.1 303.9 L 563.9 303.8 L 564.7 303.7 L 565.5 303.6 L 566.4 303.6 L 567.2 303.5 L 568.0 303.4 L 568.8 303.3 L 569.6 303.2 L 570.5 303.1 L 571.3 303.0 L 572.1 302.9 L 572.9 302.8 L 573.7 302.8 L 574.6 302.7 L 575.4 302.6 L 576.2 302.5 L 577.0 302.4 L 577.8 302.3 L 578.7 302.2 L 579.5 302.1 L 580.3 302.1 L 581.1 302.0 L 582.0 301.9 L 582.8 301.8 L 583.6 301.7 L 584.4 301.6 L 585.2 301.6 L 586.1 301.5 L 586.9 301.4 L 587.7 301.3 L 588.5 301.2 L 589.3 301.1 L 590.2 301.1 L 591.0 301.0 L 591.8 300.9 L 592.6 300.8 L 593.5 300.7 L 594.3 300.7 L 595.1 300.6 L 595.9 300.5 L 596.7 300.4 L 597.6 300.3 L 598.4 300.3 L 599.2 300.2 L 600.0 300.1 L 600.8 300.0 L 601.7 300.0 L 602.5 299.9 L 603.3 299.8 L 604.1 299.7 L 604.9 299.7 L 605.8 299.6 L 606.6 299.5 L 607.4 299.4 L 608.2 299.4 L 609.1 299.3 L 609.9 299.2 L 610.7 299.1 L 611.5 299.1 L 612.3 299.0 L 613.2 298.9 L 614.0 298.8 L 614.8 298.8 L 615.6 298.7 L 616.4 298.6 L 617.3 298.6 L 618.1 298.5 L 618.9 298.4 L 619.7 298.3 L 620.6 298.3 L 621.4 298.2 L 622.2 298.1 L 623.0 298.1 L 623.8 298.0 L 624.7 297.9 L 625.5 297.9 L 626.3 297.8 L 627.1 297.7 L 627.9 297.7 L 628.8 297.6 L 629.6 297.5 L 630.4 297.4 L 631.2 297.4 L 632.1 297.3 L 632.9 297.3 L 633.7 297.2 L 634.5 297.1 L 635.3 297.1 L 636.2 297.0 L 637.0 296.9 L 637.8 296.9 L 638.6 296.8 L 639.4 296.7 L 640.3 296.7 L 641.1 296.6 L 641.9 296.5 L 642.7 296.5 L 643.5 296.4 L 644.4 296.4 L 645.2 296.3 L 646.0 296.2 L 646.8 296.2 L 647.7 296.1 L 648.5 296.1 L 649.3 296.0 L 650.1 295.9 L 650.9 295.9 L 651.8 295.8 L 652.6 295.8 L 653.4 295.7 L 654.2 295.6 L 655.0 295.6 L 655.9 295.5 L 656.7 295.5 L 657.5 295.4 L 658.3 295.3 L 659.2 295.3 L 660.0 295.2 L 660.8 295.2 L 661.6 295.1 L 662.4 295.1 L 663.3 295.0 L 664.1 294.9 L 664.9 294.9 L 665.7 294.8 L 666.5 294.8 L 667.4 294.7 L 668.2 294.7 L 669.0 294.6 L 669.8 294.6 L 670.7 294.5 L 671.5 294.4 L 672.3 294.4 L 673.1 294.3 L 673.9 294.3 L 674.8 294.2 L 675.6 294.2 L 676.4 294.1 L 677.2 294.1 L 678.0 294.0 L 678.9 294.0 L 679.7 293.9 L 680.5 293.9 L 681.3 293.8 L 682.1 293.8 L 683.0 293.7 L 683.8 293.7 L 684.6 293.6 L 685.4 293.6 L 686.3 293.5 L 687.1 293.5 L 687.9 293.4 L 688.7 293.4 L 689.5 293.3 L 690.4 293.3 L 691.2 293.2 L 692.0 293.2 L 692.8 293.1 L 693.6 293.1 L 694.5 293.0 L 695.3 293.0 L 696.1 292.9 L 696.9 292.9 L 697.8 292.8 L 698.6 292.8 L 699.4 292.7 L 700.2 292.7 L 701.0 292.6 L 701.9 292.6 L 702.7 292.5 L 703.5 292.5 L 704.3 292.4 L 705.1 292.4 L 706.0 292.3 L 706.8 292.3 L 707.6 292.3 L 708.4 292.2 L 709.3 292.2 L 710.1 292.1 L 710.9 292.1 L 711.7 292.0 L 712.5 292.0 L 713.4 291.9 L 714.2 291.9 L 715.0 291.8" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Points remarquables -->
    <circle cx="353.9" cy="220.0" r="4.5" fill="#c74440" stroke="#ffffff" stroke-width="2"/>
    <g transform="translate(363.9, 235.0)">
      <text x="32.5" y="1" text-anchor="middle" dominant-baseline="central" fill="#1f2937" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11.5" font-weight="600" paint-order="stroke" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round">O(0 ; 0)</text>
    </g>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="88" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x &lt; 1</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x > 1</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#c74440" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote verticale x = 1</text>
      <line x1="10" y1="69" x2="35" y2="69" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="73" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote horizontale y = −1</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie B</strong></p>

<p><strong>1.</strong> Primitive de \\(u\\) : \\(U(x) = \\ln(x-1)\\). Primitive de \\(v\\) : \\(V(x) = \\dfrac{1}{2}[\\ln(x-1)]^2\\).</p>

<p><strong>2.</strong> Pour \\(x>1\\) :</p>
<p>\\(-1-f(x) = -1-\\dfrac{x+\\ln(x-1)}{1-x} = \\dfrac{-1+x+\\ln(x-1)}{x-1} = \\dfrac{-1}{1-x}+\\dfrac{\\ln(x-1)}{x-1} = u(x)+v(x)\\) </p>

<p><strong>3.</strong> Sur \\([2;3]\\), (𝒞) est en-dessous de \\(y=-1\\) :</p>
<p>\\(S = 4\\int_2^3(-1-f(x))dx = 4\\int_2^3(u(x)+v(x))dx\\)</p>
<p>\\(= 4\\left[\\ln(x-1)+\\dfrac{1}{2}(\\ln(x-1))^2\\right]_2^3 = 4\\left(\\ln2+\\dfrac{(\\ln2)^2}{2}\\right)\\)</p>
<p>\\[\\boxed{S = 2\\ln2(2+\\ln2)\\text{ cm}^2}\\]</p>

<p><strong>Partie C</strong></p>

<p><strong>1. Récurrence</strong></p>
<p>\\(u_1 = 4-e^{-1}\\approx3{,}6\\in]3;4[\\) (vérifié).</p>
<p>Si \\(3 < u_n < 4\\) \(\implies\) \\(-4 < -u_n < -3\\) \(\implies\) \\(e^{-4} < e^{-u_n} < e^{-3}\\) \(\implies\) \\(4-e^{-3} < u_{n+1} < 4-e^{-4}\\) \(\implies\) \\(3{,}95 < u_{n+1} < 3{,}98\\) \(\implies\) \\(3 < u_{n+1} < 4\\).</p>

<p><strong>2a.</strong> \\(u_{n+1}-u_n = e^{-u_{n-1}}-e^{-u_n} = e^{-u_n}(e^{u_n-u_{n-1}}-1)\\).</p>
<p>\\(e^{-u_n}>0\\), donc signe de \\(u_{n+1}-u_n\\) = signe de \\(e^{u_n-u_{n-1}}-1\\) = signe de \\(u_n-u_{n-1}\\). </p>

<p><strong>2b.</strong> \\(u_1-u_0 = 4-e^{-1}-1 = 3-e^{-1}>0\\). Par itération, \\(u_n-u_{n-1}>0\\) → \\((u_n)\\) est <strong>croissante</strong>.</p>

<p><strong>3.</strong> \\((u_n)\\) est croissante et bornée (par 4) → elle <strong>converge</strong>.</p>

</div>
`
    }
  ]
},

{
  id: 'bac-2012-D-juillet-2nd',
  year: 2012,
  series: 'D',
  tour: '2nd tour',
  region: 'Burkina Faso',
  title: 'BAC Terminale D — Session Normale Juillet 2012 / 2nd tour',
  topics: ['Nombres complexes & Géométrie', 'Géométrie dans l\'espace', 'Fonctions, Asymptotes & Logarithmes', 'Intégrales & Suite'],
  parts: [
    {
      label: 'Exercice 1 — Nombres complexes, triangle équilatéral & carré (4 pts)',
      problem: `<p><strong>1.</strong> \\(P(Z) = Z^3-6Z^2+12Z-16\\).</p>
<p><strong>a.</strong> Montrer que si \\(P(Z_0)=0\\) alors \\(P(\\bar{Z}_0)=0\\).</p>
<p><strong>b.</strong> Calculer \\(P(1+i\\sqrt{3})\\) puis factoriser \\(P(Z)\\).</p>
<p><strong>c.</strong> Solutions de \\(P(Z)=0\\).</p>
<p><strong>2.</strong> \\(a=4\\), \\(b=1+i\\sqrt{3}\\), \\(c=\\bar{b}\\). Points A, B, C d'affixes a, b, c.</p>
<p><strong>a.</strong> Placer A, B, C. <strong>b.</strong> Nature exacte du triangle ABC.</p>
<p><strong>3.</strong> \\(Z_K=-\\sqrt{3}+i\\), F image de K par rotation de centre O et d'angle \\(\\dfrac{\\pi}{3}\\), G image de K par translation \\(\\overrightarrow{OB}\\).</p>
<p><strong>a.</strong> Affixes de F et G. <strong>b.</strong> Montrer que (OC) ⊥ (OF).</p>
<p><strong>4. a.</strong> Affixe de H (4e sommet du parallélogramme COFH) et montrer que COFH est un carré.</p>
<p><strong>b.</strong> Nature du triangle AGH. (\\(\\sqrt{3}\\approx1{,}7\\))</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Polynômes &amp ; figures géométriques complexes</span>
  <ul>
    <li><strong>Factorisation :</strong> Si $z_0$ est racine de $P$, alors $P(Z) = (Z - z_0)Q(Z)$. Faire la division euclidienne.</li>
    <li><strong>Racines d'un trinôme :</strong> $aZ^2 + bZ + c = 0 \\Rightarrow \\Delta = b^2 - 4ac$, $Z = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.</li>
    <li><strong>Triangle équilatéral :</strong> Les trois sommets $A$, $B$, $C$ forment un triangle équilatéral $\\iff |z_B - z_A| = |z_C - z_B| = |z_A - z_C|$.</li>
    <li><strong>Carré :</strong> ABCD carré $\\iff$ les diagonales ont le même milieu, même longueur, et sont perpendiculaires.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1a.</strong> \\(P(\\bar{Z}_0) = \\overline{P(Z_0)} = \\bar{0} = 0\\) (car P a des coefficients réels). </p>

<p><strong>1b.</strong> \\(P(1+i\\sqrt{3}) = (1+i\\sqrt{3})^3-6(1+i\\sqrt{3})^2+12(1+i\\sqrt{3})-16\\)</p>
<p>\\(= (1+3i\\sqrt{3}-9-3i\\sqrt{3})-(6-12+6i\\sqrt{3}-6i\\sqrt{3})+(12+12i\\sqrt{3})-16\\)</p>
<p>\\(= (-8)-(6-12)+12-16+i(...)\\) <em>[calcul menant à 0]</em> → \\(P(1+i\\sqrt{3})=0\\) </p>
<p>\\(P(Z) = (Z^2-2Z+4)(Z-4)\\) → \\(\\boxed{P(Z) = (Z-1-i\\sqrt{3})(Z-1+i\\sqrt{3})(Z-4)}\\)</p>

<p><strong>1c.</strong> \\(\\boxed{S_\\mathbb{C} = \\{4 ; 1+i\\sqrt{3} ; 1-i\\sqrt{3}\\}}\\)</p>

<p><strong>2b.</strong></p>
<p>\\(\\dfrac{c-a}{b-a} = \\dfrac{(1-i\\sqrt{3})-4}{(1+i\\sqrt{3})-4} = \\dfrac{-3-i\\sqrt{3}}{-3+i\\sqrt{3}} = e^{-i\\dfrac{\\pi}{3}}\\)</p>
<p>Module 1 → \\(AB=AC\\) ; argument \\(-\\dfrac{\\pi}{3}\\) → \\((\\overrightarrow{AB};\\overrightarrow{AC})=-\\dfrac{\\pi}{3}\\).</p>
<p> Triangle ABC <strong>équilatéral</strong>.</p>

<p><strong>3a.</strong></p>
<p>\\(Z_F = e^{i\\dfrac{\\pi}{3}}Z_K = \\left(\\dfrac{1}{2}+\\dfrac{i\\sqrt{3}}{2}\\right)(-\\sqrt{3}+i) = -\\dfrac{\\sqrt{3}}{2}+\\dfrac{i}{2}+(-\\dfrac{3}{2}-\\dfrac{\\sqrt{3}}{2}i)\\cdot... \\)</p>
<p>\\(= \\dfrac{1}{2}(-\\sqrt{3}+i)+\\dfrac{i\\sqrt{3}}{2}(-\\sqrt{3}+i) = -\\dfrac{\\sqrt{3}}{2}+\\dfrac{i}{2}-\\dfrac{3i}{2}-\\dfrac{\\sqrt{3}}{2} \\)</p>
<p>Résultat : \\(\\boxed{Z_F = -\\sqrt{3}-i}\\)</p>
<p>\\(Z_G = Z_K+Z_B = (-\\sqrt{3}+i)+(1+i\\sqrt{3}) = \\boxed{(1-\\sqrt{3})+i(1+\\sqrt{3})}\\)</p>

<p><strong>3b.</strong> \\(\\dfrac{Z_C}{Z_F} = \\dfrac{1-i\\sqrt{3}}{-\\sqrt{3}-i} = \\dfrac{(1-i\\sqrt{3})(-\\sqrt{3}+i)}{4} = \\dfrac{-\\sqrt{3}+i+3i+\\sqrt{3}}{4} = i\\)</p>
<p>\\(\\arg(Z_C/Z_F) = \\dfrac{\\pi}{2}\\) → \\(\\overrightarrow{OF}\\perp\\overrightarrow{OC}\\) → (OF) ⊥ (OC). </p>

<p><strong>4a.</strong></p>
<p>\\(Z_H = Z_C+Z_F = (1-i\\sqrt{3})+(-\\sqrt{3}-i) = (1-\\sqrt{3})-i(1+\\sqrt{3})\\)</p>
<p>COFH : \\(OC\\perp OF\\) et \\(|Z_F|=|Z_C|=2\\) → <strong>carré</strong>. </p>

<p><strong>4b.</strong> \\(|Z_G-Z_A| = |Z_H-Z_A| = |Z_H-Z_G| = \\sqrt{16+8\\sqrt{3}}\\) → AGH est un triangle <strong>équilatéral</strong>.</p>`
    },
    {
      label: 'Exercice 2 — Géométrie 3D : tétraèdre OABC, projeté H, distance, volume (4 pts)',
      problem: `<p>\\(A(2;0;0)\\), \\(B(0;3;0)\\), \\(C(0;0;-2)\\).</p>
<p><strong>1.</strong> Calculer \\(\\vec{u} = \\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\).</p>
<p><strong>2.</strong> Soit \\(H(a;b;c)\\) le projeté orthogonal de O sur (ABC).</p>
<p><strong>a.</strong> Montrer que \\(3a+2b-3c-6=0\\).</p>
<p><strong>b.</strong> Montrer qu'il existe t tel que \\(a=-6t\\), \\(b=-4t\\), \\(c=6t\\).</p>
<p><strong>c.</strong> Déterminer t et les coordonnées de H.</p>
<p><strong>d.</strong> Calculer \\(d(O;(ABC))\\).</p>
<p><strong>3.</strong> Volume du tétraèdre OABC.</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Géométrie dans l'espace 3D</span>
  <ul>
    <li><strong>Projeté orthogonal :</strong> $H$ est le pied de la perpendiculaire de $O$ sur le plan $ABC$. $\\overrightarrow{OH} \\perp$ plan $ABC$.</li>
    <li><strong>Distance point-plan :</strong> $d(O, \\pi) = \\dfrac{|ax_O + by_O + cz_O + d|}{\\sqrt{a^2+b^2+c^2}}$ si le plan a pour équation $ax+by+cz+d=0$.</li>
    <li><strong>Volume d'un tétraèdre :</strong> $V = \\dfrac{1}{3} \\times \\mathcal{A}_{base} \\times h$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>1.</strong> \\(\\overrightarrow{AB}=(-2;3;0)\\), \\(\\overrightarrow{AC}=(-2;0;-2)\\).</p>
<p>\\(\\vec{u} = \\overrightarrow{AB}\\wedge\\overrightarrow{AC} = (3\\times(-2)-0\\times0;\\ ; 0\\times(-2)-(-2)\\times(-2);\\ ; (-2)\\times0-3\\times(-2)) = (-6;-4;6)\\)</p>

<p><strong>2a.</strong> \\(\\overrightarrow{AH}\\perp\\vec{u}\\) car \\(H\\in(ABC)\\) et \\(\\vec{u}\\perp(ABC)\\) :</p>
<p>\\(\\vec{u}\\cdot\\overrightarrow{AH} = -6(a-2)-4b+6c = 0 \\iff -6a-4b+6c+12=0 \\iff \\boxed{3a+2b-3c-6=0}\\) </p>

<p><strong>2b.</strong> \\(\\overrightarrow{OH}\\parallel\\vec{u}\\) (car \\(\\overrightarrow{OH}\\perp(ABC)\\)) → \\(\\overrightarrow{OH}=t\\vec{u}\\) → \\(a=-6t\\), \\(b=-4t\\), \\(c=6t\\). </p>

<p><strong>2c.</strong> \\(3(-6t)+2(-4t)-3(6t)-6=0 \\iff -18t-8t-18t=6 \\iff t=-\\dfrac{3}{22}\\)</p>
<p>\\(\\boxed{H\\left(\\dfrac{9}{11};\\dfrac{6}{11};-\\dfrac{9}{11}\\right)}\\)</p>

<p><strong>2d.</strong> \\(d(O;(ABC)) = OH = \\sqrt{\\dfrac{81}{121}+\\dfrac{36}{121}+\\dfrac{81}{121}} = \\dfrac{\\sqrt{198}}{11} = \\dfrac{3\\sqrt{22}}{11}\\)</p>

<p><strong>3.</strong> \\(\\text{Aire}(ABC) = \\dfrac{\\|\\vec{u}\\|}{2} = \\dfrac{\\sqrt{36+16+36}}{2} = \\dfrac{\\sqrt{88}}{2} = \\sqrt{22}\\)</p>
<p>\\(V = \\dfrac{1}{3}\\times\\sqrt{22}\\times\\dfrac{3\\sqrt{22}}{11} = \\dfrac{1}{3}\\times\\dfrac{3\\times22}{11} = \\boxed{2\\text{ u.v.}}\\)</p>`
    },
    {
      label: 'Problème — Fonction logarithme, asymptotes & calcul d\'aires (12 pts)',
      problem: `<p>Soit \\(f(x) = \\dfrac{-\\ln|x|}{x}+x-2\\) sur \\(\\mathbb{R}^*\\). Courbe (𝒞) dans \\((O;\\vec{i};\\vec{j})\\), unité 2 cm.</p>

<p><strong>Partie A</strong> — \\(g(x) = -x^2+1-\\ln|x|\\) sur \\(\\mathbb{R}^*\\).</p>
<p><strong>1.</strong> Variations de g et tableau. <strong>2.</strong> Calculer \\(g(-1)\\) et \\(g(1)\\). Signe de g selon x.</p>

<p><strong>Partie B</strong></p>
<p><strong>1.</strong> Limites de f aux bornes. Asymptote verticale.</p>
<p><strong>2. a.</strong> Montrer que \\((D): y=x-2\\) est asymptote à (𝒞).</p>
<p><strong>b.</strong> Position relative de (𝒞) par rapport à (D).</p>
<p><strong>3. a.</strong> Calculer \\(f'(x)\\) et exprimer en fonction de \\(g(x)\\). Sens de variation.</p>
<p><strong>b.</strong> Tableau de variations.</p>
<p><strong>4. a.</strong> Montrer que \\(I(0;-2)\\) est un centre de symétrie de (𝒞).</p>
<p><strong>b.</strong> Construire (𝒞) et ses asymptotes.</p>
<p><strong>5.</strong> Discuter graphiquement le nombre de solutions de \\(f(x)=m\\) selon \\(m\\).</p>

<p><strong>Partie C</strong></p>
<p>Soit \\(-1\\leq\\alpha<0\\). (Δ) = domaine entre (𝒞), \\(x=-1\\), \\(x=\\alpha\\), \\(y=x-2\\).</p>
<p><strong>1. a.</strong> Calculer \\(\\mathcal{A}(\\alpha)\\) en fonction de \\(\\alpha\\).</p>
<p><strong>b.</strong> \\(\\lim_{\\alpha\\to0^-}\\mathcal{A}(\\alpha)\\). Interprétation.</p>
<p><strong>2.</strong> Suite \\(u_n = \\displaystyle\\int_1^n f(x)dx\\) pour \\(n>0\\).</p>
<p><strong>a.</strong> Calculer \\(u_n\\). <strong>b.</strong> Convergence ?</p>`,
            rappel: `<div class="rappel">
  <span class="label">Rappels de cours — Fonctions rationnelles-ln, asymptotes &amp ; symétrie</span>
  <ul>
    <li><strong>Asymptote oblique $y = x-2$ :</strong> $f(x) - (x-2) = -\\dfrac{\\ln|x|}{x} \\to 0$ quand $x \\to \\pm\\infty$ (croissances comparées).</li>
    <li><strong>Dérivée :</strong> $\\left(\\dfrac{-\\ln|x|}{x}\\right)' = \\dfrac{\\ln|x| - 1}{x^2}$.</li>
    <li><strong>Centre de symétrie :</strong> $I(a, b)$ est centre de symétrie $\\iff f(a+t) + f(a-t) = 2b$ pour tout $t$.</li>
    <li><strong>Primitive de $\\ln x / x^2$ :</strong> IPP avec $u = \\ln x$, $v' = \\dfrac{1}{x}^2$. Résultat : $-\\dfrac{\\ln x + 1}{x} + C$.</li>
  </ul>
</div>`,
      correction: `<h4> Proposition de Corrigé</h4>

<p><strong>Partie A</strong></p>

<p><strong>1.</strong> \\(g'(x) = -2x-\\dfrac{1}{x} = -\\dfrac{2x^2+1}{x}\\).</p>
<p>Sur \\(]-\\infty;0[\\) : \\(x<0\\) et \\(2x^2+1>0\\) → \\(g'>0\\), g croissante.</p>
<p>Sur \\(]0;+\\infty[\\) : \\(x>0\\) → \\(g'<0\\), g décroissante.</p>

<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-17" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-17" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">g'</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">g</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="425.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="285.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="565.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="425.0" y1="50" x2="425.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425.0" y1="86" x2="425.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="400.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-17)"/>
    <line x1="450.0" y1="135" x2="680.0" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-17)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
    <text x="425.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">+∞</text>
    <text x="705.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
  </svg>
</div>

<p><strong>2.</strong> \\(g(-1) = -1+1-0 = 0\\) et \\(g(1) = -1+1-0 = 0\\).</p>
<p>Sur \\(]-\\infty;-1[\\) : g croissante < g(-1)=0 → \\(g<0\\). Sur \\(]-1;0[\\) : \\(g>0\\). Sur \\(]0;1[\\) : \\(g>0\\). Sur \\(]1;+\\infty[\\) : \\(g<0\\).</p>

<p><strong>Partie B</strong></p>

<p><strong>1.</strong> \\(\\lim_{x\\to-\\infty}f(x) = -\\infty\\), \\(\\lim_{x\\to0^-}f(x) = -\\infty\\), \\(\\lim_{x\\to0^+}f(x) = +\\infty\\), \\(\\lim_{x\\to+\\infty}f(x) = +\\infty\\). Asymptote verticale \\(x=0\\).</p>

<p><strong>2a.</strong> \\(f(x)-(x-2) = \\dfrac{-\\ln|x|}{x}\\). \\(\\lim_{x\\to\\pm\\infty}\\dfrac{\\ln|x|}{x} = 0\\) → (D) est asymptote oblique. </p>

<p><strong>2b.</strong></p>
<p>\\(f(x)-y = \\dfrac{-\\ln|x|}{x}\\). Signe = signe de \\(-\\ln|x|/x\\).</p>
<p>Sur \\(]-\\infty;-1[\\) et \\(]0;1[\\) : \\((C)\\) au-dessus de (D). Sur \\(]-1;0[\\) et \\(]1;+\\infty[\\) : en-dessous.</p>

<p><strong>3a.</strong> \\(f'(x) = \\dfrac{-\\dfrac{1}{x}\\cdot x+\\ln|x|}{x^2}+1 = \\dfrac{-1+\\ln|x|+x^2}{x^2} = \\dfrac{-x^2+1-\\ln|x|}{-x^2} \\cdot(-1) = -\\dfrac{g(x)}{x^2}\\)</p>
<p>Signe de \\(f'\\) = signe de \\(-g(x)\\).</p>
<p>f croissante sur \\(]-\\infty;-1[\\) et \\(]1;+\\infty[\\) ; décroissante sur \\(]-1;0[\\) et \\(]0;1[\\).</p>

<p><strong>3b.</strong></p>
<div class="diagram-wrap">
  <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arr-g-tv-gen-18" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1a7a5e"/></marker>
      <marker id="arr-r-tv-gen-18" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b83232"/></marker>
    </defs>
    <rect x="1" y="1" width="758" height="258" rx="10" fill="#ffffff" stroke="#dde1ec" stroke-width="1.5"/>
    <path d="M 1 10 C 1 5 5 1 10 1 L 95 1 L 95 259 L 10 259 C 5 259 1 255 1 250 Z" fill="#222d46"/>
    <line x1="0" y1="50" x2="760" y2="50" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="0" y1="100" x2="760" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="95" y1="0" x2="95" y2="260" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="47.5" y="26" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">x</text>
    <text x="47.5" y="75" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="800" font-style="italic">f'</text>
    <text x="47.5" y="180" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="16" font-weight="800" font-style="italic">f</text>
    <text x="145.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">−∞</text>
    <text x="285.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">-1</text>
    <text x="425.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="565.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">1</text>
    <text x="705.0" y="26" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">+∞</text>
    <text x="215.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <text x="355.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="285.0" y1="50" x2="285.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="285.0" y1="86" x2="285.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="285.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="495.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="425.0" y1="50" x2="425.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="425.0" y1="86" x2="425.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="425.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <text x="635.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#1a7a5e" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="20" font-weight="900">+</text>
    <line x1="565.0" y1="50" x2="565.0" y2="64" stroke="#dde1ec" stroke-width="1.5"/>
    <line x1="565.0" y1="86" x2="565.0" y2="100" stroke="#dde1ec" stroke-width="1.5"/>
    <text x="565.0" y="75" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="900">0</text>
    <line x1="170.0" y1="225" x2="260.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-18)"/>
    <line x1="310.0" y1="135" x2="400.0" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-18)"/>
    <line x1="450.0" y1="225" x2="540.0" y2="135" stroke="#1a7a5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-g-tv-gen-18)"/>
    <line x1="590.0" y1="135" x2="680.0" y2="225" stroke="#b83232" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arr-r-tv-gen-18)"/>
    <text x="145.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞</text>
    <text x="285.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">-3</text>
    <text x="425.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">−∞/+∞</text>
    <text x="565.0" y="125" text-anchor="middle" dominant-baseline="central" fill="#222d46" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">-1</text>
    <text x="705.0" y="235" text-anchor="middle" dominant-baseline="central" fill="#d4a017" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="900">+∞</text>
  </svg>
</div>

<p><strong>4a.</strong> \\(f(-x)+f(x) = \\dfrac{\\ln(-x)}{-x}-x-2+\\dfrac{-\\ln x}{x}+x-2 = \\dfrac{\\ln|x|}{x}-\\dfrac{\\ln x}{x}-4 = -4\\). </p>
<p>→ \\(I(0;-2)\\) est un <strong>centre de symétrie</strong>.</p>

<p><strong>5. Discussion</strong></p>
<p>Si \\(m<-3\\) : 2 solutions. \\(m=-3\\) : 1 solution (\\(x=-1\\)). \\(m\\in]-3;-1[\\) : 0 solution. \\(m=-1\\) : 1 solution (\\(x=1\\)). \\(m>-1\\) : 2 solutions.</p>

<p><strong>5. Construction de la courbe \\((\\mathcal{C})\\) et de ses asymptotes</strong></p>
<p>La courbe \\((\\mathcal{C})\\) admet pour asymptote verticale l'axe des ordonnées \\(x = 0\\), pour asymptote oblique la droite \\((D): y = x - 2\\) aux voisinages de \\(\\pm\\infty\\), et pour centre de symétrie le point \\(I(0 ; -2)\\).</p>
<div class="diagram-wrap" style="margin:20px 0;text-align:center;">
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;"> Représentation graphique — BAC 2012 Tour 2 — Courbe (𝒞) et Asymptotes</div>
  <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;background:#ffffff;border-radius:8px;border:1px solid #e2e8f0;">
    <defs>
    </defs>
    
    <!-- Grille de fond -->
    <line x1="65.0" y1="40.0" x2="65.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="124.1" y1="40.0" x2="124.1" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="183.2" y1="40.0" x2="183.2" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="242.3" y1="40.0" x2="242.3" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="301.4" y1="40.0" x2="301.4" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="419.5" y1="40.0" x2="419.5" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="478.6" y1="40.0" x2="478.6" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="537.7" y1="40.0" x2="537.7" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="596.8" y1="40.0" x2="596.8" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="655.9" y1="40.0" x2="655.9" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="715.0" y1="40.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="400.0" x2="715.0" y2="400.0" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="334.5" x2="715.0" y2="334.5" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="269.1" x2="715.0" y2="269.1" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="203.6" x2="715.0" y2="203.6" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="138.2" x2="715.0" y2="138.2" stroke="#e5e7eb" stroke-width="0.8"/><line x1="65.0" y1="72.7" x2="715.0" y2="72.7" stroke="#e5e7eb" stroke-width="0.8"/>
    
    <!-- Axes du repère -->
    <line x1="45" y1="236.4" x2="735" y2="236.4" stroke="#1f2937" stroke-width="1.5"/>
    <line x1="360.5" y1="415" x2="360.5" y2="25" stroke="#1f2937" stroke-width="1.5"/>
    <text x="740" y="254.4" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">x</text>
    <text x="342.5" y="24" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="13" font-weight="600">y</text>
    <line x1="65.0" y1="232.4" x2="65.0" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="65.0" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-5</text><line x1="124.1" y1="232.4" x2="124.1" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="124.1" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-4</text><line x1="183.2" y1="232.4" x2="183.2" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="183.2" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="242.3" y1="232.4" x2="242.3" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="242.3" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-2</text><line x1="301.4" y1="232.4" x2="301.4" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="301.4" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="419.5" y1="232.4" x2="419.5" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="419.5" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="478.6" y1="232.4" x2="478.6" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="478.6" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">2</text><line x1="537.7" y1="232.4" x2="537.7" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="537.7" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="596.8" y1="232.4" x2="596.8" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="596.8" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">4</text><line x1="655.9" y1="232.4" x2="655.9" y2="240.4" stroke="#1f2937" stroke-width="1"/><text x="655.9" y="251.4" text-anchor="middle" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><line x1="356.5" y1="400.0" x2="364.5" y2="400.0" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="404.0" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-5</text><line x1="356.5" y1="334.5" x2="364.5" y2="334.5" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="338.5" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-3</text><line x1="356.5" y1="269.1" x2="364.5" y2="269.1" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="273.1" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">-1</text><line x1="356.5" y1="203.6" x2="364.5" y2="203.6" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="207.6" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">1</text><line x1="356.5" y1="138.2" x2="364.5" y2="138.2" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="142.2" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">3</text><line x1="356.5" y1="72.7" x2="364.5" y2="72.7" stroke="#1f2937" stroke-width="1"/><text x="348.5" y="76.7" text-anchor="end" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">5</text><text x="350.5" y="251.4" fill="#4b5563" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="12" font-weight="400">O</text>
    
    <!-- Asymptotes & Tangentes -->
    <line x1="183.2" y1="400.0" x2="715.0" y2="105.5" stroke="#64748b" stroke-width="2.0" stroke-dasharray="4 4"/>
    
    <!-- Courbes -->
    <path d="M 65.0 454.9 L 65.8 454.4 L 66.7 454.0 L 67.5 453.5 L 68.3 453.0 L 69.2 452.5 L 70.0 452.1 L 70.9 451.6 L 71.7 451.1 L 72.5 450.7 L 73.4 450.2 L 74.2 449.7 L 75.0 449.2 L 75.9 448.8 L 76.7 448.3 L 77.5 447.8 L 78.4 447.3 L 79.2 446.9 L 80.0 446.4 L 80.9 445.9 L 81.7 445.4 L 82.6 445.0 L 83.4 444.5 L 84.2 444.0 L 85.1 443.5 L 85.9 443.1 L 86.7 442.6 L 87.6 442.1 L 88.4 441.6 L 89.2 441.2 L 90.1 440.7 L 90.9 440.2 L 91.7 439.7 L 92.6 439.3 L 93.4 438.8 L 94.3 438.3 L 95.1 437.8 L 95.9 437.4 L 96.8 436.9 L 97.6 436.4 L 98.4 435.9 L 99.3 435.5 L 100.1 435.0 L 100.9 434.5 L 101.8 434.1 L 102.6 433.6 L 103.4 433.1 L 104.3 432.6 L 105.1 432.2 L 106.0 431.7 L 106.8 431.2 L 107.6 430.7 L 108.5 430.3 L 109.3 429.8 L 110.1 429.3 L 111.0 428.8 L 111.8 428.4 L 112.6 427.9 L 113.5 427.4 L 114.3 426.9 L 115.1 426.5 L 116.0 426.0 L 116.8 425.5 L 117.7 425.0 L 118.5 424.6 L 119.3 424.1 L 120.2 423.6 L 121.0 423.1 L 121.8 422.7 L 122.7 422.2 L 123.5 421.7 L 124.3 421.2 L 125.2 420.8 L 126.0 420.3 L 126.8 419.8 L 127.7 419.4 L 128.5 418.9 L 129.4 418.4 L 130.2 417.9 L 131.0 417.5 L 131.9 417.0 L 132.7 416.5 L 133.5 416.0 L 134.4 415.6 L 135.2 415.1 L 136.0 414.6 L 136.9 414.1 L 137.7 413.7 L 138.5 413.2 L 139.4 412.7 L 140.2 412.2 L 141.1 411.8 L 141.9 411.3 L 142.7 410.8 L 143.6 410.4 L 144.4 409.9 L 145.2 409.4 L 146.1 408.9 L 146.9 408.5 L 147.7 408.0 L 148.6 407.5 L 149.4 407.0 L 150.2 406.6 L 151.1 406.1 L 151.9 405.6 L 152.8 405.2 L 153.6 404.7 L 154.4 404.2 L 155.3 403.7 L 156.1 403.3 L 156.9 402.8 L 157.8 402.3 L 158.6 401.8 L 159.4 401.4 L 160.3 400.9 L 161.1 400.4 L 161.9 400.0 L 162.8 399.5 L 163.6 399.0 L 164.5 398.5 L 165.3 398.1 L 166.1 397.6 L 167.0 397.1 L 167.8 396.7 L 168.6 396.2 L 169.5 395.7 L 170.3 395.2 L 171.1 394.8 L 172.0 394.3 L 172.8 393.8 L 173.6 393.4 L 174.5 392.9 L 175.3 392.4 L 176.2 392.0 L 177.0 391.5 L 177.8 391.0 L 178.7 390.6 L 179.5 390.1 L 180.3 389.6 L 181.2 389.1 L 182.0 388.7 L 182.8 388.2 L 183.7 387.7 L 184.5 387.3 L 185.3 386.8 L 186.2 386.3 L 187.0 385.9 L 187.9 385.4 L 188.7 384.9 L 189.5 384.5 L 190.4 384.0 L 191.2 383.5 L 192.0 383.1 L 192.9 382.6 L 193.7 382.1 L 194.5 381.7 L 195.4 381.2 L 196.2 380.7 L 197.0 380.3 L 197.9 379.8 L 198.7 379.4 L 199.6 378.9 L 200.4 378.4 L 201.2 378.0 L 202.1 377.5 L 202.9 377.0 L 203.7 376.6 L 204.6 376.1 L 205.4 375.7 L 206.2 375.2 L 207.1 374.7 L 207.9 374.3 L 208.7 373.8 L 209.6 373.4 L 210.4 372.9 L 211.3 372.4 L 212.1 372.0 L 212.9 371.5 L 213.8 371.1 L 214.6 370.6 L 215.4 370.2 L 216.3 369.7 L 217.1 369.3 L 217.9 368.8 L 218.8 368.4 L 219.6 367.9 L 220.4 367.4 L 221.3 367.0 L 222.1 366.5 L 223.0 366.1 L 223.8 365.6 L 224.6 365.2 L 225.5 364.8 L 226.3 364.3 L 227.1 363.9 L 228.0 363.4 L 228.8 363.0 L 229.6 362.5 L 230.5 362.1 L 231.3 361.6 L 232.1 361.2 L 233.0 360.8 L 233.8 360.3 L 234.7 359.9 L 235.5 359.4 L 236.3 359.0 L 237.2 358.6 L 238.0 358.1 L 238.8 357.7 L 239.7 357.3 L 240.5 356.8 L 241.3 356.4 L 242.2 356.0 L 243.0 355.6 L 243.8 355.1 L 244.7 354.7 L 245.5 354.3 L 246.4 353.9 L 247.2 353.4 L 248.0 353.0 L 248.9 352.6 L 249.7 352.2 L 250.5 351.8 L 251.4 351.4 L 252.2 351.0 L 253.0 350.6 L 253.9 350.1 L 254.7 349.7 L 255.5 349.3 L 256.4 348.9 L 257.2 348.5 L 258.1 348.2 L 258.9 347.8 L 259.7 347.4 L 260.6 347.0 L 261.4 346.6 L 262.2 346.2 L 263.1 345.8 L 263.9 345.5 L 264.7 345.1 L 265.6 344.7 L 266.4 344.3 L 267.2 344.0 L 268.1 343.6 L 268.9 343.3 L 269.8 342.9 L 270.6 342.6 L 271.4 342.2 L 272.3 341.9 L 273.1 341.5 L 273.9 341.2 L 274.8 340.9 L 275.6 340.6 L 276.4 340.3 L 277.3 339.9 L 278.1 339.6 L 278.9 339.3 L 279.8 339.0 L 280.6 338.7 L 281.5 338.5 L 282.3 338.2 L 283.1 337.9 L 284.0 337.7 L 284.8 337.4 L 285.6 337.2 L 286.5 336.9 L 287.3 336.7 L 288.1 336.5 L 289.0 336.3 L 289.8 336.1 L 290.6 335.9 L 291.5 335.7 L 292.3 335.5 L 293.2 335.4 L 294.0 335.2 L 294.8 335.1 L 295.7 335.0 L 296.5 334.8 L 297.3 334.8 L 298.2 334.7 L 299.0 334.6 L 299.8 334.6 L 300.7 334.6 L 301.5 334.5 L 302.3 334.6 L 303.2 334.6 L 304.0 334.6 L 304.9 334.7 L 305.7 334.8 L 306.5 335.0 L 307.4 335.1 L 308.2 335.3 L 309.0 335.5 L 309.9 335.8 L 310.7 336.1 L 311.5 336.4 L 312.4 336.7 L 313.2 337.1 L 314.0 337.6 L 314.9 338.1 L 315.7 338.6 L 316.6 339.2 L 317.4 339.9 L 318.2 340.6 L 319.1 341.4 L 319.9 342.2 L 320.7 343.1 L 321.6 344.2 L 322.4 345.3 L 323.2 346.5 L 324.1 347.7 L 324.9 349.2 L 325.7 350.7 L 326.6 352.3 L 327.4 354.1 L 328.3 356.1 L 329.1 358.2 L 329.9 360.5 L 330.8 363.1 L 331.6 365.8 L 332.4 368.8 L 333.3 372.1 L 334.1 375.7 L 334.9 379.6 L 335.8 383.9 L 336.6 388.6 L 337.4 393.8 L 338.3 399.6 L 339.1 405.9 L 340.0 413.0 L 340.8 420.9 L 341.6 429.7 L 342.5 439.5 L 343.3 450.6 L 344.1 463.2 L 345.0 477.5" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 371.4 -0.2 L 372.5 38.1 L 373.5 69.4 L 374.5 95.3 L 375.5 116.9 L 376.5 135.3 L 377.5 150.9 L 378.5 164.4 L 379.5 176.1 L 380.5 186.3 L 381.5 195.2 L 382.5 203.1 L 383.5 210.0 L 384.5 216.2 L 385.5 221.7 L 386.5 226.6 L 387.5 231.0 L 388.5 235.0 L 389.5 238.5 L 390.5 241.7 L 391.5 244.6 L 392.5 247.2 L 393.5 249.6 L 394.6 251.7 L 395.6 253.7 L 396.6 255.4 L 397.6 257.0 L 398.6 258.5 L 399.6 259.8 L 400.6 260.9 L 401.6 262.0 L 402.6 263.0 L 403.6 263.8 L 404.6 264.6 L 405.6 265.3 L 406.6 265.9 L 407.6 266.4 L 408.6 266.9 L 409.6 267.4 L 410.6 267.7 L 411.6 268.0 L 412.6 268.3 L 413.6 268.5 L 414.6 268.7 L 415.6 268.9 L 416.7 269.0 L 417.7 269.0 L 418.7 269.1 L 419.7 269.1 L 420.7 269.1 L 421.7 269.0 L 422.7 269.0 L 423.7 268.9 L 424.7 268.8 L 425.7 268.6 L 426.7 268.5 L 427.7 268.3 L 428.7 268.1 L 429.7 267.9 L 430.7 267.7 L 431.7 267.4 L 432.7 267.2 L 433.7 266.9 L 434.7 266.6 L 435.7 266.3 L 436.7 266.0 L 437.7 265.7 L 438.8 265.4 L 439.8 265.1 L 440.8 264.7 L 441.8 264.4 L 442.8 264.0 L 443.8 263.6 L 444.8 263.3 L 445.8 262.9 L 446.8 262.5 L 447.8 262.1 L 448.8 261.7 L 449.8 261.3 L 450.8 260.9 L 451.8 260.4 L 452.8 260.0 L 453.8 259.6 L 454.8 259.1 L 455.8 258.7 L 456.8 258.3 L 457.8 257.8 L 458.8 257.3 L 459.8 256.9 L 460.9 256.4 L 461.9 256.0 L 462.9 255.5 L 463.9 255.0 L 464.9 254.5 L 465.9 254.1 L 466.9 253.6 L 467.9 253.1 L 468.9 252.6 L 469.9 252.1 L 470.9 251.6 L 471.9 251.1 L 472.9 250.6 L 473.9 250.1 L 474.9 249.6 L 475.9 249.1 L 476.9 248.6 L 477.9 248.1 L 478.9 247.6 L 479.9 247.0 L 480.9 246.5 L 481.9 246.0 L 483.0 245.5 L 484.0 245.0 L 485.0 244.4 L 486.0 243.9 L 487.0 243.4 L 488.0 242.9 L 489.0 242.3 L 490.0 241.8 L 491.0 241.3 L 492.0 240.7 L 493.0 240.2 L 494.0 239.7 L 495.0 239.1 L 496.0 238.6 L 497.0 238.0 L 498.0 237.5 L 499.0 237.0 L 500.0 236.4 L 501.0 235.9 L 502.0 235.3 L 503.0 234.8 L 504.0 234.2 L 505.1 233.7 L 506.1 233.2 L 507.1 232.6 L 508.1 232.1 L 509.1 231.5 L 510.1 231.0 L 511.1 230.4 L 512.1 229.9 L 513.1 229.3 L 514.1 228.8 L 515.1 228.2 L 516.1 227.6 L 517.1 227.1 L 518.1 226.5 L 519.1 226.0 L 520.1 225.4 L 521.1 224.9 L 522.1 224.3 L 523.1 223.8 L 524.1 223.2 L 525.1 222.6 L 526.1 222.1 L 527.2 221.5 L 528.2 221.0 L 529.2 220.4 L 530.2 219.8 L 531.2 219.3 L 532.2 218.7 L 533.2 218.2 L 534.2 217.6 L 535.2 217.0 L 536.2 216.5 L 537.2 215.9 L 538.2 215.4 L 539.2 214.8 L 540.2 214.2 L 541.2 213.7 L 542.2 213.1 L 543.2 212.5 L 544.2 212.0 L 545.2 211.4 L 546.2 210.8 L 547.2 210.3 L 548.2 209.7 L 549.2 209.2 L 550.3 208.6 L 551.3 208.0 L 552.3 207.5 L 553.3 206.9 L 554.3 206.3 L 555.3 205.8 L 556.3 205.2 L 557.3 204.6 L 558.3 204.1 L 559.3 203.5 L 560.3 202.9 L 561.3 202.4 L 562.3 201.8 L 563.3 201.2 L 564.3 200.7 L 565.3 200.1 L 566.3 199.5 L 567.3 199.0 L 568.3 198.4 L 569.3 197.8 L 570.3 197.2 L 571.4 196.7 L 572.4 196.1 L 573.4 195.5 L 574.4 195.0 L 575.4 194.4 L 576.4 193.8 L 577.4 193.3 L 578.4 192.7 L 579.4 192.1 L 580.4 191.6 L 581.4 191.0 L 582.4 190.4 L 583.4 189.9 L 584.4 189.3 L 585.4 188.7 L 586.4 188.1 L 587.4 187.6 L 588.4 187.0 L 589.4 186.4 L 590.4 185.9 L 591.4 185.3 L 592.4 184.7 L 593.5 184.2 L 594.5 183.6 L 595.5 183.0 L 596.5 182.5 L 597.5 181.9 L 598.5 181.3 L 599.5 180.7 L 600.5 180.2 L 601.5 179.6 L 602.5 179.0 L 603.5 178.5 L 604.5 177.9 L 605.5 177.3 L 606.5 176.8 L 607.5 176.2 L 608.5 175.6 L 609.5 175.0 L 610.5 174.5 L 611.5 173.9 L 612.5 173.3 L 613.5 172.8 L 614.5 172.2 L 615.6 171.6 L 616.6 171.1 L 617.6 170.5 L 618.6 169.9 L 619.6 169.3 L 620.6 168.8 L 621.6 168.2 L 622.6 167.6 L 623.6 167.1 L 624.6 166.5 L 625.6 165.9 L 626.6 165.4 L 627.6 164.8 L 628.6 164.2 L 629.6 163.6 L 630.6 163.1 L 631.6 162.5 L 632.6 161.9 L 633.6 161.4 L 634.6 160.8 L 635.6 160.2 L 636.6 159.6 L 637.7 159.1 L 638.7 158.5 L 639.7 157.9 L 640.7 157.4 L 641.7 156.8 L 642.7 156.2 L 643.7 155.7 L 644.7 155.1 L 645.7 154.5 L 646.7 153.9 L 647.7 153.4 L 648.7 152.8 L 649.7 152.2 L 650.7 151.7 L 651.7 151.1 L 652.7 150.5 L 653.7 150.0 L 654.7 149.4 L 655.7 148.8 L 656.7 148.2 L 657.7 147.7 L 658.7 147.1 L 659.8 146.5 L 660.8 146.0 L 661.8 145.4 L 662.8 144.8 L 663.8 144.3 L 664.8 143.7 L 665.8 143.1 L 666.8 142.5 L 667.8 142.0 L 668.8 141.4 L 669.8 140.8 L 670.8 140.3 L 671.8 139.7 L 672.8 139.1 L 673.8 138.6 L 674.8 138.0 L 675.8 137.4 L 676.8 136.9 L 677.8 136.3 L 678.8 135.7 L 679.8 135.1 L 680.8 134.6 L 681.9 134.0 L 682.9 133.4 L 683.9 132.9 L 684.9 132.3 L 685.9 131.7 L 686.9 131.2 L 687.9 130.6 L 688.9 130.0 L 689.9 129.5 L 690.9 128.9 L 691.9 128.3 L 692.9 127.7 L 693.9 127.2 L 694.9 126.6 L 695.9 126.0 L 696.9 125.5 L 697.9 124.9 L 698.9 124.3 L 699.9 123.8 L 700.9 123.2 L 701.9 122.6 L 702.9 122.1 L 704.0 121.5 L 705.0 120.9 L 706.0 120.3 L 707.0 119.8 L 708.0 119.2 L 709.0 118.6 L 710.0 118.1 L 711.0 117.5 L 712.0 116.9 L 713.0 116.4 L 714.0 115.8 L 715.0 115.2" fill="none" stroke="#c74440" stroke-width="2.5" stroke-linecap="round"/>
    
    <!-- Légende -->
    <g transform="translate(65, 45)">
      <rect x="0" y="0" width="210" height="70" rx="6" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
      <line x1="10" y1="15" x2="35" y2="15" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="19" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x &lt; 0</text>
      <line x1="10" y1="33" x2="35" y2="33" stroke="#c74440" stroke-width="2.5"/>
      <text x="42" y="37" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Branche x > 0</text>
      <line x1="10" y1="51" x2="35" y2="51" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="42" y="55" fill="#374151" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="11" font-weight="800">Asymptote oblique (D) : y = x − 2</text>
    </g>
    <text x="745" y="425" text-anchor="end" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="10" font-weight="400">edit graph on desmos</text>
  </svg>
</div>

<p><strong>Partie C</strong></p>

<p><strong>1a.</strong> Sur \\([-1;\\alpha]\\) avec \\(\\alpha<0\\), (𝒞) au-dessus de (D) :</p>
<p>\\(\\mathcal{A}(\\alpha) = 4\\int_{-1}^\\alpha\\dfrac{-\\ln(-x)}{x}dx = 4\\left[\\dfrac{1}{2}(\\ln(-x))^2\\right]_{-1}^\\alpha = 2(\\ln(-\\alpha))^2\\)</p>
<p>\\[\\boxed{\\mathcal{A}(\\alpha) = 2(\\ln(-\\alpha))^2}\\]</p>

<p><strong>1b.</strong> \\(\\lim_{\\alpha\\to0^-}\\mathcal{A}(\\alpha) = +\\infty\\) car \\(\\ln(-\\alpha)\\to-\\infty\\). → (Δ) est un domaine illimité.</p>

<p><strong>2a.</strong></p>
<p>\\(u_n = \\int_1^n\\left(-\\dfrac{\\ln x}{x}+x-2\\right)dx = \\left[-\\dfrac{(\\ln x)^2}{2}+\\dfrac{x^2}{2}-2x\\right]_1^n\\)</p>
<p>\\(\\boxed{u_n = -\\dfrac{(\\ln n)^2}{2}+\\dfrac{n^2}{2}-2n+\\dfrac{3}{2}}\\)</p>

<p><strong>2b.</strong> \\(\\lim_{n\\to+\\infty}u_n = +\\infty\\) (terme dominant \\(\\dfrac{n^2}{2}\\)) → \\((u_n)\\) <strong>diverge</strong>.</p>

</div>
`
    }
  ]
}
];

if (typeof window !== 'undefined') { window.BAC_EXAMS_2000_2004 = BAC_EXAMS_2000_2004; }
if (typeof global !== 'undefined') { global.BAC_EXAMS_2000_2004 = BAC_EXAMS_2000_2004; }
