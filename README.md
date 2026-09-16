# Web Compose

**Web Compose** is a modern, full-featured web application and agency management platform built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**.

---

## 🚀 Features

- **Public Agency Pages**:
  - **Landing Page** (`/`): High-converting hero banner, portfolio showcase, why us, and client testimonials.
  - **Services** (`/services`): Overview of web design, development, and maintenance offerings.
  - **Contact Us** (`/contact`): Interactive contact forms and communication channels.
- **Authentication**:
  - Login (`/login`), Register (`/register`), and Password Recovery (`/forgot`).
- **Admin Dashboard** (`/dashboard`):
  - **Main Dashboard** (`/dashboard/default`): Analytics overview, top creators, complex tables, and quick stats.
  - **NFT Marketplace** (`/dashboard/marketplace`): Trending NFTs, recently added items, top creator metrics, and auction history cards.
  - **Tables & Data Tables** (`/dashboard/tables`, `/dashboard/data-tables`): Interactive data tables built with React Table.
  - **User & Approach Management** (`/dashboard/user-management`, `/dashboard/approach-management`): CRUD operations with Redux-managed modal dialogs.
  - **Profile** (`/dashboard/profile`): User profile details, project history, and avatar upload modal.
- **RTL Layout Support** (`/rtl/rtl-default`): Right-to-left layout configuration for internationalization.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS modules
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with typed hooks (`useAppDispatch`, `useAppSelector`)
- **Data & Tables**: [React Table](https://react-table.tanstack.com/), [ApexCharts](https://apexcharts.com/)
- **Icons & Animations**: [React Icons](https://react-icons.github.io/react-icons/), [React Awesome Reveal](https://github.com/salomonelli/react-awesome-reveal)

---

## 📁 Project Structure

```text
webcompose/
├── src/
│   ├── app/                      # Next.js 14 App Router routes & layouts
│   │   ├── layout.tsx            # Root layout with Redux Provider
│   │   ├── page.tsx              # Home landing page
│   │   ├── services/             # Services page
│   │   ├── contact/              # Contact page
│   │   ├── login/                # Sign-in page
│   │   ├── register/             # Sign-up page
│   │   ├── forgot/               # Forgot password page
│   │   ├── dashboard/            # Dashboard layout & sub-routes
│   │   └── rtl/                  # RTL layout & sub-routes
│   ├── components/               # Reusable UI components
│   │   ├── card/                 # Card containers (NftCard, CardMenu, etc.)
│   │   ├── molecules/            # Modal dialogs, Navbar, Porto, Why cards
│   │   ├── organisms/            # Hero, AboutUs, Testimony, NavMenu
│   │   ├── navbar/               # Top Navbar & RTL Navbar
│   │   └── sidebar/              # App Sidebar & RTL Sidebar
│   ├── redux/                    # Redux Toolkit store & slices
│   │   ├── store.ts              # Redux store definition
│   │   ├── hooks.ts              # Typed useAppDispatch & useAppSelector hooks
│   │   └── features/             # Auth & User slices
│   ├── types/                    # Centralized TypeScript declarations
│   │   ├── index.ts              # App interfaces & types
│   │   └── declarations.d.ts     # Asset module declarations (.svg, .webp, etc.)
│   ├── views/                    # Dashboard view components
│   ├── hooks/                    # Custom API, validation, & helper hooks
│   └── styles/                   # Global CSS & Tailwind imports
├── tsconfig.json                 # TypeScript compiler configuration & path aliases
├── tailwind.config.js            # Tailwind CSS theme & plugin config
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies & scripts
```

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Installation

Clone the repository and install dependencies using `--legacy-peer-deps`:

```bash
git clone https://github.com/zed378/webcompose.git
cd webcompose
npm install --legacy-peer-deps
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Compile TypeScript and build the optimized Next.js production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## ⚙️ Path Aliases

The project uses TypeScript path aliases configured in [`tsconfig.json`](./tsconfig.json):

- `@components/*` -> `src/components/*`
- `@appTypes/*` -> `src/types/*`
- `@redux/*` -> `src/redux/*`
- `@views/*` -> `src/views/*`
- `@hooks/*` -> `src/hooks/*`
- `@assets/*` -> `src/assets/*`
- `@route/*` -> `src/routes/*`
- `@styles/*` -> `src/styles/*`

---

## 📝 License

This project is maintained by **Web Compose**. All rights reserved.
