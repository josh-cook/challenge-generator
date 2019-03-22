import { getRandomWithSeed } from "./random";
import items from "../json/items.json";
import colours from "../json/colours.json";
import adjectives from "../json/adjectives.json";
import characters from "../json/characters.json";

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
)
  .map(items => `C${items.id} ${items.name}`)
  .join(", ");
