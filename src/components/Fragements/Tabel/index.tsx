import React from "react";
import { DataTable } from "../../../mocks/dataTable";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";


interface DataTableProps {
  data: DataTable[];
  onDelete: (id: number) => void;
}

const Tabel: React.FC<DataTableProps> = ({ data, onDelete }) => {
  return (
    <table className="table-auto w-full">
      <TableHeader />
      <TableBody data={data} onDelete={onDelete} />
    </table>
  );
};

export default Tabel;
