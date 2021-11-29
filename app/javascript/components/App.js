import axios from "axios";
import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import Books from "./Books";



const App = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);


  const getBooks = async () => {
    let response = await axios.get("/books");
    // console.log(response.data);
    setBooks(response.data);
  };


  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const updateBook = (book) => {
    let updatedBooks = books.map((b) => (b.id === book.id ? book : b));
    setBooks(updatedBooks);
  }


  return (
    <div style = {{border: '2px solid red', maxWidth: '800px', margin: "auto"}}>
      <h1>App component (SPA Here)</h1>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "New Book"}</button>
      {showNewForm && <BookForm addBook = {addBook}/>}
      {/* Book: React Component; books: name of the props; {books}: value, book state  */}
      <Books books = {books} updateBook = {updateBook}/>
    </div>
  );
};

export default App;