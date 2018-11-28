import * as React from "react";
import * as ReactDOM from "react-dom";
import AppProps from './module/AppProps';
import AppState from './module/AppState';
import Main from './common/main';
import Header from './common/header';

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <div>
             <Header />
             <Main />
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);