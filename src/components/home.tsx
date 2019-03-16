import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';
import ReactLoading from "react-loading";
import Header from "./common/header";
import HomeState from "../states/home.state";
import Item from "./item/item";
import { clearObserving } from "mobx/lib/internal";

interface HomeProps {
    props: HomeState;
}

@inject("store")
@observer
export default class Home extends React.Component<any, any> {
    constructor(props: HomeProps) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.store.initHomePage();
    }

    handleClick = () => {
        this.props.store.handleClick();
    }

    componentDidMount() =>{
        this.props.store.initHomePage();
    }
    public render() {

        const {isLoading,itemList} = this.props.store;
      
        return (
            <React.Fragment>
            {
                 isLoading &&   <ReactLoading type={`SpinningBubbles`} color="#61DAFB" />
               }
               
                {itemList && itemList.length > 0 &&
                    itemList.map((item, index) => {
                        <Item item={item} />
                    })
                }
 
               
                <span>{this.props.store.text}</span>
                <button onClick={this.handleClick}>Click!</button>
            </React.Fragment>
        );
    }
}
