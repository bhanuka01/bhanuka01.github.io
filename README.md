# ⚡ Bhanuka Dilshan — Personal Portfolio Website

Welcome to the source code repository of my personal portfolio website, showcasing my work at the intersection of **Financial Mathematics & Statistics**, **Machine Learning/AI Engineering**, and **Cross-Platform Mobile Development (Flutter)**.

Live website: [https://bhanuka01.github.io](https://bhanuka01.github.io)

---

## 🎨 Design & Aesthetic Philosophy

This website is custom-designed from scratch with premium aesthetics and high-performance layout:
- **Neo-Glassmorphism & Sleek Dark Mode**: Rich gradients, tailored dark HSL palettes, and semi-transparent glass blocks.
- **Custom Interactive Elements**: Smooth interactive elements including a custom tracker cursor and intersection-observer powered micro-animations (`fade-up`).
- **Responsive Layout**: Designed for mobile, tablet, and desktop views.
- **Zero Heavy UI Frameworks**: Built purely on top of **React** + **Vite** using modular components and **Vanilla CSS** (variables, flexbox, grid) for maximum loading speed and styling flexibility.

---

## 🏗️ Project Architecture & Components

The codebase follows a modular, clean folder structure:

```text
├── public/                  # Static assets (images, icons, resumes)
├── src/
│   ├── assets/              # Component-specific local assets
│   ├── components/          # Reusable React components:
│   │   ├── CustomCursor.jsx # Smooth interactive follower cursor
│   │   ├── Navbar.jsx       # Sticky glass navigation bar
│   │   ├── Hero.jsx         # Introduction, stats, and call-to-action pills
│   │   ├── Work.jsx         # Display card grid for active development projects
│   │   ├── Leadership.jsx   # ADSS community contribution section with interactive charts
│   │   ├── Blog.jsx         # Articles/blogs carousel
│   │   ├── Contact.jsx      # Clean message submission interface
│   │   └── Footer.jsx       # Copyright, social integrations, and quick links
│   ├── data/
│   │   └── portfolioData.js # CENTRAL DATA SCHEMA (edit this to update details)
│   ├── App.jsx              # Main App wrapper managing intersection observers
│   ├── index.css            # Core design system, color variables, global styling
│   └── main.jsx             # Entry point
```

---

## ⚙️ Development & Build Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhanuka01/bhanuka01.github.io.git
   cd bhanuka01.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```
   This generates a production-ready `dist/` directory with optimized code.

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This builds the project and uploads the build files to the `gh-pages` branch, serving it live at `https://bhanuka01.github.io`.

---

## ✏️ Customizing Portfolio Data

All the content visible on the site is centralized in [portfolioData.js](file:///c:/github_repo/mysite/bhanuka01.github.io/src/data/portfolioData.js). To update any details (like adding a project, role, or publication), modify this file.

For example, to add or update projects:
```javascript
export const portfolioData = {
  profile: {
    name: "Bhanuka Dilshan",
    // ...
  },
  projects: [
    {
      icon: "📱",
      title: "Your Project Title",
      desc: "Brief description of what you built...",
      tags: [
        { label: "React", color: "blue" },
        { label: "Vite", color: "purple" }
      ],
      link: "https://yourprojectlink.com"
    },
    // Add more projects here
  ]
};
```

---

## 📝 License
Feel free to fork this repository and customize it for your own personal portfolio.
