import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Library } from "./LibraryPage";
import { SearchPage } from "./SearchPage";
import { getAll } from "./BooksAPI";
import { useState, useEffect } from "react";

function App() {
  const [loadedLibrary, setLoadedLibrary] = useState([]);

  useEffect(() => {
    const loadingLibrary = async () => {
      const loadedBooks = await getAll();
      setLoadedLibrary(loadedBooks);
    };
    loadingLibrary();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Library
              loadedLibrary={loadedLibrary}
              setLoadedLibrary={setLoadedLibrary}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              loadedLibrary={loadedLibrary}
              setLoadedLibrary={setLoadedLibrary}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
