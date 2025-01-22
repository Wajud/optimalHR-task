import { Book } from "../App";

const Search = ({ staticBooks, setBooks }: any) => {
  const searchBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const filteredBooks = staticBooks.filter(
      (book: Book) =>
        book.name.toLocaleLowerCase().includes(value) ||
        book.publisher.toLocaleLowerCase().includes(value) ||
        book.authors.join("").toLocaleLowerCase().includes(value) ||
        book.released.includes(value)
    );
    setBooks(filteredBooks);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      onChange={searchBook}
      className="block w-full max-w-[40rem] mx-auto mb-4 py-1 px-2 rounded-lg focus:outline-none border border-gray-100"
    />
  );
};

export default Search;
