import React from "react";
import Layout from "../layout";
import dataTable, { DataTable } from "../mocks/dataTable";
import Tabel from "../components/Fragements/Tabel";
import { MdOutlineAddCircle } from "react-icons/md";
import ModalForm from "../components/Fragements/ModalForm";

export default function TablePages() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<DataTable[]>(dataTable);
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div
        className={`w-full max-w-2xl md:max-w-full mx-auto ${
          open ? "blur-background" : ""
        }  bg-white shadow-lg rounded-xl border   border-gray-200 `}
      >
        <ModalForm
          setOpen={setOpen}
          open={open}
          data={data}
          setData={setData}
        />

        <header className={` px-5 py-4   flex justify-between  items-center`}>
          <h2 className="font-bold text-gray-800 text-2xl">
            Development Table
          </h2>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="text-gray-800 text-sm mr-0 md:mr-8 py-2 px-2 flex gap-1 items-center bg-[#d9e2f6] rounded-md hover:bg-[#b4c2f4] cursor-pointer"
            >
              <MdOutlineAddCircle size={20} color="#2563EB" />
              <h1 className="text-[#2563EB] font-semibold">Add</h1>
            </div>
          </div>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <Tabel data={data} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
