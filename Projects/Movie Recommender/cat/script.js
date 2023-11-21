document.getElementById("cw1").addEventListener("click", () => {
  document.getElementById('card1').style.display = 'flex';
  document.getElementById('c1').style.display = 'flex';
  
  document.getElementById('card2').style.display = 'none';
  document.getElementById('c2').style.display = 'none';

});
document.getElementById("cw2").addEventListener("click", () => {
  document.getElementById('card2').style.display = 'flex';
  document.getElementById('c2').style.display = 'flex';

  document.getElementById('card1').style.display = 'none';
  document.getElementById('c1').style.display = 'none';
});
