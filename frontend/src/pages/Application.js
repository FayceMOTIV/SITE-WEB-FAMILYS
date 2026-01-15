import React from 'react';
import { Smartphone, CreditCard, Gift, Star, Download, Apple, Zap, Clock, Heart, TrendingUp, Trophy, Target, Percent, Bell, Sparkles, PartyPopper } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 sm:mb-8 shadow-2xl animate-bounce">
              <Smartphone className="text-white" size={40} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Commande, Joue & <span className="text-orange-400">Gagne !</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed">
              L'app qui transforme chaque commande en moment fun
            </p>

            {/* 3 bullet points clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 sm:mb-12">
              <div className="glass-effect rounded-xl p-4">
                <Zap className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">Commande en 30 secondes</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <Trophy className="text-yellow-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">Joue et gagne des cadeaux</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <Percent className="text-green-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">5% de remise automatique</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
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
          </div>
        </div>
      </section>

      {/* Section Jeux */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-purple-900 to-pink-900 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <PartyPopper className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Joue et <span className="text-yellow-400">Gagne</span> des Cadeaux !
              </h2>
              <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                Transforme ta commande en partie de fun avec nos mini-jeux exclusifs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Chrono Game */}
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 mx-auto">
                    <Clock className="text-orange-600" size={40} />
                  </div>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4 text-center">
                    🎯 Le Chrono
                  </h3>
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    Teste tes réflexes ! Arrête le chrono pile au bon moment et remporte des produits gratuits, des réductions ou des surprises.
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-bold text-center">
                      ⚡ Parties gratuites chaque jour !
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Roue de la Fortune */}
              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 mx-auto">
                    <Target className="text-purple-600" size={40} />
                  </div>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4 text-center">
                    🎰 Surprise du Jour
                  </h3>
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    Tourne la roue magique chaque jour et tente ta chance pour gagner des cadeaux, des points bonus ou des menus offerts !
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-bold text-center">
                      🎁 Une chance par jour de gagner gros !
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 border-0 max-w-2xl mx-auto">
                <CardContent className="p-6 sm:p-8">
                  <Sparkles className="text-white mx-auto mb-4" size={40} />
                  <p className="text-gray-900 font-bold text-xl sm:text-2xl">
                    Tes gains = de vrais cadeaux utilisables sur ta prochaine commande !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Fidélité */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-pink-900 to-red-900 animate-on-scroll overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc2ODUwMjI2Nnww&ixlib=rb-4.1.0&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/90 to-red-900/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <CreditCard className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Ta <span className="text-yellow-400">Cagnotte</span> Fidélité
              </h2>
              <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                Plus tu commandes, plus tu économises. C'est automatique !
              </p>
            </div>

            {/* Comment ça marche */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Tu commandes</h4>
                  <p className="text-gray-300">Via l'application</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Tu gagnes 5%</h4>
                  <p className="text-gray-300">Crédité automatiquement</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Tu dépenses</h4>
                  <p className="text-gray-300">Quand tu veux !</p>
                </CardContent>
              </Card>
            </div>

            {/* Exemple concret */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 shadow-2xl">
              <CardContent className="p-8 sm:p-10">
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-6 text-center">
                  💰 Exemple concret
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
                  <div>
                    <p className="text-4xl sm:text-5xl font-bold mb-2">30€</p>
                    <p className="text-green-100 text-lg">de commandes</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-5xl">→</div>
                  </div>
                  <div>
                    <p className="text-4xl sm:text-5xl font-bold mb-2">1,50€</p>
                    <p className="text-green-100 text-lg">dans ta cagnotte</p>
                  </div>
                </div>
                <p className="text-white/90 text-center mt-6 text-lg">
                  = Un dessert offert sur ta prochaine commande ! 🍰
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi télécharger l'app */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-red-900 to-orange-900 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Pourquoi <span className="text-orange-400">télécharger</span> l'app ?
              </h2>
              <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                Une expérience 100% premium pour les gourmands pressés
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Commande rapide */}
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 card-glow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Zéro attente</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Choisis ton créneau de retrait. Ta commande t'attend déjà prête à ton arrivée !
                  </p>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 card-glow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Bell className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Suivi en temps réel</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Reçois une notif dès que ta commande est prête. Tu sais exactement quand venir !
                  </p>
                </CardContent>
              </Card>

              {/* Paiement */}
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 card-glow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CreditCard className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Paiement express</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Apple Pay ou carte bancaire. Paie en 1 seconde, c'est sécurisé et ultra rapide !
                  </p>
                </CardContent>
              </Card>

              {/* Promos */}
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 card-glow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Gift className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Offres exclusives</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Codes promo, BOGO, offres flash... Profite d'avantages réservés aux membres !
                  </p>
                </CardContent>
              </Card>

              {/* Historique */}
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 card-glow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Recommande en 1 clic</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Retrouve tes burgers préférés dans l'historique. Pas besoin de tout rechercher !
                  </p>
                </CardContent>
              </Card>

              {/* Personnalisation */}
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 card-glow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">Ton burger, tes règles</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Personnalise tout : taille, suppléments, sauces. Crée le burger de tes rêves !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-orange-900 to-red-950 animate-on-scroll overflow-hidden" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1632898658005-af95f6fa589c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc2ODUwMjI2Nnww&ixlib=rb-4.1.0&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/85 to-red-950/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 border-0 shadow-2xl">
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center">
                <Sparkles className="text-white mx-auto mb-6 animate-pulse" size={64} />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Rejoins la famille !
                </h2>
                <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto">
                  Plus de 10 000 gourmands commandent déjà depuis leur canapé 🛋️
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
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
                <p className="text-white/90 text-lg">
                  🎁 Télécharge maintenant et reçois ton premier jeu gratuit !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
