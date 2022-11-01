import React from "react";
import { useEffect } from "react";
import { MdDeleteOutline, MdOutlineEdit, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDailyExpenses } from "../redux/actions/dailyExpensesAction";

const DailyExpenses = () => {
  const dispatch = useDispatch();
  const dailyExpenses = useSelector(
    (state) => state.dailyExpenseReducer.dailyExpenses
  );
  const households = useSelector((state) => state.householdReducer.households);
  const expenseTypes = useSelector(
    (state) => state.expenseTypesReducer.expenseTypes
  );

  useEffect(() => {
    dispatch(getAllDailyExpenses());
  }, []);

  function getHouseholdDailyExpenses() {
    let array = [];
    let Atotal = 0;
    households.forEach((household) => {
      dailyExpenses.forEach((dailyExp) => {
        if (household._id === dailyExp.household) {
          const expenseType = expenseTypes.find(
            (exptype) => exptype._id === dailyExp.expensetype
          );
          array.push({
            ...dailyExp,
            householdName: household.name,
            expenseTypeName: expenseType?.name,
          });
          Atotal += dailyExp.paymentDetails.amount;
        }
      });
    });

    return { array, total: Atotal };
  }

  const handleDelete = (dailyExpenseId) => {
    console.log(dailyExpenseId);
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
        <span className="block px-2 py-1 rounded-md shadow">
          Total Daily Expenditure:{" "}
          <span className="text-red-500">
            ₹ {getHouseholdDailyExpenses().total}
          </span>
        </span>
        <div>
          <Link
            className="px-2 py-0 bg-[#3F7BDA] text-white rounded-full text-2xl shadow-md"
            to="dailyExpenseForm"
          >
            +
          </Link>
        </div>
      </div>
      {getHouseholdDailyExpenses().array.length === 0 ? (
        <span>No Daily Expenses in Database</span>
      ) : (
        <div className="h-[calc(100vh-150px)] w-full overflow-auto mt-4 ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sticky top-0">
            <thead className="sticky top-0 text-white bg-[#3F7BDA] dark:bg-gray-700 dark:text-gray-400">
              <tr className="sticky top-0 font-nunito">
                <th
                  scope="col"
                  className="sticky top-0 py-2 px-2 font-extralight"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="sticky top-0  py-2 px-2 font-extralight"
                >
                  Paid Date
                </th>
                <th
                  scope="col"
                  className="sticky top-0  py-2 px-2 font-extralight"
                >
                  Expense Type
                </th>
                <th
                  scope="col"
                  className="sticky  top-0 py-2 px-2 font-extralight"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="sticky top-0 py-2 px-2 font-extralight"
                >
                  Paid By
                </th>
                <th
                  scope="col"
                  className="sticky top-0 py-2 px-2 font-extralight"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-sm overflow-y-auto ">
              {getHouseholdDailyExpenses().array.map((de, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={de._id}
                >
                  <td
                    scope="row"
                    className=" py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* {index < 10 ? "0" + ++index : ++index}. */}
                    {++index}.
                  </td>
                  <td
                    scope="row"
                    className=" py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {new Date(de.paymentDetails.date).getDate() +
                      "/" +
                      new Date(de.paymentDetails.date).getMonth() +
                      "/" +
                      new Date(de.paymentDetails.date).getFullYear()}
                  </td>
                  <td
                    scope="row"
                    className=" py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {de.expenseTypeName}
                  </td>
                  <td
                    scope="row"
                    className=" py-2 px-2  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    title={de.description}
                  >
                    {de.description.substring(0, 15)}...
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {de.householdName}
                  </td>
                  <td className="py-2 px-2 flex text-black">
                    {/* <MdDeleteOutline
                      size={20}
                      className="text-[#3F7BDA] bg-slate-50 p-[5px] w-7 h-7 rounded-full cursor-pointer hover:bg-slate-100 focus:bg-slate-100 ml-2"
                      onClick={() => handleDelete(de._id)}
                    /> */}

                    {"₹ " + de.paymentDetails.amount}
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

export default DailyExpenses;
