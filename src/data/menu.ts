export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Starters",
    items: [
      {
        name: "Causa Limeña",
        price: "14",
        description:
          "Mashed potato seasoned with lime and aji amarillo, stuffed with chicken salad.",
      },
      {
        name: "Alitas Anticucheras",
        price: "13",
        description: "Chicken wings marinated in anticuchero sauce.",
      },
      {
        name: "Classic Papa a la Huancaína",
        price: "13",
        description: "Boiled potatoes topped with aji amarillo cream sauce.",
      },
      {
        name: "Choritos a la Chalaca",
        price: "15",
        description: "Mussels topped with onion, tomato, and lime.",
      },
      {
        name: "Anticucho with Rachi",
        price: "17",
        description: "Beef heart skewers and grilled tripe.",
      },
      {
        name: "Empanadas",
        price: "4 ea",
        description: "Beef & cheese, rotisserie chicken, or chicken & cheese.",
      },
    ],
  },
  {
    title: "Soup",
    items: [
      {
        name: "Soup of the Day",
        price: "8",
        description: "Ask what's simmering today.",
      },
    ],
  },
  {
    title: "Ceviches",
    items: [
      {
        name: "GIGIs",
        price: "16",
        description:
          "Classic Peruvian ceviche with white fish, cilantro, lime, choclo, and sweet potato.",
      },
    ],
  },
  {
    title: "Salads",
    items: [
      {
        name: "Inca Salad",
        price: "15",
        description:
          "Quinoa, onions, tomato, cucumber, parsley, and chickpeas.",
      },
      {
        name: "Pacheco Salad",
        price: "14",
        description:
          "Lettuce, tomato, cucumber, beets, and radishes with olive oil and lemon.",
      },
    ],
  },
];

export const hours = "11am – 10pm · Everyday";
export const address = "87 Oak St, Westerly, RI";
export const phone = "(401) 388-8093";
export const phoneHref = "tel:+14013888093";
export const website = "www.pachecorotisserieri.com";
