document.querySelector(".action-c").firstElementChild.style.display = "none";
document.querySelector(".action-c").firstElementChild.classList.add("firstBtn");

if (localStorage.getItem("arrayObj") != null) {
  let titles = JSON.parse(localStorage.getItem("arrayObj")).titles;
  let types = JSON.parse(localStorage.getItem("arrayObj")).types;
  titles.forEach((e) => {
    let newElemS = document.createElement("span");
    let newElemTitle = document.createElement("span");
    let newElemAction = document.createElement("button");
    newElemTitle.innerHTML = e;
    document.querySelector(".title-c").appendChild(newElemTitle);

    if (document.querySelector(".S-no").firstElementChild === null) {
      newElemS.innerHTML = 1;
      document.querySelector(".S-no").appendChild(newElemS);
      document.querySelector(".firstBtn").style.display = "block";
    } else {
      newElemS.innerHTML =
        parseInt(document.querySelector(".S-no").lastChild.innerHTML) + 1;
      document.querySelector(".S-no").appendChild(newElemS);
      let newbtn = document.createElement("img");
      newbtn.classList.add("img-d");
      newbtn.classList.add("btnx");
      newbtn.classList.add("remove");
      newbtn.src = "other/delete-svgrepo-com (1).svg";
      document.querySelector(".action-c").appendChild(newbtn);
    }
  });

  types.forEach((e) => {
    let newElemType = document.createElement("span");
    newElemType.innerHTML = e;
    document.querySelector(".type-c").appendChild(newElemType);
  });
}

let titleArr = [];
let typeArr = [];

document.getElementById("add").addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let type = document.getElementById("type").value;
  if (localStorage.getItem("arrayObj") === null) {
    titleArr.push(title);
    typeArr.push(type);
    let arrayObj = { titles: titleArr, types: typeArr };
    let arrayObjStr = JSON.stringify(arrayObj);
    localStorage.setItem("arrayObj", arrayObjStr);
  } else {
    let element = JSON.parse(localStorage.getItem("arrayObj"));
    titleArr = element.titles;
    typeArr = element.types;
    titleArr.push(title);
    typeArr.push(type);
    let arrayObj = { titles: titleArr, types: typeArr };
    let arrayObjStr = JSON.stringify(arrayObj);
    localStorage.removeItem("arrayObj");
    localStorage.setItem("arrayObj", arrayObjStr);
  }
  let newElemS = document.createElement("span");
  let newElemTitle = document.createElement("span");
  let newElemType = document.createElement("span");

  if (document.querySelector(".S-no").firstElementChild === null) {
    let ElemAction = document.querySelector(".action-c");
    newElemS.innerHTML = 1;
    document.querySelector(".S-no").appendChild(newElemS);
    ElemAction.firstElementChild.style.display = "block";
  } else {
    newElemS.innerHTML =
      parseInt(document.querySelector(".S-no").lastElementChild.innerHTML) + 1;
    document.querySelector(".S-no").appendChild(newElemS);
    let newbtn = document.createElement("img");
    newbtn.classList.add("img-d");
    newbtn.classList.add("btnx");
    newbtn.classList.add("remove");
    newbtn.src = "other/delete-svgrepo-com (1).svg";
    document.querySelector(".action-c").appendChild(newbtn);
  }
  document.querySelector(".title-c").appendChild(newElemTitle);
  document.querySelector(".type-c").appendChild(newElemType);
  newElemTitle.innerHTML = title;
  newElemType.innerHTML = type;
  reI();
});

let removeBtn = document.getElementsByClassName("remove");
Array.from(removeBtn).forEach((e) => {
  e.addEventListener("click", () => {
    var nodes = Array.prototype.slice.call(
      document.querySelector(".action-c").children
    );
    let i = nodes.indexOf(e);

    let element = JSON.parse(localStorage.getItem("arrayObj"));
    titleArr = element.titles;
    typeArr = element.types;
    index = titleArr.indexOf(
      document.querySelector(".title-c").querySelectorAll("span")[i].innerHTML
    );
    titleArr.splice(index, 1);
    typeArr.splice(index, 1);
    let arrayObj = { titles: titleArr, types: typeArr };
    let arrayObjStr = JSON.stringify(arrayObj);
    localStorage.removeItem("arrayObj");
    localStorage.setItem("arrayObj", arrayObjStr);

    document.querySelector(".title-c").querySelectorAll("span")[i].remove();
    document.querySelector(".type-c").querySelectorAll("span")[i].remove();
    document.querySelector(".action-c").querySelectorAll("img")[i].remove();
    document.querySelector(".S-no").querySelectorAll("span")[i].remove();

    if (
      document.querySelector(".action-c").firstElementChild !=
      document.querySelector(".action-c").lastElementChild
    ) {
      document
        .querySelector(".action-c")
        .firstElementChild.classList.add("firstBtn");
    }
    reI();
  });
});

function reI() {
  let a = document.querySelector(".S-no").children;
  let i = 1;
  Array.from(a).forEach((e) => {
      e.innerHTML = i;
      i++;
  });
}
reI();
function changeWidth() {
  if ((document.querySelector(".sidebar").style.width === "50px")) {
    document.querySelector(".sidebar").style.width = "225px";
    document.getElementById('container').style.width = '70vw'
    setTimeout(() => {
      let span = document.createElement('span')
      span.setAttribute('id', 'u-name')
      span.innerHTML = 'Zidan'
      document.querySelector(".top").appendChild(span);
      document.querySelector(".list").style.display = "flex";
      document.querySelector(".arrow").style.transform = "rotateZ(360deg)";
    }, 800);
  } else {
    document.querySelector(".sidebar").style.width = "50px";
    document.getElementById('container').style.width = '95vw'
    setTimeout(() => {
      document.querySelector(".top").querySelector("span").remove();
      document.querySelector(".list").style.display = "none";
      document.querySelector(".arrow").style.transform = "rotateZ(180deg)";
    }, 400);
  }
}
function underCon() {
  alert('Under Developement')
}
function clearStorage(){
  if (window.confirm('Do you really want to clear the list?') === true) {
    localStorage.removeItem('arrayObj')
    location.reload()
  }
}