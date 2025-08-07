# 💙 Ventt - Find Support After Job Loss

> *A supportive community platform for people navigating job loss and career transitions*

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 About Ventt

**Ventt** is a mobile-first web platform designed to provide emotional support and community for people experiencing job loss. In a world where career setbacks can feel isolating and overwhelming, Ventt creates a safe space where users can:

- **Express frustrations** about job searching anonymously
- **Connect with others** who understand their struggle  
- **Share small wins** and celebrate progress together
- **Access mental health resources** when needed
- **Find hope** through community support

### 🎯 Mission Statement

*"You're not alone in this journey"* - Ventt bridges the gap between professional networking platforms and emotional support communities, specifically addressing the mental health challenges that come with job loss.

---

## ✨ Features

### 🔑 Core Functionality
- **Anonymous Posting** - Share thoughts without barriers or signup requirements
- **Emotion Categories** - Categorize posts as Frustration, Anxiety, Hope, Seeking Advice, or Small Win
- **Interactive Community Feed** - Browse and engage with posts from others
- **Real-time Reactions** - Express support with heart reactions
- **Mobile-First Design** - Optimized for thumb-friendly mobile interaction

### 🎵 Unique Features  
- **Audio Feedback** - C major chord plays on heart hover for delightful interaction
- **Supportive Design** - Warm color palette (blues, greens, grays) designed to promote calm
- **Crisis Resources** - Always-visible mental health and crisis intervention links
- **Progressive Disclosure** - Features revealed gradually to reduce overwhelm

### 🛡️ Safety & Well-being
- **Mental Health Focus** - Built with vulnerable user mental state in mind
- **Professional Resources** - Direct links to crisis support and therapy resources
- **Positive Environment** - Designed to prevent negativity spirals
- **Content Guidelines** - Framework for supportive community culture

---

## 🚀 Tech Stack

### Frontend
- **[Next.js 15.4.6](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible React components

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development
- **Web Audio API** - Real-time audio generation for interactive features

### Current Architecture
- **Client-side only** - React state management with local storage
- **No authentication** - Fully anonymous experience
- **Mock data** - Sample posts for demonstration

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js 18+** 
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ventt.git
   cd ventt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

---

## 📱 Usage

### For Users

1. **Visit the homepage** - Immediate access to posting and community feed
2. **Share your thoughts** - Click "What's on your mind today?" to post anonymously
3. **Choose emotion category** - Select how you're feeling to help others understand
4. **Engage with community** - Read others' posts and show support with heart reactions
5. **Access resources** - Find crisis support and mental health resources at the bottom

### For Developers

1. **Components** - All UI components are in `/src/components/ui/`
2. **Main app** - Core application logic in `/src/app/page.tsx`
3. **Styling** - Tailwind classes with Shadcn component system
4. **Audio** - Web Audio API implementation for C major chord feedback

---

## 📂 Project Structure

```
ventt/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage component
│   ├── components/
│   │   └── ui/           # Shadcn UI components
│   └── lib/
│       └── utils.ts      # Utility functions
├── components.json        # Shadcn configuration
├── planning-roadmap.md    # Development roadmap
├── project-planning.md    # Project strategy
└── package.json
```

---

## 🎨 Design Philosophy

### Color Psychology
- **Blues** - Trust, calm, stability
- **Greens** - Hope, growth, healing  
- **Warm grays** - Balance, neutrality
- **Red hearts** - Love, support, community
- **No purple** - User preference consideration

### UX Principles
- **Immediate value** - Users can post within seconds of arrival
- **Low friction** - No account creation barriers
- **Thumb-friendly** - All interactions optimized for mobile touch
- **Emotional support** - Every element designed to provide comfort

---

## 🚧 Current Status & Roadmap

### ✅ Completed (MVP v1)
- [x] Mobile-first responsive design
- [x] Anonymous posting system
- [x] Emotion categorization
- [x] Interactive like system
- [x] Audio feedback features
- [x] Mental health resources
- [x] Community feed display

### 🔄 In Progress
- [ ] Backend integration (Supabase)
- [ ] Real-time data persistence
- [ ] Content moderation system
- [ ] User account system (optional)

### 🔮 Future Features
- [ ] Reply/comment system
- [ ] Industry-specific groups
- [ ] Success story highlighting
- [ ] Mentorship matching
- [ ] Professional resource integration
- [ ] Crisis intervention automation
- [ ] Mobile app development

---

## 🤝 Contributing

We welcome contributions that help make Ventt a more supportive platform! 

### Getting Involved
1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Contribution Guidelines
- **Mental health first** - All features should consider user emotional state
- **Accessibility** - Ensure features work for users with disabilities
- **Mobile-first** - All development should prioritize mobile experience
- **Privacy focus** - Maintain anonymous-first approach
- **Test thoroughly** - Include tests for new functionality

### Areas We Need Help
- 🎨 **UX/UI Design** - Improving user experience and visual design
- 🔒 **Security** - Ensuring user safety and data protection  
- ♿ **Accessibility** - Making the platform usable for everyone
- 🧠 **Mental Health Expertise** - Guidance on supportive features
- 📱 **Mobile Development** - Native app development
- 🌍 **Internationalization** - Multi-language support

---

## 📋 Development Notes

### Performance Considerations
- **Turbopack** for fast development builds
- **Next.js 15** App Router for optimal performance
- **Client-side rendering** for immediate interactivity
- **Optimized images** and lazy loading ready

### Accessibility Features
- **Keyboard navigation** support
- **Screen reader** friendly markup
- **High contrast** text and backgrounds
- **Focus indicators** for all interactive elements

### Browser Support
- **Modern browsers** (Chrome 90+, Firefox 88+, Safari 14+)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Progressive enhancement** for older browsers

---

## 🏥 Mental Health Resources

Ventt includes built-in access to professional mental health resources:

- **Crisis Text Line**: Text HOME to 741741
- **National Suicide Prevention Lifeline**: 988
- **Psychology Today**: Find therapists in your area

*If you're in crisis, please reach out for professional help immediately.*

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💪 Support the Project

If Ventt has helped you or someone you know, consider:

- ⭐ **Starring the repository**
- 🐛 **Reporting bugs** or suggesting features
- 🤝 **Contributing** code or documentation
- 💬 **Sharing** with others who might benefit
- ☕ **Supporting development** (donation links coming soon)

---

## 🙏 Acknowledgments

- **Mental health advocates** who inspired this project
- **Job seekers** who shared their experiences and needs
- **Open source community** for amazing tools and libraries
- **Shadcn** for beautiful, accessible UI components
- **Vercel team** for Next.js and development tools

---

## 📞 Contact & Community

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/ventt/issues)
- **Discussions**: [Join community conversations](https://github.com/yourusername/ventt/discussions)
- **Email**: ventt.support@example.com (coming soon)

---

*Built with ❤️ for the job seeking community*

**Remember: You're not alone in this journey** 💙