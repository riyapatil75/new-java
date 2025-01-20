const newstring = "Hello"
console.log(newstring)
const string1 = new String("A string object")
console.log(string1)
console.log(typeof string1)
console.log("cat".charAt(1));
console.log("cat"[1]);

const a = 10;
const b = 20;
if (a < b) {
    console.log(`${a} is less than ${b}`)
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a}is eqaul to ${b}`)
}


str1 = "riya";
str2 = "RIYA";
function areEqual(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqual);
console.log(areEqual(str1, str2));

const s1 = "2+2";
const s2 = new String("2+2")
console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.valueOf()));