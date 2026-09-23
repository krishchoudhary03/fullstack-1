# CSS/HTML Practice Files

Personal practice collection — small HTML/CSS exercises to build and
reinforce core concepts. No frameworks, no build step; every file is a
standalone `.html` you can just open in a browser.

## Structure

```
mine/          -> exercises written while following along in class / self-practice
new_topics/    -> extra topics practiced separately, not covered in mine/
```

## `mine/`

| File | Topic |
|---|---|
| `basiccss.html` | Basic selectors, colors, fonts, images |
| `cards.html` | Flexbox-centered login card |
| `dashboard_layout.html` | Flex-based dashboard (sidebar + topbar + cards + table) |
| `dumyamazon.html` + `style.css` | Amazon-style header/nav/hero/product-grid clone |
| `flexbox.html` | Flexbox login form |
| `gradient.html` | Linear gradient background + sticky horizontal cards |
| `horizontal.html` | Horizontal scroll with `position: sticky` |
| `scrolling.html` | Vertical scroll with `position: sticky` + z-index stacking |
| `layers.html` | Media queries + text-shadow |
| `navigation.html` | Responsive navbar with hamburger toggle |
| `pseudoclass.html` | `:hover`, `:active`, `:focus`, `:checked`, form pseudo-classes |
| `universal.html` | Combinators (`>`, `~`, `+`) and link pseudo-classes |
| `8thsept.html` | CSS Grid with `grid-template-areas` |
| `tailwind.html` | Tailwind CDN basics |

## `new_topics/`

| File | Topic |
|---|---|
| `float-layout.html` | `float`, clearfix, text-wrap around images |
| `css-variables.html` | Custom properties (`:root`, `var()`, scoped overrides) |
| `font-face.html` | `@font-face` / web font loading |
| `radial-conic-gradient.html` | `radial-gradient()` and `conic-gradient()` |
| `multicol-newspaper.html` | `column-count`, `column-rule`, drop caps |
| `product-cards.html` | CSS Grid product card layout |
| `scroll-snap-slider.html` | CSS-only slider using `scroll-snap` |
| `subgrid.html` | `grid-template-rows: subgrid` |

## Running

No dependencies. Open any `.html` file directly in a browser, or serve
the folder locally:

```bash
npx serve .
```

## Notes

Written for practice while learning CSS layout (flexbox, grid, positioning,
gradients, pseudo-classes) — not a production project.
