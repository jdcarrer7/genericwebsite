# SparkleClean Services — Generic Cleaning Website (Comparison Sample)

A deliberately **generic** cleaning-company website, built as a side-by-side comparison
sample — the kind of common, off-the-shelf site to contrast against modern
custom-designed work.

Current design is a **hybrid**: it borrows the layout structure of durankinst.com — a
big full-bleed **grayscale hero banner** with overlaid text, a thin full-width header
with a search icon, a 3-column feature row with a "LEARN MORE" button, a full-width dark
photo "Why hire us?" band, and a bordered card grid — while keeping a generic/dated
character: a muted palette, Times New Roman body copy, a scrolling marquee offer strip, a
green-on-black hit counter, and a "best viewed in Internet Explorer 6.0" footer.

## Two versions (both kept)

| Version | Location | Description |
|---------|----------|-------------|
| **Hybrid** (current) | repo root — `index.html` | durankinst-inspired big grayscale hero + full-width sections, generic/dated character |
| **Vintage** | [`vintage/`](vintage/) | the pure early-2000s take: fixed 760px table layout, navy banner, left sidebar, beveled buttons |

Each version is self-contained (its own `css/`, `js/`, and `assets/`) and can be opened
on its own. Open `index.html` (hybrid) or `vintage/index.html` (vintage) directly, or
serve the repo and visit `/` vs `/vintage/`.

## Sections

One-page layout, top to bottom:

1. Header (logo, nav, search icon)
2. Scrolling marquee announcement
3. Big full-bleed grayscale hero banner with overlaid heading + CTA
4. Intro headline + 3-column feature row + "LEARN MORE"
5. Full-width dark photo band — "Why hire us?"
6. Services (numbered list)
7. Gallery (bordered card grid with captions)
8. Testimonials (star ratings)
9. Contact (info + free-estimate form)
10. Footer (menu, contact, hit counter, "best viewed in IE 6")

## Tech

Plain static site — no build step, no dependencies:

```
index.html           # table-based layout, no viewport meta (non-responsive, by design)
css/style.css        # dated styling: system fonts, beveled borders, muted palette
js/main.js           # form alert() + a ticking hit counter
assets/images/       # stock photos + clip-art
```

System fonts only (Times New Roman, Arial) — no web fonts or icon libraries, to match
the era.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Notes

- The quote and newsletter forms are front-end demos (no backend); submissions show a
  success state but are not sent anywhere.
- All business details (name, phone, email, address, reviews) are placeholder content.
