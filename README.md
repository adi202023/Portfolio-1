# Aditya S. Sheregar — Portfolio

Art-directed personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Motion.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom architectural theme)
- **Typography:** `next/font/google` (Inter + JetBrains Mono)
- **Animation:** [Motion](https://motion.dev/)
- **Visual Element:** Interactive Canvas Neural & Safety Graph with cursor physics
- **Icons:** [Lucide React](https://lucide.dev/)
- **Contact:** Configured for Formspree / direct mail fallback

## 🛠️ Getting Started

First, install dependencies (if not already installed):

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

## 📬 Contact Form Setup

In `src/components/Contact.tsx`:
1. Sign up for a free endpoint at [formspree.io](https://formspree.io).
2. Set `const FORMSPREE_ID = 'your_id_here';`.
3. Submissions will be forwarded directly to `adityasheregar2006@gmail.com`.

