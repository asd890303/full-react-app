/// <reference path="../../module/ItemBase.tsx" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

import ItemBase from "components/module/ItemBase";

interface ItemProps {
    item: ItemBase;
}

@inject("store")
@observer
export class Item extends React.Component<ItemProps, any> {
    constructor(props: ItemProps) {
        super(props);
        console.log(props);
    }

    public render() {
        return (
            <React.Fragment>
                <div> {this.props.item.id}</div>
            </React.Fragment>
        );
    }
}
