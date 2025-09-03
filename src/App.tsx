import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import AboutSection from "./components/AboutSection";
import SportsSection from "./components/SportsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {/* Matrix Rain Effects Layer - Always Behind Content */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          {/* Matrix Rain Effects - Desktop/Tablet Only */}
          <div className="hidden md:block h-full">
            <MatrixRain side="left" />
            <MatrixRain side="right" />
          </div>

          {/* Matrix Rain Background - Mobile Only */}
          <div className="md:hidden h-full opacity-20">
            <MatrixRain side="background" />
          </div>
        </div>

        {/* Content Container - Centered between Matrix Rain */}
        <div className="relative z-[2] min-h-screen md:mx-[clamp(80px,8vw,120px)] grid grid-rows-[auto_1fr_auto]">
          {/* Navigation - Centered between rain effects */}
          <header className="w-full relative z-[3]">
            <Navbar />
          </header>

          {/* Main Content - Centered with responsive padding */}
          <main className="main-content w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-[2]">
            <div className="content-wrapper max-w-7xl mx-auto">
              {/* Hero Section with reduced bottom spacing */}
              <div className="mb-12 md:mb-16">
                <HeroSection />
              </div>
              
              {/* Sections with alternating backgrounds */}
              <div className="space-y-0">
                {/* Projects Section - Default Background */}
                <div className="py-16 md:py-20 lg:py-24">
                  <ProjectsSection />
                </div>
                
                {/* Skills Section - Gray Background */}
                <div className="py-16 md:py-20 lg:py-24 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-card/50">
                  <div className="max-w-7xl mx-auto">
                    <SkillsSection />
                  </div>
                </div>
                
                {/* Work Experience Section - Default Background */}
                <div className="py-16 md:py-20 lg:py-24">
                  <WorkExperienceSection />
                </div>
                
                {/* Education Section - Gray Background */}
                <div className="py-16 md:py-20 lg:py-24 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-card/50">
                  <div className="max-w-7xl mx-auto">
                    <AboutSection />
                  </div>
                </div>
                
                {/* Sports Section - Default Background */}
                <div className="py-16 md:py-20 lg:py-24">
                  <SportsSection />
                </div>
                
                {/* Contact Section - Gray Background */}
                <div className="py-16 md:py-20 lg:py-24 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-card/50">
                  <div className="max-w-7xl mx-auto">
                    <ContactSection />
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer - Centered between rain effects */}
          <footer className="w-full mt-auto relative z-[3]">
            <Footer />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}