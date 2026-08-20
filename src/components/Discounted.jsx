import React from "react";
import { books } from "../data";
import Book from "./Ui/Book";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            Discounted <span className="purple">Books</span>
          </div>
          <div className="book">
            {books.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
