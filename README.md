# Ranchi - Pink Themed Next.js Website

A beautiful pink-themed Next.js website built with App Router, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful pink color theme with gradients
- ⚡ Built with Next.js 15 App Router for optimal performance
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🏠 Modern home page with hero section, features, and call-to-action

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
npm run start
```

## Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with pink theme
│       ├── page.tsx        # Home page component
│       └── globals.css     # Global styles with Tailwind
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Customization

The pink color palette can be customized in `tailwind.config.ts`. The theme includes shades from pink-50 to pink-950.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.