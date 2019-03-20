import createRandom from "random-seed";
const items = require("./items.json");
const colours = require("./colours.json");
const adjectives = require("./adjectives.json");
const characters = require("./characters.json");

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

const title = `${getRandomWithSeed(adjectives, seed)}
  ${getRandomWithSeed(colours, seed)}
  ${playableCharacter}`;

document.getElementById("title").textContent = title;
document.getElementById("seed").textContent = seed;
document.getElementById("character").textContent = playableCharacter;
document.getElementById("startingItems").textContent = getRandomWithSeed(
  items,
  seed,
  2
);
