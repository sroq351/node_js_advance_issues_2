import { useState } from "react";
import "./Book.css";

const Book = ({ book, handleEdit, handleDelete, handleBook }) => {
  const [value, setValue] = useState();
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <a data-toggle="modal" href="#portfolioModal1">
          <div>
            <i className="fas fa-plus fa-3x"></i>
          </div>

          <img
            className="img-fluid w-100"
            src={book.imageURL}
            alt={book.title}
            onClick={handleBook}
          />
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{book.title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {book.author}
          </div>
        </div>
        <div className="portfolio-caption">
          <textarea
            className=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => handleEdit(value)}
            type="button"
            className="btn btn-primary"
          >
            Edytuj
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-secondary"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
