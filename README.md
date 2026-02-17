# Yoga Rizky - Portfolio Website

A modern, comprehensive portfolio website built with Next.js 15, TypeScript, shadcn/ui, and TanStack Query. This project follows a detailed architecture plan for scalability, performance, and maintainability.

## 🚀 Features

### MVP (Current Phase)

- **Single-page Portfolio**: Hero, About, Projects, Experience, Testimonials, Contact sections
- **Multi-page Architecture**: Dedicated Projects and Achievements pages with detail views
- **Modern Tech Stack**: Next.js 15, TypeScript, shadcn/ui, TanStack Query
- **MDX Content Management**: Rich content with frontmatter metadata
- **Dark/Light Mode**: System-aware theme switching
- **Responsive Design**: Mobile-first, fully responsive layout
- **Performance Optimized**: Fast loading, SEO-friendly
- **Docker Support**: Containerized development and production environments

### Planned V2 Features

- **Authentication**: GitHub/Google OAuth integration
- **Admin Dashboard**: Content management with WYSIWYG editor
- **Database Integration**: PostgreSQL + Prisma
- **Analytics**: Advanced tracking and monitoring
- **Blog System**: Dynamic content creation and management

## 🛠️ Tech Stack

### Core Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query
- **Content**: MDX + Gray Matter
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Development & Production

- **Package Manager**: npm
- **Containerization**: Docker + Docker Compose
- **Deployment**: Vercel (recommended)
- **Environment**: Node.js 20+

## 📦 Installation

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker (optional, for containerized development)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio-yoga
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Development

1. **Build and run with Docker Compose**

   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-yoga/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Homepage
│   ├── projects/              # Projects pages
│   │   ├── page.tsx           # Projects list
│   │   └── [slug]/            # Project details
│   └── achievements/          # Achievements pages
│       ├── page.tsx           # Achievements list
│       └── [slug]/            # Achievement details
├── components/                # React components
│   ├── layout/               # Layout components
│   │   ├── navigation.tsx    # Navigation bar
│   │   └── footer.tsx        # Footer
│   ├── sections/             # Page sections
│   │   ├── hero-section.tsx  # Hero section
│   │   ├── about-section.tsx # About section
│   │   ├── projects-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── testimonials-section.tsx
│   │   └── contact-section.tsx
│   └── ui/                   # shadcn/ui components
├── content/                  # MDX content files
│   ├── projects/            # Project details in MDX
│   └── achievements/        # Achievement details in MDX
├── data/                    # JSON data files
│   ├── projects.json       # Project metadata
│   └── achievements.json   # Achievement metadata
├── lib/                     # Utility libraries
│   ├── types.ts            # TypeScript interfaces
│   ├── loaders.ts          # Content loaders
│   ├── filters.ts          # Filter utilities
│   └── providers.tsx       # React providers
├── public/                  # Static assets
└── styles/                  # Global styles
```

## 🎨 Content Management

### Adding Projects

1. **Add metadata to data/projects.json**

   ```json
   {
     "title": "Your Project Name",
     "slug": "your-project-slug",
     "summary": "Brief description",
     "role": "Your Role",
     "stack": ["Next.js", "TypeScript"],
     "startedAt": "2024-01",
     "finishedAt": "2024-06",
     "tags": ["web", "saas"],
     "links": {
       "demo": "https://demo.com",
       "github": "https://github.com/user/repo"
     }
   }
   ```

2. **Create MDX file at content/projects/your-project-slug.mdx**

   ```mdx
   ---
   title: Your Project Name
   slug: your-project-slug
   # ... other frontmatter
   ---

   ## Problem

   Describe the problem you solved.

   ## Solution

   Explain your approach and solution.

   ## Results

   Share the impact and outcomes.
   ```

### Adding Achievements

1. **Add metadata to data/achievements.json**
2. **Create MDX file at content/achievements/your-achievement-slug.mdx**

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on git push**

### Docker Production

1. **Build production image**

   ```bash
   docker build -t portfolio-yoga .
   ```

2. **Run production container**
   ```bash
   docker run -p 3000:3000 portfolio-yoga
   ```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `NODE_ENV`: Environment (development/production)
- Add analytics, monitoring, and other service keys as needed

### Customization

1. **Update personal information** in component files
2. **Modify color scheme** in `tailwind.config.js`
3. **Add/remove sections** by editing `app/page.tsx`
4. **Customize content** in `data/` and `content/` directories

## 📊 Performance

The portfolio is optimized for:

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliance

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **shadcn/ui**: For the beautiful component library
- **Vercel**: For the excellent Next.js framework and hosting
- **Lucide**: For the comprehensive icon set
- **Tailwind CSS**: For the utility-first CSS framework

## 📞 Contact

- **Website**: [yoga-rizky.dev](https://yoga-rizky.dev)
- **Email**: yogarizky51@gmail.com
- **GitHub**: [@yoga-rizky](https://github.com/YogaRP)
- **LinkedIn**: [yoga-rizky](https://linkedin.com/in/yogarizkyputra)

---

**Built with Next.js + shadcn/ui + TypeScript + TanStack Query**
