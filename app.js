import createRandom from "random-seed";

const characters = [
  "Isaac",
  "Magdalene",
  "Cain",
  "???",
  "Eve",
  "Samson",
  "Azazel",
  "Lazarus",
  "Eden",
  "The Lost",
  "Lilith",
  "Keeper",
  "Apollyon"
];

const startingItems = [
  "Brimstone",
  "Chocolate Milk",
  "Soy Milk",
  "Moms Knife",
  "Book Of Revelations"
];

const colours = [
  "Red",
  "Blue",
  "Indigo",
  "Brown",
  "Orange",
  "Yellow",
  "Violet",
  "Green",
  "Olive"
];

const things = [
  "Bathtub",
  "Sink",
  "Table",
  "Fish",
  "Dog",
  "Cat",
  "Beaver",
  "Pistol",
  "Pen"
];

// Get a random element from the array based on the seed provided.
function getRandomWithSeed(array, seed, quantity = 1) {
  const random = createRandom(seed);
  const remaining = array.slice();
  const picked = [];

  for (let i = 0; i < quantity; i++) {
    const index = random(remaining.length);

    picked.push(remaining[index]);
    remaining.splice(index, 1);
  }

  return picked;
}

const today = new Date();

// Get today's midnight.
today.setUTCHours(0, 0, 0, 0);

const seed = today.getTime();

const playableCharacter = getRandomWithSeed(characters, seed);

const title = `${getRandomWithSeed(colours, seed)}
  ${playableCharacter}
  ${getRandomWithSeed(things, seed)}`;

document.getElementById("title").textContent = title;
document.getElementById("seed").textContent = seed;
document.getElementById("character").textContent = playableCharacter;
document.getElementById("startingItems").textContent = getRandomWithSeed(
  startingItems,
  seed,
  2
);
