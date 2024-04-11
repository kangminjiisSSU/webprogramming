const color = ['red', 'green', 'blue'];
let [r, g, b] = color;

[b, g, r] = [r, g, b];
console.log(r);
console.log(g);
console.log(b);