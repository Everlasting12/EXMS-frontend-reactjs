import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer"
import { expenseTypesReducer } from "./expenseTypesReducer"
import { usersReducer } from "./usersReducer"
import { householdReducer } from "./householdReducer"
import { membersReducer } from "./membersReducer"

export default combineReducers({
    loginReducer,
    expenseTypesReducer,
    usersReducer,
    householdReducer,
    membersReducer,
})