// src/assets/assets.js

import kids from "./images/kids.jpg";
import men_clothes from "./images/men_clothes.jpg";
import women_clothes from "./images/women_clothes.jpg";
import accessories from "./images/accessories.jpg";

export const initial = [
  {
    title: "Men Clothes",
    count: 24,
    image: men_clothes,
  },
  {
    title: "Women Clothes",
    count: 12,
    image: women_clothes,
  },
  {
    title: "Kids Wear",
    count: 18,
    image: kids, // ✅ local image
  },
  {
    title: "Accessories",
    count: 34,
    image: accessories,
  },
];
