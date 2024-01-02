function openpdf() {
  window.open("other/WatchListZ.pdf");
}
function nothing() {
  alert("Not Working!😅");
  document.getElementById("search-bar").value = "";
}
const add = document.getElementsByClassName("add");
Object.keys(localStorage).forEach((element) => {
  Array.from(add).forEach((e) => {
    let a =
      e.parentElement.parentElement.parentElement.querySelector(
        "span"
      ).innerHTML;
    a1 = a.split(". ");
    if (a1[1] === element) {
      e.src = "other/heart-red.svg";
    }
  });
});

Array.from(add).forEach((e) => {
  e.addEventListener("click", () => {
    namesOfMovies = Object.keys(localStorage);
    n1 =
      e.parentElement.parentElement.parentElement.querySelector(
        "span"
      ).innerHTML;
    n2 = n1.split(". ");
    names = namesOfMovies.indexOf(n2[1]);
      if (names != -1 && window.confirm("Do You Really want to remove this show from FavList?") === true) {
      e.src = "other/heart-transparent.svg";
      let t =
        e.parentElement.parentElement.parentElement.querySelector(
          "span"
        ).innerHTML;
      title = t.split(". ");
      localStorage.removeItem(title[1]);
    } else {
      e.src = "other/heart-red.svg";
      a1 =
        e.parentElement.parentElement.parentElement.querySelector(
          "span"
        ).innerHTML;
      a2 = a1.split(". ");
      imgSrc =
        e.parentElement.parentElement.parentElement.parentElement.querySelector(
          "img"
        ).src;
      desc =
        e.parentElement.parentElement.parentElement.querySelector(
          "p"
        ).innerHTML;
      rating =
        e.parentElement.parentElement.lastElementChild.lastElementChild
          .innerHTML;
      type =
        e.parentElement.parentElement.querySelector(".type-d").lastElementChild
          .innerHTML;
      title = a2[1];
      newFavMovie = {
        title: title,
        src: imgSrc,
        desc: desc,
        rating: rating,
        type: type,
      };
      newFavMovieString = JSON.stringify(newFavMovie);
      localStorage.setItem(title, newFavMovieString);
    }
  });
});
