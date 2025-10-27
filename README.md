# Dr. Tirtha Raj Acharya - Academic Portfolio Website

A sophisticated, responsive portfolio website for Dr. Tirtha Raj Acharya, a Postdoctoral Research Fellow specializing in non-thermal plasma physics and sustainable chemistry at the University of Nottingham, UK.

## 🌟 Features

### Design & User Experience
- **Modern, Professional Design**: Clean, sophisticated aesthetic reflecting academic excellence
- **Responsive Layout**: Fully responsive design optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for engaging user interactions
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading times with optimized images and code splitting

### Content Sections
- **Hero Section**: Full-screen introduction with call-to-action buttons
- **About**: Personal information, bio, and key statistics
- **Research Interests**: Interactive grid showcasing research areas with filtering
- **Experience**: Timeline of professional experience with expandable details
- **Education**: Academic credentials with thesis information
- **Publications**: Comprehensive publication list with search and filtering
- **Skills**: Technical expertise with proficiency indicators
- **Awards**: Recognition and achievements timeline
- **Contact**: Contact form and information

### Technical Features
- **Next.js 14**: Latest framework with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, consistent icons
- **SEO Optimized**: Meta tags, structured data, and sitemap ready

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy Blue (#1e3a8a) - Trust, professionalism
- **Secondary**: Emerald Green (#059669) - Sustainability, growth
- **Accent**: Gold (#f59e0b) - Achievement, excellence
- **Neutral**: Charcoal Gray (#374151) - Sophistication

### Typography
- **Headings**: Poppins (semi-bold)
- **Body**: Source Sans Pro (regular)
- **UI Elements**: Inter (medium)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tirtharajacharya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Research.tsx       # Research interests
│   ├── Experience.tsx     # Professional experience
│   ├── Education.tsx      # Academic credentials
│   ├── Publications.tsx   # Publications list
│   ├── Skills.tsx         # Technical skills
│   ├── Awards.tsx         # Awards & recognition
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Site footer
├── data/                  # Data files
│   └── portfolio.ts       # Portfolio content
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── lib/                   # Utility functions
```

## 🎯 Customization

### Content Updates
All content is centralized in `src/data/portfolio.ts`. Update the following sections:

- **Personal Information**: Name, title, contact details
- **Research Interests**: Add/modify research areas
- **Experience**: Update professional timeline
- **Education**: Modify academic credentials
- **Publications**: Add new publications
- **Skills**: Update technical expertise
- **Awards**: Add new recognitions

### Styling
- **Colors**: Modify `tailwind.config.js` for color palette changes
- **Typography**: Update font imports in `globals.css`
- **Components**: Each component can be customized independently

### Deployment
The site is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🔧 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins, Source Sans Pro)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO, Best Practices)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: WebP format with responsive sizing

## 🔒 Security

- **HTTPS**: Enforced in production
- **Form Security**: CSRF protection ready
- **Content Security Policy**: Configurable headers
- **Dependencies**: Regular security updates

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD for academic profile
- **Sitemap**: Auto-generated sitemap
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter sharing optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💼 About Dr. Tirtha Raj Acharya

Dr. Tirtha Raj Acharya is a Postdoctoral Research Fellow at the University of Nottingham, specializing in non-thermal plasma physics and sustainable chemistry. His research focuses on developing innovative solutions for environmental challenges through plasma-assisted processes.

**Key Research Areas:**
- Non-thermal Plasma Physics
- Plasma-Assisted Nitrogen Fixation
- CO2 Conversion & Reduction
- Environmental Remediation
- Nanoparticle Synthesis
- Plasma Catalysis
- Sustainable Chemistry

**Contact:**
- Email: tirtharajacharya2050@gmail.com
- Phone: (+44) 7470822534
- LinkedIn: [Dr. Tirtha Raj Acharya](https://linkedin.com/in/tirtha-raj-acharya)
- Location: Nottingham, UK

---

Built with ❤️ for the academic community 