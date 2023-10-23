import "./App.css";
export function BookShelf({ children, title }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">{children}</div>
    </div>
  );
}
