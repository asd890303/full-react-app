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
                    <div className="loading">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <circle cx="16" cy="3" r="2.7289">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(45 16 16)" cx="16" cy="3" r="1.77009">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0.158257">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0.0867021">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0.829729">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(315 16 16)" cx="16" cy="3" r="2.28008">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                            <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                                <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                            </circle>
                        </svg>
                    </div>
                }
            </React.Fragment>
        );
    }
}
