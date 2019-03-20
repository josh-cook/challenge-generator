import { getRandomWithSeed } from "./random";
const items = require("./json/items.json");
const colours = require("./json/colours.json");
const adjectives = require("./json/adjectives.json");
const characters = require("./json/characters.json");

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
  3
);
