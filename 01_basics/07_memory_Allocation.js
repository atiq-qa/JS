// Memory allocation is of two types,Stack and Heap

// All primitive data types use stack memory, and stack memory is accessed by value.
// All non-primitive data types use heap memory, and heap memory is accessed by reference.

/* ************** Stack Example ************** */

let myYoutubeName = "atiqyoutubechannel"
let anothername = myYoutubeName
anothername = "atiqnewchannel"

console.log(myYoutubeName)
console.log(anothername)


/* ************** Heap Example ************** */

let userOne =
{
    email: "userOne@gmail.com",
    username: "userOne"
}
//console.log("I am user One: " + userOne.email)

let userTwo = userOne;
userTwo.email = "userTwo@gmail.com"
console.log("I am user One: " + userOne.email)
console.log("I am user Two: " + userTwo.email)