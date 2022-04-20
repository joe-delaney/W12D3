import { combineReducers } from "redux";
import { usersReducer } from "./users";
import benchesReducer from "./benches_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer
});

export default entitiesReducer;