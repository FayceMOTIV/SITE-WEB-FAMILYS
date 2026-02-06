import React from 'react';
import { Smartphone, CreditCard, Gift, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { restaurantInfo } from '../data/mock';

const AppPromo = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-red-950 via-orange-950 to-amber-950 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Téléchargez notre <span className="text-orange-400">Application</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Commandez en un clic et profitez de votre carte de fidélité avec remise en argent de 5% !
            </p>
          </div>

          {/* Section principale avec VRAIES images de l'app */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Screenshots réels de l'app */}
            <div className="relative flex justify-center gap-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/app-1.png`}
                alt="App Family's - Accueil"
                className="h-80 sm:h-96 lg:h-[450px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/app-2.png`}
                alt="App Family's - Roue de la Fortune"
                className="h-80 sm:h-96 lg:h-[450px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hidden sm:block"
              />

              {/* Badge promotionnel */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12 text-sm sm:text-base z-10">
                5% de remise !
              </div>
            </div>

            {/* Avantages */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Carte de fidélité intégrée</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Cumulez des points à chaque commande et bénéficiez d'une remise en argent de 5% automatiquement !
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Gift className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Jeux et surprises</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Jouez à la roue de la fortune et gagnez des cadeaux chaque jour sur l'application !
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Commande rapide</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Commandez en quelques clics, suivez votre commande en temps réel et gagnez du temps
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Offres exclusives</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Recevez des promotions réservées uniquement aux utilisateurs de l'application
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Boutons de téléchargement */}
          <div className="text-center">
            <p className="text-white text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Téléchargez l'application dès maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Bouton App Store */}
              <a
                href={restaurantInfo.appLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/appstore-badge.svg`}
                  alt="Télécharger sur l'App Store"
                  className="h-14 sm:h-16 w-auto"
                  loading="eager"
                />
              </a>

              {/* Bouton Google Play */}
              <a
                href={restaurantInfo.appLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/googleplay-badge.png`}
                  alt="Disponible sur Google Play"
                  className="h-14 sm:h-16 w-auto"
                  loading="eager"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
