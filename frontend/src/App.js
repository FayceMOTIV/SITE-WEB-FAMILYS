import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Application from './pages/Application';
import MentionsLegales from './pages/MentionsLegales';
import CGV from './pages/CGV';

// Composant pour scroller en haut et réinitialiser les animations
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll en haut
    window.scrollTo(0, 0);

    // Réinitialiser les animations - ajouter animate-fade-in à tous les éléments
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('animate-fade-in');
    });
  }, [pathname]);

  return null;
}

function Layout({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname}>
      <SEO />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

// Liste des images à précharger
const imagesToPreload = [
  '/images/hero-burger.jpg',
  '/images/bg-burger-1.jpg',
  '/images/bg-burger-2.jpg',
  '/images/bg-burger-3.jpg',
  '/images/bg-reviews.jpg',
  '/images/logo-familys.png',
  '/images/appstore-badge.svg',
  '/images/googleplay-badge.png',
  '/images/app-1.png',
  '/images/app-2.png',
  '/images/restaurant-interior.webp'
];

function App() {
  // Précharger toutes les images au démarrage
  useEffect(() => {
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}${src}`;
    });
  }, []);

  // Ajouter les animations au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observer tous les éléments avec la classe 'animate-on-scroll'
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/application" element={<Application />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;