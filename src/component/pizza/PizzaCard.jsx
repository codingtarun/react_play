import Row from "react-bootstrap/Row";
import PrimaryHeading from "../typography/PrimaryHeading";
import Footer from "./Footer";
import PizzaInfo from "./PizzaInfo";

const pizzaList = [
  {
    name: "Margherita",
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
    price: 250,
    photoName: "margherita",
    soldOut: false,
  },
  {
    name: "Pepperoni",
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    price: 300,
    photoName: "pepperoni",
    soldOut: true,
  },
  {
    name: "BBQ Chicken",
    ingredients: ["BBQ Sauce", "Chicken", "Red Onions", "Cilantro"],
    price: 350,
    photoName: "bbq_chicken",
    soldOut: false,
  },
  {
    name: "Veggie",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Bell Peppers",
      "Olives",
      "Onions",
    ],
    price: 280,
    photoName: "veggie",
    soldOut: false,
  },
  {
    name: "Hawaiian",
    ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
    price: 320,
    photoName: "hawaiian",
    soldOut: true,
  },
  {
    name: "Meat Lovers",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Pepperoni",
      "Sausage",
      "Bacon",
      "Ham",
    ],
    price: 400,
    photoName: "meat_lovers",
    soldOut: false,
  },
  {
    name: "Four Cheese",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Cheddar",
      "Parmesan",
      "Blue Cheese",
    ],
    price: 350,
    photoName: "four_cheese",
    soldOut: true,
  },
];

export default function PizzaCard() {
  const pizzas = pizzaList;
  const pizzaNum = pizzas.length;

  return (
    <div className="border-bottom border-light border-2">
      <PrimaryHeading>The Pizza Club</PrimaryHeading>
      <Row>
        {/* {pizzaNum > 0 &&
          pizzaList.map((pizza) => (
            <PizzaInfo data={pizza} key={pizza.name}></PizzaInfo>
          ))} */}
        {pizzaNum > 0
          ? pizzaList.map((pizza) => (
              <PizzaInfo data={pizza} key={pizza.name}></PizzaInfo>
            ))
          : null}
      </Row>
      <Footer />
    </div>
  );
}
