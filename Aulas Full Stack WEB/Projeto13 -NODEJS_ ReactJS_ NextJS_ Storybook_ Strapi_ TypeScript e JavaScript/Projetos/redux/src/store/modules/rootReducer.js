import { combineReducers } from "redux";

import reservar from "./reservar/reducer"
//exemplo:
//import users from "./users/reducer";

export default combineReducers({
    reservar,
    //user, // iria carregar todos.
})