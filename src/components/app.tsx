import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

import Home from "./home";
import HomeState from "../states/home.state";

const homeState = new HomeState();
const stores = {
    homeState
}

// useStrict(true);s
// window._____APP_STATE_____ = stores;
ReactDOM.render(
    <Provider store={homeState}>
        <Home />
    </Provider>,
    document.getElementById('root') as HTMLElement
)