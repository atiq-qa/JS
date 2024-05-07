//const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//const value = week.forEach((item) => {
//    console.log(item)
//})

//console.log(value)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//using filter
//const number = numbers.filter((num) => num < 6)
//console.log(number)

//const number = numbers.filter((num) => {
//    return num > 5
//})
//console.log(number)

//using forEach loop

//const newNum = []
//numbers.forEach((num) => {
//    if (num < 5) {
//        newNum.push(num)
//    }
//})

//console.log(newNum)

const books = [
    {
        title: 'book one', genre: 'fiction', published: 1997, edition: 1997
    },
    {
        title: 'book two', genre: 'non-fiction', published: 1977, edition: 1988
    },
    {
        title: 'book three', genre: 'history', published: 1987, edition: 2014
    },
    {
        title: 'book four', genre: 'science', published: 1997, edition: 2001

    },
    {
        title: 'book five', genre: 'geologoy', published: 2002, edition: 2019
    },
    {
        title: 'book six', genre: 'history', published: 1988, edition: 2013
    }
]

//const userBooks = books.filter((book) => book.genre ==="history")
//const userBooks = books.filter((book) => {
//    return book.published >= 2000
//    })

const userBooks = books.filter((book) => {
    return book.genre === "history" || book.published > 2000
})

console.log(userBooks)