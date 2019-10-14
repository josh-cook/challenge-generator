export default function getCurrentSeed() {
  const url = new URL(document.location);
  const urlSeed = url.searchParams.get("seed");
  
  if (urlSeed !== null) {
    return urlSeed;
  }
  
  const today = new Date();
  // Get today's midnight.
  today.setUTCHours(0, 0, 0, 0);

  return today.getTime();
}
