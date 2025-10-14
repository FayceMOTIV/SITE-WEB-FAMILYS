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

      {/* Signature Burgers Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-red-500">incontournables</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez nos burgers signature, préparés avec passion et des ingrédients frais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {burgers.map((burger) => (
              <Card key={burger.id} className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{burger.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{burger.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-500 text-2xl font-bold">{burger.price}</span>
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transform group-hover:scale-105 transition-all duration-300">
                      Commander
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pourquoi choisir <span className="text-red-500">Le Family's</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.id} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    {item.icon === 'chef-hat' && <ChefHat className="text-red-500 group-hover:text-white" size={32} />}
                    {item.icon === 'clock' && <Clock className="text-red-500 group-hover:text-white" size={32} />}
                    {item.icon === 'star' && <Star className="text-red-500 group-hover:text-white" size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ce que disent nos <span className="text-red-500">clients</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-500 fill-yellow-500" size={24} />
                ))}
              </div>
              <span className="text-white text-xl font-semibold">4.8/5</span>
              <span className="text-gray-400">sur Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-500 fill-yellow-500" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-4">{review.text}</p>
                  <span className="text-gray-500 text-xs mt-2 block">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 rounded-2xl p-12 text-center">
            <Smartphone className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Téléchargez notre <span className="text-red-500">app</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Commandez plus rapidement et profitez d'offres exclusives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={restaurantInfo.appLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                App Store
              </a>
              <a
                href={restaurantInfo.appLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;