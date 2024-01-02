check()

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
    themeColor.style.setProperty("--main-bg-color", "#512B81");
    themeColor.style.setProperty("--card-bg-color", "#6d35acaa");
    document.querySelector('nav').style.backgroundColor = '#3e1e65'
  } else if (document.getElementById("theme").value === "zoro") {
    themePic.src = "img/zoro.png";
    themeColor.style.setProperty("--main-bg-color", "rgb(0, 135, 50)");
    themeColor.style.setProperty("--card-bg-color", "#48ac61aa");
    document.querySelector('nav').style.backgroundColor = 'rgb(10, 110, 47)'
  }
}
document.getElementById("ham").addEventListener("click", () => {
  if (document.getElementById("ham-menu").style.display === "block") {
    document.getElementById("ham-menu").style.display = "none";
    Array.from(document.getElementsByClassName("line")).forEach((e) => {
      e.style.backgroundColor = "white";
    });
  } else {
    document.getElementById("ham-menu").style.display = "block";
    Array.from(document.getElementsByClassName("line")).forEach((e) => {
      e.style.backgroundColor = "black";
    });
  }
});

document.querySelectorAll(".wrap1")[0].addEventListener("click", () => {
  // window.open("Projects/ToDownload/index.html");
  alert('Under Construction')
});
document.querySelectorAll(".wrap2")[0].addEventListener("click", () => {
  window.open("Projects/Movie Recommender/index.html");
});
document.querySelectorAll(".wrap5")[0].addEventListener("click", () => {
  window.open("Projects/Calculator.html");
});
document.querySelectorAll(".wrap6")[0].addEventListener("click", () => {
  window.open("Projects/sgame.html");
});
document.querySelectorAll(".wrap1")[1].addEventListener("click", () => {
  window.open("Projects/ToDownload/index.html");
});
document.querySelectorAll(".wrap2")[1].addEventListener("click", () => {
  window.open("Projects/Movie Recommender/index.html");
});
document.querySelectorAll(".wrap5")[1].addEventListener("click", () => {
  window.open("Projects/Calculator.html");
});
document.querySelectorAll(".wrap6")[1].addEventListener("click", () => {
  window.open("Projects/sgame.html");
});


document.getElementById("wrap3").addEventListener("click", () => {
  window.open("Projects/Clock.html");
});
document.getElementById("wrap4").addEventListener("click", () => {
  window.open("Projects/CTimer.html");
});


function scrollToProjects() {
  scrollTo({
    top: 900,
    behavior: "smooth"
  })
  document.querySelector('.projects').classList.add('glow')
  setTimeout(() => {
    document.querySelector('.projects').classList.remove('glow') 
  }, 2200);
}
function scrollToContacts() {
  scrollTo({
    top: 1400,
    behavior: "smooth"
  })
  document.querySelector('.contact').classList.add('glowx')
  setTimeout(() => {
    document.querySelector('.contact').classList.remove('glowx') 
  }, 2200);
}

function check() {
  if(localStorage.getItem('contact') != null){
    scrollToContacts()
    localStorage.removeItem('contact')
  }
  else if(localStorage.getItem('projects') != null){
    scrollToProjects()
    localStorage.removeItem('projects')
  }
}