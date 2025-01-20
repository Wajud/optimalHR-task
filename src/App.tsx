import { useState, useEffect } from "react";
import Books from "./components/Books";
export interface Book {
  publisher: string;
  authors: string[];
  country: string;
  isbn: string;
  mediaType: string;
  name: string;
  released: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [fbooks, setFBooks] = useState<Book[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [uri, setUri] = useState<string>(
    "https://www.anapioficeandfire.com/api/books"
  );

  let link: string = "https://www.anapioficeandfire.com/api/books";

  const changePage = (action: string) => {
    if (action === "next") {
      setPageNumber((pageNumber) => pageNumber + 1);
      link += `?page=${pageNumber}`;
      setUri(link);
    } else {
      if (pageNumber === 1) {
        link = "https://www.anapioficeandfire.com/api/books";
        return;
      }
      setPageNumber((pageNumber) => pageNumber - 1);
      console.log(pageNumber);
      link += `?page=${pageNumber}`;
      setUri(link);
    }
  };

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          return;
        }
        setBooks(data);
        setFBooks(data);
      })
      .catch((err) => console.log(err));
  }, [uri]);

  return (
    <div className="px-8 py-4">
      {books.length > 0 ? (
        <Books
          books={books}
          page={pageNumber}
          changePage={changePage}
          fbooks={fbooks}
          setBooks={setBooks}
        />
      ) : (
        <p className="w-full h-screen flex items-center justify-center text-2xl">
          Getting Books
        </p>
      )}
    </div>
  );
}

export default App;
