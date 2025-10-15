import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950 pt-44 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          Mentions <span className="text-orange-400">Légales</span>
        </h1>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">PRÉSENTATION DU SITE</h2>
            <p className="text-gray-200 mb-4 leading-relaxed">
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
              il est précisé aux utilisateurs du site <strong className="text-orange-300">lefamilysbourg.com</strong> l'identité 
              des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <div className="space-y-2 text-gray-200">
              <p><strong className="text-orange-300">Propriétaire :</strong> Le Family's</p>
              <p><strong className="text-orange-300">Responsable publication :</strong> Faiçal KRIOUAR</p>
              <p><strong className="text-orange-300">SIREN :</strong> 828706754</p>
              <p><strong className="text-orange-300">Adresse :</strong> 59 rue du 14 juillet 1789, 01000 Bourg-en-Bresse</p>
              <p><strong className="text-orange-300">RCS :</strong> Bourg-en-Bresse B 828 706 754</p>
              <p><strong className="text-orange-300">Email :</strong> lefamilys01@gmail.com</p>
              <p><strong className="text-orange-300">Téléphone :</strong> 04 74 52 60 82</p>
              <p><strong className="text-orange-300">Hébergeur :</strong> OVH</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">OBJET</h2>
            <p className="text-gray-200 leading-relaxed">
              La présente notice a pour objet de définir les modalités selon lesquelles Le Family's met à la 
              disposition des internautes son site internet et les conditions selon lesquelles les internautes 
              accèdent et utilisent ce site internet. Toute connexion au Site est subordonnée au respect de la 
              présente notice légale que Le Family's se réserve de modifier ou de mettre à jour à tout moment.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">INFORMATIONS D'ORDRE TECHNIQUE</h2>
            <p className="text-gray-200 leading-relaxed">
              Vous reconnaissez disposer de la compétence et des moyens nécessaires pour accéder à ce Site et 
              l'utiliser, et avoir vérifié que la configuration informatique utilisée ne contient aucun virus et 
              qu'elle est en parfait état de fonctionnement. Le présent site est accessible 24 heures sur 24 et 
              7 jours sur 7, à l'exception des cas de force majeure, difficultés informatiques, difficultés liées 
              à la structure des réseaux de communications ou difficultés techniques. Pour des raisons de 
              maintenance, Le Family's pourra interrompre le site et s'efforcera de vous en avertir préalablement.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">DROITS DE PROPRIÉTÉ INTELLECTUELLE</h2>
            <p className="text-gray-200 leading-relaxed">
              Les contenus (notamment données, bandes-son, informations, illustrations, logos, marques, etc.) qui 
              apparaissent ou sont disponibles sur ce site, sont protégés au titre du droit d'auteur et autres 
              droits de propriété intellectuelle et sont la propriété exclusive de leurs éditeurs respectifs. 
              Toute copie, reproduction, représentation, adaptation, altération, modification, diffusion, intégrale 
              ou partielle, du contenu du site par quelque procédé que ce soit, est illicite à l'exception d'une 
              unique copie, sur un seul ordinateur et réservée à l'usage exclusivement privé du copiste.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">LIMITATION DE RESPONSABILITÉ</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Les documents et informations diffusés sur ce site sont fournis « en l'état » sans aucune garantie 
              expresse ou tacite de quelque sorte que ce soit. Le Family's se réserve le droit de modifier ou de 
              corriger le contenu de son site à tout moment, sans préavis.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Le Family's ne pourra être tenu pour responsable en cas de contamination des matériels informatiques 
              des internautes résultant de la propagation d'un virus ou autre infection informatique. Les photographies 
              et les textes reproduits sur le site le sont à titre purement indicatif et ne sauraient avoir une valeur 
              contractuelle. La responsabilité de Le Family's ne saurait être engagée si une erreur s'est glissée dans 
              l'une de ces photographies ou l'un de ces textes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">INFORMATIQUE ET LIBERTÉS</h2>
            <p className="text-gray-200 leading-relaxed">
              Le Family's dispose de moyens informatiques destinés à gérer plus facilement les commandes et la 
              promotion des produits. Les informations enregistrées sont réservées à l'usage du traitement des 
              commandes et à la promotion et ne peuvent être communiquées qu'aux destinataires suivants : 
              59 rue du 14 juillet 1789, 01000 Bourg-en-Bresse.
            </p>
            <p className="text-gray-200 leading-relaxed mt-4">
              Conformément aux articles 39 et suivants de la loi n° 78-17 du 6 janvier 1978 modifiée en 2004 
              relative à l'informatique, aux fichiers et aux libertés, toute personne peut obtenir communication et, 
              le cas échéant, rectification ou suppression des informations la concernant, en s'adressant au service 
              client de Le Family's, siège social : 59 rue du 14 juillet 1789, 01000 Bourg-en-Bresse, 
              inscrite au RCS de Bourg-en-Bresse B 828 706 754.
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

export default MentionsLegales;
