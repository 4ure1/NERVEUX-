const fs = require('fs');
const path = require('path');

const files = [
  'bac_exams_2000_2013.js',
  'bac_exams_2014_2022.js',
  'bac_exams_2023_2026.js',
  'exercises.js',
  'new_exercises_terminale_d.js'
];

const latexCommands = new Set([
  'frac', 'dfrac', 'text', 'sqrt', 'begin', 'end', 'vec', 'overrightarrow', 'limits', 
  'displaystyle', 'int', 'sum', 'lim', 'to', 'infty', 'cr', 'left', 'right',
  'ln', 'log', 'cos', 'sin', 'tan', 'pi', 'theta', 'alpha', 'beta', 'gamma',
  'Delta', 'delta', 'Omega', 'omega', 'Sigma', 'sigma', 'ldots', 'cdots',
  'vdots', 'ddots', 'mathbb', 'mathcal', 'mathfrak', 'mathbf', 'mathrm',
  'times', 'div', 'pm', 'mp', 'neq', 'leq', 'geq', 'approx', 'equiv', 'propto',
  'forall', 'exists', 'in', 'notin', 'subset', 'supset', 'subseteq', 'supseteq',
  'cup', 'cap', 'setminus', 'emptyset', 'nabla', 'partial', 'circ',
  'cdot', 'quad', 'qquad', 'Rightarrow',
  'Leftarrow', 'Leftrightarrow', 'rightarrow', 'leftarrow', 'leftrightarrow',
  'mapsto', 'implies', 'iff', 'Re', 'Im', 'bar', 'hat', 'tilde', 'check',
  'breve', 'acute', 'grave', 'dot', 'ddot', 'mathring', 'underline',
  'overline', 'widehat', 'widetilde', 'overbrace', 'underbrace', 'pmatrix',
  'bmatrix', 'Bmatrix', 'vmatrix', 'Vmatrix', 'matrix', 'cases', 'aligned',
  'array', 'lvert', 'rvert', 'lVert', 'rVert', 'langle', 'rangle', 'lfloor',
  'rfloor', 'lceil', 'rceil', '!', ',', ':', ';', ' ', 'iint', 'iiint', 'oint',
  'mathcal', 'mathscr', 'geqslant', 'leqslant', 'overrightarrow', 'overleftrightarrow'
]);

for (const file of files) {
  const filepath = path.join(__dirname, file);
  if (!fs.existsSync(filepath)) {
    continue;
  }
  
  let code = fs.readFileSync(filepath, 'utf8');
  const originalCode = code;

  // We find exactly backslash + letters that are in our list, not preceded by backslash
  code = code.replace(/(?<!\\)\\([a-zA-Z]+)/g, (match, p1) => {
    if (latexCommands.has(p1)) {
      return '\\\\' + p1;
    }
    return match;
  });
  
  // Also we should just double backslash everywhere it looks like a MathJax command
  // Wait, what if there's \R for mathbb? Let's just double backslash ALL single backslashes in Math contexts if possible.
  // Actually, let's just do ALL \letters that are not basic JS escapes (\n \r \t \v \f \b \0)
  // Let's replace:
  code = code.replace(/(?<!\\)\\([a-zA-Z]+)/g, (match, p1) => {
    if (!['n', 'r', 't', 'v', 'f', 'b'].includes(p1)) {
        return '\\\\' + p1;
    }
    return match;
  });

  const latexSymbols = ['{', '}', '|', '_', '^', '%', '$', '#', '&', ',', ';', ':'];
  for (const sym of latexSymbols) {
      const symRegex = sym.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      const re = new RegExp(`(?<!\\\\)\\\\(?=${symRegex})`, 'g');
      code = code.replace(re, '\\\\');
  }

  const envRegex = /\\\\begin\{(cases|vmatrix|pmatrix|matrix|bmatrix|Bmatrix|Vmatrix|aligned)\}([\s\S]*?)\\\\end\{\1\}/g;
  code = code.replace(envRegex, (match, env, inner) => {
    let newInner = inner.replace(/\\\\cr/g, '\\\\\\\\');
    newInner = newInner.replace(/(?<!\\)\\cr/g, '\\\\\\\\');
    return `\\\\begin{${env}}${newInner}\\\\end{${env}}`;
  });

  code = code.replace(/[]/g, '');

  if (code !== originalCode) {
    fs.writeFileSync(filepath, code, 'utf8');
    console.log(`Updated ${file}`);
  }
}
