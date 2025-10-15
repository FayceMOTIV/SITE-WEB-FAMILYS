import React from 'react';
import { Facebook, Instagram, Bell } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { restaurantInfo } from '../data/mock';

const SocialMedia = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-amber-950 via-orange-950 to-red-950 animate-on-scroll">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Rejoignez notre <span className="text-orange-400">communauté</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos nouveautés, promotions exclusives et événements spéciaux !
          </p>
        </div>

        {/* Cartes réseaux sociaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {/* Facebook Card */}
          <a
            href={restaurantInfo.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-400/30 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer h-full">
              <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Facebook size={56} className="text-blue-600 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Facebook
                </h3>
                <p className="text-blue-100 text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
                  Découvrez nos nouveaux burgers, promotions et événements en exclusivité !
                </p>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold group-hover:bg-white/30 transition-all duration-300">
                  <Bell size={20} />
                  <span className="text-base sm:text-lg">Suivre la page</span>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Instagram Card */}
          <a
            href={restaurantInfo.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 border-pink-400/30 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 cursor-pointer h-full">
              <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Instagram size={56} className="text-pink-600 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Instagram
                </h3>
                <p className="text-pink-100 text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
                  Photos gourmandes, coulisses et concours exclusifs vous attendent !
                </p>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold group-hover:bg-white/30 transition-all duration-300">
                  <Bell size={20} />
                  <span className="text-base sm:text-lg">S'abonner</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Call to action supplémentaire */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 max-w-3xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                🎉 Nouveautés chaque semaine !
              </p>
              <p className="text-gray-300 text-base sm:text-lg">
                Soyez les premiers informés de nos nouveaux produits, promotions flash et jeux concours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
