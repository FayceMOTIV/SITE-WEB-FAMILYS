import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ChefHat, Smartphone, ArrowRight } from 'lucide-react';
import { burgers, reviews, whyChooseUs, restaurantInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXJnZXJ8ZW58MHx8fHwxNzYwNDQxMjc3fDA&ixlib=rb-4.1.0&q=85"
            alt="Hero Burger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full">
            <span className="text-red-500 text-sm font-semibold tracking-wide">🔥 LE FAMILY'S</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Le goût qui <br />
            <span className="text-red-500">rassemble</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Burgers artisanaux, tacos savoureux et desserts gourmands à Bourg-en-Bresse
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={restaurantInfo.orderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-red-600/50 transform hover:scale-105 transition-all duration-300">
                Commander maintenant
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <Link to="/menu">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300">
                Voir le menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bien plus qu'un restaurant, <br/>
                <span className="text-red-500">une vraie expérience conviviale</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-red-600 to-orange-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Un lieu spacieux et accueillant</h3>
                  <p className="text-white/90 leading-relaxed">
                    Avec ses 250 m² de salle chaleureusement décorée et une terrasse ensoleillée de 60 m², le Family's vous reçoit dans une ambiance détendue, idéale pour un déjeuner en semaine ou un dîner festif le week-end.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500 to-yellow-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Pensé pour petits et grands</h3>
                  <p className="text-white/90 leading-relaxed">
                    Notre restaurant dispose d'une aire de jeux sécurisée et ludique pour les enfants, pour leur plus grand bonheur… et votre tranquillité. Un espace familial où tout le monde se sent bien.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-500 to-red-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Cuisine variée et généreuse</h3>
                  <p className="text-white/90 leading-relaxed">
                    Plats maison, saveurs authentiques et portions généreuses sont la marque de fabrique du Family's. Ici, on se régale sans chichi, dans une ambiance conviviale où l'on se sent comme à la maison.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-500 to-pink-500 border-0 overflow-hidden group hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Sur place ou à la maison</h3>
                  <p className="text-white/90 leading-relaxed">
                    Commandez vos plats préférés en quelques clics et profitez de la cuisine du Family's où que vous soyez, avec la même qualité et la même générosité. Livraison rapide garantie !
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <a
                href={restaurantInfo.orderLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl shadow-red-600/50 transform hover:scale-105 transition-all duration-300">
                  Découvrir notre menu complet
                  <ArrowRight className="ml-3" size={24} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pourquoi choisir <span className="text-orange-400">Le Family's</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-orange-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/30">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon === 'chef-hat' && <ChefHat className="text-white" size={36} />}
                    {item.icon === 'clock' && <Clock className="text-white" size={36} />}
                    {item.icon === 'star' && <Star className="text-white" size={36} />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ce que disent nos <span className="text-orange-400">clients</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={28} />
                ))}
              </div>
              <span className="text-white text-2xl font-bold">4.8/5</span>
              <span className="text-gray-300">sur Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-12 text-center shadow-2xl">
            <Smartphone className="text-white mx-auto mb-6 drop-shadow-lg" size={56} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Téléchargez notre <span className="text-yellow-300">app</span>
            </h2>
            <p className="text-white text-xl mb-8 max-w-2xl mx-auto drop-shadow">
              Commandez plus rapidement et profitez d'offres exclusives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={restaurantInfo.appLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                📱 App Store
              </a>
              <a
                href={restaurantInfo.appLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                📱 Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;