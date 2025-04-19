import burgerImg from "./assets/illus/burger-illus.jpg";
import hotdogImg from "./assets/illus/hot-dog-illus.png";
import pizzaImg from "./assets/illus/pizza-illus.jpg";
import sandwichImg from "./assets/illus/sandwich.jpeg";
import popcornImg from "./assets/illus/popcorn.jpg";
import burritoImg from "./assets/illus/burrito.png";

import roastBeef from "./assets/draft/roastbeef.jpg";
import tunaSalad from "./assets/draft/tunaSalad.jpg";
import salman from "./assets/draft/salman.jpeg";
import californiaRoll from "./assets/draft/california-roll.jpg";
import duck from "./assets/draft/duck.jpg";

import duckSalad from "./assets/foods/duck-salad.jpg";
import breakfastBoard from "./assets/foods/breakfast-board.jpg";
import hummus from "./assets/foods/hummus.jpg";
import roastBeefImg from "./assets/foods/roast-beef.jpeg";

export const categories = [
  {
    id: 1,
    img: burgerImg,
    categoryName: "burger",
  },
  {
    id: 2,
    img: hotdogImg,
    categoryName: "hot dog",
  },
  {
    id: 3,
    img: pizzaImg,
    categoryName: "pizza",
  },
  {
    id: 4,
    img: sandwichImg,
    categoryName: "sandwich",
  },
  {
    id: 5,
    img: popcornImg,
    categoryName: "popcorn",
  },
  {
    id: 6,
    img: burritoImg,
    categoryName: "burrito",
  },
];

export const draftContent = [
  {
    id: 1,
    img: roastBeef,
    title: "roast beef",
    desc: "lorem ipsum dolor sit.",
    price: "$12.00",
  },
  {
    id: 2,
    img: tunaSalad,
    title: "tuna salad",
    desc: "lorem ipsum dolor sit.",
    price: "$14.00",
  },
  {
    id: 3,
    img: salman,
    title: "salman",
    desc: "lorem ipsum dolor sit.",
    price: "$45.00",
  },
  {
    id: 4,
    img: californiaRoll,
    title: "california roll",
    desc: "lorem ipsum dolor sit.",
    price: "$22.00",
  },
  {
    id: 5,
    img: duck,
    title: "duck carpaccio",
    desc: "lorem ipsum dolor sit.",
    price: "$18.00",
  },
];

export const foodItems = [
  {
    id: 1,
    img: duckSalad,
    nameOfFood: "duck salad",
    desc: "description",
    price: "35.00 $",
  },
  {
    id: 2,
    img: breakfastBoard,
    nameOfFood: "breakfast board",
    desc: "description",
    price: "14.00 $",
  },
  {
    id: 3,
    img: hummus,
    nameOfFood: "hummus",
    desc: "description",
    price: "24.00 $",
  },
  {
    id: 4,
    img: roastBeefImg,
    nameOfFood: "roast beef",
    desc: "description",
    price: "17.50 $",
  },
];
