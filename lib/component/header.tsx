import * as React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
  public render() {
    return (
      <div className="App">
        < header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
