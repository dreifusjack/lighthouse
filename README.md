# Lighthouse Website

The official website for Lighthouse - a Product Studio and SaaS Launcher that buys, builds, and scales software tools for entrepreneurs.

## 🚀 Overview

Lighthouse is a Launch Fund that partners with founders to grow products. We handle the business operations so founders can focus on what they enjoy most - building. This website serves as our main digital presence and contact point for potential partners and clients.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Material-UI (MUI)
- **Fonts**: Google Fonts (Gasoek One & Bricolage Grotesque)
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gmail account for contact form (or other email service)

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd lighthouse-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
```

> **Note**: For Gmail, you'll need to generate an [app-specific password](https://support.google.com/accounts/answer/185833).

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌟 Features

### Navigation

- **Responsive Design**: Desktop navigation bar with hover effects, mobile hamburger menu
- **Smooth Scrolling**: Section-based navigation with active state indicators
- **Dynamic Styling**: Navigation adapts color based on scroll position

### Sections

- **Hero**: Full-screen landing with call-to-action
- **About**: Three-pillar approach (Buy, Build, Invest) with animations
- **Partner**: Information about partnership opportunities
- **Mission**: Company values and approach
- **Contact**: Form with email integration

### Technical Features

- **SEO Optimized**: Complete metadata and Open Graph tags
- **Performance**: Image optimization with Next.js Image component
- **Animations**: Scroll-triggered animations for better UX
- **Email Integration**: Contact form with Nodemailer backend
- **Analytics**: Vercel Analytics integration for tracking

## 📧 Contact Form Configuration

The contact form sends emails through the `/api/contact` endpoint. To configure:

1. Update the recipient email in `/app/api/contact/route.ts`:

```typescript
to: 'your-email@example.com', // Change from dimitri@builtwithatlas.com
```

2. Ensure your email service credentials are properly set in environment variables.

## 🎨 Customization

### Colors

The site uses CSS custom properties defined in `globals.css`:

- `--light`: Light background color
- `--charcoal`: Dark text color
- `--red`: Accent color
- `--blue`: Secondary accent

### Fonts

Custom fonts are configured in `/app/fonts.ts`:

- **Headers**: Gasoek One
- **Body**: Bricolage Grotesque

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Navigation switches to hamburger menu at 1245px

## 🚀 Deployment

The site is configured for Vercel deployment:

1. Push to your GitHub repository
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

© 2025 Lighthouse. All Rights Reserved.

## 🤝 Contact

- Website: [https://www.lighthouselaunch.com](https://www.lighthouselaunch.com)
- LinkedIn: [Lighthouse Search Fund](https://www.linkedin.com/company/lighthouse-search-fund/)
- Email: Contact through the website form
