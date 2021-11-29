import axios from "axios";
import React, {useState} from "react";

const BookForm = (props) => {
  const { id, addBook, title: initialTitle, author: initialAuthor, updateBook } = props;
  const [title, setTitle] = useState(initialTitle ? initialTitle : "");
  const [author, setAuthor] = useState(initialAuthor ? initialAuthor : "");

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log({title: title, author: author});
    const book = {title: title, author: author};

    if (id) {
      let response = await axios.put(`/books/${id}`, book);
      console.log(response.data);
      updateBook(response.data);
    }
    else{
      let response = await axios.post("/books", book);
      console.log(response.data);
      addBook(response.data);
    };
  };
  return (
    <div>
      <h1>{id ? "Edit" : "New"} Book Form</h1>
      <form onSubmit = {handleSubmit}>
        <p>Title</p>
        <input value = {title} onChange={(e) => setTitle(e.target.value)}/>
        <p>Author</p>
        <input value = {author} onChange={(e) => setAuthor(e.target.value)}/>
        <button>{id ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}

export default BookForm;