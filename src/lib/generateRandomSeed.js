export default function generateRandomSeed() {
  const r = Math.random()
    .toString(36)
    .substring(7);
  const rand = Math.floor(999 * Math.random());
  return `${r}${rand}`;
}
