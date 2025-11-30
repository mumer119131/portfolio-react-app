# Portfolio - Next.js 15 + TypeScript

A modern, interactive portfolio website built with Next.js 15, TypeScript, and React 19.

## 🚀 Features

- 💼 **Professional Portfolio** - Showcase your projects, skills, and experience
- 🖥️ **Interactive Console** - Retro TV-style terminal interface
- 🎮 **3D Game** - Physics-based sphere character game using Three.js
- 🎨 **Modern Design** - Tailwind CSS with custom styling
- ⚡ **Next.js 15** - Latest features with App Router
- 📱 **Fully Responsive** - Works on all devices
- 🔍 **SEO Optimized** - Built-in metadata and analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0.3
- **Language**: TypeScript 5.7.2
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.16
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion, AOS
- **Forms**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio-react-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
Copy .env.example to .env.local and fill in your credentials:

NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── console/           # Console page
│   └── game/              # Game page
├── components/            # React components
│   ├── home/
│   ├── about/
│   ├── portfolio/
│   ├── experience/
│   ├── testimonials/
│   ├── contact/
│   ├── console/
│   ├── TV/
│   └── game/
├── data/                  # Data files
└── assets/                # Static assets
```

## 🎨 Features Breakdown

### Main Portfolio (/)
- Hero section with download CV
- About me with animated eye-tracking
- Skills showcase (Frontend & Backend)
- Project gallery with live previews
- Client testimonials
- Contact form with EmailJS integration

### Console (/console)
- Retro TV monitor design
- Interactive terminal with custom commands
- File explorer
- Settings panel with background customization
- Draggable windows
- Shutdown animation

### Game (/game)
- 3D physics-based game
- Third-person camera
- WASD movement controls
- Jump and run mechanics
- Procedurally generated objects

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🔧 Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template
4. Copy credentials to `.env.local`

### Customization
- Colors: `tailwind.config.ts` and `src/app/globals.css`
- Content: Update component files in `src/components/`
- Projects: Modify `src/components/portfolio/Portfolio.tsx`
- Console commands: Edit `src/data/console.ts`

## 📝 Migration from CRA

This project was migrated from Create React App to Next.js 15. See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for details.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muhammad Umer**
- GitHub: [@mumer119131](https://github.com/mumer119131)
- LinkedIn: [M Umer](https://www.linkedin.com/in/m-umer-06602821b/)
- Portfolio: [Your Portfolio URL]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TypeScript

