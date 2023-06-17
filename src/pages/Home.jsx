import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const {
    bookData,

    wantToReadHandler,
    readHandler,
    currentlyReading,
    noneHandler,
  } = useContext(BookContext);
  const filterCurrentReadings = [...bookData].filter(
    ({ category }) => category === "Currently Reading"
  );
  const filterWantToRead = [...bookData].filter(
    ({ category }) => category === "Want to Read"
  );
  const filterRead = [...bookData].filter(
    ({ category }) => category === "Read"
  );

  return (
    <>
      <div>
        <NavLink to="/search">
          {" "}
          <button style={{ margin: "20px" }}>Search</button>
        </NavLink>
        <div>
          <h2>Currently Reading</h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: "20px",
              marginLeft: "450px",
            }}
          >
            {filterCurrentReadings?.map((allBooks) => {
              const { image, title, author, id } = allBooks;
              return (
                <li style={{ margin: "35px" }} key={id}>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src={image}
                    alt="book images"
                  />
                  <h3> {title} </h3>
                  <p>{author}</p>
                  <select>
                    <option disabled={true}>move to</option>
                    <option onClick={() => currentlyReading(id)}>
                      Currently Reading
                    </option>
                    <option onClick={() => wantToReadHandler(id)}>
                      Want to Read
                    </option>
                    <option onClick={() => readHandler(id)}>Read</option>
                    <option onClick={() => noneHandler(id)}>None</option>
                  </select>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Want to Read</h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: "20px",
              marginLeft: "450px",
            }}
          >
            {filterWantToRead?.map((allBooks) => {
              const { image, title, author, id } = allBooks;
              return (
                <li key={id} style={{ margin: "35px" }}>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src={image}
                    alt="book images"
                  />
                  <h3> {title} </h3>
                  <p>{author}</p>
                  <select>
                    <option disabled={true}>move to</option>
                    <option onClick={() => wantToReadHandler(id)}>
                      Want to Read
                    </option>
                    <option onClick={() => currentlyReading(id)}>
                      Currently Reading
                    </option>

                    <option onClick={() => readHandler(id)}>Read</option>
                    <option onClick={() => noneHandler(id)}>None</option>
                  </select>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Read</h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: "20px",
              marginLeft: "450px",
            }}
          >
            {filterRead?.map((allBooks) => {
              const { image, title, author, id } = allBooks;
              return (
                <li key={id} style={{ marginLeft: "35px" }}>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src={image}
                    alt="book images"
                  />
                  <h3> {title} </h3>
                  <p>{author}</p>
                  <select>
                    <option disabled={true}>move to</option>
                    <option onClick={() => readHandler(id)}>Read</option>
                    <option onClick={() => currentlyReading(id)}>
                      Currently Reading
                    </option>
                    <option onClick={() => wantToReadHandler(id)}>
                      Want to Read
                    </option>

                    <option onClick={() => noneHandler(id)}>None</option>
                  </select>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
