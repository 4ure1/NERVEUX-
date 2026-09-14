// ══════════════════════════════════════════════════════════════════
//  NERVEUX — Métadonnées & Sujets BAC 2023–2025 Série D Burkina Faso
// ══════════════════════════════════════════════════════════════════

const BAC_EXAMS_2023_2025 = [
  {
    id: 'bac-2023-D-normale-1er',
    year: 2023,
    series: 'D',
    tour: '1er tour',
    region: 'Burkina Faso',
    title: 'BAC Terminale D — Session Normale 2023 / 1er tour',
    topics: ['Nombres complexes', 'Suites géométriques', 'Fonctions ln & exp', 'Bijection & Intégrales', 'Courbe paramétrique'],
    parts: [
      { label: 'Exercice 1 — Nombres complexes & transformations (4 pts)' },
      { label: 'Exercice 2 — Suite géométrique, logarithme et produit (4 pts)' },
      { label: 'Problème — Fonctions ln, bijection, aire, courbe paramétrique (12 pts)' }
    ]
  },
  {
    id: 'bac-2023-D-normale-2nd',
    year: 2023,
    series: 'D',
    tour: '2ème tour',
    region: 'Burkina Faso',
    title: 'BAC Terminale D — Session Normale 2023 / 2ème tour',
    topics: ['Nombres complexes', 'Suites géométriques', 'Fonctions ln & exp', 'Bijection & Intégrales', 'Courbe paramétrique'],
    parts: [
      { label: 'Exercice 1 — Nombres complexes & transformations (4 pts)' },
      { label: 'Exercice 2 — Suite géométrique, log et produit (4 pts)' },
      { label: 'Problème — Fonctions ln, bijection, aire, courbe paramétrique (12 pts)' }
    ]
  },
  {
    id: 'bac-2024-D-juillet-1er',
    year: 2024,
    series: 'D',
    tour: '1er tour',
    region: 'Burkina Faso',
    title: 'BAC Terminale D — Juillet 2024 / 1er tour',
    topics: ['Nombres complexes', 'Probabilités conditionnelles', 'Fonction par morceaux (rationnelle & racine)', 'Bijection & Intégration'],
    parts: [
      { label: 'Exercice 1 — Nombres complexes & géométrie (4 pts)' },
      { label: 'Exercice 2 — Probabilités : urnes et boules (4 pts)' },
      { label: 'Problème — Fonction f définie par morceaux (12 pts)' }
    ]
  },
  {
    id: 'bac-2024-D-juillet-2nd',
    year: 2024,
    series: 'D',
    tour: '2nd tour',
    region: 'Burkina Faso',
    title: 'BAC Terminale D — Juillet 2024 / 2nd tour',
    topics: ['Nombres complexes', 'Arithmétique & Probabilités', 'Fonction ln & racine', 'Bijection & Aire'],
    parts: [
      { label: 'Exercice 1 — Nombres complexes (4 pts)' },
      { label: 'Exercice 2 — Probabilités (4 pts)' },
      { label: 'Problème — Fonction f(x) = x + √(x²−x) et ln, bijection (12 pts)' }
    ]
  },
  {
    id: 'bac-2025-D-normale-1er',
    year: 2025,
    series: 'D',
    tour: '1er tour',
    region: 'Burkina Faso',
    title: 'BAC Terminale D — Session Normale 2025 / 1er tour',
    topics: ['Nombres complexes & Géométrie', 'Probabilités & Variables aléatoires', 'Équations différentielles', 'Fonction exp & Suites intégrales'],
    parts: [
      { label: 'Exercice 1 — Nombres complexes (4 pts)' },
      { label: 'Exercice 2 — Probabilités et variables aléatoires (5 pts)' },
      { label: 'Problème — Équations différentielles et fonction h (11 pts)' }
    ]
  }
].sort((a, b) => {
  const yearDiff = (a.year || 0) - (b.year || 0);
  if (yearDiff !== 0) return yearDiff;
  return (a.tour || '').includes('2') ? 1 : -1;
});

if (typeof window !== 'undefined') { window.BAC_EXAMS_2023_2025 = BAC_EXAMS_2023_2025; }
if (typeof global !== 'undefined') { global.BAC_EXAMS_2023_2025 = BAC_EXAMS_2023_2025; }
