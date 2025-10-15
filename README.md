# KAPI Website - From Penn State to Purpose

A modern, minimalist website for KAPI, a Penn State gymnast launching a book in May 2025. The site positions KAPI as an inspirational mentor and personal trainer while promoting his upcoming book.

## 🚀 Features

- **Hero Section**: Full-screen video background with compelling messaging
- **Social Proof**: Scrolling banner showcasing achievements and metrics
- **About Section**: Personal story and journey as a Penn State gymnast
- **Book Section**: Book details, pre-order options, and launch information
- **Media Section**: Video grid and press coverage
- **Work With Me**: Coaching services and personal training offerings
- **Mobile-First Design**: Optimized for Instagram traffic and mobile users

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Fonts**: Inter (body) + Playfair Display (headings)
- **Icons**: Lucide React
- **Animations**: CSS animations with intersection observer

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── HeroSection.tsx      # Hero with video background
│   ├── SocialProofBanner.tsx # Scrolling metrics banner
│   ├── AboutSection.tsx     # Personal story section
│   ├── BookSection.tsx      # Book details and pre-orders
│   ├── MediaSection.tsx     # Videos and press coverage
│   ├── WorkWithMeSection.tsx # Coaching services
│   └── Footer.tsx           # Footer with links and contact
├── public/
│   ├── images/              # Image assets
│   └── videos/              # Video assets
└── README.md
```

## 🎨 Design Principles

- **Clean & Minimalist**: White background throughout
- **Mobile-First**: Optimized for mobile traffic from Instagram
- **Professional**: Inspirational yet professional tone
- **Smooth Animations**: Subtle fade-ins and transitions
- **High Performance**: Optimized images and fast loading

## 📱 Required Assets

### Images Needed:
- `/public/images/kapi-profile.jpg` - Main profile photo
- `/public/images/book-cover.jpg` - Book cover image
- `/public/images/video-thumb-1.jpg` - Video thumbnail 1
- `/public/images/video-thumb-2.jpg` - Video thumbnail 2
- `/public/images/video-thumb-3.jpg` - Video thumbnail 3
- `/public/images/video-thumb-4.jpg` - Video thumbnail 4

### Videos Needed:
- `/public/videos/kapi-gymnastics.mp4` - Hero background video

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Add Assets**:
   - Place images in `/public/images/`
   - Place videos in `/public/videos/`
   - Update image paths in components if needed

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Sections

### Hero Section
- Full-screen video background
- Compelling headline and tagline
- Clear CTAs for book pre-order and coaching
- Smooth scroll indicator

### Social Proof Banner
- Infinite scrolling metrics
- Follower count, achievements, competition wins
- Clean icons and numbers

### About Section
- Personal journey story
- High-quality profile photo
- Floating stats cards
- Call-to-action buttons

### Book Section
- Book cover and description
- Launch date (May 2025)
- Multiple purchase options (physical, eBook, audiobook, bundle)
- Pre-order pricing and discounts

### Media Section
- Video grid with thumbnails
- Press coverage sidebar
- Responsive layout (stacks on mobile)

### Work With Me Section
- Coaching services grid
- Client testimonials
- Limited-time offers
- High-conversion CTAs

### Footer
- Social media links
- Contact information
- Newsletter signup
- "Coming Soon: MVP Gymnastics" message

## 📝 Content Updates

To update content, edit the respective component files:
- **Hero messaging**: `components/HeroSection.tsx`
- **About story**: `components/AboutSection.tsx`
- **Book details**: `components/BookSection.tsx`
- **Services**: `components/WorkWithMeSection.tsx`
- **Contact info**: `components/Footer.tsx`

## 🎨 Customization

### Colors
- Primary: Yellow (#FCD34D)
- Secondary: Gray (#374151)
- Background: White (#FFFFFF)

### Fonts
- Body: Inter (clean, modern)
- Headings: Playfair Display (elegant, serif)

### Animations
- Fade-in on scroll
- Smooth transitions
- Hover effects
- Infinite scroll for social proof

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly buttons and interactions
- Optimized images for mobile
- Fast loading times
- Instagram traffic optimized

## 🚀 Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   npx vercel
   ```

3. **Or deploy to other platforms**:
   - Netlify
   - AWS Amplify
   - GitHub Pages

## 📞 Support

For questions or updates, contact the development team or refer to the component documentation in each file.

---

**Built with ❤️ for KAPI's book launch and personal brand**