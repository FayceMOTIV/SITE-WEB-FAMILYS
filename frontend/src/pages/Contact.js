import React from 'react';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950 pt-32 md:pt-40 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 px-2">
            Nous <span className="text-orange-400">contacter</span>
          </h1>
          <p className="text-base sm:text-lg text-orange-100 max-w-2xl mx-auto px-4">
            Venez nous rendre visite ou contactez-nous pour toute question
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">Adresse</h3>
                    <p className="text-gray-400">{restaurantInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">Téléphone</h3>
                    <a
                      href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-lg font-semibold"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">Email</h3>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-red-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xl mb-4">Horaires d'ouverture</h3>
                    <div className="space-y-2">
                      {restaurantInfo.hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400">{schedule.day}</span>
                          <span className={schedule.hours === "Fermé" ? "text-red-500 font-semibold" : "text-white"}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <CardContent className="p-0 h-full">
              <iframe
                title="Le Family's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.8645234!2d5.224877!3d46.203333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b96f9e1c3a123%3A0x1234567890abcdef!2s59%20Rue%20du%2014%20Juillet%201789%2C%2001000%20Bourg-en-Bresse%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
                className="w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>

        {/* Restaurant Image */}
        <Card className="bg-gray-800 border-gray-700 overflow-hidden">
          <CardContent className="p-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/restaurant-interior.webp`}
              alt="Le Family's Restaurant"
              className="w-full h-96 object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;