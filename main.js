const cardsDiv = document.getElementById("cards");

const itemsArray = [
  {
    id: "classicBear",
    image: "images/classic.jpg",
    name: "Classic Teddy Bear",
    description: "A traditional brown bear. Must have!",
    price: "15",
  },
  {
    id: "avocado",
    image: "images/avocado.jpg",
    name: "Avocado Teddy",
    description: "A unique and fun avocado teddy!",
    price: "10",
  },
  {
    id: "knittedBear",
    image: "images/knitted.jpg",
    name: "Knitted Teddy Bear",
    description: "A lovely delicate hand knitted bear.",
    price: "20",
  },
  {
    id: "loveBear",
    image: "images/love.jpg",
    name: "Love Bear",
    description: "A beautiful bear holding a love heart.",
    price: "16",
  },
  {
    id: "monkey",
    image: "images/monkey.jpg",
    name: "Monkey Teddy",
    description: "A cheeky monkey for your cheeky monkey!",
    price: "14",
  },
  {
    id: "pikachu",
    image: "images/pikachu.jpg",
    name: "Pikachu",
    description: "Pikachu Teddy for those Pokemon lovers.",
    price: "25",
  },
  {
    id: "rabbit",
    image: "images/rabbit.jpg",
    name: "Stuffed Rabbit",
    description: "A cute little stuffed bunny rabbit!",
    price: "15",
  },
  {
    id: "tortoise",
    image: "images/tortoise.jpg",
    name: "Tortoise Teddy",
    description: "The most adorable Tortoise for those sea animal lovers.",
    price: "16",
  },
];

const basket = [];

const generateCards = () => {
  return (cardsDiv.innerHTML = itemsArray
    .map((item) => {
      const { id, image, name, description, price } = item;
      return `      <div class="item">
    <img width="219" height="150" src=${image} alt=${name} />
    <div class="details">
      <h3>${name}</h3>
      <p>${description}</p>
      <div class="price-quantity">
        <h2>£${price}</h2>
        <div class="buttons">
          <i class="bi bi-dash-lg" id="${id}"></i>
          <div class="quantity">0</div>
          <i class="bi bi-plus-lg" id="${id}"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

document.onload = generateCards();

const increaseItemQuantity = () => {
  const id = event.target.id;

  const inBasket = basket.find((item) => item.id === id);

  if (inBasket === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    inBasket.item += 1;
  }
  console.log(basket);
};

const decreaseItemQuantity = () => {
  const id = event.target.id;

  const inBasket = basket.find((item) => item.id === id);

  if (inBasket === undefined) {
    return;
  } else if (inBasket.item != 0) {
    inBasket.item -= 1;
  } else return;

  console.log(basket);
};

const updateItemQuantity = () => {};

const increaseButton = document
  .querySelectorAll(".bi-plus-lg")
  .forEach((button) => button.addEventListener("click", increaseItemQuantity));

const decreaseButton = document
  .querySelectorAll(".bi-dash-lg")
  .forEach((button) => button.addEventListener("click", decreaseItemQuantity));
