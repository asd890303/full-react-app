import * as React from 'react';
import ItemCell from '../moudle/ItemCell';

class ItemList extends React.Component<ItemCell> {
    constructor(props: ItemCell) {
        super(props);
    }

    public render() {
        return (
            <div className="itemcell">
                <div>
                    <p>
                        <a href={this.props.url}>{this.props.name}
                        </a>
                    </p>
                    <p>
                        {this.props.price}
                    </p>
                    <p>
                        {this.props.updated}
                    </p>
                </div>
            </div>
        );
    }
}

export default ItemList;
