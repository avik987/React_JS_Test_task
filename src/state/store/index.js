import { createLogicMiddleware } from "redux-logic";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import httpClient from "lib/httpClient";

import rootOperations from "./rootOperations";
import rootReducer from "./rootReduser";

const operationsDependencies = { httpClient };
const logicMiddleware = createLogicMiddleware(rootOperations, operationsDependencies);
export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(logicMiddleware) ));