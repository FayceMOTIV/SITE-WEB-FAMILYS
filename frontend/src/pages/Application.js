import React from 'react';
import { Smartphone, CreditCard, Gift, Star, Download, Apple, Zap, Clock, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { restaurantInfo } from '../data/mock';

const Application = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc2ODUwMjI2Nnww&ixlib=rb-4.1.0&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 sm:mb-8 shadow-2xl animate-bounce">
              <Smartphone className="text-white" size={40} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              L'Application <span className="text-orange-400">Le Family's</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Commandez en un clic et profitez de votre carte de fidélité avec <span className="text-orange-400 font-bold">remise en argent de 5%</span> !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <a
                href={restaurantInfo.appLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 border-2 border-gray-700 hover:border-gray-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Apple size={32} className="mr-3" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Télécharger sur</p>
                    <p className="text-base sm:text-lg">App Store</p>
                  </div>
                </Button>
              </a>

              <a
                href={restaurantInfo.appLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 border-2 border-gray-700 hover:border-gray-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Download size={32} className="mr-3" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Disponible sur</p>
                    <p className="text-base sm:text-lg">Google Play</p>
                  </div>
                </Button>
              </a>
            </div>

            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-6 sm:px-8 py-3 sm:py-4">
              <p className="text-gray-900 font-bold text-base sm:text-lg md:text-xl">
                🎁 Application 100% gratuite
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carte de Fidélité Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-amber-950 to-orange-950 animate-on-scroll overflow-hidden">
        {/* Background burger image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzYyODQ3Mjc3fDA&ixlib=rb-4.1.0&q=85"
            alt="Background burger"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 to-orange-950/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Carte de <span className="text-orange-400">Fidélité</span>
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                Gagnez de l'argent à chaque commande avec notre système de remise en argent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Visuel carte de fidélité */}
              <div className="relative">
                <Card className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 border-orange-400/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8 sm:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <CreditCard className="text-white" size={40} />
                      <Star className="text-yellow-300" size={40} />
                    </div>
                    <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4">
                      Carte de Fidélité
                    </h3>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
                      <p className="text-white text-4xl sm:text-5xl font-bold mb-2">5%</p>
                      <p className="text-amber-100 text-lg">de remise en argent</p>
                    </div>
                    <div className="space-y-3 text-white">
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Valable sur toutes vos commandes
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Crédit automatique après chaque achat
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Utilisez vos crédits quand vous voulez
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Explication du système */}
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Commandez</h4>
                        <p className="text-gray-300">
                          Passez votre commande via l'application mobile
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Cumulez</h4>
                        <p className="text-gray-300">
                          5% du montant de votre commande est crédité sur votre carte
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Profitez</h4>
                        <p className="text-gray-300">
                          Utilisez vos crédits pour réduire le montant de vos prochaines commandes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Exemple de calcul */}
            <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-orange-400/50">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4">
                  💰 Exemple de remise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold mb-2">50€</p>
                    <p className="text-orange-100">Commande</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-4xl">→</div>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold mb-2">2,50€</p>
                    <p className="text-orange-100">Crédités</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages de l'application */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-orange-950 to-red-950 animate-on-scroll overflow-hidden">
        {/* Background burger image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1632898658005-af95f6fa589c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc2Mjg0NzI3MXww&ixlib=rb-4.1.0&q=85"
            alt="Background burger"
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-950/85 to-red-950/85"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Tous les <span className="text-orange-400">Avantages</span>
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                Une expérience de commande simplifiée et des avantages exclusifs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Commande rapide</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Commandez en quelques secondes grâce à votre historique et vos favoris
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Gift className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Offres exclusives</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Recevez des promotions et des offres spéciales réservées aux utilisateurs de l'app
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Suivi en temps réel</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Suivez la préparation de votre commande et soyez notifié quand elle est prête
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Star className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Historique</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Retrouvez toutes vos commandes passées et recommandez vos plats préférés
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Personnalisation</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Enregistrez vos préférences et personnalisez vos plats selon vos goûts
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Carte évolutive</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Découvrez en avant-première nos nouveaux produits directement dans l'app
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-red-950 to-amber-950 animate-on-scroll overflow-hidden">
        {/* Background burger image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc2Mjg0NzI3MXww&ixlib=rb-4.1.0&q=85"
            alt="Background burger"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 to-amber-950/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 border-orange-400/50 shadow-2xl">
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center">
                <Smartphone className="text-white mx-auto mb-6 drop-shadow-lg" size={64} />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Prêt à profiter de 5% de remise ?
                </h2>
                <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto">
                  Téléchargez l'application maintenant et commencez à économiser dès votre première commande !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <a
                    href={restaurantInfo.appLinks.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-yellow-300 px-10 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Apple size={32} className="mr-3" />
                      <div className="text-left">
                        <p className="text-xs text-gray-600">Télécharger sur</p>
                        <p>App Store</p>
                      </div>
                    </Button>
                  </a>

                  <a
                    href={restaurantInfo.appLinks.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-yellow-300 px-10 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Download size={32} className="mr-3" />
                      <div className="text-left">
                        <p className="text-xs text-gray-600">Disponible sur</p>
                        <p>Google Play</p>
                      </div>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
