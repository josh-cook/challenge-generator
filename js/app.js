import { getRandomWithSeed } from "./random";
import items from "../json/items.json";
import colours from "../json/colours.json";
import adjectives from "../json/adjectives.json";
import characters from "../json/characters.json";
import rooms from "../json/rooms.json";

const today = new Date();

// Get today's midnight.
today.setUTCHours(0, 0, 0, 0);

let seed = today.getTime();
const url = new URL(document.location);
const urlSeed = url.searchParams.get("seed");

if (urlSeed !== null) {
  seed = urlSeed;
}

const [playableCharacter] = getRandomWithSeed(characters, seed);
const [endingRoom] = getRandomWithSeed(rooms, seed);
const [colour] = getRandomWithSeed(colours, seed);

document.getElementById("title-adjective").textContent = getRandomWithSeed(
  adjectives,
  seed
);

const titleColourElement = document.getElementById("title-colour");

titleColourElement.style.color = colour.hex;
titleColourElement.textContent = colour.name;

document.getElementById("title-character").textContent = playableCharacter;
document.getElementById("seed").textContent = seed;
document.getElementById("character").textContent = playableCharacter;
document.getElementById("starting-items").textContent = getRandomWithSeed(
  items,
  seed,
  3
)
  .map(items => `C${items.id} ${items.name}`)
  .join(", ");
document.getElementById("end-room").textContent = endingRoom;
