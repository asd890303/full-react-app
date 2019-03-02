import * as React from "react";
import * as ReactDOM from "react-dom";
import HomeState from './states/home.state'

@MobxIsomorphic(HomeState)
class Home extends React.Component<>{
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <h1>hi</h1>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);