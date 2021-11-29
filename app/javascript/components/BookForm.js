import axios from "axios";
import React, {useState} from "react";

const BookForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { id, addBook } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({title: title, author: author});
    const book = {title: title, author: author};
    let response = await axios.post("/books", book);
    console.log(response.data);

    addBook(response.data);
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