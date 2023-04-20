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
          <i onclick="decreaseItemQuantity()" class="bi bi-dash-lg"></i>
          <div class="quantity">0</div>
          <i onclick="increaseItemQuantity()" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

const increaseItemQuantity = () => {
  console.log("increase");
};

const decreaseItemQuantity = () => {
  console.log("decrease");
};

const updateItemQuantity = () => {};

document.onload = generateCards();
