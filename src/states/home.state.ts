import { action, computed, observable } from 'mobx';

import BaseState from './base.state';

export default class HomeState extends BaseState {
    @observable isLoading: boolean = true;

    constructor() {
    super();
    // this.priceAlertService = new PriceAlertService(this.applicationState);
  }
  
    @action.bound
    handleClick() {
        console.log("state handleClick");
    }
}