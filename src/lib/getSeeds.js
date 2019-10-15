export function getURLSeed() {
  const url = new URL(document.location);
  const urlSeed = url.searchParams.get("seed");

  return urlSeed;
}

export function getDailySeed() {
  const today = new Date();
  // Get today's midnight.
  today.setUTCHours(0, 0, 0, 0);

  return today.getTime();
}
