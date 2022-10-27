import React from "react";
import { useSelector } from "react-redux";

const frequency = ["yearly", "monthly", "weekly", "daily"];
const PeriodicExpenseForm = () => {
  const households = useSelector((state) => state.householdReducer.households);
  const expenseTypes = useSelector(
    (state) => state.expenseTypesReducer.expenseTypes
  );
  console.log({ households, expenseTypes });
  return (
    <div className="h-[90%] my-5 w-[80%] mx-auto">
      <form>
        <h3 className="text-center text-sky-500 font-bold text-xl">
          Add Periodic Expense
        </h3>
        <div className="flex w-full my-3">
          <label htmlFor="household" className="flex flex-col w-[48%] mx-[1%]">
            Select Household
            <select
              name="household"
              id="household"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            >
              <option value="">Select Household</option>
              {households.map((house) => {
                return (
                  <option value={house._id} key={house._id}>
                    {house.name}
                  </option>
                );
              })}
            </select>
          </label>
          <label
            htmlFor="expenseType"
            className="flex flex-col w-[48%] mx-[1%]"
          >
            Select Expense Type
            <select
              name="expenseType"
              id="expenseType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            >
              <option value="">Select Expense Type</option>
              {expenseTypes.map((expenseType) => {
                return (
                  <option value={expenseType._id} key={expenseType._id}>
                    {expenseType.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        {/*  */}
        <div className="flex w-full my-3">
          <label htmlFor="frequency" className="flex flex-col w-[48%] mx-[1%]">
            Select Frequency
            <select
              name="frequency"
              id="frequency"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            >
              <option value="">Select Frequency</option>
              {frequency.map((freq) => {
                return (
                  <option value={freq} key={freq}>
                    {freq}
                  </option>
                );
              })}
            </select>
          </label>
          <label htmlFor="duedate" className="flex flex-col w-[48%] mx-[1%]">
            Select Due Date
            <input
              type="date"
              name="duedate"
              id="duedate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default PeriodicExpenseForm;
