import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

import Header from "./common/header";
import HomeState from "../states/home.state";

interface HomeProps {
    store: HomeState;
}
// @inject("store")
@observer
export default class Index extends React.Component<any, any> {
    constructor(props: HomeProps) {
        super(props);
        console.log(props);
    }

    handleClick = () => {
        // this.props.store.prototype.handleClick();
        this.props.store.handleClick();
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <button onClick={this.handleClick}>Click</button>
            </React.Fragment>
        );
    }
}
