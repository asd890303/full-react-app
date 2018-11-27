import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppProps from './moudle/AppProps';
import AppState from './moudle/AppState';
import Main from './component/main';
import Header from './component/header';

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <div>
               <p>React!</p>
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);