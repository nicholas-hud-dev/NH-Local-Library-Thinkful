function findAuthorById(authors, id) {
  //loop through the authors array
for (let author in authors) {
  //if the given id matches the id of the given author, return the given author 
  if (authors[author].id === id) {
    return authors[author]
    }
  }   
}

function findBookById(books, id) {
  //loop through the books array
  for (let book of books) {
  //if the id of the given book matches the given id, return the given book
    if (book.id === id) {
      return book
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  //create an empty result array
  let result = []
  //using a variable called checked out, filter through the books array for books that have been checked out and have not been returned.
  const checkedOut = books.filter((book) => 
    book.borrows.length > 0 && book.borrows[0].returned === false) 
  //push the checkedOut variable into the result array
  result.push(checkedOut) 
  //using a variable called returned, filter through the books array for books that have been returned. push the returned variable into the result array
  const returned = books.filter((book) => book.borrows[0].returned === true) 
    result.push(returned)
  
// return the result array
    return result 
 }
     
/* alternate method that uses forEach instead of .filter
  let checkedOut = []
  let returned = []

  books.forEach(book => {
    if (book.borrows.length > 0 && book.borrows[0].returned === false) {
      checkedOut.push(book)
    } else {
      returned.push(book)
    }
  })

  return [checkedOut, returned]
}
*/

function getBorrowersForBook(book, accounts) {
  //using the map method, return a new array containing the borrows from the book array.
return book.borrows.map((account) => {
  //using the variable foundBorrower, search the accounts array for an id that matches the borrower id
  let foundBorrower = accounts.find(borrower => account.id === borrower.id )

  return {...foundBorrower, returned: account.returned}

}).slice(0, 10)
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
