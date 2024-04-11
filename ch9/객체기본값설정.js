let user = {
    name : '잠수함',
    age : 30,
};

let {id = 'guest', pw = '1234', name, age} = user;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);