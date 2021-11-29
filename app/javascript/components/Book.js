import React from "react";

const Book = (props) => {
  const {title, author} = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>Author: {author}</p>
    </div>
  );
};

export default Book;