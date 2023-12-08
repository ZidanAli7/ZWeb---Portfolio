function LCM() {
  let i = document.getElementById("input").innerHTML;
  element = i.split(",");
  let n = 1;
  if (document.getElementById("input").innerHTML.search(",") != -1) {
    while (true) {
      if (n % element[0] == 0 && n % element[1] == 0) {
        document.getElementById("input").innerHTML = n;
        break;
      }
      n++;
    }
  }
}






let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "p") {
      if (document.getElementById("input").innerHTML.search("p") != -1) {
        let q = document.getElementById("input").innerHTML;
        let s = q.split("p");
        let sup = s[0] ** s[1];
        document.getElementById("input").innerHTML = sup;
        console.log(s);
      } else {
        string = string + "p";
        document.getElementById("input").innerHTML = string;
      }
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      document.getElementById("input").innerHTML = string;
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
    }
     else if (e.target.innerHTML == "x") {
      string = string + "*";
      document.getElementById("input").innerHTML = string;
    } 
    else if (e.target.innerHTML == "LCM") {
      LCM();
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.getElementById("input").innerHTML = string;
    }
  });
});

const dropdn = document.getElementsByClassName("dropdn");
const box = document.querySelectorAll("box");
const sq = document.getElementById("sq");
let lIn = document.getElementsByClassName("r-l-in");
let bIn = document.getElementsByClassName("r-b-in");
const content = document.getElementById("content");
const lMeasure = document.getElementById("l-measure").value;
const bMeasure = document.getElementById("b-measure").value;
const In = document.getElementById("in");

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

function changeIn() {
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
  document.getElementById("r-answer").innerHTML = eval(
    document.getElementById("length").value *
      document.getElementById("breadth").value
  );
}

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

// Keys

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    ans = eval(string);
    document.getElementById("input").innerHTML = ans;
    console.log(ans);
  } else if (e.key === "q") {
    document.getElementById("clear").click();
  } else if (e.key === "Delete") {
    document.getElementById("clear").click();
  } else if (document.getElementById("input").innerHTML === "") {
    string = e.key;
    document.getElementById("input").innerHTML = string;
  } else if (e.key === "p") {
    document.getElementById("p").click();
  } else {
    string = e.key;
    string = document.getElementById("input").innerHTML + string;
    document.getElementById("input").innerHTML = string;
  }
});

document.getElementById("ham").addEventListener("click", () => {
  if (document.getElementById("choice").style.display === "flex") {
    document.getElementById("AnP").style.display = "none";
    document.getElementById("choice").style.display = "none";
    console.log("none");
  } else {
    document.getElementById("AnP").style.display = "flex";
    document.getElementById("choice").style.display = "flex";
    console.log("flex");
  }
});


