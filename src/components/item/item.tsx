/// <reference path="../../module/ItemBase.tsx" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

import ItemBase from "components/module/ItemBase";
import { ItemImage } from "../common/ItemImage";

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
        let { item } = this.props;

        return (
            <React.Fragment>
                <li className="item_cell">
                    <input value={this.props.item.id} type="hidden" />
                    <a href={item.url ? item.url : "javascript:void(0)"}>
                        <ItemImage url={item.imgUrl} />
                    </a>
                    <div className="item_info">
                        <ul>
                            <li className="item_title">
                                {item.name}
                            </li>
                            <li className="item_description item_price">
                                {`$`}{item.price}
                            </li>
                            <li className="item_description">
                                {item.site}
                            </li>
                            <li className="item_title">
                                {item.updated}
                            </li>
                        </ul>
                    </div>
                </li>
            </React.Fragment>
        );
    }
}
