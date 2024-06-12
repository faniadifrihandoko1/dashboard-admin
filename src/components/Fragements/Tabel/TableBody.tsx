import React, { useContext } from "react";
import { DataTable } from "../../../mocks/dataTable";
import TableRow from "./TableRow";
import SearchContext from "../../../context/searchContext";

interface TableBodyProps {
  data: DataTable[];
  onDelete: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ data, onDelete }) => {
  const { search } = useContext(SearchContext);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <tbody className="text-sm divide-y divide-gray-100 font-semibold relative">
      {search === "" || search.trim() === ""
        ? data.map((value: DataTable) => (
            <TableRow key={value.id} data={value} onDelete={onDelete} />
          ))
        : filteredData.map((value: DataTable) => (
            <TableRow key={value.id} data={value} onDelete={onDelete} />
          ))}
    </tbody>
  );
};

export default TableBody;
