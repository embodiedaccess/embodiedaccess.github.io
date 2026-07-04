# Interfaces Bridging Embodied AI and Assistive Technology

Static workshop website for the UIST 2026 workshop proposal.

## Local Preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. In the repository settings, enable Pages with **GitHub Actions** as the source.
3. Push to `main`. The workflow in `.github/workflows/pages.yml` publishes the static site.

The site has no build step and no server dependency. The interest form creates a prefilled email draft so it can run on GitHub Pages.

## Files

- `index.html` - page content and structure
- `styles.css` - responsive visual design
- `script.js` - navigation and interest email behavior
- `assets/workshop-hero.png` - generated hero image
- `assets/uist2026-workshop-proposal.pdf` - workshop proposal PDF
