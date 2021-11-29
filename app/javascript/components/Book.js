import React from "react";
import BookForm from "./BookForm"

const Book = (props) => {
  const {title, author, id, updateBook} = props;
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
    </div>
  );
};

export default Book;