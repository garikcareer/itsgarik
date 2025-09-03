import React from 'react';
import { MapPin } from 'lucide-react';
import portrait from '../../assets/images/portrait.jpg';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Picture with Matrix Border - Made Larger */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-matrix-accent to-primary opacity-75 blur-sm animate-pulse"></div>
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                <img
                  src={portrait}
                  alt="Portait of Garik Arutyunyan, the Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Matrix code overlay effect */}
              <div
                className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin"
                style={{ animationDuration: '20s' }}
              ></div>
            </div>
          </div>

          {/* Main Title - Changed from ITSGarik.com to Garik's Portfolio */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-primary mb-4">
            Garik&apos;s Portfolio
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

          {/* Enhanced Hero Statement */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Transforming ideas into reality through innovative code and
            cutting-edge technology solutions.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer specializing in scalable applications and
            seamless user experiences.
          </p>

          {/* Location with Icon - Reduced top margin */}
          <div className="flex items-center justify-center mt-4 text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span className="text-base">Los Angeles, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
