import React from "react"
import Book from "./Book"

const Books = (props) => {
  const {books, updateBook, deleteBook} = props;
  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
      <Book key = {book.id} {...book} updateBook = {updateBook} deleteBook = {deleteBook}/>
      // <div>
      //   <h1>{book.title}</h1>
      // </div>
      ))}
    </div>
  )
}

export default Books