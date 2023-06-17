import { createContext, useEffect, useState } from "react";
import BookData from "../BookData";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    setBookData(BookData);
  }, []);

  const wantToReadHandler = (bookId) => {
    const updateParticularWantBook = [...bookData].map((book) => {
      if (book.id === bookId) {
        return { ...book, category: "Want to Read" };
      }
      return book;
    });

    setBookData(updateParticularWantBook);
  };

  const currentlyReading = (bookId) => {
    const updateParticularCurrBook = [...bookData].map((book) => {
      if (book.id === bookId) {
        return { ...book, category: "Currently Reading" };
      }
      return book;
    });
    setBookData(updateParticularCurrBook);
  };

  const readHandler = (bookId) => {
    const updateParticularReadBook = [...bookData].map((book) => {
      if (book.id === bookId) {
        return { ...book, category: "Read" };
      }
      return book;
    });
    setBookData(updateParticularReadBook);
  };

  const noneHandler = (bookId) => {
    const updateParticularReadBook = [...bookData].map((book) => {
      if (book.id === bookId) {
        return { ...book, category: "" };
      }
      return book;
    });
    setBookData(updateParticularReadBook);
  };
  return (
    <BookContext.Provider
      value={{
        bookData,
        setBookData,
        noneHandler,
        wantToReadHandler,
        readHandler,
        currentlyReading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
