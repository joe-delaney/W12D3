import { SessionReducer } from "./session";
import entitiesReducer from "./entities";
import errorsReducer from "./errors";
import { combineReducers } from "redux";
import filterReducer from "./filter_reducer";

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  filters: filterReducer,
  errors: errorsReducer
});