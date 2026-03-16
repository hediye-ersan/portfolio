# Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Overview
This project is a single-page portfolio with smooth navigation and animated sections. Content is localized for TR/EN via a simple language context.

## Sections
- Hero / Profile
- Projects (carousel)
- Experience (timeline)
- Skills / Why Hire Me
- Certificates
- Contact / Footer

## Features
- Responsive layout for mobile and desktop
- Smooth scroll navigation with active section tracking
- Animated UI (Framer Motion)
- TR/EN language toggle

## Tech Stack
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure
- `src/components` UI sections and shared components
- `src/pages/Home.tsx` page composition and section anchors
- `src/contexts/LanguageContext.tsx` language toggle
- `src/data/languageData.ts` localized content
- `public/assets` static images and icons

## Scripts
- `npm run dev` Start the dev server
- `npm run build` Type check and build
- `npm run preview` Preview the production build
- `npm run lint` Run ESLint

## Deployment (Vercel)
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install` (default)

## Notes
- Navbar section IDs are defined in `src/components/Navbar.tsx`.
- Sections are mounted in `src/pages/Home.tsx`.
- Update content in `src/data/languageData.ts`.