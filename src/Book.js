import "./App.css";
export function Book({
  title,
  author,
  backgroundImageUrl,
  onBookShelfChange,
  shelf,
}) {
  return (
    <li className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: backgroundImageUrl
              ? `url("${backgroundImageUrl}")`
              : "",
          }}
        ></div>
        <ShelfChanger onBookShelfChange={onBookShelfChange} shelf={shelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </li>
  );
}

function ShelfChanger({ onBookShelfChange, shelf }) {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => onBookShelfChange?.(e.target.value)}
        value={shelf ?? "none"}
      >
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
