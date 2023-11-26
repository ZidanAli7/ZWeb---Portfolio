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

const body = document.getElementById('body');
const dropdn =  document.getElementById('dropdn');
const clr =  document.getElementById('clr');
const set =  document.getElementById('set');
const dropdnBtn = document.getElementById('dropdn-btn');
var themePic = document.getElementById('pic');
const themeColor = document.querySelector(':root')







  dropdnBtn.addEventListener('click', ()=>{
    dropdnBtn.style.transform = 'rotateZ(80deg)'
    set.style.borderBottomLeftRadius = '0';
    set.style.borderBottomRightRadius = '0';
    setTimeout(() => {
      dropdn.style.display = 'flex'
      clr.style.display = 'block'
    }, 400);
    
  })
  function change(){
    dropdn.style.display = 'none'
    clr.style.display = 'none'
    set.style.borderBottomLeftRadius = '30px';
    set.style.borderBottomRightRadius = '30px';
    dropdnBtn.style.transform = 'rotateZ(-90deg)'
    if(document.getElementById('theme').value === 'gojo'){
      themePic.src = 'img/SatoruGojoPNGImage.png';
      console.log('gojo')
      themeColor.style.setProperty('--main-bg-color', 'rgb(91, 9, 167)')
    }
    else if(document.getElementById('theme').value === 'zoro'){
      themePic.src = 'img/zoro.png';
      console.log('zoro')
      themeColor.style.setProperty('--main-bg-color', 'rgb(0, 135, 50)')
    }
  }
