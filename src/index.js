import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { store } from "state/store";
import history from "utils/browserHistory";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HistoryRouter history={history}>
            <App />
        </HistoryRouter>
    </Provider>
);
reportWebVitals();
