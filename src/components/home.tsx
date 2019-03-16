import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';
import ReactLoading from "react-loading";
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

    componentDidMount() =>{
        this.props.store.initHomePage();
    }
    public render() {
        const {isLoading} = this.props.store;
        return (
            <React.Fragment>
              
              {
                 isLoading &&   <ReactLoading type={`SpinningBubbles`} color="#61DAFB" />
              }
                <button onClick={this.handleClick}>Click</button>
            </React.Fragment>
        );
    }
}
