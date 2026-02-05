import React from 'react';
import { Smartphone, CreditCard, Gift, Star, Download, Apple, Zap, Clock, Heart, Trophy, Target, Percent, Bell, Sparkles, PartyPopper } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { restaurantInfo } from '../data/mock';

const Application = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950">
      {/* Hero Section - Simplifié et optimisé */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 bg-orange-950">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 shadow-2xl">
              <Smartphone className="text-white" size={40} />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Commande, Joue & <span className="text-orange-400">Gagne !</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              L'app qui transforme chaque commande en moment fun
            </p>

            {/* Screenshots optimisés avec lazy loading */}
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-800/30 rounded-2xl p-2">
                <img 
                  src="/images/app-fidelite.webp"
                  alt="App Family's - Accueil"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="lazy"
                  style={{ backgroundColor: '#1f2937' }}
                />
                <p className="text-white text-sm mt-2">Carte Fidélité 39,38€</p>
              </div>
              <div className="bg-gray-800/30 rounded-2xl p-2">
                <img 
                  src="/images/app-surprise.webp"
                  alt="App Family's - Roue de la Fortune"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="lazy"
                  style={{ backgroundColor: '#1f2937' }}
                />
                <p className="text-white text-sm mt-2">Surprise du Jour</p>
              </div>
              <div className="bg-gray-800/30 rounded-2xl p-2 hidden lg:block">
                <img 
                  src="/images/app-menu.webp"
                  alt="App Family's - Menu"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="lazy"
                  style={{ backgroundColor: '#1f2937' }}
                />
                <p className="text-white text-sm mt-2">Menu Bowls</p>
              </div>
            </div>

            {/* 3 avantages clés */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-orange-400/30">
                <CardContent className="p-4 text-center">
                  <Zap className="text-orange-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-semibold">30 secondes</p>
                  <p className="text-gray-300 text-sm">pour commander</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
                <CardContent className="p-4 text-center">
                  <Trophy className="text-yellow-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-semibold">Jeux gratuits</p>
                  <p className="text-gray-300 text-sm">et cadeaux</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-green-400/30">
                <CardContent className="p-4 text-center">
                  <Percent className="text-green-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-semibold">5% remise</p>
                  <p className="text-gray-300 text-sm">automatique</p>
                </CardContent>
              </Card>
            </div>

            {/* Boutons téléchargement */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <a
                href={restaurantInfo.appLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full bg-black hover:bg-gray-900 border-2 border-gray-700 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl">
                  <Apple size={28} className="mr-3" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Télécharger sur</p>
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
                <Button className="w-full bg-black hover:bg-gray-900 border-2 border-gray-700 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl">
                  <Download size={28} className="mr-3" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Disponible sur</p>
                    <p>Google Play</p>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fidélité - Simplifiée */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-red-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <CreditCard className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-yellow-400">5%</span> de remise en argent
              </h2>
              <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">
                Plus tu commandes, plus tu économises automatiquement
              </p>
            </div>

            {/* Exemple concret */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 shadow-2xl max-w-3xl mx-auto">
              <CardContent className="p-8 sm:p-10">
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-6 text-center">
                  💰 Exemple concret
                </h3>
                <div className="grid grid-cols-3 gap-4 text-white text-center">
                  <div>
                    <p className="text-4xl font-bold mb-2">30€</p>
                    <p className="text-green-100">de commandes</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-4xl">→</div>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2">1,50€</p>
                    <p className="text-green-100">dans ta cagnotte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Jeux - Simplifiée */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-pink-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <PartyPopper className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Joue et <span className="text-yellow-400">Gagne</span>
              </h2>
              <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">
                Des mini-jeux pour remporter des cadeaux chaque jour
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Clock className="text-white mx-auto mb-4" size={48} />
                  <h3 className="text-white font-bold text-2xl mb-3">🎯 Le Chrono</h3>
                  <p className="text-white text-lg">
                    Teste tes réflexes et gagne des produits gratuits !
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Target className="text-white mx-auto mb-4" size={48} />
                  <h3 className="text-white font-bold text-2xl mb-3">🎰 Surprise du Jour</h3>
                  <p className="text-white text-lg">
                    Tourne la roue et tente ta chance quotidienne !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mise à Jour Février 2026 */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full shadow-lg mb-8">
              <Sparkles className="text-white" size={24} />
              <span className="text-white font-bold text-lg uppercase">Bientôt</span>
              <Sparkles className="text-white" size={24} />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Nouvelle Version
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Février 2026
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-cyan-100 mb-12">
              Encore plus de fonctionnalités incroyables à venir !
            </p>

            <Card className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 border-0 shadow-2xl">
              <CardContent className="p-8">
                <p className="text-white text-2xl font-bold mb-4">
                  📅 FÉVRIER 2026
                </p>
                <p className="text-white text-lg">
                  La mise à jour la plus dingue arrive bientôt !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-900 to-orange-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="text-yellow-400 mx-auto mb-6" size={64} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Rejoins la famille !
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Plus de 10 000 gourmands commandent déjà depuis leur canapé 🛋️
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <a href={restaurantInfo.appLinks.ios} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-gray-900 hover:bg-yellow-300 px-10 py-7 text-xl font-bold rounded-xl shadow-xl">
                  <Apple size={32} className="mr-3" />
                  App Store
                </Button>
              </a>
              <a href={restaurantInfo.appLinks.android} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-gray-900 hover:bg-yellow-300 px-10 py-7 text-xl font-bold rounded-xl shadow-xl">
                  <Download size={32} className="mr-3" />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
