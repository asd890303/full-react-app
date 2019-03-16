import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Provider, inject, observer } from 'mobx-react';

@inject("store")
@observer
export class Header extends React.Component<any, any> {
  render() {
    return (
      <>
        <div className="header" data-view="header">
          <div className="header_logo">
            <a href="#">Market</a>
          </div>

          <div className="header_menu">
            <div className="header_refresh_btn">
              <a className="refresh_btn" href="javascript:void(0)" onClick={this.props.store.handleRefresh}>Refresh</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
