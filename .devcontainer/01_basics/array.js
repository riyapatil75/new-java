const num = [1, 2, 3, 4, 5]
console.log(num.at(1
))
const num2 = [4, 6, 7, 8, 9]
console.log(num.concat(num2));



//instead of concat, we use spread
const all_nums = [...num, ...num2]
console.log(all_nums)

console.log(Array.isArray('hitesh')) //check for array
console.log(Array.from('hitesh')) //converts array into string
console.log(Array.from({ name: "hitesh" })) //interesting (when console dont know what they have to convert into string either keys or values)

console.log(num.slice(0, 3))
console.log("num after slice : " + num)
arrnum = num.splice(0, 3)
console.log(arrnum)
console.log("num after splice : " +num)