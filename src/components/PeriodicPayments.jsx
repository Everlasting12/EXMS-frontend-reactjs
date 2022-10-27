import React from "react";
import { useEffect } from "react";
import { MdDeleteOutline, MdOutlineEdit, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPeriodicExpenseAction } from "../redux/actions/periodicExpenseAction";

const PeriodicPayments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPeriodicExpenseAction());
  }, []);

  const periodicExpenses = useSelector(
    (state) => state.periodicExpenseReducer.periodicExpenses
  );
  const households = useSelector((state) => state.householdReducer.households);
  const expenseTypes = useSelector(
    (state) => state.expenseTypesReducer.expenseTypes
  );

  function getPeriodicExpensesPerHouseholds() {
    let array = [];
    households.forEach((h, index) => {
      periodicExpenses.forEach((pe, index) => {
        if (pe.household === h._id) {
          const expenseType = expenseTypes.find(
            (et) => et._id === pe.expensetype
          );
          if (expenseType) {
            array.push({
              ...pe,
              expensetype: expenseType.name,
              expenseTypeId: expenseType._id,
            });
          }
        }
      });
    });
    return array;
  }

  const handleDelete = (periodicExpenseId) => {
    console.log(periodicExpenseId);
  };
  return (
    <>
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
          <Link
            className="px-2 py-0 bg-[#3F7BDA] text-white rounded-full text-2xl shadow-md"
            to="periodicExpenseForm"
          >
            +
          </Link>
        </div>
      </div>
      {getPeriodicExpensesPerHouseholds().length === 0 ? (
        <span>No Periodic Expenses in Database</span>
      ) : (
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
                <th
                  scope="col"
                  className="sticky top-0 py-2 px-6 font-extralight"
                >
                  Expense Type
                </th>
                <th
                  scope="col"
                  className="sticky top-0 py-2 px-6 font-extralight"
                >
                  Paid By
                </th>
                <th
                  scope="col"
                  className="sticky top-0 py-2 px-6 font-extralight"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {getPeriodicExpensesPerHouseholds().map((pe, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={pe._id}
                >
                  <td
                    scope="row"
                    className="w-10 py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {++index}
                  </td>
                  <td
                    scope="row"
                    className="w-10 py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {pe.expensetype}
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {pe.paidBy}
                  </td>
                  <td className="py-2 px-6 flex ">
                    <Link to={`periodicExpenseForm/${pe._id}`}>
                      <MdOutlineEdit
                        size={20}
                        className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100"
                      />
                    </Link>

                    <MdDeleteOutline
                      size={20}
                      className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100 ml-2"
                      onClick={() => handleDelete(pe._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PeriodicPayments;