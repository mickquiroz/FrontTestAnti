# SCL Consultores Website

Modern, professional corporate website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design System**: Clean, professional design with brand colors (#0085B3 blue, #FF8600 orange)
- **Smooth Animations**: Scroll-based animations using Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper metadata and semantic HTML
- **Editable Content**: All content centralized in a single data file
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Modern utility-first styling

## 📋 Pages

- **Home**: Hero, Purpose/Mission/Vision, Values, History Timeline, Team KPIs, Why Choose Us
- **Nosotros**: About Us (placeholder)
- **Servicios**: Services (placeholder)
- **Productos**: Products (placeholder)
- **Blog**: Blog (placeholder)
- **Contacto**: Contact (placeholder)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Montserrat (Google Fonts)
- **Icons**: React Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Customizing Content

All website content can be edited in a single file:

**`lib/constants/siteData.ts`**

This file contains:
- Contact information (email, phone, address)
- Navigation menu items
- Hero section content
- Company values
- Timeline milestones
- Team KPIs
- Feature highlights
- Footer links and social media

Simply edit the values in this file and your changes will reflect across the entire site.

## 🖼️ Replacing Images

Replace the placeholder images in `public/images/`:

- `hero-bg.jpg` - Hero background (recommended: 1920x1080px)
- `purpose.jpg` - Purpose card image (recommended: 400x400px)
- `mission.jpg` - Mission card image (recommended: 400x400px)
- `vision.jpg` - Vision card image (recommended: 400x400px)

## 🎨 Design System

### Colors
- **Primary Blue**: `#0085B3`
- **Accent Orange**: `#FF8600`
- **Gray Text**: `#808080`
- **White**: `#FFFFFF`
- **Footer Dark**: `#0B1F2A` to `#06141C` (gradient)

### Typography
- **Font**: Montserrat
- **H1**: 60px (desktop) / 40px (mobile), Bold
- **H2**: 24px, Bold
- **Body**: 13px, Medium

## 📁 Project Structure

```
scl-app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── [pages]/           # Additional pages
├── components/
│   ├── layout/            # TopBar, Navbar, Footer
│   ├── sections/          # Home page sections
│   └── ui/                # Reusable components
├── lib/
│   ├── animations/        # Framer Motion utilities
│   └── constants/         # Site data
└── public/
    └── images/            # Static images
```

## 🚀 Deployment

This project is ready to deploy to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Follow AWS deployment guide
- Any Node.js hosting platform

## 📄 License

© 2024 SCL Consultores. All rights reserved.

## 🤝 Support

For questions or support, contact: contacto@sclconsultores.com
