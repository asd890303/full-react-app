import * as React from "react";
import * as ReactDOM from "react-dom";

import { inject, observer, Provider } from 'mobx-react';
import { observable, action, computed } from 'mobx';

import HomeState from '../states/base.state';
import Header from "./common/header";

// @MobxIsomorphic(HomeState)

// @inject("HomeState")
// @observer
export class Home extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <h1>HHH</h1>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Provider store={HomeState}>
        <Home />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
