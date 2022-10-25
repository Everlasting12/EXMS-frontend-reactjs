import axios from "axios"
import * as actions from "./actionTypes"

const apiEndpoint = process.env.REACT_APP_API_URL_FEATHERS + "users"

export const registerAction = (data) => async (dispatch) =>
{
    try
    {
        const response = await axios.post(apiEndpoint, data)
        dispatch({ type: actions.REGISTER_USER, payload: { token: response.data.accessToken } })
    }
    catch (error)
    {
        console.log(error)
    }
}