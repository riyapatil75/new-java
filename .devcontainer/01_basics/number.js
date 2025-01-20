console.log(2 + 2);
console.log(Number("123") === 123)


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//number to string
const balance = 100
console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 123.8796
console.log(otherNumber.toPrecision(3)); //it will print upto 3 digits

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

//+++++++++++MATHS++++++++++

console.log(Math);
console.log(Math.round(4.6));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,7,2,9));
console.log(Math.max(4, 5, 6, 2, 4, 8));



console.log(Math.random()); //0 and 1 ke bich me print karega 
console.log((Math.random()*10)+1); //number will be always greater than 1


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  ///10 is replaced by max-min+1 to keep the number in range 
//and 1 is replaces by min to get the number above min value