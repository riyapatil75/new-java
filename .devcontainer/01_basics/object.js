//object literals 

const mySym =Symbol("key1")
const JsUser = {
    [mySym] :"mysymbol",
    name: "Hitesh",
    "full name" : "Hitesh choudhary",
    age: 20,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays :["Monday" ,"Saturday"]
}


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])// cannot access using dot operator because it include spaces


console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

// edit objects
JsUser.email = "hitesh@chatgpt.com";
//Object.freeze(JsUser)
JsUser.email = "hitesh.com";
console.log(JsUser)

JsUser.greetings = function () {
    console.log("Hello JS user")
}
JsUser.greetingsTwo = function () {
    console.log(`Hello JS user ${this.name}`)
}
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())