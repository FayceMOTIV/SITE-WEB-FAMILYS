import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const CGV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950 pt-32 md:pt-40 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          Conditions Générales de Vente
        </h1>

        <div className="mb-8 text-center">
          <p className="text-orange-400 text-lg font-semibold">Le Family's</p>
          <p className="text-gray-300">59 rue du 14 juillet 1789, 01000 Bourg-en-Bresse</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 1 - OBJET</h2>
            <p className="text-gray-200 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              Le Family's, restaurant situé au 59 rue du 14 juillet 1789, 01000 Bourg-en-Bresse, et tout client 
              effectuant un achat ou une commande de produits alimentaires sur place, en ligne ou via les 
              plateformes de livraison partenaires.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 2 - PRODUITS ET SERVICES</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Le Family's propose à la vente des produits de restauration rapide, notamment :
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
              <li>Burgers artisanaux</li>
              <li>Tacos</li>
              <li>Accompagnements (frites, nuggets, onion rings, etc.)</li>
              <li>Desserts</li>
              <li>Boissons</li>
            </ul>
            <p className="text-gray-200 leading-relaxed mt-4">
              Les photographies présentées sur le site et en restaurant sont non contractuelles. Tous nos produits 
              sont préparés sur place avec des ingrédients frais.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 3 - PRIX</h2>
            <p className="text-gray-200 leading-relaxed">
              Les prix sont indiqués en euros TTC. Le Family's se réserve le droit de modifier ses prix à tout 
              moment. Les prix applicables sont ceux en vigueur au moment de la commande. Pour les commandes en 
              livraison via des plateformes partenaires (Uber Eats), des frais de livraison supplémentaires 
              peuvent s'appliquer selon les conditions de la plateforme.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 4 - COMMANDE</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Les commandes peuvent être passées :
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
              <li>Sur place au restaurant</li>
              <li>Par téléphone au 04 74 52 60 82</li>
              <li>En ligne via notre site de commande</li>
              <li>Via notre application mobile</li>
              <li>Via les plateformes de livraison partenaires (Uber Eats)</li>
            </ul>
            <p className="text-gray-200 leading-relaxed mt-4">
              Toute commande implique l'acceptation sans réserve des présentes CGV.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 5 - PAIEMENT</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Le règlement peut s'effectuer :
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
              <li>En espèces</li>
              <li>Par carte bancaire</li>
              <li>Par chèque</li>
              <li>Tickets restaurant (selon réglementation en vigueur)</li>
            </ul>
            <p className="text-gray-200 leading-relaxed mt-4">
              Pour les commandes en ligne, le paiement est effectué au moment de la commande via un système 
              de paiement sécurisé.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 6 - LIVRAISON ET RETRAIT</h2>
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-orange-300">Sur place :</strong> Les commandes sont servies immédiatement 
              ou dans les meilleurs délais selon l'affluence.
            </p>
            <p className="text-gray-200 leading-relaxed mt-2">
              <strong className="text-orange-300">À emporter :</strong> Les commandes à emporter sont préparées 
              dans un délai de 10 à 20 minutes selon l'affluence.
            </p>
            <p className="text-gray-200 leading-relaxed mt-2">
              <strong className="text-orange-300">Livraison :</strong> Les livraisons sont assurées par nos 
              partenaires (Uber Eats). Les délais et conditions de livraison sont ceux indiqués par la plateforme.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 7 - DROIT DE RÉTRACTATION</h2>
            <p className="text-gray-200 leading-relaxed">
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être 
              exercé pour les contrats de fourniture de biens susceptibles de se détériorer ou de se périmer 
              rapidement. Les produits de restauration entrent dans cette catégorie. Par conséquent, aucun droit 
              de rétractation ne peut être exercé.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 8 - RÉCLAMATIONS</h2>
            <p className="text-gray-200 leading-relaxed">
              En cas de problème concernant votre commande (produit manquant, erreur, non-conformité), nous vous 
              invitons à nous contacter immédiatement :
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4 mt-4">
              <li>Par téléphone : 04 74 52 60 82</li>
              <li>Par email : lefamilys01@gmail.com</li>
              <li>Sur place au restaurant</li>
            </ul>
            <p className="text-gray-200 leading-relaxed mt-4">
              Nous nous engageons à traiter votre réclamation dans les meilleurs délais et à trouver une solution 
              satisfaisante.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 9 - HYGIÈNE ET SÉCURITÉ ALIMENTAIRE</h2>
            <p className="text-gray-200 leading-relaxed">
              Le Family's s'engage à respecter toutes les normes d'hygiène et de sécurité alimentaire en vigueur. 
              Nos équipes sont formées aux bonnes pratiques d'hygiène. Si vous avez des allergies ou des intolérances 
              alimentaires, merci de nous en informer avant de passer commande.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ARTICLE 10 - DONNÉES PERSONNELLES</h2>
            <p className="text-gray-200 leading-relaxed">
              Les données personnelles collectées lors de la commande sont utilisées uniquement pour le traitement 
              de celle-ci et ne sont en aucun cas cédées à des tiers. Conformément au RGPD, vous disposez d'un 
              droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous 
              à lefamilys01@gmail.com.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-300 text-sm">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGV;
