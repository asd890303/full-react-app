import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';

import HomeState from "../states/home.state";
import { Item } from "./item/item";
import { LazyLoading } from "./common";

interface HomeProps {
    props: HomeState;
}

@inject("store")
@observer
export default class Home extends React.Component<any, any> {
    constructor(props: HomeProps) {
        super(props);
    }

    handleClick = () => {
        this.props.store.handleClick();
    }

    componentDidMount = () => {
        this.props.store.initHomePage();
    }

    public render() {

        const { isLoading, itemList, timeState } = this.props.store;

        return (
            <React.Fragment>
                <div className="content">
                    <LazyLoading isLoading={isLoading} />
                    {itemList && itemList.length > 0 &&
                        <div className="item_list">
                            <ul>
                                {itemList.map((item, index) => {
                                    return <Item item={item} />
                                })}
                            </ul>
                        </div>
                    }
                    <div className="updated">
                        <span>{timeState}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
