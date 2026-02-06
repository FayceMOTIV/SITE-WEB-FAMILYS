import React from 'react';
import { Smartphone, CreditCard, Gift, Star, Zap, Clock, Heart, Trophy, Target, Percent, Bell, Sparkles, PartyPopper } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { restaurantInfo } from '../data/mock';

const Application = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 sm:pb-20 bg-black">
        <img
          src={`${process.env.PUBLIC_URL}/images/bg-burger-3.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

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

            {/* Screenshots de la vraie app en carousel */}
            <div className="mb-8 flex justify-center gap-4 overflow-x-auto pb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/app-1.png`}
                alt="App Family's - Accueil"
                className="h-96 md:h-[500px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/app-2.png`}
                alt="App Family's - Roue de la Fortune"
                className="h-96 md:h-[500px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/app-3.png`}
                alt="App Family's - Menu Bowls"
                className="h-96 md:h-[500px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hidden md:block"
              />
            </div>

            {/* 3 bullet points clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 sm:mb-12">
              <div className="glass-effect rounded-xl p-4">
                <Zap className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">Commande en 30 secondes</p>
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
                className="transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/appstore-badge.svg`}
                  alt="Télécharger sur l'App Store"
                  className="h-14 sm:h-16 w-auto"
                  loading="eager"
                />
              </a>
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
      </section>

      {/* Section Fidélité - Simplifiée */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-red-900 to-pink-900">
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
      <section className="relative py-16 sm:py-20 lg:py-24 bg-pink-950 animate-on-scroll overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/bg-burger-1.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/90 to-red-900/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <CreditCard className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-yellow-400">5%</span> de remise en argent
              </h2>
              <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">
                Plus tu commandes, plus tu économises automatiquement
              </p>
              
              {/* Screenshot de la vraie carte de fidélité */}
              <div className="mt-8 flex justify-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/app-1.png`}
                  alt="Carte de fidélité Le Family's"
                  className="h-80 md:h-96 w-auto rounded-2xl shadow-2xl"
                />
              </div>
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
          <div className="max-w-6xl mx-auto">
            
            {/* Section Menu de l'app avec screenshots */}
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                  Nos <span className="text-orange-400">Menus</span> dans l'App
                </h2>
                <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                  Commande tous tes plats préférés directement depuis ton téléphone
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/app-3.png`}
                    alt="Menu Bowls"
                    className="w-full h-auto rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-white font-bold text-xl">Bowls & Riz Crousty</h3>
                  <p className="text-gray-300">Découvre nos bowl V1, V2, V3, V4</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/app-4.png`}
                    alt="Menu Burgers Classic"
                    className="w-full h-auto rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-white font-bold text-xl">Burgers Classic</h3>
                  <p className="text-gray-300">Le Bleu, Classic, Double, Savoyard...</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/app-5.png`}
                    alt="Menu Burgers Top ventes"
                    className="w-full h-auto rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-white font-bold text-xl">Top Ventes & Kids</h3>
                  <p className="text-gray-300">Cheese Burger, Kid Burger et + encore</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Pourquoi <span className="text-orange-400">télécharger</span> l'app ?
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
      <section className="relative py-16 sm:py-20 lg:py-24 bg-orange-950 animate-on-scroll overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/bg-burger-2.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
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
                  Plus de 500 gourmands commandent déjà depuis leur canapé 🛋️
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
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
