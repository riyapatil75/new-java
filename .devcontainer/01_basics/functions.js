function loginUserMessage(username="sameer") {
    if (!username) {
        console.log("please enter the username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))


//shopping cart
function calculateCarPrice(...num1) {
    return num1
}

console.log(calculateCarPrice(200, 400, 6000))

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyUser) {
   console.log( `username is ${anyUser.username} and price is ${anyUser.price} `)

}
//handleObject(user)
handleObject({
    username: "sam",
    price:399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
