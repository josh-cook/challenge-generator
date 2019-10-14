export default function getCurrentSeed() 
{
  const today = new Date();
  // Get today's midnight.
  today.setUTCHours(0, 0, 0, 0);

  return today.getTime();
}