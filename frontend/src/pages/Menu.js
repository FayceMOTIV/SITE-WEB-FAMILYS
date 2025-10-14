import React, { useState } from 'react';
import { menuCategories, restaurantInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Notre <span className="text-red-500">Menu</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de burgers, tacos, accompagnements et desserts préparés avec passion
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentCategory?.items.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-red-500 text-xl font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à commander ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Passez votre commande en ligne et venez la récupérer ou profitez de notre service de livraison
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Menu;