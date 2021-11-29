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


  return (
    <div style = {{border: '2px solid red', maxWidth: '800px', margin: "auto"}}>
      <h1>App component (SPA Here)</h1>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "New Book"}</button>
      {showNewForm && <BookForm />}
      {/* Book: React Component; books: name of the props; {books}: value, book state  */}
      <Books books = {books} />
    </div>
  );
};

export default App;