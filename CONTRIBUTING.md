# Ground Zero — Collaborator & Contributor Handbook

Thank you for interest in contributing to the **Ground Zero Community**! This documentation outlines code standards, branch conventions, and design variables to help you set up and build alongside the community.

---

## 🗺️ Contribution Workflow

If you want to contribute features, cleanups, or styling additions, follow this flow:

### 1. Join Our Communication Channels
Real-time discussion happens on our [Discord Server](https://discord.gg/4H2v6UwjmY). Head over to the `#get-started` channel to coordinate with the maintainers and other contributors.

### 2. Branching Structure
Always branch from `master` (or the default integration branch) using these naming conventions:
- **`feat/`**: New layout sections, widgets, or components (e.g. `feat/member-profile`)
- **`fix/`**: Bug repairs, visual layout corrections, or broken links (e.g. `fix/particles-overlap`)
- **`docs/`**: Updates to readmes, handbook pages, or code comments (e.g. `docs/contributing-guidelines`)
- **`refactor/`**: Code optimization and organization (e.g. `refactor/tab-animations`)

### 3. Submission Guidelines
1. **Fork the repository** under your personal GitHub account.
2. Clone your fork locally and create a branch:
   ```bash
   git checkout -b feat/your-awesome-feature
   ```
3. Commit your changes with clear, descriptive commit messages.
4. Run `npm run lint` and `npm run build` to confirm compiling passes successfully with zero warnings/errors.
5. Push to your branch and open a **Pull Request (PR)** targeting the Ground Zero `master` branch.

---

## 🎨 Design System & CSS Tokens

This project is styled with a premium developer dark-mode aesthetic. Style tokens are defined inside `@theme` variables in `src/app/globals.css`.

### 1. Color Palette
- **Background**: `#000000` (Pure Black)
- **Surfaces/Cards**: `#0A0A0A`
- **Primary Accents**: `#CCFF00` (Neon Yellow-Green, bound to Tailwind `--color-brand`)
- **Borders**: `rgba(255, 255, 255, 0.04)` (Very thin line boundaries)

### 2. Typography
- **Headings & Main Copies**: **Space Grotesk** (`var(--font-space-grotesk)`), yielding a geometric cyber style.
- **Console & Technical Data**: **Space Mono** (`var(--font-space-mono)`), used for commands, badge numbers, stats, and typewriter elements.

### 3. Animations (Framer Motion)
Keep easing transitions clean and modern:
- Avoid bounce animations on standard panels unless intentionally mimicking console notifications.
- Use `ease: "easeOut"` for scaling/sliding panels.
- For canvas rendering elements (e.g. floating code backdrops), use `requestAnimationFrame` loops instead of setInterval to optimize rendering performance.

---

## 💻 Code Standards & Quality Guidelines

### 1. Next.js Optimizations
- **Always use the `<Image />` component** from `next/image` rather than standard HTML `<img>` tags for assets (like logos and banner graphics) to maintain optimized Largest Contentful Paint (LCP) speeds.
- Set explicit `width` and `height` properties on `<Image />` to prevent layout reflow shifts.

### 2. React Hook Patterns
- **Avoid synchronous state transitions inside `useEffect`:** Calling state hooks (`setState`) synchronously inside the main body of an effect triggers cascading render warnings in React 19.
- Wrap state overrides (e.g. resets in loops or timers) inside asynchronous handlers like `setTimeout` or window callbacks:
  ```typescript
  // YES
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  // NO (causes cascading render warnings)
  useEffect(() => {
    if (needsReset) {
      setIsActive(false);
    }
  }, [needsReset]);
  ```

### 3. Reusable UI Components
Before building custom elements, check the following files inside `src/components/ui/` for reusable primitives:
- [button.tsx](file:///c:/Users/0x3EF8/Desktop/GZ/ground-zero/src/components/ui/button.tsx) — Styled primary (solid white) and secondary (outline border) buttons.
- [card.tsx](file:///c:/Users/0x3EF8/Desktop/GZ/ground-zero/src/components/ui/card.tsx) — Card blocks with automatic mouse shine gradient masks.
- [badge.tsx](file:///c:/Users/0x3EF8/Desktop/GZ/ground-zero/src/components/ui/badge.tsx) — Muted badge tags.
