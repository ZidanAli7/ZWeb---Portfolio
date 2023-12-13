e = [60, 10, 60, 20,];
es = e.sort();
max = parseInt(es.slice(-1));
let arr = []
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
      console.log(arr)
    }
  } else if (e.length === 4) {
    if (e[0] % i == 0 && e[1] % i == 0 && e[2] % i == 0 && e[3] % i == 0) {
      arr.push(i);
      arr.sort;
    }
  } else if (e.length === 5) {
    if (e[0] % i == 0 && e[1] % i == 0 && e[2] % i == 0 && e[3] % i == 0 && e[4] % i == 0 ) {
      arr.push(i);
      arr.sort;
    }
  }
}
string = arr.pop();
console.log(string)
