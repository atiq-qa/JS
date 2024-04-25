const obj1 = { 1: "One", 2: "Two", 3: "Three" }
const obj2 = { 4: "Four", 5: "Five", 6: "Six" }

const obj3 = Object.assign({}, obj1, obj2)

//console.log(obj3)

const obj4 = { ...obj1, ...obj2 }
//console.log(obj4)

const users = [
    {
        id: 1,
        name: "Atiq"
    },
    {
        email: "atiq@gmail.com",
    },
    {
        location: "Kabul"
    }
]


// Object de-stracture

//console.log(users[1].email)

//console.log(Object.keys(obj1))
//console.log(Object.values(obj1))
//console.log(obj1.hasOwnProperty('1'))


const course = {
    coursename: "JS basics",
    price: "900",
    courseInstractor: "Hitish"
}

const { coursename } = course
//console.log(coursename)
const { courseInstractor: Instractor } = course

console.log(Instractor)

//JSON format is almost same like objects without the name
{
    "id": 12
    "Name": "atiq"
    "age": 34
}