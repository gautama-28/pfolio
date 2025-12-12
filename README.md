# Portfolio (Vite + React)

A clean, fast personal portfolio built with Vite and React. It showcases your About, Skills, Projects, Experience, and Contact sections with smooth interactions and performant build tooling.

## Overview
- **Purpose:** Present your work, skills, and experience with a modern UI.
- **Framework:** React + Vite (ES Modules, fast dev server, optimized build).
- **Hosting-ready:** Includes `vercel.json` for quick deploys to Vercel.

## Features
- **Responsive layout:** Works across desktop, tablet, and mobile.
- **Smooth navigation:** `NavBar`, `Menu`, and custom cursor interactions.
- **Project showcase:** `Projects` with `ProjectDetails` modal/pages.
- **Animated UI:** `text-effect-flipper`, `TextScroll`, and timeline components.
- **Clean structure:** Components, constants, utilities neatly organized.

## Tech Stack
- **Frontend:** React, Vite
- **Styling:** CSS (`App.css`, `index.css`)
- **Tooling:** ESLint (`eslint.config.js`)
- **Deploy:** Vercel (`vercel.json`)

## Project Structure
- Root files: [index.html](index.html), [package.json](package.json), [vite.config.js](vite.config.js), [eslint.config.js](eslint.config.js), [vercel.json](vercel.json)
- Public assets: [public/](public/)
- App source: [src/](src/)
	- Entry: [src/main.jsx](src/main.jsx), [src/App.jsx](src/App.jsx)
	- Styles: [src/App.css](src/App.css), [src/index.css](src/index.css)
	- Assets: [src/assets/](src/assets/)
	- Components: [src/components/](src/components/)
		- Navigation: [src/components/NavBar.jsx](src/components/NavBar.jsx), [src/components/Menu.jsx](src/components/Menu.jsx), [src/components/Header.jsx](src/components/Header.jsx)
		- Sections: [src/components/About.jsx](src/components/About.jsx), [src/components/Skills.jsx](src/components/Skills.jsx), [src/components/Experience.jsx](src/components/Experience.jsx), [src/components/Projects.jsx](src/components/Projects.jsx), [src/components/Contact.jsx](src/components/Contact.jsx)
		- Project UI: [src/components/Project.jsx](src/components/Project.jsx), [src/components/ProjectDetails.jsx](src/components/ProjectDetails.jsx)
		- Timeline: [src/components/Timeline.jsx](src/components/Timeline.jsx), [src/components/ProcessTimeline.jsx](src/components/ProcessTimeline.jsx)
		- Misc: [src/components/CustomCursor.jsx](src/components/CustomCursor.jsx), [src/components/Icons.jsx](src/components/Icons.jsx), [src/components/MainAbt.jsx](src/components/MainAbt.jsx), [src/components/TextScroll.jsx](src/components/TextScroll.jsx), [src/components/Footer.jsx](src/components/Footer.jsx)
	- UI effects: [src/components/ui/FlipLink.jsx](src/components/ui/FlipLink.jsx), [src/components/ui/text-effect-flipper.jsx](src/components/ui/text-effect-flipper.jsx)
	- Constants: [src/constants/index.js](src/constants/index.js)
	- Lib: [src/lib/utils.js](src/lib/utils.js), [src/lib/cn.js](src/lib/cn.js)

## Getting Started
1. Prerequisites:
	 - Node.js 18+ recommended
	 - npm (or yarn/pnpm)
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

## NPM Scripts
- **`dev`**: Start Vite dev server.
- **`build`**: Build optimized assets.
- **`preview`**: Serve build output locally.

## Deployment
- **Vercel:** Uses [vercel.json](vercel.json). Connect the repo on Vercel and deploy; Vercel will detect Vite and set build/outputs automatically.
- **Static hosts:** Deploy contents of `dist/` after `npm run build`.

## Screenshots
- Home / Landing
	- ![Home screenshot](/ss.png)

## Configuration
- Update site metadata in [index.html](index.html) (`<head>` tags, favicon).
- Adjust component content in [src/components/](src/components/) and constants in [src/constants/index.js](src/constants/index.js).
- Tweak styles in [src/App.css](src/App.css) and [src/index.css](src/index.css).

## Credits
- Built with **React** and **Vite**.
- Deployed with **Vercel**.

## License
This portfolio is provided as-is for personal use. If you plan to reuse or publish a derivative, please attribute and confirm licensing requirements for any third-party assets used.

