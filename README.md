# ⚡ Bhanuka Dilshan — Personal Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://bhanuka01.github.io)
[![Status](https://img.shields.io/badge/Status-Live-10b981?style=flat-square)](https://bhanuka01.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> Personal portfolio website of **Bhanuka Dilshan**, showcasing work at the intersection of **Financial Mathematics & Statistics**, **Machine Learning & AI Engineering**, and **Cross-Platform Mobile Development (Flutter)**.

🌐 **Live Demo:** [https://bhanuka01.github.io](https://bhanuka01.github.io)

---

## 🏛️ Design & Architectural Philosophy

The site is custom-crafted from the ground up with an **Architectural Minimalist Editorial** aesthetic:

- **Crisp Sharp Geometry (`border-radius: 0`)**: 90-degree right-angled corners across cards, buttons, badges, inputs, and icon containers for a clean, precision-engineered feel.
- **Editorial Typography Pairing**:
  - **Instrument Serif**: Expressive italic display typography for headlines, section numerals, and monogram branding.
  - **Google Sans Flex**: Highly readable, modern sans-serif for UI labels, metadata, and body content.
- **Monochrome Base + Jewel Accents**: Obsidian dark theme (`#090a0d`) and clean paper light theme (`#f8f9fb`), accented by electric sapphire gradients (`#2563eb` &rarr; `#4f46e5`) and glowing emerald status indicators (`#10b981`).
- **High-Fidelity Natural Portrait Frame**: Full natural-color portrait card framed with right-angled hairline corner brackets (`.bracket-tl/tr/bl/br`) and ambient lighting.
- **Dynamic Diamond Indicators**: Status and timeline indicators rotated 45° to complement the sharp architectural geometry.
- **Compact Vertical Rhythm**: Tightly calibrated padding, reduced typography scale, and intentional whitespace to keep key projects and trajectory immediately visible above the fold.

---

## 🧭 Structured Portfolio Sections

The portfolio follows an intentional, numbered narrative structure:

```
00  Hero          — Identity, natural portrait, live status badge, and social strip
01  Selected Work — Mobile & web platforms (Sri Exam, ADSS Community Platform)
02  Trajectory    — Professional experience (ADSS Ruhuna) & academic degree (University of Ruhuna)
03  Writing       — Articles, insights, and research publications
04  Certificates  — Verified licenses (DeepLearning.AI, Astronomer Airflow, AWS, GCP, Neo4j, Microsoft)
05  Inquiry       — Direct communication channels & secure inquiry form
```

---

## 🤖 AI Search Engine Optimization (AEO / GEO / SEO)

Optimized for generative AI search engines and answer bots (ChatGPT Search, Perplexity AI, Google AI Overviews / SGE, Claude, Microsoft Copilot):

- **Structured Data JSON-LD (`schema.org`)**:
  - Embedded `Person`, `ProfilePage`, and `WebSite` knowledge graph schemas.
  - Detailed metadata including academic credentials, affiliations (*University of Ruhuna*, *ADSS*), handles (`bhanuka01`), and comprehensive `knowsAbout` taxonomy.
- **Rich Meta & Social Graph**:
  - Open Graph (`og:type="profile"`, `og:image`, `og:title`, `og:description`).
  - Twitter / X Cards (`summary_large_image`).
  - Canonical URL declaration and search crawler robot directives.
- **Zero-FOUC & Anti-Flicker Architecture**:
  - Screen-reader / crawler fallback content placed within `<noscript>` to prevent any unstyled flash on page refresh.
  - Portrait photo preloading via `<link rel="preload" as="image" href="/my.jpg" fetchpriority="high">`.
  - Inline head script detects saved `localStorage` theme instantly before DOM paint.

---

## 🔒 Secure Contact Form Integration

The inquiry form integrates with **Web3Forms** with enterprise-grade front-end security:

- **Native `FormData` Submission**: Direct multipart form submission eliminating CORS restrictions.
- **Environment Variable Protection**: The Web3Forms access key is managed via `VITE_WEB3FORMS_ACCESS_KEY` in `.env` (with safe fallback for local/static hosting) and omitted from version control via `.gitignore`.
- **Honeypot Bot Protection**: Hidden `botcheck` input traps automated spambots and silently discards their submissions without polluting your inbox.
- **Defensive Input Limits**: Strict `maxLength` caps prevent buffer overflow and payload abuse attacks.
- **Visual Feedback**: Real-time spinner state (`Dispatching message…`), emerald success confirmation (`✓`), and error fallback to direct email.

---

## 📁 Repository Structure

```text
├── public/
│   ├── my.jpg               # High-resolution natural portrait photo
│   └── favicon.svg          # Portfolio browser tab favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Glass navigation with theme switch & section tracker
│   │   ├── Hero.jsx         # Viewfinder portrait, status dot, and bio
│   │   ├── Work.jsx         # 01 / Selected Work project cards
│   │   ├── Experience.jsx   # 02 / Trajectory experience & education timeline
│   │   ├── Blog.jsx         # 03 / Writing & Insights articles list
│   │   ├── Certificates.jsx # 04 / Licenses & Certifications grid
│   │   ├── Contact.jsx      # 05 / Secure inquiry form & direct email cards
│   │   └── Footer.jsx       # Minimalist hairline footer & back-to-top
│   ├── data/
│   │   └── portfolioData.js # CENTRAL CONTENT REPOSITORY (update all text/links here)
│   ├── App.jsx              # Main view orchestrator & section divider hairlines
│   ├── index.css            # Complete design system (custom variables, sharp edges, themes)
│   └── main.jsx             # React 19 entry point
├── .env.example             # Template for local environment variables
├── .gitignore               # Ignores .env, node_modules, build artifacts
├── eslint.config.js         # Flat ESLint configuration
├── index.html               # Entry HTML with preloads, JSON-LD, and noscript fallback
├── package.json             # Project scripts and dependencies
└── vite.config.js           # Vite build pipeline
```

---

## ⚡ Quick Start & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhanuka01/bhanuka01.github.io.git
   cd bhanuka01.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables (Optional)**:
   ```bash
   cp .env.example .env
   ```
   Add your Web3Forms access key if you wish to override the default:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Lint check**:
   ```bash
   npm run lint
   ```

6. **Build for production**:
   ```bash
   npm run build
   ```
   Generates an optimized production bundle in `dist/`.

7. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

---

## ✏️ Updating Portfolio Content

All personal data, projects, work history, articles, and credentials are centralized in:

> [`src/data/portfolioData.js`](src/data/portfolioData.js)

To update your portfolio:
1. **Profile & Bio**: Edit `portfolioData.profile` (name, title, bio, pills, stats).
2. **Projects**: Add or modify entries in `portfolioData.projects`.
3. **Experience**: Update career roles in `portfolioData.experiences`.
4. **Certificates**: Add new credentials to `portfolioData.certifications`.
5. **Articles**: Add new publications to `portfolioData.articles`.
6. **Socials**: Update profile links in `portfolioData.socials`.

---

## 📄 License

Distributed under the MIT License. Feel free to use this codebase as a template for your own developer portfolio.

Crafted by **[Bhanuka Dilshan](https://github.com/bhanuka01)**.
