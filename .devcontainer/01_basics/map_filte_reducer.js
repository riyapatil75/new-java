const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.filter((num) => {
    return num>4
}) //curly braces ke andar scope define hota hai aur return keyword likhna hi padta hai varna code run nhi hoga
console.log(newNums)
 

const Number = myNum
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter ((num) => num > 40)
                
console.log(Number);

// syntax for reduce
// reduce(function(accumulator,current value){any code},initial value)

const myTotal = myNum.reduce(function (acc, currval){
    console.log( `acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

const myNewTotal =myNum.reduce((acc,curr)=> acc+curr ,0)
console.log(myTotal);
console.log(myNewTotal);