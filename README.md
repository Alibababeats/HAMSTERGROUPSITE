# 🐹 BeHeard — The Hamsters Project Portfolio

> **Team Name:** The Hamsters  
> **Project Name:** BeHeard  
> **Course:** User-Centered Design

A mobile-first, animated portfolio website for The Hamsters' semester-long UCD project. The site showcases our problem statement, team members, and semester assignments as a living case study.

---

## 📁 File Structure

```
HAMSTERGROUPSITE/
│
├── index.html                # Main HTML entry point — contains all page sections
│                             #   (Hero, Problem Statement, Team, Assignments, Footer)
│
├── public/                   # Static assets served as-is (not processed by Vite)
│   ├── favicon.svg           # Browser tab icon (gradient "B" logo)
│   ├── hero_bg.png           # Hero section background image (civic engagement scene)
│   ├── problem_statement.png # Cropped screenshot of our Miro board problem statement
│   └── vite.svg              # Default Vite logo (unused, safe to delete)
│
├── src/                      # Source code (processed by Vite)
│   ├── main.js               # JavaScript — handles:
│   │                         #   • Mobile hamburger nav toggle
│   │                         #   • Scroll-based header styling & active link tracking
│   │                         #   • Floating hero particles
│   │                         #   • GSAP ScrollTrigger animations for all sections
│   │
│   ├── style.css             # All CSS styles — organized as:
│   │                         #   • CSS custom properties (colors, fonts, spacing)
│   │                         #   • Base reset & typography
│   │                         #   • Navigation (mobile-first hamburger → desktop inline)
│   │                         #   • Hero section (background, particles, CTA)
│   │                         #   • Problem Statement (quote, image, breakdown cards)
│   │                         #   • Team section (avatar grid)
│   │                         #   • Assignments timeline
│   │                         #   • Footer
│   │                         #   • Responsive breakpoints (640px, 960px)
│   │
│   ├── counter.js            # Default Vite boilerplate (unused, safe to delete)
│   └── javascript.svg        # Default Vite boilerplate (unused, safe to delete)
│
├── package.json              # Project metadata & scripts
├── package-lock.json         # Locked dependency versions
├── .gitignore                # Files excluded from Git (node_modules, dist, etc.)
└── node_modules/             # Installed dependencies (auto-generated, not committed)
```

---

## 🚀 How to Run Locally

### Prerequisites

- **Node.js** (v18 or higher recommended) — [Download here](https://nodejs.org/)
- **npm** (comes bundled with Node.js)

You can verify your installation by running:

```bash
node --version
npm --version
```

### Setup & Launch

1. **Clone or download** this repository to your machine.

2. **Open a terminal** and navigate to the project folder:

   ```bash
   cd path/to/HAMSTERGROUPSITE
   ```

3. **Install dependencies** (only needed the first time, or after pulling new changes):

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to the URL shown in the terminal (usually):

   ```
   http://localhost:5173/
   ```

   The site will **hot-reload** automatically whenever you save changes to any file.

6. **To stop the server**, press `Ctrl + C` in the terminal.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Lightning-fast dev server & build tool |
| Vanilla HTML/CSS/JS | No framework overhead — clean, maintainable code |
| [GSAP + ScrollTrigger](https://gsap.com/) | Smooth scroll-based animations |
| [Google Fonts](https://fonts.google.com/) | Typography (Inter for body, Outfit for headings) |

---

## 🎨 Design System

The site uses CSS custom properties defined in `src/style.css` for easy theming:

- **Colors:** Deep Indigo (`#6366f1`), Soft Teal (`#2dd4bf`), Vibrant Coral (`#f97066`), Amber (`#fbbf24`)
- **Dark theme** with glassmorphism card effects
- **Mobile-first** responsive breakpoints at `640px` (tablet) and `960px` (desktop)

---

## 👥 Team Members

- Isaac Ditoro
- Ava Haghighi
- Eric Lopez Quintero
- Ali Salem
- Alexandra Veremeychik

---

## 📝 Updating Content

### Adding a new assignment

Open `index.html` and find the `<!-- ===== ASSIGNMENTS SECTION ===== -->` comment. Copy an existing `assignment-item` block and update the number, status, title, and description.

### Changing the problem statement image

Replace the file at `public/problem_statement.png` with your new image. The filename must stay the same, or update the `src` attribute in `index.html`.

### Adding images from your work process

Place new images in the `public/` folder, then reference them in `index.html` using `/your-image-name.png`.

---

## 📦 Building for Production

When you're ready to deploy the site (e.g., to GitHub Pages, Netlify, or Vercel):

```bash
npm run build
```

This creates an optimized `dist/` folder with minified HTML, CSS, and JS ready for hosting.

To preview the production build locally:

```bash
npm run preview
```
