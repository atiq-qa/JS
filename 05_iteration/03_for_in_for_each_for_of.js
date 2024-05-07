// for of
//const arr = [1, 2, 3, 4, 5, 7, 6]

//for (var num of arr) {
//    console.log(num)

//}
//const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//for (var day of week) {
//    console.log(day)
//}

//const str = "Hello World"
//for (var chare of str) {
//    console.log(chare)
//}

//const map = new Map()
//map.set('VA', "Virginia")
//map.set('MD', "MaryLand")
//map.set('D.C', "District of Comlumbia")
//map.set('NJ', "New Jersy")

////console.log(map)

//for (const [key, value] of map) {
//    if (key == "VA") {
//        console.log(value)
//    }
//}

//const myObj = {
//    game1: "Vice city",
//    game2: "GTA"
//}

//for (const [key, value] of myObj) { //object is not iterable
//    console.log(key)
//}


const myObj1 = {
    js: "JavaScript",
    cpp: "c++",
    swift: "swift by apple"
}

//for in loop
//for (var key in myObj1) {
//    console.log(key)

//}

//for (var key in myObj1) {
//    console.log(`${key} for ${myObj1[key]}`)

//}

//const arr1 = [1, 2, 3, 54, 7, 8, 3]

//for (var key in arr1) {
//    console.log(arr1[key])

//}


const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//week.forEach( function(item) {  //regular function in forEach loop
//    console.log(item)

//})

//week.forEach((item) => { //arrow function in forEach loop
//    console.log(item)
//})


//function printMe(item) {
//    console.log(item)
//}

//week.forEach(printMe) //calling printMe function

//array of objects

const languages = [
    {
        languageName: "Java",
        LanguageID: 12
    },
    {
        languageName: "JavaScript",
        LanguageID: 17
    },
    {
        languageName: "Python",
        LanguageID: 18
    },
    {
        languageName: "CPP",
        LanguageID: 19
    },
    {
        languageName: "ruby",
        LanguageID: 13
    }
]

languages.forEach((language) => {
    console.log(language.languageName)
})