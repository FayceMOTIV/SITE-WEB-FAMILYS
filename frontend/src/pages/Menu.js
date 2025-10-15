import React, { useState } from 'react';
import { restaurantInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, Maximize2 } from 'lucide-react';

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const menuImages = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/i1q35wil_1.png',
      title: 'Burgers Classic',
      description: 'Nos burgers signature avec promotion -50%'
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/1y0pzk2i_5.png',
      title: 'Burgers Deluxe',
      description: 'Collection premium de burgers gourmands'
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/9qx8ah10_8.png',
      title: 'Tacos',
      description: 'Tacos Classic et Deluxe personnalisables'
    },
    {
      id: 4,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/4o2992pu_9.png',
      title: 'Desserts',
      description: 'Sundaes, milkshakes et douceurs maison'
    },
    {
      id: 5,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/vk569wuv_11.png',
      title: 'Accompagnements & Salades',
      description: 'Tex Mex, Menu Kid, Salades fraîches'
    },
    {
      id: 6,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/ef1uz5w2_12.png',
      title: 'Spécialités',
      description: 'Bowls et créations spéciales'
    },
    {
      id: 7,
      url: 'https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/fcmz0rer_13.png',
      title: 'Menu Complet',
      description: 'Personnalisez votre repas'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
    setIsLightboxOpen(true);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    setZoomLevel(1);
    document.body.style.overflow = 'auto'; // Réactiver le scroll
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 px-2">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Carte</span>
          </h1>
          <p className="text-base sm:text-lg text-orange-100 max-w-2xl mx-auto px-4">
            Découvrez notre carte complète avec burgers, tacos, desserts et bien plus encore
          </p>
        </div>

        {/* Menu Carousel */}
        <div className="mb-12 sm:mb-16 relative">
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="relative">
              {menuImages.map((menu, index) => (
                <div
                  key={menu.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100 relative' 
                      : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="relative group">
                    {/* Image Container with Special Effects */}
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-500/30 cursor-pointer"
                      onClick={() => openLightbox(menu.url)}
                    >
                      <img
                        src={menu.url}
                        alt={menu.title}
                        loading="lazy"
                        className="w-full h-auto object-contain bg-gray-800 rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Zoom Icon Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl pointer-events-none">
                        <div className="bg-white/90 p-4 rounded-full">
                          <Maximize2 className="text-orange-600" size={32} />
                        </div>
                        <p className="absolute bottom-4 text-white font-bold text-lg drop-shadow-lg">Cliquez pour agrandir</p>
                      </div>
                      
                      {/* Overlay Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          {menu.title}
                        </h3>
                        <p className="text-gray-200 text-lg drop-shadow-md">
                          {menu.description}
                        </p>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(251,146,60,0.5)]"></div>
                      </div>
                    </div>

                    {/* Slide Number Indicator */}
                    <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg z-10 text-sm sm:text-base pointer-events-none">
                      {currentSlide + 1} / {menuImages.length}
                    </div>
                    
                    {/* Zoom button visible sur mobile */}
                    <div className="absolute bottom-3 right-3 sm:hidden bg-white text-orange-600 px-4 py-2 rounded-full font-bold shadow-2xl z-10 text-sm flex items-center gap-2 pointer-events-none">
                      <ZoomIn size={18} />
                      Appuyez pour agrandir
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {menuImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentSlide 
                    ? 'w-12 bg-gradient-to-r from-orange-500 to-red-600' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg px-2">
            Prêt à commander ?
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow px-4">
            Commandez en ligne, appelez-nous ou profitez de la livraison via Uber Eats
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch px-4 sm:px-0">
            <a
              href={restaurantInfo.orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-yellow-300 px-8 sm:px-10 py-4 sm:py-7 text-base sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                Commander en ligne
                <ArrowRight className="ml-2 sm:ml-3" size={20} />
              </Button>
            </a>
            <a
              href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-blue-600 border-2 border-blue-400 text-white hover:bg-blue-700 px-8 sm:px-10 py-4 sm:py-7 text-base sm:text-xl font-bold rounded-xl shadow-2xl shadow-blue-600/60 transform hover:scale-105 transition-all duration-300">
                📞 {restaurantInfo.phone}
              </Button>
            </a>
            <a
              href={restaurantInfo.uberEatsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-black border-2 border-green-500 text-white hover:bg-green-500 px-8 sm:px-10 py-4 sm:py-7 text-base sm:text-xl font-bold rounded-xl shadow-2xl shadow-green-500/60 transform hover:scale-105 transition-all duration-300">
                🚗 Livraison Uber Eats
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal pour zoom */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          {/* Header avec contrôles */}
          <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4 z-10">
            <div className="flex gap-2">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                <span className="text-xl font-bold">-</span>
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                <span className="text-xl font-bold">+</span>
              </button>
              <div className="bg-white/90 px-4 py-3 rounded-full text-gray-900 font-bold shadow-xl">
                {Math.round(zoomLevel * 100)}%
              </div>
            </div>
            <button
              onClick={closeLightbox}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-xl"
            >
              <X size={24} />
            </button>
          </div>

          {/* Instructions mobile */}
          <div className="absolute top-20 left-0 right-0 text-center z-10">
            <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded-full">
              📱 Pincez pour zoomer • Faites glisser pour déplacer
            </p>
          </div>

          {/* Image container avec scroll */}
          <div 
            className="w-full h-full overflow-auto flex items-center justify-center touch-pan-x touch-pan-y"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain'
            }}
          >
            <img
              src={lightboxImage}
              alt="Menu agrandi"
              className="max-w-none transition-transform duration-200 select-none"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
                touchAction: 'pan-x pan-y pinch-zoom',
                width: zoomLevel > 1 ? `${100 * zoomLevel}%` : 'auto',
                minWidth: '100%'
              }}
              draggable="false"
            />
          </div>

          {/* Navigation entre slides depuis le lightbox */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
            <button
              onClick={() => {
                const newSlide = (currentSlide - 1 + menuImages.length) % menuImages.length;
                setCurrentSlide(newSlide);
                setLightboxImage(menuImages[newSlide].url);
                setZoomLevel(1);
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2"
            >
              <ChevronLeft size={24} />
              Précédent
            </button>
            <button
              onClick={() => {
                const newSlide = (currentSlide + 1) % menuImages.length;
                setCurrentSlide(newSlide);
                setLightboxImage(menuImages[newSlide].url);
                setZoomLevel(1);
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2"
            >
              Suivant
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;