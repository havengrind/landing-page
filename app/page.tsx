"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Users,
  Zap,
  Globe,
  Star,
  Play,
  Sparkles,
  Moon,
  Sun,
  Building2,
  Menu,
  X,
} from "lucide-react";

//yuki mencoba nambah image (apa ini dawg)
import HageLogo from "@/components/ui/hage-logo";
import Logo275 from "@/components/ui/275studiologo";
import Image from "next/image";
//
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between p-4 lg:px-12">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              {/* <HageLogo className="size-10 rounded-lg text-primary-foreground" /> */}
              <Image
                src={"/logo.png"}
                width={192 / 2}
                height={108 / 2}
                alt="logo hage"
                className=""
              />
            </div>
            {/* <span className="text-2xl font-bold text-gradient">HAGE</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 sticky top-0 left-0 right-0">
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(partnersRef)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection(visionRef)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection(whyUsRef)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="w-10 h-10"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(partnersRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Partners
              </button>
              <button
                onClick={() => scrollToSection(visionRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection(whyUsRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className={`space-y-6 lg:space-y-8 ${
                isVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
            >
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-4 h-4 mr-2" />
                HAGE Games
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="text-gradient">Simple Joy</span>
                <br />
                <span className="text-foreground">for Everyone</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                We believe that games can bring simple happiness to people
                everywhere. HAGE is the home where developers and players grow
                together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary rounded-sm hover:bg-primary/90 text-primary-foreground dark:text-white group"
                  onClick={() => {
                    window.location.href = `https://hagegames.com`;
                  }}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Browse Games
                </Button>
              </div>
            </div>

            <div
              className={`relative order-first sm:order-last ${
                isVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative w-full h-64 sm:h-58 lg:h-[300px]">
                {/* 3D Game Console Mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-3xl shadow-2xl animate-float">
                  <div className="p-6 lg:p-8 aspect-video flex flex-col justify-center items-center">
                    <Image
                      src={"/hero.gif"}
                      width={1920}
                      height={1080}
                      alt="hero.gif"
                      className="rounded-md aspect-video"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-primary rounded-2xl flex items-center justify-center animate-float shadow-lg"
                  style={{ animationDelay: "1s" }}
                >
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 text-primary-foreground" />
                </div>
                <div
                  className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-14 sm:w-16 h-14 sm:h-16 bg-accent rounded-2xl flex items-center justify-center animate-float shadow-lg"
                  style={{ animationDelay: "3s" }}
                >
                  <Users className="size-8 sm:size-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-balance">
              Web-Based Game <span className="text-gradient">Platform</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide a web-based game platform that connects local
              developers with players. Our goal is to make games more accessible
              while empowering developers to grow and reach wider audiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Globe,
                title: "Multi-Platform Distribution",
                desc: "Publish across Web, PlayStore, and AppStore seamlessly",
              },
              {
                icon: Users,
                title: "Community Collaboration",
                desc: "Connect with students and local game communities",
              },
              {
                icon: Zap,
                title: "Rapid Development",
                desc: "Focus on small-scale, quick development cycles",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 lg:w-8 h-7 lg:h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Official Partner Game Studio Section */}
      <section
        ref={partnersRef}
        className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Official Partners
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Official Partner{" "}
              <span className="text-gradient">Game Studios</span>
            </h2>
          </div>

          <div className="flex justify-center container gap-x-10">
            <a href="https://www.275studio.com/" target="_blank">
              <Logo275 className="md:size-[200] size-24 hover:scale-105 hover:border hover:border-primary rounded-lg cursor-pointer duration-200 transition-all" />
            </a>
            <Image
              src={"/afairbnw.png"}
              width={100}
              alt="afairbnw.png"
              height={100}
              className="size-24 p-4 md:size-[200] bg-black hover:scale-105 border border-white hover:border-primary rounded-lg cursor-pointer duration-200 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        ref={visionRef}
        className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-balance">
                Leading Platform for{" "}
                <span className="text-gradient">Local Developers</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                To become the leading platform and ecosystem for local game
                developers to distribute their works, while delivering simple
                joy that is accessible to everyone.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-bold">Our Mission</h3>
                <div className="space-y-4">
                  {[
                    "Provide fast game distribution across all platforms",
                    "Collaborate with students and local communities",
                    "Apply fair revenue-sharing and ad mediation",
                    "Develop showcase products with freemium models",
                  ].map((mission, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                      <p className="text-muted-foreground text-sm lg:text-base">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 lg:p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 lg:w-24 h-20 lg:h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 animate-pulse-glow">
                    <HageLogo className="w-10 lg:w-20 h-10 lg:h-20 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                    Simple Joy for Everyone
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyUsRef}
        className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="secondary" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-balance">
              Empowering <span className="text-gradient">Game Creators</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Globe,
                title: "Accessible Distribution",
                desc: "Publish games quickly and easily across multiple platforms.",
              },
              {
                icon: Users,
                title: "Local Empowerment",
                desc: "We empower local developers, especially students, to showcase and monetize their talent.",
              },
              {
                icon: Zap,
                title: "Fair Monetization",
                desc: "Our revenue-sharing and ad mediation system ensures developers benefit fairly.",
              },
              {
                icon: Star,
                title: "Innovation & Speed",
                desc: "We focus on rapid development of fun, small-scale games with sustainable models.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-4 lg:p-6 text-center">
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 lg:w-8 h-7 lg:h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold mb-3 lg:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-balance">
            Let&apos;s Grow the{" "}
            <span className="text-gradient">Game Industry</span> Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed">
            Reach out to us for collaborations and opportunities.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-14 lg:w-16 h-14 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-7 lg:w-8 h-7 lg:h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-base lg:text-lg font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  havengrind@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-14 lg:w-16 h-14 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-7 lg:w-8 h-7 lg:h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-base lg:text-lg font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  +62 822-3045-1640
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 lg:px-10 py-8 lg:py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src={"/logo.png"}
                width={192 / 2}
                height={108 / 2}
                alt="logo hage"
                className=""
              />
            </div>

            <p className="text-muted-foreground text-center md:text-right text-sm lg:text-base">
              © 2025 HAGE Games. Simple Joy for Everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
