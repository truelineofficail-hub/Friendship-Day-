# 10 Threads of Us 🧵❤️

**A Little Ritual for Two — A Friendship Day Web Experience**

🔗 **Live Demo:** [truelineofficail-hub.github.io/Friendship-Day-](https://truelineofficail-hub.github.io/Friendship-Day-/)

---

## About

**10 Threads of Us** is an interactive, single-page Friendship Day web experience built as a heartfelt digital ritual for two friends. Instead of a static greeting card, visitors move through a guided journey — answering ten personal questions ("threads") one at a time — before a **sealed letter** is revealed at the end as an emotional payoff.

The site blends a scrollable photo gallery, a step-by-step Q&A flow, and a final animated reveal to create a warm, personalized keepsake experience for Friendship Day.

---

## ✨ Features

- **Photo Gallery Intro** — A hero image followed by a curated set of memory photos, each paired with a short caption.
- **10 Threads Quiz Flow** — A guided, one-question-at-a-time interface (`Thread No. 01` → `10`) with **Back** / **Next** navigation and a live progress indicator.
- **Threads Summary** — A recap screen showing all completed answers once every question is answered.
- **Sealed Letter Reveal** — An animated "wax seal" element that opens to reveal a hidden message after the ritual is complete.
- **Friendship Day Counter** — A dynamic "Days of Friendship" counter for a personalized touch.
- **Replay Option** — A "Tie the Threads Again" action to restart the experience.
- **Fully Responsive** — Optimized for mobile viewing with a proper viewport configuration.

---

## 🛠️ Tech Stack

- **HTML5** — Page structure and content
- **CSS3** — Styling, layout, and animations
- **JavaScript** — Interactivity (question flow, state tracking, seal animation)
- **GitHub Pages** — Static hosting

---

## 📁 Project Structure

```
Friendship-Day-/
├── index.html          # Main entry point
├── image/               # Photo gallery & hero assets
│   ├── hero.png
│   ├── 1.png … 11.png
├── style.css            # Stylesheet (if separated)
├── script.js            # Interaction logic (if separated)
└── README.md
```

> Note: Actual file names may vary — check the repository source for the exact breakdown of assets and scripts.

---

## 🚀 Getting Started

Clone the repository and open it locally:

```bash
git clone https://github.com/truelineofficail-hub/Friendship-Day-.git
cd Friendship-Day-
```

Since this is a static site, you can either:

1. **Open directly** — double-click `index.html` to open it in your browser, or
2. **Serve locally** (recommended, avoids path issues):

```bash
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## 🎨 Customization

To personalize this for your own friend or occasion:

- Replace images in the `image/` folder with your own photos.
- Edit the captions under each photo (currently placeholder text).
- Update the 10 questions/threads with your own prompts.
- Change the "Days of Friendship" counter start date.
- Rewrite the sealed letter message with your own words.

---

## 📄 License

No license file was detected in the source. Add a `LICENSE` file to the repository if you'd like to specify usage terms.

---

## 🙌 Credits

Created as a personalized Friendship Day tribute site. Built with care, one thread at a time.

