export default function copyToClipboard(text) {
  const newElement = document.createElement("input");
  
  document.body.appendChild(newElement);
  newElement.value = text;
  newElement.select();
  document.execCommand("copy");
  document.body.removeChild(newElement);
}