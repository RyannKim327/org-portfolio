# Ground Zero Community Website

> Code Beyond Limits, Build Beyond Boundaries.

Welcome to the repository for the **Ground Zero Community** official website. This project is built using Next.js (App Router), Tailwind CSS v4, Framer Motion, and Lucide React, styled with a premium developer dark-mode aesthetic.

---

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org) (v18.x or higher) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the active dev server.

### 3. Check for Lint Warnings & Build
Before submitting code, check for linter violations and build compiling status:
```bash
npm run lint
npm run build
```

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Logic & UI Libraries**: [React 19](https://react.dev/), [Framer Motion 12](https://www.framer.com/motion/)
- **Style Compilation**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography Stack**:
  - **Space Grotesk** (Base body and headers)
  - **Space Mono** (Technical, monospaced prompts, code variables, stats counters)

---

## 📂 Directory Layout

```text
├── public/                  # Static assets (favicons, official logos)
│   ├── images/
│   │   └── logo.png         # Official GZ emblem
├── src/
│   ├── app/                 # Next.js App Router (pages & global layouts)
│   │   ├── globals.css      # Core styles & Tailwind v4 theme configurations
│   │   ├── layout.tsx       # Root layout containing font load variables
│   │   └── page.tsx         # Root landing page assembly
│   ├── components/
│   │   ├── sections/        # Section-specific components (Hero, FAQ, etc.)
│   │   ├── shared/          # Persistent components (Navbar, Footer)
│   │   └── ui/              # Reusable UI primitives (Button, Card, Badge)
│   ├── hooks/               # Custom React hooks (useScroll)
│   └── lib/                 # Shared utilities (cn helper)
```

---

## 🤝 Collaboration & Contribution

We welcome contributions from developers, UI/UX designers, creators, and students of all experience levels! 

Please read our [**CONTRIBUTING.md**](file:///c:/Users/0x3EF8/Desktop/GZ/ground-zero/CONTRIBUTING.md) developer handbook for details on coding standards, branching structures, design system tokens, and pull request procedures.

---

## 💬 Connect with the Community

- **Discord Server**: [Join Discord](https://discord.gg/4H2v6UwjmY)
- **Facebook Page**: [Follow Page](https://www.facebook.com/GroundZeroDigital/)
- **Facebook Group**: [Join Group](https://www.facebook.com/groups/groundzerocommunity/)
- **GitHub Organization**: [View Codebases](https://github.com/GroundZero-Community)
