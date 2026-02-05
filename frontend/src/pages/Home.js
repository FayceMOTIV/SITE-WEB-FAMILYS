import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ChefHat, ArrowRight } from 'lucide-react';
import { burgers, reviews, whyChooseUs, restaurantInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SocialMedia from '../components/SocialMedia';
import AppPromo from '../components/AppPromo';
import HeroFullscreen from '../components/HeroFullscreen';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ margin: 0, padding: 0 }}>
      {/* Hero Fullscreen avec GSAP */}
      <HeroFullscreen />
      
      <div className="bg-gradient-to-b from-orange-950 via-amber-950 to-red-950">

      {/* About Section */}
      <section className="relative py-12 sm:py-16 md:py-20 animate-on-scroll overflow-hidden" style={{
        backgroundImage: "url('/images/about-burger.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#7c2d12"
      }}>
        {/* Overlay réduit pour voir le burger */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 to-orange-900/75"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-4">
                Bien plus qu'un restaurant, <br className="hidden sm:block"/>
                <span className="text-orange-400">une vraie expérience conviviale</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 px-2 sm:px-0">
              <Card className="bg-gradient-to-br from-red-600 to-orange-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300">
                <CardContent className="p-4 xs:p-5 sm:p-6 md:p-8 text-white">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4">Un lieu spacieux et accueillant</h3>
                  <p className="text-white/90 leading-relaxed text-xs xs:text-sm sm:text-base">
                    Avec ses 250 m² de salle chaleureusement décorée et une terrasse ensoleillée de 60 m², le Family's vous reçoit dans une ambiance détendue, idéale pour un déjeuner en semaine ou un dîner festif le week-end.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500 to-yellow-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pensé pour petits et grands</h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    Notre restaurant dispose d'une aire de jeux sécurisée et ludique pour les enfants, pour leur plus grand bonheur… et votre tranquillité. Un espace familial où tout le monde se sent bien.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-500 to-red-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Cuisine variée et généreuse</h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    Plats maison, saveurs authentiques et portions généreuses sont la marque de fabrique du Family's. Ici, on se régale sans chichi, dans une ambiance conviviale où l'on se sent comme à la maison.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-500 to-pink-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Livraison via Uber Eats</h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                    Envie de nos burgers et tacos chez vous ? Commandez sur Uber Eats et profitez de nos plats fraîchement préparés directement à votre porte. La même qualité, où que vous soyez !
                  </p>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-12 sm:py-16 md:py-20 animate-on-scroll overflow-hidden" style={{
        backgroundImage: "url('/images/why-burger.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#7c2d12"
      }}>
        {/* Overlay réduit */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/75 to-red-950/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
              Pourquoi choisir <span className="text-orange-400">Le Family's</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-orange-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/30">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon === 'chef-hat' && <ChefHat className="text-white" size={28} />}
                    {item.icon === 'clock' && <Clock className="text-white" size={28} />}
                    {item.icon === 'star' && <Star className="text-white" size={28} />}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-200 text-sm sm:text-base">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-12 sm:py-16 md:py-20 animate-on-scroll overflow-hidden" style={{
        backgroundImage: "url('https://images.pexels.com/photos/35566545/pexels-photo-35566545.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#7c2d12"
      }}>
        {/* Overlay réduit */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/75 to-amber-950/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
              Ce que disent nos <span className="text-orange-400">clients</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4 flex-wrap">
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
                <Star className="text-yellow-400 fill-yellow-400" size={24} style={{ clipPath: 'inset(0 70% 0 0)' }} />
              </div>
              <span className="text-white text-xl sm:text-2xl font-bold">4.3/5</span>
              <span className="text-gray-300 text-sm sm:text-base">sur Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm line-clamp-4">{review.text}</p>
                  <span className="text-gray-400 text-xs mt-2 block">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-amber-950 to-orange-950 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 shadow-lg">
                <Clock className="text-white" size={40} />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
                Nos <span className="text-orange-400">Horaires</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg px-4">
                Ouvert 6 jours sur 7 pour vous régaler !
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-orange-500/30 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {restaurantInfo.hours.map((schedule, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      schedule.hours === "Fermé" 
                        ? 'bg-red-900/20 border border-red-500/30' 
                        : 'bg-white/5 hover:bg-white/10 border border-transparent hover:border-orange-500/50'
                    }`}
                  >
                    <span className={`font-semibold text-base sm:text-lg ${
                      schedule.hours === "Fermé" ? 'text-red-400' : 'text-white'
                    }`}>
                      {schedule.day}
                    </span>
                    <span className={`font-bold text-sm sm:text-base ${
                      schedule.hours === "Fermé" ? 'text-red-500' : 'text-orange-400'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section - NEW */}
      <SocialMedia />

      {/* App Promo Section - NEW */}
      <AppPromo />
      
      </div>
    </div>
  );
};

export default Home;