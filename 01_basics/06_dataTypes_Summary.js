// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const sym2 = Symbol("foo");

console.log(sym2)

const bigNumber = 3242094092384032840n;


//Reference (Non Primitive)
//3 Types: Array, Objects, Funcitons

const heros = ["paw petro", "super heros", "star wars"] //array
let obj = {name: "atiq", age: 23, city: "kabul"}


const myfunct = function ()
{
	console.log("Hello World");
}