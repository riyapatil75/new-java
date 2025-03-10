const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async function is complete");
        resolve();

    }, 1000)
})//promise create hua hai to use consume bhi krna padega isliye .then use krte hai 

promiseOne.then(function () {
    console.log("Promise consumed")
})//resolve and .then are connected ,promise ki value return ki jati hai .then me 



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async2 is completed");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

PromiseThree.then(function (user) {
    console.log(user);
})//function ke parameter se function ka data consume kr skte hai

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive()

async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()           
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
    getAllUsers()
    
    // fetch('https://api.github.com/users/hiteshchoudhary')
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => console.log(error))
    