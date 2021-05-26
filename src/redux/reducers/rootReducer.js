import { combineReducers } from "redux";
import playerReducer from "./implementations/playerReducer";

const rootReducer = combineReducers({
  players: playerReducer,
});

export default rootReducer;
