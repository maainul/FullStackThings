import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbook } from "./BookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const numberOfBooks = useSelector(
    (state) => state.booksReducer.books.length
  );

  function saveData(e) {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addbook(book));
    navigate("/show-books")
  }

  return (
    <>
      <div>AddBook</div>

      <form onSubmit={saveData}>
        <div>
          <label>Book Name</label>
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            placeholder="Enter Book Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBook;
