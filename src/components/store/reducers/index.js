import { combineReducers } from "redux";
import reducerMovie from "./reducerMovies";

const rootReducer = combineReducers({
  infoMovies: reducerMovie,
});
export default rootReducer;
