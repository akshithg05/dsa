password = "ferf3e34";
const check4 = password.length >= 8;
const check1 = /[a-z]/.test(password);
const check2 = /[A-Z]/.test(password);
const check3 = /[0-9]/.test(password);

console.log(check1);
console.log(check2);
console.log(check3);
console.log(check4);

console.log(check1 + check2 + check3 + check4);
