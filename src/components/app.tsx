import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

import Home from "./home";
import HomeState from "../states/home.state";

const store = {
    HomeState
}

// useStrict(true);
// window._____APP_STATE_____ = stores;
ReactDOM.render(
    <Provider {...store}>
        <Home />
    </Provider>,
    document.getElementById('root') as HTMLElement
)