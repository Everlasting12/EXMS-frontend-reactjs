import axios from "axios";
import { GET_ALL_PERIODIC_EXPENSE } from "./actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL_FEATHERS + "api/periodicpayments";


export const getAllPeriodicExpenseAction = () => (dispatch) =>
{
    axios.get(apiEndPoint).then(response => dispatch({
        type: GET_ALL_PERIODIC_EXPENSE,
        payload: { periodicExpenses: response.data.data }
    })).catch(error => console.log(error))
}

