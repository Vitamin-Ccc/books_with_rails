import React from "react";
import BookForm from "./BookForm"

const Book = (props) => {
  const {title, author, id, updateBook, deleteBook} = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>Author: {author}</p>
      <hr />
      <BookForm 
        id = {id} 
        title = {title} 
        author = {author}
        updateBook = {updateBook}
      />
      <hr />
      <button onClick = {() => deleteBook(id)}>DELETE</button>
    </div>
  );
};

export default Book;