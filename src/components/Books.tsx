import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

const Books = ({ books, page, changePage, fbooks, setBooks }: any) => {
  return (
    <div>
      <Search fbooks={fbooks} setBooks={setBooks} />
      <Table books={books} page={page} />
      <Pagination changePage={changePage} />
    </div>
  );
};

export default Books;
