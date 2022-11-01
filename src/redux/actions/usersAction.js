import axios from "axios"
import * as actions from "./actionTypes"

const apiEndpoint = process.env.REACT_APP_API_URL_FEATHERS + "users/"
export const getAllUsersAction = (searchText) => (dispatch) =>
{
    axios.get(apiEndpoint + `?fullname=${ searchText }`)
        .then(response => dispatch({ type: actions.GET_ALL_USERS, payload: { users: response.data.data } })
        )
        .catch(error => console.log(error))
}

export const deleteUserAction = (userId) => (dispatch, getState) =>
{
    axios.delete(apiEndpoint + userId, {
        headers: {
            "Authorization": getState().loginReducer.token
        }
    }).then(response => dispatch({ type: actions.DELETE_USER, payload: { user: response.data } })
    ).catch(error => console.log(error))
}

export const getCurrentUserAction = (userId) => (dispatch) =>
{
    axios.get(apiEndpoint + userId).then(response => dispatch({
        type: actions.GET_CURRENT_USER,
        payload: { currentUser: response.data }
    })).catch(error => console.log(error))
}

export const updateUserAction = (data) => (dispatch, getState) =>
{
    const user = { ...data }
    delete user._id
    axios.patch(apiEndpoint + data._id, user, {
        headers: {
            "Authorization": getState().loginReducer.token
        }
    }).then(response => dispatch({
        type: actions.UPDATE_USER,
        payload: { user: response.data }
    })).catch(error => console.log(error))
}

// export const createUserAction = (data) => (dispatch) =>
// {
//     axios.post(apiEndpoint, data).then(response => dispatch({
//         type: actions.CREATE_USER, payload: { user: response.data }
//     })).catch(error => console.log(error))
// }

export const getAllUsersOfRoleMember = () => (dispatch) =>
{
    axios.get(apiEndpoint + "?role=member").then(response => dispatch({
        type: actions.GET_ALL_USERS_OF_MEMBER_ROLE,
        payload: { usersOfRoleMember: response.data.data }
    }))
}