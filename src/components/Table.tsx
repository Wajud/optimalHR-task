import { Book } from "../App";

const Table = ({ books, page }: any) => {
  return (
    <table className="">
      <thead className="border border-gray-300">
        <th className="font-normal w-[15%] text-center py-2 border-r border-gray-300">
          S/N
        </th>
        <th className="font-normal w-[15%] text-center py-2 border-r border-gray-300">
          Publisher
        </th>
        <th className="font-normal w-[15%] text-center py-2 border-r border-gray-300">
          Name
        </th>
        <th className="font-normal w-[15%] text-center py-2 border-r border-gray-300">
          ISBN
        </th>
        <th className="font-normal w-[15%] text-center py-2 border-r border-gray-300">
          Authors
        </th>
        <th className="font-normal w-[15%] min-w-fit text-center py-2">
          End Date
        </th>
      </thead>
      <tbody>
        {books.map((book: Book, index: number) => (
          <tr
            className="border border-gray-300 w-fit hover:bg-gray-100"
            key={index}
          >
            <td className="w-[15%] text-center py-2 border-r border-gray-300">
              {(page - 1) * 10 + index + 1}
            </td>
            <td className="w-[15%] text-center py-2 border-r border-gray-300">
              {book.publisher}
            </td>
            <td className="w-[15%] text-center py-2 border-r border-gray-300">
              {book.name}
            </td>
            <td className="w-[15%] text-center py-2 border-r border-gray-300">
              {book.isbn}
            </td>
            <td className="w-[15%] text-center py-2 border-r border-gray-300">
              {book.authors.join(", ")}
            </td>
            <td className="w-[15%] text-center py-2">
              {book.released.slice(0, 10)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
