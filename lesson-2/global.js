// global object
// console.log(global);

setTimeout(() => {
  console.log("testing");
  clearInterval(int);
}, 3000);

int = setInterval(() => {
  console.log("interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
