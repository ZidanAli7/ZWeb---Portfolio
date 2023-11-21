text = document.getElementById("ani")

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Video Editor";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Movie Watcher";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Graphic Designer";
  }, 12000);
  setTimeout(() => {
    text.textContent = "Anime Watcher";
  }, 16000);
}
textLoad();
setInterval(textLoad, 20000);


