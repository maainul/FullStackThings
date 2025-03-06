import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletebook } from "./BookSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispath = useDispatch();

  const handleBookDelete = (id) => {
    dispath(deletebook(id));
  };

  const handleBookEdit = (id) => {
    dis;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to="/edit-book" state={{ id, title, author }}>
                    <button onClick={() => handleBookEdit(book.id)}>
                      Edit
                    </button>
                  </Link>
                  <button onClick={() => handleBookDelete(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
