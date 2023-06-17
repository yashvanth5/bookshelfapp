import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import { NavLink } from "react-router-dom";

export const Search = () => {
  const {
    bookData,
    setBookData,
    noneHandler,
    wantToReadHandler,
    readHandler,
    currentlyReading,
    filteredBooks,
    setFilteredBooks,
  } = useContext(BookContext);

  const [searchBook, setSearchBook] = useState("");

  const searchHandler = () => {
    if (searchBook === "") {
      setFilteredBooks(bookData);
    } else {
      const updatedAllBooks = [...bookData].filter((book) =>
        book.title.toLowerCase().includes(searchBook.trim().toLowerCase())
      );
      setBookData(updatedAllBooks);
    }
  };

  useEffect(() => {
    searchHandler();
  }, [searchBook]);

  return (
    <>
      <div>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            marginRight: "1400px",
          }}
          to="/"
        >
          Go Back
        </NavLink>
        <h1>Find Books</h1>
        <input
          type="text"
          value={searchBook}
          placeholder=" Search for any book here..."
          onChange={(e) => setSearchBook(e.target.value)}
          onKeyPress={(e) => {
            if (e.which === 13) {
              searchHandler();
            }
          }}
        />
      </div>

      <div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: "20px",
              marginLeft: "10px",
              width: "50%",
            }}
          >
            {bookData.length > 0 ? (
              bookData.map((book) => (
                <li style={{ margin: "35px" }} key={book.id}>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src={book.image}
                    alt="book images"
                  />
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <select value={book.category}>
                    <option disabled={true}>move to</option>
                    <option
                      value="Currently Reading"
                      onClick={() => currentlyReading(book.id)}
                    >
                      Currently Reading
                    </option>
                    <option
                      value="Want to Read"
                      onClick={() => wantToReadHandler(book.id)}
                    >
                      Want to Read
                    </option>

                    <option value="Read" onClick={() => readHandler(book.id)}>
                      Read
                    </option>
                    <option onClick={() => noneHandler(book.id)}>None</option>
                  </select>
                </li>
              ))
            ) : (
              <h2>Search Any Book Here.....</h2>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
