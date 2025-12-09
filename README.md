# Kaleb E. Martínez Rivera - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Computer Information Systems student and software developer. Built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface suitable for corporate and startup environments
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Project Filtering**: Dynamic filtering system for project showcase
- **SEO Optimized**: Meta tags and Open Graph tags for better discoverability
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and focus states
- **Performance**: Fast loading with code splitting and optimized assets

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Routing**: React Router DOM (ready for multi-page expansion)

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed on your machine

### Installation

1. Clone this repository:
```bash
git clone https://github.com/kalebmartinez/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portafolio_kaleb_martinez/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── Section.jsx
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.jsx
│   ├── data/              # Content data
│   │   └── portfolio.js
│   ├── utils/             # Utility functions
│   │   └── useScrollAnimation.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json
```

## Customizing Content

### Personal Information

Edit [`src/data/portfolio.js`](src/data/portfolio.js) to update:

- **Projects**: Add, remove, or modify project information
- **Skills**: Update your skill categories and proficiency levels
- **Contact**: Update email, GitHub, LinkedIn, and resume links
- **About**: Modify the about section content

### Example - Adding a New Project:

```javascript
{
  id: 6,
  title: 'Your Project Name',
  shortDescription: 'Brief one-line description',
  businessProblem: 'What business problem does it solve?',
  longDescription: 'Detailed description...',
  image: '/projects/your-project.jpg',
  technologies: ['React', 'Node.js', 'MongoDB'],
  techIcons: [FaReact, FaNodeJs, SiMongodb],
  category: ['Web Apps', 'Databases'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/yourusername/project',
  featured: true,
}
```

### Example - Adding a New Skill:

```javascript
{
  name: 'GraphQL',
  icon: SiGraphql, // Import from react-icons
  level: 'Intermediate',
  color: 'purple'
}
```

### Styling & Theme

Update colors in [`tailwind.config.js`](tailwind.config.js):

```javascript
colors: {
  primary: {
    // Modify these color values
    500: '#0ea5e9',
    600: '#0284c7',
    // ... etc
  },
}
```

### SEO & Meta Tags

Update meta information in [`index.html`](index.html):

- Page title
- Description
- Keywords
- Open Graph tags
- Twitter card information

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure the build
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://yourusername.github.io/repository-name"
```

3. Deploy:
```bash
npm run deploy
```

## Performance Optimization

The site is optimized for performance with:

- Code splitting and lazy loading
- Optimized images (use WebP format when possible)
- Minimized JavaScript and CSS
- Fast First Contentful Paint (FCP)
- Efficient Intersection Observer for scroll animations

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)
- Reduced motion support (respects user preferences)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## Customization Tips

1. **Replace Placeholder Images**: Add your own project screenshots to `/public/projects/`
2. **Add Resume**: Place your resume PDF in `/public/resume.pdf`
3. **Update Favicon**: Replace `/public/vite.svg` with your own favicon
4. **Add Analytics**: Integrate Google Analytics or Plausible in `index.html`
5. **Form Backend**: Connect the contact form to a service like Formspree or EmailJS

## Troubleshooting

### Dark mode not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 16+

### Styling not applying
- Make sure Tailwind directives are in `index.css`
- Check that `tailwind.config.js` content paths are correct
- Clear browser cache

## Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Kaleb E. Martínez Rivera
- Email: kaleb.martinez@example.com
- GitHub: [@kalebmartinez](https://github.com/kalebmartinez)
- LinkedIn: [linkedin.com/in/kalebmartinez](https://linkedin.com/in/kalebmartinez)

---

**Built with React + Tailwind CSS** | Deployed on Vercel
