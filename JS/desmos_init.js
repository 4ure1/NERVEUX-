// ══════════════════════════════════════════════════════════════════
//  NERVEUX — Initialisation des courbes interactives Desmos
// ══════════════════════════════════════════════════════════════════
// Ce script :
//  1) charge paresseusement l'API Desmos (calculator.js) une seule fois,
//  2) recherche tout élément .desmos-calc-instance (créé au chargement
//     de la page OU injecté plus tard via innerHTML, par ex. quand un
//     corrigé de BAC s'ouvre) et y monte une Desmos.GraphingCalculator,
//  3) applique les expressions et les bornes fournies en data-attributes.
//
// Convention des data-attributes (voir JS/bac_exams_*.js) :
//   data-expressions = JSON (liste d'objets {id, latex, color, ...})
//   data-bounds      = JSON {left, right, bottom, top}

(function () {
  var DESMOS_API_URL = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
  var apiLoadPromise = null;

  function loadDesmosApi() {
    if (apiLoadPromise) return apiLoadPromise;
    apiLoadPromise = new Promise(function (resolve, reject) {
      if (window.Desmos && window.Desmos.GraphingCalculator) {
        resolve(window.Desmos);
        return;
      }
      var script = document.createElement('script');
      script.src = DESMOS_API_URL;
      script.async = true;
      script.onload = function () {
        if (window.Desmos) resolve(window.Desmos);
        else reject(new Error('Desmos API introuvable après chargement.'));
      };
      script.onerror = function () {
        reject(new Error('Échec du chargement de l\'API Desmos.'));
      };
      document.head.appendChild(script);
    });
    return apiLoadPromise;
  }

  function safeParse(text, fallback) {
    if (!text) return fallback;
    try {
      return JSON.parse(text);
    } catch (e) {
      console.warn('[desmos_init] JSON invalide dans un data-attribute :', e, text);
      return fallback;
    }
  }

  function mountCalculator(el, Desmos) {
    if (el.dataset.desmosInitialized === '1') return;
    el.dataset.desmosInitialized = '1';

    var expressions = safeParse(el.getAttribute('data-expressions'), []);
    var bounds = safeParse(el.getAttribute('data-bounds'), null);

    var calc = Desmos.GraphingCalculator(el, {
      keypad: false,
      settingsMenu: false,
      zoomButtons: true,
      expressionsTopbar: false,
      border: false,
      lockViewport: false,
      expressions: false,
      images: false,
      folders: false,
      notes: false,
      links: false
    });

    if (bounds) {
      try { calc.setMathBounds(bounds); } catch (e) { /* ignore invalid bounds */ }
    }
    if (Array.isArray(expressions) && expressions.length) {
      calc.setExpressions(expressions);
    }

    el._desmosCalc = calc;
  }

  function initAll(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll
      ? scope.querySelectorAll('.desmos-calc-instance:not([data-desmos-initialized])')
      : [];
    if (!nodes.length) return;
    loadDesmosApi().then(function (Desmos) {
      nodes.forEach(function (el) { mountCalculator(el, Desmos); });
    }).catch(function (err) {
      console.error('[desmos_init]', err);
    });
  }

  // Initialisation pour tout ce qui est déjà présent au chargement.
  document.addEventListener('DOMContentLoaded', function () {
    initAll(document);
  });

  // Observation continue : le contenu des corrigés est injecté
  // dynamiquement via innerHTML (voir bac-viewer.html / index.html),
  // donc on surveille le DOM pour attraper les nouvelles cartes.
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        var node = added[j];
        if (node.nodeType !== 1) continue; // élément uniquement
        if (node.classList && node.classList.contains('desmos-calc-instance')) {
          initAll(node.parentNode || document);
        } else if (node.querySelectorAll) {
          var found = node.querySelectorAll('.desmos-calc-instance');
          if (found.length) initAll(node);
        }
      }
    }
  });

  function startObserving() {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.body) {
    startObserving();
  } else {
    document.addEventListener('DOMContentLoaded', startObserving);
  }

  // Exposé au cas où un autre script veut forcer une réinitialisation
  // après avoir injecté du contenu lui-même (ex: après un innerHTML manuel).
  window.NERVEUX_initDesmosCards = initAll;
})();
