let myDate = new Date()

//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//let myCreatedDate = new Date(2023, 0, 23, 3, 5)
//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("01-23-2024")
console.log(myCreatedDate.toLocaleDateString())


let myTimeStamp = Date.now();
console.log(myTimeStamp)

let newDate = new Date()
console.log(newDate.toLocaleString('default', { weekday: "long" }))

