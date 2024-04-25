const user = {
    username: "Atiq",
    price: 199,

    WelcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
    

}

//user.WelcomeMessage()
//user.username = "Sam"
//user.WelcomeMessage()

//console.log(this)


//function chai() {
//    let username = "Atiq"
//    //console.log(this)
//    console.log(this.username)
//}
//chai()

const chai = () => {
    let username = "hitesh"
    console.log(this)
}

// chai()

//const addTwo = (num1, num2) => {
//    return num1 + num2
//}

//console.log(addTwo(3, 4))

//const addThree = (n1, n2, n3) => (n1 + n2 + n3) //implicit return

//console.log(addThree(2,4,3))

const addThree = (n1, n2, n3) => ({ username: "Hitesh" })

console.log(addThree(2, 4, 3))