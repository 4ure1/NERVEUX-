const MODULES = {
  cplx: "Nombres Complexes",
  ana: "Analyse & Fonctions",
  stat: "Statistiques",
  prob: "Probabilités"
};

const EXERCISES = [
  {
    id: "ex-cplx-1",
    module: "cplx",
    diff: "easy",
    type: "written",
    title: "Forme algébrique et module d'un nombre complexe",
    problem: "Soit $z = 3 + 4i$. Calculer le module $|z|$ et donner le conjugué $\\bar{z}$.",
    solution: "Le module de $z = a + bi$ est $|z| = \\sqrt{a^2 + b^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = 5$.\nLe conjugué est $\\bar{z} = 3 - 4i$."
  },
  {
    id: "ex-cplx-2",
    module: "cplx",
    diff: "medium",
    type: "qcm",
    title: "Équation du second degré dans ℂ",
    problem: "Quelle est l'une des solutions de l'équation $z^2 + 4 = 0$ ?",
    options: ["2", "-2", "2i", "1 + i"],
    answer: 2,
    solution: "$z^2 = -4 = (2i)^2 \\implies z = 2i$ ou $z = -2i$. La bonne réponse est donc $2i$."
  }
];
