import { createStore } from "redux";
import { reduder } from "./reducers.js/reducers";

export const store=createStore(reduder)