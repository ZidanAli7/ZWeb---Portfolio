text = document.getElementById("ani")

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Marvel Shows";
  }, 0);
  setTimeout(() => {
    text.textContent = "Anime/Manga";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Bollywood Movies";
  }, 6000);
  setTimeout(() => {
    text.textContent = "Hollywood Movies";
  }, 9000);
  setTimeout(() => {
    text.textContent = "Animated Movies";
  }, 12000);
  setTimeout(() => {
    text.textContent = "Web-Series";
  }, 15000);
}
textLoad();
setInterval(textLoad, 18000);
