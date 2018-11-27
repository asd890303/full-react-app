import * as React from 'react';
import MainProps from '../module/MainProps';
import ItemCell from './itemCell';

class ItemList extends React.Component<MainProps> {
    constructor(props: MainProps) {
        super(props);
    }

    public render() {
        return (
            <div className="itemlist">
                {this.props.itemList != null && this.props.itemList.map((item, index) => (
                    <ItemCell
                        {...item}
                        key={item.id}
                    />))}
            </div>
        );
    }
}

export default ItemList;
