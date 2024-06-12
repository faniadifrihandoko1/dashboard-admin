import React from "react";

const TableHeader: React.FC = () => {
  return (
    <thead className="text-sm font-ibold uppercase text-gray-400 border-b">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">NAME</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">QUANTITY</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">DATE</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">PROGRES</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">ACTION</div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
