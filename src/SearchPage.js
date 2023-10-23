import { Book } from "./Book";
import { useEffect, useState } from "react";
import { search, update, getAll } from "./BooksAPI";
import { Link } from "react-router-dom";
import { BookList } from "./BookList";

export function SearchPage({ loadedLibrary, setLoadedLibrary }) {
  const [query, setQuery] = useState("");
  const [foundBooks, setFoundBooks] = useState([]);

  const processedQuery = query.trim().toLowerCase();

  useEffect(() => {
    const loadBook = async () => {
      if (!processedQuery) {
        setFoundBooks([]);
        return;
      }
      const loadedBooks = await search(processedQuery, 25);
      if (loadedBooks.error) {
        setFoundBooks([]);
      } else {
        setFoundBooks(loadedBooks);
      }
    };
    loadBook();
  }, [processedQuery]);

  const bookShelfChanged = async (book, newShelf) => {
    await update(book, newShelf);
    const loadedBooks = await getAll();
    setLoadedLibrary(loadedBooks);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList>
          {foundBooks.map((book) => (
            <Book
              key={book.id}
              author={(book.authors ?? []).join(", ")}
              title={book.title}
              backgroundImageUrl={book.imageLinks?.thumbnail}
              shelf={
                loadedLibrary.find((libraryBook) => libraryBook.id === book.id)
                  ?.shelf
              }
              onBookShelfChange={(value) => bookShelfChanged(book, value)}
            />
          ))}
        </BookList>
      </div>
    </div>
  );
}
