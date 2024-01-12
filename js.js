class Hamburger {
  constructor(size, ingredients, condiments) {
    this.size = size;
    this.ingredients = ingredients;
    this.condiments = condiments;
    this.calories = 0;
  }
  static sizeSmall = {
    price: 50,
    calories: 20,
  };
  static sizeBig = {
    price: 100,
    calories: 40,
  };
  static toppingCheese = {
    name: "Cheese",
    price: 10,
    calories: 20,
  };
  static toppingLettuce = {
    name: "Lettuce",
    price: 20,
    calories: 5,
  };
  static toppingPotato = {
    name: "Potato",
    price: 15,
    calories: 10,
  };
  static condimentsSeasoning = {
    name: "Tomato sauce",
    price: 15,
    calories: 0,
  };
  static condimentsMayonnaise = {
    name: "Mayonnaise",
    price: 20,
    calories: 5,
  };

  addTopping(ingredient) {
    this.ingredients.push(ingredient);
  }
  addCondiment(condiment) {
    this.condiments.push(condiment);
  }
  calculatePrice() {
    const basePrice = this.size.price;
    const ingredientPrice = this.ingredients.reduce(
      (totalPrice, ingredient) => totalPrice + ingredient.price,
      0
    );
    const condimentsPrice = this.condiments.reduce(
      (totalPrice, condiment) => totalPrice + condiment.price,
      0
    );
    return basePrice + ingredientPrice + condimentsPrice;
  }
  calculateCalories() {
    const baseCalories = this.size.calories;
    const ingredientCalories = this.ingredients.reduce(
      (totalCalories, ingredient) => totalCalories + ingredient.calories,
      0
    );
    const condimentCalories = this.condiments.reduce(
      (totalCalories, condiment) => totalCalories + condiment.calories,
      0
    );
    return baseCalories + ingredientCalories + condimentCalories;
  }
}
let sizeBurger = "";
do {
  sizeBurger =
    confirm(`A big hamburger?`) === true
      ? Hamburger.sizeBig
      : confirm(`A little hamburger??`) === true
      ? Hamburger.sizeSmall
      : null;
} while (!sizeBurger);

let ingredients = null;
do {
  ingredients =
    confirm(`Add cheese?`) === true
      ? Hamburger.toppingCheese
      : confirm(`Add lettuce leaves?`) === true
      ? Hamburger.toppingLettuce
      : confirm(`Add potatoes?`) === true
      ? Hamburger.toppingPotato
      : null;
} while (!ingredients);

let condiment = null;
while (true) {
  if (confirm(`Add tomato sauce?`) === true) {
    condiment = Hamburger.condimentsSeasoning;
    break;
  }
  if (confirm(`Add mayonnaise?`) === true) {
    condiment = Hamburger.condimentsMayonnaise;
    break;
  }
}

const hamburger = new Hamburger(sizeBurger, [ingredients], [condiment]);
const main = document.getElementById("main");
const ingredientName = hamburger.ingredients.map(
  (ingredient) => ingredient.name
);
const condimentName = hamburger.condiments.map((condiment) => condiment.name);
main.innerHTML =
  `Price: ${hamburger.calculatePrice()} UAH <br>` +
  `Calories: ${hamburger.calculateCalories()} ccal <br>` +
  `Burger size: ${
    hamburger.size === Hamburger.sizeBig ? "Big" : "Little"
  }<br>` +
  `Ingrediens:${ingredientName.join(", ")} <br>` +
  `Sauces : ${condimentName.join(", ")}`;

// // добавка з майонезу
// hamburger.addTopping(Hamburger.condimentsMayonnaise);

// запитаємо скільки там калорій
// console.log(`Calories: + ${hamburger.calculateCalories()}`);

// скільки коштує
// console.log(`Price: + ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger.toppingLettuce);

// А скільки тепер коштує?
// console.log(`Price with sauce: + ${hamburger.calculatePrice()}`);

//______________________________________________

// великий гамбургер з листям салату
// let hamburgerBig = new Hamburger(Hamburger.sizeBig, Hamburger.toppingLettuce);

// // добавка приправ та майонезу
// hamburgerBig.addCondiments(
//   Hamburger.condimentsSeasoning,
//   Hamburger.condimentsMayonnaise
// );

// скільки коштує та кількість калорій
// console.log(
//   `Великий гамбургер з салатом,майонезом,приправами Price: + ${hamburgerBig.calculatePrice()} Calories: + ${hamburgerBig.calculateCalories()}`
// );
