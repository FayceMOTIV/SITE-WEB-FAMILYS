import React from 'react';
import { Smartphone, CreditCard, Gift, Star, Download, Apple } from 'lucide-react';
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

          {/* Section principale avec image et avantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Illustration téléphone */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-orange-400/30 overflow-hidden">
                <CardContent className="p-8 sm:p-12 lg:p-16">
                  <div className="relative">
                    {/* Mockup téléphone */}
                    <div className="bg-gray-900 rounded-3xl p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-auto max-w-xs">
                      <div className="bg-white rounded-2xl overflow-hidden">
                        {/* Écran du téléphone */}
                        <div className="bg-gradient-to-b from-orange-950 via-red-950 to-amber-950 p-4 sm:p-6 aspect-[9/16]">
                          <div className="text-center">
                            <img 
                              src="https://customer-assets.emergentagent.com/job_gourmet-burgers-23/artifacts/4euq80w9_LOGO%20FAMILYS.png" 
                              alt="Family's App" 
                              className="w-20 sm:w-24 h-auto mx-auto mb-4"
                            />
                            <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Le Family's</h3>
                            <p className="text-orange-300 text-xs sm:text-sm mb-4">Votre fast-food préféré</p>
                            
                            {/* Carte de fidélité dans l'app */}
                            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-3 sm:p-4 shadow-lg mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <CreditCard className="text-white" size={20} />
                                <Star className="text-yellow-300" size={20} />
                              </div>
                              <p className="text-white font-bold text-sm">Carte de fidélité</p>
                              <p className="text-amber-100 text-xs mt-1">Remise: 5%</p>
                            </div>
                            
                            {/* Bouton commande simulé */}
                            <button className="w-full bg-orange-500 text-white font-bold py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                              Commander maintenant
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge promotionnel */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12 text-sm sm:text-base">
                      5% de remise !
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Offres exclusives</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Recevez des promotions réservées uniquement aux utilisateurs de l'application mobile
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
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Historique des commandes</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Retrouvez vos plats préférés et recommandez en un instant vos menus favoris
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
                className="group w-full sm:w-auto"
              >
                <Card className="bg-black hover:bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <CardContent className="px-6 sm:px-8 py-4">
                    <div className="flex items-center space-x-4">
                      <Apple size={40} className="text-white" />
                      <div className="text-left">
                        <p className="text-gray-400 text-xs sm:text-sm">Télécharger sur</p>
                        <p className="text-white font-bold text-base sm:text-lg">App Store</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Bouton Google Play */}
              <a
                href={restaurantInfo.appLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto"
              >
                <Card className="bg-black hover:bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <CardContent className="px-6 sm:px-8 py-4">
                    <div className="flex items-center space-x-4">
                      <Download size={40} className="text-white" />
                      <div className="text-left">
                        <p className="text-gray-400 text-xs sm:text-sm">Disponible sur</p>
                        <p className="text-white font-bold text-base sm:text-lg">Google Play</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Message promotionnel */}
            <div className="mt-8 sm:mt-12">
              <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-400/50 max-w-2xl mx-auto">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                    🎁 Offre de bienvenue : -10% sur votre première commande via l'application !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
