let user = {
    id : 'jamsuham',
    pw : '1234'
    name : '잠수함',
    age : 30,
};

let {id, ...rest} = user;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);