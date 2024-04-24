const marvels_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvels_heros.push(dc_heros) //pushes the array in another array as an element of that array.
//console.log(marvels_heros)

//let concat_array = marvels_heros.concat(dc_heros) //this is the proper way of concatenating two or more arrays.
//console.log(concat_array)

//let spread_array = [...marvels_heros, ...dc_heros] //spreading all arrays as individual elements and put them back in single array.
//console.log(spread_array)

//let nested_array = [1, 2, 3, 4, [3, 2], 5, [7, 9, 6, [8, 9], 90]]
//console.log(nested_array)

//let real_new_array = nested_array.flat(1)
//let real_new_array_1 = nested_array.flat(Infinity)
//console.log(real_new_array)
//console.log(real_new_array_1)


const fname = "Atiq"

console.log(Array.from(fname))
console.log(Array.isArray(fname))

let score1 = 344
let score2 = 200
let score3 = 500

console.log(Array.of(score1,score2, score3))
