
import React from 'react';
import { Phone, ShieldCheck, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Child-friendly background image with overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" 
           style={{ 
             backgroundImage: "url('https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=2069')",
             backgroundSize: 'cover',
           }}>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Decorative background elements with animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-preschool-light-yellow rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-10 w-20 h-20 bg-preschool-light-teal rounded-full opacity-60 animate-bounce-light"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-preschool-light-coral rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-preschool-light-green rounded-full opacity-60 animate-bounce-light" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-10 lg:gap-16 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-preschool-light-blue text-preschool-blue text-sm font-medium mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Welcome to FirstStep Pre School
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Where Learning <span className="text-preschool-blue animate-fade-in-left" style={{ animationDelay: '0.5s', display: 'inline-block' }}>Begins</span> With <span className="text-preschool-coral animate-fade-in-right" style={{ animationDelay: '0.7s', display: 'inline-block' }}>Love</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
              We provide a nurturing environment where children explore, learn, and grow through play and guided activities.
            </p>
            
            {/* New feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <div className="bg-preschool-light-teal p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex gap-4 text-left">
                <div className="shrink-0">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <ShieldCheck className="w-8 h-8 text-preschool-teal animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-preschool-teal">Child Safety</h3>
                  <p className="text-gray-600 text-sm">Secure environment with trained staff and safety protocols.</p>
                </div>
              </div>
              
              <div className="bg-preschool-light-coral p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex gap-4 text-left">
                <div className="shrink-0">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Heart className="w-8 h-8 text-preschool-coral animate-bounce-light" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-preschool-coral">Loving Care</h3>
                  <p className="text-gray-600 text-sm">Nurturing educators dedicated to your child's development and happiness.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <a 
                href="#contact" 
                className="button-primary flex items-center gap-2 transform transition-transform duration-300 hover:scale-105"
              >
                <span>Schedule a Visit</span>
              </a>
              <a 
                href="tel:8333840661" 
                className="button-secondary flex items-center gap-2 transform transition-transform duration-300 hover:scale-105"
              >
                <Phone size={18} className="animate-bounce-light" />
                <span>Call: 833-384-0661</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration at bottom with animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-auto animate-fade-in" style={{ animationDelay: '1.3s' }} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 10C96 20 192 40 288 50C384 60 480 60 576 50C672 40 768 20 864 15C960 10 1056 20 1152 30C1248 40 1344 50 1392 55L1440 60V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
