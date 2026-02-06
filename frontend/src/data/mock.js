// Mock data for Le Family's restaurant

export const burgers = [
  {
    id: 1,
    name: "Le King",
    description: "Notre burger signature avec double steak haché, cheddar affiné, bacon croustillant, oignons caramélisés et sauce maison",
    price: "12.90€",
    image: "/images/hero-burger.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Smaan",
    description: "Burger gourmand avec steak mariné, fromage raclette fondu, champignons frais et sauce barbecue fumée",
    price: "11.90€",
    image: "/images/bg-burger-3.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Le Chicken Crispy",
    description: "Poulet pané croustillant, salade fraîche, tomates, oignons rouges et sauce caesar crémeuse",
    price: "10.50€",
    image: "/images/bg-burger-2.jpg",
    featured: true
  },
  {
    id: 4,
    name: "Le Veggie Deluxe",
    description: "Steak végétal grillé, avocat, tomates confites, roquette et sauce au basilic",
    price: "10.90€",
    image: "/images/bg-burger-1.jpg",
    featured: true
  }
];

export const menuCategories = [
  {
    id: 1,
    name: "Burgers",
    items: [
      { name: "Le King", description: "Double steak, cheddar, bacon, oignons caramélisés", price: "12.90€" },
      { name: "Smaan", description: "Steak mariné, raclette, champignons, sauce BBQ", price: "11.90€" },
      { name: "Le Chicken Crispy", description: "Poulet pané, salade, sauce caesar", price: "10.50€" },
      { name: "Le Veggie Deluxe", description: "Steak végétal, avocat, tomates confites", price: "10.90€" },
      { name: "Le Cheese", description: "Steak, triple cheddar, cornichons, sauce signature", price: "9.90€" },
      { name: "Le Bacon", description: "Steak, bacon croustillant, oignons frits, sauce BBQ", price: "11.50€" }
    ]
  },
  {
    id: 2,
    name: "Tacos",
    items: [
      { name: "Tacos Viande", description: "Viande hachée, frites, fromage, sauce", price: "9.50€" },
      { name: "Tacos Poulet", description: "Poulet mariné, frites, fromage, sauce", price: "9.50€" },
      { name: "Tacos Mixte", description: "Viande et poulet, frites, fromage, sauce", price: "10.50€" },
      { name: "Tacos XXL", description: "Double viande au choix, frites, fromage, sauce", price: "13.90€" }
    ]
  },
  {
    id: 3,
    name: "Accompagnements",
    items: [
      { name: "Frites classiques", description: "Frites fraîches croustillantes", price: "3.50€" },
      { name: "Frites cheddar bacon", description: "Frites avec cheddar fondu et bacon", price: "5.90€" },
      { name: "Onion rings", description: "Rondelles d'oignons panées", price: "4.50€" },
      { name: "Nuggets (6 pièces)", description: "Nuggets de poulet croustillants", price: "5.50€" }
    ]
  },
  {
    id: 4,
    name: "Desserts",
    items: [
      { name: "Brownie chocolat", description: "Brownie fondant au chocolat noir", price: "4.50€" },
      { name: "Muffin", description: "Muffin aux pépites de chocolat", price: "3.90€" },
      { name: "Cookie", description: "Cookie maison aux pépites", price: "2.90€" },
      { name: "Tiramisu", description: "Tiramisu maison", price: "4.90€" }
    ]
  },
  {
    id: 5,
    name: "Boissons",
    items: [
      { name: "Coca-Cola", description: "33cl", price: "2.50€" },
      { name: "Coca-Cola Zero", description: "33cl", price: "2.50€" },
      { name: "Fanta Orange", description: "33cl", price: "2.50€" },
      { name: "Sprite", description: "33cl", price: "2.50€" },
      { name: "Ice Tea", description: "33cl", price: "2.50€" },
      { name: "Eau minérale", description: "50cl", price: "2.00€" }
    ]
  }
];

export const reviews = [
  {
    id: 1,
    name: "nail turko",
    rating: 5,
    date: "Il y a 5 mois",
    text: "Un vrai coup de cœur à chaque visite ! L'accueil est chaleureux, les serveurs et les cuisiniers sont d'une gentillesse rare. Les plats sont savoureux, généreux et toujours bien présentés. L'aire de jeux pour enfants est exceptionnelle !",
    avatar: "NT"
  },
  {
    id: 2,
    name: "Hanane Zee",
    rating: 5,
    date: "Il y a 5 mois",
    text: "Très bon snack familial. Le lieu est propre et accueillant. Le personnel est souriant et professionnel. La qualité des menus est bonne à un prix raisonnable.",
    avatar: "HZ"
  },
  {
    id: 3,
    name: "Sarah",
    rating: 5,
    date: "Il y a 5 mois",
    text: "Très bon tacos.. tout était ok commande reçu rapidement. Je recommande vivement !",
    avatar: "S"
  },
  {
    id: 4,
    name: "LHT Charkaoui",
    rating: 5,
    date: "Il y a 4 mois",
    text: "Chaque fois c'est un plaisir. Service impeccable et burgers délicieux !",
    avatar: "LC"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Produits frais",
    description: "Ingrédients sélectionnés avec soin, préparés chaque jour",
    icon: "chef-hat"
  },
  {
    id: 2,
    title: "Service rapide",
    description: "Commande prête en quelques minutes, sans compromis sur la qualité",
    icon: "clock"
  },
  {
    id: 3,
    title: "4.3★ sur Google",
    description: "Des centaines d'avis clients satisfaits et fidèles",
    icon: "star"
  }
];

export const restaurantInfo = {
  name: "LE FAMILY'S",
  tagline: "Le goût qui rassemble",
  address: "59 RUE DU 14 JUILLET 1789, 01000 BOURG EN BRESSE, FRANCE",
  phone: "04 74 52 60 82",
  email: "lefamilys01@gmail.com",
  hours: [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", hours: "11:30–14:00, 18:00–00:00" },
    { day: "Mercredi", hours: "11:30–14:00, 18:00–00:00" },
    { day: "Jeudi", hours: "11:30–14:00, 18:00–00:00" },
    { day: "Vendredi", hours: "11:30–14:00, 18:00–00:00" },
    { day: "Samedi", hours: "11:30–14:00, 18:00–00:00" },
    { day: "Dimanche", hours: "11:30–14:00, 18:00–00:00" }
  ],
  socialMedia: {
    instagram: "https://www.instagram.com/lefamilys/",
    facebook: "https://www.facebook.com/lefamilys"
  },
  orderLink: "https://familys.commandes.io/home/places",
  uberEatsLink: "https://www.ubereats.com/store/familys/MSxg-IKzTW6v-bjwfUgDcg?utm_source=menu-maker",
  appLinks: {
    ios: "https://apps.apple.com/fr/app/family-s-bourg-en-bresse/id6504155113",
    android: "https://play.google.com/store/apps/details?id=fr.mizzup.familys"
  }
};