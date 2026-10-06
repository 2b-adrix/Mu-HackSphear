# TechnoTarang Hackathon Website

Welcome to the official repository for the **TechnoTarang** Hackathon Website! This project is the front-end application built to showcase the event details, themes, timeline, prizes, sponsors, and registration for the TechnoTarang hackathon.

## 🚀 Features

The website is a single-page application (SPA) with a modern glass-morphism UI, a dynamic particle network background, and smooth animations. It includes the following sections:

- **Hero & Countdown**: Engaging landing view with an active countdown timer to the event.
- **About & Overview**: Information about the hackathon's vision and structure.
- **Past Glimpses**: A showcase of memories and highlights from previous editions.
- **Themes & Domains**: Details on the various hackathon tracks (e.g., Cybersecurity, Web 3.0, Heritage, Space & Energy).
- **Timeline**: A comprehensive, day-by-day schedule of the event.
- **Prizes**: Information on the prize pool for the ultimate winners.
- **Guidelines**: Rules and regulations for participants to follow.
- **Mentors & Jury**: Profiles of the esteemed mentors and jury members guiding the participants.
- **Sponsors & Partners**: Logos and details of the event's technical partners and sponsors.
- **Organizers & Team**: Details on the core organizing committee and the team behind the event.
- **FAQ**: Frequently asked questions.
- **Problem Statements**: Searchable, categorised problem statement section with authentication checking for secure access.
- **Registration**: A dedicated page for participants to register for the hackathon.

## 🛠️ Tech Stack

This project is built using modern web development tools:

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```text
TechnoTarang/
├── src/
│   ├── assets/             # Static assets like images and logos
│   ├── components/         # Reusable React components for each section
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   ├── Sponsors.tsx
│   │   ├── ParticleNetwork.tsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── App.tsx             # Main application routing and structure
│   ├── App.css             # Base application styles
│   ├── index.css           # Tailwind directives and custom variables
│   └── main.tsx            # Application entry point
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nihalgupta2506/TechnoTarang.git
   cd TechnoTarang
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to view the website locally.

### Building for Production

To build the application for production, run:
```bash
npm run build
```
This will compile the TypeScript code and bundle the application into the `dist` folder. You can preview the production build using:
```bash
npm run preview
```

## 📝 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Prepares a local server to preview the production build.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is proprietary and intended for the TechnoTarang hackathon event.
