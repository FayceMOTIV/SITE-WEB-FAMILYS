import React, { useState } from 'react';
import { restaurantInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Carte</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez notre carte complète avec burgers, tacos, desserts et bien plus encore
          </p>
        </div>

        {/* Menu Carousel */}
        <div className="mb-16 relative">
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
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-500/30">
                      <img
                        src={menu.url}
                        alt={menu.title}
                        className="w-full h-auto object-contain bg-gray-800 rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                      
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
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                      {currentSlide + 1} / {menuImages.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
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
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Prêt à commander ?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            Commandez sur place ou profitez de la livraison via Uber Eats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={restaurantInfo.orderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-gray-900 hover:bg-yellow-300 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                Commander sur place
                <ArrowRight className="ml-3" size={24} />
              </Button>
            </a>
            <a
              href={restaurantInfo.uberEatsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-black border-2 border-green-500 text-white hover:bg-green-500 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl shadow-green-500/60 transform hover:scale-105 transition-all duration-300">
                🚗 Livraison Uber Eats
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;