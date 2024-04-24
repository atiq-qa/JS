// singleton object
// object literals declares singleton object, but when creating object with constractor its no more singleton


const mySym = Symbol("myKey1") //how to refer to this symbol in object

const JsUser = {
    name: "Atiq",
    "full name": "atiq niazai",
    age: 18,
    location: "kabul",
    email: "atiq@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey2"

}

//Object.freeze(JsUser)
//console.log(JsUser["full name"])
//console.log(JsUser.name)
//console.log(JsUser[mySym])

JsUser.greetings = function () {
    console.log("Hello JS User");
}


JsUser.greetingsTwo = function () {
    console.log("Hello Js User", '${this.name}');
}

console.log(JsUser.greetingsTwo())