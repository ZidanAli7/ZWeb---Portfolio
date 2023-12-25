function openpdf() {
  window.open("other/WatchListZ.pdf");
}

const add = document.getElementsByClassName("add");
Array.from(add).forEach((e) => {
  e.addEventListener("click", () => {
    e.src = "other/dragon.png";
    a1 =
      e.parentElement.parentElement.parentElement.querySelector(
        "span"
      ).innerHTML;
    // localStorage.setItem('title', e.parentElement.parentElement.parentElement.querySelector('span').innerHTML)
    // a = JSON.stringify(e.parentElement.parentElement.parentElement.parentElement)
    a2 = a1.split(". ");
    imgSrc = e.parentElement.parentElement.parentElement.parentElement.querySelector('img').src;
    title = a2[1];
    newFavMovie = {title:title, src:imgSrc}
    newFavMovieString = JSON.stringify(newFavMovie)
    localStorage.setItem(title, newFavMovieString)
    // console.log(newFavMovieString)
  });
});
