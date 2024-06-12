import React from "react";
import { FaTrash } from "react-icons/fa";
import { DataTable } from "../../../mocks/dataTable";
import formatDate from "../../../utils/formatDate";

interface TableRowProps {
  data: DataTable;
  onDelete: (id: number) => void;
}

const TableRow: React.FC<TableRowProps> = ({ data, onDelete }) => {
  return (
    <tr key={data.id}>
      <td className="p-2 whitespace-nowrap">
        <div className="text-gray-800">{data.name}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left ml-6">{data.quantity}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left text-gray-800">{formatDate(data.date)}</div>
      </td>
      <td className="py-2 whitespace-nowrap">
        <div className="w-3/6 bg-gray-200 mx-auto rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
            style={{
              width: `${data.progres}%`,
              backgroundColor: "#3182CE",
            }}
          ></div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center flex justify-center">
          <FaTrash
            onClick={() => onDelete(data.id)}
            color="red"
            className="cursor-pointer hover:text-red-950"
          />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
