function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  // simplify the books array using .reduce and store the result in acc
 return books.reduce((acc, book) => (acc += (!book.borrows[0].returned)), 0) 
  
  // acc starts at 0
  // check if the first index of book.borrows has NOT been returned
    // add 1 to acc
}

function getMostCommonGenres(books) {
  //map the genres of the books array into a new variable called bookGenres
 const bookGenres = books.map((book) => book.genre)
 let result = []
 //map the bookGenres array into a new array containing the name and count
 bookGenres.map((genre) => {
   // for each genre, first check to see if the genre already exists in the results array
   const doesExist = result.findIndex((element) => element.name === genre)
   // if it exists, increase count by 1
   if (doesExist >= 0) {
     result[doesExist].count++
   }
   // otherwise, push a new genre object into the results array with the count of 1
   else {
     result.push({name: genre, count: 1})
   }
 })
  //sort the results array so that the count is displayed from high to low
  result.sort((result1, result2) => result2.count - result1.count)
  //limit the output to 5 results
  return result.slice(0, 5)
}

function getMostPopularBooks(books) {
  //using the map method, return a new array from the books array
  return books.map((book) => {
  //return the title of the given book, along with its borrow count
    return {name: book.title, count: book.borrows.length}
  }).sort((book1, book2) => book2.count - book1.count).slice(0, 5)
}

//this is a helper function, meant to be used in the following function to sort the most popular authors
function topFiveHelper(array) {
  return array.sort((obj1, obj2) => (obj2.count - obj1.count)).slice(0, 5)
  
}

function getMostPopularAuthors(books, authors) {
  //create an empty array variable called mostPopular
let mostPopular = []
//loop through the authors array
for (let author of authors) {
  //create a variable called authorName, containing the first and last name of the given author
  const authorName = `${author.name.first} ${author.name.last}`
  //create a count variable set to 0
  let count = 0
  //loop through the books array
  for (let book of books) {
  //if th authorId of a given book matches the id of a given author, increase the count variable by the number of borrows for the given book
    if (book.authorId === author.id) {
      count += book.borrows.length
    }
  }
  //create an authorObject variable with an object containing the name of the given author and the number of borrows for the given book
  const authorObject = {name: authorName, count: count}
  //push the authorObject variable into the mostPopular array
  mostPopular.push(authorObject)
} 
  //return the topFiveHelper function, with the mostPopular array as its argument
  return topFiveHelper(mostPopular)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
