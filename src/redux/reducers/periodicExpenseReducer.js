import { GET_ALL_PERIODIC_EXPENSE } from "../actions/actionTypes";

export const periodicExpenseReducer = (state = { periodicExpenses: [] }, action) =>
{
    switch (action.type)
    {
        case GET_ALL_PERIODIC_EXPENSE:
            return { ...state, periodicExpenses: action.payload.periodicExpenses }

        default:
            return state;
    }
}