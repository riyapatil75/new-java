//objects singleton
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


//objects under objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            fisrtname:"sameer",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userFullName.fisrtname)

//merging two objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

obj3 = { obj1, obj2 }
console.log(obj3)
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5)
obj4 = { ...obj1, ...obj2 }
console.log(obj4)


//objects under array

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    }
]
console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    corse: "js_in_hindi",
    price: "free",
    courseInstrusctor: "riya"
}
course.courseInstrusctor
const { courseInstrusctor: instructor } = course
console.log(instructor);
