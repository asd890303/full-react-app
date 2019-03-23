import * as React from "react";

import ReactLoading from "react-loading";
import { observer } from 'mobx-react';
import { string } from "prop-types";

interface IProps {
    alt?: string;
    className?: string;
    title?: string;
    url: string;
    onClick?: Function;
}

export class ItemImage extends React.Component<IProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        //do something
    }

    handleClick = (e: any) => {
        this.props.onClick(e);
    }

    render() {

        let {
            className,
            url,
            title,
            alt } = this.props;
        className = className ? className : '';
        return (
            <React.Fragment>
                <div className="item_img">
                    <img
                        className={`img ${className}`}
                        alt={alt}
                        title={title}
                        src={url}
                        onClick={this.handleClick}
                    ></img>
                </div>
            </React.Fragment>
        );
    }
}
