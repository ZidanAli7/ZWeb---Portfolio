clearCal();

// Variables

const dropdn = document.getElementsByClassName("dropdn");
const box = document.querySelectorAll("box");
const sq = document.getElementById("sq");
let lIn = document.getElementsByClassName("r-l-in");
let bIn = document.getElementsByClassName("r-b-in");
const content = document.getElementById("content");
const lMeasure = document.getElementById("l-measure").value;
const bMeasure = document.getElementById("b-measure").value;
const In = document.getElementById("in");

// Functions

function changeIn() {
  let l = document.getElementById("length").value;
  let b = document.getElementById("breadth").value;
  content.style.display = "block";
  Array.from(lIn).forEach((element) => {
    element.innerHTML =
      document.getElementById("length").value +
      " " +
      document.getElementById("l-measure").value;
  });
  Array.from(bIn).forEach((element) => {
    element.innerHTML =
      document.getElementById("breadth").value +
      " " +
      document.getElementById("b-measure").value;
  });
  document.getElementById("ra-answer").innerHTML =
    eval(l * b) + document.getElementById("b-measure").value + "²";
  document.getElementById("rp-answer").innerHTML =
    eval(2 * (parseInt(l) + parseInt(b))) +
    document.getElementById("b-measure").value;
}
function LCM() {
  let i = document.getElementById("input").innerHTML;
  a = i.split(",");
  let n = 1;
  if (document.getElementById("input").innerHTML.search(",") != -1) {
    while (true) {
      if (a.length === 3) {
        if (n % a[0] == 0 && n % a[1] == 0 && n % a[2] == 0) {
          string = n;
          document.getElementById("input").innerHTML = string;
          break;
        }
      } else if (a.length === 2) {
        if (n % a[0] == 0 && n % a[1] == 0) {
          string = n;
          document.getElementById("input").innerHTML = string;
          break;
        }
      } else if (a.length === 4) {
        if (n % a[0] == 0 && n % a[1] == 0 && n % a[2] == 0 && n % a[3] == 0) {
          string = n;
          document.getElementById("input").innerHTML = string;
          break;
        }
      } else if (a.length === 5) {
        if (
          n % a[0] == 0 &&
          n % a[1] == 0 &&
          n % a[2] == 0 &&
          n % a[3] == 0 &&
          n % a[4] == 0
        ) {
          string = n;
          document.getElementById("input").innerHTML = string;
          break;
        }
      }
      n++;
    }
  }
}

function HCF() {
  let i = document.getElementById("input").innerHTML;
  e = i.split(",");
  es = e.sort();
  max = parseInt(es.slice(-1));
  let arr = [];
  for (let i = 1; i < max; i++) {
    if (e.length === 3) {
      if (e[0] % i == 0 && e[1] % i == 0 && e[2] % i == 0) {
        arr.push(i);
        arr.sort;
      }
    } else if (e.length === 2) {
      if (e[0] % i == 0 && e[1] % i == 0) {
        arr.push(i);
        arr.sort;
      }
    } else if (e.length === 4) {
      if (e[0] % i == 0 && e[1] % i == 0 && e[2] % i == 0 && e[3] % i == 0) {
        arr.push(i);
        arr.sort;
      }
    } else if (e.length === 5) {
      if (
        e[0] % i == 0 &&
        e[1] % i == 0 &&
        e[2] % i == 0 &&
        e[3] % i == 0 &&
        e[4] % i == 0
      ) {
        arr.push(i);
        arr.sort;
      }
    }
  }
  string = arr.pop();
  document.getElementById("input").innerHTML = string;
}

function reClearCal() {
  Array.from(document.getElementsByClassName("button")).forEach((e) => {
    e.classList.add("low-op");
  });
  document.getElementById("ham").classList.add("low-op");
  document.getElementById("divI").classList.add("low-op");
  document.getElementById("h1-main").classList.add("low-op");
  document.getElementById("ui").style.display = "block";
  document.getElementById("clear-ui").style.display = "block";
  document.getElementById("clear").classList.replace("low-op", "btnhov");
  document.getElementById("run").style.display = "none";
  document.getElementById("skip").style.display = "block";
}
function clearCal() {
  document.getElementById("clear-ui").style.display = "block";
  document.getElementById("clear").classList.replace("low-op", "btnhov");
}

function sqrtUI() {
  document.getElementById("skip").style.display = "none";
  document.getElementById("clear-ui").style.display = "none";
  document.getElementById("clear").classList.replace("btnhov", "low-op");
  document.getElementById("sqrt-ui").style.display = "block";
  document.getElementById("sqrt").classList.replace("low-op", "btnhov");
}

function powerUI() {
  document.getElementById("sqrt-ui").style.display = "none";
  document.getElementById("sqrt").classList.replace("btnhov", "low-op");
  document.getElementById("power-ui").style.display = "block";
  document.getElementById("p").classList.replace("low-op", "btnhov");
}

function lcmUI() {
  document.getElementById("power-ui").style.display = "none";
  document.getElementById("p").classList.replace("btnhov", "low-op");
  document.getElementById("lcm-ui").style.display = "block";
  document.getElementById("lcm").classList.replace("low-op", "btnhov");
}
function hcfUI() {
  document.getElementById("lcm-ui").style.display = "none";
  document.getElementById("lcm").classList.replace("btnhov", "low-op");
  document.getElementById("hcf-ui").style.display = "block";
  document.getElementById("hcf").classList.replace("low-op", "btnhov");
}
function backUI() {
  document.getElementById("hcf-ui").style.display = "none";
  document.getElementById("hcf").classList.replace("btnhov", "low-op");
  document.getElementById("back-ui").style.display = "block";
  document.getElementById("back").classList.replace("low-op", "btnhov");
}
function sqUI() {
  document.getElementById("back-ui").style.display = "none";
  document.getElementById("back").classList.replace("btnhov", "low-op");
  document.getElementById("sq-ui").style.display = "block";
  document.getElementById("sq").classList.replace("low-op", "btnhov");
}
function cubeUI() {
  document.getElementById("sq-ui").style.display = "none";
  document.getElementById("sq").classList.replace("btnhov", "low-op");
  document.getElementById("cube-ui").style.display = "block";
  document.getElementById("cube").classList.replace("low-op", "btnhov");
}
function closeUI() {
  document.getElementById("cube-ui").style.display = "none";
  document.getElementById("cube").classList.replace("btnhov", "low-op");
  Array.from(document.getElementsByClassName("button")).forEach((e) => {
    e.classList.remove("low-op");
  });
  document.getElementById("ham").classList.remove("low-op");
  document.getElementById("divI").classList.remove("low-op");
  document.getElementById("h1-main").classList.remove("low-op");
  document.getElementById("clear-ui").style.display = "none";
  document.getElementById("ui").style.display = "none";
  document.getElementById("skip").style.display = "none";
  document.getElementById("run").style.display = "block";
  document.getElementById("clear").classList.remove("btnhov");
}
// Function End

// Logics --->
// Buttons (Start)

let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "xⁿ") {
      if (document.getElementById("input").innerHTML.search("p") != -1) {
        document.getElementById("ans").click();
      } else {
        string = string + "p";
        document.getElementById("input").innerHTML = string;
      }
    } else if (e.target.innerHTML == "=") {
      if (document.getElementById("input").innerHTML.search("p") != -1) {
        let q = document.getElementById("input").innerHTML;
        let s = q.split("p");
        let string = s[0] ** s[1];
        document.getElementById("input").innerHTML = string;
      } else {
        string = eval(string);
        document.getElementById("input").innerHTML = string;
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.getElementById("input").innerHTML = string;
    } else if (e.target.innerHTML == "x²") {
      let z = document.getElementById("input").innerHTML;
      string = z * z;
      document.getElementById("input").innerHTML = string;
    } else if (e.target.innerHTML == "x³") {
      let z = document.getElementById("input").innerHTML;
      string = z * z * z;
      document.getElementById("input").innerHTML = string;
    } else if (e.target.innerHTML == "x") {
      string = string + "*";
      document.getElementById("input").innerHTML = string;
    } else if (e.target.innerHTML == "LCM") {
      LCM();
    } else if (e.target.innerHTML == "HCF") {
      HCF();
    } else if (e.target.innerHTML == "←") {
      let a = document.getElementById("input").innerHTML;
      string = a.slice(0, -1);
      document.getElementById("input").innerHTML = string;
    } else if (e.target.innerHTML == "√") {
      let a = document.getElementById("input").innerHTML;
      z = eval(a);
      if (z === undefined || z === 0) {
      } else {
        string = Math.sqrt(z);
        document.getElementById("input").innerHTML = string;
      }
    } else {
      string = string + e.target.innerHTML;
      document.getElementById("input").innerHTML = string;
    }
  });
});

// Buttons (End)
// Keys
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("ans").click();
  } else if (e.key === "q") {
    document.getElementById("clear").click();
  } else if (e.key === "Tab") {
    document.getElementById("clear").click();
  } else if (e.key === "p") {
    document.getElementById("p").click();
  } else if (e.key === "Backspace") {
    let a = document.getElementById("input").innerHTML;
    string = a.slice(0, -1);
    document.getElementById("input").innerHTML = string;
  } else if (e.key === "Alt") {
    // Do Nothing
  } else if (e.key === "Shift") {
    // Do Nothing
  } else if (e.key === "Control") {
    // Do Nothing
  } else if (document.getElementById("input").innerHTML === "") {
    string = e.key;
    document.getElementById("input").innerHTML = string;
  } else {
    string = e.key;
    string = document.getElementById("input").innerHTML + string;
    document.getElementById("input").innerHTML = string;
  }
});
// Keys End

// Animation
// Dropdown Animation
Array.from(dropdn).forEach((element) => {
  element.addEventListener("click", () => {
    if (element.style.transform === "rotateZ(90deg)") {
      element.style.transform = "rotateZ(0deg)";
      setTimeout(() => {
        In.style.display = "none";
        document.getElementById("other").style.display = "none";
        document.getElementById("content").style.display = "none";
        document.getElementById("length").value = null;
        document.getElementById("breadth").value = null;
      }, 500);
    } else {
      element.style.transform = "rotateZ(90deg)";
      setTimeout(() => {
        In.style.display = "flex";
        document.getElementById("other").style.display = "block";
      }, 500);
    }
  });
});

// Sliding Button
document.getElementById("choose").addEventListener("click", () => {
  if (document.getElementById("AnP").style.display === "none") {
    document.getElementById("round").style.left = "5px";
    setTimeout(() => {
      document.getElementById("AnP").style.display = "flex";
      document.getElementById("VnS").style.display = "none";
    }, 600);
  } else {
    document.getElementById("round").style.left = "53px";
    setTimeout(() => {
      document.getElementById("AnP").style.display = "none";
      document.getElementById("VnS").style.display = "flex";
    }, 600);
  }
});

// Hamburger Animation
document.getElementById("ham").addEventListener("click", () => {
  if (document.getElementById("choice").style.display === "flex") {
    document.getElementById("AnP").style.display = "none";
    document.getElementById("choice").style.display = "none";
  } else {
    alert("Under Construction");
    document.getElementById("AnP").style.display = "flex";
    document.getElementById("choice").style.display = "flex";
  }
});
// Animation (End)
