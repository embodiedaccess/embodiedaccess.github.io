# Interfaces Bridging Embodied AI and Assistive Technology

Landing page for a proposed **full-day UIST 2026 workshop** on accessible, usable, and empowering interfaces for assistive robots and embodied AI.

**Live site:** [embodiedaccess.github.io](https://embodiedaccess.github.io)

---

## What is this?

This repo is a **static workshop website** — no backend, no build step, no framework. It exists to:

- Introduce the workshop theme, program, and organizers
- Share the [full proposal PDF](assets/proposal.pdf)
- Let interested attendees open a prefilled email to express interest (works on plain GitHub Pages)

The workshop brings together HCI, robotics, rehabilitation, and assistive technology communities to design robot interfaces that are controllable, personal, trustworthy, and grounded in disabled people's agency.

---

## Run locally

You need **Python 3** installed. From the project root:

### macOS / Linux

```bash
./run_local.sh
```

If the script isn't executable yet: `chmod +x run_local.sh`

Use a different port: `./run_local.sh 3000`

### Windows

| Shell | Command |
| --- | --- |
| Git Bash or WSL | `./run_local.sh` |
| Command Prompt / PowerShell | `python -m http.server 8080` |

Then open [http://localhost:8080](http://localhost:8080) (or whichever port you chose).

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
