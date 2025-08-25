import { ThemeProvider } from "./components/context/ThemeProvider";
import MatrixRain from "./components/ui/MatrixRain";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import WorkExperienceSection from "./components/sections/WorkExperienceSection";
import AboutSection from "./components/sections/AboutSection";
import SportsSection from "./components/sections/SportsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {/* Matrix Rain Effects - Desktop/Tablet Only */}
        <div className="hidden md:block">
          <MatrixRain side="left" />
          <MatrixRain side="right" />
        </div>

        {/* Matrix Rain Background - Mobile Only */}
        <div className="md:hidden fixed inset-0 z-0 pointer-events-none opacity-20">
          <MatrixRain side="background" />
        </div>

        {/* App Container - Responsive Grid Layout */}
        <div className="app-container relative z-10 min-h-screen grid grid-rows-[auto_1fr_auto]">
          {/* Navigation */}
          <header className="w-full">
            <Navbar />
          </header>

          {/* Main Content - Responsive with percentage-based margins */}
          <main className="main-content w-full px-[4%] md:px-[12%] lg:px-[15%] xl:px-[18%] 2xl:px-[20%]">
            <div className="content-wrapper max-w-none w-full mx-auto">
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
                <div className="py-16 md:py-20 lg:py-24 bg-card/50">
                  <SkillsSection />
                </div>
                
                {/* Work Experience Section - Default Background */}
                <div className="py-16 md:py-20 lg:py-24">
                  <WorkExperienceSection />
                </div>
                
                {/* Education Section - Gray Background */}
                <div className="py-16 md:py-20 lg:py-24 bg-card/50">
                  <AboutSection />
                </div>
                
                {/* Sports Section - Default Background */}
                <div className="py-16 md:py-20 lg:py-24">
                  <SportsSection />
                </div>
                
                {/* Contact Section - Gray Background */}
                <div className="py-16 md:py-20 lg:py-24 bg-card/50">
                  <ContactSection />
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full mt-auto">
            <Footer />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}