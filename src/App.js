import React from "react";
import "./App.css";
import Header from "./Pages/Header";
import Body from "./Pages/Body";

import Footer from "./Pages/Footer";
function App() {
    const recipeslist = [
    {
     author: "Jim",
      name: "Chicken Pizza",
      description: "Delicious Pizza Pizza Pizza Chicken Pizza Chicken Pizza Chicken Pizza Chicken Pizza Chicken PizzaChicken Pizza",
      image: "https://livespring.org/img/pizza1.png",
      ingredient: "chicken,souce,etc",
    },
    {
      author: "Aravind",
      name: "Beef Pizza",
      description: "Juicy burger with toppings and a soft bun  toppings and a soft bun  toppings and a soft bun  toppings and a soft bun",
      image: "https://livespring.org/img/pizza2.png",
      ingredient: "beef,shirmp,etc",
    },
    {
      author: "Pane",
      name: "Cheez Pizaa",
      description: "Hot Dog burger with toppings and a soft bun  toppings and a soft bun  toppings and a soft bun  toppings and a soft bun",
      image: "https://livespring.org/img/pizza3.png",
      ingredient: "Cheez,souce,yogert",
    },
    {
      author: "Jhonson",
      name: "Vegitable Pizaa",
      description: "Hot Dog burger with toppings and a soft bun and a soft bun and a soft bun and a soft bun and a soft bun and a soft bun",
      image: "https://livespring.org/img/pizza4.png",
      ingredient: "Vegitable,souce,yogert",
    }
  ]
  return (
    <div>
      <Header />
      <Body  list={recipeslist} />
      <Footer/>
      
    </div>
  );
}

export default App;