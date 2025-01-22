import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

const Books = ({ books, page, changePage, staticBooks, setBooks }: any) => {
  return (
    <div>
      <Search staticBooks={staticBooks} setBooks={setBooks} />
      <Table books={books} page={page} />
      <Pagination changePage={changePage} />
    </div>
  );
};

export default Books;
