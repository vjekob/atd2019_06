import { createStore, combineReducers } from "redux";
import { simpler } from "./simpler.reducer";

export const store = createStore(
    combineReducers({
        simpler
    })
);
