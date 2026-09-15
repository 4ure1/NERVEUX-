const fs = require('fs');
const vm = require('vm');
const path = require('path');

const files = [
  'bac_exams_2000_2013.js',
  'bac_exams_2014_2022.js',
  'bac_exams_2023_2026.js',
  'exercises.js',
  'new_exercises_terminale_d.js'
];

let totalErrors = 0;

for (const file of files) {
  const filepath = path.join(__dirname, file);
  if (!fs.existsSync(filepath)) {
    console.log(`File not found: ${file}`);
    continue;
  }
  
  const code = fs.readFileSync(filepath, 'utf8');
  
  const match = code.match(/(?:const|let|var)\s+([A-Z_0-9a-z]+)\s*=\s*\[/);
  if (!match) {
    continue;
  }
  
  const varName = match[1];
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  
  let exams = [];
  try {
    const wrappedCode = code + `\n; ${varName};`;
    exams = vm.runInContext(wrappedCode, sandbox);
  } catch (e) {
    console.error(`Syntax error evaluating ${file}: ${e.message}`);
    continue;
  }
  
  for (const exam of exams) {
    if (!exam.parts) continue;
    
    for (const part of exam.parts) {
      const texts = [
        { name: 'problem', content: part.problem },
        { name: 'correction', content: part.correction },
        { name: 'rappel', content: part.rappel }
      ];
      
      for (const textObj of texts) {
        if (!textObj.content) continue;
        const text = textObj.content;
        
        const reportError = (type, excerpt) => {
          console.log(`[${file}] Exam: ${exam.id} | Part: ${part.label} | Field: ${textObj.name} | Error: ${type}`);
          console.log(`   Excerpt: ${excerpt.substring(0, 80)}...`);
          totalErrors++;
        };
        
        // a. Commands LaTeX sans backslash au runtime : 'text{', 'sqrt{', 'begin{', 'frac{' (sans \)
        const unescapedRegex = /(?<![\\a-zA-Z])(text|sqrt|begin|frac|dfrac|vec|overrightarrow|limits|displaystyle|int|sum|lim|to|infty)\{/g;
        let match;
        while ((match = unescapedRegex.exec(text)) !== null) {
          reportError(`Unescaped LaTeX command: ${match[1]}{`, text.substring(Math.max(0, match.index - 20), match.index + 20));
        }
        
        // b. \cr suivi directement d'une commande LaTeX sans espace ou avec problème
        const crRegex = /\\cr(?=\\[a-zA-Z])/g;
        while ((match = crRegex.exec(text)) !== null) {
          reportError(`\\cr followed directly by LaTeX command`, text.substring(Math.max(0, match.index - 20), match.index + 20));
        }
        
        // c. Les émojis  
        const emojiRegex = /[]/g;
        while ((match = emojiRegex.exec(text)) !== null) {
          reportError(`Forbidden emoji found: ${match[0]}`, text.substring(Math.max(0, match.index - 20), match.index + 20));
        }
        
        // d. Les séparateurs de lignes dans matrices/cases mal formés
        const envRegex = /\\begin\{(cases|vmatrix|pmatrix|matrix|bmatrix|Bmatrix|Vmatrix|aligned)\}([\s\S]*?)\\end\{\1\}/g;
        while ((match = envRegex.exec(text)) !== null) {
          const innerContent = match[2];
          // We check if it uses single \ or \cr instead of \\
          // Actually, if we see \cr inside, we consider it malformed as per instruction
          if (innerContent.includes('\\cr')) {
             reportError(`Used \\cr instead of \\\\ in ${match[1]}`, match[0]);
          }
        }
        
        // e. Les tableaux de variation (vtab) avec balises mal fermées
        const openTables = (text.match(/<table/g) || []).length;
        const closeTables = (text.match(/<\/table>/g) || []).length;
        if (openTables !== closeTables) reportError(`Mismatched table tags`, `open: ${openTables}, close: ${closeTables}`);
        
        const openTr = (text.match(/<tr/g) || []).length;
        const closeTr = (text.match(/<\/tr>/g) || []).length;
        if (openTr !== closeTr) reportError(`Mismatched tr tags`, `open: ${openTr}, close: ${closeTr}`);
      }
    }
  }
}

console.log(`\nTotal errors found: ${totalErrors}`);
