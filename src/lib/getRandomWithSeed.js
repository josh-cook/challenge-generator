import createRandom from "random-seed";

// Get a random element from the array based on the seed provided.
export default function getRandomWithSeed(array, seed, quantity = 1) {
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
