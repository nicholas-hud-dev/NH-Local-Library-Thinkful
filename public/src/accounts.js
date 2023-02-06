function findAccountById(accounts, id) {
  // Search the accounts array for an id that matches the input id
   return accounts.find(account => account.id === id);
  }

function sortAccountsByLastName(accounts) {
  //using a ternary operator, sort the last names in the accounts array in alphabetical order
  accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1)
   return accounts
}

function getTotalNumberOfBorrows(account, books) {
  //loop through the books array, and return the number of borrows of a given book
  for (let i = 0; i < books.length; i++) {
   let book = books[i]
   return book.borrows.length
  }
}

  //this is a helper function, meant to be used in the next function.
function addAuthorHelper (authors, books) {
  //loop through the books array
  for ( let i = 0; i < books.length; i++) {    
  //loop through the authors array
    for ( let j = 0; j < authors.length; j++) { 
      //if the authorId of the given book matches the id of the given author, add the matching author information to the given book 
    if ( books[i].authorId === authors[j].id) { 
      books[i].author = authors[j] 
    }
  }
    }
    return books
  }

function getBooksPossessedByAccount(account, books, authors) {
  //using the reduce method, create an accumulator variable.
  let result = books.reduce((acc, book) => {
    //loop through the number of borrows of the books array
    for (let i = 0; i < book.borrows.length; i++) {
      //If the id of a book's borrows matches the id of the given account, and the book has been returned, push the book into the accumulator variable
      if ( book.borrows[i].id === account.id && book.borrows[i].returned === false) {
      acc.push(book)
    }
    } return acc 
    }, [])
  //Use the previous function as a helper, to add matching author information to the given book
    let author = addAuthorHelper(authors, result)
return author
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
