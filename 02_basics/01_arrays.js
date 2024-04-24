const myArray = [1, 2, 3, 4, 5]
const myHeros = ["Paw", "Marvels", "super heros"]

//console.log(myArray[0])
//console.log(myHeros[2])

// Array Methods

//console.log(myArray)
//myArray.push(8) //add value at the end of array
//console.log(myArray)
//myArray.pop() //remove the last element of array
//console.log(myArray)

//myArray.unshift(9) //inserts the element at the begining of the array and we don't need to shift the array index,
//console.log(myArray)
//myArray.shift() //removes the first element of array
//console.log(myArray)
//console.log(myArray[0])

//console.log(myArray.includes(3))

console.log("Original Array ", myArray)
const myn1 = myArray.slice(1, 3) //slice doesn't alter the original array
console.log("Slice the array: ",myn1)
console.log("After Slice ", myArray)
const myn2 = myArray.splice(1,3)
console.log("Splice the array: ", myn2)
console.log("After Splice ", myArray)