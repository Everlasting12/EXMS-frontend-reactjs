import React from "react";

import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const TableData = ({ name, data, onEdit, onDelete, textProp, link }) => {
  return (
    <div className="h-[calc(100vh-150px)] w-full overflow-auto mt-4 ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="sticky top-0 text-white bg-[#3F7BDA] dark:bg-gray-700 dark:text-gray-400">
          <tr className="sticky top-0 font-nunito">
            <th
              scope="col"
              className="sticky top-0 w-10 py-2 px-6 font-extralight"
            >
              No.
            </th>
            <th scope="col" className="sticky top-0 py-2 px-6 font-extralight">
              {name}
            </th>
            <th scope="col" className="sticky top-0 py-2 px-6 font-extralight">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((d, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={d._id}
            >
              <td
                scope="row"
                className="w-10 py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {++index}.
              </td>
              <td
                scope="row"
                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {d[textProp]} {d.lastName}
              </td>
              <td className="py-2 px-6 flex ">
                <Link to={`${link}${d._id}`}>
                  <MdOutlineEdit
                    size={20}
                    className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100"
                  />
                </Link>

                <MdDeleteOutline
                  size={20}
                  className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100 ml-2"
                  onClick={() => onDelete(d._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
