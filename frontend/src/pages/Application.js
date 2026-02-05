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
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 sm:mb-8 shadow-2xl animate-bounce">
              <Smartphone className="text-white" size={40} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Commande, Joue & <span className="text-orange-400">Gagne !</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed">
              L'app qui transforme chaque commande en moment fun
            </p>

            {/* Screenshots de la vraie app en carousel */}
            <div className="mb-8 flex justify-center gap-4 overflow-x-auto pb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/hi9ffu86_IMG_1585.PNG"
                alt="App Family's - Accueil"
                className="h-96 md:h-[500px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/wbv2o4mb_IMG_1589.PNG"
                alt="App Family's - Roue de la Fortune"
                className="h-96 md:h-[500px] w-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/5ddf4z7c_IMG_1587.PNG"
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
              
              {/* Screenshot de la vraie carte de fidélité */}
              <div className="mt-8 flex justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/hi9ffu86_IMG_1585.PNG"
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
                    src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/5ddf4z7c_IMG_1587.PNG"
                    alt="Menu Bowls"
                    className="w-full h-auto rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-white font-bold text-xl">Bowls & Riz Crousty</h3>
                  <p className="text-gray-300">Découvre nos bowl V1, V2, V3, V4</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/4evc79vh_IMG_1588.PNG"
                    alt="Menu Burgers Classic"
                    className="w-full h-auto rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-white font-bold text-xl">Burgers Classic</h3>
                  <p className="text-gray-300">Le Bleu, Classic, Double, Savoyard...</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_resto-conversion/artifacts/4l04zlmr_IMG_1586.PNG"
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

      {/* Section Mise à Jour Février 2026 - NOUVELLE */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
        {/* Effet de particules animées */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge "Bientôt" */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full shadow-lg">
                <Sparkles className="text-white animate-spin" size={24} style={{ animationDuration: '3s' }} />
                <span className="text-white font-bold text-lg uppercase tracking-widest">Bientôt Disponible</span>
                <Sparkles className="text-white animate-spin" size={24} style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  Nouvelle Version
                </span>
                <br />
                <span className="text-white">Février 2026</span>
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Préparez-vous à vivre une expérience encore plus incroyable ! 🚀
              </p>
            </div>

            {/* Grille des nouvelles fonctionnalités */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Feature 1 */}
              <Card className="bg-white/10 backdrop-blur-lg border-cyan-400/30 hover:bg-white/20 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Mode Ultra Rapide</h3>
                  <p className="text-cyan-100">
                    Commande tes plats favoris en 3 clics chrono ! ⚡
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-white/10 backdrop-blur-lg border-purple-400/30 hover:bg-white/20 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Trophy className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Nouveaux Jeux</h3>
                  <p className="text-purple-100">
                    Encore + de mini-jeux pour gagner des cadeaux 🎮
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-white/10 backdrop-blur-lg border-pink-400/30 hover:bg-white/20 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Gift className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Récompenses Boost</h3>
                  <p className="text-pink-100">
                    Programme fidélité amélioré avec bonus surprise 🎁
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="bg-white/10 backdrop-blur-lg border-green-400/30 hover:bg-white/20 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Favoris Perso</h3>
                  <p className="text-green-100">
                    Crée et sauvegarde tes combos de ouf 💚
                  </p>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="bg-white/10 backdrop-blur-lg border-yellow-400/30 hover:bg-white/20 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Star className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Interface Revue</h3>
                  <p className="text-yellow-100">
                    Design encore + moderne et fluide ✨
                  </p>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="bg-white/10 backdrop-blur-lg border-orange-400/30 hover:bg-white/20 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Bell className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Notifs Smart</h3>
                  <p className="text-orange-100">
                    Sois alerté des offres flash en temps réel 🔔
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Countdown teaser */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 border-0 shadow-2xl">
                <CardContent className="p-8 sm:p-12">
                  <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
                    📅 FÉVRIER 2026
                  </p>
                  <p className="text-white/90 text-lg sm:text-xl mb-6">
                    La mise à jour la plus dingue de l'histoire de Le Family's !
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                    <Sparkles className="text-yellow-300" size={24} />
                    <span className="text-white font-bold text-lg">Reste connecté pour ne rien rater</span>
                    <Sparkles className="text-yellow-300" size={24} />
                  </div>
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
