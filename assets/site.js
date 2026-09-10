/* FeFerFenia — bilingual copy + hero rotator. Shared by Home and case-study pages. */
(function () {
  var STORE = 'feferfenia-lang';

  var DICT = {
    es: {
      'nav.work': 'Work',
      'nav.contact': 'Contacto',
      'hero.eyebrow': 'Hola, soy Fernanda Canales',
      'hero.role.1': 'Product Designer',
      'hero.role.2': 'UX/UI Designer',
      'hero.body': 'con más de 5 años de experiencia, enfocada en diseñar experiencias digitales intuitivas, escalables y centradas en las personas y el negocio.',
      'hero.cta': 'Ver proyectos',
      'logos.label': 'Colaboraciones con impacto',
      'areas.title': 'Áreas en las que <em class="hl">colaboro</em>',
      'areas.intro': 'Desde la investigación con usuarios hasta la implementación de soluciones, puedo sumarme en distintas etapas del proceso para ayudarte a tomar decisiones más informadas y entregar valor real.',
      'area.1.title': 'Innovación',
      'area.1.lead': 'Acompaño desde la idea hasta su validación.',
      'area.1.body': 'Te ayudo a transformar intuiciones en hipótesis, diseñar conceptos y validarlos con usuarios reales. Detectamos rápido qué vale la pena escalar y qué ajustar, incluso antes de invertir en desarrollo.',
      'area.2.title': 'Investigación',
      'area.2.lead': 'Entiende antes de decidir.',
      'area.2.body': 'Mapeo necesidades reales a través de entrevistas, tests y análisis de datos. Identifico oportunidades, puntos de fricción y comportamientos clave para tomar decisiones informadas desde el inicio.',
      'area.3.title': 'Diseño',
      'area.3.lead': 'Diseño interfaces claras, funcionales y listas para salir a producción.',
      'area.3.body': 'Creo soluciones visuales alineadas a los objetivos del negocio y al comportamiento de los usuarios. Entrego handoff detallado y colaboro con desarrollo en QA y puesta en marcha.',
      'area.4.title': 'Testeo',
      'area.4.lead': 'Valida con usuarios reales antes de lanzar.',
      'area.4.body': 'Diseño y aplico pruebas de usabilidad que revelan qué funciona, qué confunde y qué necesita iteración. Así, evitamos suposiciones y optimizamos la experiencia antes de llegar a producción.',
      'work.title': 'Casos reales, <em class="hl-orange">impacto concreto</em>',
      'work.intro': 'Desde plataformas internas hasta experiencias digitales para clientes finales, estos proyectos muestran cómo diseño soluciones centradas en las personas y alineadas con los objetivos del negocio.',
      'proj.1.role': 'UX Designer @ Esencial',
      'proj.1.title': 'Plataforma interna para Esencial',
      'proj.1.ph': 'Plataforma interna — captura de pantalla',
      'proj.2.role': 'UX Designer @ Capitalizarme.com',
      'proj.2.title': 'Nueva experiencia para inversionistas digitales',
      'proj.2.ph': 'Portal web — captura de pantalla',
      'proj.3.role': 'Product Designer @ Betterfly',
      'proj.3.title': 'Experiencia Embebida Betterfly',
      'proj.3.ph': 'App móvil — captura de pantalla',
      'proj.more': 'Ver más',
      'contact.eyebrow': 'Contacto',
      'contact.title': '¡Trabajemos <em class="hl">juntos</em>!',
      'contact.body': 'Cuéntame en qué estás trabajando. Podemos partir con una conversación de 15 minutos.',
      'contact.linkedin': 'LinkedIn',
      'contact.slot': 'Agendar 15 min',
      'contact.email': 'Escríbeme',
      'foot.made': 'Hecho con 💜 por FeFerFenia ft Claude'
    },
    en: {
      'nav.work': 'Work',
      'nav.contact': 'Contact',
      'hero.eyebrow': "Hi, I'm Fernanda Canales",
      'hero.role.1': 'Product Designer',
      'hero.role.2': 'UX/UI Designer',
      'hero.body': 'with 5+ years of experience, focused on designing intuitive, scalable digital experiences centered on people and business.',
      'hero.cta': 'See projects',
      'logos.label': 'Collaborations with impact',
      'areas.title': 'Areas I <em class="hl">collaborate</em> in',
      'areas.intro': 'From user research to implementation, I can step in at different stages of the process to help you make better-informed decisions and deliver real value.',
      'area.1.title': 'Innovation',
      'area.1.lead': 'I support you from idea to validation.',
      'area.1.body': "I help you turn intuitions into hypotheses, design concepts, and validate them with real users. We quickly identify what's worth scaling and what to adjust — even before investing in development.",
      'area.2.title': 'Research',
      'area.2.lead': 'Understand before deciding.',
      'area.2.body': 'I map real needs through interviews, tests, and data analysis. I identify opportunities, friction points, and key behaviors to make informed decisions from day one.',
      'area.3.title': 'Design',
      'area.3.lead': 'I design interfaces that are clear, functional, and production-ready.',
      'area.3.body': 'I create visual solutions aligned with business goals and user behavior. I deliver detailed handoff and collaborate with development through QA and launch.',
      'area.4.title': 'Testing',
      'area.4.lead': 'Validate with real users before launching.',
      'area.4.body': 'I design and run usability tests that reveal what works, what confuses, and what needs iteration — avoiding assumptions and optimizing the experience before it reaches production.',
      'work.title': 'Real cases, <em class="hl-orange">concrete impact</em>',
      'work.intro': 'From internal platforms to digital experiences for end clients, these projects show how I design solutions centered on people and aligned with business goals.',
      'proj.1.role': 'UX Designer @ Esencial',
      'proj.1.title': 'Internal platform for Esencial',
      'proj.1.ph': 'Internal platform — screenshot',
      'proj.2.role': 'UX Designer @ Capitalizarme.com',
      'proj.2.title': 'New experience for digital investors',
      'proj.2.ph': 'Web portal — screenshot',
      'proj.3.role': 'Product Designer @ Betterfly',
      'proj.3.title': 'Betterfly Embedded Experience',
      'proj.3.ph': 'Mobile app — screenshot',
      'proj.more': 'See more',
      'contact.eyebrow': 'Contact',
      'contact.title': "Let's work <em class=\"hl\">together</em>!",
      'contact.body': "Tell me what you're working on. We can start with a 15-minute chat.",
      'contact.linkedin': 'LinkedIn',
      'contact.slot': 'Book a slot (15 min)',
      'contact.email': 'Email me',
      'foot.made': 'Made with 💜 by FeFerFenia ft Claude'
    }
  };

  function detect() {
    try { var s = localStorage.getItem(STORE); if (s === 'es' || s === 'en') return s; } catch (e) {}
    var n = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /^es/i.test(n) ? 'es' : 'en';
  }

  var lang = detect();
  var roles = [], roleIdx = 0, timer = null;

  function apply() {
    var d = DICT[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang-btn') === lang));
    });
    roles = [d['hero.role.1'], d['hero.role.2']];
    var slot = document.querySelector('[data-rotator-item]');
    if (slot) slot.textContent = roles[roleIdx % roles.length];
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(STORE, next); } catch (e) {}
    apply();
  }

  function startRotator() {
    var slot = document.querySelector('[data-rotator-item]');
    if (!slot || roles.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var fade = null;
    function clear() {
      if (fade) { clearTimeout(fade); fade = null; }
      slot.removeAttribute('data-state');
    }
    function tick() {
      if (document.hidden) { clear(); return; }
      clear();
      slot.setAttribute('data-state', 'out');
      fade = setTimeout(function () {
        fade = null;
        roleIdx = (roleIdx + 1) % roles.length;
        slot.textContent = roles[roleIdx];
        slot.removeAttribute('data-state');
      }, 450);
    }
    timer = setInterval(tick, 2800);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        clear();
        if (timer) { clearInterval(timer); timer = null; }
      } else if (!timer) {
        timer = setInterval(tick, 2800);
      }
    });
  }

  function boot() {
    var extra = window.FEFER_EXTRA;
    if (extra) {
      ['es', 'en'].forEach(function (k) {
        if (extra[k]) Object.keys(extra[k]).forEach(function (key) { DICT[k][key] = extra[k][key]; });
      });
    }
    apply();
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang-btn')); });
    });
    startRotator();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.FeFer = { setLang: setLang, dict: DICT, get lang() { return lang; } };
})();
