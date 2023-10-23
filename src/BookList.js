import "./App.css";
import { Book } from "./Book";

export function BookList({ children }) {
  return <ol className="books-grid">{children}</ol>;
}
