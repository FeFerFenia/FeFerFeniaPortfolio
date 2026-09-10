# FeFerFeniaPortfolio

Portafolio personal bilingüe (ES/EN) de **Fernanda Canales** — Product / UX·UI Designer.

Sitio estático, sin backend ni build. El contenido es fijo y el cambio de idioma
ocurre en el cliente, sin recarga. Construido a partir del *design handoff*
`design_handoff_portafolio_feferfenia`.

## Estructura

```
index.html               Home (acento púrpura)
caso-esencial.html       Caso de estudio · Esencial (acento coral)
caso-capitalizarme.html  Caso de estudio · Capitalizarme.com (acento azul)
caso-betterfly.html      Caso de estudio · Betterfly (acento naranjo / blobs amarillos)
assets/
  ds.css                 Design system: tokens (custom properties) + componentes
  site.js                i18n core + rotador del hero + copy de la Home / UI compartida
  i18n-cases.js          Copy ES/EN de los tres casos (se carga antes de site.js)
.nojekyll                Para servir /assets tal cual en GitHub Pages
```

## Cómo verlo

Abrir `index.html` en el navegador, o servirlo localmente:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Idioma

- Toggle ES/EN siempre visible en el nav; cambia todo el copy sin recargar.
- Detección inicial: `localStorage['feferfenia-lang']` y, si no existe,
  `navigator.languages[0]` (`^es` → español, resto → inglés). La elección se persiste.
- Los nodos traducibles se marcan con `data-i18n` (texto) y `data-i18n-html`
  (titulares con `<em class="hl">` y listas con `<strong>`).

## Sistema de color por proyecto

Cada página define su acento a nivel de documento:

| Página          | `--accent`  | `--accent-tint` |
|-----------------|-------------|-----------------|
| Home / Contacto | `--purple`  | `#F1EFFB`       |
| Esencial        | `--coral`   | `#FCEEF0`       |
| Capitalizarme   | `--blue`    | `#EAEFFC`       |
| Betterfly       | `--orange`  | `#FEF4E0`       |

Los componentes (`.projcard`, `.numstep`, `.finding`, `.stat`, `.panel`, blobs)
heredan `--accent`. La sección **Contacto** siempre vuelve a púrpura.

## Pendientes de assets

- **Logos de cliente** (Home): hoy son wordmarks tipográficos temporales
  (`[data-logo-slot]`). Reemplazar por SVG reales de Capitalizarme.com, Betterfly,
  Accenture, Esencial y Heypay.
- **Captura del hero de Betterfly**: hoy es un placeholder (`.ph`). Reemplazar por
  el export real (≥1200px de ancho, fondo transparente).

---

Hecho con 💜 por FeFerFenia ft Claude
