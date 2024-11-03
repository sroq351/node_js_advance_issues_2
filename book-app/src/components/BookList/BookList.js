import React from "react";
import Book from "../Book/Book";
import "./BookList.css";
import { useState, useEffect } from "react";
import {
  fetchAllBooks,
  fetchBookById,
  createBook,
  deleteBook as fechDeleteBook,
  editBook,
} from "../../services/books";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  const getAllBooks = async () => {
    const data = await fetchAllBooks();
    if (data.length === 0) {
      setBooks(data);
    } else {
      setBooks(data.data);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  const getBookDetails = (book) => {
    fetchBookById(book._id).then(({ data }) => console.log(data));
  };

  const handleAddBook = async () => {
    try {
      const response = await createBook(JSON.parse(newBook));
      setBooks([...books, response.data.data]);
    } catch {
      console.error("Error adding book");
    }
  };

  const deleteBook = async (id) => {
    try {
      await fechDeleteBook(id);
      await getAllBooks();
    } catch {
      console.error("Error deleting book");
    }
  };
  const updateBook = async (id, value) => {
    try {
      await editBook(id, JSON.parse(value));
      await getAllBooks();
    } catch {
      console.error("Error updating book");
    }
  };
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Moje ulubione książki
          </h3>
          <div>
            <h3 className="section-subheading text-muted">
              Dodaj nową książkę
            </h3>
            <textarea
              className=""
              value={newBook}
              onChange={(e) => setNewBook(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddBook}>
              Dodaj
            </button>
          </div>
        </div>
        <div className="row">
          {books.map((book, index) => {
            return (
              <Book
                book={book}
                key={index}
                handleBook={() => getBookDetails(book)}
                handleEdit={(value) => updateBook(book._id, value)}
                handleDelete={() => deleteBook(book._id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
