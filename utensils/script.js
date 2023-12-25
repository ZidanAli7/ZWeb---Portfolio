const text = document.getElementsByClassName("ani");
Array.from(text).forEach((e) => {
  const textLoad = () => {
    setTimeout(() => {
      e.textContent = "Video Editor";
    }, 0);
    setTimeout(() => {
      e.textContent = "Web Developer";
    }, 4000);
    setTimeout(() => {
      e.textContent = "Movie Watcher";
    }, 8000);
    setTimeout(() => {
      e.textContent = "Anime Watcher";
    }, 12000);
    setTimeout(() => {
      e.textContent = "Graphic Designer";
    }, 16000);
  };
  textLoad();
  setInterval(textLoad, 20000);
});
console.log(text);

const body = document.getElementById("body");
const dropdn = document.getElementById("dropdn");
const clr = document.getElementById("clr");
const set = document.getElementById("set");
const dropdnBtn = document.getElementsByClassName("dropdn-btn");
var themePic = document.getElementById("pic");
const themeColor = document.querySelector(":root");

Array.from(dropdnBtn).forEach((e) => {
  e.addEventListener("click", () => {
    if (document.getElementById("dropdn").style.display === "flex") {
      e.style.transform = "rotateZ(-90deg)";
      set.style.borderBottomLeftRadius = "30px";
      set.style.borderBottomRightRadius = "30px";
      dropdn.style.display = "none";
      clr.style.display = "none";
    } else {
      e.style.transform = "rotateZ(90deg)";
      set.style.borderBottomLeftRadius = "0";
      set.style.borderBottomRightRadius = "0";
      setTimeout(() => {
        dropdn.style.display = "flex";
        clr.style.display = "block";
      }, 400);
    }
  });
});
function change() {
  dropdn.style.display = "none";
  clr.style.display = "none";
  set.style.borderBottomLeftRadius = "30px";
  set.style.borderBottomRightRadius = "30px";
  Array.from(dropdnBtn).forEach((e) => {
    e.style.transform = "rotateZ(-90deg)";
  });
  if (document.getElementById("theme").value === "gojo") {
    themePic.src = "img/SatoruGojoPNGImage.png";
    console.log("gojo");
    themeColor.style.setProperty("--main-bg-color", "rgb(91, 9, 167)");
  } else if (document.getElementById("theme").value === "zoro") {
    themePic.src = "img/zoro.png";
    console.log("zoro");
    themeColor.style.setProperty("--main-bg-color", "rgb(0, 135, 50)");
  }
}
document.getElementById("ham").addEventListener("click", () => {
  if (document.getElementById("ham-menu").style.display === "block") {
    console.log("close");
    document.getElementById("ham-menu").style.display = "none";
    Array.from(document.getElementsByClassName("line")).forEach((e) => {
      e.style.backgroundColor = "white";
    });
  } else {
    console.log("open");
    document.getElementById("ham-menu").style.display = "block";
    Array.from(document.getElementsByClassName("line")).forEach((e) => {
      e.style.backgroundColor = "black";
    });
  }
});
