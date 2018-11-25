import * as React from 'react';
import './content/css/App.css';
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
               React!
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);


// <Header />
// <Main />