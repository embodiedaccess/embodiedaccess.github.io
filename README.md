# Interfaces Bridging Embodied AI and Assistive Technology

Landing page for a proposed **full-day UIST 2026 workshop** (October 2026, Detroit) on interfaces for assistive robots and embodied AI, at the intersection of robotics, HCI, rehabilitation, and access tech.

**Live site:** [embodiedaccess.github.io](https://embodiedaccess.github.io)

---

## What is this?

This repo is a **static workshop website** — no backend, no build step, no framework. It exists to:

- Introduce the workshop focus, program, and organizers
- Share the [full proposal PDF](assets/proposal.pdf)
- Link to the interest form for potential participants

The workshop is a day of technical exchange: lightning talks, live demos, panels, breakouts, and hands-on prototyping. The goal is to compare approaches, surface open research problems, and sketch practical next steps across four themes — **natural control** (speech, gesture, gaze, switch access), **shared autonomy** (intervention, handoff, uncertainty), **safety and trust** (feedback, consent, failure recovery), and **agency by design** (participatory methods, personalization, long-term deployment).

---

## Run locally

Open `index.html` in your browser. That's it.

If you want a local server (optional — only needed if something breaks when opening the file directly), from the project root:

```bash
./run_local.sh
```

Then open [http://localhost:8080](http://localhost:8080). The script uses Python's built-in HTTP server; any static file server works.

---

## Deploy to GitHub Pages

Pushes to `main` automatically publish via GitHub Actions (`.github/workflows/pages.yml`).

1. Push this repo to GitHub
2. In **Settings → Pages**, set the source to **GitHub Actions**
3. Push to `main` — the workflow uploads the static files and deploys

Because everything is client-side HTML/CSS/JS, there is nothing to compile or host beyond GitHub Pages.

---

## Project structure

```
├── index.html          Page content and structure
├── styles.css          Responsive layout and visual design
├── script.js           Navigation, mobile menu, interest email helper
├── run_local.sh        Quick local dev server
├── assets/
│   ├── workshop-hero.png   Hero banner image
│   ├── proposal.pdf        Workshop proposal (linked from nav)
│   └── logo_*.png            Brand marks
└── .github/workflows/
    └── pages.yml           GitHub Pages deployment
```
