import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

export function getPeriodicExpenseById({ params }) {
  return params.periodicExpenseId;
}

const frequency = ["yearly", "monthly", "weekly", "daily"];

const PeriodicExpenseForm = () => {
  const dispatch = useDispatch();
  const periodicExpenseId = useLoaderData();
  const households = useSelector((state) => state.householdReducer.households);
  const expenseTypes = useSelector(
    (state) => state.expenseTypesReducer.expenseTypes
  );

  useEffect(() => {
    if (periodicExpenseId) console.log(periodicExpenseId);
  }, []);

  return (
    <div className="h-[90%] my-5 w-[80%] mx-auto">
      <form className="w-full h-full">
        <h3 className="text-center text-sky-500 font-bold text-xl">
          {periodicExpenseId ? "Edit" : "Add"} Periodic Expense
        </h3>
        <div className="block md:flex w-full my-3">
          <label
            htmlFor="household"
            className="flex flex-col md:w-[48%] mx-[1%] text-sm my-1"
          >
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
            className="flex flex-col md:w-[48%] mx-[1%] text-sm my-1"
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
        <div className="block md:flex w-full my-3">
          <label
            htmlFor="frequency"
            className="flex flex-col md:w-[48%] mx-[1%] text-sm my-1"
          >
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
          <label
            htmlFor="duedate"
            className="flex flex-col md:w-[48%] mx-[1%] text-sm my-1"
          >
            Select Due Date
            <input
              type="date"
              name="duedate"
              id="duedate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
            />
          </label>
        </div>
        <div className="block md:flex w-full my-3">
          <label
            htmlFor="amount"
            className={`flex flex-col  text-sm my-1 ${
              periodicExpenseId ? "md:w-[48%] mx-[1%]" : "w-full"
            }`}
          >
            Enter Amount
            <input
              type="text"
              name="amount"
              id="amount"
              pattern="[0-9]+"
              placeholder="Amount in ₹"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              placeholder:text-slate-700"
            />
          </label>
          {periodicExpenseId ? (
            <label
              htmlFor="paidThrough"
              className="flex flex-col md:w-[48%] mx-[1%] text-sm my-1"
            >
              Paid Through
              <input
                type="text"
                name="paidThrough"
                id="paidThrough"
                placeholder="Bank Name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              placeholder:text-slate-700"
              />
            </label>
          ) : (
            ""
          )}
        </div>

        <div className="block md:flex w-full my-3">
          <label
            htmlFor="description"
            className="w-full flex flex-col text-sm my-1"
          >
            Enter Description
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-700"
              placeholder="Description here..."
            ></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};

export default PeriodicExpenseForm;
