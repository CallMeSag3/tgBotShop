import pizzaImg from "../images/pizza.png";
import waterImg from "../images/water.png";
import cocaImg from "../images/coca.png";
import kebabImg from "../images/kebab.png";
import burgerImg from "../images/burger.png";
import iceCreamImg from "../images/icecream.png";
import saladImg from "../images/salad.png";

export function getData() {
  return [
    { title: "Pizza", price: 17, Image: pizzaImg, id: 1 },
    { title: "Water", price: 2, Image: waterImg, id: 2 },
    { title: "Coca-Cola", price: 3, Image: cocaImg, id: 3 },
    { title: "Kebab", price: 10, Image: kebabImg, id: 4 },
    { title: "Burger", price: 8, Image: burgerImg, id: 5 },
    { title: "Ice Cream", price: 5, Image: iceCreamImg, id: 6 },
    { title: "Salad", price: 7, Image: saladImg, id: 7 },
  ];
}
