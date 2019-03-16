import * as React from "react";

import ReactLoading from "react-loading";
import { observer } from 'mobx-react';

interface IProps {
    className?: string;
    isLoading: boolean;
}

export class LazyLoading extends React.Component<IProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        //do something
    }

    render() {

        let { className, isLoading } = this.props;
        className = className ? className : '';
        return (
            <React.Fragment>
                {
                    isLoading &&
                    <ReactLoading
                        className={`loading ${className}`}
                        type="spinningBubbles"
                        color="#A7A7A7" />
                }
            </React.Fragment>
        );
    }
}
