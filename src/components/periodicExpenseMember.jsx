import React from "react";
import { MdDeleteOutline, MdOutlineEdit, MdSearch } from "react-icons/md";

const PeriodicExpenseMember = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <div className="w-1/3 flex items-center shadow rounded-lg overflow-clip px-3">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="px-2 py-2 outline-none text-sm placeholder:text-xs placeholder:text-slate-700 w-full"
          />
          <MdSearch className="cursor-pointer rounded-full text-[#3F7BDA] text-xl" />
        </div>
        <div>
          <button className="w-9 h-9 bg-[#3F7BDA] text-white rounded-full text-3xl shadow-md">
            +
          </button>
        </div>
      </div>
      {/* Expense Type Table */}

      <div className="overflow-x-auto relative mt-4">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm  text-white bg-[#3F7BDA] dark:bg-gray-700 dark:text-gray-400">
            <tr className="font-nunito">
              <th scope="col" className="py-2 px-6 font-extralight">
                No.
              </th>
              <th scope="col" className="py-2 px-6 font-extralight">
                Expense Types
              </th>
              <th scope="col" className="py-2 px-6 font-extralight">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {expenseTypes.map((expenseType, index) => ( */}
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              // key={expenseType._id}
            >
              <th
                scope="row"
                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {/* {++index}. {expenseType.name} */}
              </th>
              <td className="py-2 px-6 flex ">
                <MdOutlineEdit
                  size={20}
                  className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100"
                  // onClick={() => handleEdit(expenseType._id)}
                />
                <MdDeleteOutline
                  size={20}
                  className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100 ml-2"
                  // onClick={() => handleDelete(expenseType._id)}
                />
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeriodicExpenseMember;
