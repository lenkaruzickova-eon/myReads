import "./App.css";
import { BookList } from "./BookList";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";
import { OpenSearch } from "./OpenSearch";

import { update } from "./BooksAPI";

export function Library({ loadedLibrary, setLoadedLibrary }) {
  const currentlyReading = loadedLibrary.filter(
    (book) => book.shelf === "currentlyReading"
  );

  const wantToRead = loadedLibrary.filter(
    (book) => book.shelf === "wantToRead"
  );

  const read = loadedLibrary.filter((book) => book.shelf === "read");

  const bookShelfChanged = (book, newShelf) => {
    book.shelf = newShelf;
    setLoadedLibrary([...loadedLibrary]);
    update(book, book.shelf);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf title="Currently reading">
          <BookList>
            {currentlyReading.map((book) => (
              <Book
                key={book.id}
                author={(book.authors ?? []).join(", ")}
                title={book.title}
                backgroundImageUrl={book.imageLinks?.thumbnail}
                onBookShelfChange={(value) => bookShelfChanged(book, value)}
                shelf={book.shelf}
              />
            ))}
          </BookList>
        </BookShelf>
        <BookShelf title="Want to Read">
          <BookList>
            {wantToRead.map((book) => (
              <Book
                key={book.id}
                author={(book.authors ?? []).join(", ")}
                title={book.title}
                backgroundImageUrl={book.imageLinks?.thumbnail}
                onBookShelfChange={(value) => bookShelfChanged(book, value)}
                shelf={book.shelf}
              />
            ))}
          </BookList>
        </BookShelf>
        <BookShelf title="Read">
          <BookList>
            {read.map((book) => (
              <Book
                key={book.id}
                author={(book.authors ?? []).join(", ")}
                title={book.title}
                backgroundImageUrl={book.imageLinks?.thumbnail}
                onBookShelfChange={(value) => bookShelfChanged(book, value)}
                shelf={book.shelf}
              />
            ))}
          </BookList>
        </BookShelf>
      </div>
      <OpenSearch />
    </div>
  );
}
