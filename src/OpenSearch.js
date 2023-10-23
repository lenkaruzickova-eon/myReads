import { Link } from "react-router-dom";
import "./App.css";
export function OpenSearch() {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
}
