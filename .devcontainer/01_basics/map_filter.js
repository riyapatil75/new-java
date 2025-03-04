const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.filter((num) => {
    return num>4
}) //curly braces ke andar scope define hota hai aur return keyword likhna hi padta hai varna code run nhi hoga
console.log(newNums)


