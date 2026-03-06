"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import {
  Sparkles,
  Star,
  Zap,
  TrendingUp,
  Quote,
  Palette,
  Lightbulb,
  Rocket,
  Briefcase,
  Heart,
  Users,
  Check,
  Code,
  Smartphone,
  Lock,
  BarChart3,
  Megaphone,
  Target,
  Eye,
  Layout,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Accessibility,
} from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Creative Studio"
          navItems={[
            { name: "Work", id: "features" },
            { name: "Process", id: "process" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
          ]}
          button={{
            text: "Start Project",            href: "#contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Transform Your Vision Into Digital Reality"
          description="We craft award-winning digital experiences that elevate brands, engage audiences, and drive measurable results for forward-thinking companies."
          background={{ variant: "aurora" }}
          kpis={[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15yr", label: "Industry Experience" },
          ]}
          enableKpiAnimation={true}
          tag="Award-Winning Creative Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Our Work", href: "#features" },
            { text: "Schedule Consultation", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/a-stunning-creative-agency-dashboard-sho-1772823183019-5d98d3ac.png?_wi=1"
          imageAlt="Creative agency dashboard showcase"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          marqueeItems={[
            { type: "text-icon", text: "Web Design", icon: Palette },
            { type: "text-icon", text: "Brand Strategy", icon: Lightbulb },
            { type: "text-icon", text: "Digital Marketing", icon: Rocket },
            { type: "text-icon", text: "UX/UI Design", icon: Zap },
          ]}
          marqueeSpeed={30}
          showMarqueeCard={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Who We Are"
          tagIcon={Star}
          tagAnimation="opacity"
          title="We blend creativity with strategy to build brands that resonate, inspire, and convert. Our team of designers, developers, and strategists collaborate to transform your biggest ideas into measurable digital success."
          useInvertedBackground={false}
          buttons={[
            { text: "Meet Our Team", href: "#team" },
            { text: "Our Approach", href: "#process" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardNineteen
          title="Our Proven Process"
          description="From initial concept to successful launch, we follow a structured methodology that ensures exceptional results at every stage."
          tag="How We Work"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              tag: "Discovery",              title: "Strategy & Planning",              subtitle: "Understanding your vision and market landscape",              description: "We immerse ourselves in your business, conducting comprehensive research and strategy sessions to craft a roadmap that drives results. Every decision is data-informed and aligned with your objectives.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/a-detailed-illustration-of-the-creative--1772823183464-bc4a66c6.png?_wi=1",              imageAlt: "Strategic planning and research phase",              buttons: [{ text: "Learn More", href: "#" }],
            },
            {
              id: 2,
              tag: "Creation",              title: "Design & Development",              subtitle: "Bringing concepts to life with precision",              description: "Our creative team designs stunning interfaces while our developers build robust, scalable solutions. We focus on user experience and technical excellence, ensuring your platform is both beautiful and powerful.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/a-polished-image-showing-the-design-exec-1772823182681-f451d64c.png?_wi=1",              imageAlt: "Design execution and development",              buttons: [{ text: "Learn More", href: "#" }],
            },
            {
              id: 3,
              tag: "Launch",              title: "Deployment & Optimization",              subtitle: "Ensuring a seamless market entry",              description: "We manage every aspect of launch, from final testing to deployment, ensuring a smooth go-live. Post-launch, we monitor performance and optimize continuously to maximize your ROI and user engagement.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/an-exciting-image-representing-the-launc-1772823181685-6286f312.png?_wi=1",              imageAlt: "Project launch and deployment",              buttons: [{ text: "Learn More", href: "#" }],
            },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Proven results across diverse industries and project scales."
          tag="By The Numbers"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "500",              title: "Projects",              description: "Successfully delivered across industries",              icon: Briefcase,
            },
            {
              id: "2",              value: "98",              title: "Satisfaction",              description: "Client satisfaction rate",              icon: Heart,
            },
            {
              id: "3",              value: "50M",              title: "Users",              description: "People using our created products",              icon: Users,
            },
            {
              id: "4",              value: "3x",              title: "Growth",              description: "Average client business growth",              icon: TrendingUp,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Client Stories"
          description="See how we've transformed businesses through strategic design and development."
          tag="Testimonials"
          tagIcon={Quote}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen, CEO of TechFlow",              date: "Date: January 15, 2025",              title: "A complete game-changer for our brand",              quote: "Working with Creative Studio transformed our entire digital presence. Their strategic approach and attention to detail resulted in a 300% increase in qualified leads within six months. The team was collaborative, responsive, and truly invested in our success.",              tag: "SaaS Platform",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-confident-ceo-1772823180947-5bae3543.png",              avatarAlt: "Sarah Chen",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-confident-ceo-1772823180947-5bae3543.png"},
            {
              id: "2",              name: "Marcus Rodriguez, Marketing Director at GrowthCo",              date: "Date: December 28, 2024",              title: "Exceeded all our expectations",              quote: "The team understood our brand voice from day one and created campaigns that resonated deeply with our audience. Their data-driven approach combined with creative excellence delivered exceptional ROI. Highly recommend for any ambitious brand.",              tag: "E-Commerce",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-marketing-dir-1772823180685-9ff19576.png",              avatarAlt: "Marcus Rodriguez",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-marketing-dir-1772823180685-9ff19576.png"},
            {
              id: "3",              name: "Jennifer Wu, Operations Lead at StartupXYZ",              date: "Date: November 10, 2024",              title: "Professional, creative, and results-driven",              quote: "From initial concept to launch, Creative Studio managed every detail with precision and creativity. Our new platform is not only beautiful but also incredibly functional. The entire experience was seamless and professional. They're now an extension of our team.",              tag: "Mobile App",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-product-or-op-1772823183411-e255326d.png",              avatarAlt: "Jennifer Wu",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-product-or-op-1772823183411-e255326d.png"},
            {
              id: "4",              name: "David Park, Founder of InnovateLabs",              date: "Date: October 5, 2024",              title: "Transformed our vision into reality",              quote: "We came with an ambitious vision and Creative Studio not only understood it but enhanced it. Their strategic insights, combined with stunning design execution, positioned us perfectly in the market. Within months, we saw significant traction and partnerships.",              tag: "AI Platform",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-startup-found-1772823181000-6ff18e24.png",              avatarAlt: "David Park",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-startup-found-1772823181000-6ff18e24.png"},
            {
              id: "5",              name: "Lisa Thompson, Creative Director at BrandStudio",              date: "Date: September 22, 2024",              title: "True creative partners in every sense",              quote: "Working with this team was an absolute pleasure. They brought fresh perspectives, innovative solutions, and unwavering attention to quality. Our rebrand exceeded expectations and strengthened our market position significantly.",              tag: "Brand Design",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-creative-dire-1772823183656-edecd41a.png",              avatarAlt: "Lisa Thompson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-creative-dire-1772823183656-edecd41a.png"},
            {
              id: "6",              name: "Robert Kumar, VP of Strategy at EnterpriseCorp",              date: "Date: August 18, 2024",              title: "A strategic powerhouse",              quote: "Beyond aesthetics, Creative Studio brings strategic thinking that drives measurable business outcomes. Their holistic approach to design and development ensured we built something that truly moves the needle for our organization.",              tag: "Enterprise",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-business-deve-1772823180649-ef25482a.png",              avatarAlt: "Robert Kumar",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/professional-headshot-of-a-business-deve-1772823180649-ef25482a.png"},
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Services That Drive Results"
          description="Comprehensive digital solutions tailored to your unique business needs and market position."
          tag="What We Offer"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "Brand Strategy & Design",              description: "We develop compelling brand identities that differentiate you in the market. From logo design to comprehensive brand guidelines, we ensure consistency and impact across all touchpoints.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/a-polished-image-showing-the-design-exec-1772823182681-f451d64c.png?_wi=2"},
              items: [
                { icon: Palette, text: "Visual identity systems" },
                { icon: Lightbulb, text: "Brand positioning strategy" },
                { icon: Target, text: "Market differentiation" },
                { icon: Sparkles, text: "Creative excellence" },
              ],
              reverse: false,
            },
            {
              id: "2",              title: "Web Design & Development",              description: "Beautiful, fast, and conversion-focused websites built with the latest technologies. We combine stunning design with solid architecture to create digital experiences that perform.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/a-stunning-creative-agency-dashboard-sho-1772823183019-5d98d3ac.png?_wi=2"},
              items: [
                { icon: Code, text: "Modern web technologies" },
                { icon: Smartphone, text: "Responsive design" },
                { icon: Zap, text: "Performance optimized" },
                { icon: Lock, text: "Security first approach" },
              ],
              reverse: true,
            },
            {
              id: "3",              title: "Digital Marketing & SEO",              description: "Strategic marketing solutions that drive traffic, engagement, and conversions. We leverage data and creativity to amplify your message and reach your ideal audience.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/a-detailed-illustration-of-the-creative--1772823183464-bc4a66c6.png?_wi=2"},
              items: [
                { icon: TrendingUp, text: "SEO optimization" },
                { icon: BarChart3, text: "Analytics & reporting" },
                { icon: Megaphone, text: "Content strategy" },
                { icon: Target, text: "Conversion optimization" },
              ],
              reverse: false,
            },
            {
              id: "4",              title: "UX/UI Design & Research",              description: "User-centered design approach that puts your audience first. We conduct research, create intuitive interfaces, and validate solutions through testing to ensure maximum impact.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AWS0SvlKRcaADFivgsxikxljMH/an-exciting-image-representing-the-launc-1772823181685-6286f312.png?_wi=2"},
              items: [
                { icon: Eye, text: "User research & testing" },
                { icon: Layout, text: "Wireframing & prototyping" },
                { icon: Accessibility, text: "Accessibility standards" },
                { icon: Zap, text: "Interactive experiences" },
              ],
              reverse: true,
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to elevate your digital presence? Let's collaborate to create something extraordinary that drives real business results."
          animationType="entrance-slide"
          background={{ variant: "aurora" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Start Your Project", href: "mailto:hello@creativestudio.com" },
            { text: "Schedule a Call", href: "#" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Creative Studio"
          copyrightText="© 2025 Creative Studio. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/creativestudio", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/creativestudio", ariaLabel: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/creativestudio", ariaLabel: "Instagram" },
            { icon: Github, href: "https://github.com/creativestudio", ariaLabel: "GitHub" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
