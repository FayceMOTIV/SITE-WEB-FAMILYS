import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

gsap.registerPlugin(ScrollTrigger);

const HeroFullscreen = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !subhead || !cta || !bg) return;

    const ctx = gsap.context(() => {
      // Animation de chargement initial
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      loadTl
        .fromTo(bg, 
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 }
        )
        .fromTo(headline.children,
          { y: 100, opacity: 0, rotateX: 45 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.08, duration: 1 },
          '-=0.8'
        )
        .fromTo(subhead,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(cta.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
          '-=0.4'
        );

      // Animation simple au scroll (sans pin)
      gsap.to(headline, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        opacity: 0.3,
        ease: 'none'
      });

      gsap.to(subhead, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -80,
        opacity: 0.3,
        ease: 'none'
      });

      gsap.to(cta, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -50,
        opacity: 0,
        ease: 'none'
      });

      gsap.to(bg, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 1.2,
        ease: 'none'
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Image de fond plein écran */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform' }}
      >
        <img
          src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc2ODQyNDA2Mnww&ixlib=rb-4.1.0&q=85"
          alt="Le Family's Burger"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ objectPosition: 'center', backgroundColor: '#7c2d12' }}
        />
        {/* Effet vignette */}
        <div className="absolute inset-0 bg-radial-vignette" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
        {/* Header */}
        <header className="flex justify-between items-start">
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/4euq80w9_LOGO%20FAMILYS.png" 
              alt="Le Family's" 
              className="h-16 md:h-20 w-auto drop-shadow-2xl"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <Link to="/menu" className="font-semibold text-sm tracking-wide text-white/80 hover:text-orange-400 transition-colors uppercase">
              Menu
            </Link>
            <Link to="/application" className="font-semibold text-sm tracking-wide text-white/80 hover:text-orange-400 transition-colors uppercase">
              Application
            </Link>
            <Link to="/contact" className="font-semibold text-sm tracking-wide text-white/80 hover:text-orange-400 transition-colors uppercase">
              Contact
            </Link>
          </nav>
        </header>

        {/* Contenu principal */}
        <div className="flex-1 flex flex-col justify-center max-w-6xl">
          <h1
            ref={headlineRef}
            className="font-black text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] text-white leading-[0.9] tracking-tight mb-6"
            style={{ 
              perspective: '1000px',
              textShadow: '0 8px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            <span className="inline-block">LE</span>{' '}
            <span className="inline-block">GOÛT</span>{' '}
            <span className="inline-block">QUI</span>{' '}
            <span className="inline-block text-orange-400">RASSEMBLE</span>
          </h1>
          
          <p
            ref={subheadRef}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl font-medium"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.8)' }}
          >
            Burgers artisanaux, tacos savoureux et moments gourmands à Bourg-en-Bresse
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <a
              href={restaurantInfo.orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base uppercase tracking-wide rounded-full transition-all duration-300 shadow-2xl"
            >
              Commander
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 backdrop-blur-sm text-white font-bold text-base uppercase tracking-wide rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Appelez-nous
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 backdrop-blur-sm text-white font-bold text-base uppercase tracking-wide rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Voir le menu
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end">
          <span className="text-xs text-white/60 uppercase tracking-widest font-semibold">
            Bourg-en-Bresse
          </span>
          <span className="text-xs text-white/60 uppercase tracking-widest font-semibold animate-pulse">
            Scroll ↓
          </span>
        </div>
      </div>

      <style>{`
        .bg-radial-vignette {
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%);
        }
      `}</style>
    </section>
  );
};

export default HeroFullscreen;
