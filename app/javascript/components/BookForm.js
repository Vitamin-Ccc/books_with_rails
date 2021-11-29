import React from "react"

const BookForm = (props) => {
  const { id } = props;
  return (
    <div>
      <h1>{id ? "Edit" : "New"} Book Form</h1>
      <form>
        <p>Title</p>
        <input />
        <p>Author</p>
        <input />
        <button>{id ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}

export default BookForm