// Instant Hover Tooltip for SVG Curves & Variation Tables
(function() {
  function init() {
    let tooltip = document.getElementById('nx-curve-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'nx-curve-tooltip';
      tooltip.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 100000;
        background: linear-gradient(135deg, #182238 0%, #222d46 100%);
        color: #ffffff;
        padding: 6px 12px;
        border-radius: 8px;
        font-family: 'Nunito', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        box-shadow: 0 6px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,160,23,0.4);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.12s ease;
        transform: translate(-50%, -130%);
        white-space: nowrap;
        line-height: 1.4;
      `;
      document.body.appendChild(tooltip);
    }

    function showTooltip(html, x, y) {
      tooltip.innerHTML = html;
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
    }

    function hideTooltip() {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
    }

    function attach(root) {
      const scope = root || document;
      const svgs = scope.querySelectorAll('.tv-wrap svg, .diagram-wrap svg, svg[viewBox*="760"]');
      
      svgs.forEach(function(svg) {
        svg.addEventListener('mousemove', function(e) {
          const target = e.target;
          if (!target || target === svg) {
            hideTooltip();
            return;
          }

          let info = '';
          const tag = target.tagName.toLowerCase();
          const textContent = target.textContent ? target.textContent.trim() : '';

          if (tag === 'text') {
            const y = parseFloat(target.getAttribute('y') || 0);
            if (textContent.startsWith('M(') || textContent.startsWith('A(') || textContent.startsWith('B(') || textContent.startsWith('O(') || textContent.startsWith('Max') || textContent.startsWith('Min')) {
              info = `<span style="color:#f59e0b;font-weight:900;"> Point remarquable :</span> <strong>${textContent}</strong>`;
            } else if (y <= 35) {
              info = `<span style="color:#f0c040;">Abscisse :</span> <strong>${textContent}</strong>`;
            } else if (y > 35 && y <= 95) {
              if (textContent === '+' || textContent === '−' || textContent === '-') {
                info = `<span style="color:#4effc8;">Dérivée :</span> signe <strong>${textContent}</strong>`;
              } else if (textContent === '0') {
                info = `<span style="color:#f0c040;">Extremum :</span> dérivée nulle (tangente horizontale)`;
              } else {
                info = `Dérivée : <strong>${textContent}</strong>`;
              }
            } else {
              info = `<span style="color:#f0c040;">Valeur :</span> <strong>${textContent}</strong>`;
            }
          } else if (tag === 'line' || tag === 'polyline') {
            const stroke = target.getAttribute('stroke');
            if (stroke === '#1a7a5e') {
              info = `<span style="color:#4effc8;">↗ Fonction strictement croissante</span>`;
            } else if (stroke === '#b83232') {
              info = `<span style="color:#ff8080;">↘ Fonction strictement décroissante</span>`;
            } else if (stroke === '#ef4444') {
              info = `<span style="color:#ef4444;font-weight:900;">Vecteur dérivé / Tangente</span>`;
            } else if (stroke === '#dc2626') {
              info = `<span style="color:#dc2626;font-weight:900;">Asymptote</span>`;
            }
          } else if (tag === 'circle') {
            info = `<span style="color:#f59e0b;font-weight:900;">Point remarquable de la courbe</span>`;
          }

          if (info) {
            showTooltip(info, e.clientX, e.clientY);
          } else {
            hideTooltip();
          }
        });

        svg.addEventListener('mouseleave', hideTooltip);
      });

      const tables = scope.querySelectorAll('table.data tbody tr');
      tables.forEach(function(row) {
        row.addEventListener('mouseenter', function(e) {
          const cells = Array.from(row.querySelectorAll('td')).map(c => c.textContent.trim());
          if (cells.length >= 2) {
            const tVal = cells[0];
            const pointVal = cells[1];
            const tanVal = cells[3] || cells[2] || '';
            showTooltip(`<strong>${tVal}</strong> → Point <strong>${pointVal}</strong><br><span style="font-size:11px;color:#cbd5e1;">${tanVal}</span>`, e.clientX, e.clientY);
          }
        });
        row.addEventListener('mousemove', function(e) {
          tooltip.style.left = e.clientX + 'px';
          tooltip.style.top = e.clientY + 'px';
        });
        row.addEventListener('mouseleave', hideTooltip);
      });
    }

    window.attachCurveHoverTooltips = attach;
    attach(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
