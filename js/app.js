import { getRandomWithSeed } from "./random";
import adjectives from "../json/adjectives.json";
import characters from "../json/characters.json";
import colours from "../json/colours.json";
import items from "../json/items.json";
import rooms from "../json/rooms.json";

const today = new Date();

// Get today's midnight.
today.setUTCHours(0, 0, 0, 0);

let seed = today.getTime();
const url = new URL(document.location);
const urlSeed = url.searchParams.get("seed");
let newUrl = "";

if (urlSeed !== null) {
  newUrl = "";
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
document.getElementById("generate-seed").addEventListener("click", function() {
  newUrl = `?seed=${generateANewSeed()}`;
  redirect(newUrl);
});

function generateANewSeed() {
  return 10 * Math.random();
}

function redirect(redirectUrl) {
  window.location.replace(redirectUrl);
}
